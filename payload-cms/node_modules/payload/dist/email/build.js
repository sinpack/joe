"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return buildEmail;
    }
});
const _nodemailer = /*#__PURE__*/ _interop_require_default(require("nodemailer"));
const _types = require("../config/types");
const _errors = require("../errors");
const _mockHandler = /*#__PURE__*/ _interop_require_default(require("./mockHandler"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function handleTransport(transport, email, logger) {
    try {
        await transport.verify();
    } catch (err) {
        logger.error(`There is an error with the email configuration you have provided. ${err}`);
    }
    return {
        ...email,
        transport
    };
}
const ensureConfigHasFrom = (emailConfig)=>{
    if (!emailConfig?.fromName || !emailConfig?.fromAddress) {
        throw new _errors.InvalidConfiguration('Email fromName and fromAddress must be configured when transport is configured');
    }
};
const handleMockAccount = async (emailConfig, logger)=>{
    let mockAccount;
    try {
        mockAccount = await (0, _mockHandler.default)(emailConfig);
        const { account: { pass, user, web } } = mockAccount;
        if (emailConfig?.logMockCredentials) {
            logger.info('E-mail configured with mock configuration');
            logger.info(`Log into mock email provider at ${web}`);
            logger.info(`Mock email account username: ${user}`);
            logger.info(`Mock email account password: ${pass}`);
        }
    } catch (err) {
        logger.error({
            err,
            msg: 'There was a problem setting up the mock email handler'
        });
    }
    return mockAccount;
};
async function buildEmail(emailConfig, logger) {
    if (!emailConfig) {
        return handleMockAccount(emailConfig, logger);
    }
    if ((0, _types.hasTransport)(emailConfig) && emailConfig.transport) {
        ensureConfigHasFrom(emailConfig);
        const email = {
            ...emailConfig
        };
        const { transport } = emailConfig;
        return handleTransport(transport, email, logger);
    }
    if ((0, _types.hasTransportOptions)(emailConfig) && emailConfig.transportOptions) {
        ensureConfigHasFrom(emailConfig);
        const email = {
            ...emailConfig
        };
        const transport = _nodemailer.default.createTransport(emailConfig.transportOptions);
        return handleTransport(transport, email, logger);
    }
    return handleMockAccount(emailConfig, logger);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9idWlsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRyYW5zcG9ydGVyIH0gZnJvbSAnbm9kZW1haWxlcidcbmltcG9ydCB0eXBlIHsgTG9nZ2VyIH0gZnJvbSAncGlubydcblxuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcidcblxuaW1wb3J0IHR5cGUgeyBFbWFpbE9wdGlvbnMsIEVtYWlsVHJhbnNwb3J0IH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBCdWlsZEVtYWlsUmVzdWx0LCBNb2NrRW1haWxIYW5kbGVyIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgaGFzVHJhbnNwb3J0LCBoYXNUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHsgSW52YWxpZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9lcnJvcnMnXG5pbXBvcnQgbW9ja0hhbmRsZXIgZnJvbSAnLi9tb2NrSGFuZGxlcidcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVHJhbnNwb3J0KFxuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydGVyLFxuICBlbWFpbDogRW1haWxUcmFuc3BvcnQsXG4gIGxvZ2dlcjogTG9nZ2VyLFxuKTogQnVpbGRFbWFpbFJlc3VsdCB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdHJhbnNwb3J0LnZlcmlmeSgpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ2dlci5lcnJvcihgVGhlcmUgaXMgYW4gZXJyb3Igd2l0aCB0aGUgZW1haWwgY29uZmlndXJhdGlvbiB5b3UgaGF2ZSBwcm92aWRlZC4gJHtlcnJ9YClcbiAgfVxuXG4gIHJldHVybiB7IC4uLmVtYWlsLCB0cmFuc3BvcnQgfVxufVxuXG5jb25zdCBlbnN1cmVDb25maWdIYXNGcm9tID0gKGVtYWlsQ29uZmlnOiBFbWFpbE9wdGlvbnMpID0+IHtcbiAgaWYgKCFlbWFpbENvbmZpZz8uZnJvbU5hbWUgfHwgIWVtYWlsQ29uZmlnPy5mcm9tQWRkcmVzcykge1xuICAgIHRocm93IG5ldyBJbnZhbGlkQ29uZmlndXJhdGlvbihcbiAgICAgICdFbWFpbCBmcm9tTmFtZSBhbmQgZnJvbUFkZHJlc3MgbXVzdCBiZSBjb25maWd1cmVkIHdoZW4gdHJhbnNwb3J0IGlzIGNvbmZpZ3VyZWQnLFxuICAgIClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVNb2NrQWNjb3VudCA9IGFzeW5jIChlbWFpbENvbmZpZzogRW1haWxPcHRpb25zLCBsb2dnZXI6IExvZ2dlcikgPT4ge1xuICBsZXQgbW9ja0FjY291bnQ6IE1vY2tFbWFpbEhhbmRsZXJcbiAgdHJ5IHtcbiAgICBtb2NrQWNjb3VudCA9IGF3YWl0IG1vY2tIYW5kbGVyKGVtYWlsQ29uZmlnKVxuICAgIGNvbnN0IHtcbiAgICAgIGFjY291bnQ6IHsgcGFzcywgdXNlciwgd2ViIH0sXG4gICAgfSA9IG1vY2tBY2NvdW50XG4gICAgaWYgKGVtYWlsQ29uZmlnPy5sb2dNb2NrQ3JlZGVudGlhbHMpIHtcbiAgICAgIGxvZ2dlci5pbmZvKCdFLW1haWwgY29uZmlndXJlZCB3aXRoIG1vY2sgY29uZmlndXJhdGlvbicpXG4gICAgICBsb2dnZXIuaW5mbyhgTG9nIGludG8gbW9jayBlbWFpbCBwcm92aWRlciBhdCAke3dlYn1gKVxuICAgICAgbG9nZ2VyLmluZm8oYE1vY2sgZW1haWwgYWNjb3VudCB1c2VybmFtZTogJHt1c2VyfWApXG4gICAgICBsb2dnZXIuaW5mbyhgTW9jayBlbWFpbCBhY2NvdW50IHBhc3N3b3JkOiAke3Bhc3N9YClcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ2dlci5lcnJvcih7IGVyciwgbXNnOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSBzZXR0aW5nIHVwIHRoZSBtb2NrIGVtYWlsIGhhbmRsZXInIH0pXG4gIH1cbiAgcmV0dXJuIG1vY2tBY2NvdW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkRW1haWwoXG4gIGVtYWlsQ29uZmlnOiBFbWFpbE9wdGlvbnMgfCB1bmRlZmluZWQsXG4gIGxvZ2dlcjogTG9nZ2VyLFxuKTogQnVpbGRFbWFpbFJlc3VsdCB7XG4gIGlmICghZW1haWxDb25maWcpIHtcbiAgICByZXR1cm4gaGFuZGxlTW9ja0FjY291bnQoZW1haWxDb25maWcsIGxvZ2dlcilcbiAgfVxuXG4gIGlmIChoYXNUcmFuc3BvcnQoZW1haWxDb25maWcpICYmIGVtYWlsQ29uZmlnLnRyYW5zcG9ydCkge1xuICAgIGVuc3VyZUNvbmZpZ0hhc0Zyb20oZW1haWxDb25maWcpXG4gICAgY29uc3QgZW1haWwgPSB7IC4uLmVtYWlsQ29uZmlnIH1cbiAgICBjb25zdCB7IHRyYW5zcG9ydCB9OiB7IHRyYW5zcG9ydDogVHJhbnNwb3J0ZXIgfSA9IGVtYWlsQ29uZmlnXG4gICAgcmV0dXJuIGhhbmRsZVRyYW5zcG9ydCh0cmFuc3BvcnQsIGVtYWlsLCBsb2dnZXIpXG4gIH1cblxuICBpZiAoaGFzVHJhbnNwb3J0T3B0aW9ucyhlbWFpbENvbmZpZykgJiYgZW1haWxDb25maWcudHJhbnNwb3J0T3B0aW9ucykge1xuICAgIGVuc3VyZUNvbmZpZ0hhc0Zyb20oZW1haWxDb25maWcpXG4gICAgY29uc3QgZW1haWwgPSB7IC4uLmVtYWlsQ29uZmlnIH0gYXMgRW1haWxUcmFuc3BvcnRcbiAgICBjb25zdCB0cmFuc3BvcnQgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydChlbWFpbENvbmZpZy50cmFuc3BvcnRPcHRpb25zKVxuICAgIHJldHVybiBoYW5kbGVUcmFuc3BvcnQodHJhbnNwb3J0LCBlbWFpbCwgbG9nZ2VyKVxuICB9XG5cbiAgcmV0dXJuIGhhbmRsZU1vY2tBY2NvdW50KGVtYWlsQ29uZmlnLCBsb2dnZXIpXG59XG4iXSwibmFtZXMiOlsiYnVpbGRFbWFpbCIsImhhbmRsZVRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImVtYWlsIiwibG9nZ2VyIiwidmVyaWZ5IiwiZXJyIiwiZXJyb3IiLCJlbnN1cmVDb25maWdIYXNGcm9tIiwiZW1haWxDb25maWciLCJmcm9tTmFtZSIsImZyb21BZGRyZXNzIiwiSW52YWxpZENvbmZpZ3VyYXRpb24iLCJoYW5kbGVNb2NrQWNjb3VudCIsIm1vY2tBY2NvdW50IiwibW9ja0hhbmRsZXIiLCJhY2NvdW50IiwicGFzcyIsInVzZXIiLCJ3ZWIiLCJsb2dNb2NrQ3JlZGVudGlhbHMiLCJpbmZvIiwibXNnIiwiaGFzVHJhbnNwb3J0IiwiaGFzVHJhbnNwb3J0T3B0aW9ucyIsInRyYW5zcG9ydE9wdGlvbnMiLCJub2RlbWFpbGVyIiwiY3JlYXRlVHJhbnNwb3J0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFxREE7OztlQUE4QkE7OzttRUFsRFA7dUJBSzJCO3dCQUNiO29FQUNiOzs7Ozs7QUFFeEIsZUFBZUMsZ0JBQ2JDLFNBQXNCLEVBQ3RCQyxLQUFxQixFQUNyQkMsTUFBYztJQUVkLElBQUk7UUFDRixNQUFNRixVQUFVRyxNQUFNO0lBQ3hCLEVBQUUsT0FBT0MsS0FBSztRQUNaRixPQUFPRyxLQUFLLENBQUMsQ0FBQyxrRUFBa0UsRUFBRUQsSUFBSSxDQUFDO0lBQ3pGO0lBRUEsT0FBTztRQUFFLEdBQUdILEtBQUs7UUFBRUQ7SUFBVTtBQUMvQjtBQUVBLE1BQU1NLHNCQUFzQixDQUFDQztJQUMzQixJQUFJLENBQUNBLGFBQWFDLFlBQVksQ0FBQ0QsYUFBYUUsYUFBYTtRQUN2RCxNQUFNLElBQUlDLDRCQUFvQixDQUM1QjtJQUVKO0FBQ0Y7QUFFQSxNQUFNQyxvQkFBb0IsT0FBT0osYUFBMkJMO0lBQzFELElBQUlVO0lBQ0osSUFBSTtRQUNGQSxjQUFjLE1BQU1DLElBQUFBLG9CQUFXLEVBQUNOO1FBQ2hDLE1BQU0sRUFDSk8sU0FBUyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFLEVBQzdCLEdBQUdMO1FBQ0osSUFBSUwsYUFBYVcsb0JBQW9CO1lBQ25DaEIsT0FBT2lCLElBQUksQ0FBQztZQUNaakIsT0FBT2lCLElBQUksQ0FBQyxDQUFDLGdDQUFnQyxFQUFFRixJQUFJLENBQUM7WUFDcERmLE9BQU9pQixJQUFJLENBQUMsQ0FBQyw2QkFBNkIsRUFBRUgsS0FBSyxDQUFDO1lBQ2xEZCxPQUFPaUIsSUFBSSxDQUFDLENBQUMsNkJBQTZCLEVBQUVKLEtBQUssQ0FBQztRQUNwRDtJQUNGLEVBQUUsT0FBT1gsS0FBSztRQUNaRixPQUFPRyxLQUFLLENBQUM7WUFBRUQ7WUFBS2dCLEtBQUs7UUFBd0Q7SUFDbkY7SUFDQSxPQUFPUjtBQUNUO0FBRWUsZUFBZWQsV0FDNUJTLFdBQXFDLEVBQ3JDTCxNQUFjO0lBRWQsSUFBSSxDQUFDSyxhQUFhO1FBQ2hCLE9BQU9JLGtCQUFrQkosYUFBYUw7SUFDeEM7SUFFQSxJQUFJbUIsSUFBQUEsbUJBQVksRUFBQ2QsZ0JBQWdCQSxZQUFZUCxTQUFTLEVBQUU7UUFDdERNLG9CQUFvQkM7UUFDcEIsTUFBTU4sUUFBUTtZQUFFLEdBQUdNLFdBQVc7UUFBQztRQUMvQixNQUFNLEVBQUVQLFNBQVMsRUFBRSxHQUErQk87UUFDbEQsT0FBT1IsZ0JBQWdCQyxXQUFXQyxPQUFPQztJQUMzQztJQUVBLElBQUlvQixJQUFBQSwwQkFBbUIsRUFBQ2YsZ0JBQWdCQSxZQUFZZ0IsZ0JBQWdCLEVBQUU7UUFDcEVqQixvQkFBb0JDO1FBQ3BCLE1BQU1OLFFBQVE7WUFBRSxHQUFHTSxXQUFXO1FBQUM7UUFDL0IsTUFBTVAsWUFBWXdCLG1CQUFVLENBQUNDLGVBQWUsQ0FBQ2xCLFlBQVlnQixnQkFBZ0I7UUFDekUsT0FBT3hCLGdCQUFnQkMsV0FBV0MsT0FBT0M7SUFDM0M7SUFFQSxPQUFPUyxrQkFBa0JKLGFBQWFMO0FBQ3hDIn0=