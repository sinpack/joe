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
const _default = (input)=>{
    const words = input.split(' ');
    // Regex word boundaries that work for cyrillic characters - https://stackoverflow.com/a/47062016/1717697
    const wordBoundaryBefore = '(?:(?:[^\\p{L}\\p{N}])|^)' // Converted to a non-matching group instead of positive lookbehind for Safari
    ;
    const wordBoundaryAfter = '(?=[^\\p{L}\\p{N}]|$)';
    const regex = words.reduce((pattern, word, i)=>{
        const escapedWord = word.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
        return `${pattern}(?=.*${wordBoundaryBefore}.*${escapedWord}.*${wordBoundaryAfter})${i + 1 === words.length ? '.+' : ''}`;
    }, '');
    return new RegExp(regex, 'i');
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvd29yZEJvdW5kYXJpZXNSZWdleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoaW5wdXQ6IHN0cmluZyk6IFJlZ0V4cCA9PiB7XG4gIGNvbnN0IHdvcmRzID0gaW5wdXQuc3BsaXQoJyAnKVxuXG4gIC8vIFJlZ2V4IHdvcmQgYm91bmRhcmllcyB0aGF0IHdvcmsgZm9yIGN5cmlsbGljIGNoYXJhY3RlcnMgLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDcwNjIwMTYvMTcxNzY5N1xuICBjb25zdCB3b3JkQm91bmRhcnlCZWZvcmUgPSAnKD86KD86W15cXFxccHtMfVxcXFxwe059XSl8XiknIC8vIENvbnZlcnRlZCB0byBhIG5vbi1tYXRjaGluZyBncm91cCBpbnN0ZWFkIG9mIHBvc2l0aXZlIGxvb2tiZWhpbmQgZm9yIFNhZmFyaVxuICBjb25zdCB3b3JkQm91bmRhcnlBZnRlciA9ICcoPz1bXlxcXFxwe0x9XFxcXHB7Tn1dfCQpJ1xuICBjb25zdCByZWdleCA9IHdvcmRzLnJlZHVjZSgocGF0dGVybiwgd29yZCwgaSkgPT4ge1xuICAgIGNvbnN0IGVzY2FwZWRXb3JkID0gd29yZC5yZXBsYWNlKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpXG4gICAgcmV0dXJuIGAke3BhdHRlcm59KD89Lioke3dvcmRCb3VuZGFyeUJlZm9yZX0uKiR7ZXNjYXBlZFdvcmR9Lioke3dvcmRCb3VuZGFyeUFmdGVyfSkke1xuICAgICAgaSArIDEgPT09IHdvcmRzLmxlbmd0aCA/ICcuKycgOiAnJ1xuICAgIH1gXG4gIH0sICcnKVxuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgJ2knKVxufVxuIl0sIm5hbWVzIjpbImlucHV0Iiwid29yZHMiLCJzcGxpdCIsIndvcmRCb3VuZGFyeUJlZm9yZSIsIndvcmRCb3VuZGFyeUFmdGVyIiwicmVnZXgiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwid29yZCIsImkiLCJlc2NhcGVkV29yZCIsInJlcGxhY2UiLCJsZW5ndGgiLCJSZWdFeHAiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFBOzs7ZUFBQTs7O01BQUEsV0FBZSxDQUFDQTtJQUNkLE1BQU1DLFFBQVFELE1BQU1FLEtBQUssQ0FBQztJQUUxQix5R0FBeUc7SUFDekcsTUFBTUMscUJBQXFCLDRCQUE0Qiw4RUFBOEU7O0lBQ3JJLE1BQU1DLG9CQUFvQjtJQUMxQixNQUFNQyxRQUFRSixNQUFNSyxNQUFNLENBQUMsQ0FBQ0MsU0FBU0MsTUFBTUM7UUFDekMsTUFBTUMsY0FBY0YsS0FBS0csT0FBTyxDQUFDLHVCQUF1QjtRQUN4RCxPQUFPLENBQUMsRUFBRUosUUFBUSxLQUFLLEVBQUVKLG1CQUFtQixFQUFFLEVBQUVPLFlBQVksRUFBRSxFQUFFTixrQkFBa0IsQ0FBQyxFQUNqRkssSUFBSSxNQUFNUixNQUFNVyxNQUFNLEdBQUcsT0FBTyxHQUNqQyxDQUFDO0lBQ0osR0FBRztJQUNILE9BQU8sSUFBSUMsT0FBT1IsT0FBTztBQUMzQiJ9