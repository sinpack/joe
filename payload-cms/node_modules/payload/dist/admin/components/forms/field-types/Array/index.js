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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _validations = require("../../../../../fields/validations");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _scrollToID = require("../../../../utilities/scrollToID");
const _Banner = /*#__PURE__*/ _interop_require_default(require("../../../elements/Banner"));
const _Button = /*#__PURE__*/ _interop_require_default(require("../../../elements/Button"));
const _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable"));
const _DraggableSortableItem = /*#__PURE__*/ _interop_require_default(require("../../../elements/DraggableSortable/DraggableSortableItem"));
const _ErrorPill = require("../../../elements/ErrorPill");
const _Config = require("../../../utilities/Config");
const _DocumentInfo = require("../../../utilities/DocumentInfo");
const _Locale = require("../../../utilities/Locale");
const _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
const _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
const _context = require("../../Form/context");
const _NullifyField = require("../../NullifyField");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _shared = require("../shared");
const _ArrayRow = require("./ArrayRow");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const baseClass = 'array-field';
const ArrayFieldType = (props)=>{
    const { name, admin: { className, components, condition, description, isSortable = true, readOnly }, fieldTypes, fields, forceRender = false, indexPath, localized, maxRows, minRows, path: pathFromProps, permissions, required, validate = _validations.array } = props;
    const path = pathFromProps || name;
    // eslint-disable-next-line react/destructuring-assignment
    const label = props?.label ?? props?.labels?.singular;
    const CustomRowLabel = components?.RowLabel || undefined;
    const { setDocFieldPreferences } = (0, _DocumentInfo.useDocumentInfo)();
    const { addFieldRow, dispatchFields, removeFieldRow, setModified } = (0, _context.useForm)();
    const submitted = (0, _context.useFormSubmitted)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    const { localization } = (0, _Config.useConfig)();
    const editingDefaultLocale = (()=>{
        if (localization && localization.fallback) {
            const defaultLocale = localization.defaultLocale || 'en';
            return locale === defaultLocale;
        }
        return true;
    })();
    // Handle labeling for Arrays, Global Arrays, and Blocks
    const getLabels = (p)=>{
        if (p?.labels) return p.labels;
        if (p?.label) return {
            plural: undefined,
            singular: p.label
        };
        return {
            plural: t('rows'),
            singular: t('row')
        };
    };
    const labels = getLabels(props);
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        // alternative locales can be null
        if (!editingDefaultLocale && value === null) {
            return true;
        }
        return validate(value, {
            ...options,
            maxRows,
            minRows,
            required
        });
    }, [
        maxRows,
        minRows,
        required,
        validate,
        editingDefaultLocale
    ]);
    const { errorMessage, rows = [], showError, valid, value } = (0, _useField.default)({
        condition,
        hasRows: true,
        path,
        validate: memoizedValidate
    });
    const addRow = (0, _react.useCallback)(async (rowIndex)=>{
        await addFieldRow({
            path,
            rowIndex
        });
        setModified(true);
        setTimeout(()=>{
            (0, _scrollToID.scrollToID)(`${path}-row-${rowIndex + 1}`);
        }, 0);
    }, [
        addFieldRow,
        path,
        setModified
    ]);
    const duplicateRow = (0, _react.useCallback)((rowIndex)=>{
        dispatchFields({
            type: 'DUPLICATE_ROW',
            path,
            rowIndex
        });
        setModified(true);
        setTimeout(()=>{
            (0, _scrollToID.scrollToID)(`${path}-row-${rowIndex}`);
        }, 0);
    }, [
        dispatchFields,
        path,
        setModified
    ]);
    const removeRow = (0, _react.useCallback)((rowIndex)=>{
        removeFieldRow({
            path,
            rowIndex
        });
        setModified(true);
    }, [
        removeFieldRow,
        path,
        setModified
    ]);
    const moveRow = (0, _react.useCallback)((moveFromIndex, moveToIndex)=>{
        dispatchFields({
            type: 'MOVE_ROW',
            moveFromIndex,
            moveToIndex,
            path
        });
        setModified(true);
    }, [
        dispatchFields,
        path,
        setModified
    ]);
    const toggleCollapseAll = (0, _react.useCallback)((collapsed)=>{
        dispatchFields({
            type: 'SET_ALL_ROWS_COLLAPSED',
            collapsed,
            path,
            setDocFieldPreferences
        });
    }, [
        dispatchFields,
        path,
        setDocFieldPreferences
    ]);
    const setCollapse = (0, _react.useCallback)((rowID, collapsed)=>{
        dispatchFields({
            type: 'SET_ROW_COLLAPSED',
            collapsed,
            path,
            rowID,
            setDocFieldPreferences
        });
    }, [
        dispatchFields,
        path,
        setDocFieldPreferences
    ]);
    const hasMaxRows = maxRows && rows.length >= maxRows;
    const fieldErrorCount = rows.reduce((total, row)=>total + (row?.childErrorPaths?.size || 0), 0) + (valid ? 0 : 1);
    const fieldHasErrors = submitted && fieldErrorCount > 0;
    const showRequired = readOnly && rows.length === 0;
    const showMinRows = rows.length < minRows || required && rows.length === 0;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            _shared.fieldBaseClass,
            baseClass,
            className,
            fieldHasErrors ? `${baseClass}--has-error` : `${baseClass}--has-no-error`
        ].filter(Boolean).join(' '),
        id: `field-${path.replace(/\./g, '__')}`
    }, showError && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__error-wrap`
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        message: errorMessage,
        showError: showError
    })), /*#__PURE__*/ _react.default.createElement("header", {
        className: `${baseClass}__header`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__header-wrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__header-content`
    }, /*#__PURE__*/ _react.default.createElement("h3", {
        className: `${baseClass}__title`
    }, (0, _getTranslation.getTranslation)(label || name, i18n)), fieldHasErrors && fieldErrorCount > 0 && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
        count: fieldErrorCount,
        withMessage: true
    })), rows.length > 0 && /*#__PURE__*/ _react.default.createElement("ul", {
        className: `${baseClass}__header-actions`
    }, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("button", {
        className: `${baseClass}__header-action`,
        onClick: ()=>toggleCollapseAll(true),
        type: "button"
    }, t('collapseAll'))), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("button", {
        className: `${baseClass}__header-action`,
        onClick: ()=>toggleCollapseAll(false),
        type: "button"
    }, t('showAll'))))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: `field-description-${path.replace(/\./g, '__')}`,
        description: description,
        path: path,
        value: value
    })), /*#__PURE__*/ _react.default.createElement(_NullifyField.NullifyLocaleField, {
        fieldValue: value,
        localized: localized,
        path: path
    }), (rows.length > 0 || !valid && (showRequired || showMinRows)) && /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
        className: `${baseClass}__draggable-rows`,
        ids: rows.map((row)=>row.id),
        onDragEnd: ({ moveFromIndex, moveToIndex })=>moveRow(moveFromIndex, moveToIndex)
    }, rows.map((row, i)=>/*#__PURE__*/ _react.default.createElement(_DraggableSortableItem.default, {
            disabled: readOnly || !isSortable,
            id: row.id,
            key: row.id
        }, (draggableSortableItemProps)=>/*#__PURE__*/ _react.default.createElement(_ArrayRow.ArrayRow, {
                ...draggableSortableItemProps,
                CustomRowLabel: CustomRowLabel,
                addRow: addRow,
                duplicateRow: duplicateRow,
                fieldTypes: fieldTypes,
                fields: fields,
                forceRender: forceRender,
                hasMaxRows: hasMaxRows,
                indexPath: indexPath,
                isSortable: isSortable,
                labels: labels,
                moveRow: moveRow,
                path: path,
                permissions: permissions,
                readOnly: readOnly,
                removeRow: removeRow,
                row: row,
                rowCount: rows.length,
                rowIndex: i,
                setCollapse: setCollapse
            }))), !valid && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, showRequired && /*#__PURE__*/ _react.default.createElement(_Banner.default, null, t('validation:fieldHasNo', {
        label: (0, _getTranslation.getTranslation)(labels.plural, i18n)
    })), showMinRows && /*#__PURE__*/ _react.default.createElement(_Banner.default, {
        type: "error"
    }, t('validation:requiresAtLeast', {
        count: minRows,
        label: (0, _getTranslation.getTranslation)(minRows > 1 ? labels.plural : labels.singular, i18n) || t(minRows > 1 ? 'general:rows' : 'general:row')
    })))), !readOnly && !hasMaxRows && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "icon-label",
        className: `${baseClass}__add-row`,
        icon: "plus",
        iconPosition: "left",
        iconStyle: "with-border",
        onClick: ()=>addRow(value || 0)
    }, t('addLabel', {
        label: (0, _getTranslation.getTranslation)(labels.singular, i18n)
    })));
};
const _default = (0, _withCondition.default)(ArrayFieldType);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0FycmF5L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGFycmF5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJ1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyBzY3JvbGxUb0lEIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3Njcm9sbFRvSUQnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Jhbm5lcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlJ1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlSXRlbSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EcmFnZ2FibGVTb3J0YWJsZS9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0nXG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InXG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJ1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uLy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IE51bGxpZnlMb2NhbGVGaWVsZCB9IGZyb20gJy4uLy4uL051bGxpZnlGaWVsZCdcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCdcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nXG5pbXBvcnQgeyBmaWVsZEJhc2VDbGFzcyB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCB7IEFycmF5Um93IH0gZnJvbSAnLi9BcnJheVJvdydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYXJyYXktZmllbGQnXG5cbmNvbnN0IEFycmF5RmllbGRUeXBlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYWRtaW46IHsgY2xhc3NOYW1lLCBjb21wb25lbnRzLCBjb25kaXRpb24sIGRlc2NyaXB0aW9uLCBpc1NvcnRhYmxlID0gdHJ1ZSwgcmVhZE9ubHkgfSxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGZpZWxkcyxcbiAgICBmb3JjZVJlbmRlciA9IGZhbHNlLFxuICAgIGluZGV4UGF0aCxcbiAgICBsb2NhbGl6ZWQsXG4gICAgbWF4Um93cyxcbiAgICBtaW5Sb3dzLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBhcnJheSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kZXN0cnVjdHVyaW5nLWFzc2lnbm1lbnRcbiAgY29uc3QgbGFiZWwgPSBwcm9wcz8ubGFiZWwgPz8gcHJvcHM/LmxhYmVscz8uc2luZ3VsYXJcblxuICBjb25zdCBDdXN0b21Sb3dMYWJlbCA9IGNvbXBvbmVudHM/LlJvd0xhYmVsIHx8IHVuZGVmaW5lZFxuXG4gIGNvbnN0IHsgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKClcbiAgY29uc3QgeyBhZGRGaWVsZFJvdywgZGlzcGF0Y2hGaWVsZHMsIHJlbW92ZUZpZWxkUm93LCBzZXRNb2RpZmllZCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IHN1Ym1pdHRlZCA9IHVzZUZvcm1TdWJtaXR0ZWQoKVxuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJylcbiAgY29uc3QgeyBsb2NhbGl6YXRpb24gfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgZWRpdGluZ0RlZmF1bHRMb2NhbGUgPSAoKCkgPT4ge1xuICAgIGlmIChsb2NhbGl6YXRpb24gJiYgbG9jYWxpemF0aW9uLmZhbGxiYWNrKSB7XG4gICAgICBjb25zdCBkZWZhdWx0TG9jYWxlID0gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUgfHwgJ2VuJ1xuICAgICAgcmV0dXJuIGxvY2FsZSA9PT0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH0pKClcblxuICAvLyBIYW5kbGUgbGFiZWxpbmcgZm9yIEFycmF5cywgR2xvYmFsIEFycmF5cywgYW5kIEJsb2Nrc1xuICBjb25zdCBnZXRMYWJlbHMgPSAocDogUHJvcHMpID0+IHtcbiAgICBpZiAocD8ubGFiZWxzKSByZXR1cm4gcC5sYWJlbHNcbiAgICBpZiAocD8ubGFiZWwpIHJldHVybiB7IHBsdXJhbDogdW5kZWZpbmVkLCBzaW5ndWxhcjogcC5sYWJlbCB9XG4gICAgcmV0dXJuIHsgcGx1cmFsOiB0KCdyb3dzJyksIHNpbmd1bGFyOiB0KCdyb3cnKSB9XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBnZXRMYWJlbHMocHJvcHMpXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgLy8gYWx0ZXJuYXRpdmUgbG9jYWxlcyBjYW4gYmUgbnVsbFxuICAgICAgaWYgKCFlZGl0aW5nRGVmYXVsdExvY2FsZSAmJiB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIG1heFJvd3MsIG1pblJvd3MsIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbbWF4Um93cywgbWluUm93cywgcmVxdWlyZWQsIHZhbGlkYXRlLCBlZGl0aW5nRGVmYXVsdExvY2FsZV0sXG4gIClcblxuICBjb25zdCB7XG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHJvd3MgPSBbXSxcbiAgICBzaG93RXJyb3IsXG4gICAgdmFsaWQsXG4gICAgdmFsdWUsXG4gIH0gPSB1c2VGaWVsZDxudW1iZXI+KHtcbiAgICBjb25kaXRpb24sXG4gICAgaGFzUm93czogdHJ1ZSxcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICB9KVxuXG4gIGNvbnN0IGFkZFJvdyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBhd2FpdCBhZGRGaWVsZFJvdyh7IHBhdGgsIHJvd0luZGV4IH0pXG4gICAgICBzZXRNb2RpZmllZCh0cnVlKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9JRChgJHtwYXRofS1yb3ctJHtyb3dJbmRleCArIDF9YClcbiAgICAgIH0sIDApXG4gICAgfSxcbiAgICBbYWRkRmllbGRSb3csIHBhdGgsIHNldE1vZGlmaWVkXSxcbiAgKVxuXG4gIGNvbnN0IGR1cGxpY2F0ZVJvdyA9IHVzZUNhbGxiYWNrKFxuICAgIChyb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBkaXNwYXRjaEZpZWxkcyh7IHR5cGU6ICdEVVBMSUNBVEVfUk9XJywgcGF0aCwgcm93SW5kZXggfSlcbiAgICAgIHNldE1vZGlmaWVkKHRydWUpXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY3JvbGxUb0lEKGAke3BhdGh9LXJvdy0ke3Jvd0luZGV4fWApXG4gICAgICB9LCAwKVxuICAgIH0sXG4gICAgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXRNb2RpZmllZF0sXG4gIClcblxuICBjb25zdCByZW1vdmVSb3cgPSB1c2VDYWxsYmFjayhcbiAgICAocm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmVtb3ZlRmllbGRSb3coeyBwYXRoLCByb3dJbmRleCB9KVxuICAgICAgc2V0TW9kaWZpZWQodHJ1ZSlcbiAgICB9LFxuICAgIFtyZW1vdmVGaWVsZFJvdywgcGF0aCwgc2V0TW9kaWZpZWRdLFxuICApXG5cbiAgY29uc3QgbW92ZVJvdyA9IHVzZUNhbGxiYWNrKFxuICAgIChtb3ZlRnJvbUluZGV4OiBudW1iZXIsIG1vdmVUb0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ01PVkVfUk9XJywgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXgsIHBhdGggfSlcbiAgICAgIHNldE1vZGlmaWVkKHRydWUpXG4gICAgfSxcbiAgICBbZGlzcGF0Y2hGaWVsZHMsIHBhdGgsIHNldE1vZGlmaWVkXSxcbiAgKVxuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlQWxsID0gdXNlQ2FsbGJhY2soXG4gICAgKGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnU0VUX0FMTF9ST1dTX0NPTExBUFNFRCcsIGNvbGxhcHNlZCwgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9KVxuICAgIH0sXG4gICAgW2Rpc3BhdGNoRmllbGRzLCBwYXRoLCBzZXREb2NGaWVsZFByZWZlcmVuY2VzXSxcbiAgKVxuXG4gIGNvbnN0IHNldENvbGxhcHNlID0gdXNlQ2FsbGJhY2soXG4gICAgKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnU0VUX1JPV19DT0xMQVBTRUQnLCBjb2xsYXBzZWQsIHBhdGgsIHJvd0lELCBzZXREb2NGaWVsZFByZWZlcmVuY2VzIH0pXG4gICAgfSxcbiAgICBbZGlzcGF0Y2hGaWVsZHMsIHBhdGgsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXNdLFxuICApXG5cbiAgY29uc3QgaGFzTWF4Um93cyA9IG1heFJvd3MgJiYgcm93cy5sZW5ndGggPj0gbWF4Um93c1xuXG4gIGNvbnN0IGZpZWxkRXJyb3JDb3VudCA9XG4gICAgcm93cy5yZWR1Y2UoKHRvdGFsLCByb3cpID0+IHRvdGFsICsgKHJvdz8uY2hpbGRFcnJvclBhdGhzPy5zaXplIHx8IDApLCAwKSArICh2YWxpZCA/IDAgOiAxKVxuXG4gIGNvbnN0IGZpZWxkSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGZpZWxkRXJyb3JDb3VudCA+IDBcblxuICBjb25zdCBzaG93UmVxdWlyZWQgPSByZWFkT25seSAmJiByb3dzLmxlbmd0aCA9PT0gMFxuICBjb25zdCBzaG93TWluUm93cyA9IHJvd3MubGVuZ3RoIDwgbWluUm93cyB8fCAocmVxdWlyZWQgJiYgcm93cy5sZW5ndGggPT09IDApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgZmllbGRCYXNlQ2xhc3MsXG4gICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBmaWVsZEhhc0Vycm9ycyA/IGAke2Jhc2VDbGFzc30tLWhhcy1lcnJvcmAgOiBgJHtiYXNlQ2xhc3N9LS1oYXMtbm8tZXJyb3JgLFxuICAgICAgXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZywgJ19fJyl9YH1cbiAgICA+XG4gICAgICB7c2hvd0Vycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgICA8RXJyb3IgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfSBzaG93RXJyb3I9e3Nob3dFcnJvcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXBgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RpdGxlYH0+e2dldFRyYW5zbGF0aW9uKGxhYmVsIHx8IG5hbWUsIGkxOG4pfTwvaDM+XG4gICAgICAgICAgICB7ZmllbGRIYXNFcnJvcnMgJiYgZmllbGRFcnJvckNvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvclBpbGwgY291bnQ9e2ZpZWxkRXJyb3JDb3VudH0gd2l0aE1lc3NhZ2UgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jvd3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItYWN0aW9uc2B9PlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItYWN0aW9uYH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUNvbGxhcHNlQWxsKHRydWUpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ2NvbGxhcHNlQWxsJyl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci1hY3Rpb25gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ29sbGFwc2VBbGwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ3Nob3dBbGwnKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQtZGVzY3JpcHRpb24tJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8TnVsbGlmeUxvY2FsZUZpZWxkIGZpZWxkVmFsdWU9e3ZhbHVlfSBsb2NhbGl6ZWQ9e2xvY2FsaXplZH0gcGF0aD17cGF0aH0gLz5cbiAgICAgIHsocm93cy5sZW5ndGggPiAwIHx8ICghdmFsaWQgJiYgKHNob3dSZXF1aXJlZCB8fCBzaG93TWluUm93cykpKSAmJiAoXG4gICAgICAgIDxEcmFnZ2FibGVTb3J0YWJsZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZHJhZ2dhYmxlLXJvd3NgfVxuICAgICAgICAgIGlkcz17cm93cy5tYXAoKHJvdykgPT4gcm93LmlkKX1cbiAgICAgICAgICBvbkRyYWdFbmQ9eyh7IG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4IH0pID0+IG1vdmVSb3cobW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXgpfVxuICAgICAgICA+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICAgIDxEcmFnZ2FibGVTb3J0YWJsZUl0ZW0gZGlzYWJsZWQ9e3JlYWRPbmx5IHx8ICFpc1NvcnRhYmxlfSBpZD17cm93LmlkfSBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgIHsoZHJhZ2dhYmxlU29ydGFibGVJdGVtUHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICA8QXJyYXlSb3dcbiAgICAgICAgICAgICAgICAgIHsuLi5kcmFnZ2FibGVTb3J0YWJsZUl0ZW1Qcm9wc31cbiAgICAgICAgICAgICAgICAgIEN1c3RvbVJvd0xhYmVsPXtDdXN0b21Sb3dMYWJlbH1cbiAgICAgICAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcj17Zm9yY2VSZW5kZXJ9XG4gICAgICAgICAgICAgICAgICBoYXNNYXhSb3dzPXtoYXNNYXhSb3dzfVxuICAgICAgICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICAgICAgICAgICAgcm93PXtyb3d9XG4gICAgICAgICAgICAgICAgICByb3dDb3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICByb3dJbmRleD17aX1cbiAgICAgICAgICAgICAgICAgIHNldENvbGxhcHNlPXtzZXRDb2xsYXBzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9EcmFnZ2FibGVTb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgeyF2YWxpZCAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtzaG93UmVxdWlyZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICAgICAgICB7dCgndmFsaWRhdGlvbjpmaWVsZEhhc05vJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnBsdXJhbCwgaTE4bikgfSl9XG4gICAgICAgICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzaG93TWluUm93cyAmJiAoXG4gICAgICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIHt0KCd2YWxpZGF0aW9uOnJlcXVpcmVzQXRMZWFzdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IG1pblJvd3MsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgIGdldFRyYW5zbGF0aW9uKG1pblJvd3MgPiAxID8gbGFiZWxzLnBsdXJhbCA6IGxhYmVscy5zaW5ndWxhciwgaTE4bikgfHxcbiAgICAgICAgICAgICAgICAgICAgICB0KG1pblJvd3MgPiAxID8gJ2dlbmVyYWw6cm93cycgOiAnZ2VuZXJhbDpyb3cnKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0RyYWdnYWJsZVNvcnRhYmxlPlxuICAgICAgKX1cbiAgICAgIHshcmVhZE9ubHkgJiYgIWhhc01heFJvd3MgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FkZC1yb3dgfVxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkUm93KHZhbHVlIHx8IDApfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2FkZExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oQXJyYXlGaWVsZFR5cGUpXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQXJyYXlGaWVsZFR5cGUiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJjb25kaXRpb24iLCJkZXNjcmlwdGlvbiIsImlzU29ydGFibGUiLCJyZWFkT25seSIsImZpZWxkVHlwZXMiLCJmaWVsZHMiLCJmb3JjZVJlbmRlciIsImluZGV4UGF0aCIsImxvY2FsaXplZCIsIm1heFJvd3MiLCJtaW5Sb3dzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJwZXJtaXNzaW9ucyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJhcnJheSIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJDdXN0b21Sb3dMYWJlbCIsIlJvd0xhYmVsIiwidW5kZWZpbmVkIiwic2V0RG9jRmllbGRQcmVmZXJlbmNlcyIsInVzZURvY3VtZW50SW5mbyIsImFkZEZpZWxkUm93IiwiZGlzcGF0Y2hGaWVsZHMiLCJyZW1vdmVGaWVsZFJvdyIsInNldE1vZGlmaWVkIiwidXNlRm9ybSIsInN1Ym1pdHRlZCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJjb2RlIiwibG9jYWxlIiwidXNlTG9jYWxlIiwiaTE4biIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImxvY2FsaXphdGlvbiIsInVzZUNvbmZpZyIsImVkaXRpbmdEZWZhdWx0TG9jYWxlIiwiZmFsbGJhY2siLCJkZWZhdWx0TG9jYWxlIiwiZ2V0TGFiZWxzIiwicCIsInBsdXJhbCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsImVycm9yTWVzc2FnZSIsInJvd3MiLCJzaG93RXJyb3IiLCJ2YWxpZCIsInVzZUZpZWxkIiwiaGFzUm93cyIsImFkZFJvdyIsInJvd0luZGV4Iiwic2V0VGltZW91dCIsInNjcm9sbFRvSUQiLCJkdXBsaWNhdGVSb3ciLCJ0eXBlIiwicmVtb3ZlUm93IiwibW92ZVJvdyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInRvZ2dsZUNvbGxhcHNlQWxsIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2UiLCJyb3dJRCIsImhhc01heFJvd3MiLCJsZW5ndGgiLCJmaWVsZEVycm9yQ291bnQiLCJyZWR1Y2UiLCJ0b3RhbCIsInJvdyIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsInNob3dSZXF1aXJlZCIsInNob3dNaW5Sb3dzIiwiZGl2IiwiZmllbGRCYXNlQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImlkIiwicmVwbGFjZSIsIkVycm9yIiwibWVzc2FnZSIsImhlYWRlciIsImgzIiwiZ2V0VHJhbnNsYXRpb24iLCJFcnJvclBpbGwiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJGaWVsZERlc2NyaXB0aW9uIiwiTnVsbGlmeUxvY2FsZUZpZWxkIiwiZmllbGRWYWx1ZSIsIkRyYWdnYWJsZVNvcnRhYmxlIiwiaWRzIiwibWFwIiwib25EcmFnRW5kIiwiaSIsIkRyYWdnYWJsZVNvcnRhYmxlSXRlbSIsImRpc2FibGVkIiwia2V5IiwiZHJhZ2dhYmxlU29ydGFibGVJdGVtUHJvcHMiLCJBcnJheVJvdyIsInJvd0NvdW50IiwiUmVhY3QiLCJGcmFnbWVudCIsIkJhbm5lciIsIkJ1dHRvbiIsImJ1dHRvblN0eWxlIiwiaWNvbiIsImljb25Qb3NpdGlvbiIsImljb25TdHlsZSIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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