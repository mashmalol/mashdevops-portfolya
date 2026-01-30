import React, { useEffect, useRef } from 'react';
import './DigitalRain.css';

const DigitalRain = ({ 
  fontSize = 16, 
  speed = 50, 
  density = 0.95 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const characters = '0x9b37614ed86e32330DF292220b9411d10e7F2FFb@nanda_the_es';
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const columns = Math.floor(canvas.width / fontSize);
      columnsRef.current = Array(columns).fill(1);
    };
    
    const draw = () => {
      // Semi-transparent black overlay for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;
      
      columnsRef.current.forEach((y, index) => {
        const character = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        
        const x = index * fontSize;
        ctx.fillText(character, x, y * fontSize);
        
        // Reset column with some randomness
        if (y * fontSize > canvas.height && Math.random() > density) {
          columnsRef.current[index] = 0;
        }
        
        columnsRef.current[index]++;
      });
    };
    
    // Initialize canvas
    resizeCanvas();
    
    // Animation loop
    const interval = setInterval(draw, speed);
    animationRef.current = interval;
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup
    return () => {
      clearInterval(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [fontSize, speed, density]);

  return <canvas ref={canvasRef} className="digital-rain" />;
};

export default DigitalRain;
