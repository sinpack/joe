'use client';
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
    AutosaveCell: function() {
        return AutosaveCell;
    },
    renderPill: function() {
        return renderPill;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _ = require("../../../");
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
const renderPill = (data, latestVersion, currentLabel, previousLabel, pillStyle)=>{
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, data?.id === latestVersion ? /*#__PURE__*/ _react.default.createElement(_.Pill, {
        pillStyle: pillStyle
    }, currentLabel) : /*#__PURE__*/ _react.default.createElement(_.Pill, null, previousLabel), "  ");
};
const AutosaveCell = ({ latestDraftVersion, latestPublishedVersion, rowData })=>{
    const { t } = (0, _reacti18next.useTranslation)();
    const status = rowData?.version._status;
    const versionInfo = {
        draft: {
            currentLabel: t('version:currentDraft'),
            latestVersion: latestDraftVersion,
            pillStyle: undefined,
            previousLabel: t('version:draft')
        },
        published: {
            currentLabel: t('version:currentPublishedVersion'),
            latestVersion: latestPublishedVersion,
            pillStyle: 'success',
            previousLabel: t('version:previouslyPublished')
        }
    };
    const { currentLabel, latestVersion, pillStyle, previousLabel } = versionInfo[status] || {};
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, rowData?.autosave && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_.Pill, null, t('version:autosave')), "  "), status && renderPill(rowData, latestVersion, currentLabel, previousLabel, pillStyle));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL2NlbGxzL0F1dG9zYXZlQ2VsbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHsgUGlsbCB9IGZyb20gJy4uLy4uLy4uLydcblxudHlwZSBBdXRvc2F2ZUNlbGxQcm9wcyA9IHtcbiAgbGF0ZXN0RHJhZnRWZXJzaW9uPzogc3RyaW5nXG4gIGxhdGVzdFB1Ymxpc2hlZFZlcnNpb24/OiBzdHJpbmdcbiAgcm93RGF0YTogYW55XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQaWxsID0gKGRhdGEsIGxhdGVzdFZlcnNpb24sIGN1cnJlbnRMYWJlbCwgcHJldmlvdXNMYWJlbCwgcGlsbFN0eWxlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2RhdGE/LmlkID09PSBsYXRlc3RWZXJzaW9uID8gKFxuICAgICAgICA8UGlsbCBwaWxsU3R5bGU9e3BpbGxTdHlsZX0+e2N1cnJlbnRMYWJlbH08L1BpbGw+XG4gICAgICApIDogKFxuICAgICAgICA8UGlsbD57cHJldmlvdXNMYWJlbH08L1BpbGw+XG4gICAgICApfVxuICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgQXV0b3NhdmVDZWxsOiBSZWFjdC5GQzxBdXRvc2F2ZUNlbGxQcm9wcz4gPSAoe1xuICBsYXRlc3REcmFmdFZlcnNpb24sXG4gIGxhdGVzdFB1Ymxpc2hlZFZlcnNpb24sXG4gIHJvd0RhdGEsXG59KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBzdGF0dXMgPSByb3dEYXRhPy52ZXJzaW9uLl9zdGF0dXNcblxuICBjb25zdCB2ZXJzaW9uSW5mbyA9IHtcbiAgICBkcmFmdDoge1xuICAgICAgY3VycmVudExhYmVsOiB0KCd2ZXJzaW9uOmN1cnJlbnREcmFmdCcpLFxuICAgICAgbGF0ZXN0VmVyc2lvbjogbGF0ZXN0RHJhZnRWZXJzaW9uLFxuICAgICAgcGlsbFN0eWxlOiB1bmRlZmluZWQsXG4gICAgICBwcmV2aW91c0xhYmVsOiB0KCd2ZXJzaW9uOmRyYWZ0JyksXG4gICAgfSxcbiAgICBwdWJsaXNoZWQ6IHtcbiAgICAgIGN1cnJlbnRMYWJlbDogdCgndmVyc2lvbjpjdXJyZW50UHVibGlzaGVkVmVyc2lvbicpLFxuICAgICAgbGF0ZXN0VmVyc2lvbjogbGF0ZXN0UHVibGlzaGVkVmVyc2lvbixcbiAgICAgIHBpbGxTdHlsZTogJ3N1Y2Nlc3MnLFxuICAgICAgcHJldmlvdXNMYWJlbDogdCgndmVyc2lvbjpwcmV2aW91c2x5UHVibGlzaGVkJyksXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IHsgY3VycmVudExhYmVsLCBsYXRlc3RWZXJzaW9uLCBwaWxsU3R5bGUsIHByZXZpb3VzTGFiZWwgfSA9IHZlcnNpb25JbmZvW3N0YXR1c10gfHwge31cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtyb3dEYXRhPy5hdXRvc2F2ZSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8UGlsbD57dCgndmVyc2lvbjphdXRvc2F2ZScpfTwvUGlsbD5cbiAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7c3RhdHVzICYmIHJlbmRlclBpbGwocm93RGF0YSwgbGF0ZXN0VmVyc2lvbiwgY3VycmVudExhYmVsLCBwcmV2aW91c0xhYmVsLCBwaWxsU3R5bGUpfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBdXRvc2F2ZUNlbGwiLCJyZW5kZXJQaWxsIiwiZGF0YSIsImxhdGVzdFZlcnNpb24iLCJjdXJyZW50TGFiZWwiLCJwcmV2aW91c0xhYmVsIiwicGlsbFN0eWxlIiwiUmVhY3QiLCJGcmFnbWVudCIsImlkIiwiUGlsbCIsImxhdGVzdERyYWZ0VmVyc2lvbiIsImxhdGVzdFB1Ymxpc2hlZFZlcnNpb24iLCJyb3dEYXRhIiwidCIsInVzZVRyYW5zbGF0aW9uIiwic3RhdHVzIiwidmVyc2lvbiIsIl9zdGF0dXMiLCJ2ZXJzaW9uSW5mbyIsImRyYWZ0IiwidW5kZWZpbmVkIiwicHVibGlzaGVkIiwiYXV0b3NhdmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0lBeUJhQSxZQUFZO2VBQVpBOztJQWJBQyxVQUFVO2VBQVZBOzs7K0RBWG1COzhCQUNEO2tCQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZCxNQUFNQSxhQUFhLENBQUNDLE1BQU1DLGVBQWVDLGNBQWNDLGVBQWVDO0lBQzNFLHFCQUNFLDZCQUFDQyxjQUFLLENBQUNDLFFBQVEsUUFDWk4sTUFBTU8sT0FBT04sOEJBQ1osNkJBQUNPLE1BQUk7UUFBQ0osV0FBV0E7T0FBWUYsOEJBRTdCLDZCQUFDTSxNQUFJLFFBQUVMLGdCQUNQO0FBSVI7QUFFTyxNQUFNTCxlQUE0QyxDQUFDLEVBQ3hEVyxrQkFBa0IsRUFDbEJDLHNCQUFzQixFQUN0QkMsT0FBTyxFQUNSO0lBQ0MsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFDNUIsTUFBTUMsU0FBU0gsU0FBU0ksUUFBUUM7SUFFaEMsTUFBTUMsY0FBYztRQUNsQkMsT0FBTztZQUNMaEIsY0FBY1UsRUFBRTtZQUNoQlgsZUFBZVE7WUFDZkwsV0FBV2U7WUFDWGhCLGVBQWVTLEVBQUU7UUFDbkI7UUFDQVEsV0FBVztZQUNUbEIsY0FBY1UsRUFBRTtZQUNoQlgsZUFBZVM7WUFDZk4sV0FBVztZQUNYRCxlQUFlUyxFQUFFO1FBQ25CO0lBQ0Y7SUFFQSxNQUFNLEVBQUVWLFlBQVksRUFBRUQsYUFBYSxFQUFFRyxTQUFTLEVBQUVELGFBQWEsRUFBRSxHQUFHYyxXQUFXLENBQUNILE9BQU8sSUFBSSxDQUFDO0lBRTFGLHFCQUNFLDZCQUFDUixlQUFRLFFBQ05LLFNBQVNVLDBCQUNSLDZCQUFDaEIsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDRSxNQUFJLFFBQUVJLEVBQUUsc0JBQTJCLE9BSXZDRSxVQUFVZixXQUFXWSxTQUFTVixlQUFlQyxjQUFjQyxlQUFlQztBQUdqRiJ9