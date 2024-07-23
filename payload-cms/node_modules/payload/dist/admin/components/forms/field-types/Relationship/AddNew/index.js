"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddNewRelation", {
    enumerable: true,
    get: function() {
        return AddNewRelation;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../../utilities/getTranslation");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Button"));
const _DocumentDrawer = require("../../../../elements/DocumentDrawer");
const _Popup = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Popup"));
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../../../../elements/Popup/PopupButtonList"));
const _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Tooltip"));
const _Plus = /*#__PURE__*/ _interop_require_default(require("../../../../icons/Plus"));
const _Auth = require("../../../../utilities/Auth");
const _Config = require("../../../../utilities/Config");
require("./index.scss");
const _useRelatedCollections = require("./useRelatedCollections");
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
const baseClass = 'relationship-add-new';
const AddNewRelation = ({ dispatchOptions, hasMany, path, relationTo, setValue, value })=>{
    const relatedCollections = (0, _useRelatedCollections.useRelatedCollections)(relationTo);
    const { permissions } = (0, _Auth.useAuth)();
    const [show, setShow] = (0, _react.useState)(false);
    const [selectedCollection, setSelectedCollection] = (0, _react.useState)();
    const relatedToMany = relatedCollections.length > 1;
    const [collectionConfig, setCollectionConfig] = (0, _react.useState)(()=>!relatedToMany ? relatedCollections[0] : undefined);
    const [popupOpen, setPopupOpen] = (0, _react.useState)(false);
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    const [showTooltip, setShowTooltip] = (0, _react.useState)(false);
    const config = (0, _Config.useConfig)();
    const [DocumentDrawer, DocumentDrawerToggler, { isDrawerOpen, toggleDrawer }] = (0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: collectionConfig?.slug
    });
    const onSave = (0, _react.useCallback)(({ doc, operation })=>{
        if (operation === 'create') {
            const newValue = Array.isArray(relationTo) ? {
                relationTo: collectionConfig.slug,
                value: doc.id
            } : doc.id;
            // ensure the value is not already in the array
            const isNewValue = Array.isArray(relationTo) && Array.isArray(value) ? !value.some((v)=>v && typeof v === 'object' && v.value === doc.id) : value !== doc.id;
            if (isNewValue) {
                dispatchOptions({
                    collection: collectionConfig,
                    config,
                    docs: [
                        doc
                    ],
                    i18n,
                    sort: true,
                    type: 'ADD'
                });
                if (hasMany) {
                    setValue([
                        ...Array.isArray(value) ? value : [],
                        newValue
                    ]);
                } else {
                    setValue(newValue);
                }
            }
            setSelectedCollection(undefined);
        }
    }, [
        relationTo,
        collectionConfig,
        dispatchOptions,
        i18n,
        hasMany,
        setValue,
        value,
        config
    ]);
    const onPopupToggle = (0, _react.useCallback)((state)=>{
        setPopupOpen(state);
    }, []);
    (0, _react.useEffect)(()=>{
        if (permissions) {
            if (relatedCollections.length === 1) {
                setShow(permissions.collections[relatedCollections[0].slug].create.permission);
            } else {
                setShow(relatedCollections.some((collection)=>permissions.collections[collection.slug].create.permission));
            }
        }
    }, [
        permissions,
        relatedCollections
    ]);
    (0, _react.useEffect)(()=>{
        if (relatedToMany && selectedCollection) {
            setCollectionConfig(relatedCollections.find((collection)=>collection.slug === selectedCollection));
        }
    }, [
        selectedCollection,
        relatedToMany,
        relatedCollections
    ]);
    (0, _react.useEffect)(()=>{
        if (relatedToMany && collectionConfig) {
            // the drawer must be rendered on the page before before opening it
            // this is why 'selectedCollection' is different from 'collectionConfig'
            toggleDrawer();
            setSelectedCollection(undefined);
        }
    }, [
        toggleDrawer,
        relatedToMany,
        collectionConfig
    ]);
    (0, _react.useEffect)(()=>{
        if (relatedToMany && !isDrawerOpen) {
            setCollectionConfig(undefined);
        }
    }, [
        isDrawerOpen,
        relatedToMany
    ]);
    if (show) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: baseClass,
            id: `${path}-add-new`
        }, relatedCollections.length === 1 && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
            className: `${baseClass}__add-button`,
            onClick: ()=>setShowTooltip(false),
            onMouseEnter: ()=>setShowTooltip(true),
            onMouseLeave: ()=>setShowTooltip(false)
        }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            className: `${baseClass}__tooltip`,
            show: showTooltip
        }, t('addNewLabel', {
            label: (0, _getTranslation.getTranslation)(relatedCollections[0].labels.singular, i18n)
        })), /*#__PURE__*/ _react.default.createElement(_Plus.default, null)), /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
            onSave: onSave
        })), relatedCollections.length > 1 && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Popup.default, {
            button: /*#__PURE__*/ _react.default.createElement(_Button.default, {
                buttonStyle: "none",
                className: `${baseClass}__add-button`,
                tooltip: popupOpen ? undefined : t('addNew')
            }, /*#__PURE__*/ _react.default.createElement(_Plus.default, null)),
            buttonType: "custom",
            horizontalAlign: "center",
            onToggleOpen: onPopupToggle,
            render: ({ close: closePopup })=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, null, relatedCollections.map((relatedCollection)=>{
                    if (permissions.collections[relatedCollection.slug].create.permission) {
                        return /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                            className: `${baseClass}__relation-button--${relatedCollection.slug}`,
                            key: relatedCollection.slug,
                            onClick: ()=>{
                                closePopup();
                                setSelectedCollection(relatedCollection.slug);
                            }
                        }, (0, _getTranslation.getTranslation)(relatedCollection.labels.singular, i18n));
                    }
                    return null;
                })),
            size: "medium"
        }), collectionConfig && permissions.collections[collectionConfig.slug].create.permission && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
            onSave: onSave
        })));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBFZGl0Vmlld1Byb3BzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdmlld3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFZhbHVlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbidcbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvRG9jdW1lbnREcmF3ZXInXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvUG9wdXAnXG5pbXBvcnQgKiBhcyBQb3B1cExpc3QgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvUG9wdXAvUG9wdXBCdXR0b25MaXN0J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvVG9vbHRpcCdcbmltcG9ydCBQbHVzIGZyb20gJy4uLy4uLy4uLy4uL2ljb25zL1BsdXMnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgeyB1c2VSZWxhdGVkQ29sbGVjdGlvbnMgfSBmcm9tICcuL3VzZVJlbGF0ZWRDb2xsZWN0aW9ucydcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbGF0aW9uc2hpcC1hZGQtbmV3J1xuXG5leHBvcnQgY29uc3QgQWRkTmV3UmVsYXRpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGRpc3BhdGNoT3B0aW9ucyxcbiAgaGFzTWFueSxcbiAgcGF0aCxcbiAgcmVsYXRpb25UbyxcbiAgc2V0VmFsdWUsXG4gIHZhbHVlLFxufSkgPT4ge1xuICBjb25zdCByZWxhdGVkQ29sbGVjdGlvbnMgPSB1c2VSZWxhdGVkQ29sbGVjdGlvbnMocmVsYXRpb25UbylcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uLCBzZXRTZWxlY3RlZENvbGxlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpXG4gIGNvbnN0IHJlbGF0ZWRUb01hbnkgPSByZWxhdGVkQ29sbGVjdGlvbnMubGVuZ3RoID4gMVxuICBjb25zdCBbY29sbGVjdGlvbkNvbmZpZywgc2V0Q29sbGVjdGlvbkNvbmZpZ10gPSB1c2VTdGF0ZTxTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnPigoKSA9PlxuICAgICFyZWxhdGVkVG9NYW55ID8gcmVsYXRlZENvbGxlY3Rpb25zWzBdIDogdW5kZWZpbmVkLFxuICApXG4gIGNvbnN0IFtwb3B1cE9wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJylcbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcblxuICBjb25zdCBbRG9jdW1lbnREcmF3ZXIsIERvY3VtZW50RHJhd2VyVG9nZ2xlciwgeyBpc0RyYXdlck9wZW4sIHRvZ2dsZURyYXdlciB9XSA9IHVzZURvY3VtZW50RHJhd2VyKFxuICAgIHtcbiAgICAgIGNvbGxlY3Rpb25TbHVnOiBjb2xsZWN0aW9uQ29uZmlnPy5zbHVnLFxuICAgIH0sXG4gIClcblxuICBjb25zdCBvblNhdmU6IEVkaXRWaWV3UHJvcHNbJ29uU2F2ZSddID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgZG9jLCBvcGVyYXRpb24gfSkgPT4ge1xuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWU6IFZhbHVlID0gQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICByZWxhdGlvblRvOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICAgICAgICAgIHZhbHVlOiBkb2MuaWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBkb2MuaWRcblxuICAgICAgICAvLyBlbnN1cmUgdGhlIHZhbHVlIGlzIG5vdCBhbHJlYWR5IGluIHRoZSBhcnJheVxuICAgICAgICBjb25zdCBpc05ld1ZhbHVlID1cbiAgICAgICAgICBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pICYmIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICA/ICF2YWx1ZS5zb21lKCh2KSA9PiB2ICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2LnZhbHVlID09PSBkb2MuaWQpXG4gICAgICAgICAgICA6IHZhbHVlICE9PSBkb2MuaWRcblxuICAgICAgICBpZiAoaXNOZXdWYWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoT3B0aW9ucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgZG9jczogW2RvY10sXG4gICAgICAgICAgICBpMThuLFxuICAgICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdBREQnLFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAoaGFzTWFueSkge1xuICAgICAgICAgICAgc2V0VmFsdWUoWy4uLihBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW10pLCBuZXdWYWx1ZV0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNlbGVjdGVkQ29sbGVjdGlvbih1bmRlZmluZWQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVsYXRpb25UbywgY29sbGVjdGlvbkNvbmZpZywgZGlzcGF0Y2hPcHRpb25zLCBpMThuLCBoYXNNYW55LCBzZXRWYWx1ZSwgdmFsdWUsIGNvbmZpZ10sXG4gIClcblxuICBjb25zdCBvblBvcHVwVG9nZ2xlID0gdXNlQ2FsbGJhY2soKHN0YXRlKSA9PiB7XG4gICAgc2V0UG9wdXBPcGVuKHN0YXRlKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwZXJtaXNzaW9ucykge1xuICAgICAgaWYgKHJlbGF0ZWRDb2xsZWN0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2V0U2hvdyhwZXJtaXNzaW9ucy5jb2xsZWN0aW9uc1tyZWxhdGVkQ29sbGVjdGlvbnNbMF0uc2x1Z10uY3JlYXRlLnBlcm1pc3Npb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTaG93KFxuICAgICAgICAgIHJlbGF0ZWRDb2xsZWN0aW9ucy5zb21lKFxuICAgICAgICAgICAgKGNvbGxlY3Rpb24pID0+IHBlcm1pc3Npb25zLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb24uc2x1Z10uY3JlYXRlLnBlcm1pc3Npb24sXG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Blcm1pc3Npb25zLCByZWxhdGVkQ29sbGVjdGlvbnNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlbGF0ZWRUb01hbnkgJiYgc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG4gICAgICBzZXRDb2xsZWN0aW9uQ29uZmlnKFxuICAgICAgICByZWxhdGVkQ29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBzZWxlY3RlZENvbGxlY3Rpb24pLFxuICAgICAgKVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkQ29sbGVjdGlvbiwgcmVsYXRlZFRvTWFueSwgcmVsYXRlZENvbGxlY3Rpb25zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWxhdGVkVG9NYW55ICYmIGNvbGxlY3Rpb25Db25maWcpIHtcbiAgICAgIC8vIHRoZSBkcmF3ZXIgbXVzdCBiZSByZW5kZXJlZCBvbiB0aGUgcGFnZSBiZWZvcmUgYmVmb3JlIG9wZW5pbmcgaXRcbiAgICAgIC8vIHRoaXMgaXMgd2h5ICdzZWxlY3RlZENvbGxlY3Rpb24nIGlzIGRpZmZlcmVudCBmcm9tICdjb2xsZWN0aW9uQ29uZmlnJ1xuICAgICAgdG9nZ2xlRHJhd2VyKClcbiAgICAgIHNldFNlbGVjdGVkQ29sbGVjdGlvbih1bmRlZmluZWQpXG4gICAgfVxuICB9LCBbdG9nZ2xlRHJhd2VyLCByZWxhdGVkVG9NYW55LCBjb2xsZWN0aW9uQ29uZmlnXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWxhdGVkVG9NYW55ICYmICFpc0RyYXdlck9wZW4pIHtcbiAgICAgIHNldENvbGxlY3Rpb25Db25maWcodW5kZWZpbmVkKVxuICAgIH1cbiAgfSwgW2lzRHJhd2VyT3BlbiwgcmVsYXRlZFRvTWFueV0pXG5cbiAgaWYgKHNob3cpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30gaWQ9e2Ake3BhdGh9LWFkZC1uZXdgfT5cbiAgICAgICAge3JlbGF0ZWRDb2xsZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hZGQtYnV0dG9uYH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoZmFsc2UpfVxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dUb29sdGlwKHRydWUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b29sdGlwYH0gc2hvdz17c2hvd1Rvb2x0aXB9PlxuICAgICAgICAgICAgICAgIHt0KCdhZGROZXdMYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZWxhdGVkQ29sbGVjdGlvbnNbMF0ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICAgICAgPC9Eb2N1bWVudERyYXdlclRvZ2dsZXI+XG4gICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXIgb25TYXZlPXtvblNhdmV9IC8+XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAge3JlbGF0ZWRDb2xsZWN0aW9ucy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgICAgYnV0dG9uPXtcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hZGQtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3BvcHVwT3BlbiA/IHVuZGVmaW5lZCA6IHQoJ2FkZE5ldycpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cImN1c3RvbVwiXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIG9uVG9nZ2xlT3Blbj17b25Qb3B1cFRvZ2dsZX1cbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBjbG9zZTogY2xvc2VQb3B1cCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHtyZWxhdGVkQ29sbGVjdGlvbnMubWFwKChyZWxhdGVkQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbnMuY29sbGVjdGlvbnNbcmVsYXRlZENvbGxlY3Rpb24uc2x1Z10uY3JlYXRlLnBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZWxhdGlvbi1idXR0b24tLSR7cmVsYXRlZENvbGxlY3Rpb24uc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlbGF0ZWRDb2xsZWN0aW9uLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENvbGxlY3Rpb24ocmVsYXRlZENvbGxlY3Rpb24uc2x1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRyYW5zbGF0aW9uKHJlbGF0ZWRDb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvUG9wdXBMaXN0LkJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7Y29sbGVjdGlvbkNvbmZpZyAmJlxuICAgICAgICAgICAgICBwZXJtaXNzaW9ucy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uQ29uZmlnLnNsdWddLmNyZWF0ZS5wZXJtaXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXIgb25TYXZlPXtvblNhdmV9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIl0sIm5hbWVzIjpbIkFkZE5ld1JlbGF0aW9uIiwiYmFzZUNsYXNzIiwiZGlzcGF0Y2hPcHRpb25zIiwiaGFzTWFueSIsInBhdGgiLCJyZWxhdGlvblRvIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInJlbGF0ZWRDb2xsZWN0aW9ucyIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsInBlcm1pc3Npb25zIiwidXNlQXV0aCIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJzZXRTZWxlY3RlZENvbGxlY3Rpb24iLCJyZWxhdGVkVG9NYW55IiwibGVuZ3RoIiwiY29sbGVjdGlvbkNvbmZpZyIsInNldENvbGxlY3Rpb25Db25maWciLCJ1bmRlZmluZWQiLCJwb3B1cE9wZW4iLCJzZXRQb3B1cE9wZW4iLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsImNvbmZpZyIsInVzZUNvbmZpZyIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiaXNEcmF3ZXJPcGVuIiwidG9nZ2xlRHJhd2VyIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsInNsdWciLCJvblNhdmUiLCJ1c2VDYWxsYmFjayIsImRvYyIsIm9wZXJhdGlvbiIsIm5ld1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaWQiLCJpc05ld1ZhbHVlIiwic29tZSIsInYiLCJjb2xsZWN0aW9uIiwiZG9jcyIsInNvcnQiLCJ0eXBlIiwib25Qb3B1cFRvZ2dsZSIsInN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbnMiLCJjcmVhdGUiLCJwZXJtaXNzaW9uIiwiZmluZCIsImRpdiIsImNsYXNzTmFtZSIsIkZyYWdtZW50Iiwib25DbGljayIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIlRvb2x0aXAiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwic2luZ3VsYXIiLCJQbHVzIiwiUG9wdXAiLCJidXR0b24iLCJCdXR0b24iLCJidXR0b25TdHlsZSIsInRvb2x0aXAiLCJidXR0b25UeXBlIiwiaG9yaXpvbnRhbEFsaWduIiwib25Ub2dnbGVPcGVuIiwicmVuZGVyIiwiY2xvc2UiLCJjbG9zZVBvcHVwIiwiUG9wdXBMaXN0IiwiQnV0dG9uR3JvdXAiLCJtYXAiLCJyZWxhdGVkQ29sbGVjdGlvbiIsImtleSIsInNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBc0JhQTs7O2VBQUFBOzs7K0RBdEJxRDs4QkFDbkM7Z0NBT0E7K0RBQ1o7Z0NBQ2U7OERBQ2hCO3lFQUNTO2dFQUNQOzZEQUNIO3NCQUNPO3dCQUNFO1FBQ25CO3VDQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELGlCQUFrQyxDQUFDLEVBQzlDRSxlQUFlLEVBQ2ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsS0FBSyxFQUNOO0lBQ0MsTUFBTUMscUJBQXFCQyxJQUFBQSw0Q0FBcUIsRUFBQ0o7SUFDakQsTUFBTSxFQUFFSyxXQUFXLEVBQUUsR0FBR0MsSUFBQUEsYUFBTztJQUMvQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0MsSUFBQUEsZUFBUSxFQUFDO0lBQ2pDLE1BQU0sQ0FBQ0Msb0JBQW9CQyxzQkFBc0IsR0FBR0YsSUFBQUEsZUFBUTtJQUM1RCxNQUFNRyxnQkFBZ0JULG1CQUFtQlUsTUFBTSxHQUFHO0lBQ2xELE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0Is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