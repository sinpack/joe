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
const _cssminimizerwebpackplugin = /*#__PURE__*/ _interop_require_default(require("css-minimizer-webpack-plugin"));
const _minicssextractplugin = /*#__PURE__*/ _interop_require_default(require("mini-css-extract-plugin"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _terserwebpackplugin = /*#__PURE__*/ _interop_require_default(require("terser-webpack-plugin"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const componentWebpackConfig = {
    entry: {
        main: [
            _path.default.resolve(__dirname, './components/index.js')
        ]
    },
    externals: {
        react: 'react'
    },
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(t|j)sx?$/,
                use: [
                    {
                        loader: require.resolve('swc-loader')
                    }
                ]
            },
            {
                oneOf: [
                    {
                        loader: require.resolve('url-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                            limit: 10000
                        },
                        test: [
                            /\.bmp$/,
                            /\.gif$/,
                            /\.jpe?g$/,
                            /\.png$/
                        ]
                    },
                    {
                        sideEffects: true,
                        test: /\.(sa|sc|c)ss$/,
                        use: [
                            _minicssextractplugin.default.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            'postcss-preset-env'
                                        ]
                                    }
                                }
                            },
                            'sass-loader'
                        ]
                    },
                    {
                        exclude: [
                            /\.(js|jsx|mjs)$/,
                            /\.html$/,
                            /\.json$/
                        ],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new _terserwebpackplugin.default({
                extractComments: false
            }),
            new _cssminimizerwebpackplugin.default({})
        ]
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        path: _path.default.resolve(__dirname, '../../components'),
        publicPath: '/'
    },
    plugins: [
        new _minicssextractplugin.default({
            filename: 'styles.css',
            ignoreOrder: true
        })
    ],
    resolve: {
        alias: {
            'payload-scss-overrides': _path.default.resolve(__dirname, './scss/overrides.scss')
        },
        modules: [
            'node_modules',
            _path.default.resolve(__dirname, '../../node_modules')
        ]
    },
    stats: 'errors-only'
};
const _default = componentWebpackConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICd3ZWJwYWNrJ1xuXG5pbXBvcnQgT3B0aW1pemVDU1NBc3NldHNQbHVnaW4gZnJvbSAnY3NzLW1pbmltaXplci13ZWJwYWNrLXBsdWdpbidcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgVGVyc2VySlNQbHVnaW4gZnJvbSAndGVyc2VyLXdlYnBhY2stcGx1Z2luJ1xuXG5jb25zdCBjb21wb25lbnRXZWJwYWNrQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xuICBlbnRyeToge1xuICAgIG1haW46IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzL2luZGV4LmpzJyldLFxuICB9LFxuICBleHRlcm5hbHM6IHtcbiAgICByZWFjdDogJ3JlYWN0JyxcbiAgfSxcbiAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICBtb2R1bGU6IHtcbiAgICBydWxlczogW1xuICAgICAge1xuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgdGVzdDogL1xcLih0fGopc3g/JC8sXG4gICAgICAgIHVzZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdzd2MtbG9hZGVyJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGVyOiByZXF1aXJlLnJlc29sdmUoJ3VybC1sb2FkZXInKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogJ3N0YXRpYy9tZWRpYS9bbmFtZV0uW2hhc2g6OF0uW2V4dF0nLFxuICAgICAgICAgICAgICBsaW1pdDogMTAwMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVzdDogWy9cXC5ibXAkLywgL1xcLmdpZiQvLCAvXFwuanBlP2ckLywgL1xcLnBuZyQvXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNpZGVFZmZlY3RzOiB0cnVlLFxuICAgICAgICAgICAgdGVzdDogL1xcLihzYXxzY3xjKXNzJC8sXG4gICAgICAgICAgICB1c2U6IFtcbiAgICAgICAgICAgICAgTWluaUNTU0V4dHJhY3RQbHVnaW4ubG9hZGVyLFxuICAgICAgICAgICAgICAnY3NzLWxvYWRlcicsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2FkZXI6ICdwb3N0Y3NzLWxvYWRlcicsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgcG9zdGNzc09wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogWydwb3N0Y3NzLXByZXNldC1lbnYnXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ3Nhc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBleGNsdWRlOiBbL1xcLihqc3xqc3h8bWpzKSQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdmaWxlLWxvYWRlcicpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBuYW1lOiAnc3RhdGljL21lZGlhL1tuYW1lXS5baGFzaDo4XS5bZXh0XScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG9wdGltaXphdGlvbjoge1xuICAgIG1pbmltaXplcjogW1xuICAgICAgbmV3IFRlcnNlckpTUGx1Z2luKHtcbiAgICAgICAgZXh0cmFjdENvbW1lbnRzOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgbmV3IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luKHt9KSxcbiAgICBdLFxuICB9LFxuICBvdXRwdXQ6IHtcbiAgICBmaWxlbmFtZTogJ2luZGV4LmpzJyxcbiAgICBsaWJyYXJ5VGFyZ2V0OiAnY29tbW9uanMyJyxcbiAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vY29tcG9uZW50cycpLFxuICAgIHB1YmxpY1BhdGg6ICcvJyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIG5ldyBNaW5pQ1NTRXh0cmFjdFBsdWdpbih7XG4gICAgICBmaWxlbmFtZTogJ3N0eWxlcy5jc3MnLFxuICAgICAgaWdub3JlT3JkZXI6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ3BheWxvYWQtc2Nzcy1vdmVycmlkZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zY3NzL292ZXJyaWRlcy5zY3NzJyksXG4gICAgfSxcbiAgICBtb2R1bGVzOiBbJ25vZGVfbW9kdWxlcycsIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9ub2RlX21vZHVsZXMnKV0sXG4gIH0sXG4gIHN0YXRzOiAnZXJyb3JzLW9ubHknLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRXZWJwYWNrQ29uZmlnXG4iXSwibmFtZXMiOlsiY29tcG9uZW50V2VicGFja0NvbmZpZyIsImVudHJ5IiwibWFpbiIsInBhdGgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiZXh0ZXJuYWxzIiwicmVhY3QiLCJtb2RlIiwibW9kdWxlIiwicnVsZXMiLCJleGNsdWRlIiwidGVzdCIsInVzZSIsImxvYWRlciIsInJlcXVpcmUiLCJvbmVPZiIsIm9wdGlvbnMiLCJuYW1lIiwibGltaXQiLCJzaWRlRWZmZWN0cyIsIk1pbmlDU1NFeHRyYWN0UGx1Z2luIiwicG9zdGNzc09wdGlvbnMiLCJwbHVnaW5zIiwib3B0aW1pemF0aW9uIiwibWluaW1pemVyIiwiVGVyc2VySlNQbHVnaW4iLCJleHRyYWN0Q29tbWVudHMiLCJPcHRpbWl6ZUNTU0Fzc2V0c1BsdWdpbiIsIm91dHB1dCIsImZpbGVuYW1lIiwibGlicmFyeVRhcmdldCIsInB1YmxpY1BhdGgiLCJpZ25vcmVPcmRlciIsImFsaWFzIiwibW9kdWxlcyIsInN0YXRzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE2RkE7OztlQUFBOzs7a0ZBM0ZvQzs2RUFDSDs2REFDaEI7NEVBQ1U7Ozs7OztBQUUzQixNQUFNQSx5QkFBd0M7SUFDNUNDLE9BQU87UUFDTEMsTUFBTTtZQUFDQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVztTQUF5QjtJQUMxRDtJQUNBQyxXQUFXO1FBQ1RDLE9BQU87SUFDVDtJQUNBQyxNQUFNO0lBQ05DLFFBQVE7UUFDTkMsT0FBTztZQUNMO2dCQUNFQyxTQUFTO2dCQUNUQyxNQUFNO2dCQUNOQyxLQUFLO29CQUNIO3dCQUNFQyxRQUFRQyxRQUFRWCxPQUFPLENBQUM7b0JBQzFCO2lCQUNEO1lBQ0g7WUFDQTtnQkFDRVksT0FBTztvQkFDTDt3QkFDRUYsUUFBUUMsUUFBUVgsT0FBTyxDQUFDO3dCQUN4QmEsU0FBUzs0QkFDUEMsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQVAsTUFBTTs0QkFBQzs0QkFBVTs0QkFBVTs0QkFBWTt5QkFBUztvQkFDbEQ7b0JBQ0E7d0JBQ0VRLGFBQWE7d0JBQ2JSLE1BQU07d0JBQ05DLEtBQUs7NEJBQ0hRLDZCQUFvQixDQUFDUCxNQUFNOzRCQUMzQjs0QkFDQTtnQ0FDRUEsUUFBUTtnQ0FDUkcsU0FBUztvQ0FDUEssZ0JBQWdCO3dDQUNkQyxTQUFTOzRDQUFDO3lDQUFxQjtvQ0FDakM7Z0NBQ0Y7NEJBQ0Y7NEJBQ0E7eUJBQ0Q7b0JBQ0g7b0JBQ0E7d0JBQ0VaLFNBQVM7NEJBQUM7NEJBQW1COzRCQUFXO3lCQUFVO3dCQUNsREcsUUFBUUMsUUFBUVgsT0FBTyxDQUFDO3dCQUN4QmEsU0FBUzs0QkFDUEMsTUFBTTt3QkFDUjtvQkFDRjtpQkFDRDtZQUNIO1NBQ0Q7SUFDSDtJQUNBTSxjQUFjO1FBQ1pDLFdBQVc7WUFDVCxJQUFJQyw0QkFBYyxDQUFDO2dCQUNqQkMsaUJBQWlCO1lBQ25CO1lBQ0EsSUFBSUMsa0NBQXVCLENBQUMsQ0FBQztTQUM5QjtJQUNIO0lBQ0FDLFFBQVE7UUFDTkMsVUFBVTtRQUNWQyxlQUFlO1FBQ2Y1QixNQUFNQSxhQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVztRQUM5QjJCLFlBQVk7SUFDZDtJQUNBVCxTQUFTO1FBQ1AsSUFBSUYsNkJBQW9CLENBQUM7WUFDdkJTLFVBQVU7WUFDVkcsYUFBYTtRQUNmO0tBQ0Q7SUFDRDdCLFNBQVM7UUFDUDhCLE9BQU87WUFDTCwwQkFBMEIvQixhQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVztRQUNwRDtRQUNBOEIsU0FBUztZQUFDO1lBQWdCaEMsYUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVc7U0FBc0I7SUFDMUU7SUFDQStCLE9BQU87QUFDVDtNQUVBLFdBQWVwQyJ9