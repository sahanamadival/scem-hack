import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-navy">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70 z-10"></div>
      
      {/* Background image - using Pexels stock photo */}
      <img
        src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Military veterans in professional settings"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default HeroImage;