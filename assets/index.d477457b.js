var B=Object.defineProperty;var H=(l,e,d)=>e in l?B(l,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[e]=d;var u=(l,e,d)=>(H(l,typeof e!="symbol"?e+"":e,d),d),O=(l,e,d)=>{if(!e.has(l))throw TypeError("Cannot "+d)};var I=(l,e,d)=>(O(l,e,"read from private field"),d?d.call(l):e.get(l)),m=(l,e,d)=>{if(e.has(l))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(l):e.set(l,d)},A=(l,e,d,r)=>(O(l,e,"write to private field"),r?r.call(l,d):e.set(l,d),d);var T=(l,e,d)=>(O(l,e,"access private method"),d);import{o as h,c,a as s,n as S,F as v,r as _,w as y,v as w,b,d as J}from"./vendor.42be2ebd.js";const P=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))r(k);new MutationObserver(k=>{for(const i of k)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function d(k){const i={};return k.integrity&&(i.integrity=k.integrity),k.referrerpolicy&&(i.referrerPolicy=k.referrerpolicy),k.crossorigin==="use-credentials"?i.credentials="include":k.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(k){if(k.ep)return;k.ep=!0;const i=d(k);fetch(k.href,i)}};P();function E(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,l=>(l^crypto.getRandomValues(new Uint8Array(1))[0]&15>>l/4).toString(16))}class o{constructor(e="New task",d=!1){u(this,"id");u(this,"name");u(this,"completed");this.id=E(),this.name=e,this.completed=d}}class G{constructor(e){u(this,"day");u(this,"unasTasks");u(this,"otherTasks");e?(this.day=new Date(e.day),this.unasTasks=e.unasTasks,this.otherTasks=e.otherTasks):(this.day=new Date,this.unasTasks=[new o("Task 1"),new o("Task 2"),new o("Task 3")],this.otherTasks=[new o("Chaos Dungeons"),new o("Guardian Raids"),new o("Mario Cart"),new o("Anguished Isle"),new o("Guild Research"),new o("Guild Donation"),new o("Compass"),new o("Work Energy")])}resetDailies(){for(const e of this.unasTasks)e.completed=!1;for(const e of this.otherTasks)e.completed=!1}}class M{constructor(e){u(this,"day");u(this,"unasTasks");u(this,"vendor");u(this,"abyss");u(this,"guild");u(this,"other");e?(this.day=new Date(e.day),this.unasTasks=e.unasTasks,this.vendor=e.vendor,this.abyss=e.abyss,this.guild=e.guild,this.other=e.other):(this.day=new Date,this.unasTasks=[new o("Unas Weekly 1"),new o("Unas Weekly 2"),new o("Unas Weekly 3"),new o("Take unas tokens")],this.vendor=[new o("Bloodshards"),new o("Pirate Coins"),new o("Chaos Shards")],this.abyss=[new o("Dungeon 1"),new o("Dungeon 2")],this.guild=[new o("Task 1"),new o("Task 2")],this.other=[new o("Pirate Ship")])}resetWeeklies(){for(const e of this.vendor)e.completed=!1;for(const e of this.unasTasks)e.completed=!1;for(const e of this.abyss)e.completed=!1;for(const e of this.guild)e.completed=!1;for(const e of this.other)e.completed=!1}}var f,p,N,D,F,V,j,x,q,W,L,U,R;const g=class{constructor(){m(this,p);m(this,D);m(this,V);m(this,x);m(this,W);m(this,U);u(this,"dailyTasks");u(this,"weeklyTasks");I(g,f)||(A(g,f,this),T(this,W,L).call(this),T(this,U,R).call(this))}static getInstance(){return I(g,f)}clearCache(){localStorage.removeItem("daily-tasks"),localStorage.removeItem("weekly-tasks"),T(this,W,L).call(this),T(this,U,R).call(this)}saveDailies(){this.dailyTasks.day=new Date,localStorage.setItem("daily-tasks",btoa(JSON.stringify(this.dailyTasks)))}addUnasTask(){this.dailyTasks.unasTasks.push(new o("New Task")),this.saveDailies()}deleteUnasTask(e){let d=this.dailyTasks.unasTasks.findIndex(r=>r.id==e.id);d>-1&&this.dailyTasks.unasTasks.splice(d,1),this.saveDailies()}addOtherTask(){this.dailyTasks.otherTasks.push(new o("New Task")),this.saveDailies()}deleteOtherTask(e){let d=this.dailyTasks.otherTasks.findIndex(r=>r.id==e.id);d>-1&&this.dailyTasks.otherTasks.splice(d,1),this.saveDailies()}saveWeeklies(){localStorage.setItem("weekly-tasks",btoa(JSON.stringify(this.weeklyTasks)))}addWeeklyUnasTask(){this.weeklyTasks.unasTasks.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyUnasTask(e){let d=this.weeklyTasks.unasTasks.findIndex(r=>r.id==e.id);d>-1&&this.weeklyTasks.unasTasks.splice(d,1),this.saveWeeklies()}addWeeklyVendor(){this.weeklyTasks.vendor.push(new o("New Vendor")),this.saveWeeklies()}deleteWeeklyVendor(e){let d=this.weeklyTasks.vendor.findIndex(r=>r.id==e.id);d>-1&&this.weeklyTasks.vendor.splice(d,1),this.saveWeeklies()}addWeeklyAbyss(){this.weeklyTasks.abyss.push(new o("New Abyss")),this.saveWeeklies()}deleteWeeklyAbyss(e){let d=this.weeklyTasks.abyss.findIndex(r=>r.id==e.id);d>-1&&this.weeklyTasks.abyss.splice(d,1),this.saveWeeklies()}addWeeklyGuild(){this.weeklyTasks.guild.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyGuild(e){let d=this.weeklyTasks.guild.findIndex(r=>r.id==e.id);d>-1&&this.weeklyTasks.guild.splice(d,1),this.saveWeeklies()}addWeeklyOther(){this.weeklyTasks.other.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyOther(e){let d=this.weeklyTasks.other.findIndex(r=>r.id==e.id);d>-1&&this.weeklyTasks.other.splice(d,1),this.saveWeeklies()}};let C=g;f=new WeakMap,p=new WeakSet,N=function(){const e=new Date;return e.getUTCHours()<10&&e.setUTCDate(e.getUTCDate()-1),e.setUTCHours(10),e.setUTCMinutes(0),e.setUTCSeconds(0),e.setUTCMilliseconds(0),e},D=new WeakSet,F=function(e){const d=T(this,p,N).call(this);return e.getTime()>d.getTime()},V=new WeakSet,j=function(){const e=T(this,p,N).call(this),d=e.getUTCDay()-4;return e.getUTCDay()<4&&e.setUTCDate(e.getUTCDate()-7),e.setUTCDate(e.getUTCDate()-d),e},x=new WeakSet,q=function(e){const d=T(this,V,j).call(this);return e.getTime()>d.getTime()},W=new WeakSet,L=function(){const e=localStorage.getItem("daily-tasks");if(e){const d=new G(JSON.parse(atob(e)));this.dailyTasks=d,T(this,D,F).call(this,this.dailyTasks.day)||this.dailyTasks.resetDailies()}else this.dailyTasks=new G},U=new WeakSet,R=function(){const e=localStorage.getItem("weekly-tasks");if(e){const d=new M(JSON.parse(atob(e)));this.weeklyTasks=d,T(this,x,q).call(this,this.weeklyTasks.day)||this.weeklyTasks.resetWeeklies()}else this.weeklyTasks=new M},m(C,f,void 0);new C;var n=C.getInstance();var z=(l,e)=>{const d=l.__vccOpts||l;for(const[r,k]of e)d[r]=k;return d};const K={data(){return{tab:"dailies",unasTasks:n.dailyTasks.unasTasks,otherTasks:n.dailyTasks.otherTasks,weeklyUnasTasks:n.weeklyTasks.unasTasks,weeklyVendor:n.weeklyTasks.vendor,weeklyAbyss:n.weeklyTasks.abyss,weeklyGuild:n.weeklyTasks.guild,weeklyOther:n.weeklyTasks.other,resetTimer:null}},mounted(){const l=localStorage.getItem("mode");l?this.toggleMode(l):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.toggleMode("dark"):this.toggleMode("light");const e=localStorage.getItem("tab");e&&this.toggleTab(e),this.startDailiesTimer()},unmounted(){clearTimeout(this.resetTimer)},methods:{toggleMode(l){document.body.classList.remove("mode-dark"),document.body.classList.remove("mode-gray"),document.body.classList.remove("mode-light"),document.body.classList.add(`mode-${l}`),localStorage.setItem("mode",l)},toggleTab(l){this.tab=l,localStorage.setItem("tab",l)},timeUntilReset(){const l=new Date;l.setUTCHours(10),l.setUTCMinutes(0),l.setUTCSeconds(0),l.setUTCMilliseconds(0);const e=new Date;return e.getUTCHours()>10&&l.setUTCDate(l.getUTCDate()+1),l.getTime()-e.getTime()},startDailiesTimer(){this.resetTimer=setTimeout(()=>{this.resetDailies()},this.timeUntilReset()+10*1e3)},resetDailies(){n.dailyTasks.resetDailies(),this.unasTasks=[...n.dailyTasks.unasTasks],this.otherTasks=[...n.dailyTasks.otherTasks],new Date().getUTCDay()==4&&(n.weeklyTasks.resetWeeklies(),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks],this.weeklyVendor=[...n.weeklyTasks.vendor],this.weeklyAbyss=[...n.weeklyTasks.abyss],this.weeklyOther=[...n.weeklyTasks.other]),this.startDailiesTimer()},reset(){localStorage.removeItem("mode"),localStorage.removeItem("tab"),n.clearCache(),this.unasTasks=[...n.dailyTasks.unasTasks],this.otherTasks=[...n.dailyTasks.otherTasks],this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks],this.weeklyVendor=[...n.weeklyTasks.vendor],this.weeklyAbyss=[...n.weeklyTasks.abyss],this.weeklyOther=[...n.weeklyTasks.other]},saveDailies(){n.saveDailies()},addUnasTask(){n.addUnasTask(),this.unasTasks=[...n.dailyTasks.unasTasks]},deleteUnasTask(l){n.deleteUnasTask(l),this.unasTasks=[...n.dailyTasks.unasTasks]},addOtherTask(){n.addOtherTask(),this.otherTasks=[...n.dailyTasks.otherTasks]},deleteOtherTask(l){n.deleteUnasTask(l),this.otherTasks=[...n.dailyTasks.otherTasks]},saveWeeklies(){n.saveWeeklies()},addWeeklyUnasTask(){n.addWeeklyUnasTask(),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks]},deleteWeeklyUnasTask(l){n.deleteWeeklyUnasTask(l),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks]},addWeeklyVendor(){n.addWeeklyVendor(),this.weeklyVendor=[...n.weeklyTasks.vendor]},deleteWeeklyVendor(l){n.deleteWeeklyVendor(l),this.weeklyVendor=[...n.weeklyTasks.vendor]},addWeeklyAbyss(){n.addWeeklyAbyss(),this.weeklyAbyss=[...n.weeklyTasks.abyss]},deleteWeeklyAbyss(l){n.deleteWeeklyAbyss(l),this.weeklyAbyss=[...n.weeklyTasks.abyss]},addWeeklyGuild(){n.addWeeklyGuild(),this.weeklyGuild=[...n.weeklyTasks.guild]},deleteWeeklyGuild(l){n.deleteWeeklyGuild(l),this.weeklyGuild=[...n.weeklyTasks.guild]},addWeeklyOther(){n.addWeeklyOther(),this.weeklyOther=[...n.weeklyTasks.other]},deleteWeeklyOther(l){n.deleteWeeklyOther(l),this.weeklyOther=[...n.weeklyTasks.other]}}},Q={class:"page-container"},X={class:"card layer-1",style:{"min-width":"600px"}},Y={class:"nav themed-1"},Z={class:"dropdown"},$=s("div",null,[s("span",{class:"btn-icon"},[s("i",{class:"fas fa-tint"})]),s("span",{class:"btn-text"}," Theme ")],-1),ee={class:"dropdown-content align-right"},se={class:"list layer-1 hover-highlight"},te=s("div",{class:"list-item-side"},[s("i",{class:"fas fa-moon"})],-1),ie=s("div",{class:"list-item-text"},[s("div",null,"Dark")],-1),le=[te,ie],ae=s("div",{class:"list-item-side"},[s("i",{class:"fas fa-adjust"})],-1),de=s("div",{class:"list-item-text"},[s("div",null,"Gray")],-1),ne=[ae,de],oe=s("div",{class:"list-item-side"},[s("i",{class:"far fa-moon"})],-1),ke=s("div",{class:"list-item-text"},[s("div",null,"Light")],-1),re=[oe,ke],he={key:0},ce={class:"list layer-2 hover highlight"},ue=s("div",{class:"sub-header"},"Unas Tasks",-1),ye={class:"list-item-side"},Te=["onUpdate:modelValue"],me={class:"list-item-text"},ve=["onUpdate:modelValue"],_e={class:"list-item-side"},we=["onClick"],be=s("i",{class:"fas fa-times"},null,-1),fe=[be],ge={class:"list-item-side"},pe=s("div",{class:"sub-header"},"Other",-1),We={class:"list-item-side"},Ue=["onUpdate:modelValue"],Ce={class:"list-item-text"},De=["onUpdate:modelValue"],Ve={class:"list-item-side"},xe=["onClick"],Oe=s("i",{class:"fas fa-times"},null,-1),Ie=[Oe],Ae={class:"list-item-side"},Se={key:1},Ge={class:"list layer-2 hover highlight"},Me=s("div",{class:"sub-header"},"Unas Tasks",-1),Ne={class:"list-item-side"},Le=["onUpdate:modelValue"],Re={class:"list-item-text"},Be=["onUpdate:modelValue"],He={class:"list-item-side"},Je=["onClick"],Pe=s("i",{class:"fas fa-times"},null,-1),Ee=[Pe],Fe={class:"list-item-side"},je=s("div",{class:"sub-header"},"Vendors",-1),qe={class:"list-item-side"},ze=["onUpdate:modelValue"],Ke={class:"list-item-text"},Qe=["onUpdate:modelValue"],Xe={class:"list-item-side"},Ye=["onClick"],Ze=s("i",{class:"fas fa-times"},null,-1),$e=[Ze],es={class:"list-item-side"},ss=s("div",{class:"sub-header"},"Abyss",-1),ts={class:"list-item-side"},is=["onUpdate:modelValue"],ls={class:"list-item-text"},as=["onUpdate:modelValue"],ds={class:"list-item-side"},ns=["onClick"],os=s("i",{class:"fas fa-times"},null,-1),ks=[os],rs={class:"list-item-side"},hs=s("div",{class:"sub-header"},"Guild",-1),cs={class:"list-item-side"},us=["onUpdate:modelValue"],ys={class:"list-item-text"},Ts=["onUpdate:modelValue"],ms={class:"list-item-side"},vs=["onClick"],_s=s("i",{class:"fas fa-times"},null,-1),ws=[_s],bs={class:"list-item-side"},fs=s("div",{class:"sub-header"},"Other",-1),gs={class:"list-item-side"},ps=["onUpdate:modelValue"],Ws={class:"list-item-text"},Us=["onUpdate:modelValue"],Cs={class:"list-item-side"},Ds=["onClick"],Vs=s("i",{class:"fas fa-times"},null,-1),xs=[Vs],Os={class:"list-item-side"};function Is(l,e,d,r,k,i){return h(),c("div",Q,[s("div",X,[s("nav",Y,[s("button",{class:S({"tab-active":k.tab=="dailies"}),onClick:e[0]||(e[0]=t=>i.toggleTab("dailies"))},"Dailies",2),s("button",{class:S({"tab-active":k.tab=="weeklies"}),onClick:e[1]||(e[1]=t=>i.toggleTab("weeklies"))},"Weeklies",2),s("button",{onClick:e[2]||(e[2]=(...t)=>i.reset&&i.reset(...t)),style:{"margin-left":"auto"}},"Reset"),s("div",Z,[$,s("div",ee,[s("div",se,[s("div",{class:"clickable",onClick:e[3]||(e[3]=t=>i.toggleMode("dark"))},le),s("div",{class:"clickable",onClick:e[4]||(e[4]=t=>i.toggleMode("gray"))},ne),s("div",{class:"clickable",onClick:e[5]||(e[5]=t=>i.toggleMode("light"))},re)])])])]),k.tab=="dailies"?(h(),c("div",he,[s("div",ce,[ue,(h(!0),c(v,null,_(k.unasTasks,t=>(h(),c("div",{key:t.id},[s("div",ye,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[6]||(e[6]=(...a)=>i.saveDailies&&i.saveDailies(...a))},null,40,Te),[[w,t.completed]])]),s("div",me,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[7]||(e[7]=(...a)=>i.saveDailies&&i.saveDailies(...a))},null,40,ve),[[b,t.name]])]),s("div",_e,[s("button",{class:"btn",onClick:a=>i.deleteUnasTask(t)},fe,8,we)])]))),128)),s("div",null,[s("div",ge,[s("button",{class:"btn btn-raised",onClick:e[8]||(e[8]=(...t)=>i.addUnasTask&&i.addUnasTask(...t))},"Add")])]),pe,(h(!0),c(v,null,_(k.otherTasks,t=>(h(),c("div",{key:t.id},[s("div",We,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[9]||(e[9]=(...a)=>i.saveDailies&&i.saveDailies(...a))},null,40,Ue),[[w,t.completed]])]),s("div",Ce,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[10]||(e[10]=(...a)=>i.saveDailies&&i.saveDailies(...a))},null,40,De),[[b,t.name]])]),s("div",Ve,[s("button",{class:"btn",onClick:a=>i.deleteOtherTask(t)},Ie,8,xe)])]))),128)),s("div",null,[s("div",Ae,[s("button",{class:"btn btn-raised",onClick:e[11]||(e[11]=(...t)=>i.addOtherTask&&i.addOtherTask(...t))},"Add")])])])])):(h(),c("div",Se,[s("div",Ge,[Me,(h(!0),c(v,null,_(k.weeklyUnasTasks,t=>(h(),c("div",{key:t.id},[s("div",Ne,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[12]||(e[12]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,Le),[[w,t.completed]])]),s("div",Re,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[13]||(e[13]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,Be),[[b,t.name]])]),s("div",He,[s("button",{class:"btn",onClick:a=>i.deleteWeeklyUnasTask(t)},Ee,8,Je)])]))),128)),s("div",null,[s("div",Fe,[s("button",{class:"btn btn-raised",onClick:e[14]||(e[14]=(...t)=>i.addWeeklyUnasTask&&i.addWeeklyUnasTask(...t))},"Add")])]),je,(h(!0),c(v,null,_(k.weeklyVendor,t=>(h(),c("div",{key:t.id},[s("div",qe,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[15]||(e[15]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,ze),[[w,t.completed]])]),s("div",Ke,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[16]||(e[16]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,Qe),[[b,t.name]])]),s("div",Xe,[s("button",{class:"btn",onClick:a=>i.deleteWeeklyVendor(t)},$e,8,Ye)])]))),128)),s("div",null,[s("div",es,[s("button",{class:"btn btn-raised",onClick:e[17]||(e[17]=(...t)=>i.addWeeklyVendor&&i.addWeeklyVendor(...t))},"Add")])]),ss,(h(!0),c(v,null,_(k.weeklyAbyss,t=>(h(),c("div",{key:t.id},[s("div",ts,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[18]||(e[18]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,is),[[w,t.completed]])]),s("div",ls,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[19]||(e[19]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,as),[[b,t.name]])]),s("div",ds,[s("button",{class:"btn",onClick:a=>i.deleteWeeklyAbyss(t)},ks,8,ns)])]))),128)),s("div",null,[s("div",rs,[s("button",{class:"btn btn-raised",onClick:e[20]||(e[20]=(...t)=>i.addWeeklyAbyss&&i.addWeeklyAbyss(...t))},"Add")])]),hs,(h(!0),c(v,null,_(k.weeklyGuild,t=>(h(),c("div",{key:t.id},[s("div",cs,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[21]||(e[21]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,us),[[w,t.completed]])]),s("div",ys,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[22]||(e[22]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,Ts),[[b,t.name]])]),s("div",ms,[s("button",{class:"btn",onClick:a=>i.deleteWeeklyGuild(t)},ws,8,vs)])]))),128)),s("div",null,[s("div",bs,[s("button",{class:"btn btn-raised",onClick:e[23]||(e[23]=(...t)=>i.addWeeklyGuild&&i.addWeeklyGuild(...t))},"Add")])]),fs,(h(!0),c(v,null,_(k.weeklyOther,t=>(h(),c("div",{key:t.id},[s("div",gs,[y(s("input",{type:"checkbox","onUpdate:modelValue":a=>t.completed=a,onChange:e[24]||(e[24]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,ps),[[w,t.completed]])]),s("div",Ws,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":a=>t.name=a,onInput:e[25]||(e[25]=(...a)=>i.saveWeeklies&&i.saveWeeklies(...a))},null,40,Us),[[b,t.name]])]),s("div",Cs,[s("button",{class:"btn",onClick:a=>i.deleteWeeklyOther(t)},xs,8,Ds)])]))),128)),s("div",null,[s("div",Os,[s("button",{class:"btn btn-raised",onClick:e[26]||(e[26]=(...t)=>i.addWeeklyOther&&i.addWeeklyOther(...t))},"Add")])])])]))])])}var As=z(K,[["render",Is]]);J(As).mount("#app");
