import type { Express, Router } from 'express';
import type { ExecutionResult, GraphQLSchema, ValidationRule } from 'graphql';
import type { OperationArgs, Request as graphQLRequest } from 'graphql-http/lib/handler';
import type { SendMailOptions } from 'nodemailer';
import type pino from 'pino';
import type { DatabaseAdapter, GeneratedTypes } from './';
import type { Result as ForgotPasswordResult } from './auth/operations/forgotPassword';
import type { Options as ForgotPasswordOptions } from './auth/operations/local/forgotPassword';
import type { Options as LoginOptions } from './auth/operations/local/login';
import type { Options as ResetPasswordOptions } from './auth/operations/local/resetPassword';
import type { Options as UnlockOptions } from './auth/operations/local/unlock';
import type { Options as VerifyEmailOptions } from './auth/operations/local/verifyEmail';
import type { Result as LoginResult } from './auth/operations/login';
import type { Result as ResetPasswordResult } from './auth/operations/resetPassword';
import type { BulkOperationResult, Collection } from './collections/config/types';
import type { Options as CountOptions } from './collections/operations/local/count';
import type { Options as CreateOptions } from './collections/operations/local/create';
import type { ByIDOptions as DeleteByIDOptions, ManyOptions as DeleteManyOptions } from './collections/operations/local/delete';
import type { Options as FindOptions } from './collections/operations/local/find';
import type { Options as FindByIDOptions } from './collections/operations/local/findByID';
import type { Options as FindVersionByIDOptions } from './collections/operations/local/findVersionByID';
import type { Options as FindVersionsOptions } from './collections/operations/local/findVersions';
import type { Options as RestoreVersionOptions } from './collections/operations/local/restoreVersion';
import type { ByIDOptions as UpdateByIDOptions, ManyOptions as UpdateManyOptions } from './collections/operations/local/update';
import type { EmailOptions, InitOptions, SanitizedConfig } from './config/types';
import type { PaginatedDocs } from './database/types';
import type { BuildEmailResult } from './email/types';
import type { PayloadAuthenticate } from './express/middleware/authenticate';
import type { ErrorHandler } from './express/middleware/errorHandler';
import type { Globals } from './globals/config/types';
import type { Options as FindGlobalOptions } from './globals/operations/local/findOne';
import type { Options as FindGlobalVersionByIDOptions } from './globals/operations/local/findVersionByID';
import type { Options as FindGlobalVersionsOptions } from './globals/operations/local/findVersions';
import type { Options as RestoreGlobalVersionOptions } from './globals/operations/local/restoreVersion';
import type { Options as UpdateGlobalOptions } from './globals/operations/local/update';
import type { TypeWithVersion } from './versions/types';
import { decrypt, encrypt } from './auth/crypto';
/**
 * @description Payload
 */
