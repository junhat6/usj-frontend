# MatchingApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiMatchingCandidatesGet**](#apimatchingcandidatesget) | **GET** /api/matching/candidates | マッチング候補取得|
|[**apiMatchingLikePost**](#apimatchinglikepost) | **POST** /api/matching/like | いいね送信|
|[**apiMatchingMatchesGet**](#apimatchingmatchesget) | **GET** /api/matching/matches | マッチ一覧取得|

# **apiMatchingCandidatesGet**
> Array<MatchingCandidate> apiMatchingCandidatesGet()

現在のユーザーに対するマッチング候補を取得します

### Example

```typescript
import {
    MatchingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MatchingApi(configuration);

let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.apiMatchingCandidatesGet(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**Array<MatchingCandidate>**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | マッチング候補取得成功 |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMatchingLikePost**
> LikeResponse apiMatchingLikePost(likeRequest)

指定したユーザーにいいねを送信します

### Example

```typescript
import {
    MatchingApi,
    Configuration,
    LikeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MatchingApi(configuration);

let likeRequest: LikeRequest; //

const { status, data } = await apiInstance.apiMatchingLikePost(
    likeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **likeRequest** | **LikeRequest**|  | |


### Return type

**LikeResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | いいね送信成功 |  -  |
|**400** | 入力エラー |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMatchingMatchesGet**
> Array<Match> apiMatchingMatchesGet()

成立したマッチの一覧を取得します

### Example

```typescript
import {
    MatchingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MatchingApi(configuration);

const { status, data } = await apiInstance.apiMatchingMatchesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Match>**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | マッチ一覧取得成功 |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

