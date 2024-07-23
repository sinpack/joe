"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Publish", {
    enumerable: true,
    get: function() {
        return Publish;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _context = require("../../forms/Form/context");
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
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
const DefaultPublishButton = ({ id, canPublish, disabled, label, publish })=>{
    if (!canPublish) return null;
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        buttonId: id,
        disabled: disabled,
        onClick: publish,
        size: "small",
        type: "button"
    }, label);
};
const Publish = ({ CustomComponent })=>{
    const { code } = (0, _Locale.useLocale)();
    const { id, collection, global, publishedDoc, unpublishedVersions } = (0, _DocumentInfo.useDocumentInfo)();
    const [hasPublishPermission, setHasPublishPermission] = _react.default.useState(false);
    const { getData, submit } = (0, _context.useForm)();
    const modified = (0, _context.useFormModified)();
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('version');
    const hasNewerVersions = unpublishedVersions?.totalDocs > 0;
    const canPublish = modified || hasNewerVersions || !publishedDoc;
    const publish = (0, _react.useCallback)(()=>{
        void submit({
            overrides: {
                _status: 'published'
            }
        });
    }, [
        submit
    ]);
    _react.default.useEffect(()=>{
        const fetchPublishAccess = async ()=>{
            let docAccessURL;
            let operation = 'update';
            const params = {
                locale: code || undefined
            };
            if (global) {
                docAccessURL = `/globals/${global.slug}/access`;
            } else if (collection) {
                if (!id) operation = 'create';
                docAccessURL = `/${collection.slug}/access${id ? `/${id}` : ''}`;
            }
            if (docAccessURL) {
                const data = getData();
                const res = await fetch(`${serverURL}${api}${docAccessURL}?${_qs.default.stringify(params)}`, {
                    body: JSON.stringify({
                        ...data,
                        _status: 'published'
                    }),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'post'
                });
                const json = await res.json();
                const result = Boolean(json?.[operation]?.permission);
                setHasPublishPermission(result);
            } else {
                setHasPublishPermission(true);
            }
        };
        void fetchPublishAccess();
    }, [
        api,
        code,
        collection,
        getData,
        global,
        id,
        serverURL
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultPublishButton,
        componentProps: {
            id: 'action-save',
            DefaultButton: DefaultPublishButton,
            canPublish: hasPublishPermission,
            disabled: !canPublish,
            label: t('publishChanges'),
            publish
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnXG5cbmV4cG9ydCB0eXBlIEN1c3RvbVB1Ymxpc2hCdXR0b25UeXBlID0gUmVhY3QuQ29tcG9uZW50VHlwZTxcbiAgRGVmYXVsdFB1Ymxpc2hCdXR0b25Qcm9wcyAmIHtcbiAgICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHM+XG4gIH1cbj5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDdXN0b21QdWJsaXNoQnV0dG9uVHlwZWAgaW5zdGVhZCAtIHJlbmFtZWQgZnJvbSBgQ3VzdG9tUHVibGlzaEJ1dHRvblByb3BzYFxuICovXG5leHBvcnQgdHlwZSBDdXN0b21QdWJsaXNoQnV0dG9uUHJvcHMgPSBDdXN0b21QdWJsaXNoQnV0dG9uVHlwZVxuXG5leHBvcnQgdHlwZSBEZWZhdWx0UHVibGlzaEJ1dHRvblByb3BzID0ge1xuICBjYW5QdWJsaXNoOiBib29sZWFuXG4gIGRpc2FibGVkOiBib29sZWFuXG4gIGlkPzogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgcHVibGlzaDogKCkgPT4gdm9pZFxufVxuY29uc3QgRGVmYXVsdFB1Ymxpc2hCdXR0b246IFJlYWN0LkZDPERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHM+ID0gKHtcbiAgaWQsXG4gIGNhblB1Ymxpc2gsXG4gIGRpc2FibGVkLFxuICBsYWJlbCxcbiAgcHVibGlzaCxcbn0pID0+IHtcbiAgaWYgKCFjYW5QdWJsaXNoKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXQgYnV0dG9uSWQ9e2lkfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e3B1Ymxpc2h9IHNpemU9XCJzbWFsbFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0Zvcm1TdWJtaXQ+XG4gIClcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgQ3VzdG9tQ29tcG9uZW50PzogQ3VzdG9tUHVibGlzaEJ1dHRvblR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IFB1Ymxpc2g6IFJlYWN0LkZDPFByb3BzPiA9ICh7IEN1c3RvbUNvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHsgY29kZSB9ID0gdXNlTG9jYWxlKClcbiAgY29uc3QgeyBpZCwgY29sbGVjdGlvbiwgZ2xvYmFsLCBwdWJsaXNoZWREb2MsIHVucHVibGlzaGVkVmVyc2lvbnMgfSA9IHVzZURvY3VtZW50SW5mbygpXG4gIGNvbnN0IFtoYXNQdWJsaXNoUGVybWlzc2lvbiwgc2V0SGFzUHVibGlzaFBlcm1pc3Npb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgZ2V0RGF0YSwgc3VibWl0IH0gPSB1c2VGb3JtKClcbiAgY29uc3QgbW9kaWZpZWQgPSB1c2VGb3JtTW9kaWZpZWQoKVxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFwaSB9LFxuICAgIHNlcnZlclVSTCxcbiAgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKVxuXG4gIGNvbnN0IGhhc05ld2VyVmVyc2lvbnMgPSB1bnB1Ymxpc2hlZFZlcnNpb25zPy50b3RhbERvY3MgPiAwXG4gIGNvbnN0IGNhblB1Ymxpc2ggPSBtb2RpZmllZCB8fCBoYXNOZXdlclZlcnNpb25zIHx8ICFwdWJsaXNoZWREb2NcblxuICBjb25zdCBwdWJsaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZvaWQgc3VibWl0KHtcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBfc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSwgW3N1Ym1pdF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFB1Ymxpc2hBY2Nlc3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgZG9jQWNjZXNzVVJMOiBzdHJpbmdcbiAgICAgIGxldCBvcGVyYXRpb24gPSAndXBkYXRlJ1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGxvY2FsZTogY29kZSB8fCB1bmRlZmluZWQsXG4gICAgICB9XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIGRvY0FjY2Vzc1VSTCA9IGAvZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS9hY2Nlc3NgXG4gICAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKCFpZCkgb3BlcmF0aW9uID0gJ2NyZWF0ZSdcbiAgICAgICAgZG9jQWNjZXNzVVJMID0gYC8ke2NvbGxlY3Rpb24uc2x1Z30vYWNjZXNzJHtpZCA/IGAvJHtpZH1gIDogJyd9YFxuICAgICAgfVxuXG4gICAgICBpZiAoZG9jQWNjZXNzVVJMKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKClcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9JHtkb2NBY2Nlc3NVUkx9PyR7cXMuc3RyaW5naWZ5KHBhcmFtcyl9YCwge1xuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBfc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQm9vbGVhbihqc29uPy5bb3BlcmF0aW9uXT8ucGVybWlzc2lvbilcbiAgICAgICAgc2V0SGFzUHVibGlzaFBlcm1pc3Npb24ocmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGFzUHVibGlzaFBlcm1pc3Npb24odHJ1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2b2lkIGZldGNoUHVibGlzaEFjY2VzcygpXG4gIH0sIFthcGksIGNvZGUsIGNvbGxlY3Rpb24sIGdldERhdGEsIGdsb2JhbCwgaWQsIHNlcnZlclVSTF0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUNvbXBvbmVudH1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRQdWJsaXNoQnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgaWQ6ICdhY3Rpb24tc2F2ZScsXG4gICAgICAgIERlZmF1bHRCdXR0b246IERlZmF1bHRQdWJsaXNoQnV0dG9uLFxuICAgICAgICBjYW5QdWJsaXNoOiBoYXNQdWJsaXNoUGVybWlzc2lvbixcbiAgICAgICAgZGlzYWJsZWQ6ICFjYW5QdWJsaXNoLFxuICAgICAgICBsYWJlbDogdCgncHVibGlzaENoYW5nZXMnKSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlB1Ymxpc2giLCJEZWZhdWx0UHVibGlzaEJ1dHRvbiIsImlkIiwiY2FuUHVibGlzaCIsImRpc2FibGVkIiwibGFiZWwiLCJwdWJsaXNoIiwiRm9ybVN1Ym1pdCIsImJ1dHRvbklkIiwib25DbGljayIsInNpemUiLCJ0eXBlIiwiQ3VzdG9tQ29tcG9uZW50IiwiY29kZSIsInVzZUxvY2FsZSIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJwdWJsaXNoZWREb2MiLCJ1bnB1Ymxpc2hlZFZlcnNpb25zIiwidXNlRG9jdW1lbnRJbmZvIiwiaGFzUHVibGlzaFBlcm1pc3Npb24iLCJzZXRIYXNQdWJsaXNoUGVybWlzc2lvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXREYXRhIiwic3VibWl0IiwidXNlRm9ybSIsIm1vZGlmaWVkIiwidXNlRm9ybU1vZGlmaWVkIiwicm91dGVzIiwiYXBpIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiaGFzTmV3ZXJWZXJzaW9ucyIsInRvdGFsRG9jcyIsInVzZUNhbGxiYWNrIiwib3ZlcnJpZGVzIiwiX3N0YXR1cyIsInVzZUVmZmVjdCIsImZldGNoUHVibGlzaEFjY2VzcyIsImRvY0FjY2Vzc1VSTCIsIm9wZXJhdGlvbiIsInBhcmFtcyIsImxvY2FsZSIsInVuZGVmaW5lZCIsInNsdWciLCJkYXRhIiwicmVzIiwiZmV0Y2giLCJxcyIsInN0cmluZ2lmeSIsImJvZHkiLCJKU09OIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsInJlc3VsdCIsIkJvb2xlYW4iLCJwZXJtaXNzaW9uIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiRGVmYXVsdEJ1dHRvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFnRGFBOzs7ZUFBQUE7OzsyREFoREU7K0RBQ29COzhCQUNKO3lCQUVVOytEQUNsQjt3QkFDRzs4QkFDTTt3QkFDTjs4RUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmxDLE1BQU1DLHVCQUE0RCxDQUFDLEVBQ2pFQyxFQUFFLEVBQ0ZDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUjtJQUNDLElBQUksQ0FBQ0gsWUFBWSxPQUFPO0lBRXhCLHFCQUNFLDZCQUFDSSxlQUFVO1FBQUNDLFVBQVVOO1FBQUlFLFVBQVVBO1FBQVVLLFNBQVNIO1FBQVNJLE1BQUs7UUFBUUMsTUFBSztPQUMvRU47QUFHUDtBQU1PLE1BQU1MLFVBQTJCLENBQUMsRUFBRVksZUFBZSxFQUFFO0lBQzFELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBQzFCLE1BQU0sRUFBRVosRUFBRSxFQUFFYSxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxtQkFBbUIsRUFBRSxHQUFHQyxJQUFBQSw2QkFBZTtJQUNyRixNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDO0lBQ3ZFLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MsSUFBQUEsZ0JBQU87SUFDbkMsTUFBTUMsV0FBV0MsSUFBQUEsd0JBQWU7SUFDaEMsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLEdBQUcsRUFBRSxFQUNmQyxTQUFTLEVBQ1YsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLE1BQU1DLG1CQUFtQmpCLHFCQUFxQmtCLFlBQVk7SUFDMUQsTUFBTWpDLGFBQWF3QixZQUFZUSxvQkFBb0IsQ0FBQ2xCO0lBRXBELE1BQU1YLFVBQVUrQixJQUFBQSxrQkFBVyxFQUFDO1FBQzFCLEtBQUtaLE9BQU87WUFDVmEsV0FBVztnQkFDVEMsU0FBUztZQUNYO1FBQ0Y7SUFDRixHQUFHO1FBQUNkO0tBQU87SUFFWEgsY0FBSyxDQUFDa0IsU0FBUyxDQUFDO1FBQ2QsTUFBTUMscUJBQXFCO1lBQ3pCLElBQUlDO1lBQ0osSUFBSUMsWUFBWTtZQUVoQixNQUFNQyxTQUFTO2dCQUNiQyxRQUFRaEMsUUFBUWlDO1lBQ2xCO1lBQ0EsSUFBSTlCLFFBQVE7Z0JBQ1YwQixlQUFlLENBQUMsU0FBUyxFQUFFMUIsT0FBTytCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDakQsT0FBTyxJQUFJaEMsWUFBWTtnQkFDckIsSUFBSSxDQUFDYixJQUFJeUMsWUFBWTtnQkFDckJELGVBQWUsQ0FBQyxDQUFDLEVBQUUzQixXQUFXZ0MsSUFBSSxDQUFDLE9BQU8sRUFBRTdDLEtBQUssQ0FBQyxDQUFDLEVBQUVBLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNsRTtZQUVBLElBQUl3QyxjQUFjO2dCQUNoQixNQUFNTSxPQUFPeEI7Z0JBRWIsTUFBTXlCLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVuQixVQUFVLEVBQUVELElBQUksRUFBRVksYUFBYSxDQUFDLEVBQUVTLFdBQUUsQ0FBQ0MsU0FBUyxDQUFDUixRQUFRLENBQUMsRUFBRTtvQkFDbkZTLE1BQU1DLEtBQUtGLFNBQVMsQ0FBQzt3QkFDbkIsR0FBR0osSUFBSTt3QkFDUFQsU0FBUztvQkFDWDtvQkFDQWdCLGFBQWE7b0JBQ2JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsUUFBUTtnQkFDVjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1ULElBQUlTLElBQUk7Z0JBQzNCLE1BQU1DLFNBQVNDLFFBQVFGLE1BQU0sQ0FBQ2YsVUFBVSxFQUFFa0I7Z0JBQzFDeEMsd0JBQXdCc0M7WUFDMUIsT0FBTztnQkFDTHRDLHdCQUF3QjtZQUMxQjtRQUNGO1FBRUEsS0FBS29CO0lBQ1AsR0FBRztRQUFDWDtRQUFLakI7UUFBTUU7UUFBWVM7UUFBU1I7UUFBUWQ7UUFBSTZCO0tBQVU7SUFFMUQscUJBQ0UsNkJBQUMrQiw4QkFBcUI7UUFDcEJsRCxpQkFBaUJBO1FBQ2pCbUQsa0JBQWtCOUQ7UUFDbEIrRCxnQkFBZ0I7WUFDZDlELElBQUk7WUFDSitELGVBQWVoRTtZQUNmRSxZQUFZaUI7WUFDWmhCLFVBQVUsQ0FBQ0Q7WUFDWEUsT0FBTzRCLEVBQUU7WUFDVDNCO1FBQ0Y7O0FBR04ifQ==