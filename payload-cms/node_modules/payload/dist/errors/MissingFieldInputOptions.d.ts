import type { RadioField, SelectField } from '../fields/config/types';
import APIError from './APIError';
declare class MissingFieldInputOptions extends APIError {
    constructor(field: RadioField | SelectField);
}
export default MissingFieldInputOptions;
//# sourceMappingURL=MissingFieldInputOptions.d.ts.map