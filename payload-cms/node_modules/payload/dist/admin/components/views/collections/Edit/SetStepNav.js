"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SetStepNav", {
    enumerable: true,
    get: function() {
        return SetStepNav;
    }
});
const _react = require("react");
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../utilities/getTranslation");
const _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/useTitle"));
const _StepNav = require("../../../elements/StepNav");
const _Config = require("../../../utilities/Config");
const _EditDepth = require("../../../utilities/EditDepth");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SetStepNav = (props)=>{
    let collection;
    let global;
    let useAsTitle;
    let pluralLabel;
    let slug;
    let isEditing = false;
    let id;
    const view = props?.view || undefined;
    if ('collection' in props) {
        const { id: idFromProps, collection: collectionFromProps, isEditing: isEditingFromProps } = props;
        if (collectionFromProps) {
            collection = collectionFromProps;
            useAsTitle = collection.admin.useAsTitle;
            pluralLabel = collection.labels.plural;
            slug = collection.slug;
            isEditing = isEditingFromProps;
            id = idFromProps;
        }
    }
    if ('global' in props) {
        const { global: globalFromProps } = props;
        if (globalFromProps) {
            global = globalFromProps;
            slug = globalFromProps?.slug;
        }
    }
    const title = (0, _useTitle.default)({
        collection,
        global
    });
    const { setStepNav } = (0, _StepNav.useStepNav)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const { routes: { admin } } = (0, _Config.useConfig)();
    const drawerDepth = (0, _EditDepth.useEditDepth)();
    (0, _react.useEffect)(()=>{
        const nav = [];
        if (collection) {
            nav.push({
                label: (0, _getTranslation.getTranslation)(pluralLabel, i18n),
                url: `${admin}/collections/${slug}`
            });
            if (isEditing) {
                nav.push({
                    label: useAsTitle && useAsTitle !== 'id' && title || `${id}`,
                    url: `${admin}/collections/${slug}/${id}`
                });
            } else {
                nav.push({
                    label: t('createNew')
                });
            }
        } else if (global) {
            nav.push({
                label: title,
                url: `${admin}/globals/${slug}`
            });
        }
        if (view) {
            nav.push({
                label: view
            });
        }
        if (drawerDepth <= 1) setStepNav(nav);
    }, [
        setStepNav,
        isEditing,
        pluralLabel,
        id,
        slug,
        useAsTitle,
        admin,
        t,
        i18n,
        title,
        global,
        collection,
        view,
        drawerDepth
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvU2V0U3RlcE5hdi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZXhwb3J0cy90eXBlcydcbmltcG9ydCB0eXBlIHsgU3RlcE5hdkl0ZW0gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TdGVwTmF2L3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VUaXRsZSdcbmltcG9ydCB7IHVzZVN0ZXBOYXYgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TdGVwTmF2J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnXG5cbmV4cG9ydCBjb25zdCBTZXRTdGVwTmF2OiBSZWFjdC5GQzxcbiAgfCB7XG4gICAgICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gICAgICBpZDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICBpc0VkaXRpbmc6IGJvb2xlYW5cbiAgICAgIHZpZXc/OiBzdHJpbmdcbiAgICB9XG4gIHwge1xuICAgICAgZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgICAgIHZpZXc/OiBzdHJpbmdcbiAgICB9XG4+ID0gKHByb3BzKSA9PiB7XG4gIGxldCBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgdW5kZWZpbmVkXG4gIGxldCBnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZyB8IHVuZGVmaW5lZFxuXG4gIGxldCB1c2VBc1RpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IHBsdXJhbExhYmVsOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnWydsYWJlbHMnXVsncGx1cmFsJ11cbiAgbGV0IHNsdWc6IHN0cmluZ1xuICBsZXQgaXNFZGl0aW5nID0gZmFsc2VcbiAgbGV0IGlkOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY29uc3Qgdmlldzogc3RyaW5nIHwgdW5kZWZpbmVkID0gcHJvcHM/LnZpZXcgfHwgdW5kZWZpbmVkXG5cbiAgaWYgKCdjb2xsZWN0aW9uJyBpbiBwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkOiBpZEZyb21Qcm9wcyxcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Gcm9tUHJvcHMsXG4gICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZ0Zyb21Qcm9wcyxcbiAgICB9ID0gcHJvcHNcblxuICAgIGlmIChjb2xsZWN0aW9uRnJvbVByb3BzKSB7XG4gICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbkZyb21Qcm9wc1xuICAgICAgdXNlQXNUaXRsZSA9IGNvbGxlY3Rpb24uYWRtaW4udXNlQXNUaXRsZVxuICAgICAgcGx1cmFsTGFiZWwgPSBjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWxcbiAgICAgIHNsdWcgPSBjb2xsZWN0aW9uLnNsdWdcbiAgICAgIGlzRWRpdGluZyA9IGlzRWRpdGluZ0Zyb21Qcm9wc1xuICAgICAgaWQgPSBpZEZyb21Qcm9wc1xuICAgIH1cbiAgfVxuXG4gIGlmICgnZ2xvYmFsJyBpbiBwcm9wcykge1xuICAgIGNvbnN0IHsgZ2xvYmFsOiBnbG9iYWxGcm9tUHJvcHMgfSA9IHByb3BzXG4gICAgaWYgKGdsb2JhbEZyb21Qcm9wcykge1xuICAgICAgZ2xvYmFsID0gZ2xvYmFsRnJvbVByb3BzXG4gICAgICBzbHVnID0gZ2xvYmFsRnJvbVByb3BzPy5zbHVnXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGl0bGUgPSB1c2VUaXRsZSh7IGNvbGxlY3Rpb24sIGdsb2JhbCB9KVxuXG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpXG5cbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhZG1pbiB9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICBjb25zdCBkcmF3ZXJEZXB0aCA9IHVzZUVkaXREZXB0aCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuYXY6IFN0ZXBOYXZJdGVtW10gPSBbXVxuXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIG5hdi5wdXNoKHtcbiAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHBsdXJhbExhYmVsLCBpMThuKSxcbiAgICAgICAgdXJsOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtzbHVnfWAsXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXNFZGl0aW5nKSB7XG4gICAgICAgIG5hdi5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogKHVzZUFzVGl0bGUgJiYgdXNlQXNUaXRsZSAhPT0gJ2lkJyAmJiB0aXRsZSkgfHwgYCR7aWR9YCxcbiAgICAgICAgICB1cmw6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9LyR7aWR9YCxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogdCgnY3JlYXRlTmV3JyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChnbG9iYWwpIHtcbiAgICAgIG5hdi5wdXNoKHtcbiAgICAgICAgbGFiZWw6IHRpdGxlLFxuICAgICAgICB1cmw6IGAke2FkbWlufS9nbG9iYWxzLyR7c2x1Z31gLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodmlldykge1xuICAgICAgbmF2LnB1c2goe1xuICAgICAgICBsYWJlbDogdmlldyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGRyYXdlckRlcHRoIDw9IDEpIHNldFN0ZXBOYXYobmF2KVxuICB9LCBbXG4gICAgc2V0U3RlcE5hdixcbiAgICBpc0VkaXRpbmcsXG4gICAgcGx1cmFsTGFiZWwsXG4gICAgaWQsXG4gICAgc2x1ZyxcbiAgICB1c2VBc1RpdGxlLFxuICAgIGFkbWluLFxuICAgIHQsXG4gICAgaTE4bixcbiAgICB0aXRsZSxcbiAgICBnbG9iYWwsXG4gICAgY29sbGVjdGlvbixcbiAgICB2aWV3LFxuICAgIGRyYXdlckRlcHRoLFxuICBdKVxuXG4gIHJldHVybiBudWxsXG59XG4iXSwibmFtZXMiOlsiU2V0U3RlcE5hdiIsInByb3BzIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsInVzZUFzVGl0bGUiLCJwbHVyYWxMYWJlbCIsInNsdWciLCJpc0VkaXRpbmciLCJpZCIsInZpZXciLCJ1bmRlZmluZWQiLCJpZEZyb21Qcm9wcyIsImNvbGxlY3Rpb25Gcm9tUHJvcHMiLCJpc0VkaXRpbmdGcm9tUHJvcHMiLCJhZG1pbiIsImxhYmVscyIsInBsdXJhbCIsImdsb2JhbEZyb21Qcm9wcyIsInRpdGxlIiwidXNlVGl0bGUiLCJzZXRTdGVwTmF2IiwidXNlU3RlcE5hdiIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJyb3V0ZXMiLCJ1c2VDb25maWciLCJkcmF3ZXJEZXB0aCIsInVzZUVkaXREZXB0aCIsInVzZUVmZmVjdCIsIm5hdiIsInB1c2giLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwidXJsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7Ozt1QkFiYTs4QkFDSztnQ0FNQTtpRUFDVjt5QkFDTTt3QkFDRDsyQkFDRzs7Ozs7O0FBRXRCLE1BQU1BLGFBV1QsQ0FBQ0M7SUFDSCxJQUFJQztJQUNKLElBQUlDO0lBRUosSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUMsWUFBWTtJQUNoQixJQUFJQztJQUNKLE1BQU1DLE9BQTJCUixPQUFPUSxRQUFRQztJQUVoRCxJQUFJLGdCQUFnQlQsT0FBTztRQUN6QixNQUFNLEVBQ0pPLElBQUlHLFdBQVcsRUFDZlQsWUFBWVUsbUJBQW1CLEVBQy9CTCxXQUFXTSxrQkFBa0IsRUFDOUIsR0FBR1o7UUFFSixJQUFJVyxxQkFBcUI7WUFDdkJWLGFBQWFVO1lBQ2JSLGFBQWFGLFdBQVdZLEtBQUssQ0FBQ1YsVUFBVTtZQUN4Q0MsY0FBY0gsV0FBV2EsTUFBTSxDQUFDQyxNQUFNO1lBQ3RDVixPQUFPSixXQUFXSSxJQUFJO1lBQ3RCQyxZQUFZTTtZQUNaTCxLQUFLRztRQUNQO0lBQ0Y7SUFFQSxJQUFJLFlBQVlWLE9BQU87UUFDckIsTUFBTSxFQUFFRSxRQUFRYyxlQUFlLEVBQUUsR0FBR2hCO1FBQ3BDLElBQUlnQixpQkFBaUI7WUFDbkJkLFNBQVNjO1lBQ1RYLE9BQU9XLGlCQUFpQlg7UUFDMUI7SUFDRjtJQUVBLE1BQU1ZLFFBQVFDLElBQUFBLGlCQUFRLEVBQUM7UUFBRWpCO1FBQVlDO0lBQU87SUFFNUMsTUFBTSxFQUFFaUIsVUFBVSxFQUFFLEdBQUdDLElBQUFBLG1CQUFVO0lBRWpDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUVuQyxNQUFNLEVBQ0pDLFFBQVEsRUFBRVgsS0FBSyxFQUFFLEVBQ2xCLEdBQUdZLElBQUFBLGlCQUFTO0lBRWIsTUFBTUMsY0FBY0MsSUFBQUEsdUJBQVk7SUFFaENDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixNQUFNQyxNQUFxQixFQUFFO1FBRTdCLElBQUk1QixZQUFZO1lBQ2Q0QixJQUFJQyxJQUFJLENBQUM7Z0JBQ1BDLE9BQU9DLElBQUFBLDhCQUFjLEVBQUM1QixhQUFhaUI7Z0JBQ25DWSxLQUFLLENBQUMsRUFBRXBCLE1BQU0sYUFBYSxFQUFFUixLQUFLLENBQUM7WUFDckM7WUFFQSxJQUFJQyxXQUFXO2dCQUNidUIsSUFBSUMsSUFBSSxDQUFDO29CQUNQQyxPQUFPLEFBQUM1QixjQUFjQSxlQUFlLFFBQVFjLFNBQVUsQ0FBQyxFQUFFVixHQUFHLENBQUM7b0JBQzlEMEIsS0FBSyxDQUFDLEVBQUVwQixNQUFNLGFBQWEsRUFBRVIsS0FBSyxDQUFDLEVBQUVFLEdBQUcsQ0FBQztnQkFDM0M7WUFDRixPQUFPO2dCQUNMc0IsSUFBSUMsSUFBSSxDQUFDO29CQUNQQyxPQUFPVCxFQUFFO2dCQUNYO1lBQ0Y7UUFDRixPQUFPLElBQUlwQixRQUFRO1lBQ2pCMkIsSUFBSUMsSUFBSSxDQUFDO2dCQUNQQyxPQUFPZDtnQkFDUGdCLEtBQUssQ0FBQyxFQUFFcEIsTUFBTSxTQUFTLEVBQUVSLEtBQUssQ0FBQztZQUNqQztRQUNGO1FBRUEsSUFBSUcsTUFBTTtZQUNScUIsSUFBSUMsSUFBSSxDQUFDO2dCQUNQQyxPQUFPdkI7WUFDVDtRQUNGO1FBRUEsSUFBSWtCLGVBQWUsR0FBR1AsV0FBV1U7SUFDbkMsR0FBRztRQUNEVjtRQUNBYjtRQUNBRjtRQUNBRztRQUNBRjtRQUNBRjtRQUNBVTtRQUNBUztRQUNBRDtRQUNBSjtRQUNBZjtRQUNBRDtRQUNBTztRQUNBa0I7S0FDRDtJQUVELE9BQU87QUFDVCJ9