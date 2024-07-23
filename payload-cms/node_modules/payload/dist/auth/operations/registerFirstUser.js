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
const _errors = require("../../errors");
const _commitTransaction = require("../../utilities/commitTransaction");
const _initTransaction = require("../../utilities/initTransaction");
const _killTransaction = require("../../utilities/killTransaction");
async function registerFirstUser(args) {
    const { collection: { config, config: { auth: { verify }, slug } }, data, req, req: { payload } } = args;
    try {
        const shouldCommit = await (0, _initTransaction.initTransaction)(req);
        const doc = await payload.db.findOne({
            collection: config.slug,
            req
        });
        if (doc) throw new _errors.Forbidden(req.t);
        // /////////////////////////////////////
        // Register first user
        // /////////////////////////////////////
        const result = await payload.create({
            collection: slug,
            data,
            overrideAccess: true,
            req
        });
        // auto-verify (if applicable)
        if (verify) {
            await payload.update({
                id: result.id,
                collection: slug,
                data: {
                    _verified: true
                },
                req
            });
        }
        // /////////////////////////////////////
        // Log in new user
        // /////////////////////////////////////
        const { token } = await payload.login({
            ...args,
            collection: slug,
            req
        });
        const resultToReturn = {
            ...result,
            token
        };
        if (shouldCommit) await (0, _commitTransaction.commitTransaction)(req);
        return {
            message: 'Registered and logged in successfully. Welcome!',
            user: resultToReturn
        };
    } catch (error) {
        await (0, _killTransaction.killTransaction)(req);
        throw error;
    }
}
const _default = registerFirstUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVnaXN0ZXJGaXJzdFVzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgdHlwZSB7IE1hcmtPcHRpb25hbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnXG5cbmltcG9ydCB0eXBlIHsgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICcuLi8uLi8nXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vLi4vZXJyb3JzJ1xuaW1wb3J0IHsgY29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tbWl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJ1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbidcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzPFQgZXh0ZW5kcyB7IFtmaWVsZDogbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sXTogdW5rbm93biB9PiA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxuICBkYXRhOiBNYXJrT3B0aW9uYWw8VCwgJ2NyZWF0ZWRBdCcgfCAnaWQnIHwgJ3NpemVzJyB8ICd1cGRhdGVkQXQnPiAmIHtcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xuICB9XG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgcmVzOiBSZXNwb25zZVxufVxuXG5leHBvcnQgdHlwZSBSZXN1bHQ8VD4gPSB7XG4gIG1lc3NhZ2U6IHN0cmluZ1xuICB1c2VyOiBUXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyRmlyc3RVc2VyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBhcmdzOiBBcmd1bWVudHM8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPixcbik6IFByb21pc2U8UmVzdWx0PEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBhdXRoOiB7IHZlcmlmeSB9LFxuICAgICAgICBzbHVnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGEsXG4gICAgcmVxLFxuICAgIHJlcTogeyBwYXlsb2FkIH0sXG4gIH0gPSBhcmdzXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKVxuXG4gICAgY29uc3QgZG9jID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lKHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbmZpZy5zbHVnLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICBpZiAoZG9jKSB0aHJvdyBuZXcgRm9yYmlkZGVuKHJlcS50KVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJlZ2lzdGVyIGZpcnN0IHVzZXJcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmNyZWF0ZTxUU2x1Zz4oe1xuICAgICAgY29sbGVjdGlvbjogc2x1ZyBhcyBUU2x1ZyxcbiAgICAgIGRhdGEsXG4gICAgICBvdmVycmlkZUFjY2VzczogdHJ1ZSxcbiAgICAgIHJlcSxcbiAgICB9KVxuXG4gICAgLy8gYXV0by12ZXJpZnkgKGlmIGFwcGxpY2FibGUpXG4gICAgaWYgKHZlcmlmeSkge1xuICAgICAgYXdhaXQgcGF5bG9hZC51cGRhdGUoe1xuICAgICAgICBpZDogcmVzdWx0LmlkLFxuICAgICAgICBjb2xsZWN0aW9uOiBzbHVnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgX3ZlcmlmaWVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICByZXEsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBMb2cgaW4gbmV3IHVzZXJcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBwYXlsb2FkLmxvZ2luKHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgICBjb2xsZWN0aW9uOiBzbHVnLFxuICAgICAgcmVxLFxuICAgIH0pXG5cbiAgICBjb25zdCByZXN1bHRUb1JldHVybiA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIHRva2VuLFxuICAgIH1cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IGNvbW1pdFRyYW5zYWN0aW9uKHJlcSlcblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiAnUmVnaXN0ZXJlZCBhbmQgbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseS4gV2VsY29tZSEnLFxuICAgICAgdXNlcjogcmVzdWx0VG9SZXR1cm4sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckZpcnN0VXNlclxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyRmlyc3RVc2VyIiwiYXJncyIsImNvbGxlY3Rpb24iLCJjb25maWciLCJhdXRoIiwidmVyaWZ5Iiwic2x1ZyIsImRhdGEiLCJyZXEiLCJwYXlsb2FkIiwic2hvdWxkQ29tbWl0IiwiaW5pdFRyYW5zYWN0aW9uIiwiZG9jIiwiZGIiLCJmaW5kT25lIiwiRm9yYmlkZGVuIiwidCIsInJlc3VsdCIsImNyZWF0ZSIsIm92ZXJyaWRlQWNjZXNzIiwidXBkYXRlIiwiaWQiLCJfdmVyaWZpZWQiLCJ0b2tlbiIsImxvZ2luIiwicmVzdWx0VG9SZXR1cm4iLCJjb21taXRUcmFuc2FjdGlvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwiZXJyb3IiLCJraWxsVHJhbnNhY3Rpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUdBOzs7ZUFBQTs7O3dCQWhHMEI7bUNBQ1E7aUNBQ0Y7aUNBQ0E7QUFpQmhDLGVBQWVBLGtCQUNiQyxJQUFxRDtJQUVyRCxNQUFNLEVBQ0pDLFlBQVksRUFDVkMsTUFBTSxFQUNOQSxRQUFRLEVBQ05DLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEVBQ2hCQyxJQUFJLEVBQ0wsRUFDRixFQUNEQyxJQUFJLEVBQ0pDLEdBQUcsRUFDSEEsS0FBSyxFQUFFQyxPQUFPLEVBQUUsRUFDakIsR0FBR1I7SUFFSixJQUFJO1FBQ0YsTUFBTVMsZUFBZSxNQUFNQyxJQUFBQSxnQ0FBZSxFQUFDSDtRQUUzQyxNQUFNSSxNQUFNLE1BQU1ILFFBQVFJLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDO1lBQ25DWixZQUFZQyxPQUFPRyxJQUFJO1lBQ3ZCRTtRQUNGO1FBRUEsSUFBSUksS0FBSyxNQUFNLElBQUlHLGlCQUFTLENBQUNQLElBQUlRLENBQUM7UUFFbEMsd0NBQXdDO1FBQ3hDLHNCQUFzQjtRQUN0Qix3Q0FBd0M7UUFFeEMsTUFBTUMsU0FBUyxNQUFNUixRQUFRUyxNQUFNLENBQVE7WUFDekNoQixZQUFZSTtZQUNaQztZQUNBWSxnQkFBZ0I7WUFDaEJYO1FBQ0Y7UUFFQSw4QkFBOEI7UUFDOUIsSUFBSUgsUUFBUTtZQUNWLE1BQU1JLFFBQVFXLE1BQU0sQ0FBQztnQkFDbkJDLElBQUlKLE9BQU9JLEVBQUU7Z0JBQ2JuQixZQUFZSTtnQkFDWkMsTUFBTTtvQkFDSmUsV0FBVztnQkFDYjtnQkFDQWQ7WUFDRjtRQUNGO1FBRUEsd0NBQXdDO1FBQ3hDLGtCQUFrQjtRQUNsQix3Q0FBd0M7UUFFeEMsTUFBTSxFQUFFZSxLQUFLLEVBQUUsR0FBRyxNQUFNZCxRQUFRZSxLQUFLLENBQUM7WUFDcEMsR0FBR3ZCLElBQUk7WUFDUEMsWUFBWUk7WUFDWkU7UUFDRjtRQUVBLE1BQU1pQixpQkFBaUI7WUFDckIsR0FBR1IsTUFBTTtZQUNUTTtRQUNGO1FBRUEsSUFBSWIsY0FBYyxNQUFNZ0IsSUFBQUEsb0NBQWlCLEVBQUNsQjtRQUUxQyxPQUFPO1lBQ0xtQixTQUFTO1lBQ1RDLE1BQU1IO1FBQ1I7SUFDRixFQUFFLE9BQU9JLE9BQWdCO1FBQ3ZCLE1BQU1DLElBQUFBLGdDQUFlLEVBQUN0QjtRQUN0QixNQUFNcUI7SUFDUjtBQUNGO01BRUEsV0FBZTdCIn0=