import { useEffect, useRef } from 'react';

const PetalAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const petals = [];
    const petalCount = 30;

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 15 + 8,
        speed: Math.random() * 1.5 + 0.5,
        wind: Math.random() * 1 - 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: `hsl(${270 + Math.random() * 90}, ${70 + Math.random() * 20}%, ${55 + Math.random() * 25}%)`,
      });
    }

    const drawPetal = (petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate((petal.rotation * Math.PI) / 180);
      ctx.globalAlpha = petal.opacity;
      ctx.fillStyle = petal.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size / 2, petal.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((petal) => {
        petal.y += petal.speed;
        petal.x += petal.wind;
        petal.rotation += petal.rotationSpeed;
        if (petal.y > canvas.height + 20) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
        }
        drawPetal(petal);
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ opacity: 0.7 }}
    />
  );
};

export default PetalAnimation;
