document.querySelectorAll('.pin').forEach(p=>{
  p.addEventListener('click',()=>{
    document.querySelectorAll('.pin').forEach(o=>o.classList.remove('active'));
    p.classList.add('active');
    const t=document.getElementById(p.dataset.target);
    if(t) t.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
});
