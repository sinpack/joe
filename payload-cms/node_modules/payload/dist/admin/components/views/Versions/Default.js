"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DefaultVersionsView", {
    enumerable: true,
    get: function() {
        return DefaultVersionsView;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _Gutter = require("../../elements/Gutter");
const _Loading = require("../../elements/Loading");
const _Paginator = /*#__PURE__*/ _interop_require_default(require("../../elements/Paginator"));
const _PerPage = /*#__PURE__*/ _interop_require_default(require("../../elements/PerPage"));
const _Table = require("../../elements/Table");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
const _SearchParams = require("../../utilities/SearchParams");
const _SetStepNav = require("../collections/Edit/SetStepNav");
const _columns = require("./columns");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'versions';
const DefaultVersionsView = (props)=>{
    const { id, collection, data, entityLabel, global, isLoadingVersions, latestDraftVersion, latestPublishedVersion, versionsData } = props;
    const { t } = (0, _reacti18next.useTranslation)('version');
    const { limit } = (0, _SearchParams.useSearchParams)();
    const useAsTitle = collection?.admin?.useAsTitle || 'id';
    let metaDesc;
    let metaTitle;
    if (collection) {
        metaTitle = `${t('versions')} - ${data[useAsTitle]} - ${entityLabel}`;
        metaDesc = t('viewingVersions', {
            documentTitle: data[useAsTitle],
            entityLabel
        });
    }
    if (global) {
        metaTitle = `${t('versions')} - ${entityLabel}`;
        metaDesc = t('viewingVersionsGlobal', {
            entityLabel
        });
    }
    const versionCount = versionsData?.totalDocs || 0;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_SetStepNav.SetStepNav, {
        collection: collection,
        global: global,
        id: id,
        isEditing: true,
        view: t('versions')
    }), /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        name: "versions",
        show: isLoadingVersions
    }), /*#__PURE__*/ _react.default.createElement("main", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: metaDesc,
        title: metaTitle
    }), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: `${baseClass}__wrap`
    }, versionCount === 0 && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__no-versions`
    }, t('noFurtherVersionsFound')), versionCount > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Table.Table, {
        columns: (0, _columns.buildVersionColumns)(collection, global, t, latestDraftVersion, latestPublishedVersion),
        data: versionsData?.docs
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__page-controls`
    }, /*#__PURE__*/ _react.default.createElement(_Paginator.default, {
        hasNextPage: versionsData.hasNextPage,
        hasPrevPage: versionsData.hasPrevPage,
        limit: versionsData.limit,
        nextPage: versionsData.nextPage,
        numberOfNeighbors: 1,
        page: versionsData.page,
        prevPage: versionsData.prevPage,
        totalPages: versionsData.totalPages
    }), versionsData?.totalDocs > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__page-info`
    }, versionsData.page * versionsData.limit - (versionsData.limit - 1), "-", versionsData.totalPages > 1 && versionsData.totalPages !== versionsData.page ? versionsData.limit * versionsData.page : versionsData.totalDocs, ' ', t('of'), " ", versionsData.totalDocs), /*#__PURE__*/ _react.default.createElement(_PerPage.default, {
        limit: limit ? Number(limit) : 10,
        limits: collection?.admin?.pagination?.limits
    })))))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL0RlZmF1bHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0d1dHRlcidcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZydcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJ1xuaW1wb3J0IFBlclBhZ2UgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGVyUGFnZSdcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvVGFibGUnXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSdcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnXG5pbXBvcnQgeyBTZXRTdGVwTmF2IH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvRWRpdC9TZXRTdGVwTmF2J1xuaW1wb3J0IHsgYnVpbGRWZXJzaW9uQ29sdW1ucyB9IGZyb20gJy4vY29sdW1ucydcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmVyc2lvbnMnXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0VmVyc2lvbnNWaWV3OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgZGF0YSxcbiAgICBlbnRpdHlMYWJlbCxcbiAgICBnbG9iYWwsXG4gICAgaXNMb2FkaW5nVmVyc2lvbnMsXG4gICAgbGF0ZXN0RHJhZnRWZXJzaW9uLFxuICAgIGxhdGVzdFB1Ymxpc2hlZFZlcnNpb24sXG4gICAgdmVyc2lvbnNEYXRhLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJylcblxuICBjb25zdCB7IGxpbWl0IH0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuXG4gIGNvbnN0IHVzZUFzVGl0bGUgPSBjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnXG5cbiAgbGV0IG1ldGFEZXNjOiBzdHJpbmdcbiAgbGV0IG1ldGFUaXRsZTogc3RyaW5nXG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICBtZXRhVGl0bGUgPSBgJHt0KCd2ZXJzaW9ucycpfSAtICR7ZGF0YVt1c2VBc1RpdGxlXX0gLSAke2VudGl0eUxhYmVsfWBcbiAgICBtZXRhRGVzYyA9IHQoJ3ZpZXdpbmdWZXJzaW9ucycsIHsgZG9jdW1lbnRUaXRsZTogZGF0YVt1c2VBc1RpdGxlXSwgZW50aXR5TGFiZWwgfSlcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICBtZXRhVGl0bGUgPSBgJHt0KCd2ZXJzaW9ucycpfSAtICR7ZW50aXR5TGFiZWx9YFxuICAgIG1ldGFEZXNjID0gdCgndmlld2luZ1ZlcnNpb25zR2xvYmFsJywgeyBlbnRpdHlMYWJlbCB9KVxuICB9XG5cbiAgY29uc3QgdmVyc2lvbkNvdW50ID0gdmVyc2lvbnNEYXRhPy50b3RhbERvY3MgfHwgMFxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNldFN0ZXBOYXYgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gZ2xvYmFsPXtnbG9iYWx9IGlkPXtpZH0gaXNFZGl0aW5nIHZpZXc9e3QoJ3ZlcnNpb25zJyl9IC8+XG4gICAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGUgbmFtZT1cInZlcnNpb25zXCIgc2hvdz17aXNMb2FkaW5nVmVyc2lvbnN9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgIDxNZXRhIGRlc2NyaXB0aW9uPXttZXRhRGVzY30gdGl0bGU9e21ldGFUaXRsZX0gLz5cbiAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICB7dmVyc2lvbkNvdW50ID09PSAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19uby12ZXJzaW9uc2B9Pnt0KCdub0Z1cnRoZXJWZXJzaW9uc0ZvdW5kJyl9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dmVyc2lvbkNvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdmVyc2lvbi1jb3VudGB9PlxuICAgICAgICAgICAgICAgIHt0KHZlcnNpb25Db3VudCA9PT0gMSA/ICd2ZXJzaW9uQ291bnRfb25lJyA6ICd2ZXJzaW9uQ291bnRfbWFueScsIHtcbiAgICAgICAgICAgICAgICAgIGNvdW50OiB2ZXJzaW9uQ291bnQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgY29sdW1ucz17YnVpbGRWZXJzaW9uQ29sdW1ucyhcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBnbG9iYWwsXG4gICAgICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICAgICAgbGF0ZXN0RHJhZnRWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgbGF0ZXN0UHVibGlzaGVkVmVyc2lvbixcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGRhdGE9e3ZlcnNpb25zRGF0YT8uZG9jc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3BhZ2UtY29udHJvbHNgfT5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZT17dmVyc2lvbnNEYXRhLmhhc05leHRQYWdlfVxuICAgICAgICAgICAgICAgICAgaGFzUHJldlBhZ2U9e3ZlcnNpb25zRGF0YS5oYXNQcmV2UGFnZX1cbiAgICAgICAgICAgICAgICAgIGxpbWl0PXt2ZXJzaW9uc0RhdGEubGltaXR9XG4gICAgICAgICAgICAgICAgICBuZXh0UGFnZT17dmVyc2lvbnNEYXRhLm5leHRQYWdlfVxuICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZOZWlnaGJvcnM9ezF9XG4gICAgICAgICAgICAgICAgICBwYWdlPXt2ZXJzaW9uc0RhdGEucGFnZX1cbiAgICAgICAgICAgICAgICAgIHByZXZQYWdlPXt2ZXJzaW9uc0RhdGEucHJldlBhZ2V9XG4gICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXt2ZXJzaW9uc0RhdGEudG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt2ZXJzaW9uc0RhdGE/LnRvdGFsRG9jcyA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcGFnZS1pbmZvYH0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YS5wYWdlICogdmVyc2lvbnNEYXRhLmxpbWl0IC0gKHZlcnNpb25zRGF0YS5saW1pdCAtIDEpfS1cbiAgICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbnNEYXRhLnRvdGFsUGFnZXMgPiAxICYmIHZlcnNpb25zRGF0YS50b3RhbFBhZ2VzICE9PSB2ZXJzaW9uc0RhdGEucGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2ZXJzaW9uc0RhdGEubGltaXQgKiB2ZXJzaW9uc0RhdGEucGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB2ZXJzaW9uc0RhdGEudG90YWxEb2NzfXsnICd9XG4gICAgICAgICAgICAgICAgICAgICAge3QoJ29mJyl9IHt2ZXJzaW9uc0RhdGEudG90YWxEb2NzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBlclBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdD17bGltaXQgPyBOdW1iZXIobGltaXQpIDogMTB9XG4gICAgICAgICAgICAgICAgICAgICAgbGltaXRzPXtjb2xsZWN0aW9uPy5hZG1pbj8ucGFnaW5hdGlvbj8ubGltaXRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HdXR0ZXI+XG4gICAgICA8L21haW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkRlZmF1bHRWZXJzaW9uc1ZpZXciLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImlkIiwiY29sbGVjdGlvbiIsImRhdGEiLCJlbnRpdHlMYWJlbCIsImdsb2JhbCIsImlzTG9hZGluZ1ZlcnNpb25zIiwibGF0ZXN0RHJhZnRWZXJzaW9uIiwibGF0ZXN0UHVibGlzaGVkVmVyc2lvbiIsInZlcnNpb25zRGF0YSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImxpbWl0IiwidXNlU2VhcmNoUGFyYW1zIiwidXNlQXNUaXRsZSIsImFkbWluIiwibWV0YURlc2MiLCJtZXRhVGl0bGUiLCJkb2N1bWVudFRpdGxlIiwidmVyc2lvbkNvdW50IiwidG90YWxEb2NzIiwiUmVhY3QiLCJGcmFnbWVudCIsIlNldFN0ZXBOYXYiLCJpc0VkaXRpbmciLCJ2aWV3IiwiTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJuYW1lIiwic2hvdyIsIm1haW4iLCJjbGFzc05hbWUiLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIkd1dHRlciIsImRpdiIsIlRhYmxlIiwiY29sdW1ucyIsImJ1aWxkVmVyc2lvbkNvbHVtbnMiLCJkb2NzIiwiUGFnaW5hdG9yIiwiaGFzTmV4dFBhZ2UiLCJoYXNQcmV2UGFnZSIsIm5leHRQYWdlIiwibnVtYmVyT2ZOZWlnaGJvcnMiLCJwYWdlIiwicHJldlBhZ2UiLCJ0b3RhbFBhZ2VzIiwiUGVyUGFnZSIsIk51bWJlciIsImxpbWl0cyIsInBhZ2luYXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWtCYUE7OztlQUFBQTs7OzhEQWxCSzs4QkFDYTt3QkFJUjt5QkFDYztrRUFDZjtnRUFDRjt1QkFDRTs2REFDTDs4QkFDZTs0QkFDTDt5QkFDUztRQUM3Qjs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVYLE1BQU1ELHNCQUF1QyxDQUFDRTtJQUNuRCxNQUFNLEVBQ0pDLEVBQUUsRUFDRkMsVUFBVSxFQUNWQyxJQUFJLEVBQ0pDLFdBQVcsRUFDWEMsTUFBTSxFQUNOQyxpQkFBaUIsRUFDakJDLGtCQUFrQixFQUNsQkMsc0JBQXNCLEVBQ3RCQyxZQUFZLEVBQ2IsR0FBR1Q7SUFFSixNQUFNLEVBQUVVLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLElBQUFBLDZCQUFlO0lBRWpDLE1BQU1DLGFBQWFaLFlBQVlhLE9BQU9ELGNBQWM7SUFFcEQsSUFBSUU7SUFDSixJQUFJQztJQUVKLElBQUlmLFlBQVk7UUFDZGUsWUFBWSxDQUFDLEVBQUVQLEVBQUUsWUFBWSxHQUFHLEVBQUVQLElBQUksQ0FBQ1csV0FBVyxDQUFDLEdBQUcsRUFBRVYsWUFBWSxDQUFDO1FBQ3JFWSxXQUFXTixFQUFFLG1CQUFtQjtZQUFFUSxlQUFlZixJQUFJLENBQUNXLFdBQVc7WUFBRVY7UUFBWTtJQUNqRjtJQUVBLElBQUlDLFFBQVE7UUFDVlksWUFBWSxDQUFDLEVBQUVQLEVBQUUsWUFBWSxHQUFHLEVBQUVOLFlBQVksQ0FBQztRQUMvQ1ksV0FBV04sRUFBRSx5QkFBeUI7WUFBRU47UUFBWTtJQUN0RDtJQUVBLE1BQU1lLGVBQWVWLGNBQWNXLGFBQWE7SUFFaEQscUJBQ0UsNkJBQUNDLGNBQUssQ0FBQ0MsUUFBUSxzQkFDYiw2QkFBQ0Msc0JBQVU7UUFBQ3JCLFlBQVlBO1FBQVlHLFFBQVFBO1FBQVFKLElBQUlBO1FBQUl1QixXQUFBQTtRQUFVQyxNQUFNZixFQUFFO3NCQUM5RSw2QkFBQ2dCLDZCQUFvQjtRQUFDQyxNQUFLO1FBQVdDLE1BQU10QjtzQkFDNUMsNkJBQUN1QjtRQUFLQyxXQUFXL0I7cUJBQ2YsNkJBQUNnQyxhQUFJO1FBQUNDLGFBQWFoQjtRQUFVaUIsT0FBT2hCO3NCQUNwQyw2QkFBQ2lCLGNBQU07UUFBQ0osV0FBVyxDQUFDLEVBQUUvQixVQUFVLE1BQU0sQ0FBQztPQUNwQ29CLGlCQUFpQixtQkFDaEIsNkJBQUNnQjtRQUFJTCxXQUFXLENBQUMsRUFBRS9CLFVBQVUsYUFBYSxDQUFDO09BQUdXLEVBQUUsNEJBRWpEUyxlQUFlLG1CQUNkLDZCQUFDRSxjQUFLLENBQUNDLFFBQVEsc0JBTWIsNkJBQUNjLFlBQUs7UUFDSkMsU0FBU0MsSUFBQUEsNEJBQW1CLEVBQzFCcEMsWUFDQUcsUUFDQUssR0FDQUgsb0JBQ0FDO1FBRUZMLE1BQU1NLGNBQWM4QjtzQkFFdEIsNkJBQUNKO1FBQUlMLFdBQVcsQ0FBQyxFQUFFL0IsVUFBVSxlQUFlLENBQUM7cUJBQzNDLDZCQUFDeUMsa0JBQVM7UUFDUkMsYUFBYWhDLGFBQWFnQyxXQUFXO1FBQ3JDQyxhQUFhakMsYUFBYWlDLFdBQVc7UUFDckM5QixPQUFPSCxhQUFhRyxLQUFLO1FBQ3pCK0IsVUFBVWxDLGFBQWFrQyxRQUFRO1FBQy9CQyxtQkFBbUI7UUFDbkJDLE1BQU1wQyxhQUFhb0MsSUFBSTtRQUN2QkMsVUFBVXJDLGFBQWFxQyxRQUFRO1FBQy9CQyxZQUFZdEMsYUFBYXNDLFVBQVU7UUFFcEN0QyxjQUFjVyxZQUFZLG1CQUN6Qiw2QkFBQ0MsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDYTtRQUFJTCxXQUFXLENBQUMsRUFBRS9CLFVBQVUsV0FBVyxDQUFDO09BQ3RDVSxhQUFhb0MsSUFBSSxHQUFHcEMsYUFBYUcsS0FBSyxHQUFJSCxDQUFBQSxhQUFhRyxLQUFLLEdBQUcsQ0FBQSxHQUFHLEtBQ2xFSCxhQUFhc0MsVUFBVSxHQUFHLEtBQUt0QyxhQUFhc0MsVUFBVSxLQUFLdEMsYUFBYW9DLElBQUksR0FDekVwQyxhQUFhRyxLQUFLLEdBQUdILGFBQWFvQyxJQUFJLEdBQ3RDcEMsYUFBYVcsU0FBUyxFQUFFLEtBQzNCVixFQUFFLE9BQU0sS0FBRUQsYUFBYVcsU0FBUyxpQkFFbkMsNkJBQUM0QixnQkFBTztRQUNOcEMsT0FBT0EsUUFBUXFDLE9BQU9yQyxTQUFTO1FBQy9Cc0MsUUFBUWhELFlBQVlhLE9BQU9vQyxZQUFZRDs7QUFXN0QifQ==