"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePopupWindow", {
    enumerable: true,
    get: function() {
        return usePopupWindow;
    }
});
const _react = require("react");
const _Config = require("../../utilities/Config");
const usePopupWindow = (props)=>{
    const { eventType, onMessage, url } = props;
    const isReceivingMessage = (0, _react.useRef)(false);
    const [isOpen, setIsOpen] = (0, _react.useState)(false);
    const { serverURL } = (0, _Config.useConfig)();
    const popupRef = (0, _react.useRef)(null);
    // Optionally broadcast messages back out to the parent component
    (0, _react.useEffect)(()=>{
        const receiveMessage = async (event)=>{
            if (event.origin !== window.location.origin || event.origin !== url || event.origin !== serverURL) {
                // console.warn(`Message received by ${event.origin}; IGNORED.`) // eslint-disable-line no-console
                return;
            }
            if (typeof onMessage === 'function' && event.data?.type === eventType && !isReceivingMessage.current) {
                isReceivingMessage.current = true;
                await onMessage(event.data?.searchParams);
                isReceivingMessage.current = false;
            }
        };
        if (isOpen && popupRef.current) {
            window.addEventListener('message', receiveMessage, false);
        }
        return ()=>{
            window.removeEventListener('message', receiveMessage);
        };
    }, [
        onMessage,
        eventType,
        url,
        serverURL,
        isOpen
    ]);
    // Customize the size, position, and style of the popup window
    const openPopupWindow = (0, _react.useCallback)((e)=>{
        if (e) {
            e.preventDefault();
        }
        const features = {
            height: 700,
            left: 'auto',
            menubar: 'no',
            popup: 'yes',
            toolbar: 'no',
            top: 'auto',
            width: 800
        };
        const popupOptions = Object.entries(features).reduce((str, [key, value])=>{
            let strCopy = str;
            if (value === 'auto') {
                if (key === 'top') {
                    const v = Math.round(window.innerHeight / 2 - features.height / 2);
                    strCopy += `top=${v},`;
                } else if (key === 'left') {
                    const v = Math.round(window.innerWidth / 2 - features.width / 2);
                    strCopy += `left=${v},`;
                }
                return strCopy;
            }
            strCopy += `${key}=${value},`;
            return strCopy;
        }, '').slice(0, -1) // remove last ',' (comma)
        ;
        const newWindow = window.open(url, '_blank', popupOptions);
        popupRef.current = newWindow;
        setIsOpen(true);
    }, [
        url
    ]);
    // this is the most stable and widely supported way to check if a popup window is no longer open
    // we poll its ref every x ms and use the popup window's `closed` property
    (0, _react.useEffect)(()=>{
        let timer;
        if (isOpen) {
            timer = setInterval(function() {
                if (popupRef.current.closed) {
                    clearInterval(timer);
                    setIsOpen(false);
                }
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return ()=>{
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [
        isOpen,
        popupRef
    ]);
    return {
        isPopupOpen: isOpen,
        openPopupWindow,
        popupRef
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L3VzZVBvcHVwV2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZydcblxuZXhwb3J0IGludGVyZmFjZSBQb3B1cE1lc3NhZ2Uge1xuICBzZWFyY2hQYXJhbXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBjb2RlOiBzdHJpbmdcbiAgICBpbnN0YWxsYXRpb25faWQ6IHN0cmluZ1xuICAgIHN0YXRlOiBzdHJpbmdcbiAgfVxuICB0eXBlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBvcHVwV2luZG93ID0gKHByb3BzOiB7XG4gIGV2ZW50VHlwZT86IHN0cmluZ1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBvbk1lc3NhZ2U/OiAoc2VhcmNoUGFyYW1zOiBQb3B1cE1lc3NhZ2VbJ3NlYXJjaFBhcmFtcyddKSA9PiBQcm9taXNlPHZvaWQ+XG4gIHVybDogc3RyaW5nXG59KToge1xuICBpc1BvcHVwT3BlbjogYm9vbGVhblxuICBvcGVuUG9wdXBXaW5kb3c6ICgpID0+IHZvaWRcbiAgcG9wdXBSZWY/OiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PFdpbmRvdyB8IG51bGw+XG59ID0+IHtcbiAgY29uc3QgeyBldmVudFR5cGUsIG9uTWVzc2FnZSwgdXJsIH0gPSBwcm9wc1xuICBjb25zdCBpc1JlY2VpdmluZ01lc3NhZ2UgPSB1c2VSZWYoZmFsc2UpXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBzZXJ2ZXJVUkwgfSA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHBvcHVwUmVmID0gdXNlUmVmPFdpbmRvdyB8IG51bGw+KG51bGwpXG5cbiAgLy8gT3B0aW9uYWxseSBicm9hZGNhc3QgbWVzc2FnZXMgYmFjayBvdXQgdG8gdGhlIHBhcmVudCBjb21wb25lbnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZWNlaXZlTWVzc2FnZSA9IGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50Lm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiB8fFxuICAgICAgICBldmVudC5vcmlnaW4gIT09IHVybCB8fFxuICAgICAgICBldmVudC5vcmlnaW4gIT09IHNlcnZlclVSTFxuICAgICAgKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgTWVzc2FnZSByZWNlaXZlZCBieSAke2V2ZW50Lm9yaWdpbn07IElHTk9SRUQuYCkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBvbk1lc3NhZ2UgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgZXZlbnQuZGF0YT8udHlwZSA9PT0gZXZlbnRUeXBlICYmXG4gICAgICAgICFpc1JlY2VpdmluZ01lc3NhZ2UuY3VycmVudFxuICAgICAgKSB7XG4gICAgICAgIGlzUmVjZWl2aW5nTWVzc2FnZS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICBhd2FpdCBvbk1lc3NhZ2UoZXZlbnQuZGF0YT8uc2VhcmNoUGFyYW1zKVxuICAgICAgICBpc1JlY2VpdmluZ01lc3NhZ2UuY3VycmVudCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzT3BlbiAmJiBwb3B1cFJlZi5jdXJyZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTWVzc2FnZSlcbiAgICB9XG4gIH0sIFtvbk1lc3NhZ2UsIGV2ZW50VHlwZSwgdXJsLCBzZXJ2ZXJVUkwsIGlzT3Blbl0pXG5cbiAgLy8gQ3VzdG9taXplIHRoZSBzaXplLCBwb3NpdGlvbiwgYW5kIHN0eWxlIG9mIHRoZSBwb3B1cCB3aW5kb3dcbiAgY29uc3Qgb3BlblBvcHVwV2luZG93ID0gdXNlQ2FsbGJhY2soXG4gICAgKGU/OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmVhdHVyZXMgPSB7XG4gICAgICAgIGhlaWdodDogNzAwLFxuICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgIG1lbnViYXI6ICdubycsXG4gICAgICAgIHBvcHVwOiAneWVzJyxcbiAgICAgICAgdG9vbGJhcjogJ25vJyxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvcHVwT3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKGZlYXR1cmVzKVxuICAgICAgICAucmVkdWNlKChzdHIsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGxldCBzdHJDb3B5ID0gc3RyXG4gICAgICAgICAgaWYgKHZhbHVlID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBmZWF0dXJlcy5oZWlnaHQgLyAyKVxuICAgICAgICAgICAgICBzdHJDb3B5ICs9IGB0b3A9JHt2fSxgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGZlYXR1cmVzLndpZHRoIC8gMilcbiAgICAgICAgICAgICAgc3RyQ29weSArPSBgbGVmdD0ke3Z9LGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJDb3B5XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RyQ29weSArPSBgJHtrZXl9PSR7dmFsdWV9LGBcbiAgICAgICAgICByZXR1cm4gc3RyQ29weVxuICAgICAgICB9LCAnJylcbiAgICAgICAgLnNsaWNlKDAsIC0xKSAvLyByZW1vdmUgbGFzdCAnLCcgKGNvbW1hKVxuXG4gICAgICBjb25zdCBuZXdXaW5kb3cgPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBwb3B1cE9wdGlvbnMpXG5cbiAgICAgIHBvcHVwUmVmLmN1cnJlbnQgPSBuZXdXaW5kb3dcblxuICAgICAgc2V0SXNPcGVuKHRydWUpXG4gICAgfSxcbiAgICBbdXJsXSxcbiAgKVxuXG4gIC8vIHRoaXMgaXMgdGhlIG1vc3Qgc3RhYmxlIGFuZCB3aWRlbHkgc3VwcG9ydGVkIHdheSB0byBjaGVjayBpZiBhIHBvcHVwIHdpbmRvdyBpcyBubyBsb25nZXIgb3BlblxuICAvLyB3ZSBwb2xsIGl0cyByZWYgZXZlcnkgeCBtcyBhbmQgdXNlIHRoZSBwb3B1cCB3aW5kb3cncyBgY2xvc2VkYCBwcm9wZXJ0eVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjogTm9kZUpTLlRpbWVvdXRcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocG9wdXBSZWYuY3VycmVudC5jbG9zZWQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNPcGVuLCBwb3B1cFJlZl0pXG5cbiAgcmV0dXJuIHtcbiAgICBpc1BvcHVwT3BlbjogaXNPcGVuLFxuICAgIG9wZW5Qb3B1cFdpbmRvdyxcbiAgICBwb3B1cFJlZixcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVBvcHVwV2luZG93IiwicHJvcHMiLCJldmVudFR5cGUiLCJvbk1lc3NhZ2UiLCJ1cmwiLCJpc1JlY2VpdmluZ01lc3NhZ2UiLCJ1c2VSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsInNlcnZlclVSTCIsInVzZUNvbmZpZyIsInBvcHVwUmVmIiwidXNlRWZmZWN0IiwicmVjZWl2ZU1lc3NhZ2UiLCJldmVudCIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGF0YSIsInR5cGUiLCJjdXJyZW50Iiwic2VhcmNoUGFyYW1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvcGVuUG9wdXBXaW5kb3ciLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZlYXR1cmVzIiwiaGVpZ2h0IiwibGVmdCIsIm1lbnViYXIiLCJwb3B1cCIsInRvb2xiYXIiLCJ0b3AiLCJ3aWR0aCIsInBvcHVwT3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrZXkiLCJ2YWx1ZSIsInN0ckNvcHkiLCJ2IiwiTWF0aCIsInJvdW5kIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2xpY2UiLCJuZXdXaW5kb3ciLCJvcGVuIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsb3NlZCIsImNsZWFySW50ZXJ2YWwiLCJpc1Bv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