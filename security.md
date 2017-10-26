
1. 敏感数据不允许输出在开放接口中，尽量重新设置字段，混浊数据库表字段，如：微信支付appid,secret等参数
2. 用户后台数据提交时，必需检查enterpriseId是否是同一个公司
3. 检查前端提交数据是否经 xss过滤
4. 添加session key + 验证码 防止csrf攻击


简单的说一下，开发一个APP，需要考虑以下几个方面，不然如果接口暴露到公网，危险非常大。

1. 请求合法性校验，考虑采用token方式保证接口不被其他人访问。
2. 数据校验，白名单方式验证数据确保不出现异常数据和注入攻击。
3. 数据加密，对数据进行加密保证其他人无法非法监听或截取。
4. 错误处理，对系统返回结果编制返回码，避免堆栈信息泄露。
5. 接口阈值，对接口访问频率设置阈值，超出设定的访问频率时返回错误码。

XSS防御
进行HTML转义输出

CRSF防御
1.将cookie设置为HttpOnly
2.增加token
3.通过referer识别

SQL注入防御
1.使用预编译语句
2.使用ORM框架
3.避免免密码明文存放
4.处理好相应的异常