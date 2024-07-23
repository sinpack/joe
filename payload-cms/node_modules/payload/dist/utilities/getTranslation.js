"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTranslation", {
    enumerable: true,
    get: function() {
        return getTranslation;
    }
});
const getTranslation = (label, i18n)=>{
    if (typeof label === 'object') {
        if (label[i18n.language]) {
            return label[i18n.language];
        }
        let fallbacks = [];
        if (typeof i18n.options.fallbackLng === 'string') {
            fallbacks = [
                i18n.options.fallbackLng
            ];
        } else if (Array.isArray(i18n.options.fallbackLng)) {
            fallbacks = i18n.options.fallbackLng;
        } else if (typeof i18n.options.fallbackLng === 'object') {
            fallbacks = Object.keys(i18n.options.fallbackLng);
        } else if (typeof i18n.options.fallbackLng === 'function') {
            console.warn('Use of i18next fallbackLng functions are not supported.');
        }
        return label[fallbacks.find((language)=>label[language])] ?? label[Object.keys(label)[0]];
    }
    return label;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBpMThuIGFzIElpMThuIH0gZnJvbSAnaTE4bmV4dCdcblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zbGF0aW9uID0gKFxuICBsYWJlbDogSlNYLkVsZW1lbnQgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgc3RyaW5nLFxuICBpMThuOiBJaTE4bixcbik6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2YgbGFiZWwgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGxhYmVsW2kxOG4ubGFuZ3VhZ2VdKSB7XG4gICAgICByZXR1cm4gbGFiZWxbaTE4bi5sYW5ndWFnZV1cbiAgICB9XG4gICAgbGV0IGZhbGxiYWNrcyA9IFtdXG4gICAgaWYgKHR5cGVvZiBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmYWxsYmFja3MgPSBbaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nXVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcpKSB7XG4gICAgICBmYWxsYmFja3MgPSBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmdcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcgPT09ICdvYmplY3QnKSB7XG4gICAgICBmYWxsYmFja3MgPSBPYmplY3Qua2V5cyhpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1VzZSBvZiBpMThuZXh0IGZhbGxiYWNrTG5nIGZ1bmN0aW9ucyBhcmUgbm90IHN1cHBvcnRlZC4nKVxuICAgIH1cbiAgICByZXR1cm4gbGFiZWxbZmFsbGJhY2tzLmZpbmQoKGxhbmd1YWdlKSA9PiBsYWJlbFtsYW5ndWFnZV0pXSA/PyBsYWJlbFtPYmplY3Qua2V5cyhsYWJlbClbMF1dXG4gIH1cbiAgcmV0dXJuIGxhYmVsXG59XG4iXSwibmFtZXMiOlsiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbCIsImkxOG4iLCJsYW5ndWFnZSIsImZhbGxiYWNrcyIsIm9wdGlvbnMiLCJmYWxsYmFja0xuZyIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwid2FybiIsImZpbmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxpQkFBaUIsQ0FDNUJDLE9BQ0FDO0lBRUEsSUFBSSxPQUFPRCxVQUFVLFVBQVU7UUFDN0IsSUFBSUEsS0FBSyxDQUFDQyxLQUFLQyxRQUFRLENBQUMsRUFBRTtZQUN4QixPQUFPRixLQUFLLENBQUNDLEtBQUtDLFFBQVEsQ0FBQztRQUM3QjtRQUNBLElBQUlDLFlBQVksRUFBRTtRQUNsQixJQUFJLE9BQU9GLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVyxLQUFLLFVBQVU7WUFDaERGLFlBQVk7Z0JBQUNGLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVzthQUFDO1FBQ3hDLE9BQU8sSUFBSUMsTUFBTUMsT0FBTyxDQUFDTixLQUFLRyxPQUFPLENBQUNDLFdBQVcsR0FBRztZQUNsREYsWUFBWUYsS0FBS0csT0FBTyxDQUFDQyxXQUFXO1FBQ3RDLE9BQU8sSUFBSSxPQUFPSixLQUFLRyxPQUFPLENBQUNDLFdBQVcsS0FBSyxVQUFVO1lBQ3ZERixZQUFZSyxPQUFPQyxJQUFJLENBQUNSLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVztRQUNsRCxPQUFPLElBQUksT0FBT0osS0FBS0csT0FBTyxDQUFDQyxXQUFXLEtBQUssWUFBWTtZQUN6REssUUFBUUMsSUFBSSxDQUFDO1FBQ2Y7UUFDQSxPQUFPWCxLQUFLLENBQUNHLFVBQVVTLElBQUksQ0FBQyxDQUFDVixXQUFhRixLQUFLLENBQUNFLFNBQVMsRUFBRSxJQUFJRixLQUFLLENBQUNRLE9BQU9DLElBQUksQ0FBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3RjtJQUNBLE9BQU9BO0FBQ1QifQ==