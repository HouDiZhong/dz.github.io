import{b as L,F as p,M as g,a as m,L as k,i as M}from"./index-e0aacc58.js";import{b as F,g as x,Y as h,a0 as v,c as P,e as b,w as i,f as r,u as s}from"./vendor-60dab89d.js";const w=F({props:{k:null},setup(o){const t=x({data:{o:5,p:1,ps:0,k:"",s:""},sort:5,sortList:[5,0]}),a=L(),n=()=>{t.data.p=1,a.pullLoad=!0,t.data.s?a.getMasterPage(t.data):a.getMasterList(t.data)},u=()=>{t.data.p++,a.listLoad=!0,a.getMasterPage(t.data)},f=(e,d)=>{t.data.s=e,t.data.p=1,e===""?(t.sort=t.sortList[0],t.data.o=t.sortList[0]):d&&(t.sort=-1),a.getMasterPage(t.data)},c=e=>{t.data.o=e,t.data.p=1,t.sort=e,a.getMasterPage(t.data)},l=()=>{o.k&&(t.sort=0,t.data.k=o.k,t.data.o=0),t.data.p=1,a.total=0,a.getMasterList(t.data)};return h(l),v(()=>M(l)),(e,d)=>(P(),b(k,{k:o.k,num:s(a).total,t:"masterplate"},{default:i(()=>[r(p,{flist:s(a).fltList,sort:s(t).sort,sl:s(t).sortList,num:o.k?s(a).total:null,onSort:c,onFix:f},null,8,["flist","sort","sl","num"]),r(m,{pload:s(a).pullLoad,lload:s(a).listLoad,fflag:s(a).finished,onDs:n,onUs:u},{default:i(()=>[r(g,{list:s(a).aList},null,8,["list"])]),_:1},8,["pload","lload","fflag"])]),_:1},8,["k","num"]))}});export{w as default};
