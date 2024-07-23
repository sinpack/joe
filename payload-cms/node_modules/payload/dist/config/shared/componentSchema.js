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
    componentSchema: function() {
        return componentSchema;
    },
    customViewSchema: function() {
        return customViewSchema;
    },
    documentTabSchema: function() {
        return documentTabSchema;
    },
    livePreviewSchema: function() {
        return livePreviewSchema;
    }
});
const _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const componentSchema = _joi.default.alternatives().try(_joi.default.object().unknown(), _joi.default.func());
const documentTabSchema = {
    condition: _joi.default.func(),
    href: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()).required(),
    isActive: _joi.default.alternatives().try(_joi.default.func(), _joi.default.boolean()),
    label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()).required(),
    newTab: _joi.default.boolean(),
    pillLabel: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func())
};
const customViewSchema = _joi.default.object({
    Component: componentSchema,
    Tab: _joi.default.alternatives().try(documentTabSchema, componentSchema),
    actions: _joi.default.array().items(componentSchema),
    path: _joi.default.string()
});
const livePreviewSchema = {
    breakpoints: _joi.default.array().items(_joi.default.object({
        name: _joi.default.string(),
        height: _joi.default.alternatives().try(_joi.default.number(), _joi.default.string()),
        label: _joi.default.string(),
        width: _joi.default.alternatives().try(_joi.default.number(), _joi.default.string())
    })),
    url: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func())
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvc2hhcmVkL2NvbXBvbmVudFNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSdcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNjaGVtYSA9IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoam9pLm9iamVjdCgpLnVua25vd24oKSwgam9pLmZ1bmMoKSlcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50VGFiU2NoZW1hID0ge1xuICBjb25kaXRpb246IGpvaS5mdW5jKCksXG4gIGhyZWY6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoam9pLnN0cmluZygpLCBqb2kuZnVuYygpKS5yZXF1aXJlZCgpLFxuICBpc0FjdGl2ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShqb2kuZnVuYygpLCBqb2kuYm9vbGVhbigpKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoam9pLnN0cmluZygpLCBqb2kuZnVuYygpKS5yZXF1aXJlZCgpLFxuICBuZXdUYWI6IGpvaS5ib29sZWFuKCksXG4gIHBpbGxMYWJlbDogam9pLmFsdGVybmF0aXZlcygpLnRyeShqb2kuc3RyaW5nKCksIGpvaS5mdW5jKCkpLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tVmlld1NjaGVtYSA9IGpvaS5vYmplY3Qoe1xuICBDb21wb25lbnQ6IGNvbXBvbmVudFNjaGVtYSxcbiAgVGFiOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KGRvY3VtZW50VGFiU2NoZW1hLCBjb21wb25lbnRTY2hlbWEpLFxuICBhY3Rpb25zOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICBwYXRoOiBqb2kuc3RyaW5nKCksXG59KVxuXG5leHBvcnQgY29uc3QgbGl2ZVByZXZpZXdTY2hlbWEgPSB7XG4gIGJyZWFrcG9pbnRzOiBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgICBqb2kub2JqZWN0KHtcbiAgICAgIG5hbWU6IGpvaS5zdHJpbmcoKSxcbiAgICAgIGhlaWdodDogam9pLmFsdGVybmF0aXZlcygpLnRyeShqb2kubnVtYmVyKCksIGpvaS5zdHJpbmcoKSksXG4gICAgICBsYWJlbDogam9pLnN0cmluZygpLFxuICAgICAgd2lkdGg6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoam9pLm51bWJlcigpLCBqb2kuc3RyaW5nKCkpLFxuICAgIH0pLFxuICApLFxuICB1cmw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoam9pLnN0cmluZygpLCBqb2kuZnVuYygpKSxcbn1cbiJdLCJuYW1lcyI6WyJjb21wb25lbnRTY2hlbWEiLCJjdXN0b21WaWV3U2NoZW1hIiwiZG9jdW1lbnRUYWJTY2hlbWEiLCJsaXZlUHJldmlld1NjaGVtYSIsImpvaSIsImFsdGVybmF0aXZlcyIsInRyeSIsIm9iamVjdCIsInVua25vd24iLCJmdW5jIiwiY29uZGl0aW9uIiwiaHJlZiIsInN0cmluZyIsInJlcXVpcmVkIiwiaXNBY3RpdmUiLCJib29sZWFuIiwibGFiZWwiLCJuZXdUYWIiLCJwaWxsTGFiZWwiLCJDb21wb25lbnQiLCJUYWIiLCJhY3Rpb25zIiwiYXJyYXkiLCJpdGVtcyIsInBhdGgiLCJicmVha3BvaW50cyIsIm5hbWUiLCJoZWlnaHQiLCJudW1iZXIiLCJ3aWR0aCIsInVybCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFFYUEsZUFBZTtlQUFmQTs7SUFXQUMsZ0JBQWdCO2VBQWhCQTs7SUFUQUMsaUJBQWlCO2VBQWpCQTs7SUFnQkFDLGlCQUFpQjtlQUFqQkE7Ozs0REFwQkc7Ozs7OztBQUVULE1BQU1ILGtCQUFrQkksWUFBRyxDQUFDQyxZQUFZLEdBQUdDLEdBQUcsQ0FBQ0YsWUFBRyxDQUFDRyxNQUFNLEdBQUdDLE9BQU8sSUFBSUosWUFBRyxDQUFDSyxJQUFJO0FBRS9FLE1BQU1QLG9CQUFvQjtJQUMvQlEsV0FBV04sWUFBRyxDQUFDSyxJQUFJO0lBQ25CRSxNQUFNUCxZQUFHLENBQUNDLFlBQVksR0FBR0MsR0FBRyxDQUFDRixZQUFHLENBQUNRLE1BQU0sSUFBSVIsWUFBRyxDQUFDSyxJQUFJLElBQUlJLFFBQVE7SUFDL0RDLFVBQVVWLFlBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxHQUFHLENBQUNGLFlBQUcsQ0FBQ0ssSUFBSSxJQUFJTCxZQUFHLENBQUNXLE9BQU87SUFDeERDLE9BQU9aLFlBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxHQUFHLENBQUNGLFlBQUcsQ0FBQ1EsTUFBTSxJQUFJUixZQUFHLENBQUNLLElBQUksSUFBSUksUUFBUTtJQUNoRUksUUFBUWIsWUFBRyxDQUFDVyxPQUFPO0lBQ25CRyxXQUFXZCxZQUFHLENBQUNDLFlBQVksR0FBR0MsR0FBRyxDQUFDRixZQUFHLENBQUNRLE1BQU0sSUFBSVIsWUFBRyxDQUFDSyxJQUFJO0FBQzFEO0FBRU8sTUFBTVIsbUJBQW1CRyxZQUFHLENBQUNHLE1BQU0sQ0FBQztJQUN6Q1ksV0FBV25CO0lBQ1hvQixLQUFLaEIsWUFBRyxDQUFDQyxZQUFZLEdBQUdDLEdBQUcsQ0FBQ0osbUJBQW1CRjtJQUMvQ3FCLFNBQVNqQixZQUFHLENBQUNrQixLQUFLLEdBQUdDLEtBQUssQ0FBQ3ZCO0lBQzNCd0IsTUFBTXBCLFlBQUcsQ0FBQ1EsTUFBTTtBQUNsQjtBQUVPLE1BQU1ULG9CQUFvQjtJQUMvQnNCLGFBQWFyQixZQUFHLENBQUNrQixLQUFLLEdBQUdDLEtBQUssQ0FDNUJuQixZQUFHLENBQUNHLE1BQU0sQ0FBQztRQUNUbUIsTUFBTXRCLFlBQUcsQ0FBQ1EsTUFBTTtRQUNoQmUsUUFBUXZCLFlBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxHQUFHLENBQUNGLFlBQUcsQ0FBQ3dCLE1BQU0sSUFBSXhCLFlBQUcsQ0FBQ1EsTUFBTTtRQUN2REksT0FBT1osWUFBRyxDQUFDUSxNQUFNO1FBQ2pCaUIsT0FBT3pCLFlBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxHQUFHLENBQUNGLFlBQUcsQ0FBQ3dCLE1BQU0sSUFBSXhCLFlBQUcsQ0FBQ1EsTUFBTTtJQUN4RDtJQUVGa0IsS0FBSzFCLFlBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxHQUFHLENBQUNGLFlBQUcsQ0FBQ1EsTUFBTSxJQUFJUixZQUFHLENBQUNLLElBQUk7QUFDcEQifQ==