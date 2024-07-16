import React from 'react';

interface DividerProps {
  className?: string;
}

export default function Divider({
  className = 'border-solid border-[#DEE0E6]',
}: DividerProps) {
  return <div className={`w-full border-t-[1px] ${className}`} />;
}
