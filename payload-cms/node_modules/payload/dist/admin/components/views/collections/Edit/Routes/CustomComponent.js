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
    CustomCollectionComponent: function() {
        return CustomCollectionComponent;
    },
    defaultCollectionViews: function() {
        return defaultCollectionViews;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _API = require("../../../API");
const _LivePreview = require("../../../LivePreview");
const _Version = /*#__PURE__*/ _interop_require_default(require("../../../Version/Version"));
const _Versions = /*#__PURE__*/ _interop_require_default(require("../../../Versions"));
const _index = require("../Default/index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultCollectionViews = ()=>({
        API: _API.API,
        Default: _index.DefaultCollectionEdit,
        LivePreview: _LivePreview.LivePreviewView,
        References: null,
        Relationships: null,
        Version: _Version.default,
        Versions: _Versions.default
    });
const CustomCollectionComponent = (args)=>{
    const { collection, view } = args;
    const { admin: { components: { views: { Edit } = {} } = {} } = {} } = collection;
    // Overriding components may come from multiple places in the config
    // Need to cascade through the hierarchy to find the correct component to render
    // For example, the Edit view:
    // 1. Edit?.Default
    // 2. Edit?.Default?.Component
    const Component = typeof Edit === 'object' && typeof Edit[view] === 'function' ? Edit[view] : typeof Edit === 'object' && typeof Edit?.[view] === 'object' && typeof Edit[view].Component === 'function' ? Edit[view].Component : defaultCollectionViews()[view];
    if (Component) {
        return /*#__PURE__*/ _react.default.createElement(Component, args);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvUm91dGVzL0N1c3RvbUNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25FZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uLy4uL0FQSSdcbmltcG9ydCB7IExpdmVQcmV2aWV3VmlldyB9IGZyb20gJy4uLy4uLy4uL0xpdmVQcmV2aWV3J1xuaW1wb3J0IFZlcnNpb25WaWV3IGZyb20gJy4uLy4uLy4uL1ZlcnNpb24vVmVyc2lvbidcbmltcG9ydCBWZXJzaW9uc1ZpZXcgZnJvbSAnLi4vLi4vLi4vVmVyc2lvbnMnXG5pbXBvcnQgeyBEZWZhdWx0Q29sbGVjdGlvbkVkaXQgfSBmcm9tICcuLi9EZWZhdWx0L2luZGV4J1xuXG5leHBvcnQgdHlwZSBjb2xsZWN0aW9uVmlld1R5cGUgPVxuICB8ICdBUEknXG4gIHwgJ0RlZmF1bHQnXG4gIHwgJ0xpdmVQcmV2aWV3J1xuICB8ICdSZWZlcmVuY2VzJ1xuICB8ICdSZWxhdGlvbnNoaXBzJ1xuICB8ICdWZXJzaW9uJ1xuICB8ICdWZXJzaW9ucydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xsZWN0aW9uVmlld3MgPSAoKToge1xuICBba2V5IGluIGNvbGxlY3Rpb25WaWV3VHlwZV06IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxufSA9PiAoe1xuICBBUEksXG4gIERlZmF1bHQ6IERlZmF1bHRDb2xsZWN0aW9uRWRpdCxcbiAgTGl2ZVByZXZpZXc6IExpdmVQcmV2aWV3VmlldyxcbiAgUmVmZXJlbmNlczogbnVsbCxcbiAgUmVsYXRpb25zaGlwczogbnVsbCxcbiAgVmVyc2lvbjogVmVyc2lvblZpZXcsXG4gIFZlcnNpb25zOiBWZXJzaW9uc1ZpZXcsXG59KVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tQ29sbGVjdGlvbkNvbXBvbmVudCA9IChcbiAgYXJnczogQ29sbGVjdGlvbkVkaXRWaWV3UHJvcHMgJiB7XG4gICAgdmlldzogY29sbGVjdGlvblZpZXdUeXBlXG4gIH0sXG4pID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCB2aWV3IH0gPSBhcmdzXG5cbiAgY29uc3QgeyBhZG1pbjogeyBjb21wb25lbnRzOiB7IHZpZXdzOiB7IEVkaXQgfSA9IHt9IH0gPSB7fSB9ID0ge30gfSA9IGNvbGxlY3Rpb25cblxuICAvLyBPdmVycmlkaW5nIGNvbXBvbmVudHMgbWF5IGNvbWUgZnJvbSBtdWx0aXBsZSBwbGFjZXMgaW4gdGhlIGNvbmZpZ1xuICAvLyBOZWVkIHRvIGNhc2NhZGUgdGhyb3VnaCB0aGUgaGllcmFyY2h5IHRvIGZpbmQgdGhlIGNvcnJlY3QgY29tcG9uZW50IHRvIHJlbmRlclxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIEVkaXQgdmlldzpcbiAgLy8gMS4gRWRpdD8uRGVmYXVsdFxuICAvLyAyLiBFZGl0Py5EZWZhdWx0Py5Db21wb25lbnRcblxuICBjb25zdCBDb21wb25lbnQgPVxuICAgIHR5cGVvZiBFZGl0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgRWRpdFt2aWV3XSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBFZGl0W3ZpZXddXG4gICAgICA6IHR5cGVvZiBFZGl0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgRWRpdD8uW3ZpZXddID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgRWRpdFt2aWV3XS5Db21wb25lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gRWRpdFt2aWV3XS5Db21wb25lbnRcbiAgICAgIDogZGVmYXVsdENvbGxlY3Rpb25WaWV3cygpW3ZpZXddXG5cbiAgaWYgKENvbXBvbmVudCkge1xuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmdzfSAvPlxuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tQ29sbGVjdGlvbkNvbXBvbmVudCIsImRlZmF1bHRDb2xsZWN0aW9uVmlld3MiLCJBUEkiLCJEZWZhdWx0IiwiRGVmYXVsdENvbGxlY3Rpb25FZGl0IiwiTGl2ZVByZXZpZXciLCJMaXZlUHJldmlld1ZpZXciLCJSZWZlcmVuY2VzIiwiUmVsYXRpb25zaGlwcyIsIlZlcnNpb24iLCJWZXJzaW9uVmlldyIsIlZlcnNpb25zIiwiVmVyc2lvbnNWaWV3IiwiYXJncyIsImNvbGxlY3Rpb24iLCJ2aWV3IiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJFZGl0IiwiQ29tcG9uZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQStCYUEseUJBQXlCO2VBQXpCQTs7SUFaQUMsc0JBQXNCO2VBQXRCQTs7OzhEQW5CSztxQkFJRTs2QkFDWTtnRUFDUjtpRUFDQzt1QkFDYTs7Ozs7O0FBVy9CLE1BQU1BLHlCQUF5QixJQUVoQyxDQUFBO1FBQ0pDLEtBQUFBLFFBQUc7UUFDSEMsU0FBU0MsNEJBQXFCO1FBQzlCQyxhQUFhQyw0QkFBZTtRQUM1QkMsWUFBWTtRQUNaQyxlQUFlO1FBQ2ZDLFNBQVNDLGdCQUFXO1FBQ3BCQyxVQUFVQyxpQkFBWTtJQUN4QixDQUFBO0FBRU8sTUFBTVosNEJBQTRCLENBQ3ZDYTtJQUlBLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Y7SUFFN0IsTUFBTSxFQUFFRyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBR0w7SUFFdEUsb0VBQW9FO0lBQ3BFLGdGQUFnRjtJQUNoRiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUU5QixNQUFNTSxZQUNKLE9BQU9ELFNBQVMsWUFBWSxPQUFPQSxJQUFJLENBQUNKLEtBQUssS0FBSyxhQUM5Q0ksSUFBSSxDQUFDSixLQUFLLEdBQ1YsT0FBT0ksU0FBUyxZQUNoQixPQUFPQSxNQUFNLENBQUNKLEtBQUssS0FBSyxZQUN4QixPQUFPSSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssU0FBUyxLQUFLLGFBQ2hDRCxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssU0FBUyxHQUNwQm5CLHdCQUF3QixDQUFDYyxLQUFLO0lBRXBDLElBQUlLLFdBQVc7UUFDYixxQkFBTyw2QkFBQ0EsV0FBY1A7SUFDeEI7QUFDRiJ9