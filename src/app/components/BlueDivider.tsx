import React from 'react';

interface BlueDividerProps {
  polygon: boolean;
}

const BlueDivider: React.FC<BlueDividerProps> = ({ polygon }) => (
  <div className="flex bg-sky-50 h-20">
    <div
      className="flex w-full"
      style={{
        clipPath: polygon
          ? 'polygon(50% 100%, 100% 0%, 0% 0%)'
          : 'ellipse(50% 100% at top center)', // Reversed polygon to point upwards
        backgroundImage: 'linear-gradient(240deg, #a1c4fd 0%, #c2e9fb 100%)', // Adjusted gradient direction
      }}
    ></div>
  </div>
);

export default BlueDivider;
