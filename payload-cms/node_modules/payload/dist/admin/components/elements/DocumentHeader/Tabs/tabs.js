"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "tabs", {
    enumerable: true,
    get: function() {
        return tabs;
    }
});
const tabs = {
    API: {
        condition: ({ collection, global })=>collection && !collection?.admin?.hideAPIURL || global && !global?.admin?.hideAPIURL,
        href: '/api',
        label: 'API',
        order: 1000
    },
    Default: {
        href: '',
        isActive: ({ href, location })=>location.pathname === href || location.pathname === `${href}/create`,
        label: ({ t })=>t('edit'),
        order: 0
    },
    LivePreview: {
        condition: ({ collection, config, global })=>{
            if (collection) {
                return Boolean(config?.admin?.livePreview?.collections?.includes(collection.slug) || collection?.admin?.livePreview);
            }
            if (global) {
                return Boolean(config?.admin?.livePreview?.globals?.includes(global.slug) || global?.admin?.livePreview);
            }
            return false;
        },
        href: ({ match })=>`${match.url}/preview`,
        isActive: ({ href, location })=>location.pathname === href,
        label: ({ t })=>t('livePreview'),
        order: 100
    },
    References: {
        condition: ()=>false
    },
    Relationships: {
        condition: ()=>false
    },
    Version: {
        condition: ()=>false
    },
    Versions: {
        condition: ({ collection, global })=>Boolean(collection?.versions || global?.versions),
        href: '/versions',
        label: ({ t })=>t('version:versions'),
        order: 200,
        pillLabel: ({ versions })=>typeof versions?.totalDocs === 'number' && versions?.totalDocs > 0 ? versions?.totalDocs.toString() : ''
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyL1RhYnMvdGFicy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IGNvbGxlY3Rpb25WaWV3VHlwZSB9IGZyb20gJy4uLy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvUm91dGVzL0N1c3RvbUNvbXBvbmVudCdcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnRUYWJDb25maWcgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgdGFiczogUmVjb3JkPFxuICBjb2xsZWN0aW9uVmlld1R5cGUsXG4gIERvY3VtZW50VGFiQ29uZmlnICYge1xuICAgIG9yZGVyPzogbnVtYmVyIC8vIFRPRE86IGV4cG9zZSB0aGlzIHRvIHRoZSBnbG9iYWwgY29uZmlnXG4gIH1cbj4gPSB7XG4gIEFQSToge1xuICAgIGNvbmRpdGlvbjogKHsgY29sbGVjdGlvbiwgZ2xvYmFsIH0pID0+XG4gICAgICAoY29sbGVjdGlvbiAmJiAhY29sbGVjdGlvbj8uYWRtaW4/LmhpZGVBUElVUkwpIHx8IChnbG9iYWwgJiYgIWdsb2JhbD8uYWRtaW4/LmhpZGVBUElVUkwpLFxuICAgIGhyZWY6ICcvYXBpJyxcbiAgICBsYWJlbDogJ0FQSScsXG4gICAgb3JkZXI6IDEwMDAsXG4gIH0sXG4gIERlZmF1bHQ6IHtcbiAgICBocmVmOiAnJyxcbiAgICBpc0FjdGl2ZTogKHsgaHJlZiwgbG9jYXRpb24gfSkgPT5cbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID09PSBocmVmIHx8IGxvY2F0aW9uLnBhdGhuYW1lID09PSBgJHtocmVmfS9jcmVhdGVgLFxuICAgIGxhYmVsOiAoeyB0IH0pID0+IHQoJ2VkaXQnKSxcbiAgICBvcmRlcjogMCxcbiAgfSxcbiAgTGl2ZVByZXZpZXc6IHtcbiAgICBjb25kaXRpb246ICh7IGNvbGxlY3Rpb24sIGNvbmZpZywgZ2xvYmFsIH0pID0+IHtcbiAgICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICAgIGNvbmZpZz8uYWRtaW4/LmxpdmVQcmV2aWV3Py5jb2xsZWN0aW9ucz8uaW5jbHVkZXMoY29sbGVjdGlvbi5zbHVnKSB8fFxuICAgICAgICAgICAgY29sbGVjdGlvbj8uYWRtaW4/LmxpdmVQcmV2aWV3LFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgICAgY29uZmlnPy5hZG1pbj8ubGl2ZVByZXZpZXc/Lmdsb2JhbHM/LmluY2x1ZGVzKGdsb2JhbC5zbHVnKSB8fCBnbG9iYWw/LmFkbWluPy5saXZlUHJldmlldyxcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuICAgIGhyZWY6ICh7IG1hdGNoIH0pID0+IGAke21hdGNoLnVybH0vcHJldmlld2AsXG4gICAgaXNBY3RpdmU6ICh7IGhyZWYsIGxvY2F0aW9uIH0pID0+IGxvY2F0aW9uLnBhdGhuYW1lID09PSBocmVmLFxuICAgIGxhYmVsOiAoeyB0IH0pID0+IHQoJ2xpdmVQcmV2aWV3JyksXG4gICAgb3JkZXI6IDEwMCxcbiAgfSxcbiAgUmVmZXJlbmNlczoge1xuICAgIGNvbmRpdGlvbjogKCkgPT4gZmFsc2UsXG4gIH0sXG4gIFJlbGF0aW9uc2hpcHM6IHtcbiAgICBjb25kaXRpb246ICgpID0+IGZhbHNlLFxuICB9LFxuICBWZXJzaW9uOiB7XG4gICAgY29uZGl0aW9uOiAoKSA9PiBmYWxzZSxcbiAgfSxcbiAgVmVyc2lvbnM6IHtcbiAgICBjb25kaXRpb246ICh7IGNvbGxlY3Rpb24sIGdsb2JhbCB9KSA9PiBCb29sZWFuKGNvbGxlY3Rpb24/LnZlcnNpb25zIHx8IGdsb2JhbD8udmVyc2lvbnMpLFxuICAgIGhyZWY6ICcvdmVyc2lvbnMnLFxuICAgIGxhYmVsOiAoeyB0IH0pID0+IHQoJ3ZlcnNpb246dmVyc2lvbnMnKSxcbiAgICBvcmRlcjogMjAwLFxuICAgIHBpbGxMYWJlbDogKHsgdmVyc2lvbnMgfSkgPT5cbiAgICAgIHR5cGVvZiB2ZXJzaW9ucz8udG90YWxEb2NzID09PSAnbnVtYmVyJyAmJiB2ZXJzaW9ucz8udG90YWxEb2NzID4gMFxuICAgICAgICA/IHZlcnNpb25zPy50b3RhbERvY3MudG9TdHJpbmcoKVxuICAgICAgICA6ICcnLFxuICB9LFxufVxuIl0sIm5hbWVzIjpbInRhYnMiLCJBUEkiLCJjb25kaXRpb24iLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiYWRtaW4iLCJoaWRlQVBJVVJMIiwiaHJlZiIsImxhYmVsIiwib3JkZXIiLCJEZWZhdWx0IiwiaXNBY3RpdmUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidCIsIkxpdmVQcmV2aWV3IiwiY29uZmlnIiwiQm9vbGVhbiIsImxpdmVQcmV2aWV3IiwiY29sbGVjdGlvbnMiLCJpbmNsdWRlcyIsInNsdWciLCJnbG9iYWxzIiwibWF0Y2giLCJ1cmwiLCJSZWZlcmVuY2VzIiwiUmVsYXRpb25zaGlwcyIsIlZlcnNpb24iLCJWZXJzaW9ucyIsInZlcnNpb25zIiwicGlsbExhYmVsIiwidG90YWxEb2NzIiwidG9TdHJpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUdhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxPQUtUO0lBQ0ZDLEtBQUs7UUFDSEMsV0FBVyxDQUFDLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFLEdBQ2hDLEFBQUNELGNBQWMsQ0FBQ0EsWUFBWUUsT0FBT0MsY0FBZ0JGLFVBQVUsQ0FBQ0EsUUFBUUMsT0FBT0M7UUFDL0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQUMsU0FBUztRQUNQSCxNQUFNO1FBQ05JLFVBQVUsQ0FBQyxFQUFFSixJQUFJLEVBQUVLLFFBQVEsRUFBRSxHQUMzQkEsU0FBU0MsUUFBUSxLQUFLTixRQUFRSyxTQUFTQyxRQUFRLEtBQUssQ0FBQyxFQUFFTixLQUFLLE9BQU8sQ0FBQztRQUN0RUMsT0FBTyxDQUFDLEVBQUVNLENBQUMsRUFBRSxHQUFLQSxFQUFFO1FBQ3BCTCxPQUFPO0lBQ1Q7SUFDQU0sYUFBYTtRQUNYYixXQUFXLENBQUMsRUFBRUMsVUFBVSxFQUFFYSxNQUFNLEVBQUVaLE1BQU0sRUFBRTtZQUN4QyxJQUFJRCxZQUFZO2dCQUNkLE9BQU9jLFFBQ0xELFFBQVFYLE9BQU9hLGFBQWFDLGFBQWFDLFNBQVNqQixXQUFXa0IsSUFBSSxLQUMvRGxCLFlBQVlFLE9BQU9hO1lBRXpCO1lBRUEsSUFBSWQsUUFBUTtnQkFDVixPQUFPYSxRQUNMRCxRQUFRWCxPQUFPYSxhQUFhSSxTQUFTRixTQUFTaEIsT0FBT2lCLElBQUksS0FBS2pCLFFBQVFDLE9BQU9hO1lBRWpGO1lBRUEsT0FBTztRQUNUO1FBQ0FYLE1BQU0sQ0FBQyxFQUFFZ0IsS0FBSyxFQUFFLEdBQUssQ0FBQyxFQUFFQSxNQUFNQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzNDYixVQUFVLENBQUMsRUFBRUosSUFBSSxFQUFFSyxRQUFRLEVBQUUsR0FBS0EsU0FBU0MsUUFBUSxLQUFLTjtRQUN4REMsT0FBTyxDQUFDLEVBQUVNLENBQUMsRUFBRSxHQUFLQSxFQUFFO1FBQ3BCTCxPQUFPO0lBQ1Q7SUFDQWdCLFlBQVk7UUFDVnZCLFdBQVcsSUFBTTtJQUNuQjtJQUNBd0IsZUFBZTtRQUNieEIsV0FBVyxJQUFNO0lBQ25CO0lBQ0F5QixTQUFTO1FBQ1B6QixXQUFXLElBQU07SUFDbkI7SUFDQTBCLFVBQVU7UUFDUjFCLFdBQVcsQ0FBQyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRSxHQUFLYSxRQUFRZCxZQUFZMEIsWUFBWXpCLFFBQVF5QjtRQUMvRXRCLE1BQU07UUFDTkMsT0FBTyxDQUFDLEVBQUVNLENBQUMsRUFBRSxHQUFLQSxFQUFFO1FBQ3BCTCxPQUFPO1FBQ1BxQixXQUFXLENBQUMsRUFBRUQsUUFBUSxFQUFFLEdBQ3RCLE9BQU9BLFVBQVVFLGNBQWMsWUFBWUYsVUFBVUUsWUFBWSxJQUM3REYsVUFBVUUsVUFBVUMsYUFDcEI7SUFDUjtBQUNGIn0=