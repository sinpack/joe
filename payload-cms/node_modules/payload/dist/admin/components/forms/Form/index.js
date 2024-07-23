/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _deepequal = /*#__PURE__*/ _interop_require_default(require("deep-equal"));
const _objecttoformdata = require("object-to-formdata");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _reacttoastify = require("react-toastify");
const _isNumber = require("../../../../utilities/isNumber");
const _setsAreEqual = require("../../../../utilities/setsAreEqual");
const _splitPathByArrayFields = require("../../../../utilities/splitPathByArrayFields");
const _wait = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/wait"));
const _api = require("../../../api");
const _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _OperationProvider = require("../../utilities/OperationProvider");
const _WatchFormErrors = require("./WatchFormErrors");
const _buildFieldSchemaMap = require("./buildFieldSchemaMap");
const _buildInitialState = /*#__PURE__*/ _interop_require_default(require("./buildInitialState"));
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("./buildStateFromSchema"));
const _context = require("./context");
const _errorMessages = /*#__PURE__*/ _interop_require_default(require("./errorMessages"));
const _fieldReducer = require("./fieldReducer");
const _getDataByPath = /*#__PURE__*/ _interop_require_default(require("./getDataByPath"));
const _getSiblingData = /*#__PURE__*/ _interop_require_default(require("./getSiblingData"));
const _initContextState = /*#__PURE__*/ _interop_require_default(require("./initContextState"));
const _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("./reduceFieldsToValues"));
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
const baseClass = 'form';
const Form = (props)=>{
    const { id, collection, getDocPreferences, global } = (0, _DocumentInfo.useDocumentInfo)();
    const { action, children, className, disableSuccessStatus, disabled, fields: fieldsFromProps = collection?.fields || global?.fields, handleResponse, initialData, initialState, method, onSubmit, onSuccess, redirect, submitted: submittedFromProps, waitForAutocomplete } = props;
    const history = (0, _reactrouterdom.useHistory)();
    const { code: locale } = (0, _Locale.useLocale)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const { refreshCookie, user } = (0, _Auth.useAuth)();
    const operation = (0, _OperationProvider.useOperation)();
    const config = (0, _Config.useConfig)();
    const [modified, setModified] = (0, _react.useState)(false);
    const [processing, setProcessing] = (0, _react.useState)(false);
    const [submitted, setSubmitted] = (0, _react.useState)(false);
    const [formattedInitialData, setFormattedInitialData] = (0, _react.useState)((0, _buildInitialState.default)(initialData));
    const formRef = (0, _react.useRef)(null);
    const contextRef = (0, _react.useRef)({});
    let initialFieldState = {};
    if (formattedInitialData) initialFieldState = formattedInitialData;
    if (initialState) initialFieldState = initialState;
    const fieldsReducer = (0, _react.useReducer)(_fieldReducer.fieldReducer, {}, ()=>initialFieldState);
    /**
   * `fields` is the current, up-to-date state/data of all fields in the form. It can be modified by using dispatchFields,
   * which calls the fieldReducer, which then updates the state.
   */ const [fields, dispatchFields] = fieldsReducer;
    contextRef.current.fields = fields;
    contextRef.current.dispatchFields = dispatchFields;
    // Build a current set of child errors for all rows in form state
    const buildRowErrors = (0, _react.useCallback)(()=>{
        const existingFieldRows = {};
        const newFieldRows = {};
        Object.entries(fields).forEach(([path, field])=>{
            const pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
            for(let i = 0; i < pathSegments.length; i += 1){
                const fieldPath = pathSegments.slice(0, i + 1).join('.');
                const formField = fields?.[fieldPath];
                // Is this an array or blocks field?
                if (Array.isArray(formField?.rows)) {
                    // Keep a reference to the existing row state
                    existingFieldRows[fieldPath] = formField.rows;
                    // A new row state will be used to compare
                    // against the old state later,
                    // to see if we need to dispatch an update
                    if (!newFieldRows[fieldPath]) {
                        newFieldRows[fieldPath] = formField.rows.map((existingRow)=>({
                                ...existingRow,
                                childErrorPaths: new Set()
                            }));
                    }
                    const rowIndex = pathSegments[i + 1];
                    const childFieldPath = pathSegments.slice(i + 1).join('.');
                    if (field.valid === false && childFieldPath) {
                        newFieldRows[fieldPath][rowIndex].childErrorPaths.add(`${fieldPath}.${childFieldPath}`);
                    }
                }
            }
        });
        // Now loop over all fields with rows -
        // if anything changed, dispatch an update for the field
        // with the new row state
        Object.entries(newFieldRows).forEach(([path, newRows])=>{
            const stateMatches = newRows.every((newRow, i)=>{
                const existingRowErrorPaths = existingFieldRows[path][i]?.childErrorPaths;
                return (0, _setsAreEqual.setsAreEqual)(newRow.childErrorPaths, existingRowErrorPaths);
            });
            if (!stateMatches) {
                dispatchFields({
                    type: 'UPDATE',
                    path,
                    rows: newRows
                });
            }
        });
    }, [
        fields,
        dispatchFields
    ]);
    const validateForm = (0, _react.useCallback)(async ()=>{
        const validatedFieldState = {};
        let isValid = true;
        const data = contextRef.current.getData();
        const validationPromises = Object.entries(contextRef.current.fields).map(async ([path, field])=>{
            const validatedField = {
                ...field,
                valid: true
            };
            if (field.passesCondition !== false) {
                let validationResult = true;
                if (typeof field.validate === 'function') {
                    let valueToValidate = field.value;
                    if (field?.rows && Array.isArray(field.rows)) {
                        valueToValidate = contextRef.current.getDataByPath(path);
                    }
                    validationResult = await field.validate(valueToValidate, {
                        id,
                        config,
                        data,
                        operation,
                        previousValue: field.previousValue,
                        siblingData: contextRef.current.getSiblingData(path),
                        t,
                        user
                    });
                }
                if (typeof validationResult === 'string') {
                    validatedField.errorMessage = validationResult;
                    validatedField.valid = false;
                    isValid = false;
                }
            }
            validatedFieldState[path] = validatedField;
        });
        await Promise.all(validationPromises);
        if (!(0, _deepequal.default)(contextRef.current.fields, validatedFieldState)) {
            dispatchFields({
                type: 'REPLACE_STATE',
                state: validatedFieldState
            });
        }
        return isValid;
    }, [
        contextRef,
        id,
        user,
        operation,
        t,
        dispatchFields,
        config
    ]);
    const submit = (0, _react.useCallback)(async (options = {}, e)=>{
        const { action: actionToUse = action, method: methodToUse = method, overrides = {}, skipValidation } = options;
        if (disabled) {
            if (e) {
                e.preventDefault();
            }
            return;
        }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setProcessing(true);
        if (waitForAutocomplete) await (0, _wait.default)(100);
        const isValid = skipValidation ? true : await contextRef.current.validateForm();
        contextRef.current.buildRowErrors();
        if (!skipValidation) setSubmitted(true);
        // If not valid, prevent submission
        if (!isValid) {
            _reacttoastify.toast.error(t('error:correctInvalidFields'));
            setProcessing(false);
            return;
        }
        // If submit handler comes through via props, run that
        if (onSubmit) {
            const data = {
                ...(0, _reduceFieldsToValues.default)(fields, true),
                ...overrides
            };
            onSubmit(fields, data);
        }
        const formData = contextRef.current.createFormData(overrides);
        try {
            const res = await _api.requests[methodToUse.toLowerCase()](actionToUse, {
                body: formData,
                headers: {
                    'Accept-Language': i18n.language
                }
            });
            setModified(false);
            if (typeof handleResponse === 'function') {
                handleResponse(res);
                return;
            }
            setProcessing(false);
            const contentType = res.headers.get('content-type');
            const isJSON = contentType && contentType.indexOf('application/json') !== -1;
            let json = {};
            if (isJSON) json = await res.json();
            if (res.status < 400) {
                setSubmitted(false);
                if (typeof onSuccess === 'function') onSuccess(json);
                if (redirect) {
                    const destination = {
                        pathname: redirect,
                        state: {}
                    };
                    if (typeof json === 'object' && json.message && !disableSuccessStatus) {
                        destination.state = {
                            status: [
                                {
                                    type: 'success',
                                    message: json.message
                                }
                            ]
                        };
                    }
                    history.push(destination);
                } else if (!disableSuccessStatus) {
                    _reacttoastify.toast.success(json.message || t('submissionSuccessful'), {
                        autoClose: 3000
                    });
                }
            } else {
                contextRef.current = {
                    ...contextRef.current
                } // triggers rerender of all components that subscribe to form
                ;
                if (json.message) {
                    _reacttoastify.toast.error(json.message);
                    return;
                }
                if (Array.isArray(json.errors)) {
                    const [fieldErrors, nonFieldErrors] = json.errors.reduce(([fieldErrs, nonFieldErrs], err)=>{
                        const newFieldErrs = [];
                        const newNonFieldErrs = [];
                        if (err?.message) {
                            newNonFieldErrs.push(err);
                        }
                        if (Array.isArray(err?.data)) {
                            err.data.forEach((dataError)=>{
                                if (dataError?.field) {
                                    newFieldErrs.push(dataError);
                                } else {
                                    newNonFieldErrs.push(dataError);
                                }
                            });
                        }
                        return [
                            [
                                ...fieldErrs,
                                ...newFieldErrs
                            ],
                            [
                                ...nonFieldErrs,
                                ...newNonFieldErrs
                            ]
                        ];
                    }, [
                        [],
                        []
                    ]);
                    fieldErrors.forEach((err)=>{
                        dispatchFields({
                            type: 'UPDATE',
                            ...contextRef.current?.fields?.[err.field] || {},
                            errorMessage: err.message,
                            path: err.field,
                            valid: false
                        });
                    });
                    nonFieldErrors.forEach((err)=>{
                        _reacttoastify.toast.error(err.message || t('error:unknown'));
                    });
                    return;
                }
                const message = _errorMessages.default[res.status] || t('error:unknown');
                _reacttoastify.toast.error(message);
            }
        } catch (err) {
            setProcessing(false);
            _reacttoastify.toast.error(err);
        }
    }, [
        action,
        disableSuccessStatus,
        disabled,
        dispatchFields,
        fields,
        handleResponse,
        history,
        method,
        onSubmit,
        onSuccess,
        redirect,
        t,
        i18n,
        waitForAutocomplete
    ]);
    const traverseRowConfigs = _react.default.useCallback(({ fieldConfig, path, pathPrefix })=>{
        const config = fieldConfig;
        const pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
        const configMap = (0, _buildFieldSchemaMap.buildFieldSchemaMap)(config);
        for(let i = 0; i < pathSegments.length; i += 1){
            const pathSegment = pathSegments[i];
            if ((0, _isNumber.isNumber)(pathSegment)) {
                const rowIndex = parseInt(pathSegment, 10);
                const parentFieldPath = pathSegments.slice(0, i).join('.');
                const remainingPath = pathSegments.slice(i + 1).join('.');
                const arrayFieldPath = pathPrefix ? `${pathPrefix}.${parentFieldPath}` : parentFieldPath;
                const parentArrayField = contextRef.current.getField(arrayFieldPath);
                const rowField = parentArrayField.rows[rowIndex];
                if (rowField.blockType) {
                    const blockConfig = configMap.get(`${parentFieldPath}.${rowField.blockType}`);
                    if (blockConfig) {
                        return traverseRowConfigs({
                            fieldConfig: blockConfig,
                            path: remainingPath,
                            pathPrefix: `${arrayFieldPath}.${rowIndex}`
                        });
                    }
                    throw new Error(`Block config not found for ${rowField.blockType} at path ${path}`);
                } else {
                    return traverseRowConfigs({
                        fieldConfig: configMap.get(parentFieldPath),
                        path: remainingPath,
                        pathPrefix: `${arrayFieldPath}.${rowIndex}`
                    });
                }
            }
        }
        return config;
    }, []);
    const getRowSchemaByPath = _react.default.useCallback(({ blockType, path })=>{
        const rowConfig = traverseRowConfigs({
            fieldConfig: fieldsFromProps,
            path
        });
        const rowFieldConfigs = (0, _buildFieldSchemaMap.buildFieldSchemaMap)(rowConfig);
        const pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
        const fieldKey = pathSegments.at(-1);
        return rowFieldConfigs.get(blockType ? `${fieldKey}.${blockType}` : fieldKey);
    }, [
        traverseRowConfigs,
        fieldsFromProps
    ]);
    // Array/Block row manipulation. This is called when, for example, you add a new block to a blocks field.
    // The block data is saved in the rows property of the state, which is modified updated here.
    const addFieldRow = (0, _react.useCallback)(async ({ data, path, rowIndex })=>{
        const preferences = await getDocPreferences();
        const rowSchema = getRowSchemaByPath({
            blockType: data?.blockType,
            path
        });
        if (rowSchema) {
            const subFieldState = await (0, _buildStateFromSchema.default)({
                id,
                config,
                data,
                fieldSchema: rowSchema,
                locale,
                operation,
                preferences,
                t,
                user
            });
            dispatchFields({
                type: 'ADD_ROW',
                blockType: data?.blockType,
                path,
                rowIndex,
                subFieldState
            });
        }
    }, [
        dispatchFields,
        getDocPreferences,
        id,
        user,
        operation,
        locale,
        t,
        getRowSchemaByPath,
        config
    ]);
    const removeFieldRow = (0, _react.useCallback)(({ path, rowIndex })=>{
        dispatchFields({
            type: 'REMOVE_ROW',
            path,
            rowIndex
        });
    }, [
        dispatchFields
    ]);
    const replaceFieldRow = (0, _react.useCallback)(async ({ data, path, rowIndex })=>{
        const preferences = await getDocPreferences();
        const rowSchema = getRowSchemaByPath({
            blockType: data?.blockType,
            path
        });
        if (rowSchema) {
            const subFieldState = await (0, _buildStateFromSchema.default)({
                id,
                config,
                data,
                fieldSchema: rowSchema,
                locale,
                operation,
                preferences,
                t,
                user
            });
            dispatchFields({
                type: 'REPLACE_ROW',
                blockType: data?.blockType,
                path,
                rowIndex,
                subFieldState
            });
        }
    }, [
        dispatchFields,
        getDocPreferences,
        id,
        user,
        operation,
        locale,
        t,
        getRowSchemaByPath,
        config
    ]);
    const getFields = (0, _react.useCallback)(()=>contextRef.current.fields, [
        contextRef
    ]);
    const getField = (0, _react.useCallback)((path)=>contextRef.current.fields[path], [
        contextRef
    ]);
    const getData = (0, _react.useCallback)(()=>(0, _reduceFieldsToValues.default)(contextRef.current.fields, true), [
        contextRef
    ]);
    const getSiblingData = (0, _react.useCallback)((path)=>(0, _getSiblingData.default)(contextRef.current.fields, path), [
        contextRef
    ]);
    const getDataByPath = (0, _react.useCallback)((path)=>(0, _getDataByPath.default)(contextRef.current.fields, path), [
        contextRef
    ]);
    const createFormData = (0, _react.useCallback)((overrides = {})=>{
        const data = (0, _reduceFieldsToValues.default)(contextRef.current.fields, true);
        const file = data?.file;
        if (file) {
            delete data.file;
        }
        const dataWithOverrides = {
            ...data,
            ...overrides
        };
        const dataToSerialize = {
            _payload: JSON.stringify(dataWithOverrides),
            file
        };
        // nullAsUndefineds is important to allow uploads and relationship fields to clear themselves
        const formData = (0, _objecttoformdata.serialize)(dataToSerialize, {
            indices: true,
            nullsAsUndefineds: false
        });
        return formData;
    }, [
        contextRef
    ]);
    const reset = (0, _react.useCallback)(async (fieldSchema, data)=>{
        const preferences = await getDocPreferences();
        const state = await (0, _buildStateFromSchema.default)({
            id,
            config,
            data,
            fieldSchema,
            locale,
            operation,
            preferences,
            t,
            user
        });
        contextRef.current = {
            ..._initContextState.default
        };
        setModified(false);
        dispatchFields({
            type: 'REPLACE_STATE',
            state
        });
    }, [
        id,
        user,
        operation,
        locale,
        t,
        dispatchFields,
        getDocPreferences,
        config
    ]);
    const replaceState = (0, _react.useCallback)((state)=>{
        contextRef.current = {
            ..._initContextState.default
        };
        setModified(false);
        dispatchFields({
            type: 'REPLACE_STATE',
            state
        });
    }, [
        dispatchFields
    ]);
    contextRef.current.submit = submit;
    contextRef.current.getFields = getFields;
    contextRef.current.getField = getField;
    contextRef.current.getData = getData;
    contextRef.current.getSiblingData = getSiblingData;
    contextRef.current.getDataByPath = getDataByPath;
    contextRef.current.validateForm = validateForm;
    contextRef.current.createFormData = createFormData;
    contextRef.current.setModified = setModified;
    contextRef.current.setProcessing = setProcessing;
    contextRef.current.setSubmitted = setSubmitted;
    contextRef.current.disabled = disabled;
    contextRef.current.formRef = formRef;
    contextRef.current.reset = reset;
    contextRef.current.replaceState = replaceState;
    contextRef.current.buildRowErrors = buildRowErrors;
    contextRef.current.addFieldRow = addFieldRow;
    contextRef.current.removeFieldRow = removeFieldRow;
    contextRef.current.replaceFieldRow = replaceFieldRow;
    (0, _react.useEffect)(()=>{
        if (typeof submittedFromProps === 'boolean') setSubmitted(submittedFromProps);
    }, [
        submittedFromProps
    ]);
    (0, _react.useEffect)(()=>{
        if (initialState) {
            contextRef.current = {
                ..._initContextState.default
            };
            dispatchFields({
                type: 'REPLACE_STATE',
                state: initialState
            });
        }
    }, [
        initialState,
        dispatchFields
    ]);
    (0, _react.useEffect)(()=>{
        if (initialData) {
            contextRef.current = {
                ..._initContextState.default
            };
            const builtState = (0, _buildInitialState.default)(initialData);
            setFormattedInitialData(builtState);
            dispatchFields({
                type: 'REPLACE_STATE',
                state: builtState
            });
        }
    }, [
        initialData,
        dispatchFields
    ]);
    (0, _useThrottledEffect.default)(()=>{
        refreshCookie();
    }, 15000, [
        fields
    ]);
    (0, _react.useEffect)(()=>{
        contextRef.current = {
            ...contextRef.current
        } // triggers rerender of all components that subscribe to form
        ;
        setModified(false);
    }, [
        locale
    ]);
    const classes = [
        className,
        baseClass
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ _react.default.createElement("form", {
        action: action,
        className: classes,
        method: method,
        noValidate: true,
        onSubmit: (e)=>contextRef.current.submit({}, e),
        ref: formRef
    }, /*#__PURE__*/ _react.default.createElement(_context.FormContext.Provider, {
        value: contextRef.current
    }, /*#__PURE__*/ _react.default.createElement(_context.FormWatchContext.Provider, {
        value: {
            fields,
            ...contextRef.current
        }
    }, /*#__PURE__*/ _react.default.createElement(_context.SubmittedContext.Provider, {
        value: submitted
    }, /*#__PURE__*/ _react.default.createElement(_context.ProcessingContext.Provider, {
        value: processing
    }, /*#__PURE__*/ _react.default.createElement(_context.ModifiedContext.Provider, {
        value: modified
    }, /*#__PURE__*/ _react.default.createElement(_context.FormFieldsContext.Provider, {
        value: fieldsReducer
    }, /*#__PURE__*/ _react.default.createElement(_WatchFormErrors.WatchFormErrors, {
        buildRowErrors: buildRowErrors
    }), children)))))));
};
const _default = Form;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgaXNEZWVwRXF1YWwgZnJvbSAnZGVlcC1lcXVhbCdcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ29iamVjdC10by1mb3JtZGF0YSdcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUge1xuICBDb250ZXh0LFxuICBGaWVsZHMsXG4gIENvbnRleHQgYXMgRm9ybUNvbnRleHRUeXBlLFxuICBHZXREYXRhQnlQYXRoLFxuICBQcm9wcyxcbiAgUm93LFxuICBTdWJtaXRPcHRpb25zLFxufSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pc051bWJlcidcbmltcG9ydCB7IHNldHNBcmVFcXVhbCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9zZXRzQXJlRXF1YWwnXG5pbXBvcnQgeyBzcGxpdFBhdGhCeUFycmF5RmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3NwbGl0UGF0aEJ5QXJyYXlGaWVsZHMnXG5pbXBvcnQgd2FpdCBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvd2FpdCdcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnXG5pbXBvcnQgeyB1c2VPcGVyYXRpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvT3BlcmF0aW9uUHJvdmlkZXInXG5pbXBvcnQgeyBXYXRjaEZvcm1FcnJvcnMgfSBmcm9tICcuL1dhdGNoRm9ybUVycm9ycydcbmltcG9ydCB7IGJ1aWxkRmllbGRTY2hlbWFNYXAgfSBmcm9tICcuL2J1aWxkRmllbGRTY2hlbWFNYXAnXG5pbXBvcnQgYnVpbGRJbml0aWFsU3RhdGUgZnJvbSAnLi9idWlsZEluaXRpYWxTdGF0ZSdcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuL2J1aWxkU3RhdGVGcm9tU2NoZW1hJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRleHQsXG4gIEZvcm1GaWVsZHNDb250ZXh0LFxuICBGb3JtV2F0Y2hDb250ZXh0LFxuICBNb2RpZmllZENvbnRleHQsXG4gIFByb2Nlc3NpbmdDb250ZXh0LFxuICBTdWJtaXR0ZWRDb250ZXh0LFxufSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgZXJyb3JNZXNzYWdlcyBmcm9tICcuL2Vycm9yTWVzc2FnZXMnXG5pbXBvcnQgeyBmaWVsZFJlZHVjZXIgfSBmcm9tICcuL2ZpZWxkUmVkdWNlcidcbmltcG9ydCBnZXREYXRhQnlQYXRoRnVuYyBmcm9tICcuL2dldERhdGFCeVBhdGgnXG5pbXBvcnQgZ2V0U2libGluZ0RhdGFGdW5jIGZyb20gJy4vZ2V0U2libGluZ0RhdGEnXG5pbXBvcnQgaW5pdENvbnRleHRTdGF0ZSBmcm9tICcuL2luaXRDb250ZXh0U3RhdGUnXG5pbXBvcnQgcmVkdWNlRmllbGRzVG9WYWx1ZXMgZnJvbSAnLi9yZWR1Y2VGaWVsZHNUb1ZhbHVlcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Zvcm0nXG5cbmNvbnN0IEZvcm06IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlkLCBjb2xsZWN0aW9uLCBnZXREb2NQcmVmZXJlbmNlcywgZ2xvYmFsIH0gPSB1c2VEb2N1bWVudEluZm8oKVxuXG4gIGNvbnN0IHtcbiAgICBhY3Rpb24sXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzLFxuICAgIGRpc2FibGVkLFxuICAgIGZpZWxkczogZmllbGRzRnJvbVByb3BzID0gY29sbGVjdGlvbj8uZmllbGRzIHx8IGdsb2JhbD8uZmllbGRzLFxuICAgIGhhbmRsZVJlc3BvbnNlLFxuICAgIGluaXRpYWxEYXRhLCAvLyB2YWx1ZXMgb25seSwgcGF0aHMgYXJlIHJlcXVpcmVkIGFzIGtleSAtIGZvcm0gc2hvdWxkIGJ1aWxkIGluaXRpYWwgc3RhdGUgYXMgY29udmVuaWVuY2VcbiAgICBpbml0aWFsU3RhdGUsIC8vIGZ1bGx5IGZvcm1lZCBpbml0aWFsIGZpZWxkIHN0YXRlXG4gICAgbWV0aG9kLFxuICAgIG9uU3VibWl0LFxuICAgIG9uU3VjY2VzcyxcbiAgICByZWRpcmVjdCxcbiAgICBzdWJtaXR0ZWQ6IHN1Ym1pdHRlZEZyb21Qcm9wcyxcbiAgICB3YWl0Rm9yQXV0b2NvbXBsZXRlLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgeyByZWZyZXNoQ29va2llLCB1c2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3Qgb3BlcmF0aW9uID0gdXNlT3BlcmF0aW9uKClcblxuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IFttb2RpZmllZCwgc2V0TW9kaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmb3JtYXR0ZWRJbml0aWFsRGF0YSwgc2V0Rm9ybWF0dGVkSW5pdGlhbERhdGFdID0gdXNlU3RhdGUoYnVpbGRJbml0aWFsU3RhdGUoaW5pdGlhbERhdGEpKVxuXG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKVxuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKHt9IGFzIEZvcm1Db250ZXh0VHlwZSlcblxuICBsZXQgaW5pdGlhbEZpZWxkU3RhdGUgPSB7fVxuXG4gIGlmIChmb3JtYXR0ZWRJbml0aWFsRGF0YSkgaW5pdGlhbEZpZWxkU3RhdGUgPSBmb3JtYXR0ZWRJbml0aWFsRGF0YVxuICBpZiAoaW5pdGlhbFN0YXRlKSBpbml0aWFsRmllbGRTdGF0ZSA9IGluaXRpYWxTdGF0ZVxuXG4gIGNvbnN0IGZpZWxkc1JlZHVjZXIgPSB1c2VSZWR1Y2VyKGZpZWxkUmVkdWNlciwge30sICgpID0+IGluaXRpYWxGaWVsZFN0YXRlKVxuICAvKipcbiAgICogYGZpZWxkc2AgaXMgdGhlIGN1cnJlbnQsIHVwLXRvLWRhdGUgc3RhdGUvZGF0YSBvZiBhbGwgZmllbGRzIGluIHRoZSBmb3JtLiBJdCBjYW4gYmUgbW9kaWZpZWQgYnkgdXNpbmcgZGlzcGF0Y2hGaWVsZHMsXG4gICAqIHdoaWNoIGNhbGxzIHRoZSBmaWVsZFJlZHVjZXIsIHdoaWNoIHRoZW4gdXBkYXRlcyB0aGUgc3RhdGUuXG4gICAqL1xuICBjb25zdCBbZmllbGRzLCBkaXNwYXRjaEZpZWxkc10gPSBmaWVsZHNSZWR1Y2VyXG5cbiAgY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcyA9IGZpZWxkc1xuICBjb250ZXh0UmVmLmN1cnJlbnQuZGlzcGF0Y2hGaWVsZHMgPSBkaXNwYXRjaEZpZWxkc1xuXG4gIC8vIEJ1aWxkIGEgY3VycmVudCBzZXQgb2YgY2hpbGQgZXJyb3JzIGZvciBhbGwgcm93cyBpbiBmb3JtIHN0YXRlXG4gIGNvbnN0IGJ1aWxkUm93RXJyb3JzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nRmllbGRSb3dzOiB7IFtwYXRoOiBzdHJpbmddOiBSb3dbXSB9ID0ge31cbiAgICBjb25zdCBuZXdGaWVsZFJvd3M6IHsgW3BhdGg6IHN0cmluZ106IFJvd1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZmllbGRzKS5mb3JFYWNoKChbcGF0aCwgZmllbGRdKSA9PiB7XG4gICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBzcGxpdFBhdGhCeUFycmF5RmllbGRzKHBhdGgpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFNlZ21lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkUGF0aCA9IHBhdGhTZWdtZW50cy5zbGljZSgwLCBpICsgMSkuam9pbignLicpXG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZCA9IGZpZWxkcz8uW2ZpZWxkUGF0aF1cblxuICAgICAgICAvLyBJcyB0aGlzIGFuIGFycmF5IG9yIGJsb2NrcyBmaWVsZD9cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybUZpZWxkPy5yb3dzKSkge1xuICAgICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGV4aXN0aW5nIHJvdyBzdGF0ZVxuICAgICAgICAgIGV4aXN0aW5nRmllbGRSb3dzW2ZpZWxkUGF0aF0gPSBmb3JtRmllbGQucm93c1xuXG4gICAgICAgICAgLy8gQSBuZXcgcm93IHN0YXRlIHdpbGwgYmUgdXNlZCB0byBjb21wYXJlXG4gICAgICAgICAgLy8gYWdhaW5zdCB0aGUgb2xkIHN0YXRlIGxhdGVyLFxuICAgICAgICAgIC8vIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIGRpc3BhdGNoIGFuIHVwZGF0ZVxuICAgICAgICAgIGlmICghbmV3RmllbGRSb3dzW2ZpZWxkUGF0aF0pIHtcbiAgICAgICAgICAgIG5ld0ZpZWxkUm93c1tmaWVsZFBhdGhdID0gZm9ybUZpZWxkLnJvd3MubWFwKChleGlzdGluZ1JvdykgPT4gKHtcbiAgICAgICAgICAgICAgLi4uZXhpc3RpbmdSb3csXG4gICAgICAgICAgICAgIGNoaWxkRXJyb3JQYXRoczogbmV3IFNldCgpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXRoU2VnbWVudHNbaSArIDFdXG4gICAgICAgICAgY29uc3QgY2hpbGRGaWVsZFBhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoaSArIDEpLmpvaW4oJy4nKVxuXG4gICAgICAgICAgaWYgKGZpZWxkLnZhbGlkID09PSBmYWxzZSAmJiBjaGlsZEZpZWxkUGF0aCkge1xuICAgICAgICAgICAgbmV3RmllbGRSb3dzW2ZpZWxkUGF0aF1bcm93SW5kZXhdLmNoaWxkRXJyb3JQYXRocy5hZGQoYCR7ZmllbGRQYXRofS4ke2NoaWxkRmllbGRQYXRofWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIE5vdyBsb29wIG92ZXIgYWxsIGZpZWxkcyB3aXRoIHJvd3MgLVxuICAgIC8vIGlmIGFueXRoaW5nIGNoYW5nZWQsIGRpc3BhdGNoIGFuIHVwZGF0ZSBmb3IgdGhlIGZpZWxkXG4gICAgLy8gd2l0aCB0aGUgbmV3IHJvdyBzdGF0ZVxuICAgIE9iamVjdC5lbnRyaWVzKG5ld0ZpZWxkUm93cykuZm9yRWFjaCgoW3BhdGgsIG5ld1Jvd3NdKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZU1hdGNoZXMgPSBuZXdSb3dzLmV2ZXJ5KChuZXdSb3csIGkpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdSb3dFcnJvclBhdGhzID0gZXhpc3RpbmdGaWVsZFJvd3NbcGF0aF1baV0/LmNoaWxkRXJyb3JQYXRoc1xuICAgICAgICByZXR1cm4gc2V0c0FyZUVxdWFsKG5ld1Jvdy5jaGlsZEVycm9yUGF0aHMsIGV4aXN0aW5nUm93RXJyb3JQYXRocylcbiAgICAgIH0pXG5cbiAgICAgIGlmICghc3RhdGVNYXRjaGVzKSB7XG4gICAgICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgICAgICB0eXBlOiAnVVBEQVRFJyxcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW2ZpZWxkcywgZGlzcGF0Y2hGaWVsZHNdKVxuXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZFN0YXRlID0ge31cbiAgICBsZXQgaXNWYWxpZCA9IHRydWVcbiAgICBjb25zdCBkYXRhID0gY29udGV4dFJlZi5jdXJyZW50LmdldERhdGEoKVxuXG4gICAgY29uc3QgdmFsaWRhdGlvblByb21pc2VzID0gT2JqZWN0LmVudHJpZXMoY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcykubWFwKFxuICAgICAgYXN5bmMgKFtwYXRoLCBmaWVsZF0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGQgPSB7XG4gICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQucGFzc2VzQ29uZGl0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZC52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlVG9WYWxpZGF0ZSA9IGZpZWxkLnZhbHVlXG5cbiAgICAgICAgICAgIGlmIChmaWVsZD8ucm93cyAmJiBBcnJheS5pc0FycmF5KGZpZWxkLnJvd3MpKSB7XG4gICAgICAgICAgICAgIHZhbHVlVG9WYWxpZGF0ZSA9IGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhQnlQYXRoKHBhdGgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCBmaWVsZC52YWxpZGF0ZSh2YWx1ZVRvVmFsaWRhdGUsIHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlOiBmaWVsZC5wcmV2aW91c1ZhbHVlLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogY29udGV4dFJlZi5jdXJyZW50LmdldFNpYmxpbmdEYXRhKHBhdGgpLFxuICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZC5lcnJvck1lc3NhZ2UgPSB2YWxpZGF0aW9uUmVzdWx0XG4gICAgICAgICAgICB2YWxpZGF0ZWRGaWVsZC52YWxpZCA9IGZhbHNlXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0ZWRGaWVsZFN0YXRlW3BhdGhdID0gdmFsaWRhdGVkRmllbGRcbiAgICAgIH0sXG4gICAgKVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodmFsaWRhdGlvblByb21pc2VzKVxuXG4gICAgaWYgKCFpc0RlZXBFcXVhbChjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCB2YWxpZGF0ZWRGaWVsZFN0YXRlKSkge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiB2YWxpZGF0ZWRGaWVsZFN0YXRlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfSwgW2NvbnRleHRSZWYsIGlkLCB1c2VyLCBvcGVyYXRpb24sIHQsIGRpc3BhdGNoRmllbGRzLCBjb25maWddKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChvcHRpb25zOiBTdWJtaXRPcHRpb25zID0ge30sIGUpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25Ub1VzZSA9IGFjdGlvbixcbiAgICAgICAgbWV0aG9kOiBtZXRob2RUb1VzZSA9IG1ldGhvZCxcbiAgICAgICAgb3ZlcnJpZGVzID0ge30sXG4gICAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgICAgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIHNldFByb2Nlc3NpbmcodHJ1ZSlcblxuICAgICAgaWYgKHdhaXRGb3JBdXRvY29tcGxldGUpIGF3YWl0IHdhaXQoMTAwKVxuXG4gICAgICBjb25zdCBpc1ZhbGlkID0gc2tpcFZhbGlkYXRpb24gPyB0cnVlIDogYXdhaXQgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSgpXG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQuYnVpbGRSb3dFcnJvcnMoKVxuXG4gICAgICBpZiAoIXNraXBWYWxpZGF0aW9uKSBzZXRTdWJtaXR0ZWQodHJ1ZSlcblxuICAgICAgLy8gSWYgbm90IHZhbGlkLCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjpjb3JyZWN0SW52YWxpZEZpZWxkcycpKVxuICAgICAgICBzZXRQcm9jZXNzaW5nKGZhbHNlKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBzdWJtaXQgaGFuZGxlciBjb21lcyB0aHJvdWdoIHZpYSBwcm9wcywgcnVuIHRoYXRcbiAgICAgIGlmIChvblN1Ym1pdCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIC4uLnJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSksXG4gICAgICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgICAgICB9XG5cbiAgICAgICAgb25TdWJtaXQoZmllbGRzLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IGNvbnRleHRSZWYuY3VycmVudC5jcmVhdGVGb3JtRGF0YShvdmVycmlkZXMpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RzW21ldGhvZFRvVXNlLnRvTG93ZXJDYXNlKCldKGFjdGlvblRvVXNlLCB7XG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRNb2RpZmllZChmYWxzZSlcblxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZVJlc3BvbnNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSlcblxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJylcbiAgICAgICAgY29uc3QgaXNKU09OID0gY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMVxuXG4gICAgICAgIGxldCBqc29uOiBhbnkgPSB7fVxuXG4gICAgICAgIGlmIChpc0pTT04pIGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpXG5cbiAgICAgICAgICBpZiAodHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykgb25TdWNjZXNzKGpzb24pXG5cbiAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0ge1xuICAgICAgICAgICAgICBwYXRobmFtZTogcmVkaXJlY3QsXG4gICAgICAgICAgICAgIHN0YXRlOiB7fSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSAnb2JqZWN0JyAmJiBqc29uLm1lc3NhZ2UgJiYgIWRpc2FibGVTdWNjZXNzU3RhdHVzKSB7XG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGpzb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goZGVzdGluYXRpb24pXG4gICAgICAgICAgfSBlbHNlIGlmICghZGlzYWJsZVN1Y2Nlc3NTdGF0dXMpIHtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tZXNzYWdlIHx8IHQoJ3N1Ym1pc3Npb25TdWNjZXNzZnVsJyksIHsgYXV0b0Nsb3NlOiAzMDAwIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHRSZWYuY3VycmVudCA9IHsgLi4uY29udGV4dFJlZi5jdXJyZW50IH0gLy8gdHJpZ2dlcnMgcmVyZW5kZXIgb2YgYWxsIGNvbXBvbmVudHMgdGhhdCBzdWJzY3JpYmUgdG8gZm9ybVxuXG4gICAgICAgICAgaWYgKGpzb24ubWVzc2FnZSkge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoanNvbi5tZXNzYWdlKVxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uLmVycm9ycykpIHtcbiAgICAgICAgICAgIGNvbnN0IFtmaWVsZEVycm9ycywgbm9uRmllbGRFcnJvcnNdID0ganNvbi5lcnJvcnMucmVkdWNlKFxuICAgICAgICAgICAgICAoW2ZpZWxkRXJycywgbm9uRmllbGRFcnJzXSwgZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RmllbGRFcnJzID0gW11cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb25GaWVsZEVycnMgPSBbXVxuXG4gICAgICAgICAgICAgICAgaWYgKGVycj8ubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgbmV3Tm9uRmllbGRFcnJzLnB1c2goZXJyKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVycj8uZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgIGVyci5kYXRhLmZvckVhY2goKGRhdGFFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUVycm9yPy5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpZWxkRXJycy5wdXNoKGRhdGFFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdOb25GaWVsZEVycnMucHVzaChkYXRhRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIFsuLi5maWVsZEVycnMsIC4uLm5ld0ZpZWxkRXJyc10sXG4gICAgICAgICAgICAgICAgICBbLi4ubm9uRmllbGRFcnJzLCAuLi5uZXdOb25GaWVsZEVycnNdLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1tdLCBbXV0sXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZpZWxkRXJyb3JzLmZvckVhY2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaEZpZWxkcyh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgICAgICAgICAgLi4uKGNvbnRleHRSZWYuY3VycmVudD8uZmllbGRzPy5bZXJyLmZpZWxkXSB8fCB7fSksXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBwYXRoOiBlcnIuZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbm9uRmllbGRFcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlIHx8IHQoJ2Vycm9yOnVua25vd24nKSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VzW3Jlcy5zdGF0dXNdIHx8IHQoJ2Vycm9yOnVua25vd24nKVxuXG4gICAgICAgICAgdG9hc3QuZXJyb3IobWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpXG5cbiAgICAgICAgdG9hc3QuZXJyb3IoZXJyKVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgYWN0aW9uLFxuICAgICAgZGlzYWJsZVN1Y2Nlc3NTdGF0dXMsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGRpc3BhdGNoRmllbGRzLFxuICAgICAgZmllbGRzLFxuICAgICAgaGFuZGxlUmVzcG9uc2UsXG4gICAgICBoaXN0b3J5LFxuICAgICAgbWV0aG9kLFxuICAgICAgb25TdWJtaXQsXG4gICAgICBvblN1Y2Nlc3MsXG4gICAgICByZWRpcmVjdCxcbiAgICAgIHQsXG4gICAgICBpMThuLFxuICAgICAgd2FpdEZvckF1dG9jb21wbGV0ZSxcbiAgICBdLFxuICApXG5cbiAgY29uc3QgdHJhdmVyc2VSb3dDb25maWdzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIGZpZWxkQ29uZmlnLFxuICAgICAgcGF0aCxcbiAgICAgIHBhdGhQcmVmaXgsXG4gICAgfToge1xuICAgICAgZmllbGRDb25maWc6IEZpZWxkW11cbiAgICAgIHBhdGg6IHN0cmluZ1xuICAgICAgcGF0aFByZWZpeD86IHN0cmluZ1xuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGZpZWxkQ29uZmlnXG4gICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBzcGxpdFBhdGhCeUFycmF5RmllbGRzKHBhdGgpXG4gICAgICBjb25zdCBjb25maWdNYXAgPSBidWlsZEZpZWxkU2NoZW1hTWFwKGNvbmZpZylcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV1cblxuICAgICAgICBpZiAoaXNOdW1iZXIocGF0aFNlZ21lbnQpKSB7XG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChwYXRoU2VnbWVudCwgMTApXG4gICAgICAgICAgY29uc3QgcGFyZW50RmllbGRQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKDAsIGkpLmpvaW4oJy4nKVxuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1BhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoaSArIDEpLmpvaW4oJy4nKVxuICAgICAgICAgIGNvbnN0IGFycmF5RmllbGRQYXRoID0gcGF0aFByZWZpeCA/IGAke3BhdGhQcmVmaXh9LiR7cGFyZW50RmllbGRQYXRofWAgOiBwYXJlbnRGaWVsZFBhdGhcbiAgICAgICAgICBjb25zdCBwYXJlbnRBcnJheUZpZWxkID0gY29udGV4dFJlZi5jdXJyZW50LmdldEZpZWxkKGFycmF5RmllbGRQYXRoKVxuICAgICAgICAgIGNvbnN0IHJvd0ZpZWxkID0gcGFyZW50QXJyYXlGaWVsZC5yb3dzW3Jvd0luZGV4XVxuXG4gICAgICAgICAgaWYgKHJvd0ZpZWxkLmJsb2NrVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgYmxvY2tDb25maWcgPSBjb25maWdNYXAuZ2V0KGAke3BhcmVudEZpZWxkUGF0aH0uJHtyb3dGaWVsZC5ibG9ja1R5cGV9YClcbiAgICAgICAgICAgIGlmIChibG9ja0NvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJhdmVyc2VSb3dDb25maWdzKHtcbiAgICAgICAgICAgICAgICBmaWVsZENvbmZpZzogYmxvY2tDb25maWcsXG4gICAgICAgICAgICAgICAgcGF0aDogcmVtYWluaW5nUGF0aCxcbiAgICAgICAgICAgICAgICBwYXRoUHJlZml4OiBgJHthcnJheUZpZWxkUGF0aH0uJHtyb3dJbmRleH1gLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJsb2NrIGNvbmZpZyBub3QgZm91bmQgZm9yICR7cm93RmllbGQuYmxvY2tUeXBlfSBhdCBwYXRoICR7cGF0aH1gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhdmVyc2VSb3dDb25maWdzKHtcbiAgICAgICAgICAgICAgZmllbGRDb25maWc6IGNvbmZpZ01hcC5nZXQocGFyZW50RmllbGRQYXRoKSxcbiAgICAgICAgICAgICAgcGF0aDogcmVtYWluaW5nUGF0aCxcbiAgICAgICAgICAgICAgcGF0aFByZWZpeDogYCR7YXJyYXlGaWVsZFBhdGh9LiR7cm93SW5kZXh9YCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuICAgIFtdLFxuICApXG5cbiAgY29uc3QgZ2V0Um93U2NoZW1hQnlQYXRoID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHsgYmxvY2tUeXBlLCBwYXRoIH06IHsgYmxvY2tUeXBlPzogc3RyaW5nOyBwYXRoOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgY29uc3Qgcm93Q29uZmlnID0gdHJhdmVyc2VSb3dDb25maWdzKHtcbiAgICAgICAgZmllbGRDb25maWc6IGZpZWxkc0Zyb21Qcm9wcyxcbiAgICAgICAgcGF0aCxcbiAgICAgIH0pXG4gICAgICBjb25zdCByb3dGaWVsZENvbmZpZ3MgPSBidWlsZEZpZWxkU2NoZW1hTWFwKHJvd0NvbmZpZylcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHNwbGl0UGF0aEJ5QXJyYXlGaWVsZHMocGF0aClcbiAgICAgIGNvbnN0IGZpZWxkS2V5ID0gcGF0aFNlZ21lbnRzLmF0KC0xKVxuICAgICAgcmV0dXJuIHJvd0ZpZWxkQ29uZmlncy5nZXQoYmxvY2tUeXBlID8gYCR7ZmllbGRLZXl9LiR7YmxvY2tUeXBlfWAgOiBmaWVsZEtleSlcbiAgICB9LFxuICAgIFt0cmF2ZXJzZVJvd0NvbmZpZ3MsIGZpZWxkc0Zyb21Qcm9wc10sXG4gIClcblxuICAvLyBBcnJheS9CbG9jayByb3cgbWFuaXB1bGF0aW9uLiBUaGlzIGlzIGNhbGxlZCB3aGVuLCBmb3IgZXhhbXBsZSwgeW91IGFkZCBhIG5ldyBibG9jayB0byBhIGJsb2NrcyBmaWVsZC5cbiAgLy8gVGhlIGJsb2NrIGRhdGEgaXMgc2F2ZWQgaW4gdGhlIHJvd3MgcHJvcGVydHkgb2YgdGhlIHN0YXRlLCB3aGljaCBpcyBtb2RpZmllZCB1cGRhdGVkIGhlcmUuXG4gIGNvbnN0IGFkZEZpZWxkUm93OiBDb250ZXh0WydhZGRGaWVsZFJvdyddID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHsgZGF0YSwgcGF0aCwgcm93SW5kZXggfSkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpXG4gICAgICBjb25zdCByb3dTY2hlbWEgPSBnZXRSb3dTY2hlbWFCeVBhdGgoe1xuICAgICAgICBibG9ja1R5cGU6IGRhdGE/LmJsb2NrVHlwZSxcbiAgICAgICAgcGF0aCxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChyb3dTY2hlbWEpIHtcbiAgICAgICAgY29uc3Qgc3ViRmllbGRTdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBmaWVsZFNjaGVtYTogcm93U2NoZW1hLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgICAgdCxcbiAgICAgICAgICB1c2VyLFxuICAgICAgICB9KVxuXG4gICAgICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgICAgICB0eXBlOiAnQUREX1JPVycsXG4gICAgICAgICAgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICBzdWJGaWVsZFN0YXRlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgW2Rpc3BhdGNoRmllbGRzLCBnZXREb2NQcmVmZXJlbmNlcywgaWQsIHVzZXIsIG9wZXJhdGlvbiwgbG9jYWxlLCB0LCBnZXRSb3dTY2hlbWFCeVBhdGgsIGNvbmZpZ10sXG4gIClcblxuICBjb25zdCByZW1vdmVGaWVsZFJvdzogQ29udGV4dFsncmVtb3ZlRmllbGRSb3cnXSA9IHVzZUNhbGxiYWNrKFxuICAgICh7IHBhdGgsIHJvd0luZGV4IH0pID0+IHtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFTU9WRV9ST1cnLCBwYXRoLCByb3dJbmRleCB9KVxuICAgIH0sXG4gICAgW2Rpc3BhdGNoRmllbGRzXSxcbiAgKVxuXG4gIGNvbnN0IHJlcGxhY2VGaWVsZFJvdzogQ29udGV4dFsncmVwbGFjZUZpZWxkUm93J10gPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoeyBkYXRhLCBwYXRoLCByb3dJbmRleCB9KSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKClcbiAgICAgIGNvbnN0IHJvd1NjaGVtYSA9IGdldFJvd1NjaGVtYUJ5UGF0aCh7XG4gICAgICAgIGJsb2NrVHlwZTogZGF0YT8uYmxvY2tUeXBlLFxuICAgICAgICBwYXRoLFxuICAgICAgfSlcblxuICAgICAgaWYgKHJvd1NjaGVtYSkge1xuICAgICAgICBjb25zdCBzdWJGaWVsZFN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkU2NoZW1hOiByb3dTY2hlbWEsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICBwcmVmZXJlbmNlcyxcbiAgICAgICAgICB0LFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgIH0pXG4gICAgICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgICAgICB0eXBlOiAnUkVQTEFDRV9ST1cnLFxuICAgICAgICAgIGJsb2NrVHlwZTogZGF0YT8uYmxvY2tUeXBlLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgc3ViRmllbGRTdGF0ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkaXNwYXRjaEZpZWxkcywgZ2V0RG9jUHJlZmVyZW5jZXMsIGlkLCB1c2VyLCBvcGVyYXRpb24sIGxvY2FsZSwgdCwgZ2V0Um93U2NoZW1hQnlQYXRoLCBjb25maWddLFxuICApXG5cbiAgY29uc3QgZ2V0RmllbGRzID0gdXNlQ2FsbGJhY2soKCkgPT4gY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcywgW2NvbnRleHRSZWZdKVxuICBjb25zdCBnZXRGaWVsZCA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcpID0+IGNvbnRleHRSZWYuY3VycmVudC5maWVsZHNbcGF0aF0sIFtjb250ZXh0UmVmXSlcbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHRydWUpLFxuICAgIFtjb250ZXh0UmVmXSxcbiAgKVxuICBjb25zdCBnZXRTaWJsaW5nRGF0YSA9IHVzZUNhbGxiYWNrKFxuICAgIChwYXRoOiBzdHJpbmcpID0+IGdldFNpYmxpbmdEYXRhRnVuYyhjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCBwYXRoKSxcbiAgICBbY29udGV4dFJlZl0sXG4gIClcbiAgY29uc3QgZ2V0RGF0YUJ5UGF0aCA9IHVzZUNhbGxiYWNrPEdldERhdGFCeVBhdGg+KFxuICAgIChwYXRoOiBzdHJpbmcpID0+IGdldERhdGFCeVBhdGhGdW5jKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHBhdGgpLFxuICAgIFtjb250ZXh0UmVmXSxcbiAgKVxuXG4gIGNvbnN0IGNyZWF0ZUZvcm1EYXRhID0gdXNlQ2FsbGJhY2soXG4gICAgKG92ZXJyaWRlczogYW55ID0ge30pID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZWR1Y2VGaWVsZHNUb1ZhbHVlcyhjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCB0cnVlKVxuXG4gICAgICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZVxuXG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICBkZWxldGUgZGF0YS5maWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGFXaXRoT3ZlcnJpZGVzID0ge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICAuLi5vdmVycmlkZXMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGFUb1NlcmlhbGl6ZSA9IHtcbiAgICAgICAgX3BheWxvYWQ6IEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoT3ZlcnJpZGVzKSxcbiAgICAgICAgZmlsZSxcbiAgICAgIH1cblxuICAgICAgLy8gbnVsbEFzVW5kZWZpbmVkcyBpcyBpbXBvcnRhbnQgdG8gYWxsb3cgdXBsb2FkcyBhbmQgcmVsYXRpb25zaGlwIGZpZWxkcyB0byBjbGVhciB0aGVtc2VsdmVzXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHNlcmlhbGl6ZShkYXRhVG9TZXJpYWxpemUsIHsgaW5kaWNlczogdHJ1ZSwgbnVsbHNBc1VuZGVmaW5lZHM6IGZhbHNlIH0pXG4gICAgICByZXR1cm4gZm9ybURhdGFcbiAgICB9LFxuICAgIFtjb250ZXh0UmVmXSxcbiAgKVxuXG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGZpZWxkU2NoZW1hOiBGaWVsZFtdLCBkYXRhOiB1bmtub3duKSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKClcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBmaWVsZFNjaGVtYSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICB0LFxuICAgICAgICB1c2VyLFxuICAgICAgfSlcbiAgICAgIGNvbnRleHRSZWYuY3VycmVudCA9IHsgLi4uaW5pdENvbnRleHRTdGF0ZSB9IGFzIEZvcm1Db250ZXh0VHlwZVxuICAgICAgc2V0TW9kaWZpZWQoZmFsc2UpXG4gICAgICBkaXNwYXRjaEZpZWxkcyh7IHR5cGU6ICdSRVBMQUNFX1NUQVRFJywgc3RhdGUgfSlcbiAgICB9LFxuICAgIFtpZCwgdXNlciwgb3BlcmF0aW9uLCBsb2NhbGUsIHQsIGRpc3BhdGNoRmllbGRzLCBnZXREb2NQcmVmZXJlbmNlcywgY29uZmlnXSxcbiAgKVxuXG4gIGNvbnN0IHJlcGxhY2VTdGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChzdGF0ZTogRmllbGRzKSA9PiB7XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGVcbiAgICAgIHNldE1vZGlmaWVkKGZhbHNlKVxuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlIH0pXG4gICAgfSxcbiAgICBbZGlzcGF0Y2hGaWVsZHNdLFxuICApXG5cbiAgY29udGV4dFJlZi5jdXJyZW50LnN1Ym1pdCA9IHN1Ym1pdFxuICBjb250ZXh0UmVmLmN1cnJlbnQuZ2V0RmllbGRzID0gZ2V0RmllbGRzXG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXRGaWVsZCA9IGdldEZpZWxkXG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhID0gZ2V0RGF0YVxuICBjb250ZXh0UmVmLmN1cnJlbnQuZ2V0U2libGluZ0RhdGEgPSBnZXRTaWJsaW5nRGF0YVxuICBjb250ZXh0UmVmLmN1cnJlbnQuZ2V0RGF0YUJ5UGF0aCA9IGdldERhdGFCeVBhdGhcbiAgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSA9IHZhbGlkYXRlRm9ybVxuICBjb250ZXh0UmVmLmN1cnJlbnQuY3JlYXRlRm9ybURhdGEgPSBjcmVhdGVGb3JtRGF0YVxuICBjb250ZXh0UmVmLmN1cnJlbnQuc2V0TW9kaWZpZWQgPSBzZXRNb2RpZmllZFxuICBjb250ZXh0UmVmLmN1cnJlbnQuc2V0UHJvY2Vzc2luZyA9IHNldFByb2Nlc3NpbmdcbiAgY29udGV4dFJlZi5jdXJyZW50LnNldFN1Ym1pdHRlZCA9IHNldFN1Ym1pdHRlZFxuICBjb250ZXh0UmVmLmN1cnJlbnQuZGlzYWJsZWQgPSBkaXNhYmxlZFxuICBjb250ZXh0UmVmLmN1cnJlbnQuZm9ybVJlZiA9IGZvcm1SZWZcbiAgY29udGV4dFJlZi5jdXJyZW50LnJlc2V0ID0gcmVzZXRcbiAgY29udGV4dFJlZi5jdXJyZW50LnJlcGxhY2VTdGF0ZSA9IHJlcGxhY2VTdGF0ZVxuICBjb250ZXh0UmVmLmN1cnJlbnQuYnVpbGRSb3dFcnJvcnMgPSBidWlsZFJvd0Vycm9yc1xuICBjb250ZXh0UmVmLmN1cnJlbnQuYWRkRmllbGRSb3cgPSBhZGRGaWVsZFJvd1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVtb3ZlRmllbGRSb3cgPSByZW1vdmVGaWVsZFJvd1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVwbGFjZUZpZWxkUm93ID0gcmVwbGFjZUZpZWxkUm93XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHN1Ym1pdHRlZEZyb21Qcm9wcyA9PT0gJ2Jvb2xlYW4nKSBzZXRTdWJtaXR0ZWQoc3VibWl0dGVkRnJvbVByb3BzKVxuICB9LCBbc3VibWl0dGVkRnJvbVByb3BzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICAgIGNvbnRleHRSZWYuY3VycmVudCA9IHsgLi4uaW5pdENvbnRleHRTdGF0ZSB9IGFzIEZvcm1Db250ZXh0VHlwZVxuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiBpbml0aWFsU3RhdGUgfSlcbiAgICB9XG4gIH0sIFtpbml0aWFsU3RhdGUsIGRpc3BhdGNoRmllbGRzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0aWFsRGF0YSkge1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50ID0geyAuLi5pbml0Q29udGV4dFN0YXRlIH0gYXMgRm9ybUNvbnRleHRUeXBlXG4gICAgICBjb25zdCBidWlsdFN0YXRlID0gYnVpbGRJbml0aWFsU3RhdGUoaW5pdGlhbERhdGEpXG4gICAgICBzZXRGb3JtYXR0ZWRJbml0aWFsRGF0YShidWlsdFN0YXRlKVxuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiBidWlsdFN0YXRlIH0pXG4gICAgfVxuICB9LCBbaW5pdGlhbERhdGEsIGRpc3BhdGNoRmllbGRzXSlcblxuICB1c2VUaHJvdHRsZWRFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgcmVmcmVzaENvb2tpZSgpXG4gICAgfSxcbiAgICAxNTAwMCxcbiAgICBbZmllbGRzXSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29udGV4dFJlZi5jdXJyZW50ID0geyAuLi5jb250ZXh0UmVmLmN1cnJlbnQgfSAvLyB0cmlnZ2VycyByZXJlbmRlciBvZiBhbGwgY29tcG9uZW50cyB0aGF0IHN1YnNjcmliZSB0byBmb3JtXG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpXG4gIH0sIFtsb2NhbGVdKVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBbY2xhc3NOYW1lLCBiYXNlQ2xhc3NdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG1ldGhvZD17bWV0aG9kfVxuICAgICAgbm9WYWxpZGF0ZVxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiBjb250ZXh0UmVmLmN1cnJlbnQuc3VibWl0KHt9LCBlKX1cbiAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICA+XG4gICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRSZWYuY3VycmVudH0+XG4gICAgICAgIDxGb3JtV2F0Y2hDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgIC4uLmNvbnRleHRSZWYuY3VycmVudCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN1Ym1pdHRlZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N1Ym1pdHRlZH0+XG4gICAgICAgICAgICA8UHJvY2Vzc2luZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb2Nlc3Npbmd9PlxuICAgICAgICAgICAgICA8TW9kaWZpZWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttb2RpZmllZH0+XG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmaWVsZHNSZWR1Y2VyfT5cbiAgICAgICAgICAgICAgICAgIDxXYXRjaEZvcm1FcnJvcnMgYnVpbGRSb3dFcnJvcnM9e2J1aWxkUm93RXJyb3JzfSAvPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDwvTW9kaWZpZWRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgPC9Qcm9jZXNzaW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L1N1Ym1pdHRlZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvRm9ybVdhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJGb3JtIiwicHJvcHMiLCJpZCIsImNvbGxlY3Rpb24iLCJnZXREb2NQcmVmZXJlbmNlcyIsImdsb2JhbCIsInVzZURvY3VtZW50SW5mbyIsImFjdGlvbiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVN1Y2Nlc3NTdGF0dXMiLCJkaXNhYmxlZCIsImZpZWxkcyIsImZpZWxkc0Zyb21Qcm9wcyIsImhhbmRsZVJlc3BvbnNlIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsU3RhdGUiLCJtZXRob2QiLCJvblN1Ym1pdCIsIm9uU3VjY2VzcyIsInJlZGlyZWN0Iiwic3VibWl0dGVkIiwic3VibWl0dGVkRnJvbVByb3BzIiwid2FpdEZvckF1dG9jb21wbGV0ZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiY29kZSIsImxvY2FsZSIsInVzZUxvY2FsZSIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJyZWZyZXNoQ29va2llIiwidXNlciIsInVzZUF1dGgiLCJvcGVyYXRpb24iLCJ1c2VPcGVyYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJtb2RpZmllZCIsInNldE1vZGlmaWVkIiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInNldFN1Ym1pdHRlZCIsImZvcm1hdHRlZEluaXRpYWxEYXRhIiwic2V0Rm9ybWF0dGVkSW5pdGlhbERhdGEiLCJidWlsZEluaXRpYWxTdGF0ZSIsImZvcm1SZWYiLCJ1c2VSZWYiLCJjb250ZXh0UmVmIiwiaW5pdGlhbEZpZWxkU3RhdGUiLCJmaWVsZHNSZWR1Y2VyIiwidXNlUmVkdWNlciIsImZpZWxkUmVkdWNlciIsImRpc3BhdGNoRmllbGRzIiwiY3VycmVudCIsImJ1aWxkUm93RXJyb3JzIiwidXNlQ2FsbGJhY2siLCJleGlzdGluZ0ZpZWxkUm93cyIsIm5ld0ZpZWxkUm93cyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwicGF0aCIsImZpZWxkIiwicGF0aFNlZ21lbnRzIiwic3BsaXRQYXRoQnlBcnJheUZpZWxkcyIsImkiLCJsZW5ndGgiLCJmaWVsZFBhdGgiLCJzbGljZSIsImpvaW4iLCJmb3JtRmllbGQiLCJBcnJheSIsImlzQXJyYXkiLCJyb3dzIiwibWFwIiwiZXhpc3RpbmdSb3ciLCJjaGlsZEVycm9yUGF0aHMiLCJTZXQiLCJyb3dJbmRleCIsImNoaWxkRmllbGRQYXRoIiwidmFsaWQiLCJhZGQiLCJuZXdSb3dzIiwic3RhdGVNYXRjaGVzIiwiZXZlcnkiLCJuZXdSb3ciLCJleGlzdGluZ1Jvd0Vycm9yUGF0aHMiLCJzZXRzQXJlRXF1YWwiLCJ0eXBlIiwidmFsaWRhdGVGb3JtIiwidmFsaWRhdGVkRmllbGRTdGF0ZSIsImlzVmFsaWQiLCJkYXRhIiwiZ2V0RGF0YSIsInZhbGlkYXRpb25Qcm9taXNlcyIsInZhbGlkYXRlZEZpZWxkIiwicGFzc2VzQ29uZGl0aW9uIiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkYXRlIiwidmFsdWVUb1ZhbGlkYXRlIiwidmFsdWUiLCJnZXREYXRhQnlQYXRoIiwicHJldmlvdXNWYWx1ZSIsInNpYmxpbmdEYXRhIiwiZ2V0U2libGluZ0RhdGEiLCJlcnJvck1lc3NhZ2UiLCJQcm9taXNlIiwiYWxsIiwiaXNEZWVwRXF1YWwiLCJzdGF0ZSIsInN1Ym1pdCIsIm9wdGlvbnMiLCJlIiwiYWN0aW9uVG9Vc2UiLCJtZXRob2RUb1VzZSIsIm92ZXJyaWRlcyIsInNraXBWYWxpZGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3YWl0IiwidG9hc3QiLCJlcnJvciIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZm9ybURhdGEiLCJjcmVhdGVGb3JtRGF0YSIsInJlcyIsInJlcXVlc3RzIiwidG9Mb3dlckNhc2UiLCJib2R5IiwiaGVhZGVycyIsImxhbmd1YWdlIiwiY29udGVudFR5cGUiLCJnZXQiLCJpc0pTT04iLCJpbmRleE9mIiwianNvbiIsInN0YXR1cyIsImRlc3RpbmF0aW9uIiwicGF0aG5hbWUiLCJtZXNzYWdlIiwicHVzaCIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJlcnJvcnMiLCJmaWVsZEVycm9ycyIsIm5vbkZpZWxkRXJyb3JzIiwicmVkdWNlIiwiZmllbGRFcnJzIiwibm9uRmllbGRFcnJzIiwiZXJyIiwibmV3RmllbGRFcnJzIiwibmV3Tm9uRmllbGRFcnJzIiwiZGF0YUVycm9yIiwiZXJyb3JNZXNzYWdlcyIsInRyYXZlcnNlUm93Q29uZmlncyIsIlJlYWN0IiwiZmllbGRDb25maWciLCJwYXRoUHJlZml4IiwiY29uZmlnTWFwIiwiYnVpbGRGaWVsZFNjaGVtYU1hcCIsInBhdGhTZWdtZW50IiwiaXNOdW1iZXIiLCJwYXJzZUludCIsInBhcmVudEZpZWxkUGF0aCIsInJlbWFpbmluZ1BhdGgiLCJhcnJheUZpZWxkUGF0aCIsInBhcmVudEFycmF5RmllbGQiLCJnZXRGaWVsZCIsInJvd0ZpZWxkIiwiYmxvY2tUeXBlIiwiYmxvY2tDb25maWciLCJFcnJvciIsImdldFJvd1NjaGVtYUJ5UGF0aCIsInJvd0NvbmZpZyIsInJvd0ZpZWxkQ29uZmlncyIsImZpZWxkS2V5IiwiYXQiLCJhZGRGaWVsZFJvdyIsInByZWZlcmVuY2VzIiwicm93U2NoZW1hIiwic3ViRmllbGRTdGF0ZSIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwiZmllbGRTY2hlbWEiLCJyZW1vdmVGaWVsZFJvdyIsInJlcGxhY2VGaWVsZFJvdyIsImdldEZpZWxkcyIsImdldFNpYmxpbmdEYXRhRnVuYyIsImdldERhdGFCeVBhdGhGdW5jIiwiZmlsZSIsImRhdGFXaXRoT3ZlcnJpZGVzIiwiZGF0YVRvU2VyaWFsaXplIiwiX3BheWxvYWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VyaWFsaXplIiwiaW5kaWNlcyIsIm51bGxzQXNVbmRlZmluZWRzIiwicmVzZXQiLCJpbml0Q29udGV4dFN0YXRlIiwicmVwbGFjZVN0YXRlIiwidXNlRWZmZWN0IiwiYnVpbHRTdGF0ZSIsInVzZVRocm90dGxlZEVmZmVjdCIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZm9ybSIsIm5vVmFsaWRhdGUiLCJyZWYiLCJGb3JtQ29udGV4dCIsIlByb3ZpZGVyIiwiRm9ybVdhdGNoQ29udGV4dCIsIlN1Ym1pdHRlZENvbnRleHQiLCJQcm9jZXNzaW5nQ29udGV4dCIsIk1vZGlmaWVkQ29udGV4dCIsIkZvcm1GaWVsZHNDb250ZXh0IiwiV2F0Y2hGb3JtRXJyb3JzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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