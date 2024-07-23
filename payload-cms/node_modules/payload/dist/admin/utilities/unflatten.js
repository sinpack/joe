/*
 * Copyright (c) 2014, Hugh Kennedy
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unflatten", {
    enumerable: true,
    get: function() {
        return unflatten;
    }
});
const _isbuffer = /*#__PURE__*/ _interop_require_default(require("is-buffer"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const unflatten = (target, opts)=>{
    opts = opts || {};
    const delimiter = opts.delimiter || '.';
    const overwrite = opts.overwrite || false;
    const recursive = opts.recursive || false;
    const result = {};
    const isbuffer = (0, _isbuffer.default)(target);
    if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
        return target;
    }
    // safely ensure that the key is an integer.
    const getkey = (key)=>{
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object ? key : parsedKey;
    };
    const sortedKeys = Object.keys(target).sort((keyA, keyB)=>keyA.length - keyB.length);
    sortedKeys.forEach((key)=>{
        const split = key.split(delimiter);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while(key2 !== undefined){
            if (key1 === '__proto__') {
                return;
            }
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === '[object Object]' || type === '[object Array]';
            // do not write over falsey, non-undefined values if overwrite is false
            if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
                return;
            }
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
                recipient[key1] = typeof key2 === 'number' && !opts.object ? [] : {};
            }
            recipient = recipient[key1];
            if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
            }
        }
        // unflatten again for 'messy objects'
        recipient[key1] = recursive ? unflatten(target[key], opts) : target[key];
    });
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvdW5mbGF0dGVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEh1Z2ggS2VubmVkeVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAzLiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnaXMtYnVmZmVyJ1xuXG5pbnRlcmZhY2UgT3B0cyB7XG4gIGRlbGltaXRlcj86IHN0cmluZ1xuICBvYmplY3Q/OiBhbnlcbiAgb3ZlcndyaXRlPzogYm9vbGVhblxuICByZWN1cnNpdmU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1bmZsYXR0ZW4gPSAodGFyZ2V0LCBvcHRzPzogT3B0cykgPT4ge1xuICBvcHRzID0gb3B0cyB8fCB7fVxuXG4gIGNvbnN0IGRlbGltaXRlciA9IG9wdHMuZGVsaW1pdGVyIHx8ICcuJ1xuICBjb25zdCBvdmVyd3JpdGUgPSBvcHRzLm92ZXJ3cml0ZSB8fCBmYWxzZVxuICBjb25zdCByZWN1cnNpdmUgPSBvcHRzLnJlY3Vyc2l2ZSB8fCBmYWxzZVxuICBjb25zdCByZXN1bHQgPSB7fVxuXG4gIGNvbnN0IGlzYnVmZmVyID0gaXNCdWZmZXIodGFyZ2V0KVxuXG4gIGlmIChpc2J1ZmZlciB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gdGFyZ2V0XG4gIH1cblxuICAvLyBzYWZlbHkgZW5zdXJlIHRoYXQgdGhlIGtleSBpcyBhbiBpbnRlZ2VyLlxuICBjb25zdCBnZXRrZXkgPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkS2V5ID0gTnVtYmVyKGtleSlcbiAgICByZXR1cm4gaXNOYU4ocGFyc2VkS2V5KSB8fCBrZXkuaW5kZXhPZignLicpICE9PSAtMSB8fCBvcHRzLm9iamVjdCA/IGtleSA6IHBhcnNlZEtleVxuICB9XG5cbiAgY29uc3Qgc29ydGVkS2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCkuc29ydCgoa2V5QSwga2V5QikgPT4ga2V5QS5sZW5ndGggLSBrZXlCLmxlbmd0aClcblxuICBzb3J0ZWRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KGRlbGltaXRlcilcbiAgICBsZXQga2V5MSA9IGdldGtleShzcGxpdC5zaGlmdCgpKVxuICAgIGxldCBrZXkyID0gZ2V0a2V5KHNwbGl0WzBdKVxuICAgIGxldCByZWNpcGllbnQgPSByZXN1bHRcblxuICAgIHdoaWxlIChrZXkyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChrZXkxID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyZWNpcGllbnRba2V5MV0pXG4gICAgICBjb25zdCBpc29iamVjdCA9IHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XSdcblxuICAgICAgLy8gZG8gbm90IHdyaXRlIG92ZXIgZmFsc2V5LCBub24tdW5kZWZpbmVkIHZhbHVlcyBpZiBvdmVyd3JpdGUgaXMgZmFsc2VcbiAgICAgIGlmICghb3ZlcndyaXRlICYmICFpc29iamVjdCAmJiB0eXBlb2YgcmVjaXBpZW50W2tleTFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKChvdmVyd3JpdGUgJiYgIWlzb2JqZWN0KSB8fCAoIW92ZXJ3cml0ZSAmJiByZWNpcGllbnRba2V5MV0gPT0gbnVsbCkpIHtcbiAgICAgICAgcmVjaXBpZW50W2tleTFdID0gdHlwZW9mIGtleTIgPT09ICdudW1iZXInICYmICFvcHRzLm9iamVjdCA/IFtdIDoge31cbiAgICAgIH1cblxuICAgICAgcmVjaXBpZW50ID0gcmVjaXBpZW50W2tleTFdXG5cbiAgICAgIGlmIChzcGxpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTEgPSBnZXRrZXkoc3BsaXQuc2hpZnQoKSlcbiAgICAgICAga2V5MiA9IGdldGtleShzcGxpdFswXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1bmZsYXR0ZW4gYWdhaW4gZm9yICdtZXNzeSBvYmplY3RzJ1xuICAgIHJlY2lwaWVudFtrZXkxXSA9IHJlY3Vyc2l2ZSA/IHVuZmxhdHRlbih0YXJnZXRba2V5XSwgb3B0cykgOiB0YXJnZXRba2V5XVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdLCJuYW1lcyI6WyJ1bmZsYXR0ZW4iLCJ0YXJnZXQiLCJvcHRzIiwiZGVsaW1pdGVyIiwib3ZlcndyaXRlIiwicmVjdXJzaXZlIiwicmVzdWx0IiwiaXNidWZmZXIiLCJpc0J1ZmZlciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImdldGtleSIsImtleSIsInBhcnNlZEtleSIsIk51bWJlciIsImlzTmFOIiwiaW5kZXhPZiIsIm9iamVjdCIsInNvcnRlZEtleXMiLCJrZXlzIiwic29ydCIsImtleUEiLCJrZXlCIiwibGVuZ3RoIiwiZm9yRWFjaCIsInNwbGl0Iiwia2V5MSIsInNoaWZ0Iiwia2V5MiIsInJlY2lwaWVudCIsInVuZGVmaW5lZCIsInR5cGUiLCJpc29iamVjdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztDQVVDOzs7OytCQVdZQTs7O2VBQUFBOzs7aUVBVFE7Ozs7OztBQVNkLE1BQU1BLFlBQVksQ0FBQ0MsUUFBUUM7SUFDaENBLE9BQU9BLFFBQVEsQ0FBQztJQUVoQixNQUFNQyxZQUFZRCxLQUFLQyxTQUFTLElBQUk7SUFDcEMsTUFBTUMsWUFBWUYsS0FBS0UsU0FBUyxJQUFJO0lBQ3BDLE1BQU1DLFlBQVlILEtBQUtHLFNBQVMsSUFBSTtJQUNwQyxNQUFNQyxTQUFTLENBQUM7SUFFaEIsTUFBTUMsV0FBV0MsSUFBQUEsaUJBQVEsRUFBQ1A7SUFFMUIsSUFBSU0sWUFBWUUsT0FBT0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ1gsWUFBWSxtQkFBbUI7UUFDNUUsT0FBT0E7SUFDVDtJQUVBLDRDQUE0QztJQUM1QyxNQUFNWSxTQUFTLENBQUNDO1FBQ2QsTUFBTUMsWUFBWUMsT0FBT0Y7UUFDekIsT0FBT0csTUFBTUYsY0FBY0QsSUFBSUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLaEIsS0FBS2lCLE1BQU0sR0FBR0wsTUFBTUM7SUFDNUU7SUFFQSxNQUFNSyxhQUFhWCxPQUFPWSxJQUFJLENBQUNwQixRQUFRcUIsSUFBSSxDQUFDLENBQUNDLE1BQU1DLE9BQVNELEtBQUtFLE1BQU0sR0FBR0QsS0FBS0MsTUFBTTtJQUVyRkwsV0FBV00sT0FBTyxDQUFDLENBQUNaO1FBQ2xCLE1BQU1hLFFBQVFiLElBQUlhLEtBQUssQ0FBQ3hCO1FBQ3hCLElBQUl5QixPQUFPZixPQUFPYyxNQUFNRSxLQUFLO1FBQzdCLElBQUlDLE9BQU9qQixPQUFPYyxLQUFLLENBQUMsRUFBRTtRQUMxQixJQUFJSSxZQUFZekI7UUFFaEIsTUFBT3dCLFNBQVNFLFVBQVc7WUFDekIsSUFBSUosU0FBUyxhQUFhO2dCQUN4QjtZQUNGO1lBRUEsTUFBTUssT0FBT3hCLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNtQixTQUFTLENBQUNILEtBQUs7WUFDM0QsTUFBTU0sV0FBV0QsU0FBUyxxQkFBcUJBLFNBQVM7WUFFeEQsdUVBQXVFO1lBQ3ZFLElBQUksQ0FBQzdCLGFBQWEsQ0FBQzhCLFlBQVksT0FBT0gsU0FBUyxDQUFDSCxLQUFLLEtBQUssYUFBYTtnQkFDckU7WUFDRjtZQUVBLElBQUksQUFBQ3hCLGFBQWEsQ0FBQzhCLFlBQWMsQ0FBQzlCLGFBQWEyQixTQUFTLENBQUNILEtBQUssSUFBSSxNQUFPO2dCQUN2RUcsU0FBUyxDQUFDSCxLQUFLLEdBQUcsT0FBT0UsU0FBUyxZQUFZLENBQUM1QixLQUFLaUIsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3JFO1lBRUFZLFlBQVlBLFNBQVMsQ0FBQ0gsS0FBSztZQUUzQixJQUFJRCxNQUFNRixNQUFNLEdBQUcsR0FBRztnQkFDcEJHLE9BQU9mLE9BQU9jLE1BQU1FLEtBQUs7Z0JBQ3pCQyxPQUFPakIsT0FBT2MsS0FBSyxDQUFDLEVBQUU7WUFDeEI7UUFDRjtRQUVBLHNDQUFzQztRQUN0Q0ksU0FBUyxDQUFDSCxLQUFLLEdBQUd2QixZQUFZTCxVQUFVQyxNQUFNLENBQUNhLElBQUksRUFBRVosUUFBUUQsTUFBTSxDQUFDYSxJQUFJO0lBQzFFO0lBRUEsT0FBT1I7QUFDVCJ9