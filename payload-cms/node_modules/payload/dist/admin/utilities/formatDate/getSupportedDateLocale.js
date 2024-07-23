"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSupportedDateLocale", {
    enumerable: true,
    get: function() {
        return getSupportedDateLocale;
    }
});
const getSupportedDateLocale = (locale = 'enUS')=>{
    // Need to match our translation locales with the local codes of 'date-fns/locale to support date locales
    const formattedLocales = {
        ar: 'ar',
        az: 'az',
        bg: 'bg',
        cs: 'cs',
        de: 'de',
        en: 'enUS',
        es: 'es',
        fa: 'faIR',
        fr: 'fr',
        hr: 'hr',
        hu: 'hu',
        it: 'it',
        ja: 'ja',
        ko: 'ko',
        my: 'enUS',
        nb: 'nb',
        nl: 'nl',
        pl: 'pl',
        pt: 'pt',
        ro: 'ro',
        ru: 'ru',
        sv: 'sv',
        th: 'th',
        tr: 'tr',
        ua: 'uk',
        vi: 'vi',
        zh: 'zhCN',
        zhTw: 'zhTW'
    };
    return formattedLocales[locale] || locale;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZm9ybWF0RGF0ZS9nZXRTdXBwb3J0ZWREYXRlTG9jYWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRTdXBwb3J0ZWREYXRlTG9jYWxlID0gKGxvY2FsZSA9ICdlblVTJyk6IHN0cmluZyA9PiB7XG4gIC8vIE5lZWQgdG8gbWF0Y2ggb3VyIHRyYW5zbGF0aW9uIGxvY2FsZXMgd2l0aCB0aGUgbG9jYWwgY29kZXMgb2YgJ2RhdGUtZm5zL2xvY2FsZSB0byBzdXBwb3J0IGRhdGUgbG9jYWxlc1xuICBjb25zdCBmb3JtYXR0ZWRMb2NhbGVzID0ge1xuICAgIGFyOiAnYXInLFxuICAgIGF6OiAnYXonLFxuICAgIGJnOiAnYmcnLFxuICAgIGNzOiAnY3MnLFxuICAgIGRlOiAnZGUnLFxuICAgIGVuOiAnZW5VUycsXG4gICAgZXM6ICdlcycsXG4gICAgZmE6ICdmYUlSJyxcbiAgICBmcjogJ2ZyJyxcbiAgICBocjogJ2hyJyxcbiAgICBodTogJ2h1JyxcbiAgICBpdDogJ2l0JyxcbiAgICBqYTogJ2phJyxcbiAgICBrbzogJ2tvJyxcbiAgICBteTogJ2VuVVMnLCAvLyBCdXJtZXNlIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkXG4gICAgbmI6ICduYicsXG4gICAgbmw6ICdubCcsXG4gICAgcGw6ICdwbCcsXG4gICAgcHQ6ICdwdCcsXG4gICAgcm86ICdybycsXG4gICAgcnU6ICdydScsXG4gICAgc3Y6ICdzdicsXG4gICAgdGg6ICd0aCcsXG4gICAgdHI6ICd0cicsXG4gICAgdWE6ICd1aycsXG4gICAgdmk6ICd2aScsXG4gICAgemg6ICd6aENOJyxcbiAgICB6aFR3OiAnemhUVycsXG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkTG9jYWxlc1tsb2NhbGVdIHx8IGxvY2FsZVxufVxuIl0sIm5hbWVzIjpbImdldFN1cHBvcnRlZERhdGVMb2NhbGUiLCJsb2NhbGUiLCJmb3JtYXR0ZWRMb2NhbGVzIiwiYXIiLCJheiIsImJnIiwiY3MiLCJkZSIsImVuIiwiZXMiLCJmYSIsImZyIiwiaHIiLCJodSIsIml0IiwiamEiLCJrbyIsIm15IiwibmIiLCJubCIsInBsIiwicHQiLCJybyIsInJ1Iiwic3YiLCJ0aCIsInRyIiwidWEiLCJ2aSIsInpoIiwiemhUdyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSx5QkFBeUIsQ0FBQ0MsU0FBUyxNQUFNO0lBQ3BELHlHQUF5RztJQUN6RyxNQUFNQyxtQkFBbUI7UUFDdkJDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLE1BQU07SUFDUjtJQUVBLE9BQU81QixnQkFBZ0IsQ0FBQ0QsT0FBTyxJQUFJQTtBQUNyQyJ9