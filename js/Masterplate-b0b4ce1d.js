import{b as p,H as m,c as o,h as n,j as t,k as v,m as f,e as h,w as k,f as x,u as r,M as C,t as s}from"./vendor-60dab89d.js";import{_ as g,l as b}from"./index-e0aacc58.js";const j={class:"read-mas"},y={class:"mas-items"},B=["onClick"],M={class:"mas-text"},w={class:"a-t-title van-multi-ellipsis--l2"},D={class:"a-t-author"},I={class:"a-t-brief van-multi-ellipsis--l2"},L={class:"a-t-info"},N={class:"van-ellipsis"},S=p({props:{list:null},setup(l){const c=b(9),_=a=>a?a.map(i=>i.nameCn).join(" "):"";return(a,i)=>{const d=m("router-link");return o(),n("div",j,[t("div",y,[(o(!0),n(v,null,f(l.list,e=>(o(),h(d,{custom:"",to:`/onRead/diff?id=${e.id}&type=1&rt=9`},{default:k(({navigate:u})=>[t("div",{class:"mas-item disflx",onClick:u},[x(r(C),{src:r(c)},null,8,["src"]),t("div",M,[t("div",w,s(e.titleCn),1),t("div",D,s(_(e.authorList)),1),t("div",I,s(e.brief),1),t("div",L,[t("div",N,s(e.masterplateSource.titleCn),1)])])],8,B)]),_:2},1032,["to"]))),256))])])}}});var F=g(S,[["__scopeId","data-v-7c22f45e"]]);export{F as default};
