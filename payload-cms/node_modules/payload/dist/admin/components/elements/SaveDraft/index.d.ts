import React from 'react';
export type CustomSaveDraftButtonProps = React.ComponentType<DefaultSaveDraftButtonProps & {
    DefaultButton: React.ComponentType<DefaultSaveDraftButtonProps>;
}>;
export type DefaultSaveDraftButtonProps = {
    disabled: boolean;
    label: string;
    saveDraft: () => void;
};
type Props = {
    CustomComponent?: CustomSaveDraftButtonProps;
};
export declare const SaveDraft: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map