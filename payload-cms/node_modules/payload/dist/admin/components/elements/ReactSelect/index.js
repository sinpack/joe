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
const _sortable = require("@dnd-kit/sortable");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _reactselect = /*#__PURE__*/ _interop_require_default(require("react-select"));
const _creatable = /*#__PURE__*/ _interop_require_default(require("react-select/creatable"));
const _getTranslation = require("../../../../utilities/getTranslation");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../DraggableSortable"));
const _ClearIndicator = require("./ClearIndicator");
const _Control = require("./Control");
const _MultiValue = require("./MultiValue");
const _MultiValueLabel = require("./MultiValueLabel");
const _MultiValueRemove = require("./MultiValueRemove");
const _SingleValue = require("./SingleValue");
const _ValueContainer = require("./ValueContainer");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createOption = (label)=>({
        label,
        value: label
    });
const SelectAdapter = (props)=>{
    const { i18n, t } = (0, _reacti18next.useTranslation)();
    const [inputValue, setInputValue] = _react.default.useState('') // for creatable select
    ;
    const { className, components, customProps, disabled = false, filterOption = undefined, isClearable = true, isCreatable, isLoading, isSearchable = true, noOptionsMessage = ()=>t('general:noOptions'), numberOnly = false, onChange, onMenuOpen, options, placeholder = t('general:selectValue'), showError, value } = props;
    const loadingMessage = ()=>t('general:loading') + '...';
    const classes = [
        className,
        'react-select',
        showError && 'react-select--error'
    ].filter(Boolean).join(' ');
    if (!isCreatable) {
        return /*#__PURE__*/ _react.default.createElement(_reactselect.default, {
            captureMenuScroll: true,
            customProps: customProps,
            isLoading: isLoading,
            placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
            ...props,
            className: classes,
            classNamePrefix: "rs",
            components: {
                ClearIndicator: _ClearIndicator.ClearIndicator,
                Control: _Control.Control,
                DropdownIndicator: _Chevron.default,
                MultiValue: _MultiValue.MultiValue,
                MultiValueLabel: _MultiValueLabel.MultiValueLabel,
                MultiValueRemove: _MultiValueRemove.MultiValueRemove,
                SingleValue: _SingleValue.SingleValue,
                ValueContainer: _ValueContainer.ValueContainer,
                ...components
            },
            filterOption: filterOption,
            isClearable: isClearable,
            isDisabled: disabled,
            isSearchable: isSearchable,
            loadingMessage: loadingMessage,
            menuPlacement: "auto",
            noOptionsMessage: noOptionsMessage,
            onChange: onChange,
            onMenuOpen: onMenuOpen,
            options: options,
            value: value
        });
    }
    const handleKeyDown = (event)=>{
        // eslint-disable-next-line no-restricted-globals
        if (numberOnly === true) {
            const acceptableKeys = [
                'Tab',
                'Escape',
                'Backspace',
                'Enter',
                'ArrowRight',
                'ArrowLeft',
                'ArrowUp',
                'ArrowDown'
            ];
            const isNumber = !/\D/.test(event.key);
            const isActionKey = acceptableKeys.includes(event.key);
            if (!isNumber && !isActionKey) {
                event.preventDefault();
                return;
            }
        }
        if (!value || !inputValue || inputValue.trim() === '') return;
        if (filterOption && !filterOption(null, inputValue)) {
            return;
        }
        switch(event.key){
            case 'Enter':
            case 'Tab':
                onChange([
                    ...value,
                    createOption(inputValue)
                ]);
                setInputValue('');
                event.preventDefault();
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_creatable.default, {
        captureMenuScroll: true,
        isLoading: isLoading,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        ...props,
        className: classes,
        classNamePrefix: "rs",
        components: {
            ClearIndicator: _ClearIndicator.ClearIndicator,
            Control: _Control.Control,
            DropdownIndicator: _Chevron.default,
            MultiValue: _MultiValue.MultiValue,
            MultiValueLabel: _MultiValueLabel.MultiValueLabel,
            MultiValueRemove: _MultiValueRemove.MultiValueRemove,
            SingleValue: _SingleValue.SingleValue,
            ValueContainer: _ValueContainer.ValueContainer,
            ...components
        },
        filterOption: filterOption,
        inputValue: inputValue,
        isClearable: isClearable,
        isDisabled: disabled,
        isSearchable: isSearchable,
        loadingMessage: loadingMessage,
        menuPlacement: "auto",
        noOptionsMessage: noOptionsMessage,
        onChange: onChange,
        onInputChange: (newValue)=>setInputValue(newValue),
        onKeyDown: handleKeyDown,
        onMenuOpen: onMenuOpen,
        options: options,
        value: value
    });
};
const SortableSelect = (props)=>{
    const { onChange, value } = props;
    let ids = [];
    if (value) ids = Array.isArray(value) ? value.map((item)=>item?.id ?? `${item?.value}`) : [
        value?.id || `${value?.value}`
    ];
    return /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
        className: "react-select-container",
        ids: ids,
        onDragEnd: ({ moveFromIndex, moveToIndex })=>{
            let sorted = value;
            if (value && Array.isArray(value)) {
                sorted = (0, _sortable.arrayMove)(value, moveFromIndex, moveToIndex);
            }
            onChange(sorted);
        }
    }, /*#__PURE__*/ _react.default.createElement(SelectAdapter, props));
};
const ReactSelect = (props)=>{
    const { isMulti, isSortable } = props;
    if (isMulti && isSortable) {
        return /*#__PURE__*/ _react.default.createElement(SortableSelect, props);
    }
    return /*#__PURE__*/ _react.default.createElement(SelectAdapter, props);
};
const _default = ReactSelect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEtleWJvYXJkRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgYXMgUmVhY3RTZWxlY3RBZGFwdGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nXG5pbXBvcnQgRHJhZ2dhYmxlU29ydGFibGUgZnJvbSAnLi4vRHJhZ2dhYmxlU29ydGFibGUnXG5pbXBvcnQgeyBDbGVhckluZGljYXRvciB9IGZyb20gJy4vQ2xlYXJJbmRpY2F0b3InXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJ1xuaW1wb3J0IHsgTXVsdGlWYWx1ZSB9IGZyb20gJy4vTXVsdGlWYWx1ZSdcbmltcG9ydCB7IE11bHRpVmFsdWVMYWJlbCB9IGZyb20gJy4vTXVsdGlWYWx1ZUxhYmVsJ1xuaW1wb3J0IHsgTXVsdGlWYWx1ZVJlbW92ZSB9IGZyb20gJy4vTXVsdGlWYWx1ZVJlbW92ZSdcbmltcG9ydCB7IFNpbmdsZVZhbHVlIH0gZnJvbSAnLi9TaW5nbGVWYWx1ZSdcbmltcG9ydCB7IFZhbHVlQ29udGFpbmVyIH0gZnJvbSAnLi9WYWx1ZUNvbnRhaW5lcidcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAobGFiZWw6IHN0cmluZykgPT4gKHtcbiAgbGFiZWwsXG4gIHZhbHVlOiBsYWJlbCxcbn0pXG5cbmNvbnN0IFNlbGVjdEFkYXB0ZXI6IFJlYWN0LkZDPFJlYWN0U2VsZWN0QWRhcHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpIC8vIGZvciBjcmVhdGFibGUgc2VsZWN0XG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb21wb25lbnRzLFxuICAgIGN1c3RvbVByb3BzLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgZmlsdGVyT3B0aW9uID0gdW5kZWZpbmVkLFxuICAgIGlzQ2xlYXJhYmxlID0gdHJ1ZSxcbiAgICBpc0NyZWF0YWJsZSxcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNTZWFyY2hhYmxlID0gdHJ1ZSxcbiAgICBub09wdGlvbnNNZXNzYWdlID0gKCkgPT4gdCgnZ2VuZXJhbDpub09wdGlvbnMnKSxcbiAgICBudW1iZXJPbmx5ID0gZmFsc2UsXG4gICAgb25DaGFuZ2UsXG4gICAgb25NZW51T3BlbixcbiAgICBvcHRpb25zLFxuICAgIHBsYWNlaG9sZGVyID0gdCgnZ2VuZXJhbDpzZWxlY3RWYWx1ZScpLFxuICAgIHNob3dFcnJvcixcbiAgICB2YWx1ZSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgbG9hZGluZ01lc3NhZ2UgPSAoKSA9PiB0KCdnZW5lcmFsOmxvYWRpbmcnKSArICcuLi4nXG5cbiAgY29uc3QgY2xhc3NlcyA9IFtjbGFzc05hbWUsICdyZWFjdC1zZWxlY3QnLCBzaG93RXJyb3IgJiYgJ3JlYWN0LXNlbGVjdC0tZXJyb3InXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpXG5cbiAgaWYgKCFpc0NyZWF0YWJsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsXG4gICAgICAgIGN1c3RvbVByb3BzPXtjdXN0b21Qcm9wc31cbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJyc1wiXG4gICAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgICBDbGVhckluZGljYXRvcixcbiAgICAgICAgICBDb250cm9sLFxuICAgICAgICAgIERyb3Bkb3duSW5kaWNhdG9yOiBDaGV2cm9uLFxuICAgICAgICAgIE11bHRpVmFsdWUsXG4gICAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgIE11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgICAgU2luZ2xlVmFsdWUsXG4gICAgICAgICAgVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgLi4uY29tcG9uZW50cyxcbiAgICAgICAgfX1cbiAgICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICBsb2FkaW5nTWVzc2FnZT17bG9hZGluZ01lc3NhZ2V9XG4gICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17bm9PcHRpb25zTWVzc2FnZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvbk1lbnVPcGVuPXtvbk1lbnVPcGVufVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgIClcbiAgfVxuICBjb25zdCBoYW5kbGVLZXlEb3duOiBLZXlib2FyZEV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAobnVtYmVyT25seSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYWNjZXB0YWJsZUtleXMgPSBbXG4gICAgICAgICdUYWInLFxuICAgICAgICAnRXNjYXBlJyxcbiAgICAgICAgJ0JhY2tzcGFjZScsXG4gICAgICAgICdFbnRlcicsXG4gICAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAgICdBcnJvd1VwJyxcbiAgICAgICAgJ0Fycm93RG93bicsXG4gICAgICBdXG4gICAgICBjb25zdCBpc051bWJlciA9ICEvXFxELy50ZXN0KGV2ZW50LmtleSlcbiAgICAgIGNvbnN0IGlzQWN0aW9uS2V5ID0gYWNjZXB0YWJsZUtleXMuaW5jbHVkZXMoZXZlbnQua2V5KVxuICAgICAgaWYgKCFpc051bWJlciAmJiAhaXNBY3Rpb25LZXkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWx1ZSB8fCAhaW5wdXRWYWx1ZSB8fCBpbnB1dFZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVyblxuICAgIGlmIChmaWx0ZXJPcHRpb24gJiYgIWZpbHRlck9wdGlvbihudWxsLCBpbnB1dFZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICBvbkNoYW5nZShbLi4uKHZhbHVlIGFzIE9wdGlvbltdKSwgY3JlYXRlT3B0aW9uKGlucHV0VmFsdWUpXSlcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJylcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDcmVhdGFibGVTZWxlY3RcbiAgICAgIGNhcHR1cmVNZW51U2Nyb2xsXG4gICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBjbGFzc05hbWVQcmVmaXg9XCJyc1wiXG4gICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgIENsZWFySW5kaWNhdG9yLFxuICAgICAgICBDb250cm9sLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogQ2hldnJvbixcbiAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgVmFsdWVDb250YWluZXIsXG4gICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICB9fVxuICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgIGxvYWRpbmdNZXNzYWdlPXtsb2FkaW5nTWVzc2FnZX1cbiAgICAgIG1lbnVQbGFjZW1lbnQ9XCJhdXRvXCJcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9e25vT3B0aW9uc01lc3NhZ2V9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBvbklucHV0Q2hhbmdlPXsobmV3VmFsdWUpID0+IHNldElucHV0VmFsdWUobmV3VmFsdWUpfVxuICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgb25NZW51T3Blbj17b25NZW51T3Blbn1cbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBTb3J0YWJsZVNlbGVjdDogUmVhY3QuRkM8UmVhY3RTZWxlY3RBZGFwdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlIH0gPSBwcm9wc1xuXG4gIGxldCBpZHM6IHN0cmluZ1tdID0gW11cbiAgaWYgKHZhbHVlKVxuICAgIGlkcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICA/IHZhbHVlLm1hcCgoaXRlbSkgPT4gaXRlbT8uaWQgPz8gYCR7aXRlbT8udmFsdWV9YClcbiAgICAgIDogW3ZhbHVlPy5pZCB8fCBgJHt2YWx1ZT8udmFsdWV9YF1cblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGVTb3J0YWJsZVxuICAgICAgY2xhc3NOYW1lPVwicmVhY3Qtc2VsZWN0LWNvbnRhaW5lclwiXG4gICAgICBpZHM9e2lkc31cbiAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4ge1xuICAgICAgICBsZXQgc29ydGVkID0gdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgc29ydGVkID0gYXJyYXlNb3ZlKHZhbHVlLCBtb3ZlRnJvbUluZGV4LCBtb3ZlVG9JbmRleClcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShzb3J0ZWQpXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTZWxlY3RBZGFwdGVyIHsuLi5wcm9wc30gLz5cbiAgICA8L0RyYWdnYWJsZVNvcnRhYmxlPlxuICApXG59XG5cbmNvbnN0IFJlYWN0U2VsZWN0OiBSZWFjdC5GQzxSZWFjdFNlbGVjdEFkYXB0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc011bHRpLCBpc1NvcnRhYmxlIH0gPSBwcm9wc1xuXG4gIGlmIChpc011bHRpICYmIGlzU29ydGFibGUpIHtcbiAgICByZXR1cm4gPFNvcnRhYmxlU2VsZWN0IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIHJldHVybiA8U2VsZWN0QWRhcHRlciB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0U2VsZWN0XG4iXSwibmFtZXMiOlsiY3JlYXRlT3B0aW9uIiwibGFiZWwiLCJ2YWx1ZSIsIlNlbGVjdEFkYXB0ZXIiLCJwcm9wcyIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiY3VzdG9tUHJvcHMiLCJkaXNhYmxlZCIsImZpbHRlck9wdGlvbiIsInVuZGVmaW5lZCIsImlzQ2xlYXJhYmxlIiwiaXNDcmVhdGFibGUiLCJpc0xvYWRpbmciLCJpc1NlYXJjaGFibGUiLCJub09wdGlvbnNNZXNzYWdlIiwibnVtYmVyT25seSIsIm9uQ2hhbmdlIiwib25NZW51T3BlbiIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInNob3dFcnJvciIsImxvYWRpbmdNZXNzYWdlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiU2VsZWN0IiwiY2FwdHVyZU1lbnVTY3JvbGwiLCJnZXRUcmFuc2xhdGlvbiIsImNsYXNzTmFtZVByZWZpeCIsIkNsZWFySW5kaWNhdG9yIiwiQ29udHJvbCIsIkRyb3Bkb3duSW5kaWNhdG9yIiwiQ2hldnJvbiIsIk11bHRpVmFsdWUiLCJNdWx0aVZhbHVlTGFiZWwiLCJNdWx0aVZhbHVlUmVtb3ZlIiwiU2luZ2xlVmFsdWUiLCJWYWx1ZUNvbnRhaW5lciIsImlzRGlzYWJsZWQiLCJtZW51UGxhY2VtZW50IiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiYWNjZXB0YWJsZUtleXMiLCJpc051bWJlciIsInRlc3QiLCJrZXkiLCJpc0FjdGlvbktleSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiQ3JlYXRhYmxlU2VsZWN0Iiwib25JbnB1dENoYW5nZSIsIm5ld1ZhbHVlIiwib25LZXlEb3duIiwiU29ydGFibGVTZWxlY3QiLCJpZHMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiaWQiLCJEcmFnZ2FibGVTb3J0YWJsZSIsIm9uRHJhZ0VuZCIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsInNvcnRlZCIsImFycmF5TW92ZSIsIlJlYWN0U2VsZWN0IiwiaXNNdWx0aSIsImlzU29ydGFibGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBME1BOzs7ZUFBQTs7OzBCQXhNMEI7OERBQ1I7OEJBQ2E7b0VBQ1o7a0VBQ1M7Z0NBS0c7Z0VBQ1g7MEVBQ1U7Z0NBQ0M7eUJBQ1A7NEJBQ0c7aUNBQ0s7a0NBQ0M7NkJBQ0w7Z0NBQ0c7UUFDeEI7Ozs7OztBQUVQLE1BQU1BLGVBQWUsQ0FBQ0MsUUFBbUIsQ0FBQTtRQUN2Q0E7UUFDQUMsT0FBT0Q7SUFDVCxDQUFBO0FBRUEsTUFBTUUsZ0JBQW1ELENBQUNDO0lBQ3hELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFDbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksdUJBQXVCOztJQUU5RSxNQUFNLEVBQ0pDLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLFdBQVcsS0FBSyxFQUNoQkMsZUFBZUMsU0FBUyxFQUN4QkMsY0FBYyxJQUFJLEVBQ2xCQyxXQUFXLEVBQ1hDLFNBQVMsRUFDVEMsZUFBZSxJQUFJLEVBQ25CQyxtQkFBbUIsSUFBTWhCLEVBQUUsb0JBQW9CLEVBQy9DaUIsYUFBYSxLQUFLLEVBQ2xCQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxjQUFjckIsRUFBRSxzQkFBc0IsRUFDdENzQixTQUFTLEVBQ1QxQixLQUFLLEVBQ04sR0FBR0U7SUFFSixNQUFNeUIsaUJBQWlCLElBQU12QixFQUFFLHFCQUFxQjtJQUVwRCxNQUFNd0IsVUFBVTtRQUFDbEI7UUFBVztRQUFnQmdCLGFBQWE7S0FBc0IsQ0FDNUVHLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO0lBRVIsSUFBSSxDQUFDZCxhQUFhO1FBQ2hCLHFCQUNFLDZCQUFDZSxvQkFBTTtZQUNMQyxtQkFBQUE7WUFDQXJCLGFBQWFBO1lBQ2JNLFdBQVdBO1lBQ1hPLGFBQWFTLElBQUFBLDhCQUFjLEVBQUNULGFBQWF0QjtZQUN4QyxHQUFHRCxLQUFLO1lBQ1RRLFdBQVdrQjtZQUNYTyxpQkFBZ0I7WUFDaEJ4QixZQUFZO2dCQUNWeUIsZ0JBQUFBLDhCQUFjO2dCQUNkQyxTQUFBQSxnQkFBTztnQkFDUEMsbUJBQW1CQyxnQkFBTztnQkFDMUJDLFlBQUFBLHNCQUFVO2dCQUNWQyxpQkFBQUEsZ0NBQWU7Z0JBQ2ZDLGtCQUFBQSxrQ0FBZ0I7Z0JBQ2hCQyxhQUFBQSx3QkFBVztnQkFDWEMsZ0JBQUFBLDhCQUFjO2dCQUNkLEdBQUdqQyxVQUFVO1lBQ2Y7WUFDQUcsY0FBY0E7WUFDZEUsYUFBYUE7WUFDYjZCLFlBQVloQztZQUNaTSxjQUFjQTtZQUNkUSxnQkFBZ0JBO1lBQ2hCbUIsZUFBYztZQUNkMUIsa0JBQWtCQTtZQUNsQkUsVUFBVUE7WUFDVkMsWUFBWUE7WUFDWkMsU0FBU0E7WUFDVHhCLE9BQU9BOztJQUdiO0lBQ0EsTUFBTStDLGdCQUFzQyxDQUFDQztRQUMzQyxpREFBaUQ7UUFDakQsSUFBSTNCLGVBQWUsTUFBTTtZQUN2QixNQUFNNEIsaUJBQWlCO2dCQUNyQjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO1lBQ0QsTUFBTUMsV0FBVyxDQUFDLEtBQUtDLElBQUksQ0FBQ0gsTUFBTUksR0FBRztZQUNyQyxNQUFNQyxjQUFjSixlQUFlSyxRQUFRLENBQUNOLE1BQU1JLEdBQUc7WUFDckQsSUFBSSxDQUFDRixZQUFZLENBQUNHLGFBQWE7Z0JBQzdCTCxNQUFNTyxjQUFjO2dCQUNwQjtZQUNGO1FBQ0Y7UUFDQSxJQUFJLENBQUN2RCxTQUFTLENBQUNNLGNBQWNBLFdBQVdrRCxJQUFJLE9BQU8sSUFBSTtRQUN2RCxJQUFJMUMsZ0JBQWdCLENBQUNBLGFBQWEsTUFBTVIsYUFBYTtZQUNuRDtRQUNGO1FBQ0EsT0FBUTBDLE1BQU1JLEdBQUc7WUFDZixLQUFLO1lBQ0wsS0FBSztnQkFDSDlCLFNBQVM7dUJBQUt0QjtvQkFBb0JGLGFBQWFRO2lCQUFZO2dCQUMzREMsY0FBYztnQkFDZHlDLE1BQU1PLGNBQWM7Z0JBQ3BCO1lBQ0Y7Z0JBQ0U7UUFDSjtJQUNGO0lBRUEscUJBQ0UsNkJBQUNFLGtCQUFlO1FBQ2R4QixtQkFBQUE7UUFDQWYsV0FBV0E7UUFDWE8sYUFBYVMsSUFBQUEsOEJBQWMsRUFBQ1QsYUFBYXRCO1FBQ3hDLEdBQUdELEtBQUs7UUFDVFEsV0FBV2tCO1FBQ1hPLGlCQUFnQjtRQUNoQnhCLFlBQVk7WUFDVnlCLGdCQUFBQSw4QkFBYztZQUNkQyxTQUFBQSxnQkFBTztZQUNQQyxtQkFBbUJDLGdCQUFPO1lBQzFCQyxZQUFBQSxzQkFBVTtZQUNWQyxpQkFBQUEsZ0NBQWU7WUFDZkMsa0JBQUFBLGtDQUFnQjtZQUNoQkMsYUFBQUEsd0JBQVc7WUFDWEMsZ0JBQUFBLDhCQUFjO1lBQ2QsR0FBR2pDLFVBQVU7UUFDZjtRQUNBRyxjQUFjQTtRQUNkUixZQUFZQTtRQUNaVSxhQUFhQTtRQUNiNkIsWUFBWWhDO1FBQ1pNLGNBQWNBO1FBQ2RRLGdCQUFnQkE7UUFDaEJtQixlQUFjO1FBQ2QxQixrQkFBa0JBO1FBQ2xCRSxVQUFVQTtRQUNWb0MsZUFBZSxDQUFDQyxXQUFhcEQsY0FBY29EO1FBQzNDQyxXQUFXYjtRQUNYeEIsWUFBWUE7UUFDWkMsU0FBU0E7UUFDVHhCLE9BQU9BOztBQUdiO0FBRUEsTUFBTTZELGlCQUFvRCxDQUFDM0Q7SUFDekQsTUFBTSxFQUFFb0IsUUFBUSxFQUFFdEIsS0FBSyxFQUFFLEdBQUdFO0lBRTVCLElBQUk0RCxNQUFnQixFQUFFO0lBQ3RCLElBQUk5RCxPQUNGOEQsTUFBTUMsTUFBTUMsT0FBTyxDQUFDaEUsU0FDaEJBLE1BQU1pRSxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsTUFBTUMsTUFBTSxDQUFDLEVBQUVELE1BQU1sRSxNQUFNLENBQUMsSUFDaEQ7UUFBQ0EsT0FBT21FLE1BQU0sQ0FBQyxFQUFFbkUsT0FBT0EsTUFBTSxDQUFDO0tBQUM7SUFFdEMscUJBQ0UsNkJBQUNvRSwwQkFBaUI7UUFDaEIxRCxXQUFVO1FBQ1ZvRCxLQUFLQTtRQUNMTyxXQUFXLENBQUMsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUU7WUFDeEMsSUFBSUMsU0FBU3hFO1lBQ2IsSUFBSUEsU0FBUytELE1BQU1DLE9BQU8sQ0FBQ2hFLFFBQVE7Z0JBQ2pDd0UsU0FBU0MsSUFBQUEsbUJBQVMsRUFBQ3pFLE9BQU9zRSxlQUFlQztZQUMzQztZQUNBakQsU0FBU2tEO1FBQ1g7cUJBRUEsNkJBQUN2RSxlQUFrQkM7QUFHekI7QUFFQSxNQUFNd0UsY0FBaUQsQ0FBQ3hFO0lBQ3RELE1BQU0sRUFBRXlFLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUcxRTtJQUVoQyxJQUFJeUUsV0FBV0MsWUFBWTtRQUN6QixxQkFBTyw2QkFBQ2YsZ0JBQW1CM0Q7SUFDN0I7SUFFQSxxQkFBTyw2QkFBQ0QsZUFBa0JDO0FBQzVCO01BRUEsV0FBZXdFIn0=