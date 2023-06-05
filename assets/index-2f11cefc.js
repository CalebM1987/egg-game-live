(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function pa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},Rt=[],Ie=()=>{},Ys=()=>!1,Hs=/^on[^a-z]/,lr=e=>Hs.test(e),ga=e=>e.startsWith("onUpdate:"),le=Object.assign,ha=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ws=Object.prototype.hasOwnProperty,B=(e,t)=>Ws.call(e,t),L=Array.isArray,Dt=e=>fr(e)==="[object Map]",bo=e=>fr(e)==="[object Set]",$=e=>typeof e=="function",fe=e=>typeof e=="string",va=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",yo=e=>ee(e)&&$(e.then)&&$(e.catch),wo=Object.prototype.toString,fr=e=>wo.call(e),Ks=e=>fr(e).slice(8,-1),_o=e=>fr(e)==="[object Object]",ba=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vs=/-(\w)/g,je=cr(e=>e.replace(Vs,(t,n)=>n?n.toUpperCase():"")),Gs=/\B([A-Z])/g,Ct=cr(e=>e.replace(Gs,"-$1").toLowerCase()),ur=cr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pr=cr(e=>e?`on${ur(e)}`:""),ln=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Br=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ni;const Yr=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?Zs(r):dr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(ee(e))return e}}const Xs=/;(?![^(]*\))/g,qs=/:([^]+)/,Js=/\/\*[^]*?\*\//g;function Zs(e){const t={};return e.replace(Js,"").split(Xs).forEach(n=>{if(n){const r=n.split(qs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ut(e){let t="";if(fe(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Ut(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=pa(Qs);function xo(e){return!!e||e===""}const tl=e=>fe(e)?e:e==null?"":L(e)||ee(e)&&(e.toString===wo||!$(e.toString))?JSON.stringify(e,Ao,2):String(e),Ao=(e,t)=>t&&t.__v_isRef?Ao(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:bo(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!L(t)&&!_o(t)?String(t):t;let we;class nl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function rl(e,t=we){t&&t.active&&t.effects.push(e)}function Co(){return we}function al(e){we&&we.cleanups.push(e)}const ya=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Eo=e=>(e.w&rt)>0,ko=e=>(e.n&rt)>0,il=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Eo(a)&&!ko(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},Jn=new WeakMap;let Jt=0,rt=1;const Hr=30;let Oe;const bt=Symbol(""),Wr=Symbol("");class wa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rl(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=tt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,tt=!0,rt=1<<++Jt,Jt<=Hr?il(this):ri(this),this.fn()}finally{Jt<=Hr&&ol(this),rt=1<<--Jt,Oe=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tt=!0;const Oo=[];function Kt(){Oo.push(tt),tt=!1}function Vt(){const e=Oo.pop();tt=e===void 0?!0:e}function be(e,t,n){if(tt&&Oe){let r=Jn.get(e);r||Jn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ya()),Po(a)}}function Po(e,t){let n=!1;Jt<=Hr?ko(e)||(e.n|=rt,n=!Eo(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Jn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?ba(n)&&s.push(o.get("length")):(s.push(o.get(bt)),Dt(e)&&s.push(o.get(Wr)));break;case"delete":L(e)||(s.push(o.get(bt)),Dt(e)&&s.push(o.get(Wr)));break;case"set":Dt(e)&&s.push(o.get(bt));break}if(s.length===1)s[0]&&Kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Kr(ya(l))}}function Kr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&ai(r);for(const r of n)r.computed||ai(r)}function ai(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function sl(e,t){var n;return(n=Jn.get(e))==null?void 0:n.get(t)}const ll=pa("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(va)),fl=_a(),cl=_a(!1,!0),ul=_a(!0),ii=dl();function dl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kt();const r=Y(this)[t].apply(this,n);return Vt(),r}}),e}function ml(e){const t=Y(this);return be(t,"has",e),t.hasOwnProperty(e)}function _a(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Sl:No:t?Mo:Fo).get(r))return r;const o=L(r);if(!e){if(o&&B(ii,a))return Reflect.get(ii,a,i);if(a==="hasOwnProperty")return ml}const s=Reflect.get(r,a,i);return(va(a)?So.has(a):ll(a))||(e||be(r,"get",a),t)?s:se(s)?o&&ba(a)?s:s.value:ee(s)?e?Ro(s):Ca(s):s}}const pl=Io(),gl=Io(!0);function Io(e=!1){return function(n,r,a,i){let o=n[r];if(zt(o)&&se(o)&&!se(a))return!1;if(!e&&(!Zn(a)&&!zt(a)&&(o=Y(o),a=Y(a)),!L(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=L(n)&&ba(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?ln(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function hl(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function vl(e,t){const n=Reflect.has(e,t);return(!va(t)||!So.has(t))&&be(e,"has",t),n}function bl(e){return be(e,"iterate",L(e)?"length":bt),Reflect.ownKeys(e)}const To={get:fl,set:pl,deleteProperty:hl,has:vl,ownKeys:bl},yl={get:ul,set(e,t){return!0},deleteProperty(e,t){return!0}},wl=le({},To,{get:cl,set:gl}),xa=e=>e,mr=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&be(a,"get",t),be(a,"get",i));const{has:o}=mr(a),s=r?xa:n?ka:fn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function On(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&be(r,"has",e),be(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Pn(e,t=!1){return e=e.__v_raw,!t&&be(Y(e),"iterate",bt),Reflect.get(e,"size",e)}function oi(e){e=Y(e);const t=Y(this);return mr(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function si(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=mr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function li(e){const t=Y(this),{has:n,get:r}=mr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function fi(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?xa:e?ka:fn;return!e&&be(s,"iterate",bt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function In(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?xa:t?ka:fn;return!t&&be(i,"iterate",l?Wr:bt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:s?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function _l(){const e={get(i){return kn(this,i)},get size(){return Pn(this)},has:On,add:oi,set:si,delete:li,clear:fi,forEach:Sn(!1,!1)},t={get(i){return kn(this,i,!1,!0)},get size(){return Pn(this)},has:On,add:oi,set:si,delete:li,clear:fi,forEach:Sn(!1,!0)},n={get(i){return kn(this,i,!0)},get size(){return Pn(this,!0)},has(i){return On.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Sn(!0,!1)},r={get(i){return kn(this,i,!0,!0)},get size(){return Pn(this,!0)},has(i){return On.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=In(i,!1,!1),n[i]=In(i,!0,!1),t[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[e,n,t,r]}const[xl,Al,Cl,El]=_l();function Aa(e,t){const n=t?e?El:Cl:e?Al:xl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const kl={get:Aa(!1,!1)},Ol={get:Aa(!1,!0)},Pl={get:Aa(!0,!1)},Fo=new WeakMap,Mo=new WeakMap,No=new WeakMap,Sl=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tl(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(Ks(e))}function Ca(e){return zt(e)?e:Ea(e,!1,To,kl,Fo)}function Fl(e){return Ea(e,!1,wl,Ol,Mo)}function Ro(e){return Ea(e,!0,yl,Pl,No)}function Ea(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Tl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Lt(e){return zt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Zn(e){return!!(e&&e.__v_isShallow)}function Do(e){return Lt(e)||zt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Lo(e){return qn(e,"__v_skip",!0),e}const fn=e=>ee(e)?Ca(e):e,ka=e=>ee(e)?Ro(e):e;function Oa(e){tt&&Oe&&(e=Y(e),Po(e.dep||(e.dep=ya())))}function Pa(e,t){e=Y(e);const n=e.dep;n&&Kr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Ml(e,!1)}function Ml(e,t){return se(e)?e:new Nl(e,t)}class Nl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:fn(t)}get value(){return Oa(this),this._value}set value(t){const n=this.__v_isShallow||Zn(t)||zt(t);t=n?t:Y(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:fn(t),Pa(this))}}function ue(e){return se(e)?e.value:e}const Rl={get:(e,t,n)=>ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function jo(e){return Lt(e)?e:new Proxy(e,Rl)}class Dl{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Oa(this),()=>Pa(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Ll(e){return new Dl(e)}function jl(e){const t=L(e)?new Array(e.length):{};for(const n in e)t[n]=Ul(e,n);return t}class $l{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return sl(Y(this._object),this._key)}}function Ul(e,t,n){const r=e[t];return se(r)?r:new $l(e,t,n)}class zl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wa(t,()=>{this._dirty||(this._dirty=!0,Pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Oa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new zl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){bn(i,t,n)}return a}function Te(e,t,n,r){if($(e)){const i=nt(e,t,n,r);return i&&yo(i)&&i.catch(o=>{bn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Te(e[i],t,n,r));return a}function bn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}Yl(e,n,a,r)}function Yl(e,t,n,r=!0){console.error(e)}let cn=!1,Vr=!1;const de=[];let De=0;const jt=[];let Ue=null,dt=0;const $o=Promise.resolve();let Sa=null;function Hl(e){const t=Sa||$o;return e?t.then(this?e.bind(this):e):t}function Wl(e){let t=De+1,n=de.length;for(;t<n;){const r=t+n>>>1;un(de[r])<e?t=r+1:n=r}return t}function pr(e){(!de.length||!de.includes(e,cn&&e.allowRecurse?De+1:De))&&(e.id==null?de.push(e):de.splice(Wl(e.id),0,e),Uo())}function Uo(){!cn&&!Vr&&(Vr=!0,Sa=$o.then(Bo))}function Kl(e){const t=de.indexOf(e);t>De&&de.splice(t,1)}function Vl(e){L(e)?jt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?dt+1:dt))&&jt.push(e),Uo()}function ci(e,t=cn?De+1:0){for(;t<de.length;t++){const n=de[t];n&&n.pre&&(de.splice(t,1),t--,n())}}function zo(e){if(jt.length){const t=[...new Set(jt)];if(jt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>un(n)-un(r)),dt=0;dt<Ue.length;dt++)Ue[dt]();Ue=null,dt=0}}const un=e=>e.id==null?1/0:e.id,Gl=(e,t)=>{const n=un(e)-un(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bo(e){Vr=!1,cn=!0,de.sort(Gl);const t=Ie;try{for(De=0;De<de.length;De++){const n=de[De];n&&n.active!==!1&&nt(n,null,14)}}finally{De=0,de.length=0,zo(),cn=!1,Sa=null,(de.length||jt.length)&&Bo()}}function Xl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||X;p&&(a=n.map(h=>fe(h)?h.trim():h)),d&&(a=n.map(Br))}let s,l=r[s=Pr(t)]||r[s=Pr(je(t))];!l&&i&&(l=r[s=Pr(Ct(t))]),l&&Te(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Te(c,e,6,a)}}function Yo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const f=Yo(c,t,!0);f&&(s=!0,le(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ee(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):le(o,i),ee(e)&&r.set(e,o),o)}function gr(e,t){return!e||!lr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ct(t))||B(e,t))}let me=null,Ho=null;function Qn(e){const t=me;return me=e,Ho=e&&e.type.__scopeId||null,t}function Gr(e,t=me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&_i(-1);const i=Qn(t);let o;try{o=e(...a)}finally{Qn(i),r._d&&_i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:p,setupState:h,ctx:O,inheritAttrs:x}=e;let k,w;const v=Qn(e);try{if(n.shapeFlag&4){const S=a||r;k=Re(f.call(S,S,d,i,h,p,O)),w=l}else{const S=t;k=Re(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),w=t.props?l:ql(l)}}catch(S){nn.length=0,bn(S,e,1),k=Q(at)}let T=k;if(w&&x!==!1){const S=Object.keys(w),{shapeFlag:z}=T;S.length&&z&7&&(o&&S.some(ga)&&(w=Jl(w,o)),T=Bt(T,w))}return n.dirs&&(T=Bt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),k=T,Qn(v),k}const ql=e=>{let t;for(const n in e)(n==="class"||n==="style"||lr(n))&&((t||(t={}))[n]=e[n]);return t},Jl=(e,t)=>{const n={};for(const r in e)(!ga(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ui(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!gr(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ui(r,o,c):!0:!!o;return!1}function ui(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!gr(n,i))return!0}return!1}function Ql({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ef=e=>e.__isSuspense;function tf(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Vl(e)}const Tn={};function yt(e,t,n){return Wo(e,t,n)}function Wo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=Co()===((s=oe)==null?void 0:s.scope)?oe:null;let c,f=!1,d=!1;if(se(e)?(c=()=>e.value,f=Zn(e)):Lt(e)?(c=()=>e,r=!0):L(e)?(d=!0,f=e.some(S=>Lt(S)||Zn(S)),c=()=>e.map(S=>{if(se(S))return S.value;if(Lt(S))return pt(S);if($(S))return nt(S,l,2)})):$(e)?t?c=()=>nt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Te(e,l,3,[h])}:c=Ie,t&&r){const S=c;c=()=>pt(S())}let p,h=S=>{p=v.onStop=()=>{nt(S,l,4)}},O;if(Ht)if(h=Ie,t?n&&Te(t,l,3,[c(),d?[]:void 0,h]):c(),a==="sync"){const S=Zf();O=S.__watcherHandles||(S.__watcherHandles=[])}else return Ie;let x=d?new Array(e.length).fill(Tn):Tn;const k=()=>{if(v.active)if(t){const S=v.run();(r||f||(d?S.some((z,D)=>ln(z,x[D])):ln(S,x)))&&(p&&p(),Te(t,l,3,[S,x===Tn?void 0:d&&x[0]===Tn?[]:x,h]),x=S)}else v.run()};k.allowRecurse=!!t;let w;a==="sync"?w=k:a==="post"?w=()=>ve(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),w=()=>pr(k));const v=new wa(c,w);t?n?k():x=v.run():a==="post"?ve(v.run.bind(v),l&&l.suspense):v.run();const T=()=>{v.stop(),l&&l.scope&&ha(l.scope.effects,v)};return O&&O.push(T),T}function nf(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?Ko(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=oe;Yt(this);const s=Wo(a,i.bind(r),n);return o?Yt(o):_t(),s}function Ko(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))pt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(bo(e)||Dt(e))e.forEach(n=>{pt(n,t)});else if(_o(e))for(const n in e)pt(e[n],t);return e}function Tm(e,t){const n=me;if(n===null)return e;const r=wr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=X]=t[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&pt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Kt(),Te(l,n,8,[e.el,s,e,t]),Vt())}}function Et(e,t){return $(e)?(()=>le({name:e.name},t,{setup:e}))():e}const en=e=>!!e.type.__asyncLoader;function Fn(e){$(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:a=200,timeout:i,suspensible:o=!0,onError:s}=e;let l=null,c,f=0;const d=()=>(f++,l=null,p()),p=()=>{let h;return l||(h=l=t().catch(O=>{if(O=O instanceof Error?O:new Error(String(O)),s)return new Promise((x,k)=>{s(O,()=>x(d()),()=>k(O),f+1)});throw O}).then(O=>h!==l&&l?l:(O&&(O.__esModule||O[Symbol.toStringTag]==="Module")&&(O=O.default),c=O,O)))};return Et({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const h=oe;if(c)return()=>Ir(c,h);const O=v=>{l=null,bn(v,h,13,!r)};if(o&&h.suspense||Ht)return p().then(v=>()=>Ir(v,h)).catch(v=>(O(v),()=>r?Q(r,{error:v}):null));const x=H(!1),k=H(),w=H(!!a);return a&&setTimeout(()=>{w.value=!1},a),i!=null&&setTimeout(()=>{if(!x.value&&!k.value){const v=new Error(`Async component timed out after ${i}ms.`);O(v),k.value=v}},i),p().then(()=>{x.value=!0,h.parent&&Ia(h.parent.vnode)&&pr(h.parent.update)}).catch(v=>{O(v),k.value=v}),()=>{if(x.value&&c)return Ir(c,h);if(k.value&&r)return Q(r,{error:k.value});if(n&&!w.value)return Q(n)}}})}function Ir(e,t){const{ref:n,props:r,children:a,ce:i}=t.vnode,o=Q(e,r,a);return o.ref=n,o.ce=i,delete t.vnode.ce,o}const Ia=e=>e.type.__isKeepAlive;function rf(e,t){Vo(e,"a",t)}function af(e,t){Vo(e,"da",t)}function Vo(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ia(a.parent.vnode)&&of(r,t,n,a),a=a.parent}}function of(e,t,n,r){const a=hr(t,e,r,!0);Go(()=>{ha(r[t],a)},n)}function hr(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),Yt(n);const s=Te(t,n,e,o);return _t(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=oe)=>(!Ht||e==="sp")&&hr(e,(...r)=>t(...r),n),sf=Ve("bm"),vr=Ve("m"),lf=Ve("bu"),ff=Ve("u"),cf=Ve("bum"),Go=Ve("um"),uf=Ve("sp"),df=Ve("rtg"),mf=Ve("rtc");function pf(e,t=oe){hr("ec",e,t)}const Xo="components";function gf(e,t){return vf(Xo,e,!0,t)||e}const hf=Symbol.for("v-ndc");function vf(e,t,n=!0,r=!1){const a=me||oe;if(a){const i=a.type;if(e===Xo){const s=Gf(i,!1);if(s&&(s===t||s===je(t)||s===ur(je(t))))return i}const o=di(a[e]||i[e],t)||di(a.appContext[e],t);return!o&&r?i:o}}function di(e,t){return e&&(e[t]||e[je(t)]||e[ur(je(t))])}function Fm(e,t,n={},r,a){if(me.isCE||me.parent&&en(me.parent)&&me.parent.isCE)return t!=="default"&&(n.name=t),Q("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),_e();const o=i&&qo(i(n)),s=Ft(Ce,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function qo(e){return e.some(t=>nr(t)?!(t.type===at||t.type===Ce&&!qo(t.children)):!0)?e:null}const Xr=e=>e?ss(e)?wr(e)||e.proxy:Xr(e.parent):null,tn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>Ta(e),$forceUpdate:e=>e.f||(e.f=()=>pr(e.update)),$nextTick:e=>e.n||(e.n=Hl.bind(e.proxy)),$watch:e=>nf.bind(e)}),Tr=(e,t)=>e!==X&&!e.__isScriptSetup&&B(e,t),bf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Tr(r,t))return o[t]=1,r[t];if(a!==X&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==X&&B(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const f=tn[t];let d,p;if(f)return t==="$attrs"&&be(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==X&&B(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,B(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Tr(a,t)?(a[t]=n,!0):r!==X&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&B(e,o)||Tr(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(tn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function mi(e){return L(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qr=!0;function yf(e){const t=Ta(e),n=e.proxy,r=e.ctx;qr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:h,updated:O,activated:x,deactivated:k,beforeDestroy:w,beforeUnmount:v,destroyed:T,unmounted:S,render:z,renderTracked:D,renderTriggered:K,errorCaptured:te,serverPrefetch:ce,expose:Ae,inheritAttrs:kt,components:xn,directives:An,filters:Er}=t;if(c&&wf(c,r,null),o)for(const ne in o){const V=o[ne];$(V)&&(r[ne]=V.bind(n))}if(a){const ne=a.call(n,n);ee(ne)&&(e.data=Ca(ne))}if(qr=!0,i)for(const ne in i){const V=i[ne],lt=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Ie,Cn=!$(V)&&$(V.set)?V.set.bind(n):Ie,ft=ke({get:lt,set:Cn});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Fe=>ft.value=Fe})}if(s)for(const ne in s)Jo(s[ne],r,n,ne);if(l){const ne=$(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(V=>{kf(V,ne[V])})}f&&pi(f,e,"c");function pe(ne,V){L(V)?V.forEach(lt=>ne(lt.bind(n))):V&&ne(V.bind(n))}if(pe(sf,d),pe(vr,p),pe(lf,h),pe(ff,O),pe(rf,x),pe(af,k),pe(pf,te),pe(mf,D),pe(df,K),pe(cf,v),pe(Go,S),pe(uf,ce),L(Ae))if(Ae.length){const ne=e.exposed||(e.exposed={});Ae.forEach(V=>{Object.defineProperty(ne,V,{get:()=>n[V],set:lt=>n[V]=lt})})}else e.exposed||(e.exposed={});z&&e.render===Ie&&(e.render=z),kt!=null&&(e.inheritAttrs=kt),xn&&(e.components=xn),An&&(e.directives=An)}function wf(e,t,n=Ie){L(e)&&(e=Jr(e));for(const r in e){const a=e[r];let i;ee(a)?"default"in a?i=Kn(a.from||r,a.default,!0):i=Kn(a.from||r):i=Kn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function pi(e,t,n){Te(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Jo(e,t,n,r){const a=r.includes(".")?Ko(n,r):()=>n[r];if(fe(e)){const i=t[e];$(i)&&yt(a,i)}else if($(e))yt(a,e.bind(n));else if(ee(e))if(L(e))e.forEach(i=>Jo(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&yt(a,i,e)}}function Ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>er(l,c,o,!0)),er(l,t,o)),ee(t)&&i.set(t,l),l}function er(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&er(e,i,n,!0),a&&a.forEach(o=>er(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_f[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _f={data:gi,props:hi,emits:hi,methods:Zt,computed:Zt,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Zt,directives:Zt,watch:Af,provide:gi,inject:xf};function gi(e,t){return t?e?function(){return le($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function xf(e,t){return Zt(Jr(e),Jr(t))}function Jr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?le(Object.create(null),e,t):t}function hi(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:le(Object.create(null),mi(e),mi(t??{})):t}function Af(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=ge(e[r],t[r]);return n}function Zo(){return{app:null,config:{isNativeTag:Ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Ef(e,t){return function(r,a=null){$(r)||(r=le({},r)),a!=null&&!ee(a)&&(a=null);const i=Zo(),o=new Set;let s=!1;const l=i.app={_uid:Cf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Qf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...f)):$(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const p=Q(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),s=!0,l._container=c,c.__vue_app__=l,wr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l},runWithContext(c){tr=l;try{return c()}finally{tr=null}}};return l}}let tr=null;function kf(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function Kn(e,t,n=!1){const r=oe||me;if(r||tr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:tr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r&&r.proxy):t}}function Of(e,t,n,r=!1){const a={},i={};qn(i,yr,1),e.propsDefaults=Object.create(null),Qo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Fl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Pf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(gr(e.emitsOptions,p))continue;const h=t[p];if(l)if(B(i,p))h!==i[p]&&(i[p]=h,c=!0);else{const O=je(p);a[O]=Zr(l,s,O,h,e,!1)}else h!==i[p]&&(i[p]=h,c=!0)}}}else{Qo(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!B(t,d)&&((f=Ct(d))===d||!B(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!B(t,d))&&(delete i[d],c=!0)}c&&Ye(e,"set","$attrs")}function Qo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Hn(l))continue;const c=t[l];let f;a&&B(a,f=je(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:gr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||X;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Zr(a,l,d,c[d],e,!B(c,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Yt(a),r=c[n]=l.call(null,t),_t())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const f=d=>{l=!0;const[p,h]=es(d,t,!0);le(o,p),h&&s.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return ee(e)&&r.set(e,Rt),Rt;if(L(i))for(let f=0;f<i.length;f++){const d=je(i[f]);vi(d)&&(o[d]=X)}else if(i)for(const f in i){const d=je(f);if(vi(d)){const p=i[f],h=o[d]=L(p)||$(p)?{type:p}:le({},p);if(h){const O=wi(Boolean,h.type),x=wi(String,h.type);h[0]=O>-1,h[1]=x<0||O<x,(O>-1||B(h,"default"))&&s.push(d)}}}const c=[o,s];return ee(e)&&r.set(e,c),c}function vi(e){return e[0]!=="$"}function bi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function yi(e,t){return bi(e)===bi(t)}function wi(e,t){return L(t)?t.findIndex(n=>yi(n,e)):$(t)&&yi(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Fa=e=>L(e)?e.map(Re):[Re(e)],Sf=(e,t,n)=>{if(t._n)return t;const r=Gr((...a)=>Fa(t(...a)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ts(a))continue;const i=e[a];if($(i))t[a]=Sf(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},rs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},If=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),qn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);qn(e.slots,yr,1)},Tf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ns(t,a)),o=t}else t&&(rs(e,t),o={default:1});if(i)for(const s in a)!ts(s)&&!(s in o)&&delete a[s]};function Qr(e,t,n,r,a=!1){if(L(e)){e.forEach((p,h)=>Qr(p,t&&(L(t)?t[h]:t),n,r,a));return}if(en(r)&&!a)return;const i=r.shapeFlag&4?wr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===X?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(fe(c)?(f[c]=null,B(d,c)&&(d[c]=null)):se(c)&&(c.value=null)),$(l))nt(l,s,12,[o,f]);else{const p=fe(l),h=se(l);if(p||h){const O=()=>{if(e.f){const x=p?B(d,l)?d[l]:f[l]:l.value;a?L(x)&&ha(x,i):L(x)?x.includes(i)||x.push(i):p?(f[l]=[i],B(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else p?(f[l]=o,B(d,l)&&(d[l]=o)):h&&(l.value=o,e.k&&(f[e.k]=o))};o?(O.id=-1,ve(O,n)):O()}}}const ve=tf;function Ff(e){return Mf(e)}function Mf(e,t){const n=Yr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:h=Ie,insertStaticContent:O}=e,x=(u,m,g,y=null,b=null,C=null,P=!1,A=null,E=!!m.dynamicChildren)=>{if(u===m)return;u&&!qt(u,m)&&(y=En(u),Fe(u,b,C,!0),u=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:_,ref:N,shapeFlag:F}=m;switch(_){case br:k(u,m,g,y);break;case at:w(u,m,g,y);break;case Fr:u==null&&v(m,g,y,P);break;case Ce:xn(u,m,g,y,b,C,P,A,E);break;default:F&1?z(u,m,g,y,b,C,P,A,E):F&6?An(u,m,g,y,b,C,P,A,E):(F&64||F&128)&&_.process(u,m,g,y,b,C,P,A,E,Ot)}N!=null&&b&&Qr(N,u&&u.ref,C,m||u,!m)},k=(u,m,g,y)=>{if(u==null)r(m.el=s(m.children),g,y);else{const b=m.el=u.el;m.children!==u.children&&c(b,m.children)}},w=(u,m,g,y)=>{u==null?r(m.el=l(m.children||""),g,y):m.el=u.el},v=(u,m,g,y)=>{[u.el,u.anchor]=O(u.children,m,g,y,u.el,u.anchor)},T=({el:u,anchor:m},g,y)=>{let b;for(;u&&u!==m;)b=p(u),r(u,g,y),u=b;r(m,g,y)},S=({el:u,anchor:m})=>{let g;for(;u&&u!==m;)g=p(u),a(u),u=g;a(m)},z=(u,m,g,y,b,C,P,A,E)=>{P=P||m.type==="svg",u==null?D(m,g,y,b,C,P,A,E):ce(u,m,b,C,P,A,E)},D=(u,m,g,y,b,C,P,A)=>{let E,_;const{type:N,props:F,shapeFlag:R,transition:j,dirs:U}=u;if(E=u.el=o(u.type,C,F&&F.is,F),R&8?f(E,u.children):R&16&&te(u.children,E,null,y,b,C&&N!=="foreignObject",P,A),U&&ct(u,null,y,"created"),K(E,u,u.scopeId,P,y),F){for(const W in F)W!=="value"&&!Hn(W)&&i(E,W,null,F[W],C,u.children,y,b,$e);"value"in F&&i(E,"value",null,F.value),(_=F.onVnodeBeforeMount)&&Ne(_,y,u)}U&&ct(u,null,y,"beforeMount");const G=(!b||b&&!b.pendingBranch)&&j&&!j.persisted;G&&j.beforeEnter(E),r(E,m,g),((_=F&&F.onVnodeMounted)||G||U)&&ve(()=>{_&&Ne(_,y,u),G&&j.enter(E),U&&ct(u,null,y,"mounted")},b)},K=(u,m,g,y,b)=>{if(g&&h(u,g),y)for(let C=0;C<y.length;C++)h(u,y[C]);if(b){let C=b.subTree;if(m===C){const P=b.vnode;K(u,P,P.scopeId,P.slotScopeIds,b.parent)}}},te=(u,m,g,y,b,C,P,A,E=0)=>{for(let _=E;_<u.length;_++){const N=u[_]=A?Qe(u[_]):Re(u[_]);x(null,N,m,g,y,b,C,P,A)}},ce=(u,m,g,y,b,C,P)=>{const A=m.el=u.el;let{patchFlag:E,dynamicChildren:_,dirs:N}=m;E|=u.patchFlag&16;const F=u.props||X,R=m.props||X;let j;g&&ut(g,!1),(j=R.onVnodeBeforeUpdate)&&Ne(j,g,m,u),N&&ct(m,u,g,"beforeUpdate"),g&&ut(g,!0);const U=b&&m.type!=="foreignObject";if(_?Ae(u.dynamicChildren,_,A,g,y,U,C):P||V(u,m,A,null,g,y,U,C,!1),E>0){if(E&16)kt(A,m,F,R,g,y,b);else if(E&2&&F.class!==R.class&&i(A,"class",null,R.class,b),E&4&&i(A,"style",F.style,R.style,b),E&8){const G=m.dynamicProps;for(let W=0;W<G.length;W++){const ae=G[W],Ee=F[ae],Pt=R[ae];(Pt!==Ee||ae==="value")&&i(A,ae,Ee,Pt,b,u.children,g,y,$e)}}E&1&&u.children!==m.children&&f(A,m.children)}else!P&&_==null&&kt(A,m,F,R,g,y,b);((j=R.onVnodeUpdated)||N)&&ve(()=>{j&&Ne(j,g,m,u),N&&ct(m,u,g,"updated")},y)},Ae=(u,m,g,y,b,C,P)=>{for(let A=0;A<m.length;A++){const E=u[A],_=m[A],N=E.el&&(E.type===Ce||!qt(E,_)||E.shapeFlag&70)?d(E.el):g;x(E,_,N,null,y,b,C,P,!0)}},kt=(u,m,g,y,b,C,P)=>{if(g!==y){if(g!==X)for(const A in g)!Hn(A)&&!(A in y)&&i(u,A,g[A],null,P,m.children,b,C,$e);for(const A in y){if(Hn(A))continue;const E=y[A],_=g[A];E!==_&&A!=="value"&&i(u,A,_,E,P,m.children,b,C,$e)}"value"in y&&i(u,"value",g.value,y.value)}},xn=(u,m,g,y,b,C,P,A,E)=>{const _=m.el=u?u.el:s(""),N=m.anchor=u?u.anchor:s("");let{patchFlag:F,dynamicChildren:R,slotScopeIds:j}=m;j&&(A=A?A.concat(j):j),u==null?(r(_,g,y),r(N,g,y),te(m.children,g,N,b,C,P,A,E)):F>0&&F&64&&R&&u.dynamicChildren?(Ae(u.dynamicChildren,R,g,b,C,P,A),(m.key!=null||b&&m===b.subTree)&&as(u,m,!0)):V(u,m,g,N,b,C,P,A,E)},An=(u,m,g,y,b,C,P,A,E)=>{m.slotScopeIds=A,u==null?m.shapeFlag&512?b.ctx.activate(m,g,y,P,E):Er(m,g,y,b,C,P,E):qa(u,m,E)},Er=(u,m,g,y,b,C,P)=>{const A=u.component=Yf(u,y,b);if(Ia(u)&&(A.ctx.renderer=Ot),Hf(A),A.asyncDep){if(b&&b.registerDep(A,pe),!u.el){const E=A.subTree=Q(at);w(null,E,m,g)}return}pe(A,u,m,g,b,C,P)},qa=(u,m,g)=>{const y=m.component=u.component;if(Zl(u,m,g))if(y.asyncDep&&!y.asyncResolved){ne(y,m,g);return}else y.next=m,Kl(y.update),y.update();else m.el=u.el,y.vnode=m},pe=(u,m,g,y,b,C,P)=>{const A=()=>{if(u.isMounted){let{next:N,bu:F,u:R,parent:j,vnode:U}=u,G=N,W;ut(u,!1),N?(N.el=U.el,ne(u,N,P)):N=U,F&&Wn(F),(W=N.props&&N.props.onVnodeBeforeUpdate)&&Ne(W,j,N,U),ut(u,!0);const ae=Sr(u),Ee=u.subTree;u.subTree=ae,x(Ee,ae,d(Ee.el),En(Ee),u,b,C),N.el=ae.el,G===null&&Ql(u,ae.el),R&&ve(R,b),(W=N.props&&N.props.onVnodeUpdated)&&ve(()=>Ne(W,j,N,U),b)}else{let N;const{el:F,props:R}=m,{bm:j,m:U,parent:G}=u,W=en(m);if(ut(u,!1),j&&Wn(j),!W&&(N=R&&R.onVnodeBeforeMount)&&Ne(N,G,m),ut(u,!0),F&&Or){const ae=()=>{u.subTree=Sr(u),Or(F,u.subTree,u,b,null)};W?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=Sr(u);x(null,ae,g,y,u,b,C),m.el=ae.el}if(U&&ve(U,b),!W&&(N=R&&R.onVnodeMounted)){const ae=m;ve(()=>Ne(N,G,ae),b)}(m.shapeFlag&256||G&&en(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&ve(u.a,b),u.isMounted=!0,m=g=y=null}},E=u.effect=new wa(A,()=>pr(_),u.scope),_=u.update=()=>E.run();_.id=u.uid,ut(u,!0),_()},ne=(u,m,g)=>{m.component=u;const y=u.vnode.props;u.vnode=m,u.next=null,Pf(u,m.props,y,g),Tf(u,m.children,g),Kt(),ci(),Vt()},V=(u,m,g,y,b,C,P,A,E=!1)=>{const _=u&&u.children,N=u?u.shapeFlag:0,F=m.children,{patchFlag:R,shapeFlag:j}=m;if(R>0){if(R&128){Cn(_,F,g,y,b,C,P,A,E);return}else if(R&256){lt(_,F,g,y,b,C,P,A,E);return}}j&8?(N&16&&$e(_,b,C),F!==_&&f(g,F)):N&16?j&16?Cn(_,F,g,y,b,C,P,A,E):$e(_,b,C,!0):(N&8&&f(g,""),j&16&&te(F,g,y,b,C,P,A,E))},lt=(u,m,g,y,b,C,P,A,E)=>{u=u||Rt,m=m||Rt;const _=u.length,N=m.length,F=Math.min(_,N);let R;for(R=0;R<F;R++){const j=m[R]=E?Qe(m[R]):Re(m[R]);x(u[R],j,g,null,b,C,P,A,E)}_>N?$e(u,b,C,!0,!1,F):te(m,g,y,b,C,P,A,E,F)},Cn=(u,m,g,y,b,C,P,A,E)=>{let _=0;const N=m.length;let F=u.length-1,R=N-1;for(;_<=F&&_<=R;){const j=u[_],U=m[_]=E?Qe(m[_]):Re(m[_]);if(qt(j,U))x(j,U,g,null,b,C,P,A,E);else break;_++}for(;_<=F&&_<=R;){const j=u[F],U=m[R]=E?Qe(m[R]):Re(m[R]);if(qt(j,U))x(j,U,g,null,b,C,P,A,E);else break;F--,R--}if(_>F){if(_<=R){const j=R+1,U=j<N?m[j].el:y;for(;_<=R;)x(null,m[_]=E?Qe(m[_]):Re(m[_]),g,U,b,C,P,A,E),_++}}else if(_>R)for(;_<=F;)Fe(u[_],b,C,!0),_++;else{const j=_,U=_,G=new Map;for(_=U;_<=R;_++){const ye=m[_]=E?Qe(m[_]):Re(m[_]);ye.key!=null&&G.set(ye.key,_)}let W,ae=0;const Ee=R-U+1;let Pt=!1,Qa=0;const Xt=new Array(Ee);for(_=0;_<Ee;_++)Xt[_]=0;for(_=j;_<=F;_++){const ye=u[_];if(ae>=Ee){Fe(ye,b,C,!0);continue}let Me;if(ye.key!=null)Me=G.get(ye.key);else for(W=U;W<=R;W++)if(Xt[W-U]===0&&qt(ye,m[W])){Me=W;break}Me===void 0?Fe(ye,b,C,!0):(Xt[Me-U]=_+1,Me>=Qa?Qa=Me:Pt=!0,x(ye,m[Me],g,null,b,C,P,A,E),ae++)}const ei=Pt?Nf(Xt):Rt;for(W=ei.length-1,_=Ee-1;_>=0;_--){const ye=U+_,Me=m[ye],ti=ye+1<N?m[ye+1].el:y;Xt[_]===0?x(null,Me,g,ti,b,C,P,A,E):Pt&&(W<0||_!==ei[W]?ft(Me,g,ti,2):W--)}}},ft=(u,m,g,y,b=null)=>{const{el:C,type:P,transition:A,children:E,shapeFlag:_}=u;if(_&6){ft(u.component.subTree,m,g,y);return}if(_&128){u.suspense.move(m,g,y);return}if(_&64){P.move(u,m,g,Ot);return}if(P===Ce){r(C,m,g);for(let F=0;F<E.length;F++)ft(E[F],m,g,y);r(u.anchor,m,g);return}if(P===Fr){T(u,m,g);return}if(y!==2&&_&1&&A)if(y===0)A.beforeEnter(C),r(C,m,g),ve(()=>A.enter(C),b);else{const{leave:F,delayLeave:R,afterLeave:j}=A,U=()=>r(C,m,g),G=()=>{F(C,()=>{U(),j&&j()})};R?R(C,U,G):G()}else r(C,m,g)},Fe=(u,m,g,y=!1,b=!1)=>{const{type:C,props:P,ref:A,children:E,dynamicChildren:_,shapeFlag:N,patchFlag:F,dirs:R}=u;if(A!=null&&Qr(A,null,g,u,!0),N&256){m.ctx.deactivate(u);return}const j=N&1&&R,U=!en(u);let G;if(U&&(G=P&&P.onVnodeBeforeUnmount)&&Ne(G,m,u),N&6)Bs(u.component,g,y);else{if(N&128){u.suspense.unmount(g,y);return}j&&ct(u,null,m,"beforeUnmount"),N&64?u.type.remove(u,m,g,b,Ot,y):_&&(C!==Ce||F>0&&F&64)?$e(_,m,g,!1,!0):(C===Ce&&F&384||!b&&N&16)&&$e(E,m,g),y&&Ja(u)}(U&&(G=P&&P.onVnodeUnmounted)||j)&&ve(()=>{G&&Ne(G,m,u),j&&ct(u,null,m,"unmounted")},g)},Ja=u=>{const{type:m,el:g,anchor:y,transition:b}=u;if(m===Ce){zs(g,y);return}if(m===Fr){S(u);return}const C=()=>{a(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:A}=b,E=()=>P(g,C);A?A(u.el,C,E):E()}else C()},zs=(u,m)=>{let g;for(;u!==m;)g=p(u),a(u),u=g;a(m)},Bs=(u,m,g)=>{const{bum:y,scope:b,update:C,subTree:P,um:A}=u;y&&Wn(y),b.stop(),C&&(C.active=!1,Fe(P,u,m,g)),A&&ve(A,m),ve(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$e=(u,m,g,y=!1,b=!1,C=0)=>{for(let P=C;P<u.length;P++)Fe(u[P],m,g,y,b)},En=u=>u.shapeFlag&6?En(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Za=(u,m,g)=>{u==null?m._vnode&&Fe(m._vnode,null,null,!0):x(m._vnode||null,u,m,null,null,null,g),ci(),zo(),m._vnode=u},Ot={p:x,um:Fe,m:ft,r:Ja,mt:Er,mc:te,pc:V,pbc:Ae,n:En,o:e};let kr,Or;return t&&([kr,Or]=t(Ot)),{render:Za,hydrate:kr,createApp:Ef(Za,kr)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function as(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||as(o,s)),s.type===br&&(s.el=o.el)}}function Nf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Rf=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),nn=[];let Pe=null;function _e(e=!1){nn.push(Pe=e?null:[])}function Df(){nn.pop(),Pe=nn[nn.length-1]||null}let dn=1;function _i(e){dn+=e}function is(e){return e.dynamicChildren=dn>0?Pe||Rt:null,Df(),dn>0&&Pe&&Pe.push(e),e}function wt(e,t,n,r,a,i){return is(Z(e,t,n,r,a,i,!0))}function Ft(e,t,n,r,a){return is(Q(e,t,n,r,a,!0))}function nr(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",os=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||se(e)||$(e)?{i:me,r:e,k:t,f:!!n}:e:null);function Z(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&Vn(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:me};return s?(Ma(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),dn>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const Q=Lf;function Lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===hf)&&(e=at),nr(e)){const s=Bt(e,t,!0);return n&&Ma(s,n),dn>0&&!i&&Pe&&(s.shapeFlag&6?Pe[Pe.indexOf(e)]=s:Pe.push(s)),s.patchFlag|=-2,s}if(Xf(e)&&(e=e.__vccOpts),t){t=jf(t);let{class:s,style:l}=t;s&&!fe(s)&&(t.class=Ut(s)),ee(l)&&(Do(l)&&!L(l)&&(l=le({},l)),t.style=dr(l))}const o=fe(e)?1:ef(e)?128:Rf(e)?64:ee(e)?4:$(e)?2:0;return Z(e,t,n,r,a,o,i,!0)}function jf(e){return e?Do(e)||yr in e?le({},e):e:null}function Bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Uf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&os(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Vn(t)):[a,Vn(t)]:Vn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $f(e=" ",t=0){return Q(br,null,e,t)}function rr(e="",t=!1){return t?(_e(),Ft(at,null,e)):Q(at,null,e)}function Re(e){return e==null||typeof e=="boolean"?Q(at):L(e)?Q(Ce,null,e.slice()):typeof e=="object"?Qe(e):Q(br,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ma(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(yr in t)?t._ctx=me:a===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:me},n=32):(t=String(t),r&64?(n=16,t=[$f(t)]):n=8);e.children=t,e.shapeFlag|=n}function Uf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ut([t.class,r.class]));else if(a==="style")t.style=dr([t.style,r.style]);else if(lr(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ne(e,t,n,r=null){Te(e,t,7,[n,r])}const zf=Zo();let Bf=0;function Yf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||zf,i={uid:Bf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,a),emitsOptions:Yo(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Xl.bind(null,i),e.ce&&e.ce(i),i}let oe=null,Na,St,xi="__VUE_INSTANCE_SETTERS__";(St=Yr()[xi])||(St=Yr()[xi]=[]),St.push(e=>oe=e),Na=e=>{St.length>1?St.forEach(t=>t(e)):St[0](e)};const Yt=e=>{Na(e),e.scope.on()},_t=()=>{oe&&oe.scope.off(),Na(null)};function ss(e){return e.vnode.shapeFlag&4}let Ht=!1;function Hf(e,t=!1){Ht=t;const{props:n,children:r}=e.vnode,a=ss(e);Of(e,n,a,t),If(e,r);const i=a?Wf(e,t):void 0;return Ht=!1,i}function Wf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,bf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Vf(e):null;Yt(e),Kt();const i=nt(r,e,0,[e.props,a]);if(Vt(),_t(),yo(i)){if(i.then(_t,_t),t)return i.then(o=>{Ai(e,o,t)}).catch(o=>{bn(o,e,0)});e.asyncDep=i}else Ai(e,i,t)}else ls(e,t)}function Ai(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=jo(t)),ls(e,n)}let Ci;function ls(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template||Ta(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,c)}}e.render=r.render||Ie}Yt(e),Kt(),yf(e),Vt(),_t()}function Kf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}}))}function Vf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Kf(e)},slots:e.slots,emit:e.emit,expose:t}}function wr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(jo(Lo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}}))}function Gf(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function Xf(e){return $(e)&&"__vccOpts"in e}const ke=(e,t)=>Bl(e,t,Ht);function qf(e,t,n){const r=arguments.length;return r===2?ee(t)&&!L(t)?nr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nr(n)&&(n=[n]),Q(e,t,n))}const Jf=Symbol.for("v-scx"),Zf=()=>Kn(Jf),Qf="3.3.4",ec="http://www.w3.org/2000/svg",mt=typeof document<"u"?document:null,Ei=mt&&mt.createElement("template"),tc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(ec,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ei.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ei.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function rc(e,t,n){const r=e.style,a=fe(n);if(n&&!a){if(t&&!fe(t))for(const i in t)n[i]==null&&ea(r,i,"");for(const i in n)ea(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ki=/\s*!important$/;function ea(e,t,n){if(L(n))n.forEach(r=>ea(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ac(e,t);ki.test(n)?e.setProperty(Ct(r),n.replace(ki,""),"important"):e[r]=n}}const Oi=["Webkit","Moz","ms"],Mr={};function ac(e,t){const n=Mr[t];if(n)return n;let r=je(t);if(r!=="filter"&&r in e)return Mr[t]=r;r=ur(r);for(let a=0;a<Oi.length;a++){const i=Oi[a]+r;if(i in e)return Mr[t]=i}return t}const Pi="http://www.w3.org/1999/xlink";function ic(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pi,t.slice(6,t.length)):e.setAttributeNS(Pi,t,n);else{const i=el(t);n==null||i&&!xo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function oc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=xo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Tt(e,t,n,r){e.addEventListener(t,n,r)}function sc(e,t,n,r){e.removeEventListener(t,n,r)}function lc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=fc(t);if(r){const c=i[t]=dc(r,a);Tt(e,s,c,l)}else o&&(sc(e,s,o,l),i[t]=void 0)}}const Si=/(?:Once|Passive|Capture)$/;function fc(e){let t;if(Si.test(e)){t={};let r;for(;r=e.match(Si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let Nr=0;const cc=Promise.resolve(),uc=()=>Nr||(cc.then(()=>Nr=0),Nr=Date.now());function dc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Te(mc(r,n.value),t,5,[r])};return n.value=e,n.attached=uc(),n}function mc(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ii=/^on[a-z]/,pc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?nc(e,r,a):t==="style"?rc(e,n,r):lr(t)?ga(t)||lc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gc(e,t,r,a))?oc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ic(e,t,r,a))};function gc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ii.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ii.test(t)&&fe(n)?!1:t in e}const Ti=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>Wn(t,n):t};function hc(e){e.target.composing=!0}function Fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mm={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ti(a);const i=r||a.props&&a.props.type==="number";Tt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Br(s)),e._assign(s)}),n&&Tt(e,"change",()=>{e.value=e.value.trim()}),t||(Tt(e,"compositionstart",hc),Tt(e,"compositionend",Fi),Tt(e,"change",Fi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ti(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Br(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},vc=["ctrl","shift","alt","meta"],bc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>vc.some(n=>e[`${n}Key`]&&!t.includes(n))},yc=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=bc[t[a]];if(i&&i(n,t))return}return e(n,...r)},wc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nm=(e,t)=>n=>{if(!("key"in n))return;const r=Ct(n.key);if(t.some(a=>a===r||wc[a]===r))return e(n)},_c=le({patchProp:pc},tc);let Mi;function xc(){return Mi||(Mi=Ff(_c))}const Ac=(...e)=>{const t=xc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cc(e){return fe(e)?document.querySelector(e):e}const Ec="modulepreload",kc=function(e,t){return new URL(e,t).href},Ni={},Mn=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=kc(i,r),i in Ni)return;Ni[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ec,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ta={exports:{}},Rr,Ri;function Pc(){if(Ri)return Rr;Ri=1;var e=1e3,t=e*60,n=t*60,r=n*24,a=r*7,i=r*365.25;Rr=function(f,d){d=d||{};var p=typeof f;if(p==="string"&&f.length>0)return o(f);if(p==="number"&&isFinite(f))return d.long?l(f):s(f);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(f))};function o(f){if(f=String(f),!(f.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(f);if(d){var p=parseFloat(d[1]),h=(d[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return p*i;case"weeks":case"week":case"w":return p*a;case"days":case"day":case"d":return p*r;case"hours":case"hour":case"hrs":case"hr":case"h":return p*n;case"minutes":case"minute":case"mins":case"min":case"m":return p*t;case"seconds":case"second":case"secs":case"sec":case"s":return p*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return p;default:return}}}}function s(f){var d=Math.abs(f);return d>=r?Math.round(f/r)+"d":d>=n?Math.round(f/n)+"h":d>=t?Math.round(f/t)+"m":d>=e?Math.round(f/e)+"s":f+"ms"}function l(f){var d=Math.abs(f);return d>=r?c(f,d,r,"day"):d>=n?c(f,d,n,"hour"):d>=t?c(f,d,t,"minute"):d>=e?c(f,d,e,"second"):f+" ms"}function c(f,d,p,h){var O=d>=p*1.5;return Math.round(f/p)+" "+h+(O?"s":"")}return Rr}function Sc(e){n.debug=n,n.default=n,n.coerce=l,n.disable=i,n.enable=a,n.enabled=o,n.humanize=Pc(),n.destroy=c,Object.keys(e).forEach(f=>{n[f]=e[f]}),n.names=[],n.skips=[],n.formatters={};function t(f){let d=0;for(let p=0;p<f.length;p++)d=(d<<5)-d+f.charCodeAt(p),d|=0;return n.colors[Math.abs(d)%n.colors.length]}n.selectColor=t;function n(f){let d,p=null,h,O;function x(...k){if(!x.enabled)return;const w=x,v=Number(new Date),T=v-(d||v);w.diff=T,w.prev=d,w.curr=v,d=v,k[0]=n.coerce(k[0]),typeof k[0]!="string"&&k.unshift("%O");let S=0;k[0]=k[0].replace(/%([a-zA-Z%])/g,(D,K)=>{if(D==="%%")return"%";S++;const te=n.formatters[K];if(typeof te=="function"){const ce=k[S];D=te.call(w,ce),k.splice(S,1),S--}return D}),n.formatArgs.call(w,k),(w.log||n.log).apply(w,k)}return x.namespace=f,x.useColors=n.useColors(),x.color=n.selectColor(f),x.extend=r,x.destroy=n.destroy,Object.defineProperty(x,"enabled",{enumerable:!0,configurable:!1,get:()=>p!==null?p:(h!==n.namespaces&&(h=n.namespaces,O=n.enabled(f)),O),set:k=>{p=k}}),typeof n.init=="function"&&n.init(x),x}function r(f,d){const p=n(this.namespace+(typeof d>"u"?":":d)+f);return p.log=this.log,p}function a(f){n.save(f),n.namespaces=f,n.names=[],n.skips=[];let d;const p=(typeof f=="string"?f:"").split(/[\s,]+/),h=p.length;for(d=0;d<h;d++)p[d]&&(f=p[d].replace(/\*/g,".*?"),f[0]==="-"?n.skips.push(new RegExp("^"+f.slice(1)+"$")):n.names.push(new RegExp("^"+f+"$")))}function i(){const f=[...n.names.map(s),...n.skips.map(s).map(d=>"-"+d)].join(",");return n.enable(""),f}function o(f){if(f[f.length-1]==="*")return!0;let d,p;for(d=0,p=n.skips.length;d<p;d++)if(n.skips[d].test(f))return!1;for(d=0,p=n.names.length;d<p;d++)if(n.names[d].test(f))return!0;return!1}function s(f){return f.toString().substring(2,f.toString().length-2).replace(/\.\*\?$/,"*")}function l(f){return f instanceof Error?f.stack||f.message:f}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return n.enable(n.load()),n}var Ic=Sc;(function(e,t){t.formatArgs=r,t.save=a,t.load=i,t.useColors=n,t.storage=o(),t.destroy=(()=>{let l=!1;return()=>{l||(l=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function n(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function r(l){if(l[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+l[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const c="color: "+this.color;l.splice(1,0,c,"color: inherit");let f=0,d=0;l[0].replace(/%[a-zA-Z%]/g,p=>{p!=="%%"&&(f++,p==="%c"&&(d=f))}),l.splice(d,0,c)}t.log=console.debug||console.log||(()=>{});function a(l){try{l?t.storage.setItem("debug",l):t.storage.removeItem("debug")}catch{}}function i(){let l;try{l=t.storage.getItem("debug")}catch{}return!l&&typeof process<"u"&&"env"in process&&(l={}.DEBUG),l}function o(){try{return localStorage}catch{}}e.exports=Ic(t);const{formatters:s}=e.exports;s.j=function(l){try{return JSON.stringify(l)}catch(c){return"[UnexpectedJSONParseError]: "+c.message}}})(ta,ta.exports);var Tc=ta.exports;const Fc=Oc(Tc),ze=Fc("egg-game"),rn=(e=1,t=25)=>Math.floor(Math.random()*(t-e+1))+e,an=e=>new Promise(t=>setTimeout(t,e)),Mc=(e,t)=>{const n=new SpeechSynthesisUtterance;if(n.text=e,n.rate=.85,n.pitch=1.7,t)if(typeof t=="string"){const r=speechSynthesis.getVoices(),a=r.find(i=>i.name===t)??r[0];n.voice=a}else try{n.voice=t}catch{console.warn("don't do the voice...")}speechSynthesis.speak(n)};function Nc(e){let t=0;for(let n=0,r=e.length;n<r;n++)if(e[n]==33&&e[n+1]==249&&e[n+2]==4&&e[n+7]==0){const a=e[n+5]<<8|e[n+4]&255;t+=a<2?10:a}return t/100}async function Di(e){const n=await(await fetch(e)).arrayBuffer();return Nc(new Uint8Array(n))}function Rc(){const e="egg-game",t=localStorage.getItem(e)??"{}",n={min:35,max:91};try{const r=JSON.parse(t);Object.assign(n,r)}catch{}return n}function Dc(e,t=250){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}}const Li=Rc();function Lc(e=Li.min,t=Li.max){const n=H(0),r=H(rn(e,t)),a=()=>{ze("egg-info: ",{random:r.value,totalEggs:n.value})};return a(),{random:r,totalEggs:n,resetEggs:()=>{n.value=0,r.value=rn(e,t),a()},eatEgg:()=>n.value++}}function jc(){const e=H(!1),t=H();return{showPopup:e,currentMessage:t,displayPopup:async(r,a=3e3)=>{r&&(t.value=r),e.value=!0,await an(a),e.value=!1}}}function $c(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(a){a(n)}),(r=e.get("*"))&&r.slice().map(function(a){a(t,n)})}}}const qe=$c(),Nn=H(!1),Uc=H(!1),Je=H(),ji=H({display:"none"}),It=H();function Ra(){const e=H(),t=(s=!1)=>{Uc.value=s,qe.emit("drag-egg")},n=s=>{It.value=s,Nn.value=!0,qe.emit("moved-egg",s),ji.value={position:"absolute",right:`calc(100vw - ${Math.round(s.targetTouches[0].pageX*1.3)+"px"})`,top:`calc(100vh - ${Math.round(s.targetTouches[0].pageY*.8)+"px"})`}},r=()=>{(Je.value!==void 0||Je.value)&&qe.emit("drop-egg"),Nn.value=!1,It.value=void 0,Je.value=!1},a=()=>{It.value=void 0,Nn.value=!1,Je.value=!1,qe.emit("cancel-drag")},i=s=>{qe.on("moved-egg",Dc(()=>{o(s)&&!Je.value?(Je.value=!0,qe.emit("did-touch")):Je.value=!1},50))},o=s=>{var c;if(!It)return!1;const l=(c=It.value)==null?void 0:c.touches[0];return l?(e.value||(e.value=s.getBoundingClientRect()),l.clientX>e.value.left&&l.clientX<e.value.right&&l.clientY<e.value.bottom&&l.clientY>e.value.top):!1};return{EventBus:qe,isOverDrop:Je,moveEvent:It,movingEgg:Nn,movingEggPosition:ji,touches:o,onMove:n,waitForTouch:i,startDrag:t,stopDrag:r,cancelDrag:a}}const zc=e=>window.open(e,"_blank"),$i={"egg game":"https://www.youtube.com/watch?v=K0OSfbPJFa4","brian's hat":"https://www.youtube.com/watch?v=LO2k-BNySLI","karl havoc":"https://www.youtube.com/watch?v=J4Fv3LFGCgo","hot dog guy":"https://www.youtube.com/watch?v=WLfAf8oHrMo&pp=ygUMdGltIHJvYmluc29u","sloppy steaks":"https://www.youtube.com/watch?v=buK45NW_ikI&"},Bc=e=>zc($i[e??Object.keys($i)[0]]),Dr={goToVideo:Bc},Yc=""+new URL("Closed-Mouth-Egg-Up-ad581f9e.png",import.meta.url).href,Hc=""+new URL("Open-Mouth-Egg-Down-ed7427b5.png",import.meta.url).href,Wc=""+new URL("Open-Mouth-Egg-Up-eef1b0d7.png",import.meta.url).href;function Kc(e){return Co()?(al(e),!0):!1}function et(e){return typeof e=="function"?e():ue(e)}const Da=typeof window<"u",Vc=()=>{};var Gc=Object.defineProperty,Xc=Object.defineProperties,qc=Object.getOwnPropertyDescriptors,Ui=Object.getOwnPropertySymbols,Jc=Object.prototype.hasOwnProperty,Zc=Object.prototype.propertyIsEnumerable,zi=(e,t,n)=>t in e?Gc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qc=(e,t)=>{for(var n in t||(t={}))Jc.call(t,n)&&zi(e,n,t[n]);if(Ui)for(var n of Ui(t))Zc.call(t,n)&&zi(e,n,t[n]);return e},eu=(e,t)=>Xc(e,qc(t));function tu(e){if(!se(e))return jl(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Ll(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const a=[...e.value];a[n]=r,e.value=a}else{const a=eu(Qc({},e.value),{[n]:r});Object.setPrototypeOf(a,e.value),e.value=a}}}));return t}function nu(e){var t;const n=et(e);return(t=n==null?void 0:n.$el)!=null?t:n}const fs=Da?window:void 0;function gt(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=fs):[t,n,r,a]=e,!t)return Vc;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(f=>f()),i.length=0},s=(f,d,p,h)=>(f.addEventListener(d,p,h),()=>f.removeEventListener(d,p,h)),l=yt(()=>[nu(t),et(a)],([f,d])=>{o(),f&&i.push(...n.flatMap(p=>r.map(h=>s(f,p,h,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return Kc(c),c}var ru=Object.defineProperty,au=Object.defineProperties,iu=Object.getOwnPropertyDescriptors,Bi=Object.getOwnPropertySymbols,ou=Object.prototype.hasOwnProperty,su=Object.prototype.propertyIsEnumerable,Yi=(e,t,n)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lu=(e,t)=>{for(var n in t||(t={}))ou.call(t,n)&&Yi(e,n,t[n]);if(Bi)for(var n of Bi(t))su.call(t,n)&&Yi(e,n,t[n]);return e},fu=(e,t)=>au(e,iu(t));function cu(e,t={}){var n,r;const{pointerTypes:a,preventDefault:i,stopPropagation:o,exact:s,onMove:l,onEnd:c,onStart:f,initialValue:d,axis:p="both",draggingElement:h=fs,handle:O=e}=t,x=H((n=et(d))!=null?n:{x:0,y:0}),k=H(),w=D=>a?a.includes(D.pointerType):!0,v=D=>{et(i)&&D.preventDefault(),et(o)&&D.stopPropagation()},T=D=>{if(!w(D)||et(s)&&D.target!==et(e))return;const K=et(e).getBoundingClientRect(),te={x:D.clientX-K.left,y:D.clientY-K.top};(f==null?void 0:f(te,D))!==!1&&(k.value=te,v(D))},S=D=>{if(!w(D)||!k.value)return;let{x:K,y:te}=x.value;(p==="x"||p==="both")&&(K=D.clientX-k.value.x),(p==="y"||p==="both")&&(te=D.clientY-k.value.y),x.value={x:K,y:te},l==null||l(x.value,D),v(D)},z=D=>{w(D)&&k.value&&(k.value=void 0,c==null||c(x.value,D),v(D))};if(Da){const D={capture:(r=t.capture)!=null?r:!0};gt(O,"pointerdown",T,D),gt(h,"pointermove",S,D),gt(h,"pointerup",z,D)}return fu(lu({},tu(x)),{position:x,isDragging:ke(()=>!!k.value),style:ke(()=>`left:${x.value.x}px;top:${x.value.y}px;`)})}function uu(e,t){const n=H(!1);let r=0;return Da&&(gt(e,"dragenter",a=>{a.preventDefault(),r+=1,n.value=!0}),gt(e,"dragover",a=>{a.preventDefault()}),gt(e,"dragleave",a=>{a.preventDefault(),r-=1,r===0&&(n.value=!1)}),gt(e,"drop",a=>{var i,o;a.preventDefault(),r=0,n.value=!1;const s=Array.from((o=(i=a.dataTransfer)==null?void 0:i.files)!=null?o:[]);t==null||t(s.length===0?null:s)})),{isOverDropZone:n}}const du=["src"],mu=Et({__name:"EggGuy",props:{legState:{default:"Down"},eating:{type:Boolean,default:!1},celebrate:{type:Boolean,default:!1},isDraggingTouch:{type:Boolean}},emits:["started-winning-celebration","started-walking","stopped-waling","showing-bush-bare-back-balls-and-butt","showing-butt-frame","ended-winning-celebration"],setup(e,{emit:t}){const{isOverDrop:n,waitForTouch:r,stopDrag:a}=Ra(),i=H(5430),o=H(8050),s=H(!1),l=H(!1),c=H(!1),f=H(null),d=ke(()=>e.eating?"Closed":"Open"),p=new URL(""+new URL("egg-walking-913eefc3.gif",import.meta.url).href,self.location).href,h=new URL(""+new URL("bare-back-balls-butt-d080f817.gif",import.meta.url).href,self.location).href,O=new URL(""+new URL("egg-butt-frame-3bfa0ccb.png",import.meta.url).href,self.location).href,x=ke(()=>e.celebrate?s.value?p:l.value?h:O:new URL(Object.assign({"../assets/images/Closed-Mouth-Egg-Up.png":Yc,"../assets/images/Open-Mouth-Egg-Down.png":Hc,"../assets/images/Open-Mouth-Egg-Up.png":Wc})[`../assets/images/${d.value}-Mouth-Egg-${e.legState}.png`],self.location).href),k=()=>{a()},w=async()=>{t("started-winning-celebration"),s.value=!0,t("started-walking"),await an(i.value),s.value=!1,l.value=!0,t("stopped-waling"),t("showing-bush-bare-back-balls-and-butt"),await an(o.value),c.value=!0,l.value=!1,t("showing-butt-frame"),await an(5e3),t("ended-winning-celebration")};return yt(()=>e.celebrate,v=>{ze("should celebrate: ",v),v&&w()}),vr(()=>{r(f.value);const{isOverDropZone:v}=uu(f.value,k);yt(()=>v,T=>{n.value=T.value}),Di(p).then(T=>{i.value=T*1e3-50,ze(`set walking gif timeout: ${T}`)}),Di(h).then(T=>{o.value=T*1e3-50,ze(`set nude gif timeout: ${T}`)})}),(v,T)=>(_e(),wt("div",{class:Ut(v.celebrate?"egg-guy":{"egg-guy-down":v.legState==="Down","egg-guy-chewing":v.eating,"egg-guy":v.legState==="Up"&&!v.eating})},[Z("div",{class:"egg-guy-img-wrapper",ref_key:"dropZoneRef",ref:f},[Z("img",{src:x.value,alt:"",class:Ut(v.celebrate?"walking-egg":"")},null,10,du)],512)],2))}}),pu={class:"egg-basket-wrapper"},gu=["src"],hu=["disabled","onDragstart"],vu=Z("div",{class:"draggable-egg"},null,-1),bu={key:0,class:"eggs-count"},yu={key:0,class:"moving-egg"},wu=["src"],_u=Et({__name:"EggBasket",props:{eggCount:{},disabled:{type:Boolean,default:!1}},setup(e){const{movingEgg:t,movingEggPosition:n,onMove:r,startDrag:a,stopDrag:i,cancelDrag:o}=Ra(),s=H(null),l=new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA7CAQAAACnQNDuAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cGAwUaFYFbBw8AAAOcSURBVFjDtdjfS1RpHMfx9zx7hsYZHXdm8uiMYlNq6axKMhnJXFS7kBApBQaBEOwmsVc54U3d9Ad00VX3EXUhtLFdRCThIoQRzIUllIqulr/G0B11ccapGfvuheu2rLqa5/FzeTi8+MJ5Djyfr40Nc44SfiGOv2zp+5wf8mu/DeS6YenPhenF/uXu3N/iv/tpYZJf2WZuAd8BedWem0eHop86pU8mZU7mZFL6pFOin44OeW7mVa++dWs7ZDvPcXOwwHsjMnFb3stGeS+3JTLhvXGwwM1z2rciL9AGBOqD3dc2Ab/A1yTYHaiHNi78H3mZi0Bhc93oA1mRrbIiD6RutLAZLnJ5M7KDq4DZEvnwYktwLS8k8sFsgat0bEQ+RACzsSEe2zYpIhKThrjZCMLD9ahJIcU1NYM9X0WKiPRIzWBxjYn5X/IMYY54Sh7f/WpSROSulDw+4glz5t/ka64AvuvRz5kdoRmJfvZdhyu8/oJWYlIUjkyN7YgUERmTyFRR2KQSAAVd7OO43RZtCwS3+9OtS5C2gC163L6PrtUHVeThPtm0sLjjOUVEFqVpwX0yj6rVSctoMlyXWvPdO54TwE1rvutSs1EG8CMBvOFTswlLc4qIJOTUrDcc4CdUA9Nw9vRej6U5ATyc3svZaSIQwusNxd5YnlNE5I2EYl5vCDVF+nBdqMLynAAV1IXSh6dQi+w5EXHataB2Is49JxYxyp1yrF4LCVCP95jPqeKlpYcOaEMPUHooXqqyleUF1r/8WjyUF2Qrlb22IsemDbVRkWOvVY6q/dpIgP04qpQz6NeK+nEGlavIpxX14SpSLk+uVjQXl0fluBxaUQc5LmUYhlb0GwxD6TtOq7FhQwmiFRUElc2uaEVXyGbVcjKtFU2znFTJ+SWt6BLJeZWcSWhF/yA5o1LvprWicVLvVHpgTCs6RnpAZfqHl/UdKmF4OdOvjMGR2Xlt6DzDs8ag8o+PD41qQ0eZGPKPq5FU4mVMGxoj8XIkpfL52NObymghM/SmPvbko4pxvOp7O6wFHabvreNVMaqDRGLm6TMt6DNmniYSHaheAvDoyZz1EzDPkzkeBegFOEOr4b/fafl61in++63G32VC/00a6KKR83b/vTuW0Dviv3fe3rh259fVTvz/tBNgl3rUrjQ+ABNzx920eqCo2re+m1pr0QWbtWhrfb+dnzf7J3ZhMwG7skOBXdn2gI691Cb3M2sbtL8Ak58A4uQAC48AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMDNUMDU6MjY6MTErMDA6MDCjcAXsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTAzVDA1OjI2OjExKzAwOjAw0i29UAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wNi0wM1QwNToyNjoyMSswMDowMAu3m2wAAAAASUVORK5CYII=",self.location).href,c=new Image(42,59);c.src=l;const f=()=>{a(!0)},d=x=>{var k;if(x){e.disabled&&x.preventDefault();try{(k=x==null?void 0:x.dataTransfer)==null||k.setDragImage(c,20,60)}catch{}a(!1)}},p=()=>{n.value={display:"none"},i()},h=()=>{n.value={display:"none"},o()},O=new URL(""+new URL("Basket-6d5af106.png",import.meta.url).href,self.location).href;return vr(()=>{cu(s)}),(x,k)=>(_e(),wt(Ce,null,[Z("div",pu,[Z("img",{src:ue(O),alt:"",class:"egg-basket"},null,8,gu),Z("div",{disabled:x.disabled,id:"egg-basket",ref_key:"dragElm",ref:s,draggable:"true",class:"draggable-container",onDragstart:yc(d,["stop"]),onTouchstartPassive:f,onTouchmovePassive:k[0]||(k[0]=(...w)=>ue(r)&&ue(r)(...w)),onTouchend:p,onDragend:h,onDrop:h},[vu,x.eggCount?(_e(),wt("p",bu,"EGGS: "+tl(x.eggCount),1)):rr("",!0)],40,hu)]),ue(t)?(_e(),wt("div",yu,[Z("img",{src:ue(l),height:"60",alt:"",style:dr(ue(n))},null,12,wu)])):rr("",!0)],64))}});const xu={class:"egg-game-container"},Au={class:"egg-game-wrapper"},Cu=Z("div",{class:"egg-game-header"},null,-1),Eu={class:"egg-game-body"},ku=Z("h1",null,"FEED EGGS",-1),Ou={class:"egg-game-itself"},Pu={class:"egg-guy-container"},Su={class:"egg-basket-container"},Iu=Et({__name:"EggGame",props:{shouldGive:{type:Boolean}},setup(e){const t=Fn(()=>Mn(()=>import("./Popup-713e3c5d.js"),["./Popup-713e3c5d.js","./Popup-ca2eaba6.css"],import.meta.url)),n=Fn(()=>Mn(()=>import("./VoiceMessage-65f5b597.js"),["./VoiceMessage-65f5b597.js","./VoiceMessage.vue_vue_type_script_setup_true_lang-9183be94.js"],import.meta.url)),r=Fn(()=>Mn(()=>import("./OutOfEggs-5bb96267.js"),["./OutOfEggs-5bb96267.js","./VoiceMessage.vue_vue_type_script_setup_true_lang-9183be94.js","./OutOfEggs-d787330b.css"],import.meta.url)),a=Fn(()=>Mn(()=>import("./GottaGive-6bb1d8ed.js"),["./GottaGive-6bb1d8ed.js","./VoiceMessage.vue_vue_type_script_setup_true_lang-9183be94.js","./GottaGive-a2475b8d.css"],import.meta.url)),i=H(!1),o=H(!1),s=H(!1),l=H(!1),c=H(0),f=H(!1),{showPopup:d,currentMessage:p,displayPopup:h}=jc(),{random:O,totalEggs:x,resetEggs:k,eatEgg:w}=Lc(),{EventBus:v}=Ra(),T=()=>{f.value=!1,c.value=0,s.value=!1,l.value=!1,d.value=!1,k()},S=()=>{ze("you didn't buy any eggs"),T(),h("I don't want to be around anymore...")},z=()=>{h("You're looking at a nude egg.",5e3)},D=()=>{ze("bought more eggs"),s.value=!1,d.value=!1,l.value=!1,c.value=80},K=()=>{i.value=!1},te=()=>{i.value=!0},ce=()=>{o.value=!0,i.value=!1,setTimeout(async()=>{o.value=!1,w(),ze(`totalEggs: ${x.value}`),c.value?(c.value-=c.value===80?40:1,c.value===40?(l.value=!0,h("You now have 40 eggs").then(()=>l.value=!1),ze("that one egg was 40 eggs!?")):(rn(1,6)===2||c.value===1)&&(l.value=!0,await h("41 EGGS"),Mc("you win","Eddy (English (US))"),await an(300),await h("Congrats big boy"),f.value=!0)):x.value===O.value?(l.value=!0,s.value=!0,l.value=!0,d.value=!0):x.value>=10&&(l.value=!1,rn(1,6)===3&&h(`${rn(2,10)} EGGS`))},1e3)};return vr(()=>{v.on("drop-egg",ce),v.on("cancel-drag",K),v.on("drag-egg",te),v.on("did-touch",()=>ze("is over egg man"))}),localStorage.getItem("debug")&&(Dr.doTheVoice=h,Dr.showEmNude=()=>f.value=!0,window.eggs=Dr),(Ae,kt)=>(_e(),wt("div",xu,[Z("div",Au,[Cu,Z("div",Eu,[ku,Z("div",Ou,[Z("div",Pu,[Q(mu,{celebrate:f.value,"leg-state":i.value||o.value?"Up":"Down",eating:o.value,onShowingButtFrame:z,onEndedWinningCelebration:T},null,8,["celebrate","leg-state","eating"])]),Z("div",Su,[Q(_u,{"egg-count":c.value,disabled:l.value},null,8,["egg-count","disabled"])])])])]),Ae.shouldGive?(_e(),Ft(ue(t),{key:0},{default:Gr(()=>[Q(ue(a))]),_:1})):rr("",!0),ue(d)&&(ue(p)||s.value)&&!Ae.shouldGive?(_e(),Ft(ue(t),{key:1},{default:Gr(()=>[s.value?(_e(),Ft(ue(r),{key:0,onBoughtMoreEggs:D,onUserCancelled:S})):(_e(),Ft(ue(n),{key:1,message:ue(p),ref:"voiceMessage"},null,8,["message"]))]),_:1})):rr("",!0)]))}}),Tu={class:"eggcellent-header"},Fu={class:"donate-wrapper"},Mu={class:"og-artist"},Nu=Z("a",{href:"https://alec.land/",target:"_blank"},[Z("div",{class:"og-artist-wrapper"},[Z("p",null,"OG ARTIST")])],-1),Ru={class:"github-repo",title:"Go to Github Repo"},Du=Et({__name:"EggcellentHeader",emits:["open-donate","close-donate"],setup(e,{emit:t}){const n=H(!1),r=()=>{n.value=!n.value,t(n.value?"open-donate":"close-donate")},a=()=>{const i="https://github.com/CalebM1987/itysl-egg-game";window.open(i,"_blank")};return(i,o)=>{const s=gf("font-awesome-icon");return _e(),wt("div",Tu,[Z("div",Fu,[Z("button",{onClick:r,class:Ut(n.value?"donate-active":"")},"DONATE",2)]),Z("div",Mu,[Nu,Z("div",Ru,[Z("button",{onClick:a},[Q(s,{icon:"fa-brands fa-github"})])])])])}}});const Lu={id:"app"},ju=Et({__name:"App",setup(e){const t=H(!1);return(n,r)=>(_e(),wt("div",Lu,[Q(Du,{onOpenDonate:r[0]||(r[0]=a=>t.value=!0),onCloseDonate:r[1]||(r[1]=a=>t.value=!1)}),Q(Iu,{"should-give":t.value},null,8,["should-give"])]))}});function Hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ar(e){"@babel/helpers - typeof";return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ar(e)}function $u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Uu(e,t,n){return t&&Wi(e.prototype,t),n&&Wi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function La(e,t){return Bu(e)||Hu(e,t)||cs(e,t)||Ku()}function yn(e){return zu(e)||Yu(e)||cs(e)||Wu()}function zu(e){if(Array.isArray(e))return na(e)}function Bu(e){if(Array.isArray(e))return e}function Yu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function cs(e,t){if(e){if(typeof e=="string")return na(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return na(e,t)}}function na(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ku(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ki=function(){},ja={},us={},ds=null,ms={mark:Ki,measure:Ki};try{typeof window<"u"&&(ja=window),typeof document<"u"&&(us=document),typeof MutationObserver<"u"&&(ds=MutationObserver),typeof performance<"u"&&(ms=performance)}catch{}var Vu=ja.navigator||{},Vi=Vu.userAgent,Gi=Vi===void 0?"":Vi,it=ja,J=us,Xi=ds,Rn=ms;it.document;var Ge=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",ps=~Gi.indexOf("MSIE")||~Gi.indexOf("Trident/"),Dn,Ln,jn,$n,Un,He="___FONT_AWESOME___",ra=16,gs="fa",hs="svg-inline--fa",xt="data-fa-i2svg",aa="data-fa-pseudo-element",Gu="data-fa-pseudo-element-pending",$a="data-prefix",Ua="data-icon",qi="fontawesome-i2svg",Xu="async",qu=["HTML","HEAD","STYLE","SCRIPT"],vs=function(){try{return!0}catch{return!1}}(),q="classic",re="sharp",za=[q,re];function wn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var mn=wn((Dn={},ie(Dn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(Dn,re,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Dn)),pn=wn((Ln={},ie(Ln,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(Ln,re,{solid:"fass",regular:"fasr",light:"fasl"}),Ln)),gn=wn((jn={},ie(jn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(jn,re,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),jn)),Ju=wn(($n={},ie($n,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie($n,re,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),$n)),Zu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,bs="fa-layers-text",Qu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ed=wn((Un={},ie(Un,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Un,re,{900:"fass",400:"fasr",300:"fasl"}),Un)),ys=[1,2,3,4,5,6,7,8,9,10],td=ys.concat([11,12,13,14,15,16,17,18,19,20]),nd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=new Set;Object.keys(pn[q]).map(hn.add.bind(hn));Object.keys(pn[re]).map(hn.add.bind(hn));var rd=[].concat(za,yn(hn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(ys.map(function(e){return"".concat(e,"x")})).concat(td.map(function(e){return"w-".concat(e)})),on=it.FontAwesomeConfig||{};function ad(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function id(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var od=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];od.forEach(function(e){var t=La(e,2),n=t[0],r=t[1],a=id(ad(n));a!=null&&(on[r]=a)})}var ws={styleDefault:"solid",familyDefault:"classic",cssPrefix:gs,replacementClass:hs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};on.familyPrefix&&(on.cssPrefix=on.familyPrefix);var Wt=I(I({},ws),on);Wt.autoReplaceSvg||(Wt.observeMutations=!1);var M={};Object.keys(ws).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Wt[e]=n,sn.forEach(function(r){return r(M)})},get:function(){return Wt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Wt.cssPrefix=t,sn.forEach(function(n){return n(M)})},get:function(){return Wt.cssPrefix}});it.FontAwesomeConfig=M;var sn=[];function sd(e){return sn.push(e),function(){sn.splice(sn.indexOf(e),1)}}var Ze=ra,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ld(e){if(!(!e||!Ge)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var fd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=fd[Math.random()*62|0];return t}function Gt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ba(e){return e.classList?Gt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _s(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_s(e[n]),'" ')},"").trim()}function _r(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ya(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function ud(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function dd(e){var t=e.transform,n=e.width,r=n===void 0?ra:n,a=e.height,i=a===void 0?ra:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ps?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var md=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xs(){var e=gs,t=hs,n=M.cssPrefix,r=M.replacementClass,a=md;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ji=!1;function Lr(){M.autoAddCss&&!Ji&&(ld(xs()),Ji=!0)}var pd={mixout:function(){return{dom:{css:xs,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},We=it||{};We[He]||(We[He]={});We[He].styles||(We[He].styles={});We[He].hooks||(We[He].hooks={});We[He].shims||(We[He].shims=[]);var Se=We[He],As=[],gd=function e(){J.removeEventListener("DOMContentLoaded",e),ir=1,As.map(function(t){return t()})},ir=!1;Ge&&(ir=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),ir||J.addEventListener("DOMContentLoaded",gd));function hd(e){Ge&&(ir?setTimeout(e,0):As.push(e))}function _n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?_s(e):"<".concat(t," ").concat(cd(r),">").concat(i.map(_n).join(""),"</").concat(t,">")}function Zi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},jr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?vd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function bd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ia(e){var t=bd(e);return t.length===1?t[0].toString(16):null}function yd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Qi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function oa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Qi(t);typeof Se.hooks.addPack=="function"&&!a?Se.hooks.addPack(e,Qi(t)):Se.styles[e]=I(I({},Se.styles[e]||{}),i),e==="fas"&&oa("fa",t)}var zn,Bn,Yn,Mt=Se.styles,wd=Se.shims,_d=(zn={},ie(zn,q,Object.values(gn[q])),ie(zn,re,Object.values(gn[re])),zn),Ha=null,Cs={},Es={},ks={},Os={},Ps={},xd=(Bn={},ie(Bn,q,Object.keys(mn[q])),ie(Bn,re,Object.keys(mn[re])),Bn);function Ad(e){return~rd.indexOf(e)}function Cd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ad(a)?a:null}var Ss=function(){var t=function(i){return jr(Mt,function(o,s,l){return o[l]=jr(s,i,{}),o},{})};Cs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Es=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ps=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Mt||M.autoFetchSvg,r=jr(wd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ks=r.names,Os=r.unicodes,Ha=xr(M.styleDefault,{family:M.familyDefault})};sd(function(e){Ha=xr(e.styleDefault,{family:M.familyDefault})});Ss();function Wa(e,t){return(Cs[e]||{})[t]}function Ed(e,t){return(Es[e]||{})[t]}function vt(e,t){return(Ps[e]||{})[t]}function Is(e){return ks[e]||{prefix:null,iconName:null}}function kd(e){var t=Os[e],n=Wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ot(){return Ha}var Ka=function(){return{prefix:null,iconName:null,rest:[]}};function xr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=mn[r][e],i=pn[r][e]||pn[r][a],o=e in Se.styles?e:null;return i||o||null}var eo=(Yn={},ie(Yn,q,Object.keys(gn[q])),ie(Yn,re,Object.keys(gn[re])),Yn);function Ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,q,"".concat(M.cssPrefix,"-").concat(q)),ie(t,re,"".concat(M.cssPrefix,"-").concat(re)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return eo[q].includes(c)}))&&(s=q),(e.includes(i[re])||e.some(function(c){return eo[re].includes(c)}))&&(s=re);var l=e.reduce(function(c,f){var d=Cd(M.cssPrefix,f);if(Mt[f]?(f=_d[s].includes(f)?Ju[s][f]:f,o=f,c.prefix=f):xd[s].indexOf(f)>-1?(o=f,c.prefix=xr(f,{family:s})):d?c.iconName=d:f!==M.replacementClass&&f!==i[q]&&f!==i[re]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?Is(c.iconName):{},h=vt(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||h||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Mt.far&&Mt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===re&&(Mt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=vt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ot()||"fas"),l}var Od=function(){function e(){$u(this,e),this.definitions={}}return Uu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),oa(s,o[s]);var l=gn[q][s];l&&oa(l,o[s]),Ss()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),to=[],Nt={},$t={},Pd=Object.keys($t);function Sd(e,t){var n=t.mixoutsTo;return to=e,Nt={},Object.keys($t).forEach(function(r){Pd.indexOf(r)===-1&&delete $t[r]}),to.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ar(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Nt[o]||(Nt[o]=[]),Nt[o].push(i[o])})}r.provides&&r.provides($t)}),n}function sa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Nt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Nt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $t[e]?$t[e].apply(null,t):void 0}function la(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ot();if(t)return t=vt(n,t)||t,Zi(Ts.definitions,n,t)||Zi(Se.styles,n,t)}var Ts=new Od,Id=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,At("noAuto")},Td={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ge?(At("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,hd(function(){Md({autoReplaceSvgRoot:n}),At("watch",t)})}},Fd={icon:function(t){if(t===null)return null;if(ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=xr(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Zu))){var a=Ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ot(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ot();return{prefix:i,iconName:vt(i,t)||t}}}},xe={noAuto:Id,config:M,dom:Td,parse:Fd,library:Ts,findIconDefinition:la,toHtml:_n},Md=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Se.styles).length>0||M.autoFetchSvg)&&Ge&&M.autoReplaceSvg&&xe.dom.i2svg({node:r})};function Cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ge){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Nd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=_r(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Rd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,h=p===void 0?!1:p,O=r.found?r:n,x=O.width,k=O.height,w=a==="fak",v=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ce){return d.classes.indexOf(ce)===-1}).filter(function(ce){return ce!==""||!!ce}).concat(d.classes).join(" "),T={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(k)})},S=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/k*16*.0625,"em")}:{};h&&(T.attributes[xt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||vn())},children:[l]}),delete T.attributes.title);var z=I(I({},T),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I(I({},S),d.styles)}),D=r.found&&n.found?Ke("generateAbstractMask",z)||{children:[],attributes:{}}:Ke("generateAbstractIcon",z)||{children:[],attributes:{}},K=D.children,te=D.attributes;return z.children=K,z.attributes=te,s?Rd(z):Nd(z)}function no(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xt]="");var f=I({},o.styles);Ya(a)&&(f.transform=dd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=_r(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Dd(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_r(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $r=Se.styles;function fa(e){var t=e[0],n=e[1],r=e.slice(4),a=La(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ld={found:!1,width:512,height:512};function jd(e,t){!vs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ca(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=ot()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=Is(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&$r[t]&&$r[t][e]){var o=$r[t][e];return r(fa(o))}jd(e,t),r(I(I({},Ld),{},{icon:M.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var ro=function(){},ua=M.measurePerformance&&Rn&&Rn.mark&&Rn.measure?Rn:{mark:ro,measure:ro},Qt='FA "6.4.0"',$d=function(t){return ua.mark("".concat(Qt," ").concat(t," begins")),function(){return Fs(t)}},Fs=function(t){ua.mark("".concat(Qt," ").concat(t," ends")),ua.measure("".concat(Qt," ").concat(t),"".concat(Qt," ").concat(t," begins"),"".concat(Qt," ").concat(t," ends"))},Ga={begin:$d,end:Fs},Gn=function(){};function ao(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function Ud(e){var t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(Ua):null;return t&&n}function zd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Bd(){if(M.autoReplaceSvg===!0)return Xn.replace;var e=Xn[M.autoReplaceSvg];return e||Xn.replace}function Yd(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Hd(e){return J.createElement(e)}function Ms(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Yd:Hd:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ms(o,{ceFn:r}))}),a}function Wd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ms(a),n)}),n.getAttribute(xt)===null&&M.keepOriginalSource){var r=J.createComment(Wd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ba(n).indexOf(M.replacementClass))return Xn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return _n(s)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=o}};function io(e){e()}function Ns(e,t){var n=typeof t=="function"?t:Gn;if(e.length===0)n();else{var r=io;M.mutateApproach===Xu&&(r=it.requestAnimationFrame||io),r(function(){var a=Bd(),i=Ga.begin("mutate");e.map(a),i(),n()})}}var Xa=!1;function Rs(){Xa=!0}function da(){Xa=!1}var or=null;function oo(e){if(Xi&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Gn:t,r=e.nodeCallback,a=r===void 0?Gn:r,i=e.pseudoElementsCallback,o=i===void 0?Gn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;or=new Xi(function(c){if(!Xa){var f=ot();Gt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ao(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ao(d.target)&&~nd.indexOf(d.attributeName))if(d.attributeName==="class"&&Ud(d.target)){var p=Ar(Ba(d.target)),h=p.prefix,O=p.iconName;d.target.setAttribute($a,h||f),O&&d.target.setAttribute(Ua,O)}else zd(d.target)&&a(d.target)})}}),Ge&&or.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kd(){or&&or.disconnect()}function Vd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Gd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ar(Ba(e));return a.prefix||(a.prefix=ot()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ed(a.prefix,e.innerText)||Wa(a.prefix,ia(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Xd(e){var t=Gt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function qd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gd(e),r=n.iconName,a=n.prefix,i=n.rest,o=Xd(e),s=sa("parseNodeAttributes",{},e),l=t.styleParser?Vd(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Jd=Se.styles;function Ds(e){var t=M.autoReplaceSvg==="nest"?so(e,{styleParser:!1}):so(e);return~t.extra.classes.indexOf(bs)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var st=new Set;za.map(function(e){st.add("fa-".concat(e))});Object.keys(mn[q]).map(st.add.bind(st));Object.keys(mn[re]).map(st.add.bind(st));st=yn(st);function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ge)return Promise.resolve();var n=J.documentElement.classList,r=function(d){return n.add("".concat(qi,"-").concat(d))},a=function(d){return n.remove("".concat(qi,"-").concat(d))},i=M.autoFetchSvg?st:za.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Jd));i.includes("fa")||i.push("fa");var o=[".".concat(bs,":not([").concat(xt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(xt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Gt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ga.begin("onTree"),c=s.reduce(function(f,d){try{var p=Ds(d);p&&f.push(p)}catch(h){vs||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){Ns(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function Zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ds(e).then(function(n){n&&Ns([n],t)})}function Qd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:la(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:la(a||{})),e(r,I(I({},n),{},{mask:a}))}}var em=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,h=n.titleId,O=h===void 0?null:h,x=n.classes,k=x===void 0?[]:x,w=n.attributes,v=w===void 0?{}:w,T=n.styles,S=T===void 0?{}:T;if(t){var z=t.prefix,D=t.iconName,K=t.icon;return Cr(I({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?v["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(O||vn()):(v["aria-hidden"]="true",v.focusable="false")),Va({icons:{main:fa(K),mask:l?fa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:D,transform:I(I({},Le),a),symbol:o,title:p,maskId:f,titleId:O,extra:{attributes:v,styles:S,classes:k}})})}},tm={mixout:function(){return{icon:Qd(em)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=lo,n.nodeCallback=Zd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return lo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(h,O){Promise.all([ca(a,s),f.iconName?ca(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var k=La(x,2),w=k[0],v=k[1];h([n,Va({icons:{main:w,mask:v},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=_r(s);l.length>0&&(a.style=l);var c;return Ya(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},nm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Cr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(yn(i)).join(" ")},children:o}]})}}}},rm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return Cr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Dd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(yn(s))}})})}}}},am={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,p=r.styles,h=p===void 0?{}:p;return Cr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),no({content:n,transform:I(I({},Le),i),title:s,extra:{attributes:d,styles:h,classes:["".concat(M.cssPrefix,"-layers-text")].concat(yn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ps){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,no({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},im=new RegExp('"',"ug"),fo=[1105920,1112319];function om(e){var t=e.replace(im,""),n=yd(t,0),r=n>=fo[0]&&n<=fo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ia(a?t[0]:t),isSecondary:r||a}}function co(e,t){var n="".concat(Gu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Gt(e.children),o=i.filter(function(K){return K.getAttribute(aa)===t})[0],s=it.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qu),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?re:q,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[p][l[2].toLowerCase()]:ed[p][c],O=om(d),x=O.value,k=O.isSecondary,w=l[0].startsWith("FontAwesome"),v=Wa(h,x),T=v;if(w){var S=kd(x);S.iconName&&S.prefix&&(v=S.iconName,h=S.prefix)}if(v&&!k&&(!o||o.getAttribute($a)!==h||o.getAttribute(Ua)!==T)){e.setAttribute(n,T),o&&e.removeChild(o);var z=qd(),D=z.extra;D.attributes[aa]=t,ca(v,h).then(function(K){var te=Va(I(I({},z),{},{icons:{main:K,mask:Ka()},prefix:h,iconName:T,extra:D,watchable:!0})),ce=J.createElement("svg");t==="::before"?e.insertBefore(ce,e.firstChild):e.appendChild(ce),ce.outerHTML=te.map(function(Ae){return _n(Ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function sm(e){return Promise.all([co(e,"::before"),co(e,"::after")])}function lm(e){return e.parentNode!==document.head&&!~qu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(aa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function uo(e){if(Ge)return new Promise(function(t,n){var r=Gt(e.querySelectorAll("*")).filter(lm).map(sm),a=Ga.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){a(),da(),t()}).catch(function(){a(),da(),n()})})}var fm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=uo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;M.searchPseudoElements&&uo(a)}}},mo=!1,cm={mixout:function(){return{dom:{unwatch:function(){Rs(),mo=!0}}}},hooks:function(){return{bootstrap:function(){oo(sa("mutationObserverCallbacks",{}))},noAuto:function(){Kd()},watch:function(n){var r=n.observeMutationsRoot;mo?da():oo(sa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},po=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},um={mixout:function(){return{parse:{transform:function(n){return po(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=po(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},h.outer),children:[{tag:"g",attributes:I({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),h.path)}]}]}}}},Ur={x:0,y:0,width:"100%",height:"100%"};function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function dm(e){return e.tag==="g"?e.children:[e]}var mm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Ar(a.split(" ").map(function(o){return o.trim()})):Ka();return i.prefix||(i.prefix=ot()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,h=ud({transform:l,containerWidth:d,iconWidth:c}),O={tag:"rect",attributes:I(I({},Ur),{},{fill:"white"})},x=f.children?{children:f.children.map(go)}:{},k={tag:"g",attributes:I({},h.inner),children:[go(I({tag:f.tag,attributes:I(I({},f.attributes),h.path)},x))]},w={tag:"g",attributes:I({},h.outer),children:[k]},v="mask-".concat(s||vn()),T="clip-".concat(s||vn()),S={tag:"mask",attributes:I(I({},Ur),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,w]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:dm(p)},S]};return r.push(z,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(v,")")},Ur)}),{children:r,attributes:a}}}},pm={provides:function(t){var n=!1;it.matchMedia&&(n=it.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},hm=[pd,tm,nm,rm,am,fm,cm,um,mm,pm,gm];Sd(hm,{mixoutsTo:xe});xe.noAuto;xe.config;var vm=xe.library;xe.dom;var ma=xe.parse;xe.findIconDefinition;xe.toHtml;var bm=xe.icon;xe.layer;xe.text;xe.counter;function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ho(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ym(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wm(e,t){if(e==null)return{};var n=ym(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var _m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ls={exports:{}};(function(e){(function(t){var n=function(w,v,T){if(!c(v)||d(v)||p(v)||h(v)||l(v))return v;var S,z=0,D=0;if(f(v))for(S=[],D=v.length;z<D;z++)S.push(n(w,v[z],T));else{S={};for(var K in v)Object.prototype.hasOwnProperty.call(v,K)&&(S[w(K,T)]=n(w,v[K],T))}return S},r=function(w,v){v=v||{};var T=v.separator||"_",S=v.split||/(?=[A-Z])/;return w.split(S).join(T)},a=function(w){return O(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(v,T){return T?T.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var v=a(w);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(w,v){return r(w,v).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},f=function(w){return s.call(w)=="[object Array]"},d=function(w){return s.call(w)=="[object Date]"},p=function(w){return s.call(w)=="[object RegExp]"},h=function(w){return s.call(w)=="[object Boolean]"},O=function(w){return w=w-0,w===w},x=function(w,v){var T=v&&"process"in v?v.process:v;return typeof T!="function"?w:function(S,z){return T(S,w,z)}},k={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,v){return n(x(a,v),w)},decamelizeKeys:function(w,v){return n(x(o,v),w,v)},pascalizeKeys:function(w,v){return n(x(i,v),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=k:t.humps=k})(_m)})(Ls);var xm=Ls.exports,Am=["class","style"];function Cm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Em(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return js(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=Em(f);break;case"style":l.style=Cm(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=wm(n,Am);return qf(e.tag,Be(Be(Be({},t),{},{class:a.class,style:Be(Be({},a.style),o)},a.attrs),s),r)}var $s=!1;try{$s=!0}catch{}function km(){if(!$s&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function Om(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function vo(e){if(e&&sr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ma.icon)return ma.icon(e);if(e===null)return null;if(sr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pm=Et({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ke(function(){return vo(t.icon)}),i=ke(function(){return zr("classes",Om(t))}),o=ke(function(){return zr("transform",typeof t.transform=="string"?ma.transform(t.transform):t.transform)}),s=ke(function(){return zr("mask",vo(t.mask))}),l=ke(function(){return bm(a.value,Be(Be(Be(Be({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});yt(l,function(f){if(!f)return km("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ke(function(){return l.value?js(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Sm={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};vm.add(Sm);const Im=e=>{e.component("font-awesome-icon",Pm)},Us=Ac(ju);Im(Us);Us.mount("#app");export{Z as a,$f as b,wt as c,Et as d,H as e,Q as f,Nm as g,vr as h,an as i,_e as o,Fm as r,Mc as s,tl as t,Mm as v,Tm as w};
