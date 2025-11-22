// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// IntersectionObserver: fade-in sections + navbar highlight
const sections = document.querySelectorAll('main section, main > section');
const navLinks = document.querySelectorAll('.nav-links a');

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.getAttribute('id');
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      navLinks.forEach(a=>{
        a.classList.remove('active-link');
        if(a.getAttribute('href') === `#${id}`) a.classList.add('active-link');
      });
    }
  });
},{threshold:0.6});

sections.forEach(s=>io.observe(s));

// Social button bounce
document.querySelectorAll('.social-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    btn.classList.add('bounce');
    setTimeout(()=>btn.classList.remove('bounce'),300);
    // don't navigate—user said they'll add links later (href="#" is placeholder)
  });
});