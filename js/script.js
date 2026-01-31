// SUPERHET COFFEE — script.js
// Small, focused JS for interactions & accessibility

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-navigation');
  if(navToggle){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.section, .menu-category, .review, .gallery-grid img');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    })
  },{threshold: 0.12});
  reveals.forEach(r=>r.classList.add('reveal'));
  reveals.forEach(r=>io.observe(r));

  // Add smooth hover subtle effect on buttons (prefers-reduced-motion respects)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('mouseenter',()=>btn.style.transform='translateY(-3px)');
      btn.addEventListener('mouseleave',()=>btn.style.transform='');
      btn.style.transition = 'transform 180ms ease';
    });
  }

  // Improve keyboard focus for skip to content (if added later)
});
