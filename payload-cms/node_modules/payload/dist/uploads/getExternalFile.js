"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getExternalFile", {
    enumerable: true,
    get: function() {
        return getExternalFile;
    }
});
const _errors = require("../errors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const getExternalFile = async ({ data, req, uploadConfig })=>{
    const { filename, url } = data;
    if (typeof url === 'string') {
        let fileURL = url;
        if (!url.startsWith('http')) {
            const baseUrl = req.get('origin') || `${req.protocol}://${req.get('host')}`;
            fileURL = `${baseUrl}${url}`;
        }
        const { default: fetch } = await Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("node-fetch")));
        const headers = uploadConfig.externalFileHeaderFilter ? uploadConfig.externalFileHeaderFilter(headersToObject(req.headers)) : {
            cookie: req.headers?.['cookie']
        };
        const res = await fetch(fileURL, {
            credentials: 'include',
            headers,
            method: 'GET'
        });
        if (!res.ok) throw new _errors.APIError(`Failed to fetch file from ${fileURL}`, res.status);
        const data = await res.buffer();
        return {
            name: filename,
            data,
            mimetype: res.headers.get('content-type') || undefined,
            size: Number(res.headers.get('content-length')) || 0
        };
    }
    throw new _errors.APIError('Invalid file url', 400);
};
function headersToObject(headers) {
    return Object.entries(headers).reduce((acc, [key, value])=>{
        if (Array.isArray(value)) {
            acc[key] = value.join(',');
        } else {
            acc[key] = value;
        }
        return acc;
    }, {});
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldEV4dGVybmFsRmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHR5cGUgeyBJbmNvbWluZ0h0dHBIZWFkZXJzIH0gZnJvbSAnaHR0cCdcblxuaW1wb3J0IHR5cGUgeyBGaWxlLCBGaWxlRGF0YSwgSW5jb21pbmdVcGxvYWRUeXBlIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMnXG5cbnR5cGUgQXJncyA9IHtcbiAgZGF0YTogRmlsZURhdGFcbiAgcmVxOiBSZXF1ZXN0XG4gIHVwbG9hZENvbmZpZzogSW5jb21pbmdVcGxvYWRUeXBlXG59XG5leHBvcnQgY29uc3QgZ2V0RXh0ZXJuYWxGaWxlID0gYXN5bmMgKHsgZGF0YSwgcmVxLCB1cGxvYWRDb25maWcgfTogQXJncyk6IFByb21pc2U8RmlsZT4gPT4ge1xuICBjb25zdCB7IGZpbGVuYW1lLCB1cmwgfSA9IGRhdGFcblxuICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgZmlsZVVSTCA9IHVybFxuICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgY29uc3QgYmFzZVVybCA9IHJlcS5nZXQoJ29yaWdpbicpIHx8IGAke3JlcS5wcm90b2NvbH06Ly8ke3JlcS5nZXQoJ2hvc3QnKX1gXG4gICAgICBmaWxlVVJMID0gYCR7YmFzZVVybH0ke3VybH1gXG4gICAgfVxuXG4gICAgY29uc3QgeyBkZWZhdWx0OiBmZXRjaCB9ID0gKGF3YWl0IGltcG9ydCgnbm9kZS1mZXRjaCcpKSBhcyBhbnlcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB1cGxvYWRDb25maWcuZXh0ZXJuYWxGaWxlSGVhZGVyRmlsdGVyXG4gICAgICA/IHVwbG9hZENvbmZpZy5leHRlcm5hbEZpbGVIZWFkZXJGaWx0ZXIoaGVhZGVyc1RvT2JqZWN0KHJlcS5oZWFkZXJzKSlcbiAgICAgIDoge1xuICAgICAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnM/LlsnY29va2llJ10sXG4gICAgICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGZpbGVVUkwsIHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KVxuXG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBBUElFcnJvcihgRmFpbGVkIHRvIGZldGNoIGZpbGUgZnJvbSAke2ZpbGVVUkx9YCwgcmVzLnN0YXR1cylcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuYnVmZmVyKClcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBmaWxlbmFtZSxcbiAgICAgIGRhdGEsXG4gICAgICBtaW1ldHlwZTogcmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSB8fCB1bmRlZmluZWQsXG4gICAgICBzaXplOiBOdW1iZXIocmVzLmhlYWRlcnMuZ2V0KCdjb250ZW50LWxlbmd0aCcpKSB8fCAwLFxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBBUElFcnJvcignSW52YWxpZCBmaWxlIHVybCcsIDQwMClcbn1cblxuZnVuY3Rpb24gaGVhZGVyc1RvT2JqZWN0KGhlYWRlcnM6IEluY29taW5nSHR0cEhlYWRlcnMpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpLnJlZHVjZShcbiAgICAoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlLmpvaW4oJywnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSxcbiAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICApXG59XG4iXSwibmFtZXMiOlsiZ2V0RXh0ZXJuYWxGaWxlIiwiZGF0YSIsInJlcSIsInVwbG9hZENvbmZpZyIsImZpbGVuYW1lIiwidXJsIiwiZmlsZVVSTCIsInN0YXJ0c1dpdGgiLCJiYXNlVXJsIiwiZ2V0IiwicHJvdG9jb2wiLCJkZWZhdWx0IiwiZmV0Y2giLCJoZWFkZXJzIiwiZXh0ZXJuYWxGaWxlSGVhZGVyRmlsdGVyIiwiaGVhZGVyc1RvT2JqZWN0IiwiY29va2llIiwicmVzIiwiY3JlZGVudGlhbHMiLCJtZXRob2QiLCJvayIsIkFQSUVycm9yIiwic3RhdHVzIiwiYnVmZmVyIiwibmFtZSIsIm1pbWV0eXBlIiwidW5kZWZpbmVkIiwic2l6ZSIsIk51bWJlciIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBWWFBOzs7ZUFBQUE7Ozt3QkFQWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCLE1BQU1BLGtCQUFrQixPQUFPLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxZQUFZLEVBQVE7SUFDckUsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEdBQUcsRUFBRSxHQUFHSjtJQUUxQixJQUFJLE9BQU9JLFFBQVEsVUFBVTtRQUMzQixJQUFJQyxVQUFVRDtRQUNkLElBQUksQ0FBQ0EsSUFBSUUsVUFBVSxDQUFDLFNBQVM7WUFDM0IsTUFBTUMsVUFBVU4sSUFBSU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFUCxJQUFJUSxRQUFRLENBQUMsR0FBRyxFQUFFUixJQUFJTyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQzNFSCxVQUFVLENBQUMsRUFBRUUsUUFBUSxFQUFFSCxJQUFJLENBQUM7UUFDOUI7UUFFQSxNQUFNLEVBQUVNLFNBQVNDLEtBQUssRUFBRSxHQUFJLE1BQU0sbUVBQUEsUUFBTztRQUV6QyxNQUFNQyxVQUFVVixhQUFhVyx3QkFBd0IsR0FDakRYLGFBQWFXLHdCQUF3QixDQUFDQyxnQkFBZ0JiLElBQUlXLE9BQU8sS0FDakU7WUFDRUcsUUFBUWQsSUFBSVcsT0FBTyxFQUFFLENBQUMsU0FBUztRQUNqQztRQUVKLE1BQU1JLE1BQU0sTUFBTUwsTUFBTU4sU0FBUztZQUMvQlksYUFBYTtZQUNiTDtZQUNBTSxRQUFRO1FBQ1Y7UUFFQSxJQUFJLENBQUNGLElBQUlHLEVBQUUsRUFBRSxNQUFNLElBQUlDLGdCQUFRLENBQUMsQ0FBQywwQkFBMEIsRUFBRWYsUUFBUSxDQUFDLEVBQUVXLElBQUlLLE1BQU07UUFFbEYsTUFBTXJCLE9BQU8sTUFBTWdCLElBQUlNLE1BQU07UUFFN0IsT0FBTztZQUNMQyxNQUFNcEI7WUFDTkg7WUFDQXdCLFVBQVVSLElBQUlKLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLG1CQUFtQmlCO1lBQzdDQyxNQUFNQyxPQUFPWCxJQUFJSixPQUFPLENBQUNKLEdBQUcsQ0FBQyxzQkFBc0I7UUFDckQ7SUFDRjtJQUVBLE1BQU0sSUFBSVksZ0JBQVEsQ0FBQyxvQkFBb0I7QUFDekM7QUFFQSxTQUFTTixnQkFBZ0JGLE9BQTRCO0lBQ25ELE9BQU9nQixPQUFPQyxPQUFPLENBQUNqQixTQUFTa0IsTUFBTSxDQUNuQyxDQUFDQyxLQUFLLENBQUNDLEtBQUtDLE1BQU07UUFDaEIsSUFBSUMsTUFBTUMsT0FBTyxDQUFDRixRQUFRO1lBQ3hCRixHQUFHLENBQUNDLElBQUksR0FBR0MsTUFBTUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU87WUFDTEwsR0FBRyxDQUFDQyxJQUFJLEdBQUdDO1FBQ2I7UUFFQSxPQUFPRjtJQUNULEdBQ0EsQ0FBQztBQUVMIn0=