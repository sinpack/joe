"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createLocalReq", {
    enumerable: true,
    get: function() {
        return createLocalReq;
    }
});
const _dataloader = require("../collections/dataloader");
const _init = require("../translations/init");
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("./isolateObjectProperty"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getRequestContext(req = {
    context: null
}, context = {}) {
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            // if req.context is `{}` avoid unnecessary spread
            return context;
        } else {
            return {
                ...req.context,
                ...context
            };
        }
    } else {
        return context;
    }
}
const createLocalReq = ({ collection, context, fallbackLocale, locale, req = {}, user }, payload)=>{
    const i18n = req?.i18n || (0, _init.i18nInit)(payload.config?.i18n);
    if (payload.config?.localization) {
        const defaultLocale = payload.config.localization.defaultLocale;
        req.locale = locale || req?.locale || defaultLocale;
        const fallbackLocaleFromConfig = payload.config.localization.locales.find(({ code })=>req.locale === code)?.fallbackLocale;
        if (typeof fallbackLocale !== 'undefined') {
            req.fallbackLocale = fallbackLocale;
        } else if (typeof req?.fallbackLocale === 'undefined') {
            req.fallbackLocale = fallbackLocaleFromConfig || defaultLocale;
        }
    }
    req.context = getRequestContext(req, context);
    req.payloadAPI = req?.payloadAPI || 'local';
    req.payload = payload;
    req.i18n = i18n;
    req.t = i18n.t;
    req.user = user || req?.user || null;
    req.payloadDataLoader = req?.payloadDataLoader || (0, _dataloader.getDataLoader)(req);
    req = (0, _isolateObjectProperty.default)(req, 'collection');
    req.collection = payload.collections[collection];
    return req;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3JlYXRlTG9jYWxSZXEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkLCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cG9ydHMvdHlwZXMnXG5cbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9kYXRhbG9hZGVyJ1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi90cmFuc2xhdGlvbnMvaW5pdCdcbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RDb250ZXh0KFxuICByZXE6IFBheWxvYWRSZXF1ZXN0ID0geyBjb250ZXh0OiBudWxsIH0gYXMgUGF5bG9hZFJlcXVlc3QsXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0ID0ge30sXG4pOiBSZXF1ZXN0Q29udGV4dCB7XG4gIGlmIChyZXEuY29udGV4dCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhyZXEuY29udGV4dCkubGVuZ3RoID09PSAwICYmIHJlcS5jb250ZXh0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIC8vIGlmIHJlcS5jb250ZXh0IGlzIGB7fWAgYXZvaWQgdW5uZWNlc3Nhcnkgc3ByZWFkXG4gICAgICByZXR1cm4gY29udGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyAuLi5yZXEuY29udGV4dCwgLi4uY29udGV4dCB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb250ZXh0XG4gIH1cbn1cblxudHlwZSBDcmVhdGVMb2NhbFJlcSA9IChcbiAgb3B0aW9uczoge1xuICAgIGNvbGxlY3Rpb24/OiBudW1iZXIgfCBzdHJpbmcgfCBzeW1ib2xcbiAgICBjb250ZXh0PzogUmVxdWVzdENvbnRleHRcbiAgICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICAgIHJlcT86IFBheWxvYWRSZXF1ZXN0XG4gICAgdXNlcj86IERvY3VtZW50XG4gIH0sXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4pID0+IFBheWxvYWRSZXF1ZXN0XG5leHBvcnQgY29uc3QgY3JlYXRlTG9jYWxSZXE6IENyZWF0ZUxvY2FsUmVxID0gKFxuICB7IGNvbGxlY3Rpb24sIGNvbnRleHQsIGZhbGxiYWNrTG9jYWxlLCBsb2NhbGUsIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LCB1c2VyIH0sXG4gIHBheWxvYWQsXG4pID0+IHtcbiAgY29uc3QgaTE4biA9IHJlcT8uaTE4biB8fCBpMThuSW5pdChwYXlsb2FkLmNvbmZpZz8uaTE4bilcblxuICBpZiAocGF5bG9hZC5jb25maWc/LmxvY2FsaXphdGlvbikge1xuICAgIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZVxuICAgIHJlcS5sb2NhbGUgPSBsb2NhbGUgfHwgcmVxPy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZVxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlRnJvbUNvbmZpZyA9IHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbi5sb2NhbGVzLmZpbmQoXG4gICAgICAoeyBjb2RlIH0pID0+IHJlcS5sb2NhbGUgPT09IGNvZGUsXG4gICAgKT8uZmFsbGJhY2tMb2NhbGVcbiAgICBpZiAodHlwZW9mIGZhbGxiYWNrTG9jYWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXE/LmZhbGxiYWNrTG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVGcm9tQ29uZmlnIHx8IGRlZmF1bHRMb2NhbGVcbiAgICB9XG4gIH1cblxuICByZXEuY29udGV4dCA9IGdldFJlcXVlc3RDb250ZXh0KHJlcSwgY29udGV4dClcbiAgcmVxLnBheWxvYWRBUEkgPSByZXE/LnBheWxvYWRBUEkgfHwgJ2xvY2FsJ1xuICByZXEucGF5bG9hZCA9IHBheWxvYWRcbiAgcmVxLmkxOG4gPSBpMThuXG4gIHJlcS50ID0gaTE4bi50XG4gIHJlcS51c2VyID0gdXNlciB8fCByZXE/LnVzZXIgfHwgbnVsbFxuICByZXEucGF5bG9hZERhdGFMb2FkZXIgPSByZXE/LnBheWxvYWREYXRhTG9hZGVyIHx8IGdldERhdGFMb2FkZXIocmVxKVxuICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnY29sbGVjdGlvbicpXG5cbiAgcmVxLmNvbGxlY3Rpb24gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dXG5cbiAgcmV0dXJuIHJlcVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUxvY2FsUmVxIiwiZ2V0UmVxdWVzdENvbnRleHQiLCJyZXEiLCJjb250ZXh0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbiIsImZhbGxiYWNrTG9jYWxlIiwibG9jYWxlIiwidXNlciIsInBheWxvYWQiLCJpMThuIiwiaTE4bkluaXQiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJkZWZhdWx0TG9jYWxlIiwiZmFsbGJhY2tMb2NhbGVGcm9tQ29uZmlnIiwibG9jYWxlcyIsImZpbmQiLCJjb2RlIiwicGF5bG9hZEFQSSIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiLCJjb2xsZWN0aW9ucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBa0NhQTs7O2VBQUFBOzs7NEJBL0JpQjtzQkFDTDs4RUFDUzs7Ozs7O0FBRWxDLFNBQVNDLGtCQUNQQyxNQUFzQjtJQUFFQyxTQUFTO0FBQUssQ0FBbUIsRUFDekRBLFVBQTBCLENBQUMsQ0FBQztJQUU1QixJQUFJRCxJQUFJQyxPQUFPLEVBQUU7UUFDZixJQUFJQyxPQUFPQyxJQUFJLENBQUNILElBQUlDLE9BQU8sRUFBRUcsTUFBTSxLQUFLLEtBQUtKLElBQUlDLE9BQU8sQ0FBQ0ksV0FBVyxLQUFLSCxRQUFRO1lBQy9FLGtEQUFrRDtZQUNsRCxPQUFPRDtRQUNULE9BQU87WUFDTCxPQUFPO2dCQUFFLEdBQUdELElBQUlDLE9BQU87Z0JBQUUsR0FBR0EsT0FBTztZQUFDO1FBQ3RDO0lBQ0YsT0FBTztRQUNMLE9BQU9BO0lBQ1Q7QUFDRjtBQWFPLE1BQU1ILGlCQUFpQyxDQUM1QyxFQUFFUSxVQUFVLEVBQUVMLE9BQU8sRUFBRU0sY0FBYyxFQUFFQyxNQUFNLEVBQUVSLE1BQU0sQ0FBQyxDQUFtQixFQUFFUyxJQUFJLEVBQUUsRUFDakZDO0lBRUEsTUFBTUMsT0FBT1gsS0FBS1csUUFBUUMsSUFBQUEsY0FBUSxFQUFDRixRQUFRRyxNQUFNLEVBQUVGO0lBRW5ELElBQUlELFFBQVFHLE1BQU0sRUFBRUMsY0FBYztRQUNoQyxNQUFNQyxnQkFBZ0JMLFFBQVFHLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxhQUFhO1FBQy9EZixJQUFJUSxNQUFNLEdBQUdBLFVBQVVSLEtBQUtRLFVBQVVPO1FBQ3RDLE1BQU1DLDJCQUEyQk4sUUFBUUcsTUFBTSxDQUFDQyxZQUFZLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUN2RSxDQUFDLEVBQUVDLElBQUksRUFBRSxHQUFLbkIsSUFBSVEsTUFBTSxLQUFLVyxPQUM1Qlo7UUFDSCxJQUFJLE9BQU9BLG1CQUFtQixhQUFhO1lBQ3pDUCxJQUFJTyxjQUFjLEdBQUdBO1FBQ3ZCLE9BQU8sSUFBSSxPQUFPUCxLQUFLTyxtQkFBbUIsYUFBYTtZQUNyRFAsSUFBSU8sY0FBYyxHQUFHUyw0QkFBNEJEO1FBQ25EO0lBQ0Y7SUFFQWYsSUFBSUMsT0FBTyxHQUFHRixrQkFBa0JDLEtBQUtDO0lBQ3JDRCxJQUFJb0IsVUFBVSxHQUFHcEIsS0FBS29CLGNBQWM7SUFDcENwQixJQUFJVSxPQUFPLEdBQUdBO0lBQ2RWLElBQUlXLElBQUksR0FBR0E7SUFDWFgsSUFBSXFCLENBQUMsR0FBR1YsS0FBS1UsQ0FBQztJQUNkckIsSUFBSVMsSUFBSSxHQUFHQSxRQUFRVCxLQUFLUyxRQUFRO0lBQ2hDVCxJQUFJc0IsaUJBQWlCLEdBQUd0QixLQUFLc0IscUJBQXFCQyxJQUFBQSx5QkFBYSxFQUFDdkI7SUFDaEVBLE1BQU13QixJQUFBQSw4QkFBcUIsRUFBQ3hCLEtBQUs7SUFFakNBLElBQUlNLFVBQVUsR0FBR0ksUUFBUWUsV0FBVyxDQUFDbkIsV0FBVztJQUVoRCxPQUFPTjtBQUNUIn0=