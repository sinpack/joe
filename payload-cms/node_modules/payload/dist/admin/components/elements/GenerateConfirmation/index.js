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
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _reacttoastify = require("react-toastify");
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'generate-confirmation';
const GenerateConfirmation = (props)=>{
    const { highlightField, setKey } = props;
    const { id } = (0, _DocumentInfo.useDocumentInfo)();
    const { toggleModal } = (0, _modal.useModal)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const modalSlug = `generate-confirmation-${id}`;
    const handleGenerate = ()=>{
        setKey();
        toggleModal(modalSlug);
        _reacttoastify.toast.success(t('newAPIKeyGenerated'), {
            autoClose: 3000
        });
        highlightField(true);
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        onClick: ()=>{
            toggleModal(modalSlug);
        },
        size: "small"
    }, t('generateNewAPIKey')), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        slug: modalSlug
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: `${baseClass}__template`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('confirmGeneration')), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
        i18nKey: "generatingNewAPIKeyWillInvalidate",
        t: t
    }, "generatingNewAPIKeyWillInvalidate", /*#__PURE__*/ _react.default.createElement("strong", null, "invalidate"))), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        onClick: ()=>{
            toggleModal(modalSlug);
        },
        type: "button"
    }, t('general:cancel')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: handleGenerate
    }, t('generate')))));
};
const _default = GenerateConfirmation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0dlbmVyYXRlQ29uZmlybWF0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFucywgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2dlbmVyYXRlLWNvbmZpcm1hdGlvbidcblxuY29uc3QgR2VuZXJhdGVDb25maXJtYXRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGhpZ2hsaWdodEZpZWxkLCBzZXRLZXkgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBpZCB9ID0gdXNlRG9jdW1lbnRJbmZvKClcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpXG5cbiAgY29uc3QgbW9kYWxTbHVnID0gYGdlbmVyYXRlLWNvbmZpcm1hdGlvbi0ke2lkfWBcblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9ICgpID0+IHtcbiAgICBzZXRLZXkoKVxuICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1ZylcbiAgICB0b2FzdC5zdWNjZXNzKHQoJ25ld0FQSUtleUdlbmVyYXRlZCcpLCB7IGF1dG9DbG9zZTogMzAwMCB9KVxuICAgIGhpZ2hsaWdodEZpZWxkKHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKVxuICAgICAgICB9fVxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgPlxuICAgICAgICB7dCgnZ2VuZXJhdGVOZXdBUElLZXknKX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfSBzbHVnPXttb2RhbFNsdWd9PlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1HZW5lcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxUcmFucyBpMThuS2V5PVwiZ2VuZXJhdGluZ05ld0FQSUtleVdpbGxJbnZhbGlkYXRlXCIgdD17dH0+XG4gICAgICAgICAgICAgIGdlbmVyYXRpbmdOZXdBUElLZXlXaWxsSW52YWxpZGF0ZVxuICAgICAgICAgICAgICA8c3Ryb25nPmludmFsaWRhdGU8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZX0+e3QoJ2dlbmVyYXRlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlQ29uZmlybWF0aW9uXG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiR2VuZXJhdGVDb25maXJtYXRpb24iLCJwcm9wcyIsImhpZ2hsaWdodEZpZWxkIiwic2V0S2V5IiwiaWQiLCJ1c2VEb2N1bWVudEluZm8iLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibW9kYWxTbHVnIiwiaGFuZGxlR2VuZXJhdGUiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJSZWFjdCIsIkZyYWdtZW50IiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwic2l6ZSIsIk1vZGFsIiwiY2xhc3NOYW1lIiwic2x1ZyIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsInN0cm9uZyIsInR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBbUVBOzs7ZUFBQTs7O3VCQW5FZ0M7OERBQ2Q7OEJBQ29COytCQUNoQjtnRUFJTTs4QkFDSTsrREFDYjtRQUNaOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLHVCQUF3QyxDQUFDQztJQUM3QyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsTUFBTSxFQUFFLEdBQUdGO0lBRW5DLE1BQU0sRUFBRUcsRUFBRSxFQUFFLEdBQUdDLElBQUFBLDZCQUFlO0lBQzlCLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLElBQUFBLGVBQVE7SUFDaEMsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixNQUFNQyxZQUFZLENBQUMsc0JBQXNCLEVBQUVOLEdBQUcsQ0FBQztJQUUvQyxNQUFNTyxpQkFBaUI7UUFDckJSO1FBQ0FHLFlBQVlJO1FBQ1pFLG9CQUFLLENBQUNDLE9BQU8sQ0FBQ0wsRUFBRSx1QkFBdUI7WUFBRU0sV0FBVztRQUFLO1FBQ3pEWixlQUFlO0lBQ2pCO0lBRUEscUJBQ0UsNkJBQUNhLGNBQUssQ0FBQ0MsUUFBUSxzQkFDYiw2QkFBQ0MsZUFBTTtRQUNMQyxhQUFZO1FBQ1pDLFNBQVM7WUFDUGIsWUFBWUk7UUFDZDtRQUNBVSxNQUFLO09BRUpaLEVBQUUscUNBRUwsNkJBQUNhLFlBQUs7UUFBQ0MsV0FBV3ZCO1FBQVd3QixNQUFNYjtxQkFDakMsNkJBQUNjLGdCQUFlO1FBQUNGLFdBQVcsQ0FBQyxFQUFFdkIsVUFBVSxVQUFVLENBQUM7cUJBQ2xELDZCQUFDMEIsWUFBSWpCLEVBQUUscUNBQ1AsNkJBQUNrQix5QkFDQyw2QkFBQ0MsbUJBQUs7UUFBQ0MsU0FBUTtRQUFvQ3BCLEdBQUdBO09BQUcsbURBRXZELDZCQUFDcUIsZ0JBQU8sK0JBSVosNkJBQUNaLGVBQU07UUFDTEMsYUFBWTtRQUNaQyxTQUFTO1lBQ1BiLFlBQVlJO1FBQ2Q7UUFDQW9CLE1BQUs7T0FFSnRCLEVBQUUsa0NBRUwsNkJBQUNTLGVBQU07UUFBQ0UsU0FBU1I7T0FBaUJILEVBQUU7QUFLOUM7TUFFQSxXQUFlUiJ9