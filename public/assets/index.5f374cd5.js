var j=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var w=(n,t,a)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,v=(n,t)=>{for(var a in t||(t={}))P.call(t,a)&&w(n,a,t[a]);if(F)for(var a of F(t))R.call(t,a)&&w(n,a,t[a]);return n},A=(n,t)=>L(n,M(t));import{f as E,E as k,U as V,F as T,o as i,v as _,x as g,w as c,h as x,B as p,M as C,i as r,aJ as G,W as y,H,ag as J,a6 as K,aj as O,aK as U}from"./vendor.479a7dc9.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{f as W,b as q}from"./index.d7cf8a03.js";import{u as Q}from"./async.8bf78ea0.js";import{c as I}from"./comment.a2fea787.js";import{a as X}from"./formatter.bc601281.js";const Y={class:"admin-page-wrapper"},Z=p("\u901A\u8FC7"),tt=p("\u4E0D\u901A\u8FC7"),at=E({name:"CommentReview"}),ht=E(A(v({},at),{setup(n){const t=k([]),{appContext:a}=J(),h=a.config.globalProperties,u=V({current:1,pageSize:10,total:0,showTotal:e=>`\u5171\u8BA1${e}\u6761`,onChange:e=>{u.current=e,l()}}),D=async()=>{const e=await I.pageNotApproved({type:1,pageNo:u.current,pageSize:u.pageSize});t.value=e.data,u.total=e.total},{trigger:l,loading:$}=Q(D);T(()=>{l()});const f=(e,m)=>{const d=m===1?"\u901A\u8FC7":"\u4E0D\u901A\u8FC7";h.$Modal.confirm({title:`\u786E\u8BA4\u8981\u6267\u884C${d}\u64CD\u4F5C\u5417\uFF1F`,onOk:async()=>{await I.review({id:e.id,approved:m,email:e.email,content:e.content,jump_url:e.jump_url}),h.$message.success("\u64CD\u4F5C\u6210\u529F"),l()}})},b=k([{title:"\u6635\u79F0",width:"120px",dataIndex:"nick_name"},{title:"\u5934\u50CF",width:"100px",dataIndex:"avatar"},{title:"\u8BC4\u8BBA\u5185\u5BB9",width:"180px",dataIndex:"content"},{title:"\u8BC4\u8BBA\u7684\u6587\u7AE0",width:"180px",dataIndex:"article_name"},{title:"\u5BA1\u6838\u72B6\u6001",width:"120px",dataIndex:"approved"},{title:"\u90AE\u7BB1",width:"140px",dataIndex:"email"},{title:"\u4E2A\u4EBA\u7F51\u7AD9",width:"160px",dataIndex:"site_url"},{title:"\u521B\u5EFA\u65F6\u95F4",width:"140px",dataIndex:"create_time"},{title:"\u64CD\u4F5C",width:"180px",dataIndex:"action",fixed:"right"}]);return(e,m)=>{const d=q,B=K,z=O,N=U;return i(),_("section",Y,[g(N,{"row-key":"id","data-source":t.value,columns:b.value,loading:r($),scroll:{x:1500},pagination:r(u)},{bodyCell:c(({column:s,record:o})=>[s.dataIndex==="avatar"?(i(),x(d,{key:0,class:"articlePoster","img-src":o.avatar},null,8,["img-src"])):s.dataIndex==="article_name"?(i(),x(r(G),{key:1,to:`/article/${o.article_id}`},{default:c(()=>[p(C(o.article_id),1)]),_:2},1032,["to"])):s.dataIndex==="approved"?(i(),_(y,{key:2},[p(C(r(X)(o.approved)),1)],64)):s.dataIndex==="create_time"?(i(),_(y,{key:3},[p(C(r(W)(o.create_time)),1)],64)):s.dataIndex==="action"?(i(),x(z,{key:4},{default:c(()=>[g(B,{size:"small",type:"primary",ghost:"",onClick:S=>f(o,1)},{default:c(()=>[Z]),_:2},1032,["onClick"]),g(B,{size:"small",type:"danger",ghost:"",onClick:S=>f(o,2)},{default:c(()=>[tt]),_:2},1032,["onClick"])]),_:2},1024)):H("",!0)]),_:1},8,["data-source","columns","loading","pagination"])])}}}));export{ht as default};
