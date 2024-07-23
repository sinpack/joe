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
const _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
const _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../forms/RenderFields"));
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _fieldtypes = require("../../forms/field-types");
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'create-first-user';
const CreateFirstUser = (props)=>{
    const { setInitialized } = props;
    const { fetchFullUser } = (0, _Auth.useAuth)();
    const { admin: { user: userSlug }, collections, routes: { admin, api }, serverURL } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('authentication');
    const userConfig = collections.find((collection)=>collection.slug === userSlug);
    const onSuccess = async (json)=>{
        if (json?.user?.token) {
            await fetchFullUser();
        }
        setInitialized(true);
    };
    const fields = [
        {
            name: 'email',
            label: t('general:emailAddress'),
            required: true,
            type: 'email'
        },
        {
            name: 'password',
            label: t('general:password'),
            required: true,
            type: 'password'
        },
        {
            name: 'confirm-password',
            label: t('confirmPassword'),
            required: true,
            type: 'confirmPassword'
        }
    ];
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('general:welcome')), /*#__PURE__*/ _react.default.createElement("p", null, t('beginCreateFirstUser')), /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('createFirstUser'),
        keywords: t('general:create'),
        title: t('createFirstUser')
    }), /*#__PURE__*/ _react.default.createElement(_Form.default, {
        action: `${serverURL}${api}/${userSlug}/first-register`,
        method: "post",
        onSuccess: onSuccess,
        redirect: admin,
        validationOperation: "create"
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        fieldSchema: [
            ...fields,
            ...userConfig.fields
        ],
        fieldTypes: _fieldtypes.fieldTypes
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t('general:create'))));
};
const _default = CreateFirstUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0NyZWF0ZUZpcnN0VXNlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9mb3Jtcy9SZW5kZXJGaWVsZHMnXG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnXG5pbXBvcnQgeyBmaWVsZFR5cGVzIH0gZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMnXG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjcmVhdGUtZmlyc3QtdXNlcidcblxuY29uc3QgQ3JlYXRlRmlyc3RVc2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRJbml0aWFsaXplZCB9ID0gcHJvcHNcbiAgY29uc3QgeyBmZXRjaEZ1bGxVc2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IHVzZXI6IHVzZXJTbHVnIH0sXG4gICAgY29sbGVjdGlvbnMsXG4gICAgcm91dGVzOiB7IGFkbWluLCBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpXG5cbiAgY29uc3QgdXNlckNvbmZpZyA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gdXNlclNsdWcpXG5cbiAgY29uc3Qgb25TdWNjZXNzID0gYXN5bmMgKGpzb24pID0+IHtcbiAgICBpZiAoanNvbj8udXNlcj8udG9rZW4pIHtcbiAgICAgIGF3YWl0IGZldGNoRnVsbFVzZXIoKVxuICAgIH1cblxuICAgIHNldEluaXRpYWxpemVkKHRydWUpXG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgIGxhYmVsOiB0KCdnZW5lcmFsOmVtYWlsQWRkcmVzcycpLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgIGxhYmVsOiB0KCdnZW5lcmFsOnBhc3N3b3JkJyksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29uZmlybS1wYXNzd29yZCcsXG4gICAgICBsYWJlbDogdCgnY29uZmlybVBhc3N3b3JkJyksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdjb25maXJtUGFzc3dvcmQnLFxuICAgIH0sXG4gIF0gYXMgRmllbGRbXVxuXG4gIHJldHVybiAoXG4gICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8aDE+e3QoJ2dlbmVyYWw6d2VsY29tZScpfTwvaDE+XG4gICAgICA8cD57dCgnYmVnaW5DcmVhdGVGaXJzdFVzZXInKX08L3A+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj17dCgnY3JlYXRlRmlyc3RVc2VyJyl9XG4gICAgICAgIGtleXdvcmRzPXt0KCdnZW5lcmFsOmNyZWF0ZScpfVxuICAgICAgICB0aXRsZT17dCgnY3JlYXRlRmlyc3RVc2VyJyl9XG4gICAgICAvPlxuICAgICAgPEZvcm1cbiAgICAgICAgYWN0aW9uPXtgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2ZpcnN0LXJlZ2lzdGVyYH1cbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxuICAgICAgICByZWRpcmVjdD17YWRtaW59XG4gICAgICAgIHZhbGlkYXRpb25PcGVyYXRpb249XCJjcmVhdGVcIlxuICAgICAgPlxuICAgICAgICA8UmVuZGVyRmllbGRzIGZpZWxkU2NoZW1hPXtbLi4uZmllbGRzLCAuLi51c2VyQ29uZmlnLmZpZWxkc119IGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9IC8+XG4gICAgICAgIDxGb3JtU3VibWl0Pnt0KCdnZW5lcmFsOmNyZWF0ZScpfTwvRm9ybVN1Ym1pdD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVGaXJzdFVzZXJcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJDcmVhdGVGaXJzdFVzZXIiLCJwcm9wcyIsInNldEluaXRpYWxpemVkIiwiZmV0Y2hGdWxsVXNlciIsInVzZUF1dGgiLCJhZG1pbiIsInVzZXIiLCJ1c2VyU2x1ZyIsImNvbGxlY3Rpb25zIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlckNvbmZpZyIsImZpbmQiLCJjb2xsZWN0aW9uIiwic2x1ZyIsIm9uU3VjY2VzcyIsImpzb24iLCJ0b2tlbiIsImZpZWxkcyIsIm5hbWUiLCJsYWJlbCIsInJlcXVpcmVkIiwidHlwZSIsIk1pbmltYWxUZW1wbGF0ZSIsImNsYXNzTmFtZSIsImgxIiwicCIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidGl0bGUiLCJGb3JtIiwiYWN0aW9uIiwibWV0aG9kIiwicmVkaXJlY3QiLCJ2YWxpZGF0aW9uT3BlcmF0aW9uIiwiUmVuZGVyRmllbGRzIiwiZmllbGRTY2hlbWEiLCJmaWVsZFR5cGVzIiwiRm9ybVN1Ym1pdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1GQTs7O2VBQUE7Ozs4REFuRmtCOzhCQUNhOzZEQUtkO3FFQUNROytEQUNGOzRCQUNJO2dFQUNDO3NCQUNKO3dCQUNFOzZEQUNUO1FBQ1Y7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsa0JBQW1DLENBQUNDO0lBQ3hDLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEdBQUdEO0lBQzNCLE1BQU0sRUFBRUUsYUFBYSxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFDakMsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLE1BQU1DLFFBQVEsRUFBRSxFQUN6QkMsV0FBVyxFQUNYQyxRQUFRLEVBQUVKLEtBQUssRUFBRUssR0FBRyxFQUFFLEVBQ3RCQyxTQUFTLEVBQ1YsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLE1BQU1DLGFBQWFQLFlBQVlRLElBQUksQ0FBQyxDQUFDQyxhQUFlQSxXQUFXQyxJQUFJLEtBQUtYO0lBRXhFLE1BQU1ZLFlBQVksT0FBT0M7UUFDdkIsSUFBSUEsTUFBTWQsTUFBTWUsT0FBTztZQUNyQixNQUFNbEI7UUFDUjtRQUVBRCxlQUFlO0lBQ2pCO0lBRUEsTUFBTW9CLFNBQVM7UUFDYjtZQUNFQyxNQUFNO1lBQ05DLE9BQU9YLEVBQUU7WUFDVFksVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU9YLEVBQUU7WUFDVFksVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU9YLEVBQUU7WUFDVFksVUFBVTtZQUNWQyxNQUFNO1FBQ1I7S0FDRDtJQUVELHFCQUNFLDZCQUFDQyxnQkFBZTtRQUFDQyxXQUFXN0I7cUJBQzFCLDZCQUFDOEIsWUFBSWhCLEVBQUUsbUNBQ1AsNkJBQUNpQixXQUFHakIsRUFBRSx3Q0FDTiw2QkFBQ2tCLGFBQUk7UUFDSEMsYUFBYW5CLEVBQUU7UUFDZm9CLFVBQVVwQixFQUFFO1FBQ1pxQixPQUFPckIsRUFBRTtzQkFFWCw2QkFBQ3NCLGFBQUk7UUFDSEMsUUFBUSxDQUFDLEVBQUV6QixVQUFVLEVBQUVELElBQUksQ0FBQyxFQUFFSCxTQUFTLGVBQWUsQ0FBQztRQUN2RDhCLFFBQU87UUFDUGxCLFdBQVdBO1FBQ1htQixVQUFVakM7UUFDVmtDLHFCQUFvQjtxQkFFcEIsNkJBQUNDLHFCQUFZO1FBQUNDLGFBQWE7ZUFBSW5CO2VBQVdQLFdBQVdPLE1BQU07U0FBQztRQUFFb0IsWUFBWUEsc0JBQVU7c0JBQ3BGLDZCQUFDQyxlQUFVLFFBQUU5QixFQUFFO0FBSXZCO01BRUEsV0FBZWIifQ==