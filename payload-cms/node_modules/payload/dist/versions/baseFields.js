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
    default: function() {
        return _default;
    },
    statuses: function() {
        return statuses;
    }
});
const _extractTranslations = require("../translations/extractTranslations");
const labels = (0, _extractTranslations.extractTranslations)([
    'version:draft',
    'version:published',
    'version:status'
]);
const statuses = [
    {
        label: labels['version:draft'],
        value: 'draft'
    },
    {
        label: labels['version:published'],
        value: 'published'
    }
];
const baseVersionFields = [
    {
        name: '_status',
        type: 'select',
        admin: {
            components: {
                Field: ()=>null
            },
            disableBulkEdit: true
        },
        defaultValue: 'draft',
        index: true,
        label: labels['version:status'],
        options: statuses
    }
];
const _default = baseVersionFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9iYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBleHRyYWN0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2V4dHJhY3RUcmFuc2xhdGlvbnMnXG5cbmNvbnN0IGxhYmVscyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWyd2ZXJzaW9uOmRyYWZ0JywgJ3ZlcnNpb246cHVibGlzaGVkJywgJ3ZlcnNpb246c3RhdHVzJ10pXG5cbmV4cG9ydCBjb25zdCBzdGF0dXNlcyA9IFtcbiAge1xuICAgIGxhYmVsOiBsYWJlbHNbJ3ZlcnNpb246ZHJhZnQnXSxcbiAgICB2YWx1ZTogJ2RyYWZ0JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBsYWJlbHNbJ3ZlcnNpb246cHVibGlzaGVkJ10sXG4gICAgdmFsdWU6ICdwdWJsaXNoZWQnLFxuICB9LFxuXVxuXG5jb25zdCBiYXNlVmVyc2lvbkZpZWxkczogRmllbGRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdfc3RhdHVzJyxcbiAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlQnVsa0VkaXQ6IHRydWUsXG4gICAgfSxcbiAgICBkZWZhdWx0VmFsdWU6ICdkcmFmdCcsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgbGFiZWw6IGxhYmVsc1sndmVyc2lvbjpzdGF0dXMnXSxcbiAgICBvcHRpb25zOiBzdGF0dXNlcyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVZlcnNpb25GaWVsZHNcbiJdLCJuYW1lcyI6WyJzdGF0dXNlcyIsImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiYmFzZVZlcnNpb25GaWVsZHMiLCJuYW1lIiwidHlwZSIsImFkbWluIiwiY29tcG9uZW50cyIsIkZpZWxkIiwiZGlzYWJsZUJ1bGtFZGl0IiwiZGVmYXVsdFZhbHVlIiwiaW5kZXgiLCJvcHRpb25zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtDQSxPQUFnQztlQUFoQzs7SUE1QmFBLFFBQVE7ZUFBUkE7OztxQ0FKdUI7QUFFcEMsTUFBTUMsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFBQztJQUFpQjtJQUFxQjtDQUFpQjtBQUVwRixNQUFNRixXQUFXO0lBQ3RCO1FBQ0VHLE9BQU9GLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDOUJHLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU9GLE1BQU0sQ0FBQyxvQkFBb0I7UUFDbENHLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsb0JBQTZCO0lBQ2pDO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLFlBQVk7Z0JBQ1ZDLE9BQU8sSUFBTTtZQUNmO1lBQ0FDLGlCQUFpQjtRQUNuQjtRQUNBQyxjQUFjO1FBQ2RDLE9BQU87UUFDUFYsT0FBT0YsTUFBTSxDQUFDLGlCQUFpQjtRQUMvQmEsU0FBU2Q7SUFDWDtDQUNEO01BRUQsV0FBZUsifQ==