import { useEffect } from 'react';

// Scroll-linked reveals. .reveal fades and rises; .glass.is-enter materializes (blur 0 -> 18).
export function useReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal, .glass.is-enter');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        if(e.target.classList.contains('reveal')) e.target.classList.add('is-in');
        if(e.target.classList.contains('is-enter')){
          e.target.classList.remove('is-enter');
          e.target.classList.add('is-in');
        }
        io.unobserve(e.target);
      });
    }, { rootMargin:'0px 0px -10% 0px', threshold:0.12 });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, []);
}
