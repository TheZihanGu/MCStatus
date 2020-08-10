# TZG MCStatus
这是一个可以帮助你查询服务器状态的网站。   
请注意：本网站暂不支持 SRV 解析的服务器 IP 地址。   
MCBBS 宣传帖：[https://www.mcbbs.net/thread-983456-1-1.html](https://www.mcbbs.net/thread-983456-1-1.html)

## 制作此网站的原因
之前的时候为了能够随时查询自己服务器的状态，就去找了很多网站，但是大部分都已经挂掉了。于是决定自己写一个...就有了 TZG MCStatus.   

## 编写语言
前端：HTML + JavaScript   
后端：JavaScript + NodeJS   
贴图：JavaScript + NodeJS + GraphicsMagick   

## 特点
* 界面简洁 —— 使用 Material Design，无任何多余功能.
* 基于 [TZG-API](https://api.tzg6.com) —— 任何人都可以调用并基于其制作应用.
* 可用性高 —— 基于阿里云企业级实例搭建，并支持 IPv6 环境访问.
* 源代码开源 —— 任何人都可以为其添砖加瓦.
* 不收集服务器信息 —— 保护您的服务器安全.
* 可自由获取贴图 —— 方便您在各个地方宣传服务器.

## 图片
<div style="text-align:center"><img style="float:middle" src='https://attachment.mcbbs.net/forum/202003/16/142130z9otb0ti4m8lb44i.png'></div>   
<div style="text-align:center"><img style="float:middle" src='https://attachment.mcbbs.net/forum/202003/16/142135h3ryhry9h4ydze23.png'></div>   

## 贴图生成
为了满足用户宣传服务器的需求，我们编写并上线了服务器状态贴图系统。你可以根据 [API 文档](https://api.tzg6.com/doc/MCStatus.html) 自由调用.   
你也可以在 TZG MCStatus 的「获取贴图」模块或直接查看接口文档查看具体调用方法.   
Example:   
<div style="text-align:center"><img style="float:middle" src='https://api.tzg6.com/api/mcstatus-image.png?ip=mc.tzg6.com&port=25565&motd=TZG-Craft'></div>   

## 隐私声明
当您使用此工具查询时，我们将会收集您的设备信息（包括但不限于：IP地址，设备操作系统，屏幕分辨率大小）等内容，并按照 GDPR 相关条款进行处理。我们绝不会将您的信息共享给任何第三方机构 / 个人。

## 赞赏
由于 [TZG-API](https://api.tzg6.com) 与本站服务器费用支出较大，因此如果您有资金能力，欢迎捐助我，让这个工具和API变得更好。   
<div style="text-align:center"><img style="float:middle" src='https://oss.tzg6.com/image/Wechat-Donate.png' height="300"></div>