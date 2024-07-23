"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reactrouterdom = require("react-router-dom");
const _SearchParams = require("../../utilities/SearchParams");
const _ClickableArrow = /*#__PURE__*/ _interop_require_default(require("./ClickableArrow"));
const _Page = /*#__PURE__*/ _interop_require_default(require("./Page"));
const _Separator = /*#__PURE__*/ _interop_require_default(require("./Separator"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const nodeTypes = {
    ClickableArrow: _ClickableArrow.default,
    Page: _Page.default,
    Separator: _Separator.default
};
const baseClass = 'paginator';
const Pagination = (props)=>{
    const history = (0, _reactrouterdom.useHistory)();
    const params = (0, _SearchParams.useSearchParams)();
    const { disableHistoryChange = false, hasNextPage = false, hasPrevPage = false, nextPage = null, numberOfNeighbors = 1, onChange, page: currentPage, prevPage = null, totalPages = null } = props;
    if (!totalPages || totalPages <= 1) return null;
    // uses react router to set the current page
    const updatePage = (page)=>{
        if (!disableHistoryChange) {
            const newParams = {
                ...params
            };
            newParams.page = page;
            history.push({
                search: _qs.default.stringify(newParams, {
                    addQueryPrefix: true
                })
            });
        }
        if (typeof onChange === 'function') onChange(page);
    };
    // Create array of integers for each page
    const pages = Array.from({
        length: totalPages
    }, (_, index)=>index + 1);
    // Assign indices for start and end of the range of pages that should be shown in paginator
    let rangeStartIndex = currentPage - 1 - numberOfNeighbors;
    // Sanitize rangeStartIndex in case it is less than zero for safe split
    if (rangeStartIndex <= 0) rangeStartIndex = 0;
    const rangeEndIndex = currentPage - 1 + numberOfNeighbors + 1;
    // Slice out the range of pages that we want to render
    const nodes = pages.slice(rangeStartIndex, rangeEndIndex);
    // Add prev separator if necessary
    if (currentPage - numberOfNeighbors - 1 >= 2) nodes.unshift({
        type: 'Separator'
    });
    // Add first page if necessary
    if (currentPage > numberOfNeighbors + 1) {
        nodes.unshift({
            props: {
                isFirstPage: true,
                page: 1,
                updatePage
            },
            type: 'Page'
        });
    }
    // Add next separator if necessary
    if (currentPage + numberOfNeighbors + 1 < totalPages) nodes.push({
        type: 'Separator'
    });
    // Add last page if necessary
    if (rangeEndIndex < totalPages) {
        nodes.push({
            props: {
                isLastPage: true,
                page: totalPages,
                updatePage
            },
            type: 'Page'
        });
    }
    // Add prev and next arrows based on necessity
    nodes.unshift({
        props: {
            direction: 'right',
            isDisabled: !hasNextPage,
            updatePage: ()=>updatePage(nextPage)
        },
        type: 'ClickableArrow'
    });
    nodes.unshift({
        props: {
            direction: 'left',
            isDisabled: !hasPrevPage,
            updatePage: ()=>updatePage(prevPage)
        },
        type: 'ClickableArrow'
    });
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, nodes.map((node, i)=>{
        if (typeof node === 'number') {
            return /*#__PURE__*/ _react.default.createElement(_Page.default, {
                isCurrent: currentPage === node,
                key: i,
                page: node,
                updatePage: updatePage
            });
        }
        const NodeType = nodeTypes[node.type];
        return /*#__PURE__*/ _react.default.createElement(NodeType, {
            key: i,
            ...node.props
        });
    }));
};
const _default = Pagination;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgTm9kZSwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJ1xuaW1wb3J0IENsaWNrYWJsZUFycm93IGZyb20gJy4vQ2xpY2thYmxlQXJyb3cnXG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnXG5pbXBvcnQgU2VwYXJhdG9yIGZyb20gJy4vU2VwYXJhdG9yJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IG5vZGVUeXBlcyA9IHtcbiAgQ2xpY2thYmxlQXJyb3csXG4gIFBhZ2UsXG4gIFNlcGFyYXRvcixcbn1cblxuY29uc3QgYmFzZUNsYXNzID0gJ3BhZ2luYXRvcidcblxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblxuICBjb25zdCB7XG4gICAgZGlzYWJsZUhpc3RvcnlDaGFuZ2UgPSBmYWxzZSxcbiAgICBoYXNOZXh0UGFnZSA9IGZhbHNlLFxuICAgIGhhc1ByZXZQYWdlID0gZmFsc2UsXG4gICAgbmV4dFBhZ2UgPSBudWxsLFxuICAgIG51bWJlck9mTmVpZ2hib3JzID0gMSxcbiAgICBvbkNoYW5nZSxcbiAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICBwcmV2UGFnZSA9IG51bGwsXG4gICAgdG90YWxQYWdlcyA9IG51bGwsXG4gIH0gPSBwcm9wc1xuXG4gIGlmICghdG90YWxQYWdlcyB8fCB0b3RhbFBhZ2VzIDw9IDEpIHJldHVybiBudWxsXG5cbiAgLy8gdXNlcyByZWFjdCByb3V0ZXIgdG8gc2V0IHRoZSBjdXJyZW50IHBhZ2VcbiAgY29uc3QgdXBkYXRlUGFnZSA9IChwYWdlKSA9PiB7XG4gICAgaWYgKCFkaXNhYmxlSGlzdG9yeUNoYW5nZSkge1xuICAgICAgY29uc3QgbmV3UGFyYW1zID0ge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICB9XG5cbiAgICAgIG5ld1BhcmFtcy5wYWdlID0gcGFnZVxuICAgICAgaGlzdG9yeS5wdXNoKHsgc2VhcmNoOiBxdWVyeVN0cmluZy5zdHJpbmdpZnkobmV3UGFyYW1zLCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykgb25DaGFuZ2UocGFnZSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBhcnJheSBvZiBpbnRlZ2VycyBmb3IgZWFjaCBwYWdlXG4gIGNvbnN0IHBhZ2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+IGluZGV4ICsgMSlcblxuICAvLyBBc3NpZ24gaW5kaWNlcyBmb3Igc3RhcnQgYW5kIGVuZCBvZiB0aGUgcmFuZ2Ugb2YgcGFnZXMgdGhhdCBzaG91bGQgYmUgc2hvd24gaW4gcGFnaW5hdG9yXG4gIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50UGFnZSAtIDEgLSBudW1iZXJPZk5laWdoYm9yc1xuXG4gIC8vIFNhbml0aXplIHJhbmdlU3RhcnRJbmRleCBpbiBjYXNlIGl0IGlzIGxlc3MgdGhhbiB6ZXJvIGZvciBzYWZlIHNwbGl0XG4gIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkgcmFuZ2VTdGFydEluZGV4ID0gMFxuXG4gIGNvbnN0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50UGFnZSAtIDEgKyBudW1iZXJPZk5laWdoYm9ycyArIDFcblxuICAvLyBTbGljZSBvdXQgdGhlIHJhbmdlIG9mIHBhZ2VzIHRoYXQgd2Ugd2FudCB0byByZW5kZXJcbiAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IHBhZ2VzLnNsaWNlKHJhbmdlU3RhcnRJbmRleCwgcmFuZ2VFbmRJbmRleClcblxuICAvLyBBZGQgcHJldiBzZXBhcmF0b3IgaWYgbmVjZXNzYXJ5XG4gIGlmIChjdXJyZW50UGFnZSAtIG51bWJlck9mTmVpZ2hib3JzIC0gMSA+PSAyKSBub2Rlcy51bnNoaWZ0KHsgdHlwZTogJ1NlcGFyYXRvcicgfSlcbiAgLy8gQWRkIGZpcnN0IHBhZ2UgaWYgbmVjZXNzYXJ5XG4gIGlmIChjdXJyZW50UGFnZSA+IG51bWJlck9mTmVpZ2hib3JzICsgMSkge1xuICAgIG5vZGVzLnVuc2hpZnQoe1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaXNGaXJzdFBhZ2U6IHRydWUsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHVwZGF0ZVBhZ2UsXG4gICAgICB9LFxuICAgICAgdHlwZTogJ1BhZ2UnLFxuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgbmV4dCBzZXBhcmF0b3IgaWYgbmVjZXNzYXJ5XG4gIGlmIChjdXJyZW50UGFnZSArIG51bWJlck9mTmVpZ2hib3JzICsgMSA8IHRvdGFsUGFnZXMpIG5vZGVzLnB1c2goeyB0eXBlOiAnU2VwYXJhdG9yJyB9KVxuICAvLyBBZGQgbGFzdCBwYWdlIGlmIG5lY2Vzc2FyeVxuICBpZiAocmFuZ2VFbmRJbmRleCA8IHRvdGFsUGFnZXMpIHtcbiAgICBub2Rlcy5wdXNoKHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGlzTGFzdFBhZ2U6IHRydWUsXG4gICAgICAgIHBhZ2U6IHRvdGFsUGFnZXMsXG4gICAgICAgIHVwZGF0ZVBhZ2UsXG4gICAgICB9LFxuICAgICAgdHlwZTogJ1BhZ2UnLFxuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgcHJldiBhbmQgbmV4dCBhcnJvd3MgYmFzZWQgb24gbmVjZXNzaXR5XG4gIG5vZGVzLnVuc2hpZnQoe1xuICAgIHByb3BzOiB7XG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICBpc0Rpc2FibGVkOiAhaGFzTmV4dFBhZ2UsXG4gICAgICB1cGRhdGVQYWdlOiAoKSA9PiB1cGRhdGVQYWdlKG5leHRQYWdlKSxcbiAgICB9LFxuICAgIHR5cGU6ICdDbGlja2FibGVBcnJvdycsXG4gIH0pXG5cbiAgbm9kZXMudW5zaGlmdCh7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgaXNEaXNhYmxlZDogIWhhc1ByZXZQYWdlLFxuICAgICAgdXBkYXRlUGFnZTogKCkgPT4gdXBkYXRlUGFnZShwcmV2UGFnZSksXG4gICAgfSxcbiAgICB0eXBlOiAnQ2xpY2thYmxlQXJyb3cnLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICB7bm9kZXMubWFwKChub2RlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2UgaXNDdXJyZW50PXtjdXJyZW50UGFnZSA9PT0gbm9kZX0ga2V5PXtpfSBwYWdlPXtub2RlfSB1cGRhdGVQYWdlPXt1cGRhdGVQYWdlfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IE5vZGVUeXBlID0gbm9kZVR5cGVzW25vZGUudHlwZV1cblxuICAgICAgICByZXR1cm4gPE5vZGVUeXBlIGtleT17aX0gey4uLm5vZGUucHJvcHN9IC8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXSwibmFtZXMiOlsibm9kZVR5cGVzIiwiQ2xpY2thYmxlQXJyb3ciLCJQYWdlIiwiU2VwYXJhdG9yIiwiYmFzZUNsYXNzIiwiUGFnaW5hdGlvbiIsInByb3BzIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJwYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJkaXNhYmxlSGlzdG9yeUNoYW5nZSIsImhhc05leHRQYWdlIiwiaGFzUHJldlBhZ2UiLCJuZXh0UGFnZSIsIm51bWJlck9mTmVpZ2hib3JzIiwib25DaGFuZ2UiLCJwYWdlIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsInRvdGFsUGFnZXMiLCJ1cGRhdGVQYWdlIiwibmV3UGFyYW1zIiwicHVzaCIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJwYWdlcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsInJhbmdlU3RhcnRJbmRleCIsInJhbmdlRW5kSW5kZXgiLCJub2RlcyIsInNsaWNlIiwidW5zaGlmdCIsInR5cGUiLCJpc0ZpcnN0UGFnZSIsImlzTGFzdFBhZ2UiLCJkaXJlY3Rpb24iLCJpc0Rpc2FibGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibm9kZSIsImkiLCJpc0N1cnJlbnQiLCJrZXkiLCJOb2RlVHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFrSUE7OztlQUFBOzs7MkRBbEl3Qjs4REFDTjtnQ0FDUzs4QkFJSzt1RUFDTDs2REFDVjtrRUFDSztRQUNmOzs7Ozs7QUFFUCxNQUFNQSxZQUFZO0lBQ2hCQyxnQkFBQUEsdUJBQWM7SUFDZEMsTUFBQUEsYUFBSTtJQUNKQyxXQUFBQSxrQkFBUztBQUNYO0FBRUEsTUFBTUMsWUFBWTtBQUVsQixNQUFNQyxhQUE4QixDQUFDQztJQUNuQyxNQUFNQyxVQUFVQyxJQUFBQSwwQkFBVTtJQUMxQixNQUFNQyxTQUFTQyxJQUFB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