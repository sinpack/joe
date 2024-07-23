import * as React from 'react';
import './index.scss';
type ShimmerEffectT = {
    animationDelay?: string;
    height?: number | string;
    width?: number | string;
};
export declare const ShimmerEffect: React.FC<ShimmerEffectT>;
type StaggeredShimmersT = {
    className?: string;
    count: number;
    height?: number | string;
    renderDelay?: number;
    shimmerDelay?: number | string;
    shimmerItemClassName?: string;
    width?: number | string;
};
export declare const StaggeredShimmers: React.FC<StaggeredShimmersT>;
export {};
//# sourceMappingURL=index.d.ts.map