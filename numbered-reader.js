/* Number-first reader. Source Markdown remains the single authority. */
(function(){
 'use strict';
 const settings={
   foundations:{count:50,heading:/^###\s+(\d{2})\.\s+(.+)$/,boundary:/^#{1,3}\s+/,label:'50 foundations'},
   twentyfive:{count:25,heading:/^###\s+K(\d{2})\s*[—–-]\s*(.+)$/,boundary:/^#{1,3}\s+/,label:'25 key findings'},
   six:{count:6,heading:/^##\s+P([1-6])\s*[—–-]\s*(.+)$/,boundary:/^#{1,2}\s+/,label:'Six propositions'},
   fiftysix:{count:56,line:/^(\d{1,2})\\?\.\s+\*\*(.+?)\*\*\s*(.*)$/,label:'56 matters for examination'}
 };
 function extract(source,key){
   const cfg=settings[key];if(!cfg)return null;
   const lines=source.replace(/\r\n/g,'\n').split('\n'),items=[];
   for(let i=0;i<lines.length;i++){
     const match=lines[i].match(cfg.heading||cfg.line);if(!match)continue;
     let end=i+1,body;
     if(cfg.heading){
       while(end<lines.length&&!cfg.boundary.test(lines[end]))end++;
       body=lines.slice(i+1,end).join('\n').trim();
     }else{
       while(end<lines.length&&lines[end].trim()&&!cfg.line.test(lines[end])&&!/^#{1,6}\s/.test(lines[end]))end++;
       body=[match[3].replace(/^[—–-]\s*/,''),...lines.slice(i+1,end)].join('\n').trim();
     }
     items.push({number:Number(match[1]),title:match[2].trim(),body});
     i=end-1;
   }
   if(items.length!==cfg.count||items.some((item,i)=>item.number!==i+1||!item.body))return null;
   return items;
 }
 function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node}
 function mount(root,key,source){
   const items=extract(source,key);if(!items||!window.marked||!window.DOMPurify)return false;
   const cfg=settings[key],aliases=new Map();
   // Preserve existing document-specific section links as well as new #point-N links.
   const headingPatterns={
     foundations:/^(\d{2})\.\s/,
     twentyfive:/^K(\d{2})\s*[—–-]/,
     six:/^P([1-6])\s*[—–-]/
   };
   const pattern=headingPatterns[key];
   if(pattern)root.querySelectorAll('h2,h3').forEach(h=>{
     const m=h.textContent.trim().match(pattern);
     if(m&&h.id){aliases.set(h.id,Number(m[1]));h.removeAttribute('id')}
   });
   // Keep the complete rendered source, including every preface, grouping and appendix,
   // as an optional continuous reading/printing view. Never rewrite the source file.
   const full=el('details','number-full');const fullSummary=el('summary','', 'Full document, notes and sources');
   const fullBody=el('div','number-full-body');
   while(root.firstChild)fullBody.append(root.firstChild);
   full.append(fullSummary,fullBody);
   const index=el('nav','number-index');index.id='numbers';index.setAttribute('aria-label','Numbered contents');
   const hint=el('p','number-hint','Choose any number to read that item.');
   const grid=el('div','number-grid');
   const titles=el('details','number-titles'),titleList=el('div','number-title-list');
   titles.append(el('summary','','Browse by title'),titleList);
   const panel=el('section','number-panel');panel.hidden=true;panel.setAttribute('aria-label','Selected item');
   const count=el('div','number-count');
   const heading=el('h2','number-heading');heading.tabIndex=-1;
   const body=el('div','number-body');
   const controls=el('nav','number-controls');controls.setAttribute('aria-label','Item navigation');
   const previous=el('a','number-previous','← Previous'),back=el('a','number-back','All numbers'),next=el('a','number-next','Next →');
   back.href='#numbers';controls.append(previous,back,next);
   const topBack=el('a','number-top-back','← All numbers');topBack.href='#numbers';
   panel.append(topBack,count,heading,body,controls);
   const numberLinks=[];
   items.forEach(item=>{
     const link=el('a','number-link',String(item.number));link.href='#point-'+item.number;link.title=item.title;
     link.setAttribute('aria-label',item.number+'. '+item.title);grid.append(link);numberLinks.push(link);
     const titleLink=el('a','',item.number+'. '+item.title);titleLink.href=link.href;titleList.append(titleLink);
   });
   index.append(hint,grid,titles);
   root.append(index,panel,full);
   root.classList.add('numbered-index-reader');
   document.body.classList.add('numbered-page');
   const title=document.getElementById('title');if(title)title.textContent=cfg.label;
   let selected=0;
   function setItem(n,scroll){
     const item=items[n-1];if(!item)return;
     selected=n;panel.hidden=false;
     count.textContent='Item '+n+' of '+items.length;
     heading.textContent=n+'. '+item.title;
     body.innerHTML=window.DOMPurify.sanitize(window.marked.parse(item.body),{USE_PROFILES:{html:true}});
     previous.hidden=n===1;next.hidden=n===items.length;
     previous.href='#point-'+Math.max(1,n-1);next.href='#point-'+Math.min(items.length,n+1);
     numberLinks.forEach((a,i)=>{if(i===n-1)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
     titles.open=false;
     if(scroll)requestAnimationFrame(()=>{heading.focus({preventScroll:true});panel.scrollIntoView({block:'start'})});
   }
   function showIndex(scroll){
     panel.hidden=true;selected=0;numberLinks.forEach(a=>a.removeAttribute('aria-current'));
     if(scroll)requestAnimationFrame(()=>index.scrollIntoView({block:'start'}));
   }
   function readHash(scroll){
     let id;try{id=decodeURIComponent(location.hash.slice(1))}catch(e){return}
     const m=id.match(/^point-(\d+)$/),n=m?Number(m[1]):aliases.get(id);
     if(n&&items[n-1]){setItem(n,scroll);return}
     if(!id||id==='numbers'){showIndex(scroll&&id==='numbers');return}
     const target=document.getElementById(id);
     if(target&&fullBody.contains(target)){full.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}
   }
   root.addEventListener('click',event=>{
     const a=event.target.closest('a');if(!a)return;
     const href=a.getAttribute('href');
     if(href&&href===location.hash&&(href==='#numbers'||/^#point-\d+$/.test(href))){
       event.preventDefault();readHash(true);
     }
   });
   window.addEventListener('hashchange',()=>readHash(true));
   let printWasOpen=false;
   window.addEventListener('beforeprint',()=>{printWasOpen=full.open;full.open=true});
   window.addEventListener('afterprint',()=>{full.open=printWasOpen});
   readHash(Boolean(location.hash));
   return true;
 }
 window.NumberedReader={mount,extract};
})();
