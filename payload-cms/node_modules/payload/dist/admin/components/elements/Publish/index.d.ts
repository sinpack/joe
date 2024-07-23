import React from 'react';
export type CustomPublishButtonType = React.ComponentType<DefaultPublishButtonProps & {
    DefaultButton: React.ComponentType<DefaultPublishButtonProps>;
}>;
/**
 * @deprecated Use `CustomPublishButtonType` instead - renamed from `CustomPublishButtonProps`
 */
export type CustomPublishButtonProps = CustomPublishButtonType;
export type DefaultPublishButtonProps = {
    canPublish: boolean;
    disabled: boolean;
    id?: string;
    label: string;
    publish: () => void;
};
type Props = {
    CustomComponent?: CustomPublishButtonType;
};
export declare const Publish: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map