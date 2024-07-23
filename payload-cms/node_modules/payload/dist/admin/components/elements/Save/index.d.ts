import React from 'react';
export type CustomSaveButtonProps = React.ComponentType<DefaultSaveButtonProps & {
    DefaultButton: React.ComponentType<DefaultSaveButtonProps>;
}>;
type DefaultSaveButtonProps = {
    label: string;
    save: () => void;
};
type Props = {
    CustomComponent?: CustomSaveButtonProps;
};
export declare const Save: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map