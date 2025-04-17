// import React, { useEffect, useRef, useState } from 'react';

// const FadeInImage = ({ src, alt }) => {
//   const ref = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <img
//       ref={ref}
//       src={src}
//       alt={alt}
//       className={`projectsectionimg ${isVisible ? 'fade-in-up' : ''}`}
//     />
//   );
// };
