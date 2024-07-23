type SizeReducerState = {
    height: number;
    width: number;
};
export type SizeReducerAction = {
    type: 'height' | 'width';
    value: number;
} | {
    type: 'reset';
    value: {
        height: number;
        width: number;
    };
};
export declare const sizeReducer: (state: SizeReducerState, action: SizeReducerAction) => {
    width: number;
    height: number;
};
export {};
//# sourceMappingURL=sizeReducer.d.ts.map