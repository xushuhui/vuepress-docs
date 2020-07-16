(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{464:function(a,s,t){"use strict";t.r(s);var e=t(49),_=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql进阶（2）影响mysql性能的因素-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql进阶（2）影响mysql性能的因素-4"}},[a._v("#")]),a._v(" mysql进阶（2）影响mysql性能的因素-4")]),a._v(" "),t("h2",{attrs:{id:"数据库服务器参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库服务器参数"}},[a._v("#")]),a._v(" 数据库服务器参数")]),a._v(" "),t("h3",{attrs:{id:"获取配置信息路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取配置信息路径"}},[a._v("#")]),a._v(" 获取配置信息路径")]),a._v(" "),t("ul",[t("li",[a._v("命令行参数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqld_safe --datadir=/data/sql_data\n")])])]),t("ul",[t("li",[a._v("配置文件")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqld --help  --verbose | grep -A 1 'Default options'\n")])])]),t("h3",{attrs:{id:"配置参数作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置参数作用域"}},[a._v("#")]),a._v(" 配置参数作用域")]),a._v(" "),t("ul",[t("li",[a._v("全局参数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set global  参数名=参数值\nset @@global.参数名:=参数值\n")])])]),t("ul",[t("li",[a._v("会话参数")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set session  参数名=参数值\nset @@session.参数名:=参数值\n")])])]),t("h3",{attrs:{id:"内核相关配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内核相关配置参数"}},[a._v("#")]),a._v(" 内核相关配置参数")]),a._v(" "),t("ul",[t("li",[a._v("确定可以使用的内存上限")]),a._v(" "),t("li",[a._v("确定 MySQL 每个连接使用的内存")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sort_buffer_size\njoin_buffer_size\nread_buffer_size\nread_rnd_buffer_size\n")])])]),t("ul",[t("li",[a._v("确定需要为操作系统保留多少内存")]),a._v(" "),t("li",[a._v("如何为缓冲池分配内存\n缓冲池内存 = 总内存 -（每个线程需要的内存*连接数）- 系统保留内存")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Innodb_buffer_pool_size\nkey_buffer_size\nselect sum(index_length) from information_schema.tables where engine='myisam'\n")])])]),t("h3",{attrs:{id:"io-相关配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#io-相关配置参数"}},[a._v("#")]),a._v(" IO 相关配置参数")]),a._v(" "),t("h4",{attrs:{id:"innodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[a._v("#")]),a._v(" Innodb")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Innodb_log_file_size\nInnodb_log_files_in_group\n事务日志总大小 Innodb_log_files_in_group*Innodb_log_file_size\nInnodb_log_buffer_size\n")])])]),t("ul",[t("li",[t("p",[a._v("Innodb_flush_log_at_trx_commit\n0: 每秒进行一次，log 写入 cache, 并 flush log 到磁盘\n1:【默认】，每次事务提交，执行 log 写入 cache, 并 flush log 到磁盘\n2: 【建议】每次事务提交，执行 log 写入 cache, 每秒执行一次 flush log 到磁盘")])]),a._v(" "),t("li",[t("p",[a._v("Innodb_flush_method=O_DIRECT")])]),a._v(" "),t("li",[t("p",[a._v("Innodb_file_per_table=1")])]),a._v(" "),t("li",[t("p",[a._v("Innodb_doublewrite=1")])])]),a._v(" "),t("h4",{attrs:{id:"myisam"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[a._v("#")]),a._v(" MyISAM")]),a._v(" "),t("ul",[t("li",[a._v("delay_key_write\nOFF: 每次写操作偶刷新键缓冲中的脏块到磁盘\nON: 只对建表时候指定了 delay_key_write 选项的表使用延迟刷新\nALL: 对所有 MyISAM 表都是使用延迟键写入")])]),a._v(" "),t("h3",{attrs:{id:"安全相关配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全相关配置参数"}},[a._v("#")]),a._v(" 安全相关配置参数")]),a._v(" "),t("ul",[t("li",[a._v("expire_logs_days\n指定自动清理 binlog 天数")]),a._v(" "),t("li",[a._v("max_allow_packet\n控制 MySQL 可以接收包的大小")]),a._v(" "),t("li",[a._v("skip_name_resolve\n禁用 DNS 查找")]),a._v(" "),t("li",[a._v("sysdate_is_now\n确保 sysdate() 返回正确日期")]),a._v(" "),t("li",[a._v("read_only\n禁止非 super 权限用户写权限")]),a._v(" "),t("li",[a._v("skip-slave_start\n禁用 slave 自动恢复")]),a._v(" "),t("li",[a._v("sql_mode\n设置 MySQL 所使用的 SQL 模式")])]),a._v(" "),t("h3",{attrs:{id:"其他常用配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他常用配置参数"}},[a._v("#")]),a._v(" 其他常用配置参数")]),a._v(" "),t("ul",[t("li",[a._v("sync_binlog\n控制 MySQL 如何向磁盘刷新 binlog")]),a._v(" "),t("li",[a._v("tmp_table_size 和 max_heap_table_size\n控制内存临时表大小")]),a._v(" "),t("li",[a._v("max_connections\n控制允许的最大连接数")])]),a._v(" "),t("h3",{attrs:{id:"数据库结构设计和-sql-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库结构设计和-sql-优化"}},[a._v("#")]),a._v(" 数据库结构设计和 SQL 优化")]),a._v(" "),t("ul",[t("li",[a._v("过分的反范式化为表建立太多列")]),a._v(" "),t("li",[a._v("过分的范式化造成太多表关联")]),a._v(" "),t("li",[a._v("在 OLTP 环境使用不恰当的分区表")]),a._v(" "),t("li",[a._v("使用外键保证数据完整性")])]),a._v(" "),t("h2",{attrs:{id:"性能优化顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化顺序"}},[a._v("#")]),a._v(" 性能优化顺序")]),a._v(" "),t("ul",[t("li",[a._v("数据库结构设计和 SQL 语句")]),a._v(" "),t("li",[a._v("数据库存储引擎的选择和参数配置")]),a._v(" "),t("li",[a._v("系统选择和优化")]),a._v(" "),t("li",[a._v("硬件升级")])]),a._v(" "),t("h2",{attrs:{id:"欢迎扫描下方二维码，个人博客，持续关注："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#欢迎扫描下方二维码，个人博客，持续关注："}},[a._v("#")]),a._v(" 欢迎扫描下方二维码，"),t("a",{attrs:{href:"https://www.phpst.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("个人博客"),t("OutboundLink")],1),a._v("，持续关注：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ww1.sinaimg.cn/large/a616b9a4gy1g4xzv954a4j20760763yo.jpg",alt:""}})]),a._v(" "),t("p",[a._v("互联网工程师（id:phpstcn），我们一起学习，一起进步")])])}),[],!1,null,null,null);s.default=_.exports}}]);