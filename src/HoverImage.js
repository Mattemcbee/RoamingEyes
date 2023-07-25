import React, { useState } from 'react';
import Head2 from './images/soc6.jpg'
import Head1 from './images/soc11.jpg'

const HoverImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <img
        // src={isHovered ? './images/soc1.jpg' : './images/soc2.jpg'}
        src={isHovered ? Head1 : Head2}
        style={{width:'100%', margin:'0'}}
        alt="Image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default HoverImage;
