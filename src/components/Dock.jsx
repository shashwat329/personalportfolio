import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaInstagram, FaLinkedin ,FaGithub } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import '../style/contact.css';

const Dock = ({ position = 'bottom', collapsible = false, responsive = 'right' }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const dockItems = [
    { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com/in/kumar-shashwat27/' },
    { icon: <FaXTwitter size={30} />, link: 'https://x.com/Shsshwtt' },
    { icon: <FaInstagram size={30} />, link: 'https://www.instagram.com/shsshwtt/' },
    { icon: <FaThreads size={30} />, link: 'https://www.threads.net/@shsshwtt' },
    { icon: <FaGithub size={30} />, link: 'https://github.com/shashwat329' },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  const handleIconClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [position, responsive]);

  const getDockStyle = () => {
    const flexDirection = currentPosition === 'left' || currentPosition === 'right' ? 'column' : 'row';
    return { flexDirection };
  };

  const scaleSpring = (index) => {
    const translateValue = hoverIndex === index
      ? currentPosition === 'left' ? 'translateX(5px)' :
        currentPosition === 'right' ? 'translateX(-5px)' :
        currentPosition === 'top' ? 'translateY(5px)' : 'translateY(-5px)'
      : 'translate(0px, 0px)';

    return useSpring({
      transform: hoverIndex === index
        ? `scale(1.5) ${translateValue}`
        : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
          ? 'scale(1)'
          : 'scale(1)',
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div className="dock" style={{ ...getDockStyle(), ...visibilitySpring }}>
        {dockItems.map((item, index) => (
          <animated.div
            key={index}
            className="dock-item"
            style={scaleSpring(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleIconClick(item.link)}
          >
            {item.icon}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dock;
