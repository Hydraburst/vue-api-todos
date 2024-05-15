(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ci(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ie={},fn=[],Ue=()=>{},$u=()=>!1,ts=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pi=t=>t.startsWith("onUpdate:"),_e=Object.assign,Oi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ju=Object.prototype.hasOwnProperty,X=(t,e)=>ju.call(t,e),F=Array.isArray,dn=t=>rr(t)==="[object Map]",Tn=t=>rr(t)==="[object Set]",mo=t=>rr(t)==="[object Date]",z=t=>typeof t=="function",pe=t=>typeof t=="string",pt=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",sc=t=>(se(t)||z(t))&&z(t.then)&&z(t.catch),ic=Object.prototype.toString,rr=t=>ic.call(t),Hu=t=>rr(t).slice(8,-1),oc=t=>rr(t)==="[object Object]",ki=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=Ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ns=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vu=/-(\w)/g,nt=ns(t=>t.replace(Vu,(e,n)=>n?n.toUpperCase():"")),Wu=/\B([A-Z])/g,Rn=ns(t=>t.replace(Wu,"-$1").toLowerCase()),rs=ns(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ps=ns(t=>t?`on${rs(t)}`:""),Mt=(t,e)=>!Object.is(t,e),Tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ac=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let go;const cc=()=>go||(go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?Gu(r):Ni(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(pe(t)||se(t))return t}const zu=/;(?![^(]*\))/g,Ku=/:([^]+)/,qu=/\/\*[^]*?\*\//g;function Gu(t){const e={};return t.replace(qu,"").split(zu).forEach(n=>{if(n){const r=n.split(Ku);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function De(t){let e="";if(pe(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=De(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ju="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xu=Ci(Ju);function lc(t){return!!t||t===""}function Yu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qt(t[r],e[r]);return n}function Qt(t,e){if(t===e)return!0;let n=mo(t),r=mo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=pt(t),r=pt(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Yu(t,e):!1;if(n=se(t),r=se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qt(t[o],e[o]))return!1}}return String(t)===String(e)}function xi(t,e){return t.findIndex(n=>Qt(n,e))}const Br=t=>pe(t)?t:t==null?"":F(t)||se(t)&&(t.toString===ic||!z(t.toString))?JSON.stringify(t,uc,2):String(t),uc=(t,e)=>e&&e.__v_isRef?uc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Os(r,i)+" =>"]=s,n),{})}:Tn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Os(n))}:pt(e)?Os(e):se(e)&&!F(e)&&!oc(e)?String(e):e,Os=(t,e="")=>{var n;return pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class fc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function dc(t){return new fc(t)}function Qu(t,e=xe){e&&e.active&&e.effects.push(t)}function hc(){return xe}function Zu(t){xe&&xe.cleanups.push(t)}let Gt;class Di{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ft();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ef(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Bt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=kt,n=Gt;try{return kt=!0,Gt=this,this._runnings++,_o(this),this.fn()}finally{yo(this),this._runnings--,Gt=n,kt=e}}stop(){var e;this.active&&(_o(this),yo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ef(t){return t.value}function _o(t){t._trackId++,t._depsLength=0}function yo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)pc(t.deps[e],t);t.deps.length=t._depsLength}}function pc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let kt=!0,Qs=0;const mc=[];function Ft(){mc.push(kt),kt=!1}function Bt(){const t=mc.pop();kt=t===void 0?!0:t}function Li(){Qs++}function Mi(){for(Qs--;!Qs&&Zs.length;)Zs.shift()()}function gc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&pc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Zs=[];function _c(t,e,n){Li();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Zs.push(r.scheduler)))}Mi()}const yc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},$r=new WeakMap,Jt=Symbol(""),ei=Symbol("");function Oe(t,e,n){if(kt&&Gt){let r=$r.get(t);r||$r.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yc(()=>r.delete(n))),gc(Gt,s)}}function dt(t,e,n,r,s,i){const o=$r.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!pt(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ki(n)&&a.push(o.get("length")):(a.push(o.get(Jt)),dn(t)&&a.push(o.get(ei)));break;case"delete":F(t)||(a.push(o.get(Jt)),dn(t)&&a.push(o.get(ei)));break;case"set":dn(t)&&a.push(o.get(Jt));break}Li();for(const c of a)c&&_c(c,4);Mi()}function tf(t,e){var n;return(n=$r.get(t))==null?void 0:n.get(e)}const nf=Ci("__proto__,__v_isRef,__isVue"),vc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pt)),vo=rf();function rf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ft(),Li();const r=Y(this)[e].apply(this,n);return Mi(),Bt(),r}}),t}function sf(t){pt(t)||(t=String(t));const e=Y(this);return Oe(e,"has",t),e.hasOwnProperty(t)}class bc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?yf:Sc:i?Ic:wc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&X(vo,n))return Reflect.get(vo,n,r);if(n==="hasOwnProperty")return sf}const a=Reflect.get(e,n,r);return(pt(n)?vc.has(n):nf(n))||(s||Oe(e,"get",n),i)?a:me(a)?o&&ki(n)?a:a.value:se(a)?s?Tc(a):sr(a):a}}class Ec extends bc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=zn(i);if(!jr(r)&&!zn(r)&&(i=Y(i),r=Y(r)),!F(e)&&me(i)&&!me(r))return c?!1:(i.value=r,!0)}const o=F(e)&&ki(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,s);return e===Y(s)&&(o?Mt(r,i)&&dt(e,"set",n,r):dt(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pt(n)||!vc.has(n))&&Oe(e,"has",n),r}ownKeys(e){return Oe(e,"iterate",F(e)?"length":Jt),Reflect.ownKeys(e)}}class of extends bc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const af=new Ec,cf=new of,lf=new Ec(!0);const Ui=t=>t,ss=t=>Reflect.getPrototypeOf(t);function yr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(Mt(e,i)&&Oe(s,"get",e),Oe(s,"get",i));const{has:o}=ss(s),a=r?Ui:n?ji:Kn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function vr(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(Mt(t,s)&&Oe(r,"has",t),Oe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function br(t,e=!1){return t=t.__v_raw,!e&&Oe(Y(t),"iterate",Jt),Reflect.get(t,"size",t)}function bo(t){t=Y(t);const e=Y(this);return ss(e).has.call(e,t)||(e.add(t),dt(e,"add",t,t)),this}function Eo(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=ss(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Mt(e,o)&&dt(n,"set",t,e):dt(n,"add",t,e),this}function wo(t){const e=Y(this),{has:n,get:r}=ss(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dt(e,"delete",t,void 0),i}function Io(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function Er(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?Ui:t?ji:Kn;return!t&&Oe(a,"iterate",Jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function wr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=dn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ui:e?ji:Kn;return!e&&Oe(i,"iterate",c?ei:Jt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uf(){const t={get(i){return yr(this,i)},get size(){return br(this)},has:vr,add:bo,set:Eo,delete:wo,clear:Io,forEach:Er(!1,!1)},e={get(i){return yr(this,i,!1,!0)},get size(){return br(this)},has:vr,add:bo,set:Eo,delete:wo,clear:Io,forEach:Er(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return br(this,!0)},has(i){return vr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Er(!0,!1)},r={get(i){return yr(this,i,!0,!0)},get size(){return br(this,!0)},has(i){return vr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wr(i,!1,!1),n[i]=wr(i,!0,!1),e[i]=wr(i,!1,!0),r[i]=wr(i,!0,!0)}),[t,n,e,r]}const[ff,df,hf,pf]=uf();function Fi(t,e){const n=e?t?pf:hf:t?df:ff;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const mf={get:Fi(!1,!1)},gf={get:Fi(!1,!0)},_f={get:Fi(!0,!1)};const wc=new WeakMap,Ic=new WeakMap,Sc=new WeakMap,yf=new WeakMap;function vf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bf(t){return t.__v_skip||!Object.isExtensible(t)?0:vf(Hu(t))}function sr(t){return zn(t)?t:Bi(t,!1,af,mf,wc)}function Ac(t){return Bi(t,!1,lf,gf,Ic)}function Tc(t){return Bi(t,!0,cf,_f,Sc)}function Bi(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xt(t){return zn(t)?Xt(t.__v_raw):!!(t&&t.__v_isReactive)}function zn(t){return!!(t&&t.__v_isReadonly)}function jr(t){return!!(t&&t.__v_isShallow)}function Rc(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function $i(t){return Object.isExtensible(t)&&ac(t,"__v_skip",!0),t}const Kn=t=>se(t)?sr(t):t,ji=t=>se(t)?Tc(t):t;class Cc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Di(()=>e(this._value),()=>Rr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return(!e._cacheable||e.effect.dirty)&&Mt(e._value,e._value=e.effect.run())&&Rr(e,4),Pc(e),e.effect._dirtyLevel>=2&&Rr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ef(t,e,n=!1){let r,s;const i=z(t);return i?(r=t,s=Ue):(r=t.get,s=t.set),new Cc(r,s,i||!s,n)}function Pc(t){var e;kt&&Gt&&(t=Y(t),gc(Gt,(e=t.dep)!=null?e:t.dep=yc(()=>t.dep=void 0,t instanceof Cc?t:void 0)))}function Rr(t,e=4,n){t=Y(t);const r=t.dep;r&&_c(r,e)}function me(t){return!!(t&&t.__v_isRef===!0)}function he(t){return Oc(t,!1)}function wf(t){return Oc(t,!0)}function Oc(t,e){return me(t)?t:new If(t,e)}class If{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Kn(e)}get value(){return Pc(this),this._value}set value(e){const n=this.__v_isShallow||jr(e)||zn(e);e=n?e:Y(e),Mt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Kn(e),Rr(this,4))}}function ht(t){return me(t)?t.value:t}const Sf={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kc(t){return Xt(t)?t:new Proxy(t,Sf)}function Af(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Rf(t,n);return e}class Tf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tf(Y(this._object),this._key)}}function Rf(t,e,n){const r=t[e];return me(r)?r:new Tf(t,e,n)}/**
* @vue/runtime-core v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nt(t,e,n,r){try{return r?t(...r):t()}catch(s){is(s,e,n)}}function We(t,e,n,r){if(z(t)){const s=Nt(t,e,n,r);return s&&sc(s)&&s.catch(i=>{is(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(We(t[i],e,n,r));return s}}function is(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ft(),Nt(c,null,10,[t,o,a]),Bt();return}}Cf(t,n,s,r)}function Cf(t,e,n,r=!0){console.error(t)}let qn=!1,ti=!1;const Ee=[];let Qe=0;const hn=[];let It=null,Kt=0;const Nc=Promise.resolve();let Hi=null;function os(t){const e=Hi||Nc;return t?e.then(this?t.bind(this):t):e}function Pf(t){let e=Qe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=Gn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Vi(t){(!Ee.length||!Ee.includes(t,qn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ee.push(t):Ee.splice(Pf(t.id),0,t),xc())}function xc(){!qn&&!ti&&(ti=!0,Hi=Nc.then(Lc))}function Of(t){const e=Ee.indexOf(t);e>Qe&&Ee.splice(e,1)}function kf(t){F(t)?hn.push(...t):(!It||!It.includes(t,t.allowRecurse?Kt+1:Kt))&&hn.push(t),xc()}function So(t,e,n=qn?Qe+1:0){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r()}}}function Dc(t){if(hn.length){const e=[...new Set(hn)].sort((n,r)=>Gn(n)-Gn(r));if(hn.length=0,It){It.push(...e);return}for(It=e,Kt=0;Kt<It.length;Kt++)It[Kt]();It=null,Kt=0}}const Gn=t=>t.id==null?1/0:t.id,Nf=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){ti=!1,qn=!0,Ee.sort(Nf);try{for(Qe=0;Qe<Ee.length;Qe++){const e=Ee[Qe];e&&e.active!==!1&&Nt(e,null,14)}}finally{Qe=0,Ee.length=0,Dc(),qn=!1,Hi=null,(Ee.length||hn.length)&&Lc()}}function xf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||ie;p&&(s=n.map(g=>pe(g)?g.trim():g)),f&&(s=n.map(Fr))}let a,c=r[a=Ps(e)]||r[a=Ps(nt(e))];!c&&i&&(c=r[a=Ps(Rn(e))]),c&&We(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(l,t,6,s)}}function Mc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=Mc(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(se(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):_e(o,i),se(t)&&r.set(t,o),o)}function as(t,e){return!t||!ts(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Rn(e))||X(t,e))}let Te=null,cs=null;function Hr(t){const e=Te;return Te=t,cs=t&&t.type.__scopeId||null,e}function ls(t){cs=t}function us(){cs=null}function Df(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Lo(-1);const i=Hr(e);let o;try{o=t(...s)}finally{Hr(i),r._d&&Lo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ks(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:g,ctx:_,inheritAttrs:b}=t,x=Hr(t);let R,O;try{if(n.shapeFlag&4){const j=s||r,W=j;R=Ye(l.call(W,j,u,f,g,p,_)),O=a}else{const j=e;R=Ye(j.length>1?j(f,{attrs:a,slots:o,emit:c}):j(f,null)),O=e.props?a:Lf(a)}}catch(j){jn.length=0,is(j,t,1),R=fe(Zt)}let D=R;if(O&&b!==!1){const j=Object.keys(O),{shapeFlag:W}=D;j.length&&W&7&&(i&&j.some(Pi)&&(O=Mf(O,i)),D=vn(D,O))}return n.dirs&&(D=vn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),R=D,Hr(x),R}const Lf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ts(n))&&((e||(e={}))[n]=t[n]);return e},Mf=(t,e)=>{const n={};for(const r in t)(!Pi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ao(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!as(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ao(r,o,l):!0:!!o;return!1}function Ao(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!as(n,i))return!0}return!1}function Ff({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uc="components";function Bf(t,e){return jf(Uc,t,!0,e)||t}const $f=Symbol.for("v-ndc");function jf(t,e,n=!0,r=!1){const s=Te||ye;if(s){const i=s.type;if(t===Uc){const a=Ud(i,!1);if(a&&(a===e||a===nt(e)||a===rs(nt(e))))return i}const o=To(s[t]||i[t],e)||To(s.appContext[t],e);return!o&&r?i:o}}function To(t,e){return t&&(t[e]||t[nt(e)]||t[rs(nt(e))])}const Hf=t=>t.__isSuspense;function Vf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):kf(t)}const Wf=Symbol.for("v-scx"),zf=()=>ze(Wf),Ir={};function Bn(t,e,n){return Fc(t,e,n)}function Fc(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ie){if(e&&i){const $=e;e=(...oe)=>{$(...oe),W()}}const c=ye,l=$=>r===!0?$:qt($,r===!1?1:void 0);let u,f=!1,p=!1;if(me(t)?(u=()=>t.value,f=jr(t)):Xt(t)?(u=()=>l(t),f=!0):F(t)?(p=!0,f=t.some($=>Xt($)||jr($)),u=()=>t.map($=>{if(me($))return $.value;if(Xt($))return l($);if(z($))return Nt($,c,2)})):z(t)?e?u=()=>Nt(t,c,2):u=()=>(g&&g(),We(t,c,3,[_])):u=Ue,e&&r){const $=u;u=()=>qt($())}let g,_=$=>{g=D.onStop=()=>{Nt($,c,4),g=D.onStop=void 0}},b;if(hs)if(_=Ue,e?n&&We(e,c,3,[u(),p?[]:void 0,_]):u(),s==="sync"){const $=zf();b=$.__watcherHandles||($.__watcherHandles=[])}else return Ue;let x=p?new Array(t.length).fill(Ir):Ir;const R=()=>{if(!(!D.active||!D.dirty))if(e){const $=D.run();(r||f||(p?$.some((oe,q)=>Mt(oe,x[q])):Mt($,x)))&&(g&&g(),We(e,c,3,[$,x===Ir?void 0:p&&x[0]===Ir?[]:x,_]),x=$)}else D.run()};R.allowRecurse=!!e;let O;s==="sync"?O=R:s==="post"?O=()=>Pe(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),O=()=>Vi(R));const D=new Di(u,Ue,O),j=hc(),W=()=>{D.stop(),j&&Oi(j.effects,D)};return e?n?R():x=D.run():s==="post"?Pe(D.run.bind(D),c&&c.suspense):D.run(),b&&b.push(W),W}function Kf(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?Bc(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=ir(this),a=Fc(s,i.bind(r),n);return o(),a}function Bc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function qt(t,e,n=0,r){if(!se(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),me(t))qt(t.value,e,n,r);else if(F(t))for(let s=0;s<t.length;s++)qt(t[s],e,n,r);else if(Tn(t)||dn(t))t.forEach(s=>{qt(s,e,n,r)});else if(oc(t))for(const s in t)qt(t[s],e,n,r);return t}function Vr(t,e){if(Te===null)return t;const n=ps(Te)||Te.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&qt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ft(),We(c,n,8,[t.el,a,t,e]),Bt())}}/*! #__NO_SIDE_EFFECTS__ */function $c(t,e){return z(t)?_e({name:t.name},e,{setup:t}):t}const Cr=t=>!!t.type.__asyncLoader,jc=t=>t.type.__isKeepAlive;function qf(t,e){Hc(t,"a",e)}function Gf(t,e){Hc(t,"da",e)}function Hc(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jc(s.parent.vnode)&&Jf(r,e,n,s),s=s.parent}}function Jf(t,e,n,r){const s=fs(e,t,r,!0);Vc(()=>{Oi(r[e],s)},n)}function fs(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ft();const a=ir(n),c=We(e,n,t,o);return a(),Bt(),c});return r?s.unshift(i):s.push(i),i}}const gt=t=>(e,n=ye)=>(!hs||t==="sp")&&fs(t,(...r)=>e(...r),n),Xf=gt("bm"),Wi=gt("m"),Yf=gt("bu"),Qf=gt("u"),Zf=gt("bum"),Vc=gt("um"),ed=gt("sp"),td=gt("rtg"),nd=gt("rtc");function rd(t,e=ye){fs("ec",t,e)}function sd(t,e,n,r){let s;const i=n;if(F(t)||pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const ni=t=>t?sl(t)?ps(t)||t.proxy:ni(t.parent):null,$n=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ni(t.parent),$root:t=>ni(t.root),$emit:t=>t.emit,$options:t=>zi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vi(t.update)}),$nextTick:t=>t.n||(t.n=os.bind(t.proxy)),$watch:t=>Kf.bind(t)}),Ns=(t,e)=>t!==ie&&!t.__isScriptSetup&&X(t,e),id={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ns(r,e))return o[e]=1,r[e];if(s!==ie&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ie&&X(n,e))return o[e]=4,n[e];ri&&(o[e]=0)}}const u=$n[e];let f,p;if(u)return e==="$attrs"&&Oe(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ns(s,e)?(s[e]=n,!0):r!==ie&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&X(t,o)||Ns(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X($n,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ro(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ri=!0;function od(t){const e=zi(t),n=t.proxy,r=t.ctx;ri=!1,e.beforeCreate&&Co(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:b,deactivated:x,beforeDestroy:R,beforeUnmount:O,destroyed:D,unmounted:j,render:W,renderTracked:$,renderTriggered:oe,errorCaptured:q,serverPrefetch:K,expose:le,inheritAttrs:ve,components:ke,directives:Le,filters:Ht}=e;if(l&&ad(l,r,null),o)for(const te in o){const Z=o[te];z(Z)&&(r[te]=Z.bind(n))}if(s){const te=s.call(n,n);se(te)&&(t.data=sr(te))}if(ri=!0,i)for(const te in i){const Z=i[te],it=z(Z)?Z.bind(n,n):z(Z.get)?Z.get.bind(n,n):Ue,_t=!z(Z)&&z(Z.set)?Z.set.bind(n):Ue,Ge=Ae({get:it,set:_t});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ce=>Ge.value=Ce})}if(a)for(const te in a)Wc(a[te],r,n,te);if(c){const te=z(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Z=>{Pr(Z,te[Z])})}u&&Co(u,t,"c");function Q(te,Z){F(Z)?Z.forEach(it=>te(it.bind(n))):Z&&te(Z.bind(n))}if(Q(Xf,f),Q(Wi,p),Q(Yf,g),Q(Qf,_),Q(qf,b),Q(Gf,x),Q(rd,q),Q(nd,$),Q(td,oe),Q(Zf,O),Q(Vc,j),Q(ed,K),F(le))if(le.length){const te=t.exposed||(t.exposed={});le.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:it=>n[Z]=it})})}else t.exposed||(t.exposed={});W&&t.render===Ue&&(t.render=W),ve!=null&&(t.inheritAttrs=ve),ke&&(t.components=ke),Le&&(t.directives=Le)}function ad(t,e,n=Ue){F(t)&&(t=si(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Co(t,e,n){We(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wc(t,e,n,r){const s=r.includes(".")?Bc(n,r):()=>n[r];if(pe(t)){const i=e[t];z(i)&&Bn(s,i)}else if(z(t))Bn(s,t.bind(n));else if(se(t))if(F(t))t.forEach(i=>Wc(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&Bn(s,i,t)}}function zi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Wr(c,l,o,!0)),Wr(c,e,o)),se(e)&&i.set(e,c),c}function Wr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wr(t,i,n,!0),s&&s.forEach(o=>Wr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=cd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cd={data:Po,props:Oo,emits:Oo,methods:Ln,computed:Ln,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Ln,directives:Ln,watch:ud,provide:Po,inject:ld};function Po(t,e){return e?t?function(){return _e(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function ld(t,e){return Ln(si(t),si(e))}function si(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?_e(Object.create(null),t,e):e}function Oo(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:_e(Object.create(null),Ro(t),Ro(e??{})):e}function ud(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function zc(){return{app:null,config:{isNativeTag:$u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fd=0;function dd(t,e){return function(r,s=null){z(r)||(r=_e({},r)),s!=null&&!se(s)&&(s=null);const i=zc(),o=new WeakSet;let a=!1;const c=i.app={_uid:fd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=fe(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ps(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=pn;pn=c;try{return l()}finally{pn=u}}};return c}}let pn=null;function Pr(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function ze(t,e,n=!1){const r=ye||Te;if(r||pn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}function hd(){return!!(ye||Te||pn)}const Kc=Object.create(null),qc=()=>Object.create(Kc),Gc=t=>Object.getPrototypeOf(t)===Kc;function pd(t,e,n,r=!1){const s={},i=qc();t.propsDefaults=Object.create(null),Jc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ac(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function md(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(as(t.emitsOptions,p))continue;const g=e[p];if(c)if(X(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=nt(p);s[_]=ii(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Jc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=Rn(f))===f||!X(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ii(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!X(e,f))&&(delete i[f],l=!0)}l&&dt(t.attrs,"set","")}function Jc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fn(c))continue;const l=e[c];let u;s&&X(s,u=nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:as(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ii(s,c,f,l[f],t,!X(l,f))}}return o}function ii(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ir(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function Xc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const u=f=>{c=!0;const[p,g]=Xc(f,e,!0);_e(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return se(t)&&r.set(t,fn),fn;if(F(i))for(let u=0;u<i.length;u++){const f=nt(i[u]);ko(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=nt(u);if(ko(f)){const p=i[u],g=o[f]=F(p)||z(p)?{type:p}:_e({},p);if(g){const _=Do(Boolean,g.type),b=Do(String,g.type);g[0]=_>-1,g[1]=b<0||_<b,(_>-1||X(g,"default"))&&a.push(f)}}}const l=[o,a];return se(t)&&r.set(t,l),l}function ko(t){return t[0]!=="$"&&!Fn(t)}function No(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function xo(t,e){return No(t)===No(e)}function Do(t,e){return F(e)?e.findIndex(n=>xo(n,t)):z(e)&&xo(e,t)?0:-1}const Yc=t=>t[0]==="_"||t==="$stable",Ki=t=>F(t)?t.map(Ye):[Ye(t)],gd=(t,e,n)=>{if(e._n)return e;const r=Df((...s)=>Ki(e(...s)),n);return r._c=!1,r},Qc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yc(s))continue;const i=t[s];if(z(i))e[s]=gd(s,i,r);else if(i!=null){const o=Ki(i);e[s]=()=>o}}},Zc=(t,e)=>{const n=Ki(e);t.slots.default=()=>n},_d=(t,e)=>{const n=t.slots=qc();if(t.vnode.shapeFlag&32){const r=e._;r?(_e(n,e),ac(n,"_",r)):Qc(e,n)}else e&&Zc(t,e)},yd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Qc(e,s)),o=e}else e&&(Zc(t,e),o={default:1});if(i)for(const a in s)!Yc(a)&&o[a]==null&&delete s[a]};function oi(t,e,n,r,s=!1){if(F(t)){t.forEach((p,g)=>oi(p,e&&(F(e)?e[g]:e),n,r,s));return}if(Cr(r)&&!s)return;const i=r.shapeFlag&4?ps(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,X(f,l)&&(f[l]=null)):me(l)&&(l.value=null)),z(c))Nt(c,a,12,[o,u]);else{const p=pe(c),g=me(c);if(p||g){const _=()=>{if(t.f){const b=p?X(f,c)?f[c]:u[c]:c.value;s?F(b)&&Oi(b,i):F(b)?b.includes(i)||b.push(i):p?(u[c]=[i],X(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,X(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Pe(_,n)):_()}}}const Pe=Vf;function vd(t){return bd(t)}function bd(t,e){const n=cc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Ue,insertStaticContent:_}=t,b=(d,h,m,w=null,y=null,A=null,P=void 0,S=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!Nn(d,h)&&(w=E(d),Ce(d,y,A,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:I,ref:N,shapeFlag:B}=h;switch(I){case ds:x(d,h,m,w);break;case Zt:R(d,h,m,w);break;case Ds:d==null&&O(h,m,w,P);break;case He:ke(d,h,m,w,y,A,P,S,T);break;default:B&1?W(d,h,m,w,y,A,P,S,T):B&6?Le(d,h,m,w,y,A,P,S,T):(B&64||B&128)&&I.process(d,h,m,w,y,A,P,S,T,L)}N!=null&&y&&oi(N,d&&d.ref,A,h||d,!h)},x=(d,h,m,w)=>{if(d==null)r(h.el=a(h.children),m,w);else{const y=h.el=d.el;h.children!==d.children&&l(y,h.children)}},R=(d,h,m,w)=>{d==null?r(h.el=c(h.children||""),m,w):h.el=d.el},O=(d,h,m,w)=>{[d.el,d.anchor]=_(d.children,h,m,w,d.el,d.anchor)},D=({el:d,anchor:h},m,w)=>{let y;for(;d&&d!==h;)y=p(d),r(d,m,w),d=y;r(h,m,w)},j=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},W=(d,h,m,w,y,A,P,S,T)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),d==null?$(h,m,w,y,A,P,S,T):K(d,h,y,A,P,S,T)},$=(d,h,m,w,y,A,P,S)=>{let T,I;const{props:N,shapeFlag:B,transition:M,dirs:V}=d;if(T=d.el=o(d.type,A,N&&N.is,N),B&8?u(T,d.children):B&16&&q(d.children,T,null,w,y,xs(d,A),P,S),V&&Vt(d,null,w,"created"),oe(T,d,d.scopeId,P,w),N){for(const ne in N)ne!=="value"&&!Fn(ne)&&i(T,ne,null,N[ne],A,d.children,w,y,be);"value"in N&&i(T,"value",null,N.value,A),(I=N.onVnodeBeforeMount)&&Xe(I,w,d)}V&&Vt(d,null,w,"beforeMount");const G=Ed(y,M);G&&M.beforeEnter(T),r(T,h,m),((I=N&&N.onVnodeMounted)||G||V)&&Pe(()=>{I&&Xe(I,w,d),G&&M.enter(T),V&&Vt(d,null,w,"mounted")},y)},oe=(d,h,m,w,y)=>{if(m&&g(d,m),w)for(let A=0;A<w.length;A++)g(d,w[A]);if(y){let A=y.subTree;if(h===A){const P=y.vnode;oe(d,P,P.scopeId,P.slotScopeIds,y.parent)}}},q=(d,h,m,w,y,A,P,S,T=0)=>{for(let I=T;I<d.length;I++){const N=d[I]=S?St(d[I]):Ye(d[I]);b(null,N,h,m,w,y,A,P,S)}},K=(d,h,m,w,y,A,P)=>{const S=h.el=d.el;let{patchFlag:T,dynamicChildren:I,dirs:N}=h;T|=d.patchFlag&16;const B=d.props||ie,M=h.props||ie;let V;if(m&&Wt(m,!1),(V=M.onVnodeBeforeUpdate)&&Xe(V,m,h,d),N&&Vt(h,d,m,"beforeUpdate"),m&&Wt(m,!0),I?le(d.dynamicChildren,I,S,m,w,xs(h,y),A):P||Z(d,h,S,null,m,w,xs(h,y),A,!1),T>0){if(T&16)ve(S,h,B,M,m,w,y);else if(T&2&&B.class!==M.class&&i(S,"class",null,M.class,y),T&4&&i(S,"style",B.style,M.style,y),T&8){const G=h.dynamicProps;for(let ne=0;ne<G.length;ne++){const ae=G[ne],ge=B[ae],je=M[ae];(je!==ge||ae==="value")&&i(S,ae,ge,je,y,d.children,m,w,be)}}T&1&&d.children!==h.children&&u(S,h.children)}else!P&&I==null&&ve(S,h,B,M,m,w,y);((V=M.onVnodeUpdated)||N)&&Pe(()=>{V&&Xe(V,m,h,d),N&&Vt(h,d,m,"updated")},w)},le=(d,h,m,w,y,A,P)=>{for(let S=0;S<h.length;S++){const T=d[S],I=h[S],N=T.el&&(T.type===He||!Nn(T,I)||T.shapeFlag&70)?f(T.el):m;b(T,I,N,null,w,y,A,P,!0)}},ve=(d,h,m,w,y,A,P)=>{if(m!==w){if(m!==ie)for(const S in m)!Fn(S)&&!(S in w)&&i(d,S,m[S],null,P,h.children,y,A,be);for(const S in w){if(Fn(S))continue;const T=w[S],I=m[S];T!==I&&S!=="value"&&i(d,S,I,T,P,h.children,y,A,be)}"value"in w&&i(d,"value",m.value,w.value,P)}},ke=(d,h,m,w,y,A,P,S,T)=>{const I=h.el=d?d.el:a(""),N=h.anchor=d?d.anchor:a("");let{patchFlag:B,dynamicChildren:M,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),d==null?(r(I,m,w),r(N,m,w),q(h.children||[],m,N,y,A,P,S,T)):B>0&&B&64&&M&&d.dynamicChildren?(le(d.dynamicChildren,M,m,y,A,P,S),(h.key!=null||y&&h===y.subTree)&&el(d,h,!0)):Z(d,h,m,N,y,A,P,S,T)},Le=(d,h,m,w,y,A,P,S,T)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?y.ctx.activate(h,m,w,P,T):Ht(h,m,w,y,A,P,T):Me(d,h,T)},Ht=(d,h,m,w,y,A,P)=>{const S=d.component=Nd(d,w,y);if(jc(d)&&(S.ctx.renderer=L),xd(S),S.asyncDep){if(y&&y.registerDep(S,Q),!d.el){const T=S.subTree=fe(Zt);R(null,T,h,m)}}else Q(S,d,h,m,y,A,P)},Me=(d,h,m)=>{const w=h.component=d.component;if(Uf(d,h,m))if(w.asyncDep&&!w.asyncResolved){te(w,h,m);return}else w.next=h,Of(w.update),w.effect.dirty=!0,w.update();else h.el=d.el,w.vnode=h},Q=(d,h,m,w,y,A,P)=>{const S=()=>{if(d.isMounted){let{next:N,bu:B,u:M,parent:V,vnode:G}=d;{const an=tl(d);if(an){N&&(N.el=G.el,te(d,N,P)),an.asyncDep.then(()=>{d.isUnmounted||S()});return}}let ne=N,ae;Wt(d,!1),N?(N.el=G.el,te(d,N,P)):N=G,B&&Tr(B),(ae=N.props&&N.props.onVnodeBeforeUpdate)&&Xe(ae,V,N,G),Wt(d,!0);const ge=ks(d),je=d.subTree;d.subTree=ge,b(je,ge,f(je.el),E(je),d,y,A),N.el=ge.el,ne===null&&Ff(d,ge.el),M&&Pe(M,y),(ae=N.props&&N.props.onVnodeUpdated)&&Pe(()=>Xe(ae,V,N,G),y)}else{let N;const{el:B,props:M}=h,{bm:V,m:G,parent:ne}=d,ae=Cr(h);if(Wt(d,!1),V&&Tr(V),!ae&&(N=M&&M.onVnodeBeforeMount)&&Xe(N,ne,h),Wt(d,!0),B&&ue){const ge=()=>{d.subTree=ks(d),ue(B,d.subTree,d,y,null)};ae?h.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=ks(d);b(null,ge,m,w,d,y,A),h.el=ge.el}if(G&&Pe(G,y),!ae&&(N=M&&M.onVnodeMounted)){const ge=h;Pe(()=>Xe(N,ne,ge),y)}(h.shapeFlag&256||ne&&Cr(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Pe(d.a,y),d.isMounted=!0,h=m=w=null}},T=d.effect=new Di(S,Ue,()=>Vi(I),d.scope),I=d.update=()=>{T.dirty&&T.run()};I.id=d.uid,Wt(d,!0),I()},te=(d,h,m)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,md(d,h.props,w,m),yd(d,h.children,m),Ft(),So(d),Bt()},Z=(d,h,m,w,y,A,P,S,T=!1)=>{const I=d&&d.children,N=d?d.shapeFlag:0,B=h.children,{patchFlag:M,shapeFlag:V}=h;if(M>0){if(M&128){_t(I,B,m,w,y,A,P,S,T);return}else if(M&256){it(I,B,m,w,y,A,P,S,T);return}}V&8?(N&16&&be(I,y,A),B!==I&&u(m,B)):N&16?V&16?_t(I,B,m,w,y,A,P,S,T):be(I,y,A,!0):(N&8&&u(m,""),V&16&&q(B,m,w,y,A,P,S,T))},it=(d,h,m,w,y,A,P,S,T)=>{d=d||fn,h=h||fn;const I=d.length,N=h.length,B=Math.min(I,N);let M;for(M=0;M<B;M++){const V=h[M]=T?St(h[M]):Ye(h[M]);b(d[M],V,m,null,y,A,P,S,T)}I>N?be(d,y,A,!0,!1,B):q(h,m,w,y,A,P,S,T,B)},_t=(d,h,m,w,y,A,P,S,T)=>{let I=0;const N=h.length;let B=d.length-1,M=N-1;for(;I<=B&&I<=M;){const V=d[I],G=h[I]=T?St(h[I]):Ye(h[I]);if(Nn(V,G))b(V,G,m,null,y,A,P,S,T);else break;I++}for(;I<=B&&I<=M;){const V=d[B],G=h[M]=T?St(h[M]):Ye(h[M]);if(Nn(V,G))b(V,G,m,null,y,A,P,S,T);else break;B--,M--}if(I>B){if(I<=M){const V=M+1,G=V<N?h[V].el:w;for(;I<=M;)b(null,h[I]=T?St(h[I]):Ye(h[I]),m,G,y,A,P,S,T),I++}}else if(I>M)for(;I<=B;)Ce(d[I],y,A,!0),I++;else{const V=I,G=I,ne=new Map;for(I=G;I<=M;I++){const Ne=h[I]=T?St(h[I]):Ye(h[I]);Ne.key!=null&&ne.set(Ne.key,I)}let ae,ge=0;const je=M-G+1;let an=!1,fo=0;const kn=new Array(je);for(I=0;I<je;I++)kn[I]=0;for(I=V;I<=B;I++){const Ne=d[I];if(ge>=je){Ce(Ne,y,A,!0);continue}let Je;if(Ne.key!=null)Je=ne.get(Ne.key);else for(ae=G;ae<=M;ae++)if(kn[ae-G]===0&&Nn(Ne,h[ae])){Je=ae;break}Je===void 0?Ce(Ne,y,A,!0):(kn[Je-G]=I+1,Je>=fo?fo=Je:an=!0,b(Ne,h[Je],m,null,y,A,P,S,T),ge++)}const ho=an?wd(kn):fn;for(ae=ho.length-1,I=je-1;I>=0;I--){const Ne=G+I,Je=h[Ne],po=Ne+1<N?h[Ne+1].el:w;kn[I]===0?b(null,Je,m,po,y,A,P,S,T):an&&(ae<0||I!==ho[ae]?Ge(Je,m,po,2):ae--)}}},Ge=(d,h,m,w,y=null)=>{const{el:A,type:P,transition:S,children:T,shapeFlag:I}=d;if(I&6){Ge(d.component.subTree,h,m,w);return}if(I&128){d.suspense.move(h,m,w);return}if(I&64){P.move(d,h,m,L);return}if(P===He){r(A,h,m);for(let B=0;B<T.length;B++)Ge(T[B],h,m,w);r(d.anchor,h,m);return}if(P===Ds){D(d,h,m);return}if(w!==2&&I&1&&S)if(w===0)S.beforeEnter(A),r(A,h,m),Pe(()=>S.enter(A),y);else{const{leave:B,delayLeave:M,afterLeave:V}=S,G=()=>r(A,h,m),ne=()=>{B(A,()=>{G(),V&&V()})};M?M(A,G,ne):ne()}else r(A,h,m)},Ce=(d,h,m,w=!1,y=!1)=>{const{type:A,props:P,ref:S,children:T,dynamicChildren:I,shapeFlag:N,patchFlag:B,dirs:M}=d;if(S!=null&&oi(S,null,m,d,!0),N&256){h.ctx.deactivate(d);return}const V=N&1&&M,G=!Cr(d);let ne;if(G&&(ne=P&&P.onVnodeBeforeUnmount)&&Xe(ne,h,d),N&6)_r(d.component,m,w);else{if(N&128){d.suspense.unmount(m,w);return}V&&Vt(d,null,h,"beforeUnmount"),N&64?d.type.remove(d,h,m,y,L,w):I&&(A!==He||B>0&&B&64)?be(I,h,m,!1,!0):(A===He&&B&384||!y&&N&16)&&be(T,h,m),w&&sn(d)}(G&&(ne=P&&P.onVnodeUnmounted)||V)&&Pe(()=>{ne&&Xe(ne,h,d),V&&Vt(d,null,h,"unmounted")},m)},sn=d=>{const{type:h,el:m,anchor:w,transition:y}=d;if(h===He){on(m,w);return}if(h===Ds){j(d);return}const A=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:P,delayLeave:S}=y,T=()=>P(m,A);S?S(d.el,A,T):T()}else A()},on=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},_r=(d,h,m)=>{const{bum:w,scope:y,update:A,subTree:P,um:S}=d;w&&Tr(w),y.stop(),A&&(A.active=!1,Ce(P,d,h,m)),S&&Pe(S,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},be=(d,h,m,w=!1,y=!1,A=0)=>{for(let P=A;P<d.length;P++)Ce(d[P],h,m,w,y)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let k=!1;const C=(d,h,m)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,m),k||(k=!0,So(),Dc(),k=!1),h._vnode=d},L={p:b,um:Ce,m:Ge,r:sn,mt:Ht,mc:q,pc:Z,pbc:le,n:E,o:t};let ee,ue;return{render:C,hydrate:ee,createApp:dd(C,ee)}}function xs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ed(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function el(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=St(s[i]),a.el=o.el),n||el(o,a)),a.type===ds&&(a.el=o.el)}}function wd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tl(e)}const Id=t=>t.__isTeleport,He=Symbol.for("v-fgt"),ds=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc"),jn=[];let Ve=null;function we(t=!1){jn.push(Ve=t?null:[])}function Sd(){jn.pop(),Ve=jn[jn.length-1]||null}let Jn=1;function Lo(t){Jn+=t}function nl(t){return t.dynamicChildren=Jn>0?Ve||fn:null,Sd(),Jn>0&&Ve&&Ve.push(t),t}function Re(t,e,n,r,s,i){return nl(U(t,e,n,r,s,i,!0))}function Ad(t,e,n,r,s){return nl(fe(t,e,n,r,s,!0))}function ai(t){return t?t.__v_isVNode===!0:!1}function Nn(t,e){return t.type===e.type&&t.key===e.key}const rl=({key:t})=>t??null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||me(t)||z(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rl(e),ref:e&&Or(e),scopeId:cs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(qi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),Jn>0&&!o&&Ve&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ve.push(c),c}const fe=Td;function Td(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$f)&&(t=Zt),ai(t)){const a=vn(t,e,!0);return n&&qi(a,n),Jn>0&&!i&&Ve&&(a.shapeFlag&6?Ve[Ve.indexOf(t)]=a:Ve.push(a)),a.patchFlag|=-2,a}if(Fd(t)&&(t=t.__vccOpts),e){e=Rd(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=De(a)),se(c)&&(Rc(c)&&!F(c)&&(c=_e({},c)),e.style=Ni(c))}const o=pe(t)?1:Hf(t)?128:Id(t)?64:se(t)?4:z(t)?2:0;return U(t,e,n,r,s,o,i,!0)}function Rd(t){return t?Rc(t)||Gc(t)?_e({},t):t:null}function vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rl(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Or(e)):[s,Or(e)]:Or(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cd(t=" ",e=0){return fe(ds,null,t,e)}function Mo(t="",e=!1){return e?(we(),Ad(Zt,null,t)):fe(Zt,null,t)}function Ye(t){return t==null||typeof t=="boolean"?fe(Zt):F(t)?fe(He,null,t.slice()):typeof t=="object"?St(t):fe(ds,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function qi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gc(e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[Cd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=De([e.class,r.class]));else if(s==="style")e.style=Ni([e.style,r.style]);else if(ts(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){We(t,e,7,[n,r])}const Od=zc();let kd=0;function Nd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Od,i={uid:kd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(r,s),emitsOptions:Mc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xf.bind(null,i),t.ce&&t.ce(i),i}let ye=null,zr,ci;{const t=cc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zr=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),ci=e("__VUE_SSR_SETTERS__",n=>hs=n)}const ir=t=>{const e=ye;return zr(t),t.scope.on(),()=>{t.scope.off(),zr(e)}},Uo=()=>{ye&&ye.scope.off(),zr(null)};function sl(t){return t.vnode.shapeFlag&4}let hs=!1;function xd(t,e=!1){e&&ci(e);const{props:n,children:r}=t.vnode,s=sl(t);pd(t,n,s,e),_d(t,r);const i=s?Dd(t,e):void 0;return e&&ci(!1),i}function Dd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,id);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Md(t):null,i=ir(t);Ft();const o=Nt(r,t,0,[t.props,s]);if(Bt(),i(),sc(o)){if(o.then(Uo,Uo),e)return o.then(a=>{Fo(t,a,e)}).catch(a=>{is(a,t,0)});t.asyncDep=o}else Fo(t,o,e)}else il(t,e)}function Fo(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=kc(e)),il(t,n)}let Bo;function il(t,e,n){const r=t.type;if(!t.render){if(!e&&Bo&&!r.render){const s=r.template||zi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=Bo(s,l)}}t.render=r.render||Ue}{const s=ir(t);Ft();try{od(t)}finally{Bt(),s()}}}const Ld={get(t,e){return Oe(t,"get",""),t[e]}};function Md(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ld),slots:t.slots,emit:t.emit,expose:e}}function ps(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kc($i(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}}))}function Ud(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Fd(t){return z(t)&&"__vccOpts"in t}const Ae=(t,e)=>Ef(t,e,hs);function ol(t,e,n){const r=arguments.length;return r===2?se(e)&&!F(e)?ai(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ai(n)&&(n=[n]),fe(t,e,n))}const Bd="3.4.24";/**
* @vue/runtime-dom v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $d="http://www.w3.org/2000/svg",jd="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,$o=At&&At.createElement("template"),Hd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?At.createElementNS($d,t):e==="mathml"?At.createElementNS(jd,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$o.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=$o.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vd=Symbol("_vtc");function Wd(t,e,n){const r=t[Vd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jo=Symbol("_vod"),zd=Symbol("_vsh"),Kd=Symbol(""),qd=/(^|;)\s*display\s*:/;function Gd(t,e,n){const r=t.style,s=pe(n);let i=!1;if(n&&!s){if(e)if(pe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&kr(r,a,"")}else for(const o in e)n[o]==null&&kr(r,o,"");for(const o in n)o==="display"&&(i=!0),kr(r,o,n[o])}else if(s){if(e!==n){const o=r[Kd];o&&(n+=";"+o),r.cssText=n,i=qd.test(n)}}else e&&t.removeAttribute("style");jo in t&&(t[jo]=i?r.display:"",t[zd]&&(r.display="none"))}const Ho=/\s*!important$/;function kr(t,e,n){if(F(n))n.forEach(r=>kr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jd(t,e);Ho.test(n)?t.setProperty(Rn(r),n.replace(Ho,""),"important"):t[r]=n}}const Vo=["Webkit","Moz","ms"],Ls={};function Jd(t,e){const n=Ls[e];if(n)return n;let r=nt(e);if(r!=="filter"&&r in t)return Ls[e]=r;r=rs(r);for(let s=0;s<Vo.length;s++){const i=Vo[s]+r;if(i in t)return Ls[e]=i}return e}const Wo="http://www.w3.org/1999/xlink";function Xd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wo,e.slice(6,e.length)):t.setAttributeNS(Wo,e,n);else{const i=Xu(e);n==null||i&&!lc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Yd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=lc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function at(t,e,n,r){t.addEventListener(e,n,r)}function Qd(t,e,n,r){t.removeEventListener(e,n,r)}const zo=Symbol("_vei");function Zd(t,e,n,r,s=null){const i=t[zo]||(t[zo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=eh(e);if(r){const l=i[e]=rh(r,s);at(t,a,l,c)}else o&&(Qd(t,a,o,c),i[e]=void 0)}}const Ko=/(?:Once|Passive|Capture)$/;function eh(t){let e;if(Ko.test(t)){e={};let r;for(;r=t.match(Ko);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let Ms=0;const th=Promise.resolve(),nh=()=>Ms||(th.then(()=>Ms=0),Ms=Date.now());function rh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;We(sh(r,n.value),e,5,[r])};return n.value=t,n.attached=nh(),n}function sh(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ih=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Wd(t,r,l):e==="style"?Gd(t,n,r):ts(e)?Pi(e)||Zd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oh(t,e,r,l))?Yd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xd(t,e,r,l))};function oh(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qo(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qo(e)&&pe(n)?!1:e in t}const Ut=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Tr(e,n):e};function ah(t){t.target.composing=!0}function Go(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fe=Symbol("_assign"),Kr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Fe]=Ut(s);const i=r||s.props&&s.props.type==="number";at(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Fr(a)),t[Fe](a)}),n&&at(t,"change",()=>{t.value=t.value.trim()}),e||(at(t,"compositionstart",ah),at(t,"compositionend",Go),at(t,"change",Go))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Fe]=Ut(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Fr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},ch={deep:!0,created(t,e,n){t[Fe]=Ut(n),at(t,"change",()=>{const r=t._modelValue,s=bn(t),i=t.checked,o=t[Fe];if(F(r)){const a=xi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Tn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(cl(t,i))})},mounted:Jo,beforeUpdate(t,e,n){t[Fe]=Ut(n),Jo(t,e,n)}};function Jo(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=xi(e,r.props.value)>-1:Tn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Qt(e,cl(t,!0)))}const lh={created(t,{value:e},n){t.checked=Qt(e,n.props.value),t[Fe]=Ut(n),at(t,"change",()=>{t[Fe](bn(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Fe]=Ut(r),e!==n&&(t.checked=Qt(e,r.props.value))}},al={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Tn(e);at(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fr(bn(o)):bn(o));t[Fe](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,os(()=>{t._assigning=!1})}),t[Fe]=Ut(r)},mounted(t,{value:e,modifiers:{number:n}}){Xo(t,e)},beforeUpdate(t,e,n){t[Fe]=Ut(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Xo(t,e)}};function Xo(t,e,n){const r=t.multiple,s=F(e);if(!(r&&!s&&!Tn(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],c=bn(a);if(r)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(u=>String(u)===String(c)):a.selected=xi(e,c)>-1}else a.selected=e.has(c);else if(Qt(bn(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bn(t){return"_value"in t?t._value:t.value}function cl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uh={created(t,e,n){Sr(t,e,n,null,"created")},mounted(t,e,n){Sr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Sr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Sr(t,e,n,r,"updated")}};function fh(t,e){switch(t){case"SELECT":return al;case"TEXTAREA":return Kr;default:switch(e){case"checkbox":return ch;case"radio":return lh;default:return Kr}}}function Sr(t,e,n,r,s){const o=fh(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const dh=["ctrl","shift","alt","meta"],hh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dh.some(n=>t[`${n}Key`]&&!e.includes(n))},li=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=hh[e[o]];if(a&&a(s,e))return}return t(s,...i)})},ph=_e({patchProp:ih},Hd);let Yo;function mh(){return Yo||(Yo=vd(ph))}const gh=(...t)=>{const e=mh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yh(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,_h(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _h(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yh(t){return pe(t)?document.querySelector(t):t}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof document<"u";function vh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Us(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ke(s)?s.map(t):t(s)}return n}const Hn=()=>{},Ke=Array.isArray,ll=/#/g,bh=/&/g,Eh=/\//g,wh=/=/g,Ih=/\?/g,ul=/\+/g,Sh=/%5B/g,Ah=/%5D/g,fl=/%5E/g,Th=/%60/g,dl=/%7B/g,Rh=/%7C/g,hl=/%7D/g,Ch=/%20/g;function Gi(t){return encodeURI(""+t).replace(Rh,"|").replace(Sh,"[").replace(Ah,"]")}function Ph(t){return Gi(t).replace(dl,"{").replace(hl,"}").replace(fl,"^")}function ui(t){return Gi(t).replace(ul,"%2B").replace(Ch,"+").replace(ll,"%23").replace(bh,"%26").replace(Th,"`").replace(dl,"{").replace(hl,"}").replace(fl,"^")}function Oh(t){return ui(t).replace(wh,"%3D")}function kh(t){return Gi(t).replace(ll,"%23").replace(Ih,"%3F")}function Nh(t){return t==null?"":kh(t).replace(Eh,"%2F")}function Xn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const xh=/\/$/,Dh=t=>t.replace(xh,"");function Fs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Fh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Xn(o)}}function Lh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&En(e.matched[r],n.matched[s])&&pl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function En(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Uh(t[n],e[n]))return!1;return!0}function Uh(t,e){return Ke(t)?Qo(t,e):Ke(e)?Qo(e,t):t===e}function Qo(t,e){return Ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Fh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));const Bs="";function Bh(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dh(t)}const $h=/^[^#]+#/;function jh(t,e){return t.replace($h,"#")+e}function Hh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Vh=()=>({left:window.scrollX,top:window.scrollY});function Wh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zo(t,e){return(history.state?history.state.position-e:-1)+t}const fi=new Map;function zh(t,e){fi.set(t,e)}function Kh(t){const e=fi.get(t);return fi.delete(t),e}function qh(t=""){let e=[],n=[Bs],r=0;t=Bh(t);function s(a){r++,r!==n.length&&n.splice(r),n.push(a)}function i(a,c,{direction:l,delta:u}){const f={direction:l,delta:u,type:Yn.pop};for(const p of e)p(a,c,f)}const o={location:Bs,state:{},base:t,createHref:jh.bind(null,t),replace(a){n.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],n=[Bs],r=0},go(a,c=!0){const l=this.location,u=a<0?qr.back:qr.forward;r=Math.max(0,Math.min(r+a,n.length-1)),c&&i(this.location,l,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function Gh(t){return typeof t=="string"||t&&typeof t=="object"}function ml(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gl=Symbol("");var ea;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ea||(ea={}));function wn(t,e){return ce(new Error,{type:t,[gl]:!0},e)}function ot(t,e){return t instanceof Error&&gl in t&&(e==null||!!(t.type&e))}const ta="[^/]+?",Jh={sensitive:!1,strict:!1,start:!0,end:!0},Xh=/[.+*?^${}()[\]/\\]/g;function Yh(t,e){const n=ce({},Jh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Xh,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:b,optional:x,regexp:R}=p;i.push({name:_,repeatable:b,optional:x});const O=R||ta;if(O!==ta){g+=10;try{new RegExp(`(${O})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+j.message)}}let D=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(D=x&&l.length<2?`(?:/${D})`:"/"+D),x&&(D+="?"),s+=D,g+=20,x&&(g+=-8),b&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:b,optional:x}=g,R=_ in l?l[_]:"";if(Ke(R)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=Ke(R)?R.join("/"):R;if(!O)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Qh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Zh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Qh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(na(r))return 1;if(na(s))return-1}return s.length-r.length}function na(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ep={type:0,value:""},tp=/[a-zA-Z0-9_]/;function np(t){if(!t)return[[]];if(t==="/")return[[ep]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:tp.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function rp(t,e,n){const r=Yh(np(t.path),n),s=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sp(t,e){const n=[],r=new Map;e=ia({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const g=!p,_=ip(u);_.aliasOf=p&&p.record;const b=ia(e,u),x=[_];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of D)x.push(ce({},_,{components:p?p.record.components:_.components,path:j,aliasOf:p?p.record:_}))}let R,O;for(const D of x){const{path:j}=D;if(f&&j[0]!=="/"){const W=f.record.path,$=W[W.length-1]==="/"?"":"/";D.path=f.record.path+(j&&$+j)}if(R=rp(D,f,b),p?p.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),g&&u.name&&!sa(R)&&o(u.name)),_.children){const W=_.children;for(let $=0;$<W.length;$++)i(W[$],R,p&&p.children[$])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return O?()=>{o(O)}:Hn}function o(u){if(ml(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Zh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!_l(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!sa(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},_,b;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw wn(1,{location:u});b=p.record.name,g=ce(ra(f.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&ra(u.params,p.keys.map(O=>O.name))),_=p.stringify(g)}else if(u.path!=null)_=u.path,p=n.find(O=>O.re.test(_)),p&&(g=p.parse(_),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(O=>O.re.test(f.path)),!p)throw wn(1,{location:u,currentLocation:f});b=p.record.name,g=ce({},f.params,u.params),_=p.stringify(g)}const x=[];let R=p;for(;R;)x.unshift(R.record),R=R.parent;return{name:b,path:_,params:g,matched:x,meta:ap(x)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ra(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ip(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:op(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function op(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function sa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ap(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function ia(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function _l(t,e){return e.children.some(n=>n===t||_l(t,n))}function cp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ul," "),o=i.indexOf("="),a=Xn(o<0?i:i.slice(0,o)),c=o<0?null:Xn(i.slice(o+1));if(a in e){let l=e[a];Ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function oa(t){let e="";for(let n in t){const r=t[n];if(n=Oh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&ui(i)):[r&&ui(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function lp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const up=Symbol(""),aa=Symbol(""),ms=Symbol(""),yl=Symbol(""),di=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(wn(4,{from:n,to:e})):p instanceof Error?c(p):Gh(p)?c(wn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function $s(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fp(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Tt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=vh(u)?u.default:u;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Tt(g,n,r,o,a,s)()}))}}return i}function fp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ca(t){const e=ze(ms),n=ze(yl),r=Ae(()=>{const c=ht(t.to);return e.resolve(c)}),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(En.bind(null,u));if(p>-1)return p;const g=la(c[l-2]);return l>1&&la(u)===g&&f[f.length-1].path!==g?f.findIndex(En.bind(null,c[l-2])):p}),i=Ae(()=>s.value>-1&&mp(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&pl(n.params,r.value.params));function a(c={}){return pp(c)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Hn):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const dp=$c({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ca,setup(t,{slots:e}){const n=sr(ca(t)),{options:r}=ze(ms),s=Ae(()=>({[ua(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ua(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ol("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hp=dp;function pp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function la(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ua=(t,e,n)=>t??e??n,gp=$c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ze(di),s=Ae(()=>t.route||r.value),i=ze(aa,0),o=Ae(()=>{let l=ht(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);Pr(aa,Ae(()=>o.value+1)),Pr(up,a),Pr(di,s);const c=he();return Bn(()=>[c.value,a.value,t.name],([l,u,f],[p,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!En(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return fa(n.default,{Component:p,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,x=ol(p,ce({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return fa(n.default,{Component:x,route:l})||x}}});function fa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _p=gp;function yp(t){const e=sp(t.routes,t),n=t.parseQuery||cp,r=t.stringifyQuery||oa,s=t.history,i=xn(),o=xn(),a=xn(),c=wf(vt);let l=vt;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Us.bind(null,E=>""+E),f=Us.bind(null,Nh),p=Us.bind(null,Xn);function g(E,k){let C,L;return ml(E)?(C=e.getRecordMatcher(E),L=k):L=E,e.addRoute(L,C)}function _(E){const k=e.getRecordMatcher(E);k&&e.removeRoute(k)}function b(){return e.getRoutes().map(E=>E.record)}function x(E){return!!e.getRecordMatcher(E)}function R(E,k){if(k=ce({},k||c.value),typeof E=="string"){const h=Fs(n,E,k.path),m=e.resolve({path:h.path},k),w=s.createHref(h.fullPath);return ce(h,m,{params:p(m.params),hash:Xn(h.hash),redirectedFrom:void 0,href:w})}let C;if(E.path!=null)C=ce({},E,{path:Fs(n,E.path,k.path).path});else{const h=ce({},E.params);for(const m in h)h[m]==null&&delete h[m];C=ce({},E,{params:f(h)}),k.params=f(k.params)}const L=e.resolve(C,k),ee=E.hash||"";L.params=u(p(L.params));const ue=Lh(r,ce({},E,{hash:Ph(ee),path:L.path})),d=s.createHref(ue);return ce({fullPath:ue,hash:ee,query:r===oa?lp(E.query):E.query||{}},L,{redirectedFrom:void 0,href:d})}function O(E){return typeof E=="string"?Fs(n,E,c.value.path):ce({},E)}function D(E,k){if(l!==E)return wn(8,{from:k,to:E})}function j(E){return oe(E)}function W(E){return j(ce(O(E),{replace:!0}))}function $(E){const k=E.matched[E.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let L=typeof C=="function"?C(E):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=O(L):{path:L},L.params={}),ce({query:E.query,hash:E.hash,params:L.path!=null?{}:E.params},L)}}function oe(E,k){const C=l=R(E),L=c.value,ee=E.state,ue=E.force,d=E.replace===!0,h=$(C);if(h)return oe(ce(O(h),{state:typeof h=="object"?ce({},ee,h.state):ee,force:ue,replace:d}),k||C);const m=C;m.redirectedFrom=k;let w;return!ue&&Mh(r,L,C)&&(w=wn(16,{to:m,from:L}),Ge(L,L,!0,!1)),(w?Promise.resolve(w):le(m,L)).catch(y=>ot(y)?ot(y,2)?y:_t(y):Z(y,m,L)).then(y=>{if(y){if(ot(y,2))return oe(ce({replace:d},O(y.to),{state:typeof y.to=="object"?ce({},ee,y.to.state):ee,force:ue}),k||m)}else y=ke(m,L,!0,d,ee);return ve(m,L,y),y})}function q(E,k){const C=D(E,k);return C?Promise.reject(C):Promise.resolve()}function K(E){const k=on.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(E):E()}function le(E,k){let C;const[L,ee,ue]=vp(E,k);C=$s(L.reverse(),"beforeRouteLeave",E,k);for(const h of L)h.leaveGuards.forEach(m=>{C.push(Tt(m,E,k))});const d=q.bind(null,E,k);return C.push(d),be(C).then(()=>{C=[];for(const h of i.list())C.push(Tt(h,E,k));return C.push(d),be(C)}).then(()=>{C=$s(ee,"beforeRouteUpdate",E,k);for(const h of ee)h.updateGuards.forEach(m=>{C.push(Tt(m,E,k))});return C.push(d),be(C)}).then(()=>{C=[];for(const h of ue)if(h.beforeEnter)if(Ke(h.beforeEnter))for(const m of h.beforeEnter)C.push(Tt(m,E,k));else C.push(Tt(h.beforeEnter,E,k));return C.push(d),be(C)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),C=$s(ue,"beforeRouteEnter",E,k,K),C.push(d),be(C))).then(()=>{C=[];for(const h of o.list())C.push(Tt(h,E,k));return C.push(d),be(C)}).catch(h=>ot(h,8)?h:Promise.reject(h))}function ve(E,k,C){a.list().forEach(L=>K(()=>L(E,k,C)))}function ke(E,k,C,L,ee){const ue=D(E,k);if(ue)return ue;const d=k===vt,h=ln?history.state:{};C&&(L||d?s.replace(E.fullPath,ce({scroll:d&&h&&h.scroll},ee)):s.push(E.fullPath,ee)),c.value=E,Ge(E,k,C,d),_t()}let Le;function Ht(){Le||(Le=s.listen((E,k,C)=>{if(!_r.listening)return;const L=R(E),ee=$(L);if(ee){oe(ce(ee,{replace:!0}),L).catch(Hn);return}l=L;const ue=c.value;ln&&zh(Zo(ue.fullPath,C.delta),Vh()),le(L,ue).catch(d=>ot(d,12)?d:ot(d,2)?(oe(d.to,L).then(h=>{ot(h,20)&&!C.delta&&C.type===Yn.pop&&s.go(-1,!1)}).catch(Hn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Z(d,L,ue))).then(d=>{d=d||ke(L,ue,!1),d&&(C.delta&&!ot(d,8)?s.go(-C.delta,!1):C.type===Yn.pop&&ot(d,20)&&s.go(-1,!1)),ve(L,ue,d)}).catch(Hn)}))}let Me=xn(),Q=xn(),te;function Z(E,k,C){_t(E);const L=Q.list();return L.length?L.forEach(ee=>ee(E,k,C)):console.error(E),Promise.reject(E)}function it(){return te&&c.value!==vt?Promise.resolve():new Promise((E,k)=>{Me.add([E,k])})}function _t(E){return te||(te=!E,Ht(),Me.list().forEach(([k,C])=>E?C(E):k()),Me.reset()),E}function Ge(E,k,C,L){const{scrollBehavior:ee}=t;if(!ln||!ee)return Promise.resolve();const ue=!C&&Kh(Zo(E.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return os().then(()=>ee(E,k,ue)).then(d=>d&&Wh(d)).catch(d=>Z(d,E,k))}const Ce=E=>s.go(E);let sn;const on=new Set,_r={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:x,getRoutes:b,resolve:R,options:t,push:j,replace:W,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:it,install(E){const k=this;E.component("RouterLink",hp),E.component("RouterView",_p),E.config.globalProperties.$router=k,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(c)}),ln&&!sn&&c.value===vt&&(sn=!0,j(s.location).catch(ee=>{}));const C={};for(const ee in vt)Object.defineProperty(C,ee,{get:()=>c.value[ee],enumerable:!0});E.provide(ms,k),E.provide(yl,Ac(C)),E.provide(di,c);const L=E.unmount;on.add(E),E.unmount=function(){on.delete(E),on.size<1&&(l=vt,Le&&Le(),Le=null,c.value=vt,sn=!1,te=!1),L()}}};function be(E){return E.reduce((k,C)=>k.then(()=>K(C)),Promise.resolve())}return _r}function vp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>En(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>En(l,c))||s.push(c))}return[n,r,s]}function vl(){return ze(ms)}var bp=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let bl;const gs=t=>bl=t,El=Symbol();function hi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vn||(Vn={}));function Ep(){const t=dc(!0),e=t.run(()=>he({}));let n=[],r=[];const s=$i({install(i){gs(s),s._a=i,i.provide(El,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!bp?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const wl=()=>{};function da(t,e,n,r=wl){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&hc()&&Zu(s),s}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const wp=t=>t();function pi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];hi(s)&&hi(r)&&t.hasOwnProperty(n)&&!me(r)&&!Xt(r)?t[n]=pi(s,r):t[n]=r}return t}const Ip=Symbol();function Sp(t){return!hi(t)||!t.hasOwnProperty(Ip)}const{assign:wt}=Object;function Ap(t){return!!(me(t)&&t.effect)}function Tp(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Af(n.state.value[t]);return wt(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=$i(Ae(()=>{gs(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return c=Il(t,l,e,n,r,!0),c}function Il(t,e,n={},r,s,i){let o;const a=wt({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],g;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),he({});let b;function x(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[t]),K={type:Vn.patchFunction,storeId:t,events:g}):(pi(r.state.value[t],q),K={type:Vn.patchObject,payload:q,storeId:t,events:g});const le=b=Symbol();os().then(()=>{b===le&&(l=!0)}),u=!0,cn(f,K,r.state.value[t])}const R=i?function(){const{state:K}=n,le=K?K():{};this.$patch(ve=>{wt(ve,le)})}:wl;function O(){o.stop(),f=[],p=[],r._s.delete(t)}function D(q,K){return function(){gs(r);const le=Array.from(arguments),ve=[],ke=[];function Le(Q){ve.push(Q)}function Ht(Q){ke.push(Q)}cn(p,{args:le,name:q,store:W,after:Le,onError:Ht});let Me;try{Me=K.apply(this&&this.$id===t?this:W,le)}catch(Q){throw cn(ke,Q),Q}return Me instanceof Promise?Me.then(Q=>(cn(ve,Q),Q)).catch(Q=>(cn(ke,Q),Promise.reject(Q))):(cn(ve,Me),Me)}}const j={_p:r,$id:t,$onAction:da.bind(null,p),$patch:x,$reset:R,$subscribe(q,K={}){const le=da(f,q,K.detached,()=>ve()),ve=o.run(()=>Bn(()=>r.state.value[t],ke=>{(K.flush==="sync"?u:l)&&q({storeId:t,type:Vn.direct,events:g},ke)},wt({},c,K)));return le},$dispose:O},W=sr(j);r._s.set(t,W);const oe=(r._a&&r._a.runWithContext||wp)(()=>r._e.run(()=>(o=dc()).run(e)));for(const q in oe){const K=oe[q];if(me(K)&&!Ap(K)||Xt(K))i||(_&&Sp(K)&&(me(K)?K.value=_[q]:pi(K,_[q])),r.state.value[t][q]=K);else if(typeof K=="function"){const le=D(q,K);oe[q]=le,a.actions[q]=K}}return wt(W,oe),wt(Y(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:q=>{x(K=>{wt(K,q)})}}),r._p.forEach(q=>{wt(W,o.run(()=>q({store:W,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(W.$state,_),l=!0,u=!0,W}function Rp(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const l=hd();return a=a||(l?ze(El,null):null),a&&gs(a),a=bl,a._s.has(r)||(i?Il(r,e,s,a):Tp(r,s,a)),a._s.get(r)}return o.$id=r,o}const _s=Rp("user",()=>({userInfo:he({token:"",userData:{}})}),{persist:!0}),rt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Sl=t=>(ls("data-v-e7c778a3"),t=t(),us(),t),Cp={class:"burgerDropdownContent"},Pp={class:"navList"},Op={class:"nav"},kp=Sl(()=>U("span",{class:"delete"},"Remove all tasks",-1)),Np=[kp],xp=Sl(()=>U("span",{class:"exit"},"Logout",-1)),Dp=[xp],Lp={__name:"BurgerMenu",props:{active:Boolean},emits:["onChangePage","removeAllTasks","userLogout"],setup(t,{emit:e}){const n=vl(),r=_s(),s=()=>{r.userInfo.token="",r.userInfo.userData="",n.push("/")};return(i,o)=>(we(),Re("div",{class:De(["burgerDropdown",{active:t.active}])},[U("div",Cp,[U("nav",null,[U("ul",Pp,[U("li",{onClick:o[0]||(o[0]=a=>i.$emit("onChangePage","daily"))},"Daily tasks"),U("li",{onClick:o[1]||(o[1]=a=>i.$emit("onChangePage","important"))},"Important tasks")])]),U("nav",null,[U("ul",Op,[U("li",{onClick:o[2]||(o[2]=a=>i.$emit("removeAllTasks"))},Np),U("li",{onClick:s},Dp)])])])],2))}},Mp=rt(Lp,[["__scopeId","data-v-e7c778a3"]]),ys=t=>(ls("data-v-537803be"),t=t(),us(),t),Up={class:"headerWrap"},Fp=ys(()=>U("span",{class:"line"},null,-1)),Bp=ys(()=>U("span",{class:"line"},null,-1)),$p=ys(()=>U("span",{class:"line"},null,-1)),jp=[Fp,Bp,$p],Hp=ys(()=>U("h1",{class:"title"},"Todo website",-1)),Vp={__name:"Header",props:{changeCurrentPage:Function,removeAllTasks:Function},setup(t){const e=he(!1),n=()=>{e.value=!e.value},r=o=>{i.changeCurrentPage(o),e.value=!1},s=o=>{i.removeAllTasks(o),e.value=!1},i=t;return(o,a)=>(we(),Re(He,null,[U("div",Up,[U("div",{class:De(["burgerMenu",{active:e.value}]),onClick:n},jp,2),Hp]),fe(Mp,{active:e.value,onOnChangePage:r,onRemoveAllTasks:s},null,8,["active"])],64))}},Wp=rt(Vp,[["__scopeId","data-v-537803be"]]),zp="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%201L5.4%2011.5L1%204.11111'%20stroke='%23D19BFC'%20stroke-width='2'/%3e%3c/svg%3e",Kp={class:"border"},qp=["src"],Gp={__name:"Checkbox",props:{taskStatus:Boolean},setup(t){return(e,n)=>(we(),Re("div",Kp,[U("img",{src:ht(zp),alt:"ok",class:De({visible:t.taskStatus})},null,10,qp)]))}},Jp=rt(Gp,[["__scopeId","data-v-0c7613d6"]]),Al="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L12.9401%2012.94'%20stroke='%23FF5555'%20stroke-width='2'/%3e%3cpath%20d='M13%201.06001L1.05994%2013'%20stroke='%23FF5555'%20stroke-width='2'/%3e%3c/svg%3e",Xp={class:"leftSide"},Yp=["src"],Qp={__name:"ListItem",props:{taskText:String,indx:Number,taskStatus:Boolean},emits:["removeTask","changeTaskStatus"],setup(t,{emit:e}){const n=e,r=()=>{n("changeTaskStatus")},s=he(!1);return(i,o)=>(we(),Re("div",{class:"listItem",onMouseover:o[1]||(o[1]=a=>s.value=!0),onMouseleave:o[2]||(o[2]=a=>s.value=!1)},[U("div",Xp,[fe(Jp,{taskStatus:t.taskStatus,onClick:r},null,8,["taskStatus"]),U("p",{class:De(["itemText",{overline:t.taskStatus}])},Br(t.taskText),3)]),U("img",{src:ht(Al),alt:"close",class:De(["closeIcon",{showIcon:s.value||t.taskStatus}]),onClick:o[0]||(o[0]=a=>i.$emit("removeTask"))},null,10,Yp)],32))}},Zp=rt(Qp,[["__scopeId","data-v-f4a9f00a"]]),em={class:"container"},tm={class:"listContent"},nm={class:"list"},rm={__name:"List",props:{list:Array,removeTask:Function,currentPage:String,changeTaskStatus:Function},setup(t){return(e,n)=>(we(),Re("div",em,[U("div",tm,[U("h3",{class:De(["title",{active:e.$props.currentPage==="daily"}])}," Daily tasks ",2),U("h3",{class:De(["title",{active:e.$props.currentPage==="important"}])},"Important tasks",2),U("ul",nm,[(we(!0),Re(He,null,sd(t.list,r=>(we(),Re("li",{key:r.id},[fe(Zp,{taskText:r.task,taskStatus:r.isDone,onRemoveTask:s=>e.$props.removeTask(r.id),onChangeTaskStatus:s=>e.$props.changeTaskStatus(r.id)},null,8,["taskText","taskStatus","onRemoveTask","onChangeTaskStatus"])]))),128))])])]))}},sm=rt(rm,[["__scopeId","data-v-05e31b8e"]]),im={class:"buttonWrap"},om={class:"buttonText"},am={__name:"Button",props:{text:String},setup(t){return(e,n)=>(we(),Re("div",im,[U("p",om,Br(t.text),1)]))}},vs=t=>(ls("data-v-ee83dcbb"),t=t(),us(),t),cm={class:"topContent"},lm=["src"],um={class:"topContent"},fm=vs(()=>U("option",{value:"",disabled:"",selected:""},"Select...",-1)),dm=vs(()=>U("option",{value:"daily"},"Daily",-1)),hm=vs(()=>U("option",{value:"important"},"Important",-1)),pm=[fm,dm,hm],mm=vs(()=>U("button",{type:"submit",class:"buttonWrap"},[U("p",{class:"buttonText"}," Add task ")],-1)),gm={__name:"Popup",props:{isActive:Boolean,addTask:Function},emits:["onClick"],setup(t,{emit:e}){const n=he({task:"",type:"",isDone:!1}),r=()=>{n.value.task&&n.value.type&&(i.addTask(n.value),n.value={task:"",type:""},s("onClick"))},s=e,i=t;return(o,a)=>(we(),Re("div",{class:De(["container",{active:t.isActive}]),onClick:a[4]||(a[4]=c=>o.$emit("onClick"))},[U("div",{class:"popupContent",onClick:a[3]||(a[3]=li(()=>{},["stop"]))},[U("div",cm,[U("img",{src:ht(Al),alt:"close",class:"closeIcon",onClick:a[0]||(a[0]=c=>o.$emit("onClick"))},null,8,lm),U("form",{onSubmit:li(r,["prevent"]),class:"formContainer"},[U("div",um,[Vr(U("input",{type:"text",class:"inputText",placeholder:"Type task...","onUpdate:modelValue":a[1]||(a[1]=c=>n.value.task=c)},null,512),[[Kr,n.value.task]]),Vr(U("select",{class:"taskSelect","onUpdate:modelValue":a[2]||(a[2]=c=>n.value.type=c)},pm,512),[[al,n.value.type]])]),mm],32)])])],2))}},_m=rt(gm,[["__scopeId","data-v-ee83dcbb"]]);function Tl(t,e){return function(){return t.apply(e,arguments)}}const{toString:ym}=Object.prototype,{getPrototypeOf:Ji}=Object,bs=(t=>e=>{const n=ym.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=t=>(t=t.toLowerCase(),e=>bs(e)===t),Es=t=>e=>typeof e===t,{isArray:Cn}=Array,Qn=Es("undefined");function vm(t){return t!==null&&!Qn(t)&&t.constructor!==null&&!Qn(t.constructor)&&Be(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Rl=st("ArrayBuffer");function bm(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Rl(t.buffer),e}const Em=Es("string"),Be=Es("function"),Cl=Es("number"),ws=t=>t!==null&&typeof t=="object",wm=t=>t===!0||t===!1,Nr=t=>{if(bs(t)!=="object")return!1;const e=Ji(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Im=st("Date"),Sm=st("File"),Am=st("Blob"),Tm=st("FileList"),Rm=t=>ws(t)&&Be(t.pipe),Cm=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Be(t.append)&&((e=bs(t))==="formdata"||e==="object"&&Be(t.toString)&&t.toString()==="[object FormData]"))},Pm=st("URLSearchParams"),Om=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Cn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Pl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ol=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kl=t=>!Qn(t)&&t!==Ol;function mi(){const{caseless:t}=kl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Pl(e,s)||s;Nr(e[i])&&Nr(r)?e[i]=mi(e[i],r):Nr(r)?e[i]=mi({},r):Cn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&or(arguments[r],n);return e}const km=(t,e,n,{allOwnKeys:r}={})=>(or(e,(s,i)=>{n&&Be(s)?t[i]=Tl(s,n):t[i]=s},{allOwnKeys:r}),t),Nm=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),xm=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Dm=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ji(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Lm=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Mm=t=>{if(!t)return null;if(Cn(t))return t;let e=t.length;if(!Cl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Um=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ji(Uint8Array)),Fm=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Bm=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},$m=st("HTMLFormElement"),jm=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ha=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Hm=st("RegExp"),Nl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};or(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Vm=t=>{Nl(t,(e,n)=>{if(Be(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Be(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wm=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Cn(t)?r(t):r(String(t).split(e)),n},zm=()=>{},Km=(t,e)=>(t=+t,Number.isFinite(t)?t:e),js="abcdefghijklmnopqrstuvwxyz",pa="0123456789",xl={DIGIT:pa,ALPHA:js,ALPHA_DIGIT:js+js.toUpperCase()+pa},qm=(t=16,e=xl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Gm(t){return!!(t&&Be(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Jm=t=>{const e=new Array(10),n=(r,s)=>{if(ws(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Cn(r)?[]:{};return or(r,(o,a)=>{const c=n(o,s+1);!Qn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Xm=st("AsyncFunction"),Ym=t=>t&&(ws(t)||Be(t))&&Be(t.then)&&Be(t.catch),v={isArray:Cn,isArrayBuffer:Rl,isBuffer:vm,isFormData:Cm,isArrayBufferView:bm,isString:Em,isNumber:Cl,isBoolean:wm,isObject:ws,isPlainObject:Nr,isUndefined:Qn,isDate:Im,isFile:Sm,isBlob:Am,isRegExp:Hm,isFunction:Be,isStream:Rm,isURLSearchParams:Pm,isTypedArray:Um,isFileList:Tm,forEach:or,merge:mi,extend:km,trim:Om,stripBOM:Nm,inherits:xm,toFlatObject:Dm,kindOf:bs,kindOfTest:st,endsWith:Lm,toArray:Mm,forEachEntry:Fm,matchAll:Bm,isHTMLForm:$m,hasOwnProperty:ha,hasOwnProp:ha,reduceDescriptors:Nl,freezeMethods:Vm,toObjectSet:Wm,toCamelCase:jm,noop:zm,toFiniteNumber:Km,findKey:Pl,global:Ol,isContextDefined:kl,ALPHABET:xl,generateString:qm,isSpecCompliantForm:Gm,toJSONObject:Jm,isAsyncFn:Xm,isThenable:Ym};function J(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Dl=J.prototype,Ll={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ll[t]={value:t}});Object.defineProperties(J,Ll);Object.defineProperty(Dl,"isAxiosError",{value:!0});J.from=(t,e,n,r,s,i)=>{const o=Object.create(Dl);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),J.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Qm=null;function gi(t){return v.isPlainObject(t)||v.isArray(t)}function Ml(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function ma(t,e,n){return t?t.concat(e).map(function(s,i){return s=Ml(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Zm(t){return v.isArray(t)&&!t.some(gi)}const eg=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Is(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,x){return!v.isUndefined(x[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!c&&v.isBlob(_))throw new J("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,b,x){let R=_;if(_&&!x&&typeof _=="object"){if(v.endsWith(b,"{}"))b=r?b:b.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&Zm(_)||(v.isFileList(_)||v.endsWith(b,"[]"))&&(R=v.toArray(_)))return b=Ml(b),R.forEach(function(D,j){!(v.isUndefined(D)||D===null)&&e.append(o===!0?ma([b],j,i):o===null?b:b+"[]",l(D))}),!1}return gi(_)?!0:(e.append(ma(x,b,i),l(_)),!1)}const f=[],p=Object.assign(eg,{defaultVisitor:u,convertValue:l,isVisitable:gi});function g(_,b){if(!v.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(_),v.forEach(_,function(R,O){(!(v.isUndefined(R)||R===null)&&s.call(e,R,v.isString(O)?O.trim():O,b,p))===!0&&g(R,b?b.concat(O):[O])}),f.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return g(t),e}function ga(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Xi(t,e){this._pairs=[],t&&Is(t,this,e)}const Ul=Xi.prototype;Ul.append=function(e,n){this._pairs.push([e,n])};Ul.toString=function(e){const n=e?function(r){return e.call(this,r,ga)}:ga;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function tg(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fl(t,e,n){if(!e)return t;const r=n&&n.encode||tg,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new Xi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class _a{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Bl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ng=typeof URLSearchParams<"u"?URLSearchParams:Xi,rg=typeof FormData<"u"?FormData:null,sg=typeof Blob<"u"?Blob:null,ig={isBrowser:!0,classes:{URLSearchParams:ng,FormData:rg,Blob:sg},protocols:["http","https","file","blob","url","data"]},$l=typeof window<"u"&&typeof document<"u",og=(t=>$l&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),ag=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:$l,hasStandardBrowserEnv:og,hasStandardBrowserWebWorkerEnv:ag},Symbol.toStringTag,{value:"Module"})),Ze={...cg,...ig};function lg(t,e){return Is(t,new Ze.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ze.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ug(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function fg(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function jl(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=fg(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(ug(r),s,n,0)}),n}return null}function dg(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const ar={transitional:Bl,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(jl(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return lg(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Is(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),dg(e)):e}],transformResponse:[function(e){const n=this.transitional||ar.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{ar.headers[t]={}});const hg=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pg=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&hg[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ya=Symbol("internals");function Dn(t){return t&&String(t).trim().toLowerCase()}function xr(t){return t===!1||t==null?t:v.isArray(t)?t.map(xr):String(t)}function mg(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const gg=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Hs(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function _g(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function yg(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class $e{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Dn(c);if(!u)throw new Error("header name must be a non-empty string");const f=v.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=xr(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!gg(e)?o(pg(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Dn(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return mg(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Dn(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Hs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Dn(o),o){const a=v.findKey(r,o);a&&(!n||Hs(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Hs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=xr(s),delete n[i];return}const a=e?_g(i):String(i).trim();a!==i&&delete n[i],n[a]=xr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[ya]=this[ya]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Dn(o);r[a]||(yg(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors($e.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods($e);function Vs(t,e){const n=this||ar,r=e||n,s=$e.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Hl(t){return!!(t&&t.__CANCEL__)}function cr(t,e,n){J.call(this,t??"canceled",J.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(cr,J,{__CANCEL__:!0});function vg(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const bg=Ze.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Eg(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function wg(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Vl(t,e){return t&&!Eg(e)?wg(t,e):e}const Ig=Ze.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Sg(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ag(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function va(t,e){let n=0;const r=Ag(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const Tg=typeof XMLHttpRequest<"u",Rg=Tg&&function(t){return new Promise(function(n,r){let s=t.data;const i=$e.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(v.isFormData(s)){if(Ze.hasStandardBrowserEnv||Ze.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[b,...x]=u?u.split(";").map(R=>R.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...x].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",x=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+x))}const p=Vl(t.baseURL,t.url);f.open(t.method.toUpperCase(),Fl(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function g(){if(!f)return;const b=$e.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),R={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};vg(function(D){n(D),l()},function(D){r(D),l()},R),f=null}if("onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(g)},f.onabort=function(){f&&(r(new J("Request aborted",J.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let x=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const R=t.transitional||Bl;t.timeoutErrorMessage&&(x=t.timeoutErrorMessage),r(new J(x,R.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,t,f)),f=null},Ze.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(t)),a||a!==!1&&Ig(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&bg.read(t.xsrfCookieName);b&&i.set(t.xsrfHeaderName,b)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&v.forEach(i.toJSON(),function(x,R){f.setRequestHeader(R,x)}),v.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",va(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",va(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=b=>{f&&(r(!b||b.type?new cr(null,t,f):b),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=Sg(p);if(_&&Ze.protocols.indexOf(_)===-1){r(new J("Unsupported protocol "+_+":",J.ERR_BAD_REQUEST,t));return}f.send(s||null)})},_i={http:Qm,xhr:Rg};v.forEach(_i,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ba=t=>`- ${t}`,Cg=t=>v.isFunction(t)||t===null||t===!1,Wl={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Cg(n)&&(r=_i[(o=String(n)).toLowerCase()],r===void 0))throw new J(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ba).join(`
`):" "+ba(i[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:_i};function Ws(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new cr(null,t)}function Ea(t){return Ws(t),t.headers=$e.from(t.headers),t.data=Vs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Wl.getAdapter(t.adapter||ar.adapter)(t).then(function(r){return Ws(t),r.data=Vs.call(t,t.transformResponse,r),r.headers=$e.from(r.headers),r},function(r){return Hl(r)||(Ws(t),r&&r.response&&(r.response.data=Vs.call(t,t.transformResponse,r.response),r.response.headers=$e.from(r.response.headers))),Promise.reject(r)})}const wa=t=>t instanceof $e?{...t}:t;function In(t,e){e=e||{};const n={};function r(l,u,f){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:f},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,f){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(wa(l),wa(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);v.isUndefined(p)&&f!==a||(n[u]=p)}),n}const zl="1.6.8",Yi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Yi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ia={};Yi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+zl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new J(s(o," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!Ia[o]&&(Ia[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Pg(t,e,n){if(typeof t!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new J("option "+i+" must be "+c,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+i,J.ERR_BAD_OPTION)}}const yi={assertOptions:Pg,validators:Yi},bt=yi.validators;class Yt{constructor(e){this.defaults=e,this.interceptors={request:new _a,response:new _a}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=In(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&yi.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:yi.assertOptions(s,{encode:bt.function,serialize:bt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=$e.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const _=[Ea.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);f<p;)u=u.then(_[f++],_[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const _=a[f++],b=a[f++];try{g=_(g)}catch(x){b.call(this,x);break}}try{u=Ea.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=In(this.defaults,e);const n=Vl(e.baseURL,e.url);return Fl(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Yt.prototype[e]=function(n,r){return this.request(In(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(In(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Yt.prototype[e]=n(),Yt.prototype[e+"Form"]=n(!0)});class Qi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new cr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Qi(function(s){e=s}),cancel:e}}}function Og(t){return function(n){return t.apply(null,n)}}function kg(t){return v.isObject(t)&&t.isAxiosError===!0}const vi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vi).forEach(([t,e])=>{vi[e]=t});function Kl(t){const e=new Yt(t),n=Tl(Yt.prototype.request,e);return v.extend(n,Yt.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Kl(In(t,s))},n}const de=Kl(ar);de.Axios=Yt;de.CanceledError=cr;de.CancelToken=Qi;de.isCancel=Hl;de.VERSION=zl;de.toFormData=Is;de.AxiosError=J;de.Cancel=de.CanceledError;de.all=function(e){return Promise.all(e)};de.spread=Og;de.isAxiosError=kg;de.mergeConfig=In;de.AxiosHeaders=$e;de.formToJSON=t=>jl(v.isHTMLForm(t)?new FormData(t):t);de.getAdapter=Wl.getAdapter;de.HttpStatusCode=vi;de.default=de;const Ng="https://vue-todo-list-5d358-default-rtdb.europe-west1.firebasedatabase.app/",lr=de.create({baseURL:`${Ng}`,timeout:5e3,headers:{"Content-Type":"application/json"}}),ur=()=>_s().userInfo.userData.uid,xg=()=>{const t=ur();return lr.get(`${t}/todos.json`)},Dg=()=>{const t=ur();return lr.delete(`${t}/todos.json`)},Lg=t=>{const e=ur();return lr.post(`${e}/todos.json`,{task:t.task,type:t.type,isDone:!1})},Mg=t=>{const e=ur();return lr.delete(`${e}/todos/${t}.json`)},Ug=(t,e)=>{const n=ur();return lr.patch(`${n}/todos/${t}.json`,{isDone:e})},Fg={class:"container"},Bg={__name:"MainPage",setup(t){const e=he([]),n=he(!1),r=he("daily"),s=async()=>{const g=(await xg()).data,_=[];for(const b in g)_.push({id:b,task:g[b].task,type:g[b].type,isDone:g[b].isDone});e.value=_},i=async g=>{await Lg(g),s()},o=async g=>{await Mg(g),s()},a=async g=>{const _=e.value.find(b=>b.id===g);if(_){const b=!_.isDone;try{await Ug(g,b),s()}catch(x){console.error("Произошла ошибка",x)}}},c=async()=>{await Dg(),s()},l=g=>{r.value=g},u=()=>{n.value=!1},f=()=>{n.value=!n.value};Wi(()=>{s()});const p=Ae(()=>r.value==="daily"||r.value==="important"?e.value.filter(g=>g.type===r.value):[]);return(g,_)=>(we(),Re("div",Fg,[fe(Wp,{changeCurrentPage:l,removeAllTasks:c}),fe(sm,{list:p.value,removeTask:o,currentPage:r.value,changeTaskStatus:a},null,8,["list","currentPage"]),fe(am,{text:"New task",onClick:f}),fe(_m,{isActive:n.value,onOnClick:u,addTask:i},null,8,["isActive"])]))}},$g=rt(Bg,[["__scopeId","data-v-07034d90"]]),jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB3VTtcdpAEN09Ccf2LzoIHeRIgDCMzYgKAhUYKsBUYFyBSQVABUAF1sQkAzYOSgekA/1KPEanza6CQHx4/N87oxnpbu/Ne2+fDuDNVymf18lvfKnxvPCpCqi+AIQOt2VWzR4BLICof3f/OCwXc1dE0DYhZn88PHgHAc/zH+sMdMM7aT7o8/uQiH6vtj/IeoBB4wjsCwHj53p8P2vvMXQcnTZ/rC4gVpmFyzvX48nMPcQ+ZiZgtgp6cAy+63r+GtAp6oyh1C0AZUKA1vfprLNZt7tAoAHJt05MNnyym2uw56Bj3qXm0rvEZWUy8RZKPkJKDYDCNCFUtsBCe86yNSH1l2gqSTCR6Xqeb0KocU/6iOyBnFMRfSANilpJiQFZN8JqqUx2PH28THpmnwaduC8ahgpbbJM+K+TaigjrLLV3N/nZg63xR16ORMauZ+FfsWdTq7MuIjSV0I1jsQ0IXoCmkwQTmcz8MlK0V7Tgx1ek4KtYVi4WLpLb6iSo7EZDfEWQbMIo2RtFDbDOavvRlMuF3JwHwkPAShzQXZk87SZPW+wB8VWskL6zXM5BBQOWu/g2nWXtiI0KaoasW0vRgPN4OBpRClBsaMRg5c/5JsvviNxnNLWVVf/L0Tr9dAzpl/6AZEWsLLiSYzyDoXVqGlvBjuuAzC4v+/z9K2pGfM8A1fVvyVHbT8eqSiWtLWPPY2ZyORCgDCrD/ujNJJXL8kdyOcBrtXsVvc36B6rVa/z4tgOwAAAAAElFTkSuQmCC",Sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7VTRTcNADH2+AwmpQconNJXIBpQNygSFCegGwATABMAEwASlE5QNWiZokKjgj0q0EhJtjH1J2jRtJP7BUqTE92y/Z/sC/DmjsoNt7B7F1jTB3CCi0DkZfRBHDOpMZsP7XyWs2KAlzmt59SXBiAmPxPySoM0+c1zXAgxE4rkqSyzRvu/ZWtuzAcvT9TZqDZSYnlVMdaBYIXCnsUuALeyEcpAANoOzvN8lt8FHUqjaVl8u8WWadJD5KTkIeogRwtDxePr6lCXbsLYnsgGDB9fCmJsi15/OZgdfeI9cizaDOsXoCi4ax8MDeKZ6kVZpLckS+SorzyhlrGy7KPTdKTDVS/0YaB9W+uQAwc2KX3yadA3etcaIZl+eEKs2Qrn5RYdOnZlHRvbsVr4bwvKkgJGdw0lRsqxRU8I7eWC6ai0y5oFSGT0JDtngcPI97GfBOhSpPCLZxZRGS6lM48VQPOw0YG17PpQsONsrHVKe0Xw3TTKMPOOKqZ26gRaGlzYl9IX6fbZXrnKJ6Vk6BNaC+cVee/WkrxfZ9SJwX+Q8O8VEexJwhMW1PC9evdKfQ9Jo0p9DKKi6S8gcgejJIO58zt4e8W9qP5ijscAN7BKiAAAAAElFTkSuQmCC";var Aa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ql(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Vg;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(t){const e=ql(t);return Gl.encodeByteArray(e,!0)},Jl=function(t){return Wg(t).replace(/\./g,"")},Xl=function(t){try{return Gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=()=>zg().__FIREBASE_DEFAULTS__,qg=()=>{if(typeof process>"u"||typeof Aa>"u")return;const t=Aa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xl(t[1]);return e&&JSON.parse(e)},Zi=()=>{try{return Kg()||qg()||Gg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jg=t=>{var e,n;return(n=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yl=()=>{var t;return(t=Zi())===null||t===void 0?void 0:t.config},Ql=t=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Qg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e_(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function t_(){try{return typeof indexedDB=="object"}catch{return!1}}function n_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=r_,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?s_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function s_(t,e){return t.replace(i_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const i_=/\{\$([^}]+)}/g;function o_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ta(i)&&Ta(o)){if(!Gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ta(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function a_(t,e){const n=new c_(t,e);return n.subscribe.bind(n)}class c_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");l_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zs),s.error===void 0&&(s.error=zs),s.complete===void 0&&(s.complete=zs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(d_(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:f_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function f_(t){return t===zt?void 0:t}function d_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new u_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const p_={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},m_=re.INFO,g_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},__=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=g_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=m_,this._logHandler=__,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const y_=(t,e)=>e.some(n=>t instanceof n);let Ra,Ca;function v_(){return Ra||(Ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b_(){return Ca||(Ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eu=new WeakMap,bi=new WeakMap,tu=new WeakMap,Ks=new WeakMap,eo=new WeakMap;function E_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eu.set(n,t)}).catch(()=>{}),eo.set(e,t),e}function w_(t){if(bi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bi.set(t,e)}let Ei={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I_(t){Ei=t(Ei)}function S_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qs(this),e,...n);return tu.set(r,e.sort?e.sort():[e]),xt(r)}:b_().includes(t)?function(...e){return t.apply(qs(this),e),xt(eu.get(this))}:function(...e){return xt(t.apply(qs(this),e))}}function A_(t){return typeof t=="function"?S_(t):(t instanceof IDBTransaction&&w_(t),y_(t,v_())?new Proxy(t,Ei):t)}function xt(t){if(t instanceof IDBRequest)return E_(t);if(Ks.has(t))return Ks.get(t);const e=A_(t);return e!==t&&(Ks.set(t,e),eo.set(e,t)),e}const qs=t=>eo.get(t);function T_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const R_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],Gs=new Map;function Pa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gs.get(e))return Gs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=C_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||R_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Gs.set(e,i),i}I_(t=>({...t,get:(e,n,r)=>Pa(e,n)||t.get(e,n,r),has:(e,n)=>!!Pa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wi="@firebase/app",Oa="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Zl("@firebase/app"),k_="@firebase/app-compat",N_="@firebase/analytics-compat",x_="@firebase/analytics",D_="@firebase/app-check-compat",L_="@firebase/app-check",M_="@firebase/auth",U_="@firebase/auth-compat",F_="@firebase/database",B_="@firebase/database-compat",$_="@firebase/functions",j_="@firebase/functions-compat",H_="@firebase/installations",V_="@firebase/installations-compat",W_="@firebase/messaging",z_="@firebase/messaging-compat",K_="@firebase/performance",q_="@firebase/performance-compat",G_="@firebase/remote-config",J_="@firebase/remote-config-compat",X_="@firebase/storage",Y_="@firebase/storage-compat",Q_="@firebase/firestore",Z_="@firebase/firestore-compat",ey="firebase",ty="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="[DEFAULT]",ny={[wi]:"fire-core",[k_]:"fire-core-compat",[x_]:"fire-analytics",[N_]:"fire-analytics-compat",[L_]:"fire-app-check",[D_]:"fire-app-check-compat",[M_]:"fire-auth",[U_]:"fire-auth-compat",[F_]:"fire-rtdb",[B_]:"fire-rtdb-compat",[$_]:"fire-fn",[j_]:"fire-fn-compat",[H_]:"fire-iid",[V_]:"fire-iid-compat",[W_]:"fire-fcm",[z_]:"fire-fcm-compat",[K_]:"fire-perf",[q_]:"fire-perf-compat",[G_]:"fire-rc",[J_]:"fire-rc-compat",[X_]:"fire-gcs",[Y_]:"fire-gcs-compat",[Q_]:"fire-fst",[Z_]:"fire-fst-compat","fire-js":"fire-js",[ey]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map,ry=new Map,Si=new Map;function ka(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(Si.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,t);for(const n of Jr.values())ka(n,t);for(const n of ry.values())ka(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dt=new fr("app","Firebase",sy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=ty;function ru(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=Yl()),!n)throw Dt.create("no-options");const i=Jr.get(s);if(i){if(Gr(n,i.options)&&Gr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new h_(s);for(const c of Si.values())o.addComponent(c);const a=new iy(n,r,o);return Jr.set(s,a),a}function oy(t=Ii){const e=Jr.get(t);if(!e&&t===Ii&&Yl())return ru();if(!e)throw Dt.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=ny[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}Zn(new Sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="firebase-heartbeat-database",cy=1,er="firebase-heartbeat-store";let Js=null;function su(){return Js||(Js=T_(ay,cy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Js}async function ly(t){try{const n=(await su()).transaction(er),r=await n.objectStore(er).get(iu(t));return await n.done,r}catch(e){if(e instanceof $t)en.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Na(t,e){try{const r=(await su()).transaction(er,"readwrite");await r.objectStore(er).put(e,iu(t)),await r.done}catch(n){if(n instanceof $t)en.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function iu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=1024,fy=30*24*60*60*1e3;class dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new py(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=fy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xa(),{heartbeatsToSend:r,unsentEntries:s}=hy(this._heartbeatsCache.heartbeats),i=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xa(){return new Date().toISOString().substring(0,10)}function hy(t,e=uy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Da(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Da(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class py{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t_()?n_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ly(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Na(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Na(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Da(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){Zn(new Sn("platform-logger",e=>new P_(e),"PRIVATE")),Zn(new Sn("heartbeat",e=>new dy(e),"PRIVATE")),mn(wi,Oa,t),mn(wi,Oa,"esm2017"),mn("fire-js","")}my("");function to(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ou(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gy=ou,au=new fr("auth","Firebase",ou());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Zl("@firebase/auth");function _y(t,...e){Xr.logLevel<=re.WARN&&Xr.warn(`Auth (${hr}): ${t}`,...e)}function Dr(t,...e){Xr.logLevel<=re.ERROR&&Xr.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,...e){throw no(t,...e)}function et(t,...e){return no(t,...e)}function cu(t,e,n){const r=Object.assign(Object.assign({},gy()),{[e]:n});return new fr("auth","Firebase",r).create(e,{appName:t.name})}function Lt(t){return cu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function no(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return au.create(t,...e)}function H(t,e,...n){if(!t)throw no(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dr(e),new Error(e)}function mt(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yy(){return La()==="http:"||La()==="https:"}function La(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yy()||Qg()||"connection"in navigator)?navigator.onLine:!0}function by(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yg()||Zg()}get(){return vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new pr(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return uu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),lu.fetch()(fu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function uu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ey),e);try{const s=new Sy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ar(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cu(t,u,l);qe(t,u)}}catch(s){if(s instanceof $t)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function Ss(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ro(t.config,s):`${t.config.apiScheme}://${s}`}function Iy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}function Ma(t){return t!==void 0&&t.enterprise!==void 0}class Ay{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Iy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ty(t,e){return jt(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function du(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cy(t,e=!1){const n=nn(t),r=await n.getIdToken(e),s=so(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Xs(s.auth_time)),issuedAtTime:Wn(Xs(s.iat)),expirationTime:Wn(Xs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xs(t){return Number(t)*1e3}function so(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xl(n);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(s){return Dr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ua(t){const e=so(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&Py(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Py({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tr(t,du(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hu(i.providerUserInfo):[],a=Ny(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ti(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function ky(t){const e=nn(t);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ny(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hu(t){return t.map(e=>{var{providerId:n}=e,r=to(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e){const n=await uu(t,{},async()=>{const r=dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dy(t,e){return jt(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ua(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Ua(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=to(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ti(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cy(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await tr(this,Ry(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:j,isAnonymous:W,providerData:$,stsTokenManager:oe}=n;H(D&&oe,e,"internal-error");const q=gn.fromJSON(this.name,oe);H(typeof D=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),H(typeof j=="boolean",e,"internal-error"),H(typeof W=="boolean",e,"internal-error"),Et(g,e.name),Et(_,e.name),Et(b,e.name),Et(x,e.name),Et(R,e.name),Et(O,e.name);const K=new ut({uid:D,auth:e,email:p,emailVerified:j,displayName:f,isAnonymous:W,photoURL:_,phoneNumber:g,tenantId:b,stsTokenManager:q,createdAt:R,lastLoginAt:O});return $&&Array.isArray($)&&(K.providerData=$.map(le=>Object.assign({},le))),x&&(K._redirectEventId=x),K}static async _fromIdTokenResponse(e,n,r=!1){const s=new gn;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new gn;a.updateFromIdToken(r);const c=new ut({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ti(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new Map;function ft(t){mt(t instanceof Function,"Expected a class definition");let e=Fa.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pu.type="NONE";const Ba=pu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(ft(Ba),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(Ba);const o=Lr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ut._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_u(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vu(e))return"Blackberry";if(bu(e))return"Webos";if(io(e))return"Safari";if((e.includes("chrome/")||gu(e))&&!e.includes("edge/"))return"Chrome";if(yu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mu(t=Ie()){return/firefox\//i.test(t)}function io(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gu(t=Ie()){return/crios\//i.test(t)}function _u(t=Ie()){return/iemobile/i.test(t)}function yu(t=Ie()){return/android/i.test(t)}function vu(t=Ie()){return/blackberry/i.test(t)}function bu(t=Ie()){return/webos/i.test(t)}function As(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ly(t=Ie()){var e;return As(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function My(){return e_()&&document.documentMode===10}function Eu(t=Ie()){return As(t)||yu(t)||bu(t)||vu(t)||/windows phone/i.test(t)||_u(t)}function Uy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e=[]){let n;switch(t){case"Browser":n=$a(Ie());break;case"Worker":n=`${$a(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e={}){return jt(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=6;class jy{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$y,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ja(this),this.idTokenSubscription=new ja(this),this.beforeStateQueue=new Fy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await du(this,{idToken:e}),r=await ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=by()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Lt(this));const n=e?nn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await By(this),n=new jy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_y(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pn(t){return nn(t)}class ja{constructor(e){this.auth=e,this.observer=null,this.addObserver=a_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vy(t){Ts=t}function Iu(t){return Ts.loadJS(t)}function Wy(){return Ts.recaptchaEnterpriseScript}function zy(){return Ts.gapiScript}function Ky(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qy="recaptcha-enterprise",Gy="NO_RECAPTCHA";class Jy{constructor(e){this.type=qy,this.auth=Pn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ty(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ay(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ma(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ma(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Wy();c.length!==0&&(c+=a),Iu(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ha(t,e,n,r=!1){const s=new Jy(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Va(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ha(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ha(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){const n=nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Gr(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function Yy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qy(t,e,n){const r=Pn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Su(e),{host:o,port:a}=Zy(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ev()}function Su(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zy(t){const e=Su(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wa(o)}}}function Wa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ev(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function tv(t,e){return jt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t,e){return Ss(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(t,e){return Ss(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function sv(t,e){return Ss(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends oo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Va(e,n,"signInWithPassword",nv);case"emailLink":return rv(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Va(e,r,"signUpPassword",tv);case"emailLink":return sv(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e){return Ss(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="http://localhost";class tn extends oo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=to(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:iv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function av(t){const e=Mn(Un(t)).link,n=e?Mn(Un(e)).deep_link_id:null,r=Mn(Un(t)).deep_link_id;return(r?Mn(Un(r)).link:null)||r||n||e||t}class ao{constructor(e){var n,r,s,i,o,a;const c=Mn(Un(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=ov((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=av(e);try{return new ao(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ao.parseLink(n);return H(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends mr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends mr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends mr{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ut._fromIdTokenResponse(e,r,s),o=za(r);return new An({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=za(r);return new An({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function za(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qr(e,n,r,s)}}function Tu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,i,e,r):i})}async function cv(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(Lt(r));const s="reauthenticate";try{const i=await tr(t,Tu(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=so(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),An._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t,e,n=!1){if(ct(t.app))return Promise.reject(Lt(t));const r="signIn",s=await Tu(t,r,e),i=await An._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function uv(t,e){return Ru(Pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(t){const e=Pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dv(t,e,n){return ct(t.app)?Promise.reject(Lt(t)):uv(nn(t),On.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fv(t),r})}function hv(t,e,n,r){return nn(t).onIdTokenChanged(e,n,r)}function pv(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}const Zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(){const t=Ie();return io(t)||As(t)}const gv=1e3,_v=10;class Pu extends Cu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mv()&&Uy(),this.fallbackToPolling=Eu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);My()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_v):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pu.type="LOCAL";const yv=Pu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends Cu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ou.type="SESSION";const ku=Ou;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=co("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Ev(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sv(){return Nu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="firebaseLocalStorageDb",Av=1,es="firebaseLocalStorage",Du="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cs(t,e){return t.transaction([es],e?"readwrite":"readonly").objectStore(es)}function Tv(){const t=indexedDB.deleteDatabase(xu);return new gr(t).toPromise()}function Ri(){const t=indexedDB.open(xu,Av);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(es,{keyPath:Du})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(es)?e(r):(r.close(),await Tv(),e(await Ri()))})})}async function Ka(t,e,n){const r=Cs(t,!0).put({[Du]:e,value:n});return new gr(r).toPromise()}async function Rv(t,e){const n=Cs(t,!1).get(e),r=await new gr(n).toPromise();return r===void 0?null:r.value}function qa(t,e){const n=Cs(t,!0).delete(e);return new gr(n).toPromise()}const Cv=800,Pv=3;class Lu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(Sv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new bv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await Ka(e,Zr,"1"),await qa(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ka(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cs(s,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lu.type="LOCAL";const Ov=Lu;new pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t,e){return e?ft(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends oo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nv(t){return Ru(t.auth,new lo(t),t.bypassAuthState)}function xv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),lv(n,new lo(t),t.bypassAuthState)}async function Dv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),cv(n,new lo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nv;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return xv;default:qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new pr(2e3,1e4);class un extends Mu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lv.get())};e()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="pendingRedirect",Mr=new Map;class Uv extends Mu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const r=await Fv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fv(t,e){const n=jv(e),r=$v(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Bv(t,e){Mr.set(t._key(),e)}function $v(t){return ft(t._redirectPersistence)}function jv(t){return Lr(Mv,t.config.apiKey,t.name)}async function Hv(t,e,n=!1){if(ct(t.app))return Promise.reject(Lt(t));const r=Pn(t),s=kv(r,e),o=await new Uv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=10*60*1e3;class Wv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ga(e))}saveEventToCache(e){this.cachedEventUids.add(Ga(e)),this.lastProcessedEventTime=Date.now()}}function Ga(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gv=/^https?/;async function Jv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kv(t);for(const n of e)try{if(Xv(n))return}catch{}qe(t,"unauthorized-domain")}function Xv(t){const e=Ai(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gv.test(n))return!1;if(qv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new pr(3e4,6e4);function Ja(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qv(t){return new Promise((e,n)=>{var r,s,i;function o(){Ja(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ja(),n(et(t,"network-request-failed"))},timeout:Yv.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const a=Ky("iframefcb");return tt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},Iu(`${zy()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function Zv(t){return Ur=Ur||Qv(t),Ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new pr(5e3,15e3),tb="__/auth/iframe",nb="emulator/auth/iframe",rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ro(e,nb):`https://${t.config.authDomain}/${tb}`,r={apiKey:e.apiKey,appName:t.name,v:hr},s=sb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dr(r).slice(1)}`}async function ob(t){const e=await Zv(t),n=tt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{i(o)},eb.get());function c(){tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cb=500,lb=600,ub="_blank",fb="http://localhost";class Xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function db(t,e,n,r=cb,s=lb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ab),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=gu(l)?ub:n),mu(l)&&(e=e||fb,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(Ly(l)&&a!=="_self")return hb(e||"",a),new Xa(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new Xa(f)}function hb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="__/auth/handler",mb="emulator/auth/handler",gb=encodeURIComponent("fac");async function Ya(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hr,eventId:s};if(e instanceof Au){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",o_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof mr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gb}=${encodeURIComponent(c)}`:"";return`${_b(t)}?${dr(a).slice(1)}${l}`}function _b({config:t}){return t.emulator?ro(t,mb):`https://${t.authDomain}/${pb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="webStorageSupport";class yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ku,this._completeRedirectFn=Hv,this._overrideRedirectResult=Bv}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ya(e,n,r,Ai(),s);return db(e,o,co())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ya(e,n,r,Ai(),s);return Ev(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ob(e),r=new Wv(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ys,{type:Ys},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ys];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eu()||io()||As()}}const vb=yb;var Qa="@firebase/auth",Za="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wb(t){Zn(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wu(t)},l=new Hy(r,s,i,c);return Yy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new Sn("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(r=>new bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Qa,Za,Eb(t)),mn(Qa,Za,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=5*60,Sb=Ql("authIdTokenMaxAge")||Ib;let ec=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sb)return;const s=n==null?void 0:n.token;ec!==s&&(ec=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tb(t=oy()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xy(t,{popupRedirectResolver:vb,persistence:[Ov,yv,ku]}),r=Ql("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ab(i.toString());pv(n,o,()=>o(n.currentUser)),hv(n,a=>o(a))}}const s=Jg("auth");return s&&Qy(n,`http://${s}`),n}function Rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wb("Browser");var Cb="firebase",Pb="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(Cb,Pb,"app");const Ob={apiKey:"AIzaSyCMawKDWgF-9Fzk3WAKuy5lcclJNEfrc3c",authDomain:"vue-todo-list-5d358.firebaseapp.com",databaseURL:"https://vue-todo-list-5d358-default-rtdb.europe-west1.firebasedatabase.app",projectId:"vue-todo-list-5d358",storageBucket:"vue-todo-list-5d358.appspot.com",messagingSenderId:"770623207422",appId:"1:770623207422:web:2c9fbae363a2cfcfb432af"},kb=ru(Ob),Nb=Tb(kb),uo=t=>(ls("data-v-2a35b6fb"),t=t(),us(),t),xb={class:"container"},Db={class:"formContent"},Lb={class:"inputSection"},Mb=uo(()=>U("label",{for:"email"},"Email",-1)),Ub={key:0,class:"errorText"},Fb={class:"inputSection"},Bb=uo(()=>U("label",{for:"password"},"Passwrod",-1)),$b=["type"],jb=["src"],Hb={key:0,class:"errorText"},Vb=uo(()=>U("p",null,"Log In",-1)),Wb=[Vb],zb={__name:"LoginForm",setup(t){const e=he(!1),n=he(!0),r=he(!0),s=he(""),i=he(""),o=he(""),a=he(""),c=he(Sa),l=he("password"),u=_s();async function f(D,j){try{const $=(await dv(Nb,D,j)).user;$&&(u.userInfo.token=$.accessToken,u.userInfo.userData=$),Fu.push("/todos")}catch(W){console.error("Ошибка входа:",W.message)}}const p=()=>{if(s.value!==""){const D=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;n.value=D.test(s.value),o.value="Please enter valid Email adress."}else o.value="Required field",n.value=!1},g=()=>{i.value!==""?(r.value=i.value.length>=6,a.value="Please enter a valid password"):(a.value="Required field",r.value=!1)},_=()=>{n.value||(n.value=!0)},b=()=>{r.value||(r.value=!0)},x=()=>{e.value?(c.value=jg,l.value="text",e.value=!e.value):(c.value=Sa,l.value="password",e.value=!e.value)},R=Ae(function(){return{inputFieldError:!n.value}}),O=Ae(function(){return{inputFieldError:!r.value}});return(D,j)=>(we(),Re("div",xb,[U("form",{action:"submit",onSubmit:j[3]||(j[3]=li(()=>{},["prevent"]))},[U("div",Db,[U("div",Lb,[Mb,U("div",{class:De(["inputFieldWrap",R.value])},[Vr(U("input",{type:"text","onUpdate:modelValue":j[0]||(j[0]=W=>s.value=W),onBlur:p,onClick:_},null,544),[[Kr,s.value]])],2),n.value?Mo("",!0):(we(),Re("span",Ub,Br(o.value),1))]),U("div",Fb,[Bb,U("div",{class:De(["inputFieldWrap",O.value])},[Vr(U("input",{type:l.value,"onUpdate:modelValue":j[1]||(j[1]=W=>i.value=W),onBlur:g,onClick:b},null,40,$b),[[uh,i.value]]),U("img",{src:c.value,alt:"img",onClick:x},null,8,jb)],2),r.value?Mo("",!0):(we(),Re("span",Hb,Br(a.value),1))]),U("button",{type:"submit",onClick:j[2]||(j[2]=W=>f(s.value,i.value))},Wb)])],32)]))}},Kb=rt(zb,[["__scopeId","data-v-2a35b6fb"]]),qb={class:"container"},Gb={__name:"LoginPage",setup(t){return(e,n)=>(we(),Re("div",qb,[fe(Kb)]))}},Jb=rt(Gb,[["__scopeId","data-v-547f8c58"]]),Xb=[{path:"/",component:Jb},{path:"/todos",component:$g,name:"todos",meta:{requiresAuth:!0}}],Fu=yp({history:qh(),routes:Xb});function Yb(t){return typeof t=="object"&&t!==null}function tc(t,e){return t=Yb(t)?t:Object.create(null),new Proxy(t,{get(n,r,s){return r==="key"?Reflect.get(n,r,s):Reflect.get(n,r,s)||Reflect.get(e,r,s)}})}function Qb(t,e){return e.reduce((n,r)=>n==null?void 0:n[r],t)}function Zb(t,e,n){return e.slice(0,-1).reduce((r,s)=>/^(__proto__)$/.test(s)?{}:r[s]=r[s]||{},t)[e[e.length-1]]=n,t}function eE(t,e){return e.reduce((n,r)=>{const s=r.split(".");return Zb(n,s,Qb(t,s))},{})}function tE(t,e){return n=>{var r;try{const{storage:s=localStorage,beforeRestore:i=void 0,afterRestore:o=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:c=e.$id,paths:l=null,debug:u=!1}=n;return{storage:s,beforeRestore:i,afterRestore:o,serializer:a,key:((r=t.key)!=null?r:f=>f)(typeof c=="string"?c:c(e.$id)),paths:l,debug:u}}catch(s){return n.debug&&console.error("[pinia-plugin-persistedstate]",s),null}}}function nc(t,{storage:e,serializer:n,key:r,debug:s}){try{const i=e==null?void 0:e.getItem(r);i&&t.$patch(n==null?void 0:n.deserialize(i))}catch(i){s&&console.error("[pinia-plugin-persistedstate]",i)}}function rc(t,{storage:e,serializer:n,key:r,paths:s,debug:i}){try{const o=Array.isArray(s)?eE(t,s):t;e.setItem(r,n.serialize(o))}catch(o){i&&console.error("[pinia-plugin-persistedstate]",o)}}function nE(t={}){return e=>{const{auto:n=!1}=t,{options:{persist:r=n},store:s,pinia:i}=e;if(!r)return;if(!(s.$id in i.state.value)){const a=i._s.get(s.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const o=(Array.isArray(r)?r.map(a=>tc(a,t)):[tc(r,t)]).map(tE(t,s)).filter(Boolean);s.$persist=()=>{o.forEach(a=>{rc(s.$state,a)})},s.$hydrate=({runHooks:a=!0}={})=>{o.forEach(c=>{const{beforeRestore:l,afterRestore:u}=c;a&&(l==null||l(e)),nc(s,c),a&&(u==null||u(e))})},o.forEach(a=>{const{beforeRestore:c,afterRestore:l}=a;c==null||c(e),nc(s,a),l==null||l(e),s.$subscribe((u,f)=>{rc(f,a)},{detached:!0})})}}var rE=nE();const sE={class:"container"},iE={__name:"App",setup(t){const e=vl(),n=_s();return Wi(()=>{n.userInfo.token?e.currentRoute.value.path==="/"&&e.replace("/todos"):e.currentRoute.value.path!=="/"&&e.replace("/")}),(r,s)=>{const i=Bf("RouterView");return we(),Re("div",sE,[fe(i)])}}},oE=rt(iE,[["__scopeId","data-v-7ac25048"]]),aE=gh(oE),Bu=Ep();Bu.use(rE);aE.use(Fu).use(Bu).mount("#app");
