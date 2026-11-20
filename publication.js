/* Sitewide supplemental navigation; all case-writing remains in its original files. */
(function(){
 'use strict';
 function init(){
  if(document.querySelector('.publication-bar'))return;
  var bar=document.createElement('div');bar.className='publication-bar';
  var nav=document.createElement('nav');nav.setAttribute('aria-label','Publication navigation');
  var links=[['The Unanswered Referral','./'],['Document library','library.html'],['50 statements','supporting.html?document=foundations'],['Six sequences & five mechanisms','supporting.html?document=sequences'],['Working case','supporting.html?document=workingcase'],['Documentary comparison','documentary-comparison.html'],['40 records','records-mobile.html']];
  links.forEach(function(pair,i){var a=document.createElement('a');a.href=pair[1];a.textContent=pair[0];if(i===0)a.className='publication-mark';if((location.pathname.endsWith('library.html')&&i===1)||(location.pathname.endsWith('records-mobile.html')&&i===6)||(location.pathname.endsWith('documentary-comparison.html')&&i===5))a.setAttribute('aria-current','page');nav.append(a)});
  bar.append(nav);
  var skip=document.createElement('a');skip.className='publication-access';skip.href='#publication-main';skip.textContent='Skip publication navigation';
  document.body.insertBefore(bar,document.body.firstChild);document.body.insertBefore(skip,bar);
  var target=document.querySelector('main, #essay, .article, .support-wrap');if(target&&!target.id)target.id='publication-main';
  if(document.querySelector('main'))document.querySelector('main').setAttribute('tabindex','-1');
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
