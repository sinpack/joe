"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPayloadVersion: function() {
        return getPayloadVersion;
    },
    sendEvent: function() {
        return sendEvent;
    }
});
const _child_process = require("child_process");
const _conf = /*#__PURE__*/ _interop_require_default(require("conf"));
const _crypto = require("crypto");
const _findup = /*#__PURE__*/ _interop_require_default(require("find-up"));
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _oneWayHash = require("./oneWayHash");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sendEvent = async ({ event, payload })=>{
    if (payload.config.telemetry !== false) {
        try {
            const packageJSON = await getPackageJSON();
            const baseEvent = {
                envID: getEnvID(),
                nodeEnv: process.env.NODE_ENV || 'development',
                nodeVersion: process.version,
                payloadVersion: getPayloadVersion(packageJSON),
                projectID: getProjectID(payload, packageJSON)
            };
            await fetch('https://telemetry.payloadcms.com/events', {
                body: JSON.stringify({
                    ...baseEvent,
                    ...event
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post'
            });
        } catch (_) {
        // Eat any errors in sending telemetry event
        }
    }
};
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */ const getEnvID = ()=>{
    const conf = new _conf.default();
    const ENV_ID = 'envID';
    const val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    const generated = (0, _crypto.randomBytes)(32).toString('hex');
    conf.set(ENV_ID, generated);
    return generated;
};
const getProjectID = (payload, packageJSON)=>{
    const projectID = getGitID(payload) || getPackageJSONID(payload, packageJSON) || payload.config.serverURL || process.cwd();
    return (0, _oneWayHash.oneWayHash)(projectID, payload.secret);
};
const getGitID = (payload)=>{
    try {
        const originBuffer = (0, _child_process.execSync)('git config --local --get remote.origin.url', {
            stdio: 'pipe',
            timeout: 1000
        });
        return (0, _oneWayHash.oneWayHash)(String(originBuffer).trim(), payload.secret);
    } catch (_) {
        return null;
    }
};
const getPackageJSON = async ()=>{
    const packageJsonPath = await (0, _findup.default)('package.json', {
        cwd: __dirname
    });
    const jsonContent = JSON.parse(_fs.default.readFileSync(packageJsonPath, 'utf-8'));
    return jsonContent;
};
const getPackageJSONID = (payload, packageJSON)=>{
    return (0, _oneWayHash.oneWayHash)(packageJSON.name, payload.secret);
};
const getPayloadVersion = (packageJSON)=>{
    return packageJSON?.dependencies?.payload ?? '';
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCBDb25mIGZyb20gJ2NvbmYnXG5pbXBvcnQgeyByYW5kb21CeXRlcyB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCBmaW5kVXAgZnJvbSAnZmluZC11cCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCdcbmltcG9ydCB0eXBlIHsgQWRtaW5Jbml0RXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hZG1pbkluaXQnXG5pbXBvcnQgdHlwZSB7IFNlcnZlckluaXRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3NlcnZlckluaXQnXG5cbmltcG9ydCB7IG9uZVdheUhhc2ggfSBmcm9tICcuL29uZVdheUhhc2gnXG5cbmV4cG9ydCB0eXBlIEJhc2VFdmVudCA9IHtcbiAgZW52SUQ6IHN0cmluZ1xuICBub2RlRW52OiBzdHJpbmdcbiAgbm9kZVZlcnNpb246IHN0cmluZ1xuICBwYXlsb2FkVmVyc2lvbjogc3RyaW5nXG4gIHByb2plY3RJRDogc3RyaW5nXG59XG5cbnR5cGUgUGFja2FnZUpTT04gPSB7XG4gIGRlcGVuZGVuY2llczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgdW5kZWZpbmVkPlxuICBuYW1lOiBzdHJpbmdcbn1cblxudHlwZSBUZWxlbWV0cnlFdmVudCA9IEFkbWluSW5pdEV2ZW50IHwgU2VydmVySW5pdEV2ZW50XG5cbnR5cGUgQXJncyA9IHtcbiAgZXZlbnQ6IFRlbGVtZXRyeUV2ZW50XG4gIHBheWxvYWQ6IFBheWxvYWRcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRFdmVudCA9IGFzeW5jICh7IGV2ZW50LCBwYXlsb2FkIH06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKHBheWxvYWQuY29uZmlnLnRlbGVtZXRyeSAhPT0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFja2FnZUpTT04gPSBhd2FpdCBnZXRQYWNrYWdlSlNPTigpXG5cbiAgICAgIGNvbnN0IGJhc2VFdmVudDogQmFzZUV2ZW50ID0ge1xuICAgICAgICBlbnZJRDogZ2V0RW52SUQoKSxcbiAgICAgICAgbm9kZUVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgICAgICAgbm9kZVZlcnNpb246IHByb2Nlc3MudmVyc2lvbixcbiAgICAgICAgcGF5bG9hZFZlcnNpb246IGdldFBheWxvYWRWZXJzaW9uKHBhY2thZ2VKU09OKSxcbiAgICAgICAgcHJvamVjdElEOiBnZXRQcm9qZWN0SUQocGF5bG9hZCwgcGFja2FnZUpTT04pLFxuICAgICAgfVxuXG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90ZWxlbWV0cnkucGF5bG9hZGNtcy5jb20vZXZlbnRzJywge1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmJhc2VFdmVudCwgLi4uZXZlbnQgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gRWF0IGFueSBlcnJvcnMgaW4gc2VuZGluZyB0ZWxlbWV0cnkgZXZlbnRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIGEgcXVhc2ktcGVyc2lzdGVudCBpZGVudGlmaWVyIHVzZWQgdG8gZGVkdXBlIHJlY3VycmluZyBldmVudHMuIEl0J3NcbiAqIGdlbmVyYXRlZCBmcm9tIHJhbmRvbSBkYXRhIGFuZCBjb21wbGV0ZWx5IGFub255bW91cy5cbiAqL1xuY29uc3QgZ2V0RW52SUQgPSAoKTogc3RyaW5nID0+IHtcbiAgY29uc3QgY29uZiA9IG5ldyBDb25mKClcbiAgY29uc3QgRU5WX0lEID0gJ2VudklEJ1xuXG4gIGNvbnN0IHZhbCA9IGNvbmYuZ2V0KEVOVl9JRClcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWwgYXMgc3RyaW5nXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZWQgPSByYW5kb21CeXRlcygzMikudG9TdHJpbmcoJ2hleCcpXG4gIGNvbmYuc2V0KEVOVl9JRCwgZ2VuZXJhdGVkKVxuICByZXR1cm4gZ2VuZXJhdGVkXG59XG5cbmNvbnN0IGdldFByb2plY3RJRCA9IChwYXlsb2FkOiBQYXlsb2FkLCBwYWNrYWdlSlNPTjogUGFja2FnZUpTT04pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwcm9qZWN0SUQgPVxuICAgIGdldEdpdElEKHBheWxvYWQpIHx8XG4gICAgZ2V0UGFja2FnZUpTT05JRChwYXlsb2FkLCBwYWNrYWdlSlNPTikgfHxcbiAgICBwYXlsb2FkLmNvbmZpZy5zZXJ2ZXJVUkwgfHxcbiAgICBwcm9jZXNzLmN3ZCgpXG4gIHJldHVybiBvbmVXYXlIYXNoKHByb2plY3RJRCwgcGF5bG9hZC5zZWNyZXQpXG59XG5cbmNvbnN0IGdldEdpdElEID0gKHBheWxvYWQ6IFBheWxvYWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmlnaW5CdWZmZXIgPSBleGVjU3luYygnZ2l0IGNvbmZpZyAtLWxvY2FsIC0tZ2V0IHJlbW90ZS5vcmlnaW4udXJsJywge1xuICAgICAgc3RkaW86ICdwaXBlJyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgfSlcblxuICAgIHJldHVybiBvbmVXYXlIYXNoKFN0cmluZyhvcmlnaW5CdWZmZXIpLnRyaW0oKSwgcGF5bG9hZC5zZWNyZXQpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGdldFBhY2thZ2VKU09OID0gYXN5bmMgKCk6IFByb21pc2U8UGFja2FnZUpTT04+ID0+IHtcbiAgY29uc3QgcGFja2FnZUpzb25QYXRoID0gYXdhaXQgZmluZFVwKCdwYWNrYWdlLmpzb24nLCB7IGN3ZDogX19kaXJuYW1lIH0pXG4gIGNvbnN0IGpzb25Db250ZW50OiBQYWNrYWdlSlNPTiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhY2thZ2VKc29uUGF0aCwgJ3V0Zi04JykpXG4gIHJldHVybiBqc29uQ29udGVudFxufVxuXG5jb25zdCBnZXRQYWNrYWdlSlNPTklEID0gKHBheWxvYWQ6IFBheWxvYWQsIHBhY2thZ2VKU09OOiBQYWNrYWdlSlNPTik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBvbmVXYXlIYXNoKHBhY2thZ2VKU09OLm5hbWUsIHBheWxvYWQuc2VjcmV0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGF5bG9hZFZlcnNpb24gPSAocGFja2FnZUpTT046IFBhY2thZ2VKU09OKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHBhY2thZ2VKU09OPy5kZXBlbmRlbmNpZXM/LnBheWxvYWQgPz8gJydcbn1cbiJdLCJuYW1lcyI6WyJnZXRQYXlsb2FkVmVyc2lvbiIsInNlbmRFdmVudCIsImV2ZW50IiwicGF5bG9hZCIsImNvbmZpZyIsInRlbGVtZXRyeSIsInBhY2thZ2VKU09OIiwiZ2V0UGFja2FnZUpTT04iLCJiYXNlRXZlbnQiLCJlbnZJRCIsImdldEVudklEIiwibm9kZUVudiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIm5vZGVWZXJzaW9uIiwidmVyc2lvbiIsInBheWxvYWRWZXJzaW9uIiwicHJvamVjdElEIiwiZ2V0UHJvamVjdElEIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJfIiwiY29uZiIsIkNvbmYiLCJFTlZfSUQiLCJ2YWwiLCJnZXQiLCJnZW5lcmF0ZWQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwic2V0IiwiZ2V0R2l0SUQiLCJnZXRQYWNrYWdlSlNPTklEIiwic2VydmVyVVJMIiwiY3dkIiwib25lV2F5SGFzaCIsInNlY3JldCIsIm9yaWdpbkJ1ZmZlciIsImV4ZWNTeW5jIiwic3RkaW8iLCJ0aW1lb3V0IiwiU3RyaW5nIiwidHJpbSIsInBhY2thZ2VKc29uUGF0aCIsImZpbmRVcCIsIl9fZGlybmFtZSIsImpzb25Db250ZW50IiwicGFyc2UiLCJmcyIsInJlYWRGaWxlU3luYyIsIm5hbWUiLCJkZXBlbmRlbmNpZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTRHYUEsaUJBQWlCO2VBQWpCQTs7SUE1RUFDLFNBQVM7ZUFBVEE7OzsrQkFoQ1k7NkRBQ1I7d0JBQ1c7K0RBQ1Q7MkRBQ0o7NEJBTVk7Ozs7OztBQXNCcEIsTUFBTUEsWUFBWSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFRO0lBQ3RELElBQUlBLFFBQVFDLE1BQU0sQ0FBQ0MsU0FBUyxLQUFLLE9BQU87UUFDdEMsSUFBSTtZQUNGLE1BQU1DLGNBQWMsTUFBTUM7WUFFMUIsTUFBTUMsWUFBdUI7Z0JBQzNCQyxPQUFPQztnQkFDUEMsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLElBQUk7Z0JBQ2pDQyxhQUFhSCxRQUFRSSxPQUFPO2dCQUM1QkMsZ0JBQWdCakIsa0JBQWtCTTtnQkFDbENZLFdBQVdDLGFBQWFoQixTQUFTRztZQUNuQztZQUVBLE1BQU1jLE1BQU0sMkNBQTJDO2dCQUNyREMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFLEdBQUdmLFNBQVM7b0JBQUUsR0FBR04sS0FBSztnQkFBQztnQkFDOUNzQixTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLFFBQVE7WUFDVjtRQUNGLEVBQUUsT0FBT0MsR0FBRztRQUNWLDRDQUE0QztRQUM5QztJQUNGO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDRCxNQUFNaEIsV0FBVztJQUNmLE1BQU1pQixPQUFPLElBQUlDLGFBQUk7SUFDckIsTUFBTUMsU0FBUztJQUVmLE1BQU1DLE1BQU1ILEtBQUtJLEdBQUcsQ0FBQ0Y7SUFDckIsSUFBSUMsS0FBSztRQUNQLE9BQU9BO0lBQ1Q7SUFFQSxNQUFNRSxZQUFZQyxJQUFBQSxtQkFBVyxFQUFDLElBQUlDLFFBQVEsQ0FBQztJQUMzQ1AsS0FBS1EsR0FBRyxDQUFDTixRQUFRRztJQUNqQixPQUFPQTtBQUNUO0FBRUEsTUFBTWIsZUFBZSxDQUFDaEIsU0FBa0JHO0lBQ3RDLE1BQU1ZLFlBQ0prQixTQUFTakMsWUFDVGtDLGlCQUFpQmxDLFNBQVNHLGdCQUMxQkgsUUFBUUMsTUFBTSxDQUFDa0MsU0FBUyxJQUN4QjFCLFFBQVEyQixHQUFHO0lBQ2IsT0FBT0MsSUFBQUEsc0JBQVUsRUFBQ3RCLFdBQVdmLFFBQVFzQyxNQUFNO0FBQzdDO0FBRUEsTUFBTUwsV0FBVyxDQUFDakM7SUFDaEIsSUFBSTtRQUNGLE1BQU11QyxlQUFlQyxJQUFBQSx1QkFBUSxFQUFDLDhDQUE4QztZQUMxRUMsT0FBTztZQUNQQyxTQUFTO1FBQ1g7UUFFQSxPQUFPTCxJQUFBQSxzQkFBVSxFQUFDTSxPQUFPSixjQUFjSyxJQUFJLElBQUk1QyxRQUFRc0MsTUFBTTtJQUMvRCxFQUFFLE9BQU9mLEdBQUc7UUFDVixPQUFPO0lBQ1Q7QUFDRjtBQUVBLE1BQU1uQixpQkFBaUI7SUFDckIsTUFBTXlDLGtCQUFrQixNQUFNQyxJQUFBQSxlQUFNLEVBQUMsZ0JBQWdCO1FBQUVWLEtBQUtXO0lBQVU7SUFDdEUsTUFBTUMsY0FBMkI3QixLQUFLOEIsS0FBSyxDQUFDQyxXQUFFLENBQUNDLFlBQVksQ0FBQ04saUJBQWlCO0lBQzdFLE9BQU9HO0FBQ1Q7QUFFQSxNQUFNZCxtQkFBbUIsQ0FBQ2xDLFNBQWtCRztJQUMxQyxPQUFPa0MsSUFBQUEsc0JBQVUsRUFBQ2xDLFlBQVlpRCxJQUFJLEVBQUVwRCxRQUFRc0MsTUFBTTtBQUNwRDtBQUVPLE1BQU16QyxvQkFBb0IsQ0FBQ007SUFDaEMsT0FBT0EsYUFBYWtELGNBQWNyRCxXQUFXO0FBQy9DIn0=