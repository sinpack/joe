import React from 'react';
import type { LivePreviewConfig } from '../../../../../exports/config';
import type { EditViewProps } from '../../types';
import type { usePopupWindow } from '../usePopupWindow';
export type LivePreviewProviderProps = EditViewProps & {
    appIsReady?: boolean;
    breakpoints?: LivePreviewConfig['breakpoints'];
    children: React.ReactNode;
    deviceSize?: {
        height: number;
        width: number;
    };
    isPopupOpen?: boolean;
    openPopupWindow?: ReturnType<typeof usePopupWindow>['openPopupWindow'];
    popupRef?: React.MutableRefObject<Window>;
    url?: string;
};
export declare const LivePreviewProvider: React.FC<LivePreviewProviderProps>;
//# sourceMappingURL=index.d.ts.map