/* eslint-disable no-shadow */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _modal = require("@faceless-ui/modal");
const _react = require("react");
const _setsAreEqual = require("../utilities/setsAreEqual");
// Required to be outside of hook, else debounce would be necessary
// and then one could not prevent the default behaviour.
// It maps the pressed keys with the time they were pressed, in order to implement a maximum time
// for the user to press the next key in the sequence
// This is necessary to prevent a bug where the keyup event, which unsets the key as pressed
// is not fired when the window is not focused.
// When the user then comes back to the window, the key is still registered as pressed, even though it's not.
const pressedKeys = new Map([]);
const map = {
    altleft: 'alt',
    altright: 'alt',
    controlleft: 'ctrl',
    controlright: 'ctrl',
    ctrlleft: 'ctrl',
    ctrlright: 'ctrl',
    escape: 'esc',
    metaleft: 'meta',
    metaright: 'meta',
    osleft: 'meta',
    osright: 'meta',
    shiftleft: 'shift',
    shiftright: 'shift'
};
const stripKey = (key)=>{
    return (map[key.toLowerCase()] || key).trim().toLowerCase().replace('key', '');
};
const pushToKeys = (code)=>{
    const key = stripKey(code);
    // There is a weird bug with macos that if the keys are not cleared they remain in the
    // pressed keys set.
    if (key === 'meta') {
        pressedKeys.forEach((time, pressedKey)=>pressedKey !== 'meta' && pressedKeys.delete(pressedKey));
    }
    pressedKeys.set(key, Date.now());
};
const removeFromKeys = (code)=>{
    const key = stripKey(code);
    // There is a weird bug with macos that if the keys are not cleared they remain in the
    // pressed keys set.
    if (key === 'meta') {
        pressedKeys.clear();
    }
    pressedKeys.delete(key);
};
/**
 * Hook function to work with hotkeys.
 * @param param0.keyCode {string[]} The keys to listen for (`Event.code` without `'Key'` and lowercased)
 * @param param0.cmdCtrlKey {boolean} Whether Ctrl on windows or Cmd on mac must be pressed
 * @param param0.editDepth {boolean} This ensures that the hotkey is only triggered for the most top-level drawer in case there are nested drawers
 * @param func The callback function
 */ const useHotkey = (options, func)=>{
    const { cmdCtrlKey, editDepth, keyCodes } = options;
    const { modalState } = (0, _modal.useModal)();
    const keydown = (0, _react.useCallback)((event)=>{
        const e = event.detail?.key ? event.detail : event;
        if (e.key === undefined) {
            // Autofill events, or other synthetic events, can be ignored
            return;
        }
        // Filter out pressed keys which have been pressed > 3 seconds ago
        pressedKeys.forEach((time, key)=>{
            if (Date.now() - time > 3000) {
                pressedKeys.delete(key);
            }
        });
        if (e.code) pushToKeys(e.code);
        // Check for Mac and iPad
        const hasCmd = window.navigator.userAgent.includes('Mac OS X');
        const pressedWithoutModifier = [
            ...pressedKeys.keys()
        ].filter((key)=>![
                'alt',
                'ctrl',
                'meta',
                'shift'
            ].includes(key));
        // Check whether arrays contain the same values (regardless of number of occurrences)
        if ((0, _setsAreEqual.setsAreEqual)(new Set(pressedWithoutModifier), new Set(keyCodes)) && (!cmdCtrlKey || hasCmd && pressedKeys.has('meta') || !hasCmd && e.ctrlKey)) {
            // get the maximum edit depth by counting the number of open drawers. modalState is and object which contains the state of all drawers.
            const maxEditDepth = (Object.keys(modalState).filter((key)=>modalState[key]?.isOpen)?.length + 1) ?? 1;
            if (maxEditDepth !== editDepth) {
                // We only want to execute the hotkey from the most top-level drawer / edit depth.
                return;
            }
            // execute the function associated with the maximum edit depth
            func(e);
        }
    }, [
        keyCodes,
        cmdCtrlKey,
        editDepth,
        modalState,
        func
    ]);
    const keyup = (0, _react.useCallback)((e)=>{
        if (e.code) removeFromKeys(e.code);
    }, []);
    (0, _react.useEffect)(()=>{
        document.addEventListener('keydown', keydown, false);
        document.addEventListener('bypassKeyDown', keydown, false) // this is called if the keydown event's propagation is stopped by react-select
        ;
        document.addEventListener('keyup', keyup, false);
        return ()=>{
            document.removeEventListener('keydown', keydown);
            document.removeEventListener('bypassKeyDown', keydown);
            document.removeEventListener('keyup', keyup);
        };
    }, [
        keydown,
        keyup
    ]);
};
const _default = useHotkey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VIb3RrZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHNldHNBcmVFcXVhbCB9IGZyb20gJy4uL3V0aWxpdGllcy9zZXRzQXJlRXF1YWwnXG5cbi8vIFJlcXVpcmVkIHRvIGJlIG91dHNpZGUgb2YgaG9vaywgZWxzZSBkZWJvdW5jZSB3b3VsZCBiZSBuZWNlc3Nhcnlcbi8vIGFuZCB0aGVuIG9uZSBjb3VsZCBub3QgcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvdXIuXG5cbi8vIEl0IG1hcHMgdGhlIHByZXNzZWQga2V5cyB3aXRoIHRoZSB0aW1lIHRoZXkgd2VyZSBwcmVzc2VkLCBpbiBvcmRlciB0byBpbXBsZW1lbnQgYSBtYXhpbXVtIHRpbWVcbi8vIGZvciB0aGUgdXNlciB0byBwcmVzcyB0aGUgbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlXG5cbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgYSBidWcgd2hlcmUgdGhlIGtleXVwIGV2ZW50LCB3aGljaCB1bnNldHMgdGhlIGtleSBhcyBwcmVzc2VkXG4vLyBpcyBub3QgZmlyZWQgd2hlbiB0aGUgd2luZG93IGlzIG5vdCBmb2N1c2VkLlxuLy8gV2hlbiB0aGUgdXNlciB0aGVuIGNvbWVzIGJhY2sgdG8gdGhlIHdpbmRvdywgdGhlIGtleSBpcyBzdGlsbCByZWdpc3RlcmVkIGFzIHByZXNzZWQsIGV2ZW4gdGhvdWdoIGl0J3Mgbm90LlxuY29uc3QgcHJlc3NlZEtleXMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihbXSlcblxuY29uc3QgbWFwID0ge1xuICBhbHRsZWZ0OiAnYWx0JyxcbiAgYWx0cmlnaHQ6ICdhbHQnLFxuICBjb250cm9sbGVmdDogJ2N0cmwnLFxuICBjb250cm9scmlnaHQ6ICdjdHJsJyxcbiAgY3RybGxlZnQ6ICdjdHJsJyxcbiAgY3RybHJpZ2h0OiAnY3RybCcsXG4gIGVzY2FwZTogJ2VzYycsXG4gIG1ldGFsZWZ0OiAnbWV0YScsXG4gIG1ldGFyaWdodDogJ21ldGEnLFxuICBvc2xlZnQ6ICdtZXRhJyxcbiAgb3NyaWdodDogJ21ldGEnLFxuICBzaGlmdGxlZnQ6ICdzaGlmdCcsXG4gIHNoaWZ0cmlnaHQ6ICdzaGlmdCcsXG59XG5cbmNvbnN0IHN0cmlwS2V5ID0gKGtleTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAobWFwW2tleS50b0xvd2VyQ2FzZSgpXSB8fCBrZXkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ2tleScsICcnKVxufVxuXG5jb25zdCBwdXNoVG9LZXlzID0gKGNvZGU6IHN0cmluZykgPT4ge1xuICBjb25zdCBrZXkgPSBzdHJpcEtleShjb2RlKVxuXG4gIC8vIFRoZXJlIGlzIGEgd2VpcmQgYnVnIHdpdGggbWFjb3MgdGhhdCBpZiB0aGUga2V5cyBhcmUgbm90IGNsZWFyZWQgdGhleSByZW1haW4gaW4gdGhlXG4gIC8vIHByZXNzZWQga2V5cyBzZXQuXG4gIGlmIChrZXkgPT09ICdtZXRhJykge1xuICAgIHByZXNzZWRLZXlzLmZvckVhY2goXG4gICAgICAodGltZSwgcHJlc3NlZEtleSkgPT4gcHJlc3NlZEtleSAhPT0gJ21ldGEnICYmIHByZXNzZWRLZXlzLmRlbGV0ZShwcmVzc2VkS2V5KSxcbiAgICApXG4gIH1cblxuICBwcmVzc2VkS2V5cy5zZXQoa2V5LCBEYXRlLm5vdygpKVxufVxuXG5jb25zdCByZW1vdmVGcm9tS2V5cyA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qga2V5ID0gc3RyaXBLZXkoY29kZSlcbiAgLy8gVGhlcmUgaXMgYSB3ZWlyZCBidWcgd2l0aCBtYWNvcyB0aGF0IGlmIHRoZSBrZXlzIGFyZSBub3QgY2xlYXJlZCB0aGV5IHJlbWFpbiBpbiB0aGVcbiAgLy8gcHJlc3NlZCBrZXlzIHNldC5cbiAgaWYgKGtleSA9PT0gJ21ldGEnKSB7XG4gICAgcHJlc3NlZEtleXMuY2xlYXIoKVxuICB9XG4gIHByZXNzZWRLZXlzLmRlbGV0ZShrZXkpXG59XG5cbi8qKlxuICogSG9vayBmdW5jdGlvbiB0byB3b3JrIHdpdGggaG90a2V5cy5cbiAqIEBwYXJhbSBwYXJhbTAua2V5Q29kZSB7c3RyaW5nW119IFRoZSBrZXlzIHRvIGxpc3RlbiBmb3IgKGBFdmVudC5jb2RlYCB3aXRob3V0IGAnS2V5J2AgYW5kIGxvd2VyY2FzZWQpXG4gKiBAcGFyYW0gcGFyYW0wLmNtZEN0cmxLZXkge2Jvb2xlYW59IFdoZXRoZXIgQ3RybCBvbiB3aW5kb3dzIG9yIENtZCBvbiBtYWMgbXVzdCBiZSBwcmVzc2VkXG4gKiBAcGFyYW0gcGFyYW0wLmVkaXREZXB0aCB7Ym9vbGVhbn0gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIGhvdGtleSBpcyBvbmx5IHRyaWdnZXJlZCBmb3IgdGhlIG1vc3QgdG9wLWxldmVsIGRyYXdlciBpbiBjYXNlIHRoZXJlIGFyZSBuZXN0ZWQgZHJhd2Vyc1xuICogQHBhcmFtIGZ1bmMgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKi9cbmNvbnN0IHVzZUhvdGtleSA9IChcbiAgb3B0aW9uczoge1xuICAgIGNtZEN0cmxLZXk6IGJvb2xlYW5cbiAgICBlZGl0RGVwdGg6IG51bWJlclxuICAgIGtleUNvZGVzOiBzdHJpbmdbXVxuICB9LFxuICBmdW5jOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCxcbik6IHZvaWQgPT4ge1xuICBjb25zdCB7IGNtZEN0cmxLZXksIGVkaXREZXB0aCwga2V5Q29kZXMgfSA9IG9wdGlvbnNcblxuICBjb25zdCB7IG1vZGFsU3RhdGUgfSA9IHVzZU1vZGFsKClcblxuICBjb25zdCBrZXlkb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBDdXN0b21FdmVudCB8IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGU6IEtleWJvYXJkRXZlbnQgPSBldmVudC5kZXRhaWw/LmtleSA/IGV2ZW50LmRldGFpbCA6IGV2ZW50XG4gICAgICBpZiAoZS5rZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBBdXRvZmlsbCBldmVudHMsIG9yIG90aGVyIHN5bnRoZXRpYyBldmVudHMsIGNhbiBiZSBpZ25vcmVkXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBGaWx0ZXIgb3V0IHByZXNzZWQga2V5cyB3aGljaCBoYXZlIGJlZW4gcHJlc3NlZCA+IDMgc2Vjb25kcyBhZ29cbiAgICAgIHByZXNzZWRLZXlzLmZvckVhY2goKHRpbWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRpbWUgPiAzMDAwKSB7XG4gICAgICAgICAgcHJlc3NlZEtleXMuZGVsZXRlKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKGUuY29kZSkgcHVzaFRvS2V5cyhlLmNvZGUpXG5cbiAgICAgIC8vIENoZWNrIGZvciBNYWMgYW5kIGlQYWRcbiAgICAgIGNvbnN0IGhhc0NtZCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdNYWMgT1MgWCcpXG4gICAgICBjb25zdCBwcmVzc2VkV2l0aG91dE1vZGlmaWVyID0gWy4uLnByZXNzZWRLZXlzLmtleXMoKV0uZmlsdGVyKFxuICAgICAgICAoa2V5KSA9PiAhWydhbHQnLCAnY3RybCcsICdtZXRhJywgJ3NoaWZ0J10uaW5jbHVkZXMoa2V5KSxcbiAgICAgIClcblxuICAgICAgLy8gQ2hlY2sgd2hldGhlciBhcnJheXMgY29udGFpbiB0aGUgc2FtZSB2YWx1ZXMgKHJlZ2FyZGxlc3Mgb2YgbnVtYmVyIG9mIG9jY3VycmVuY2VzKVxuICAgICAgaWYgKFxuICAgICAgICBzZXRzQXJlRXF1YWwobmV3IFNldChwcmVzc2VkV2l0aG91dE1vZGlmaWVyKSwgbmV3IFNldChrZXlDb2RlcykpICYmXG4gICAgICAgICghY21kQ3RybEtleSB8fCAoaGFzQ21kICYmIHByZXNzZWRLZXlzLmhhcygnbWV0YScpKSB8fCAoIWhhc0NtZCAmJiBlLmN0cmxLZXkpKVxuICAgICAgKSB7XG4gICAgICAgIC8vIGdldCB0aGUgbWF4aW11bSBlZGl0IGRlcHRoIGJ5IGNvdW50aW5nIHRoZSBudW1iZXIgb2Ygb3BlbiBkcmF3ZXJzLiBtb2RhbFN0YXRlIGlzIGFuZCBvYmplY3Qgd2hpY2ggY29udGFpbnMgdGhlIHN0YXRlIG9mIGFsbCBkcmF3ZXJzLlxuICAgICAgICBjb25zdCBtYXhFZGl0RGVwdGggPVxuICAgICAgICAgIE9iamVjdC5rZXlzKG1vZGFsU3RhdGUpLmZpbHRlcigoa2V5KSA9PiBtb2RhbFN0YXRlW2tleV0/LmlzT3Blbik/Lmxlbmd0aCArIDEgPz8gMVxuXG4gICAgICAgIGlmIChtYXhFZGl0RGVwdGggIT09IGVkaXREZXB0aCkge1xuICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byBleGVjdXRlIHRoZSBob3RrZXkgZnJvbSB0aGUgbW9zdCB0b3AtbGV2ZWwgZHJhd2VyIC8gZWRpdCBkZXB0aC5cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBleGVjdXRlIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG1heGltdW0gZWRpdCBkZXB0aFxuICAgICAgICBmdW5jKGUpXG4gICAgICB9XG4gICAgfSxcbiAgICBba2V5Q29kZXMsIGNtZEN0cmxLZXksIGVkaXREZXB0aCwgbW9kYWxTdGF0ZSwgZnVuY10sXG4gIClcblxuICBjb25zdCBrZXl1cCA9IHVzZUNhbGxiYWNrKChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUuY29kZSkgcmVtb3ZlRnJvbUtleXMoZS5jb2RlKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duLCBmYWxzZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdieXBhc3NLZXlEb3duJywga2V5ZG93biwgZmFsc2UpIC8vIHRoaXMgaXMgY2FsbGVkIGlmIHRoZSBrZXlkb3duIGV2ZW50J3MgcHJvcGFnYXRpb24gaXMgc3RvcHBlZCBieSByZWFjdC1zZWxlY3RcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleXVwLCBmYWxzZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bilcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2J5cGFzc0tleURvd24nLCBrZXlkb3duKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXl1cClcbiAgICB9XG4gIH0sIFtrZXlkb3duLCBrZXl1cF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvdGtleVxuIl0sIm5hbWVzIjpbInByZXNzZWRLZXlzIiwiTWFwIiwibWFwIiwiYWx0bGVmdCIsImFsdHJpZ2h0IiwiY29udHJvbGxlZnQiLCJjb250cm9scmlnaHQiLCJjdHJsbGVmdCIsImN0cmxyaWdodCIsImVzY2FwZSIsIm1ldGFsZWZ0IiwibWV0YXJpZ2h0Iiwib3NsZWZ0Iiwib3NyaWdodCIsInNoaWZ0bGVmdCIsInNoaWZ0cmlnaHQiLCJzdHJpcEtleSIsImtleSIsInRvTG93ZXJDYXNlIiwidHJpbSIsInJlcGxhY2UiLCJwdXNoVG9LZXlzIiwiY29kZSIsImZvckVhY2giLCJ0aW1lIiwicHJlc3NlZEtleSIsImRlbGV0ZSIsInNldCIsIkRhdGUiLCJub3ciLCJyZW1vdmVGcm9tS2V5cyIsImNsZWFyIiwidXNlSG90a2V5Iiwib3B0aW9ucyIsImZ1bmMiLCJjbWRDdHJsS2V5IiwiZWRpdERlcHRoIiwia2V5Q29kZXMiLCJtb2RhbFN0YXRlIiwidXNlTW9kYWwiLCJrZXlkb3duIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImUiLCJkZXRhaWwiLCJ1bmRlZmluZWQiLCJoYXNDbWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsInByZXNzZWRXaXRob3V0TW9kaWZpZXIiLCJrZXlzIiwiZmlsdGVyIiwic2V0c0FyZUVxdWFsIiwiU2V0IiwiaGFzIiwiY3RybEtleSIsIm1heEVkaXREZXB0aCIsIk9iamVjdCIsImlzT3BlbiIsImxlbmd0aCIsImtleXVwIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOzs7OytCQTRJNUI7OztlQUFBOzs7dUJBM0l5Qjt1QkFDYzs4QkFFVjtBQUU3QixtRUFBbUU7QUFDbkUsd0RBQXdEO0FBRXhELGlHQUFpRztBQUNqRyxxREFBcUQ7QUFFckQsNEZBQTRGO0FBQzVGLCtDQUErQztBQUMvQyw2R0FBNkc7QUFDN0csTUFBTUEsY0FBYyxJQUFJQyxJQUFvQixFQUFFO0FBRTlDLE1BQU1DLE1BQU07SUFDVkMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsY0FBYztJQUNkQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsUUFBUTtJQUNSQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsUUFBUTtJQUNSQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsWUFBWTtBQUNkO0FBRUEsTUFBTUMsV0FBVyxDQUFDQztJQUNoQixPQUFPLEFBQUNmLENBQUFBLEdBQUcsQ0FBQ2UsSUFBSUMsV0FBVyxHQUFHLElBQUlELEdBQUUsRUFBR0UsSUFBSSxHQUFHRCxXQUFXLEdBQUdFLE9BQU8sQ0FBQyxP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