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
    default: function() {
        return _default;
    },
    formatUseAsTitle: function() {
        return formatUseAsTitle;
    }
});
const _reacti18next = require("react-i18next");
const _getObjectDotNotation = require("../../utilities/getObjectDotNotation");
const _getTranslation = require("../../utilities/getTranslation");
const _context = require("../components/forms/Form/context");
const _Config = require("../components/utilities/Config");
const _formatDate = require("../utilities/formatDate");
const formatUseAsTitle = (args)=>{
    const { collection: { admin: { useAsTitle } }, collection, config: { admin: { dateFormat: dateFormatFromConfig } }, doc, field: fieldFromProps, i18n } = args;
    if (!fieldFromProps && !doc) {
        return '';
    }
    const field = fieldFromProps || (0, _getObjectDotNotation.getObjectDotNotation)(doc, collection.admin.useAsTitle);
    let title;
    if (typeof field === 'string') {
        title = field;
    } else if (typeof field === 'number') {
        title = String(field);
    } else {
        title = field?.value;
    }
    const fieldConfig = collection?.fields?.find((f)=>'name' in f && f?.name === useAsTitle);
    const isDate = fieldConfig?.type === 'date';
    if (title && isDate) {
        const dateFormat = fieldConfig?.admin?.date?.displayFormat || dateFormatFromConfig;
        title = (0, _formatDate.formatDate)(title, dateFormat, i18n?.language);
    }
    return title;
};
// Keep `collection` optional so that component do need to worry about conditionally rendering hooks
// This is so that components which take both `collection` and `global` props can use this hook
const useTitle = (args)=>{
    const { collection, global } = args;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const config = (0, _Config.useConfig)();
    let title = '';
    const field = (0, _context.useFormFields)(([formFields])=>{
        if (!collection) return;
        return formFields[collection?.admin?.useAsTitle];
    });
    if (collection) {
        title = formatUseAsTitle({
            collection,
            config,
            field,
            i18n
        });
    }
    if (global) {
        title = (0, _getTranslation.getTranslation)(global.label, i18n) || global.slug;
    }
    return title;
};
const _default = useTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgaTE4bmV4dCBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRPYmplY3REb3ROb3RhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRPYmplY3REb3ROb3RhdGlvbidcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgdXNlRm9ybUZpZWxkcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvRm9ybS9jb250ZXh0J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJ1xuXG4vLyBlaXRoZXIgc2VuZCB0aGUgYHVzZUFzVGl0bGVgIGZpZWxkIGl0c2VsZlxuLy8gb3IgYW4gb2JqZWN0IHRvIGR5bmFtaWNhbGx5IGV4dHJhY3QgdGhlIGB1c2VBc1RpdGxlYCBmaWVsZCBmcm9tXG5leHBvcnQgY29uc3QgZm9ybWF0VXNlQXNUaXRsZSA9IChhcmdzOiB7XG4gIGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgZG9jPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBmaWVsZD86IEZvcm1GaWVsZFxuICBpMThuOiB0eXBlb2YgaTE4bmV4dFxufSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBhZG1pbjogeyB1c2VBc1RpdGxlIH0sXG4gICAgfSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbmZpZzoge1xuICAgICAgYWRtaW46IHsgZGF0ZUZvcm1hdDogZGF0ZUZvcm1hdEZyb21Db25maWcgfSxcbiAgICB9LFxuICAgIGRvYyxcbiAgICBmaWVsZDogZmllbGRGcm9tUHJvcHMsXG4gICAgaTE4bixcbiAgfSA9IGFyZ3NcblxuICBpZiAoIWZpZWxkRnJvbVByb3BzICYmICFkb2MpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IGZpZWxkID0gZmllbGRGcm9tUHJvcHMgfHwgZ2V0T2JqZWN0RG90Tm90YXRpb248Rm9ybUZpZWxkPihkb2MsIGNvbGxlY3Rpb24uYWRtaW4udXNlQXNUaXRsZSlcbiAgbGV0IHRpdGxlOiBzdHJpbmdcbiAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gJ3N0cmluZycpIHtcbiAgICB0aXRsZSA9IGZpZWxkXG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpZWxkID09PSAnbnVtYmVyJykge1xuICAgIHRpdGxlID0gU3RyaW5nKGZpZWxkKVxuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gZmllbGQ/LnZhbHVlIGFzIHN0cmluZ1xuICB9XG5cbiAgY29uc3QgZmllbGRDb25maWcgPSBjb2xsZWN0aW9uPy5maWVsZHM/LmZpbmQoKGYpID0+ICduYW1lJyBpbiBmICYmIGY/Lm5hbWUgPT09IHVzZUFzVGl0bGUpXG4gIGNvbnN0IGlzRGF0ZSA9IGZpZWxkQ29uZmlnPy50eXBlID09PSAnZGF0ZSdcblxuICBpZiAodGl0bGUgJiYgaXNEYXRlKSB7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9IGZpZWxkQ29uZmlnPy5hZG1pbj8uZGF0ZT8uZGlzcGxheUZvcm1hdCB8fCBkYXRlRm9ybWF0RnJvbUNvbmZpZ1xuICAgIHRpdGxlID0gZm9ybWF0RGF0ZSh0aXRsZSwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpXG4gIH1cblxuICByZXR1cm4gdGl0bGVcbn1cblxuLy8gS2VlcCBgY29sbGVjdGlvbmAgb3B0aW9uYWwgc28gdGhhdCBjb21wb25lbnQgZG8gbmVlZCB0byB3b3JyeSBhYm91dCBjb25kaXRpb25hbGx5IHJlbmRlcmluZyBob29rc1xuLy8gVGhpcyBpcyBzbyB0aGF0IGNvbXBvbmVudHMgd2hpY2ggdGFrZSBib3RoIGBjb2xsZWN0aW9uYCBhbmQgYGdsb2JhbGAgcHJvcHMgY2FuIHVzZSB0aGlzIGhvb2tcbmNvbnN0IHVzZVRpdGxlID0gKGFyZ3M6IHtcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZ2xvYmFsPzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG59KTogc3RyaW5nID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCBnbG9iYWwgfSA9IGFyZ3NcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG5cbiAgbGV0IHRpdGxlOiBzdHJpbmcgPSAnJ1xuXG4gIGNvbnN0IGZpZWxkID0gdXNlRm9ybUZpZWxkcygoW2Zvcm1GaWVsZHNdKSA9PiB7XG4gICAgaWYgKCFjb2xsZWN0aW9uKSByZXR1cm5cbiAgICByZXR1cm4gZm9ybUZpZWxkc1tjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZV1cbiAgfSlcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgIHRpdGxlID0gZm9ybWF0VXNlQXNUaXRsZSh7IGNvbGxlY3Rpb24sIGNvbmZpZywgZmllbGQsIGkxOG4gfSlcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICB0aXRsZSA9IGdldFRyYW5zbGF0aW9uKGdsb2JhbC5sYWJlbCwgaTE4bikgfHwgZ2xvYmFsLnNsdWdcbiAgfVxuXG4gIHJldHVybiB0aXRsZVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaXRsZVxuIl0sIm5hbWVzIjpbImZvcm1hdFVzZUFzVGl0bGUiLCJhcmdzIiwiY29sbGVjdGlvbiIsImFkbWluIiwidXNlQXNUaXRsZSIsImNvbmZpZyIsImRhdGVGb3JtYXQiLCJkYXRlRm9ybWF0RnJvbUNvbmZpZyIsImRvYyIsImZpZWxkIiwiZmllbGRGcm9tUHJvcHMiLCJpMThuIiwiZ2V0T2JqZWN0RG90Tm90YXRpb24iLCJ0aXRsZSIsIlN0cmluZyIsInZhbHVlIiwiZmllbGRDb25maWciLCJmaWVsZHMiLCJmaW5kIiwiZiIsIm5hbWUiLCJpc0RhdGUiLCJ0eXBlIiwiZGF0ZSIsImRpc3BsYXlGb3JtYXQiLCJmb3JtYXREYXRlIiwibGFuZ3VhZ2UiLCJ1c2VUaXRsZSIsImdsb2JhbCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlRm9ybUZpZWxkcyIsImZvcm1GaWVsZHMiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwic2x1ZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTBGQSxPQUF1QjtlQUF2Qjs7SUF6RWFBLGdCQUFnQjtlQUFoQkE7Ozs4QkFma0I7c0NBT007Z0NBQ047eUJBQ0Q7d0JBQ0o7NEJBQ0M7QUFJcEIsTUFBTUEsbUJBQW1CLENBQUNDO0lBTy9CLE1BQU0sRUFDSkMsWUFBWSxFQUNWQyxPQUFPLEVBQUVDLFVBQVUsRUFBRSxFQUN0QixFQUNERixVQUFVLEVBQ1ZHLFFBQVEsRUFDTkYsT0FBTyxFQUFFRyxZQUFZQyxvQkFBb0IsRUFBRSxFQUM1QyxFQUNEQyxHQUFHLEVBQ0hDLE9BQU9DLGNBQWMsRUFDckJDLElBQUksRUFDTCxHQUFHVjtJQUVKLElBQUksQ0FBQ1Msa0JBQWtCLENBQUNGLEtBQUs7UUFDM0IsT0FBTztJQUNUO0lBRUEsTUFBTUMsUUFBUUMsa0JBQWtCRSxJQUFBQSwwQ0FBb0IsRUFBWUosS0FBS04sV0FBV0MsS0FBSyxDQUFDQyxVQUFVO0lBQ2hHLElBQUlTO0lBQ0osSUFBSSxPQUFPSixVQUFVLFVBQVU7UUFDN0JJLFFBQVFKO0lBQ1YsT0FBTyxJQUFJLE9BQU9BLFVBQVUsVUFBVTtRQUNwQ0ksUUFBUUMsT0FBT0w7SUFDakIsT0FBTztRQUNMSSxRQUFRSixPQUFPTTtJQUNqQjtJQUVBLE1BQU1DLGNBQWNkLFlBQVllLFFBQVFDLEtBQUssQ0FBQ0MsSUFBTSxVQUFVQSxLQUFLQSxHQUFHQyxTQUFTaEI7SUFDL0UsTUFBTWlCLFNBQVNMLGFBQWFNLFNBQVM7SUFFckMsSUFBSVQsU0FBU1EsUUFBUTtRQUNuQixNQUFNZixhQUFhVSxhQUFhYixPQUFPb0IsTUFBTUMsaUJBQWlCakI7UUFDOURNLFFBQVFZLElBQUFBLHNCQUFVLEVBQUNaLE9BQU9QLFlBQVlLLE1BQU1lO0lBQzlDO0lBRUEsT0FBT2I7QUFDVDtBQUVBLG9HQUFvRztBQUNwRywrRkFBK0Y7QUFDL0YsTUFBTWMsV0FBVyxDQUFDMUI7SUFJaEIsTUFBTSxFQUFFQyxVQUFVLEVBQUUwQixNQUFNLEVBQUUsR0FBRzNCO0lBQy9CLE1BQU0sRUFBRVUsSUFBSSxFQUFFLEdBQUdrQixJQUFBQSw0QkFBYztJQUMvQixNQUFNeEIsU0FBU3lCLElBQUFBLGlCQUFTO0lBRXhCLElBQUlqQixRQUFnQjtJQUVwQixNQUFNSixRQUFRc0IsSUFBQUEsc0JBQWEsRUFBQyxDQUFDLENBQUNDLFdBQVc7UUFDdkMsSUFBSSxDQUFDOUIsWUFBWTtRQUNqQixPQUFPOEIsVUFBVSxDQUFDOUIsWUFBWUMsT0FBT0MsV0FBVztJQUNsRDtJQUVBLElBQUlGLFlBQVk7UUFDZFcsUUFBUWIsaUJBQWlCO1lBQUVFO1lBQVlHO1lBQVFJO1lBQU9FO1FBQUs7SUFDN0Q7SUFFQSxJQUFJaUIsUUFBUTtRQUNWZixRQUFRb0IsSUFBQUEsOEJBQWMsRUFBQ0wsT0FBT00sS0FBSyxFQUFFdkIsU0FBU2lCLE9BQU9PLElBQUk7SUFDM0Q7SUFFQSxPQUFPdEI7QUFDVDtNQUVBLFdBQWVjIn0=