"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getLatestGlobalVersion", {
    enumerable: true,
    get: function() {
        return getLatestGlobalVersion;
    }
});
const _types = require("../types");
const getLatestGlobalVersion = async ({ config, locale, payload, req, slug, where })=>{
    let latestVersion;
    if (config.versions?.drafts) {
        // eslint-disable-next-line prefer-destructuring
        latestVersion = (await payload.db.findGlobalVersions({
            global: slug,
            limit: 1,
            locale,
            req,
            sort: '-updatedAt'
        })).docs[0];
    }
    const global = await payload.db.findGlobal({
        locale,
        req,
        slug,
        where
    });
    const globalExists = Boolean(global);
    if (!latestVersion || (0, _types.docHasTimestamps)(global) && latestVersion.updatedAt < global.updatedAt) {
        return {
            global,
            globalExists
        };
    }
    return {
        global: {
            ...latestVersion.version,
            createdAt: latestVersion.createdAt,
            updatedAt: latestVersion.updatedAt
        },
        globalExists
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9nZXRMYXRlc3RHbG9iYWxWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCwgUGF5bG9hZFJlcXVlc3QsIFdoZXJlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IGRvY0hhc1RpbWVzdGFtcHMgfSBmcm9tICcuLi90eXBlcydcblxudHlwZSBBcmdzID0ge1xuICBjb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgcGF5bG9hZDogUGF5bG9hZFxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBzbHVnOiBzdHJpbmdcbiAgd2hlcmU6IFdoZXJlXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMYXRlc3RHbG9iYWxWZXJzaW9uID0gYXN5bmMgKHtcbiAgY29uZmlnLFxuICBsb2NhbGUsXG4gIHBheWxvYWQsXG4gIHJlcSxcbiAgc2x1ZyxcbiAgd2hlcmUsXG59OiBBcmdzKTogUHJvbWlzZTx7IGdsb2JhbDogRG9jdW1lbnQ7IGdsb2JhbEV4aXN0czogYm9vbGVhbiB9PiA9PiB7XG4gIGxldCBsYXRlc3RWZXJzaW9uXG5cbiAgaWYgKGNvbmZpZy52ZXJzaW9ucz8uZHJhZnRzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgbGF0ZXN0VmVyc2lvbiA9IChcbiAgICAgIGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zKHtcbiAgICAgICAgZ2xvYmFsOiBzbHVnLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICByZXEsXG4gICAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgIH0pXG4gICAgKS5kb2NzWzBdXG4gIH1cblxuICBjb25zdCBnbG9iYWwgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWwoe1xuICAgIGxvY2FsZSxcbiAgICByZXEsXG4gICAgc2x1ZyxcbiAgICB3aGVyZSxcbiAgfSlcbiAgY29uc3QgZ2xvYmFsRXhpc3RzID0gQm9vbGVhbihnbG9iYWwpXG5cbiAgaWYgKCFsYXRlc3RWZXJzaW9uIHx8IChkb2NIYXNUaW1lc3RhbXBzKGdsb2JhbCkgJiYgbGF0ZXN0VmVyc2lvbi51cGRhdGVkQXQgPCBnbG9iYWwudXBkYXRlZEF0KSkge1xuICAgIHJldHVybiB7XG4gICAgICBnbG9iYWwsXG4gICAgICBnbG9iYWxFeGlzdHMsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIC4uLmxhdGVzdFZlcnNpb24udmVyc2lvbixcbiAgICAgIGNyZWF0ZWRBdDogbGF0ZXN0VmVyc2lvbi5jcmVhdGVkQXQsXG4gICAgICB1cGRhdGVkQXQ6IGxhdGVzdFZlcnNpb24udXBkYXRlZEF0LFxuICAgIH0sXG4gICAgZ2xvYmFsRXhpc3RzLFxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbiIsImNvbmZpZyIsImxvY2FsZSIsInBheWxvYWQiLCJyZXEiLCJzbHVnIiwid2hlcmUiLCJsYXRlc3RWZXJzaW9uIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJkYiIsImZpbmRHbG9iYWxWZXJzaW9ucyIsImdsb2JhbCIsImxpbWl0Iiwic29ydCIsImRvY3MiLCJmaW5kR2xvYmFsIiwiZ2xvYmFsRXhpc3RzIiwiQm9vbGVhbiIsImRvY0hhc1RpbWVzdGFtcHMiLCJ1cGRhdGVkQXQiLCJ2ZXJzaW9uIiwiY3JlYXRlZEF0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVhQTs7O2VBQUFBOzs7dUJBWG9CO0FBVzFCLE1BQU1BLHlCQUF5QixPQUFPLEVBQzNDQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxHQUFHLEVBQ0hDLElBQUksRUFDSkMsS0FBSyxFQUNBO0lBQ0wsSUFBSUM7SUFFSixJQUFJTixPQUFPTyxRQUFRLEVBQUVDLFFBQVE7UUFDM0IsZ0RBQWdEO1FBQ2hERixnQkFBZ0IsQUFDZCxDQUFBLE1BQU1KLFFBQVFPLEVBQUUsQ0FBQ0Msa0JBQWtCLENBQUM7WUFDbENDLFFBQVFQO1lBQ1JRLE9BQU87WUFDUFg7WUFDQUU7WUFDQVUsTUFBTTtRQUNSLEVBQUMsRUFDREMsSUFBSSxDQUFDLEVBQUU7SUFDWDtJQUVBLE1BQU1ILFNBQVMsTUFBTVQsUUFBUU8sRUFBRSxDQUFDTSxVQUFVLENBQUM7UUFDekNkO1FBQ0FFO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFDQSxNQUFNVyxlQUFlQyxRQUFRTjtJQUU3QixJQUFJLENBQUNMLGlCQUFrQlksSUFBQUEsdUJBQWdCLEVBQUNQLFdBQVdMLGNBQWNhLFNBQVMsR0FBR1IsT0FBT1EsU0FBUyxFQUFHO1FBQzlGLE9BQU87WUFDTFI7WUFDQUs7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUNMTCxRQUFRO1lBQ04sR0FBR0wsY0FBY2MsT0FBTztZQUN4QkMsV0FBV2YsY0FBY2UsU0FBUztZQUNsQ0YsV0FBV2IsY0FBY2EsU0FBUztRQUNwQztRQUNBSDtJQUNGO0FBQ0YifQ==