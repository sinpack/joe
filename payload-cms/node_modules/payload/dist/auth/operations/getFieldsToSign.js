/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getFieldsToSign", {
    enumerable: true,
    get: function() {
        return getFieldsToSign;
    }
});
const _types = require("../../fields/config/types");
const traverseFields = ({ data, // parent,
fields, result })=>{
    fields.forEach((field)=>{
        switch(field.type){
            case 'row':
            case 'collapsible':
                {
                    traverseFields({
                        data,
                        fields: field.fields,
                        result
                    });
                    break;
                }
            case 'group':
                {
                    let targetResult;
                    if (typeof field.saveToJWT === 'string') {
                        targetResult = field.saveToJWT;
                        result[field.saveToJWT] = data[field.name];
                    } else if (field.saveToJWT) {
                        targetResult = field.name;
                        result[field.name] = data[field.name];
                    }
                    const groupData = data[field.name];
                    const groupResult = targetResult ? result[targetResult] : result;
                    traverseFields({
                        data: groupData,
                        fields: field.fields,
                        result: groupResult
                    });
                    break;
                }
            case 'tabs':
                {
                    traverseFields({
                        data,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        result
                    });
                    break;
                }
            case 'tab':
                {
                    if ((0, _types.tabHasName)(field)) {
                        let targetResult;
                        if (typeof field.saveToJWT === 'string') {
                            targetResult = field.saveToJWT;
                            result[field.saveToJWT] = data[field.name];
                        } else if (field.saveToJWT) {
                            targetResult = field.name;
                            result[field.name] = data[field.name];
                        }
                        const tabData = data[field.name];
                        const tabResult = targetResult ? result[targetResult] : result;
                        traverseFields({
                            data: tabData,
                            fields: field.fields,
                            result: tabResult
                        });
                    } else {
                        traverseFields({
                            data,
                            fields: field.fields,
                            result
                        });
                    }
                    break;
                }
            default:
                if ((0, _types.fieldAffectsData)(field)) {
                    if (field.saveToJWT) {
                        if (typeof field.saveToJWT === 'string') {
                            result[field.saveToJWT] = data[field.name];
                            delete result[field.name];
                        } else {
                            result[field.name] = data[field.name];
                        }
                    } else if (field.saveToJWT === false) {
                        delete result[field.name];
                    }
                }
        }
    });
    return result;
};
const getFieldsToSign = (args)=>{
    const { collectionConfig, email, user } = args;
    const result = {
        id: user.id,
        collection: collectionConfig.slug,
        email
    };
    traverseFields({
        data: user,
        fields: collectionConfig.fields,
        result
    });
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvZ2V0RmllbGRzVG9TaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuLidcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxudHlwZSBUcmF2ZXJzZUZpZWxkc0FyZ3MgPSB7XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGZpZWxkczogKEZpZWxkIHwgVGFiQXNGaWVsZClbXVxuICByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5jb25zdCB0cmF2ZXJzZUZpZWxkcyA9ICh7XG4gIGRhdGEsXG4gIC8vIHBhcmVudCxcbiAgZmllbGRzLFxuICByZXN1bHQsXG59OiBUcmF2ZXJzZUZpZWxkc0FyZ3MpID0+IHtcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICBjYXNlICdyb3cnOlxuICAgICAgY2FzZSAnY29sbGFwc2libGUnOiB7XG4gICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBsZXQgdGFyZ2V0UmVzdWx0XG4gICAgICAgIGlmICh0eXBlb2YgZmllbGQuc2F2ZVRvSldUID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRhcmdldFJlc3VsdCA9IGZpZWxkLnNhdmVUb0pXVFxuICAgICAgICAgIHJlc3VsdFtmaWVsZC5zYXZlVG9KV1RdID0gZGF0YVtmaWVsZC5uYW1lXVxuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnNhdmVUb0pXVCkge1xuICAgICAgICAgIHRhcmdldFJlc3VsdCA9IGZpZWxkLm5hbWVcbiAgICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSBkYXRhW2ZpZWxkLm5hbWVdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JvdXBEYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGRhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgY29uc3QgZ3JvdXBSZXN1bHQgPSAodGFyZ2V0UmVzdWx0ID8gcmVzdWx0W3RhcmdldFJlc3VsdF0gOiByZXN1bHQpIGFzIFJlY29yZDxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgdW5rbm93blxuICAgICAgICA+XG4gICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICBkYXRhOiBncm91cERhdGEsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgcmVzdWx0OiBncm91cFJlc3VsdCxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RhYnMnOiB7XG4gICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAndGFiJzoge1xuICAgICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UmVzdWx0XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZC5zYXZlVG9KV1QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0YXJnZXRSZXN1bHQgPSBmaWVsZC5zYXZlVG9KV1RcbiAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5zYXZlVG9KV1RdID0gZGF0YVtmaWVsZC5uYW1lXVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuc2F2ZVRvSldUKSB7XG4gICAgICAgICAgICB0YXJnZXRSZXN1bHQgPSBmaWVsZC5uYW1lXG4gICAgICAgICAgICByZXN1bHRbZmllbGQubmFtZV0gPSBkYXRhW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhYkRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZGF0YVtmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICAgIGNvbnN0IHRhYlJlc3VsdCA9ICh0YXJnZXRSZXN1bHQgPyByZXN1bHRbdGFyZ2V0UmVzdWx0XSA6IHJlc3VsdCkgYXMgUmVjb3JkPFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgdW5rbm93blxuICAgICAgICAgID5cbiAgICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICBkYXRhOiB0YWJEYXRhLFxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICByZXN1bHQ6IHRhYlJlc3VsdCxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAgICAgICBpZiAoZmllbGQuc2F2ZVRvSldUKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkLnNhdmVUb0pXVCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLnNhdmVUb0pXVF0gPSBkYXRhW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbZmllbGQubmFtZV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5uYW1lXSA9IGRhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnNhdmVUb0pXVCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbZmllbGQubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cbmV4cG9ydCBjb25zdCBnZXRGaWVsZHNUb1NpZ24gPSAoYXJnczoge1xuICBjb2xsZWN0aW9uQ29uZmlnOiBDb2xsZWN0aW9uQ29uZmlnXG4gIGVtYWlsOiBzdHJpbmdcbiAgdXNlcjogVXNlclxufSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uQ29uZmlnLCBlbWFpbCwgdXNlciB9ID0gYXJnc1xuXG4gIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgaWQ6IHVzZXIuaWQsXG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgIGVtYWlsLFxuICB9XG5cbiAgdHJhdmVyc2VGaWVsZHMoe1xuICAgIGRhdGE6IHVzZXIsXG4gICAgZmllbGRzOiBjb2xsZWN0aW9uQ29uZmlnLmZpZWxkcyxcbiAgICByZXN1bHQsXG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sIm5hbWVzIjpbImdldEZpZWxkc1RvU2lnbiIsInRyYXZlcnNlRmllbGRzIiwiZGF0YSIsImZpZWxkcyIsInJlc3VsdCIsImZvckVhY2giLCJmaWVsZCIsInR5cGUiLCJ0YXJnZXRSZXN1bHQiLCJzYXZlVG9KV1QiLCJuYW1lIiwiZ3JvdXBEYXRhIiwiZ3JvdXBSZXN1bHQiLCJ0YWJzIiwibWFwIiwidGFiIiwidGFiSGFzTmFtZSIsInRhYkRhdGEiLCJ0YWJSZXN1bHQiLCJmaWVsZEFmZmVjdHNEYXRhIiwiYXJncyIsImNvbGxlY3Rpb25Db25maWciLCJlbWFpbCIsInVzZXIiLCJpZCIsImNvbGxlY3Rpb24iLCJzbHVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBd0d2QkE7OztlQUFBQTs7O3VCQW5HZ0M7QUFPN0MsTUFBTUMsaUJBQWlCLENBQUMsRUFDdEJDLElBQUksRUFDSixVQUFVO0FBQ1ZDLE1BQU0sRUFDTkMsTUFBTSxFQUNhO0lBQ25CRCxPQUFPRSxPQUFPLENBQUMsQ0FBQ0M7UUFDZCxPQUFRQSxNQUFNQyxJQUFJO1lBQ2hCLEtBQUs7WUFDTCxLQUFLO2dCQUFlO29CQUNsQk4sZUFBZTt3QkFDYkM7d0JBQ0FDLFFBQVFHLE1BQU1ILE1BQU07d0JBQ3BCQztvQkFDRjtvQkFDQTtnQkFDRjtZQUNBLEtBQUs7Z0JBQVM7b0JBQ1osSUFBSUk7b0JBQ0osSUFBSSxPQUFPRixNQUFNRyxTQUFTLEtBQUssVUFBVTt3QkFDdkNELGVBQWVGLE1BQU1HLFNBQVM7d0JBQzlCTCxNQUFNLENBQUNFLE1BQU1HLFNBQVMsQ0FBQyxHQUFHUCxJQUFJLENBQUNJLE1BQU1JLElBQUksQ0FBQztv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