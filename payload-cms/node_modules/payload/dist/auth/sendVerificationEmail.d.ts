import type { Collection } from '../collections/config/types';
import type { EmailOptions, SanitizedConfig } from '../config/types';
import type { PayloadRequest } from '../express/types';
import type { Payload } from '../payload';
import type { User } from './types';
type Args = {
    collection: Collection;
    config: SanitizedConfig;
    disableEmail: boolean;
    emailOptions: EmailOptions;
    req: PayloadRequest;
    sendEmail: Payload['sendEmail'];
    token: string;
    user: User;
};
declare function sendVerificationEmail(args: Args): Promise<void>;
export default sendVerificationEmail;
//# sourceMappingURL=sendVerificationEmail.d.ts.map