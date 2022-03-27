var j=Object.defineProperty;var q=(a,e,d)=>e in a?j(a,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[e]=d;var u=(a,e,d)=>(q(a,typeof e!="symbol"?e+"":e,d),d),O=(a,e,d)=>{if(!e.has(a))throw TypeError("Cannot "+d)};var S=(a,e,d)=>(O(a,e,"read from private field"),d?d.call(a):e.get(a)),_=(a,e,d)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,d)},G=(a,e,d,h)=>(O(a,e,"write to private field"),h?h.call(a,d):e.set(a,d),d);var m=(a,e,d)=>(O(a,e,"access private method"),d);import{o as r,c,a as s,n as V,F as v,r as T,b as z,w as y,v as f,d as w,e as K}from"./vendor.4510e4e6.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))h(k);new MutationObserver(k=>{for(const l of k)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&h(t)}).observe(document,{childList:!0,subtree:!0});function d(k){const l={};return k.integrity&&(l.integrity=k.integrity),k.referrerpolicy&&(l.referrerPolicy=k.referrerpolicy),k.crossorigin==="use-credentials"?l.credentials="include":k.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(k){if(k.ep)return;k.ep=!0;const l=d(k);fetch(k.href,l)}};Q();function X(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16))}class o{constructor(e="New task",d=!1){u(this,"id");u(this,"name");u(this,"completed");this.id=X(),this.name=e,this.completed=d}}class N{constructor(e){u(this,"day");u(this,"unasTasks");u(this,"otherTasks");e?(this.day=new Date(e.day),this.unasTasks=e.unasTasks,this.otherTasks=e.otherTasks):(this.day=new Date,this.unasTasks=[new o("Task 1"),new o("Task 2"),new o("Task 3")],this.otherTasks=[new o("Chaos Dungeons"),new o("Guardian Raids"),new o("Mario Cart"),new o("Anguished Isle"),new o("Guild Research"),new o("Guild Donation"),new o("Compass"),new o("Work Energy")])}resetDailies(){for(const e of this.unasTasks)e.completed=!1;for(const e of this.otherTasks)e.completed=!1}}class M{constructor(e){u(this,"day");u(this,"unasTasks");u(this,"vendor");u(this,"abyss");u(this,"guild");u(this,"other");e?(this.day=new Date(e.day),this.unasTasks=e.unasTasks,this.vendor=e.vendor,this.abyss=e.abyss,this.guild=e.guild,this.other=e.other):(this.day=new Date,this.unasTasks=[new o("Unas Weekly 1"),new o("Unas Weekly 2"),new o("Unas Weekly 3"),new o("Claim unas tokens")],this.vendor=[new o("Bloodshards"),new o("Pirate Coins"),new o("Chaos Shards")],this.abyss=[new o("Dungeon 1"),new o("Dungeon 2")],this.guild=[new o("Task 1"),new o("Task 2")],this.other=[new o("Pirate Ship")])}resetWeeklies(){for(const e of this.vendor)e.completed=!1;for(const e of this.unasTasks)e.completed=!1;for(const e of this.abyss)e.completed=!1;for(const e of this.guild)e.completed=!1;for(const e of this.other)e.completed=!1}}function Y(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16))}class F{constructor(e="New alt"){u(this,"id");u(this,"name");u(this,"dailies");u(this,"weeklies");this.id=Y(),this.name=e,this.dailies=[new o("Unas Task 1"),new o("Unas Task 2"),new o("Unas Task 3"),new o("Chaos dungeons"),new o("Guardian raids"),new o("Holiday Guardian raid"),new o("Guild Research"),new o("Guild Donation")],this.weeklies=[new o("Unas Task 1"),new o("Unas Task 2"),new o("Unas Task 3"),new o("Guild 1"),new o("Guild 2"),new o("Abyss 1"),new o("Abyss 2")]}resetDailies(){for(const e of this.dailies)e.completed=!1}resetWeeklies(){for(const e of this.weeklies)e.completed=!1}}class L{constructor(e){u(this,"alts");u(this,"day");e?(this.day=new Date(e.day),this.alts=e.alts):(this.day=new Date,this.alts=[new F])}resetDailies(){for(const e of this.alts)for(const d of e.dailies)d.completed=!1}resetWeeklies(){for(const e of this.alts)for(const d of e.weeklies)d.completed=!1}}var b,p,R,W,J,I,Z,A,H,U,B,C,P,D,E;const g=class{constructor(){_(this,p);_(this,W);_(this,I);_(this,A);_(this,U);_(this,C);_(this,D);u(this,"dailyTasks");u(this,"weeklyTasks");u(this,"alts");S(g,b)||(G(g,b,this),m(this,U,B).call(this),m(this,C,P).call(this),m(this,D,E).call(this))}static getInstance(){return S(g,b)}clearCache(){localStorage.removeItem("daily-tasks"),localStorage.removeItem("weekly-tasks"),localStorage.removeItem("alts"),m(this,U,B).call(this),m(this,C,P).call(this),m(this,D,E).call(this)}saveDailies(){this.dailyTasks.day=new Date,localStorage.setItem("daily-tasks",btoa(JSON.stringify(this.dailyTasks)))}addUnasTask(){this.dailyTasks.unasTasks.push(new o("New Task")),this.saveDailies()}deleteUnasTask(e){let d=this.dailyTasks.unasTasks.findIndex(h=>h.id==e.id);d>-1&&this.dailyTasks.unasTasks.splice(d,1),this.saveDailies()}addOtherTask(){this.dailyTasks.otherTasks.push(new o("New Task")),this.saveDailies()}deleteOtherTask(e){let d=this.dailyTasks.otherTasks.findIndex(h=>h.id==e.id);d>-1&&this.dailyTasks.otherTasks.splice(d,1),this.saveDailies()}saveWeeklies(){this.weeklyTasks.day=new Date,localStorage.setItem("weekly-tasks",btoa(JSON.stringify(this.weeklyTasks)))}addWeeklyUnasTask(){this.weeklyTasks.unasTasks.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyUnasTask(e){let d=this.weeklyTasks.unasTasks.findIndex(h=>h.id==e.id);d>-1&&this.weeklyTasks.unasTasks.splice(d,1),this.saveWeeklies()}addWeeklyVendor(){this.weeklyTasks.vendor.push(new o("New Vendor")),this.saveWeeklies()}deleteWeeklyVendor(e){let d=this.weeklyTasks.vendor.findIndex(h=>h.id==e.id);d>-1&&this.weeklyTasks.vendor.splice(d,1),this.saveWeeklies()}addWeeklyAbyss(){this.weeklyTasks.abyss.push(new o("New Abyss")),this.saveWeeklies()}deleteWeeklyAbyss(e){let d=this.weeklyTasks.abyss.findIndex(h=>h.id==e.id);d>-1&&this.weeklyTasks.abyss.splice(d,1),this.saveWeeklies()}addWeeklyGuild(){this.weeklyTasks.guild.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyGuild(e){let d=this.weeklyTasks.guild.findIndex(h=>h.id==e.id);d>-1&&this.weeklyTasks.guild.splice(d,1),this.saveWeeklies()}addWeeklyOther(){this.weeklyTasks.other.push(new o("New Task")),this.saveWeeklies()}deleteWeeklyOther(e){let d=this.weeklyTasks.other.findIndex(h=>h.id==e.id);d>-1&&this.weeklyTasks.other.splice(d,1),this.saveWeeklies()}saveAlts(){this.alts.day=new Date,localStorage.setItem("alts",btoa(JSON.stringify(this.alts)))}addAlt(){this.alts.alts.push(new F),this.saveAlts()}deleteAlt(e){let d=this.alts.alts.findIndex(h=>h.id==e.id);d>-1&&this.alts.alts.splice(d,1),this.saveAlts()}addAltDailyTask(e){const d=this.alts.alts.find(h=>h.id==e);d&&(d.dailies.push(new o("New Task")),this.saveAlts())}deleteAltDailyTask(e,d){const h=this.alts.alts.find(k=>k.id==e);if(h){let k=h.dailies.findIndex(l=>l.id==d.id);k>-1&&h.dailies.splice(k,1),this.saveAlts()}}addAltWeeklyTask(e){const d=this.alts.alts.find(h=>h.id==e);d&&(d.weeklies.push(new o("New Task")),this.saveAlts())}deleteAltWeeklyTask(e,d){const h=this.alts.alts.find(k=>k.id==e);if(h){let k=h.weeklies.findIndex(l=>l.id==d.id);k>-1&&h.weeklies.splice(k,1),this.saveAlts()}}};let x=g;b=new WeakMap,p=new WeakSet,R=function(){const e=new Date;return e.getUTCHours()<10&&e.setUTCDate(e.getUTCDate()-1),e.setUTCHours(10),e.setUTCMinutes(0),e.setUTCSeconds(0),e.setUTCMilliseconds(0),e},W=new WeakSet,J=function(e){const d=m(this,p,R).call(this);return e.getTime()>d.getTime()},I=new WeakSet,Z=function(){const e=m(this,p,R).call(this),d=e.getUTCDay()-4;return e.getUTCDay()<4&&e.setUTCDate(e.getUTCDate()-7),e.setUTCDate(e.getUTCDate()-d),e},A=new WeakSet,H=function(e){const d=m(this,I,Z).call(this);return e.getTime()>d.getTime()},U=new WeakSet,B=function(){const e=localStorage.getItem("daily-tasks");if(e){const d=new N(JSON.parse(atob(e)));this.dailyTasks=d,m(this,W,J).call(this,this.dailyTasks.day)||this.dailyTasks.resetDailies()}else this.dailyTasks=new N},C=new WeakSet,P=function(){const e=localStorage.getItem("weekly-tasks");if(e){const d=new M(JSON.parse(atob(e)));this.weeklyTasks=d,m(this,A,H).call(this,this.weeklyTasks.day)||this.weeklyTasks.resetWeeklies()}else this.weeklyTasks=new M},D=new WeakSet,E=function(){const e=localStorage.getItem("alts");if(e){const d=new L(JSON.parse(atob(e)));this.alts=d,m(this,W,J).call(this,this.alts.day)||this.alts.resetDailies(),m(this,A,H).call(this,this.alts.day)||this.alts.resetWeeklies()}else this.alts=new L},_(x,b,void 0);new x;var n=x.getInstance();var $=(a,e)=>{const d=a.__vccOpts||a;for(const[h,k]of e)d[h]=k;return d};const ee={data(){return{tab:"dailies",unasTasks:n.dailyTasks.unasTasks,otherTasks:n.dailyTasks.otherTasks,weeklyUnasTasks:n.weeklyTasks.unasTasks,weeklyVendor:n.weeklyTasks.vendor,weeklyAbyss:n.weeklyTasks.abyss,weeklyGuild:n.weeklyTasks.guild,weeklyOther:n.weeklyTasks.other,alts:n.alts.alts,shownAlt:null,altDailies:[],altWeeklies:[],resetTimer:null}},mounted(){const a=localStorage.getItem("mode");a?this.toggleMode(a):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.toggleMode("dark"):this.toggleMode("light");const e=localStorage.getItem("tab");e&&this.toggleTab(e),this.alts.length>0&&(this.shownAlt=this.alts[0],this.altDailies=[...this.shownAlt.dailies],this.altWeeklies=[...this.shownAlt.weeklies]),this.startDailiesTimer()},unmounted(){clearTimeout(this.resetTimer)},methods:{toggleMode(a){document.body.classList.remove("mode-dark"),document.body.classList.remove("mode-gray"),document.body.classList.remove("mode-light"),document.body.classList.add(`mode-${a}`),localStorage.setItem("mode",a)},toggleTab(a){this.tab=a,localStorage.setItem("tab",a)},timeUntilReset(){const a=new Date;a.setUTCHours(10),a.setUTCMinutes(0),a.setUTCSeconds(0),a.setUTCMilliseconds(0);const e=new Date;return e.getUTCHours()>=10&&a.setUTCDate(a.getUTCDate()+1),a.getTime()-e.getTime()},startDailiesTimer(){this.resetTimer&&clearTimeout(this.resetTimer);const a=this.timeUntilReset()+10*1e3;this.resetTimer=setTimeout(()=>{this.resetDailies()},a)},resetDailies(){n.dailyTasks.resetDailies(),this.unasTasks=[...n.dailyTasks.unasTasks],this.otherTasks=[...n.dailyTasks.otherTasks],n.alts.resetDailies(),this.shownAlt&&(this.altDailies=[...this.shownAlt.dailies]),new Date().getUTCDay()==4&&(n.weeklyTasks.resetWeeklies(),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks],this.weeklyVendor=[...n.weeklyTasks.vendor],this.weeklyAbyss=[...n.weeklyTasks.abyss],this.weeklyOther=[...n.weeklyTasks.other],n.alts.resetWeeklies(),this.shownAlt&&(this.altWeeklies=[...this.shownAlt.weeklies])),this.startDailiesTimer()},reset(){localStorage.removeItem("mode"),localStorage.removeItem("tab"),n.clearCache(),this.unasTasks=[...n.dailyTasks.unasTasks],this.otherTasks=[...n.dailyTasks.otherTasks],this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks],this.weeklyVendor=[...n.weeklyTasks.vendor],this.weeklyAbyss=[...n.weeklyTasks.abyss],this.weeklyOther=[...n.weeklyTasks.other]},saveAlts(){n.saveAlts()},addAlt(){n.addAlt(),this.alts=[...n.alts.alts]},deleteAlt(a){n.deleteAlt(a),this.alts=[...n.alts.alts],a==this.shownAlt&&this.showAlt(this.alts[0])},showAlt(a){this.shownAlt=a,this.altDailies=[...a.dailies],this.altWeeklies=[...a.weeklies]},addAltDaily(){n.addAltDailyTask(this.shownAlt.id),this.altDailies=[...this.shownAlt.dailies]},addAltWeekly(){n.addAltWeeklyTask(this.shownAlt.id),this.altWeeklies=[...this.shownAlt.weeklies]},deleteAltDaily(a){n.deleteAltDailyTask(this.shownAlt.id,a),this.altDailies=[...this.shownAlt.dailies]},deleteAltWeekly(a){n.deleteAltWeeklyTask(this.shownAlt.id,a),this.altWeeklies=[...this.shownAlt.weeklies]},saveDailies(){n.saveDailies()},addUnasTask(){n.addUnasTask(),this.unasTasks=[...n.dailyTasks.unasTasks]},deleteUnasTask(a){n.deleteUnasTask(a),this.unasTasks=[...n.dailyTasks.unasTasks]},addOtherTask(){n.addOtherTask(),this.otherTasks=[...n.dailyTasks.otherTasks]},deleteOtherTask(a){n.deleteOtherTask(a),this.otherTasks=[...n.dailyTasks.otherTasks]},saveWeeklies(){n.saveWeeklies()},addWeeklyUnasTask(){n.addWeeklyUnasTask(),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks]},deleteWeeklyUnasTask(a){n.deleteWeeklyUnasTask(a),this.weeklyUnasTasks=[...n.weeklyTasks.unasTasks]},addWeeklyVendor(){n.addWeeklyVendor(),this.weeklyVendor=[...n.weeklyTasks.vendor]},deleteWeeklyVendor(a){n.deleteWeeklyVendor(a),this.weeklyVendor=[...n.weeklyTasks.vendor]},addWeeklyAbyss(){n.addWeeklyAbyss(),this.weeklyAbyss=[...n.weeklyTasks.abyss]},deleteWeeklyAbyss(a){n.deleteWeeklyAbyss(a),this.weeklyAbyss=[...n.weeklyTasks.abyss]},addWeeklyGuild(){n.addWeeklyGuild(),this.weeklyGuild=[...n.weeklyTasks.guild]},deleteWeeklyGuild(a){n.deleteWeeklyGuild(a),this.weeklyGuild=[...n.weeklyTasks.guild]},addWeeklyOther(){n.addWeeklyOther(),this.weeklyOther=[...n.weeklyTasks.other]},deleteWeeklyOther(a){n.deleteWeeklyOther(a),this.weeklyOther=[...n.weeklyTasks.other]}}},se={class:"page-container"},te={id:"page-content",class:"card layer-1"},le={class:"nav nav-primary"},ie={class:"dropdown"},ae=s("div",null,[s("span",{class:"btn-icon"},[s("i",{class:"fas fa-tint"})]),s("span",{class:"btn-text"}," Theme ")],-1),de={class:"dropdown-content align-right"},ne={class:"list layer-1 hover-highlight"},oe=s("div",{class:"list-item-side"},[s("i",{class:"fas fa-moon"})],-1),ke=s("div",{class:"list-item-text"},[s("div",null,"Dark")],-1),he=[oe,ke],re=s("div",{class:"list-item-side"},[s("i",{class:"fas fa-adjust"})],-1),ce=s("div",{class:"list-item-text"},[s("div",null,"Gray")],-1),ue=[re,ce],ye=s("div",{class:"list-item-side"},[s("i",{class:"far fa-moon"})],-1),me=s("div",{class:"list-item-text"},[s("div",null,"Light")],-1),ve=[ye,me],Te={key:0},we={class:"list layer-2"},_e=s("div",{class:"sub-header"},"Unas Tasks",-1),fe={class:"list-item-side"},be=["onUpdate:modelValue"],ge={class:"list-item-text"},pe=["onUpdate:modelValue"],We={class:"list-item-side"},Ae=["onClick"],Ue=s("i",{class:"fas fa-times"},null,-1),Ce=[Ue],De={class:"list-item-side"},Ve=s("div",{class:"sub-header"},"Other",-1),xe={class:"list-item-side"},Ie=["onUpdate:modelValue"],Oe={class:"list-item-text"},Se=["onUpdate:modelValue"],Ge={class:"list-item-side"},Ne=["onClick"],Me=s("i",{class:"fas fa-times"},null,-1),Le=[Me],Re={class:"list-item-side"},Je={key:1},He={class:"list layer-2"},Be=s("div",{class:"sub-header"},"Unas Tasks",-1),Pe={class:"list-item-side"},Ee=["onUpdate:modelValue"],Fe={class:"list-item-text"},je=["onUpdate:modelValue"],qe={class:"list-item-side"},ze=["onClick"],Ke=s("i",{class:"fas fa-times"},null,-1),Qe=[Ke],Xe={class:"list-item-side"},Ye=s("div",{class:"sub-header"},"Vendors",-1),Ze={class:"list-item-side"},$e=["onUpdate:modelValue"],es={class:"list-item-text"},ss=["onUpdate:modelValue"],ts={class:"list-item-side"},ls=["onClick"],is=s("i",{class:"fas fa-times"},null,-1),as=[is],ds={class:"list-item-side"},ns=s("div",{class:"sub-header"},"Abyss",-1),os={class:"list-item-side"},ks=["onUpdate:modelValue"],hs={class:"list-item-text"},rs=["onUpdate:modelValue"],cs={class:"list-item-side"},us=["onClick"],ys=s("i",{class:"fas fa-times"},null,-1),ms=[ys],vs={class:"list-item-side"},Ts=s("div",{class:"sub-header"},"Guild",-1),ws={class:"list-item-side"},_s=["onUpdate:modelValue"],fs={class:"list-item-text"},bs=["onUpdate:modelValue"],gs={class:"list-item-side"},ps=["onClick"],Ws=s("i",{class:"fas fa-times"},null,-1),As=[Ws],Us={class:"list-item-side"},Cs=s("div",{class:"sub-header"},"Other",-1),Ds={class:"list-item-side"},Vs=["onUpdate:modelValue"],xs={class:"list-item-text"},Is=["onUpdate:modelValue"],Os={class:"list-item-side"},Ss=["onClick"],Gs=s("i",{class:"fas fa-times"},null,-1),Ns=[Gs],Ms={class:"list-item-side"},Ls={key:2},Rs={id:"alts"},Js={class:"list layer-2"},Hs=s("div",{class:"sub-header"},"Daily Tasks",-1),Bs={class:"list-item-side"},Ps=["onUpdate:modelValue"],Es={class:"list-item-text"},Fs=["onUpdate:modelValue"],js={class:"list-item-side"},qs=["onClick"],zs=s("i",{class:"fas fa-times"},null,-1),Ks=[zs],Qs={class:"list-item-side"},Xs=s("div",{class:"sub-header"},"Weekly Tasks",-1),Ys={class:"list-item-side"},Zs=["onUpdate:modelValue"],$s={class:"list-item-text"},et=["onUpdate:modelValue"],st={class:"list-item-side"},tt=["onClick"],lt=s("i",{class:"fas fa-times"},null,-1),it=[lt],at={class:"list-item-side"},dt={class:"list layer-2"},nt=s("div",{class:"sub-header"},"Alts",-1),ot=["onClick"],kt=s("i",{class:"fas fa-arrow-left"},null,-1),ht=[kt],rt={class:"list-item-text"},ct=["onUpdate:modelValue"],ut={class:"list-item-side"},yt=["onClick"],mt=s("i",{class:"fas fa-times"},null,-1),vt=[mt],Tt={class:"list-item-side"};function wt(a,e,d,h,k,l){return r(),c("div",se,[s("div",te,[s("nav",le,[s("button",{class:V({"tab-active":k.tab=="dailies"}),onClick:e[0]||(e[0]=t=>l.toggleTab("dailies"))},"Dailies",2),s("button",{class:V({"tab-active":k.tab=="weeklies"}),onClick:e[1]||(e[1]=t=>l.toggleTab("weeklies"))},"Weeklies",2),s("button",{class:V({"tab-active":k.tab=="alts"}),onClick:e[2]||(e[2]=t=>l.toggleTab("alts"))},"Alts",2),s("button",{onClick:e[3]||(e[3]=(...t)=>l.reset&&l.reset(...t)),style:{"margin-left":"auto"}},"Reset"),s("div",ie,[ae,s("div",de,[s("div",ne,[s("div",{class:"clickable",onClick:e[4]||(e[4]=t=>l.toggleMode("dark"))},he),s("div",{class:"clickable",onClick:e[5]||(e[5]=t=>l.toggleMode("gray"))},ue),s("div",{class:"clickable",onClick:e[6]||(e[6]=t=>l.toggleMode("light"))},ve)])])])]),k.tab=="dailies"?(r(),c("div",Te,[s("div",we,[_e,(r(!0),c(v,null,T(k.unasTasks,t=>(r(),c("div",{key:t.id},[s("div",fe,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[7]||(e[7]=(...i)=>l.saveDailies&&l.saveDailies(...i))},null,40,be),[[f,t.completed]])]),s("div",ge,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[8]||(e[8]=(...i)=>l.saveDailies&&l.saveDailies(...i))},null,40,pe),[[w,t.name]])]),s("div",We,[s("button",{class:"btn",onClick:i=>l.deleteUnasTask(t)},Ce,8,Ae)])]))),128)),s("div",null,[s("div",De,[s("button",{class:"btn btn-raised",onClick:e[9]||(e[9]=(...t)=>l.addUnasTask&&l.addUnasTask(...t))},"Add")])]),Ve,(r(!0),c(v,null,T(k.otherTasks,t=>(r(),c("div",{key:t.id},[s("div",xe,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[10]||(e[10]=(...i)=>l.saveDailies&&l.saveDailies(...i))},null,40,Ie),[[f,t.completed]])]),s("div",Oe,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[11]||(e[11]=(...i)=>l.saveDailies&&l.saveDailies(...i))},null,40,Se),[[w,t.name]])]),s("div",Ge,[s("button",{class:"btn",onClick:i=>l.deleteOtherTask(t)},Le,8,Ne)])]))),128)),s("div",null,[s("div",Re,[s("button",{class:"btn btn-raised",onClick:e[12]||(e[12]=(...t)=>l.addOtherTask&&l.addOtherTask(...t))},"Add")])])])])):k.tab=="weeklies"?(r(),c("div",Je,[s("div",He,[Be,(r(!0),c(v,null,T(k.weeklyUnasTasks,t=>(r(),c("div",{key:t.id},[s("div",Pe,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[13]||(e[13]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,Ee),[[f,t.completed]])]),s("div",Fe,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[14]||(e[14]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,je),[[w,t.name]])]),s("div",qe,[s("button",{class:"btn",onClick:i=>l.deleteWeeklyUnasTask(t)},Qe,8,ze)])]))),128)),s("div",null,[s("div",Xe,[s("button",{class:"btn btn-raised",onClick:e[15]||(e[15]=(...t)=>l.addWeeklyUnasTask&&l.addWeeklyUnasTask(...t))},"Add")])]),Ye,(r(!0),c(v,null,T(k.weeklyVendor,t=>(r(),c("div",{key:t.id},[s("div",Ze,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[16]||(e[16]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,$e),[[f,t.completed]])]),s("div",es,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[17]||(e[17]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,ss),[[w,t.name]])]),s("div",ts,[s("button",{class:"btn",onClick:i=>l.deleteWeeklyVendor(t)},as,8,ls)])]))),128)),s("div",null,[s("div",ds,[s("button",{class:"btn btn-raised",onClick:e[18]||(e[18]=(...t)=>l.addWeeklyVendor&&l.addWeeklyVendor(...t))},"Add")])]),ns,(r(!0),c(v,null,T(k.weeklyAbyss,t=>(r(),c("div",{key:t.id},[s("div",os,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[19]||(e[19]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,ks),[[f,t.completed]])]),s("div",hs,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[20]||(e[20]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,rs),[[w,t.name]])]),s("div",cs,[s("button",{class:"btn",onClick:i=>l.deleteWeeklyAbyss(t)},ms,8,us)])]))),128)),s("div",null,[s("div",vs,[s("button",{class:"btn btn-raised",onClick:e[21]||(e[21]=(...t)=>l.addWeeklyAbyss&&l.addWeeklyAbyss(...t))},"Add")])]),Ts,(r(!0),c(v,null,T(k.weeklyGuild,t=>(r(),c("div",{key:t.id},[s("div",ws,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[22]||(e[22]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,_s),[[f,t.completed]])]),s("div",fs,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[23]||(e[23]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,bs),[[w,t.name]])]),s("div",gs,[s("button",{class:"btn",onClick:i=>l.deleteWeeklyGuild(t)},As,8,ps)])]))),128)),s("div",null,[s("div",Us,[s("button",{class:"btn btn-raised",onClick:e[24]||(e[24]=(...t)=>l.addWeeklyGuild&&l.addWeeklyGuild(...t))},"Add")])]),Cs,(r(!0),c(v,null,T(k.weeklyOther,t=>(r(),c("div",{key:t.id},[s("div",Ds,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[25]||(e[25]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,Vs),[[f,t.completed]])]),s("div",xs,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[26]||(e[26]=(...i)=>l.saveWeeklies&&l.saveWeeklies(...i))},null,40,Is),[[w,t.name]])]),s("div",Os,[s("button",{class:"btn",onClick:i=>l.deleteWeeklyOther(t)},Ns,8,Ss)])]))),128)),s("div",null,[s("div",Ms,[s("button",{class:"btn btn-raised",onClick:e[27]||(e[27]=(...t)=>l.addWeeklyOther&&l.addWeeklyOther(...t))},"Add")])])])])):(r(),c("div",Ls,[s("div",Rs,[s("div",Js,[k.shownAlt?(r(),c(v,{key:0},[Hs,(r(!0),c(v,null,T(k.altDailies,t=>(r(),c("div",{key:t.id},[s("div",Bs,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[28]||(e[28]=(...i)=>l.saveAlts&&l.saveAlts(...i))},null,40,Ps),[[f,t.completed]])]),s("div",Es,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[29]||(e[29]=(...i)=>l.saveAlts&&l.saveAlts(...i))},null,40,Fs),[[w,t.name]])]),s("div",js,[s("button",{class:"btn",onClick:i=>l.deleteAltDaily(t)},Ks,8,qs)])]))),128)),s("div",null,[s("div",Qs,[s("button",{class:"btn btn-raised",onClick:e[30]||(e[30]=(...t)=>l.addAltDaily&&l.addAltDaily(...t))},"Add")])]),Xs,(r(!0),c(v,null,T(k.altWeeklies,t=>(r(),c("div",{key:t.id},[s("div",Ys,[y(s("input",{type:"checkbox","onUpdate:modelValue":i=>t.completed=i,onChange:e[31]||(e[31]=(...i)=>l.saveAlts&&l.saveAlts(...i))},null,40,Zs),[[f,t.completed]])]),s("div",$s,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[32]||(e[32]=(...i)=>l.saveAlts&&l.saveAlts(...i))},null,40,et),[[w,t.name]])]),s("div",st,[s("button",{class:"btn",onClick:i=>l.deleteAltWeekly(t)},it,8,tt)])]))),128)),s("div",null,[s("div",at,[s("button",{class:"btn btn-raised",onClick:e[33]||(e[33]=(...t)=>l.addAltWeekly&&l.addAltWeekly(...t))},"Add")])])],64)):z("",!0)]),s("div",dt,[nt,(r(!0),c(v,null,T(k.alts,t=>(r(),c("div",{key:t.id},[s("div",{class:V(["list-item-side show-alt-btn",t==k.shownAlt?"active-alt":""]),onClick:i=>l.showAlt(t)},ht,10,ot),s("div",rt,[y(s("input",{type:"text",class:"input","onUpdate:modelValue":i=>t.name=i,onInput:e[34]||(e[34]=(...i)=>l.saveAlts&&l.saveAlts(...i))},null,40,ct),[[w,t.name]])]),s("div",ut,[s("button",{class:"btn",onClick:i=>l.deleteAlt(t)},vt,8,yt)])]))),128)),s("div",null,[s("div",Tt,[s("button",{class:"btn btn-raised",onClick:e[35]||(e[35]=(...t)=>l.addAlt&&l.addAlt(...t))},"Add")])])])])]))])])}var _t=$(ee,[["render",wt]]);K(_t).mount("#app");
