import React from 'react';
import type { FieldTypes } from '../../forms/field-types';
import type { GlobalEditViewProps } from '../types';
import './index.scss';
export type DefaultGlobalViewProps = GlobalEditViewProps & {
    disableRoutes?: boolean;
    fieldTypes: FieldTypes;
};
declare const DefaultGlobalView: React.FC<DefaultGlobalViewProps>;
export default DefaultGlobalView;
//# sourceMappingURL=Default.d.ts.map