export declare class BasePayload<TGeneratedTypes extends GeneratedTypes> {
    Mutation: {
        fields: {
            [key: string]: any;
        };
        name: string;
    };
    Query: {
        fields: {
            [key: string]: any;
        };
        name: string;
    };
    authenticate: PayloadAuthenticate;
    collections: {
        [slug: number | string | symbol]: Collection;
    };
    config: SanitizedConfig;
    /**
     * @description Performs count operation
     * @param options
     * @returns count of documents satisfying query
     */
    count: <T extends keyof TGeneratedTypes["collections"]>(options: CountOptions<T>) => Promise<{
        totalDocs: number;
    }>;
    /**
     * @description Performs create operation
     * @param options
     * @returns created document
     */
    create: <T extends keyof TGeneratedTypes["collections"]>(options: CreateOptions<T>) => Promise<TGeneratedTypes["collections"][T]>;
    db: DatabaseAdapter;
    decrypt: typeof decrypt;
    email: BuildEmailResult;
    emailOptions: EmailOptions;
    encrypt: typeof encrypt;
    errorHandler: ErrorHandler;
    express?: Express;
    extensions: (args: {
        args: OperationArgs<any>;
        req: graphQLRequest<unknown, unknown>;
        result: ExecutionResult;
    }) => Promise<any>;
    /**
     * @description Find documents with criteria
     * @param options
     * @returns documents satisfying query
     */
    find: <T extends keyof TGeneratedTypes["collections"]>(options: FindOptions<T>) => Promise<PaginatedDocs<TGeneratedTypes["collections"][T]>>;
    findByID: <T extends keyof TGeneratedTypes["collections"]>(options: FindByIDOptions<T>) => Promise<TGeneratedTypes["collections"][T]>;
    findGlobal: <T extends keyof TGeneratedTypes["globals"]>(options: FindGlobalOptions<T>) => Promise<TGeneratedTypes["globals"][T]>;
    /**
     * @description Find global version by ID
     * @param options
     * @returns global version with specified ID
     */
    findGlobalVersionByID: <T extends keyof TGeneratedTypes["globals"]>(options: FindGlobalVersionByIDOptions<T>) => Promise<TypeWithVersion<TGeneratedTypes["globals"][T]>>;
    /**
     * @description Find global versions with criteria
     * @param options
     * @returns versions satisfying query
     */
    findGlobalVersions: <T extends keyof TGeneratedTypes["globals"]>(options: FindGlobalVersionsOptions<T>) => Promise<PaginatedDocs<TypeWithVersion<TGeneratedTypes["globals"][T]>>>;
    /**
     * @description Find version by ID
     * @param options
     * @returns version with specified ID
     */
    findVersionByID: <T extends keyof TGeneratedTypes["collections"]>(options: FindVersionByIDOptions<T>) => Promise<TypeWithVersion<TGeneratedTypes["collections"][T]>>;
    /**
     * @description Find versions with criteria
     * @param options
     * @returns versions satisfying query
     */
    findVersions: <T extends keyof TGeneratedTypes["collections"]>(options: FindVersionsOptions<T>) => Promise<PaginatedDocs<TypeWithVersion<TGeneratedTypes["collections"][T]>>>;
    forgotPassword: <T extends keyof TGeneratedTypes["collections"]>(options: ForgotPasswordOptions<T>) => Promise<ForgotPasswordResult>;
    getAPIURL: () => string;
    getAdminURL: () => string;
    globals: Globals;
    local: boolean;
    logger: pino.Logger;
    login: <T extends keyof TGeneratedTypes["collections"]>(options: LoginOptions<T>) => Promise<LoginResult & {
        user: TGeneratedTypes["collections"][T];
    }>;
    /**
     * @description Find document by ID
     * @param options
     * @returns document with specified ID
     */
    resetPassword: <T extends keyof TGeneratedTypes["collections"]>(options: ResetPasswordOptions<T>) => Promise<ResetPasswordResult>;
    /**
     * @description Restore global version by ID
     * @param options
     * @returns version with specified ID
     */
    restoreGlobalVersion: <T extends keyof TGeneratedTypes["globals"]>(options: RestoreGlobalVersionOptions<T>) => Promise<TGeneratedTypes["globals"][T]>;
    /**
     * @description Restore version by ID
     * @param options
     * @returns version with specified ID
     */
    restoreVersion: <T extends keyof TGeneratedTypes["collections"]>(options: RestoreVersionOptions<T>) => Promise<TGeneratedTypes["collections"][T]>;
    router?: Router;
    schema: GraphQLSchema;
    secret: string;
    sendEmail: (message: SendMailOptions) => Promise<unknown>;
    types: {
        arrayTypes: any;
        blockInputTypes: any;
        blockTypes: any;
        fallbackLocaleInputType?: any;
        groupTypes: any;
        localeInputType?: any;
    };
    unlock: <T extends keyof TGeneratedTypes["collections"]>(options: UnlockOptions<T>) => Promise<boolean>;
    updateGlobal: <T extends keyof TGeneratedTypes["globals"]>(options: UpdateGlobalOptions<T>) => Promise<TGeneratedTypes["globals"][T]>;
    validationRules: (args: OperationArgs<any>) => ValidationRule[];
    verifyEmail: <T extends keyof TGeneratedTypes["collections"]>(options: VerifyEmailOptions<T>) => Promise<boolean>;
    versions: {
        [slug: string]: any;
    };
    /**
     * @description delete one or more documents
     * @param options
     * @returns Updated document(s)
     */
    delete<T extends keyof TGeneratedTypes['collections']>(options: DeleteByIDOptions<T>): Promise<TGeneratedTypes['collections'][T]>;
    delete<T extends keyof TGeneratedTypes['collections']>(options: DeleteManyOptions<T>): Promise<BulkOperationResult<T>>;
    /**
     * @description Initializes Payload
     * @param options
     */
    init(options: InitOptions): Promise<Payload>;
    update<T extends keyof TGeneratedTypes['collections']>(options: UpdateManyOptions<T>): Promise<BulkOperationResult<T>>;
    /**
     * @description Update one or more documents
     * @param options
     * @returns Updated document(s)
     */
    update<T extends keyof TGeneratedTypes['collections']>(options: UpdateByIDOptions<T>): Promise<TGeneratedTypes['collections'][T]>;
}
export type Payload = BasePayload<GeneratedTypes>;
export declare const getPayload: (options: InitOptions) => Promise<Payload>;
//# sourceMappingURL=payload.d.ts.map