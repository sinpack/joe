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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../../../../utilities/getTranslation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const BlocksCell = ({ data, field })=>{
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    const selectedBlocks = data ? data.map(({ blockType })=>blockType) : [];
    const blockLabels = field.blocks.map((s)=>({
            label: (0, _getTranslation.getTranslation)(s.labels.singular, i18n),
            slug: s.slug
        }));
    let label = `0 ${(0, _getTranslation.getTranslation)(field.labels.plural, i18n)}`;
    const formatBlockList = (blocks)=>blocks.map((b)=>{
            const filtered = blockLabels.filter((f)=>f.slug === b)?.[0];
            return filtered?.label;
        }).join(', ');
    const itemsToShow = 5;
    if (selectedBlocks.length > itemsToShow) {
        const more = selectedBlocks.length - itemsToShow;
        label = `${selectedBlocks.length} ${(0, _getTranslation.getTranslation)(field.labels.plural, i18n)} - ${t('fields:itemsAndMore', {
            count: more,
            items: formatBlockList(selectedBlocks.slice(0, itemsToShow))
        })}`;
    } else if (selectedBlocks.length > 0) {
        label = `${selectedBlocks.length} ${(0, _getTranslation.getTranslation)(selectedBlocks.length === 1 ? field.labels.singular : field.labels.plural, i18n)} - ${formatBlockList(selectedBlocks)}`;
    }
    return /*#__PURE__*/ _react.default.createElement("span", null, label);
};
const _default = BlocksCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9CbG9ja3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBCbG9ja0ZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgQ2VsbENvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuXG5jb25zdCBCbG9ja3NDZWxsOiBSZWFjdC5GQzxDZWxsQ29tcG9uZW50UHJvcHM8QmxvY2tGaWVsZCwgYW55Pj4gPSAoeyBkYXRhLCBmaWVsZCB9KSA9PiB7XG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpXG4gIGNvbnN0IHNlbGVjdGVkQmxvY2tzID0gZGF0YSA/IGRhdGEubWFwKCh7IGJsb2NrVHlwZSB9KSA9PiBibG9ja1R5cGUpIDogW11cbiAgY29uc3QgYmxvY2tMYWJlbHMgPSBmaWVsZC5ibG9ja3MubWFwKChzKSA9PiAoe1xuICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzLmxhYmVscy5zaW5ndWxhciwgaTE4biksXG4gICAgc2x1Zzogcy5zbHVnLFxuICB9KSlcblxuICBsZXQgbGFiZWwgPSBgMCAke2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVscy5wbHVyYWwsIGkxOG4pfWBcblxuICBjb25zdCBmb3JtYXRCbG9ja0xpc3QgPSAoYmxvY2tzKSA9PlxuICAgIGJsb2Nrc1xuICAgICAgLm1hcCgoYikgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGJsb2NrTGFiZWxzLmZpbHRlcigoZikgPT4gZi5zbHVnID09PSBiKT8uWzBdXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZD8ubGFiZWxcbiAgICAgIH0pXG4gICAgICAuam9pbignLCAnKVxuXG4gIGNvbnN0IGl0ZW1zVG9TaG93ID0gNVxuICBpZiAoc2VsZWN0ZWRCbG9ja3MubGVuZ3RoID4gaXRlbXNUb1Nob3cpIHtcbiAgICBjb25zdCBtb3JlID0gc2VsZWN0ZWRCbG9ja3MubGVuZ3RoIC0gaXRlbXNUb1Nob3dcbiAgICBsYWJlbCA9IGAke3NlbGVjdGVkQmxvY2tzLmxlbmd0aH0gJHtnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbHMucGx1cmFsLCBpMThuKX0gLSAke3QoXG4gICAgICAnZmllbGRzOml0ZW1zQW5kTW9yZScsXG4gICAgICB7IGNvdW50OiBtb3JlLCBpdGVtczogZm9ybWF0QmxvY2tMaXN0KHNlbGVjdGVkQmxvY2tzLnNsaWNlKDAsIGl0ZW1zVG9TaG93KSkgfSxcbiAgICApfWBcbiAgfSBlbHNlIGlmIChzZWxlY3RlZEJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgbGFiZWwgPSBgJHtzZWxlY3RlZEJsb2Nrcy5sZW5ndGh9ICR7Z2V0VHJhbnNsYXRpb24oXG4gICAgICBzZWxlY3RlZEJsb2Nrcy5sZW5ndGggPT09IDEgPyBmaWVsZC5sYWJlbHMuc2luZ3VsYXIgOiBmaWVsZC5sYWJlbHMucGx1cmFsLFxuICAgICAgaTE4bixcbiAgICApfSAtICR7Zm9ybWF0QmxvY2tMaXN0KHNlbGVjdGVkQmxvY2tzKX1gXG4gIH1cblxuICByZXR1cm4gPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2Nrc0NlbGxcbiJdLCJuYW1lcyI6WyJCbG9ja3NDZWxsIiwiZGF0YSIsImZpZWxkIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInNlbGVjdGVkQmxvY2tzIiwibWFwIiwiYmxvY2tUeXBlIiwiYmxvY2tMYWJlbHMiLCJibG9ja3MiLCJzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwic2x1ZyIsInBsdXJhbCIsImZvcm1hdEJsb2NrTGlzdCIsImIiLCJmaWx0ZXJlZCIsImZpbHRlciIsImYiLCJqb2luIiwiaXRlbXNUb1Nob3ciLCJsZW5ndGgiLCJtb3JlIiwiY291bnQiLCJpdGVtcyIsInNsaWNlIiwic3BhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMENBOzs7ZUFBQTs7OzhEQTFDa0I7OEJBQ2E7Z0NBS0E7Ozs7OztBQUUvQixNQUFNQSxhQUE0RCxDQUFDLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO0lBQ2hGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUNuQyxNQUFNQyxpQkFBaUJMLE9BQU9BLEtBQUtNLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFLQSxhQUFhLEVBQUU7SUFDekUsTUFBTUMsY0FBY1AsTUFBTVEsTUFBTSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0ksSUFBTyxDQUFBO1lBQzNDQyxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDRixFQUFFRyxNQUFNLENBQUNDLFFBQVEsRUFBRVo7WUFDekNhLE1BQU1MLEVBQUVLLElBQUk7UUFDZCxDQUFBO0lBRUEsSUFBSUosUUFBUSxDQUFDLEVBQUUsRUFBRUMsSUFBQUEsOEJBQWMsRUFBQ1gsTUFBTVksTUFBTSxDQUFDRyxNQUFNLEVBQUVkLE1BQU0sQ0FBQztJQUU1RCxNQUFNZSxrQkFBa0IsQ0FBQ1IsU0FDdkJBLE9BQ0dILEdBQUcsQ0FBQyxDQUFDWTtZQUNKLE1BQU1DLFdBQVdYLFlBQVlZLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFTixJQUFJLEtBQUtHLElBQUksQ0FBQyxFQUFFO1lBQzdELE9BQU9DLFVBQVVSO1FBQ25CLEdBQ0NXLElBQUksQ0FBQztJQUVWLE1BQU1DLGNBQWM7SUFDcEIsSUFBSWxCLGVBQWVtQixNQUFNLEdBQUdELGFBQWE7UUFDdkMsTUFBTUUsT0FBT3BCLGVBQWVtQixNQUFNLEdBQUdEO1FBQ3JDWixRQUFRLENBQUMsRUFBRU4sZUFBZW1CLE1BQU0sQ0FBQyxDQUFDLEVBQUVaLElBQUFBLDhCQUFjLEVBQUNYLE1BQU1ZLE1BQU0sQ0FBQ0csTUFBTSxFQUFFZCxNQUFNLEdBQUcsRUFBRUMsRUFDakYsdUJBQ0E7WUFBRXVCLE9BQU9EO1lBQU1FLE9BQU9WLGdCQUFnQlosZUFBZXVCLEtBQUssQ0FBQyxHQUFHTDtRQUFjLEdBQzVFLENBQUM7SUFDTCxPQUFPLElBQUlsQixlQUFlbUIsTUFBTSxHQUFHLEdBQUc7UUFDcENiLFFBQVEsQ0FBQyxFQUFFTixlQUFlbUIsTUFBTSxDQUFDLENBQUMsRUFBRVosSUFBQUEsOEJBQWMsRUFDaERQLGVBQWVtQixNQUFNLEtBQUssSUFBSXZCLE1BQU1ZLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHYixNQUFNWSxNQUFNLENBQUNHLE1BQU0sRUFDekVkLE1BQ0EsR0FBRyxFQUFFZSxnQkFBZ0JaLGdCQUFnQixDQUFDO0lBQzFDO0lBRUEscUJBQU8sNkJBQUN3QixjQUFNbEI7QUFDaEI7TUFDQSxXQUFlWiJ9