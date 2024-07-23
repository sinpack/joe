"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return sendEmail;
    }
});
async function sendEmail(message) {
    let result;
    try {
        const email = await this.email;
        result = await email.transport.sendMail(message);
    } catch (err) {
        this.logger.error(err, `Failed to send mail to ${message.to}, subject: ${message.subject}`);
        return err;
    }
    return result;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbWFpbC9zZW5kRW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTZW5kTWFpbE9wdGlvbnMgfSBmcm9tICdub2RlbWFpbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWwobWVzc2FnZTogU2VuZE1haWxPcHRpb25zKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIGxldCByZXN1bHRcblxuICB0cnkge1xuICAgIGNvbnN0IGVtYWlsID0gYXdhaXQgdGhpcy5lbWFpbFxuICAgIHJlc3VsdCA9IGF3YWl0IGVtYWlsLnRyYW5zcG9ydC5zZW5kTWFpbChtZXNzYWdlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnIsIGBGYWlsZWQgdG8gc2VuZCBtYWlsIHRvICR7bWVzc2FnZS50b30sIHN1YmplY3Q6ICR7bWVzc2FnZS5zdWJqZWN0fWApXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJlbWFpbCIsInRyYW5zcG9ydCIsInNlbmRNYWlsIiwiZXJyIiwibG9nZ2VyIiwiZXJyb3IiLCJ0byIsInN1YmplY3QiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBRUE7OztlQUE4QkE7OztBQUFmLGVBQWVBLFVBQVVDLE9BQXdCO0lBQzlELElBQUlDO0lBRUosSUFBSTtRQUNGLE1BQU1DLFFBQVEsTUFBTSxJQUFJLENBQUNBLEtBQUs7UUFDOUJELFNBQVMsTUFBTUMsTUFBTUMsU0FBUyxDQUFDQyxRQUFRLENBQUNKO0lBQzFDLEVBQUUsT0FBT0ssS0FBSztRQUNaLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNGLEtBQUssQ0FBQyx1QkFBdUIsRUFBRUwsUUFBUVEsRUFBRSxDQUFDLFdBQVcsRUFBRVIsUUFBUVMsT0FBTyxDQUFDLENBQUM7UUFDMUYsT0FBT0o7SUFDVDtJQUVBLE9BQU9KO0FBQ1QifQ==