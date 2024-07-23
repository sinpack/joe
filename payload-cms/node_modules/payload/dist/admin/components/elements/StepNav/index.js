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
    StepNavProvider: function() {
        return StepNavProvider;
    },
    default: function() {
        return _default;
    },
    useStepNav: function() {
        return useStepNav;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _graphics = require("../../../../exports/components/graphics");
const _getTranslation = require("../../../../utilities/getTranslation");
const _Config = require("../../utilities/Config");
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
const baseClass = 'step-nav';
const Context = /*#__PURE__*/ (0, _react.createContext)({});
const StepNavProvider = ({ children })=>{
    const [stepNav, setStepNav] = (0, _react.useState)([]);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            setStepNav,
            stepNav
        }
    }, children);
};
const useStepNav = ()=>(0, _react.useContext)(Context);
const StepNav = (props)=>{
    const { className } = props;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { stepNav } = useStepNav();
    const config = (0, _Config.useConfig)();
    const { routes: { admin } } = config;
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, stepNav.length > 0 ? /*#__PURE__*/ _react.default.createElement("nav", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        className: `${baseClass}__home`,
        tabIndex: 0,
        to: admin
    }, /*#__PURE__*/ _react.default.createElement(_graphics.IconGraphic, null)), /*#__PURE__*/ _react.default.createElement("span", null, "/"), stepNav.map((item, i)=>{
        const StepLabel = (0, _getTranslation.getTranslation)(item.label, i18n);
        const isLast = stepNav.length === i + 1;
        const Step = isLast ? /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__last`,
            key: i
        }, StepLabel) : /*#__PURE__*/ _react.default.createElement(_react.Fragment, {
            key: i
        }, item.url ? /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: item.url
        }, /*#__PURE__*/ _react.default.createElement("span", {
            key: i
        }, StepLabel)) : /*#__PURE__*/ _react.default.createElement("span", {
            key: i
        }, StepLabel), /*#__PURE__*/ _react.default.createElement("span", null, "/"));
        return Step;
    })) : /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_graphics.IconGraphic, null)));
};
const _default = StepNav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0ZXBOYXYvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgdHlwZSB7IENvbnRleHQgYXMgQ29udGV4dFR5cGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBJY29uR3JhcGhpYyB9IGZyb20gJy4uLy4uLy4uLy4uL2V4cG9ydHMvY29tcG9uZW50cy9ncmFwaGljcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc3RlcC1uYXYnXG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHRUeXBlKVxuXG5jb25zdCBTdGVwTmF2UHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGVwTmF2LCBzZXRTdGVwTmF2XSA9IHVzZVN0YXRlKFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHNldFN0ZXBOYXYsXG4gICAgICAgIHN0ZXBOYXYsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgdXNlU3RlcE5hdiA9ICgpOiBDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KENvbnRleHQpXG5cbmNvbnN0IFN0ZXBOYXY6IFJlYWN0LkZDPHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgeyBzdGVwTmF2IH0gPSB1c2VTdGVwTmF2KClcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhZG1pbiB9LFxuICB9ID0gY29uZmlnXG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7c3RlcE5hdi5sZW5ndGggPiAwID8gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hvbWVgfSB0YWJJbmRleD17MH0gdG89e2FkbWlufT5cbiAgICAgICAgICAgIDxJY29uR3JhcGhpYyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3Bhbj4vPC9zcGFuPlxuICAgICAgICAgIHtzdGVwTmF2Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgU3RlcExhYmVsID0gZ2V0VHJhbnNsYXRpb24oaXRlbS5sYWJlbCwgaTE4bilcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IHN0ZXBOYXYubGVuZ3RoID09PSBpICsgMVxuXG4gICAgICAgICAgICBjb25zdCBTdGVwID0gaXNMYXN0ID8gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhc3RgfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtTdGVwTGFiZWx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnVybCA/IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0+e1N0ZXBMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0+e1N0ZXBMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8c3Bhbj4vPC9zcGFuPlxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICByZXR1cm4gU3RlcFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L25hdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbYmFzZUNsYXNzLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgICAgIDxJY29uR3JhcGhpYyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgeyBTdGVwTmF2UHJvdmlkZXIsIHVzZVN0ZXBOYXYgfVxuXG5leHBvcnQgZGVmYXVsdCBTdGVwTmF2XG4iXSwibmFtZXMiOlsiU3RlcE5hdlByb3ZpZGVyIiwidXNlU3RlcE5hdiIsImJhc2VDbGFzcyIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJzdGVwTmF2Iiwic2V0U3RlcE5hdiIsInVzZVN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiLCJTdGVwTmF2IiwicHJvcHMiLCJjbGFzc05hbWUiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJyb3V0ZXMiLCJhZG1pbiIsIkZyYWdtZW50IiwibGVuZ3RoIiwibmF2IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJMaW5rIiwidGFiSW5kZXgiLCJ0byIsIkljb25HcmFwaGljIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJpIiwiU3RlcExhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbCIsImlzTGFzdCIsIlN0ZXAiLCJrZXkiLCJ1cmwiLCJkaXYiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBcUZTQSxlQUFlO2VBQWZBOztJQUVULE9BQXNCO2VBQXRCOztJQUYwQkMsVUFBVTtlQUFWQTs7OytEQXJGMkM7OEJBQ3RDO2dDQUNWOzBCQUlPO2dDQUNHO3dCQUNMO1FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRWxCLE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDLENBQUM7QUFFL0IsTUFBTUosa0JBQTRELENBQUMsRUFBRUssUUFBUSxFQUFFO0lBQzdFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHQyxJQUFBQSxlQUFRLEVBQUMsRUFBRTtJQUV6QyxxQkFDRSw2QkFBQ0wsUUFBUU0sUUFBUTtRQUNmQyxPQUFPO1lBQ0xIO1lBQ0FEO1FBQ0Y7T0FFQ0Q7QUFHUDtBQUVBLE1BQU1KLGFBQWEsSUFBbUJVLElBQUFBLGlCQUFVLEVBQUNSO0FBRWpELE1BQU1TLFVBRUQsQ0FBQ0M7SUFDSixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRDtJQUN0QixNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHQyxJQUFBQSw0QkFBYztJQUUvQixNQUFNLEVBQUVWLE9BQU8sRUFBRSxHQUFHTDtJQUNwQixNQUFNZ0IsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxFQUNsQixHQUFHSDtJQUVKLHFCQUNFLDZCQUFDSSxlQUFRLFFBQ05mLFFBQVFnQixNQUFNLEdBQUcsa0JBQ2hCLDZCQUFDQztRQUFJVCxXQUFXO1lBQUNaO1lBQVdZO1NBQVUsQ0FBQ1UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7cUJBQzFELDZCQUFDQyxvQkFBSTtRQUFDYixXQUFXLENBQUMsRUFBRVosVUFBVSxNQUFNLENBQUM7UUFBRTBCLFVBQVU7UUFBR0MsSUFBSVQ7cUJBQ3RELDZCQUFDVSxxQkFBVyx3QkFFZCw2QkFBQ0MsY0FBSyxNQUNMekIsUUFBUTBCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztRQUNsQixNQUFNQyxZQUFZQyxJQUFBQSw4QkFBYyxFQUFDSCxLQUFLSSxLQUFLLEVBQUV0QjtRQUM3QyxNQUFNdUIsU0FBU2hDLFFBQVFnQixNQUFNLEtBQUtZLElBQUk7UUFFdEMsTUFBTUssT0FBT0QsdUJBQ1gsNkJBQUNQO1lBQUtqQixXQUFXLENBQUMsRUFBRVosVUFBVSxNQUFNLENBQUM7WUFBRXNDLEtBQUtOO1dBQ3pDQywyQkFHSCw2QkFBQ2QsZUFBUTtZQUFDbUIsS0FBS047V0FDWkQsS0FBS1EsR0FBRyxpQkFDUCw2QkFBQ2Qsb0JBQUk7WUFBQ0UsSUFBSUksS0FBS1EsR0FBRzt5QkFDaEIsNkJBQUNWO1lBQUtTLEtBQUtOO1dBQUlDLDRCQUdqQiw2QkFBQ0o7WUFBS1MsS0FBS047V0FBSUMsMEJBRWpCLDZCQUFDSixjQUFLO1FBSVYsT0FBT1E7SUFDVCxvQkFHRiw2QkFBQ0c7UUFBSTVCLFdBQVc7WUFBQ1o7WUFBV1k7U0FBVSxDQUFDVSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztxQkFDMUQsNkJBQUNJLHFCQUFXO0FBS3RCO01BSUEsV0FBZWxCIn0=