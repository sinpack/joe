/// <reference types="react" />
import type { CommonProps, GroupBase, Props as ReactSelectStateManagerProps } from 'react-select';
import type { DocumentDrawerProps } from '../DocumentDrawer/types';
type CustomSelectProps = {
    disableKeyDown?: boolean;
    disableMouseDown?: boolean;
    draggableProps?: any;
    droppableRef?: React.RefObject<HTMLDivElement>;
    onSave?: DocumentDrawerProps['onSave'];
    setDrawerIsOpen?: (isOpen: boolean) => void;
};
declare module 'react-select/dist/declarations/src/Select' {
    interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
        customProps?: CustomSelectProps;
    }
}
declare module 'react-select/dist/declarations/src' {
    interface CommonPropsAndClassName<Option, IsMulti extends boolean, Group extends GroupBase<Option>> extends CommonProps<Option, IsMulti, Group> {
        customProps?: ReactSelectStateManagerProps<Option, IsMulti, Group> & CustomSelectProps;
    }
}
export type Option = {
    [key: string]: unknown;
    id?: string;
    value: unknown;
};
export type OptionGroup = {
    label: string;
    options: Option[];
};
export type Props = {
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    className?: string;
    components?: {
        [key: string]: React.FC<any>;
    };
    customProps?: CustomSelectProps;
    disabled?: boolean;
    filterOption?: (({ data, label, value }: {
        data: Option;
        label: string;
        value: string;
    }, search: string) => boolean) | undefined;
    inputId?: string;
    isClearable?: boolean;
    /** Allows you to create own values in the UI despite them not being pre-specified */
    isCreatable?: boolean;
    isLoading?: boolean;
    /** Allows you to specify multiple values instead of just one */
    isMulti?: boolean;
    isOptionSelected?: any;
    isSearchable?: boolean;
    isSortable?: boolean;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => string;
    numberOnly?: boolean;
    onChange?: (value: any) => void;
    onInputChange?: (val: string) => void;
    onMenuOpen?: () => void;
    onMenuScrollToBottom?: () => void;
    options: Option[] | OptionGroup[];
    placeholder?: string;
    showError?: boolean;
    value?: Option | Option[];
};
export {};
//# sourceMappingURL=types.d.ts.map