import { useEffect, useRef } from 'react';

// The "raw infrastructure being governed": a near-monochrome instrument-grade
// contour field on #0E1116. Glass chrome floats above it (the control plane).
// Static single frame under prefers-reduced-motion.
export default function HeroField(){
  const ref = useRef(null);
  useEffect(()=>{
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf, w = 0, h = 0, dpr = 1;

    const LINES = 26;
    const paint = (t)=>{
      ctx.clearRect(0,0,w,h);
      const g = ctx.createRadialGradient(w*0.32,h*0.30,0,w*0.32,h*0.30,Math.max(w,h)*0.95);
      g.addColorStop(0,'rgba(30,36,48,0.42)');
      g.addColorStop(1,'rgba(10,12,16,0)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

      for(let i=0;i<LINES;i++){
        const yBase = (h*1.15)*(i/LINES) - h*0.08;
        const depth = i/LINES;
        ctx.beginPath();
        for(let x=0;x<=w;x+=14){
          const k = x/w;
          const y = yBase
            + Math.sin(k*5.2 + t*0.00018 + i*0.55)*22*(0.4+depth)
            + Math.sin(k*11.0 - t*0.00012 + i*0.3)*9*(0.3+depth);
          x===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
        }
        ctx.strokeStyle = `rgba(124,136,160,${0.07 + depth*0.15})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = (t)=>{ paint(t); raf = requestAnimationFrame(animate); };

    const resize = ()=>{
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      paint(reduce ? 4200 : performance.now());
    };

    resize();
    window.addEventListener('resize', resize);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro && ro.observe(canvas);

    if(!reduce) raf = requestAnimationFrame(animate);

    return ()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      ro && ro.disconnect();
    };
  },[]);
  return <canvas ref={ref} className="hero__field" />;
}
