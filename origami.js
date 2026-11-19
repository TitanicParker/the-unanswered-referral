/* Origami navigation: semantic details / summary, source headings retained, no external dependencies. */
(function(){
 'use strict';
 function headingSlug(value){return (value||'section').toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').slice(0,75)||'section'}
 function visibleSections(root){return Array.from(root.querySelectorAll('details.origami-section'))}
 function controls(root){
  if(root.querySelector(':scope > .fold-controls'))return;
  var bar=document.createElement('div');bar.className='fold-controls';
  var p=document.createElement('p');p.textContent='Tap a heading to unfold its text.';bar.append(p);
  [['Unfold all',true],['Fold all',false]].forEach(function(item){
   var b=document.createElement('button');b.type='button';b.className='fold-button';b.textContent=item[0];
   b.addEventListener('click',function(){visibleSections(root).forEach(function(d){d.open=item[1]});});
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
   if(first&&first.nodeType===3)first.textContent=first.textContent.replace(/^\\s*[—–:-]\\s*/,'');
   d.append(summary,inside);li.append(d);
  });
  root.dataset.issueFolds='yes';
 }
 function foldDocument(root,options){
  if(!root||root.dataset.origamiReady==='yes')return;
  var headingList=Array.from(root.querySelectorAll('h2,h3'));
  headingList.forEach(function(h){
   if(!h.id)h.id=headingSlug(h.textContent);
  });
  // Process each section at the top level; h3 folds are created inside h2 bodies.
  foldHeadingGroup(root,2);
  Array.from(root.querySelectorAll('details.origami-section:not(.origami-section--minor) > .origami-inner')).forEach(function(body){foldHeadingGroup(body,3)});
  // Rare h3 headings before the first h2.
  foldHeadingGroup(root,3);
  if(visibleSections(root).length)controls(root);
  root.dataset.origamiReady='yes';
  revealHash();
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
 window.Origami={foldDocument:foldDocument,foldIssues:foldIssues,foldHome:foldHome,makeNavFold:makeNavFold,revealHash:revealHash};
 addEventListener('hashchange',revealHash);
})();
