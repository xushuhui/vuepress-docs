(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{394:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"node新手课（16）打卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node新手课（16）打卡"}},[t._v("#")]),t._v(" node新手课（16）打卡")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("上节课我们讲了图片上传，今天我们来讲打卡。")]),t._v(" "),s("h2",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("p",[t._v("用户填写文字内容，上传图片，发送后首页列表可以展示出来。")]),t._v(" "),s("h2",{attrs:{id:"功能流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能流程"}},[t._v("#")]),t._v(" 功能流程")]),t._v(" "),s("p",[t._v("上传图片后前端获得图片地址，再把用户输入的文字内容content和image发到后端，后端插入记录到card表。")]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("blockquote",[s("p",[t._v("routes/index.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//打卡\nrouter.post('/card',auth, async (ctx, next) => {\n  return indexApi.addCard(ctx)\n})\n")])])]),s("blockquote",[s("p",[t._v("api/index.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const addCard = async(ctx) => {\n    const userId = ctx.state.userId\n    const content =ctx.request.body.content\n    const image = ctx.request.body.image\n    await cardModel.addCard(userId,content,image)\n    ctx.body = resp.succeed()\n    return\n}\n")])])]),s("blockquote",[s("p",[t._v("model/cardmodel.js")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('const addCard = async(userId,content,image)=>{\n    let sql = "insert into  `card` (user_id,content,image)values(?,?,?) "\n    const insertData = await mysql.exec(sql,[userId,content,image]) \n    return insertData.insertId\n}\n')])])]),s("h2",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('POST http://localhost:3000/card\n\n{\n    "content":"test",\n    "image":"https://cdn.guojiang.club/Fo6qftIGMQq8uM7ANRdWs9Kskow5"\n}\n')])])]),s("p",[s("img",{attrs:{src:"https://cdn.guojiang.club/Fo6qftIGMQq8uM7ANRdWs9Kskow5",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("打卡功能就讲完了，你掌握了吗？有问题欢迎到群里和志同道合的小伙伴一起交流。")]),t._v(" "),s("p",[t._v("下节课我们讲解点赞，继续加油吧，Let's go！")])])}),[],!1,null,null,null);a.default=n.exports}}]);