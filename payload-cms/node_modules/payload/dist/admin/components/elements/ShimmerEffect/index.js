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
    ShimmerEffect: function() {
        return ShimmerEffect;
    },
    StaggeredShimmers: function() {
        return StaggeredShimmers;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _useDelay = require("../../../hooks/useDelay");
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
const ShimmerEffect = ({ animationDelay = '0ms', height = '60px', width = '100%' })=>{
    return /*#__PURE__*/ _react.createElement("div", {
        className: "shimmer-effect",
        style: {
            height: typeof height === 'number' ? `${height}px` : height,
            width: typeof width === 'number' ? `${width}px` : width
        }
    }, /*#__PURE__*/ _react.createElement("div", {
        className: "shimmer-effect__shine",
        style: {
            animationDelay
        }
    }));
};
const StaggeredShimmers = ({ className, count, height, renderDelay = 500, shimmerDelay = 25, shimmerItemClassName, width })=>{
    const shimmerDelayToPass = typeof shimmerDelay === 'number' ? `${shimmerDelay}ms` : shimmerDelay;
    const [hasDelayed] = (0, _useDelay.useDelay)(renderDelay, true);
    if (!hasDelayed) return null;
    return /*#__PURE__*/ _react.createElement("div", {
        className: className
    }, [
        ...Array(count)
    ].map((_, i)=>/*#__PURE__*/ _react.createElement("div", {
            className: shimmerItemClassName,
            key: i
        }, /*#__PURE__*/ _react.createElement(ShimmerEffect, {
            animationDelay: `calc(${i} * ${shimmerDelayToPass})`,
            height: height,
            width: width
        }))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NoaW1tZXJFZmZlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VEZWxheSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlbGF5J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbnR5cGUgU2hpbW1lckVmZmVjdFQgPSB7XG4gIGFuaW1hdGlvbkRlbGF5Pzogc3RyaW5nXG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZ1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xufVxuZXhwb3J0IGNvbnN0IFNoaW1tZXJFZmZlY3Q6IFJlYWN0LkZDPFNoaW1tZXJFZmZlY3RUPiA9ICh7XG4gIGFuaW1hdGlvbkRlbGF5ID0gJzBtcycsXG4gIGhlaWdodCA9ICc2MHB4JyxcbiAgd2lkdGggPSAnMTAwJScsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwic2hpbW1lci1lZmZlY3RcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiB0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJyA/IGAke2hlaWdodH1weGAgOiBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiB0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInID8gYCR7d2lkdGh9cHhgIDogd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2hpbW1lci1lZmZlY3RfX3NoaW5lXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxudHlwZSBTdGFnZ2VyZWRTaGltbWVyc1QgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjb3VudDogbnVtYmVyXG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZ1xuICByZW5kZXJEZWxheT86IG51bWJlclxuICBzaGltbWVyRGVsYXk/OiBudW1iZXIgfCBzdHJpbmdcbiAgc2hpbW1lckl0ZW1DbGFzc05hbWU/OiBzdHJpbmdcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBTdGFnZ2VyZWRTaGltbWVyczogUmVhY3QuRkM8U3RhZ2dlcmVkU2hpbW1lcnNUPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY291bnQsXG4gIGhlaWdodCxcbiAgcmVuZGVyRGVsYXkgPSA1MDAsXG4gIHNoaW1tZXJEZWxheSA9IDI1LFxuICBzaGltbWVySXRlbUNsYXNzTmFtZSxcbiAgd2lkdGgsXG59KSA9PiB7XG4gIGNvbnN0IHNoaW1tZXJEZWxheVRvUGFzcyA9IHR5cGVvZiBzaGltbWVyRGVsYXkgPT09ICdudW1iZXInID8gYCR7c2hpbW1lckRlbGF5fW1zYCA6IHNoaW1tZXJEZWxheVxuICBjb25zdCBbaGFzRGVsYXllZF0gPSB1c2VEZWxheShyZW5kZXJEZWxheSwgdHJ1ZSlcblxuICBpZiAoIWhhc0RlbGF5ZWQpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHtbLi4uQXJyYXkoY291bnQpXS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NoaW1tZXJJdGVtQ2xhc3NOYW1lfSBrZXk9e2l9PlxuICAgICAgICAgIDxTaGltbWVyRWZmZWN0XG4gICAgICAgICAgICBhbmltYXRpb25EZWxheT17YGNhbGMoJHtpfSAqICR7c2hpbW1lckRlbGF5VG9QYXNzfSlgfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlNoaW1tZXJFZmZlY3QiLCJTdGFnZ2VyZWRTaGltbWVycyIsImFuaW1hdGlvbkRlbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNvdW50IiwicmVuZGVyRGVsYXkiLCJzaGltbWVyRGVsYXkiLCJzaGltbWVySXRlbUNsYXNzTmFtZSIsInNoaW1tZXJEZWxheVRvUGFzcyIsImhhc0RlbGF5ZWQiLCJ1c2VEZWxheSIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJrZXkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBVWFBLGFBQWE7ZUFBYkE7O0lBZ0NBQyxpQkFBaUI7ZUFBakJBOzs7K0RBMUNVOzBCQUVFO1FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNRCxnQkFBMEMsQ0FBQyxFQUN0REUsaUJBQWlCLEtBQUssRUFDdEJDLFNBQVMsTUFBTSxFQUNmQyxRQUFRLE1BQU0sRUFDZjtJQUNDLHFCQUNFLHFCQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFDTEosUUFBUSxPQUFPQSxXQUFXLFdBQVcsQ0FBQyxFQUFFQSxPQUFPLEVBQUUsQ0FBQyxHQUFHQTtZQUNyREMsT0FBTyxPQUFPQSxVQUFVLFdBQVcsQ0FBQyxFQUFFQSxNQUFNLEVBQUUsQ0FBQyxHQUFHQTtRQUNwRDtxQkFFQSxxQkFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xMO1FBQ0Y7O0FBSVI7QUFXTyxNQUFNRCxvQkFBa0QsQ0FBQyxFQUM5REssU0FBUyxFQUNURSxLQUFLLEVBQ0xMLE1BQU0sRUFDTk0sY0FBYyxHQUFHLEVBQ2pCQyxlQUFlLEVBQUUsRUFDakJDLG9CQUFvQixFQUNwQlAsS0FBSyxFQUNOO0lBQ0MsTUFBTVEscUJBQXFCLE9BQU9GLGlCQUFpQixXQUFXLENBQUMsRUFBRUEsYUFBYSxFQUFFLENBQUMsR0FBR0E7SUFDcEYsTUFBTSxDQUFDRyxXQUFXLEdBQUdDLElBQUFBLGtCQUFRLEVBQUNMLGFBQWE7SUFFM0MsSUFBSSxDQUFDSSxZQUFZLE9BQU87SUFFeEIscUJBQ0UscUJBQUNSO1FBQUlDLFdBQVdBO09BQ2I7V0FBSVMsTUFBTVA7S0FBTyxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ3pCLHFCQUFDYjtZQUFJQyxXQUFXSztZQUFzQlEsS0FBS0Q7eUJBQ3pDLHFCQUFDbEI7WUFDQ0UsZ0JBQWdCLENBQUMsS0FBSyxFQUFFZ0IsRUFBRSxHQUFHLEVBQUVOLG1CQUFtQixDQUFDLENBQUM7WUFDcERULFFBQVFBO1lBQ1JDLE9BQU9BOztBQU1uQiJ9