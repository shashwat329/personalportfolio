import { useRef, useEffect, useState } from 'react';
import '../style/Squares.css';

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
}) => {
  const canvasRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const [hoveredSquare, setHoveredSquare] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
      drawGrid();
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += squareSize) {
        for (let y = 0; y < canvas.height; y += squareSize) {
          if (
            hoveredSquare &&
            Math.floor(x / squareSize) === hoveredSquare.x &&
            Math.floor(y / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, '#060606');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Track mouse hover
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const hoveredSquareX = Math.floor(mouseX / squareSize);
      const hoveredSquareY = Math.floor(mouseY / squareSize);

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
      drawGrid();
    };

    const handleMouseLeave = () => {
      setHoveredSquare(null);
      drawGrid();
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className="squares-canvas"></canvas>;
};

export default Squares;