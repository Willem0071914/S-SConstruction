const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('#nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim(),phone=document.querySelector('#phone').value.trim(),service=document.querySelector('#service').value,details=document.querySelector('#details').value.trim();const message=`Hello S&S Construction and Projects,\n\nI would like to request a quote.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nProject details: ${details}`;window.open(`https://wa.me/27721517269?text=${encodeURIComponent(message)}`,'_blank')});
