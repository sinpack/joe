import type { Dispatch } from 'react';
import type { LivePreviewConfig } from '../../../../../exports/config';
import type { fieldSchemaToJSON } from '../../../../../utilities/fieldSchemaToJSON';
import type { usePopupWindow } from '../usePopupWindow';
import type { SizeReducerAction } from './sizeReducer';
export interface LivePreviewContextType {
    appIsReady: boolean;
    breakpoint: LivePreviewConfig['breakpoints'][number]['name'];
    breakpoints: LivePreviewConfig['breakpoints'];
    fieldSchemaJSON?: ReturnType<typeof fieldSchemaToJSON>;
    iframeHasLoaded: boolean;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    isPopupOpen: boolean;
    measuredDeviceSize: {
        height: number;
        width: number;
    };
    openPopupWindow: ReturnType<typeof usePopupWindow>['openPopupWindow'];
    popupRef?: React.MutableRefObject<Window | null>;
    previewWindowType: 'iframe' | 'popup';
    setAppIsReady: (appIsReady: boolean) => void;
    setBreakpoint: (breakpoint: LivePreviewConfig['breakpoints'][number]['name']) => void;
    setHeight: (height: number) => void;
    setIframeHasLoaded: (loaded: boolean) => void;
    setMeasuredDeviceSize: (size: {
        height: number;
        width: number;
    }) => void;
    setPreviewWindowType: (previewWindowType: 'iframe' | 'popup') => void;
    setSize: Dispatch<SizeReducerAction>;
    setToolbarPosition: (position: {
        x: number;
        y: number;
    }) => void;
    setWidth: (width: number) => void;
    setZoom: (zoom: number) => void;
    size: {
        height: number;
        width: number;
    };
    toolbarPosition: {
        x: number;
        y: number;
    };
    url: string | undefined;
    zoom: number;
}
export declare const LivePreviewContext: import("react").Context<LivePreviewContextType>;
export declare const useLivePreviewContext: () => LivePreviewContextType;
//# sourceMappingURL=context.d.ts.map