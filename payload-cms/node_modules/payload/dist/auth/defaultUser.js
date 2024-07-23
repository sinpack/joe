"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultUserCollection", {
    enumerable: true,
    get: function() {
        return defaultUserCollection;
    }
});
const _extractTranslations = require("../translations/extractTranslations");
const labels = (0, _extractTranslations.extractTranslations)([
    'general:user',
    'general:users'
]);
const defaultUserCollection = {
    admin: {
        useAsTitle: 'email'
    },
    auth: {
        tokenExpiration: 7200
    },
    fields: [],
    labels: {
        plural: labels['general:users'],
        singular: labels['general:user']
    },
    slug: 'users'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2RlZmF1bHRVc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJ1xuXG5jb25zdCBsYWJlbHMgPSBleHRyYWN0VHJhbnNsYXRpb25zKFsnZ2VuZXJhbDp1c2VyJywgJ2dlbmVyYWw6dXNlcnMnXSlcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRVc2VyQ29sbGVjdGlvbjogQ29sbGVjdGlvbkNvbmZpZyA9IHtcbiAgYWRtaW46IHtcbiAgICB1c2VBc1RpdGxlOiAnZW1haWwnLFxuICB9LFxuICBhdXRoOiB7XG4gICAgdG9rZW5FeHBpcmF0aW9uOiA3MjAwLFxuICB9LFxuICBmaWVsZHM6IFtdLFxuICBsYWJlbHM6IHtcbiAgICBwbHVyYWw6IGxhYmVsc1snZ2VuZXJhbDp1c2VycyddLFxuICAgIHNpbmd1bGFyOiBsYWJlbHNbJ2dlbmVyYWw6dXNlciddLFxuICB9LFxuICBzbHVnOiAndXNlcnMnLFxufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRVc2VyQ29sbGVjdGlvbiIsImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJhdXRoIiwidG9rZW5FeHBpcmF0aW9uIiwiZmllbGRzIiwicGx1cmFsIiwic2luZ3VsYXIiLCJzbHVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7OztxQ0FKdUI7QUFFcEMsTUFBTUMsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFBQztJQUFnQjtDQUFnQjtBQUU3RCxNQUFNRix3QkFBMEM7SUFDckRHLE9BQU87UUFDTEMsWUFBWTtJQUNkO0lBQ0FDLE1BQU07UUFDSkMsaUJBQWlCO0lBQ25CO0lBQ0FDLFFBQVEsRUFBRTtJQUNWTixRQUFRO1FBQ05PLFFBQVFQLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDL0JRLFVBQVVSLE1BQU0sQ0FBQyxlQUFlO0lBQ2xDO0lBQ0FTLE1BQU07QUFDUiJ9