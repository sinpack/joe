"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrayAction", {
    enumerable: true,
    get: function() {
        return ArrayAction;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _Copy = /*#__PURE__*/ _interop_require_default(require("../../icons/Copy"));
const _More = /*#__PURE__*/ _interop_require_default(require("../../icons/More"));
const _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
const _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
const _Popup = /*#__PURE__*/ _interop_require_default(require("../Popup"));
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../Popup/PopupButtonList"));
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
const baseClass = 'array-actions';
const ArrayAction = ({ addRow, duplicateRow, hasMaxRows, index, isSortable, moveRow, removeRow, rowCount })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    return /*#__PURE__*/ _react.default.createElement(_Popup.default, {
        button: /*#__PURE__*/ _react.default.createElement(_More.default, null),
        buttonClassName: `${baseClass}__button`,
        className: baseClass,
        horizontalAlign: "center",
        render: ({ close })=>{
            return /*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, {
                buttonSize: "small"
            }, isSortable && index !== 0 && /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                className: `${baseClass}__action ${baseClass}__move-up`,
                onClick: ()=>{
                    moveRow(index, index - 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: `${baseClass}__action-chevron`
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
                direction: "up"
            })), t('moveUp')), isSortable && index < rowCount - 1 && /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                className: `${baseClass}__action`,
                onClick: ()=>{
                    moveRow(index, index + 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: `${baseClass}__action-chevron`
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)), t('moveDown')), !hasMaxRows && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                className: `${baseClass}__action ${baseClass}__add`,
                onClick: ()=>{
                    addRow(index + 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Plus.default, null), t('addBelow')), /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                className: `${baseClass}__action ${baseClass}__duplicate`,
                onClick: ()=>{
                    duplicateRow(index);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Copy.default, null), t('duplicate'))), /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                className: `${baseClass}__action ${baseClass}__remove`,
                onClick: ()=>{
                    removeRow(index);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null), t('remove')));
        },
        size: "medium"
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0FycmF5QWN0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJ1xuaW1wb3J0IENvcHkgZnJvbSAnLi4vLi4vaWNvbnMvQ29weSdcbmltcG9ydCBNb3JlIGZyb20gJy4uLy4uL2ljb25zL01vcmUnXG5pbXBvcnQgUGx1cyBmcm9tICcuLi8uLi9pY29ucy9QbHVzJ1xuaW1wb3J0IFggZnJvbSAnLi4vLi4vaWNvbnMvWCdcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9Qb3B1cCdcbmltcG9ydCAqIGFzIFBvcHVwTGlzdCBmcm9tICcuLi9Qb3B1cC9Qb3B1cEJ1dHRvbkxpc3QnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2FycmF5LWFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBBcnJheUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgYWRkUm93LFxuICBkdXBsaWNhdGVSb3csXG4gIGhhc01heFJvd3MsXG4gIGluZGV4LFxuICBpc1NvcnRhYmxlLFxuICBtb3ZlUm93LFxuICByZW1vdmVSb3csXG4gIHJvd0NvdW50LFxufSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgcmV0dXJuIChcbiAgICA8UG9wdXBcbiAgICAgIGJ1dHRvbj17PE1vcmUgLz59XG4gICAgICBidXR0b25DbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbmB9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGhvcml6b250YWxBbGlnbj1cImNlbnRlclwiXG4gICAgICByZW5kZXI9eyh7IGNsb3NlIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvbkdyb3VwIGJ1dHRvblNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAge2lzU29ydGFibGUgJiYgaW5kZXggIT09IDAgJiYgKFxuICAgICAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uICR7YmFzZUNsYXNzfV9fbW92ZS11cGB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbW92ZVJvdyhpbmRleCwgaW5kZXggLSAxKVxuICAgICAgICAgICAgICAgICAgY2xvc2UoKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uLWNoZXZyb25gfT5cbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uIGRpcmVjdGlvbj1cInVwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dCgnbW92ZVVwJyl9XG4gICAgICAgICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXNTb3J0YWJsZSAmJiBpbmRleCA8IHJvd0NvdW50IC0gMSAmJiAoXG4gICAgICAgICAgICAgIDxQb3B1cExpc3QuQnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1vdmVSb3coaW5kZXgsIGluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbi1jaGV2cm9uYH0+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0KCdtb3ZlRG93bicpfVxuICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFoYXNNYXhSb3dzICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxQb3B1cExpc3QuQnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbiAke2Jhc2VDbGFzc31fX2FkZGB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFJvdyhpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgICAgICAgICAgIHt0KCdhZGRCZWxvdycpfVxuICAgICAgICAgICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19kdXBsaWNhdGVgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVSb3coaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENvcHkgLz5cbiAgICAgICAgICAgICAgICAgIHt0KCdkdXBsaWNhdGUnKX1cbiAgICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19yZW1vdmVgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUm93KGluZGV4KVxuICAgICAgICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFggLz5cbiAgICAgICAgICAgICAge3QoJ3JlbW92ZScpfVxuICAgICAgICAgICAgPC9Qb3B1cExpc3QuQnV0dG9uPlxuICAgICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbkdyb3VwPlxuICAgICAgICApXG4gICAgICB9fVxuICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkFycmF5QWN0aW9uIiwiYmFzZUNsYXNzIiwiYWRkUm93IiwiZHVwbGljYXRlUm93IiwiaGFzTWF4Um93cyIsImluZGV4IiwiaXNTb3J0YWJsZSIsIm1vdmVSb3ciLCJyZW1vdmVSb3ciLCJyb3dDb3VudCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsIlBvcHVwIiwiYnV0dG9uIiwiTW9yZSIsImJ1dHRvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImhvcml6b250YWxBbGlnbiIsInJlbmRlciIsImNsb3NlIiwiUG9wdXBMaXN0IiwiQnV0dG9uR3JvdXAiLCJidXR0b25TaXplIiwiQnV0dG9uIiwib25DbGljayIsImRpdiIsIkNoZXZyb24iLCJkaXJlY3Rpb24iLCJSZWFjdCIsIkZyYWdtZW50IiwiUGx1cyIsIkNvcHkiLCJYIiwic2l6ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JhQTs7O2VBQUFBOzs7OERBaEJLOzhCQUNhO2dFQUlYOzZEQUNIOzZEQUNBOzZEQUNBOzBEQUNIOzhEQUNJO3lFQUNTO1FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1DLFlBQVk7QUFFWCxNQUFNRCxjQUErQixDQUFDLEVBQzNDRSxNQUFNLEVBQ05DLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxTQUFTLEVBQ1RDLFFBQVEsRUFDVDtJQUNDLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFDN0IscUJBQ0UsNkJBQUNDLGNBQUs7UUFDSkMsc0JBQVEsNkJBQUNDLGFBQUk7UUFDYkMsaUJBQWlCLENBQUMsRUFBRWQsVUFBVSxRQUFRLENBQUM7UUFDdkNlLFdBQVdmO1FBQ1hnQixpQkFBZ0I7UUFDaEJDLFFBQVEsQ0FBQyxFQUFFQyxLQUFLLEVBQUU7WUFDaEIscUJBQ0UsNkJBQUNDLGlCQUFVQyxXQUFXO2dCQUFDQyxZQUFXO2VBQy9CaEIsY0FBY0QsVUFBVSxtQkFDdkIsNkJBQUNlLGlCQUFVRyxNQUFNO2dCQUNmUCxXQUFXLENBQUMsRUFBRWYsVUFBVSxTQUFTLEVBQUVBLFVBQVUsU0FBUyxDQUFDO2dCQUN2RHVCLFNBQVM7b0JBQ1BqQixRQUFRRixPQUFPQSxRQUFRO29CQUN2QmM7Z0JBQ0Y7NkJBRUEsNkJBQUNNO2dCQUFJVCxXQUFXLENBQUMsRUFBRWYsVUFBVSxnQkFBZ0IsQ0FBQzs2QkFDNUMsNkJBQUN5QixnQkFBTztnQkFBQ0MsV0FBVTtpQkFFcEJqQixFQUFFLFlBR05KLGNBQWNELFFBQVFJLFdBQVcsbUJBQ2hDLDZCQUFDVyxpQkFBVUcsTUFBTTtnQkFDZlAsV0FBVyxDQUFDLEVBQUVmLFVBQVUsUUFBUSxDQUFDO2dCQUNqQ3VCLFNBQVM7b0JBQ1BqQixRQUFRRixPQUFPQSxRQUFRO29CQUN2QmM7Z0JBQ0Y7NkJBRUEsNkJBQUNNO2dCQUFJVCxXQUFXLENBQUMsRUFBRWYsVUFBVSxnQkFBZ0IsQ0FBQzs2QkFDNUMsNkJBQUN5QixnQkFBTyxVQUVUaEIsRUFBRSxjQUdOLENBQUNOLDRCQUNBLDZCQUFDd0IsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDVCxpQkFBVUcsTUFBTTtnQkFDZlAsV0FBVyxDQUFDLEVBQUVmLFVBQVUsU0FBUyxFQUFFQSxVQUFVLEtBQUssQ0FBQztnQkFDbkR1QixTQUFTO29CQUNQdEIsT0FBT0csUUFBUTtvQkFDZmM7Z0JBQ0Y7NkJBRUEsNkJBQUNXLGFBQUksU0FDSnBCLEVBQUUsNEJBRUwsNkJBQUNVLGlCQUFVRyxNQUFNO2dCQUNmUCxXQUFXLENBQUMsRUFBRWYsVUFBVSxTQUFTLEVBQUVBLFVBQVUsV0FBVyxDQUFDO2dCQUN6RHVCLFNBQVM7b0JBQ1ByQixhQUFhRTtvQkFDYmM7Z0JBQ0Y7NkJBRUEsNkJBQUNZLGFBQUksU0FDSnJCLEVBQUUsOEJBSVQsNkJBQUNVLGlCQUFVRyxNQUFNO2dCQUNmUCxXQUFXLENBQUMsRUFBRWYsVUFBVSxTQUFTLEVBQUVBLFVBQVUsUUFBUSxDQUFDO2dCQUN0RHVCLFNBQVM7b0JBQ1BoQixVQUFVSDtvQkFDVmM7Z0JBQ0Y7NkJBRUEsNkJBQUNhLFVBQUMsU0FDRHRCLEVBQUU7UUFJWDtRQUNBdUIsTUFBSzs7QUFHWCJ9