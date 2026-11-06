'use strict';
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.querySelector('span').textContent='+';}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.querySelector('span').textContent=open?'−':'+';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const wasOpen=menu.getAttribute('aria-expanded')==='true';closeMenu();if(wasOpen)menu.focus();}});
const enquiry=document.querySelector('#enquiry');
const form=document.querySelector('#brief-form');
const result=document.querySelector('#brief-result');
function openDialog(dialog){dialog.showModal();document.body.classList.add('modal-open');closeMenu();}
function openEnquiry(visit=false){form.hidden=false;result.hidden=true;form.elements.type.value=visit?'Studio visit':'Bespoke application';openDialog(enquiry);}
document.querySelectorAll('[data-enquire]').forEach(b=>b.addEventListener('click',()=>openEnquiry()));
document.querySelectorAll('[data-visit]').forEach(b=>b.addEventListener('click',()=>openEnquiry(true)));
document.querySelector('#colophon-open').addEventListener('click',()=>openDialog(document.querySelector('#colophon')));
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('close',()=>document.body.classList.remove('modal-open'));d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);document.querySelector('#brief-text').value=`HANDCODE / A considered commission\n\nPrepared for: ${data.get('name')}\nCommission: ${data.get('type')}\nTime: ${data.get('timing')}\n\n${data.get('details')}\n\nPrepared at handcode.love. Nothing has been sent.`;form.hidden=true;result.hidden=false;document.querySelector('#copy-status').textContent='';document.querySelector('#brief-text').focus();});
document.querySelector('#edit-brief').addEventListener('click',()=>{result.hidden=true;form.hidden=false;form.elements.details.focus();});
document.querySelector('#copy-brief').addEventListener('click',async()=>{const field=document.querySelector('#brief-text');try{await navigator.clipboard.writeText(field.value);document.querySelector('#copy-status').textContent='Copied. Ready for your consideration.';}catch{field.focus();field.select();document.querySelector('#copy-status').textContent='Select and copy the brief above.';}});
document.querySelector('#year').textContent=new Date().getFullYear();
