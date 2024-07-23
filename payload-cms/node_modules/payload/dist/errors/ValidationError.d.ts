import type { TFunction } from 'i18next';
import APIError from './APIError';
declare class ValidationError extends APIError<{
    field: string;
    message: string;
}[]> {
    constructor(results: {
        field: string;
        message: string;
    }[], t?: TFunction);
}
export default ValidationError;
//# sourceMappingURL=ValidationError.d.ts.map