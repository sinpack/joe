import clsx from 'clsx';
import React from 'react';
import BackdropTransition from '../BackdropTransition';

interface SlideDrawerProps {
  open: boolean;
  width?: number;
  children: React.ReactNode;
}

export default function SlideDrawer({
  open,
  width = 1125,
  children,
}: SlideDrawerProps) {
  return (
    <>
      <BackdropTransition duration={0.3} open={open} />
      <div
        className={clsx({ sideDrawer: true, open })}
        style={{ width: `${width}px` }}
      >
        <div className="flex w-full h-full">{children}</div>
      </div>
    </>
  );
}
