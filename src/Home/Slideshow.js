import React, { useState, useEffect } from 'react';

const slideImages = [
  require('../Imgs/p1.jpg'),
  require('../Imgs/p2.jpg'),
  require('../Imgs/p3.jpg'),
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={slideImages[currentIndex]} alt="slideshow" className="slide-image" style={{width: '30rem',height:'30rem'}} />
    </div>
  );
};
  
export default Slideshow;  