import{f as a,r as f,o as t,c as i,F as c,g as h,n as p,a as s,h as n,t as m,i as F,_ as B}from"./app.42eb72c1.js";const d=[{item:["Document","\u6587\u6863"],finish:!1,time:"2022-10-22 13:28",subs:[{item:["color","\u989C\u8272"],finish:!1,time:"2022-10-23 22:19"},{item:["title","\u6807\u9898"],finish:!1,time:"2022-10-23 22:22"},{item:["button","\u6309\u94AE\u{1F527}"],finish:!1,time:"2022-10-17 12:43"}]},{item:["Design project components","\u8BBE\u8BA1\u9879\u76EE\u7EC4\u4EF6"],finish:!1,time:"2022-10-17 12:35",subs:[{item:["Button","\u6309\u94AE Button"],finish:!1,time:"2022-10-17 12:49",subs:[{item:["Normal style","\u666E\u901A\u6837\u5F0F"],finish:!0,time:"2022-10-19 15:43"},{item:["Dark style","\u6697\u9ED1\u6A21\u5F0F"],finish:!1,time:"2022-10-19 15:46"},{item:["Disabled style","\u7981\u7528\u6A21\u5F0F"],finish:!0,time:"2022-10-19 15:54"},{item:["Button size","\u6309\u94AE\u5C3A\u5BF8"],finish:!0,time:"2022-10-19 16:21"},{item:["Dashed Button","\u865A\u7EBF\u6309\u94AE"],finish:!0,time:"2022-10-20 15:59"},{item:["Secondary Button","\u6B21\u7EA7\u6309\u94AE"],finish:!0,time:"2022-10-20 22:22"},{item:["colorful style","\u591A\u8272\u6837\u5F0F"],finish:!0,time:"2022-10-19 16:33"},{item:["props","\u5C5E\u6027\u6C47\u603B"],finish:!0,time:"2022-10-19 21:54"},{item:["css properties","css \u53D8\u91CF"],finish:!1,time:"2022-10-22 13:22"}]},{item:["P","\u6BB5\u843D\u6807\u7B7E P"],finish:!1,time:"2022-10-19 21:53",subs:[{item:["props","\u5C5E\u6027\u6C47\u603B"],finish:!1,time:"2022-10-19 21:54"}]},{item:["h(h1 - h6)","\u6807\u9898\u6807\u7B7E(h1 - h6)"],finish:!0,time:"2022-10-21 16:33",subs:[{item:["capital letters","\u9996\u5B57\u6BCD\u5927\u5199"],finish:!0,time:"2022-10-21 21:23"},{item:["center","\u5C45\u4E2D"],finish:!0,time:"2022-10-21 23:18"}]},{item:["h1","h1"],finish:!1,time:"2022-10-21 22:06",subs:[{item:["block crotrol","\u9634\u5F71\u5757\u63A7\u5236"],finish:!0,time:"2022-10-21 22:08"},{item:["block color","\u9634\u5F71\u5757\u989C\u8272"],finish:!0,time:"2022-10-21 22:11"},{item:["block animation","\u9634\u5F71\u5757\u52A8\u753B"],finish:!0,time:"2022-10-22 00:15"}]},{item:["h2","h2"],finish:!1,time:"2022-10-21 23:02",subs:[{item:["block crotrol","\u9634\u5F71\u5757\u63A7\u5236"],finish:!0,time:"2022-10-21 23:04"},{item:["block color","\u9634\u5F71\u5757\u989C\u8272"],finish:!0,time:"2022-10-21 23:05"},{item:["block animation","\u9634\u5F71\u5757\u52A8\u753B"],finish:!0,time:"2022-10-22 00:17"}]},{item:["h3","h3"],finish:!0,time:"2022-10-21 23:02",subs:[{item:["block crotrol","\u9634\u5F71\u5757\u63A7\u5236"],finish:!0,time:"2022-10-22 00:16"},{item:["block color","\u9634\u5F71\u5757\u989C\u8272"],finish:!0,time:"2022-10-22 00:17"},{item:["block animation","\u9634\u5F71\u5757\u52A8\u753B"],finish:!0,time:"2022-10-22 00:18"}]}]},{item:["Build a basic set of CSS custom properties","\u8BBE\u7F6E\u4E00\u5957\u57FA\u672C\u7684css\u53D8\u91CF"],finish:!1,time:"2022-10-17 12:55",subs:[{item:["color properties","\u989C\u8272\u53D8\u91CF"],finish:!1,time:"2022-10-20 08:27"},{item:["font size properties","\u5B57\u4F53\u5927\u5C0F\u53D8\u91CF"],finish:!0,time:"2022-10-20 08:28"}]},{item:["Build a doc","\u642D\u5EFA\u9879\u76EE\u6587\u6863"],finish:!0,time:"2022-10-17 11:11"}],_={key:0},E=["datetime"],b={name:"TodoList"},C=a({...b,props:{language:null,item:{default:d},styleIndex:{default:0}},setup(o){const u=o,l=["square","disc","circle"];return(y,A)=>{const r=f("TodoList",!0);return t(),i("ul",{style:p({"list-style-type":l[u.styleIndex]})},[(t(!0),i(c,null,h(u.item,e=>(t(),i("li",{key:e.time},[s("div",null,[s("span",null,[e.finish?(t(),i("span",_,"\u2705")):n("v-if",!0),s("span",null,m(e.item[u.language]),1)]),s("time",{datetime:e.time},m(e.time),9,E)]),e.subs?(t(),F(r,{key:0,styleIndex:u.styleIndex+1,item:e.subs,language:u.language},null,8,["styleIndex","item","language"])):n("v-if",!0)]))),128))],4)}}});const g=B(C,[["__scopeId","data-v-86f0547b"],["__file","TodoList.vue"]]);export{g as default};
