import React from 'react';

const Divider2 = () => (
  <div className="flex bg-sky-50 h-20">
    <div
      className="flex w-full"
      style={{
        clipPath: 'ellipse(50% 100% at top center)',
        backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
      }}
    >
      {/* Content goes here */}
    </div>
  </div>
);

export default Divider2;
