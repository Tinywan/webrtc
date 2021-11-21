---
title: 认证和授权
---

## 认证和授权
---

:::note 小提示
authentication&authorization <br/>
:::

### 认证&授权流程

```php
  +-----------------------
  | RESOURCE EXISTS ? (if private it is often checked AFTER auth check)
  +-----------------------
    |       |
 NO |       v YES
    v      +-----------------------
   404     | IS LOGGED-IN ? (authenticated, aka has session or JWT cookie)
   or      +-----------------------
   401        |              |
   403     NO |              | YES
   3xx        v              v
              401            +-----------------------
       (404 no reveal)       | CAN ACCESS RESOURCE ? (permission, authorized, ...)
              or             +-----------------------
             redirect          |            |
             to login       NO |            | YES
                               |            |
                               v            v
                               403          OK 200, redirect, ...
                      (or 404: no reveal)
                      (or 404: resource does not exist if private)
                      (or 3xx: redirection)
```
:::note 通常按以下顺序进行检查
* 404（如果资源是公共资源且不存在）或3xx重定向

除此以外：

* 401（如果未登录或会话已过期）
* 403 如果用户无权访问资源（文件，json，...）
* 404（如果资源不存在或不愿意透露任何内容），或3xx重定向
:::

### 认证 Authentication

:::note 语义
指证明身份正确
:::

:::note HTTP 状态码
`401 Unauthorized`，该HTTP状态码表示认证错误，表示这个请求没有被服务器认证或者客户端传送的证书错误，可以修改后在进行重试。
:::

:::note 引用场景
 [JWT(JSON Web Tokens)](https://jwt.io/)根据用户名和密码获取令牌。如果用户名或者密码错误则直接返回：`401 Unauthorized`
:::

401的正确解释应该是`"Unauthenticated",` 而且在`HTTP Authentication: Basic and Digest Access Authentication`中需要带的请求头也应该是`Authentication`而不是`Authorization`

这个是历史遗留问题了, 估计以后也不会有什么改变, 但我们还是需要知道这个问题, 免得在使用时混淆了401和403。

### 授权 Authorization

:::note 语义
指允许某种行为
:::

:::note HTTP 状态码
403 Forbidden ，该HTTP状态码关于授权的，跟应用的的逻辑有关，表示客户端没有权限去访问要求资源。403表示用户认证后，但权限不足，无法对该资源进行操作。
:::

:::note 引用场景
[Casbin 权限系统](https://casbin.org/zh-CN/)。根据策略和请求中出现的用户、角色是否允许访问资源。如果不允许访问资源则直接返回：`403 Forbidden`
:::

