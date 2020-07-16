(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{452:function(t,e,l){"use strict";l.r(e);var v=l(49),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"mysql基础（1）字段类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql基础（1）字段类型"}},[t._v("#")]),t._v(" mysql基础（1）字段类型")]),t._v(" "),l("h2",{attrs:{id:"字符串类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[t._v("#")]),t._v(" 字符串类型")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("范围")]),t._v(" "),l("th",[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("char(M)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M=1~255 字符")]),t._v(" "),l("td",[t._v("固定长度")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("varchar(M)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一行中所有 varchar 的列所占用的字节数不能超过 65535 字节")]),t._v(" "),l("td",[t._v("存储可变长度的 M 个字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tinytext")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("最大长度 255")]),t._v(" "),l("td",[t._v("可变长度")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("最大长度 65535")]),t._v(" "),l("td",[t._v("可变长度")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("mediumtext")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("最大长度 16777215")]),t._v(" "),l("td",[t._v("可变长度")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("longtext")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("最大长度 4294967295")]),t._v(" "),l("td",[t._v("可变长度")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("enum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("集合最大数目为 65535")]),t._v(" "),l("td",[t._v("只能插入列表中的值")])])])]),t._v(" "),l("h2",{attrs:{id:"时间类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#时间类型"}},[t._v("#")]),t._v(" 时间类型")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("存储空间（字节）")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("格式")]),t._v(" "),l("th",[t._v("取值范围")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY-MM-DD")]),t._v(" "),l("td",[t._v("1000-01-01~9999-12-31")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3~6")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HH:MM:SS『微秒值』")]),t._v(" "),l("td",[t._v("-838:59:59~838:59:59")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY")]),t._v(" "),l("td",[t._v("1907~2155")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("datetime")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5~8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY-MM-DD HH:MM:SS『微秒值』")]),t._v(" "),l("td",[t._v("1000-01-01 00:00:00~9999-12-31 23:59:59")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4~7")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY-MM-DD HH:MM:SS『微秒值』")]),t._v(" "),l("td",[t._v("1970-01-01 00:00:01 UTC ~ 2038-01-19 03:14:07 UTC")])])])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("微秒")]),t._v(" "),l("th",[t._v("存储空间（字节）")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("1,2")]),t._v(" "),l("td",[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("3,4")]),t._v(" "),l("td",[t._v("2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("5,6")]),t._v(" "),l("td",[t._v("3")])])])]),t._v(" "),l("h2",{attrs:{id:"整数类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#整数类型"}},[t._v("#")]),t._v(" 整数类型")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("存储空间（字节）")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",[t._v("取值范围")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("tinyint")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("signed/unsigned")]),t._v(" "),l("td",[t._v("-128~127/0~255")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("smallint")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("signed/unsigned")]),t._v(" "),l("td",[t._v("-32768~32767/0~65535")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("mediumint")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("signed/unsigned")]),t._v(" "),l("td",[t._v("-8388608~8388607/0~16777215")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("signed/unsigned")]),t._v(" "),l("td",[t._v("-2147483648~2147483647/0~4294967295")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bigint")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("signed/unsigned")]),t._v(" "),l("td",[t._v("-9223372036854775808~9223372036854775807/0~18446744073709551615")])])])]),t._v(" "),l("h2",{attrs:{id:"浮点类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#浮点类型"}},[t._v("#")]),t._v(" 浮点类型")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("存储空间（字节）")]),t._v(" "),l("th",[t._v("是否精确类型")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),l("td",[t._v("否")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("decimal")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("每 4 个字节存 9 个数字，小数点占一个字节")]),t._v(" "),l("td",[t._v("是")])])])]),t._v(" "),l("h2",{attrs:{id:"欢迎扫描下方二维码，https-www-phpst-cn，持续关注："}},[l("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，https-www-phpst-cn，持续关注："}},[t._v("#")]),t._v(" 欢迎扫描下方二维码，"),l("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.phpst.cn"),l("OutboundLink")],1),t._v("，持续关注：")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),t._v(" "),l("p",[t._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);e.default=a.exports}}]);