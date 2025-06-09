# UsersApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiUsersMeGet**](#apiusersmeget) | **GET** /api/users/me | 現在のユーザー情報取得|
|[**apiUsersMePut**](#apiusersmeput) | **PUT** /api/users/me | ユーザー情報更新|

# **apiUsersMeGet**
> User apiUsersMeGet()

認証されたユーザーの情報を取得します

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.apiUsersMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**User**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ユーザー情報取得成功 |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiUsersMePut**
> User apiUsersMePut(userUpdateRequest)

認証されたユーザーの基本情報を更新します

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userUpdateRequest: UserUpdateRequest; //

const { status, data } = await apiInstance.apiUsersMePut(
    userUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateRequest** | **UserUpdateRequest**|  | |


### Return type

**User**

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

