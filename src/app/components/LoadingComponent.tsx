import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function LoadingComponent({
  isLoading,
  width,
  height = 25,
  isCircular,
  children,
  overflowHidden = false,
  isCentered = false,
  right,
  left,
  fullWidth,
}: {
  isLoading: boolean;
  width: number;
  height?: number;
  isCircular?: boolean;
  children: ReactNode;
  overflowHidden?: boolean;
  isCentered?: boolean;
  right?: boolean;
  left?: boolean;
  fullWidth?: boolean;
}) {
  return isLoading ? (
    <Skeleton
      containerClassName={clsx({
        flex: true,
        'items-center': isCentered,
        'justify-end': right,
        'justify-start': left,
      })}
      style={{
        width,
        height,
      }}
      borderRadius={isCircular ? '50%' : ''}
    />
  ) : (
    <div
      className={clsx({
        'overflow-hidden': overflowHidden,
        'w-full': fullWidth,
      })}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
