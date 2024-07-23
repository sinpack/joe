"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
async function sendVerificationEmail(args) {
    // Verify token from e-mail
    const { collection: { config: collectionConfig }, config, disableEmail, emailOptions, req, sendEmail, token, user } = args;
    if (!disableEmail) {
        const serverURL = config.serverURL !== null && config.serverURL !== '' ? config.serverURL : `${req.protocol}://${req.get('host')}`;
        const verificationURL = `${serverURL}${config.routes.admin}/${collectionConfig.slug}/verify/${token}`;
        let html = `${req.t('authentication:newAccountCreated', {
            interpolation: {
                escapeValue: false
            },
            serverURL: config.serverURL,
            verificationURL
        })}`;
        const verify = collectionConfig.auth.verify;
        // Allow config to override email content
        if (typeof verify.generateEmailHTML === 'function') {
            html = await verify.generateEmailHTML({
                req,
                token,
                user
            });
        }
        let subject = req.t('authentication:verifyYourEmail');
        // Allow config to override email subject
        if (typeof verify.generateEmailSubject === 'function') {
            subject = await verify.generateEmailSubject({
                req,
                token,
                user
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        sendEmail({
            from: `"${emailOptions.fromName}" <${emailOptions.fromAddress}>`,
            html,
            subject,
            to: user.email
        });
    }
}
const _default = sendVerificationEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL3NlbmRWZXJpZmljYXRpb25FbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEVtYWlsT3B0aW9ucywgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuaW1wb3J0IHR5cGUgeyBVc2VyLCBWZXJpZnlDb25maWcgfSBmcm9tICcuL3R5cGVzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgZGlzYWJsZUVtYWlsOiBib29sZWFuXG4gIGVtYWlsT3B0aW9uczogRW1haWxPcHRpb25zXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2VuZEVtYWlsOiBQYXlsb2FkWydzZW5kRW1haWwnXVxuICB0b2tlbjogc3RyaW5nXG4gIHVzZXI6IFVzZXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZFZlcmlmaWNhdGlvbkVtYWlsKGFyZ3M6IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gVmVyaWZ5IHRva2VuIGZyb20gZS1tYWlsXG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiB7IGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyB9LFxuICAgIGNvbmZpZyxcbiAgICBkaXNhYmxlRW1haWwsXG4gICAgZW1haWxPcHRpb25zLFxuICAgIHJlcSxcbiAgICBzZW5kRW1haWwsXG4gICAgdG9rZW4sXG4gICAgdXNlcixcbiAgfSA9IGFyZ3NcblxuICBpZiAoIWRpc2FibGVFbWFpbCkge1xuICAgIGNvbnN0IHNlcnZlclVSTCA9XG4gICAgICBjb25maWcuc2VydmVyVVJMICE9PSBudWxsICYmIGNvbmZpZy5zZXJ2ZXJVUkwgIT09ICcnXG4gICAgICAgID8gY29uZmlnLnNlcnZlclVSTFxuICAgICAgICA6IGAke3JlcS5wcm90b2NvbH06Ly8ke3JlcS5nZXQoJ2hvc3QnKX1gXG5cbiAgICBjb25zdCB2ZXJpZmljYXRpb25VUkwgPSBgJHtzZXJ2ZXJVUkx9JHtjb25maWcucm91dGVzLmFkbWlufS8ke2NvbGxlY3Rpb25Db25maWcuc2x1Z30vdmVyaWZ5LyR7dG9rZW59YFxuXG4gICAgbGV0IGh0bWwgPSBgJHtyZXEudCgnYXV0aGVudGljYXRpb246bmV3QWNjb3VudENyZWF0ZWQnLCB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxuICAgICAgc2VydmVyVVJMOiBjb25maWcuc2VydmVyVVJMLFxuICAgICAgdmVyaWZpY2F0aW9uVVJMLFxuICAgIH0pfWBcblxuICAgIGNvbnN0IHZlcmlmeSA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkgYXMgVmVyaWZ5Q29uZmlnXG5cbiAgICAvLyBBbGxvdyBjb25maWcgdG8gb3ZlcnJpZGUgZW1haWwgY29udGVudFxuICAgIGlmICh0eXBlb2YgdmVyaWZ5LmdlbmVyYXRlRW1haWxIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gYXdhaXQgdmVyaWZ5LmdlbmVyYXRlRW1haWxIVE1MKHtcbiAgICAgICAgcmVxLFxuICAgICAgICB0b2tlbixcbiAgICAgICAgdXNlcixcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IHN1YmplY3QgPSByZXEudCgnYXV0aGVudGljYXRpb246dmVyaWZ5WW91ckVtYWlsJylcblxuICAgIC8vIEFsbG93IGNvbmZpZyB0byBvdmVycmlkZSBlbWFpbCBzdWJqZWN0XG4gICAgaWYgKHR5cGVvZiB2ZXJpZnkuZ2VuZXJhdGVFbWFpbFN1YmplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN1YmplY3QgPSBhd2FpdCB2ZXJpZnkuZ2VuZXJhdGVFbWFpbFN1YmplY3Qoe1xuICAgICAgICByZXEsXG4gICAgICAgIHRva2VuLFxuICAgICAgICB1c2VyLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgc2VuZEVtYWlsKHtcbiAgICAgIGZyb206IGBcIiR7ZW1haWxPcHRpb25zLmZyb21OYW1lfVwiIDwke2VtYWlsT3B0aW9ucy5mcm9tQWRkcmVzc30+YCxcbiAgICAgIGh0bWwsXG4gICAgICBzdWJqZWN0LFxuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kVmVyaWZpY2F0aW9uRW1haWxcbiJdLCJuYW1lcyI6WyJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJhcmdzIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImNvbGxlY3Rpb25Db25maWciLCJkaXNhYmxlRW1haWwiLCJlbWFpbE9wdGlvbnMiLCJyZXEiLCJzZW5kRW1haWwiLCJ0b2tlbiIsInVzZXIiLCJzZXJ2ZXJVUkwiLCJwcm90b2NvbCIsImdldCIsInZlcmlmaWNhdGlvblVSTCIsInJvdXRlcyIsImFkbWluIiwic2x1ZyIsImh0bWwiLCJ0IiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwidmVyaWZ5IiwiYXV0aCIsImdlbmVyYXRlRW1haWxIVE1MIiwic3ViamVjdCIsImdlbmVyYXRlRW1haWxTdWJqZWN0IiwiZnJvbSIsImZyb21OYW1lIiwiZnJvbUFkZHJlc3MiLCJ0byIsImVtYWlsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRFQTs7O2VBQUE7OztBQTNEQSxlQUFlQSxzQkFBc0JDLElBQVU7SUFDN0MsMkJBQTJCO0lBQzNCLE1BQU0sRUFDSkMsWUFBWSxFQUFFQyxRQUFRQyxnQkFBZ0IsRUFBRSxFQUN4Q0QsTUFBTSxFQUNORSxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsR0FBRyxFQUNIQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsSUFBSSxFQUNMLEdBQUdUO0lBRUosSUFBSSxDQUFDSSxjQUFjO1FBQ2pCLE1BQU1NLFlBQ0pSLE9BQU9RLFNBQVMsS0FBSyxRQUFRUixPQUFPUSxTQUFTLEtBQUssS0FDOUNSLE9BQU9RLFNBQVMsR0FDaEIsQ0FBQyxFQUFFSixJQUFJSyxRQUFRLENBQUMsR0FBRyxFQUFFTCxJQUFJTSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBRTVDLE1BQU1DLGtCQUFrQixDQUFDLEVBQUVILFVBQVUsRUFBRVIsT0FBT1ksTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFWixpQkFBaUJhLElBQUksQ0FBQyxRQUFRLEVBQUVSLE1BQU0sQ0FBQztRQUVyRyxJQUFJUyxPQUFPLENBQUMsRUFBRVgsSUFBSVksQ0FBQyxDQUFDLG9DQUFvQztZQUN0REMsZUFBZTtnQkFBRUMsYUFBYTtZQUFNO1lBQ3BDVixXQUFXUixPQUFPUSxTQUFTO1lBQzNCRztRQUNGLEdBQUcsQ0FBQztRQUVKLE1BQU1RLFNBQVNsQixpQkFBaUJtQixJQUFJLENBQUNELE1BQU07UUFFM0MseUNBQXlDO1FBQ3pDLElBQUksT0FBT0EsT0FBT0UsaUJBQWlCLEtBQUssWUFBWTtZQUNsRE4sT0FBTyxNQUFNSSxPQUFPRSxpQkFBaUIsQ0FBQztnQkFDcENqQjtnQkFDQUU7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUVBLElBQUllLFVBQVVsQixJQUFJWSxDQUFDLENBQUM7UUFFcEIseUNBQXlDO1FBQ3pDLElBQUksT0FBT0csT0FBT0ksb0JBQW9CLEtBQUssWUFBWTtZQUNyREQsVUFBVSxNQUFNSCxPQUFPSSxvQkFBb0IsQ0FBQztnQkFDMUNuQjtnQkFDQUU7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUVBLG1FQUFtRTtRQUNuRUYsVUFBVTtZQUNSbUIsTUFBTSxDQUFDLENBQUMsRUFBRXJCLGFBQWFzQixRQUFRLENBQUMsR0FBRyxFQUFFdEIsYUFBYXVCLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEVYO1lBQ0FPO1lBQ0FLLElBQUlwQixLQUFLcUIsS0FBSztRQUNoQjtJQUNGO0FBQ0Y7TUFFQSxXQUFlL0IifQ==