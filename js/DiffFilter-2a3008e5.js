import{b as Z,g as J,r as K,v as A,c as o,h as f,j as c,z as w,u as n,f as d,w as u,Q as L,t as h,I as v,U as M,k as m,m as C,e as g,n as k,Z as N,y as p,x as W,p as Y,X as P,B as T,P as tt,q as et,s as st,a7 as lt}from"./vendor-60dab89d.js";import{_ as nt}from"./index-e0aacc58.js";const U=i=>(et("data-v-9f3131ca"),i=i(),st(),i),at={class:"filter-warp"},it=k("\u76F8\u5173\u5EA6"),ot={class:"title"},ct={class:"icon disflx"},dt=U(()=>c("div",{class:"title"},"\u7B5B\u9009",-1)),ut={class:"icon"},rt={key:0,class:"flt-list no-scrollbar"},ft={key:1,class:"result-num"},ht=U(()=>c("div",{class:"pull-height"},null,-1)),mt={class:"flt-t flx-ter"},kt={class:"flt-list"},Ft={class:"tree-warp"},vt=["onClick"],Ct={class:"btn-warp"},gt=k("\u91CD\u7F6E"),wt=k("\u786E\u5B9A"),yt=Z({props:{sort:null,sl:null,t:null,num:null,list:null},emits:["fix","sort"],setup(i,{emit:y}){const t=J({show:!1,list:[],isEdit:!1,data:{title:"\u7B5B\u9009\u6761\u4EF6"},history:[],odata:{},tagList:new Set}),E=K(null),S=e=>{y("sort",e||(i.sort===i.sl[0]?i.sl[1]:i.sort===i.sl[1]?i.sl[2]:i.sl[1]))},q=A(()=>{let e=i.num?"search-page":"";return t.tagList.size?e+" add-heigth":e}),x=(e,l)=>{e==null||e.forEach(s=>{s.checked=l,s.children&&x(s.children,l)})},$=(e,l)=>{e.o?(e.o.checked=!1,B(e.o)):(i.list.forEach(s=>{s.en===e.id&&s.children.forEach(a=>a.checked=!1)}),t.odata[e.id]=[]),l&&(t.tagList.delete(e),e.o&&y("fix",t.tagList))},H=e=>{var s;const l=t.history.length;l&&((s=t.history[l-1].list)==null||s.forEach(a=>{if(a.path===e){const r=a.children.length,F=a.children.filter(b=>b.checked);a.checked=r===F.length}}))},V=async e=>{if(E.value){await lt();const l=E.value,s=l.querySelector(".flt-list"),a=l.querySelector(".tree-warp"),r=l.offsetHeight,F=s.offsetHeight;a.style.height=e?`${r}px`:`${r-F}px`}},I=(e,l,s)=>{e==null||e.forEach(a=>{a.checked&&t.odata[l.en].push({c:l.cn,v:a.name,path:a.path,id:l.en,o:a}),l.multidime&&!a.checked?I(a.children,l,s++):s===0&&e.length===t.odata[l.en].length&&(t.odata[l.en]=[{c:"\u7B5B\u9009\u6761\u4EF6",v:l.cn,path:void 0,id:l.en}])})},G=e=>{let l;for(const s of i.list)if(s.en===e){l=s;break}return l},O=e=>{var j;const l=G(e.root),{multidime:s,children:a,en:r,cn:F,multi:b}=l;if(!b&&((j=t.odata[r])==null?void 0:j.length)){const z=t.odata[r][0].o;z.checked=!1,t.odata[r]=null,B(z)}t.odata[r]=[],I(a,{multidime:s,en:r,cn:F},0)},B=e=>{t.isEdit=!0,H(e.parentPath),x(e.children,e.checked),O(e),t.show&&V()},D=(e,l)=>{typeof e=="string"?i.list.forEach(s=>{s.en===e&&(t.list=s.children,t.data.title=s.cn)}):(t.history.push({list:t.list,name:t.data.title}),t.list=e,t.data.title=l)},Q=()=>{if(t.history.length){const e=t.history.pop();(e==null?void 0:e.list)&&(t.list=e.list,t.data.title=e.name)}else t.list=[],t.history=[],t.data.title="\u7B5B\u9009\u6761\u4EF6"},R=()=>{t.odata={},t.list=[],t.history=[],t.isEdit=!0,t.data.title="\u7B5B\u9009\u6761\u4EF6",V(!0),x(i.list,!1)},X=()=>{if(t.isEdit){t.tagList.clear();for(const e in t.odata)for(const l of t.odata[e])t.tagList.add(l);y("fix",t.tagList)}t.show=!1,t.isEdit=!1},_=A(()=>i.sort===i.sl[0]?"one":i.sort===i.sl[1]?"two down":i.sort===i.sl[2]?"two up":"three");return(e,l)=>(o(),f(m,null,[c("div",at,[c("div",{class:w(["fixed",n(q)])},[d(n(M),{"column-num":3,direction:"horizontal",clickabl:!0,border:!1},{default:u(()=>[d(n(L),{class:w(n(_)),onClick:l[0]||(l[0]=s=>S(5))},{default:u(()=>[it]),_:1},8,["class"]),d(n(L),{class:w(n(_)),onClick:l[1]||(l[1]=s=>S())},{default:u(()=>[c("div",ot,h(i.t||"\u53D1\u5E03\u65E5\u671F"),1),c("div",ct,[d(n(v),{name:"arrow-up"}),d(n(v),{name:"arrow-down"})])]),_:1},8,["class"]),d(n(L),{class:w(n(_)),onClick:l[2]||(l[2]=s=>n(t).show=!0)},{default:u(()=>[dt,c("div",ut,[d(n(v),{"class-prefix":"iconfont",name:"filter-icon"})])]),_:1},8,["class"])]),_:1}),n(t).tagList.size?(o(),f("div",rt,[(o(!0),f(m,null,C(n(t).tagList,s=>(o(),g(n(N),{closeable:"",onClose:a=>$(s,!0)},{default:u(()=>[k(h(s.c)+"\uFF1A"+h(s.v),1)]),_:2},1032,["onClose"]))),256))])):p("",!0),i.num?(o(),f("div",ft,"\u5171"+h(i.num)+"\u6761\u641C\u7D22\u7ED3\u679C",1)):p("",!0)],2),ht]),d(n(tt),{class:"list-filter diff-filter",show:n(t).show,"onUpdate:show":l[3]||(l[3]=s=>n(t).show=s),position:"right",teleport:".main"},{default:u(()=>[c("div",mt,[n(t).list.length?(o(),g(n(v),{key:0,name:"arrow-left",onClick:Q})):p("",!0),k(" "+h(n(t).data.title),1)]),c("div",{class:"flt-content",ref_key:"fltContent",ref:E},[c("div",kt,[(o(!0),f(m,null,C(n(t).odata,s=>(o(),f(m,null,[(o(!0),f(m,null,C(s,a=>(o(),g(n(N),{closeable:"",onClose:r=>$(a)},{default:u(()=>[k(h(a.c)+"\uFF1A"+h(a.v),1)]),_:2},1032,["onClose"]))),256))],64))),256))]),c("div",Ft,[n(t).list.length?(o(!0),f(m,{key:0},C(n(t).list,s=>(o(),g(n(P),{class:"diff-cell"},W({title:u(()=>[d(n(Y),{modelValue:s.checked,"onUpdate:modelValue":a=>s.checked=a,onClick:a=>B(s)},{default:u(()=>[k(h(s.name),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onClick"])]),_:2},[s.children?{name:"value",fn:u(()=>[c("div",{onClick:a=>D(s.children,s.name)},[d(n(v),{name:"arrow"})],8,vt)])}:void 0]),1024))),256)):(o(!0),f(m,{key:1},C(i.list,s=>(o(),g(n(P),{title:s.cn,onClick:a=>D(s.en),"is-link":""},null,8,["title","onClick"]))),256))])],512),c("div",Ct,[d(n(T),{class:"reset-css",onClick:R},{default:u(()=>[gt]),_:1}),d(n(T),{class:"fix-css",onClick:X},{default:u(()=>[wt]),_:1})])]),_:1},8,["show"])],64))}});var Bt=nt(yt,[["__scopeId","data-v-9f3131ca"]]);export{Bt as F};
