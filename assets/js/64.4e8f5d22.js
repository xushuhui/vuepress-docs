(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{473:function(t,v,_){"use strict";_.r(v);var a=_(49),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mysql面试（2）用户管理类问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql面试（2）用户管理类问题"}},[t._v("#")]),t._v(" mysql面试（2）用户管理类问题")]),t._v(" "),_("h2",{attrs:{id:"如何定义-mysql-数据库账号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何定义-mysql-数据库账号"}},[t._v("#")]),t._v(" 如何定义 MySQL 数据库账号")]),t._v(" "),_("ul",[_("li",[t._v("用户名 @可访问控制列表\n"),_("ul",[_("li",[t._v("% 可以从所有外部主机访问")]),t._v(" "),_("li",[t._v("192.168.1.% 可以从 192.168.1 网段访问")]),t._v(" "),_("li",[t._v("localhost 从服务器本地访问")])])]),t._v(" "),_("li",[t._v("使用 CREATE USER 建立用户")])]),t._v(" "),_("h2",{attrs:{id:"mysql-常用用户权限"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用用户权限"}},[t._v("#")]),t._v(" MySQL 常用用户权限")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("语句")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Admin")]),t._v(" "),_("td",[t._v("Create User")]),t._v(" "),_("td",[t._v("建立新用户")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Grant option")]),t._v(" "),_("td",[t._v("为其他用户授权")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Super")]),t._v(" "),_("td",[t._v("管理服务器")])]),t._v(" "),_("tr",[_("td",[t._v("DDL")]),t._v(" "),_("td",[t._v("Create")]),t._v(" "),_("td",[t._v("新建数据库")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Alter")]),t._v(" "),_("td",[t._v("修改表结构")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Drop")]),t._v(" "),_("td",[t._v("删除数据库和表")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Index")]),t._v(" "),_("td",[t._v("建立和删除索引")])]),t._v(" "),_("tr",[_("td",[t._v("DML")]),t._v(" "),_("td",[t._v("Select")]),t._v(" "),_("td",[t._v("查询表数据")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Insert")]),t._v(" "),_("td",[t._v("插入表数据")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Update")]),t._v(" "),_("td",[t._v("更新表数据")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Delete")]),t._v(" "),_("td",[t._v("删除表数据")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",[t._v("Execute")]),t._v(" "),_("td",[t._v("执行存储过程")])])])]),t._v(" "),_("h2",{attrs:{id:"为用户授权"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为用户授权"}},[t._v("#")]),t._v(" 为用户授权")]),t._v(" "),_("ul",[_("li",[t._v("遵循最小权限原则")]),t._v(" "),_("li",[t._v("使用 grant 命令授权，revoke 收回权限")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("grant select,insert,update on db.tb to user@ip\nrevoke delete on db.tb from user@ip\n")])])]),_("h2",{attrs:{id:"数据库用户管理流程规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库用户管理流程规范"}},[t._v("#")]),t._v(" 数据库用户管理流程规范")]),t._v(" "),_("ul",[_("li",[t._v("最小权限原则")]),t._v(" "),_("li",[t._v("密码强度策略")]),t._v(" "),_("li",[t._v("密码过期原则")]),t._v(" "),_("li",[t._v("限制历史密码重用原则")])]),t._v(" "),_("h2",{attrs:{id:"导出用户建立和授权语句"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导出用户建立和授权语句"}},[t._v("#")]),t._v(" 导出用户建立和授权语句")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("pt-show-grants u=root,p=123456,h=localhost\n")])])]),_("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),_("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),_("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),_("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);v.default=r.exports}}]);