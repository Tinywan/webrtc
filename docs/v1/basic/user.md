---
title: 用户管理
---

## 用户列表

#### 请求方式： GET

#### 请求地址： {{base_url}}/console/users?page=1&per_page=3

**请求参数**

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| page| int | 否| 8 | 页码，默认1 | 1|
| per_page| int | 否| 16 | 每页条数，默认10 | 10|

#### 响应示例

```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "total": 13,
        "item": [
            {
                "uid": 110,
                "username": "阿克苏",
                "password": "1231231",
                "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                "status": 0,
                "group_id": 0,
                "create_time": "2020-09-19 15:03:21"
            },
            ...
        ]
    }
}
```

**响应参数**

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| total| int | 是| 16 | 总条数 | 10 |
|list| int | 是| 16 |列表描述 |10 |
|└ username|int | 是| 16 |username |10 |

## 用户添加

#### 请求方式： `POST`

#### 请求地址： `{{base_url}}/console/users`

#### 请求参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| username| string| 是| 32 | 用户名 | 阿克苏|
| role_id | array | 是| 124 | 所属角色id | [11,12] |

#### 请求数据结构

```json
{
    "username": "小何何",
    "role_id": [
        11,
        21
    ]
}
```

#### 成功示例

```json
{
    "code": 201,
    "msg": "添加成功",
    "data": {
        "id": "20"
    }
}
```

## 用户编辑

#### 请求方式： PUT

#### 请求地址： {{base_url}}/console/users/{{uid}}

#### 请求参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| role_id | array | 是| 124 | 所属角色id | [11,12] |

#### 请求数据结构

```json
{
    "role_id": [11,21]
}
```

#### 成功示例

```json
{
    "code": 200,
    "msg": "添加成功",
    "data": {
        "id": "20"
    }
}
```

## 个人信息

#### 请求方式： GET

#### 请求地址： {{base_url}}/console/users/info

#### 响应示例

```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "roles": [
            "Admin"
        ],
        "introduction": "我是阿克苏",
        "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        "name": "阿克苏"
    }
}
```
