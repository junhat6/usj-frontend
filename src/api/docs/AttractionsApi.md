# AttractionsApi

All URIs are relative to *http://localhost:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAttractionsAttractionIdGet**](#apiattractionsattractionidget) | **GET** /api/attractions/{attractionId} | アトラクション詳細取得|
|[**apiAttractionsGet**](#apiattractionsget) | **GET** /api/attractions | アトラクション一覧取得|

# **apiAttractionsAttractionIdGet**
> AttractionDetail apiAttractionsAttractionIdGet()

指定したアトラクションの詳細情報を取得します

### Example

```typescript
import {
    AttractionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttractionsApi(configuration);

let attractionId: number; // (default to undefined)

const { status, data } = await apiInstance.apiAttractionsAttractionIdGet(
    attractionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attractionId** | [**number**] |  | defaults to undefined|


### Return type

**AttractionDetail**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | アトラクション詳細取得成功 |  -  |
|**404** | アトラクションが見つかりません |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAttractionsGet**
> Array<Attraction> apiAttractionsGet()

USJのアトラクション一覧を取得します

### Example

```typescript
import {
    AttractionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AttractionsApi(configuration);

let category: 'RIDE' | 'SHOW' | 'RESTAURANT' | 'SHOP' | 'OTHER'; // (optional) (default to undefined)
let area: 'HOLLYWOOD' | 'NEW_YORK' | 'SAN_FRANCISCO' | 'JURASSIC_PARK' | 'AMITY_VILLAGE' | 'WATERWORLD' | 'WIZARDING_WORLD' | 'MINION_PARK' | 'OTHER'; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiAttractionsGet(
    category,
    area
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | [**&#39;RIDE&#39; | &#39;SHOW&#39; | &#39;RESTAURANT&#39; | &#39;SHOP&#39; | &#39;OTHER&#39;**]**Array<&#39;RIDE&#39; &#124; &#39;SHOW&#39; &#124; &#39;RESTAURANT&#39; &#124; &#39;SHOP&#39; &#124; &#39;OTHER&#39;>** |  | (optional) defaults to undefined|
| **area** | [**&#39;HOLLYWOOD&#39; | &#39;NEW_YORK&#39; | &#39;SAN_FRANCISCO&#39; | &#39;JURASSIC_PARK&#39; | &#39;AMITY_VILLAGE&#39; | &#39;WATERWORLD&#39; | &#39;WIZARDING_WORLD&#39; | &#39;MINION_PARK&#39; | &#39;OTHER&#39;**]**Array<&#39;HOLLYWOOD&#39; &#124; &#39;NEW_YORK&#39; &#124; &#39;SAN_FRANCISCO&#39; &#124; &#39;JURASSIC_PARK&#39; &#124; &#39;AMITY_VILLAGE&#39; &#124; &#39;WATERWORLD&#39; &#124; &#39;WIZARDING_WORLD&#39; &#124; &#39;MINION_PARK&#39; &#124; &#39;OTHER&#39;>** |  | (optional) defaults to undefined|


### Return type

**Array<Attraction>**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | アトラクション一覧取得成功 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

