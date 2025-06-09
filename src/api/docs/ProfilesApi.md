# ProfilesApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiProfilesMeGet**](#apiprofilesmeget) | **GET** /api/profiles/me | 自分のプロフィール取得|
|[**apiProfilesMePut**](#apiprofilesmeput) | **PUT** /api/profiles/me | プロフィール更新|
|[**apiProfilesUserIdGet**](#apiprofilesuseridget) | **GET** /api/profiles/{userId} | 他ユーザーのプロフィール取得|

# **apiProfilesMeGet**
> Profile apiProfilesMeGet()

認証されたユーザーの詳細プロフィールを取得します

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

const { status, data } = await apiInstance.apiProfilesMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Profile**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | プロフィール取得成功 |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiProfilesMePut**
> Profile apiProfilesMePut(profileUpdateRequest)

認証されたユーザーのプロフィールを更新します

### Example

```typescript
import {
    ProfilesApi,
    Configuration,
    ProfileUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let profileUpdateRequest: ProfileUpdateRequest; //

const { status, data } = await apiInstance.apiProfilesMePut(
    profileUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateRequest** | **ProfileUpdateRequest**|  | |


### Return type

**Profile**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 更新成功 |  -  |
|**400** | 入力エラー |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiProfilesUserIdGet**
> PublicProfile apiProfilesUserIdGet()

指定したユーザーの公開プロフィールを取得します

### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

let userId: number; // (default to undefined)

const { status, data } = await apiInstance.apiProfilesUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|


### Return type

**PublicProfile**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | プロフィール取得成功 |  -  |
|**401** | 未認証 |  -  |
|**404** | ユーザーが見つかりません |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

