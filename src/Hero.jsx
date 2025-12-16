import React, { useEffect, useRef } from "react";

export const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      className="flex min-h-[250px] md:h-[450px] lg:h-[603px] bg-cover bg-[50%_50%] flex-col items-center justify-center relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="inline-flex gap-6 flex-col items-center relative px-4 md:px-8 lg:px-16" style={{ zIndex: 2 }}>
        <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[51px] text-center tracking-[-1.28px] leading-tight md:leading-[57px] lg:leading-[57.4px] px-4 opacity-0 animate-fade-in">
          기자의, 기자에 의한, <br />
          기자를 위한 AI 서비스
        </h1>

        <p className="relative flex items-center justify-center w-full max-w-[960px] px-4 [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffff90] text-lg md:text-2xl lg:text-xl text-center tracking-[-0.12px] leading-relaxed md:leading-[35px] lg:leading-[30.6px] opacity-0 animate-fade-in-delay">
          AI of the journalists, by the journalists, for the journalists.
          <br />
          취재는 10배 깊게, 작성은 100배 빠르게, 불가능은 가능하게.
        </p>
      </div>
    </section>
  );
};