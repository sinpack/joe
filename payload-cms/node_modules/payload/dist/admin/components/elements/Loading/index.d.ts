import React from 'react';
import type { LoadingOverlayTypes } from '../../utilities/LoadingOverlay/types';
import './index.scss';
type Props = {
    animationDuration?: string;
    loadingText?: string;
    overlayType?: string;
    show?: boolean;
};
export declare const LoadingOverlay: React.FC<Props>;
type UseLoadingOverlayToggleT = {
    loadingText?: string;
    name: string;
    show: boolean;
    type?: LoadingOverlayTypes;
};
export declare const LoadingOverlayToggle: React.FC<UseLoadingOverlayToggleT>;
type FormLoadingOverlayToggleT = {
    action: 'create' | 'loading' | 'update';
    formIsLoading?: boolean;
    loadingSuffix?: string;
    name: string;
    type?: LoadingOverlayTypes;
};
export declare const FormLoadingOverlayToggle: React.FC<FormLoadingOverlayToggleT>;
export {};
//# sourceMappingURL=index.d.ts.map