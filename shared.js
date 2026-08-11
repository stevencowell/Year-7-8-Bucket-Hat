(() => {
  const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.site-nav');
  if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const home=document.querySelector('[data-home-progress]');
  if(home){const responses=Object.keys(localStorage).filter(k=>/^buckethat:m\d+-s\d+$/.test(k)&&(localStorage.getItem(k)||'').trim().length>=20).length;const checked=Object.keys(localStorage).filter(k=>k.startsWith('buckethat:check:')).filter(k=>{try{return JSON.parse(localStorage.getItem(k)||'{}').correct}catch{return false}}).length;const activities=new Set(Object.keys(localStorage).filter(k=>k.startsWith('buckethat:activity:')&&(localStorage.getItem(k)||'').trim().length>=20).map(k=>k.match(/:a(\d+)-/)?.[1]).filter(Boolean)).size;const pct=Math.min(100,Math.round(((responses+checked+activities)/340)*100));home.textContent=`${pct}%`;document.querySelector('[data-home-progress-bar]').style.width=`${pct}%`;}
})();
