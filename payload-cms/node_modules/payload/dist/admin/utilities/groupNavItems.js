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
    EntityType: function() {
        return EntityType;
    },
    groupNavItems: function() {
        return groupNavItems;
    }
});
const _getTranslation = require("../../utilities/getTranslation");
var EntityType;
(function(EntityType) {
    EntityType["collection"] = "collections";
    EntityType["global"] = "globals";
})(EntityType || (EntityType = {}));
function groupNavItems(entities, permissions, i18n) {
    const result = entities.reduce((groups, entityToGroup)=>{
        if (permissions?.[entityToGroup.type.toLowerCase()]?.[entityToGroup.entity.slug]?.read.permission) {
            const translatedGroup = (0, _getTranslation.getTranslation)(entityToGroup.entity.admin.group, i18n);
            if (entityToGroup.entity.admin.group) {
                const existingGroup = groups.find((group)=>(0, _getTranslation.getTranslation)(group.label, i18n) === translatedGroup);
                let matchedGroup = existingGroup;
                if (!existingGroup) {
                    matchedGroup = {
                        entities: [],
                        label: translatedGroup
                    };
                    groups.push(matchedGroup);
                }
                matchedGroup.entities.push(entityToGroup);
            } else {
                const defaultGroup = groups.find((group)=>(0, _getTranslation.getTranslation)(group.label, i18n) === i18n.t(`general:${entityToGroup.type}`));
                defaultGroup.entities.push(entityToGroup);
            }
        }
        return groups;
    }, [
        {
            entities: [],
            label: i18n.t('general:collections')
        },
        {
            entities: [],
            label: i18n.t('general:globals')
        }
    ]);
    return result.filter((group)=>group.entities.length > 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IGkxOG4gYXMgSWkxOG4gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFBlcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuXG5leHBvcnQgZW51bSBFbnRpdHlUeXBlIHtcbiAgY29sbGVjdGlvbiA9ICdjb2xsZWN0aW9ucycsXG4gIGdsb2JhbCA9ICdnbG9iYWxzJyxcbn1cblxuZXhwb3J0IHR5cGUgRW50aXR5VG9Hcm91cCA9XG4gIHwge1xuICAgICAgZW50aXR5OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gICAgICB0eXBlOiBFbnRpdHlUeXBlLmNvbGxlY3Rpb25cbiAgICB9XG4gIHwge1xuICAgICAgZW50aXR5OiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgICAgIHR5cGU6IEVudGl0eVR5cGUuZ2xvYmFsXG4gICAgfVxuXG5leHBvcnQgdHlwZSBHcm91cCA9IHtcbiAgZW50aXRpZXM6IEVudGl0eVRvR3JvdXBbXVxuICBsYWJlbDogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5hdkl0ZW1zKFxuICBlbnRpdGllczogRW50aXR5VG9Hcm91cFtdLFxuICBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsXG4gIGkxOG46IElpMThuLFxuKTogR3JvdXBbXSB7XG4gIGNvbnN0IHJlc3VsdCA9IGVudGl0aWVzLnJlZHVjZShcbiAgICAoZ3JvdXBzLCBlbnRpdHlUb0dyb3VwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHBlcm1pc3Npb25zPy5bZW50aXR5VG9Hcm91cC50eXBlLnRvTG93ZXJDYXNlKCldPy5bZW50aXR5VG9Hcm91cC5lbnRpdHkuc2x1Z10/LnJlYWRcbiAgICAgICAgICAucGVybWlzc2lvblxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRHcm91cCA9IGdldFRyYW5zbGF0aW9uKGVudGl0eVRvR3JvdXAuZW50aXR5LmFkbWluLmdyb3VwLCBpMThuKVxuICAgICAgICBpZiAoZW50aXR5VG9Hcm91cC5lbnRpdHkuYWRtaW4uZ3JvdXApIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZ3JvdXBzLmZpbmQoXG4gICAgICAgICAgICAoZ3JvdXApID0+IGdldFRyYW5zbGF0aW9uKGdyb3VwLmxhYmVsLCBpMThuKSA9PT0gdHJhbnNsYXRlZEdyb3VwLFxuICAgICAgICAgICkgYXMgR3JvdXBcbiAgICAgICAgICBsZXQgbWF0Y2hlZEdyb3VwOiBHcm91cCA9IGV4aXN0aW5nR3JvdXBcbiAgICAgICAgICBpZiAoIWV4aXN0aW5nR3JvdXApIHtcbiAgICAgICAgICAgIG1hdGNoZWRHcm91cCA9IHsgZW50aXRpZXM6IFtdLCBsYWJlbDogdHJhbnNsYXRlZEdyb3VwIH1cbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKG1hdGNoZWRHcm91cClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYXRjaGVkR3JvdXAuZW50aXRpZXMucHVzaChlbnRpdHlUb0dyb3VwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRHcm91cCA9IGdyb3Vwcy5maW5kKFxuICAgICAgICAgICAgKGdyb3VwKSA9PlxuICAgICAgICAgICAgICBnZXRUcmFuc2xhdGlvbihncm91cC5sYWJlbCwgaTE4bikgPT09IGkxOG4udChgZ2VuZXJhbDoke2VudGl0eVRvR3JvdXAudHlwZX1gKSxcbiAgICAgICAgICApIGFzIEdyb3VwXG4gICAgICAgICAgZGVmYXVsdEdyb3VwLmVudGl0aWVzLnB1c2goZW50aXR5VG9Hcm91cClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ3JvdXBzXG4gICAgfSxcbiAgICBbXG4gICAgICB7XG4gICAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgICAgbGFiZWw6IGkxOG4udCgnZ2VuZXJhbDpjb2xsZWN0aW9ucycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZW50aXRpZXM6IFtdLFxuICAgICAgICBsYWJlbDogaTE4bi50KCdnZW5lcmFsOmdsb2JhbHMnKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgKVxuXG4gIHJldHVybiByZXN1bHQuZmlsdGVyKChncm91cCkgPT4gZ3JvdXAuZW50aXRpZXMubGVuZ3RoID4gMClcbn1cbiJdLCJuYW1lcyI6WyJncm91cE5hdkl0ZW1zIiwiRW50aXR5VHlwZSIsImVudGl0aWVzIiwicGVybWlzc2lvbnMiLCJpMThuIiwicmVzdWx0IiwicmVkdWNlIiwiZ3JvdXBzIiwiZW50aXR5VG9Hcm91cCIsInR5cGUiLCJ0b0xvd2VyQ2FzZSIsImVudGl0eSIsInNsdWciLCJyZWFkIiwicGVybWlzc2lvbiIsInRyYW5zbGF0ZWRHcm91cCIsImdldFRyYW5zbGF0aW9uIiwiYWRtaW4iLCJncm91cCIsImV4aXN0aW5nR3JvdXAiLCJmaW5kIiwibGFiZWwiLCJtYXRjaGVkR3JvdXAiLCJwdXNoIiwiZGVmYXVsdEdyb3VwIiwidCIsImZpbHRlciIsImxlbmd0aCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUE0QmdCQSxhQUFhO2VBQWJBOzs7Z0NBdEJlOztVQUVuQkM7OztHQUFBQSxlQUFBQTtBQW9CTCxTQUFTRCxjQUNkRSxRQUF5QixFQUN6QkMsV0FBd0IsRUFDeEJDLElBQVc7SUFFWCxNQUFNQyxTQUFTSCxTQUFTSSxNQUFNLENBQzVCLENBQUNDLFFBQVFDO1FBQ1AsSUFDRUwsYUFBYSxDQUFDSyxjQUFjQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFLENBQUNGLGNBQWNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVDLEtBQzNFQyxZQUNIO1lBQ0EsTUFBTUMsa0JBQWtCQyxJQUFBQSw4QkFBYyxFQUFDUixjQUFjRyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFZDtZQUN6RSxJQUFJSSxjQUFjRyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO2dCQUNwQyxNQUFNQyxnQkFBZ0JaLE9BQU9hLElBQUksQ0FDL0IsQ0FBQ0YsUUFBVUYsSUFBQUEsOEJBQWMsRUFBQ0UsTUFBTUcsS0FBSyxFQUFFakIsVUFBVVc7Z0JBRW5ELElBQUlPLGVBQXNCSDtnQkFDMUIsSUFBSSxDQUFDQSxlQUFlO29CQUNsQkcsZUFBZTt3QkFBRXBCLFVBQVUsRUFBRTt3QkFBRW1CLE9BQU9OO29CQUFnQjtvQkFDdERSLE9BQU9nQixJQUFJLENBQUNEO2dCQUNkO2dCQUVBQSxhQUFhcEIsUUFBUSxDQUFDcUIsSUFBSSxDQUFDZjtZQUM3QixPQUFPO2dCQUNMLE1BQU1nQixlQUFlakIsT0FBT2EsSUFBSSxDQUM5QixDQUFDRixRQUNDRixJQUFBQSw4QkFBYyxFQUFDRSxNQUFNRyxLQUFLLEVBQUVqQixVQUFVQSxLQUFLcUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFakIsY0FBY0MsSUFBSSxDQUFDLENBQUM7Z0JBRWhGZSxhQUFhdEIsUUFBUSxDQUFDcUIsSUFBSSxDQUFDZjtZQUM3QjtRQUNGO1FBRUEsT0FBT0Q7SUFDVCxHQUNBO1FBQ0U7WUFDRUwsVUFBVSxFQUFFO1lBQ1ptQixPQUFPakIsS0FBS3FCLENBQUMsQ0FBQztRQUNoQjtRQUNBO1lBQ0V2QixVQUFVLEVBQUU7WUFDWm1CLE9BQU9qQixLQUFLcUIsQ0FBQyxDQUFDO1FBQ2hCO0tBQ0Q7SUFHSCxPQUFPcEIsT0FBT3FCLE1BQU0sQ0FBQyxDQUFDUixRQUFVQSxNQUFNaEIsUUFBUSxDQUFDeUIsTUFBTSxHQUFHO0FBQzFEIn0=