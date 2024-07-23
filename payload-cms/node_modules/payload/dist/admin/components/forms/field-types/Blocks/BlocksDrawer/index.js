"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlocksDrawer", {
    enumerable: true,
    get: function() {
        return BlocksDrawer;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _getTranslation = require("../../../../../../utilities/getTranslation");
const _Drawer = require("../../../../elements/Drawer");
const _ThumbnailCard = require("../../../../elements/ThumbnailCard");
const _DefaultBlockImage = /*#__PURE__*/ _interop_require_default(require("../../../../graphics/DefaultBlockImage"));
const _BlockSearch = /*#__PURE__*/ _interop_require_default(require("./BlockSearch"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const baseClass = 'blocks-drawer';
const getBlockLabel = (block, i18n)=>{
    if (typeof block.labels.singular === 'string') return block.labels.singular.toLowerCase();
    if (typeof block.labels.singular === 'object') {
        return (0, _getTranslation.getTranslation)(block.labels.singular, i18n).toLowerCase();
    }
    return '';
};
const BlocksDrawer = (props)=>{
    const { addRow, addRowIndex, blocks, drawerSlug, labels } = props;
    const [searchTerm, setSearchTerm] = (0, _react.useState)('');
    const [filteredBlocks, setFilteredBlocks] = (0, _react.useState)(blocks);
    const { closeModal, isModalOpen } = (0, _modal.useModal)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('fields');
    (0, _react.useEffect)(()=>{
        if (!isModalOpen) {
            setSearchTerm('');
        }
    }, [
        isModalOpen
    ]);
    (0, _react.useEffect)(()=>{
        const searchTermToUse = searchTerm.toLowerCase();
        const matchingBlocks = blocks.reduce((matchedBlocks, block)=>{
            const blockLabel = getBlockLabel(block, i18n);
            if (blockLabel.includes(searchTermToUse)) matchedBlocks.push(block);
            return matchedBlocks;
        }, []);
        setFilteredBlocks(matchingBlocks);
    }, [
        searchTerm,
        blocks,
        i18n
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        slug: drawerSlug,
        title: t('addLabel', {
            label: (0, _getTranslation.getTranslation)(labels.singular, i18n)
        })
    }, /*#__PURE__*/ _react.default.createElement(_BlockSearch.default, {
        setSearchTerm: setSearchTerm
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__blocks-wrapper`
    }, /*#__PURE__*/ _react.default.createElement("ul", {
        className: `${baseClass}__blocks`
    }, filteredBlocks?.map((block, index)=>{
        const { imageAltText, imageURL, labels: blockLabels, slug } = block;
        return /*#__PURE__*/ _react.default.createElement("li", {
            className: `${baseClass}__block`,
            key: index
        }, /*#__PURE__*/ _react.default.createElement(_ThumbnailCard.ThumbnailCard, {
            alignLabel: "center",
            label: (0, _getTranslation.getTranslation)(blockLabels.singular, i18n),
            onClick: ()=>{
                addRow(addRowIndex, slug);
                closeModal(drawerSlug);
            },
            thumbnail: imageURL ? /*#__PURE__*/ _react.default.createElement("img", {
                alt: imageAltText,
                src: imageURL
            }) : /*#__PURE__*/ _react.default.createElement("div", {
                className: `${baseClass}__default-image`
            }, /*#__PURE__*/ _react.default.createElement(_DefaultBlockImage.default, null))
        }));
    }))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja3NEcmF3ZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgaTE4biB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBCbG9jayB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nXG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXInXG5pbXBvcnQgeyBUaHVtYm5haWxDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvVGh1bWJuYWlsQ2FyZCdcbmltcG9ydCBEZWZhdWx0QmxvY2tJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaGljcy9EZWZhdWx0QmxvY2tJbWFnZSdcbmltcG9ydCBCbG9ja1NlYXJjaCBmcm9tICcuL0Jsb2NrU2VhcmNoJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9ja3MtZHJhd2VyJ1xuXG5jb25zdCBnZXRCbG9ja0xhYmVsID0gKGJsb2NrOiBCbG9jaywgaTE4bjogaTE4bikgPT4ge1xuICBpZiAodHlwZW9mIGJsb2NrLmxhYmVscy5zaW5ndWxhciA9PT0gJ3N0cmluZycpIHJldHVybiBibG9jay5sYWJlbHMuc2luZ3VsYXIudG9Mb3dlckNhc2UoKVxuICBpZiAodHlwZW9mIGJsb2NrLmxhYmVscy5zaW5ndWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZ2V0VHJhbnNsYXRpb24oYmxvY2subGFiZWxzLnNpbmd1bGFyLCBpMThuKS50b0xvd2VyQ2FzZSgpXG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbmV4cG9ydCBjb25zdCBCbG9ja3NEcmF3ZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFkZFJvdywgYWRkUm93SW5kZXgsIGJsb2NrcywgZHJhd2VyU2x1ZywgbGFiZWxzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmlsdGVyZWRCbG9ja3MsIHNldEZpbHRlcmVkQmxvY2tzXSA9IHVzZVN0YXRlKGJsb2NrcylcbiAgY29uc3QgeyBjbG9zZU1vZGFsLCBpc01vZGFsT3BlbiB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc01vZGFsT3Blbikge1xuICAgICAgc2V0U2VhcmNoVGVybSgnJylcbiAgICB9XG4gIH0sIFtpc01vZGFsT3Blbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXJtVG9Vc2UgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKClcblxuICAgIGNvbnN0IG1hdGNoaW5nQmxvY2tzID0gYmxvY2tzLnJlZHVjZSgobWF0Y2hlZEJsb2NrcywgYmxvY2spID0+IHtcbiAgICAgIGNvbnN0IGJsb2NrTGFiZWwgPSBnZXRCbG9ja0xhYmVsKGJsb2NrLCBpMThuKVxuICAgICAgaWYgKGJsb2NrTGFiZWwuaW5jbHVkZXMoc2VhcmNoVGVybVRvVXNlKSkgbWF0Y2hlZEJsb2Nrcy5wdXNoKGJsb2NrKVxuICAgICAgcmV0dXJuIG1hdGNoZWRCbG9ja3NcbiAgICB9LCBbXSlcblxuICAgIHNldEZpbHRlcmVkQmxvY2tzKG1hdGNoaW5nQmxvY2tzKVxuICB9LCBbc2VhcmNoVGVybSwgYmxvY2tzLCBpMThuXSlcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICB0aXRsZT17dCgnYWRkTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihsYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgID5cbiAgICAgIDxCbG9ja1NlYXJjaCBzZXRTZWFyY2hUZXJtPXtzZXRTZWFyY2hUZXJtfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2Nrcy13cmFwcGVyYH0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2Nrc2B9PlxuICAgICAgICAgIHtmaWx0ZXJlZEJsb2Nrcz8ubWFwKChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW1hZ2VBbHRUZXh0LCBpbWFnZVVSTCwgbGFiZWxzOiBibG9ja0xhYmVscywgc2x1ZyB9ID0gYmxvY2tcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2tgfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8VGh1bWJuYWlsQ2FyZFxuICAgICAgICAgICAgICAgICAgYWxpZ25MYWJlbD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD17Z2V0VHJhbnNsYXRpb24oYmxvY2tMYWJlbHMuc2luZ3VsYXIsIGkxOG4pfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhZGRSb3coYWRkUm93SW5kZXgsIHNsdWcpXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoZHJhd2VyU2x1ZylcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aHVtYm5haWw9e1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVVSTCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17aW1hZ2VBbHRUZXh0fSBzcmM9e2ltYWdlVVJMfSAvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kZWZhdWx0LWltYWdlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdEJsb2NrSW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RyYXdlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJsb2Nrc0RyYXdlciIsImJhc2VDbGFzcyIsImdldEJsb2NrTGFiZWwiLCJibG9jayIsImkxOG4iLCJsYWJlbHMiLCJzaW5ndWxhciIsInRvTG93ZXJDYXNlIiwiZ2V0VHJhbnNsYXRpb24iLCJwcm9wcyIsImFkZFJvdyIsImFkZFJvd0luZGV4IiwiYmxvY2tzIiwiZHJhd2VyU2x1ZyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwidXNlU3RhdGUiLCJmaWx0ZXJlZEJsb2NrcyIsInNldEZpbHRlcmVkQmxvY2tzIiwiY2xvc2VNb2RhbCIsImlzTW9kYWxPcGVuIiwidXNlTW9kYWwiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VFZmZlY3QiLCJzZWFyY2hUZXJtVG9Vc2UiLCJtYXRjaGluZ0Jsb2NrcyIsInJlZHVjZSIsIm1hdGNoZWRCbG9ja3MiLCJibG9ja0xhYmVsIiwiaW5jbHVkZXMiLCJwdXNoIiwiRHJhd2VyIiwic2x1ZyIsInRpdGxlIiwibGFiZWwiLCJCbG9ja1NlYXJjaCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaW5kZXgiLCJpbWFnZUFsdFRleHQiLCJpbWFnZVVSTCIsImJsb2NrTGFiZWxzIiwibGkiLCJrZXkiLCJUaHVtYm5haWxDYXJkIiwiYWxpZ25MYWJlbCIsIm9uQ2xpY2siLCJ0aHVtYm5haWwiLCJpbWciLCJhbHQiLCJzcmMiLCJEZWZhdWx0QmxvY2tJbWFnZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTBCYUE7OztlQUFBQTs7O3VCQXhCWTsrREFDa0I7OEJBQ1o7Z0NBS0E7d0JBQ1I7K0JBQ087MEVBQ0E7b0VBQ047UUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUMsWUFBWTtBQUVsQixNQUFNQyxnQkFBZ0IsQ0FBQ0MsT0FBY0M7SUFDbkMsSUFBSSxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLFFBQVEsS0FBSyxVQUFVLE9BQU9ILE1BQU1FLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxXQUFXO0lBQ3ZGLElBQUksT0FBT0osTUFBTUUsTUFBTSxDQUFDQyxRQUFRLEtBQUssVUFBVTtRQUM3QyxPQUFPRSxJQUFBQSw4QkFBYyxFQUFDTCxNQUFNRSxNQUFNLENBQUNDLFFBQVEsRUFBRUYsTUFBTUcsV0FBVztJQUNoRTtJQUNBLE9BQU87QUFDVDtBQUVPLE1BQU1QLGVBQWdDLENBQUNTO0lBQzVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFUixNQUFNLEVBQUUsR0FBR0k7SUFFNUQsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdDLElBQUFBLGVBQVEsRUFBQztJQUM3QyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdGLElBQUFBLGVBQVEsRUFBQ0o7SUFDckQsTUFBTSxFQUFFTyxVQUFVLEVBQUVDLFdBQVcsRUFBRSxHQUFHQyxJQUFBQSxlQUFRO0lBQzVDLE1BQU0sRUFBRWpCLElBQUksRUFBRWtCLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRW5DQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSSxDQUFDSixhQUFhO1lBQ2hCTCxjQUFjO1FBQ2hCO0lBQ0YsR0FBRztRQUFDSztLQUFZO0lBRWhCSSxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsTUFBTUMsa0JBQWtCWCxXQUFXUCxXQUFXO1FBRTlDLE1BQU1tQixpQkFBaUJkLE9BQU9lLE1BQU0sQ0FBQyxDQUFDQyxlQUFlekI7WUFDbkQsTUFBTTBCLGFBQWEzQixjQUFjQyxPQUFPQztZQUN4QyxJQUFJeUIsV0FBV0MsUUFBUSxDQUFDTCxrQkFBa0JHLGNBQWNHLElBQUksQ0FBQzVCO1lBQzdELE9BQU95QjtRQUNULEdBQUcsRUFBRTtRQUVMVixrQkFBa0JRO0lBQ3BCLEdBQUc7UUFBQ1o7UUFBWUY7UUFBUVI7S0FBSztJQUU3QixxQkFDRSw2QkFBQzRCLGNBQU07UUFDTEMsTUFBTXBCO1FBQ05xQixPQUFPWixFQUFFLFlBQVk7WUFBRWEsT0FBTzNCLElBQUFBLDhCQUFjLEVBQUNILE9BQU9DLFFBQVEsRUFBRUY7UUFBTTtxQkFFcEUsNkJBQUNnQyxvQkFBVztRQUFDckIsZUFBZUE7c0JBQzVCLDZCQUFDc0I7UUFBSUMsV0FBVyxDQUFDLEVBQUVyQyxVQUFVLGdCQUFnQixDQUFDO3FCQUM1Qyw2QkFBQ3NDO1FBQUdELFdBQVcsQ0FBQyxFQUFFckMsVUFBVSxRQUFRLENBQUM7T0FDbENnQixnQkFBZ0J1QixJQUFJLENBQUNyQyxPQUFPc0M7UUFDM0IsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRXRDLFFBQVF1QyxXQUFXLEVBQUVYLElBQUksRUFBRSxHQUFHOUI7UUFFOUQscUJBQ0UsNkJBQUMwQztZQUFHUCxXQUFXLENBQUMsRUFBRXJDLFVBQVUsT0FBTyxDQUFDO1lBQUU2QyxLQUFLTDt5QkFDekMsNkJBQUNNLDRCQUFhO1lBQ1pDLFlBQVc7WUFDWGIsT0FBTzNCLElBQUFBLDhCQUFjLEVBQUNvQyxZQUFZdEMsUUFBUSxFQUFFRjtZQUM1QzZDLFNBQVM7Z0JBQ1B2QyxPQUFPQyxhQUFhc0I7Z0JBQ3BCZCxXQUFXTjtZQUNiO1lBQ0FxQyxXQUNFUCx5QkFDRSw2QkFBQ1E7Z0JBQUlDLEtBQUtWO2dCQUFjVyxLQUFLVjsrQkFFN0IsNkJBQUNOO2dCQUFJQyxXQUFXLENBQUMsRUFBRXJDLFVBQVUsZUFBZSxDQUFDOzZCQUMzQyw2QkFBQ3FELDBCQUFpQjs7SUFPaEM7QUFLViJ9