"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "traverseFields", {
    enumerable: true,
    get: function() {
        return traverseFields;
    }
});
const _promise = require("./promise");
const traverseFields = async ({ id, collection, context, data, doc, fields, global, operation, overrideAccess, req, siblingData, siblingDoc, siblingDocKeys: incomingSiblingDocKeys })=>{
    const promises = [];
    const siblingDocKeys = incomingSiblingDocKeys || new Set(Object.keys(siblingDoc));
    fields.forEach((field)=>{
        promises.push((0, _promise.promise)({
            id,
            collection,
            context,
            data,
            doc,
            field,
            global,
            operation,
            overrideAccess,
            req,
            siblingData,
            siblingDoc,
            siblingDocKeys
        }));
    });
    await Promise.all(promises);
    // For any siblingDocKeys that have not been deleted,
    // we will move the data to the siblingData object
    // to preserve it
    siblingDocKeys.forEach((key)=>{
        if (![
            'createdAt',
            'globalType',
            'id',
            'updatedAt'
        ].includes(key)) {
            siblingData[key] = siblingDoc[key];
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvdHJhdmVyc2VGaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IHByb21pc2UgfSBmcm9tICcuL3Byb21pc2UnXG5cbnR5cGUgQXJnczxUPiA9IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IG51bGxcbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbiAgZGF0YTogVFxuICBkb2M6IFRcbiAgZmllbGRzOiAoRmllbGQgfCBUYWJBc0ZpZWxkKVtdXG4gIGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnIHwgbnVsbFxuICBpZD86IG51bWJlciB8IHN0cmluZ1xuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvY0tleXM/OiBTZXQ8c3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VGaWVsZHMgPSBhc3luYyA8VD4oe1xuICBpZCxcbiAgY29sbGVjdGlvbixcbiAgY29udGV4dCxcbiAgZGF0YSxcbiAgZG9jLFxuICBmaWVsZHMsXG4gIGdsb2JhbCxcbiAgb3BlcmF0aW9uLFxuICBvdmVycmlkZUFjY2VzcyxcbiAgcmVxLFxuICBzaWJsaW5nRGF0YSxcbiAgc2libGluZ0RvYyxcbiAgc2libGluZ0RvY0tleXM6IGluY29taW5nU2libGluZ0RvY0tleXMsXG59OiBBcmdzPFQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHByb21pc2VzID0gW11cbiAgY29uc3Qgc2libGluZ0RvY0tleXMgPSBpbmNvbWluZ1NpYmxpbmdEb2NLZXlzIHx8IG5ldyBTZXQoT2JqZWN0LmtleXMoc2libGluZ0RvYykpXG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgcHJvbWlzZXMucHVzaChcbiAgICAgIHByb21pc2Uoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBzaWJsaW5nRG9jS2V5cyxcbiAgICAgIH0pLFxuICAgIClcbiAgfSlcblxuICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcblxuICAvLyBGb3IgYW55IHNpYmxpbmdEb2NLZXlzIHRoYXQgaGF2ZSBub3QgYmVlbiBkZWxldGVkLFxuICAvLyB3ZSB3aWxsIG1vdmUgdGhlIGRhdGEgdG8gdGhlIHNpYmxpbmdEYXRhIG9iamVjdFxuICAvLyB0byBwcmVzZXJ2ZSBpdFxuICBzaWJsaW5nRG9jS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIVsnY3JlYXRlZEF0JywgJ2dsb2JhbFR5cGUnLCAnaWQnLCAndXBkYXRlZEF0J10uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgc2libGluZ0RhdGFba2V5XSA9IHNpYmxpbmdEb2Nba2V5XVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJ0cmF2ZXJzZUZpZWxkcyIsImlkIiwiY29sbGVjdGlvbiIsImNvbnRleHQiLCJkYXRhIiwiZG9jIiwiZmllbGRzIiwiZ2xvYmFsIiwib3BlcmF0aW9uIiwib3ZlcnJpZGVBY2Nlc3MiLCJyZXEiLCJzaWJsaW5nRGF0YSIsInNpYmxpbmdEb2MiLCJzaWJsaW5nRG9jS2V5cyIsImluY29taW5nU2libGluZ0RvY0tleXMiLCJwcm9taXNlcyIsIlNldCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZmllbGQiLCJwdXNoIiwicHJvbWlzZSIsIlByb21pc2UiLCJhbGwiLCJrZXkiLCJpbmNsdWRlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUJhQTs7O2VBQUFBOzs7eUJBbEJXO0FBa0JqQixNQUFNQSxpQkFBaUIsT0FBVSxFQUN0Q0MsRUFBRSxFQUNGQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxHQUFHLEVBQ0hDLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLGNBQWMsRUFDZEMsR0FBRyxFQUNIQyxXQUFXLEVBQ1hDLFVBQVUsRUFDVkMsZ0JBQWdCQyxzQkFBc0IsRUFDOUI7SUFDUixNQUFNQyxXQUFXLEVBQUU7SUFDbkIsTUFBTUYsaUJBQWlCQywwQkFBMEIsSUFBSUUsSUFBSUMsT0FBT0MsSUFBSSxDQUFDTjtJQUVyRU4sT0FBT2EsT0FBTyxDQUFDLENBQUNDO1FBQ2RMLFNBQVNNLElBQUksQ0FDWEMsSUFBQUEsZ0JBQU8sRUFBQztZQUNOckI7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQWU7WUFDQWI7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtJQUVKO0lBRUEsTUFBTVUsUUFBUUMsR0FBRyxDQUFDVDtJQUVsQixxREFBcUQ7SUFDckQsa0RBQWtEO0lBQ2xELGlCQUFpQjtJQUNqQkYsZUFBZU0sT0FBTyxDQUFDLENBQUNNO1FBQ3RCLElBQUksQ0FBQztZQUFDO1lBQWE7WUFBYztZQUFNO1NBQVksQ0FBQ0MsUUFBUSxDQUFDRCxNQUFNO1lBQ2pFZCxXQUFXLENBQUNjLElBQUksR0FBR2IsVUFBVSxDQUFDYSxJQUFJO1FBQ3BDO0lBQ0Y7QUFDRiJ9