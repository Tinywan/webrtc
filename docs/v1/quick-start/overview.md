---
title: 概述
---

## 概述
---

:::important 小提示
所有 API 的调用是通过向 API 的服务端地址发送 HTTP 请求，并按照接口说明在请求中加入相应请求参数来完成的。根据请求的处理情况，系统会返回处理结果
:::

### 请求结构

:::note 通信协议
为了获得更高的安全性，仅支持使用 HTTPS 通道发送API请求。
:::

:::note 字符编码
请求及返回结果都使用 `UTF-8` 字符集进行编码。
:::

:::note 内容类型和编码
所有请求和响应的内容类型和编码 `Content-Type:application/json`
:::

### 调用方式

:::note 身份认证
接口的身份认证采用OAuth2的客户端授权模式，对客户端持完全信任原则，赋予所有接口权限。调用采用HTTPS协议，Restful API 请求方式。
:::

:::note 认证机制
接口安全采用[Json web token (JWT)](https://jwt.io/introduction/)机制，基于token的认证机制
:::

### 频率限制

出于系统保护的考虑，我们对接口的调用做了频率限制。默认情况下，每个服务端调用接口都有一定的频率限制，当超过此限制时，调用对应接口会收到相应错误码。

### 基础路径

:::note 生产环境
`https://www.bjjnts.cn`
:::

:::note 测试环境
`https://test.bjjnts.cn`
:::

以下使用 {{base_url}} 代替请求地址

### 返回结果

:::note 调用 API 服务后返回数据采用统一格式
返回的 HTTP 状态码为 2xx，代表调用成功。 返回的 HTTP 状态码为 4xx 或 5xx，代表调用失败。 调用成功返回的数据格式主要有 XML 和 JSON 两种，外部系统可以在请求时传入参数来制定返回的数据格式，默认为 JSON 格式。
:::

:::note 双层状态码判断
1、HTTP 状态码
* 200：调用成功。 
* 201：资源创建成功。 
* 204：删除成功。 
* 400：业务错误，语义有误，当前请求无法被服务器理解。**详解业务状态码** 
* 401：认证失败，当前请求需要用户验证。  
* 403：无权限调用接口，服务器已经理解请求，但是拒绝执行它。  
* 404：请求失败，请求所希望得到的资源未被在服务器上发现  
* 405：请求接口不存在  
* 422：请求参数校验失败  
* 429：请求次数超过限定次数  
* 500：代表调用服务器内部错误  

2、CODE 业务状态码
* 0：无错误
* 1000001：其他错误一
* 400100001：其他错误一
* 400200001：其他错误一
* 400300001：其他错误一
* 400400001：其他错误一
:::

#### 成功结果

```json {1,2}
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
    "code": 0,
    "msg": "ok",
    "data": {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ3aW90LmZycCSIsImF2YXRhciI6IiIsInVzZXJfcHdkX251bSI6MCwidXNlcl9sb2NrX3RpbWUiOjE1OTk5ODkyOTJ9fQ.UCGKRN7oD3jtydyaQmgGwv_V4yA4AyYMy-OS3YD2h398cGW5_btEWB-Pr845GXvUQ2AX1lRHUYHxXkEVBJWBwr11CN1lShwNzoe-kijamBkfjaBhrqbAgcMu65utxiUzvH1vKeaWLWNRtUdDwRA6IikL5CiKFKleApqHcxQVER4",
        "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ3aW90LmZycC5t6usJsj9HNLp80drho1hErJJcATVS46BOKwg_MyNrhmYTsW9udk7Sg4T8vdxkvVbm2yDDwmz_1GAH0zA1qdC1GdllXjBFgklS3KWXcste0kBDbVLiIeE2iz2Nuimeainb4IOXJgyynaIg1I",
        "token_type": "Bearer",
        "expires_in": 3600
    }
}
```
#### 错误结果
调用接口出错后，将不会返回结果数据。调用方可根据每个接口对应的错误码以及下述公共错误码来定位错误原因。 当调用出错时，HTTP 请求返回一个 `4xx` 或 `5xx` 的 HTTP 状态码。返回的消息体中是具体的错误代码及错误信息。
```json {1,2}
HTTP/1.1 403 OK
Content-Type: application/json;charset=UTF-8
{
    "code": 403,
    "msg": "无权限访问",
    "data": {}
}
```

### 公共参数

#### 公共请求参数

| 参数|类型|是否必填|最大长度|描述|描述|
|:---|:---|:---|:---|:---|:---|
| version | string | 是| 32 | API 版本号 | 固定为：v1 |
| access_token| string| 是| 32 | 全局令牌 | xxxxxx |

#### 公共响应参数

| 参数|类型|是否必填|最大长度|描述|描述|
|:---|:---|:---|:---|:---|:---|
| code| int| 是| 32 | 网关返回码 | 200 |
| msg| string| 是| 32 | 网关返回码描述 | 请求成功 |
| data| object | 是| 32 | 网关返回响应体 |2014-07-24 03:07:50|

### RESTful API最佳实践

在明白了什么是RESTful以及其优点之后，那么怎样才算是一个RESTful风格的接口呢？有如下几点需要注意：

:::note 无状态
应该注意区别应用的状态和连接协议的状态。HTTP连接是无状态的（也就是不记录每个连接的信息），而REST传输会包含应用的所有状态信息，因此可以大幅降低对HTTP连接的重复请求资源消耗。
:::

:::note 接口返回的数据格式推荐使用JSON
JSON属于有结构体的数据格式，本质上是字符串，轻量，有利于网络传输和解析。
:::

:::note url中不要出现动词
比如getXXXXXX、updateXXXXX的字眼。
:::

:::note 请求动作以HTTP请求方法类型来表示
这点和第二点有一定关联，比如要获取用户列表，以往我们可能会把url地址定义成http://xxx.com/getUser,更符合规范的做法是http://xxx.com/user，然后请求类型定义为GET,如果是修改用户，则请求类型定义为PATCH。
:::

:::note 明确的HTTP状态码
HTTP状态码用于让接口调用方可以清楚知道本次请求是否已经正常执行，如果请求失败也可以从状态码大致定位问题。
:::
后端在返回接口数据时可以指定状态码，当不指定时默认情况下，请求成功为200，后端异常则为500或502，请求的地址或资源不存在为404

:::note 明确的错误提示
一个接口调用的请求发送成功，但不一定是执行成功。
:::
比如说你在一个网站中，你明明不是VIP，但是却访问了一个只有VIP才能访问的接口，通常我们在后端会对一些特殊接口做权限校验，这时候校验不通过就要返回一个错误提示信息，错误提示信息一般需要包含状态码、自定义错误码、错误信息、请求的url，状态码在前面已经介绍过，这里说说后面三个如果体现，当后端接收到前端的接口调用请求后请求内容有异常时，应给出一段类似如下内容的JSON数据：

```json {1}
// 此时HTTP的状态码应该为403
{
    "msg": "权限不足",
    "code": 0, 
    "request_url": "GET vip/music"
}
```
* `msg`字段用于描述本次错误的具体原因
* `code`字段内容是一系列自定义的错误码，错误码应该是接口开发者定义且长期维护的一个清单，每个错误码对应一个msg
* `request_url`字段用于显示本次请求的HTTP请求方法及地址。

> 错误码的作用在于补充解释HTTP状态码，打比方，同样是403错误，可能会对应不同情况。

**完整、规范的错误提示有利于接口调用方快速定位问题，同时对后端开发者在接口运维时也有很重要的意义。**

正因为RESTful只是规范而不是标准，导致虽然同样是RESTful API但一些开发体验却不怎么一致，多数大厂的开放接口在可接受的范围内，倒是一些自己公司内部或者其他合作伙伴的接口却未必合乎规范，特别是在错误提示这一块，这里强烈建议读者从自身做起，惠己及人。

### HTTP请求方法在RESTful API中的典型应用

|资源 |GET|PUT|POST|DELETE|
|:---|:---|:---|:---|:---|
| 一组资源的URI：https://example.com/resources |列出URI，以及该资源组中每个资源的详细信息（后者可选）|使用给定的一组资源替换当前整组资源| 在本组资源中创建/追加一个新的资源。该操作往往返回新资源的URL | 删除整组资源 |
| 单个资源的URI：https://example.com/resources/142 |获取指定的资源的详细信息，格式可以自选一个合适的网络媒体类型（比如：XML、JSON等）|替换/创建指定的资源。并将其追加到相应的资源组中。| 把指定的资源当做一个资源组，并在其下创建/追加一个新的元素，使其隶属于当前资源。 | 删除指定的元素。 |

### 将HTTP方法用于RESTful服务

|HTTP Verb |CRUD|Entire Collection (e.g. /customers)|Specific Item (e.g. /customers/{id})|
|:---|:---|:---|:---|
| POST |Create| 201 (Created), 'Location' header with link to /customers/{id} containing new ID. | 404 (Not Found), 409 (Conflict) if resource already exists..|
| GET |Read| 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists. | 200 (OK), single customer. 404 (Not Found), if ID not found or invalid.|
| PUT |Update/Replace |405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.|200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
| PATCH |Update/Modify |405 (Method Not Allowed), unless you want to modify the collection itself.|200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
| DELETE |Delete |405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.|200 (OK). 404 (Not Found), if ID not found or invalid.|

### 实现举例
例如，一个简单的网络商店应用，列举所有商品，
```
GET http://www.store.com/products
```

呈现某一件商品，
```
GET http://www.store.com/products/12345
```

下单购买，
```
POST http://www.store.com/orders
<purchase-order>
  <item> ... </item>
</purchase-order>
```