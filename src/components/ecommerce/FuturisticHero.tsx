'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function FuturisticHero() {
  const hwRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const tiltRef = useRef({ targetRX: 0, targetRY: 0, currentRX: 0, currentRY: 0 });
  const mouseNormRef = useRef({ x: 0, y: 0 });

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme !== 'light';

  useEffect(() => {
    const hw = hwRef.current;
    const scene = sceneRef.current;
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;
    if (!hw || !scene || !canvas || !cursor || !cursorRing) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!hw || !canvas) return;
      canvas.width = hw.offsetWidth;
      canvas.height = hw.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // --- Mouse tilt ---
    const onMouseMove = (e: MouseEvent) => {
      const rect = hw.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const nx = (mx / rect.width) * 2 - 1;
      const ny = (my / rect.height) * 2 - 1;
      tiltRef.current.targetRY = nx * 14;
      tiltRef.current.targetRX = -ny * 10;
      mouseNormRef.current = { x: nx, y: ny };
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };
    const onMouseLeave = () => {
      tiltRef.current.targetRX = 0;
      tiltRef.current.targetRY = 0;
      cursor.style.opacity = '0';
    };
    const onMouseEnter = () => { cursor.style.opacity = '1'; };
    const onMouseDown = () => {
      cursorRing.style.transform = 'scale(0.7)';
      cursorRing.style.borderColor = isDark ? 'rgba(182,32,224,0.9)' : 'rgba(100,50,224,0.9)';
    };
    const onMouseUp = () => {
      cursorRing.style.transform = 'scale(1)';
      cursorRing.style.borderColor = isDark ? 'rgba(0,240,255,0.8)' : 'rgba(0,120,255,0.8)';
    };

    hw.addEventListener('mousemove', onMouseMove);
    hw.addEventListener('mouseleave', onMouseLeave);
    hw.addEventListener('mouseenter', onMouseEnter);
    hw.addEventListener('mousedown', onMouseDown);
    hw.addEventListener('mouseup', onMouseUp);

    // --- Tilt RAF loop ---
    let tiltRaf: number;
    function lerpTilt() {
      const t = tiltRef.current;
      t.currentRX += (t.targetRX - t.currentRX) * 0.07;
      t.currentRY += (t.targetRY - t.currentRY) * 0.07;
      if (scene) {
        scene.style.transform = `perspective(900px) rotateX(${t.currentRX}deg) rotateY(${t.currentRY}deg)`;
      }
      tiltRaf = requestAnimationFrame(lerpTilt);
    }
    lerpTilt();

    // --- Canvas particles, stars, meteors, nebulae, nodes ---
    const PCOUNT = 120;
    const particles = Array.from({ length: PCOUNT }, () => ({
      x: Math.random() * 1400, y: Math.random() * 600,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      color: Math.random() < 0.5
        ? (isDark ? '0,240,255' : '0,120,255')
        : (isDark ? '182,32,224' : '140,20,180'),
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }));

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * 1400, y: Math.random() * 600,
      r: Math.random() * 1 + 0.2, alpha: Math.random(),
    }));

    const meteors: any[] = [];
    const meteorInterval = setInterval(() => {
      meteors.push({
        x: Math.random() * 1400, y: -10,
        vx: Math.random() * 3 + 2, vy: Math.random() * 2 + 1.5,
        len: Math.random() * 80 + 60,
        life: 0, maxLife: 60 + Math.random() * 40,
      });
    }, 1200);

    const nebulae = isDark ? [
      { x: 150, y: 120, rx: 220, ry: 100, color: '182,32,224', alpha: 0.07, phase: 0, speed: 0.003 },
      { x: 600, y: 300, rx: 180, ry: 90, color: '0,240,255', alpha: 0.06, phase: 1.5, speed: 0.002 },
      { x: 350, y: 450, rx: 160, ry: 80, color: '246,129,83', alpha: 0.05, phase: 0.8, speed: 0.0025 },
    ] : [
      { x: 150, y: 120, rx: 220, ry: 100, color: '140,20,180', alpha: 0.07, phase: 0, speed: 0.003 },
      { x: 600, y: 300, rx: 180, ry: 90, color: '0,120,255', alpha: 0.06, phase: 1.5, speed: 0.002 },
      { x: 350, y: 450, rx: 160, ry: 80, color: '220,90,50', alpha: 0.05, phase: 0.8, speed: 0.0025 },
    ];

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * 1400, y: Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.2,
    }));

    let t = 0;
    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.width, h = canvas.height;
      const { x: mx, y: my } = mouseNormRef.current;
      ctx.clearRect(0, 0, w, h);

      // Background
      const bg = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.5, w * 0.9);
      if (isDark) {
        bg.addColorStop(0, 'rgba(20,4,40,1)');
        bg.addColorStop(0.5, 'rgba(10,2,24,1)');
        bg.addColorStop(1, 'rgba(6,0,16,1)');
      } else {
        bg.addColorStop(0, 'rgba(255,255,255,1)');
        bg.addColorStop(0.5, 'rgba(248,250,255,1)');
        bg.addColorStop(1, 'rgba(240,245,255,1)');
      }
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

      // Nebulae
      for (const n of nebulae) {
        n.phase += n.speed;
        const dx = Math.sin(n.phase) * 30 + mx * 18;
        const dy = Math.cos(n.phase * 0.7) * 20 + my * 12;
        const g = ctx.createRadialGradient(n.x + dx, n.y + dy, 0, n.x + dx, n.y + dy, Math.max(n.rx, n.ry));
        g.addColorStop(0, `rgba(${n.color},${n.alpha})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.save();
        ctx.translate(n.x + dx, n.y + dy);
        ctx.scale(1, n.ry / n.rx);
        ctx.translate(-(n.x + dx), -(n.y + dy));
        ctx.fillStyle = g; ctx.beginPath();
        ctx.arc(n.x + dx, n.y + dy, n.rx, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      // Stars
      for (const s of stars) {
        const px = s.x + mx * 8, py = s.y + my * 5;
        const flicker = 0.5 + 0.5 * Math.sin(t * 0.02 + s.x);
        ctx.globalAlpha = s.alpha * flicker * 0.6;
        ctx.fillStyle = isDark ? '#fff' : '#94a3b8';
        ctx.beginPath(); ctx.arc(px * w / 1400, py * h / 600, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Constellation nodes + lines
      ctx.lineWidth = 0.4;
      const lineColor = isDark ? '0,240,255' : '0,120,255';
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const px1 = nodes[i].x + mx * 12, py1 = nodes[i].y + my * 8;
          const px2 = nodes[j].x + mx * 12, py2 = nodes[j].y + my * 8;
          const dist = Math.sqrt((px1 - px2) ** 2 + (py1 - py2) ** 2);
          if (dist < 200) {
            ctx.strokeStyle = `rgba(${lineColor},${0.18 * (1 - dist / 200)})`;
            ctx.beginPath();
            ctx.moveTo(px1 * w / 1400, py1 * h / 600);
            ctx.lineTo(px2 * w / 1400, py2 * h / 600);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.globalAlpha = 0.5; ctx.fillStyle = `rgba(${lineColor},0.8)`;
        ctx.beginPath(); ctx.arc(n.x * w / 1400, n.y * h / 600, 1.5, 0, Math.PI * 2); ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > 1400) n.vx *= -1;
        if (n.y < 0 || n.y > 600) n.vy *= -1;
      }
      ctx.globalAlpha = 1;

      // Particles
      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        const px = p.x + mx * 20, py = p.y + my * 14;
        ctx.globalAlpha = a;
        const pg = ctx.createRadialGradient(px * w / 1400, py * h / 600, 0, px * w / 1400, py * h / 600, p.r * 3);
        pg.addColorStop(0, `rgba(${p.color},1)`); pg.addColorStop(1, `rgba(${p.color},0)`);
        ctx.fillStyle = pg; ctx.beginPath();
        ctx.arc(px * w / 1400, py * h / 600, p.r * 2.5, 0, Math.PI * 2); ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1400; if (p.x > 1400) p.x = 0;
        if (p.y < 0) p.y = 600; if (p.y > 600) p.y = 0;
      }
      ctx.globalAlpha = 1;

      // Meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]; m.life++;
        const prog = m.life / m.maxLife;
        const a = prog < 0.2 ? prog / 0.2 : prog > 0.7 ? (1 - prog) / 0.3 : 1;
        ctx.globalAlpha = a * 0.9;
        const angle = Math.atan2(m.vy, m.vx);
        const tail = ctx.createLinearGradient(
          m.x * w / 1400, m.y * h / 600,
          (m.x - Math.cos(angle) * m.len) * w / 1400,
          (m.y - Math.sin(angle) * m.len) * h / 600
        );
        tail.addColorStop(0, isDark ? 'rgba(255,255,255,0.95)' : 'rgba(100,150,255,0.95)');
        tail.addColorStop(0.3, isDark ? 'rgba(0,240,255,0.6)' : 'rgba(0,120,255,0.6)');
        tail.addColorStop(1, isDark ? 'rgba(0,240,255,0)' : 'rgba(0,120,255,0)');
        ctx.strokeStyle = tail; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(m.x * w / 1400, m.y * h / 600);
        ctx.lineTo((m.x - Math.cos(angle) * m.len) * w / 1400, (m.y - Math.sin(angle) * m.len) * h / 600);
        ctx.stroke();
        m.x += m.vx; m.y += m.vy;
        if (m.life >= m.maxLife || m.x > 1400 || m.y > 600) meteors.splice(i, 1);
      }
      ctx.globalAlpha = 1;
      t++;
      animRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      hw.removeEventListener('mousemove', onMouseMove);
      hw.removeEventListener('mouseleave', onMouseLeave);
      hw.removeEventListener('mouseenter', onMouseEnter);
      hw.removeEventListener('mousedown', onMouseDown);
      hw.removeEventListener('mouseup', onMouseUp);
      clearInterval(meteorInterval);
      cancelAnimationFrame(tiltRaf);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isDark]);

  return (
    <section
      ref={hwRef}
      className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center cursor-none transition-colors duration-500 ${isDark ? 'bg-[#060010]' : 'bg-slate-50'} font-sans`}
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* 3D Scene wrapper — this entire div tilts on mouse move */}
      <div
        ref={sceneRef}
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Perspective Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] z-[1] pointer-events-none overflow-hidden" style={{ transform: 'translateZ(-30px)' }}>
          <svg viewBox="0 0 700 260" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isDark ? "rgba(0,240,255,0.5)" : "rgba(0,120,255,0.2)"} />
                <stop offset="100%" stopColor={isDark ? "rgba(0,240,255,0)" : "rgba(0,120,255,0)"} />
              </linearGradient>
            </defs>
            {/* Vertical lines */}
            {Array.from({ length: 17 }, (_, c) => {
              const bx = (c / 16) * 700;
              return <line key={`v${c}`} x1="350" y1="-40" x2={bx} y2="260" stroke={isDark ? "rgba(0,240,255,0.18)" : "rgba(0,120,255,0.1)"} strokeWidth="0.5" />;
            })}
            {/* Horizontal lines */}
            {Array.from({ length: 11 }, (_, r) => {
              const y = (r / 10) * 260, frac = r / 10;
              const x1 = 350 - 350 * frac, x2 = 350 + 350 * frac;
              return <line key={`h${r}`} x1={x1} y1={y} x2={x2} y2={y} stroke={isDark ? `rgba(0,240,255,${(0.05 + frac * 0.2).toFixed(2)})` : `rgba(0,120,255,${(0.02 + frac * 0.1).toFixed(2)})`} strokeWidth="0.5" />;
            })}
            <rect x="0" y="0" width="700" height="6" fill="url(#hg)" />
          </svg>
        </div>

        {/* Scan line */}
        <div className="absolute left-0 right-0 h-[2px] z-[2] pointer-events-none animate-scan-line"
          style={{ background: isDark ? 'linear-gradient(90deg,transparent,rgba(0,240,255,0.7),transparent)' : 'linear-gradient(90deg,transparent,rgba(0,120,255,0.4),transparent)', transform: 'translateZ(10px)' }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 z-[3] pointer-events-none"
          style={{ background: isDark ? 'radial-gradient(ellipse at center,transparent 30%,rgba(6,0,16,0.85) 100%)' : 'radial-gradient(ellipse at center,transparent 30%,rgba(240,245,255,0.85) 100%)' }}
        />

        {/* Orbs */}
        <div className="absolute w-[420px] h-[420px] -top-[120px] -left-[100px] rounded-full pointer-events-none animate-ob1"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(182,32,224,0.4) 0%,transparent 65%)' : 'radial-gradient(circle,rgba(140,20,180,0.15) 0%,transparent 65%)', transform: 'translateZ(-60px)' }} />
        <div className="absolute w-[300px] h-[300px] -bottom-[60px] -right-[60px] rounded-full pointer-events-none animate-ob2"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(0,240,255,0.3) 0%,transparent 65%)' : 'radial-gradient(circle,rgba(0,120,255,0.1) 0%,transparent 65%)', transform: 'translateZ(-40px)' }} />
        <div className="absolute w-[200px] h-[200px] bottom-[80px] left-[25%] rounded-full pointer-events-none animate-ob3"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(246,129,83,0.22) 0%,transparent 65%)' : 'radial-gradient(circle,rgba(220,90,50,0.15) 0%,transparent 65%)', transform: 'translateZ(-20px)' }} />
        <div className="absolute w-[160px] h-[160px] top-[40px] right-[20%] rounded-full pointer-events-none animate-ob4"
          style={{ background: isDark ? 'radial-gradient(circle,rgba(0,240,255,0.18) 0%,transparent 65%)' : 'radial-gradient(circle,rgba(0,120,255,0.1) 0%,transparent 65%)', transform: 'translateZ(-20px)' }} />

        {/* Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(-10px)' }}>
          {[
            { size: 520, color: isDark ? 'rgba(0,240,255,0.08)' : 'rgba(0,120,255,0.06)', delay: '0s' },
            { size: 400, color: isDark ? 'rgba(182,32,224,0.1)' : 'rgba(140,20,180,0.08)', delay: '0.8s' },
            { size: 300, color: isDark ? 'rgba(0,240,255,0.07)' : 'rgba(0,120,255,0.05)', delay: '1.6s' },
            { size: 220, color: isDark ? 'rgba(246,129,83,0.08)' : 'rgba(220,90,50,0.06)', delay: '2.4s' },
          ].map((r, i) => (
            <div key={i} className="absolute rounded-full border animate-ring-pulse"
              style={{ width: r.size, height: r.size, borderColor: r.color, animationDelay: r.delay }} />
          ))}
        </div>

        {/* Floating Pills */}
        {[
          { label: '12 stores synced', color: isDark ? '#00f0ff' : '#0070f3', pos: 'top-[15%] left-[3%]', z: 60, anim: 'animate-pf1' },
          { label: 'AI listing live', color: isDark ? '#b620e0' : '#8a2be2', pos: 'bottom-[20%] right-[2%]', z: 50, anim: 'animate-pf2' },
          { label: '$2.4M processed', color: isDark ? '#f68153' : '#e65100', pos: 'top-[62%] left-[1.5%]', z: 55, anim: 'animate-pf3' },
          { label: '↑ 340 orders today', color: isDark ? '#00f0ff' : '#0070f3', pos: 'top-[25%] right-[2%]', z: 55, anim: 'animate-pf4' },
        ].map((pill, i) => (
          <div key={i}
            className={`absolute z-[12] flex items-center gap-2 px-3 py-[7px] rounded-full pointer-events-none whitespace-nowrap text-[11px] ${isDark ? 'text-white font-semibold tracking-wide' : 'text-slate-700 font-medium'} ${pill.pos} ${pill.anim}`}
            style={{
              background: isDark ? 'rgba(10,5,25,0.6)' : 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: isDark ? `1px solid ${pill.color}50` : '1px solid rgba(0,0,0,0.08)',
              boxShadow: isDark ? `0 0 20px -5px ${pill.color}60, inset 0 0 10px -5px ${pill.color}40` : '0 4px 12px rgba(0,0,0,0.05)',
              transform: `translateZ(${pill.z}px)`
            }}
          >
            <div className="w-[7px] h-[7px] rounded-full" style={{ background: pill.color, boxShadow: `0 0 8px ${pill.color}` }} />
            {pill.label}
          </div>
        ))}

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-[90%] max-w-[800px] rounded-[32px] p-12 md:p-14 text-center transition-colors duration-500"
          style={{
            background: isDark
              ? 'linear-gradient(135deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.02) 100%)'
              : 'linear-gradient(135deg,rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.6) 100%)',
            border: isDark ? '1px solid rgba(0, 240, 255, 0.25)' : '1px solid rgba(0,0,0,0.05)',
            boxShadow: isDark
              ? '0 0 120px -10px rgba(130,50,250,0.6),0 0 60px -10px rgba(0,240,255,0.4),inset 0 1px 0 rgba(255,255,255,0.2),inset 0 -1px 0 rgba(255,255,255,0.05)'
              : '0 20px 60px -10px rgba(0,0,0,0.08), 0 0 40px -10px rgba(130,50,250,0.1),inset 0 1px 0 rgba(255,255,255,1)',
            transform: 'translateZ(40px)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          {/* Corner accents */}
          {[
            'top-4 left-4 border-t-2 border-l-2 rounded-tl-lg',
            'top-4 right-4 border-t-2 border-r-2 rounded-tr-lg',
            'bottom-4 left-4 border-b-2 border-l-2 rounded-bl-lg',
            'bottom-4 right-4 border-b-2 border-r-2 rounded-br-lg',
          ].map((cls, i) => (
            <div key={i} className={`absolute w-[64px] h-[64px] pointer-events-none transition-colors duration-500 ${cls}`} style={{ borderColor: isDark ? 'rgba(0,240,255,0.8)' : 'rgba(0,120,255,0.3)', boxShadow: isDark ? (cls.includes('top-4 left-4') ? 'inset 10px 10px 20px -10px rgba(0,240,255,0.5)' : cls.includes('top-4 right-4') ? 'inset -10px 10px 20px -10px rgba(0,240,255,0.5)' : cls.includes('bottom-4 left-4') ? 'inset 10px -10px 20px -10px rgba(0,240,255,0.5)' : 'inset -10px -10px 20px -10px rgba(0,240,255,0.5)') : 'none' }} />
          ))}

          {/* Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-[5px] rounded-full mb-5 transition-colors duration-500"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
              border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)'
            }}
          >
            <div className="w-[6px] h-[6px] rounded-full animate-blink transition-colors duration-500" style={{ background: isDark ? '#00f0ff' : '#0070f3', boxShadow: isDark ? '0 0 10px #00f0ff' : '0 0 8px #0070f3' }} />
            <span className={`text-[11px] font-medium tracking-[0.1em] uppercase ${isDark ? 'text-white/80' : 'text-slate-600'}`}>The Future of Commerce</span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className={`font-bold leading-[1.1] mb-5 text-4xl md:text-5xl lg:text-6xl transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Sell Everywhere.
            <span className="block animate-grad-shift text-transparent bg-clip-text"
              style={{
                backgroundImage: isDark
                  ? 'linear-gradient(90deg,#00f0ff,#b620e0 50%,#f68153)'
                  : 'linear-gradient(90deg,#0070f3,#8a2be2 50%,#e65100)',
                backgroundSize: '200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Grow Without Limits.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed max-w-[560px] mx-auto mb-8 transition-colors duration-500"
            style={{ color: isDark ? 'rgba(255,255,255,0.58)' : 'rgba(15,23,42,0.65)' }}
          >
            Run your entire commerce business from a single platform designed to help brands launch faster, sell smarter, and scale globally.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/contact-us"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-bold tracking-wide transition-all hover:-translate-y-[3px] hover:scale-[1.04] ${isDark ? 'bg-gradient-to-r from-[#00f0ff] to-[#b620e0] text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] border-none' : 'bg-slate-900 text-white hover:shadow-[0_10px_36px_rgba(0,112,243,0.3)]'}`}
            >
              Get Started
              <ArrowRight className="w-[15px] h-[15px] transition-transform group-hover:translate-x-1" />
            </Link>

          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="flex justify-center gap-7 mt-7 pt-6 transition-colors duration-500"
            style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)' }}
          >
            {[{ val: 'Launch', label: 'Your Store' }, { val: 'Expand', label: 'Sales Channels' }, { val: 'Scale', label: 'Revenue Growth' }].map((s, i) => (
              <div key={i} className="text-center">
                <span className={`block text-xl md:text-2xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.val}</span>
                <span className="block text-xs tracking-wider uppercase mt-1 transition-colors duration-500" style={{ color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(15,23,42,0.5)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom cursor */}
      <div ref={cursorRef} className="absolute pointer-events-none z-[999] opacity-0 -translate-x-1/2 -translate-y-1/2" style={{ transition: 'left 0.05s,top 0.05s' }}>
        <div ref={cursorRingRef} className="w-9 h-9 rounded-full transition-transform" style={{ border: isDark ? '1.5px solid rgba(0,240,255,0.8)' : '1.5px solid rgba(0,120,255,0.8)' }} />
        <div className="absolute top-1/2 left-1/2 w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: isDark ? '#00f0ff' : '#0070f3', boxShadow: isDark ? '0 0 8px #00f0ff' : '0 0 8px #0070f3' }} />
      </div>
    </section>
  );
}
