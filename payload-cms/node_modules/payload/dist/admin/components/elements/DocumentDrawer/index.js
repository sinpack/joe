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
    DocumentDrawer: function() {
        return DocumentDrawer;
    },
    DocumentDrawerToggler: function() {
        return DocumentDrawerToggler;
    },
    baseClass: function() {
        return baseClass;
    },
    useDocumentDrawer: function() {
        return useDocumentDrawer;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../utilities/getTranslation");
const _useRelatedCollections = require("../../forms/field-types/Relationship/AddNew/useRelatedCollections");
const _EditDepth = require("../../utilities/EditDepth");
const _Drawer = require("../Drawer");
const _DrawerContent = require("./DrawerContent");
require("./index.scss");
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
const baseClass = 'doc-drawer';
const formatDocumentDrawerSlug = ({ id, collectionSlug, depth, uuid })=>`doc-drawer_${collectionSlug}_${depth}${id ? `_${id}` : ''}_${uuid}`;
const DocumentDrawerToggler = ({ id, children, className, collectionSlug, disabled, drawerSlug, ...rest })=>{
    const { i18n, t } = (0, _reacti18next.useTranslation)([
        'fields',
        'general'
    ]);
    const [collectionConfig] = (0, _useRelatedCollections.useRelatedCollections)(collectionSlug);
    return /*#__PURE__*/ _react.default.createElement(_Drawer.DrawerToggler, {
        "aria-label": t(!id ? 'fields:addNewLabel' : 'general:editLabel', {
            label: (0, _getTranslation.getTranslation)(collectionConfig.labels.singular, i18n)
        }),
        className: [
            className,
            `${baseClass}__toggler`
        ].filter(Boolean).join(' '),
        disabled: disabled,
        slug: drawerSlug,
        ...rest
    }, children);
};
const DocumentDrawer = (props)=>{
    const { drawerSlug } = props;
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        className: baseClass,
        gutter: false,
        header: false,
        slug: drawerSlug
    }, /*#__PURE__*/ _react.default.createElement(_DrawerContent.DocumentDrawerContent, props));
};
const useDocumentDrawer = ({ id, collectionSlug })=>{
    const drawerDepth = (0, _EditDepth.useEditDepth)();
    const uuid = (0, _react.useId)();
    const { closeModal, modalState, openModal, toggleModal } = (0, _modal.useModal)();
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const drawerSlug = formatDocumentDrawerSlug({
        id,
        collectionSlug,
        depth: drawerDepth,
        uuid
    });
    (0, _react.useEffect)(()=>{
        setIsOpen(Boolean(modalState[drawerSlug]?.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    const toggleDrawer = (0, _react.useCallback)(()=>{
        toggleModal(drawerSlug);
    }, [
        toggleModal,
        drawerSlug
    ]);
    const closeDrawer = (0, _react.useCallback)(()=>{
        closeModal(drawerSlug);
    }, [
        closeModal,
        drawerSlug
    ]);
    const openDrawer = (0, _react.useCallback)(()=>{
        openModal(drawerSlug);
    }, [
        openModal,
        drawerSlug
    ]);
    const MemoizedDrawer = (0, _react.useMemo)(()=>{
        return (props)=>/*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
                ...props,
                collectionSlug: collectionSlug,
                drawerSlug: drawerSlug,
                id: id,
                key: drawerSlug
            });
    }, [
        id,
        drawerSlug,
        collectionSlug
    ]);
    const MemoizedDrawerToggler = (0, _react.useMemo)(()=>{
        return (props)=>/*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
                ...props,
                collectionSlug: collectionSlug,
                drawerSlug: drawerSlug,
                id: id
            });
    }, [
        id,
        drawerSlug,
        collectionSlug
    ]);
    const MemoizedDrawerState = (0, _react.useMemo)(()=>({
            closeDrawer,
            drawerDepth,
            drawerSlug,
            isDrawerOpen: isOpen,
            openDrawer,
            toggleDrawer
        }), [
        drawerDepth,
        drawerSlug,
        isOpen,
        toggleDrawer,
        closeDrawer,
        openDrawer
    ]);
    return [
        MemoizedDrawer,
        MemoizedDrawerToggler,
        MemoizedDrawerState
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCdcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VJZCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudERyYXdlclByb3BzLCBEb2N1bWVudFRvZ2dsZXJQcm9wcywgVXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zJ1xuaW1wb3J0IHsgdXNlRWRpdERlcHRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCdcbmltcG9ydCB7IERyYXdlciwgRHJhd2VyVG9nZ2xlciB9IGZyb20gJy4uL0RyYXdlcidcbmltcG9ydCB7IERvY3VtZW50RHJhd2VyQ29udGVudCB9IGZyb20gJy4vRHJhd2VyQ29udGVudCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5leHBvcnQgY29uc3QgYmFzZUNsYXNzID0gJ2RvYy1kcmF3ZXInXG5cbmNvbnN0IGZvcm1hdERvY3VtZW50RHJhd2VyU2x1ZyA9ICh7XG4gIGlkLFxuICBjb2xsZWN0aW9uU2x1ZyxcbiAgZGVwdGgsXG4gIHV1aWQsXG59OiB7XG4gIGNvbGxlY3Rpb25TbHVnOiBzdHJpbmdcbiAgZGVwdGg6IG51bWJlclxuICBpZDogc3RyaW5nXG4gIHV1aWQ6IHN0cmluZyAvLyBzdXBwbHkgd2hlbiBjcmVhdGluZyBhIG5ldyBkb2N1bWVudCBhbmQgbm8gaWQgaXMgYXZhaWxhYmxlXG59KSA9PiBgZG9jLWRyYXdlcl8ke2NvbGxlY3Rpb25TbHVnfV8ke2RlcHRofSR7aWQgPyBgXyR7aWR9YCA6ICcnfV8ke3V1aWR9YFxuXG5leHBvcnQgY29uc3QgRG9jdW1lbnREcmF3ZXJUb2dnbGVyOiBSZWFjdC5GQzxEb2N1bWVudFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBpZCxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgY29sbGVjdGlvblNsdWcsXG4gIGRpc2FibGVkLFxuICBkcmF3ZXJTbHVnLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oWydmaWVsZHMnLCAnZ2VuZXJhbCddKVxuICBjb25zdCBbY29sbGVjdGlvbkNvbmZpZ10gPSB1c2VSZWxhdGVkQ29sbGVjdGlvbnMoY29sbGVjdGlvblNsdWcpXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyVG9nZ2xlclxuICAgICAgYXJpYS1sYWJlbD17dCghaWQgPyAnZmllbGRzOmFkZE5ld0xhYmVsJyA6ICdnZW5lcmFsOmVkaXRMYWJlbCcsIHtcbiAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb25Db25maWcubGFiZWxzLnNpbmd1bGFyLCBpMThuKSxcbiAgICAgIH0pfVxuICAgICAgY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCBgJHtiYXNlQ2xhc3N9X190b2dnbGVyYF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJUb2dnbGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudERyYXdlcjogUmVhY3QuRkM8RG9jdW1lbnREcmF3ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmF3ZXJTbHVnIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlciBjbGFzc05hbWU9e2Jhc2VDbGFzc30gZ3V0dGVyPXtmYWxzZX0gaGVhZGVyPXtmYWxzZX0gc2x1Zz17ZHJhd2VyU2x1Z30+XG4gICAgICA8RG9jdW1lbnREcmF3ZXJDb250ZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0RyYXdlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlRG9jdW1lbnREcmF3ZXI6IFVzZURvY3VtZW50RHJhd2VyID0gKHsgaWQsIGNvbGxlY3Rpb25TbHVnIH0pID0+IHtcbiAgY29uc3QgZHJhd2VyRGVwdGggPSB1c2VFZGl0RGVwdGgoKVxuICBjb25zdCB1dWlkID0gdXNlSWQoKVxuICBjb25zdCB7IGNsb3NlTW9kYWwsIG1vZGFsU3RhdGUsIG9wZW5Nb2RhbCwgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBkcmF3ZXJTbHVnID0gZm9ybWF0RG9jdW1lbnREcmF3ZXJTbHVnKHtcbiAgICBpZCxcbiAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkZXB0aDogZHJhd2VyRGVwdGgsXG4gICAgdXVpZCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihCb29sZWFuKG1vZGFsU3RhdGVbZHJhd2VyU2x1Z10/LmlzT3BlbikpXG4gIH0sIFttb2RhbFN0YXRlLCBkcmF3ZXJTbHVnXSlcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdG9nZ2xlTW9kYWwoZHJhd2VyU2x1ZylcbiAgfSwgW3RvZ2dsZU1vZGFsLCBkcmF3ZXJTbHVnXSlcblxuICBjb25zdCBjbG9zZURyYXdlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpXG4gIH0sIFtjbG9zZU1vZGFsLCBkcmF3ZXJTbHVnXSlcblxuICBjb25zdCBvcGVuRHJhd2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChkcmF3ZXJTbHVnKVxuICB9LCBbb3Blbk1vZGFsLCBkcmF3ZXJTbHVnXSlcblxuICBjb25zdCBNZW1vaXplZERyYXdlciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IChcbiAgICAgIDxEb2N1bWVudERyYXdlclxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBrZXk9e2RyYXdlclNsdWd9XG4gICAgICAvPlxuICAgIClcbiAgfSwgW2lkLCBkcmF3ZXJTbHVnLCBjb2xsZWN0aW9uU2x1Z10pXG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4gKFxuICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgLz5cbiAgICApXG4gIH0sIFtpZCwgZHJhd2VyU2x1ZywgY29sbGVjdGlvblNsdWddKVxuXG4gIGNvbnN0IE1lbW9pemVkRHJhd2VyU3RhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBjbG9zZURyYXdlcixcbiAgICAgIGRyYXdlckRlcHRoLFxuICAgICAgZHJhd2VyU2x1ZyxcbiAgICAgIGlzRHJhd2VyT3BlbjogaXNPcGVuLFxuICAgICAgb3BlbkRyYXdlcixcbiAgICAgIHRvZ2dsZURyYXdlcixcbiAgICB9KSxcbiAgICBbZHJhd2VyRGVwdGgsIGRyYXdlclNsdWcsIGlzT3BlbiwgdG9nZ2xlRHJhd2VyLCBjbG9zZURyYXdlciwgb3BlbkRyYXdlcl0sXG4gIClcblxuICByZXR1cm4gW01lbW9pemVkRHJhd2VyLCBNZW1vaXplZERyYXdlclRvZ2dsZXIsIE1lbW9pemVkRHJhd2VyU3RhdGVdXG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJiYXNlQ2xhc3MiLCJ1c2VEb2N1bWVudERyYXdlciIsImZvcm1hdERvY3VtZW50RHJhd2VyU2x1ZyIsImlkIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsInV1aWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZHJhd2VyU2x1ZyIsInJlc3QiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY29sbGVjdGlvbkNvbmZpZyIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsIkRyYXdlclRvZ2dsZXIiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzbHVnIiwicHJvcHMiLCJEcmF3ZXIiLCJndXR0ZXIiLCJoZWFkZXIiLCJEb2N1bWVudERyYXdlckNvbnRlbnQiLCJkcmF3ZXJEZXB0aCIsInVzZUVkaXREZXB0aCIsInVzZUlkIiwiY2xvc2VNb2RhbCIsIm1vZGFsU3RhdGUiLCJvcGVuTW9kYWwiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVEcmF3ZXIiLCJ1c2VDYWxsYmFjayIsImNsb3NlRHJhd2VyIiwib3BlbkRyYXdlciIsIk1lbW9pemVkRHJhd2VyIiwidXNlTWVtbyIsImtleSIsIk1lbW9pemVkRHJhd2VyVG9nZ2xlciIsIk1lbW9pemVkRHJhd2VyU3RhdGUiLCJpc0RyYXdlck9wZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFzRGFBLGNBQWM7ZUFBZEE7O0lBM0JBQyxxQkFBcUI7ZUFBckJBOztJQWRBQyxTQUFTO2VBQVRBOztJQW1EQUMsaUJBQWlCO2VBQWpCQTs7O3VCQWhFWTsrREFDK0M7OEJBQ3pDO2dDQUlBO3VDQUNPOzJCQUNUO3dCQUNTOytCQUNBO1FBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNRCxZQUFZO0FBRXpCLE1BQU1FLDJCQUEyQixDQUFDLEVBQ2hDQyxFQUFFLEVBQ0ZDLGNBQWMsRUFDZEMsS0FBSyxFQUNMQyxJQUFJLEVBTUwsR0FBSyxDQUFDLFdBQVcsRUFBRUYsZUFBZSxDQUFDLEVBQUVDLE1BQU0sRUFBRUYsS0FBSyxDQUFDLENBQUMsRUFBRUEsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUVHLEtBQUssQ0FBQztBQUVuRSxNQUFNUCx3QkFBd0QsQ0FBQyxFQUNwRUksRUFBRSxFQUNGSSxRQUFRLEVBQ1JDLFNBQVMsRUFDVEosY0FBYyxFQUNkSyxRQUFRLEVBQ1JDLFVBQVUsRUFDVixHQUFHQyxNQUNKO0lBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO1FBQUM7UUFBVTtLQUFVO0lBQ3hELE1BQU0sQ0FBQ0MsaUJBQWlCLEdBQUdDLElBQUFBLDRDQUFxQixFQUFDWjtJQUVqRCxxQkFDRSw2QkFBQ2EscUJBQWE7UUFD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