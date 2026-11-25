/* Sitewide navigation; case writing and original sources remain unchanged. */
(function(){
 'use strict';
 function init(){
  if(document.querySelector('.publication-bar'))return;
  var bar=document.createElement('div');bar.className='publication-bar';
  var nav=document.createElement('nav');nav.setAttribute('aria-label','Publication navigation');
  var links=[['The Unanswered Referral','./'],['Journalistic essay','journalistic-essay.html'],['Document library','library.html'],['50 statements','supporting.html?document=foundations'],['Six sequences & five mechanisms','supporting.html?document=sequences'],['Working case','supporting.html?document=workingcase'],['Documentary comparison','documentary-comparison.html'],['40 records','records-mobile.html']];
  function makeLink(pair){
    var a=document.createElement('a');a.href=pair[1];a.textContent=pair[0];
    var url=new URL(pair[1],location.href);
    if(url.pathname===location.pathname&&url.search===location.search)a.setAttribute('aria-current','page');
    return a;
  }
  links.forEach(function(pair,i){var a=makeLink(pair);if(i===0)a.className='publication-mark';nav.append(a)});
  var menu=document.createElement('details');menu.className='publication-menu';
  var summary=document.createElement('summary');summary.textContent='Browse';
  var list=document.createElement('div');list.className='publication-menu-list';
  var mobile=[links[1],links[3],['25 key findings','supporting.html?document=twentyfive'],['56 matters to examine','supporting.html?document=fiftysix'],['Six propositions','supporting.html?document=six'],links[4],links[5],links[6],['Knowledge audit','supporting.html?document=audit'],['Ethical case','supporting.html?document=philosophy'],['Institutional essay','supporting.html?document=institutional'],['Evidence references','supporting.html?document=crosswalk'],links[2],links[7]];
  mobile.forEach(function(pair){list.append(makeLink(pair))});
  menu.append(summary,list);nav.append(menu);
  list.addEventListener('click',function(e){if(e.target.closest('a'))menu.open=false});
  document.addEventListener('click',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false});
  bar.append(nav);
  var skip=document.createElement('a');skip.className='publication-access';skip.textContent='Skip publication navigation';
  var target=document.querySelector('main, #essay, .article, .support-wrap');
  if(target){if(!target.id)target.id='publication-main';target.setAttribute('tabindex','-1');skip.href='#'+target.id}
  else skip.href='#';
  document.body.insertBefore(bar,document.body.firstChild);document.body.insertBefore(skip,bar);
  document.body.classList.add('has-publication-nav');
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
