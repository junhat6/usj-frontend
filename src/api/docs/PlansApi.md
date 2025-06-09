# PlansApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiPlansGet**](#apiplansget) | **GET** /api/plans | デートプラン一覧取得|
|[**apiPlansPlanIdDelete**](#apiplansplaniddelete) | **DELETE** /api/plans/{planId} | デートプラン削除|
|[**apiPlansPlanIdGet**](#apiplansplanidget) | **GET** /api/plans/{planId} | デートプラン詳細取得|
|[**apiPlansPlanIdPut**](#apiplansplanidput) | **PUT** /api/plans/{planId} | デートプラン更新|
|[**apiPlansPost**](#apiplanspost) | **POST** /api/plans | デートプラン作成|

# **apiPlansGet**
> Array<DatePlan> apiPlansGet()

作成したデートプランの一覧を取得します

### Example

```typescript
import {
    PlansApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

const { status, data } = await apiInstance.apiPlansGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DatePlan>**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | デートプラン一覧取得成功 |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPlansPlanIdDelete**
> apiPlansPlanIdDelete()

指定したデートプランを削除します

### Example

```typescript
import {
    PlansApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let planId: number; // (default to undefined)

const { status, data } = await apiInstance.apiPlansPlanIdDelete(
    planId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | デートプラン削除成功 |  -  |
|**401** | 未認証 |  -  |
|**403** | アクセス権限なし |  -  |
|**404** | デートプランが見つかりません |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPlansPlanIdGet**
> DatePlanDetail apiPlansPlanIdGet()

指定したデートプランの詳細を取得します

### Example

```typescript
import {
    PlansApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let planId: number; // (default to undefined)

const { status, data } = await apiInstance.apiPlansPlanIdGet(
    planId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planId** | [**number**] |  | defaults to undefined|


### Return type

**DatePlanDetail**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | デートプラン詳細取得成功 |  -  |
|**401** | 未認証 |  -  |
|**403** | アクセス権限なし |  -  |
|**404** | デートプランが見つかりません |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPlansPlanIdPut**
> DatePlan apiPlansPlanIdPut(updateDatePlanRequest)

指定したデートプランを更新します

### Example

```typescript
import {
    PlansApi,
    Configuration,
    UpdateDatePlanRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let planId: number; // (default to undefined)
let updateDatePlanRequest: UpdateDatePlanRequest; //

const { status, data } = await apiInstance.apiPlansPlanIdPut(
    planId,
    updateDatePlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDatePlanRequest** | **UpdateDatePlanRequest**|  | |
| **planId** | [**number**] |  | defaults to undefined|


### Return type

**DatePlan**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | デートプラン更新成功 |  -  |
|**400** | 入力エラー |  -  |
|**401** | 未認証 |  -  |
|**403** | アクセス権限なし |  -  |
|**404** | デートプランが見つかりません |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPlansPost**
> DatePlan apiPlansPost(createDatePlanRequest)

新しいデートプランを作成します

### Example

```typescript
import {
    PlansApi,
    Configuration,
    CreateDatePlanRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PlansApi(configuration);

let createDatePlanRequest: CreateDatePlanRequest; //

const { status, data } = await apiInstance.apiPlansPost(
    createDatePlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDatePlanRequest** | **CreateDatePlanRequest**|  | |


### Return type

**DatePlan**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | デートプラン作成成功 |  -  |
|**400** | 入力エラー |  -  |
|**401** | 未認証 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

