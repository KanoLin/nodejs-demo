## Node.js crud练习 arknights职工表

---
写在开头：

练习项目，config直接传了，然后给数据库配一下里面的用户，npm install，init.js是将data.json数据插入数据库，参数验证这块没做，npm test使用mocha测试

---

### api

####  获取职工信息
- 路由：`/staff[?name=XXX&camp=XXX]`
- 请求方式：`GET`
- 请求参数：可以选择[name,sex,camp,type,level]参数根据value进行匹配，无参数则查询全部
- 返回参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|info_list|array|包含每个职工信息的对象数组|
	|err_code|int|错误代码，成功为0|
	|err_msg|string|错误信息，成功为""|
	- 对象说明：
	
		|参数名称|参数类型|参数说明|
		|---|---|---|
		|name|string|姓名|
		|sex|string|性别|
		|camp|string|阵营|
		|type|string|职业|
		|level|int|星级|
	- 示例：

	```
	{
		"info_list":[
			{
				"name":"阿米娅",
				"sex":"女",
				"camp":"罗德岛",
				"type":"术士",
				"level":5
			},
			{
				"name":"杰西卡",
				"sex":"女",
				"camp":"黑钢国际",
				"type":"狙击",
				"level":4
			}
		],
		"err_code":0,
		"err_msg":""
	}
	```

#### 添加干员
- 路由：`/insert`
- 请求方式：`POST`
- 请求参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|name|string|姓名|
	|sex|string|性别|
	|camp|string|阵营|
	|type|string|职业|
	|level|int|星级|
- 返回参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|err_code|int|错误代码，成功为0|
	|err_msg|string|错误信息，成功为""|

#### 删除干员
- 路由：`/delete`
- 请求方式：`POST`
- 请求参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|match|Object|匹配条件对象|
- 返回参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|rows|int|返回删除数量，错误时不返回此项|
	|err_code|int|错误代码，成功为0|
	|err_msg|string|错误信息，成功为""|

#### 更新干员
- 路由：`/update`
- 请求方式：`POST`
- 请求参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|match|Object|匹配字段对象|
	|update|Object|修改字段对象|
- 返回参数：

	|参数名称|参数类型|参数说明|
	|---|---|---|
	|rows|int|返回删除数量，错误时不返回此项|
	|err_code|int|错误代码，成功为0|
	|err_msg|string|错误信息，成功为""|
