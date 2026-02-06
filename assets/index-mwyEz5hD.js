(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function sv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mh={exports:{}},Ho={};var j0;function KS(){if(j0)return Ho;j0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var Q0;function jS(){return Q0||(Q0=1,mh.exports=KS()),mh.exports}var ed=jS(),gh={exports:{}},re={};var J0;function QS(){if(J0)return re;J0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function S(U,nt,gt){this.props=U,this.context=nt,this.refs=M,this.updater=gt||T}S.prototype.isReactComponent={},S.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=S.prototype;function L(U,nt,gt){this.props=U,this.context=nt,this.refs=M,this.updater=gt||T}var N=L.prototype=new z;N.constructor=L,R(N,S.prototype),N.isPureReactComponent=!0;var B=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(U,nt,gt){var bt=gt.ref;return{$$typeof:s,type:U,key:nt,ref:bt!==void 0?bt:null,props:gt}}function w(U,nt){return C(U.type,nt,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function rt(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return nt[gt]})}var at=/\/+/g;function dt(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?rt(""+U.key):nt.toString(36)}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,nt,gt,bt,Ft){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var ut=!1;if(U===null)ut=!0;else switch(et){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(U.$$typeof){case s:case t:ut=!0;break;case _:return ut=U._init,O(ut(U._payload),nt,gt,bt,Ft)}}if(ut)return Ft=Ft(U),ut=bt===""?"."+dt(U,0):bt,B(Ft)?(gt="",ut!=null&&(gt=ut.replace(at,"$&/")+"/"),O(Ft,nt,gt,"",function(It){return It})):Ft!=null&&(X(Ft)&&(Ft=w(Ft,gt+(Ft.key==null||U&&U.key===Ft.key?"":(""+Ft.key).replace(at,"$&/")+"/")+ut)),nt.push(Ft)),1;ut=0;var wt=bt===""?".":bt+":";if(B(U))for(var Vt=0;Vt<U.length;Vt++)bt=U[Vt],et=wt+dt(bt,Vt),ut+=O(bt,nt,gt,et,Ft);else if(Vt=y(U),typeof Vt=="function")for(U=Vt.call(U),Vt=0;!(bt=U.next()).done;)bt=bt.value,et=wt+dt(bt,Vt++),ut+=O(bt,nt,gt,et,Ft);else if(et==="object"){if(typeof U.then=="function")return O(ct(U),nt,gt,bt,Ft);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(U,nt,gt){if(U==null)return U;var bt=[],Ft=0;return O(U,bt,"","",function(et){return nt.call(gt,et,Ft++)}),bt}function it(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:H,forEach:function(U,nt,gt){H(U,function(){nt.apply(this,arguments)},gt)},count:function(U){var nt=0;return H(U,function(){nt++}),nt},toArray:function(U){return H(U,function(nt){return nt})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=g,re.Children=xt,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,nt,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var bt=R({},U.props),Ft=U.key;if(nt!=null)for(et in nt.key!==void 0&&(Ft=""+nt.key),nt)!j.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(bt[et]=nt[et]);var et=arguments.length-2;if(et===1)bt.children=gt;else if(1<et){for(var ut=Array(et),wt=0;wt<et;wt++)ut[wt]=arguments[wt+2];bt.children=ut}return C(U.type,Ft,bt)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},re.createElement=function(U,nt,gt){var bt,Ft={},et=null;if(nt!=null)for(bt in nt.key!==void 0&&(et=""+nt.key),nt)j.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Ft[bt]=nt[bt]);var ut=arguments.length-2;if(ut===1)Ft.children=gt;else if(1<ut){for(var wt=Array(ut),Vt=0;Vt<ut;Vt++)wt[Vt]=arguments[Vt+2];Ft.children=wt}if(U&&U.defaultProps)for(bt in ut=U.defaultProps,ut)Ft[bt]===void 0&&(Ft[bt]=ut[bt]);return C(U,et,Ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=X,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:it}},re.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},re.startTransition=function(U){var nt=P.T,gt={};P.T=gt;try{var bt=U(),Ft=P.S;Ft!==null&&Ft(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(I,yt)}catch(et){yt(et)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),P.T=nt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(U){return P.H.use(U)},re.useActionState=function(U,nt,gt){return P.H.useActionState(U,nt,gt)},re.useCallback=function(U,nt){return P.H.useCallback(U,nt)},re.useContext=function(U){return P.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,nt){return P.H.useDeferredValue(U,nt)},re.useEffect=function(U,nt){return P.H.useEffect(U,nt)},re.useEffectEvent=function(U){return P.H.useEffectEvent(U)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(U,nt,gt){return P.H.useImperativeHandle(U,nt,gt)},re.useInsertionEffect=function(U,nt){return P.H.useInsertionEffect(U,nt)},re.useLayoutEffect=function(U,nt){return P.H.useLayoutEffect(U,nt)},re.useMemo=function(U,nt){return P.H.useMemo(U,nt)},re.useOptimistic=function(U,nt){return P.H.useOptimistic(U,nt)},re.useReducer=function(U,nt,gt){return P.H.useReducer(U,nt,gt)},re.useRef=function(U){return P.H.useRef(U)},re.useState=function(U){return P.H.useState(U)},re.useSyncExternalStore=function(U,nt,gt){return P.H.useSyncExternalStore(U,nt,gt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.4",re}var $0;function $d(){return $0||($0=1,gh.exports=QS()),gh.exports}var nd=$d();const JS=sv(nd);var _h={exports:{}},Go={},vh={exports:{}},xh={};var t_;function $S(){return t_||(t_=1,(function(s){function t(O,H){var it=O.length;O.push(H);t:for(;0<it;){var yt=it-1>>>1,xt=O[yt];if(0<l(xt,H))O[yt]=H,O[it]=xt,it=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var H=O[0],it=O.pop();if(it!==H){O[0]=it;t:for(var yt=0,xt=O.length,U=xt>>>1;yt<U;){var nt=2*(yt+1)-1,gt=O[nt],bt=nt+1,Ft=O[bt];if(0>l(gt,it))bt<xt&&0>l(Ft,gt)?(O[yt]=Ft,O[bt]=it,yt=bt):(O[yt]=gt,O[nt]=it,yt=nt);else if(bt<xt&&0>l(Ft,it))O[yt]=Ft,O[bt]=it,yt=bt;else break t}}return H}function l(O,H){var it=O.sortIndex-H.sortIndex;return it!==0?it:O.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,y=!1,T=!1,R=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=O)r(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function B(O){if(R=!1,N(O),!T)if(i(m)!==null)T=!0,I||(I=!0,rt());else{var H=i(p);H!==null&&ct(B,H.startTime-O)}}var I=!1,P=-1,j=5,C=-1;function w(){return M?!0:!(s.unstable_now()-C<j)}function X(){if(M=!1,I){var O=s.unstable_now();C=O;var H=!0;try{t:{T=!1,R&&(R=!1,z(P),P=-1),y=!0;var it=x;try{e:{for(N(O),g=i(m);g!==null&&!(g.expirationTime>O&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var xt=yt(g.expirationTime<=O);if(O=s.unstable_now(),typeof xt=="function"){g.callback=xt,N(O),H=!0;break e}g===i(m)&&r(m),N(O)}else r(m);g=i(m)}if(g!==null)H=!0;else{var U=i(p);U!==null&&ct(B,U.startTime-O),H=!1}}break t}finally{g=null,x=it,y=!1}H=void 0}}finally{H?rt():I=!1}}}var rt;if(typeof L=="function")rt=function(){L(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=X,rt=function(){dt.postMessage(null)}}else rt=function(){S(X,0)};function ct(O,H){P=S(function(){O(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var it=x;x=H;try{return O()}finally{x=it}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var it=x;x=O;try{return H()}finally{x=it}},s.unstable_scheduleCallback=function(O,H,it){var yt=s.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?yt+it:yt):it=yt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,O={id:_++,callback:H,priorityLevel:O,startTime:it,expirationTime:xt,sortIndex:-1},it>yt?(O.sortIndex=it,t(p,O),i(m)===null&&O===i(p)&&(R?(z(P),P=-1):R=!0,ct(B,it-yt))):(O.sortIndex=xt,t(m,O),T||y||(T=!0,I||(I=!0,rt()))),O},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(O){var H=x;return function(){var it=x;x=H;try{return O.apply(this,arguments)}finally{x=it}}}})(xh)),xh}var e_;function ty(){return e_||(e_=1,vh.exports=$S()),vh.exports}var Sh={exports:{}},Un={};var n_;function ey(){if(n_)return Un;n_=1;var s=$d();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Un.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var i_;function ny(){if(i_)return Sh.exports;i_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sh.exports=ey(),Sh.exports}var a_;function iy(){if(a_)return Go;a_=1;var s=ty(),t=$d(),i=ny();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,o=f;break}if(b===o){v=!0,o=c,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,o=c;break}if(b===o){v=!0,o=f,a=c;break}b=b.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ct=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function U(e){return{current:e}}function nt(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var bt=U(null),Ft=U(null),et=U(null),ut=U(null);function wt(e,n){switch(gt(et,n),gt(Ft,e),gt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?x0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=x0(n),e=S0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(bt),gt(bt,e)}function Vt(){nt(bt),nt(Ft),nt(et)}function It(e){e.memoizedState!==null&&gt(ut,e);var n=bt.current,a=S0(n,e.type);n!==a&&(gt(Ft,e),gt(bt,a))}function de(e){Ft.current===e&&(nt(bt),nt(Ft)),ut.current===e&&(nt(ut),zo._currentValue=it)}var Qe,_e;function pe(e){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+_e}var Ce=!1;function se(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var F=v.split(`
`),J=b.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===J.length)for(o=F.length-1,c=J.length-1;1<=o&&0<=c&&F[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==J[c]){var ft=`
`+F[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Je(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return pe("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Je(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ye=Object.prototype.hasOwnProperty,ye=s.unstable_scheduleCallback,Le=s.unstable_cancelCallback,qt=s.unstable_shouldYield,D=s.unstable_requestPaint,E=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,ht=s.unstable_ImmediatePriority,vt=s.unstable_UserBlockingPriority,lt=s.unstable_NormalPriority,Zt=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,Xt=s.log,ee=s.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ee(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,le=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ct(e)/le|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=St(o):(v&=b,v!==0?c=St(v):a||(a=b&~e,a!==0&&(c=St(a))))):(b=o&~f,b!==0?c=St(b):v!==0?c=St(v):a||(a=o&~e,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,o,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;b[ft]=0,F[ft]=-1;var tt=J[ft];if(tt!==null)for(J[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}o!==0&&dl(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function dl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ys(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Pr(e,n){var a=n&-n;return a=(a&42)!==0?1:Zs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ks(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:X0(e.type))}function Ui(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ai=Math.random().toString(36).slice(2),rn="__reactFiber$"+ai,vn="__reactProps$"+ai,Si="__reactContainer$"+ai,Br="__reactEvents$"+ai,Fr="__reactListeners$"+ai,pl="__reactHandles$"+ai,js="__reactResources$"+ai,ar="__reactMarker$"+ai;function Qs(e){delete e[rn],delete e[vn],delete e[Br],delete e[Fr],delete e[pl]}function Ta(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Si]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=R0(e);e!==null;){if(a=e[rn])return a;e=R0(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[rn]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Aa(e){var n=e[js];return n||(n=e[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[ar]=!0}var Y=new Set,st={};function $(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(st[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Ht(e){return Ye.call(Lt,e)?!0:Ye.call(Bt,e)?!1:Dt.test(e)?Lt[e]=!0:(Bt[e]=!0,!1)}function kt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ke(e){if(!e._valueTracker){var n=we(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function Ne(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var De=/[\n"\\]/g;function ae(e){return e.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(e,n,a,o,c,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,v,$t(n)):a!=null?Sn(e,v,$t(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function Wi(e,n,a,o,c,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),ke(e)}function Sn(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ri(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function yn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ke(e)}function fn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ir(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&En(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var fc=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function vp(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[vn]||null;if(!c)throw Error(r(90));xn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ne(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ri(e,!!a.multiple,n,!1)}}}var dc=!1;function xp(e,n,a){if(dc)return e(n,a);dc=!0;try{var o=e(n);return o}finally{if(dc=!1,(Hr!==null||Gr!==null)&&(nu(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,vp(n),e)))for(n=0;n<e.length;n++)vp(e[n])}}function Js(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(Yi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){pc=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{pc=!1}var Ra=null,mc=null,gl=null;function Sp(){if(gl)return gl;var e,n=mc,a=n.length,o,c="value"in Ra?Ra.value:Ra.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return gl=c.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function yp(){return!1}function Fn(e){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:yp,this.isPropagationStopped=yp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Fn(sr),to=g({},sr,{view:0,detail:0}),Yv=Fn(to),gc,_c,eo,Sl=g({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(gc=e.screenX-eo.screenX,_c=e.screenY-eo.screenY):_c=gc=0,eo=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),Mp=Fn(Sl),Zv=g({},Sl,{dataTransfer:0}),Kv=Fn(Zv),jv=g({},to,{relatedTarget:0}),vc=Fn(jv),Qv=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Fn(Qv),$v=g({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tx=Fn($v),ex=g({},sr,{data:0}),Ep=Fn(ex),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ax[e])?!!n[e]:!1}function xc(){return rx}var sx=g({},to,{key:function(e){if(e.key){var n=nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ox=Fn(sx),lx=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Fn(lx),ux=g({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),cx=Fn(ux),fx=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Fn(fx),dx=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),px=Fn(dx),mx=g({},sr,{newState:0,oldState:0}),gx=Fn(mx),_x=[9,13,27,32],Sc=Yi&&"CompositionEvent"in window,no=null;Yi&&"documentMode"in document&&(no=document.documentMode);var vx=Yi&&"TextEvent"in window&&!no,bp=Yi&&(!Sc||no&&8<no&&11>=no),Ap=" ",Rp=!1;function Cp(e,n){switch(e){case"keyup":return _x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function xx(e,n){switch(e){case"compositionend":return wp(n);case"keypress":return n.which!==32?null:(Rp=!0,Ap);case"textInput":return e=n.data,e===Ap&&Rp?null:e;default:return null}}function Sx(e,n){if(Vr)return e==="compositionend"||!Sc&&Cp(e,n)?(e=Sp(),gl=mc=Ra=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yx[e.type]:n==="textarea"}function Up(e,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=uu(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var io=null,ao=null;function Mx(e){d0(e,0)}function yl(e){var n=rr(e);if(Ne(n))return e}function Lp(e,n){if(e==="change")return n}var Np=!1;if(Yi){var yc;if(Yi){var Mc="oninput"in document;if(!Mc){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Mc=typeof Op.oninput=="function"}yc=Mc}else yc=!1;Np=yc&&(!document.documentMode||9<document.documentMode)}function Pp(){io&&(io.detachEvent("onpropertychange",zp),ao=io=null)}function zp(e){if(e.propertyName==="value"&&yl(ao)){var n=[];Up(n,ao,e,hc(e)),xp(Mx,n)}}function Ex(e,n,a){e==="focusin"?(Pp(),io=n,ao=a,io.attachEvent("onpropertychange",zp)):e==="focusout"&&Pp()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(ao)}function bx(e,n){if(e==="click")return yl(n)}function Ax(e,n){if(e==="input"||e==="change")return yl(n)}function Rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Rx;function ro(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ye.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=Bp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bp(a)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Ec(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cx=Yi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Tc=null,so=null,bc=!1;function Gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Xr==null||Xr!==Kt(o)||(o=Xr,"selectionStart"in o&&Ec(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=uu(Tc,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xr)))}function or(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var kr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Ac={},Vp={};Yi&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function lr(e){if(Ac[e])return Ac[e];if(!kr[e])return e;var n=kr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vp)return Ac[e]=n[a];return e}var Xp=lr("animationend"),kp=lr("animationiteration"),Wp=lr("animationstart"),wx=lr("transitionrun"),Dx=lr("transitionstart"),Ux=lr("transitioncancel"),qp=lr("transitionend"),Yp=new Map,Rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rc.push("scrollEnd");function Mi(e,n){Yp.set(e,n),$(n,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Wr=0,Cc=0;function El(){for(var e=Wr,n=Cc=Wr=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&Zp(a,c,f)}}function Tl(e,n,a,o){si[Wr++]=e,si[Wr++]=n,si[Wr++]=a,si[Wr++]=o,Cc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function wc(e,n,a,o){return Tl(e,n,a,o),bl(e)}function ur(e,n){return Tl(e,null,null,n),bl(e)}function Zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(e){if(50<wo)throw wo=0,If=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Lx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Lx(e,n,a,o)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,c,f){var v=0;if(o=e,typeof e=="function")Dc(e)&&(v=1);else if(typeof e=="string")v=BS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=f,e;case R:return cr(a.children,c,f,n);case M:v=8,c|=24;break;case S:return e=qn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case B:return e=qn(13,a,n,c),e.elementType=B,e.lanes=f,e;case I:return e=qn(19,a,n,c),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case z:v=9;break t;case N:v=11;break t;case P:v=14;break t;case j:v=16,o=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(v,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function cr(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function Uc(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function jp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function Lc(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Qp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Qp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Yr=[],Zr=0,Rl=null,oo=0,li=[],ui=0,Ca=null,Li=1,Ni="";function Ki(e,n){Yr[Zr++]=oo,Yr[Zr++]=Rl,Rl=e,oo=n}function Jp(e,n,a){li[ui++]=Li,li[ui++]=Ni,li[ui++]=Ca,Ca=e;var o=Li;e=Ni;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Li=1<<32-Ot(n)+c|a<<c|o,Ni=f+e}else Li=1<<f|a<<c|o,Ni=e}function Nc(e){e.return!==null&&(Ki(e,1),Jp(e,1,0))}function Oc(e){for(;e===Rl;)Rl=Yr[--Zr],Yr[Zr]=null,oo=Yr[--Zr],Yr[Zr]=null;for(;e===Ca;)Ca=li[--ui],li[ui]=null,Ni=li[--ui],li[ui]=null,Li=li[--ui],li[ui]=null}function $p(e,n){li[ui++]=Li,li[ui++]=Ni,li[ui++]=Ca,Li=n.id,Ni=n.overflow,Ca=e}var Tn=null,We=null,Se=!1,wa=null,ci=!1,Pc=Error(r(519));function Da(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(oi(n,e)),Pc}function tm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[vn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)ge(Uo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Wi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),yn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_0(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Da(e,!0)}function em(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Kr(e){if(e!==Tn)return!1;if(!Se)return em(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&We&&Da(e),em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=A0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));We=A0(e)}else n===27?(n=We,ka(e.type)?(e=rh,rh=null,We=e):We=n):We=Tn?hi(e.stateNode.nextSibling):null;return!0}function fr(){We=Tn=null,Se=!1}function zc(){var e=wa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),wa=null),e}function lo(e){wa===null?wa=[e]:wa.push(e)}var Bc=U(null),hr=null,ji=null;function Ua(e,n,a){gt(Bc,n._currentValue),n._currentValue=a}function Qi(e){e._currentValue=Bc.current,nt(Bc)}function Fc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ic(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Fc(f.return,a,e),o||(v=null);break t}f=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Fc(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function jr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var b=c.type;Wn(c.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(c===ut.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}c=c.return}e!==null&&Ic(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){hr=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return nm(hr,e)}function wl(e,n){return hr===null&&dr(e),nm(e,n)}function nm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(e===null)throw Error(r(308));ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ji=ji.next=n;return a}var Nx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ox=s.unstable_scheduleCallback,Px=s.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new Nx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&Ox(Px,function(){e.controller.abort()})}var co=null,Gc=0,Qr=0,Jr=null;function zx(e,n){if(co===null){var a=co=[];Gc=0,Qr=Wf(),Jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gc++,n.then(im,im),n}function im(){if(--Gc===0&&co!==null){Jr!==null&&(Jr.status="fulfilled");var e=co;co=null,Qr=0,Jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Bx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var am=O.S;O.S=function(e,n){Gg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(e,n),am!==null&&am(e,n)};var pr=U(null);function Vc(){var e=pr.current;return e!==null?e:Xe.pooledCache}function Dl(e,n){n===null?gt(pr,pr.current):gt(pr,n.pool)}function rm(){var e=Vc();return e===null?null:{parent:sn._currentValue,pool:e}}var $r=Error(r(460)),Xc=Error(r(474)),Ul=Error(r(542)),Ll={then:function(){}};function sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function om(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,um(e),e}throw gr=n,$r}}function mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,$r):a}}var gr=null;function lm(){if(gr===null)throw Error(r(459));var e=gr;return gr=null,e}function um(e){if(e===$r||e===Ul)throw Error(r(483))}var ts=null,fo=0;function Nl(e){var n=fo;return fo+=1,ts===null&&(ts=[]),om(ts,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cm(e){function n(Z,V){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[V],Z.flags|=16):Q.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Zi(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<V?(Z.flags|=67108866,V):Q):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,V,Q,pt){return V===null||V.tag!==6?(V=Uc(Q,Z.mode,pt),V.return=Z,V):(V=c(V,Q),V.return=Z,V)}function F(Z,V,Q,pt){var jt=Q.type;return jt===R?ft(Z,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===j&&mr(jt)===V.type)?(V=c(V,Q.props),ho(V,Q),V.return=Z,V):(V=Al(Q.type,Q.key,Q.props,null,Z.mode,pt),ho(V,Q),V.return=Z,V)}function J(Z,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Lc(Q,Z.mode,pt),V.return=Z,V):(V=c(V,Q.children||[]),V.return=Z,V)}function ft(Z,V,Q,pt,jt){return V===null||V.tag!==7?(V=cr(Q,Z.mode,pt,jt),V.return=Z,V):(V=c(V,Q),V.return=Z,V)}function mt(Z,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Uc(""+V,Z.mode,Q),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=Al(V.type,V.key,V.props,null,Z.mode,Q),ho(Q,V),Q.return=Z,Q;case T:return V=Lc(V,Z.mode,Q),V.return=Z,V;case j:return V=mr(V),mt(Z,V,Q)}if(ct(V)||rt(V))return V=cr(V,Z.mode,Q,null),V.return=Z,V;if(typeof V.then=="function")return mt(Z,Nl(V),Q);if(V.$$typeof===L)return mt(Z,wl(Z,V),Q);Ol(Z,V)}return null}function tt(Z,V,Q,pt){var jt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return jt!==null?null:b(Z,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===jt?F(Z,V,Q,pt):null;case T:return Q.key===jt?J(Z,V,Q,pt):null;case j:return Q=mr(Q),tt(Z,V,Q,pt)}if(ct(Q)||rt(Q))return jt!==null?null:ft(Z,V,Q,pt,null);if(typeof Q.then=="function")return tt(Z,V,Nl(Q),pt);if(Q.$$typeof===L)return tt(Z,V,wl(Z,Q),pt);Ol(Z,Q)}return null}function ot(Z,V,Q,pt,jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,b(V,Z,""+pt,jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Z=Z.get(pt.key===null?Q:pt.key)||null,F(V,Z,pt,jt);case T:return Z=Z.get(pt.key===null?Q:pt.key)||null,J(V,Z,pt,jt);case j:return pt=mr(pt),ot(Z,V,Q,pt,jt)}if(ct(pt)||rt(pt))return Z=Z.get(Q)||null,ft(V,Z,pt,jt,null);if(typeof pt.then=="function")return ot(Z,V,Q,Nl(pt),jt);if(pt.$$typeof===L)return ot(Z,V,Q,wl(V,pt),jt);Ol(V,pt)}return null}function Gt(Z,V,Q,pt){for(var jt=null,be=null,Yt=V,ue=V=0,xe=null;Yt!==null&&ue<Q.length;ue++){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var Ae=tt(Z,Yt,Q[ue],pt);if(Ae===null){Yt===null&&(Yt=xe);break}e&&Yt&&Ae.alternate===null&&n(Z,Yt),V=f(Ae,V,ue),be===null?jt=Ae:be.sibling=Ae,be=Ae,Yt=xe}if(ue===Q.length)return a(Z,Yt),Se&&Ki(Z,ue),jt;if(Yt===null){for(;ue<Q.length;ue++)Yt=mt(Z,Q[ue],pt),Yt!==null&&(V=f(Yt,V,ue),be===null?jt=Yt:be.sibling=Yt,be=Yt);return Se&&Ki(Z,ue),jt}for(Yt=o(Yt);ue<Q.length;ue++)xe=ot(Yt,Z,ue,Q[ue],pt),xe!==null&&(e&&xe.alternate!==null&&Yt.delete(xe.key===null?ue:xe.key),V=f(xe,V,ue),be===null?jt=xe:be.sibling=xe,be=xe);return e&&Yt.forEach(function(Ka){return n(Z,Ka)}),Se&&Ki(Z,ue),jt}function te(Z,V,Q,pt){if(Q==null)throw Error(r(151));for(var jt=null,be=null,Yt=V,ue=V=0,xe=null,Ae=Q.next();Yt!==null&&!Ae.done;ue++,Ae=Q.next()){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var Ka=tt(Z,Yt,Ae.value,pt);if(Ka===null){Yt===null&&(Yt=xe);break}e&&Yt&&Ka.alternate===null&&n(Z,Yt),V=f(Ka,V,ue),be===null?jt=Ka:be.sibling=Ka,be=Ka,Yt=xe}if(Ae.done)return a(Z,Yt),Se&&Ki(Z,ue),jt;if(Yt===null){for(;!Ae.done;ue++,Ae=Q.next())Ae=mt(Z,Ae.value,pt),Ae!==null&&(V=f(Ae,V,ue),be===null?jt=Ae:be.sibling=Ae,be=Ae);return Se&&Ki(Z,ue),jt}for(Yt=o(Yt);!Ae.done;ue++,Ae=Q.next())Ae=ot(Yt,Z,ue,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&Yt.delete(Ae.key===null?ue:Ae.key),V=f(Ae,V,ue),be===null?jt=Ae:be.sibling=Ae,be=Ae);return e&&Yt.forEach(function(ZS){return n(Z,ZS)}),Se&&Ki(Z,ue),jt}function Ve(Z,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var jt=Q.key;V!==null;){if(V.key===jt){if(jt=Q.type,jt===R){if(V.tag===7){a(Z,V.sibling),pt=c(V,Q.props.children),pt.return=Z,Z=pt;break t}}else if(V.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===j&&mr(jt)===V.type){a(Z,V.sibling),pt=c(V,Q.props),ho(pt,Q),pt.return=Z,Z=pt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}Q.type===R?(pt=cr(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=Al(Q.type,Q.key,Q.props,null,Z.mode,pt),ho(pt,Q),pt.return=Z,Z=pt)}return v(Z);case T:t:{for(jt=Q.key;V!==null;){if(V.key===jt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Z,V.sibling),pt=c(V,Q.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}pt=Lc(Q,Z.mode,pt),pt.return=Z,Z=pt}return v(Z);case j:return Q=mr(Q),Ve(Z,V,Q,pt)}if(ct(Q))return Gt(Z,V,Q,pt);if(rt(Q)){if(jt=rt(Q),typeof jt!="function")throw Error(r(150));return Q=jt.call(Q),te(Z,V,Q,pt)}if(typeof Q.then=="function")return Ve(Z,V,Nl(Q),pt);if(Q.$$typeof===L)return Ve(Z,V,wl(Z,Q),pt);Ol(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Z,V.sibling),pt=c(V,Q),pt.return=Z,Z=pt):(a(Z,V),pt=Uc(Q,Z.mode,pt),pt.return=Z,Z=pt),v(Z)):a(Z,V)}return function(Z,V,Q,pt){try{fo=0;var jt=Ve(Z,V,Q,pt);return ts=null,jt}catch(Yt){if(Yt===$r||Yt===Ul)throw Yt;var be=qn(29,Yt,null,Z.mode);return be.lanes=pt,be.return=Z,be}}}var _r=cm(!0),fm=cm(!1),La=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=bl(e),Zp(e,null,a),n}return Tl(e,o,n,a),bl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ys(e,a)}}function qc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yc=!1;function mo(){if(Yc){var e=Jr;if(e!==null)throw e}}function go(e,n,a,o){Yc=!1;var c=e.updateQueue;La=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,J=F.next;F.next=null,v===null?f=J:v.next=J,v=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==v&&(b===null?ft.firstBaseUpdate=J:b.next=J,ft.lastBaseUpdate=F))}if(f!==null){var mt=c.baseState;v=0,ft=J=F=null,b=f;do{var tt=b.lane&-536870913,ot=tt!==b.lane;if(ot?(ve&tt)===tt:(o&tt)===tt){tt!==0&&tt===Qr&&(Yc=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Gt=e,te=b;tt=n;var Ve=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){mt=Gt.call(Ve,mt,tt);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,tt=typeof Gt=="function"?Gt.call(Ve,mt,tt):Gt,tt==null)break t;mt=g({},mt,tt);break t;case 2:La=!0}}tt=b.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(J=ft=ot,F=mt):ft=ft.next=ot,v|=tt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(F=mt),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=mt}}function hm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function dm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hm(a[e],n)}var es=U(null),Pl=U(0);function pm(e,n){e=sa,gt(Pl,e),gt(es,n),sa=e|n.baseLanes}function Zc(){gt(Pl,sa),gt(es,es.current)}function Kc(){sa=Pl.current,nt(es),nt(Pl)}var Yn=U(null),fi=null;function Pa(e){var n=e.alternate;gt(en,en.current&1),gt(Yn,e),fi===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(fi=e)}function jc(e){gt(en,en.current),gt(Yn,e),fi===null&&(fi=e)}function mm(e){e.tag===22?(gt(en,en.current),gt(Yn,e),fi===null&&(fi=e)):za()}function za(){gt(en,en.current),gt(Yn,Yn.current)}function Zn(e){nt(Yn),fi===e&&(fi=null),nt(en)}var en=U(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,oe=null,He=null,on=null,Bl=!1,ns=!1,vr=!1,Fl=0,_o=0,is=null,Fx=0;function $e(){throw Error(r(321))}function Qc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Jc(e,n,a,o,c,f){return Ji=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Jm:pf,vr=!1,f=a(o,c),vr=!1,ns&&(f=_m(n,a,o,c)),gm(e),f}function gm(e){O.H=So;var n=He!==null&&He.next!==null;if(Ji=0,on=He=oe=null,Bl=!1,_o=0,is=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&Cl(e)&&(ln=!0))}function _m(e,n,a,o){oe=e;var c=0;do{if(ns&&(is=null),_o=0,ns=!1,25<=c)throw Error(r(301));if(c+=1,on=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=$m,f=n(a,o)}while(ns);return f}function Ix(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(oe.flags|=1024),n}function $c(){var e=Fl!==0;return Fl=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(Bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bl=!1}Ji=0,on=He=oe=null,ns=!1,_o=Fl=0,is=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=e:on=on.next=e,on}function nn(){if(He===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,He=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?oe.memoizedState=on=e:on=on.next=e}return on}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,is===null&&(is=[]),e=om(is,e,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Jm:pf),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===L)return bn(e)}throw Error(r(438,String(e)))}function nf(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=nn();return af(n,He,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=v=null,F=null,J=n,ft=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(ve&mt)===mt:(Ji&mt)===mt){var tt=J.revertLane;if(tt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Qr&&(ft=!0);else if((Ji&tt)===tt){J=J.next,tt===Qr&&(ft=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=mt,v=f):F=F.next=mt,oe.lanes|=tt,Ia|=tt;mt=J.action,vr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else tt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=tt,v=f):F=F.next=tt,oe.lanes|=mt,Ia|=mt;J=J.next}while(J!==null&&J!==n);if(F===null?v=f:F.next=b,!Wn(f,e.memoizedState)&&(ln=!0,ft&&(a=Jr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=F,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function vm(e,n,a){var o=oe,c=nn(),f=Se;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((He||c).memoizedState,a);if(v&&(c.memoizedState=a,ln=!0),c=c.queue,lf(ym.bind(null,o,c,e),[e]),c.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,as(9,{destroy:void 0},Sm.bind(null,o,c,a,n),null),Xe===null)throw Error(r(349));f||(Ji&127)!==0||xm(o,n,a)}return a}function xm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Il(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sm(e,n,a,o){n.value=a,n.getSnapshot=o,Mm(n)&&Em(e)}function ym(e,n,a){return a(function(){Mm(n)&&Em(e)})}function Mm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Em(e){var n=ur(e,2);n!==null&&Xn(n,e,2)}function sf(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),vr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function Tm(e,n,a,o){return e.baseState=a,af(e,He,typeof o=="function"?o:$i)}function Hx(e,n,a,o,c){if(kl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var b=a(c,o),F=O.S;F!==null&&F(v,b),Am(e,n,b)}catch(J){of(e,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(c,o),Am(e,n,f)}catch(J){of(e,n,J)}}function Am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(e,n,o)},function(o){return of(e,n,o)}):Rm(e,n,a)}function Rm(e,n,a){n.status="fulfilled",n.value=a,Cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cm(n),n=n.next;while(n!==o)}e.action=null}function Cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wm(e,n){return n}function Dm(e,n){if(Se){var a=Xe.formState;if(a!==null){t:{var o=oe;if(Se){if(We){e:{for(var c=We,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=hi(c.nextSibling),o=c.data==="F!";break t}}Da(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:n},a.queue=o,a=Km.bind(null,oe,o),o.dispatch=a,o=sf(!1),f=df.bind(null,oe,!1,o.queue),o=On(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Hx.bind(null,oe,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Um(e){var n=nn();return Lm(n,He,e)}function Lm(e,n,a){if(n=af(e,n,wm)[0],e=Gl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(v){throw v===$r?Ul:v}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,as(9,{destroy:void 0},Gx.bind(null,c,a),null)),[o,f,e]}function Gx(e,n){e.action=n}function Nm(e){var n=nn(),a=He;if(a!==null)return Lm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function as(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Il(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Om(){return nn().memoizedState}function Vl(e,n,a,o){var c=On();oe.flags|=e,c.memoizedState=as(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;He!==null&&o!==null&&Qc(o,He.memoizedState.deps)?c.memoizedState=as(n,f,a,o):(oe.flags|=e,c.memoizedState=as(1|n,f,a,o))}function Pm(e,n){Vl(8390656,8,e,n)}function lf(e,n){Xl(2048,8,e,n)}function Vx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Il(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function zm(e){var n=nn().memoizedState;return Vx({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Bm(e,n){return Xl(4,2,e,n)}function Fm(e,n){return Xl(4,4,e,n)}function Im(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hm(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,Im.bind(null,n,e),a)}function uf(){}function Gm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Vm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qc(n,o[1]))return o[0];if(o=e(),vr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function cf(e,n,a){return a===void 0||(Ji&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Xg(),oe.lanes|=e,Ia|=e,a)}function Xm(e,n,a,o){return Wn(a,n)?a:es.current!==null?(e=cf(e,a,o),Wn(e,n)||(ln=!0),e):(Ji&42)===0||(Ji&1073741824)!==0&&(ve&261930)===0?(ln=!0,e.memoizedState=a):(e=Xg(),oe.lanes|=e,Ia|=e,n)}function km(e,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var v=O.T,b={};O.T=b,df(e,!1,n,a);try{var F=c(),J=O.S;if(J!==null&&J(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=Bx(F,o);xo(e,n,ft,Qn(e))}else xo(e,n,o,Qn(e))}catch(mt){xo(e,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{H.p=f,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function Xx(){}function ff(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Wm(e).queue;km(e,c,n,it,a===null?Xx:function(){return qm(e),a(o)})}function Wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qm(e){var n=Wm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},Qn())}function hf(){return bn(zo)}function Ym(){return nn().memoizedState}function Zm(){return nn().memoizedState}function kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Na(a);var o=Oa(n,e,a);o!==null&&(Xn(o,n,a),po(o,n,a)),n={cache:Hc()},e.payload=n;return}n=n.return}}function Wx(e,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?jm(n,a):(a=wc(e,n,a,o),a!==null&&(Xn(a,e,o),Qm(a,n,o)))}function Km(e,n,a){var o=Qn();xo(e,n,a,o)}function xo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))jm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,v))return Tl(e,n,c,0),Xe===null&&El(),!1}catch{}if(a=wc(e,n,c,o),a!==null)return Xn(a,e,o),Qm(a,n,o),!0}return!1}function df(e,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(n)throw Error(r(479))}else n=wc(e,a,o,2),n!==null&&Xn(n,e,2)}function kl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function jm(e,n){ns=Bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ys(e,a)}}var So={readContext:bn,use:Hl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};So.useEffectEvent=$e;var Jm={readContext:bn,use:Hl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:Pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,Im.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vl(4194308,4,e,n)},useInsertionEffect:function(e,n){Vl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(vr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var c=a(n);if(vr){zt(!0);try{a(n)}finally{zt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Wx.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Km.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=On();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=km.bind(null,oe,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,c=On();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ve&127)!==0||xm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Pm(ym.bind(null,o,f,e),[e]),o.flags|=2048,as(9,{destroy:void 0},Sm.bind(null,o,f,a,n),null),a},useId:function(){var e=On(),n=Xe.identifierPrefix;if(Se){var a=Ni,o=Li;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return On().memoizedState=kx.bind(null,oe)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:bn,use:Hl,useCallback:Gm,useContext:bn,useEffect:lf,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:Vm,useReducer:Gl,useRef:Om,useState:function(){return Gl($i)},useDebugValue:uf,useDeferredValue:function(e,n){var a=nn();return Xm(a,He.memoizedState,e,n)},useTransition:function(){var e=Gl($i)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:hf,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=nn();return Tm(a,He,e,n)},useMemoCache:nf,useCacheRefresh:Zm};pf.useEffectEvent=zm;var $m={readContext:bn,use:Hl,useCallback:Gm,useContext:bn,useEffect:lf,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Fm,useMemo:Vm,useReducer:rf,useRef:Om,useState:function(){return rf($i)},useDebugValue:uf,useDeferredValue:function(e,n){var a=nn();return He===null?cf(a,e,n):Xm(a,He.memoizedState,e,n)},useTransition:function(){var e=rf($i)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:hf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=nn();return He!==null?Tm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Zm};$m.useEffectEvent=zm;function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Na(o);c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,o),n!==null&&(Xn(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Na(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,o),n!==null&&(Xn(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(e,o,a),n!==null&&(Xn(n,e,a),po(n,e,a))}};function tg(e,n,a,o,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(c,f):!0}function eg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function xr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function ng(e){Ml(e)}function ig(e){console.error(e)}function ag(e){Ml(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function rg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _f(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function sg(e){return e=Na(e),e.tag=3,e}function og(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){rg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){rg(n,a,o),typeof c!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function qx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?iu():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(e,o,c)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(e,o,c)),!1}throw Error(r(435,a.tag))}return Vf(e,o,c),iu(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Pc&&(e=Error(r(422),{cause:o}),lo(oi(e,a)))):(o!==Pc&&(n=Error(r(423),{cause:o}),lo(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=oi(o,a),c=_f(e.stateNode,o,c),qc(e,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=oi(f,a),Co===null?Co=[f]:Co.push(f),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=_f(a.stateNode,o,e),qc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=sg(c),og(c,e,a,o),qc(a,c),!1}a=a.return}while(a!==null);return!1}var vf=Error(r(461)),ln=!1;function An(e,n,a,o){n.child=e===null?fm(n,null,a,o):_r(n,e.child,a,o)}function lg(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var b in o)b!=="ref"&&(v[b]=o[b])}else v=o;return dr(n),o=Jc(e,n,a,v,f,c),b=$c(),e!==null&&!ln?(tf(e,n,c),ta(e,n,c)):(Se&&b&&Nc(n),n.flags|=1,An(e,n,o,c),n.child)}function ug(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Dc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cg(e,n,f,o,c)):(e=Al(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Af(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(v,o)&&e.ref===n.ref)return ta(e,n,c)}return n.flags|=1,e=Zi(f,o),e.ref=n.ref,e.return=n,n.child=e}function cg(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(ro(f,o)&&e.ref===n.ref)if(ln=!1,n.pendingProps=o=f,Af(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,ta(e,n,c)}return xf(e,n,a,o,c)}function fg(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return hg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?pm(n,f):Zc(),mm(n);else return o=n.lanes=536870912,hg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Dl(n,f.cachePool),pm(n,f),za(),n.memoizedState=null):(e!==null&&Dl(n,null),Zc(),za());return An(e,n,c,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function hg(e,n,a,o,c){var f=Vc();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Dl(n,null),Zc(),mm(n),e!==null&&jr(e,n,o,!0),n.childLanes=c,null}function ql(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function dg(e,n,a){return _r(n,e.child,null,a),e=ql(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function Yx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=ql(n,o),n.lanes=536870912,yo(null,e);if(jc(n),(e=We)?(e=b0(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return ql(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(jc(n),c)if(n.flags&256)n.flags&=-257,n=dg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||jr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(o=Xe,o!==null&&(v=Pr(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ur(e,v),Xn(o,e,v),vf;iu(),n=dg(e,n,a)}else e=f.treeContext,We=hi(v.nextSibling),Tn=n,Se=!0,wa=null,ci=!1,e!==null&&$p(n,e),n=ql(n,o),n.flags|=4096;return n}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,o,c){return dr(n),a=Jc(e,n,a,o,void 0,c),o=$c(),e!==null&&!ln?(tf(e,n,c),ta(e,n,c)):(Se&&o&&Nc(n),n.flags|=1,An(e,n,a,c),n.child)}function pg(e,n,a,o,c,f){return dr(n),n.updateQueue=null,a=_m(n,o,a,c),gm(e),o=$c(),e!==null&&!ln?(tf(e,n,f),ta(e,n,f)):(Se&&o&&Nc(n),n.flags|=1,An(e,n,a,f),n.child)}function mg(e,n,a,o,c){if(dr(n),n.stateNode===null){var f=qr,v=a.contextType;typeof v=="object"&&v!==null&&(f=bn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},kc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?bn(v):qr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(mf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&gf.enqueueReplaceState(f,f.state,null),go(n,o,f,c),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,F=xr(a,b);f.props=F;var J=f.context,ft=a.contextType;v=qr,typeof ft=="object"&&ft!==null&&(v=bn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==v)&&eg(n,f,o,v),La=!1;var tt=n.memoizedState;f.state=tt,go(n,o,f,c),mo(),J=n.memoizedState,b||tt!==J||La?(typeof mt=="function"&&(mf(n,a,mt,o),J=n.memoizedState),(F=La||tg(n,a,F,o,tt,J,v))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=v,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Wc(e,n),v=n.memoizedProps,ft=xr(a,v),f.props=ft,mt=n.pendingProps,tt=f.context,J=a.contextType,F=qr,typeof J=="object"&&J!==null&&(F=bn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||tt!==F)&&eg(n,f,o,F),La=!1,tt=n.memoizedState,f.state=tt,go(n,o,f,c),mo();var ot=n.memoizedState;v!==mt||tt!==ot||La||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof b=="function"&&(mf(n,a,b,o),ot=n.memoizedState),(ft=La||tg(n,a,ft,o,tt,ot,F)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=F,o=ft):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=_r(n,e.child,null,c),n.child=_r(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ta(e,n,c),e}function gg(e,n,a,o){return fr(),n.flags|=256,An(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:rm()}}function Mf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=jn),e}function _g(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(c?Pa(n):za(),(e=We)?(e=b0(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=jp(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Da(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(za(),c=n.mode,b=Zl({mode:"hidden",children:b},c),o=cr(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,v,a),n.memoizedState=Sf,yo(null,o)):(Pa(n),Ef(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),b=o.fallback,c=n.mode,o=Zl({mode:"visible",children:o.children},c),b=cr(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,_r(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Mf(e,v,a),n.memoizedState=Sf,n=yo(null,o));else if(Pa(n),ah(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(r(419)),o.stack="",o.digest=v,lo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(ln||jr(e,n,a,!1),v=(a&e.childLanes)!==0,ln||v){if(v=Xe,v!==null&&(o=Pr(v,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,ur(e,o),Xn(v,e,o),vf;ih(b)||iu(),n=Tf(e,n,a)}else ih(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,We=hi(b.nextSibling),Tn=n,Se=!0,wa=null,ci=!1,e!==null&&$p(n,e),n=Ef(n,o.children),n.flags|=4096);return n}return c?(za(),b=o.fallback,c=n.mode,F=e.child,J=F.sibling,o=Zi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,J!==null?b=Zi(J,b):(b=cr(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,yo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=yf(a):(c=b.cachePool,c!==null?(F=sn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=rm(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=Mf(e,v,a),n.memoizedState=Sf,yo(e.child,o)):(Pa(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return _r(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fc(e.return,n,a)}function bf(e,n,a,o,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function xg(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=en.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,gt(en,v),An(e,n,o,a),o=Se?oo:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,a,n);else if(e.tag===19)vg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),bf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&zl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}bf(n,!0,a,null,f,o);break;case"together":bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function Zx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ua(n,sn,e.memoizedState.cache),fr();break;case 27:case 5:It(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,jc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_g(e,n,a):(Pa(n),e=ta(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(jr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return xg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(en,en.current),o)break;return null;case 22:return n.lanes=0,fg(e,n,a,n.pendingProps);case 24:Ua(n,sn,e.memoizedState.cache)}return ta(e,n,a)}function Sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return ln=!1,Zx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,Se&&(n.flags&1048576)!==0&&Jp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")Dc(e)?(o=xr(e,o),n.tag=1,n=mg(null,n,e,o,a)):(n.tag=0,n=xf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=lg(null,n,e,o,a);break t}else if(c===P){n.tag=14,n=ug(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(r(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=xr(o,n.pendingProps),mg(e,n,o,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Wc(e,n),go(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ua(n,sn,o),o!==f.cache&&Ic(n,[sn],a,!0),mo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=gg(e,n,o,a);break t}else if(o!==c){c=oi(Error(r(424)),n),lo(c),n=gg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=hi(e.firstChild),Tn=n,Se=!0,wa=null,ci=!0,a=fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),o===c){n=ta(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=U0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=cu(et.current).createElement(a),o[rn]=n,o[vn]=e,Rn(o,a,e),A(o),n.stateNode=o):n.memoizedState=U0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&Se&&(o=n.stateNode=C0(n.type,n.pendingProps,et.current),Tn=n,ci=!0,c=We,ka(n.type)?(rh=c,We=hi(o.firstChild)):We=c),An(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((c=o=We)&&(o=TS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,We=hi(o.firstChild),ci=!1,c=!0):c=!1),c||Da(n)),It(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,th(c,f)?o=null:v!==null&&th(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Jc(e,n,Ix,null,null,a),zo._currentValue=c),Yl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=We)&&(a=bS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,We=null,e=!0):e=!1),e||Da(n)),null;case 13:return _g(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_r(n,null,o,a):An(e,n,o,a),n.child;case 11:return lg(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,dr(n),c=bn(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return ug(e,n,n.type,n.pendingProps,a);case 15:return cg(e,n,n.type,n.pendingProps,a);case 19:return xg(e,n,a);case 31:return Yx(e,n,a);case 22:return fg(e,n,a,n.pendingProps);case 24:return dr(n),o=bn(sn),e===null?(c=Vc(),c===null&&(c=Xe,f=Hc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},kc(n),Ua(n,sn,c)):((e.lanes&a)!==0&&(Wc(e,n),go(n,null,null,a),mo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ua(n,sn,o)):(o=f.cache,Ua(n,sn,o),o!==c.cache&&Ic(n,[sn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(e){e.flags|=4}function Rf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Yg())e.flags|=8192;else throw gr=Ll,Xc}else e.flags&=-16777217}function yg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z0(n))if(Yg())e.flags|=8192;else throw gr=Ll,Xc}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,ls|=n)}function Mo(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Kx(e,n,a){var o=n.pendingProps;switch(Oc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(sn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Kr(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zc())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(qe(n),yg(n,f)):(qe(n),Rf(n,c,null,o,a))):f?f!==e.memoizedState?(ea(n),qe(n),yg(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ea(n),qe(n),Rf(n,c,e,o,a)),null;case 27:if(de(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=bt.current,Kr(n)?tm(n):(e=C0(c,o,a),n.stateNode=e,ea(n))}return qe(n),null;case 5:if(de(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=bt.current,Kr(n))tm(n);else{var v=cu(et.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[rn]=n,f[vn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Rn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ea(n)}}return qe(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=et.current,Kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_0(e.nodeValue,a)),e||Da(n,!0)}else e=cu(e).createTextNode(o),e[rn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Kr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),qe(n),null);case 4:return Vt(),e===null&&Kf(n.stateNode.containerInfo),qe(n),null;case 10:return Qi(n.type),qe(n),null;case 19:if(nt(en),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)Mo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=zl(e),f!==null){for(n.flags|=128,Mo(o,!1),e=f.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Kp(a,e),a=a.sibling;return gt(en,en.current&1|2),Se&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>tu&&(n.flags|=128,c=!0,Mo(o,!1),n.lanes=4194304)}else{if(!c)if(e=zl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*E()-o.renderingStartTime>tu&&a!==536870912&&(n.flags|=128,c=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=en.current,gt(en,c?a&1|2:a&1),Se&&Ki(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Zn(n),Kc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jx(e,n){switch(Oc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qi(sn),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(en),null;case 4:return Vt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Zn(n),Kc(),e!==null&&nt(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Qi(sn),null;case 25:return null;default:return null}}function Mg(e,n){switch(Oc(n),n.tag){case 3:Qi(sn),Vt();break;case 26:case 27:case 5:de(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:nt(en);break;case 10:Qi(n.type);break;case 22:case 23:Zn(n),Kc(),e!==null&&nt(pr);break;case 24:Qi(sn)}}function Eo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(b){Be(n,n.return,b)}}function Ba(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var v=o.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var F=a,J=b;try{J()}catch(ft){Be(c,F,ft)}}}o=o.next}while(o!==f)}}catch(ft){Be(n,n.return,ft)}}function Eg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dm(n,a)}catch(o){Be(e,e.return,o)}}}function Tg(e,n,a){a.props=xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Be(e,n,c)}}function Oi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Be(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(e,n,c)}else a.current=null}function bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Be(e,e.return,c)}}function Cf(e,n,a){try{var o=e.stateNode;vS(o,e.type,a,n),o[vn]=n}catch(c){Be(e,e.return,c)}}function Ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function Rg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,o,a),n[rn]=e,n[vn]=a}catch(f){Be(e,e.return,f)}}var na=!1,un=!1,Uf=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Qx(e,n){if(e=e.containerInfo,Jf=_u,e=Hp(e),Ec(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,F=-1,J=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(b=v+c),mt!==f||o!==0&&mt.nodeType!==3||(F=v+o),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++J===c&&(b=v),tt===f&&++ft===o&&(F=v),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},_u=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Gt=xr(a.type,c);e=o.getSnapshotBeforeUpdate(Gt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function wg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:aa(e,a),o&4&&Eo(5,a);break;case 1:if(aa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Be(a,a.return,v)}else{var c=xr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}o&64&&Eg(a),o&512&&To(a,a.return);break;case 3:if(aa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dm(e,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&o&4&&Rg(a);case 26:case 5:aa(e,a),n===null&&o&4&&bg(a),o&512&&To(a,a.return);break;case 12:aa(e,a);break;case 31:aa(e,a),o&4&&Lg(e,a);break;case 13:aa(e,a),o&4&&Ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sS.bind(null,a),AS(e,a))));break;case 22:if(o=a.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||un,c=na;var f=un;na=o,(un=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):aa(e,a),na=c,un=f}break;case 30:break;default:aa(e,a)}}function Dg(e){var n=e.alternate;n!==null&&(e.alternate=null,Dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,In=!1;function ia(e,n,a){for(a=a.child;a!==null;)Ug(e,n,a),a=a.sibling}function Ug(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:un||Oi(a,n),ia(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Oi(a,n);var o=Ke,c=In;ka(a.type)&&(Ke=a.stateNode,In=!1),ia(e,n,a),No(a.stateNode),Ke=o,In=c;break;case 5:un||Oi(a,n);case 6:if(o=Ke,c=In,Ke=null,ia(e,n,a),Ke=o,In=c,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ke!==null&&(In?(e=Ke,E0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):E0(Ke,a.stateNode));break;case 4:o=Ke,c=In,Ke=a.stateNode.containerInfo,In=!0,ia(e,n,a),Ke=o,In=c;break;case 0:case 11:case 14:case 15:Ba(2,a,n),un||Ba(4,a,n),ia(e,n,a);break;case 1:un||(Oi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Tg(a,n,o)),ia(e,n,a);break;case 21:ia(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,ia(e,n,a),un=o;break;default:ia(e,n,a)}}function Lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){Be(n,n.return,a)}}}function Ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Be(n,n.return,a)}}function Jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cg),n;default:throw Error(r(435,e.tag))}}function Ql(e,n){var a=Jx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=oS.bind(null,e,o);o.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(ka(b.type)){Ke=b.stateNode,In=!1;break t}break;case 5:Ke=b.stateNode,In=!1;break t;case 3:case 4:Ke=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ke===null)throw Error(r(160));Ug(f,v,c),Ke=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Og(n,e),n=n.sibling}var Ei=null;function Og(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Ba(3,e,e.return),Eo(3,e),Ba(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(un||a===null||Oi(a,a.return)),o&64&&na&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ei;if(Hn(n,e),Gn(e),o&512&&(un||a===null||Oi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ar]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,o,a),f[rn]=e,A(f),o=f;break t;case"link":var v=O0("link","href",c).get(o+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=O0("meta","content",c).get(o+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=c.createElement(o),Rn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=e,A(f),o=f}e.stateNode=o}else P0(c,e.type,e.stateNode);else e.stateNode=N0(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?P0(c,e.type,e.stateNode):N0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(un||a===null||Oi(a,a.return)),a!==null&&o&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(un||a===null||Oi(a,a.return)),e.flags&32){c=e.stateNode;try{fn(c,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Cf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Uf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(du=null,c=Ei,Ei=fu(n.containerInfo),Hn(n,e),Ei=c,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}Uf&&(Uf=!1,Pg(e));break;case 4:o=Ei,Ei=fu(e.stateNode.containerInfo),Hn(n,e),Gn(e),Ei=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=na,ft=un;if(na=J||c,un=ft||F,Hn(n,e),un=ft,na=J,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||na||un||Sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=F.stateNode;var mt=F.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Gt){Be(F,F.return,Gt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;c?T0(ot,!0):T0(F.stateNode,!1)}catch(Gt){Be(F,F.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ag(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=wf(e);jl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(fn(v,""),a.flags&=-33);var b=wf(e);jl(e,b,v);break;case 3:case 4:var F=a.stateNode.containerInfo,J=wf(e);Df(e,J,F);break;default:throw Error(r(161))}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function aa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wg(e,n.alternate,n),n=n.sibling}function Sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Sr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Tg(n,n.return,a),Sr(n);break;case 27:No(n.stateNode);case 26:case 5:Oi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ra(c,f,a),Eo(4,f);break;case 1:if(ra(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Be(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)hm(F[c],b)}catch(J){Be(o,o.return,J)}}a&&v&64&&Eg(f),To(f,f.return);break;case 27:Rg(f);case 26:case 5:ra(c,f,a),a&&o===null&&v&4&&bg(f),To(f,f.return);break;case 12:ra(c,f,a);break;case 31:ra(c,f,a),a&&v&4&&Lg(c,f);break;case 13:ra(c,f,a),a&&v&4&&Ng(c,f);break;case 22:f.memoizedState===null&&ra(c,f,a),To(f,f.return);break;case 30:break;default:ra(c,f,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zg(e,n,a,o),n=n.sibling}function zg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),c&2048&&Eo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(c&2048){Ti(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,o):bo(e,n):f._visibility&2?Ti(e,n,a,o):(f._visibility|=2,rs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Lf(v,n);break;case 24:Ti(e,n,a,o),c&2048&&Nf(n.alternate,n);break;default:Ti(e,n,a,o)}}function rs(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,F=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:rs(f,v,b,F,c),Eo(8,v);break;case 23:break;case 22:var ft=v.stateNode;v.memoizedState!==null?ft._visibility&2?rs(f,v,b,F,c):bo(f,v):(ft._visibility|=2,rs(f,v,b,F,c)),c&&J&2048&&Lf(v.alternate,v);break;case 24:rs(f,v,b,F,c),c&&J&2048&&Nf(v.alternate,v);break;default:rs(f,v,b,F,c)}n=n.sibling}}function bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:bo(a,o),c&2048&&Lf(o.alternate,o);break;case 24:bo(a,o),c&2048&&Nf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var Ao=8192;function ss(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)Bg(e,n,a),e=e.sibling}function Bg(e,n,a){switch(e.tag){case 26:ss(e,n,a),e.flags&Ao&&e.memoizedState!==null&&FS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ss(e,n,a);break;case 3:case 4:var o=Ei;Ei=fu(e.stateNode.containerInfo),ss(e,n,a),Ei=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,ss(e,n,a),Ao=o):ss(e,n,a));break;default:ss(e,n,a)}}function Fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Hg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Ro(e);break;default:Ro(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Hg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function Hg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var c=o.sibling,f=o.return;if(Dg(o),o===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var $x={getCacheForType:function(e){var n=bn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,me=null,ve=0,ze=0,Kn=null,Fa=!1,os=!1,Of=!1,sa=0,tn=0,Ia=0,yr=0,Pf=0,jn=0,ls=0,Co=null,Vn=null,zf=!1,$l=0,Gg=0,tu=1/0,eu=null,Ha=null,hn=0,Ga=null,us=null,oa=0,Bf=0,Ff=null,Vg=null,wo=0,If=null;function Qn(){return(Ue&2)!==0&&ve!==0?ve&-ve:O.T!==null?Wf():Ks()}function Xg(){if(jn===0)if((ve&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),jn=e}else jn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),jn}function Xn(e,n,a){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(cs(e,0),Va(e,ve,jn,!1)),Dn(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(yr|=a),tn===4&&Va(e,ve,jn,!1)),Pi(e))}function kg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),c=o?iS(e,n):Gf(e,n,!0),f=o;do{if(c===0){os&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!eS(a)){c=Gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;c=Co;var F=b.current.memoizedState.isDehydrated;if(F&&(cs(b,v).flags|=256),v=Gf(b,v,!1),v!==2){if(Of&&!F){b.errorRecoveryDisabledLanes|=f,yr|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){cs(e,0),Va(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,jn,!Fa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=$l+300-E(),10<c)){if(Va(o,n,jn,!Fa),_t(o,0,!0)!==0)break t;oa=n,o.timeoutHandle=y0(Wg.bind(null,o,a,Vn,eu,zf,n,jn,yr,ls,Fa,f,"Throttled",-0,0),c);break t}Wg(o,a,Vn,eu,zf,n,jn,yr,ls,Fa,f,null,-0,0)}}break}while(!0);Pi(e)}function Wg(e,n,a,o,c,f,v,b,F,J,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},Bg(n,f,mt);var Gt=(f&62914560)===f?$l-E():(f&4194048)===f?Gg-E():0;if(Gt=IS(mt,Gt),Gt!==null){oa=f,e.cancelPendingCommit=Gt($g.bind(null,e,n,f,a,o,c,v,b,F,ft,mt,null,tt,ot)),Va(e,f,v,!J);return}}$g(e,n,f,a,o,c,v,b,F)}function eS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~Pf,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&dl(e,a,n)}function nu(){return(Ue&6)===0?(Do(0),!1):!0}function Hf(){if(me!==null){if(ze===0)var e=me.return;else e=me,ji=hr=null,ef(e),ts=null,fo=0,e=me;for(;e!==null;)Mg(e.alternate,e),e=e.return;me=null}}function cs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,Hf(),Xe=e,me=a=Zi(e.current,null),ve=n,ze=0,Kn=null,Fa=!1,os=At(e,n),Of=!1,ls=jn=Pf=yr=Ia=tn=0,Vn=Co=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),f=1<<c;n|=e[c],o&=~f}return sa=n,El(),a}function qg(e,n){oe=null,O.H=So,n===$r||n===Ul?(n=lm(),ze=3):n===Xc?(n=lm(),ze=4):ze=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(tn=1,Wl(e,oi(n,e.current)))}function Yg(){var e=Yn.current;return e===null?!0:(ve&4194048)===ve?fi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===fi:!1}function Zg(){var e=O.H;return O.H=So,e===null?So:e}function Kg(){var e=O.A;return O.A=$x,e}function iu(){tn=4,Fa||(ve&4194048)!==ve&&Yn.current!==null||(os=!0),(Ia&134217727)===0&&(yr&134217727)===0||Xe===null||Va(Xe,ve,jn,!1)}function Gf(e,n,a){var o=Ue;Ue|=2;var c=Zg(),f=Kg();(Xe!==e||ve!==n)&&(eu=null,cs(e,n)),n=!1;var v=tn;t:do try{if(ze!==0&&me!==null){var b=me,F=Kn;switch(ze){case 8:Hf(),v=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=ze;if(ze=0,Kn=null,fs(e,b,F,J),a&&os){v=0;break t}break;default:J=ze,ze=0,Kn=null,fs(e,b,F,J)}}nS(),v=tn;break}catch(ft){qg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ji=hr=null,Ue=o,O.H=c,O.A=f,me===null&&(Xe=null,ve=0,El()),v}function nS(){for(;me!==null;)jg(me)}function iS(e,n){var a=Ue;Ue|=2;var o=Zg(),c=Kg();Xe!==e||ve!==n?(eu=null,tu=E()+500,cs(e,n)):os=At(e,n);t:do try{if(ze!==0&&me!==null){n=me;var f=Kn;e:switch(ze){case 1:ze=0,Kn=null,fs(e,n,f,1);break;case 2:case 9:if(sm(f)){ze=0,Kn=null,Qg(n);break}n=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),Pi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:sm(f)?(ze=0,Kn=null,Qg(n)):(ze=0,Kn=null,fs(e,n,f,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var b=me;if(v?z0(v):b.stateNode.complete){ze=0,Kn=null;var F=b.sibling;if(F!==null)me=F;else{var J=b.return;J!==null?(me=J,au(J)):me=null}break e}}ze=0,Kn=null,fs(e,n,f,5);break;case 6:ze=0,Kn=null,fs(e,n,f,6);break;case 8:Hf(),tn=6;break t;default:throw Error(r(462))}}aS();break}catch(ft){qg(e,ft)}while(!0);return ji=hr=null,O.H=o,O.A=c,Ue=a,me!==null?0:(Xe=null,ve=0,El(),tn)}function aS(){for(;me!==null&&!qt();)jg(me)}function jg(e){var n=Sg(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?au(e):me=n}function Qg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=pg(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=pg(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:ef(n);default:Mg(a,n),n=me=Kp(n,sa),n=Sg(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?au(e):me=n}function fs(e,n,a,o){ji=hr=null,ef(n),ts=null,fo=0;var c=n.return;try{if(qx(e,c,n,a,ve)){tn=1,Wl(e,oi(a,e.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;tn=1,Wl(e,oi(a,e.current)),me=null;return}n.flags&32768?(Se||o===1?e=!0:os||(ve&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jg(n,e)):au(n)}function au(e){var n=e;do{if((n.flags&32768)!==0){Jg(n,Fa);return}e=n.return;var a=Kx(n.alternate,n,sa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);tn===0&&(tn=5)}function Jg(e,n){do{var a=jx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);tn=6,me=null}function $g(e,n,a,o,c,f,v,b,F){e.cancelPendingCommit=null;do ru();while(hn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Cc,xi(e,a,f,v,b,F),e===Xe&&(me=Xe=null,ve=0),us=n,Ga=e,oa=a,Bf=f,Ff=c,Vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lS(lt,function(){return a0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=H.p,H.p=2,v=Ue,Ue|=4;try{Qx(e,n,a)}finally{Ue=v,H.p=c,O.T=o}}hn=1,t0(),e0(),n0()}}function t0(){if(hn===1){hn=0;var e=Ga,n=us,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Ue;Ue|=4;try{Og(n,e);var f=$f,v=Hp(e.containerInfo),b=f.focusedElem,F=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&Ip(b.ownerDocument.documentElement,b)){if(F!==null&&Ec(b)){var J=F.start,ft=F.end;if(ft===void 0&&(ft=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Gt=b.textContent.length,te=Math.min(F.start,Gt),Ve=F.end===void 0?te:Math.min(F.end,Gt);!ot.extend&&te>Ve&&(v=Ve,Ve=te,te=v);var Z=Fp(b,te),V=Fp(b,Ve);if(Z&&V&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Z.node,Z.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(Q),ot.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ot.addRange(Q))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}_u=!!Jf,$f=Jf=null}finally{Ue=c,H.p=o,O.T=a}}e.current=n,hn=2}}function e0(){if(hn===2){hn=0;var e=Ga,n=us,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=H.p;H.p=2;var c=Ue;Ue|=4;try{wg(e,n.alternate,n)}finally{Ue=c,H.p=o,O.T=a}}hn=3}}function n0(){if(hn===4||hn===3){hn=0,D();var e=Ga,n=us,a=oa,o=Vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,us=Ga=null,i0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ha=null),zr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=H.p,H.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var b=o[v];f(b.value,{componentStack:b.stack})}}finally{O.T=n,H.p=c}}(oa&3)!==0&&ru(),Pi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===If?wo++:(wo=0,If=e):wo=0,Do(0)}}function i0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function ru(){return t0(),e0(),n0(),a0()}function a0(){if(hn!==5)return!1;var e=Ga,n=Bf;Bf=0;var a=zr(oa),o=O.T,c=H.p;try{H.p=32>a?32:a,O.T=null,a=Ff,Ff=null;var f=Ga,v=oa;if(hn=0,us=Ga=null,oa=0,(Ue&6)!==0)throw Error(r(331));var b=Ue;if(Ue|=4,Ig(f.current),zg(f,f.current,v,a),Ue=b,Do(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=c,O.T=o,i0(e,n)}}function r0(e,n,a){n=oi(a,n),n=_f(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Dn(e,2),Pi(e))}function Be(e,n,a){if(e.tag===3)r0(e,e,a);else for(;n!==null;){if(n.tag===3){r0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){e=oi(a,e),a=sg(2),o=Oa(n,a,2),o!==null&&(og(a,o,n,e),Dn(o,2),Pi(o));break}}n=n.return}}function Vf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new tS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Of=!0,c.add(a),e=rS.bind(null,e,n,a),n.then(e,e))}function rS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ve&a)===a&&(tn===4||tn===3&&(ve&62914560)===ve&&300>E()-$l?(Ue&2)===0&&cs(e,0):Pf|=a,ls===ve&&(ls=0)),Pi(e)}function s0(e,n){n===0&&(n=Oe()),e=ur(e,n),e!==null&&(Dn(e,n),Pi(e))}function sS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),s0(e,a)}function oS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),s0(e,a)}function lS(e,n){return ye(e,n)}var su=null,hs=null,Xf=!1,ou=!1,kf=!1,Xa=0;function Pi(e){e!==hs&&e.next===null&&(hs===null?su=hs=e:hs=hs.next=e),ou=!0,Xf||(Xf=!0,cS())}function Do(e,n){if(!kf&&ou){kf=!0;do for(var a=!1,o=su;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,c0(o,f))}else f=ve,f=_t(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||At(o,f)||(a=!0,c0(o,f));o=o.next}while(a);kf=!1}}function uS(){o0()}function o0(){ou=Xf=!1;var e=0;Xa!==0&&SS()&&(e=Xa);for(var n=E(),a=null,o=su;o!==null;){var c=o.next,f=l0(o,n);f===0?(o.next=null,a===null?su=c:a.next=c,c===null&&(hs=a)):(a=o,(e!==0||(f&3)!==0)&&(ou=!0)),o=c}hn!==0&&hn!==5||Do(e),Xa!==0&&(Xa=0)}function l0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),b=1<<v,F=c[v];F===-1?((b&a)===0||(b&o)!==0)&&(c[v]=ne(b,n)):F<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xe,a=ve,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),zr(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return o=u0.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function u0(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ru()&&e.callbackNode!==a)return null;var o=ve;return o=_t(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kg(e,o,n),l0(e,E()),e.callbackNode!=null&&e.callbackNode===a?u0.bind(null,e):null)}function c0(e,n){if(ru())return null;kg(e,n,!0)}function cS(){MS(function(){(Ue&6)!==0?ye(ht,uS):o0()})}function Wf(){if(Xa===0){var e=Qr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Xa=e}return Xa}function f0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function h0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=f0((c[vn]||null).action),v=o.submitter;v&&(n=(n=v[vn]||null)?f0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new xl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var F=v?h0(c,v):new FormData(c);ff(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=v?h0(c,v):new FormData(c),ff(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var qf=0;qf<Rc.length;qf++){var Yf=Rc[qf],hS=Yf.toLowerCase(),dS=Yf[0].toUpperCase()+Yf.slice(1);Mi(hS,"on"+dS)}Mi(Xp,"onAnimationEnd"),Mi(kp,"onAnimationIteration"),Mi(Wp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(wx,"onTransitionRun"),Mi(Dx,"onTransitionStart"),Mi(Ux,"onTransitionCancel"),Mi(qp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function d0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var b=o[v],F=b.instance,J=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ft){Ml(ft)}c.currentTarget=null,f=F}else for(v=0;v<o.length;v++){if(b=o[v],F=b.instance,J=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ft){Ml(ft)}c.currentTarget=null,f=F}}}}function ge(e,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var o=e+"__bubble";a.has(o)||(p0(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),p0(a,e,o,n)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[lu]){e[lu]=!0,Y.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lu]||(n[lu]=!0,Zf("selectionchange",!1,n))}}function p0(e,n,a,o){switch(X0(n)){case 2:var c=VS;break;case 8:c=XS;break;default:c=ch}a=c.bind(null,n,a,e),c=void 0,!pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var b=o.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=o.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=Ta(b),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){o=f=v;continue t}b=b.parentNode}}o=o.return}xp(function(){var J=f,ft=hc(a),mt=[];t:{var tt=Yp.get(e);if(tt!==void 0){var ot=xl,Gt=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":ot=ox;break;case"focusin":Gt="focus",ot=vc;break;case"focusout":Gt="blur",ot=vc;break;case"beforeblur":case"afterblur":ot=vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=cx;break;case Xp:case kp:case Wp:ot=Jv;break;case qp:ot=hx;break;case"scroll":case"scrollend":ot=Yv;break;case"wheel":ot=px;break;case"copy":case"cut":case"paste":ot=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Tp;break;case"toggle":case"beforetoggle":ot=gx}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),Z=te?tt!==null?tt+"Capture":null:tt;te=[];for(var V=J,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=Js(V,Z),pt!=null&&te.push(Lo(V,pt,Q))),Ve)break;V=V.return}0<te.length&&(tt=new ot(tt,Gt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==fc&&(Gt=a.relatedTarget||a.fromElement)&&(Ta(Gt)||Gt[Si]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=J,Gt=Gt?Ta(Gt):null,Gt!==null&&(Ve=u(Gt),te=Gt.tag,Gt!==Ve||te!==5&&te!==27&&te!==6)&&(Gt=null)):(ot=null,Gt=J),ot!==Gt)){if(te=Mp,pt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=Tp,pt="onPointerLeave",Z="onPointerEnter",V="pointer"),Ve=ot==null?tt:rr(ot),Q=Gt==null?tt:rr(Gt),tt=new te(pt,V+"leave",ot,a,ft),tt.target=Ve,tt.relatedTarget=Q,pt=null,Ta(ft)===J&&(te=new te(Z,V+"enter",Gt,a,ft),te.target=Q,te.relatedTarget=Ve,pt=te),Ve=pt,ot&&Gt)e:{for(te=mS,Z=ot,V=Gt,Q=0,pt=Z;pt;pt=te(pt))Q++;pt=0;for(var jt=V;jt;jt=te(jt))pt++;for(;0<Q-pt;)Z=te(Z),Q--;for(;0<pt-Q;)V=te(V),pt--;for(;Q--;){if(Z===V||V!==null&&Z===V.alternate){te=Z;break e}Z=te(Z),V=te(V)}te=null}else te=null;ot!==null&&m0(mt,tt,ot,te,!1),Gt!==null&&Ve!==null&&m0(mt,Ve,Gt,te,!0)}}t:{if(tt=J?rr(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var be=Lp;else if(Dp(tt))if(Np)be=Ax;else{be=Tx;var Yt=Ex}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&yi(J.elementType)&&(be=Lp):be=bx;if(be&&(be=be(e,J))){Up(mt,be,a,ft);break t}Yt&&Yt(e,tt,J),e==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&Sn(tt,"number",tt.value)}switch(Yt=J?rr(J):window,e){case"focusin":(Dp(Yt)||Yt.contentEditable==="true")&&(Xr=Yt,Tc=J,so=null);break;case"focusout":so=Tc=Xr=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Gp(mt,a,ft);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Gp(mt,a,ft)}var ue;if(Sc)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Vr?Cp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(bp&&a.locale!=="ko"&&(Vr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Vr&&(ue=Sp()):(Ra=ft,mc="value"in Ra?Ra.value:Ra.textContent,Vr=!0)),Yt=uu(J,xe),0<Yt.length&&(xe=new Ep(xe,e,null,a,ft),mt.push({event:xe,listeners:Yt}),ue?xe.data=ue:(ue=wp(a),ue!==null&&(xe.data=ue)))),(ue=vx?xx(e,a):Sx(e,a))&&(xe=uu(J,"onBeforeInput"),0<xe.length&&(Yt=new Ep("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:xe}),Yt.data=ue)),fS(mt,e,J,a,ft)}d0(mt,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Js(e,a),c!=null&&o.unshift(Lo(e,c,f)),c=Js(e,n),c!=null&&o.push(Lo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function mS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m0(e,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var b=a,F=b.alternate,J=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||J===null||(F=J,c?(J=Js(a,f),J!=null&&v.unshift(Lo(a,J,F))):c||(J=Js(a,f),J!=null&&v.push(Lo(a,J,F)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var gS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function g0(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(_S,"")}function _0(e,n){return n=g0(n),g0(e)===n}function Ge(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||fn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&fn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Ir(e,o,f);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",c.name,c,null),Ge(e,n,"formEncType",c.formEncType,c,null),Ge(e,n,"formMethod",c.formMethod,c,null),Ge(e,n,"formTarget",c.formTarget,c,null)):(Ge(e,n,"encType",c.encType,c,null),Ge(e,n,"method",c.method,c,null),Ge(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=qi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),kt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":kt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wv.get(a)||a,kt(e,a,o))}}function Qf(e,n,a,o,c,f){switch(a){case"style":Ir(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?fn(e,o):(typeof o=="number"||typeof o=="bigint")&&fn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):kt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,v,a,null)}}c&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=v=c=null,F=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":v=ft;break;case"checked":F=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(e,n,o,ft,a,null)}}Wi(e,f,b,F,J,v,c,!1);return;case"select":ge("invalid",e),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":o=b;default:Ge(e,n,c,b,a,null)}n=f,a=v,e.multiple=!!o,n!=null?ri(e,!!o,n,!1):a!=null&&ri(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(e,n,v,b,a,null)}yn(e,o,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,F,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)ge(Uo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,J,o,a,null)}return;default:if(yi(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Qf(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ge(e,n,b,o,a,null))}function vS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,b=null,F=null,J=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:o.hasOwnProperty(ot)||Ge(e,n,ot,null,o,mt)}}for(var tt in o){var ot=o[tt];if(mt=a[tt],o.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ft=ot;break;case"value":v=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ge(e,n,tt,ot,o,mt)}}xn(e,v,b,F,J,ft,f,c);return;case"select":ot=v=b=tt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,F)}for(c in o)if(f=o[c],F=a[c],o.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==F&&Ge(e,n,c,f,o,F)}n=b,a=v,o=ot,tt!=null?ri(e,!!a,tt,!1):!!o!=!!a&&(n!=null?ri(e,!!a,n,!0):ri(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(e,n,b,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(e,n,v,c,o,f)}Pe(e,tt,ot);return;case"option":for(var Gt in a)tt=a[Gt],a.hasOwnProperty(Gt)&&tt!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ge(e,n,Gt,null,o,tt));for(F in o)tt=o[F],ot=a[F],o.hasOwnProperty(F)&&tt!==ot&&(tt!=null||ot!=null)&&(F==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ge(e,n,F,tt,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,tt);for(J in o)if(tt=o[J],ot=a[J],o.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ge(e,n,J,tt,o,ot)}return;default:if(yi(n)){for(var Ve in a)tt=a[Ve],a.hasOwnProperty(Ve)&&tt!==void 0&&!o.hasOwnProperty(Ve)&&Qf(e,n,Ve,void 0,o,tt);for(ft in o)tt=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Qf(e,n,ft,tt,o,ot);return}}for(var Z in a)tt=a[Z],a.hasOwnProperty(Z)&&tt!=null&&!o.hasOwnProperty(Z)&&Ge(e,n,Z,null,o,tt);for(mt in o)tt=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ge(e,n,mt,tt,o,ot)}function v0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,b=c.duration;if(f&&b&&v0(v)){for(v=0,b=c.responseEnd,o+=1;o<a.length;o++){var F=a[o],J=F.startTime;if(J>b)break;var ft=F.transferSize,mt=F.initiatorType;ft&&v0(mt)&&(F=F.responseEnd,v+=ft*(F<b?1:(b-J)/(F-J)))}if(--o,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function cu(e){return e.nodeType===9?e:e.ownerDocument}function x0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function SS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var y0=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(ES)}:y0;function ES(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function E0(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,No(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[ar]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&No(e.ownerDocument.body);a=c}while(a);gs(n)}function T0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function TS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function bS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function b0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function AS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function A0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function R0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function C0(e,n,a){switch(n=cu(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function No(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qs(e)}var di=new Map,w0=new Set;function fu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=H.d;H.d={f:RS,r:CS,D:wS,C:DS,L:US,m:LS,X:OS,S:NS,M:PS};function RS(){var e=la.f(),n=nu();return e||n}function CS(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?qm(n):la.r(e)}var ds=typeof document>"u"?null:document;function D0(e,n,a){var o=ds;if(o&&typeof n=="string"&&n){var c=ae(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),w0.has(c)||(w0.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Rn(n,"link",e),A(n),o.head.appendChild(n)))}}function wS(e){la.D(e),D0("dns-prefetch",e,null)}function DS(e,n){la.C(e,n),D0("preconnect",e,n)}function US(e,n,a){la.L(e,n,a);var o=ds;if(o&&e&&n){var c='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ae(a.imageSizes)+'"]')):c+='[href="'+ae(e)+'"]';var f=c;switch(n){case"style":f=ps(e);break;case"script":f=ms(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Oo(f))||n==="script"&&o.querySelector(Po(f))||(n=o.createElement("link"),Rn(n,"link",e),A(n),o.head.appendChild(n)))}}function LS(e,n){la.m(e,n);var a=ds;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}o=a.createElement("link"),Rn(o,"link",e),A(o),a.head.appendChild(o)}}}function NS(e,n,a){la.S(e,n,a);var o=ds;if(o&&e){var c=Aa(o).hoistableStyles,f=ps(e);n=n||"default";var v=c.get(f);if(!v){var b={loading:0,preload:null};if(v=o.querySelector(Oo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&sh(e,a);var F=v=o.createElement("link");A(F),Rn(F,"link",e),F._p=new Promise(function(J,ft){F.onload=J,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,hu(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(f,v)}}}function OS(e,n){la.X(e,n);var a=ds;if(a&&e){var o=Aa(a).hoistableScripts,c=ms(e),f=o.get(c);f||(f=a.querySelector(Po(c)),f||(e=g({src:e,async:!0},n),(n=di.get(c))&&oh(e,n),f=a.createElement("script"),A(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function PS(e,n){la.M(e,n);var a=ds;if(a&&e){var o=Aa(a).hoistableScripts,c=ms(e),f=o.get(c);f||(f=a.querySelector(Po(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(c))&&oh(e,n),f=a.createElement("script"),A(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function U0(e,n,a,o){var c=(c=et.current)?fu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=Aa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var f=Aa(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(Oo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||zS(c,e,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=Aa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+ae(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function L0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function zS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),A(n),e.head.appendChild(n))}function ms(e){return'[src="'+ae(e)+'"]'}function Po(e){return"script[async]"+e}function N0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(o)return n.instance=o,A(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),A(o),Rn(o,"style",c),hu(o,a.precedence,e),n.instance=o;case"stylesheet":c=ps(a.href);var f=e.querySelector(Oo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;o=L0(a),(c=di.get(c))&&sh(o,c),f=(e.ownerDocument||e).createElement("link"),A(f);var v=f;return v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),Rn(f,"link",o),n.state.loading|=4,hu(f,a.precedence,e),n.instance=f;case"script":return f=ms(a.src),(c=e.querySelector(Po(f)))?(n.instance=c,A(c),c):(o=a,(c=di.get(f))&&(o=g({},a),oh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),Rn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hu(o,a.precedence,e));return n.instance}function hu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var b=o[v];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var du=null;function O0(e,n,a){if(du===null){var o=new Map,c=du=new Map;c.set(a,o)}else c=du,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ar]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=o.get(v);b?b.push(f):o.set(v,[f])}}return o}function P0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function BS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function FS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ps(o.href),f=n.querySelector(Oo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,o=L0(o),(c=di.get(c))&&sh(o,c),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),Rn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function IS(e,n){return e.stylesheets&&e.count===0&&gu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*xS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function gu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,n.forEach(HS,e),mu=null,pu.call(e))}function HS(e,n){if(!(n.state.loading&4)){var a=mu.get(e);if(a)var o=a.get(null);else{a=new Map,mu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=pu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:L,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function GS(e,n,a,o,c,f,v,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function B0(e,n,a,o,c,f,v,b,F,J,ft,mt){return e=new GS(e,n,a,v,F,J,ft,mt,b),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=Hc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},kc(f),e}function F0(e){return e?(e=qr,e):qr}function I0(e,n,a,o,c,f){c=F0(c),o.context===null?o.context=c:o.pendingContext=c,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Oa(e,o,n),a!==null&&(Xn(a,e,n),po(a,e,n))}function H0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){H0(e,n),(e=e.alternate)&&H0(e,n)}function G0(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&Xn(n,e,67108864),uh(e,67108864)}}function V0(e){if(e.tag===13||e.tag===31){var n=Qn();n=Zs(n);var a=ur(e,n);a!==null&&Xn(a,e,n),uh(e,n)}}var _u=!0;function VS(e,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=2,ch(e,n,a,o)}finally{H.p=f,O.T=c}}function XS(e,n,a,o){var c=O.T;O.T=null;var f=H.p;try{H.p=8,ch(e,n,a,o)}finally{H.p=f,O.T=c}}function ch(e,n,a,o){if(_u){var c=fh(o);if(c===null)jf(e,n,o,vu,a),k0(e,o);else if(WS(c,e,n,a,o))o.stopPropagation();else if(k0(e,o),n&4&&-1<kS.indexOf(e)){for(;c!==null;){var f=ba(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=St(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var F=1<<31-Ot(v);b.entanglements[1]|=F,v&=~F}Pi(f),(Ue&6)===0&&(tu=E()+500,Do(0))}}break;case 31:case 13:b=ur(f,2),b!==null&&Xn(b,f,2),nu(),uh(f,2)}if(f=fh(o),f===null&&jf(e,n,o,vu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function fh(e){return e=hc(e),hh(e)}var vu=null;function hh(e){if(vu=null,e=Ta(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vu=e,null}function X0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var dh=!1,Wa=null,qa=null,Ya=null,Bo=new Map,Fo=new Map,Za=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k0(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Io(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ba(n),n!==null&&G0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function WS(e,n,a,o,c){switch(n){case"focusin":return Wa=Io(Wa,e,n,a,o,c),!0;case"dragenter":return qa=Io(qa,e,n,a,o,c),!0;case"mouseover":return Ya=Io(Ya,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Bo.set(f,Io(Bo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Fo.set(f,Io(Fo.get(f)||null,e,n,a,o,c)),!0}return!1}function W0(e){var n=Ta(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){V0(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){V0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);fc=o,a.target.dispatchEvent(o),fc=null}else return n=ba(a),n!==null&&G0(n),e.blockedOn=a,!1;n.shift()}return!0}function q0(e,n,a){xu(e)&&a.delete(n)}function qS(){dh=!1,Wa!==null&&xu(Wa)&&(Wa=null),qa!==null&&xu(qa)&&(qa=null),Ya!==null&&xu(Ya)&&(Ya=null),Bo.forEach(q0),Fo.forEach(q0)}function Su(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qS)))}var yu=null;function Y0(e){yu!==e&&(yu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,ff(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function gs(e){function n(F){return Su(F,e)}Wa!==null&&Su(Wa,e),qa!==null&&Su(qa,e),Ya!==null&&Su(Ya,e),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)W0(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[vn]||null;if(typeof f=="function")v||Y0(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[vn]||null)b=v.formAction;else if(hh(c)!==null)continue}else b=v.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Y0(a)}}}function Z0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ph(e){this._internalRoot=e}Mu.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();I0(a,o,e,n,null,null)},Mu.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;I0(e.current,2,null,e,null,null),nu(),n[Si]=null}};function Mu(e){this._internalRoot=e}Mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ks();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&W0(e)}};var K0=t.version;if(K0!=="19.2.4")throw Error(r(527,K0,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var YS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Mt=Eu.inject(YS),Et=Eu}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=ng,f=ig,v=ag;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=B0(e,1,!1,null,null,a,o,null,c,f,v,Z0),e[Si]=n.current,Kf(e),new ph(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=ng,v=ig,b=ag,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=B0(e,1,!0,n,a??null,o,c,F,f,v,b,Z0),n.context=F0(null),a=n.current,o=Qn(),o=Zs(o),c=Na(o),c.callback=null,Oa(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Pi(n),e[Si]=n.current,Kf(e),new Mu(n)},Go.version="19.2.4",Go}var r_;function ay(){if(r_)return _h.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),_h.exports=iy(),_h.exports}var ry=ay();const sy=sv(ry);const tp="182",oy=0,s_=1,ly=2,ju=1,uy=2,Qo=3,Vi=0,kn=1,pa=2,_a=0,zs=1,Nr=2,o_=3,l_=4,cy=5,wr=100,fy=101,hy=102,dy=103,py=104,my=200,gy=201,_y=202,vy=203,id=204,ad=205,xy=206,Sy=207,yy=208,My=209,Ey=210,Ty=211,by=212,Ay=213,Ry=214,rd=0,sd=1,od=2,Fs=3,ld=4,ud=5,cd=6,fd=7,ov=0,Cy=1,wy=2,Hi=0,lv=1,uv=2,cv=3,fv=4,hv=5,dv=6,pv=7,mv=300,Or=301,Is=302,hd=303,dd=304,oc=306,pd=1e3,ma=1001,md=1002,Cn=1003,Dy=1004,Tu=1005,_n=1006,yh=1007,Ur=1008,gi=1009,gv=1010,_v=1011,il=1012,ep=1013,Xi=1014,Fi=1015,Sa=1016,np=1017,ip=1018,al=1020,vv=35902,xv=35899,Sv=1021,yv=1022,Di=1023,ya=1026,Lr=1027,Mv=1028,ap=1029,Hs=1030,rp=1031,sp=1033,Qu=33776,Ju=33777,$u=33778,tc=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,Td=37489,bd=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,zd=37817,Bd=37818,Fd=37819,Id=37820,Hd=37821,Gd=36492,Vd=36494,Xd=36495,kd=36283,Wd=36284,qd=36285,Yd=36286,Uy=3200,Ly=0,Ny=1,nr="",ti="srgb",Gs="srgb-linear",nc="linear",Fe="srgb",_s=7680,u_=519,Oy=512,Py=513,zy=514,op=515,By=516,Fy=517,lp=518,Iy=519,Zd=35044,c_="300 es",Ii=2e3,ic=2001;function Ev(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hy(){const s=rl("canvas");return s.style.display="block",s}const f_={};function ac(...s){const t="THREE."+s.shift();console.log(t,...s)}function ie(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Me(...s){const t="THREE."+s.shift();console.error(t,...s)}function sl(...s){const t=s.join(" ");t in f_||(f_[t]=!0,ie(...s))}function Gy(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let h_=1234567;const $o=Math.PI/180,ol=180/Math.PI;function va(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function he(s,t,i){return Math.max(t,Math.min(i,s))}function up(s,t){return(s%t+t)%t}function Vy(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function Xy(s,t,i){return s!==t?(i-s)/(t-s):0}function tl(s,t,i){return(1-i)*s+i*t}function ky(s,t,i,r){return tl(s,t,1-Math.exp(-i*r))}function Wy(s,t=1){return t-Math.abs(up(s,t*2)-t)}function qy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function Yy(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function Zy(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ky(s,t){return s+Math.random()*(t-s)}function jy(s){return s*(.5-Math.random())}function Qy(s){s!==void 0&&(h_=s);let t=h_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jy(s){return s*$o}function $y(s){return s*ol}function tM(s){return(s&s-1)===0&&s!==0}function eM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function iM(s,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+r)/2),_=h((t+r)/2),g=u((t-r)/2),x=h((t-r)/2),y=u((r-t)/2),T=h((r-t)/2);switch(l){case"XYX":s.set(d*_,m*g,m*x,d*p);break;case"YZY":s.set(m*x,d*_,m*g,d*p);break;case"ZXZ":s.set(m*g,m*x,d*_,d*p);break;case"XZX":s.set(d*_,m*T,m*y,d*p);break;case"YXY":s.set(m*y,d*_,m*T,d*p);break;case"ZYZ":s.set(m*T,m*y,d*_,d*p);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const aM={DEG2RAD:$o,RAD2DEG:ol,generateUUID:va,clamp:he,euclideanModulo:up,mapLinear:Vy,inverseLerp:Xy,lerp:tl,damp:ky,pingpong:Wy,smoothstep:qy,smootherstep:Yy,randInt:Zy,randFloat:Ky,randFloatSpread:jy,seededRandom:Qy,degToRad:Jy,radToDeg:$y,isPowerOfTwo:tM,ceilPowerOfTwo:eM,floorPowerOfTwo:nM,setQuaternionFromProperEuler:iM,normalize:Ie,denormalize:wi};class Qt{constructor(t=0,i=0){Qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=u[h+0],y=u[h+1],T=u[h+2],R=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=x,t[i+1]=y,t[i+2]=T,t[i+3]=R;return}if(g!==R||m!==x||p!==y||_!==T){let M=m*x+p*y+_*T+g*R;M<0&&(x=-x,y=-y,T=-T,R=-R,M=-M);let S=1-d;if(M<.9995){const z=Math.acos(M),L=Math.sin(z);S=Math.sin(S*z)/L,d=Math.sin(d*z)/L,m=m*S+x*d,p=p*S+y*d,_=_*S+T*d,g=g*S+R*d}else{m=m*S+x*d,p=p*S+y*d,_=_*S+T*d,g=g*S+R*d;const z=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=z,p*=z,_*=z,g*=z}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[h],x=u[h+1],y=u[h+2],T=u[h+3];return t[i]=d*T+_*g+m*y-p*x,t[i+1]=m*T+_*x+p*g-d*y,t[i+2]=p*T+_*y+d*x-m*g,t[i+3]=_*T-d*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(u/2),x=m(r/2),y=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=x*_*g+p*y*T,this._y=p*y*g-x*_*T,this._z=p*_*T+x*y*g,this._w=p*_*g-x*y*T;break;case"YXZ":this._x=x*_*g+p*y*T,this._y=p*y*g-x*_*T,this._z=p*_*T-x*y*g,this._w=p*_*g+x*y*T;break;case"ZXY":this._x=x*_*g-p*y*T,this._y=p*y*g+x*_*T,this._z=p*_*T+x*y*g,this._w=p*_*g-x*y*T;break;case"ZYX":this._x=x*_*g-p*y*T,this._y=p*y*g+x*_*T,this._z=p*_*T-x*y*g,this._w=p*_*g+x*y*T;break;case"YZX":this._x=x*_*g+p*y*T,this._y=p*y*g+x*_*T,this._z=p*_*T-x*y*g,this._w=p*_*g-x*y*T;break;case"XZY":this._x=x*_*g-p*y*T,this._y=p*y*g-x*_*T,this._z=p*_*T+x*y*g,this._w=p*_*g+x*y*T;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,r=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(d_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(d_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-u*l),g=2*(u*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new q,d_=new ul;class ce{constructor(t,i,r,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],T=r[8],R=l[0],M=l[3],S=l[6],z=l[1],L=l[4],N=l[7],B=l[2],I=l[5],P=l[8];return u[0]=h*R+d*z+m*B,u[3]=h*M+d*L+m*I,u[6]=h*S+d*N+m*P,u[1]=p*R+_*z+g*B,u[4]=p*M+_*L+g*I,u[7]=p*S+_*N+g*P,u[2]=x*R+y*z+T*B,u[5]=x*M+y*L+T*I,u[8]=x*S+y*N+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*u,y=p*u-h*m,T=i*g+r*x+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(d*r-l*h)*R,t[3]=x*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Eh.makeScale(t,i)),this}rotate(t){return this.premultiply(Eh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Eh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new ce,p_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const s={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===nr?nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Gs]:{primaries:t,whitePoint:r,transfer:nc,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Te=rM();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class sM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=rl("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=rl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=xa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oM=0;class cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Th(l[h].image)):u.push(Th(l[h]))}else u=Th(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let lM=0;const bh=new q;class wn extends ks{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=ma,l=ma,u=_n,h=Ur,d=Di,m=gi,p=wn.DEFAULT_ANISOTROPY,_=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=va(),this.name="",this.source=new cp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case ma:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case ma:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=mv;wn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],T=m[9],R=m[2],M=m[6],S=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-R)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+R)<.1&&Math.abs(T+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,B=(S+1)/2,I=(_+x)/4,P=(g+R)/4,j=(T+M)/4;return L>N&&L>B?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=I/r,u=P/r):N>B?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=I/l,u=j/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=P/u,l=j/u),this.set(r,l,u,i),this}let z=Math.sqrt((M-T)*(M-T)+(g-R)*(g-R)+(x-_)*(x-_));return Math.abs(z)<.001&&(z=1),this.x=(M-T)/z,this.y=(g-R)/z,this.z=(x-_)/z,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this.w=he(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this.w=he(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new wn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends uM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tv extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,bi):bi.fromBufferAttribute(u,h),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bu.copy(r.boundingBox)),bu.applyMatrix4(t.matrixWorld),this.union(bu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Au.subVectors(this.max,Vo),xs.subVectors(t.a,Vo),Ss.subVectors(t.b,Vo),ys.subVectors(t.c,Vo),ja.subVectors(Ss,xs),Qa.subVectors(ys,Ss),Mr.subVectors(xs,ys);let i=[0,-ja.z,ja.y,0,-Qa.z,Qa.y,0,-Mr.z,Mr.y,ja.z,0,-ja.x,Qa.z,0,-Qa.x,Mr.z,0,-Mr.x,-ja.y,ja.x,0,-Qa.y,Qa.x,0,-Mr.y,Mr.x,0];return!Ah(i,xs,Ss,ys,Au)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,xs,Ss,ys,Au))?!1:(Ru.crossVectors(ja,Qa),i=[Ru.x,Ru.y,Ru.z],Ah(i,xs,Ss,ys,Au))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new q,new q,new q,new q,new q,new q,new q,new q],bi=new q,bu=new cl,xs=new q,Ss=new q,ys=new q,ja=new q,Qa=new q,Mr=new q,Vo=new q,Au=new q,Ru=new q,Er=new q;function Ah(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){Er.fromArray(s,u);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=t.dot(Er),p=i.dot(Er),_=r.dot(Er);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const fM=new cl,Xo=new q,Rh=new q;class lc{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Xo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Rh)),this.expandByPoint(Xo.copy(t.center).sub(Rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new q,Ch=new q,Cu=new q,Ja=new q,wh=new q,wu=new q,Dh=new q;class fp{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ch.copy(t).add(i).multiplyScalar(.5),Cu.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Ch);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Cu),d=Ja.dot(this.direction),m=-Ja.dot(Cu),p=Ja.lengthSq(),_=Math.abs(1-h*h);let g,x,y,T;if(_>0)if(g=h*m-d,x=h*d-m,T=u*_,g>=0)if(x>=-T)if(x<=T){const R=1/_;g*=R,x*=R,y=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=u,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-h*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(g=Math.max(0,-(h*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p);else x=h>0?-u:u,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ch).addScaledVector(Cu,x),y}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,u){wh.subVectors(i,t),wu.subVectors(r,t),Dh.crossVectors(wh,wu);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ja.subVectors(this.origin,t);const m=d*this.direction.dot(wu.crossVectors(Ja,wu));if(m<0)return null;const p=d*this.direction.dot(wh.cross(Ja));if(p<0||m+p>h)return null;const _=-d*Ja.dot(Dh);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,h,d,m,p,_,g,x,y,T,R,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,_,g,x,y,T,R,M)}set(t,i,r,l,u,h,d,m,p,_,g,x,y,T,R,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=x,S[3]=y,S[7]=T,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),u=1/Ms.setFromMatrixColumn(t,1).length(),h=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=h*_,y=h*g,T=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+T*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=T+y*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,T=p*_,R=p*g;i[0]=x+R*d,i[4]=T*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-T,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,T=p*_,R=p*g;i[0]=x-R*d,i[4]=-h*g,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,y=h*g,T=d*_,R=d*g;i[0]=m*_,i[4]=T*p-y,i[8]=x*p+R,i[1]=m*g,i[5]=R*p+x,i[9]=y*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=R-x*g,i[8]=T*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+T,i[10]=x-R*g}else if(t.order==="XZY"){const x=h*m,y=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+R,i[5]=h*_,i[9]=y*g-T,i[2]=T*g-y,i[6]=d*_,i[10]=R*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hM,t,dM)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),$a.crossVectors(r,Jn),$a.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),$a.crossVectors(r,Jn)),$a.normalize(),Du.crossVectors(Jn,$a),l[0]=$a.x,l[4]=Du.x,l[8]=Jn.x,l[1]=$a.y,l[5]=Du.y,l[9]=Jn.y,l[2]=$a.z,l[6]=Du.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],T=r[2],R=r[6],M=r[10],S=r[14],z=r[3],L=r[7],N=r[11],B=r[15],I=l[0],P=l[4],j=l[8],C=l[12],w=l[1],X=l[5],rt=l[9],at=l[13],dt=l[2],ct=l[6],O=l[10],H=l[14],it=l[3],yt=l[7],xt=l[11],U=l[15];return u[0]=h*I+d*w+m*dt+p*it,u[4]=h*P+d*X+m*ct+p*yt,u[8]=h*j+d*rt+m*O+p*xt,u[12]=h*C+d*at+m*H+p*U,u[1]=_*I+g*w+x*dt+y*it,u[5]=_*P+g*X+x*ct+y*yt,u[9]=_*j+g*rt+x*O+y*xt,u[13]=_*C+g*at+x*H+y*U,u[2]=T*I+R*w+M*dt+S*it,u[6]=T*P+R*X+M*ct+S*yt,u[10]=T*j+R*rt+M*O+S*xt,u[14]=T*C+R*at+M*H+S*U,u[3]=z*I+L*w+N*dt+B*it,u[7]=z*P+L*X+N*ct+B*yt,u[11]=z*j+L*rt+N*O+B*xt,u[15]=z*C+L*at+N*H+B*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],T=t[3],R=t[7],M=t[11],S=t[15],z=m*y-p*x,L=d*y-p*g,N=d*x-m*g,B=h*y-p*_,I=h*x-m*_,P=h*g-d*_;return i*(R*z-M*L+S*N)-r*(T*z-M*B+S*I)+l*(T*L-R*B+S*P)-u*(T*N-R*I+M*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],T=t[12],R=t[13],M=t[14],S=t[15],z=g*M*p-R*x*p+R*m*y-d*M*y-g*m*S+d*x*S,L=T*x*p-_*M*p-T*m*y+h*M*y+_*m*S-h*x*S,N=_*R*p-T*g*p+T*d*y-h*R*y-_*d*S+h*g*S,B=T*g*m-_*R*m-T*d*x+h*R*x+_*d*M-h*g*M,I=i*z+r*L+l*N+u*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=z*P,t[1]=(R*x*u-g*M*u-R*l*y+r*M*y+g*l*S-r*x*S)*P,t[2]=(d*M*u-R*m*u+R*l*p-r*M*p-d*l*S+r*m*S)*P,t[3]=(g*m*u-d*x*u-g*l*p+r*x*p+d*l*y-r*m*y)*P,t[4]=L*P,t[5]=(_*M*u-T*x*u+T*l*y-i*M*y-_*l*S+i*x*S)*P,t[6]=(T*m*u-h*M*u-T*l*p+i*M*p+h*l*S-i*m*S)*P,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*y+i*m*y)*P,t[8]=N*P,t[9]=(T*g*u-_*R*u-T*r*y+i*R*y+_*r*S-i*g*S)*P,t[10]=(h*R*u-T*d*u+T*r*p-i*R*p-h*r*S+i*d*S)*P,t[11]=(_*d*u-h*g*u-_*r*p+i*g*p+h*r*y-i*d*y)*P,t[12]=B*P,t[13]=(_*R*l-T*g*l+T*r*x-i*R*x-_*r*M+i*g*M)*P,t[14]=(T*d*l-h*R*l-T*r*m+i*R*m+h*r*M-i*d*M)*P,t[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*x+i*d*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,g=d+d,x=u*p,y=u*_,T=u*g,R=h*_,M=h*g,S=d*g,z=m*p,L=m*_,N=m*g,B=r.x,I=r.y,P=r.z;return l[0]=(1-(R+S))*B,l[1]=(y+N)*B,l[2]=(T-L)*B,l[3]=0,l[4]=(y-N)*I,l[5]=(1-(x+S))*I,l[6]=(M+z)*I,l[7]=0,l[8]=(T+L)*P,l[9]=(M-z)*P,l[10]=(1-(x+R))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=Ms.set(l[0],l[1],l[2]).length();const h=Ms.set(l[4],l[5],l[6]).length(),d=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ai.copy(this);const p=1/u,_=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Ii,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let T,R;if(m)T=u/(h-u),R=h*u/(h-u);else if(d===Ii)T=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===ic)T=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Ii,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let T,R;if(m)T=1/(h-u),R=h/(h-u);else if(d===Ii)T=-2/(h-u),R=-(h+u)/(h-u);else if(d===ic)T=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new q,Ai=new je,hM=new q(0,0,0),dM=new q(1,1,1),$a=new q,Du=new q,Jn=new q,g_=new je,__=new ul;class Ma{constructor(t=0,i=0,r=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(he(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-he(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(he(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return g_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(g_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return __.setFromEuler(this),this.setFromQuaternion(__,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pM=0;const v_=new q,Es=new ul,fa=new je,Uu=new q,ko=new q,mM=new q,gM=new ul,x_=new q(1,0,0),S_=new q(0,1,0),y_=new q(0,0,1),M_={type:"added"},_M={type:"removed"},Ts={type:"childadded",child:null},Uh={type:"childremoved",child:null};class Bn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new q,i=new Ma,r=new ul,l=new q(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ce}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(x_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(y_,t)}translateOnAxis(t,i){return v_.copy(t).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(x_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(y_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Uu.copy(t):Uu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(ko,Uu,this.up):fa.lookAt(Uu,ko,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(fa),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(M_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_M),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(M_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,mM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,gM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),y=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new q(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new q,ha=new q,Lh=new q,da=new q,bs=new q,As=new q,E_=new q,Nh=new q,Oh=new q,Ph=new q,zh=new an,Bh=new an,Fh=new an;class _i{constructor(t=new q,i=new q,r=new q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ri.subVectors(t,i),l.cross(Ri);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ri.subVectors(l,i),ha.subVectors(r,i),Lh.subVectors(t,i);const h=Ri.dot(Ri),d=Ri.dot(ha),m=Ri.dot(Lh),p=ha.dot(ha),_=ha.dot(Lh),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,y=(p*m-d*_)*x,T=(h*_-d*m)*x;return u.set(1-y-T,T,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(h,da.y),m.addScaledVector(d,da.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return zh.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),zh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,r),Fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zh,u.x),h.addScaledVector(Bh,u.y),h.addScaledVector(Fh,u.z),h}static isFrontFacing(t,i,r,l){return Ri.subVectors(r,i),ha.subVectors(t,i),Ri.cross(ha).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;bs.subVectors(l,r),As.subVectors(u,r),Nh.subVectors(t,r);const m=bs.dot(Nh),p=As.dot(Nh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(t,l);const _=bs.dot(Oh),g=As.dot(Oh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(bs,h);Ph.subVectors(t,u);const y=bs.dot(Ph),T=As.dot(Ph);if(T>=0&&y<=T)return i.copy(u);const R=y*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(As,d);const M=_*T-y*g;if(M<=0&&g-_>=0&&y-T>=0)return E_.subVectors(u,l),d=(g-_)/(g-_+(y-T)),i.copy(l).addScaledVector(E_,d);const S=1/(M+R+x);return h=R*S,d=x*S,i.copy(r).addScaledVector(bs,h).addScaledVector(As,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Ih(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Re{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=up(t,1),i=he(i,0,1),r=he(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Ih(h,u,t+1/3),this.g=Ih(h,u,t),this.b=Ih(h,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=ti){function r(u){u!==void 0&&parseFloat(u)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ti){const r=bv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Te.workingToColorSpace(Nn.copy(this),t),Math.round(he(Nn.r*255,0,255))*65536+Math.round(he(Nn.g*255,0,255))*256+Math.round(he(Nn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ti){Te.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==ti?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+i,tr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(tr),t.getHSL(Lu);const r=tl(tr.h,Lu.h,i),l=tl(tr.s,Lu.s,i),u=tl(tr.l,Lu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Re;Re.NAMES=bv;let vM=0;class Ws extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=va(),this.name="",this.type="Material",this.blending=zs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Vi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==id&&(r.blendSrc=this.blendSrc),this.blendDst!==ad&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vs extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new q,Nu=new Qt;let xM=0;class ei{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Zd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nu.fromBufferAttribute(this,i),Nu.applyMatrix3(t),this.setXY(i,Nu.x,Nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),u=Ie(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zd&&(t.usage=this.usage),t}}class Av extends ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Rv extends ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class vi extends ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}let SM=0;const pi=new je,Hh=new Bn,Rs=new q,$n=new cl,Wo=new cl,gn=new q;class ii extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ev(t)?Rv:Av)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,r){return pi.makeTranslation(t,i,r),this.applyMatrix4(pi),this}scale(t,i,r){return pi.makeScale(t,i,r),this.applyMatrix4(pi),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,Wo.min),$n.expandByPoint(gn),gn.addVectors($n.max,Wo.max),$n.expandByPoint(gn)):($n.expandByPoint(Wo.min),$n.expandByPoint(Wo.max))}$n.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)gn.fromBufferAttribute(d,p),m&&(Rs.fromBufferAttribute(t,p),gn.add(Rs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new q,m[j]=new q;const p=new q,_=new q,g=new q,x=new Qt,y=new Qt,T=new Qt,R=new q,M=new q;function S(j,C,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,C),T.fromBufferAttribute(u,w),_.sub(p),g.sub(p),y.sub(x),T.sub(x);const X=1/(y.x*T.y-T.x*y.y);isFinite(X)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(X),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(X),d[j].add(R),d[C].add(R),d[w].add(R),m[j].add(M),m[C].add(M),m[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let j=0,C=z.length;j<C;++j){const w=z[j],X=w.start,rt=w.count;for(let at=X,dt=X+rt;at<dt;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new q,N=new q,B=new q,I=new q;function P(j){B.fromBufferAttribute(l,j),I.copy(B);const C=d[j];L.copy(C),L.sub(B.multiplyScalar(B.dot(C))).normalize(),N.crossVectors(I,C);const X=N.dot(m[j])<0?-1:1;h.setXYZW(j,L.x,L.y,L.z,X)}for(let j=0,C=z.length;j<C;++j){const w=z[j],X=w.start,rt=w.count;for(let at=X,dt=X+rt;at<dt;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new q,u=new q,h=new q,d=new q,m=new q,p=new q,_=new q,g=new q;if(t)for(let x=0,y=t.count;x<y;x+=3){const T=t.getX(x+0),R=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let y=0,T=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*_;for(let S=0;S<_;S++)x[T++]=p[y++]}return new ei(x,_,g)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new je,Tr=new fp,Ou=new lc,b_=new q,Pu=new q,zu=new q,Bu=new q,Gh=new q,Fu=new q,A_=new q,Iu=new q;class ni extends Bn{constructor(t=new ii,i=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Fu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(Gh.fromBufferAttribute(g,t),h?Fu.addScaledVector(Gh,_):Fu.addScaledVector(Gh.sub(i),_))}i.add(Fu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(u),Tr.copy(t.ray).recast(t.near),!(Ou.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ou,b_)===null||Tr.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(T_.copy(u).invert(),Tr.copy(t.ray).applyMatrix4(T_),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const M=x[T],S=h[M.materialIndex],z=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let N=z,B=L;N<B;N+=3){const I=d.getX(N),P=d.getX(N+1),j=d.getX(N+2);l=Hu(this,S,t,r,p,_,g,I,P,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=T,S=R;M<S;M+=3){const z=d.getX(M),L=d.getX(M+1),N=d.getX(M+2);l=Hu(this,h,t,r,p,_,g,z,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=x.length;T<R;T++){const M=x[T],S=h[M.materialIndex],z=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=z,B=L;N<B;N+=3){const I=N,P=N+1,j=N+2;l=Hu(this,S,t,r,p,_,g,I,P,j),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=T,S=R;M<S;M+=3){const z=M,L=M+1,N=M+2;l=Hu(this,h,t,r,p,_,g,z,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yM(s,t,i,r,l,u,h,d){let m;if(t.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Vi,d),m===null)return null;Iu.copy(d),Iu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Iu);return p<i.near||p>i.far?null:{distance:p,point:Iu.clone(),object:s}}function Hu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Pu),s.getVertexPosition(m,zu),s.getVertexPosition(p,Bu);const _=yM(s,t,i,r,Pu,zu,Bu,A_);if(_){const g=new q;_i.getBarycoord(A_,Pu,zu,Bu,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new Qt)),u&&(_.uv1=_i.getInterpolatedAttribute(u,d,m,p,g,new Qt)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new q,materialIndex:0};_i.getNormal(Pu,zu,Bu,x.normal),_.face=x,_.barycoord=g}return _}class fl extends ii{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,y=0;T("z","y","x",-1,-1,r,i,t,h,u,0),T("z","y","x",1,-1,r,i,-t,h,u,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function T(R,M,S,z,L,N,B,I,P,j,C){const w=N/P,X=B/j,rt=N/2,at=B/2,dt=I/2,ct=P+1,O=j+1;let H=0,it=0;const yt=new q;for(let xt=0;xt<O;xt++){const U=xt*X-at;for(let nt=0;nt<ct;nt++){const gt=nt*w-rt;yt[R]=gt*z,yt[M]=U*L,yt[S]=dt,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[M]=0,yt[S]=I>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(nt/P),g.push(1-xt/j),H+=1}}for(let xt=0;xt<j;xt++)for(let U=0;U<P;U++){const nt=x+U+ct*xt,gt=x+U+ct*(xt+1),bt=x+(U+1)+ct*(xt+1),Ft=x+(U+1)+ct*xt;m.push(nt,gt,Ft),m.push(gt,bt,Ft),it+=6}d.addGroup(y,it,C),y+=it,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=Xs(s[i]);for(const l in r)t[l]=r[l]}return t}function MM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Cv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const EM={clone:Xs,merge:zn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=MM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new q,R_=new Qt,C_=new Qt;class mi extends wv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ol*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,i){return this.getViewBounds(t,R_,C_),i.subVectors(C_,R_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($o*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class AM extends Bn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Cs,ws,t,i);l.layers=this.layers,this.add(l);const u=new mi(Cs,ws,t,i);u.layers=this.layers,this.add(u);const h=new mi(Cs,ws,t,i);h.layers=this.layers,this.add(h);const d=new mi(Cs,ws,t,i);d.layers=this.layers,this.add(d);const m=new mi(Cs,ws,t,i);m.layers=this.layers,this.add(m);const p=new mi(Cs,ws,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Dv extends wn{constructor(t=[],i=Or,r,l,u,h,d,m,p,_){super(t,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:_a});u.uniforms.tEquirect.value=i;const h=new ni(l,u),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=_n),new AM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class ga extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),S=this._getHandJoint(p,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&x>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new ga;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class CM extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Zd,this.updateRanges=[],this.version=0,this.uuid=va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new q;class rc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),u=Ie(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){ac("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new ei(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ac("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dp extends Ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const qo=new q,Us=new q,Ls=new q,Ns=new Qt,Yo=new Qt,Lv=new je,Gu=new q,Zo=new q,Vu=new q,w_=new Qt,Xh=new Qt,D_=new Qt;class Nv extends Bn{constructor(t=new dp){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new ii;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new wM(i,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new rc(r,3,0,!1)),Ds.setAttribute("uv",new rc(r,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Qt(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Me('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Lv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ls.z);const r=this.material.rotation;let l,u;r!==0&&(u=Math.cos(r),l=Math.sin(r));const h=this.center;Xu(Gu.set(-.5,-.5,0),Ls,h,Us,l,u),Xu(Zo.set(.5,-.5,0),Ls,h,Us,l,u),Xu(Vu.set(.5,.5,0),Ls,h,Us,l,u),w_.set(0,0),Xh.set(1,0),D_.set(1,1);let d=t.ray.intersectTriangle(Gu,Zo,Vu,!1,qo);if(d===null&&(Xu(Zo.set(-.5,.5,0),Ls,h,Us,l,u),Xh.set(0,1),d=t.ray.intersectTriangle(Gu,Vu,Zo,!1,qo),d===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:_i.getInterpolation(qo,Gu,Zo,Vu,w_,Xh,D_,new Qt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xu(s,t,i,r,l,u){Ns.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Yo.x=u*Ns.x-l*Ns.y,Yo.y=l*Ns.x+u*Ns.y):Yo.copy(Ns),s.copy(t),s.x+=Yo.x,s.y+=Yo.y,s.applyMatrix4(Lv)}class DM extends wn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=Cn,_=Cn,g,x){super(null,h,d,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new q,UM=new q,LM=new ce;class Cr{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=kh.subVectors(r,i).cross(UM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(kh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||LM.getNormalMatrix(t),l=this.coplanarPoint(kh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new lc,NM=new Qt(.5,.5),ku=new q;class Ov{constructor(t=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr,h=new Cr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],y=u[7],T=u[8],R=u[9],M=u[10],S=u[11],z=u[12],L=u[13],N=u[14],B=u[15];if(l[0].setComponents(p-h,y-_,S-T,B-z).normalize(),l[1].setComponents(p+h,y+_,S+T,B+z).normalize(),l[2].setComponents(p+d,y+g,S+R,B+L).normalize(),l[3].setComponents(p-d,y-g,S-R,B-L).normalize(),r)l[4].setComponents(m,x,M,N).normalize(),l[5].setComponents(p-m,y-x,S-M,B-N).normalize();else if(l[4].setComponents(p-m,y-x,S-M,B-N).normalize(),i===Ii)l[5].setComponents(p+m,y+x,S+M,B+N).normalize();else if(i===ic)l[5].setComponents(m,x,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=NM.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ku.x=l.normal.x>0?t.max.x:t.min.x,ku.y=l.normal.y>0?t.max.y:t.min.y,ku.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(ku)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends Ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const U_=new je,Kd=new fp,Wu=new lc,qu=new q;class OM extends Bn{constructor(t=new ii,i=new Pv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wu.copy(r.boundingSphere),Wu.applyMatrix4(l),Wu.radius+=u,t.ray.intersectsSphere(Wu)===!1)return;U_.copy(l).invert(),Kd.copy(t.ray).applyMatrix4(U_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let T=x,R=y;T<R;T++){const M=p.getX(T);qu.fromBufferAttribute(g,M),L_(qu,M,m,l,t,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let T=x,R=y;T<R;T++)qu.fromBufferAttribute(g,T),L_(qu,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function L_(s,t,i,r,l,u,h){const d=Kd.distanceSqToPoint(s);if(d<i){const m=new q;Kd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class pp extends wn{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends wn{constructor(t,i,r=Xi,l,u,h,d=Cn,m=Cn,p,_=ya,g=1){if(_!==ya&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class PM extends ll{constructor(t,i=Xi,r=Or,l,u,h=Cn,d=Cn,m,p=ya){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zv extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ea{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let h;i?h=i:h=t*r[u-1];let d=0,m=u-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(u-1);const _=r[l],x=r[l+1]-_,y=(h-_)/x;return(l+y)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),m=i||(h.isVector2?new Qt:new q);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new q,l=[],u=[],h=[],d=new q,m=new je;for(let y=0;y<=t;y++){const T=y/t;l[y]=this.getTangentAt(T,new q)}u[0]=new q,h[0]=new q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),x<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let y=1;y<=t;y++){if(u[y]=u[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(he(l[y-1].dot(l[y]),-1,1));u[y].applyMatrix4(m.makeRotationAxis(d,T))}h[y].crossVectors(l[y],u[y])}if(i===!0){let y=Math.acos(he(u[0].dot(u[t]),-1,1));y/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(y=-y);for(let T=1;T<=t;T++)u[T].applyMatrix4(m.makeRotationAxis(l[T],y*T)),h[T].crossVectors(l[T],u[T])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mp extends Ea{constructor(t=0,i=0,r=1,l=1,u=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Qt){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*_-y*g+this.aX,p=x*g+y*_+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zM extends mp{constructor(t,i,r,l,u,h){super(t,i,r,r,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function gp(){let s=0,t=0,i=0,r=0;function l(u,h,d,m){s=u,t=d,i=-3*u+3*h-2*d-m,r=2*u-2*h+d+m}return{initCatmullRom:function(u,h,d,m,p){l(h,d,p*(d-u),p*(m-h))},initNonuniformCatmullRom:function(u,h,d,m,p,_,g){let x=(h-u)/p-(d-u)/(p+_)+(d-h)/_,y=(d-h)/_-(m-h)/(_+g)+(m-d)/g;x*=_,y*=_,l(h,d,x,y)},calc:function(u){const h=u*u,d=h*u;return s+t*u+i*h+r*d}}}const Yu=new q,Wh=new gp,qh=new gp,Yh=new gp;class Bv extends Ea{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new q){const r=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:m===0&&d===u-1&&(d=u-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%u]:(Yu.subVectors(l[0],l[1]).add(l[0]),p=Yu);const g=l[d%u],x=l[(d+1)%u];if(this.closed||d+2<u?_=l[(d+2)%u]:(Yu.subVectors(l[u-1],l[u-2]).add(l[u-1]),_=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(g),y),R=Math.pow(g.distanceToSquared(x),y),M=Math.pow(x.distanceToSquared(_),y);R<1e-4&&(R=1),T<1e-4&&(T=R),M<1e-4&&(M=R),Wh.initNonuniformCatmullRom(p.x,g.x,x.x,_.x,T,R,M),qh.initNonuniformCatmullRom(p.y,g.y,x.y,_.y,T,R,M),Yh.initNonuniformCatmullRom(p.z,g.z,x.z,_.z,T,R,M)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(p.x,g.x,x.x,_.x,this.tension),qh.initCatmullRom(p.y,g.y,x.y,_.y,this.tension),Yh.initCatmullRom(p.z,g.z,x.z,_.z,this.tension));return r.set(Wh.calc(m),qh.calc(m),Yh.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function N_(s,t,i,r,l){const u=(r-t)*.5,h=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*r+u+h)*m+(-3*i+3*r-2*u-h)*d+u*s+i}function BM(s,t){const i=1-s;return i*i*t}function FM(s,t){return 2*(1-s)*s*t}function IM(s,t){return s*s*t}function el(s,t,i,r){return BM(s,t)+FM(s,i)+IM(s,r)}function HM(s,t){const i=1-s;return i*i*i*t}function GM(s,t){const i=1-s;return 3*i*i*s*t}function VM(s,t){return 3*(1-s)*s*s*t}function XM(s,t){return s*s*s*t}function nl(s,t,i,r,l){return HM(s,t)+GM(s,i)+VM(s,r)+XM(s,l)}class kM extends Ea{constructor(t=new Qt,i=new Qt,r=new Qt,l=new Qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Qt){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(nl(t,l.x,u.x,h.x,d.x),nl(t,l.y,u.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WM extends Ea{constructor(t=new q,i=new q,r=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new q){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(nl(t,l.x,u.x,h.x,d.x),nl(t,l.y,u.y,h.y,d.y),nl(t,l.z,u.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qM extends Ea{constructor(t=new Qt,i=new Qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Qt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YM extends Ea{constructor(t=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new q){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ZM extends Ea{constructor(t=new Qt,i=new Qt,r=new Qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Qt){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(el(t,l.x,u.x,h.x),el(t,l.y,u.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fv extends Ea{constructor(t=new q,i=new q,r=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new q){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(el(t,l.x,u.x,h.x),el(t,l.y,u.y,h.y),el(t,l.z,u.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class KM extends Ea{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Qt){const r=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,m=l[h===0?h:h-1],p=l[h],_=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(N_(d,m.x,p.x,_.x,g.x),N_(d,m.y,p.y,_.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Qt().fromArray(l))}return this}}var jM=Object.freeze({__proto__:null,ArcCurve:zM,CatmullRomCurve3:Bv,CubicBezierCurve:kM,CubicBezierCurve3:WM,EllipseCurve:mp,LineCurve:qM,LineCurve3:YM,QuadraticBezierCurve:ZM,QuadraticBezierCurve3:Fv,SplineCurve:KM});class hl extends ii{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,y=[],T=[],R=[],M=[];for(let S=0;S<_;S++){const z=S*x-h;for(let L=0;L<p;L++){const N=L*g-u;T.push(N,-z,0),R.push(0,0,1),M.push(L/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const L=z+p*S,N=z+p*(S+1),B=z+1+p*(S+1),I=z+1+p*S;y.push(L,N,I),y.push(N,B,I)}this.setIndex(y),this.setAttribute("position",new vi(T,3)),this.setAttribute("normal",new vi(R,3)),this.setAttribute("uv",new vi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.width,t.height,t.widthSegments,t.heightSegments)}}class sc extends ii{constructor(t=new Fv(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,r=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new q,m=new q,p=new Qt;let _=new q;const g=[],x=[],y=[],T=[];R(),this.setIndex(T),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(x,3)),this.setAttribute("uv",new vi(y,2));function R(){for(let L=0;L<i;L++)M(L);M(u===!1?i:0),z(),S()}function M(L){_=t.getPointAt(L/i,_);const N=h.normals[L],B=h.binormals[L];for(let I=0;I<=l;I++){const P=I/l*Math.PI*2,j=Math.sin(P),C=-Math.cos(P);m.x=C*N.x+j*B.x,m.y=C*N.y+j*B.y,m.z=C*N.z+j*B.z,m.normalize(),x.push(m.x,m.y,m.z),d.x=_.x+r*m.x,d.y=_.y+r*m.y,d.z=_.z+r*m.z,g.push(d.x,d.y,d.z)}}function S(){for(let L=1;L<=i;L++)for(let N=1;N<=l;N++){const B=(l+1)*(L-1)+(N-1),I=(l+1)*L+(N-1),P=(l+1)*L+N,j=(l+1)*(L-1)+N;T.push(B,I,j),T.push(I,P,j)}}function z(){for(let L=0;L<=i;L++)for(let N=0;N<=l;N++)p.x=L/i,p.y=N/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sc(new jM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class QM extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JM extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class tE{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const y=p[g],T=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eE=new tE;class _p{constructor(t){this.manager=t!==void 0?t:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_p.DEFAULT_MATERIAL_NAME="__DEFAULT";const Os=new WeakMap;class nE extends _p{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Zh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let g=Os.get(h);g===void 0&&(g=[],Os.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=rl("img");function m(){_(),i&&i(this);const g=Os.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onLoad&&y.onLoad(this)}Os.delete(this),u.manager.itemEnd(t)}function p(g){_(),l&&l(g),Zh.remove(`image:${t}`);const x=Os.get(this)||[];for(let y=0;y<x.length;y++){const T=x[y];T.onError&&T.onError(g)}Os.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Zh.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class iE extends _p{constructor(t){super(t)}load(t,i,r,l){const u=new wn,h=new nE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Iv extends wv{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aE extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const O_=new je;class rE{constructor(t,i,r=0,l=1/0){this.ray=new fp(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Me("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return O_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(t,i=!0,r=[]){return jd(t,this,r,i),r.sort(P_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)jd(t[l],this,r,i);return r.sort(P_),r}}function P_(s,t){return s.distance-t.distance}function jd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let h=0,d=u.length;h<d;h++)jd(u[h],t,i,!0)}}function z_(s,t,i,r){const l=sE(r);switch(i){case Sv:return s*t;case Mv:return s*t/l.components*l.byteLength;case ap:return s*t/l.components*l.byteLength;case Hs:return s*t*2/l.components*l.byteLength;case rp:return s*t*2/l.components*l.byteLength;case yv:return s*t*3/l.components*l.byteLength;case Di:return s*t*4/l.components*l.byteLength;case sp:return s*t*4/l.components*l.byteLength;case Qu:case Ju:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $u:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(s,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(s,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case Td:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Md:case bd:case Ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case Xd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case kd:case Wd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qd:case Yd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sE(s){switch(s){case gi:case gv:return{byteLength:1,components:1};case il:case _v:case Sa:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Xi:case ep:case Fi:return{byteLength:4,components:1};case vv:case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);function Hv(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function oE(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<g.length;y++){const T=g[x],R=g[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,g[x]=R)}g.length=x+1;for(let y=0,T=g.length;y<T;y++){const R=g[y];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ME=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FE="gl_FragColor = linearToOutputTexel( gl_FragColor );",IE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ST=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:lE,alphahash_pars_fragment:uE,alphamap_fragment:cE,alphamap_pars_fragment:fE,alphatest_fragment:hE,alphatest_pars_fragment:dE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:vE,beginnormal_vertex:xE,bsdfs:SE,iridescence_fragment:yE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:TE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:AE,color_fragment:RE,color_pars_fragment:CE,color_pars_vertex:wE,color_vertex:DE,common:UE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:NE,displacementmap_pars_vertex:OE,displacementmap_vertex:PE,emissivemap_fragment:zE,emissivemap_pars_fragment:BE,colorspace_fragment:FE,colorspace_pars_fragment:IE,envmap_fragment:HE,envmap_common_pars_fragment:GE,envmap_pars_fragment:VE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:tT,envmap_vertex:kE,fog_vertex:WE,fog_pars_vertex:qE,fog_fragment:YE,fog_pars_fragment:ZE,gradientmap_pars_fragment:KE,lightmap_pars_fragment:jE,lights_lambert_fragment:QE,lights_lambert_pars_fragment:JE,lights_pars_begin:$E,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:aT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:uT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:ST,morphcolor_vertex:yT,morphnormal_vertex:MT,morphtarget_pars_vertex:ET,morphtarget_vertex:TT,normal_fragment_begin:bT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:CT,normal_vertex:wT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:OT,opaque_fragment:PT,packing:zT,premultiplied_alpha_fragment:BT,project_vertex:FT,dithering_fragment:IT,dithering_pars_fragment:HT,roughnessmap_fragment:GT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:kT,shadowmap_vertex:WT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:ZT,skinning_vertex:KT,skinnormal_vertex:jT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:$T,tonemapping_pars_fragment:tb,transmission_fragment:eb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:ab,uv_vertex:rb,worldpos_vertex:sb,background_vert:ob,background_frag:lb,backgroundCube_vert:ub,backgroundCube_frag:cb,cube_vert:fb,cube_frag:hb,depth_vert:db,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:_b,equirect_frag:vb,linedashed_vert:xb,linedashed_frag:Sb,meshbasic_vert:yb,meshbasic_frag:Mb,meshlambert_vert:Eb,meshlambert_frag:Tb,meshmatcap_vert:bb,meshmatcap_frag:Ab,meshnormal_vert:Rb,meshnormal_frag:Cb,meshphong_vert:wb,meshphong_frag:Db,meshphysical_vert:Ub,meshphysical_frag:Lb,meshtoon_vert:Nb,meshtoon_frag:Ob,points_vert:Pb,points_frag:zb,shadow_vert:Bb,shadow_frag:Fb,sprite_vert:Ib,sprite_frag:Hb},Nt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:zn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:zn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:zn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:zn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:zn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:zn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:zn([Nt.common,Nt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:zn([Nt.lights,Nt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Zu={r:0,b:0,g:0},Ar=new Ma,Gb=new je;function Vb(s,t,i,r,l,u,h){const d=new Re(0);let m=u===!0?0:1,p,_,g=null,x=0,y=null;function T(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function R(L){let N=!1;const B=T(L);B===null?S(d,m):B&&B.isColor&&(S(B,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,N){const B=T(N);B&&(B.isCubeTexture||B.mapping===oc)?(_===void 0&&(_=new ni(new fl(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Xs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ar.copy(N.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(Ar)),_.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,(g!==B||x!==B.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=B,x=B.version,y=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new ni(new hl(2,2),new ki({name:"BackgroundMaterial",uniforms:Xs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||x!==B.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=B,x=B.version,y=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function S(L,N){L.getRGB(Zu,Cv(s)),r.buffers.color.setClear(Zu.r,Zu.g,Zu.b,N,h)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,N=1){d.set(L),m=N,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,S(d,m)},render:R,addToRenderList:M,dispose:z}}function Xb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(w,X,rt,at,dt){let ct=!1;const O=g(at,rt,X);u!==O&&(u=O,p(u.object)),ct=y(w,at,rt,dt),ct&&T(w,at,rt,dt),dt!==null&&t.update(dt,s.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,N(w,X,rt,at),dt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,X,rt){const at=rt.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let ct=dt[X.id];ct===void 0&&(ct={},dt[X.id]=ct);let O=ct[at];return O===void 0&&(O=x(m()),ct[at]=O),O}function x(w){const X=[],rt=[],at=[];for(let dt=0;dt<i;dt++)X[dt]=0,rt[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:rt,attributeDivisors:at,object:w,attributes:{},index:null}}function y(w,X,rt,at){const dt=u.attributes,ct=X.attributes;let O=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){const xt=dt[it];let U=ct[it];if(U===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function T(w,X,rt,at){const dt={},ct=X.attributes;let O=0;const H=rt.getAttributes();for(const it in H)if(H[it].location>=0){let xt=ct[it];xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),dt[it]=U,O++}u.attributes=dt,u.attributesNum=O,u.index=at}function R(){const w=u.newAttributes;for(let X=0,rt=w.length;X<rt;X++)w[X]=0}function M(w){S(w,0)}function S(w,X){const rt=u.newAttributes,at=u.enabledAttributes,dt=u.attributeDivisors;rt[w]=1,at[w]===0&&(s.enableVertexAttribArray(w),at[w]=1),dt[w]!==X&&(s.vertexAttribDivisor(w,X),dt[w]=X)}function z(){const w=u.newAttributes,X=u.enabledAttributes;for(let rt=0,at=X.length;rt<at;rt++)X[rt]!==w[rt]&&(s.disableVertexAttribArray(rt),X[rt]=0)}function L(w,X,rt,at,dt,ct,O){O===!0?s.vertexAttribIPointer(w,X,rt,dt,ct):s.vertexAttribPointer(w,X,rt,at,dt,ct)}function N(w,X,rt,at){R();const dt=at.attributes,ct=rt.getAttributes(),O=X.defaultAttributeValues;for(const H in ct){const it=ct[H];if(it.location>=0){let yt=dt[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,U=yt.itemSize,nt=t.get(yt);if(nt===void 0)continue;const gt=nt.buffer,bt=nt.type,Ft=nt.bytesPerElement,et=bt===s.INT||bt===s.UNSIGNED_INT||yt.gpuType===ep;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,Vt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<it.locationSize;It++)S(it.location+It,ut.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<it.locationSize;It++)M(it.location+It);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let It=0;It<it.locationSize;It++)L(it.location+It,U/it.locationSize,bt,xt,wt*Ft,(Vt+U/it.locationSize*It)*Ft,et)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<it.locationSize;ut++)S(it.location+ut,yt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<it.locationSize;ut++)M(it.location+ut);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let ut=0;ut<it.locationSize;ut++)L(it.location+ut,U/it.locationSize,bt,xt,U*Ft,U/it.locationSize*ut*Ft,et)}}else if(O!==void 0){const xt=O[H];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(it.location,xt);break;case 3:s.vertexAttrib3fv(it.location,xt);break;case 4:s.vertexAttrib4fv(it.location,xt);break;default:s.vertexAttrib1fv(it.location,xt)}}}}z()}function B(){j();for(const w in r){const X=r[w];for(const rt in X){const at=X[rt];for(const dt in at)_(at[dt].object),delete at[dt];delete X[rt]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const rt in X){const at=X[rt];for(const dt in at)_(at[dt].object),delete at[dt];delete X[rt]}delete r[w.id]}function P(w){for(const X in r){const rt=r[X];if(rt[w.id]===void 0)continue;const at=rt[w.id];for(const dt in at)_(at[dt].object),delete at[dt];delete rt[w.id]}}function j(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function kb(s,t,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];i.update(y,r,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)h(p[T],_[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let T=0;for(let R=0;R<g;R++)T+=_[R]*x[R];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Wb(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Di&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==gi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!j)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:N,maxSamples:B,samples:I}}function qb(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Cr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const T=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,S=s.get(g);if(!l||T===null||T.length===0||u&&!M)u?_(null):p();else{const z=u?0:r,L=z*4;let N=S.clippingState||null;m.value=N,N=_(T,x,L,y);for(let B=0;B!==L;++B)N[B]=i[B];S.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,y,T){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,T!==!0||M===null){const S=y+R*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<S)&&(M=new Float32Array(S));for(let L=0,N=y;L!==R;++L,N+=4)h.copy(g[L]).applyMatrix4(z,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function Yb(s){let t=new WeakMap;function i(h,d){return d===hd?h.mapping=Or:d===dd&&(h.mapping=Is),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===hd||d===dd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Uv(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ir=4,B_=[.125,.215,.35,.446,.526,.582],Dr=20,Zb=256,Ko=new Iv,F_=new Re;let Kh=null,jh=0,Qh=0,Jh=!1;const Kb=new q;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=Kb}=u;Kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,jh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Or||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Sa,format:Di,colorSpace:Gs,depthBuffer:!1},l=H_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jb(u)),this._blurMaterial=Jb(u,t,i),this._ggxMaterial=Qb(u,t,i)}return l}_compileMaterial(t){const i=new ni(new ii,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,r,l,u){const m=new mi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(F_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new fl,new Vs({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let S=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,S=!0):(M.color.copy(F_),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const B=this._cubeSize;Ps(l,N*B,L>2?B:0,B,B),g.setRenderTarget(l),S&&g.render(R,m),g.render(t,m)}g.toneMapping=y,g.autoClear=x,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Or||t.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,y=g*x,{_lodMax:T}=this,R=this._sizeLods[r],M=3*R*(r>T-ir?r-T+ir:0),S=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Ps(u,M,S,3*R,2*R),l.setRenderTarget(u),l.render(d,Ko),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Ps(t,M,S,3*R,2*R),l.setRenderTarget(t),l.render(d,Ko)}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Me("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Dr-1),R=u/T,M=isFinite(u)?1+Math.floor(_*R):Dr;M>Dr&&ie(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Dr}`);const S=[];let z=0;for(let P=0;P<Dr;++P){const j=P/R,C=Math.exp(-j*j/2);S.push(C),P===0?z+=C:P<M&&(z+=2*C)}for(let P=0;P<S.length;P++)S[P]=S[P]/z;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const N=this._sizeLods[l],B=3*N*(l>L-ir?l-L+ir:0),I=4*(this._cubeSize-N);Ps(i,B,I,3*N,2*N),m.setRenderTarget(i),m.render(g,Ko)}}function jb(s){const t=[],i=[],r=[];let l=s;const u=s-ir+1+B_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-ir?m=B_[h-s+ir-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,R=3,M=2,S=1,z=new Float32Array(R*T*y),L=new Float32Array(M*T*y),N=new Float32Array(S*T*y);for(let I=0;I<y;I++){const P=I%3*2/3-1,j=I>2?0:-1,C=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];z.set(C,R*T*I),L.set(x,M*T*I);const w=[I,I,I,I,I,I];N.set(w,S*T*I)}const B=new ii;B.setAttribute("position",new ei(z,R)),B.setAttribute("uv",new ei(L,M)),B.setAttribute("faceIndex",new ei(N,S)),r.push(new ni(B,null)),l>ir&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function H_(s,t,i){const r=new Gi(s,t,i);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function Qb(s,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Jb(s,t,i){const r=new Float32Array(Dr),l=new q(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function G_(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function V_(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $b(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,_=m===Or||m===Is;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new I_(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new I_(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function tA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&sl("WebGLRenderer: "+r+" extension not supported."),l}}}function eA(s,t,i,r){const l={},u=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,T=g.attributes.position;let R=0;if(y!==null){const z=y.array;R=y.version;for(let L=0,N=z.length;L<N;L+=3){const B=z[L+0],I=z[L+1],P=z[L+2];x.push(B,I,I,P,P,B)}}else if(T!==void 0){const z=T.array;R=T.version;for(let L=0,N=z.length/3-1;L<N;L+=3){const B=L+0,I=L+1,P=L+2;x.push(B,I,I,P,P,B)}}else return;const M=new(Ev(x)?Rv:Av)(x,1);M.version=R;const S=u.get(g);S&&t.remove(S),u.set(g,M)}function _(g){const x=u.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function nA(s,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){s.drawElements(r,y,u,x*h),i.update(y,r,1)}function p(x,y,T){T!==0&&(s.drawElementsInstanced(r,y,u,x*h,T),i.update(y,r,T))}function _(x,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,T);let M=0;for(let S=0;S<T;S++)M+=y[S];i.update(M,r,1)}function g(x,y,T,R){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)p(x[S]/h,y[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,T);let S=0;for(let z=0;z<T;z++)S+=y[z]*R[z];i.update(S,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function iA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:Me("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function aA(s,t,i){const r=new WeakMap,l=new an;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;T===!0&&(N=1),R===!0&&(N=2),M===!0&&(N=3);let B=d.attributes.position.count*N,I=1;B>t.maxTextureSize&&(I=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*I*4*g),j=new Tv(P,B,I,g);j.type=Fi,j.needsUpdate=!0;const C=N*4;for(let X=0;X<g;X++){const rt=S[X],at=z[X],dt=L[X],ct=B*I*4*X;for(let O=0;O<rt.count;O++){const H=O*C;T===!0&&(l.fromBufferAttribute(rt,O),P[ct+H+0]=l.x,P[ct+H+1]=l.y,P[ct+H+2]=l.z,P[ct+H+3]=0),R===!0&&(l.fromBufferAttribute(at,O),P[ct+H+4]=l.x,P[ct+H+5]=l.y,P[ct+H+6]=l.z,P[ct+H+7]=0),M===!0&&(l.fromBufferAttribute(dt,O),P[ct+H+8]=l.x,P[ct+H+9]=l.y,P[ct+H+10]=l.z,P[ct+H+11]=dt.itemSize===4?l.w:1)}}x={count:g,texture:j,size:new Qt(B,I)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function rA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const sA={[lv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[fv]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[pv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function oA(s,t,i,r,l){const u=new Gi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),h=new Gi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new ii;d.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ni(d,m),_=new Iv(-1,1,1,-1,0,1);let g=null,x=null,y=!1,T,R=null,M=[],S=!1;this.setSize=function(z,L){u.setSize(z,L),h.setSize(z,L);for(let N=0;N<M.length;N++){const B=M[N];B.setSize&&B.setSize(z,L)}},this.setEffects=function(z){M=z,S=M.length>0&&M[0].isRenderPass===!0;const L=u.width,N=u.height;for(let B=0;B<M.length;B++){const I=M[B];I.setSize&&I.setSize(L,N)}},this.begin=function(z,L){if(y||z.toneMapping===Hi&&M.length===0)return!1;if(R=L,L!==null){const N=L.width,B=L.height;(u.width!==N||u.height!==B)&&this.setSize(N,B)}return S===!1&&z.setRenderTarget(u),T=z.toneMapping,z.toneMapping=Hi,!0},this.hasRenderPass=function(){return S},this.end=function(z,L){z.toneMapping=T,y=!0;let N=u,B=h;for(let I=0;I<M.length;I++){const P=M[I];if(P.enabled!==!1&&(P.render(z,B,N,L),P.needsSwap!==!1)){const j=N;N=B,B=j}}if(g!==z.outputColorSpace||x!==z.toneMapping){g=z.outputColorSpace,x=z.toneMapping,m.defines={},Te.getTransfer(g)===Fe&&(m.defines.SRGB_TRANSFER="");const I=sA[x];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,z.setRenderTarget(R),z.render(p,_),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Gv=new wn,Qd=new ll(1,1),Vv=new Tv,Xv=new cM,kv=new Dv,X_=[],k_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=X_[l];if(u===void 0&&(u=new Float32Array(l),X_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function cc(s,t){let i=k_[t];i===void 0&&(i=new Int32Array(t),k_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function lA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function uA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function fA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function hA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Y_.set(r),s.uniformMatrix2fv(this.addr,!1,Y_),pn(i,r)}}function dA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;q_.set(r),s.uniformMatrix3fv(this.addr,!1,q_),pn(i,r)}}function pA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;W_.set(r),s.uniformMatrix4fv(this.addr,!1,W_),pn(i,r)}}function mA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function xA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function yA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function MA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function EA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?lp:op,u=Qd):u=Gv,i.setTexture2D(t||u,l)}function TA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Xv,l)}function bA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||kv,l)}function AA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Vv,l)}function RA(s){switch(s){case 5126:return lA;case 35664:return uA;case 35665:return cA;case 35666:return fA;case 35674:return hA;case 35675:return dA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return SA;case 36295:return yA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return AA}}function CA(s,t){s.uniform1fv(this.addr,t)}function wA(s,t){const i=qs(t,this.size,2);s.uniform2fv(this.addr,i)}function DA(s,t){const i=qs(t,this.size,3);s.uniform3fv(this.addr,i)}function UA(s,t){const i=qs(t,this.size,4);s.uniform4fv(this.addr,i)}function LA(s,t){const i=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function NA(s,t){const i=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function OA(s,t){const i=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function PA(s,t){s.uniform1iv(this.addr,t)}function zA(s,t){s.uniform2iv(this.addr,t)}function BA(s,t){s.uniform3iv(this.addr,t)}function FA(s,t){s.uniform4iv(this.addr,t)}function IA(s,t){s.uniform1uiv(this.addr,t)}function HA(s,t){s.uniform2uiv(this.addr,t)}function GA(s,t){s.uniform3uiv(this.addr,t)}function VA(s,t){s.uniform4uiv(this.addr,t)}function XA(s,t,i){const r=this.cache,l=t.length,u=cc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));let h;this.type===s.SAMPLER_2D_SHADOW?h=Qd:h=Gv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function kA(s,t,i){const r=this.cache,l=t.length,u=cc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Xv,u[h])}function WA(s,t,i){const r=this.cache,l=t.length,u=cc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||kv,u[h])}function qA(s,t,i){const r=this.cache,l=t.length,u=cc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Vv,u[h])}function YA(s){switch(s){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return UA;case 35674:return LA;case 35675:return NA;case 35676:return OA;case 5124:case 35670:return PA;case 35667:case 35671:return zA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return IA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=RA(i.type)}}class KA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=YA(i.type)}}class jA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Z_(s,t){s.seq.push(t),s.map[t.id]=t}function QA(s,t,i){const r=s.name,l=r.length;for($h.lastIndex=0;;){const u=$h.exec(r),h=$h.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Z_(i,p===void 0?new ZA(d,s,t):new KA(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new jA(d),Z_(i,g)),i=g}}}class ec{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);QA(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function K_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const JA=37297;let $A=0;function t1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const j_=new ce;function e1(s){Te._getMatrix(j_,Te.workingColorSpace,s);const t=`mat3( ${j_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case nc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Q_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+t1(s.getShaderSource(t),d)}else return u}function n1(s,t){const i=e1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const i1={[lv]:"Linear",[uv]:"Reinhard",[cv]:"Cineon",[fv]:"ACESFilmic",[dv]:"AgX",[pv]:"Neutral",[hv]:"Custom"};function a1(s,t){const i=i1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ku=new q;function r1(){Te.getLuminanceCoefficients(Ku);const s=Ku.x.toFixed(4),t=Ku.y.toFixed(4),i=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function o1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function l1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Jo(s){return s!==""}function J_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(u1,f1)}const c1=new Map;function f1(s,t){let i=fe[t];if(i===void 0){const r=c1.get(t);if(r!==void 0)i=fe[r],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(s){return s.replace(h1,d1)}function d1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ev(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const p1={[ju]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function m1(s){return p1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g1={[Or]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function _1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":g1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const v1={[Is]:"ENVMAP_MODE_REFRACTION"};function x1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":v1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S1={[ov]:"ENVMAP_BLENDING_MULTIPLY",[Cy]:"ENVMAP_BLENDING_MIX",[wy]:"ENVMAP_BLENDING_ADD"};function y1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":S1[s.combine]||"ENVMAP_BLENDING_NONE"}function M1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function E1(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=m1(i),p=_1(i),_=x1(i),g=y1(i),x=M1(i),y=s1(i),T=o1(u),R=l.createProgram();let M,S,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),S.length>0&&(S+=`
`)):(M=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),S=[ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Hi?a1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,n1("linearToOutputTexel",i.outputColorSpace),r1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),h=Jd(h),h=J_(h,i),h=$_(h,i),d=Jd(d),d=J_(d,i),d=$_(d,i),h=tv(h),d=tv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=z+M+h,N=z+S+d,B=K_(l,l.VERTEX_SHADER,L),I=K_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,B),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(X){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(R)||"",at=l.getShaderInfoLog(B)||"",dt=l.getShaderInfoLog(I)||"",ct=rt.trim(),O=at.trim(),H=dt.trim();let it=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,I);else{const xt=Q_(l,B,"vertex"),U=Q_(l,I,"fragment");Me("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ct+`
`+xt+`
`+U)}else ct!==""?ie("WebGLProgram: Program Info Log:",ct):(O===""||H==="")&&(yt=!1);yt&&(X.diagnostics={runnable:it,programLog:ct,vertexShader:{log:O,prefix:M},fragmentShader:{log:H,prefix:S}})}l.deleteShader(B),l.deleteShader(I),j=new ec(l,R),C=l1(l,R)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,JA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$A++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=I,this}let T1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new A1(t),i.set(t,r)),r}}class A1{constructor(t){this.id=T1++,this.code=t,this.usedTimes=0}}function R1(s,t,i,r,l,u,h){const d=new hp,m=new b1,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,X,rt,at){const dt=rt.fog,ct=at.geometry,O=C.isMeshStandardMaterial?rt.environment:null,H=(C.isMeshStandardMaterial?i:t).get(C.envMap||O),it=H&&H.mapping===oc?H.image.height:null,yt=T[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&ie("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,U=xt!==void 0?xt.length:0;let nt=0;ct.morphAttributes.position!==void 0&&(nt=1),ct.morphAttributes.normal!==void 0&&(nt=2),ct.morphAttributes.color!==void 0&&(nt=3);let gt,bt,Ft,et;if(yt){const Ee=Bi[yt];gt=Ee.vertexShader,bt=Ee.fragmentShader}else gt=C.vertexShader,bt=C.fragmentShader,m.update(C),Ft=m.getVertexShaderID(C),et=m.getFragmentShaderID(C);const ut=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Vt=at.isInstancedMesh===!0,It=at.isBatchedMesh===!0,de=!!C.map,Qe=!!C.matcap,_e=!!H,pe=!!C.aoMap,Ce=!!C.lightMap,se=!!C.bumpMap,Je=!!C.normalMap,G=!!C.displacementMap,Ye=!!C.emissiveMap,ye=!!C.metalnessMap,Le=!!C.roughnessMap,qt=C.anisotropy>0,D=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,ht=C.sheen>0,vt=C.transmission>0,lt=qt&&!!C.anisotropyMap,Zt=D&&!!C.clearcoatMap,Rt=D&&!!C.clearcoatNormalMap,Xt=D&&!!C.clearcoatRoughnessMap,ee=W&&!!C.iridescenceMap,Mt=W&&!!C.iridescenceThicknessMap,Et=ht&&!!C.sheenColorMap,zt=ht&&!!C.sheenRoughnessMap,Ot=!!C.specularMap,Ct=!!C.specularColorMap,le=!!C.specularIntensityMap,k=vt&&!!C.transmissionMap,Ut=vt&&!!C.thicknessMap,Tt=!!C.gradientMap,Pt=!!C.alphaMap,St=C.alphaTest>0,_t=!!C.alphaHash,At=!!C.extensions;let ne=Hi;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=s.toneMapping);const Oe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:bt,defines:C.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:It,batchingColor:It&&at._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&at.instanceColor!==null,instancingMorph:Vt&&at.morphTexture!==null,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Gs,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:Qe,envMap:_e,envMapMode:_e&&H.mapping,envMapCubeUVHeight:it,aoMap:pe,lightMap:Ce,bumpMap:se,normalMap:Je,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Je&&C.normalMapType===Ny,normalMapTangentSpace:Je&&C.normalMapType===Ly,metalnessMap:ye,roughnessMap:Le,anisotropy:qt,anisotropyMap:lt,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:C.transparent===!1&&C.blending===zs&&C.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:C.combine,mapUv:de&&R(C.map.channel),aoMapUv:pe&&R(C.aoMap.channel),lightMapUv:Ce&&R(C.lightMap.channel),bumpMapUv:se&&R(C.bumpMap.channel),normalMapUv:Je&&R(C.normalMap.channel),displacementMapUv:G&&R(C.displacementMap.channel),emissiveMapUv:Ye&&R(C.emissiveMap.channel),metalnessMapUv:ye&&R(C.metalnessMap.channel),roughnessMapUv:Le&&R(C.roughnessMap.channel),anisotropyMapUv:lt&&R(C.anisotropyMap.channel),clearcoatMapUv:Zt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(C.sheenRoughnessMap.channel),specularMapUv:Ot&&R(C.specularMap.channel),specularColorMapUv:Ct&&R(C.specularColorMap.channel),specularIntensityMapUv:le&&R(C.specularIntensityMap.channel),transmissionMapUv:k&&R(C.transmissionMap.channel),thicknessMapUv:Ut&&R(C.thicknessMap.channel),alphaMapUv:Pt&&R(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Je||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(de||Pt),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ye&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pa,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:At&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&C.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function S(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const X in C.defines)w.push(X),w.push(C.defines[X]);return C.isRawShaderMaterial===!1&&(z(w,C),L(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function z(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function N(C){const w=T[C.type];let X;if(w){const rt=Bi[w];X=EM.clone(rt.uniforms)}else X=C.uniforms;return X}function B(C,w){let X=g.get(w);return X!==void 0?++X.usedTimes:(X=new E1(s,w,C,u),_.push(X),g.set(w,X)),X}function I(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function P(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:N,acquireProgram:B,releaseProgram:I,releaseShaderCache:P,programs:_,dispose:j}}function C1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function w1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function iv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g,x,y,T,R,M){let S=s[t];return S===void 0?(S={id:g.id,object:g,geometry:x,material:y,groupOrder:T,renderOrder:g.renderOrder,z:R,group:M},s[t]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=y,S.groupOrder=T,S.renderOrder=g.renderOrder,S.z=R,S.group=M),t++,S}function d(g,x,y,T,R,M){const S=h(g,x,y,T,R,M);y.transmission>0?r.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(g,x,y,T,R,M){const S=h(g,x,y,T,R,M);y.transmission>0?r.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,x){i.length>1&&i.sort(g||w1),r.length>1&&r.sort(x||nv),l.length>1&&l.sort(x||nv)}function _(){for(let g=t,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function D1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new iv,s.set(r,[h])):l>=u.length?(h=new iv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function U1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new Re};break;case"SpotLight":i={position:new q,direction:new q,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new q,halfWidth:new q,halfHeight:new q};break}return s[t.id]=i,i}}}function L1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let N1=0;function O1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function P1(s){const t=new U1,i=L1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const l=new q,u=new je,h=new je;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,T=0,R=0,M=0,S=0,z=0,L=0,N=0,B=0,I=0,P=0;p.sort(O1);for(let C=0,w=p.length;C<w;C++){const X=p[C],rt=X.color,at=X.intensity,dt=X.distance;let ct=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Hs?ct=X.shadow.map.texture:ct=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=rt.r*at,g+=rt.g*at,x+=rt.b*at;else if(X.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(X.sh.coefficients[O],at);P++}else if(X.isDirectionalLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.directionalShadow[y]=it,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=X.shadow.matrix,z++}r.directional[y]=O,y++}else if(X.isSpotLight){const O=t.get(X);O.position.setFromMatrixPosition(X.matrixWorld),O.color.copy(rt).multiplyScalar(at),O.distance=dt,O.coneCos=Math.cos(X.angle),O.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),O.decay=X.decay,r.spot[R]=O;const H=X.shadow;if(X.map&&(r.spotLightMap[B]=X.map,B++,H.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[R]=H.matrix,X.castShadow){const it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,r.spotShadow[R]=it,r.spotShadowMap[R]=ct,N++}R++}else if(X.isRectAreaLight){const O=t.get(X);O.color.copy(rt).multiplyScalar(at),O.halfWidth.set(X.width*.5,0,0),O.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=O,M++}else if(X.isPointLight){const O=t.get(X);if(O.color.copy(X.color).multiplyScalar(X.intensity),O.distance=X.distance,O.decay=X.decay,X.castShadow){const H=X.shadow,it=i.get(X);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,r.pointShadow[T]=it,r.pointShadowMap[T]=ct,r.pointShadowMatrix[T]=X.shadow.matrix,L++}r.point[T]=O,T++}else if(X.isHemisphereLight){const O=t.get(X);O.skyColor.copy(X.color).multiplyScalar(at),O.groundColor.copy(X.groundColor).multiplyScalar(at),r.hemi[S]=O,S++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==T||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==S||j.numDirectionalShadows!==z||j.numPointShadows!==L||j.numSpotShadows!==N||j.numSpotMaps!==B||j.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,j.directionalLength=y,j.pointLength=T,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=S,j.numDirectionalShadows=z,j.numPointShadows=L,j.numSpotShadows=N,j.numSpotMaps=B,j.numLightProbes=P,r.version=N1++)}function m(p,_){let g=0,x=0,y=0,T=0,R=0;const M=_.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const L=p[S];if(L.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(L.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function av(s){const t=new P1(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function z1(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new av(s),t.set(l,[d])):u>=h.length?(d=new av(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I1=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],H1=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],rv=new je,jo=new q,td=new q;function G1(s,t,i){let r=new Ov;const l=new Qt,u=new Qt,h=new an,d=new JM,m=new $M,p={},_=i.maxTextureSize,g={[Vi]:kn,[kn]:Vi,[pa]:pa},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:B1,fragmentShader:F1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ni(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let S=this.type;this.render=function(I,P,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===uy&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=ju);const C=s.getRenderTarget(),w=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(_a),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=S!==this.type;at&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ct=>ct.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ct=I.length;dt<ct;dt++){const O=I[dt],H=O.shadow;if(H===void 0){ie("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/it.x),l.x=u.x*it.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/it.y),l.y=u.y*it.y,H.mapSize.y=u.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(O.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gi(l.x,l.y,{format:Hs,type:Sa,minFilter:_n,magFilter:_n,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new ll(l.x,l.y,Fi),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{O.isPointLight?(H.map=new Uv(l.x),H.map.depthTexture=new PM(l.x,Xi)):(H.map=new Gi(l.x,l.y),H.map.depthTexture=new ll(l.x,l.y,Xi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=ya;const xt=s.state.buffers.depth.getReversed();this.type===ju?(H.map.depthTexture.compareFunction=xt?lp:op,H.map.depthTexture.minFilter=_n,H.map.depthTexture.magFilter=_n):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(H.map),s.clear());const U=H.getViewport(xt);h.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),rt.viewport(h)}if(O.isPointLight){const U=H.camera,nt=H.matrix,gt=O.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),jo.setFromMatrixPosition(O.matrixWorld),U.position.copy(jo),td.copy(U.position),td.add(I1[xt]),U.up.copy(H1[xt]),U.lookAt(td),U.updateMatrixWorld(),nt.makeTranslation(-jo.x,-jo.y,-jo.z),rv.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rv,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(O);r=H.getFrustum(),N(P,j,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&z(H,j),H.needsUpdate=!1}S=this.type,M.needsUpdate=!1,s.setRenderTarget(C,w,X)};function z(I,P){const j=t.update(R);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gi(l.x,l.y,{format:Hs,type:Sa})),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,j,x,R,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,j,y,R,null)}function L(I,P,j,C){let w=null;const X=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(X!==void 0)w=X;else if(w=j.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const rt=w.uuid,at=P.uuid;let dt=p[rt];dt===void 0&&(dt={},p[rt]=dt);let ct=dt[at];ct===void 0&&(ct=w.clone(),dt[at]=ct,P.addEventListener("dispose",B)),w=ct}if(w.visible=P.visible,w.wireframe=P.wireframe,C===Qo?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=s.properties.get(w);rt.light=j}return w}function N(I,P,j,C,w){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Qo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const at=t.update(I),dt=I.material;if(Array.isArray(dt)){const ct=at.groups;for(let O=0,H=ct.length;O<H;O++){const it=ct[O],yt=dt[it.materialIndex];if(yt&&yt.visible){const xt=L(I,yt,C,w);I.onBeforeShadow(s,I,P,j,at,xt,it),s.renderBufferDirect(j,null,at,xt,I,it),I.onAfterShadow(s,I,P,j,at,xt,it)}}}else if(dt.visible){const ct=L(I,dt,C,w);I.onBeforeShadow(s,I,P,j,at,ct,null),s.renderBufferDirect(j,null,at,ct,I,null),I.onAfterShadow(s,I,P,j,at,ct,null)}}const rt=I.children;for(let at=0,dt=rt.length;at<dt;at++)N(rt[at],P,j,C,w)}function B(I){I.target.removeEventListener("dispose",B);for(const j in p){const C=p[j],w=I.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const V1={[rd]:sd,[od]:cd,[ld]:fd,[Fs]:ud,[sd]:rd,[cd]:od,[fd]:ld,[ud]:Fs};function X1(s,t){function i(){let k=!1;const Ut=new an;let Tt=null;const Pt=new an(0,0,0,0);return{setMask:function(St){Tt!==St&&!k&&(s.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ne,Oe){Oe===!0&&(St*=ne,_t*=ne,At*=ne),Ut.set(St,_t,At,ne),Pt.equals(Ut)===!1&&(s.clearColor(St,_t,At,ne),Pt.copy(Ut))},reset:function(){k=!1,Tt=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(s.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=V1[_t]),Pt!==_t){switch(_t){case rd:s.depthFunc(s.NEVER);break;case sd:s.depthFunc(s.ALWAYS);break;case od:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case ld:s.depthFunc(s.EQUAL);break;case ud:s.depthFunc(s.GEQUAL);break;case cd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),s.clearDepth(_t),St=_t)},reset:function(){k=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,Oe=null;return{setTest:function(Ee){k||(Ee?ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!k&&(s.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Dn,xi){(Tt!==Ee||Pt!==Dn||St!==xi)&&(s.stencilFunc(Ee,Dn,xi),Tt=Ee,Pt=Dn,St=xi)},setOp:function(Ee,Dn,xi){(_t!==Ee||At!==Dn||ne!==xi)&&(s.stencilOp(Ee,Dn,xi),_t=Ee,At=Dn,ne=xi)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Oe!==Ee&&(s.clearStencil(Ee),Oe=Ee)},reset:function(){k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,Oe=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],T=null,R=!1,M=null,S=null,z=null,L=null,N=null,B=null,I=null,P=new Re(0,0,0),j=0,C=!1,w=null,X=null,rt=null,at=null,dt=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),O=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),O=H>=2);let yt=null,xt={};const U=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),gt=new an().fromArray(U),bt=new an().fromArray(nt);function Ft(k,Ut,Tt,Pt){const St=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<Tt;At++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(Ut+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return _t}const et={};et[s.TEXTURE_2D]=Ft(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=Ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=Ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=Ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(s.DEPTH_TEST),h.setFunc(Fs),se(!1),Je(s_),ut(s.CULL_FACE),pe(_a);function ut(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function Vt(k,Ut){return g[k]!==Ut?(s.bindFramebuffer(k,Ut),g[k]=Ut,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ut),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(k,Ut){let Tt=y,Pt=!1;if(k){Tt=x.get(Ut),Tt===void 0&&(Tt=[],x.set(Ut,Tt));const St=k.textures;if(Tt.length!==St.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=s.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(Tt)}function de(k){return T!==k?(s.useProgram(k),T=k,!0):!1}const Qe={[wr]:s.FUNC_ADD,[fy]:s.FUNC_SUBTRACT,[hy]:s.FUNC_REVERSE_SUBTRACT};Qe[dy]=s.MIN,Qe[py]=s.MAX;const _e={[my]:s.ZERO,[gy]:s.ONE,[_y]:s.SRC_COLOR,[id]:s.SRC_ALPHA,[Ey]:s.SRC_ALPHA_SATURATE,[yy]:s.DST_COLOR,[xy]:s.DST_ALPHA,[vy]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[My]:s.ONE_MINUS_DST_COLOR,[Sy]:s.ONE_MINUS_DST_ALPHA,[Ty]:s.CONSTANT_COLOR,[by]:s.ONE_MINUS_CONSTANT_COLOR,[Ay]:s.CONSTANT_ALPHA,[Ry]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(k,Ut,Tt,Pt,St,_t,At,ne,Oe,Ee){if(k===_a){R===!0&&(wt(s.BLEND),R=!1);return}if(R===!1&&(ut(s.BLEND),R=!0),k!==cy){if(k!==M||Ee!==C){if((S!==wr||N!==wr)&&(s.blendEquation(s.FUNC_ADD),S=wr,N=wr),Ee)switch(k){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nr:s.blendFunc(s.ONE,s.ONE);break;case o_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case l_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Me("WebGLState: Invalid blending: ",k);break}else switch(k){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case o_:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l_:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",k);break}z=null,L=null,B=null,I=null,P.set(0,0,0),j=0,M=k,C=Ee}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==S||St!==N)&&(s.blendEquationSeparate(Qe[Ut],Qe[St]),S=Ut,N=St),(Tt!==z||Pt!==L||_t!==B||At!==I)&&(s.blendFuncSeparate(_e[Tt],_e[Pt],_e[_t],_e[At]),z=Tt,L=Pt,B=_t,I=At),(ne.equals(P)===!1||Oe!==j)&&(s.blendColor(ne.r,ne.g,ne.b,Oe),P.copy(ne),j=Oe),M=k,C=!1}function Ce(k,Ut){k.side===pa?wt(s.CULL_FACE):ut(s.CULL_FACE);let Tt=k.side===kn;Ut&&(Tt=!Tt),se(Tt),k.blending===zs&&k.transparent===!1?pe(_a):pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Je(k){k!==oy?(ut(s.CULL_FACE),k!==X&&(k===s_?s.cullFace(s.BACK):k===ly?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),X=k}function G(k){k!==rt&&(O&&s.lineWidth(k),rt=k)}function Ye(k,Ut,Tt){k?(ut(s.POLYGON_OFFSET_FILL),(at!==Ut||dt!==Tt)&&(s.polygonOffset(Ut,Tt),at=Ut,dt=Tt)):wt(s.POLYGON_OFFSET_FILL)}function ye(k){k?ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Le(k){k===void 0&&(k=s.TEXTURE0+ct-1),yt!==k&&(s.activeTexture(k),yt=k)}function qt(k,Ut,Tt){Tt===void 0&&(yt===null?Tt=s.TEXTURE0+ct-1:Tt=yt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(yt!==Tt&&(s.activeTexture(Tt),yt=Tt),s.bindTexture(k,Ut||et[k]),Pt.type=k,Pt.texture=Ut)}function D(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){Me("WebGLState:",k)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(k){Me("WebGLState:",k)}}function ht(){try{s.texSubImage2D(...arguments)}catch(k){Me("WebGLState:",k)}}function vt(){try{s.texSubImage3D(...arguments)}catch(k){Me("WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Me("WebGLState:",k)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Me("WebGLState:",k)}}function Rt(){try{s.texStorage2D(...arguments)}catch(k){Me("WebGLState:",k)}}function Xt(){try{s.texStorage3D(...arguments)}catch(k){Me("WebGLState:",k)}}function ee(){try{s.texImage2D(...arguments)}catch(k){Me("WebGLState:",k)}}function Mt(){try{s.texImage3D(...arguments)}catch(k){Me("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function zt(k){bt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Ot(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(k);Pt===void 0&&(Pt=s.getUniformBlockIndex(Ut,k.name),Tt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(s.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,xt={},g={},x=new WeakMap,y=[],T=null,R=!1,M=null,S=null,z=null,L=null,N=null,B=null,I=null,P=new Re(0,0,0),j=0,C=!1,w=null,X=null,rt=null,at=null,dt=null,gt.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ut,disable:wt,bindFramebuffer:Vt,drawBuffers:It,useProgram:de,setBlending:pe,setMaterial:Ce,setFlipSided:se,setCullFace:Je,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:ye,activeTexture:Le,bindTexture:qt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Et,viewport:zt,reset:le}}function k1(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qt,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,E){return y?new OffscreenCanvas(D,E):rl("canvas")}function R(D,E,W){let ht=1;const vt=qt(D);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);g===void 0&&(g=T(lt,Zt));const Rt=E?T(lt,Zt):g;return Rt.width=lt,Rt.height=Zt,Rt.getContext("2d").drawImage(D,0,0,lt,Zt),ie("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Zt+")."),Rt}else return"data"in D&&ie("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function M(D){return D.generateMipmaps}function S(D){s.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,E,W,ht,vt=!1){if(D!==null){if(s[D]!==void 0)return s[D];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=E;if(E===s.RED&&(W===s.FLOAT&&(lt=s.R32F),W===s.HALF_FLOAT&&(lt=s.R16F),W===s.UNSIGNED_BYTE&&(lt=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(lt=s.R8UI),W===s.UNSIGNED_SHORT&&(lt=s.R16UI),W===s.UNSIGNED_INT&&(lt=s.R32UI),W===s.BYTE&&(lt=s.R8I),W===s.SHORT&&(lt=s.R16I),W===s.INT&&(lt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(lt=s.RG32F),W===s.HALF_FLOAT&&(lt=s.RG16F),W===s.UNSIGNED_BYTE&&(lt=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(lt=s.RG8UI),W===s.UNSIGNED_SHORT&&(lt=s.RG16UI),W===s.UNSIGNED_INT&&(lt=s.RG32UI),W===s.BYTE&&(lt=s.RG8I),W===s.SHORT&&(lt=s.RG16I),W===s.INT&&(lt=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),W===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),W===s.UNSIGNED_INT&&(lt=s.RGB32UI),W===s.BYTE&&(lt=s.RGB8I),W===s.SHORT&&(lt=s.RGB16I),W===s.INT&&(lt=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),W===s.UNSIGNED_INT&&(lt=s.RGBA32UI),W===s.BYTE&&(lt=s.RGBA8I),W===s.SHORT&&(lt=s.RGBA16I),W===s.INT&&(lt=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(lt=s.R11F_G11F_B10F)),E===s.RGBA){const Zt=vt?nc:Te.getTransfer(ht);W===s.FLOAT&&(lt=s.RGBA32F),W===s.HALF_FLOAT&&(lt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(lt=Zt===Fe?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function N(D,E){let W;return D?E===null||E===Xi||E===al?W=s.DEPTH24_STENCIL8:E===Fi?W=s.DEPTH32F_STENCIL8:E===il&&(W=s.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===al?W=s.DEPTH_COMPONENT24:E===Fi?W=s.DEPTH_COMPONENT32F:E===il&&(W=s.DEPTH_COMPONENT16),W}function B(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),j(E),E.isVideoTexture&&_.delete(E)}function P(D){const E=D.target;E.removeEventListener("dispose",P),w(E)}function j(D){const E=r.get(D);if(E.__webglInit===void 0)return;const W=D.source,ht=x.get(W);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(D),Object.keys(ht).length===0&&x.delete(W)}r.remove(D)}function C(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const W=D.source,ht=x.get(W);delete ht[E.__cacheKey],h.memory.textures--}function w(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)s.deleteFramebuffer(E.__webglFramebuffer[ht]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=D.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=r.get(W[ht]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(W[ht])}r.remove(D)}let X=0;function rt(){X=0}function at(){const D=X;return D>=l.maxTextures&&ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),X+=1,D}function dt(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ct(D,E){const W=r.get(D);if(D.isVideoTexture&&ye(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const ht=D.image;if(ht===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,D,E);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function O(D,E){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,E);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function H(D,E){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,E);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function it(D,E){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ut(W,D,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const yt={[pd]:s.REPEAT,[ma]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},xt={[Cn]:s.NEAREST,[Dy]:s.NEAREST_MIPMAP_NEAREST,[Tu]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[yh]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},U={[Oy]:s.NEVER,[Iy]:s.ALWAYS,[Py]:s.LESS,[op]:s.LEQUAL,[zy]:s.EQUAL,[lp]:s.GEQUAL,[By]:s.GREATER,[Fy]:s.NOTEQUAL};function nt(D,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===yh||E.magFilter===Tu||E.magFilter===Ur||E.minFilter===_n||E.minFilter===yh||E.minFilter===Tu||E.minFilter===Ur)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,yt[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,yt[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,yt[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,xt[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Tu&&E.minFilter!==Ur||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function gt(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const lt=dt(E);if(lt!==D.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const Zt=vt[D.__cacheKey];Zt!==void 0&&(vt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(E)),D.__cacheKey=lt,D.__webglTexture=vt[lt].texture}return W}function bt(D,E,W){return Math.floor(Math.floor(D/W)/E)}function Ft(D,E,W,ht){const lt=D.updateRanges;if(lt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,ht,E.data);else{lt.sort((Mt,Et)=>Mt.start-Et.start);let Zt=0;for(let Mt=1;Mt<lt.length;Mt++){const Et=lt[Zt],zt=lt[Mt],Ot=Et.start+Et.count,Ct=bt(zt.start,E.width,4),le=bt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===le&&bt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++Zt,lt[Zt]=zt)}lt.length=Zt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){const zt=lt[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%E.width,k=Math.floor(Ot/E.width),Ut=Ct,Tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,le,k,Ut,Tt,W,ht,E.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function et(D,E,W){let ht=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=s.TEXTURE_3D);const vt=gt(D,E),lt=E.source;i.bindTexture(ht,D.__webglTexture,s.TEXTURE0+W);const Zt=r.get(lt);if(lt.version!==Zt.__version||vt===!0){i.activeTexture(s.TEXTURE0+W);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===nr?null:Te.getPrimaries(E.colorSpace),ee=E.colorSpace===nr||Rt===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Le(E,Mt);const Et=u.convert(E.format,E.colorSpace),zt=u.convert(E.type);let Ot=L(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);nt(ht,E);let Ct;const le=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Zt.__version===void 0||vt===!0,Tt=lt.dataReady,Pt=B(E,Mt);if(E.isDepthTexture)Ot=N(E.format===Lr,E.type),Ut&&(k?i.texStorage2D(s.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){k&&Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?Tt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Tt&&Ft(E,Mt,Et,zt)):i.texImage2D(s.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],E.format!==Di)if(Et!==null)if(k){if(Tt)if(E.layerUpdates.size>0){const At=z_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const Oe=Ct.data.subarray(ne*At/Ct.data.BYTES_PER_ELEMENT,(ne+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,ne,Ct.width,Ct.height,1,Et,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],E.format!==Di?Et!==null?k?Tt&&i.compressedTexSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const St=z_(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(s.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(s.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(s.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(k&&Ut){const St=qt(le[0]);i.texStorage2D(s.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?Tt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(s.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(k){if(Ut){const St=qt(Mt);i.texStorage2D(s.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Ot,Et,zt,Mt);M(E)&&S(ht),Zt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ut(D,E,W){if(E.image.length!==6)return;const ht=gt(D,E),vt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+W);const lt=r.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(s.TEXTURE0+W);const Zt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===nr?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===nr||Zt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=R(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Le(E,Et[_t]);const zt=Et[0],Ot=u.convert(E.format,E.colorSpace),Ct=u.convert(E.type),le=L(E.internalFormat,Ot,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ht===!0,Tt=vt.dataReady;let Pt=B(E,zt);nt(s.TEXTURE_CUBE_MAP,E);let St;if(ee){k&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];E.format!==Di?Ot!==null?k?Tt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,Ct,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Ot,Ct,ne.data)}}}else{if(St=E.mipmaps,k&&Ut){St.length>0&&Pt++;const _t=qt(Et[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const Oe=St[At].image[_t].image;k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Oe.width,Oe.height,Ot,Ct,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Oe.width,Oe.height,0,Ot,Ct,Oe.data)}}else{k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];k?Tt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ne.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ne.image[_t])}}}M(E)&&S(s.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function wt(D,E,W,ht,vt,lt){const Zt=u.convert(W.format,W.colorSpace),Rt=u.convert(W.type),Xt=L(W.internalFormat,Zt,Rt,W.colorSpace),ee=r.get(E),Mt=r.get(W);if(Mt.__renderTarget=E,!ee.__hasExternalTextures){const Et=Math.max(1,E.width>>lt),zt=Math.max(1,E.height>>lt);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,E.depth,0,Zt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,Zt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),Ye(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,G(E)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,vt,Mt.__webglTexture,lt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(D,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=N(E.stencilBuffer,vt),Zt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),lt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),lt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,lt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Zt,s.RENDERBUFFER,D)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],Zt=u.convert(lt.format,lt.colorSpace),Rt=u.convert(lt.type),Xt=L(lt.internalFormat,Zt,Rt,lt.colorSpace);Ye(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),Xt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),Xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(D,E,W){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,E.depthTexture);const ee=u.convert(E.depthTexture.format),Mt=u.convert(E.depthTexture.type);let Et;E.depthTexture.format===ya?Et=s.DEPTH_COMPONENT24:E.depthTexture.format===Lr&&(Et=s.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ee,Mt,null)}}else ct(E.depthTexture,0);const lt=vt.__webglTexture,Zt=G(E),Rt=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Xt=E.depthTexture.format===Lr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Ye(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xt,Rt,lt,0,Zt):s.framebufferTexture2D(s.FRAMEBUFFER,Xt,Rt,lt,0);else if(E.depthTexture.format===Lr)Ye(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xt,Rt,lt,0,Zt):s.framebufferTexture2D(s.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function de(D){const E=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)It(E.__webglFramebuffer[ht],D,ht);else{const ht=D.texture.mipmaps;ht&&ht.length>0?It(E.__webglFramebuffer[0],D,0):It(E.__webglFramebuffer,D,0)}else if(W){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[ht],D,!1);else{const vt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,lt)}}else{const ht=D.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,lt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(D,E,W){const ht=r.get(D);E!==void 0&&wt(ht.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&de(D)}function _e(D){const E=D.texture,W=r.get(D),ht=r.get(E);D.addEventListener("dispose",P);const vt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=E.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=s.createFramebuffer()}else W.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=r.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&Ye(D)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const ee=u.convert(Xt.format,Xt.colorSpace),Mt=u.convert(Xt.type),Et=L(Xt.internalFormat,ee,Mt,Xt.colorSpace,D.isXRRenderTarget===!0),zt=G(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Et,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){i.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(s.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Rt][Xt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(W.__webglFramebuffer[Rt],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],Mt=r.get(ee);let Et=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),nt(Et,ee),wt(W.__webglFramebuffer,D,ee,s.COLOR_ATTACHMENT0+Rt,Et,0),M(ee)&&S(Et)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Rt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),nt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Xt],D,E,s.COLOR_ATTACHMENT0,Rt,Xt);else wt(W.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,Rt,0);M(E)&&S(Rt),i.unbindTexture()}D.depthBuffer&&de(D)}function pe(D){const E=D.textures;for(let W=0,ht=E.length;W<ht;W++){const vt=E[W];if(M(vt)){const lt=z(D),Zt=r.get(vt).__webglTexture;i.bindTexture(lt,Zt),S(lt),i.unbindTexture()}}}const Ce=[],se=[];function Je(D){if(D.samples>0){if(Ye(D)===!1){const E=D.textures,W=D.width,ht=D.height;let vt=s.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=r.get(D),Rt=E.length>1;if(Rt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=D.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(E[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,s.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(s.COLOR_ATTACHMENT0+ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ce.push(lt),se.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(E[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Ye(D){const E=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Le(D,E){const W=D.colorSpace,ht=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Gs&&W!==nr&&(Te.getTransfer(W)===Fe?(ht!==Di||vt!==gi)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",W)),E}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=ct,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Qe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function W1(s,t){function i(r,l=nr){let u;const h=Te.getTransfer(l);if(r===gi)return s.UNSIGNED_BYTE;if(r===np)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ip)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gv)return s.BYTE;if(r===_v)return s.SHORT;if(r===il)return s.UNSIGNED_SHORT;if(r===ep)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Sa)return s.HALF_FLOAT;if(r===Sv)return s.ALPHA;if(r===yv)return s.RGB;if(r===Di)return s.RGBA;if(r===ya)return s.DEPTH_COMPONENT;if(r===Lr)return s.DEPTH_STENCIL;if(r===Mv)return s.RED;if(r===ap)return s.RED_INTEGER;if(r===Hs)return s.RG;if(r===rp)return s.RG_INTEGER;if(r===sp)return s.RGBA_INTEGER;if(r===Qu||r===Ju||r===$u||r===tc)if(h===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ju)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===_d||r===vd||r===xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===yd||r===Md||r===Ed||r===Td||r===bd||r===Ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sd||r===yd)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ed)return u.COMPRESSED_R11_EAC;if(r===Td)return u.COMPRESSED_SIGNED_R11_EAC;if(r===bd)return u.COMPRESSED_RG11_EAC;if(r===Ad)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===zd||r===Bd||r===Fd||r===Id||r===Hd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Id)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gd||r===Vd||r===Xd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Gd)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kd||r===Wd||r===qd||r===Yd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===kd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ki({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ni(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends ks{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,T=null;const R=typeof XRWebGLBinding<"u",M=new Z1,S={},z=i.getContextAttributes();let L=null,N=null;const B=[],I=[],P=new Qt;let j=null;const C=new mi;C.viewport=new an;const w=new mi;w.viewport=new an;const X=[C,w],rt=new aE;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=B[et];return ut===void 0&&(ut=new Vh,B[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=B[et];return ut===void 0&&(ut=new Vh,B[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=B[et];return ut===void 0&&(ut=new Vh,B[et]=ut),ut.getHandSpace()};function ct(et){const ut=I.indexOf(et.inputSource);if(ut===-1)return;const wt=B[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function O(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",H);for(let et=0;et<B.length;et++){const ut=I[et];ut!==null&&(I[et]=null,B[et].disconnect(ut))}at=null,dt=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(L),y=null,x=null,g=null,l=null,N=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",O),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,It=null;z.depth&&(It=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=z.stencil?Lr:ya,Vt=z.stencil?al:Xi);const de={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(de),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Gi(x.textureWidth,x.textureHeight,{format:Di,type:gi,depthTexture:new ll(x.textureWidth,x.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Di,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],Vt=I.indexOf(wt);Vt>=0&&(I[Vt]=null,B[Vt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let Vt=I.indexOf(wt);if(Vt===-1){for(let de=0;de<B.length;de++)if(de>=I.length){I.push(wt),Vt=de;break}else if(I[de]===null){I[de]=wt,Vt=de;break}if(Vt===-1)break}const It=B[Vt];It&&It.connect(wt)}}const it=new q,yt=new q;function xt(et,ut,wt){it.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Vt=it.distanceTo(yt),It=ut.projectionMatrix.elements,de=wt.projectionMatrix.elements,Qe=It[14]/(It[10]-1),_e=It[14]/(It[10]+1),pe=(It[9]+1)/It[5],Ce=(It[9]-1)/It[5],se=(It[8]-1)/It[0],Je=(de[8]+1)/de[0],G=Qe*se,Ye=Qe*Je,ye=Vt/(-se+Je),Le=ye*-se;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=Qe+ye,D=_e+ye,E=G-Le,W=Ye+(Vt-Le),ht=pe*_e/D*qt,vt=Ce*_e/D*qt;et.projectionMatrix.makePerspective(E,W,ht,vt,qt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ut=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),rt.near=w.near=C.near=ut,rt.far=w.far=C.far=wt,(at!==rt.near||dt!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),at=rt.near,dt=rt.far),rt.layers.mask=et.layers.mask|6,C.layers.mask=rt.layers.mask&3,w.layers.mask=rt.layers.mask&5;const Vt=et.parent,It=rt.cameras;U(rt,Vt);for(let de=0;de<It.length;de++)U(It[de],Vt);It.length===2?xt(rt,C,w):rt.projectionMatrix.copy(C.projectionMatrix),nt(et,rt,Vt)};function nt(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ol*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function(et){return S[et]};let gt=null;function bt(et,ut){if(_=ut.getViewerPose(p||h),T=ut,_!==null){const wt=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let Vt=!1;wt.length!==rt.cameras.length&&(rt.cameras.length=0,Vt=!0);for(let _e=0;_e<wt.length;_e++){const pe=wt[_e];let Ce=null;if(y!==null)Ce=y.getViewport(pe);else{const Je=g.getViewSubImage(x,pe);Ce=Je.viewport,_e===0&&(t.setRenderTargetTextures(N,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(N))}let se=X[_e];se===void 0&&(se=new mi,se.layers.enable(_e),se.viewport=new an,X[_e]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),_e===0&&(rt.matrix.copy(se.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Vt===!0&&rt.cameras.push(se)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const _e=g.getDepthInformation(wt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(It&&It.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let _e=0;_e<wt.length;_e++){const pe=wt[_e].camera;if(pe){let Ce=S[pe];Ce||(Ce=new zv,S[pe]=Ce);const se=g.getCameraImage(pe);Ce.sourceTexture=se}}}}for(let wt=0;wt<B.length;wt++){const Vt=I[wt],It=B[wt];Vt!==null&&It!==void 0&&It.update(Vt,ut,p||h)}gt&&gt(et,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Ft=new Hv;Ft.setAnimationLoop(bt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Rr=new Ma,j1=new je;function Q1(s,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,Cv(s)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,z,L,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(M,S):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),_(M,S)):S.isMeshStandardMaterial?(u(M,S),x(M,S),S.isMeshPhysicalMaterial&&y(M,S,N)):S.isMeshMatcapMaterial?(u(M,S),T(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),R(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,z,L):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const z=t.get(S),L=z.envMap,N=z.envMapRotation;L&&(M.envMap.value=L,Rr.copy(N),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),M.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Rr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,z,L){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*z,M.scale.value=L*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,z){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const z=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function J1(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const N=L.program;r.uniformBlockBinding(z,N)}function p(z,L){let N=l[z.id];N===void 0&&(T(z),N=_(z),l[z.id]=N,z.addEventListener("dispose",M));const B=L.program;r.updateUBOMapping(z,B);const I=t.render.frame;u[z.id]!==I&&(x(z),u[z.id]=I)}function _(z){const L=g();z.__bindingPointIndex=L;const N=s.createBuffer(),B=z.__size,I=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const L=l[z.id],N=z.uniforms,B=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let I=0,P=N.length;I<P;I++){const j=Array.isArray(N[I])?N[I]:[N[I]];for(let C=0,w=j.length;C<w;C++){const X=j[C];if(y(X,I,C,B)===!0){const rt=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let dt=0;for(let ct=0;ct<at.length;ct++){const O=at[ct],H=R(O);typeof O=="number"||typeof O=="boolean"?(X.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,rt+dt,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=0,X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=0,X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=0):(O.toArray(X.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(z,L,N,B){const I=z.value,P=L+"_"+N;if(B[P]===void 0)return typeof I=="number"||typeof I=="boolean"?B[P]=I:B[P]=I.clone(),!0;{const j=B[P];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return B[P]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function T(z){const L=z.uniforms;let N=0;const B=16;for(let P=0,j=L.length;P<j;P++){const C=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,X=C.length;w<X;w++){const rt=C[w],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let dt=0,ct=at.length;dt<ct;dt++){const O=at[dt],H=R(O),it=N%B,yt=it%H.boundary,xt=it+yt;N+=yt,xt!==0&&B-xt<H.storage&&(N+=B-xt),rt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=N,N+=H.storage}}}const I=N%B;return I>0&&(N+=B-I),z.__size=N,z.__cache={},this}function R(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",z),L}function M(z){const L=z.target;L.removeEventListener("dispose",M);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function S(){for(const z in l)s.deleteBuffer(l[z]);h=[],l={},u={}}return{bind:m,update:p,dispose:S}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function tR(){return zi===null&&(zi=new DM($1,16,16,Hs,Sa),zi.name="DFG_LUT",zi.minFilter=_n,zi.magFilter=_n,zi.wrapS=ma,zi.wrapT=ma,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class eR{constructor(t={}){const{canvas:i=Hy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=gi}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const R=y,M=new Set([sp,rp,ap]),S=new Set([gi,Xi,il,al,np,ip]),z=new Uint32Array(4),L=new Int32Array(4);let N=null,B=null;const I=[],P=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=ti;let X=0,rt=0,at=null,dt=-1,ct=null;const O=new an,H=new an;let it=null;const yt=new Re(0);let xt=0,U=i.width,nt=i.height,gt=1,bt=null,Ft=null;const et=new an(0,0,U,nt),ut=new an(0,0,U,nt);let wt=!1;const Vt=new Ov;let It=!1,de=!1;const Qe=new je,_e=new q,pe=new an,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Je(){return at===null?gt:1}let G=r;function Ye(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Oe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const Y="webgl2";if(G=Ye(Y,A),G===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Me("WebGLRenderer: "+A.message),A}let ye,Le,qt,D,E,W,ht,vt,lt,Zt,Rt,Xt,ee,Mt,Et,zt,Ot,Ct,le,k,Ut,Tt,Pt,St;function _t(){ye=new tA(G),ye.init(),Tt=new W1(G,ye),Le=new Wb(G,ye,t,Tt),qt=new X1(G,ye),Le.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),D=new iA(G),E=new C1,W=new k1(G,ye,qt,E,Le,Tt,D),ht=new Yb(C),vt=new $b(C),lt=new oE(G),Pt=new Xb(G,lt),Zt=new eA(G,lt,D,Pt),Rt=new rA(G,Zt,lt,D),le=new aA(G,Le,W),zt=new qb(E),Xt=new R1(C,ht,vt,ye,Le,Pt,zt),ee=new Q1(C,E),Mt=new D1,Et=new z1(ye),Ct=new Vb(C,ht,vt,qt,Rt,T,m),Ot=new G1(C,Rt,Le),St=new J1(G,D,Le,qt),k=new kb(G,ye,D),Ut=new nA(G,ye,D),D.programs=Xt.programs,C.capabilities=Le,C.extensions=ye,C.properties=E,C.renderLists=Mt,C.shadowMap=Ot,C.state=qt,C.info=D}_t(),R!==gi&&(j=new oA(R,i.width,i.height,l,u));const At=new K1(C,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(A){A!==void 0&&(gt=A,this.setSize(U,nt,!1))},this.getSize=function(A){return A.set(U,nt)},this.setSize=function(A,Y,st=!0){if(At.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,nt=Y,i.width=Math.floor(A*gt),i.height=Math.floor(Y*gt),st===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(U*gt,nt*gt).floor()},this.setDrawingBufferSize=function(A,Y,st){U=A,nt=Y,gt=st,i.width=Math.floor(A*st),i.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,Y,st,$){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,Y,st,$),qt.viewport(O.copy(et).multiplyScalar(gt).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,Y,st,$){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,Y,st,$),qt.scissor(H.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){qt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Ft=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,st=!0){let $=0;if(A){let K=!1;if(at!==null){const Dt=at.texture.format;K=M.has(Dt)}if(K){const Dt=at.texture.type,Bt=S.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Lt.r,Jt=Lt.g,Wt=Lt.b;Bt?(z[0]=kt,z[1]=Jt,z[2]=Wt,z[3]=Ht,G.clearBufferuiv(G.COLOR,0,z)):(L[0]=kt,L[1]=Jt,L[2]=Wt,L[3]=Ht,G.clearBufferiv(G.COLOR,0,L))}else $|=G.COLOR_BUFFER_BIT}Y&&($|=G.DEPTH_BUFFER_BIT),st&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Oe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",zr),At.removeEventListener("sessionend",Ks),Ui.stop()};function ne(A){A.preventDefault(),ac("WebGLRenderer: Context Lost."),w=!0}function Oe(){ac("WebGLRenderer: Context Restored."),w=!1;const A=D.autoReset,Y=Ot.enabled,st=Ot.autoUpdate,$=Ot.needsUpdate,K=Ot.type;_t(),D.autoReset=A,Ot.enabled=Y,Ot.autoUpdate=st,Ot.needsUpdate=$,Ot.type=K}function Ee(A){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dn(A){const Y=A.target;Y.removeEventListener("dispose",Dn),xi(Y)}function xi(A){dl(A),E.remove(A)}function dl(A){const Y=E.get(A).programs;Y!==void 0&&(Y.forEach(function(st){Xt.releaseProgram(st)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,$,K,Dt){Y===null&&(Y=Ce);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=ar(A,Y,st,$,K);qt.setMaterial($,Bt);let Ht=st.index,kt=1;if($.wireframe===!0){if(Ht=Zt.getWireframeAttribute(st),Ht===void 0)return;kt=2}const Jt=st.drawRange,Wt=st.attributes.position;let $t=Jt.start*kt,we=(Jt.start+Jt.count)*kt;Dt!==null&&($t=Math.max($t,Dt.start*kt),we=Math.min(we,(Dt.start+Dt.count)*kt)),Ht!==null?($t=Math.max($t,0),we=Math.min(we,Ht.count)):Wt!=null&&($t=Math.max($t,0),we=Math.min(we,Wt.count));const Ze=we-$t;if(Ze<0||Ze===1/0)return;Pt.setup(K,$,Lt,st,Ht);let ke,Ne=k;if(Ht!==null&&(ke=lt.get(Ht),Ne=Ut,Ne.setIndex(ke)),K.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*Je()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(K.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*Je()),K.isLineSegments?Ne.setMode(G.LINES):K.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else K.isPoints?Ne.setMode(G.POINTS):K.isSprite&&Ne.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ne.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,De=K._multiDrawCounts,ae=K._multiDrawCount,xn=Ht?lt.get(Ht).bytesPerElement:1,Wi=E.get($).currentProgram.getUniforms();for(let Sn=0;Sn<ae;Sn++)Wi.setValue(G,"_gl_DrawID",Sn),Ne.render(Kt[Sn]/xn,De[Sn])}else if(K.isInstancedMesh)Ne.renderInstances($t,Ze,K.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,Kt);Ne.renderInstances($t,Ze,De)}else Ne.render($t,Ze)};function Ys(A,Y,st){A.transparent===!0&&A.side===pa&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Fr(A,Y,st),A.side=Vi,A.needsUpdate=!0,Fr(A,Y,st),A.side=pa):Fr(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),B=Et.get(st),B.init(Y),P.push(B),st.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),A!==st&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),B.setupLights();const $=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Lt=Dt[Bt];Ys(Lt,st,K),$.add(Lt)}else Ys(Dt,st,K),$.add(Dt)}),B=P.pop(),$},this.compileAsync=function(A,Y,st=null){const $=this.compile(A,Y,st);return new Promise(K=>{function Dt(){if($.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){K(A);return}setTimeout(Dt,10)}ye.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Pr=null;function Zs(A){Pr&&Pr(A)}function zr(){Ui.stop()}function Ks(){Ui.start()}const Ui=new Hv;Ui.setAnimationLoop(Zs),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){Pr=A,At.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},At.addEventListener("sessionstart",zr),At.addEventListener("sessionend",Ks),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,$=j!==null&&(at===null||st)&&j.begin(C,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,at),B=Et.get(A,P.length),B.init(Y),P.push(B),Qe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Vt.setFromProjectionMatrix(Qe,Ii,Y.reversedDepth),de=this.localClippingEnabled,It=zt.init(this.clippingPlanes,de),N=Mt.get(A,I.length),N.init(),I.push(N),At.enabled===!0&&At.isPresenting===!0){const Bt=C.xr.getDepthSensingMesh();Bt!==null&&ai(Bt,Y,-1/0,C.sortObjects)}ai(A,Y,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(bt,Ft),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Ct.addToRenderList(N,A),this.info.render.frame++,It===!0&&zt.beginShadows();const K=B.state.shadowsArray;if(Ot.render(K,A,Y),It===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&j.hasRenderPass())===!1){const Bt=N.opaque,Lt=N.transmissive;if(B.setupLights(),Y.isArrayCamera){const Ht=Y.cameras;if(Lt.length>0)for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt];vn(Bt,Lt,A,Wt)}se&&Ct.render(A);for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt];rn(N,A,Wt,Wt.viewport)}}else Lt.length>0&&vn(Bt,Lt,A,Y),se&&Ct.render(A),rn(N,A,Y)}at!==null&&rt===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),$&&j.end(C),A.isScene===!0&&A.onAfterRender(C,A,Y),Pt.resetDefaultState(),dt=-1,ct=null,P.pop(),P.length>0?(B=P[P.length-1],It===!0&&zt.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function ai(A,Y,st,$){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Vt.intersectsSprite(A)){$&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qe);const Bt=Rt.update(A),Lt=A.material;Lt.visible&&N.push(A,Bt,Lt,st,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Vt.intersectsObject(A))){const Bt=Rt.update(A),Lt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pe.copy(Bt.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(Qe)),Array.isArray(Lt)){const Ht=Bt.groups;for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt],$t=Lt[Wt.materialIndex];$t&&$t.visible&&N.push(A,Bt,$t,st,pe.z,Wt)}}else Lt.visible&&N.push(A,Bt,Lt,st,pe.z,null)}}const Dt=A.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)ai(Dt[Bt],Y,st,$)}function rn(A,Y,st,$){const{opaque:K,transmissive:Dt,transparent:Bt}=A;B.setupLightsView(st),It===!0&&zt.setGlobalState(C.clippingPlanes,st),$&&qt.viewport(O.copy($)),K.length>0&&Si(K,Y,st),Dt.length>0&&Si(Dt,Y,st),Bt.length>0&&Si(Bt,Y,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function vn(A,Y,st,$){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[$.id]===void 0){const $t=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[$.id]=new Gi(1,1,{generateMipmaps:!0,type:$t?Sa:gi,minFilter:Ur,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=B.state.transmissionRenderTarget[$.id],Bt=$.viewport||O;Dt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(yt),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),se&&Ct.render(st);const Jt=C.toneMapping;C.toneMapping=Hi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),B.setupLightsView($),It===!0&&zt.setGlobalState(C.clippingPlanes,$),Si(A,st,$),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let we=0,Ze=Y.length;we<Ze;we++){const ke=Y[we],{object:Ne,geometry:Kt,material:De,group:ae}=ke;if(De.side===pa&&Ne.layers.test($.layers)){const xn=De.side;De.side=kn,De.needsUpdate=!0,Br(Ne,st,$,Kt,De,ae),De.side=xn,De.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Lt,Ht,kt),C.setClearColor(yt,xt),Wt!==void 0&&($.viewport=Wt),C.toneMapping=Jt}function Si(A,Y,st){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Dt=A.length;K<Dt;K++){const Bt=A[K],{object:Lt,geometry:Ht,group:kt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),Lt.layers.test(st.layers)&&Br(Lt,Y,st,Ht,Jt,kt)}}function Br(A,Y,st,$,K,Dt){A.onBeforeRender(C,Y,st,$,K,Dt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(C,Y,st,$,A,Dt),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,C.renderBufferDirect(st,Y,$,K,A,Dt),K.side=Vi,K.needsUpdate=!0,C.renderBufferDirect(st,Y,$,K,A,Dt),K.side=pa):C.renderBufferDirect(st,Y,$,K,A,Dt),A.onAfterRender(C,Y,st,$,K,Dt)}function Fr(A,Y,st){Y.isScene!==!0&&(Y=Ce);const $=E.get(A),K=B.state.lights,Dt=B.state.shadowsArray,Bt=K.state.version,Lt=Xt.getParameters(A,K.state,Dt,Y,st),Ht=Xt.getProgramCacheKey(Lt);let kt=$.programs;$.environment=A.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(A.isMeshStandardMaterial?vt:ht).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Dn),kt=new Map,$.programs=kt);let Jt=kt.get(Ht);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Bt)return js(A,Lt),Jt}else Lt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Lt,C),Jt=Xt.acquireProgram(Lt,Ht),kt.set(Ht,Jt),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),js(A,Lt),$.needsLights=Ta(A),$.lightsStateVersion=Bt,$.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function pl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=ec.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function js(A,Y){const st=E.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function ar(A,Y,st,$,K){Y.isScene!==!0&&(Y=Ce),W.resetTextureUnits();const Dt=Y.fog,Bt=$.isMeshStandardMaterial?Y.environment:null,Lt=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Gs,Ht=($.isMeshStandardMaterial?vt:ht).get($.envMap||Bt),kt=$.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let Ze=Hi;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=C.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=ke!==void 0?ke.length:0,Kt=E.get($),De=B.state.lights;if(It===!0&&(de===!0||A!==ct)){const Mn=A===ct&&$.id===dt;zt.setState($,A,Mn)}let ae=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==De.state.version||Kt.outputColorSpace!==Lt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==Ht||$.fog===!0&&Kt.fog!==Dt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==zt.numPlanes||Kt.numIntersection!==zt.numIntersection)||Kt.vertexAlphas!==kt||Kt.vertexTangents!==Jt||Kt.morphTargets!==Wt||Kt.morphNormals!==$t||Kt.morphColors!==we||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Ne)&&(ae=!0):(ae=!0,Kt.__version=$.version);let xn=Kt.currentProgram;ae===!0&&(xn=Fr($,Y,K));let Wi=!1,Sn=!1,ri=!1;const Pe=xn.getUniforms(),yn=Kt.uniforms;if(qt.useProgram(xn.program)&&(Wi=!0,Sn=!0,ri=!0),$.id!==dt&&(dt=$.id,Sn=!0),Wi||ct!==A){qt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",A.projectionMatrix),Pe.setValue(G,"viewMatrix",A.matrixWorldInverse);const En=Pe.map.cameraPosition;En!==void 0&&En.setValue(G,_e.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ct!==A&&(ct=A,Sn=!0,ri=!0)}if(Kt.needsLights&&(De.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),K.isSkinnedMesh){Pe.setOptional(G,K,"bindMatrix"),Pe.setOptional(G,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pe.setValue(G,"boneTexture",Mn.boneTexture,W))}K.isBatchedMesh&&(Pe.setOptional(G,K,"batchingTexture"),Pe.setValue(G,"batchingTexture",K._matricesTexture,W),Pe.setOptional(G,K,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",K._indirectTexture,W),Pe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",K._colorsTexture,W));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&le.update(K,st,xn),(Sn||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,Pe.setValue(G,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=Ht,yn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(yn.envMapIntensity.value=Y.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=tR()),Sn&&(Pe.setValue(G,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&Qs(yn,ri),Dt&&$.fog===!0&&ee.refreshFogUniforms(yn,Dt),ee.refreshMaterialUniforms(yn,$,gt,nt,B.state.transmissionRenderTarget[A.id]),ec.upload(G,pl(Kt),yn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ec.upload(G,pl(Kt),yn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pe.setValue(G,"center",K.center),Pe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(G,"normalMatrix",K.normalMatrix),Pe.setValue(G,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Mn=$.uniformsGroups;for(let En=0,Ir=Mn.length;En<Ir;En++){const yi=Mn[En];St.update(yi,xn),St.bind(yi,xn)}}return xn}function Qs(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ta(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,Y,st){const $=E.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=Y,E.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:st,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const st=E.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const ba=G.createFramebuffer();this.setRenderTarget=function(A,Y=0,st=0){at=A,X=Y,rt=st;let $=null,K=!1,Dt=!1;if(A){const Lt=E.get(A);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),O.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest,qt.viewport(O),qt.scissor(H),qt.setScissorTest(it),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Lt.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const kt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?$=kt[Y][st]:$=kt[Y],K=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?$=E.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[st]:$=kt,O.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest}else O.copy(et).multiplyScalar(gt).floor(),H.copy(ut).multiplyScalar(gt).floor(),it=wt;if(st!==0&&($=ba),qt.bindFramebuffer(G.FRAMEBUFFER,$)&&qt.drawBuffers(A,$),qt.viewport(O),qt.scissor(H),qt.setScissorTest(it),K){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,st)}else if(Dt){const Lt=Y;for(let Ht=0;Ht<A.textures.length;Ht++){const kt=E.get(A.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,st,Lt)}}else if(A!==null&&st!==0){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}dt=-1},this.readRenderTargetPixels=function(A,Y,st,$,K,Dt,Bt,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const kt=A.textures[Lt],Jt=kt.format,Wt=kt.type;if(!Le.textureFormatReadable(Jt)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Wt)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-$&&st>=0&&st<=A.height-K&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,st,$,K,Tt.convert(Jt),Tt.convert(Wt),Dt))}finally{const kt=at!==null?E.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,$,K,Dt,Bt,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(Y>=0&&Y<=A.width-$&&st>=0&&st<=A.height-K){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const kt=A.textures[Lt],Jt=kt.format,Wt=kt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,st,$,K,Tt.convert(Jt),Tt.convert(Wt),0);const we=at!==null?E.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,we);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gy(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer($t),G.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,st=0){const $=Math.pow(2,-st),K=Math.floor(A.image.width*$),Dt=Math.floor(A.image.height*$),Bt=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Bt,Lt,K,Dt),qt.unbindTexture()};const rr=G.createFramebuffer(),Aa=G.createFramebuffer();this.copyTextureToTexture=function(A,Y,st=null,$=null,K=0,Dt=null){Dt===null&&(K!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=K,K=0):Dt=0);let Bt,Lt,Ht,kt,Jt,Wt,$t,we,Ze;const ke=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(st!==null)Bt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Jt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-K);Bt=Math.floor(ke.width*fn),Lt=Math.floor(ke.height*fn),A.isDataArrayTexture?Ht=ke.depth:A.isData3DTexture?Ht=Math.floor(ke.depth*fn):Ht=1,kt=0,Jt=0,Wt=0}$!==null?($t=$.x,we=$.y,Ze=$.z):($t=0,we=0,Ze=0);const Ne=Tt.convert(Y.format),Kt=Tt.convert(Y.type);let De;Y.isData3DTexture?(W.setTexture3D(Y,0),De=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Wi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Pe=A.isDataArrayTexture||A.isData3DTexture,yn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const fn=E.get(A),Mn=E.get(Y),En=E.get(fn.__renderTarget),Ir=E.get(Mn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let yi=0;yi<Ht;yi++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(A).__webglTexture,K,Wt+yi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Ze+yi)),G.blitFramebuffer(kt,Jt,Bt,Lt,$t,we,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||E.has(A)){const fn=E.get(A),Mn=E.get(Y);qt.bindFramebuffer(G.READ_FRAMEBUFFER,rr),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Aa);for(let En=0;En<Ht;En++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,K,Wt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,K),yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Dt,Ze+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Dt),K!==0?G.blitFramebuffer(kt,Jt,Bt,Lt,$t,we,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):yn?G.copyTexSubImage3D(De,Dt,$t,we,Ze+En,kt,Jt,Bt,Lt):G.copyTexSubImage2D(De,Dt,$t,we,kt,Jt,Bt,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(De,Dt,$t,we,Ze,Bt,Lt,Ht,Ne,Kt,ke.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Dt,$t,we,Ze,Bt,Lt,Ht,Ne,ke.data):G.texSubImage3D(De,Dt,$t,we,Ze,Bt,Lt,Ht,Ne,Kt,ke):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,$t,we,Bt,Lt,Ne,Kt,ke.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,$t,we,ke.width,ke.height,Ne,ke.data):G.texSubImage2D(G.TEXTURE_2D,Dt,$t,we,Bt,Lt,Ne,Kt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ri),Dt===0&&Y.generateMipmaps&&G.generateMipmap(De),qt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),qt.unbindTexture()},this.resetState=function(){X=0,rt=0,at=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}function nR(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),i=t.createRadialGradient(32,32,0,0,32,32);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(1,"rgba(255, 255, 255, 0.1)"),t.fillStyle=i,t.fillRect(0,0,64,64),new pp(s)}function iR({count:s=1e4,spread:t=4500,size:i=3.5}){const r=new ii,l=new Float32Array(s*3),u=new Float32Array(s*3),h=new Re;for(let d=0;d<s;d++){const m=d*3,p=Math.random()<.75,_=p?t*.45:t,g=(Math.random()-.5)*_,x=(Math.random()-.5)*_,y=(Math.random()-.5)*(_*.5);l[m]=g,l[m+1]=x,l[m+2]=y;const T=Math.sqrt(g*g+x*x+y*y),R=Math.max(.1,1-T/(t*.7)),M=(Math.random()*.6+.4)*R;p?h.setHSL(.55+Math.random()*.1,.6,M):h.set(16777215).multiplyScalar(M*.5),u[m]=h.r,u[m+1]=h.g,u[m+2]=h.b}return r.setAttribute("position",new ei(l,3)),r.setAttribute("color",new ei(u,3)),new OM(r,new Pv({size:i,map:nR(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Nr,sizeAttenuation:!0}))}function aR(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 0.15)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.02)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new pp(s)}function rR(){const s=new ga,t=aR(),i=["#1e4d8c","#430c5d","#ff6b35","#005b96"],r=250;for(let l=0;l<r;l++){const u=new dp({map:t,color:new Re(i[l%i.length]),transparent:!0,opacity:Math.random()*.3+.1,blending:Nr,depthWrite:!1}),h=new Nv(u),d=Math.random()*Math.PI*2,m=200+Math.random()*800;h.position.set(Math.cos(d)*m,Math.sin(d)*m*.6,(Math.random()-.5)*500);const p=400+Math.random()*600;h.scale.set(p,p,1),s.add(h)}return s}function sR(s=[]){const t=new ga,i=[{name:"Inner",major:400,minor:232,tiltX:36,x:0,y:0,z:-100,color:4144959},{name:"Middle",major:600,minor:366,tiltX:36,x:0,y:-100,z:-100,color:8355711},{name:"Outer",major:900,minor:528,tiltX:36,x:0,y:-230,z:-100,color:10461087}];return(s.length>0?s:i).forEach(l=>{const u=new ga,d=new mp(0,0,l.major,l.minor,0,2*Math.PI,!1,0).getPoints(128),m=new Bv(d.map(R=>new q(R.x,R.y,0)));m.closed=!0;const p=new sc(m,128,.6,8,!0),_=new Vs({color:5526612,transparent:!0,opacity:.001,blending:Nr,depthWrite:!1}),g=new ni(p,_),x=new sc(m,128,2,8,!0),y=new Vs({color:5526612,transparent:!0,opacity:.2,blending:Nr,depthWrite:!1}),T=new ni(x,y);u.position.set(l.x||0,l.y||0,l.z||0),u.rotation.x=(l.tiltX||0)*(Math.PI/180),l.tiltY&&(u.rotation.y=l.tiltY*(Math.PI/180)),l.tiltZ&&(u.rotation.z=l.tiltZ*(Math.PI/180)),u.add(g),u.add(T),t.add(u)}),t}const oR="/etherea-sponsors-page/assets/fest-logo-white-ZXw6qdGp.png",lR="/etherea-sponsors-page/assets/fest-logo-iqAWPbU1.png",Ci={width:220,height:220,tiltXDeg:30,hoverSpeed:.6,hoverScaleGrowth:1,glowScale:1.5,glowOpacity:.25,zPosition:.15};function uR(){const s=new ga,t=new iE,i=t.load(oR),r=t.load(lR);[i,r].forEach(M=>{M.minFilter=_n,M.magFilter=_n,M.colorSpace=ti});const l=new hl(Ci.width,Ci.height),u=new Vs({map:i,transparent:!0,opacity:1,depthWrite:!1,side:Vi}),h=new Vs({map:r,transparent:!0,opacity:0,depthWrite:!1,side:Vi}),d=new ni(l,u),m=new ni(l,h);m.position.z=.5,s.add(d),s.add(m);const p=cR(),_=new dp({map:p,color:16777215,transparent:!0,opacity:Ci.glowOpacity,depthWrite:!1,blending:Nr}),g=new Nv(_),x=Math.max(Ci.width,Ci.height)*Ci.glowScale;g.scale.set(x,x,1),g.position.z=-5,s.add(g),s.position.set(0,20,Ci.zPosition),s.rotation.x=aM.degToRad(Ci.tiltXDeg);let y=0,T=1;function R(M){y+=((M?1:0)-y)*Ci.hoverSpeed,d.material.opacity=1-y,m.material.opacity=y;const z=M?Ci.hoverScaleGrowth:1;T+=(z-T)*Ci.hoverSpeed,s.scale.set(T,T,1)}return{group:s,update:R}}function cR(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new pp(s)}function fR(s){const t=new CM,i=new mi(65,window.innerWidth/window.innerHeight,.1,1e4);i.position.z=800;const r=new eR({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),s.appendChild(r.domElement);const l=new rE,u=new Qt;u.x=-1e3,u.y=-1e3;function h(R){u.x=R.clientX/window.innerWidth*2-1,u.y=-(R.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",h);const d=new ga,m=rR();d.add(m);const p=iR({count:25e3,spread:4e3,size:3});d.add(p),d.position.z=-400,t.add(d);const _=sR();t.add(_);const g=uR();t.add(g.group);let x;function y(){x=requestAnimationFrame(y),d.rotation.y+=4e-4,d.rotation.z+=4e-4,m.children.forEach((S,z)=>{S.rotation.z+=5e-4*(z%2===0?1:-1)}),l.setFromCamera(u,i);const M=l.intersectObjects(g.group.children).length>0;g.update(M),r.render(t,i)}y();function T(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),window.removeEventListener("mousemove",h),cancelAnimationFrame(x),t.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&(Array.isArray(R.material)?R.material.forEach(M=>M.dispose()):R.material.dispose())}),r.dispose(),s.contains(r.domElement)&&s.removeChild(r.domElement)}}function hR(){const s=nd.useRef(null);return nd.useEffect(()=>{if(!s.current)return;const t=fR(s.current);return()=>t&&t()},[]),ed.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,overflow:"hidden",background:"black"}})}sy.createRoot(document.getElementById("root")).render(ed.jsx(JS.StrictMode,{children:ed.jsx(hR,{})}));
