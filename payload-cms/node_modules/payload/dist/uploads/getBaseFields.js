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
const _extractTranslations = require("../translations/extractTranslations");
const _mimeTypeValidator = require("./mimeTypeValidator");
const labels = (0, _extractTranslations.extractTranslations)([
    'upload:width',
    'upload:height',
    'upload:fileSize',
    'upload:fileName',
    'upload:sizes'
]);
const getBaseUploadFields = ({ collection, config })=>{
    const uploadOptions = typeof collection.upload === 'object' ? collection.upload : {};
    const mimeType = {
        name: 'mimeType',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: 'MIME Type'
    };
    const url = {
        name: 'url',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: 'URL'
    };
    const width = {
        name: 'width',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: labels['upload:width']
    };
    const height = {
        name: 'height',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: labels['upload:height']
    };
    const filesize = {
        name: 'filesize',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: labels['upload:fileSize']
    };
    const filename = {
        name: 'filename',
        type: 'text',
        admin: {
            disableBulkEdit: true,
            hidden: true,
            readOnly: true
        },
        index: true,
        label: labels['upload:fileName'],
        unique: true
    };
    let uploadFields = [
        {
            ...url,
            hooks: {
                afterRead: [
                    ({ data })=>{
                        if (data?.filename) {
                            if (uploadOptions.staticURL.startsWith('/')) {
                                return `${config.serverURL}${uploadOptions.staticURL}/${data.filename}`;
                            }
                            return `${uploadOptions.staticURL}/${data.filename}`;
                        }
                        return undefined;
                    }
                ]
            }
        },
        filename,
        mimeType,
        filesize,
        width,
        height
    ];
    if (uploadOptions.mimeTypes) {
        mimeType.validate = (0, _mimeTypeValidator.mimeTypeValidator)(uploadOptions.mimeTypes);
    }
    // Add focal point fields if not disabled
    if (uploadOptions.focalPoint !== false || uploadOptions.imageSizes || uploadOptions.resizeOptions) {
        uploadFields = uploadFields.concat([
            'focalX',
            'focalY'
        ].map((name)=>{
            return {
                name,
                type: 'number',
                admin: {
                    hidden: true
                }
            };
        }));
    }
    if (uploadOptions.imageSizes) {
        uploadFields = uploadFields.concat([
            {
                name: 'sizes',
                type: 'group',
                admin: {
                    hidden: true
                },
                fields: uploadOptions.imageSizes.map((size)=>({
                        name: size.name,
                        type: 'group',
                        admin: {
                            hidden: true
                        },
                        fields: [
                            {
                                ...url,
                                hooks: {
                                    afterRead: [
                                        ({ data })=>{
                                            const sizeFilename = data?.sizes?.[size.name]?.filename;
                                            if (sizeFilename) {
                                                if (uploadOptions.staticURL.startsWith('/')) {
                                                    return `${config.serverURL}${uploadOptions.staticURL}/${sizeFilename}`;
                                                }
                                                return `${uploadOptions.staticURL}/${sizeFilename}`;
                                            }
                                            return null;
                                        }
                                    ]
                                }
                            },
                            width,
                            height,
                            mimeType,
                            filesize,
                            {
                                ...filename,
                                unique: false
                            }
                        ],
                        label: size.name
                    })),
                label: labels['upload:sizes']
            }
        ]);
    }
    return uploadFields;
};
const _default = getBaseUploadFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldEJhc2VGaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgSW5jb21pbmdVcGxvYWRUeXBlIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJ1xuaW1wb3J0IHsgbWltZVR5cGVWYWxpZGF0b3IgfSBmcm9tICcuL21pbWVUeXBlVmFsaWRhdG9yJ1xuXG5jb25zdCBsYWJlbHMgPSBleHRyYWN0VHJhbnNsYXRpb25zKFtcbiAgJ3VwbG9hZDp3aWR0aCcsXG4gICd1cGxvYWQ6aGVpZ2h0JyxcbiAgJ3VwbG9hZDpmaWxlU2l6ZScsXG4gICd1cGxvYWQ6ZmlsZU5hbWUnLFxuICAndXBsb2FkOnNpemVzJyxcbl0pXG5cbnR5cGUgT3B0aW9ucyA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbkNvbmZpZ1xuICBjb25maWc6IENvbmZpZ1xufVxuXG5jb25zdCBnZXRCYXNlVXBsb2FkRmllbGRzID0gKHsgY29sbGVjdGlvbiwgY29uZmlnIH06IE9wdGlvbnMpOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgdXBsb2FkT3B0aW9uczogSW5jb21pbmdVcGxvYWRUeXBlID1cbiAgICB0eXBlb2YgY29sbGVjdGlvbi51cGxvYWQgPT09ICdvYmplY3QnID8gY29sbGVjdGlvbi51cGxvYWQgOiB7fVxuXG4gIGNvbnN0IG1pbWVUeXBlOiBGaWVsZCA9IHtcbiAgICBuYW1lOiAnbWltZVR5cGUnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBhZG1pbjoge1xuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgfSxcbiAgICBsYWJlbDogJ01JTUUgVHlwZScsXG4gIH1cblxuICBjb25zdCB1cmw6IEZpZWxkID0ge1xuICAgIG5hbWU6ICd1cmwnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBhZG1pbjoge1xuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgfSxcbiAgICBsYWJlbDogJ1VSTCcsXG4gIH1cblxuICBjb25zdCB3aWR0aDogRmllbGQgPSB7XG4gICAgbmFtZTogJ3dpZHRoJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBhZG1pbjoge1xuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgfSxcbiAgICBsYWJlbDogbGFiZWxzWyd1cGxvYWQ6d2lkdGgnXSxcbiAgfVxuXG4gIGNvbnN0IGhlaWdodDogRmllbGQgPSB7XG4gICAgbmFtZTogJ2hlaWdodCcsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgYWRtaW46IHtcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIH0sXG4gICAgbGFiZWw6IGxhYmVsc1sndXBsb2FkOmhlaWdodCddLFxuICB9XG5cbiAgY29uc3QgZmlsZXNpemU6IEZpZWxkID0ge1xuICAgIG5hbWU6ICdmaWxlc2l6ZScsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgYWRtaW46IHtcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIH0sXG4gICAgbGFiZWw6IGxhYmVsc1sndXBsb2FkOmZpbGVTaXplJ10sXG4gIH1cblxuICBjb25zdCBmaWxlbmFtZTogRmllbGQgPSB7XG4gICAgbmFtZTogJ2ZpbGVuYW1lJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgYWRtaW46IHtcbiAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIH0sXG4gICAgaW5kZXg6IHRydWUsXG4gICAgbGFiZWw6IGxhYmVsc1sndXBsb2FkOmZpbGVOYW1lJ10sXG4gICAgdW5pcXVlOiB0cnVlLFxuICB9XG5cbiAgbGV0IHVwbG9hZEZpZWxkczogRmllbGRbXSA9IFtcbiAgICB7XG4gICAgICAuLi51cmwsXG4gICAgICBob29rczoge1xuICAgICAgICBhZnRlclJlYWQ6IFtcbiAgICAgICAgICAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhPy5maWxlbmFtZSkge1xuICAgICAgICAgICAgICBpZiAodXBsb2FkT3B0aW9ucy5zdGF0aWNVUkwuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbmZpZy5zZXJ2ZXJVUkx9JHt1cGxvYWRPcHRpb25zLnN0YXRpY1VSTH0vJHtkYXRhLmZpbGVuYW1lfWBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYCR7dXBsb2FkT3B0aW9ucy5zdGF0aWNVUkx9LyR7ZGF0YS5maWxlbmFtZX1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGZpbGVuYW1lLFxuICAgIG1pbWVUeXBlLFxuICAgIGZpbGVzaXplLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgXVxuXG4gIGlmICh1cGxvYWRPcHRpb25zLm1pbWVUeXBlcykge1xuICAgIG1pbWVUeXBlLnZhbGlkYXRlID0gbWltZVR5cGVWYWxpZGF0b3IodXBsb2FkT3B0aW9ucy5taW1lVHlwZXMpXG4gIH1cblxuICAvLyBBZGQgZm9jYWwgcG9pbnQgZmllbGRzIGlmIG5vdCBkaXNhYmxlZFxuICBpZiAoXG4gICAgdXBsb2FkT3B0aW9ucy5mb2NhbFBvaW50ICE9PSBmYWxzZSB8fFxuICAgIHVwbG9hZE9wdGlvbnMuaW1hZ2VTaXplcyB8fFxuICAgIHVwbG9hZE9wdGlvbnMucmVzaXplT3B0aW9uc1xuICApIHtcbiAgICB1cGxvYWRGaWVsZHMgPSB1cGxvYWRGaWVsZHMuY29uY2F0KFxuICAgICAgWydmb2NhbFgnLCAnZm9jYWxZJ10ubWFwKChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIGlmICh1cGxvYWRPcHRpb25zLmltYWdlU2l6ZXMpIHtcbiAgICB1cGxvYWRGaWVsZHMgPSB1cGxvYWRGaWVsZHMuY29uY2F0KFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NpemVzJyxcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkczogdXBsb2FkT3B0aW9ucy5pbWFnZVNpemVzLm1hcCgoc2l6ZSkgPT4gKHtcbiAgICAgICAgICBuYW1lOiBzaXplLm5hbWUsXG4gICAgICAgICAgdHlwZTogJ2dyb3VwJyxcbiAgICAgICAgICBhZG1pbjoge1xuICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnVybCxcbiAgICAgICAgICAgICAgaG9va3M6IHtcbiAgICAgICAgICAgICAgICBhZnRlclJlYWQ6IFtcbiAgICAgICAgICAgICAgICAgICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplRmlsZW5hbWUgPSBkYXRhPy5zaXplcz8uW3NpemUubmFtZV0/LmZpbGVuYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpemVGaWxlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGxvYWRPcHRpb25zLnN0YXRpY1VSTC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb25maWcuc2VydmVyVVJMfSR7dXBsb2FkT3B0aW9ucy5zdGF0aWNVUkx9LyR7c2l6ZUZpbGVuYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3VwbG9hZE9wdGlvbnMuc3RhdGljVVJMfS8ke3NpemVGaWxlbmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgbWltZVR5cGUsXG4gICAgICAgICAgICBmaWxlc2l6ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uZmlsZW5hbWUsXG4gICAgICAgICAgICAgIHVuaXF1ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGFiZWw6IHNpemUubmFtZSxcbiAgICAgICAgfSkpLFxuICAgICAgICBsYWJlbDogbGFiZWxzWyd1cGxvYWQ6c2l6ZXMnXSxcbiAgICAgIH0sXG4gICAgXSlcbiAgfVxuXG4gIHJldHVybiB1cGxvYWRGaWVsZHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QmFzZVVwbG9hZEZpZWxkc1xuIl0sIm5hbWVzIjpbImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJnZXRCYXNlVXBsb2FkRmllbGRzIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsInVwbG9hZE9wdGlvbnMiLCJ1cGxvYWQiLCJtaW1lVHlwZSIsIm5hbWUiLCJ0eXBlIiwiYWRtaW4iLCJoaWRkZW4iLCJyZWFkT25seSIsImxhYmVsIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxlc2l6ZSIsImZpbGVuYW1lIiwiZGlzYWJsZUJ1bGtFZGl0IiwiaW5kZXgiLCJ1bmlxdWUiLCJ1cGxvYWRGaWVsZHMiLCJob29rcyIsImFmdGVyUmVhZCIsImRhdGEiLCJzdGF0aWNVUkwiLCJzdGFydHNXaXRoIiwic2VydmVyVVJMIiwidW5kZWZpbmVkIiwibWltZVR5cGVzIiwidmFsaWRhdGUiLCJtaW1lVHlwZVZhbGlkYXRvciIsImZvY2FsUG9pbnQiLCJpbWFnZVNpemVzIiwicmVzaXplT3B0aW9ucyIsImNvbmNhdCIsIm1hcCIsImZpZWxkcyIsInNpemUiLCJzaXplRmlsZW5hbWUiLCJzaXplcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBNkxBOzs7ZUFBQTs7O3FDQXhMb0M7bUNBQ0Y7QUFFbEMsTUFBTUEsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFDakM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsc0JBQXNCLENBQUMsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQVc7SUFDMUQsTUFBTUMsZ0JBQ0osT0FBT0YsV0FBV0csTUFBTSxLQUFLLFdBQVdILFdBQVdHLE1BQU0sR0FBRyxDQUFDO0lBRS9ELE1BQU1DLFdBQWtCO1FBQ3RCQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztZQUNMQyxRQUFRO1lB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