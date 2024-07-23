"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fieldTypes", {
    enumerable: true,
    get: function() {
        return fieldTypes;
    }
});
const _Array = /*#__PURE__*/ _interop_require_default(require("./Array"));
const _Blocks = /*#__PURE__*/ _interop_require_default(require("./Blocks"));
const _Checkbox = /*#__PURE__*/ _interop_require_default(require("./Checkbox"));
const _Code = /*#__PURE__*/ _interop_require_default(require("./Code"));
const _Collapsible = /*#__PURE__*/ _interop_require_default(require("./Collapsible"));
const _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("./ConfirmPassword"));
const _DateTime = /*#__PURE__*/ _interop_require_default(require("./DateTime"));
const _Email = /*#__PURE__*/ _interop_require_default(require("./Email"));
const _Group = /*#__PURE__*/ _interop_require_default(require("./Group"));
const _HiddenInput = /*#__PURE__*/ _interop_require_default(require("./HiddenInput"));
const _JSON = /*#__PURE__*/ _interop_require_default(require("./JSON"));
const _Number = /*#__PURE__*/ _interop_require_default(require("./Number"));
const _Password = /*#__PURE__*/ _interop_require_default(require("./Password"));
const _Point = /*#__PURE__*/ _interop_require_default(require("./Point"));
const _RadioGroup = /*#__PURE__*/ _interop_require_default(require("./RadioGroup"));
const _Relationship = /*#__PURE__*/ _interop_require_default(require("./Relationship"));
const _RichText = /*#__PURE__*/ _interop_require_default(require("./RichText"));
const _Row = /*#__PURE__*/ _interop_require_default(require("./Row"));
const _Select = /*#__PURE__*/ _interop_require_default(require("./Select"));
const _Tabs = /*#__PURE__*/ _interop_require_default(require("./Tabs"));
const _Text = /*#__PURE__*/ _interop_require_default(require("./Text"));
const _Textarea = /*#__PURE__*/ _interop_require_default(require("./Textarea"));
const _UI = /*#__PURE__*/ _interop_require_default(require("./UI"));
const _Upload = /*#__PURE__*/ _interop_require_default(require("./Upload"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const fieldTypes = {
    array: _Array.default,
    blocks: _Blocks.default,
    checkbox: _Checkbox.default,
    code: _Code.default,
    collapsible: _Collapsible.default,
    confirmPassword: _ConfirmPassword.default,
    date: _DateTime.default,
    email: _Email.default,
    group: _Group.default,
    hidden: _HiddenInput.default,
    json: _JSON.default,
    number: _Number.default,
    password: _Password.default,
    point: _Point.default,
    radio: _RadioGroup.default,
    relationship: _Relationship.default,
    richText: _RichText.default,
    row: _Row.default,
    select: _Select.default,
    tabs: _Tabs.default,
    text: _Text.default,
    textarea: _Textarea.default,
    ui: _UI.default,
    upload: _Upload.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXkgZnJvbSAnLi9BcnJheSdcbmltcG9ydCBibG9ja3MgZnJvbSAnLi9CbG9ja3MnXG5pbXBvcnQgY2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCdcbmltcG9ydCBjb2RlIGZyb20gJy4vQ29kZSdcbmltcG9ydCBjb2xsYXBzaWJsZSBmcm9tICcuL0NvbGxhcHNpYmxlJ1xuaW1wb3J0IGNvbmZpcm1QYXNzd29yZCBmcm9tICcuL0NvbmZpcm1QYXNzd29yZCdcbmltcG9ydCBkYXRlIGZyb20gJy4vRGF0ZVRpbWUnXG5pbXBvcnQgZW1haWwgZnJvbSAnLi9FbWFpbCdcbmltcG9ydCBncm91cCBmcm9tICcuL0dyb3VwJ1xuaW1wb3J0IGhpZGRlbiBmcm9tICcuL0hpZGRlbklucHV0J1xuaW1wb3J0IGpzb24gZnJvbSAnLi9KU09OJ1xuaW1wb3J0IG51bWJlciBmcm9tICcuL051bWJlcidcbmltcG9ydCBwYXNzd29yZCBmcm9tICcuL1Bhc3N3b3JkJ1xuaW1wb3J0IHBvaW50IGZyb20gJy4vUG9pbnQnXG5pbXBvcnQgcmFkaW8gZnJvbSAnLi9SYWRpb0dyb3VwJ1xuaW1wb3J0IHJlbGF0aW9uc2hpcCBmcm9tICcuL1JlbGF0aW9uc2hpcCdcbmltcG9ydCByaWNoVGV4dCBmcm9tICcuL1JpY2hUZXh0J1xuaW1wb3J0IHJvdyBmcm9tICcuL1JvdydcbmltcG9ydCBzZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQgdGFicyBmcm9tICcuL1RhYnMnXG5pbXBvcnQgdGV4dCBmcm9tICcuL1RleHQnXG5pbXBvcnQgdGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmltcG9ydCB1aSBmcm9tICcuL1VJJ1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuL1VwbG9hZCdcblxuZXhwb3J0IHR5cGUgRmllbGRUeXBlcyA9IHtcbiAgYXJyYXk6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBibG9ja3M6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBjaGVja2JveDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGNvZGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBjb2xsYXBzaWJsZTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGNvbmZpcm1QYXNzd29yZDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGRhdGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBlbWFpbDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGdyb3VwOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgaGlkZGVuOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAganNvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIG51bWJlcjogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHBhc3N3b3JkOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgcG9pbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICByYWRpbzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHJlbGF0aW9uc2hpcDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHJpY2hUZXh0OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgcm93OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgc2VsZWN0OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgdGFiczogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHRleHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICB0ZXh0YXJlYTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHVpOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgdXBsb2FkOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbn1cblxuZXhwb3J0IGNvbnN0IGZpZWxkVHlwZXM6IEZpZWxkVHlwZXMgPSB7XG4gIGFycmF5LFxuICBibG9ja3MsXG4gIGNoZWNrYm94LFxuICBjb2RlLFxuICBjb2xsYXBzaWJsZSxcbiAgY29uZmlybVBhc3N3b3JkLFxuICBkYXRlLFxuICBlbWFpbCxcbiAgZ3JvdXAsXG4gIGhpZGRlbixcbiAganNvbixcbiAgbnVtYmVyLFxuICBwYXNzd29yZCxcbiAgcG9pbnQsXG4gIHJhZGlvLFxuICByZWxhdGlvbnNoaXAsXG4gIHJpY2hUZXh0LFxuICByb3csXG4gIHNlbGVjdCxcbiAgdGFicyxcbiAgdGV4dCxcbiAgdGV4dGFyZWEsXG4gIHVpLFxuICB1cGxvYWQsXG59XG4iXSwibmFtZXMiOlsiZmllbGRUeXBlcyIsImFycmF5IiwiYmxvY2tzIiwiY2hlY2tib3giLCJjb2RlIiwiY29sbGFwc2libGUiLCJjb25maXJtUGFzc3dvcmQiLCJkYXRlIiwiZW1haWwiLCJncm91cCIsImhpZGRlbiIsImpzb24iLCJudW1iZXIiLCJwYXNzd29yZCIsInBvaW50IiwicmFkaW8iLCJyZWxhdGlvbnNoaXAiLCJyaWNoVGV4dCIsInJvdyIsInNlbGVjdCIsInRhYnMiLCJ0ZXh0IiwidGV4dGFyZWEiLCJ1aSIsInVwbG9hZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW9EYUE7OztlQUFBQTs7OzhEQXBESzsrREFDQztpRUFDRTs2REFDSjtvRUFDTzt3RUFDSTtpRUFDWDs4REFDQzs4REFDQTtvRUFDQzs2REFDRjsrREFDRTtpRUFDRTs4REFDSDttRUFDQTtxRUFDTztpRUFDSjs0REFDTDsrREFDRzs2REFDRjs2REFDQTtpRUFDSTsyREFDTjsrREFDSTs7Ozs7O0FBNkJaLE1BQU1BLGFBQXlCO0lBQ3BDQyxPQUFBQSxjQUFLO0lBQ0xDLFFBQUFBLGVBQU07SUFDTkMsVUFBQUEsaUJBQVE7SUFDUkMsTUFBQUEsYUFBSTtJQUNKQyxhQUFBQSxvQkFBVztJQUNYQyxpQkFBQUEsd0JBQWU7SUFDZkMsTUFBQUEsaUJBQUk7SUFDSkMsT0FBQUEsY0FBSztJQUNMQyxPQUFBQSxjQUFLO0lBQ0xDLFFBQUFBLG9CQUFNO0lBQ05DLE1BQUFBLGFBQUk7SUFDSkMsUUFBQUEsZUFBTTtJQUNOQyxVQUFBQSxpQkFBUTtJQUNSQyxPQUFBQSxjQUFLO0lBQ0xDLE9BQUFBLG1CQUFLO0lBQ0xDLGNBQUFBLHFCQUFZO0lBQ1pDLFVBQUFBLGlCQUFRO0lBQ1JDLEtBQUFBLFlBQUc7SUFDSEMsUUFBQUEsZUFBTTtJQUNOQyxNQUFBQSxhQUFJO0lBQ0pDLE1BQUFBLGFBQUk7SUFDSkMsVUFBQUEsaUJBQVE7SUFDUkMsSUFBQUEsV0FBRTtJQUNGQyxRQUFBQSxlQUFNO0FBQ1IifQ==