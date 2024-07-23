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
const _ = /*#__PURE__*/ _interop_require_default(require("../.."));
const _types = require("../../../../../../../fields/config/types");
const _getTranslation = require("../../../../../../../utilities/getTranslation");
const _getUniqueListBy = /*#__PURE__*/ _interop_require_default(require("../../../../../../../utilities/getUniqueListBy"));
const _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'iterable-diff';
const Iterable = ({ comparison, field, fieldComponents, locale, locales, permissions, version })=>{
    const versionRowCount = Array.isArray(version) ? version.length : 0;
    const comparisonRowCount = Array.isArray(comparison) ? comparison.length : 0;
    const maxRows = Math.max(versionRowCount, comparisonRowCount);
    const { i18n, t } = (0, _reacti18next.useTranslation)('version');
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, field.label && /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__locale-label`
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), maxRows > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, Array.from(Array(maxRows).keys()).map((row, i)=>{
        const versionRow = version?.[i] || {};
        const comparisonRow = comparison?.[i] || {};
        let subFields = [];
        if (field.type === 'array') subFields = field.fields;
        if (field.type === 'blocks') {
            subFields = [
                {
                    name: 'blockType',
                    label: t('fields:blockType'),
                    type: 'text'
                }
            ];
            if (versionRow?.blockType === comparisonRow?.blockType) {
                const matchedBlock = field.blocks.find((block)=>block.slug === versionRow?.blockType) || {
                    fields: []
                };
                subFields = [
                    ...subFields,
                    ...matchedBlock.fields
                ];
            } else {
                const matchedVersionBlock = field.blocks.find((block)=>block.slug === versionRow?.blockType) || {
                    fields: []
                };
                const matchedComparisonBlock = field.blocks.find((block)=>block.slug === comparisonRow?.blockType) || {
                    fields: []
                };
                subFields = (0, _getUniqueListBy.default)([
                    ...subFields,
                    ...matchedVersionBlock.fields,
                    ...matchedComparisonBlock.fields
                ], 'name');
            }
        }
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__wrap`,
            key: i
        }, /*#__PURE__*/ _react.default.createElement(_.default, {
            comparison: comparisonRow,
            fieldComponents: fieldComponents,
            fieldPermissions: permissions,
            fields: subFields.filter((subField)=>!((0, _types.fieldAffectsData)(subField) && subField.name === 'id')),
            locales: locales,
            version: versionRow
        }));
    })), maxRows === 0 && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__no-rows`
    }, t('noRowsFound', {
        label: field.labels?.plural ? (0, _getTranslation.getTranslation)(field.labels?.plural, i18n) : t('general:rows')
    })));
};
const _default = Iterable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9JdGVyYWJsZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IEFycmF5RmllbGQsIEJsb2NrRmllbGQsIEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IFJlbmRlckZpZWxkc1RvRGlmZiBmcm9tICcuLi8uLidcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgZ2V0VW5pcXVlTGlzdEJ5IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRVbmlxdWVMaXN0QnknXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2l0ZXJhYmxlLWRpZmYnXG5cbmNvbnN0IEl0ZXJhYmxlOiBSZWFjdC5GQzxQcm9wcyAmIHsgZmllbGQ6IEFycmF5RmllbGQgfCBCbG9ja0ZpZWxkIH0+ID0gKHtcbiAgY29tcGFyaXNvbixcbiAgZmllbGQsXG4gIGZpZWxkQ29tcG9uZW50cyxcbiAgbG9jYWxlLFxuICBsb2NhbGVzLFxuICBwZXJtaXNzaW9ucyxcbiAgdmVyc2lvbixcbn0pID0+IHtcbiAgY29uc3QgdmVyc2lvblJvd0NvdW50ID0gQXJyYXkuaXNBcnJheSh2ZXJzaW9uKSA/IHZlcnNpb24ubGVuZ3RoIDogMFxuICBjb25zdCBjb21wYXJpc29uUm93Q291bnQgPSBBcnJheS5pc0FycmF5KGNvbXBhcmlzb24pID8gY29tcGFyaXNvbi5sZW5ndGggOiAwXG4gIGNvbnN0IG1heFJvd3MgPSBNYXRoLm1heCh2ZXJzaW9uUm93Q291bnQsIGNvbXBhcmlzb25Sb3dDb3VudClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHtmaWVsZC5sYWJlbCAmJiAoXG4gICAgICAgIDxMYWJlbD5cbiAgICAgICAgICB7bG9jYWxlICYmIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxlLWxhYmVsYH0+e2xvY2FsZX08L3NwYW4+fVxuICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCwgaTE4bil9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICApfVxuICAgICAge21heFJvd3MgPiAwICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KG1heFJvd3MpLmtleXMoKSkubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnNpb25Sb3cgPSB2ZXJzaW9uPy5baV0gfHwge31cbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmlzb25Sb3cgPSBjb21wYXJpc29uPy5baV0gfHwge31cblxuICAgICAgICAgICAgbGV0IHN1YkZpZWxkczogRmllbGRbXSA9IFtdXG5cbiAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnYXJyYXknKSBzdWJGaWVsZHMgPSBmaWVsZC5maWVsZHNcblxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdibG9ja3MnKSB7XG4gICAgICAgICAgICAgIHN1YkZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnYmxvY2tUeXBlJyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB0KCdmaWVsZHM6YmxvY2tUeXBlJyksXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgIGlmICh2ZXJzaW9uUm93Py5ibG9ja1R5cGUgPT09IGNvbXBhcmlzb25Sb3c/LmJsb2NrVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRCbG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKFxuICAgICAgICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5zbHVnID09PSB2ZXJzaW9uUm93Py5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgICAgKSB8fCB7IGZpZWxkczogW10gfVxuICAgICAgICAgICAgICAgIHN1YkZpZWxkcyA9IFsuLi5zdWJGaWVsZHMsIC4uLm1hdGNoZWRCbG9jay5maWVsZHNdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFZlcnNpb25CbG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKFxuICAgICAgICAgICAgICAgICAgKGJsb2NrKSA9PiBibG9jay5zbHVnID09PSB2ZXJzaW9uUm93Py5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgICAgKSB8fCB7IGZpZWxkczogW10gfVxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRDb21wYXJpc29uQmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZChcbiAgICAgICAgICAgICAgICAgIChibG9jaykgPT4gYmxvY2suc2x1ZyA9PT0gY29tcGFyaXNvblJvdz8uYmxvY2tUeXBlLFxuICAgICAgICAgICAgICAgICkgfHwgeyBmaWVsZHM6IFtdIH1cblxuICAgICAgICAgICAgICAgIHN1YkZpZWxkcyA9IGdldFVuaXF1ZUxpc3RCeTxGaWVsZD4oXG4gICAgICAgICAgICAgICAgICBbLi4uc3ViRmllbGRzLCAuLi5tYXRjaGVkVmVyc2lvbkJsb2NrLmZpZWxkcywgLi4ubWF0Y2hlZENvbXBhcmlzb25CbG9jay5maWVsZHNdLFxuICAgICAgICAgICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1RvRGlmZlxuICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvblJvd31cbiAgICAgICAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgZmllbGRQZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgICBmaWVsZHM9e3N1YkZpZWxkcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChzdWJGaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKHN1YkZpZWxkKSAmJiBzdWJGaWVsZC5uYW1lID09PSAnaWQnKSxcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvblJvd31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7bWF4Um93cyA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19uby1yb3dzYH0+XG4gICAgICAgICAge3QoJ25vUm93c0ZvdW5kJywge1xuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVscz8ucGx1cmFsXG4gICAgICAgICAgICAgID8gZ2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWxzPy5wbHVyYWwsIGkxOG4pXG4gICAgICAgICAgICAgIDogdCgnZ2VuZXJhbDpyb3dzJyksXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVyYWJsZVxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkl0ZXJhYmxlIiwiY29tcGFyaXNvbiIsImZpZWxkIiwiZmllbGRDb21wb25lbnRzIiwibG9jYWxlIiwibG9jYWxlcyIsInBlcm1pc3Npb25zIiwidmVyc2lvbiIsInZlcnNpb25Sb3dDb3VudCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImNvbXBhcmlzb25Sb3dDb3VudCIsIm1heFJvd3MiLCJNYXRoIiwibWF4IiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiTGFiZWwiLCJzcGFuIiwiZ2V0VHJhbnNsYXRpb24iLCJSZWFjdCIsIkZyYWdtZW50IiwiZnJvbSIsImtleXMiLCJtYXAiLCJyb3ciLCJpIiwidmVyc2lvblJvdyIsImNvbXBhcmlzb25Sb3ciLCJzdWJGaWVsZHMiLCJ0eXBlIiwiZmllbGRzIiwibmFtZSIsImJsb2NrVHlwZSIsIm1hdGNoZWRCbG9jayIsImJsb2NrcyIsImZpbmQiLCJibG9jayIsInNsdWciLCJtYXRjaGVkVmVyc2lvbkJsb2NrIiwibWF0Y2hlZENvbXBhcmlzb25CbG9jayIsImdldFVuaXF1ZUxpc3RCeSIsImtleSIsIlJlbmRlckZpZWxkc1RvRGlmZiIsImZpZWxkUGVybWlzc2lvbnMiLCJmaWx0ZXIiLCJzdWJGaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJsYWJlbHMiLCJwbHVyYWwi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