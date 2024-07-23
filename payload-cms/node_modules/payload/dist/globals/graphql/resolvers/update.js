/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _update = /*#__PURE__*/ _interop_require_default(require("../../operations/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function updateResolver(globalConfig) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) req.query = {};
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') req.query.draft = String(draft);
        context.req = req;
        const options = {
            slug: globalConfig.slug,
            data: args.data,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _update.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBEZWVwUGFydGlhbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnXG5cbmltcG9ydCB0eXBlIHsgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICcuLi8uLi8uLi8nXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgaXNvbGF0ZU9iamVjdFByb3BlcnR5IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9pc29sYXRlT2JqZWN0UHJvcGVydHknXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvdXBkYXRlJ1xuXG50eXBlIFJlc29sdmVyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4gPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBkYXRhPzogRGVlcFBhcnRpYWw8T21pdDxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RTbHVnXSwgJ2lkJz4+XG4gICAgZHJhZnQ/OiBib29sZWFuXG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgfSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgICByZXM6IFJlc3BvbnNlXG4gIH0sXG4pID0+IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVJlc29sdmVyPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnLFxuKTogUmVzb2x2ZXI8VFNsdWc+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBsZXQgeyByZXEgfSA9IGNvbnRleHRcbiAgICBjb25zdCBsb2NhbGUgPSByZXEubG9jYWxlXG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSByZXEuZmFsbGJhY2tMb2NhbGVcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KHJlcSwgJ2xvY2FsZScpXG4gICAgcmVxID0gaXNvbGF0ZU9iamVjdFByb3BlcnR5PFBheWxvYWRSZXF1ZXN0PihyZXEsICdmYWxsYmFja0xvY2FsZScpXG4gICAgcmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlIHx8IGxvY2FsZVxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGUgfHwgZmFsbGJhY2tMb2NhbGVcbiAgICBpZiAoIXJlcS5xdWVyeSkgcmVxLnF1ZXJ5ID0ge31cblxuICAgIGNvbnN0IGRyYWZ0OiBib29sZWFuID1cbiAgICAgIGFyZ3MuZHJhZnQgPz8gcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ2ZhbHNlJ1xuICAgICAgICA/IGZhbHNlXG4gICAgICAgIDogcmVxLnF1ZXJ5Py5kcmFmdCA9PT0gJ3RydWUnXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiB1bmRlZmluZWRcbiAgICBpZiAodHlwZW9mIGRyYWZ0ID09PSAnYm9vbGVhbicpIHJlcS5xdWVyeS5kcmFmdCA9IFN0cmluZyhkcmFmdClcblxuICAgIGNvbnRleHQucmVxID0gcmVxXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgc2x1ZzogZ2xvYmFsQ29uZmlnLnNsdWcsXG4gICAgICBkYXRhOiBhcmdzLmRhdGEsXG4gICAgICBkZXB0aDogMCxcbiAgICAgIGRyYWZ0OiBhcmdzLmRyYWZ0LFxuICAgICAgZ2xvYmFsQ29uZmlnLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KHJlcSwgJ3RyYW5zYWN0aW9uSUQnKSxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGU8VFNsdWc+KG9wdGlvbnMpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG4iXSwibmFtZXMiOlsidXBkYXRlUmVzb2x2ZXIiLCJnbG9iYWxDb25maWciLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsInJlcSIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiaXNvbGF0ZU9iamVjdFByb3BlcnR5IiwicXVlcnkiLCJkcmFmdCIsInVuZGVmaW5lZCIsIlN0cmluZyIsIm9wdGlvbnMiLCJzbHVnIiwiZGF0YSIsImRlcHRoIiwicmVzdWx0IiwidXBkYXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBd0JwQzs7O2VBQXdCQTs7OzhFQWpCVTsrREFDZjs7Ozs7O0FBZ0JKLFNBQVNBLGVBQ3RCQyxZQUFtQztJQUVuQyxPQUFPLGVBQWVDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO1FBQzdDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdEO1FBQ2QsTUFBTUUsU0FBU0QsSUFBSUMsTUFBTTtRQUN6QixNQUFNQyxpQkFBaUJGLElBQUlFLGNBQWM7UUFDekNGLE1BQU1HLElBQUFBLDhCQUFxQixFQUFpQkgsS0FBSztRQUNqREEsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQWlCSCxLQUFLO1FBQ2pEQSxJQUFJQyxNQUFNLEdBQUdILEtBQUtHLE1BQU0sSUFBSUE7UUFDNUJELElBQUlFLGNBQWMsR0FBR0osS0FBS0ksY0FBYyxJQUFJQTtRQUM1QyxJQUFJLENBQUNGLElBQUlJLEtBQUssRUFBRUosSUFBSUksS0FBSyxHQUFHLENBQUM7UUFFN0IsTUFBTUMsUUFDSlAsS0FBS08sS0FBSyxJQUFJTCxJQUFJSSxLQUFLLEVBQUVDLFVBQVUsVUFDL0IsUUFDQUwsSUFBSUksS0FBSyxFQUFFQyxVQUFVLFNBQ25CLE9BQ0FDO1FBQ1IsSUFBSSxPQUFPRCxVQUFVLFdBQVdMLElBQUlJLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRSxPQUFPRjtRQUV6RE4sUUFBUUMsR0FBRyxHQUFHQTtRQUVkLE1BQU1RLFVBQVU7WUFDZEMsTUFBTWQsYUFBYWMsSUFBSTtZQUN2QkMsTUFBTVosS0FBS1ksSUFBSTtZQUNmQyxPQUFPO1lBQ1BOLE9BQU9QLEtBQUtPLEtBQUs7WUFDakJWO1lBQ0FLLEtBQUtHLElBQUFBLDhCQUFxQixFQUFpQkgsS0FBSztRQUNsRDtRQUVBLE1BQU1ZLFNBQVMsTUFBTUMsSUFBQUEsZUFBTSxFQUFRTDtRQUNuQyxPQUFPSTtJQUNUO0FBQ0YifQ==