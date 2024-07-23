import React from 'react';
import type { GeneratePreviewURL } from '../../../../config/types';
export type CustomPreviewButtonProps = React.ComponentType<DefaultPreviewButtonProps & {
    DefaultButton: React.ComponentType<DefaultPreviewButtonProps>;
}>;
export type DefaultPreviewButtonProps = {
    disabled: boolean;
    label: string;
    preview: () => void;
};
type Props = {
    CustomComponent?: CustomPreviewButtonProps;
    generatePreviewURL?: GeneratePreviewURL;
};
declare const PreviewButton: React.FC<Props>;
export default PreviewButton;
//# sourceMappingURL=index.d.ts.map