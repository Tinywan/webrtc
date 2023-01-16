"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{6959:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4af0a31c",path:"/v1/basic/user.html",title:"用户管理",lang:"en-US",frontmatter:{title:"用户管理"},excerpt:"",headers:[{level:2,title:"用户列表",slug:"用户列表",children:[]},{level:2,title:"用户添加",slug:"用户添加",children:[]},{level:2,title:"用户编辑",slug:"用户编辑",children:[]},{level:2,title:"个人信息",slug:"个人信息",children:[]}],filePathRelative:"v1/basic/user.md",git:{updatedTime:1637484686e3,contributors:[{name:"Tinywan",email:"756684177@qq.com",commits:1}]}}},9265:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var t=a(6252),e=a(3577);const l=(0,t._)("h2",{id:"用户列表",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#用户列表","aria-hidden":"true"},"#"),(0,t.Uk)(" 用户列表")],-1),p=(0,t._)("h4",{id:"请求方式-get",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#请求方式-get","aria-hidden":"true"},"#"),(0,t.Uk)(" 请求方式： GET")],-1),o={id:"请求地址-base-url-console-users-page-1-per-page-3",tabindex:"-1"},r=(0,t._)("a",{class:"header-anchor",href:"#请求地址-base-url-console-users-page-1-per-page-3","aria-hidden":"true"},"#",-1),c=(0,t.uE)('<p><strong>请求参数</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">最大长度</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例值</th></tr></thead><tbody><tr><td style="text-align:left;">page</td><td style="text-align:left;">int</td><td style="text-align:left;">否</td><td style="text-align:left;">8</td><td style="text-align:left;">页码，默认1</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:left;">per_page</td><td style="text-align:left;">int</td><td style="text-align:left;">否</td><td style="text-align:left;">16</td><td style="text-align:left;">每页条数，默认10</td><td style="text-align:left;">10</td></tr></tbody></table><h4 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例" aria-hidden="true">#</a> 响应示例</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阿克苏&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1231231&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;create_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-09-19 15:03:21&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            ...\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>响应参数</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">最大长度</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例值</th></tr></thead><tbody><tr><td style="text-align:left;">total</td><td style="text-align:left;">int</td><td style="text-align:left;">是</td><td style="text-align:left;">16</td><td style="text-align:left;">总条数</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:left;">list</td><td style="text-align:left;">int</td><td style="text-align:left;">是</td><td style="text-align:left;">16</td><td style="text-align:left;">列表描述</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:left;">└ username</td><td style="text-align:left;">int</td><td style="text-align:left;">是</td><td style="text-align:left;">16</td><td style="text-align:left;">username</td><td style="text-align:left;">10</td></tr></tbody></table><h2 id="用户添加" tabindex="-1"><a class="header-anchor" href="#用户添加" aria-hidden="true">#</a> 用户添加</h2><h4 id="请求方式-post" tabindex="-1"><a class="header-anchor" href="#请求方式-post" aria-hidden="true">#</a> 请求方式： <code>POST</code></h4>',8),i={id:"请求地址-base-url-console-users",tabindex:"-1"},u=(0,t._)("a",{class:"header-anchor",href:"#请求地址-base-url-console-users","aria-hidden":"true"},"#",-1),d=(0,t.Uk)(" 请求地址： "),b=(0,t.uE)('<h4 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">最大长度</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例值</th></tr></thead><tbody><tr><td style="text-align:left;">username</td><td style="text-align:left;">string</td><td style="text-align:left;">是</td><td style="text-align:left;">32</td><td style="text-align:left;">用户名</td><td style="text-align:left;">阿克苏</td></tr><tr><td style="text-align:left;">role_id</td><td style="text-align:left;">array</td><td style="text-align:left;">是</td><td style="text-align:left;">124</td><td style="text-align:left;">所属角色id</td><td style="text-align:left;">[11,12]</td></tr></tbody></table><h4 id="请求数据结构" tabindex="-1"><a class="header-anchor" href="#请求数据结构" aria-hidden="true">#</a> 请求数据结构</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小何何&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token number">11</span><span class="token punctuation">,</span>\n        <span class="token number">21</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="成功示例" tabindex="-1"><a class="header-anchor" href="#成功示例" aria-hidden="true">#</a> 成功示例</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;添加成功&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="用户编辑" tabindex="-1"><a class="header-anchor" href="#用户编辑" aria-hidden="true">#</a> 用户编辑</h2><h4 id="请求方式-put" tabindex="-1"><a class="header-anchor" href="#请求方式-put" aria-hidden="true">#</a> 请求方式： PUT</h4>',8),h={id:"请求地址-base-url-console-users-uid",tabindex:"-1"},k=(0,t._)("a",{class:"header-anchor",href:"#请求地址-base-url-console-users-uid","aria-hidden":"true"},"#",-1),g=(0,t.uE)('<h4 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1" aria-hidden="true">#</a> 请求参数</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">最大长度</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例值</th></tr></thead><tbody><tr><td style="text-align:left;">role_id</td><td style="text-align:left;">array</td><td style="text-align:left;">是</td><td style="text-align:left;">124</td><td style="text-align:left;">所属角色id</td><td style="text-align:left;">[11,12]</td></tr></tbody></table><h4 id="请求数据结构-1" tabindex="-1"><a class="header-anchor" href="#请求数据结构-1" aria-hidden="true">#</a> 请求数据结构</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;role_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="成功示例-1" tabindex="-1"><a class="header-anchor" href="#成功示例-1" aria-hidden="true">#</a> 成功示例</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;添加成功&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="个人信息" tabindex="-1"><a class="header-anchor" href="#个人信息" aria-hidden="true">#</a> 个人信息</h2><h4 id="请求方式-get-1" tabindex="-1"><a class="header-anchor" href="#请求方式-get-1" aria-hidden="true">#</a> 请求方式： GET</h4>',8),y={id:"请求地址-base-url-console-users-info",tabindex:"-1"},f=(0,t._)("a",{class:"header-anchor",href:"#请求地址-base-url-console-users-info","aria-hidden":"true"},"#",-1),m=(0,t.uE)('<h4 id="响应示例-1" tabindex="-1"><a class="header-anchor" href="#响应示例-1" aria-hidden="true">#</a> 响应示例</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;roles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;Admin&quot;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;introduction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是阿克苏&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;阿克苏&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',2),x={},q=(0,a(3744).Z)(x,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[l,p,(0,t._)("h4",o,[r,(0,t.Uk)(" 请求地址： "+(0,e.zw)(n.base_url)+"/console/users?page=1&per_page=3",1)]),c,(0,t._)("h4",i,[u,d,(0,t._)("code",null,(0,e.zw)(n.base_url)+"/console/users",1)]),b,(0,t._)("h4",h,[k,(0,t.Uk)(" 请求地址： "+(0,e.zw)(n.base_url)+"/console/users/"+(0,e.zw)(n.uid),1)]),g,(0,t._)("h4",y,[f,(0,t.Uk)(" 请求地址： "+(0,e.zw)(n.base_url)+"/console/users/info",1)]),m],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);