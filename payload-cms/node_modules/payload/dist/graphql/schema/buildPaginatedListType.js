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
const _graphql = require("graphql");
const buildPaginatedListType = (name, docType)=>new _graphql.GraphQLObjectType({
        name,
        fields: {
            docs: {
                type: new _graphql.GraphQLList(docType)
            },
            hasNextPage: {
                type: _graphql.GraphQLBoolean
            },
            hasPrevPage: {
                type: _graphql.GraphQLBoolean
            },
            limit: {
                type: _graphql.GraphQLInt
            },
            nextPage: {
                type: _graphql.GraphQLInt
            },
            offset: {
                type: _graphql.GraphQLInt
            },
            page: {
                type: _graphql.GraphQLInt
            },
            pagingCounter: {
                type: _graphql.GraphQLInt
            },
            prevPage: {
                type: _graphql.GraphQLInt
            },
            totalDocs: {
                type: _graphql.GraphQLInt
            },
            totalPages: {
                type: _graphql.GraphQLInt
            }
        }
    });
const _default = buildPaginatedListType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW50LCBHcmFwaFFMTGlzdCwgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tICdncmFwaHFsJ1xuXG5jb25zdCBidWlsZFBhZ2luYXRlZExpc3RUeXBlID0gKG5hbWUsIGRvY1R5cGUpID0+XG4gIG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZSxcbiAgICBmaWVsZHM6IHtcbiAgICAgIGRvY3M6IHtcbiAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KGRvY1R5cGUpLFxuICAgICAgfSxcbiAgICAgIGhhc05leHRQYWdlOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICBoYXNQcmV2UGFnZTogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgbGltaXQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgbmV4dFBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgb2Zmc2V0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgIHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgcGFnaW5nQ291bnRlcjogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICBwcmV2UGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICB0b3RhbERvY3M6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgdG90YWxQYWdlczogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgfSxcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZVxuIl0sIm5hbWVzIjpbImJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUiLCJuYW1lIiwiZG9jVHlwZSIsIkdyYXBoUUxPYmplY3RUeXBlIiwiZmllbGRzIiwiZG9jcyIsInR5cGUiLCJHcmFwaFFMTGlzdCIsImhhc05leHRQYWdlIiwiR3JhcGhRTEJvb2xlYW4iLCJoYXNQcmV2UGFnZSIsImxpbWl0IiwiR3JhcGhRTEludCIsIm5leHRQYWdlIiwib2Zmc2V0IiwicGFnZSIsInBhZ2luZ0NvdW50ZXIiLCJwcmV2UGFnZSIsInRvdGFsRG9jcyIsInRvdGFsUGFnZXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFzQkE7OztlQUFBOzs7eUJBdEIyRTtBQUUzRSxNQUFNQSx5QkFBeUIsQ0FBQ0MsTUFBTUMsVUFDcEMsSUFBSUMsMEJBQWlCLENBQUM7UUFDcEJGO1FBQ0FHLFFBQVE7WUFDTkMsTUFBTTtnQkFDSkMsTUFBTSxJQUFJQyxvQkFBVyxDQUFDTDtZQUN4QjtZQUNBTSxhQUFhO2dCQUFFRixNQUFNRyx1QkFBYztZQUFDO1lBQ3BDQyxhQUFhO2dCQUFFSixNQUFNRyx1QkFBYztZQUFDO1lBQ3BDRSxPQUFPO2dCQUFFTCxNQUFNTSxtQkFBVTtZQUFDO1lBQzFCQyxVQUFVO2dCQUFFUCxNQUFNTSxtQkFBVTtZQUFDO1lBQzdCRSxRQUFRO2dCQUFFUixNQUFNTSxtQkFBVTtZQUFDO1lBQzNCRyxNQUFNO2dCQUFFVCxNQUFNTSxtQkFBVTtZQUFDO1lBQ3pCSSxlQUFlO2dCQUFFVixNQUFNTSxtQkFBVTtZQUFDO1lBQ2xDSyxVQUFVO2dCQUFFWCxNQUFNTSxtQkFBVTtZQUFDO1lBQzdCTSxXQUFXO2dCQUFFWixNQUFNTSxtQkFBVTtZQUFDO1lBQzlCTyxZQUFZO2dCQUFFYixNQUFNTSxtQkFBVTtZQUFDO1FBQ2pDO0lBQ0Y7TUFFRixXQUFlWiJ9