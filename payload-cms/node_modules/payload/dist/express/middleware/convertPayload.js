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
const _default = (req, _, next)=>{
    if (req.body?._payload) {
        const payloadJSON = JSON.parse(req.body._payload);
        req.body = {
            ...req.body,
            ...payloadJSON
        };
        delete req.body?._payload;
    }
    next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvY29udmVydFBheWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogUmVxdWVzdCwgXzogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICBpZiAocmVxLmJvZHk/Ll9wYXlsb2FkKSB7XG4gICAgY29uc3QgcGF5bG9hZEpTT04gPSBKU09OLnBhcnNlKHJlcS5ib2R5Ll9wYXlsb2FkKVxuXG4gICAgcmVxLmJvZHkgPSB7XG4gICAgICAuLi5yZXEuYm9keSxcbiAgICAgIC4uLnBheWxvYWRKU09OLFxuICAgIH1cblxuICAgIGRlbGV0ZSByZXEuYm9keT8uX3BheWxvYWRcbiAgfVxuXG4gIG5leHQoKVxufVxuIl0sIm5hbWVzIjpbInJlcSIsIl8iLCJuZXh0IiwiYm9keSIsIl9wYXlsb2FkIiwicGF5bG9hZEpTT04iLCJKU09OIiwicGFyc2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBRUE7OztlQUFBOzs7TUFBQSxXQUFlLENBQUNBLEtBQWNDLEdBQWFDO0lBQ3pDLElBQUlGLElBQUlHLElBQUksRUFBRUMsVUFBVTtRQUN0QixNQUFNQyxjQUFjQyxLQUFLQyxLQUFLLENBQUNQLElBQUlHLElBQUksQ0FBQ0MsUUFBUTtRQUVoREosSUFBSUcsSUFBSSxHQUFHO1lBQ1QsR0FBR0gsSUFBSUcsSUFBSTtZQUNYLEdBQUdFLFdBQVc7UUFDaEI7UUFFQSxPQUFPTCxJQUFJRyxJQUFJLEVBQUVDO0lBQ25CO0lBRUFGO0FBQ0YifQ==