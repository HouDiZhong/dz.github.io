import{b as c,c as s,h as a,j as n,k as l,m as d,f as _,u as p,M as u,t as m}from"./vendor-60dab89d.js";import{_ as v,p as k,t as f}from"./index-e0aacc58.js";const y={class:"read-book"},g={class:"book-items"},h=["onClick"],b={class:"title van-multi-ellipsis--l2"},x=c({props:{list:null},setup(i){const r=async t=>{const{ok:o,data:e}=await k(t.id,t.type);o&&f(`onRead?id=${t.id}&type=${e?2:1}&rt=7`)};return(t,o)=>(s(),a("div",y,[n("div",g,[(s(!0),a(l,null,d(i.list,e=>(s(),a("div",{class:"book-item",onClick:B=>r(e)},[_(p(u),{src:e.imgUrl,"lazy-load":""},null,8,["src"]),n("div",b,m(e.titleCn),1)],8,h))),256))])]))}});var N=v(x,[["__scopeId","data-v-3b457971"]]);export{N as default};