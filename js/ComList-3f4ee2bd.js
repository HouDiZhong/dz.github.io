import{f as k,F as g,B as L,a as V,L as m,i as B}from"./index-e0aacc58.js";import{b as F,g as b,Y as x,a0 as v,c as P,e as h,w as d,f as e,u as s}from"./vendor-60dab89d.js";const A=F({props:{k:null},setup(i){const t=b({data:{k:"",o:5,s:"",p:1,ps:0},sort:5,sl:[5,0],isVip:!1}),a=k(),r=()=>{t.isVip=!t.isVip,t.data.p=1,t.data.s="",t.sort=t.isVip?-2:5,a.getBookPage(t.data,t.isVip)},u=()=>{t.data.p=1,a.pullLoad=!0,a.getBookPage(t.data,t.isVip)},p=()=>{t.data.p++,a.listLoad=!0,a.getBookPage(t.data,t.isVip)},f=(o,n)=>{t.data.s=o,t.data.p=1,o===""?(t.sort=t.sl[0],t.data.o=t.sl[0]):n&&(t.sort=-1),a.getBookPage(t.data,t.isVip)},c=o=>{t.data.o=o,t.data.p=1,t.sort=o,a.getBookPage(t.data,t.isVip)},l=()=>{i.k&&(t.sort=0,t.data.k=i.k,t.data.o=0),t.data.p=1,a.total=0,a.getBookList(t.data)};return x(l),v(()=>B(l)),(o,n)=>(P(),h(m,{k:i.k,num:s(a).total,t:"book"},{default:d(()=>[e(g,{vip:"",flist:s(a).fltList,onFix:f,onVip:r,sl:s(t).sl,onSort:c,sort:s(t).sort,num:i.k?s(a).total:null},null,8,["flist","sl","sort","num"]),e(V,{pload:s(a).pullLoad,lload:s(a).listLoad,fflag:s(a).finished,onDs:u,onUs:p},{default:d(()=>[e(L,{list:s(a).bookList,"buy-btn":""},null,8,["list"])]),_:1},8,["pload","lload","fflag"])]),_:1},8,["k","num"]))}});export{A as default};
