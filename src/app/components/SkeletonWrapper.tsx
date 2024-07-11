import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonWrapperProps {
    children: React.ReactNode;
    baseColor?: string;
    highlightColor?: string;
    borderRadius?: string;
    duration?: number;
}
export default function SkeletonWrapper({
    children,
    baseColor = '#DEE0E6',
    highlightColor = '#F6F6F9',
    borderRadius = '3px',
    duration = 2
}: SkeletonWrapperProps) {
    return (
        <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
            borderRadius={borderRadius}
            duration={duration}
        >
            {children}
        </SkeletonTheme>
    );
}
