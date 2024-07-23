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
    ListDrawer: function() {
        return ListDrawer;
    },
    ListDrawerToggler: function() {
        return ListDrawerToggler;
    },
    baseClass: function() {
        return baseClass;
    },
    formatListDrawerSlug: function() {
        return formatListDrawerSlug;
    },
    useListDrawer: function() {
        return useListDrawer;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _Config = require("../../utilities/Config");
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
const baseClass = 'list-drawer';
const formatListDrawerSlug = ({ depth, uuid })=>`list-drawer_${depth}_${uuid}`;
const ListDrawerToggler = ({ children, className, disabled, drawerSlug, ...rest })=>{
    return /*#__PURE__*/ _react.default.createElement(_Drawer.DrawerToggler, {
        className: [
            className,
            `${baseClass}__toggler`
        ].filter(Boolean).join(' '),
        disabled: disabled,
        slug: drawerSlug,
        ...rest
    }, children);
};
const ListDrawer = (props)=>{
    const { drawerSlug } = props;
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        className: baseClass,
        gutter: false,
        header: false,
        slug: drawerSlug
    }, /*#__PURE__*/ _react.default.createElement(_DrawerContent.ListDrawerContent, props));
};
const useListDrawer = ({ collectionSlugs: collectionSlugsFromProps, filterOptions, selectedCollection, uploads })=>{
    const { collections } = (0, _Config.useConfig)();
    const drawerDepth = (0, _EditDepth.useEditDepth)();
    const uuid = (0, _react.useId)();
    const { closeModal, modalState, openModal, toggleModal } = (0, _modal.useModal)();
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const [collectionSlugs, setCollectionSlugs] = (0, _react.useState)(collectionSlugsFromProps);
    const drawerSlug = formatListDrawerSlug({
        depth: drawerDepth,
        uuid
    });
    (0, _react.useEffect)(()=>{
        setIsOpen(Boolean(modalState[drawerSlug]?.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    (0, _react.useEffect)(()=>{
        if (!collectionSlugs || collectionSlugs.length === 0) {
            const filteredCollectionSlugs = collections.filter(({ upload })=>{
                if (uploads) {
                    return Boolean(upload) === true;
                }
                return true;
            });
            setCollectionSlugs(filteredCollectionSlugs.map(({ slug })=>slug));
        }
    }, [
        collectionSlugs,
        uploads,
        collections
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
        drawerSlug,
        closeModal
    ]);
    const openDrawer = (0, _react.useCallback)(()=>{
        openModal(drawerSlug);
    }, [
        drawerSlug,
        openModal
    ]);
    const MemoizedDrawer = (0, _react.useMemo)(()=>{
        return (props)=>/*#__PURE__*/ _react.default.createElement(ListDrawer, {
                ...props,
                closeDrawer: closeDrawer,
                collectionSlugs: collectionSlugs,
                drawerSlug: drawerSlug,
                filterOptions: filterOptions,
                key: drawerSlug,
                selectedCollection: selectedCollection,
                uploads: uploads
            });
    }, [
        drawerSlug,
        collectionSlugs,
        uploads,
        closeDrawer,
        selectedCollection,
        filterOptions
    ]);
    const MemoizedDrawerToggler = (0, _react.useMemo)(()=>{
        return (props)=>/*#__PURE__*/ _react.default.createElement(ListDrawerToggler, {
                ...props,
                drawerSlug: drawerSlug
            });
    }, [
        drawerSlug
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3REcmF3ZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZUlkLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IExpc3REcmF3ZXJQcm9wcywgTGlzdFRvZ2dsZXJQcm9wcywgVXNlTGlzdERyYXdlciB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJ1xuaW1wb3J0IHsgRHJhd2VyLCBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vRHJhd2VyJ1xuaW1wb3J0IHsgTGlzdERyYXdlckNvbnRlbnQgfSBmcm9tICcuL0RyYXdlckNvbnRlbnQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuZXhwb3J0IGNvbnN0IGJhc2VDbGFzcyA9ICdsaXN0LWRyYXdlcidcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpc3REcmF3ZXJTbHVnID0gKHtcbiAgZGVwdGgsXG4gIHV1aWQsXG59OiB7XG4gIGRlcHRoOiBudW1iZXJcbiAgdXVpZDogc3RyaW5nIC8vIHN1cHBseSB3aGVuIGNyZWF0aW5nIGEgbmV3IGRvY3VtZW50IGFuZCBubyBpZCBpcyBhdmFpbGFibGVcbn0pID0+IGBsaXN0LWRyYXdlcl8ke2RlcHRofV8ke3V1aWR9YFxuXG5leHBvcnQgY29uc3QgTGlzdERyYXdlclRvZ2dsZXI6IFJlYWN0LkZDPExpc3RUb2dnbGVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGRyYXdlclNsdWcsXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyVG9nZ2xlclxuICAgICAgY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCBgJHtiYXNlQ2xhc3N9X190b2dnbGVyYF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJUb2dnbGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBMaXN0RHJhd2VyOiBSZWFjdC5GQzxMaXN0RHJhd2VyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZHJhd2VyU2x1ZyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXIgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9IGd1dHRlcj17ZmFsc2V9IGhlYWRlcj17ZmFsc2V9IHNsdWc9e2RyYXdlclNsdWd9PlxuICAgICAgPExpc3REcmF3ZXJDb250ZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0RyYXdlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlTGlzdERyYXdlcjogVXNlTGlzdERyYXdlciA9ICh7XG4gIGNvbGxlY3Rpb25TbHVnczogY29sbGVjdGlvblNsdWdzRnJvbVByb3BzLFxuICBmaWx0ZXJPcHRpb25zLFxuICBzZWxlY3RlZENvbGxlY3Rpb24sXG4gIHVwbG9hZHMsXG59KSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbnMgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IGRyYXdlckRlcHRoID0gdXNlRWRpdERlcHRoKClcbiAgY29uc3QgdXVpZCA9IHVzZUlkKClcbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBtb2RhbFN0YXRlLCBvcGVuTW9kYWwsIHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NvbGxlY3Rpb25TbHVncywgc2V0Q29sbGVjdGlvblNsdWdzXSA9IHVzZVN0YXRlKGNvbGxlY3Rpb25TbHVnc0Zyb21Qcm9wcylcblxuICBjb25zdCBkcmF3ZXJTbHVnID0gZm9ybWF0TGlzdERyYXdlclNsdWcoe1xuICAgIGRlcHRoOiBkcmF3ZXJEZXB0aCxcbiAgICB1dWlkLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKEJvb2xlYW4obW9kYWxTdGF0ZVtkcmF3ZXJTbHVnXT8uaXNPcGVuKSlcbiAgfSwgW21vZGFsU3RhdGUsIGRyYXdlclNsdWddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFjb2xsZWN0aW9uU2x1Z3MgfHwgY29sbGVjdGlvblNsdWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZmlsdGVyZWRDb2xsZWN0aW9uU2x1Z3MgPSBjb2xsZWN0aW9ucy5maWx0ZXIoKHsgdXBsb2FkIH0pID0+IHtcbiAgICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbih1cGxvYWQpID09PSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIHNldENvbGxlY3Rpb25TbHVncyhmaWx0ZXJlZENvbGxlY3Rpb25TbHVncy5tYXAoKHsgc2x1ZyB9KSA9PiBzbHVnKSlcbiAgICB9XG4gIH0sIFtjb2xsZWN0aW9uU2x1Z3MsIHVwbG9hZHMsIGNvbGxlY3Rpb25zXSlcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvZ2dsZU1vZGFsKGRyYXdlclNsdWcpXG4gIH0sIFt0b2dnbGVNb2RhbCwgZHJhd2VyU2x1Z10pXG5cbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKVxuICB9LCBbZHJhd2VyU2x1ZywgY2xvc2VNb2RhbF0pXG5cbiAgY29uc3Qgb3BlbkRyYXdlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvcGVuTW9kYWwoZHJhd2VyU2x1ZylcbiAgfSwgW2RyYXdlclNsdWcsIG9wZW5Nb2RhbF0pXG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKHByb3BzKSA9PiAoXG4gICAgICA8TGlzdERyYXdlclxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNsb3NlRHJhd2VyPXtjbG9zZURyYXdlcn1cbiAgICAgICAgY29sbGVjdGlvblNsdWdzPXtjb2xsZWN0aW9uU2x1Z3N9XG4gICAgICAgIGRyYXdlclNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgIGZpbHRlck9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAgIGtleT17ZHJhd2VyU2x1Z31cbiAgICAgICAgc2VsZWN0ZWRDb2xsZWN0aW9uPXtzZWxlY3RlZENvbGxlY3Rpb259XG4gICAgICAgIHVwbG9hZHM9e3VwbG9hZHN9XG4gICAgICAvPlxuICAgIClcbiAgfSwgW2RyYXdlclNsdWcsIGNvbGxlY3Rpb25TbHVncywgdXBsb2FkcywgY2xvc2VEcmF3ZXIsIHNlbGVjdGVkQ29sbGVjdGlvbiwgZmlsdGVyT3B0aW9uc10pXG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIChwcm9wcykgPT4gPExpc3REcmF3ZXJUb2dnbGVyIHsuLi5wcm9wc30gZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z30gLz5cbiAgfSwgW2RyYXdlclNsdWddKVxuXG4gIGNvbnN0IE1lbW9pemVkRHJhd2VyU3RhdGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBjbG9zZURyYXdlcixcbiAgICAgIGRyYXdlckRlcHRoLFxuICAgICAgZHJhd2VyU2x1ZyxcbiAgICAgIGlzRHJhd2VyT3BlbjogaXNPcGVuLFxuICAgICAgb3BlbkRyYXdlcixcbiAgICAgIHRvZ2dsZURyYXdlcixcbiAgICB9KSxcbiAgICBbZHJhd2VyRGVwdGgsIGRyYXdlclNsdWcsIGlzT3BlbiwgdG9nZ2xlRHJhd2VyLCBjbG9zZURyYXdlciwgb3BlbkRyYXdlcl0sXG4gIClcblxuICByZXR1cm4gW01lbW9pemVkRHJhd2VyLCBNZW1vaXplZERyYXdlclRvZ2dsZXIsIE1lbW9pemVkRHJhd2VyU3RhdGVdXG59XG4iXSwibmFtZXMiOlsiTGlzdERyYXdlciIsIkxpc3REcmF3ZXJUb2dnbGVyIiwiYmFzZUNsYXNzIiwiZm9ybWF0TGlzdERyYXdlclNsdWciLCJ1c2VMaXN0RHJhd2VyIiwiZGVwdGgiLCJ1dWlkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImRyYXdlclNsdWciLCJyZXN0IiwiRHJhd2VyVG9nZ2xlciIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwic2x1ZyIsInByb3BzIiwiRHJhd2VyIiwiZ3V0dGVyIiwiaGVhZGVyIiwiTGlzdERyYXdlckNvbnRlbnQiLCJjb2xsZWN0aW9uU2x1Z3MiLCJjb2xsZWN0aW9uU2x1Z3NGcm9tUHJvcHMiLCJmaWx0ZXJPcHRpb25zIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwidXBsb2FkcyIsImNvbGxlY3Rpb25zIiwidXNlQ29uZmlnIiwiZHJhd2VyRGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJ1c2VJZCIsImNsb3NlTW9kYWwiLCJtb2RhbFN0YXRlIiwib3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJ1c2VNb2RhbCIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwic2V0Q29sbGVjdGlvblNsdWdzIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZmlsdGVyZWRDb2xsZWN0aW9uU2x1Z3MiLCJ1cGxvYWQiLCJtYXAiLCJ0b2dnbGVEcmF3ZXIiLCJ1c2VDYWxsYmFjayIsImNsb3NlRHJhd2VyIiwib3BlbkRyYXdlciIsIk1lbW9pemVkRHJhd2VyIiwidXNlTWVtbyIsImtleSIsIk1lbW9pemVkRHJhd2VyVG9nZ2xlciIsIk1lbW9pemVkRHJhd2VyU3RhdGUiLCJpc0RyYXdlck9wZW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBd0NhQSxVQUFVO2VBQVZBOztJQW5CQUMsaUJBQWlCO2VBQWpCQTs7SUFWQUMsU0FBUztlQUFUQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFxQ0FDLGFBQWE7ZUFBYkE7Ozt1QkFsRFk7K0RBQytDO3dCQUk5QzsyQkFDRzt3QkFDUzsrQkFDSjtRQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUYsWUFBWTtBQUVsQixNQUFNQyx1QkFBdUIsQ0FBQyxFQUNuQ0UsS0FBSyxFQUNMQyxJQUFJLEVBSUwsR0FBSyxDQUFDLFlBQVksRUFBRUQsTUFBTSxDQUFDLEVBQUVDLEtBQUssQ0FBQztBQUU3QixNQUFNTCxvQkFBZ0QsQ0FBQyxFQUM1RE0sUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsVUFBVSxFQUNWLEdBQUdDLE1BQ0o7SUFDQyxxQkFDRSw2QkFBQ0MscUJBQWE7UUFDWkosV0FBVztZQUFDQTtZQUFXLENBQUMsRUFBRU4sVUFBVSxTQUFTLENBQUM7U0FBQyxDQUFDVyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUNyRU4sVUFBVUE7UUFDVk8sTUFBTU47UUFDTCxHQUFHQyxJQUFJO09BRVBKO0FBR1A7QUFFTyxNQUFNUCxhQUF3QyxDQUFDaUI7SUFDcEQsTUFBTSxFQUFFUCxVQUFVLEVBQUUsR0FBR087SUFFdkIscUJB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