/* Origami navigation: semantic details / summary, source headings retained, no external dependencies. */
(function(){
 'use strict';
 function headingSlug(value){return (value||'section').toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').slice(0,75)||'section'}
 function visibleSections(root){return Array.from(root.querySelectorAll('details.origami-section'))}
 function controls(root){
  if(root.querySelector(':scope > .fold-controls'))return;
  var bar=document.createElement('div');bar.className='fold-controls';
  bar.setAttribute('aria-label','Reading controls');
  [['Unfold all',true],['Fold all',false]].forEach(function(item){
   var b=document.createElement('button');b.type='button';b.className='fold-button';b.textContent=item[0];
   b.addEventListener('click',function(){root.querySelectorAll('details.origami-section,details.origami-issue').forEach(function(d){d.open=item[1]});});
   bar.append(b);
  });
  root.insertBefore(bar,root.firstChild);
 }
 function foldHeadingGroup(root,level){
  var headings=Array.from(root.children).filter(function(node){return node.tagName==='H'+level;});
  headings.forEach(function(h){
   if(h.closest('details.origami-section'))return;
   var d=document.createElement('details');d.className='origami-section'+(level===3?' origami-section--minor':'');
   var summary=document.createElement('summary');var inner=document.createElement('div');inner.className='origami-inner';
   root.insertBefore(d,h);d.append(summary,inner);summary.append(h);
   while(d.nextSibling){
    var node=d.nextSibling;
    if(node.nodeType===1){
     var tag=node.tagName;
     if(tag==='H1'||(level===3&&tag==='H2')||tag==='H'+level)break;
    }
    inner.append(node);
   }
  });
 }
 function revealHash(){
  var id;try{id=decodeURIComponent(location.hash.slice(1))}catch(e){return}
  if(!id)return;
  var target=document.getElementById(id);if(!target)return;
  var parent=target;
  while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}
  if(target.closest('details.origami-home'))target.closest('details.origami-home').open=true;
  requestAnimationFrame(function(){target.scrollIntoView({block:'start'});});
 }
 function foldIssues(root){
  if(!root||root.dataset.issueFolds==='yes')return;
  Array.from(root.querySelectorAll('ol > li')).forEach(function(li){
   var lead=li.querySelector('strong');if(!lead||li.querySelector('details.origami-issue'))return;
   var d=document.createElement('details');d.className='origami-issue';
   var summary=document.createElement('summary');summary.textContent=lead.textContent;
   var inside=document.createElement('div');inside.className='origami-issue-body';
   while(li.firstChild)inside.append(li.firstChild);
   var oldLead=inside.querySelector('strong');if(oldLead)oldLead.remove();
   var first=inside.firstChild;
   if(first&&first.nodeType===3)first.textContent=first.textContent.replace(/^\s*[—–:-]\s*/,'');
   d.append(summary,inside);li.append(d);
  });
  root.dataset.issueFolds='yes';
 }

 function isProceduralHeading(value){
  return /^(reading rules|how to operate this working file|source shorthand|source key|evidence vocabulary|citation convention|how to read|document conventions|appendix — documentary issues and controlling questions)/i.test((value||'').trim());
 }
 function tuckOpeningNotes(root){
  if(root.querySelector(':scope > details.origami-notes'))return;
  var children=Array.from(root.children), firstSection=children.findIndex(function(el){return el.matches('details.origami-section')});
  if(firstSection<0)return;
  var intro=children.slice(0,firstSection);
  var noteNodes=[];
  intro.forEach(function(node){
   if(node.matches('h1,.source-head,.fold-controls'))return;
   if(node.tagName==='HR'){noteNodes.push(node);return;}
   if(node.tagName!=='P')return;
   var plain=(node.textContent||'').trim().replace(/\s+/g,' ');
   var explicit=/^(canonical companion|working version|purpose[.:]|central organising principle[.:]|evidential convention[.:]|quotation policy[.:]|version[.:]|prepared[.:]|established[.:]|status[.:]|scope[.:]|repository[.:]|primary record policy[.:]|parent document[.:]|working evidential compression|document type[.:]|date[.:]|relationship to existing work[.:]|companion, not replacement[.:]|source-preserving extraction)/i.test(plain);
   var dateLine=/^(case overview|19 november 2026|18 november 2026|working evidential compression)/i.test(plain);
   if(explicit||dateLine)noteNodes.push(node);
  });
  if(!noteNodes.length)return;
  var details=document.createElement('details');details.className='origami-notes';
  var summary=document.createElement('summary');summary.textContent='Document notes and conventions';
  var body=document.createElement('div');body.className='origami-notes-body';
  details.append(summary,body);
  // Keep notes anchored ahead of the article's substantive content.
  root.insertBefore(details,intro.find(function(el){return noteNodes.includes(el)})||root.firstChild);
  noteNodes.forEach(function(node){body.append(node)});
 }
 function openFirstReading(root){
  var sections=Array.from(root.querySelectorAll(':scope > details.origami-section'));
  var first=sections.find(function(d){return !isProceduralHeading(d.querySelector('summary')?.textContent)})||sections[0];
  if(!first)return;
  first.open=true;
  // Where a technical wrapper contains the actual argument, expose its first substantive subsection.
  if(first===sections[0]&&isProceduralHeading(first.querySelector('summary')?.textContent)){
   var inner=Array.from(first.querySelectorAll('details.origami-section--minor')).find(function(d){return !isProceduralHeading(d.querySelector('summary')?.textContent)});
   if(inner)inner.open=true;
  }else{
   var child=first.querySelector('details.origami-section--minor');
   if(child)child.open=true;
  }
 }
 function foldDocument(root,options){
  if(!root||root.dataset.origamiReady==='yes')return;
  options=options||{};
  prepareReading(root,options.mode||'');
  var headingList=Array.from(root.querySelectorAll('h2,h3'));
  headingList.forEach(function(h){
   if(!h.id)h.id=headingSlug(h.textContent);
  });
  // Process each section at the top level; h3 folds are created inside h2 bodies.
  foldHeadingGroup(root,2);
  Array.from(root.querySelectorAll('details.origami-section:not(.origami-section--minor) > .origami-inner')).forEach(function(body){foldHeadingGroup(body,3)});
  // Rare h3 headings before the first h2.
  foldHeadingGroup(root,3);
  tuckOpeningNotes(root);
  if(options.mode==='fiftysix'){var firstIssue=root.querySelector('details.origami-issue');if(firstIssue)firstIssue.open=true;}else openFirstReading(root);
  if(visibleSections(root).length||root.querySelector('details.origami-issue'))controls(root);
  root.dataset.origamiReady='yes';
  revealHash();
 }

 // Reader-first presentation: retain all text, but place front matter in one optional fold.
 function collapseNodes(nodes,label,root){
  if(!nodes.length)return null;
  var d=document.createElement('details');d.className='origami-notes';
  var summary=document.createElement('summary');summary.textContent=label;
  var body=document.createElement('div');body.className='origami-notes-body';
  d.append(summary,body);nodes[0].parentNode.insertBefore(d,nodes[0]);
  nodes.forEach(function(n){body.append(n)});return d;
 }
 function prepareReading(root,mode){
  if(!root||root.dataset.readerFirst==='yes')return;
  root.dataset.readerFirst='yes';
  var children=Array.from(root.children);
  // Numbered collections: put every numbered item at the same level.
  var patterns={foundations:/^\d{2}\.\s/,twentyfive:/^K\d{2}\s*[—–-]/,six:/^P[1-6]\s*[—–-]/};
  var pattern=patterns[mode];
  if(pattern){
   var first=children.findIndex(function(n){return /^H[23]$/.test(n.tagName)&&pattern.test(n.textContent.trim())});
   if(first>=0){
    collapseNodes(children.slice(0,first),'About this document · evidence and reading notes',root);
    // Collect intervening part headings into the next item's fold, preserving every original element.
    var rest=children.slice(first), pending=[];
    rest.forEach(function(n){
     if(n.tagName==='H2'&&!pattern.test(n.textContent.trim()) && /^([IVX]+\.\s|25 essential understandings)/i.test(n.textContent.trim())){
      var label=document.createElement('div');label.className='reader-part-label';label.textContent=n.textContent;label.id=n.id;n.replaceWith(label);pending.push(label);
     }
    });
    // Make each numbered H3 a top-level section; retain its original anchor.
    Array.from(root.children).forEach(function(n){
     if(n.tagName==='H3'&&pattern.test(n.textContent.trim())){var h=document.createElement('h2');h.id=n.id;while(n.firstChild)h.append(n.firstChild);n.replaceWith(h)}
    });
    root.classList.add('numbered-reader');
    return;
   }
  }
  if(mode==='fiftysix'){
   var firstList=children.findIndex(function(n){return n.tagName==='OL'});
   if(firstList>=0){
    collapseNodes(children.slice(0,firstList),'About this checklist · evidence and reading notes',root);
    var lastSection=null;
    Array.from(root.children).forEach(function(n){
     if(n.tagName==='H2'&&/five additional controlling questions/i.test(n.textContent)){lastSection=n;return;}
     if(lastSection&&n.tagName==='P'){
      var match=n.textContent.match(/^(5[2-6])\.\s/);if(!match)return;
      var d=document.createElement('details');d.className='origami-issue';
      var sum=document.createElement('summary'),lead=n.querySelector('strong');
      sum.textContent=match[1]+'. '+(lead?lead.textContent:n.textContent);
      var body=document.createElement('div');body.className='origami-issue-body';d.append(sum,body);
      n.replaceWith(d);body.append(n);
     }
    });
    // Preserve source grouping as small labels, not another accordion to open.
    Array.from(root.children).forEach(function(n){if(n.tagName==='H3'||(n.tagName==='H2'&&/five additional controlling questions/i.test(n.textContent))){var label=document.createElement('div');label.className='reader-part-label';label.id=n.id;while(n.firstChild)label.append(n.firstChild);n.replaceWith(label)}});
    root.classList.add('numbered-reader');
    return;
   }
  }
  // For narrative readers keep the opening argument; only tuck clearly procedural paragraphs.
  var initial=children.slice(0,children.findIndex(function(n){return n.tagName==='H2'})<0?children.length:children.findIndex(function(n){return n.tagName==='H2'}));
  var administrative=initial.filter(function(n){return n.tagName==='H1'||(n.tagName==='P'&&/^(version|prepared|status|scope|purpose|repository|primary record policy|created|intended recipient|working principle|documentary companion|working evidential compression|evidence-led counsel working audit|case overview \||for independent legal examination|source-preserving extraction|canonical companion|\*?independent philosophical essay)/i.test(n.textContent.trim()))});
  collapseNodes(administrative,'Document notes and conventions',root);
 }
 function compactChrome(){
  if(document.body.dataset.compactChrome==='yes')return;
  document.body.dataset.compactChrome='yes';
  var page=document.querySelector('.wrapper .main, .reader .main');
  if(page){
   var items=Array.from(page.children).filter(function(n){return n.matches('.eyebrow,.subtitle,.intro,.jump,.actions')});
   collapseNodes(items,'About this document · source and print options',page);
   var title=page.querySelector(':scope > h1');var notes=page.querySelector(':scope > details.origami-notes');
   if(title&&notes)title.after(notes);
  }
 }
 function foldHome(){
  var sections=Array.from(document.querySelectorAll('section.support-wrap'));
  sections.forEach(function(section){
   if(section.dataset.origamiReady==='yes')return;
   var title=section.querySelector('h2.support-title');
   if(!title)return;
   var eyebrow=section.querySelector('.eyebrow');
   var d=document.createElement('details');d.className='origami-home';d.id=section.id;
   var summary=document.createElement('summary');var labelWrap=document.createElement('span');
   var label=document.createElement('span');label.className='fold-label';label.textContent=title.textContent;
   if(eyebrow){var tag=document.createElement('span');tag.className='fold-tag';tag.textContent=eyebrow.textContent;labelWrap.append(tag);}
   labelWrap.append(label);summary.append(labelWrap);
   var body=document.createElement('div');body.className='fold-home-body';
   while(section.firstChild)body.append(section.firstChild);
   // Keep the original heading as an accessible heading inside the unfolded section, but hide visually to avoid duplicate.
   var origTitle=body.querySelector('h2.support-title');if(origTitle)origTitle.classList.add('fold-original-title');
   d.append(summary,body);section.replaceWith(d);
  });
  revealHash();
 }
 function makeNavFold(aside,selector){
  if(!aside||aside.querySelector('details.fold-nav'))return;
  var nav=aside.querySelector(selector);if(!nav)return;
  var d=document.createElement('details');d.className='fold-nav';
  var summary=document.createElement('summary');summary.textContent='Browse sections';
  nav.parentNode.insertBefore(d,nav);d.append(summary,nav);
  nav.addEventListener('click',function(e){if(e.target.closest('a'))d.open=false;});
 }
 window.Origami={foldDocument:foldDocument,foldIssues:foldIssues,compactChrome:compactChrome,foldHome:foldHome,makeNavFold:makeNavFold,revealHash:revealHash};
 addEventListener('hashchange',revealHash);
})();
