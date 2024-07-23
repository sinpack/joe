import React from 'react';
import type { FieldTypes } from '../../../forms/field-types';
import type { CollectionEditViewProps } from '../../types';
import './index.scss';
export type DefaultEditViewProps = CollectionEditViewProps & {
    customHeader?: React.ReactNode;
    disableRoutes?: boolean;
    fieldTypes: FieldTypes;
};
declare const DefaultEditView: React.FC<DefaultEditViewProps>;
export default DefaultEditView;
//# sourceMappingURL=Default.d.ts.map