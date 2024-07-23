"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getUniqueListBy;
    }
});
function getUniqueListBy(arr, key) {
    return [
        ...new Map(arr.map((item)=>[
                item[key],
                item
            ])).values()
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0VW5pcXVlTGlzdEJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUxpc3RCeTxUPihhcnI6IFRbXSwga2V5OiBzdHJpbmcpOiBUW10ge1xuICByZXR1cm4gWy4uLm5ldyBNYXAoYXJyLm1hcCgoaXRlbSkgPT4gW2l0ZW1ba2V5XSwgaXRlbV0pKS52YWx1ZXMoKV1cbn1cbiJdLCJuYW1lcyI6WyJnZXRVbmlxdWVMaXN0QnkiLCJhcnIiLCJrZXkiLCJNYXAiLCJtYXAiLCJpdGVtIiwidmFsdWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxnQkFBbUJDLEdBQVEsRUFBRUMsR0FBVztJQUM5RCxPQUFPO1dBQUksSUFBSUMsSUFBSUYsSUFBSUcsR0FBRyxDQUFDLENBQUNDLE9BQVM7Z0JBQUNBLElBQUksQ0FBQ0gsSUFBSTtnQkFBRUc7YUFBSyxHQUFHQyxNQUFNO0tBQUc7QUFDcEUifQ==