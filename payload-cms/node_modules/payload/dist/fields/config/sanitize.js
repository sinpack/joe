"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeFields", {
    enumerable: true,
    get: function() {
        return sanitizeFields;
    }
});
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/withCondition"));
const _errors = require("../../errors");
const _MissingEditorProps = /*#__PURE__*/ _interop_require_default(require("../../errors/MissingEditorProps"));
const _formatLabels = require("../../utilities/formatLabels");
const _baseBlockFields = require("../baseFields/baseBlockFields");
const _baseIDField = require("../baseFields/baseIDField");
const _validations = /*#__PURE__*/ _interop_require_default(require("../validations"));
const _types = require("./types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sanitizeFields = ({ config, existingFieldNames = new Set(), fields, requireFieldLevelRichTextEditor = false, validRelationships })=>{
    if (!fields) return [];
    return fields.map((unsanitizedField)=>{
        const field = {
            ...unsanitizedField
        };
        if (!field.type) throw new _errors.MissingFieldType(field);
        // assert that field names do not contain forbidden characters
        if ((0, _types.fieldAffectsData)(field) && field.name.includes('.')) {
            throw new _errors.InvalidFieldName(field, field.name);
        }
        // Make sure that the richText field has an editor
        if (field.type === 'richText' && !field.editor) {
            if (config.editor && !requireFieldLevelRichTextEditor) {
                field.editor = config.editor;
            } else {
                throw new _MissingEditorProps.default(field);
            }
        }
        // Auto-label
        if ('name' in field && field.name && typeof field.label !== 'object' && typeof field.label !== 'string' && field.label !== false) {
            field.label = (0, _formatLabels.toWords)(field.name);
        }
        if (field.type === 'checkbox' && typeof field.defaultValue === 'undefined' && field.required === true) {
            field.defaultValue = false;
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            if (validRelationships) {
                const relationships = Array.isArray(field.relationTo) ? field.relationTo : [
                    field.relationTo
                ];
                relationships.forEach((relationship)=>{
                    if (!validRelationships.includes(relationship)) {
                        throw new _errors.InvalidFieldRelationship(field, relationship);
                    }
                });
            }
            if (field.type === 'relationship') {
                if (field.min && !field.minRows) {
                    console.warn(`(payload): The "min" property is deprecated for the Relationship field "${field.name}" and will be removed in a future version. Please use "minRows" instead.`);
                }
                if (field.max && !field.maxRows) {
                    console.warn(`(payload): The "max" property is deprecated for the Relationship field "${field.name}" and will be removed in a future version. Please use "maxRows" instead.`);
                }
                field.minRows = field.minRows || field.min;
                field.maxRows = field.maxRows || field.max;
            }
        }
        if (field.type === 'blocks' && field.blocks) {
            field.blocks = field.blocks.map((block)=>({
                    ...block,
                    fields: block.fields.concat(_baseBlockFields.baseBlockFields)
                }));
        }
        if (field.type === 'array' && field.fields) {
            field.fields.push(_baseIDField.baseIDField);
        }
        if ((field.type === 'blocks' || field.type === 'array') && field.label) {
            field.labels = field.labels || (0, _formatLabels.formatLabels)(field.name);
        }
        if ((0, _types.fieldAffectsData)(field)) {
            if (existingFieldNames.has(field.name)) {
                throw new _errors.DuplicateFieldName(field.name);
            } else if (![
                'blockName',
                'id'
            ].includes(field.name)) {
                existingFieldNames.add(field.name);
            }
            if (field.localized && !config.localization) delete field.localized;
            if (typeof field.validate === 'undefined') {
                const defaultValidate = _validations.default[field.type];
                if (defaultValidate) {
                    field.validate = (val, options)=>defaultValidate(val, {
                            ...field,
                            ...options
                        });
                } else {
                    field.validate = ()=>true;
                }
            }
            if (!field.hooks) field.hooks = {};
            if (!field.access) field.access = {};
        }
        if (field.admin) {
            if (field.admin.condition && field.admin.components?.Field) {
                field.admin.components.Field = (0, _withCondition.default)(field.admin.components?.Field);
            }
        } else {
            field.admin = {};
        }
        if ('fields' in field && field.fields) {
            field.fields = sanitizeFields({
                config,
                existingFieldNames: (0, _types.fieldAffectsData)(field) ? new Set() : existingFieldNames,
                fields: field.fields,
                requireFieldLevelRichTextEditor,
                validRelationships
            });
        }
        if (field.type === 'tabs') {
            field.tabs = field.tabs.map((tab)=>{
                const unsanitizedTab = {
                    ...tab
                };
                if ((0, _types.tabHasName)(tab) && typeof tab.label === 'undefined') {
                    unsanitizedTab.label = (0, _formatLabels.toWords)(tab.name);
                }
                unsanitizedTab.fields = sanitizeFields({
                    config,
                    existingFieldNames: (0, _types.tabHasName)(tab) ? new Set() : existingFieldNames,
                    fields: tab.fields,
                    requireFieldLevelRichTextEditor,
                    validRelationships
                });
                return unsanitizedTab;
            });
        }
        if ('blocks' in field && field.blocks) {
            field.blocks = field.blocks.map((block)=>{
                const unsanitizedBlock = {
                    ...block
                };
                unsanitizedBlock.labels = !unsanitizedBlock.labels ? (0, _formatLabels.formatLabels)(unsanitizedBlock.slug) : unsanitizedBlock.labels;
                unsanitizedBlock.fields = sanitizeFields({
                    config,
                    existingFieldNames: new Set(),
                    fields: block.fields,
                    requireFieldLevelRichTextEditor,
                    validRelationships
                });
                return unsanitizedBlock;
            });
        }
        return field;
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZCB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvZm9ybXMvd2l0aENvbmRpdGlvbidcbmltcG9ydCB7XG4gIER1cGxpY2F0ZUZpZWxkTmFtZSxcbiAgSW52YWxpZEZpZWxkTmFtZSxcbiAgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLFxuICBNaXNzaW5nRmllbGRUeXBlLFxufSBmcm9tICcuLi8uLi9lcnJvcnMnXG5pbXBvcnQgTWlzc2luZ0VkaXRvclByb3AgZnJvbSAnLi4vLi4vZXJyb3JzL01pc3NpbmdFZGl0b3JQcm9wcydcbmltcG9ydCB7IGZvcm1hdExhYmVscywgdG9Xb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnXG5pbXBvcnQgeyBiYXNlQmxvY2tGaWVsZHMgfSBmcm9tICcuLi9iYXNlRmllbGRzL2Jhc2VCbG9ja0ZpZWxkcydcbmltcG9ydCB7IGJhc2VJREZpZWxkIH0gZnJvbSAnLi4vYmFzZUZpZWxkcy9iYXNlSURGaWVsZCdcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi92YWxpZGF0aW9ucydcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUgfSBmcm9tICcuL3R5cGVzJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbmZpZzogQ29uZmlnXG4gIGV4aXN0aW5nRmllbGROYW1lcz86IFNldDxzdHJpbmc+XG4gIGZpZWxkczogRmllbGRbXVxuICAvKipcbiAgICogSWYgdHJ1ZSwgYSByaWNoVGV4dCBmaWVsZCB3aWxsIHJlcXVpcmUgYW4gZWRpdG9yIHByb3BlcnR5IHRvIGJlIHNldCwgYXMgdGhlIHNhbml0aXplRmllbGRzIGZ1bmN0aW9uIHdpbGwgbm90IGFkZCBpdCBmcm9tIHRoZSBwYXlsb2FkIGNvbmZpZyBpZiBub3QgcHJlc2VudC5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlcXVpcmVGaWVsZExldmVsUmljaFRleHRFZGl0b3I/OiBib29sZWFuXG4gIC8qKlxuICAgKiBJZiBub3QgbnVsbCwgd2lsbCB2YWxpZGF0ZSB0aGF0IHVwbG9hZCBhbmQgcmVsYXRpb25zaGlwIGZpZWxkcyBkbyBub3QgcmVsYXRlIHRvIGEgY29sbGVjdGlvbiB0aGF0IGlzIG5vdCBpbiB0aGlzIGFycmF5LlxuICAgKiBUaGlzIHZhbGlkYXRpb24gd2lsbCBiZSBza2lwcGVkIGlmIHZhbGlkUmVsYXRpb25zaGlwcyBpcyBudWxsLlxuICAgKi9cbiAgdmFsaWRSZWxhdGlvbnNoaXBzOiBudWxsIHwgc3RyaW5nW11cbn1cblxuZXhwb3J0IGNvbnN0IHNhbml0aXplRmllbGRzID0gKHtcbiAgY29uZmlnLFxuICBleGlzdGluZ0ZpZWxkTmFtZXMgPSBuZXcgU2V0KCksXG4gIGZpZWxkcyxcbiAgcmVxdWlyZUZpZWxkTGV2ZWxSaWNoVGV4dEVkaXRvciA9IGZhbHNlLFxuICB2YWxpZFJlbGF0aW9uc2hpcHMsXG59OiBBcmdzKTogRmllbGRbXSA9PiB7XG4gIGlmICghZmllbGRzKSByZXR1cm4gW11cblxuICByZXR1cm4gZmllbGRzLm1hcCgodW5zYW5pdGl6ZWRGaWVsZCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkOiBGaWVsZCA9IHsgLi4udW5zYW5pdGl6ZWRGaWVsZCB9XG5cbiAgICBpZiAoIWZpZWxkLnR5cGUpIHRocm93IG5ldyBNaXNzaW5nRmllbGRUeXBlKGZpZWxkKVxuXG4gICAgLy8gYXNzZXJ0IHRoYXQgZmllbGQgbmFtZXMgZG8gbm90IGNvbnRhaW4gZm9yYmlkZGVuIGNoYXJhY3RlcnNcbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEZpZWxkTmFtZShmaWVsZCwgZmllbGQubmFtZSlcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcmljaFRleHQgZmllbGQgaGFzIGFuIGVkaXRvclxuICAgIGlmIChmaWVsZC50eXBlID09PSAncmljaFRleHQnICYmICFmaWVsZC5lZGl0b3IpIHtcbiAgICAgIGlmIChjb25maWcuZWRpdG9yICYmICFyZXF1aXJlRmllbGRMZXZlbFJpY2hUZXh0RWRpdG9yKSB7XG4gICAgICAgIGZpZWxkLmVkaXRvciA9IGNvbmZpZy5lZGl0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBNaXNzaW5nRWRpdG9yUHJvcChmaWVsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdXRvLWxhYmVsXG4gICAgaWYgKFxuICAgICAgJ25hbWUnIGluIGZpZWxkICYmXG4gICAgICBmaWVsZC5uYW1lICYmXG4gICAgICB0eXBlb2YgZmllbGQubGFiZWwgIT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2YgZmllbGQubGFiZWwgIT09ICdzdHJpbmcnICYmXG4gICAgICBmaWVsZC5sYWJlbCAhPT0gZmFsc2VcbiAgICApIHtcbiAgICAgIGZpZWxkLmxhYmVsID0gdG9Xb3JkcyhmaWVsZC5uYW1lKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcgJiZcbiAgICAgIHR5cGVvZiBmaWVsZC5kZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICBmaWVsZC5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgZmllbGQuZGVmYXVsdFZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZmllbGQudHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgIGlmICh2YWxpZFJlbGF0aW9uc2hpcHMpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwcyA9IEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbylcbiAgICAgICAgICA/IGZpZWxkLnJlbGF0aW9uVG9cbiAgICAgICAgICA6IFtmaWVsZC5yZWxhdGlvblRvXVxuICAgICAgICByZWxhdGlvbnNoaXBzLmZvckVhY2goKHJlbGF0aW9uc2hpcDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCF2YWxpZFJlbGF0aW9uc2hpcHMuaW5jbHVkZXMocmVsYXRpb25zaGlwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcChmaWVsZCwgcmVsYXRpb25zaGlwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnKSB7XG4gICAgICAgIGlmIChmaWVsZC5taW4gJiYgIWZpZWxkLm1pblJvd3MpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgKHBheWxvYWQpOiBUaGUgXCJtaW5cIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGZvciB0aGUgUmVsYXRpb25zaGlwIGZpZWxkIFwiJHtmaWVsZC5uYW1lfVwiIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gUGxlYXNlIHVzZSBcIm1pblJvd3NcIiBpbnN0ZWFkLmAsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5tYXggJiYgIWZpZWxkLm1heFJvd3MpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgKHBheWxvYWQpOiBUaGUgXCJtYXhcIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGZvciB0aGUgUmVsYXRpb25zaGlwIGZpZWxkIFwiJHtmaWVsZC5uYW1lfVwiIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gUGxlYXNlIHVzZSBcIm1heFJvd3NcIiBpbnN0ZWFkLmAsXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGZpZWxkLm1pblJvd3MgPSBmaWVsZC5taW5Sb3dzIHx8IGZpZWxkLm1pblxuICAgICAgICBmaWVsZC5tYXhSb3dzID0gZmllbGQubWF4Um93cyB8fCBmaWVsZC5tYXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2Jsb2NrcycgJiYgZmllbGQuYmxvY2tzKSB7XG4gICAgICBmaWVsZC5ibG9ja3MgPSBmaWVsZC5ibG9ja3MubWFwKChibG9jaykgPT4gKHtcbiAgICAgICAgLi4uYmxvY2ssXG4gICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLmNvbmNhdChiYXNlQmxvY2tGaWVsZHMpLFxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdhcnJheScgJiYgZmllbGQuZmllbGRzKSB7XG4gICAgICBmaWVsZC5maWVsZHMucHVzaChiYXNlSURGaWVsZClcbiAgICB9XG5cbiAgICBpZiAoKGZpZWxkLnR5cGUgPT09ICdibG9ja3MnIHx8IGZpZWxkLnR5cGUgPT09ICdhcnJheScpICYmIGZpZWxkLmxhYmVsKSB7XG4gICAgICBmaWVsZC5sYWJlbHMgPSBmaWVsZC5sYWJlbHMgfHwgZm9ybWF0TGFiZWxzKGZpZWxkLm5hbWUpXG4gICAgfVxuXG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICBpZiAoZXhpc3RpbmdGaWVsZE5hbWVzLmhhcyhmaWVsZC5uYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRHVwbGljYXRlRmllbGROYW1lKGZpZWxkLm5hbWUpXG4gICAgICB9IGVsc2UgaWYgKCFbJ2Jsb2NrTmFtZScsICdpZCddLmluY2x1ZGVzKGZpZWxkLm5hbWUpKSB7XG4gICAgICAgIGV4aXN0aW5nRmllbGROYW1lcy5hZGQoZmllbGQubmFtZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLmxvY2FsaXplZCAmJiAhY29uZmlnLmxvY2FsaXphdGlvbikgZGVsZXRlIGZpZWxkLmxvY2FsaXplZFxuXG4gICAgICBpZiAodHlwZW9mIGZpZWxkLnZhbGlkYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsaWRhdGUgPSB2YWxpZGF0aW9uc1tmaWVsZC50eXBlXVxuICAgICAgICBpZiAoZGVmYXVsdFZhbGlkYXRlKSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGUgPSAodmFsLCBvcHRpb25zKSA9PiBkZWZhdWx0VmFsaWRhdGUodmFsLCB7IC4uLmZpZWxkLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGUgPSAoKSA9PiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFmaWVsZC5ob29rcykgZmllbGQuaG9va3MgPSB7fVxuICAgICAgaWYgKCFmaWVsZC5hY2Nlc3MpIGZpZWxkLmFjY2VzcyA9IHt9XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLmFkbWluKSB7XG4gICAgICBpZiAoZmllbGQuYWRtaW4uY29uZGl0aW9uICYmIGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKSB7XG4gICAgICAgIGZpZWxkLmFkbWluLmNvbXBvbmVudHMuRmllbGQgPSB3aXRoQ29uZGl0aW9uKGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5hZG1pbiA9IHt9XG4gICAgfVxuXG4gICAgaWYgKCdmaWVsZHMnIGluIGZpZWxkICYmIGZpZWxkLmZpZWxkcykge1xuICAgICAgZmllbGQuZmllbGRzID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGV4aXN0aW5nRmllbGROYW1lczogZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgPyBuZXcgU2V0KCkgOiBleGlzdGluZ0ZpZWxkTmFtZXMsXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICByZXF1aXJlRmllbGRMZXZlbFJpY2hUZXh0RWRpdG9yLFxuICAgICAgICB2YWxpZFJlbGF0aW9uc2hpcHMsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgIGZpZWxkLnRhYnMgPSBmaWVsZC50YWJzLm1hcCgodGFiKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2FuaXRpemVkVGFiID0geyAuLi50YWIgfVxuICAgICAgICBpZiAodGFiSGFzTmFtZSh0YWIpICYmIHR5cGVvZiB0YWIubGFiZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdW5zYW5pdGl6ZWRUYWIubGFiZWwgPSB0b1dvcmRzKHRhYi5uYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgdW5zYW5pdGl6ZWRUYWIuZmllbGRzID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBleGlzdGluZ0ZpZWxkTmFtZXM6IHRhYkhhc05hbWUodGFiKSA/IG5ldyBTZXQoKSA6IGV4aXN0aW5nRmllbGROYW1lcyxcbiAgICAgICAgICBmaWVsZHM6IHRhYi5maWVsZHMsXG4gICAgICAgICAgcmVxdWlyZUZpZWxkTGV2ZWxSaWNoVGV4dEVkaXRvcixcbiAgICAgICAgICB2YWxpZFJlbGF0aW9uc2hpcHMsXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHVuc2FuaXRpemVkVGFiXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICgnYmxvY2tzJyBpbiBmaWVsZCAmJiBmaWVsZC5ibG9ja3MpIHtcbiAgICAgIGZpZWxkLmJsb2NrcyA9IGZpZWxkLmJsb2Nrcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2FuaXRpemVkQmxvY2sgPSB7IC4uLmJsb2NrIH1cbiAgICAgICAgdW5zYW5pdGl6ZWRCbG9jay5sYWJlbHMgPSAhdW5zYW5pdGl6ZWRCbG9jay5sYWJlbHNcbiAgICAgICAgICA/IGZvcm1hdExhYmVscyh1bnNhbml0aXplZEJsb2NrLnNsdWcpXG4gICAgICAgICAgOiB1bnNhbml0aXplZEJsb2NrLmxhYmVsc1xuXG4gICAgICAgIHVuc2FuaXRpemVkQmxvY2suZmllbGRzID0gc2FuaXRpemVGaWVsZHMoe1xuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBleGlzdGluZ0ZpZWxkTmFtZXM6IG5ldyBTZXQoKSxcbiAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICByZXF1aXJlRmllbGRMZXZlbFJpY2hUZXh0RWRpdG9yLFxuICAgICAgICAgIHZhbGlkUmVsYXRpb25zaGlwcyxcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdW5zYW5pdGl6ZWRCbG9ja1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZUZpZWxkcyIsImNvbmZpZyIsImV4aXN0aW5nRmllbGROYW1lcyIsIlNldCIsImZpZWxkcyIsInJlcXVpcmVGaWVsZExldmVsUmljaFRleHRFZGl0b3IiLCJ2YWxpZFJlbGF0aW9uc2hpcHMiLCJtYXAiLCJ1bnNhbml0aXplZEZpZWxkIiwiZmllbGQiLCJ0eXBlIiwiTWlzc2luZ0ZpZWxkVHlwZSIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwiaW5jbHVkZXMiLCJJbnZhbGlkRmllbGROYW1lIiwiZWRpdG9yIiwiTWlzc2luZ0VkaXRvclByb3AiLCJsYWJlbCIsInRvV29yZHMiLCJkZWZhdWx0VmFsdWUiLCJyZXF1aXJlZCIsInJlbGF0aW9uc2hpcHMiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwiZm9yRWFjaCIsInJlbGF0aW9uc2hpcCIsIkludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCIsIm1pbiIsIm1pblJvd3MiLCJjb25zb2xlIiwid2FybiIsIm1heCIsIm1heFJvd3MiLCJibG9ja3MiLCJibG9jayIsImNvbmNhdCIsImJhc2VCbG9ja0ZpZWxkcyIsInB1c2giLCJiYXNlSURGaWVsZCIsImxhYmVscyIsImZvcm1hdExhYmVscyIsImhhcyIsIkR1cGxpY2F0ZUZpZWxkTmFtZSIsImFkZCIsImxvY2FsaXplZCIsImxvY2FsaXphdGlvbiIsInZhbGlkYXRlIiwiZGVmYXVsdFZhbGlkYXRlIiwidmFsaWRhdGlvbnMiLCJ2YWwiLCJvcHRpb25zIiwiaG9va3MiLCJhY2Nlc3MiLCJhZG1pbiIsImNvbmRpdGlvbiIsImNvbXBvbmVudHMiLCJGaWVsZCIsIndpdGhDb25kaXRpb24iLCJ0YWJzIiwidGFiIiwidW5zYW5pdGl6ZWRUYWIiLCJ0YWJIYXNOYW1lIiwidW5zYW5pdGl6ZWRCbG9jayIsInNsdWciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWtDYUE7OztlQUFBQTs7O3NFQS9CYTt3QkFNbkI7MkVBQ3VCOzhCQUNRO2lDQUNOOzZCQUNKO29FQUNKO3VCQUNxQjs7Ozs7O0FBbUJ0QyxNQUFNQSxpQkFBaUIsQ0FBQyxFQUM3QkMsTUFBTSxFQUNOQyxxQkFBcUIsSUFBSUMsS0FBSyxFQUM5QkMsTUFBTSxFQUNOQyxrQ0FBa0MsS0FBSyxFQUN2Q0Msa0JBQWtCLEVBQ2I7SUFDTCxJQUFJLENBQUNGLFFBQVEsT0FBTyxFQUFFO0lBRXRCLE9BQU9BLE9BQU9HLEdBQUcsQ0FBQyxDQUFDQztRQUNqQixNQUFNQyxRQUFlO1lBQUUsR0FBR0QsZ0JBQWdCO1FBQUM7UUFFM0MsSUFBSSxDQUFDQyxNQUFNQyxJQUFJLEVBQUUsTUFBTSxJQUFJQyx3QkFBZ0IsQ0FBQ0Y7UUFFNUMsOERBQThEO1FBQzlELElBQUlHLElBQUFBLHVCQUFnQixFQUFDSCxVQUFVQSxNQUFNSSxJQUFJLENBQUND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