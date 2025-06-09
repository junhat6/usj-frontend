# DatePlanDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**creatorId** | **number** |  | [optional] [default to undefined]
**sharedWithUserId** | **number** |  | [optional] [default to undefined]
**scheduledDate** | **string** |  | [optional] [default to undefined]
**items** | [**Array&lt;DatePlanItem&gt;**](DatePlanItem.md) |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**creator** | [**PublicProfile**](PublicProfile.md) |  | [optional] [default to undefined]
**sharedWithUser** | [**PublicProfile**](PublicProfile.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DatePlanDetail } from './api';

const instance: DatePlanDetail = {
    id,
    title,
    description,
    creatorId,
    sharedWithUserId,
    scheduledDate,
    items,
    status,
    createdAt,
    updatedAt,
    creator,
    sharedWithUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
