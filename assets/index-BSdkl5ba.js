(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Rv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rh={exports:{}},Wo={};var p_;function my(){if(p_)return Wo;p_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var m_;function gy(){return m_||(m_=1,Rh.exports=my()),Rh.exports}var gd=gy(),Ch={exports:{}},re={};var g_;function _y(){if(g_)return re;g_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(N,nt,gt){this.props=N,this.context=nt,this.refs=M,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=v.prototype;function D(N,nt,gt){this.props=N,this.context=nt,this.refs=M,this.updater=gt||b}var U=D.prototype=new O;U.constructor=D,T(U,v.prototype),U.isPureReactComponent=!0;var B=Array.isArray;function z(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(N,nt,gt){var Tt=gt.ref;return{$$typeof:s,type:N,key:nt,ref:Tt!==void 0?Tt:null,props:gt}}function w(N,nt){return C(N.type,nt,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function rt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return nt[gt]})}var it=/\/+/g;function ht(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?rt(""+N.key):nt.toString(36)}function lt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,nt,gt,Tt,Ft){var et=typeof N;(et==="undefined"||et==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(et){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case s:case t:ut=!0;break;case _:return ut=N._init,F(ut(N._payload),nt,gt,Tt,Ft)}}if(ut)return Ft=Ft(N),ut=Tt===""?"."+ht(N,0):Tt,B(Ft)?(gt="",ut!=null&&(gt=ut.replace(it,"$&/")+"/"),F(Ft,nt,gt,"",function(It){return It})):Ft!=null&&(V(Ft)&&(Ft=w(Ft,gt+(Ft.key==null||N&&N.key===Ft.key?"":(""+Ft.key).replace(it,"$&/")+"/")+ut)),nt.push(Ft)),1;ut=0;var wt=Tt===""?".":Tt+":";if(B(N))for(var Vt=0;Vt<N.length;Vt++)Tt=N[Vt],et=wt+ht(Tt,Vt),ut+=F(Tt,nt,gt,et,Ft);else if(Vt=y(N),typeof Vt=="function")for(N=Vt.call(N),Vt=0;!(Tt=N.next()).done;)Tt=Tt.value,et=wt+ht(Tt,Vt++),ut+=F(Tt,nt,gt,et,Ft);else if(et==="object"){if(typeof N.then=="function")return F(lt(N),nt,gt,Tt,Ft);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(N,nt,gt){if(N==null)return N;var Tt=[],Ft=0;return F(N,Tt,"","",function(et){return nt.call(gt,et,Ft++)}),Tt}function at(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:H,forEach:function(N,nt,gt){H(N,function(){nt.apply(this,arguments)},gt)},count:function(N){var nt=0;return H(N,function(){nt++}),nt},toArray:function(N){return H(N,function(nt){return nt})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=g,re.Children=xt,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=D,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,nt,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=T({},N.props),Ft=N.key;if(nt!=null)for(et in nt.key!==void 0&&(Ft=""+nt.key),nt)!j.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(Tt[et]=nt[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ut=Array(et),wt=0;wt<et;wt++)ut[wt]=arguments[wt+2];Tt.children=ut}return C(N.type,Ft,Tt)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,nt,gt){var Tt,Ft={},et=null;if(nt!=null)for(Tt in nt.key!==void 0&&(et=""+nt.key),nt)j.call(nt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ft[Tt]=nt[Tt]);var ut=arguments.length-2;if(ut===1)Ft.children=gt;else if(1<ut){for(var wt=Array(ut),Vt=0;Vt<ut;Vt++)wt[Vt]=arguments[Vt+2];Ft.children=wt}if(N&&N.defaultProps)for(Tt in ut=N.defaultProps,ut)Ft[Tt]===void 0&&(Ft[Tt]=ut[Tt]);return C(N,et,Ft)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=V,re.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:at}},re.memo=function(N,nt){return{$$typeof:p,type:N,compare:nt===void 0?null:nt}},re.startTransition=function(N){var nt=P.T,gt={};P.T=gt;try{var Tt=N(),Ft=P.S;Ft!==null&&Ft(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(z,yt)}catch(et){yt(et)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),P.T=nt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(N){return P.H.use(N)},re.useActionState=function(N,nt,gt){return P.H.useActionState(N,nt,gt)},re.useCallback=function(N,nt){return P.H.useCallback(N,nt)},re.useContext=function(N){return P.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,nt){return P.H.useDeferredValue(N,nt)},re.useEffect=function(N,nt){return P.H.useEffect(N,nt)},re.useEffectEvent=function(N){return P.H.useEffectEvent(N)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(N,nt,gt){return P.H.useImperativeHandle(N,nt,gt)},re.useInsertionEffect=function(N,nt){return P.H.useInsertionEffect(N,nt)},re.useLayoutEffect=function(N,nt){return P.H.useLayoutEffect(N,nt)},re.useMemo=function(N,nt){return P.H.useMemo(N,nt)},re.useOptimistic=function(N,nt){return P.H.useOptimistic(N,nt)},re.useReducer=function(N,nt,gt){return P.H.useReducer(N,nt,gt)},re.useRef=function(N){return P.H.useRef(N)},re.useState=function(N){return P.H.useState(N)},re.useSyncExternalStore=function(N,nt,gt){return P.H.useSyncExternalStore(N,nt,gt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.4",re}var __;function mp(){return __||(__=1,Ch.exports=_y()),Ch.exports}var _d=mp();const vy=Rv(_d);var wh={exports:{}},qo={},Dh={exports:{}},Uh={};var v_;function xy(){return v_||(v_=1,(function(s){function t(F,H){var at=F.length;F.push(H);t:for(;0<at;){var yt=at-1>>>1,xt=F[yt];if(0<l(xt,H))F[yt]=H,F[at]=xt,at=yt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],at=F.pop();if(at!==H){F[0]=at;t:for(var yt=0,xt=F.length,N=xt>>>1;yt<N;){var nt=2*(yt+1)-1,gt=F[nt],Tt=nt+1,Ft=F[Tt];if(0>l(gt,at))Tt<xt&&0>l(Ft,gt)?(F[yt]=Ft,F[Tt]=at,yt=Tt):(F[yt]=gt,F[nt]=at,yt=nt);else if(Tt<xt&&0>l(Ft,at))F[yt]=Ft,F[Tt]=at,yt=Tt;else break t}}return H}function l(F,H){var at=F.sortIndex-H.sortIndex;return at!==0?at:F.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,x=3,y=!1,b=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(F){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function B(F){if(T=!1,U(F),!b)if(i(m)!==null)b=!0,z||(z=!0,rt());else{var H=i(p);H!==null&&lt(B,H.startTime-F)}}var z=!1,P=-1,j=5,C=-1;function w(){return M?!0:!(s.unstable_now()-C<j)}function V(){if(M=!1,z){var F=s.unstable_now();C=F;var H=!0;try{t:{b=!1,T&&(T=!1,O(P),P=-1),y=!0;var at=x;try{e:{for(U(F),g=i(m);g!==null&&!(g.expirationTime>F&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var xt=yt(g.expirationTime<=F);if(F=s.unstable_now(),typeof xt=="function"){g.callback=xt,U(F),H=!0;break e}g===i(m)&&r(m),U(F)}else r(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&lt(B,N.startTime-F),H=!1}}break t}finally{g=null,x=at,y=!1}H=void 0}}finally{H?rt():z=!1}}}var rt;if(typeof D=="function")rt=function(){D(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ht=it.port2;it.port1.onmessage=V,rt=function(){ht.postMessage(null)}}else rt=function(){v(V,0)};function lt(F,H){P=v(function(){F(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var at=x;x=H;try{return F()}finally{x=at}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var at=x;x=F;try{return H()}finally{x=at}},s.unstable_scheduleCallback=function(F,H,at){var yt=s.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?yt+at:yt):at=yt,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,F={id:_++,callback:H,priorityLevel:F,startTime:at,expirationTime:xt,sortIndex:-1},at>yt?(F.sortIndex=at,t(p,F),i(m)===null&&F===i(p)&&(T?(O(P),P=-1):T=!0,lt(B,at-yt))):(F.sortIndex=xt,t(m,F),b||y||(b=!0,z||(z=!0,rt()))),F},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(F){var H=x;return function(){var at=x;x=H;try{return F.apply(this,arguments)}finally{x=at}}}})(Uh)),Uh}var x_;function Sy(){return x_||(x_=1,Dh.exports=xy()),Dh.exports}var Lh={exports:{}},Nn={};var S_;function yy(){if(S_)return Nn;S_=1;var s=mp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var y_;function My(){if(y_)return Lh.exports;y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Lh.exports=yy(),Lh.exports}var M_;function Ey(){if(M_)return qo;M_=1;var s=Sy(),t=mp(),i=My();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function N(e){return{current:e}}function nt(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var Tt=N(null),Ft=N(null),et=N(null),ut=N(null);function wt(e,n){switch(gt(et,n),gt(Ft,e),gt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bg(n),e=Fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Tt),gt(Tt,e)}function Vt(){nt(Tt),nt(Ft),nt(et)}function It(e){e.memoizedState!==null&&gt(ut,e);var n=Tt.current,a=Fg(n,e.type);n!==a&&(gt(Ft,e),gt(Tt,a))}function de(e){Ft.current===e&&(nt(Tt),nt(Ft)),ut.current===e&&(nt(ut),Go._currentValue=at)}var Je,_e;function pe(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+_e}var Ce=!1;function se(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var I=S.split(`
`),J=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===J.length)for(o=I.length-1,u=J.length-1;1<=o&&0<=u&&I[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==J[u]){var ft=`
`+I[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return pe("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Me=s.unstable_scheduleCallback,Le=s.unstable_cancelCallback,qt=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,dt=s.unstable_ImmediatePriority,vt=s.unstable_UserBlockingPriority,ct=s.unstable_NormalPriority,Zt=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,Xt=s.log,ee=s.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ee(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,le=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ct(e)/le|0)|0}var Ut=256,bt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=St(o):(S&=A,S!==0?u=St(S):a||(a=A&~e,a!==0&&(u=St(a))))):(A=o&~h,A!==0?u=St(A):S!==0?u=St(S):a||(a=o&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bi(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;A[ft]=0,I[ft]=-1;var tt=J[ft];if(tt!==null)for(J[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}o!==0&&Sl(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Sl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Js(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Vr(e,n){var a=n&-n;return a=(a&42)!==0?1:$s(a),(a&(e.suspendedLanes|n))!==0?0:a}function $s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function to(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:o_(e.type))}function Fi(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var oi=Math.random().toString(36).slice(2),sn="__reactFiber$"+oi,Sn="__reactProps$"+oi,Ti="__reactContainer$"+oi,kr="__reactEvents$"+oi,Wr="__reactListeners$"+oi,yl="__reactHandles$"+oi,eo="__reactResources$"+oi,fr="__reactMarker$"+oi;function no(e){delete e[sn],delete e[Sn],delete e[kr],delete e[Wr],delete e[yl]}function wa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[sn])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[sn]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ua(e){var n=e[eo];return n||(n=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[fr]=!0}var Y=new Set,st={};function $(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(st[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Ht(e){return je.call(Lt,e)?!0:je.call(Bt,e)?!1:Dt.test(e)?Lt[e]=!0:(Bt[e]=!0,!1)}function kt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ke(e){if(!e._valueTracker){var n=we(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Ne(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var De=/[\n"\\]/g;function ae(e){return e.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,S,$t(n)):a!=null?Mn(e,S,$t(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function Ki(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){ke(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),ke(e)}function Mn(e,n,a){n==="number"&&jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ke(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Tn(e,h,n[h])}function Ai(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return hx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var Eu=null;function bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,Zr=null;function zp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(r(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ne(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var Tu=!1;function Bp(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(Yr!==null||Zr!==null)&&(cc(),Yr&&(n=Yr,e=Zr,Zr=Yr=null,zp(n),e)))for(n=0;n<e.length;n++)zp(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Ji)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Au=!1}var La=null,Ru=null,El=null;function Fp(){if(El)return El;var e,n=Ru,a=n.length,o,u="value"in La?La.value:La.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return El=u.slice(e,1<o?1-o:void 0)}function bl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Ip(){return!1}function Xn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Tl:Ip,this.isPropagationStopped=Ip,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Xn(dr),ro=g({},dr,{view:0,detail:0}),dx=Xn(ro),Cu,wu,so,Rl=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Cu=e.screenX-so.screenX,wu=e.screenY-so.screenY):wu=Cu=0,so=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),Hp=Xn(Rl),px=g({},Rl,{dataTransfer:0}),mx=Xn(px),gx=g({},ro,{relatedTarget:0}),Du=Xn(gx),_x=g({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Xn(_x),xx=g({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=Xn(xx),yx=g({},dr,{data:0}),Gp=Xn(yx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bx[e])?!!n[e]:!1}function Uu(){return Tx}var Ax=g({},ro,{key:function(e){if(e.key){var n=Mx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rx=Xn(Ax),Cx=g({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Xn(Cx),wx=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Dx=Xn(wx),Ux=g({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=Xn(Ux),Nx=g({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=Xn(Nx),Px=g({},dr,{newState:0,oldState:0}),zx=Xn(Px),Bx=[9,13,27,32],Lu=Ji&&"CompositionEvent"in window,oo=null;Ji&&"documentMode"in document&&(oo=document.documentMode);var Fx=Ji&&"TextEvent"in window&&!oo,Xp=Ji&&(!Lu||oo&&8<oo&&11>=oo),kp=" ",Wp=!1;function qp(e,n){switch(e){case"keyup":return Bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function Ix(e,n){switch(e){case"compositionend":return Yp(n);case"keypress":return n.which!==32?null:(Wp=!0,kp);case"textInput":return e=n.data,e===kp&&Wp?null:e;default:return null}}function Hx(e,n){if(jr)return e==="compositionend"||!Lu&&qp(e,n)?(e=Fp(),El=Ru=La=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xp&&n.locale!=="ko"?null:n.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gx[e.type]:n==="textarea"}function jp(e,n,a,o){Yr?Zr?Zr.push(o):Zr=[o]:Yr=o,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var lo=null,co=null;function Vx(e){Ug(e,0)}function Cl(e){var n=hr(e);if(Ne(n))return e}function Kp(e,n){if(e==="change")return n}var Qp=!1;if(Ji){var Nu;if(Ji){var Ou="oninput"in document;if(!Ou){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Ou=typeof Jp.oninput=="function"}Nu=Ou}else Nu=!1;Qp=Nu&&(!document.documentMode||9<document.documentMode)}function $p(){lo&&(lo.detachEvent("onpropertychange",tm),co=lo=null)}function tm(e){if(e.propertyName==="value"&&Cl(co)){var n=[];jp(n,co,e,bu(e)),Bp(Vx,n)}}function Xx(e,n,a){e==="focusin"?($p(),lo=n,co=a,lo.attachEvent("onpropertychange",tm)):e==="focusout"&&$p()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(co)}function Wx(e,n){if(e==="click")return Cl(n)}function qx(e,n){if(e==="input"||e==="change")return Cl(n)}function Yx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Yx;function uo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!je.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function em(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nm(e,n){var a=em(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=em(a)}}function im(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?im(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=jt(e.document)}return n}function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Zx=Ji&&"documentMode"in document&&11>=document.documentMode,Kr=null,zu=null,fo=null,Bu=!1;function rm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Kr==null||Kr!==jt(o)||(o=Kr,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=gc(zu,"onSelect"),0<o.length&&(n=new Al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Kr)))}function pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Fu={},sm={};Ji&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function mr(e){if(Fu[e])return Fu[e];if(!Qr[e])return e;var n=Qr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in sm)return Fu[e]=n[a];return e}var om=mr("animationend"),lm=mr("animationiteration"),cm=mr("animationstart"),jx=mr("transitionrun"),Kx=mr("transitionstart"),Qx=mr("transitioncancel"),um=mr("transitionend"),fm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Ri(e,n){fm.set(e,n),$(n,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Jr=0,Hu=0;function Dl(){for(var e=Jr,n=Hu=Jr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&hm(a,u,h)}}function Ul(e,n,a,o){ci[Jr++]=e,ci[Jr++]=n,ci[Jr++]=a,ci[Jr++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Ul(e,n,a,o),Ll(e)}function gr(e,n){return Ul(e,null,null,n),Ll(e)}function hm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ll(e){if(50<Oo)throw Oo=0,Qf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $r={};function Jx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new Jx(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Nl(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Vu(e)&&(S=1);else if(typeof e=="string")S=iy(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Jn(31,a,n,u),e.elementType=C,e.lanes=h,e;case T:return _r(a.children,u,h,n);case M:S=8,u|=24;break;case v:return e=Jn(12,a,n,u|2),e.elementType=v,e.lanes=h,e;case B:return e=Jn(13,a,n,u),e.elementType=B,e.lanes=h,e;case z:return e=Jn(19,a,n,u),e.elementType=z,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case O:S=9;break t;case U:S=11;break t;case P:S=14;break t;case j:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Jn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function _r(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function Xu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function pm(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function ku(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var mm=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=mm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},mm.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var ts=[],es=0,Ol=null,ho=0,fi=[],hi=0,Na=null,Ii=1,Hi="";function ta(e,n){ts[es++]=ho,ts[es++]=Ol,Ol=e,ho=n}function gm(e,n,a){fi[hi++]=Ii,fi[hi++]=Hi,fi[hi++]=Na,Na=e;var o=Ii;e=Hi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var h=32-Ot(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Ot(n)+u|a<<u|o,Hi=h+e}else Ii=1<<h|a<<u|o,Hi=e}function Wu(e){e.return!==null&&(ta(e,1),gm(e,1,0))}function qu(e){for(;e===Ol;)Ol=ts[--es],ts[es]=null,ho=ts[--es],ts[es]=null;for(;e===Na;)Na=fi[--hi],fi[hi]=null,Hi=fi[--hi],fi[hi]=null,Ii=fi[--hi],fi[hi]=null}function _m(e,n){fi[hi++]=Ii,fi[hi++]=Hi,fi[hi++]=Na,Ii=n.id,Hi=n.overflow,Na=e}var An=null,qe=null,Se=!1,Oa=null,di=!1,Yu=Error(r(519));function Pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(ui(n,e)),Yu}function vm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[Sn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)ge(zo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ki(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Pg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Pa(e,!0)}function xm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function ns(e){if(e!==An)return!1;if(!Se)return xm(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&qe&&Pa(e),xm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qe=kg(e)}else n===27?(n=qe,ja(e.type)?(e=_h,_h=null,qe=e):qe=n):qe=An?mi(e.stateNode.nextSibling):null;return!0}function vr(){qe=An=null,Se=!1}function Zu(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function po(e){Oa===null?Oa=[e]:Oa.push(e)}var ju=N(null),xr=null,ea=null;function za(e,n,a){gt(ju,n._currentValue),n._currentValue=a}function na(e){e._currentValue=ju.current,nt(ju)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Ku(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Ku(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function is(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=u.type;Qn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sr(e){xr=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Sm(xr,e)}function zl(e,n){return xr===null&&Sr(e),Sm(e,n)}function Sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(r(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var $x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tS=s.unstable_scheduleCallback,eS=s.unstable_NormalPriority,on={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new $x,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var go=null,$u=0,as=0,rs=null;function nS(e,n){if(go===null){var a=go=[];$u=0,as=ih(),rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(ym,ym),n}function ym(){if(--$u===0&&go!==null){rs!==null&&(rs.status="fulfilled");var e=go;go=null,as=0,rs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function iS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Mm=F.S;F.S=function(e,n){rg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nS(e,n),Mm!==null&&Mm(e,n)};var yr=N(null);function tf(){var e=yr.current;return e!==null?e:Xe.pooledCache}function Bl(e,n){n===null?gt(yr,yr.current):gt(yr,n.pool)}function Em(){var e=tf();return e===null?null:{parent:on._currentValue,pool:e}}var ss=Error(r(460)),ef=Error(r(474)),Fl=Error(r(542)),Il={then:function(){}};function bm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rm(e),e}throw Er=n,ss}}function Mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,ss):a}}var Er=null;function Am(){if(Er===null)throw Error(r(459));var e=Er;return Er=null,e}function Rm(e){if(e===ss||e===Fl)throw Error(r(483))}var os=null,_o=0;function Hl(e){var n=_o;return _o+=1,os===null&&(os=[]),Tm(os,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Cm(e){function n(Z,X){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=$i(Z,X),Z.index=0,Z.sibling=null,Z}function h(Z,X,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,Q,pt){return X===null||X.tag!==6?(X=Xu(Q,Z.mode,pt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function I(Z,X,Q,pt){var Kt=Q.type;return Kt===T?ft(Z,X,Q.props.children,pt,Q.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&Mr(Kt)===X.type)?(X=u(X,Q.props),vo(X,Q),X.return=Z,X):(X=Nl(Q.type,Q.key,Q.props,null,Z.mode,pt),vo(X,Q),X.return=Z,X)}function J(Z,X,Q,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=ku(Q,Z.mode,pt),X.return=Z,X):(X=u(X,Q.children||[]),X.return=Z,X)}function ft(Z,X,Q,pt,Kt){return X===null||X.tag!==7?(X=_r(Q,Z.mode,pt,Kt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function mt(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Xu(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return Q=Nl(X.type,X.key,X.props,null,Z.mode,Q),vo(Q,X),Q.return=Z,Q;case b:return X=ku(X,Z.mode,Q),X.return=Z,X;case j:return X=Mr(X),mt(Z,X,Q)}if(lt(X)||rt(X))return X=_r(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return mt(Z,Hl(X),Q);if(X.$$typeof===D)return mt(Z,zl(Z,X),Q);Gl(Z,X)}return null}function tt(Z,X,Q,pt){var Kt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Kt!==null?null:A(Z,X,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Kt?I(Z,X,Q,pt):null;case b:return Q.key===Kt?J(Z,X,Q,pt):null;case j:return Q=Mr(Q),tt(Z,X,Q,pt)}if(lt(Q)||rt(Q))return Kt!==null?null:ft(Z,X,Q,pt,null);if(typeof Q.then=="function")return tt(Z,X,Hl(Q),pt);if(Q.$$typeof===D)return tt(Z,X,zl(Z,Q),pt);Gl(Z,Q)}return null}function ot(Z,X,Q,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get(Q)||null,A(X,Z,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Z=Z.get(pt.key===null?Q:pt.key)||null,I(X,Z,pt,Kt);case b:return Z=Z.get(pt.key===null?Q:pt.key)||null,J(X,Z,pt,Kt);case j:return pt=Mr(pt),ot(Z,X,Q,pt,Kt)}if(lt(pt)||rt(pt))return Z=Z.get(Q)||null,ft(X,Z,pt,Kt,null);if(typeof pt.then=="function")return ot(Z,X,Q,Hl(pt),Kt);if(pt.$$typeof===D)return ot(Z,X,Q,zl(X,pt),Kt);Gl(X,pt)}return null}function Gt(Z,X,Q,pt){for(var Kt=null,Ae=null,Yt=X,ce=X=0,xe=null;Yt!==null&&ce<Q.length;ce++){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=tt(Z,Yt,Q[ce],pt);if(Re===null){Yt===null&&(Yt=xe);break}e&&Yt&&Re.alternate===null&&n(Z,Yt),X=h(Re,X,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(ce===Q.length)return a(Z,Yt),Se&&ta(Z,ce),Kt;if(Yt===null){for(;ce<Q.length;ce++)Yt=mt(Z,Q[ce],pt),Yt!==null&&(X=h(Yt,X,ce),Ae===null?Kt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&ta(Z,ce),Kt}for(Yt=o(Yt);ce<Q.length;ce++)xe=ot(Yt,Z,ce,Q[ce],pt),xe!==null&&(e&&xe.alternate!==null&&Yt.delete(xe.key===null?ce:xe.key),X=h(xe,X,ce),Ae===null?Kt=xe:Ae.sibling=xe,Ae=xe);return e&&Yt.forEach(function(tr){return n(Z,tr)}),Se&&ta(Z,ce),Kt}function te(Z,X,Q,pt){if(Q==null)throw Error(r(151));for(var Kt=null,Ae=null,Yt=X,ce=X=0,xe=null,Re=Q.next();Yt!==null&&!Re.done;ce++,Re=Q.next()){Yt.index>ce?(xe=Yt,Yt=null):xe=Yt.sibling;var tr=tt(Z,Yt,Re.value,pt);if(tr===null){Yt===null&&(Yt=xe);break}e&&Yt&&tr.alternate===null&&n(Z,Yt),X=h(tr,X,ce),Ae===null?Kt=tr:Ae.sibling=tr,Ae=tr,Yt=xe}if(Re.done)return a(Z,Yt),Se&&ta(Z,ce),Kt;if(Yt===null){for(;!Re.done;ce++,Re=Q.next())Re=mt(Z,Re.value,pt),Re!==null&&(X=h(Re,X,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return Se&&ta(Z,ce),Kt}for(Yt=o(Yt);!Re.done;ce++,Re=Q.next())Re=ot(Yt,Z,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ce:Re.key),X=h(Re,X,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return e&&Yt.forEach(function(py){return n(Z,py)}),Se&&ta(Z,ce),Kt}function Ve(Z,X,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Kt=Q.key;X!==null;){if(X.key===Kt){if(Kt=Q.type,Kt===T){if(X.tag===7){a(Z,X.sibling),pt=u(X,Q.props.children),pt.return=Z,Z=pt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&Mr(Kt)===X.type){a(Z,X.sibling),pt=u(X,Q.props),vo(pt,Q),pt.return=Z,Z=pt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===T?(pt=_r(Q.props.children,Z.mode,pt,Q.key),pt.return=Z,Z=pt):(pt=Nl(Q.type,Q.key,Q.props,null,Z.mode,pt),vo(pt,Q),pt.return=Z,Z=pt)}return S(Z);case b:t:{for(Kt=Q.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),pt=u(X,Q.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}pt=ku(Q,Z.mode,pt),pt.return=Z,Z=pt}return S(Z);case j:return Q=Mr(Q),Ve(Z,X,Q,pt)}if(lt(Q))return Gt(Z,X,Q,pt);if(rt(Q)){if(Kt=rt(Q),typeof Kt!="function")throw Error(r(150));return Q=Kt.call(Q),te(Z,X,Q,pt)}if(typeof Q.then=="function")return Ve(Z,X,Hl(Q),pt);if(Q.$$typeof===D)return Ve(Z,X,zl(Z,Q),pt);Gl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),pt=u(X,Q),pt.return=Z,Z=pt):(a(Z,X),pt=Xu(Q,Z.mode,pt),pt.return=Z,Z=pt),S(Z)):a(Z,X)}return function(Z,X,Q,pt){try{_o=0;var Kt=Ve(Z,X,Q,pt);return os=null,Kt}catch(Yt){if(Yt===ss||Yt===Fl)throw Yt;var Ae=Jn(29,Yt,null,Z.mode);return Ae.lanes=pt,Ae.return=Z,Ae}}}var br=Cm(!0),wm=Cm(!1),Ba=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ll(e),hm(e,null,a),n}return Ul(e,o,n,a),Ll(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Js(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sf=!1;function So(){if(sf){var e=rs;if(e!==null)throw e}}function yo(e,n,a,o){sf=!1;var u=e.updateQueue;Ba=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,J=I.next;I.next=null,S===null?h=J:S.next=J,S=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==S&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=I))}if(h!==null){var mt=u.baseState;S=0,ft=J=I=null,A=h;do{var tt=A.lane&-536870913,ot=tt!==A.lane;if(ot?(ve&tt)===tt:(o&tt)===tt){tt!==0&&tt===as&&(sf=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,te=A;tt=n;var Ve=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){mt=Gt.call(Ve,mt,tt);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,tt=typeof Gt=="function"?Gt.call(Ve,mt,tt):Gt,tt==null)break t;mt=g({},mt,tt);break t;case 2:Ba=!0}}tt=A.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=ot,I=mt):ft=ft.next=ot,S|=tt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(I=mt),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,h===null&&(u.shared.lanes=0),ka|=S,e.lanes=S,e.memoizedState=mt}}function Dm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Um(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dm(a[e],n)}var ls=N(null),Vl=N(0);function Lm(e,n){e=fa,gt(Vl,e),gt(ls,n),fa=e|n.baseLanes}function of(){gt(Vl,fa),gt(ls,ls.current)}function lf(){fa=Vl.current,nt(ls),nt(Vl)}var $n=N(null),pi=null;function Ha(e){var n=e.alternate;gt(nn,nn.current&1),gt($n,e),pi===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(pi=e)}function cf(e){gt(nn,nn.current),gt($n,e),pi===null&&(pi=e)}function Nm(e){e.tag===22?(gt(nn,nn.current),gt($n,e),pi===null&&(pi=e)):Ga()}function Ga(){gt(nn,nn.current),gt($n,$n.current)}function ti(e){nt($n),pi===e&&(pi=null),nt(nn)}var nn=N(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,oe=null,He=null,ln=null,kl=!1,cs=!1,Tr=!1,Wl=0,Mo=0,us=null,aS=0;function tn(){throw Error(r(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,h){return ia=h,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?g0:Af,Tr=!1,h=a(o,u),Tr=!1,cs&&(h=Pm(n,a,o,u)),Om(e),h}function Om(e){F.H=To;var n=He!==null&&He.next!==null;if(ia=0,ln=He=oe=null,kl=!1,Mo=0,us=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&Pl(e)&&(cn=!0))}function Pm(e,n,a,o){oe=e;var u=0;do{if(cs&&(us=null),Mo=0,cs=!1,25<=u)throw Error(r(301));if(u+=1,ln=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=_0,h=n(a,o)}while(cs);return h}function rS(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(oe.flags|=1024),n}function hf(){var e=Wl!==0;return Wl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(kl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}kl=!1}ia=0,ln=He=oe=null,cs=!1,Mo=Wl=0,us=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(He===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,He=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?oe.memoizedState=ln=e:ln=ln.next=e}return ln}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=Mo;return Mo+=1,us===null&&(us=[]),e=Tm(us,e,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?g0:Af),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===D)return Rn(e)}throw Error(r(438,String(e)))}function mf(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ql(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Zl(e){var n=an();return gf(n,He,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,I=null,J=n,ft=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(ve&mt)===mt:(ia&mt)===mt){var tt=J.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===as&&(ft=!0);else if((ia&tt)===tt){J=J.next,tt===as&&(ft=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=mt,S=h):I=I.next=mt,oe.lanes|=tt,ka|=tt;mt=J.action,Tr&&a(h,mt),h=J.hasEagerState?J.eagerState:a(h,mt)}else tt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(A=I=tt,S=h):I=I.next=tt,oe.lanes|=mt,ka|=mt;J=J.next}while(J!==null&&J!==n);if(I===null?S=h:I.next=A,!Qn(h,e.memoizedState)&&(cn=!0,ft&&(a=rs,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Qn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function zm(e,n,a){var o=oe,u=an(),h=Se;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Qn((He||u).memoizedState,a);if(S&&(u.memoizedState=a,cn=!0),u=u.queue,Sf(Im.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,fs(9,{destroy:void 0},Fm.bind(null,o,u,a,n),null),Xe===null)throw Error(r(349));h||(ia&127)!==0||Bm(o,n,a)}return a}function Bm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=ql(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Fm(e,n,a,o){n.value=a,n.getSnapshot=o,Hm(n)&&Gm(e)}function Im(e,n,a){return a(function(){Hm(n)&&Gm(e)})}function Hm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function Gm(e){var n=gr(e,2);n!==null&&Zn(n,e,2)}function vf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),Tr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Vm(e,n,a,o){return e.baseState=a,gf(e,He,typeof o=="function"?o:aa)}function sS(e,n,a,o,u){if(Ql(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Xm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Xm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var A=a(u,o),I=F.S;I!==null&&I(S,A),km(e,n,A)}catch(J){xf(e,n,J)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=a(u,o),km(e,n,h)}catch(J){xf(e,n,J)}}function km(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wm(e,n,o)},function(o){return xf(e,n,o)}):Wm(e,n,a)}function Wm(e,n,a){n.status="fulfilled",n.value=a,qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qm(n),n=n.next;while(n!==o)}e.action=null}function qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ym(e,n){return n}function Zm(e,n){if(Se){var a=Xe.formState;if(a!==null){t:{var o=oe;if(Se){if(qe){e:{for(var u=qe,h=di;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){qe=mi(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:n},a.queue=o,a=d0.bind(null,oe,o),o.dispatch=a,o=vf(!1),h=Tf.bind(null,oe,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sS.bind(null,oe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function jm(e){var n=an();return Km(n,He,e)}function Km(e,n,a){if(n=gf(e,n,Ym)[0],e=Zl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(S){throw S===ss?Fl:S}else o=n;n=an();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,fs(9,{destroy:void 0},oS.bind(null,u,a),null)),[o,h,e]}function oS(e,n){e.action=n}function Qm(e){var n=an(),a=He;if(a!==null)return Km(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=ql(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Jm(){return an().memoizedState}function jl(e,n,a,o){var u=Hn();oe.flags|=e,u.memoizedState=fs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Kl(e,n,a,o){var u=an();o=o===void 0?null:o;var h=u.memoizedState.inst;He!==null&&o!==null&&uf(o,He.memoizedState.deps)?u.memoizedState=fs(n,h,a,o):(oe.flags|=e,u.memoizedState=fs(1|n,h,a,o))}function $m(e,n){jl(8390656,8,e,n)}function Sf(e,n){Kl(2048,8,e,n)}function lS(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=ql(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function t0(e){var n=an().memoizedState;return lS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function e0(e,n){return Kl(4,2,e,n)}function n0(e,n){return Kl(4,4,e,n)}function i0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function a0(e,n,a){a=a!=null?a.concat([e]):null,Kl(4,4,i0.bind(null,n,e),a)}function yf(){}function r0(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function s0(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),Tr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(ia&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=og(),oe.lanes|=e,ka|=e,a)}function o0(e,n,a,o){return Qn(a,n)?a:ls.current!==null?(e=Mf(e,a,o),Qn(e,n)||(cn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(ve&261930)===0?(cn=!0,e.memoizedState=a):(e=og(),oe.lanes|=e,ka|=e,n)}function l0(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var S=F.T,A={};F.T=A,Tf(e,!1,n,a);try{var I=u(),J=F.S;if(J!==null&&J(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=iS(I,o);bo(e,n,ft,ii(e))}else bo(e,n,o,ii(e))}catch(mt){bo(e,n,{then:function(){},status:"rejected",reason:mt},ii())}finally{H.p=h,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function cS(){}function Ef(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=c0(e).queue;l0(e,u,n,at,a===null?cS:function(){return u0(e),a(o)})}function c0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function u0(e){var n=c0(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},ii())}function bf(){return Rn(Go)}function f0(){return an().memoizedState}function h0(){return an().memoizedState}function uS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Fa(a);var o=Ia(n,e,a);o!==null&&(Zn(o,n,a),xo(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function fS(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?p0(n,a):(a=Gu(e,n,a,o),a!==null&&(Zn(a,e,o),m0(a,n,o)))}function d0(e,n,a){var o=ii();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))p0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,Qn(A,S))return Ul(e,n,u,0),Xe===null&&Dl(),!1}catch{}if(a=Gu(e,n,u,o),a!==null)return Zn(a,e,o),m0(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(n)throw Error(r(479))}else n=Gu(e,a,o,2),n!==null&&Zn(n,e,2)}function Ql(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function p0(e,n){cs=kl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function m0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Js(e,a)}}var To={readContext:Rn,use:Yl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};To.useEffectEvent=tn;var g0={readContext:Rn,use:Yl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:$m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,jl(4194308,4,i0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return jl(4194308,4,e,n)},useInsertionEffect:function(e,n){jl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(Tr){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(Tr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=fS.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=d0.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(e,n){var a=Hn();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=l0.bind(null,oe,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Hn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(ve&127)!==0||Bm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,$m(Im.bind(null,o,h,e),[e]),o.flags|=2048,fs(9,{destroy:void 0},Fm.bind(null,o,h,a,n),null),a},useId:function(){var e=Hn(),n=Xe.identifierPrefix;if(Se){var a=Hi,o=Ii;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=aS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bf,useFormState:Zm,useActionState:Zm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Hn().memoizedState=uS.bind(null,oe)},useEffectEvent:function(e){var n=Hn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Rn,use:Yl,useCallback:r0,useContext:Rn,useEffect:Sf,useImperativeHandle:a0,useInsertionEffect:e0,useLayoutEffect:n0,useMemo:s0,useReducer:Zl,useRef:Jm,useState:function(){return Zl(aa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=an();return o0(a,He.memoizedState,e,n)},useTransition:function(){var e=Zl(aa)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:zm,useId:f0,useHostTransitionStatus:bf,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var a=an();return Vm(a,He,e,n)},useMemoCache:mf,useCacheRefresh:h0};Af.useEffectEvent=t0;var _0={readContext:Rn,use:Yl,useCallback:r0,useContext:Rn,useEffect:Sf,useImperativeHandle:a0,useInsertionEffect:e0,useLayoutEffect:n0,useMemo:s0,useReducer:_f,useRef:Jm,useState:function(){return _f(aa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=an();return He===null?Mf(a,e,n):o0(a,He.memoizedState,e,n)},useTransition:function(){var e=_f(aa)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:zm,useId:f0,useHostTransitionStatus:bf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,n){var a=an();return He!==null?Vm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:h0};_0.useEffectEvent=t0;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(Zn(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(Zn(n,e,a),xo(n,e,a))}};function v0(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,h):!0}function x0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Ar(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function S0(e){wl(e)}function y0(e){console.error(e)}function M0(e){wl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function E0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function b0(e){return e=Fa(e),e.tag=3,e}function T0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){E0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){E0(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&is(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?uc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(r(435,a.tag))}return th(e,o,u),uc(),!1}if(Se)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(r(422),{cause:o}),po(ui(e,a)))):(o!==Yu&&(n=Error(r(423),{cause:o}),po(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=wf(e.stateNode,o,u),rf(e,u),en!==4&&(en=2)),!1;var h=Error(r(520),{cause:o});if(h=ui(h,a),No===null?No=[h]:No.push(h),en!==4&&(en=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wf(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Wa===null||!Wa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=b0(u),T0(u,e,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(r(461)),cn=!1;function Cn(e,n,a,o){n.child=e===null?wm(n,null,a,o):br(n,e.child,a,o)}function A0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Sr(n),o=ff(e,n,a,S,h,u),A=hf(),e!==null&&!cn?(df(e,n,u),ra(e,n,u)):(Se&&A&&Wu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function R0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,C0(e,n,h,o,u)):(e=Nl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Ff(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(S,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=$i(h,o),e.ref=n.ref,e.return=n,n.child=e}function C0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(uo(h,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=h,Ff(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ra(e,n,u)}return Uf(e,n,a,o,u)}function w0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return D0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(n,h!==null?h.cachePool:null),h!==null?Lm(n,h):of(),Nm(n);else return o=n.lanes=536870912,D0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Bl(n,h.cachePool),Lm(n,h),Ga(),n.memoizedState=null):(e!==null&&Bl(n,null),of(),Ga());return Cn(e,n,u,a),n.child}function Ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function D0(e,n,a,o,u){var h=tf();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Bl(n,null),of(),Nm(n),e!==null&&is(e,n,o,!0),n.childLanes=u,null}function $l(e,n){return n=ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function U0(e,n,a){return br(n,e.child,null,a),e=$l(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function dS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=$l(n,o),n.lanes=536870912,Ao(null,e);if(cf(n),(e=qe)?(e=Xg(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=pm(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return $l(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=U0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||is(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=Xe,o!==null&&(S=Vr(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,gr(e,S),Zn(o,e,S),Df;uc(),n=U0(e,n,a)}else e=h.treeContext,qe=mi(S.nextSibling),An=n,Se=!0,Oa=null,di=!1,e!==null&&_m(n,e),n=$l(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function tc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return Sr(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!cn?(df(e,n,u),ra(e,n,u)):(Se&&o&&Wu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function L0(e,n,a,o,u,h){return Sr(n),n.updateQueue=null,a=Pm(n,o,a,u),Om(e),o=hf(),e!==null&&!cn?(df(e,n,h),ra(e,n,h)):(Se&&o&&Wu(n),n.flags|=1,Cn(e,n,a,h),n.child)}function N0(e,n,a,o,u){if(Sr(n),n.stateNode===null){var h=$r,S=a.contextType;typeof S=="object"&&S!==null&&(h=Rn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Rn(S):$r,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Rf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Cf.enqueueReplaceState(h,h.state,null),yo(n,o,h,u),So(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,I=Ar(a,A);h.props=I;var J=h.context,ft=a.contextType;S=$r,typeof ft=="object"&&ft!==null&&(S=Rn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||J!==S)&&x0(n,h,o,S),Ba=!1;var tt=n.memoizedState;h.state=tt,yo(n,o,h,u),So(),J=n.memoizedState,A||tt!==J||Ba?(typeof mt=="function"&&(Rf(n,a,mt,o),J=n.memoizedState),(I=Ba||v0(n,a,I,o,tt,J,S))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),h.props=o,h.state=J,h.context=S,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(e,n),S=n.memoizedProps,ft=Ar(a,S),h.props=ft,mt=n.pendingProps,tt=h.context,J=a.contextType,I=$r,typeof J=="object"&&J!==null&&(I=Rn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==mt||tt!==I)&&x0(n,h,o,I),Ba=!1,tt=n.memoizedState,h.state=tt,yo(n,o,h,u),So();var ot=n.memoizedState;S!==mt||tt!==ot||Ba||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof A=="function"&&(Rf(n,a,A,o),ot=n.memoizedState),(ft=Ba||v0(n,a,ft,o,tt,ot,I)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ot,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ot,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=I,o=ft):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,tc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=br(n,e.child,null,u),n.child=br(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ra(e,n,u),e}function O0(e,n,a,o){return vr(),n.flags|=256,Cn(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:Em()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function P0(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?Ha(n):Ga(),(e=qe)?(e=Xg(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=pm(e),a.return=n,n.child=a,An=n,qe=null)):e=null,e===null)throw Pa(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=n.mode,A=ec({mode:"hidden",children:A},u),o=_r(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,S,a),n.memoizedState=Lf,Ao(null,o)):(Ha(n),Pf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Ha(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),A=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),A=_r(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,br(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,S,a),n.memoizedState=Lf,n=Ao(null,o));else if(Ha(n),gh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,po({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(cn||is(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=Xe,S!==null&&(o=Vr(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,gr(e,o),Zn(S,e,o),Df;mh(A)||uc(),n=zf(e,n,a)}else mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,qe=mi(A.nextSibling),An=n,Se=!0,Oa=null,di=!1,e!==null&&_m(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Ga(),A=o.fallback,u=n.mode,I=e.child,J=I.sibling,o=$i(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,J!==null?A=$i(J,A):(A=_r(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Ao(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Nf(a):(u=A.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Em(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Of(e,S,a),n.memoizedState=Lf,Ao(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ec(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return br(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function z0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function Bf(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function B0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=nn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,gt(nn,S),Cn(e,n,o,a),o=Se?ho:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,a,n);else if(e.tag===19)z0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bf(n,!0,a,null,h,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function pS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),za(n,on,e.memoizedState.cache),vr();break;case 27:case 5:It(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?P0(e,n,a):(Ha(n),e=ra(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(is(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return B0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(nn,nn.current),o)break;return null;case 22:return n.lanes=0,w0(e,n,a,n.pendingProps);case 24:za(n,on,e.memoizedState.cache)}return ra(e,n,a)}function F0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return cn=!1,pS(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Se&&(n.flags&1048576)!==0&&gm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Mr(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Ar(e,o),n.tag=1,n=N0(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=A0(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=R0(null,n,e,o,a);break t}}throw n=ht(e)||e,Error(r(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ar(o,n.pendingProps),N0(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,af(e,n),yo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,za(n,on,o),o!==h.cache&&Qu(n,[on],a,!0),So(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=O0(e,n,o,a);break t}else if(o!==u){u=ui(Error(r(424)),n),po(u),n=O0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=mi(e.firstChild),An=n,Se=!0,Oa=null,di=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vr(),o===u){n=ra(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return tc(e,n),e===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=_c(et.current).createElement(a),o[sn]=n,o[Sn]=e,wn(o,a,e),R(o),n.stateNode=o):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&Se&&(o=n.stateNode=qg(n.type,n.pendingProps,et.current),An=n,di=!0,u=qe,ja(n.type)?(_h=u,qe=mi(o.firstChild)):qe=u),Cn(e,n,n.pendingProps.children,a),tc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=o=qe)&&(o=kS(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,qe=mi(o.firstChild),di=!1,u=!0):u=!1),u||Pa(n)),It(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,hh(u,h)?o=null:S!==null&&hh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,rS,null,null,a),Go._currentValue=u),tc(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=qe)&&(a=WS(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,qe=null,e=!0):e=!1),e||Pa(n)),null;case 13:return P0(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=br(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return A0(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Sr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return R0(e,n,n.type,n.pendingProps,a);case 15:return C0(e,n,n.type,n.pendingProps,a);case 19:return B0(e,n,a);case 31:return dS(e,n,a);case 22:return w0(e,n,a,n.pendingProps);case 24:return Sr(n),o=Rn(on),e===null?(u=tf(),u===null&&(u=Xe,h=Ju(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},nf(n),za(n,on,u)):((e.lanes&a)!==0&&(af(e,n),yo(n,null,null,a),So()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,on,o)):(o=h.cache,za(n,on,o),o!==u.cache&&Qu(n,[on],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(fg())e.flags|=8192;else throw Er=Il,ef}else e.flags&=-16777217}function I0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n))if(fg())e.flags|=8192;else throw Er=Il,ef}function nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,ms|=n)}function Ro(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function mS(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(on),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ns(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),Ye(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(sa(n),h!==null?(Ye(n),I0(n,h)):(Ye(n),If(n,u,null,o,a))):h?h!==e.memoizedState?(sa(n),Ye(n),I0(n,h)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(n),Ye(n),If(n,u,e,o,a)),null;case 27:if(de(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=Tt.current,ns(n)?vm(n):(e=qg(u,o,a),n.stateNode=e,sa(n))}return Ye(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(h=Tt.current,ns(n))vm(n);else{var S=_c(et.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[sn]=n,h[Sn]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(wn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(n)}}return Ye(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=et.current,ns(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Pg(e.nodeValue,a)),e||Pa(n,!0)}else e=_c(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ns(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ns(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),Ye(n),null);case 4:return Vt(),e===null&&oh(n.stateNode.containerInfo),Ye(n),null;case 10:return na(n.type),Ye(n),null;case 19:if(nt(nn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ro(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Xl(e),h!==null){for(n.flags|=128,Ro(o,!1),e=h.updateQueue,n.updateQueue=e,nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dm(a,e),a=a.sibling;return gt(nn,nn.current&1|2),Se&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>oc&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=Xl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,nc(n,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Se)return Ye(n),null}else 2*E()-o.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=nn.current,gt(nn,u?a&1|2:a&1),Se&&ta(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return ti(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(yr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gS(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(on),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(nn),null;case 4:return Vt(),null;case 10:return na(n.type),null;case 22:case 23:return ti(n),lf(),e!==null&&nt(yr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(on),null;case 25:return null;default:return null}}function H0(e,n){switch(qu(n),n.tag){case 3:na(on),Vt();break;case 26:case 27:case 5:de(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:nt(nn);break;case 10:na(n.type);break;case 22:case 23:ti(n),lf(),e!==null&&nt(yr);break;case 24:na(on)}}function Co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var I=a,J=A;try{J()}catch(ft){Be(u,I,ft)}}}o=o.next}while(o!==h)}}catch(ft){Be(n,n.return,ft)}}function G0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Um(n,a)}catch(o){Be(e,e.return,o)}}}function V0(e,n,a){a.props=Ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function wo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Gi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function X0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;FS(o,e.type,a,n),o[Sn]=n}catch(u){Be(e,e.return,u)}}function k0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function ic(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,n,a),e=e.sibling;e!==null;)ic(e,n,a),e=e.sibling}function W0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[sn]=e,n[Sn]=a}catch(h){Be(e,e.return,h)}}var oa=!1,un=!1,Xf=!1,q0=typeof WeakSet=="function"?WeakSet:Set,gn=null;function _S(e,n){if(e=e.containerInfo,uh=bc,e=am(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,I=-1,J=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(A=S+u),mt!==h||o!==0&&mt.nodeType!==3||(I=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++J===u&&(A=S),tt===h&&++ft===o&&(I=S),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},bc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Gt=Ar(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Y0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&Co(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Be(a,a.return,S)}else{var u=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(a,a.return,S)}}o&64&&G0(a),o&512&&wo(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Um(e,n)}catch(S){Be(a,a.return,S)}}break;case 27:n===null&&o&4&&W0(a);case 26:case 5:ca(e,a),n===null&&o&4&&X0(a),o&512&&wo(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&K0(e,a);break;case 13:ca(e,a),o&4&&Q0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=AS.bind(null,a),qS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||un,u=oa;var h=un;oa=o,(un=n)&&!h?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,un=h}break;case 30:break;default:ca(e,a)}}function Z0(e){var n=e.alternate;n!==null&&(e.alternate=null,Z0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&no(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kn=!1;function la(e,n,a){for(a=a.child;a!==null;)j0(e,n,a),a=a.sibling}function j0(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:un||Gi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Gi(a,n);var o=Qe,u=kn;ja(a.type)&&(Qe=a.stateNode,kn=!1),la(e,n,a),Fo(a.stateNode),Qe=o,kn=u;break;case 5:un||Gi(a,n);case 6:if(o=Qe,u=kn,Qe=null,la(e,n,a),Qe=o,kn=u,Qe!==null)if(kn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(h){Be(a,n,h)}else try{Qe.removeChild(a.stateNode)}catch(h){Be(a,n,h)}break;case 18:Qe!==null&&(kn?(e=Qe,Gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Es(e)):Gg(Qe,a.stateNode));break;case 4:o=Qe,u=kn,Qe=a.stateNode.containerInfo,kn=!0,la(e,n,a),Qe=o,kn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),un||Va(4,a,n),la(e,n,a);break;case 1:un||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&V0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,la(e,n,a),un=o;break;default:la(e,n,a)}}function K0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Es(e)}catch(a){Be(n,n.return,a)}}}function Q0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Es(e)}catch(a){Be(n,n.return,a)}}function vS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new q0),n;default:throw Error(r(435,e.tag))}}function ac(e,n){var a=vS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=RS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Qe=A.stateNode,kn=!1;break t}break;case 5:Qe=A.stateNode,kn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Qe===null)throw Error(r(160));j0(h,S,u),Qe=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)J0(n,e),n=n.sibling}var Ci=null;function J0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),Co(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(un||a===null||Gi(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Wn(n,e),qn(e),o&512&&(un||a===null||Gi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[fr]||h[sn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),wn(h,o,a),h[sn]=e,R(h),o=h;break t;case"link":var S=Jg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Jg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[sn]=e,R(h),o=h}e.stateNode=o}else $g(u,e.type,e.stateNode);else e.stateNode=Qg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?$g(u,e.type,e.stateNode):Qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(un||a===null||Gi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(un||a===null||Gi(a,a.return)),e.flags&32){u=e.stateNode;try{hn(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Xf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(Sc=null,u=Ci,Ci=vc(n.containerInfo),Wn(n,e),Ci=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}Xf&&(Xf=!1,$0(e));break;case 4:o=Ci,Ci=vc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ci=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=oa,ft=un;if(oa=J||u,un=ft||I,Wn(n,e),un=ft,oa=J,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||oa||un||Rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;u?Vg(ot,!0):Vg(I.stateNode,!1)}catch(Gt){Be(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ac(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(k0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Gf(e);ic(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(hn(S,""),a.flags&=-33);var A=Gf(e);ic(e,A,S);break;case 3:case 4:var I=a.stateNode.containerInfo,J=Gf(e);Vf(e,J,I);break;default:throw Error(r(161))}}catch(ft){Be(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;$0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Y0(e,n.alternate,n),n=n.sibling}function Rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Rr(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&V0(n,n.return,a),Rr(n);break;case 27:Fo(n.stateNode);case 26:case 5:Gi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:ua(u,h,a),Co(4,h);break;case 1:if(ua(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Be(o,o.return,J)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Dm(I[u],A)}catch(J){Be(o,o.return,J)}}a&&S&64&&G0(h),wo(h,h.return);break;case 27:W0(h);case 26:case 5:ua(u,h,a),a&&o===null&&S&4&&X0(h),wo(h,h.return);break;case 12:ua(u,h,a);break;case 31:ua(u,h,a),a&&S&4&&K0(u,h);break;case 13:ua(u,h,a),a&&S&4&&Q0(u,h);break;case 22:h.memoizedState===null&&ua(u,h,a),wo(h,h.return);break;case 30:break;default:ua(u,h,a)}n=n.sibling}}function kf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tg(e,n,a,o),n=n.sibling}function tg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&Co(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?wi(e,n,a,o):Do(e,n):h._visibility&2?wi(e,n,a,o):(h._visibility|=2,hs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&kf(S,n);break;case 24:wi(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:wi(e,n,a,o)}}function hs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,A=a,I=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:hs(h,S,A,I,u),Co(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?hs(h,S,A,I,u):Do(h,S):(ft._visibility|=2,hs(h,S,A,I,u)),u&&J&2048&&kf(S.alternate,S);break;case 24:hs(h,S,A,I,u),u&&J&2048&&Wf(S.alternate,S);break;default:hs(h,S,A,I,u)}n=n.sibling}}function Do(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&kf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Wf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function ds(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)eg(e,n,a),e=e.sibling}function eg(e,n,a){switch(e.tag){case 26:ds(e,n,a),e.flags&Uo&&e.memoizedState!==null&&ay(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:ds(e,n,a);break;case 3:case 4:var o=Ci;Ci=vc(e.stateNode.containerInfo),ds(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,ds(e,n,a),Uo=o):ds(e,n,a));break;default:ds(e,n,a)}}function ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ag(o,e)}ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,rc(e)):Lo(e);break;default:Lo(e)}}function rc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ag(o,e)}ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),rc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,rc(n));break;default:rc(n)}e=e.sibling}}function ag(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(Z0(o),o===a){gn=null;break t}if(u!==null){u.return=h,gn=u;break t}gn=h}}}var xS={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(on).controller.signal}},SS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,me=null,ve=0,ze=0,ei=null,Xa=!1,ps=!1,qf=!1,fa=0,en=0,ka=0,Cr=0,Yf=0,ni=0,ms=0,No=null,Yn=null,Zf=!1,sc=0,rg=0,oc=1/0,lc=null,Wa=null,dn=0,qa=null,gs=null,ha=0,jf=0,Kf=null,sg=null,Oo=0,Qf=null;function ii(){return(Ue&2)!==0&&ve!==0?ve&-ve:F.T!==null?ih():to()}function og(){if(ni===0)if((ve&536870912)===0||Se){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Zn(e,n,a){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(_s(e,0),Ya(e,ve,ni,!1)),Ln(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(Cr|=a),en===4&&Ya(e,ve,ni,!1)),Vi(e))}function lg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=o?ES(e,n):$f(e,n,!0),h=o;do{if(u===0){ps&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!yS(a)){u=$f(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=No;var I=A.current.memoizedState.isDehydrated;if(I&&(_s(A,S).flags|=256),S=$f(A,S,!1),S!==2){if(qf&&!I){A.errorRecoveryDisabledLanes|=h,Cr|=h,u=4;break t}h=Yn,Yn=u,h!==null&&(Yn===null?Yn=h:Yn.push.apply(Yn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){_s(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,ni,!Xa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=sc+300-E(),10<u)){if(Ya(o,n,ni,!Xa),_t(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=Ig(cg.bind(null,o,a,Yn,lc,Zf,n,ni,Cr,ms,Xa,h,"Throttled",-0,0),u);break t}cg(o,a,Yn,lc,Zf,n,ni,Cr,ms,Xa,h,null,-0,0)}}break}while(!0);Vi(e)}function cg(e,n,a,o,u,h,S,A,I,J,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},eg(n,h,mt);var Gt=(h&62914560)===h?sc-E():(h&4194048)===h?rg-E():0;if(Gt=ry(mt,Gt),Gt!==null){ha=h,e.cancelPendingCommit=Gt(_g.bind(null,e,n,h,a,o,u,S,A,I,ft,mt,null,tt,ot)),Ya(e,h,S,!J);return}}_g(e,n,h,a,o,u,S,A,I)}function yS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Yf,n&=~Cr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ot(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Sl(e,a,n)}function cc(){return(Ue&6)===0?(Po(0),!1):!0}function Jf(){if(me!==null){if(ze===0)var e=me.return;else e=me,ea=xr=null,pf(e),os=null,_o=0,e=me;for(;e!==null;)H0(e.alternate,e),e=e.return;me=null}}function _s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,GS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Jf(),Xe=e,me=a=$i(e.current,null),ve=n,ze=0,ei=null,Xa=!1,ps=At(e,n),qf=!1,ms=ni=Yf=Cr=ka=en=0,Yn=No=null,Zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),h=1<<u;n|=e[u],o&=~h}return fa=n,Dl(),a}function ug(e,n){oe=null,F.H=To,n===ss||n===Fl?(n=Am(),ze=3):n===ef?(n=Am(),ze=4):ze=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,me===null&&(en=1,Jl(e,ui(n,e.current)))}function fg(){var e=$n.current;return e===null?!0:(ve&4194048)===ve?pi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===pi:!1}function hg(){var e=F.H;return F.H=To,e===null?To:e}function dg(){var e=F.A;return F.A=xS,e}function uc(){en=4,Xa||(ve&4194048)!==ve&&$n.current!==null||(ps=!0),(ka&134217727)===0&&(Cr&134217727)===0||Xe===null||Ya(Xe,ve,ni,!1)}function $f(e,n,a){var o=Ue;Ue|=2;var u=hg(),h=dg();(Xe!==e||ve!==n)&&(lc=null,_s(e,n)),n=!1;var S=en;t:do try{if(ze!==0&&me!==null){var A=me,I=ei;switch(ze){case 8:Jf(),S=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var J=ze;if(ze=0,ei=null,vs(e,A,I,J),a&&ps){S=0;break t}break;default:J=ze,ze=0,ei=null,vs(e,A,I,J)}}MS(),S=en;break}catch(ft){ug(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ea=xr=null,Ue=o,F.H=u,F.A=h,me===null&&(Xe=null,ve=0,Dl()),S}function MS(){for(;me!==null;)pg(me)}function ES(e,n){var a=Ue;Ue|=2;var o=hg(),u=dg();Xe!==e||ve!==n?(lc=null,oc=E()+500,_s(e,n)):ps=At(e,n);t:do try{if(ze!==0&&me!==null){n=me;var h=ei;e:switch(ze){case 1:ze=0,ei=null,vs(e,n,h,1);break;case 2:case 9:if(bm(h)){ze=0,ei=null,mg(n);break}n=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),Vi(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:bm(h)?(ze=0,ei=null,mg(n)):(ze=0,ei=null,vs(e,n,h,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var A=me;if(S?t_(S):A.stateNode.complete){ze=0,ei=null;var I=A.sibling;if(I!==null)me=I;else{var J=A.return;J!==null?(me=J,fc(J)):me=null}break e}}ze=0,ei=null,vs(e,n,h,5);break;case 6:ze=0,ei=null,vs(e,n,h,6);break;case 8:Jf(),en=6;break t;default:throw Error(r(462))}}bS();break}catch(ft){ug(e,ft)}while(!0);return ea=xr=null,F.H=o,F.A=u,Ue=a,me!==null?0:(Xe=null,ve=0,Dl(),en)}function bS(){for(;me!==null&&!qt();)pg(me)}function pg(e){var n=F0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?fc(e):me=n}function mg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=L0(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=L0(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:pf(n);default:H0(a,n),n=me=dm(n,fa),n=F0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?fc(e):me=n}function vs(e,n,a,o){ea=xr=null,pf(n),os=null,_o=0;var u=n.return;try{if(hS(e,u,n,a,ve)){en=1,Jl(e,ui(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;en=1,Jl(e,ui(a,e.current)),me=null;return}n.flags&32768?(Se||o===1?e=!0:ps||(ve&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),gg(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){gg(n,Xa);return}e=n.return;var a=mS(n.alternate,n,fa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function gg(e,n){do{var a=gS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);en=6,me=null}function _g(e,n,a,o,u,h,S,A,I){e.cancelPendingCommit=null;do hc();while(dn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Hu,bi(e,a,h,S,A,I),e===Xe&&(me=Xe=null,ve=0),gs=n,qa=e,ha=a,jf=h,Kf=u,sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CS(ct,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=H.p,H.p=2,S=Ue,Ue|=4;try{_S(e,n,a)}finally{Ue=S,H.p=u,F.T=o}}dn=1,vg(),xg(),Sg()}}function vg(){if(dn===1){dn=0;var e=qa,n=gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{J0(n,e);var h=fh,S=am(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&im(A.ownerDocument.documentElement,A)){if(I!==null&&Pu(A)){var J=I.start,ft=I.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var mt=A.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Gt=A.textContent.length,te=Math.min(I.start,Gt),Ve=I.end===void 0?te:Math.min(I.end,Gt);!ot.extend&&te>Ve&&(S=Ve,Ve=te,te=S);var Z=nm(A,te),X=nm(A,Ve);if(Z&&X&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var Q=mt.createRange();Q.setStart(Z.node,Z.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(Q),ot.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),ot.addRange(Q))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}bc=!!uh,fh=uh=null}finally{Ue=u,H.p=o,F.T=a}}e.current=n,dn=2}}function xg(){if(dn===2){dn=0;var e=qa,n=gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{Y0(e,n.alternate,n)}finally{Ue=u,H.p=o,F.T=a}}dn=3}}function Sg(){if(dn===4||dn===3){dn=0,L();var e=qa,n=gs,a=ha,o=sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,gs=qa=null,yg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Xr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{F.T=n,H.p=u}}(ha&3)!==0&&hc(),Vi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?Oo++:(Oo=0,Qf=e):Oo=0,Po(0)}}function yg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mo(n)))}function hc(){return vg(),xg(),Sg(),Mg()}function Mg(){if(dn!==5)return!1;var e=qa,n=jf;jf=0;var a=Xr(ha),o=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=Kf,Kf=null;var h=qa,S=ha;if(dn=0,gs=qa=null,ha=0,(Ue&6)!==0)throw Error(r(331));var A=Ue;if(Ue|=4,ig(h.current),tg(h,h.current,S,a),Ue=A,Po(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,h)}catch{}return!0}finally{H.p=u,F.T=o,yg(e,n)}}function Eg(e,n,a){n=ui(a,n),n=wf(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Ln(e,2),Vi(e))}function Be(e,n,a){if(e.tag===3)Eg(e,e,a);else for(;n!==null;){if(n.tag===3){Eg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=ui(a,e),a=b0(2),o=Ia(n,a,2),o!==null&&(T0(a,o,n,e),Ln(o,2),Vi(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new SS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=TS.bind(null,e,n,a),n.then(e,e))}function TS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ve&a)===a&&(en===4||en===3&&(ve&62914560)===ve&&300>E()-sc?(Ue&2)===0&&_s(e,0):Yf|=a,ms===ve&&(ms=0)),Vi(e)}function bg(e,n){n===0&&(n=Oe()),e=gr(e,n),e!==null&&(Ln(e,n),Vi(e))}function AS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(e,a)}function RS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),bg(e,a)}function CS(e,n){return Me(e,n)}var dc=null,xs=null,eh=!1,pc=!1,nh=!1,Za=0;function Vi(e){e!==xs&&e.next===null&&(xs===null?dc=xs=e:xs=xs.next=e),pc=!0,eh||(eh=!0,DS())}function Po(e,n){if(!nh&&pc){nh=!0;do for(var a=!1,o=dc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ot(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Cg(o,h))}else h=ve,h=_t(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||At(o,h)||(a=!0,Cg(o,h));o=o.next}while(a);nh=!1}}function wS(){Tg()}function Tg(){pc=eh=!1;var e=0;Za!==0&&HS()&&(e=Za);for(var n=E(),a=null,o=dc;o!==null;){var u=o.next,h=Ag(o,n);h===0?(o.next=null,a===null?dc=u:a.next=u,u===null&&(xs=a)):(a=o,(e!==0||(h&3)!==0)&&(pc=!0)),o=u}dn!==0&&dn!==5||Po(e),Za!==0&&(Za=0)}function Ag(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Ot(h),A=1<<S,I=u[S];I===-1?((A&a)===0||(A&o)!==0)&&(u[S]=ie(A,n)):I<=n&&(e.expiredLanes|=A),h&=~A}if(n=Xe,a=ve,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),Xr(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=Rt;break;default:a=ct}return o=Rg.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function Rg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hc()&&e.callbackNode!==a)return null;var o=ve;return o=_t(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(lg(e,o,n),Ag(e,E()),e.callbackNode!=null&&e.callbackNode===a?Rg.bind(null,e):null)}function Cg(e,n){if(hc())return null;lg(e,n,!0)}function DS(){VS(function(){(Ue&6)!==0?Me(dt,wS):Tg()})}function ih(){if(Za===0){var e=as;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Za=e}return Za}function wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Dg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function US(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=wg((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?wg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new Al("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var I=S?Dg(u,S):new FormData(u);Ef(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=S?Dg(u,S):new FormData(u),Ef(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var ah=0;ah<Iu.length;ah++){var rh=Iu[ah],LS=rh.toLowerCase(),NS=rh[0].toUpperCase()+rh.slice(1);Ri(LS,"on"+NS)}Ri(om,"onAnimationEnd"),Ri(lm,"onAnimationIteration"),Ri(cm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(jx,"onTransitionRun"),Ri(Kx,"onTransitionStart"),Ri(Qx,"onTransitionCancel"),Ri(um,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],I=A.instance,J=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=J;try{h(u)}catch(ft){wl(ft)}u.currentTarget=null,h=I}else for(S=0;S<o.length;S++){if(A=o[S],I=A.instance,J=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=J;try{h(u)}catch(ft){wl(ft)}u.currentTarget=null,h=I}}}}function ge(e,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var o=e+"__bubble";a.has(o)||(Lg(n,e,2,!1),a.add(o))}function sh(e,n,a){var o=0;n&&(o|=4),Lg(a,e,o,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[mc]){e[mc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(OS.has(a)||sh(a,!1,e),sh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mc]||(n[mc]=!0,sh("selectionchange",!1,n))}}function Lg(e,n,a,o){switch(o_(n)){case 2:var u=ly;break;case 8:u=cy;break;default:u=Mh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=wa(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=h=S;continue t}A=A.parentNode}}o=o.return}Bp(function(){var J=h,ft=bu(a),mt=[];t:{var tt=fm.get(e);if(tt!==void 0){var ot=Al,Gt=e;switch(e){case"keypress":if(bl(a)===0)break t;case"keydown":case"keyup":ot=Rx;break;case"focusin":Gt="focus",ot=Du;break;case"focusout":Gt="blur",ot=Du;break;case"beforeblur":case"afterblur":ot=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Dx;break;case om:case lm:case cm:ot=vx;break;case um:ot=Lx;break;case"scroll":case"scrollend":ot=dx;break;case"wheel":ot=Ox;break;case"copy":case"cut":case"paste":ot=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Vp;break;case"toggle":case"beforetoggle":ot=zx}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),Z=te?tt!==null?tt+"Capture":null:tt;te=[];for(var X=J,Q;X!==null;){var pt=X;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Z===null||(pt=io(X,Z),pt!=null&&te.push(Bo(X,pt,Q))),Ve)break;X=X.return}0<te.length&&(tt=new ot(tt,Gt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==Eu&&(Gt=a.relatedTarget||a.fromElement)&&(wa(Gt)||Gt[Ti]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=J,Gt=Gt?wa(Gt):null,Gt!==null&&(Ve=c(Gt),te=Gt.tag,Gt!==Ve||te!==5&&te!==27&&te!==6)&&(Gt=null)):(ot=null,Gt=J),ot!==Gt)){if(te=Hp,pt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=Vp,pt="onPointerLeave",Z="onPointerEnter",X="pointer"),Ve=ot==null?tt:hr(ot),Q=Gt==null?tt:hr(Gt),tt=new te(pt,X+"leave",ot,a,ft),tt.target=Ve,tt.relatedTarget=Q,pt=null,wa(ft)===J&&(te=new te(Z,X+"enter",Gt,a,ft),te.target=Q,te.relatedTarget=Ve,pt=te),Ve=pt,ot&&Gt)e:{for(te=PS,Z=ot,X=Gt,Q=0,pt=Z;pt;pt=te(pt))Q++;pt=0;for(var Kt=X;Kt;Kt=te(Kt))pt++;for(;0<Q-pt;)Z=te(Z),Q--;for(;0<pt-Q;)X=te(X),pt--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){te=Z;break e}Z=te(Z),X=te(X)}te=null}else te=null;ot!==null&&Ng(mt,tt,ot,te,!1),Gt!==null&&Ve!==null&&Ng(mt,Ve,Gt,te,!0)}}t:{if(tt=J?hr(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Ae=Kp;else if(Zp(tt))if(Qp)Ae=qx;else{Ae=kx;var Yt=Xx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Ai(J.elementType)&&(Ae=Kp):Ae=Wx;if(Ae&&(Ae=Ae(e,J))){jp(mt,Ae,a,ft);break t}Yt&&Yt(e,tt,J),e==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&Mn(tt,"number",tt.value)}switch(Yt=J?hr(J):window,e){case"focusin":(Zp(Yt)||Yt.contentEditable==="true")&&(Kr=Yt,zu=J,fo=null);break;case"focusout":fo=zu=Kr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,rm(mt,a,ft);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":rm(mt,a,ft)}var ce;if(Lu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else jr?qp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Xp&&a.locale!=="ko"&&(jr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&jr&&(ce=Fp()):(La=ft,Ru="value"in La?La.value:La.textContent,jr=!0)),Yt=gc(J,xe),0<Yt.length&&(xe=new Gp(xe,e,null,a,ft),mt.push({event:xe,listeners:Yt}),ce?xe.data=ce:(ce=Yp(a),ce!==null&&(xe.data=ce)))),(ce=Fx?Ix(e,a):Hx(e,a))&&(xe=gc(J,"onBeforeInput"),0<xe.length&&(Yt=new Gp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:xe}),Yt.data=ce)),US(mt,e,J,a,ft)}Ug(mt,n)})}function Bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=io(e,a),u!=null&&o.unshift(Bo(e,u,h)),u=io(e,n),u!=null&&o.push(Bo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function PS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ng(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,I=A.alternate,J=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||J===null||(I=J,u?(J=io(a,h),J!=null&&S.unshift(Bo(a,J,I))):u||(J=io(a,h),J!=null&&S.push(Bo(a,J,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var zS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(BS,"")}function Pg(e,n){return n=Og(n),Og(e)===n}function Ge(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":qr(e,o,h);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),kt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":kt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fx.get(a)||a,kt(e,a,o))}}function ch(e,n,a,o,u,h){switch(a){case"style":qr(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?hn(e,o):(typeof o=="number"||typeof o=="bigint")&&hn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):kt(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,h,S,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=h=S=u=null,I=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":S=ft;break;case"checked":I=ft;break;case"defaultChecked":J=ft;break;case"value":h=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(e,n,o,ft,a,null)}}Ki(e,h,A,I,J,S,u,!1);return;case"select":ge("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?li(e,!!o,n,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ge(e,n,S,A,a,null)}En(e,o,u,h);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,I,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)ge(zo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,J,o,a,null)}return;default:if(Ai(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&ch(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function FS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,I=null,J=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:o.hasOwnProperty(ot)||Ge(e,n,ot,null,o,mt)}}for(var tt in o){var ot=o[tt];if(mt=a[tt],o.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":h=ot;break;case"name":u=ot;break;case"checked":J=ot;break;case"defaultChecked":ft=ot;break;case"value":S=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ge(e,n,tt,ot,o,mt)}}yn(e,S,A,I,J,ft,h,u);return;case"select":ot=S=A=tt=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":tt=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==I&&Ge(e,n,u,h,o,I)}n=A,a=S,o=ot,tt!=null?li(e,!!a,tt,!1):!!o!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":tt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ge(e,n,S,u,o,h)}Pe(e,tt,ot);return;case"option":for(var Gt in a)tt=a[Gt],a.hasOwnProperty(Gt)&&tt!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ge(e,n,Gt,null,o,tt));for(I in o)tt=o[I],ot=a[I],o.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ge(e,n,I,tt,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!o.hasOwnProperty(te)&&Ge(e,n,te,null,o,tt);for(J in o)if(tt=o[J],ot=a[J],o.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ge(e,n,J,tt,o,ot)}return;default:if(Ai(n)){for(var Ve in a)tt=a[Ve],a.hasOwnProperty(Ve)&&tt!==void 0&&!o.hasOwnProperty(Ve)&&ch(e,n,Ve,void 0,o,tt);for(ft in o)tt=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||ch(e,n,ft,tt,o,ot);return}}for(var Z in a)tt=a[Z],a.hasOwnProperty(Z)&&tt!=null&&!o.hasOwnProperty(Z)&&Ge(e,n,Z,null,o,tt);for(mt in o)tt=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ge(e,n,mt,tt,o,ot)}function zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,A=u.duration;if(h&&A&&zg(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],J=I.startTime;if(J>A)break;var ft=I.transferSize,mt=I.initiatorType;ft&&zg(mt)&&(I=I.responseEnd,S+=ft*(I<A?1:(A-J)/(I-J)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function Bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function HS(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(e){return Hg.resolve(null).then(e).catch(XS)}:Ig;function XS(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Gg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[fr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);Es(n)}function Vg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function WS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);no(e)}var gi=new Map,Yg=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=H.d;H.d={f:YS,r:ZS,D:jS,C:KS,L:QS,m:JS,X:ty,S:$S,M:ey};function YS(){var e=da.f(),n=cc();return e||n}function ZS(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?u0(n):da.r(e)}var Ss=typeof document>"u"?null:document;function Zg(e,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yg.has(u)||(Yg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),R(n),o.head.appendChild(n)))}}function jS(e){da.D(e),Zg("dns-prefetch",e,null)}function KS(e,n){da.C(e,n),Zg("preconnect",e,n)}function QS(e,n,a){da.L(e,n,a);var o=Ss;if(o&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var h=u;switch(n){case"style":h=ys(e);break;case"script":h=Ms(e)}gi.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(h))||n==="script"&&o.querySelector(Ho(h))||(n=o.createElement("link"),wn(n,"link",e),R(n),o.head.appendChild(n)))}}function JS(e,n){da.m(e,n);var a=Ss;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ms(e)}if(!gi.has(h)&&(e=g({rel:"modulepreload",href:e},n),gi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(h)))return}o=a.createElement("link"),wn(o,"link",e),R(o),a.head.appendChild(o)}}}function $S(e,n,a){da.S(e,n,a);var o=Ss;if(o&&e){var u=Ua(o).hoistableStyles,h=ys(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Io(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(h))&&vh(e,a);var I=S=o.createElement("link");R(I),wn(I,"link",e),I._p=new Promise(function(J,ft){I.onload=J,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,xc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function ty(e,n){da.X(e,n);var a=Ss;if(a&&e){var o=Ua(a).hoistableScripts,u=Ms(e),h=o.get(u);h||(h=a.querySelector(Ho(u)),h||(e=g({src:e,async:!0},n),(n=gi.get(u))&&xh(e,n),h=a.createElement("script"),R(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ey(e,n){da.M(e,n);var a=Ss;if(a&&e){var o=Ua(a).hoistableScripts,u=Ms(e),h=o.get(u);h||(h=a.querySelector(Ho(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&xh(e,n),h=a.createElement("script"),R(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function jg(e,n,a,o){var u=(u=et.current)?vc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ys(a.href);var h=Ua(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Io(e)))&&!h._p&&(S.instance=h,S.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),h||ny(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ms(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ys(e){return'href="'+ae(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),R(n),e.head.appendChild(n))}function Ms(e){return'[src="'+ae(e)+'"]'}function Ho(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),wn(o,"style",u),xc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ys(a.href);var h=e.querySelector(Io(u));if(h)return n.state.loading|=4,n.instance=h,R(h),h;o=Kg(a),(u=gi.get(u))&&vh(o,u),h=(e.ownerDocument||e).createElement("link"),R(h);var S=h;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),wn(h,"link",o),n.state.loading|=4,xc(h,a.precedence,e),n.instance=h;case"script":return h=Ms(a.src),(u=e.querySelector(Ho(h)))?(n.instance=u,R(u),u):(o=a,(u=gi.get(h))&&(o=g({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,e));return n.instance}function xc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sc=null;function Jg(e,n,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[fr]||h[sn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ay(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),h=n.querySelector(Io(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=yc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,R(h);return}h=n.ownerDocument||n,o=Kg(o),(u=gi.get(u))&&vh(o,u),h=h.createElement("link"),R(h);var S=h;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),wn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sh=0;function ry(e,n){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Sh===0&&(Sh=62500*IS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,n.forEach(sy,e),Mc=null,yc.call(e))}function sy(e,n){if(!(n.state.loading&4)){var a=Mc.get(e);if(a)var o=a.get(null);else{a=new Map,Mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:D,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function oy(e,n,a,o,u,h,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,h,S,A,I,J,ft,mt){return e=new oy(e,n,a,S,I,J,ft,mt,A),n=1,h===!0&&(n|=24),h=Jn(3,null,null,n),e.current=h,h.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),e}function n_(e){return e?(e=$r,e):$r}function i_(e,n,a,o,u,h){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ia(e,o,n),a!==null&&(Zn(a,e,n),xo(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function yh(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function r_(e){if(e.tag===13||e.tag===31){var n=gr(e,67108864);n!==null&&Zn(n,e,67108864),yh(e,67108864)}}function s_(e){if(e.tag===13||e.tag===31){var n=ii();n=$s(n);var a=gr(e,n);a!==null&&Zn(a,e,n),yh(e,n)}}var bc=!0;function ly(e,n,a,o){var u=F.T;F.T=null;var h=H.p;try{H.p=2,Mh(e,n,a,o)}finally{H.p=h,F.T=u}}function cy(e,n,a,o){var u=F.T;F.T=null;var h=H.p;try{H.p=8,Mh(e,n,a,o)}finally{H.p=h,F.T=u}}function Mh(e,n,a,o){if(bc){var u=Eh(o);if(u===null)lh(e,n,o,Tc,a),l_(e,o);else if(fy(u,e,n,a,o))o.stopPropagation();else if(l_(e,o),n&4&&-1<uy.indexOf(e)){for(;u!==null;){var h=Da(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=St(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-Ot(S);A.entanglements[1]|=I,S&=~I}Vi(h),(Ue&6)===0&&(oc=E()+500,Po(0))}}break;case 31:case 13:A=gr(h,2),A!==null&&Zn(A,h,2),cc(),yh(h,2)}if(h=Eh(o),h===null&&lh(e,n,o,Tc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function Eh(e){return e=bu(e),bh(e)}var Tc=null;function bh(e){if(Tc=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function o_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case vt:return 8;case ct:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Th=!1,Ka=null,Qa=null,Ja=null,Vo=new Map,Xo=new Map,$a=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function ko(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&r_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fy(e,n,a,o,u){switch(n){case"focusin":return Ka=ko(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=ko(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=ko(Ja,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Vo.set(h,ko(Vo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Xo.set(h,ko(Xo.get(h)||null,e,n,a,o,u)),!0}return!1}function c_(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Fi(e.priority,function(){s_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Fi(e.priority,function(){s_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Eu=o,a.target.dispatchEvent(o),Eu=null}else return n=Da(a),n!==null&&r_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){Ac(e)&&a.delete(n)}function hy(){Th=!1,Ka!==null&&Ac(Ka)&&(Ka=null),Qa!==null&&Ac(Qa)&&(Qa=null),Ja!==null&&Ac(Ja)&&(Ja=null),Vo.forEach(u_),Xo.forEach(u_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hy)))}var Cc=null;function f_(e){Cc!==e&&(Cc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(bh(o||a)===null)continue;break}var h=Da(a);h!==null&&(e.splice(n,3),n-=3,Ef(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Es(e){function n(I){return Rc(I,e)}Ka!==null&&Rc(Ka,e),Qa!==null&&Rc(Qa,e),Ja!==null&&Rc(Ja,e),Vo.forEach(n),Xo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)c_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[Sn]||null;if(typeof h=="function")S||f_(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[Sn]||null)A=S.formAction;else if(bh(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),f_(a)}}}function h_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}wc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();i_(a,o,e,n,null,null)},wc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),cc(),n[Ti]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=to();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&c_(e)}};var d_=t.version;if(d_!=="19.2.4")throw Error(r(527,d_,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var dy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Mt=Dc.inject(dy),Et=Dc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=S0,h=y0,S=M0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=e_(e,1,!1,null,null,a,o,null,u,h,S,h_),e[Ti]=n.current,oh(e),new Ah(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=S0,S=y0,A=M0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=e_(e,1,!0,n,a??null,o,u,I,h,S,A,h_),n.context=n_(null),a=n.current,o=ii(),o=$s(o),u=Fa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Vi(n),e[Ti]=n.current,oh(e),new wc(n)},qo.version="19.2.4",qo}var E_;function by(){if(E_)return wh.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),wh.exports=Ey(),wh.exports}var Ty=by();const Ay=Rv(Ty);const gp="182",Ry=0,b_=1,Cy=2,ru=1,wy=2,il=3,Kn=0,jn=1,Sa=2,Ma=0,Xs=1,Ei=2,T_=3,A_=4,Dy=5,zr=100,Uy=101,Ly=102,Ny=103,Oy=104,Py=200,zy=201,By=202,Fy=203,vd=204,xd=205,Iy=206,Hy=207,Gy=208,Vy=209,Xy=210,ky=211,Wy=212,qy=213,Yy=214,Sd=0,yd=1,Md=2,Ws=3,Ed=4,bd=5,Td=6,Ad=7,Cv=0,Zy=1,jy=2,Yi=0,wv=1,Dv=2,Uv=3,Lv=4,Nv=5,Ov=6,Pv=7,zv=300,Hr=301,qs=302,Rd=303,Cd=304,vu=306,wd=1e3,ya=1001,Dd=1002,Dn=1003,Ky=1004,Uc=1005,We=1006,Nh=1007,Fr=1008,yi=1009,Bv=1010,Fv=1011,cl=1012,_p=1013,ji=1014,Wi=1015,Ta=1016,vp=1017,xp=1018,ul=1020,Iv=35902,Hv=35899,Gv=1021,Vv=1022,Pi=1023,Aa=1026,Ir=1027,Xv=1028,Sp=1029,Ys=1030,yp=1031,Mp=1033,su=33776,ou=33777,lu=33778,cu=33779,Ud=35840,Ld=35841,Nd=35842,Od=35843,Pd=36196,zd=37492,Bd=37496,Fd=37488,Id=37489,Hd=37490,Gd=37491,Vd=37808,Xd=37809,kd=37810,Wd=37811,qd=37812,Yd=37813,Zd=37814,jd=37815,Kd=37816,Qd=37817,Jd=37818,$d=37819,tp=37820,ep=37821,np=36492,ip=36494,ap=36495,rp=36283,sp=36284,op=36285,lp=36286,Qy=3200,Jy=0,$y=1,or="",zn="srgb",Zs="srgb-linear",fu="linear",Fe="srgb",bs=7680,R_=519,tM=512,eM=513,nM=514,Ep=515,iM=516,aM=517,bp=518,rM=519,cp=35044,C_="300 es",qi=2e3,hu=2001;function kv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sM(){const s=fl("canvas");return s.style.display="block",s}const w_={};function du(...s){const t="THREE."+s.shift();console.log(t,...s)}function ne(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Ee(...s){const t="THREE."+s.shift();console.error(t,...s)}function hl(...s){const t=s.join(" ");t in w_||(w_[t]=!0,ne(...s))}function oM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let D_=1234567;const rl=Math.PI/180,dl=180/Math.PI;function Ea(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function he(s,t,i){return Math.max(t,Math.min(i,s))}function Tp(s,t){return(s%t+t)%t}function lM(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function cM(s,t,i){return s!==t?(i-s)/(t-s):0}function sl(s,t,i){return(1-i)*s+i*t}function uM(s,t,i,r){return sl(s,t,1-Math.exp(-i*r))}function fM(s,t=1){return t-Math.abs(Tp(s,t*2)-t)}function hM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function dM(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function pM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mM(s,t){return s+Math.random()*(t-s)}function gM(s){return s*(.5-Math.random())}function _M(s){s!==void 0&&(D_=s);let t=D_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vM(s){return s*rl}function xM(s){return s*dl}function SM(s){return(s&s-1)===0&&s!==0}function yM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function MM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function EM(s,t,i,r,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+r)/2),_=f((t+r)/2),g=c((t-r)/2),x=f((t-r)/2),y=c((r-t)/2),b=f((r-t)/2);switch(l){case"XYX":s.set(d*_,m*g,m*x,d*p);break;case"YZY":s.set(m*x,d*_,m*g,d*p);break;case"ZXZ":s.set(m*g,m*x,d*_,d*p);break;case"XZX":s.set(d*_,m*b,m*y,d*p);break;case"YXY":s.set(m*y,d*_,m*b,d*p);break;case"ZYZ":s.set(m*b,m*y,d*_,d*p);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bM={DEG2RAD:rl,RAD2DEG:dl,generateUUID:Ea,clamp:he,euclideanModulo:Tp,mapLinear:lM,inverseLerp:cM,lerp:sl,damp:uM,pingpong:fM,smoothstep:hM,smootherstep:dM,randInt:pM,randFloat:mM,randFloatSpread:gM,seededRandom:_M,degToRad:vM,radToDeg:xM,isPowerOfTwo:SM,ceilPowerOfTwo:yM,floorPowerOfTwo:MM,setQuaternionFromProperEuler:EM,normalize:Ie,denormalize:Oi};class Qt{constructor(t=0,i=0){Qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=c[f+0],y=c[f+1],b=c[f+2],T=c[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==x||p!==y||_!==b){let M=m*x+p*y+_*b+g*T;M<0&&(x=-x,y=-y,b=-b,T=-T,M=-M);let v=1-d;if(M<.9995){const O=Math.acos(M),D=Math.sin(O);v=Math.sin(v*O)/D,d=Math.sin(d*O)/D,m=m*v+x*d,p=p*v+y*d,_=_*v+b*d,g=g*v+T*d}else{m=m*v+x*d,p=p*v+y*d,_=_*v+b*d,g=g*v+T*d;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[i]=d*b+_*g+m*y-p*x,t[i+1]=m*b+_*x+p*g-d*y,t[i+2]=p*b+_*y+d*x-m*g,t[i+3]=_*b-d*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"YXZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"ZXY":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"ZYX":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"YZX":this._x=x*_*g+p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g-x*y*b;break;case"XZY":this._x=x*_*g-p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g+x*y*b;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-r*p,this._z=c*_+f*p+r*m-l*d,this._w=f*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,r=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),_=2*(d*i-c*l),g=2*(c*r-f*i);return this.x=i+m*p+f*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Oh.copy(this).projectOnVector(t),this.sub(Oh)}reflect(t){return this.sub(Oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(he(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new W,U_=new ml;class ue{constructor(t,i,r,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],b=r[8],T=l[0],M=l[3],v=l[6],O=l[1],D=l[4],U=l[7],B=l[2],z=l[5],P=l[8];return c[0]=f*T+d*O+m*B,c[3]=f*M+d*D+m*z,c[6]=f*v+d*U+m*P,c[1]=p*T+_*O+g*B,c[4]=p*M+_*D+g*z,c[7]=p*v+_*U+g*P,c[2]=x*T+y*O+b*B,c[5]=x*M+y*D+b*z,c[8]=x*v+y*U+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-r*c*_+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*f-d*p,x=d*m-_*c,y=p*c-f*m,b=i*g+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-_*r)*T,t[2]=(d*r-l*f)*T,t[3]=x*T,t[4]=(_*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=y*T,t[7]=(r*m-p*i)*T,t[8]=(f*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ph.makeScale(t,i)),this}rotate(t){return this.premultiply(Ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new ue,L_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TM(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=ks(l.r),l.g=ks(l.g),l.b=ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:t,whitePoint:r,transfer:fu,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),s}const Te=TM();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class AM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ts===void 0&&(Ts=fl("canvas")),Ts.width=t.width,Ts.height=t.height;const l=Ts.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=fl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RM=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Ea(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(zh(l[f].image)):c.push(zh(l[f]))}else c=zh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function zh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?AM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let CM=0;const Bh=new W;class Un extends Ks{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=ya,l=ya,c=We,f=Fr,d=Pi,m=yi,p=Un.DEFAULT_ANISOTROPY,_=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Ea(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case Dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case Dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=zv;Un.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],b=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(y+1)/2,B=(v+1)/2,z=(_+x)/4,P=(g+T)/4,j=(b+M)/4;return D>U&&D>B?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=z/r,c=P/r):U>B?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=z/l,c=j/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=P/c,l=j/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-b)*(M-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(g-T)/O,this.z=(x-_)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this.w=he(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this.w=he(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(he(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends Ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Un(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ap(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends wM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Wv extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lc.copy(r.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Nc.subVectors(this.max,Yo),As.subVectors(t.a,Yo),Rs.subVectors(t.b,Yo),Cs.subVectors(t.c,Yo),er.subVectors(Rs,As),nr.subVectors(Cs,Rs),wr.subVectors(As,Cs);let i=[0,-er.z,er.y,0,-nr.z,nr.y,0,-wr.z,wr.y,er.z,0,-er.x,nr.z,0,-nr.x,wr.z,0,-wr.x,-er.y,er.x,0,-nr.y,nr.x,0,-wr.y,wr.x,0];return!Fh(i,As,Rs,Cs,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,As,Rs,Cs,Nc))?!1:(Oc.crossVectors(er,nr),i=[Oc.x,Oc.y,Oc.z],Fh(i,As,Rs,Cs,Nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new W,new W,new W,new W,new W,new W,new W,new W],Di=new W,Lc=new gl,As=new W,Rs=new W,Cs=new W,er=new W,nr=new W,wr=new W,Yo=new W,Nc=new W,Oc=new W,Dr=new W;function Fh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Dr.fromArray(s,c);const d=l.x*Math.abs(Dr.x)+l.y*Math.abs(Dr.y)+l.z*Math.abs(Dr.z),m=t.dot(Dr),p=i.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const UM=new gl,Zo=new W,Ih=new W;class _l{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):UM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Ih)),this.expandByPoint(Zo.copy(t.center).sub(Ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ma=new W,Hh=new W,Pc=new W,ir=new W,Gh=new W,zc=new W,Vh=new W;class xu{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Hh.copy(t).add(i).multiplyScalar(.5),Pc.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(Hh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Pc),d=ir.dot(this.direction),m=-ir.dot(Pc),p=ir.lengthSq(),_=Math.abs(1-f*f);let g,x,y,b;if(_>0)if(g=f*m-d,x=f*d-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,y=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Hh).addScaledVector(Pc,x),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,r,l,c){Gh.subVectors(i,t),zc.subVectors(r,t),Vh.crossVectors(Gh,zc);let f=this.direction.dot(Vh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ir.subVectors(this.origin,t);const m=d*this.direction.dot(zc.crossVectors(ir,zc));if(m<0)return null;const p=d*this.direction.dot(Gh.cross(ir));if(p<0||m+p>f)return null;const _=-d*ir.dot(Vh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,f,d,m,p,_,g,x,y,b,T,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,_,g,x,y,b,T,M)}set(t,i,r,l,c,f,d,m,p,_,g,x,y,b,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=b,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/ws.setFromMatrixColumn(t,0).length(),c=1/ws.setFromMatrixColumn(t,1).length(),f=1/ws.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,y=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,b=p*_,T=p*g;i[0]=x+T*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=y*d-b,i[6]=T+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,b=p*_,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*_,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*_,y=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+y,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=x-T*g}else if(t.order==="XZY"){const x=f*m,y=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=f*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LM,t,NM)}lookAt(t,i,r){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ar.crossVectors(r,ai),ar.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ar.crossVectors(r,ai)),ar.normalize(),Bc.crossVectors(ai,ar),l[0]=ar.x,l[4]=Bc.x,l[8]=ai.x,l[1]=ar.y,l[5]=Bc.y,l[9]=ai.y,l[2]=ar.z,l[6]=Bc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],b=r[2],T=r[6],M=r[10],v=r[14],O=r[3],D=r[7],U=r[11],B=r[15],z=l[0],P=l[4],j=l[8],C=l[12],w=l[1],V=l[5],rt=l[9],it=l[13],ht=l[2],lt=l[6],F=l[10],H=l[14],at=l[3],yt=l[7],xt=l[11],N=l[15];return c[0]=f*z+d*w+m*ht+p*at,c[4]=f*P+d*V+m*lt+p*yt,c[8]=f*j+d*rt+m*F+p*xt,c[12]=f*C+d*it+m*H+p*N,c[1]=_*z+g*w+x*ht+y*at,c[5]=_*P+g*V+x*lt+y*yt,c[9]=_*j+g*rt+x*F+y*xt,c[13]=_*C+g*it+x*H+y*N,c[2]=b*z+T*w+M*ht+v*at,c[6]=b*P+T*V+M*lt+v*yt,c[10]=b*j+T*rt+M*F+v*xt,c[14]=b*C+T*it+M*H+v*N,c[3]=O*z+D*w+U*ht+B*at,c[7]=O*P+D*V+U*lt+B*yt,c[11]=O*j+D*rt+U*F+B*xt,c[15]=O*C+D*it+U*H+B*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],b=t[3],T=t[7],M=t[11],v=t[15],O=m*y-p*x,D=d*y-p*g,U=d*x-m*g,B=f*y-p*_,z=f*x-m*_,P=f*g-d*_;return i*(T*O-M*D+v*U)-r*(b*O-M*B+v*z)+l*(b*D-T*B+v*P)-c*(b*U-T*z+M*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],b=t[12],T=t[13],M=t[14],v=t[15],O=g*M*p-T*x*p+T*m*y-d*M*y-g*m*v+d*x*v,D=b*x*p-_*M*p-b*m*y+f*M*y+_*m*v-f*x*v,U=_*T*p-b*g*p+b*d*y-f*T*y-_*d*v+f*g*v,B=b*g*m-_*T*m-b*d*x+f*T*x+_*d*M-f*g*M,z=i*O+r*D+l*U+c*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=O*P,t[1]=(T*x*c-g*M*c-T*l*y+r*M*y+g*l*v-r*x*v)*P,t[2]=(d*M*c-T*m*c+T*l*p-r*M*p-d*l*v+r*m*v)*P,t[3]=(g*m*c-d*x*c-g*l*p+r*x*p+d*l*y-r*m*y)*P,t[4]=D*P,t[5]=(_*M*c-b*x*c+b*l*y-i*M*y-_*l*v+i*x*v)*P,t[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*v-i*m*v)*P,t[7]=(f*x*c-_*m*c+_*l*p-i*x*p-f*l*y+i*m*y)*P,t[8]=U*P,t[9]=(b*g*c-_*T*c-b*r*y+i*T*y+_*r*v-i*g*v)*P,t[10]=(f*T*c-b*d*c+b*r*p-i*T*p-f*r*v+i*d*v)*P,t[11]=(_*d*c-f*g*c-_*r*p+i*g*p+f*r*y-i*d*y)*P,t[12]=B*P,t[13]=(_*T*l-b*g*l+b*r*x-i*T*x-_*r*M+i*g*M)*P,t[14]=(b*d*l-f*T*l-b*r*m+i*T*m+f*r*M-i*d*M)*P,t[15]=(f*g*l-_*d*l+_*r*m-i*g*m-f*r*x+i*d*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,g=d+d,x=c*p,y=c*_,b=c*g,T=f*_,M=f*g,v=d*g,O=m*p,D=m*_,U=m*g,B=r.x,z=r.y,P=r.z;return l[0]=(1-(T+v))*B,l[1]=(y+U)*B,l[2]=(b-D)*B,l[3]=0,l[4]=(y-U)*z,l[5]=(1-(x+v))*z,l[6]=(M+O)*z,l[7]=0,l[8]=(b+D)*P,l[9]=(M-O)*P,l[10]=(1-(x+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ws.set(l[0],l[1],l[2]).length();const f=ws.set(l[4],l[5],l[6]).length(),d=ws.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const p=1/c,_=1/f,g=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=_,Ui.elements[5]*=_,Ui.elements[6]*=_,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,i.setFromRotationMatrix(Ui),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=qi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(d===qi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===hu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=qi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(d===qi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===hu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ws=new W,Ui=new Ze,LM=new W(0,0,0),NM=new W(1,1,1),ar=new W,Bc=new W,ai=new W,O_=new Ze,P_=new ml;class Ra{constructor(t=0,i=0,r=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(he(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-he(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(he(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OM=0;const z_=new W,Ds=new ml,ga=new Ze,Fc=new W,jo=new W,PM=new W,zM=new ml,B_=new W(1,0,0),F_=new W(0,1,0),I_=new W(0,0,1),H_={type:"added"},BM={type:"removed"},Us={type:"childadded",child:null},Xh={type:"childremoved",child:null};class Bn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new W,i=new Ra,r=new ml,l=new W(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ue}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(B_,t)}rotateY(t){return this.rotateOnAxis(F_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(B_,t)}translateY(t){return this.translateOnAxis(F_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Fc.copy(t):Fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Fc,this.up):ga.lookAt(Fc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Ds.setFromRotationMatrix(ga),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),Us.child=t,this.dispatchEvent(Us),Us.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(BM),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,zM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new W(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new W,_a=new W,kh=new W,va=new W,Ls=new W,Ns=new W,G_=new W,Wh=new W,qh=new W,Yh=new W,Zh=new rn,jh=new rn,Kh=new rn;class Mi{constructor(t=new W,i=new W,r=new W){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Li.subVectors(t,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Li.subVectors(l,i),_a.subVectors(r,i),kh.subVectors(t,i);const f=Li.dot(Li),d=Li.dot(_a),m=Li.dot(kh),p=_a.dot(_a),_=_a.dot(kh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-d*_)*x,b=(f*_-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(f,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return Zh.setScalar(0),jh.setScalar(0),Kh.setScalar(0),Zh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,r),Kh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Zh,c.x),f.addScaledVector(jh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(t,i,r,l){return Li.subVectors(r,i),_a.subVectors(t,i),Li.cross(_a).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Li.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;Ls.subVectors(l,r),Ns.subVectors(c,r),Wh.subVectors(t,r);const m=Ls.dot(Wh),p=Ns.dot(Wh);if(m<=0&&p<=0)return i.copy(r);qh.subVectors(t,l);const _=Ls.dot(qh),g=Ns.dot(qh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Ls,f);Yh.subVectors(t,c);const y=Ls.dot(Yh),b=Ns.dot(Yh);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Ns,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return G_.subVectors(c,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(G_,d);const v=1/(M+T+x);return f=T*v,d=x*v,i.copy(r).addScaledVector(Ls,f).addScaledVector(Ns,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Qh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ye{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=Tp(t,1),i=he(i,0,1),r=he(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Qh(f,c,t+1/3),this.g=Qh(f,c,t),this.b=Qh(f,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=zn){function r(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=zn){const r=qv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Te.workingToColorSpace(Pn.copy(this),t),Math.round(he(Pn.r*255,0,255))*65536+Math.round(he(Pn.g*255,0,255))*256+Math.round(he(Pn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=zn){Te.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==zn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+i,rr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(rr),t.getHSL(Ic);const r=sl(rr.h,Ic.h,i),l=sl(rr.s,Ic.s,i),c=sl(rr.l,Ic.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ye;ye.NAMES=qv;let FM=0;class Gr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ea(),this.name="",this.type="Material",this.blending=Xs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Kn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==xd&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zi extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new W,Hc=new Qt;let IM=0;class Fn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=cp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Hc.fromBufferAttribute(this,i),Hc.applyMatrix3(t),this.setXY(i,Hc.x,Hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oi(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oi(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oi(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cp&&(t.usage=this.usage),t}}class Yv extends Fn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Zv extends Fn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class In extends Fn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let HM=0;const _i=new Ze,Jh=new Bn,Os=new W,ri=new gl,Ko=new gl,_n=new W;class vn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?Zv:Yv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,r){return _i.makeTranslation(t,i,r),this.applyMatrix4(_i),this}scale(t,i,r){return _i.makeScale(t,i,r),this.applyMatrix4(_i),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ri.min,Ko.min),ri.expandByPoint(_n),_n.addVectors(ri.max,Ko.max),ri.expandByPoint(_n)):(ri.expandByPoint(Ko.min),ri.expandByPoint(Ko.max))}ri.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)_n.fromBufferAttribute(d,p),m&&(Os.fromBufferAttribute(t,p),_n.add(Os)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new W,m[j]=new W;const p=new W,_=new W,g=new W,x=new Qt,y=new Qt,b=new Qt,T=new W,M=new W;function v(j,C,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),x.fromBufferAttribute(c,j),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),d[j].add(T),d[C].add(T),d[w].add(T),m[j].add(M),m[C].add(M),m[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let j=0,C=O.length;j<C;++j){const w=O[j],V=w.start,rt=w.count;for(let it=V,ht=V+rt;it<ht;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const D=new W,U=new W,B=new W,z=new W;function P(j){B.fromBufferAttribute(l,j),z.copy(B);const C=d[j];D.copy(C),D.sub(B.multiplyScalar(B.dot(C))).normalize(),U.crossVectors(z,C);const V=U.dot(m[j])<0?-1:1;f.setXYZW(j,D.x,D.y,D.z,V)}for(let j=0,C=O.length;j<C;++j){const w=O[j],V=w.start,rt=w.count;for(let it=V,ht=V+rt;it<ht;it+=3)P(t.getX(it+0)),P(t.getX(it+1)),P(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new W,c=new W,f=new W,d=new W,m=new W,p=new W,_=new W,g=new W;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new Fn(x,_,g)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Ze,Ur=new xu,Gc=new _l,X_=new W,Vc=new W,Xc=new W,kc=new W,$h=new W,Wc=new W,k_=new W,qc=new W;class xn extends Bn{constructor(t=new vn,i=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&($h.fromBufferAttribute(g,t),f?Wc.addScaledVector($h,_):Wc.addScaledVector($h.sub(i),_))}i.add(Wc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(c),Ur.copy(t.ray).recast(t.near),!(Gc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Gc,X_)===null||Ur.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(V_.copy(c).invert(),Ur.copy(t.ray).applyMatrix4(V_),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Ur)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=f[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,B=D;U<B;U+=3){const z=d.getX(U),P=d.getX(U+1),j=d.getX(U+2);l=Yc(this,v,t,r,p,_,g,z,P,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let M=b,v=T;M<v;M+=3){const O=d.getX(M),D=d.getX(M+1),U=d.getX(M+2);l=Yc(this,f,t,r,p,_,g,O,D,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const M=x[b],v=f[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=O,B=D;U<B;U+=3){const z=U,P=U+1,j=U+2;l=Yc(this,v,t,r,p,_,g,z,P,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,v=T;M<v;M+=3){const O=M,D=M+1,U=M+2;l=Yc(this,f,t,r,p,_,g,O,D,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function GM(s,t,i,r,l,c,f,d){let m;if(t.side===jn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===Kn,d),m===null)return null;qc.copy(d),qc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(qc);return p<i.near||p>i.far?null:{distance:p,point:qc.clone(),object:s}}function Yc(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Vc),s.getVertexPosition(m,Xc),s.getVertexPosition(p,kc);const _=GM(s,t,i,r,Vc,Xc,kc,k_);if(_){const g=new W;Mi.getBarycoord(k_,Vc,Xc,kc,g),l&&(_.uv=Mi.getInterpolatedAttribute(l,d,m,p,g,new Qt)),c&&(_.uv1=Mi.getInterpolatedAttribute(c,d,m,p,g,new Qt)),f&&(_.normal=Mi.getInterpolatedAttribute(f,d,m,p,g,new W),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new W,materialIndex:0};Mi.getNormal(Vc,Xc,kc,x.normal),_.face=x,_.barycoord=g}return _}class vl extends vn{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,t,f,c,0),b("z","y","x",1,-1,r,i,-t,f,c,1),b("x","z","y",1,1,t,r,i,l,f,2),b("x","z","y",1,-1,t,r,-i,l,f,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new In(p,3)),this.setAttribute("normal",new In(_,3)),this.setAttribute("uv",new In(g,2));function b(T,M,v,O,D,U,B,z,P,j,C){const w=U/P,V=B/j,rt=U/2,it=B/2,ht=z/2,lt=P+1,F=j+1;let H=0,at=0;const yt=new W;for(let xt=0;xt<F;xt++){const N=xt*V-it;for(let nt=0;nt<lt;nt++){const gt=nt*w-rt;yt[T]=gt*O,yt[M]=N*D,yt[v]=ht,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[v]=z>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(nt/P),g.push(1-xt/j),H+=1}}for(let xt=0;xt<j;xt++)for(let N=0;N<P;N++){const nt=x+N+lt*xt,gt=x+N+lt*(xt+1),Tt=x+(N+1)+lt*(xt+1),Ft=x+(N+1)+lt*xt;m.push(nt,gt,Ft),m.push(gt,Tt,Ft),at+=6}d.addGroup(y,at,C),y+=at,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Vn(s){const t={};for(let i=0;i<s.length;i++){const r=js(s[i]);for(const l in r)t[l]=r[l]}return t}function VM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function jv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const XM={clone:js,merge:Vn};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=VM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Kv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new W,W_=new Qt,q_=new Qt;class Si extends Kv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ps=-90,zs=1;class qM extends Bn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ps,zs,t,i);l.layers=this.layers,this.add(l);const c=new Si(Ps,zs,t,i);c.layers=this.layers,this.add(c);const f=new Si(Ps,zs,t,i);f.layers=this.layers,this.add(f);const d=new Si(Ps,zs,t,i);d.layers=this.layers,this.add(d);const m=new Si(Ps,zs,t,i);m.layers=this.layers,this.add(m);const p=new Si(Ps,zs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===hu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Qv extends Un{constructor(t=[],i=Hr,r,l,c,f,d,m,p,_){super(t,i,r,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vl(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new xn(l,c),d=i.minFilter;return i.minFilter===Fr&&(i.minFilter=We),new qM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class si extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new si;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Cp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Cp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ZM extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class jM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=cp,this.updateRanges=[],this.version=0,this.uuid=Ea()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ea()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ea()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new W;class pu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(t),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Oi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ie(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Oi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Oi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Oi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Oi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ie(i,this.array),r=Ie(r,this.array),l=Ie(l,this.array),c=Ie(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){du("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Fn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){du("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xl extends Gr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bs;const Qo=new W,Fs=new W,Is=new W,Hs=new Qt,Jo=new Qt,$v=new Ze,Zc=new W,$o=new W,jc=new W,Y_=new Qt,ed=new Qt,Z_=new Qt;class Su extends Bn{constructor(t=new xl){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new vn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new jM(i,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new pu(r,3,0,!1)),Bs.setAttribute("uv",new pu(r,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new Qt(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),$v.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Is.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;Kc(Zc.set(-.5,-.5,0),Is,f,Fs,l,c),Kc($o.set(.5,-.5,0),Is,f,Fs,l,c),Kc(jc.set(.5,.5,0),Is,f,Fs,l,c),Y_.set(0,0),ed.set(1,0),Z_.set(1,1);let d=t.ray.intersectTriangle(Zc,$o,jc,!1,Qo);if(d===null&&(Kc($o.set(-.5,.5,0),Is,f,Fs,l,c),ed.set(0,1),d=t.ray.intersectTriangle(Zc,jc,$o,!1,Qo),d===null))return;const m=t.ray.origin.distanceTo(Qo);m<t.near||m>t.far||i.push({distance:m,point:Qo.clone(),uv:Mi.getInterpolation(Qo,Zc,$o,jc,Y_,ed,Z_,new Qt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kc(s,t,i,r,l,c){Hs.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Jo.x=c*Hs.x-l*Hs.y,Jo.y=l*Hs.x+c*Hs.y):Jo.copy(Hs),s.copy(t),s.x+=Jo.x,s.y+=Jo.y,s.applyMatrix4($v)}class KM extends Un{constructor(t=null,i=1,r=1,l,c,f,d,m,p=Dn,_=Dn,g,x){super(null,f,d,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nd=new W,QM=new W,JM=new ue;class Pr{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=nd.subVectors(r,i).cross(QM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||JM.getNormalMatrix(t),l=this.coplanarPoint(nd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new _l,$M=new Qt(.5,.5),Qc=new W;class tx{constructor(t=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,f=new Pr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=qi,r=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],b=c[8],T=c[9],M=c[10],v=c[11],O=c[12],D=c[13],U=c[14],B=c[15];if(l[0].setComponents(p-f,y-_,v-b,B-O).normalize(),l[1].setComponents(p+f,y+_,v+b,B+O).normalize(),l[2].setComponents(p+d,y+g,v+T,B+D).normalize(),l[3].setComponents(p-d,y-g,v-T,B-D).normalize(),r)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,v-M,B-U).normalize();else if(l[4].setComponents(p-m,y-x,v-M,B-U).normalize(),i===qi)l[5].setComponents(p+m,y+x,v+M,B+U).normalize();else if(i===hu)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){Lr.center.set(0,0,0);const i=$M.distanceTo(t.center);return Lr.radius=.7071067811865476+i,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Qc.x=l.normal.x>0?t.max.x:t.min.x,Qc.y=l.normal.y>0?t.max.y:t.min.y,Qc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends Gr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mu=new W,gu=new W,j_=new Ze,tl=new xu,Jc=new _l,id=new W,K_=new W;class tE extends Bn{constructor(t=new vn,i=new ex){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)mu.fromBufferAttribute(i,l-1),gu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=mu.distanceTo(gu);t.setAttribute("lineDistance",new In(r,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(l),Jc.radius+=c,t.ray.intersectsSphere(Jc)===!1)return;j_.copy(l).invert(),tl.copy(t.ray).applyMatrix4(j_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let T=y,M=b-1;T<M;T+=p){const v=_.getX(T),O=_.getX(T+1),D=$c(this,t,tl,m,v,O,T);D&&i.push(D)}if(this.isLineLoop){const T=_.getX(b-1),M=_.getX(y),v=$c(this,t,tl,m,T,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=y,M=b-1;T<M;T+=p){const v=$c(this,t,tl,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=$c(this,t,tl,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function $c(s,t,i,r,l,c,f){const d=s.geometry.attributes.position;if(mu.fromBufferAttribute(d,l),gu.fromBufferAttribute(d,c),i.distanceSqToSegment(mu,gu,id,K_)>r)return;id.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(id);if(!(p<t.near||p>t.far))return{distance:p,point:K_.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class wp extends Gr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q_=new Ze,up=new xu,tu=new _l,eu=new W;class Dp extends Bn{constructor(t=new vn,i=new wp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),tu.copy(r.boundingSphere),tu.applyMatrix4(l),tu.radius+=c,t.ray.intersectsSphere(tu)===!1)return;Q_.copy(l).invert(),up.copy(t.ray).applyMatrix4(Q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=x,T=y;b<T;b++){const M=p.getX(b);eu.fromBufferAttribute(g,M),J_(eu,M,m,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let b=x,T=y;b<T;b++)eu.fromBufferAttribute(g,b),J_(eu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function J_(s,t,i,r,l,c,f){const d=up.distanceSqToPoint(s);if(d<i){const m=new W;up.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ur extends Un{constructor(t,i,r,l,c,f,d,m,p){super(t,i,r,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends Un{constructor(t,i,r=ji,l,c,f,d=Dn,m=Dn,p,_=Aa,g=1){if(_!==Aa&&_!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,f,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eE extends pl{constructor(t,i=ji,r=Hr,l,c,f=Dn,d=Dn,m,p=Aa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class nx extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ca{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===f)return l/(c-1);const _=r[l],x=r[l+1]-_,y=(f-_)/x;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new Qt:new W);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new W,l=[],c=[],f=[],d=new W,m=new Ze;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new W)}c[0]=new W,f[0]=new W;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);_<=p&&(p=_,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),x<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(he(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,b))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(he(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Up extends Ca{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Qt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*_-y*g+this.aX,p=x*g+y*_+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nE extends Up{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Lp(){let s=0,t=0,i=0,r=0;function l(c,f,d,m){s=c,t=d,i=-3*c+3*f-2*d-m,r=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,_,g){let x=(f-c)/p-(d-c)/(p+_)+(d-f)/_,y=(d-f)/_-(m-f)/(_+g)+(m-d)/g;x*=_,y*=_,l(f,d,x,y)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+r*d}}}const nu=new W,ad=new Lp,rd=new Lp,sd=new Lp;class ix extends Ca{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new W){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(nu.subVectors(l[0],l[1]).add(l[0]),p=nu);const g=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(nu.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=nu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(g),y),T=Math.pow(g.distanceToSquared(x),y),M=Math.pow(x.distanceToSquared(_),y);T<1e-4&&(T=1),b<1e-4&&(b=T),M<1e-4&&(M=T),ad.initNonuniformCatmullRom(p.x,g.x,x.x,_.x,b,T,M),rd.initNonuniformCatmullRom(p.y,g.y,x.y,_.y,b,T,M),sd.initNonuniformCatmullRom(p.z,g.z,x.z,_.z,b,T,M)}else this.curveType==="catmullrom"&&(ad.initCatmullRom(p.x,g.x,x.x,_.x,this.tension),rd.initCatmullRom(p.y,g.y,x.y,_.y,this.tension),sd.initCatmullRom(p.z,g.z,x.z,_.z,this.tension));return r.set(ad.calc(m),rd.calc(m),sd.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $_(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=s*s,m=s*d;return(2*i-2*r+c+f)*m+(-3*i+3*r-2*c-f)*d+c*s+i}function iE(s,t){const i=1-s;return i*i*t}function aE(s,t){return 2*(1-s)*s*t}function rE(s,t){return s*s*t}function ol(s,t,i,r){return iE(s,t)+aE(s,i)+rE(s,r)}function sE(s,t){const i=1-s;return i*i*i*t}function oE(s,t){const i=1-s;return 3*i*i*s*t}function lE(s,t){return 3*(1-s)*s*s*t}function cE(s,t){return s*s*s*t}function ll(s,t,i,r,l){return sE(s,t)+oE(s,i)+lE(s,r)+cE(s,l)}class uE extends Ca{constructor(t=new Qt,i=new Qt,r=new Qt,l=new Qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Qt){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(ll(t,l.x,c.x,f.x,d.x),ll(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fE extends Ca{constructor(t=new W,i=new W,r=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new W){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(ll(t,l.x,c.x,f.x,d.x),ll(t,l.y,c.y,f.y,d.y),ll(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hE extends Ca{constructor(t=new Qt,i=new Qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Qt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dE extends Ca{constructor(t=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new W){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pE extends Ca{constructor(t=new Qt,i=new Qt,r=new Qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Qt){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(ol(t,l.x,c.x,f.x),ol(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ax extends Ca{constructor(t=new W,i=new W,r=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new W){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(ol(t,l.x,c.x,f.x),ol(t,l.y,c.y,f.y),ol(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mE extends Ca{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Qt){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],_=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return r.set($_(d,m.x,p.x,_.x,g.x),$_(d,m.y,p.y,_.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Qt().fromArray(l))}return this}}var gE=Object.freeze({__proto__:null,ArcCurve:nE,CatmullRomCurve3:ix,CubicBezierCurve:uE,CubicBezierCurve3:fE,EllipseCurve:Up,LineCurve:hE,LineCurve3:dE,QuadraticBezierCurve:pE,QuadraticBezierCurve3:ax,SplineCurve:mE});class cr extends vn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,y=[],b=[],T=[],M=[];for(let v=0;v<_;v++){const O=v*x-f;for(let D=0;D<p;D++){const U=D*g-c;b.push(U,-O,0),T.push(0,0,1),M.push(D/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<d;O++){const D=O+p*v,U=O+p*(v+1),B=O+1+p*(v+1),z=O+1+p*v;y.push(D,U,z),y.push(U,B,z)}this.setIndex(y),this.setAttribute("position",new In(b,3)),this.setAttribute("normal",new In(T,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Np extends vn{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new W,x=new W,y=[],b=[],T=[],M=[];for(let v=0;v<=r;v++){const O=[],D=v/r;let U=0;v===0&&f===0?U=.5/i:v===r&&m===Math.PI&&(U=-.5/i);for(let B=0;B<=i;B++){const z=B/i;g.x=-t*Math.cos(l+z*c)*Math.sin(f+D*d),g.y=t*Math.cos(f+D*d),g.z=t*Math.sin(l+z*c)*Math.sin(f+D*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),M.push(z+U,1-D),O.push(p++)}_.push(O)}for(let v=0;v<r;v++)for(let O=0;O<i;O++){const D=_[v][O+1],U=_[v][O],B=_[v+1][O],z=_[v+1][O+1];(v!==0||f>0)&&y.push(D,U,z),(v!==r-1||m<Math.PI)&&y.push(U,B,z)}this.setIndex(y),this.setAttribute("position",new In(b,3)),this.setAttribute("normal",new In(T,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Np(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _u extends vn{constructor(t=new ax(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new W,m=new W,p=new Qt;let _=new W;const g=[],x=[],y=[],b=[];T(),this.setIndex(b),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(y,2));function T(){for(let D=0;D<i;D++)M(D);M(c===!1?i:0),O(),v()}function M(D){_=t.getPointAt(D/i,_);const U=f.normals[D],B=f.binormals[D];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,j=Math.sin(P),C=-Math.cos(P);m.x=C*U.x+j*B.x,m.y=C*U.y+j*B.y,m.z=C*U.z+j*B.z,m.normalize(),x.push(m.x,m.y,m.z),d.x=_.x+r*m.x,d.y=_.y+r*m.y,d.z=_.z+r*m.z,g.push(d.x,d.y,d.z)}}function v(){for(let D=1;D<=i;D++)for(let U=1;U<=l;U++){const B=(l+1)*(D-1)+(U-1),z=(l+1)*D+(U-1),P=(l+1)*D+U,j=(l+1)*(D-1)+U;b.push(B,z,j),b.push(z,P,j)}}function O(){for(let D=0;D<=i;D++)for(let U=0;U<=l;U++)p.x=D/i,p.y=U/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _u(new gE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _E extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vE extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xE extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const od={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class SE{constructor(t,i,r){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,d),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yE=new SE;class Op{constructor(t){this.manager=t!==void 0?t:yE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Op.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gs=new WeakMap;class ME extends Op{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=od.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0);else{let g=Gs.get(f);g===void 0&&(g=[],Gs.set(f,g)),g.push({onLoad:i,onError:l})}return f}const d=fl("img");function m(){_(),i&&i(this);const g=Gs.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onLoad&&y.onLoad(this)}Gs.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),od.remove(`image:${t}`);const x=Gs.get(this)||[];for(let y=0;y<x.length;y++){const b=x[y];b.onError&&b.onError(g)}Gs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),od.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class Pp extends Op{constructor(t){super(t)}load(t,i,r,l){const c=new Un,f=new ME(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class rx extends Kv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EE extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const tv=new Ze;class TE{constructor(t,i,r=0,l=1/0){this.ray=new xu(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ee("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return tv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tv),this}intersectObject(t,i=!0,r=[]){return fp(t,this,r,i),r.sort(ev),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)fp(t[l],this,r,i);return r.sort(ev),r}}function ev(s,t){return s.distance-t.distance}function fp(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)fp(c[f],t,i,!0)}}function nv(s,t,i,r){const l=AE(r);switch(i){case Gv:return s*t;case Xv:return s*t/l.components*l.byteLength;case Sp:return s*t/l.components*l.byteLength;case Ys:return s*t*2/l.components*l.byteLength;case yp:return s*t*2/l.components*l.byteLength;case Vv:return s*t*3/l.components*l.byteLength;case Pi:return s*t*4/l.components*l.byteLength;case Mp:return s*t*4/l.components*l.byteLength;case su:case ou:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lu:case cu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ld:case Od:return Math.max(s,16)*Math.max(t,8)/4;case Ud:case Nd:return Math.max(s,8)*Math.max(t,8)/2;case Pd:case zd:case Fd:case Id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bd:case Hd:case Gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case np:case ip:case ap:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rp:case sp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case op:case lp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AE(s){switch(s){case yi:case Bv:return{byteLength:1,components:1};case cl:case Fv:case Ta:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case ji:case _p:case Wi:return{byteLength:4,components:1};case Iv:case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);function sx(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RE(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var CE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
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
#endif`,BE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GE=`#ifdef USE_IRIDESCENCE
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
#endif`,VE=`#ifdef USE_BUMPMAP
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QE=`#define PI 3.141592653589793
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
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,Ab=`uniform sampler2D dfgLUT;
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
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
}`,dT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pT=`#ifdef USE_SKINNING
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
#endif`,mT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
#endif`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`#include <common>
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
}`,OT=`#if DEPTH_PACKING == 3200
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
}`,PT=`#define DISTANCE
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
}`,zT=`#define DISTANCE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#include <common>
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
}`,VT=`uniform vec3 diffuse;
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
}`,XT=`#define LAMBERT
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
}`,kT=`#define LAMBERT
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
}`,WT=`#define MATCAP
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
}`,qT=`#define MATCAP
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
}`,YT=`#define NORMAL
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
}`,ZT=`#define NORMAL
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
}`,jT=`#define PHONG
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
}`,KT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,$T=`#define TOON
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
}`,t1=`#define TOON
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
}`,e1=`uniform float size;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:CE,alphahash_pars_fragment:wE,alphamap_fragment:DE,alphamap_pars_fragment:UE,alphatest_fragment:LE,alphatest_pars_fragment:NE,aomap_fragment:OE,aomap_pars_fragment:PE,batching_pars_vertex:zE,batching_vertex:BE,begin_vertex:FE,beginnormal_vertex:IE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:VE,clipping_planes_fragment:XE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:qE,color_fragment:YE,color_pars_fragment:ZE,color_pars_vertex:jE,color_vertex:KE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:$E,displacementmap_pars_vertex:tb,displacementmap_vertex:eb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:ab,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:cb,envmap_physical_pars_fragment:Sb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:hb,fog_fragment:db,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:xb,lights_toon_fragment:yb,lights_toon_pars_fragment:Mb,lights_phong_fragment:Eb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:wb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Nb,map_fragment:Ob,map_pars_fragment:Pb,map_particle_fragment:zb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:Xb,morphtarget_vertex:kb,normal_fragment_begin:Wb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:tT,opaque_fragment:eT,packing:nT,premultiplied_alpha_fragment:iT,project_vertex:aT,dithering_fragment:rT,dithering_pars_fragment:sT,roughnessmap_fragment:oT,roughnessmap_pars_fragment:lT,shadowmap_pars_fragment:cT,shadowmap_pars_vertex:uT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:dT,skinning_pars_vertex:pT,skinning_vertex:mT,skinnormal_vertex:gT,specularmap_fragment:_T,specularmap_pars_fragment:vT,tonemapping_fragment:xT,tonemapping_pars_fragment:ST,transmission_fragment:yT,transmission_pars_fragment:MT,uv_pars_fragment:ET,uv_pars_vertex:bT,uv_vertex:TT,worldpos_vertex:AT,background_vert:RT,background_frag:CT,backgroundCube_vert:wT,backgroundCube_frag:DT,cube_vert:UT,cube_frag:LT,depth_vert:NT,depth_frag:OT,distance_vert:PT,distance_frag:zT,equirect_vert:BT,equirect_frag:FT,linedashed_vert:IT,linedashed_frag:HT,meshbasic_vert:GT,meshbasic_frag:VT,meshlambert_vert:XT,meshlambert_frag:kT,meshmatcap_vert:WT,meshmatcap_frag:qT,meshnormal_vert:YT,meshnormal_frag:ZT,meshphong_vert:jT,meshphong_frag:KT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:$T,meshtoon_frag:t1,points_vert:e1,points_frag:n1,shadow_vert:i1,shadow_frag:a1,sprite_vert:r1,sprite_frag:s1},Nt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},ki={basic:{uniforms:Vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Vn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Vn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Vn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Vn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Vn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Vn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Vn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Vn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Vn([Nt.common,Nt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Vn([Nt.lights,Nt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ki.physical={uniforms:Vn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const iu={r:0,b:0,g:0},Nr=new Ra,o1=new Ze;function l1(s,t,i,r,l,c,f){const d=new ye(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function b(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function T(D){let U=!1;const B=b(D);B===null?v(d,m):B&&B.isColor&&(v(B,1),U=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,U){const B=b(U);B&&(B.isCubeTexture||B.mapping===vu)?(_===void 0&&(_=new xn(new vl(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:js(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Nr.copy(U.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Nr)),_.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,(g!==B||x!==B.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=B,x=B.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new xn(new cr(2,2),new Bi({name:"BackgroundMaterial",uniforms:js(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Fe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||x!==B.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=B,x=B.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,U){D.getRGB(iu,jv(s)),r.buffers.color.setClear(iu.r,iu.g,iu.b,U,f)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),m=U,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:T,addToRenderList:M,dispose:O}}function c1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function d(w,V,rt,it,ht){let lt=!1;const F=g(it,rt,V);c!==F&&(c=F,p(c.object)),lt=y(w,it,rt,ht),lt&&b(w,it,rt,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,U(w,V,rt,it),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,V,rt){const it=rt.wireframe===!0;let ht=r[w.id];ht===void 0&&(ht={},r[w.id]=ht);let lt=ht[V.id];lt===void 0&&(lt={},ht[V.id]=lt);let F=lt[it];return F===void 0&&(F=x(m()),lt[it]=F),F}function x(w){const V=[],rt=[],it=[];for(let ht=0;ht<i;ht++)V[ht]=0,rt[ht]=0,it[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:rt,attributeDivisors:it,object:w,attributes:{},index:null}}function y(w,V,rt,it){const ht=c.attributes,lt=V.attributes;let F=0;const H=rt.getAttributes();for(const at in H)if(H[at].location>=0){const xt=ht[at];let N=lt[at];if(N===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;F++}return c.attributesNum!==F||c.index!==it}function b(w,V,rt,it){const ht={},lt=V.attributes;let F=0;const H=rt.getAttributes();for(const at in H)if(H[at].location>=0){let xt=lt[at];xt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),ht[at]=N,F++}c.attributes=ht,c.attributesNum=F,c.index=it}function T(){const w=c.newAttributes;for(let V=0,rt=w.length;V<rt;V++)w[V]=0}function M(w){v(w,0)}function v(w,V){const rt=c.newAttributes,it=c.enabledAttributes,ht=c.attributeDivisors;rt[w]=1,it[w]===0&&(s.enableVertexAttribArray(w),it[w]=1),ht[w]!==V&&(s.vertexAttribDivisor(w,V),ht[w]=V)}function O(){const w=c.newAttributes,V=c.enabledAttributes;for(let rt=0,it=V.length;rt<it;rt++)V[rt]!==w[rt]&&(s.disableVertexAttribArray(rt),V[rt]=0)}function D(w,V,rt,it,ht,lt,F){F===!0?s.vertexAttribIPointer(w,V,rt,ht,lt):s.vertexAttribPointer(w,V,rt,it,ht,lt)}function U(w,V,rt,it){T();const ht=it.attributes,lt=rt.getAttributes(),F=V.defaultAttributeValues;for(const H in lt){const at=lt[H];if(at.location>=0){let yt=ht[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,N=yt.itemSize,nt=t.get(yt);if(nt===void 0)continue;const gt=nt.buffer,Tt=nt.type,Ft=nt.bytesPerElement,et=Tt===s.INT||Tt===s.UNSIGNED_INT||yt.gpuType===_p;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,Vt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<at.locationSize;It++)v(at.location+It,ut.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<at.locationSize;It++)M(at.location+It);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let It=0;It<at.locationSize;It++)D(at.location+It,N/at.locationSize,Tt,xt,wt*Ft,(Vt+N/at.locationSize*It)*Ft,et)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<at.locationSize;ut++)v(at.location+ut,yt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<at.locationSize;ut++)M(at.location+ut);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let ut=0;ut<at.locationSize;ut++)D(at.location+ut,N/at.locationSize,Tt,xt,N*Ft,N/at.locationSize*ut*Ft,et)}}else if(F!==void 0){const xt=F[H];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(at.location,xt);break;case 3:s.vertexAttrib3fv(at.location,xt);break;case 4:s.vertexAttrib4fv(at.location,xt);break;default:s.vertexAttrib1fv(at.location,xt)}}}}O()}function B(){j();for(const w in r){const V=r[w];for(const rt in V){const it=V[rt];for(const ht in it)_(it[ht].object),delete it[ht];delete V[rt]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const rt in V){const it=V[rt];for(const ht in it)_(it[ht].object),delete it[ht];delete V[rt]}delete r[w.id]}function P(w){for(const V in r){const rt=r[V];if(rt[w.id]===void 0)continue;const it=rt[w.id];for(const ht in it)_(it[ht].object),delete it[ht];delete rt[w.id]}}function j(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function u1(s,t,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,r,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function f1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Pi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==yi&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wi&&!j)}function m(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ne("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:U,maxSamples:B,samples:z}}function h1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Pr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const O=c?0:r,D=O*4;let U=v.clippingState||null;m.value=U,U=_(b,x,D,y);for(let B=0;B!==D;++B)U[B]=i[B];v.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,y,b){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const v=y+T*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,U=y;D!==T;++D,U+=4)f.copy(g[D]).applyMatrix4(O,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function d1(s){let t=new WeakMap;function i(f,d){return d===Rd?f.mapping=Hr:d===Cd&&(f.mapping=qs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Rd||d===Cd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Jv(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const lr=4,iv=[.125,.215,.35,.446,.526,.582],Br=20,p1=256,el=new rx,av=new ye;let ld=null,cd=0,ud=0,fd=!1;const m1=new W;class rv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=m1}=c;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=fd,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hr||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ta,format:Pi,colorSpace:Zs,depthBuffer:!1},l=sv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g1(c)),this._blurMaterial=v1(c,t,i),this._ggxMaterial=_1(c,t,i)}return l}_compileMaterial(t){const i=new xn(new vn,t);this._renderer.compile(i,el)}_sceneToCubeUV(t,i,r,l,c){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(av),g.toneMapping=Yi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new vl,new zi({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,v=!0):(M.color.copy(av),v=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):U===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const B=this._cubeSize;Vs(l,U*B,D>2?B:0,B,B),g.setRenderTarget(l),v&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=x,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Hr||t.mapping===qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ov());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,el)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,y=g*x,{_lodMax:b}=this,T=this._sizeLods[r],M=3*T*(r>b-lr?r-b+lr:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Vs(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Vs(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,el)}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Br-1),T=c/b,M=isFinite(c)?1+Math.floor(_*T):Br;M>Br&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Br}`);const v=[];let O=0;for(let P=0;P<Br;++P){const j=P/T,C=Math.exp(-j*j/2);v.push(C),P===0?O+=C:P<M&&(O+=2*C)}for(let P=0;P<v.length;P++)v[P]=v[P]/O;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const U=this._sizeLods[l],B=3*U*(l>D-lr?l-D+lr:0),z=4*(this._cubeSize-U);Vs(i,B,z,3*U,2*U),m.setRenderTarget(i),m.render(g,el)}}function g1(s){const t=[],i=[],r=[];let l=s;const c=s-lr+1+iv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>s-lr?m=iv[f-s+lr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,T=3,M=2,v=1,O=new Float32Array(T*b*y),D=new Float32Array(M*b*y),U=new Float32Array(v*b*y);for(let z=0;z<y;z++){const P=z%3*2/3-1,j=z>2?0:-1,C=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];O.set(C,T*b*z),D.set(x,M*b*z);const w=[z,z,z,z,z,z];U.set(w,v*b*z)}const B=new vn;B.setAttribute("position",new Fn(O,T)),B.setAttribute("uv",new Fn(D,M)),B.setAttribute("faceIndex",new Fn(U,v)),r.push(new xn(B,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function sv(s,t,i){const r=new Zi(s,t,i);return r.texture.mapping=vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function _1(s,t,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function v1(s,t,i){const r=new Float32Array(Br),l=new W(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function ov(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function lv(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function x1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Rd||m===Cd,_=m===Hr||m===qs;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new rv(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new rv(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function S1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&hl("WebGLRenderer: "+r+" extension not supported."),l}}}function y1(s,t,i,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let D=0,U=O.length;D<U;D+=3){const B=O[D+0],z=O[D+1],P=O[D+2];x.push(B,z,z,P,P,B)}}else if(b!==void 0){const O=b.array;T=b.version;for(let D=0,U=O.length/3-1;D<U;D+=3){const B=D+0,z=D+1,P=D+2;x.push(B,z,z,P,P,B)}}else return;const M=new(kv(x)?Zv:Yv)(x,1);M.version=T;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function M1(s,t,i){let r;function l(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,y){s.drawElements(r,y,c,x*f),i.update(y,r,1)}function p(x,y,b){b!==0&&(s.drawElementsInstanced(r,y,c,x*f,b),i.update(y,r,b))}function _(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,r,1)}function g(x,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,T,0,b);let v=0;for(let O=0;O<b;O++)v+=y[O]*T[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function E1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:Ee("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function b1(s,t,i){const r=new WeakMap,l=new rn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),M===!0&&(U=3);let B=d.attributes.position.count*U,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const P=new Float32Array(B*z*4*g),j=new Wv(P,B,z,g);j.type=Wi,j.needsUpdate=!0;const C=U*4;for(let V=0;V<g;V++){const rt=v[V],it=O[V],ht=D[V],lt=B*z*4*V;for(let F=0;F<rt.count;F++){const H=F*C;b===!0&&(l.fromBufferAttribute(rt,F),P[lt+H+0]=l.x,P[lt+H+1]=l.y,P[lt+H+2]=l.z,P[lt+H+3]=0),T===!0&&(l.fromBufferAttribute(it,F),P[lt+H+4]=l.x,P[lt+H+5]=l.y,P[lt+H+6]=l.z,P[lt+H+7]=0),M===!0&&(l.fromBufferAttribute(ht,F),P[lt+H+8]=l.x,P[lt+H+9]=l.y,P[lt+H+10]=l.z,P[lt+H+11]=ht.itemSize===4?l.w:1)}}x={count:g,texture:j,size:new Qt(B,z)},r.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function T1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const A1={[wv]:"LINEAR_TONE_MAPPING",[Dv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[Pv]:"NEUTRAL_TONE_MAPPING",[Nv]:"CUSTOM_TONE_MAPPING"};function R1(s,t,i,r,l){const c=new Zi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Zi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),d=new vn;d.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new In([0,2,0,0,2,0],2));const m=new _E({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new xn(d,m),_=new rx(-1,1,1,-1,0,1);let g=null,x=null,y=!1,b,T=null,M=[],v=!1;this.setSize=function(O,D){c.setSize(O,D),f.setSize(O,D);for(let U=0;U<M.length;U++){const B=M[U];B.setSize&&B.setSize(O,D)}},this.setEffects=function(O){M=O,v=M.length>0&&M[0].isRenderPass===!0;const D=c.width,U=c.height;for(let B=0;B<M.length;B++){const z=M[B];z.setSize&&z.setSize(D,U)}},this.begin=function(O,D){if(y||O.toneMapping===Yi&&M.length===0)return!1;if(T=D,D!==null){const U=D.width,B=D.height;(c.width!==U||c.height!==B)&&this.setSize(U,B)}return v===!1&&O.setRenderTarget(c),b=O.toneMapping,O.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(O,D){O.toneMapping=b,y=!0;let U=c,B=f;for(let z=0;z<M.length;z++){const P=M[z];if(P.enabled!==!1&&(P.render(O,B,U,D),P.needsSwap!==!1)){const j=U;U=B,B=j}}if(g!==O.outputColorSpace||x!==O.toneMapping){g=O.outputColorSpace,x=O.toneMapping,m.defines={},Te.getTransfer(g)===Fe&&(m.defines.SRGB_TRANSFER="");const z=A1[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,O.setRenderTarget(T),O.render(p,_),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const ox=new Un,hp=new pl(1,1),lx=new Wv,cx=new DM,ux=new Qv,cv=[],uv=[],fv=new Float32Array(16),hv=new Float32Array(9),dv=new Float32Array(4);function Qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=cv[l];if(c===void 0&&(c=new Float32Array(l),cv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function pn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Mu(s,t){let i=uv[t];i===void 0&&(i=new Int32Array(t),uv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function C1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function w1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2fv(this.addr,t),mn(i,t)}}function D1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;s.uniform3fv(this.addr,t),mn(i,t)}}function U1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4fv(this.addr,t),mn(i,t)}}function L1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;dv.set(r),s.uniformMatrix2fv(this.addr,!1,dv),mn(i,r)}}function N1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;hv.set(r),s.uniformMatrix3fv(this.addr,!1,hv),mn(i,r)}}function O1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;fv.set(r),s.uniformMatrix4fv(this.addr,!1,fv),mn(i,r)}}function P1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2iv(this.addr,t),mn(i,t)}}function B1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3iv(this.addr,t),mn(i,t)}}function F1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4iv(this.addr,t),mn(i,t)}}function I1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function H1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2uiv(this.addr,t),mn(i,t)}}function G1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3uiv(this.addr,t),mn(i,t)}}function V1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4uiv(this.addr,t),mn(i,t)}}function X1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?bp:Ep,c=hp):c=ox,i.setTexture2D(t||c,l)}function k1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||cx,l)}function W1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||ux,l)}function q1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||lx,l)}function Y1(s){switch(s){case 5126:return C1;case 35664:return w1;case 35665:return D1;case 35666:return U1;case 35674:return L1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return P1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return F1;case 5125:return I1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return q1}}function Z1(s,t){s.uniform1fv(this.addr,t)}function j1(s,t){const i=Qs(t,this.size,2);s.uniform2fv(this.addr,i)}function K1(s,t){const i=Qs(t,this.size,3);s.uniform3fv(this.addr,i)}function Q1(s,t){const i=Qs(t,this.size,4);s.uniform4fv(this.addr,i)}function J1(s,t){const i=Qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function $1(s,t){const i=Qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tA(s,t){const i=Qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function eA(s,t){s.uniform1iv(this.addr,t)}function nA(s,t){s.uniform2iv(this.addr,t)}function iA(s,t){s.uniform3iv(this.addr,t)}function aA(s,t){s.uniform4iv(this.addr,t)}function rA(s,t){s.uniform1uiv(this.addr,t)}function sA(s,t){s.uniform2uiv(this.addr,t)}function oA(s,t){s.uniform3uiv(this.addr,t)}function lA(s,t){s.uniform4uiv(this.addr,t)}function cA(s,t,i){const r=this.cache,l=t.length,c=Mu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=hp:f=ox;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function uA(s,t,i){const r=this.cache,l=t.length,c=Mu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||cx,c[f])}function fA(s,t,i){const r=this.cache,l=t.length,c=Mu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ux,c[f])}function hA(s,t,i){const r=this.cache,l=t.length,c=Mu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||lx,c[f])}function dA(s){switch(s){case 5126:return Z1;case 35664:return j1;case 35665:return K1;case 35666:return Q1;case 35674:return J1;case 35675:return $1;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class pA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Y1(i.type)}}class mA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dA(i.type)}}class gA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function pv(s,t){s.seq.push(t),s.map[t.id]=t}function _A(s,t,i){const r=s.name,l=r.length;for(hd.lastIndex=0;;){const c=hd.exec(r),f=hd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){pv(i,p===void 0?new pA(d,s,t):new mA(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new gA(d),pv(i,g)),i=g}}}class uu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);_A(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function mv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const vA=37297;let xA=0;function SA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const gv=new ue;function yA(s){Te._getMatrix(gv,Te.workingColorSpace,s);const t=`mat3( ${gv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case fu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _v(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+SA(s.getShaderSource(t),d)}else return c}function MA(s,t){const i=yA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[wv]:"Linear",[Dv]:"Reinhard",[Uv]:"Cineon",[Lv]:"ACESFilmic",[Ov]:"AgX",[Pv]:"Neutral",[Nv]:"Custom"};function bA(s,t){const i=EA[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new W;function TA(){Te.getLuminanceCoefficients(au);const s=au.x.toFixed(4),t=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function RA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function CA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function al(s){return s!==""}function vv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(wA,UA)}const DA=new Map;function UA(s,t){let i=fe[t];if(i===void 0){const r=DA.get(t);if(r!==void 0)i=fe[r],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return dp(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(s){return s.replace(LA,NA)}function NA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const OA={[ru]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function PA(s){return OA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Hr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function BA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":zA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[qs]:"ENVMAP_MODE_REFRACTION"};function IA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HA={[Cv]:"ENVMAP_BLENDING_MULTIPLY",[Zy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function GA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HA[s.combine]||"ENVMAP_BLENDING_NONE"}function VA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function XA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=PA(i),p=BA(i),_=IA(i),g=GA(i),x=VA(i),y=AA(i),b=RA(c),T=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(al).join(`
`),v.length>0&&(v+=`
`)):(M=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Yi?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,MA("linearToOutputTexel",i.outputColorSpace),TA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=dp(f),f=vv(f,i),f=xv(f,i),d=dp(d),d=vv(d,i),d=xv(d,i),f=Sv(f),d=Sv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=O+M+f,U=O+v+d,B=mv(l,l.VERTEX_SHADER,D),z=mv(l,l.FRAGMENT_SHADER,U);l.attachShader(T,B),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(V){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(T)||"",it=l.getShaderInfoLog(B)||"",ht=l.getShaderInfoLog(z)||"",lt=rt.trim(),F=it.trim(),H=ht.trim();let at=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(at=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,z);else{const xt=_v(l,B,"vertex"),N=_v(l,z,"fragment");Ee("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+xt+`
`+N)}else lt!==""?ne("WebGLProgram: Program Info Log:",lt):(F===""||H==="")&&(yt=!1);yt&&(V.diagnostics={runnable:at,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(B),l.deleteShader(z),j=new uu(l,T),C=CA(l,T)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,vA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=z,this}let kA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new qA(t),i.set(t,r)),r}}class qA{constructor(t){this.id=kA++,this.code=t,this.usedTimes=0}}function YA(s,t,i,r,l,c,f){const d=new Rp,m=new WA,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,V,rt,it){const ht=rt.fog,lt=it.geometry,F=C.isMeshStandardMaterial?rt.environment:null,H=(C.isMeshStandardMaterial?i:t).get(C.envMap||F),at=H&&H.mapping===vu?H.image.height:null,yt=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&ne("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,N=xt!==void 0?xt.length:0;let nt=0;lt.morphAttributes.position!==void 0&&(nt=1),lt.morphAttributes.normal!==void 0&&(nt=2),lt.morphAttributes.color!==void 0&&(nt=3);let gt,Tt,Ft,et;if(yt){const be=ki[yt];gt=be.vertexShader,Tt=be.fragmentShader}else gt=C.vertexShader,Tt=C.fragmentShader,m.update(C),Ft=m.getVertexShaderID(C),et=m.getFragmentShaderID(C);const ut=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Vt=it.isInstancedMesh===!0,It=it.isBatchedMesh===!0,de=!!C.map,Je=!!C.matcap,_e=!!H,pe=!!C.aoMap,Ce=!!C.lightMap,se=!!C.bumpMap,$e=!!C.normalMap,G=!!C.displacementMap,je=!!C.emissiveMap,Me=!!C.metalnessMap,Le=!!C.roughnessMap,qt=C.anisotropy>0,L=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,dt=C.sheen>0,vt=C.transmission>0,ct=qt&&!!C.anisotropyMap,Zt=L&&!!C.clearcoatMap,Rt=L&&!!C.clearcoatNormalMap,Xt=L&&!!C.clearcoatRoughnessMap,ee=q&&!!C.iridescenceMap,Mt=q&&!!C.iridescenceThicknessMap,Et=dt&&!!C.sheenColorMap,zt=dt&&!!C.sheenRoughnessMap,Ot=!!C.specularMap,Ct=!!C.specularColorMap,le=!!C.specularIntensityMap,k=vt&&!!C.transmissionMap,Ut=vt&&!!C.thicknessMap,bt=!!C.gradientMap,Pt=!!C.alphaMap,St=C.alphaTest>0,_t=!!C.alphaHash,At=!!C.extensions;let ie=Yi;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Oe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Tt,defines:C.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:It,batchingColor:It&&it._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&it.instanceColor!==null,instancingMorph:Vt&&it.morphTexture!==null,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Zs,alphaToCoverage:!!C.alphaToCoverage,map:de,matcap:Je,envMap:_e,envMapMode:_e&&H.mapping,envMapCubeUVHeight:at,aoMap:pe,lightMap:Ce,bumpMap:se,normalMap:$e,displacementMap:G,emissiveMap:je,normalMapObjectSpace:$e&&C.normalMapType===$y,normalMapTangentSpace:$e&&C.normalMapType===Jy,metalnessMap:Me,roughnessMap:Le,anisotropy:qt,anisotropyMap:ct,clearcoat:L,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:bt,opaque:C.transparent===!1&&C.blending===Xs&&C.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:C.combine,mapUv:de&&T(C.map.channel),aoMapUv:pe&&T(C.aoMap.channel),lightMapUv:Ce&&T(C.lightMap.channel),bumpMapUv:se&&T(C.bumpMap.channel),normalMapUv:$e&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:je&&T(C.emissiveMap.channel),metalnessMapUv:Me&&T(C.metalnessMap.channel),roughnessMapUv:Le&&T(C.roughnessMap.channel),anisotropyMapUv:ct&&T(C.anisotropyMap.channel),clearcoatMapUv:Zt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(C.sheenRoughnessMap.channel),specularMapUv:Ot&&T(C.specularMap.channel),specularColorMapUv:Ct&&T(C.specularColorMap.channel),specularIntensityMapUv:le&&T(C.specularIntensityMap.channel),transmissionMapUv:k&&T(C.transmissionMap.channel),thicknessMapUv:Ut&&T(C.thicknessMap.channel),alphaMapUv:Pt&&T(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&($e||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!lt.attributes.uv&&(de||Pt),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:it.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:de&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:je&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Sa,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:At&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&C.extensions.multiDraw===!0||It)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(O(w,C),D(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function O(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=b[C.type];let V;if(w){const rt=ki[w];V=XM.clone(rt.uniforms)}else V=C.uniforms;return V}function B(C,w){let V=g.get(w);return V!==void 0?++V.usedTimes:(V=new XA(s,w,C,c),_.push(V),g.set(w,V)),V}function z(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function P(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:U,acquireProgram:B,releaseProgram:z,releaseShaderCache:P,programs:_,dispose:j}}function ZA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function jA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ev(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(g,x,y,b,T,M){let v=s[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:M},s[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=M),t++,v}function d(g,x,y,b,T,M){const v=f(g,x,y,b,T,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,x,y,b,T,M){const v=f(g,x,y,b,T,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||jA),r.length>1&&r.sort(x||Mv),l.length>1&&l.sort(x||Mv)}function _(){for(let g=t,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function KA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Ev,s.set(r,[f])):l>=c.length?(f=new Ev,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function QA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new ye};break;case"SpotLight":i={position:new W,direction:new W,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=i,i}}}function JA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $A=0;function tR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function eR(s){const t=new QA,i=JA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new W);const l=new W,c=new Ze,f=new Ze;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,b=0,T=0,M=0,v=0,O=0,D=0,U=0,B=0,z=0,P=0;p.sort(tR);for(let C=0,w=p.length;C<w;C++){const V=p[C],rt=V.color,it=V.intensity,ht=V.distance;let lt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ys?lt=V.shadow.map.texture:lt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=rt.r*it,g+=rt.g*it,x+=rt.b*it;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],it);P++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.directionalShadow[y]=at,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(rt).multiplyScalar(it),F.distance=ht,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[T]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[B]=V.map,B++,H.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[T]=H.matrix,V.castShadow){const at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.spotShadow[T]=at,r.spotShadowMap[T]=lt,U++}T++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(rt).multiplyScalar(it),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,r.pointShadow[b]=at,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=F,b++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(it),F.groundColor.copy(V.groundColor).multiplyScalar(it),r.hemi[v]=F,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==O||j.numPointShadows!==D||j.numSpotShadows!==U||j.numSpotMaps!==B||j.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=P,j.directionalLength=y,j.pointLength=b,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=O,j.numPointShadows=D,j.numSpotShadows=U,j.numSpotMaps=B,j.numLightProbes=P,r.version=$A++)}function m(p,_){let g=0,x=0,y=0,b=0,T=0;const M=_.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const D=p[v];if(D.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(D.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),f.identity(),c.copy(D.matrixWorld),c.premultiply(M),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(M),x++}else if(D.isHemisphereLight){const U=r.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:r}}function bv(s){const t=new eR(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function f(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function nR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new bv(s),t.set(l,[d])):c>=f.length?(d=new bv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aR=`uniform sampler2D shadow_pass;
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
}`,rR=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],sR=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Tv=new Ze,nl=new W,dd=new W;function oR(s,t,i){let r=new tx;const l=new Qt,c=new Qt,f=new rn,d=new vE,m=new xE,p={},_=i.maxTextureSize,g={[Kn]:jn,[jn]:Kn,[Sa]:Sa},x=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:iR,fragmentShader:aR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new vn;b.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xn(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let v=this.type;this.render=function(z,P,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===wy&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=ru);const C=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ma),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const it=v!==this.type;it&&P.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(lt=>lt.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,lt=z.length;ht<lt;ht++){const F=z[ht],H=F.shadow;if(H===void 0){ne("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||it===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===il){if(F.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zi(l.x,l.y,{format:Ys,type:Ta,minFilter:We,magFilter:We,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new pl(l.x,l.y,Wi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn}else{F.isPointLight?(H.map=new Jv(l.x),H.map.depthTexture=new eE(l.x,ji)):(H.map=new Zi(l.x,l.y),H.map.depthTexture=new pl(l.x,l.y,ji)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Aa;const xt=s.state.buffers.depth.getReversed();this.type===ru?(H.map.depthTexture.compareFunction=xt?bp:Ep,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,xt),s.clear();else{xt===0&&(s.setRenderTarget(H.map),s.clear());const N=H.getViewport(xt);f.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),rt.viewport(f)}if(F.isPointLight){const N=H.camera,nt=H.matrix,gt=F.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),nl.setFromMatrixPosition(F.matrixWorld),N.position.copy(nl),dd.copy(N.position),dd.add(rR[xt]),N.up.copy(sR[xt]),N.lookAt(dd),N.updateMatrixWorld(),nt.makeTranslation(-nl.x,-nl.y,-nl.z),Tv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Tv,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),U(P,j,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===il&&O(H,j),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(C,w,V)};function O(z,P){const j=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Zi(l.x,l.y,{format:Ys,type:Ta})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(P,null,j,x,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(P,null,j,y,T,null)}function D(z,P,j,C){let w=null;const V=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?m:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const rt=w.uuid,it=P.uuid;let ht=p[rt];ht===void 0&&(ht={},p[rt]=ht);let lt=ht[it];lt===void 0&&(lt=w.clone(),ht[it]=lt,P.addEventListener("dispose",B)),w=lt}if(w.visible=P.visible,w.wireframe=P.wireframe,C===il?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=s.properties.get(w);rt.light=j}return w}function U(z,P,j,C,w){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===il)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const it=t.update(z),ht=z.material;if(Array.isArray(ht)){const lt=it.groups;for(let F=0,H=lt.length;F<H;F++){const at=lt[F],yt=ht[at.materialIndex];if(yt&&yt.visible){const xt=D(z,yt,C,w);z.onBeforeShadow(s,z,P,j,it,xt,at),s.renderBufferDirect(j,null,it,xt,z,at),z.onAfterShadow(s,z,P,j,it,xt,at)}}}else if(ht.visible){const lt=D(z,ht,C,w);z.onBeforeShadow(s,z,P,j,it,lt,null),s.renderBufferDirect(j,null,it,lt,z,null),z.onAfterShadow(s,z,P,j,it,lt,null)}}const rt=z.children;for(let it=0,ht=rt.length;it<ht;it++)U(rt[it],P,j,C,w)}function B(z){z.target.removeEventListener("dispose",B);for(const j in p){const C=p[j],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const lR={[Sd]:yd,[Md]:Td,[Ed]:Ad,[Ws]:bd,[yd]:Sd,[Td]:Md,[Ad]:Ed,[bd]:Ws};function cR(s,t){function i(){let k=!1;const Ut=new rn;let bt=null;const Pt=new rn(0,0,0,0);return{setMask:function(St){bt!==St&&!k&&(s.colorMask(St,St,St,St),bt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ie,Oe){Oe===!0&&(St*=ie,_t*=ie,At*=ie),Ut.set(St,_t,At,ie),Pt.equals(Ut)===!1&&(s.clearColor(St,_t,At,ie),Pt.copy(Ut))},reset:function(){k=!1,bt=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,bt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ie=St;St=null,this.setClear(ie)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(s.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=lR[_t]),Pt!==_t){switch(_t){case Sd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),s.clearDepth(_t),St=_t)},reset:function(){k=!1,bt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ie=null,Oe=null;return{setTest:function(be){k||(be?ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(be){Ut!==be&&!k&&(s.stencilMask(be),Ut=be)},setFunc:function(be,Ln,bi){(bt!==be||Pt!==Ln||St!==bi)&&(s.stencilFunc(be,Ln,bi),bt=be,Pt=Ln,St=bi)},setOp:function(be,Ln,bi){(_t!==be||At!==Ln||ie!==bi)&&(s.stencilOp(be,Ln,bi),_t=be,At=Ln,ie=bi)},setLocked:function(be){k=be},setClear:function(be){Oe!==be&&(s.clearStencil(be),Oe=be)},reset:function(){k=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ie=null,Oe=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],b=null,T=!1,M=null,v=null,O=null,D=null,U=null,B=null,z=null,P=new ye(0,0,0),j=0,C=!1,w=null,V=null,rt=null,it=null,ht=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const at=s.getParameter(s.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),F=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),F=H>=2);let yt=null,xt={};const N=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),gt=new rn().fromArray(N),Tt=new rn().fromArray(nt);function Ft(k,Ut,bt,Pt){const St=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<bt;At++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(Ut+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return _t}const et={};et[s.TEXTURE_2D]=Ft(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=Ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=Ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=Ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ut(s.DEPTH_TEST),f.setFunc(Ws),se(!1),$e(b_),ut(s.CULL_FACE),pe(Ma);function ut(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function wt(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function Vt(k,Ut){return g[k]!==Ut?(s.bindFramebuffer(k,Ut),g[k]=Ut,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ut),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(k,Ut){let bt=y,Pt=!1;if(k){bt=x.get(Ut),bt===void 0&&(bt=[],x.set(Ut,bt));const St=k.textures;if(bt.length!==St.length||bt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=s.COLOR_ATTACHMENT0+_t;bt.length=St.length,Pt=!0}}else bt[0]!==s.BACK&&(bt[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(bt)}function de(k){return b!==k?(s.useProgram(k),b=k,!0):!1}const Je={[zr]:s.FUNC_ADD,[Uy]:s.FUNC_SUBTRACT,[Ly]:s.FUNC_REVERSE_SUBTRACT};Je[Ny]=s.MIN,Je[Oy]=s.MAX;const _e={[Py]:s.ZERO,[zy]:s.ONE,[By]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[Xy]:s.SRC_ALPHA_SATURATE,[Gy]:s.DST_COLOR,[Iy]:s.DST_ALPHA,[Fy]:s.ONE_MINUS_SRC_COLOR,[xd]:s.ONE_MINUS_SRC_ALPHA,[Vy]:s.ONE_MINUS_DST_COLOR,[Hy]:s.ONE_MINUS_DST_ALPHA,[ky]:s.CONSTANT_COLOR,[Wy]:s.ONE_MINUS_CONSTANT_COLOR,[qy]:s.CONSTANT_ALPHA,[Yy]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(k,Ut,bt,Pt,St,_t,At,ie,Oe,be){if(k===Ma){T===!0&&(wt(s.BLEND),T=!1);return}if(T===!1&&(ut(s.BLEND),T=!0),k!==Dy){if(k!==M||be!==C){if((v!==zr||U!==zr)&&(s.blendEquation(s.FUNC_ADD),v=zr,U=zr),be)switch(k){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFunc(s.ONE,s.ONE);break;case T_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case A_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ee("WebGLState: Invalid blending: ",k);break}else switch(k){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case T_:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",k);break}O=null,D=null,B=null,z=null,P.set(0,0,0),j=0,M=k,C=be}return}St=St||Ut,_t=_t||bt,At=At||Pt,(Ut!==v||St!==U)&&(s.blendEquationSeparate(Je[Ut],Je[St]),v=Ut,U=St),(bt!==O||Pt!==D||_t!==B||At!==z)&&(s.blendFuncSeparate(_e[bt],_e[Pt],_e[_t],_e[At]),O=bt,D=Pt,B=_t,z=At),(ie.equals(P)===!1||Oe!==j)&&(s.blendColor(ie.r,ie.g,ie.b,Oe),P.copy(ie),j=Oe),M=k,C=!1}function Ce(k,Ut){k.side===Sa?wt(s.CULL_FACE):ut(s.CULL_FACE);let bt=k.side===jn;Ut&&(bt=!bt),se(bt),k.blending===Xs&&k.transparent===!1?pe(Ma):pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function $e(k){k!==Ry?(ut(s.CULL_FACE),k!==V&&(k===b_?s.cullFace(s.BACK):k===Cy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),V=k}function G(k){k!==rt&&(F&&s.lineWidth(k),rt=k)}function je(k,Ut,bt){k?(ut(s.POLYGON_OFFSET_FILL),(it!==Ut||ht!==bt)&&(s.polygonOffset(Ut,bt),it=Ut,ht=bt)):wt(s.POLYGON_OFFSET_FILL)}function Me(k){k?ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Le(k){k===void 0&&(k=s.TEXTURE0+lt-1),yt!==k&&(s.activeTexture(k),yt=k)}function qt(k,Ut,bt){bt===void 0&&(yt===null?bt=s.TEXTURE0+lt-1:bt=yt);let Pt=xt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[bt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(yt!==bt&&(s.activeTexture(bt),yt=bt),s.bindTexture(k,Ut||et[k]),Pt.type=k,Pt.texture=Ut)}function L(){const k=xt[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function dt(){try{s.texSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function vt(){try{s.texSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Rt(){try{s.texStorage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Xt(){try{s.texStorage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ee(){try{s.texImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Mt(){try{s.texImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function zt(k){Tt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Ot(k,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let Pt=bt.get(k);Pt===void 0&&(Pt=s.getUniformBlockIndex(Ut,k.name),bt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(s.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,xt={},g={},x=new WeakMap,y=[],b=null,T=!1,M=null,v=null,O=null,D=null,U=null,B=null,z=null,P=new ye(0,0,0),j=0,C=!1,w=null,V=null,rt=null,it=null,ht=null,gt.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ut,disable:wt,bindFramebuffer:Vt,drawBuffers:It,useProgram:de,setBlending:pe,setMaterial:Ce,setFlipSided:se,setCullFace:$e,setLineWidth:G,setPolygonOffset:je,setScissorTest:Me,activeTexture:Le,bindTexture:qt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Et,viewport:zt,reset:le}}function uR(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qt,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):fl("canvas")}function T(L,E,q){let dt=1;const vt=qt(L);if((vt.width>q||vt.height>q)&&(dt=q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(dt*vt.width),Zt=Math.floor(dt*vt.height);g===void 0&&(g=b(ct,Zt));const Rt=E?b(ct,Zt):g;return Rt.width=ct,Rt.height=Zt,Rt.getContext("2d").drawImage(L,0,0,ct,Zt),ne("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+Zt+")."),Rt}else return"data"in L&&ne("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,E,q,dt,vt=!1){if(L!==null){if(s[L]!==void 0)return s[L];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=E;if(E===s.RED&&(q===s.FLOAT&&(ct=s.R32F),q===s.HALF_FLOAT&&(ct=s.R16F),q===s.UNSIGNED_BYTE&&(ct=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ct=s.R8UI),q===s.UNSIGNED_SHORT&&(ct=s.R16UI),q===s.UNSIGNED_INT&&(ct=s.R32UI),q===s.BYTE&&(ct=s.R8I),q===s.SHORT&&(ct=s.R16I),q===s.INT&&(ct=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ct=s.RG32F),q===s.HALF_FLOAT&&(ct=s.RG16F),q===s.UNSIGNED_BYTE&&(ct=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ct=s.RG8UI),q===s.UNSIGNED_SHORT&&(ct=s.RG16UI),q===s.UNSIGNED_INT&&(ct=s.RG32UI),q===s.BYTE&&(ct=s.RG8I),q===s.SHORT&&(ct=s.RG16I),q===s.INT&&(ct=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),q===s.UNSIGNED_INT&&(ct=s.RGB32UI),q===s.BYTE&&(ct=s.RGB8I),q===s.SHORT&&(ct=s.RGB16I),q===s.INT&&(ct=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),q===s.UNSIGNED_INT&&(ct=s.RGBA32UI),q===s.BYTE&&(ct=s.RGBA8I),q===s.SHORT&&(ct=s.RGBA16I),q===s.INT&&(ct=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ct=s.R11F_G11F_B10F)),E===s.RGBA){const Zt=vt?fu:Te.getTransfer(dt);q===s.FLOAT&&(ct=s.RGBA32F),q===s.HALF_FLOAT&&(ct=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ct=Zt===Fe?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function U(L,E){let q;return L?E===null||E===ji||E===ul?q=s.DEPTH24_STENCIL8:E===Wi?q=s.DEPTH32F_STENCIL8:E===cl&&(q=s.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===ul?q=s.DEPTH_COMPONENT24:E===Wi?q=s.DEPTH_COMPONENT32F:E===cl&&(q=s.DEPTH_COMPONENT16),q}function B(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==We?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),j(E),E.isVideoTexture&&_.delete(E)}function P(L){const E=L.target;E.removeEventListener("dispose",P),w(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const q=L.source,dt=x.get(q);if(dt){const vt=dt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(L),Object.keys(dt).length===0&&x.delete(q)}r.remove(L)}function C(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const q=L.source,dt=x.get(q);delete dt[E.__cacheKey],f.memory.textures--}function w(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let vt=0;vt<E.__webglFramebuffer[dt].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[dt][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[dt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let dt=0,vt=q.length;dt<vt;dt++){const ct=r.get(q[dt]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),f.memory.textures--),r.remove(q[dt])}r.remove(L)}let V=0;function rt(){V=0}function it(){const L=V;return L>=l.maxTextures&&ne("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function ht(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const q=r.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const dt=L.image;if(dt===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function F(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){et(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function H(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){et(q,L,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function at(L,E){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){ut(q,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const yt={[wd]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[Dd]:s.MIRRORED_REPEAT},xt={[Dn]:s.NEAREST,[Ky]:s.NEAREST_MIPMAP_NEAREST,[Uc]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Nh]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},N={[tM]:s.NEVER,[rM]:s.ALWAYS,[eM]:s.LESS,[Ep]:s.LEQUAL,[nM]:s.EQUAL,[bp]:s.GEQUAL,[iM]:s.GREATER,[aM]:s.NOTEQUAL};function nt(L,E){if(E.type===Wi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===We||E.magFilter===Nh||E.magFilter===Uc||E.magFilter===Fr||E.minFilter===We||E.minFilter===Nh||E.minFilter===Uc||E.minFilter===Fr)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,yt[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,yt[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,yt[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xt[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Uc&&E.minFilter!==Fr||E.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function gt(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const dt=E.source;let vt=x.get(dt);vt===void 0&&(vt={},x.set(dt,vt));const ct=ht(E);if(ct!==L.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),vt[ct].usedTimes++;const Zt=vt[L.__cacheKey];Zt!==void 0&&(vt[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(E)),L.__cacheKey=ct,L.__webglTexture=vt[ct].texture}return q}function Tt(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Ft(L,E,q,dt){const ct=L.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,dt,E.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let Zt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[Zt],zt=ct[Mt],Ot=Et.start+Et.count,Ct=Tt(zt.start,E.width,4),le=Tt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===le&&Tt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++Zt,ct[Zt]=zt)}ct.length=Zt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Xt=s.getParameter(s.UNPACK_SKIP_PIXELS),ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const zt=ct[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%E.width,k=Math.floor(Ot/E.width),Ut=Ct,bt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,le),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,le,k,Ut,bt,q,dt,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ee)}}function et(L,E,q){let dt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=s.TEXTURE_3D);const vt=gt(L,E),ct=E.source;i.bindTexture(dt,L.__webglTexture,s.TEXTURE0+q);const Zt=r.get(ct);if(ct.version!==Zt.__version||vt===!0){i.activeTexture(s.TEXTURE0+q);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===or?null:Te.getPrimaries(E.colorSpace),ee=E.colorSpace===or||Rt===Xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=T(E.image,!1,l.maxTextureSize);Mt=Le(E,Mt);const Et=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Ot=D(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);nt(dt,E);let Ct;const le=E.mipmaps,k=E.isVideoTexture!==!0,Ut=Zt.__version===void 0||vt===!0,bt=ct.dataReady,Pt=B(E,Mt);if(E.isDepthTexture)Ot=U(E.format===Ir,E.type),Ut&&(k?i.texStorage2D(s.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){k&&Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?bt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),bt&&Ft(E,Mt,Et,zt)):i.texImage2D(s.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],E.format!==Pi)if(Et!==null)if(k){if(bt)if(E.layerUpdates.size>0){const At=nv(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const Oe=Ct.data.subarray(ie*At/Ct.data.BYTES_PER_ELEMENT,(ie+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,ie,Ct.width,Ct.height,1,Et,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(s.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],E.format!==Pi?Et!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(s.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(E.layerUpdates.size>0){const St=nv(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)k?(Ut&&i.texStorage3D(s.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(s.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(s.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(k&&Ut){const St=qt(le[0]);i.texStorage2D(s.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?bt&&i.texSubImage2D(s.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(s.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(k){if(Ut){const St=qt(Mt);i.texStorage2D(s.TEXTURE_2D,Pt,Ot,St.width,St.height)}bt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Ot,Et,zt,Mt);M(E)&&v(dt),Zt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ut(L,E,q){if(E.image.length!==6)return;const dt=gt(L,E),vt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const ct=r.get(vt);if(vt.version!==ct.__version||dt===!0){i.activeTexture(s.TEXTURE0+q);const Zt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===or?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===or||Zt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=T(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Le(E,Et[_t]);const zt=Et[0],Ot=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),le=D(E.internalFormat,Ot,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Ut=ct.__version===void 0||dt===!0,bt=vt.dataReady;let Pt=B(E,zt);nt(s.TEXTURE_CUBE_MAP,E);let St;if(ee){k&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ie=St[At];E.format!==Pi?Ot!==null?k?bt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ie.width,ie.height,Ot,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ie.width,ie.height,0,ie.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ie.width,ie.height,Ot,Ct,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ie.width,ie.height,0,Ot,Ct,ie.data)}}}else{if(St=E.mipmaps,k&&Ut){St.length>0&&Pt++;const _t=qt(Et[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const Oe=St[At].image[_t].image;k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Oe.width,Oe.height,Ot,Ct,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Oe.width,Oe.height,0,Ot,Ct,Oe.data)}}else{k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ie=St[At];k?bt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ie.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ie.image[_t])}}}M(E)&&v(s.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,q,dt,vt,ct){const Zt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Xt=D(q.internalFormat,Zt,Rt,q.colorSpace),ee=r.get(E),Mt=r.get(q);if(Mt.__renderTarget=E,!ee.__hasExternalTextures){const Et=Math.max(1,E.width>>ct),zt=Math.max(1,E.height>>ct);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Xt,Et,zt,E.depth,0,Zt,Rt,null):i.texImage2D(vt,ct,Xt,Et,zt,0,Zt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,vt,Mt.__webglTexture,0,G(E)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,vt,Mt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(L,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const dt=E.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ct=U(E.stencilBuffer,vt),Zt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),ct,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),ct,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ct,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Zt,s.RENDERBUFFER,L)}else{const dt=E.textures;for(let vt=0;vt<dt.length;vt++){const ct=dt[vt],Zt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Xt=D(ct.internalFormat,Zt,Rt,ct.colorSpace);je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(E),Xt,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(E),Xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Xt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(L,E,q){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),vt.__webglTexture===void 0){vt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===Aa?Et=s.DEPTH_COMPONENT24:E.depthTexture.format===Ir&&(Et=s.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ee,Mt,null)}}else lt(E.depthTexture,0);const ct=vt.__webglTexture,Zt=G(E),Rt=dt?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Xt=E.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xt,Rt,ct,0,Zt):s.framebufferTexture2D(s.FRAMEBUFFER,Xt,Rt,ct,0);else if(E.depthTexture.format===Ir)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xt,Rt,ct,0,Zt):s.framebufferTexture2D(s.FRAMEBUFFER,Xt,Rt,ct,0);else throw new Error("Unknown depthTexture format")}function de(L){const E=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=dt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)It(E.__webglFramebuffer[dt],L,dt);else{const dt=L.texture.mipmaps;dt&&dt.length>0?It(E.__webglFramebuffer[0],L,0):It(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[dt],L,!1);else{const vt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ct)}}else{const dt=L.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,L,!1);else{const vt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(L,E,q){const dt=r.get(L);E!==void 0&&wt(dt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&de(L)}function _e(L){const E=L.texture,q=r.get(L),dt=r.get(E);L.addEventListener("dispose",P);const vt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=E.version,f.memory.textures++),ct){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)q.__webglFramebuffer[Rt][Xt]=s.createFramebuffer()}else q.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=r.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&je(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];q.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ee=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Et=D(Xt.internalFormat,ee,Mt,Xt.colorSpace,L.isXRRenderTarget===!0),zt=G(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Et,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Rt][Xt],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(q.__webglFramebuffer[Rt],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],Mt=r.get(ee);let Et=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),nt(Et,ee),wt(q.__webglFramebuffer,L,ee,s.COLOR_ATTACHMENT0+Rt,Et,0),M(ee)&&v(Et)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),nt(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Xt],L,E,s.COLOR_ATTACHMENT0,Rt,Xt);else wt(q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Rt,0);M(E)&&v(Rt),i.unbindTexture()}L.depthBuffer&&de(L)}function pe(L){const E=L.textures;for(let q=0,dt=E.length;q<dt;q++){const vt=E[q];if(M(vt)){const ct=O(L),Zt=r.get(vt).__webglTexture;i.bindTexture(ct,Zt),v(ct),i.unbindTexture()}}}const Ce=[],se=[];function $e(L){if(L.samples>0){if(je(L)===!1){const E=L.textures,q=L.width,dt=L.height;let vt=s.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=r.get(L),Rt=E.length>1;if(Rt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(E[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,q,dt,0,0,q,dt,vt,s.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(s.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(ct),se.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Mt=r.get(E[ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function je(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Le(L,E){const q=L.colorSpace,dt=L.format,vt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Zs&&q!==or&&(Te.getTransfer(q)===Fe?(dt!==Pi||vt!==yi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",q)),E}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=rt,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=Je,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fR(s,t){function i(r,l=or){let c;const f=Te.getTransfer(l);if(r===yi)return s.UNSIGNED_BYTE;if(r===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Iv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Bv)return s.BYTE;if(r===Fv)return s.SHORT;if(r===cl)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Ta)return s.HALF_FLOAT;if(r===Gv)return s.ALPHA;if(r===Vv)return s.RGB;if(r===Pi)return s.RGBA;if(r===Aa)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===Xv)return s.RED;if(r===Sp)return s.RED_INTEGER;if(r===Ys)return s.RG;if(r===yp)return s.RG_INTEGER;if(r===Mp)return s.RGBA_INTEGER;if(r===su||r===ou||r===lu||r===cu)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ud||r===Ld||r===Nd||r===Od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===zd||r===Bd||r===Fd||r===Id||r===Hd||r===Gd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Pd||r===zd)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Bd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Fd)return c.COMPRESSED_R11_EAC;if(r===Id)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Hd)return c.COMPRESSED_RG11_EAC;if(r===Gd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vd||r===Xd||r===kd||r===Wd||r===qd||r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d||r===tp||r===ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Vd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$d)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tp)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ep)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===np||r===ip||r===ap)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===np)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rp||r===sp||r===op||r===lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===rp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===op)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ul?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new nx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Bi({vertexShader:hR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xn(new cr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Ks{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new pR,v={},O=i.getContextAttributes();let D=null,U=null;const B=[],z=[],P=new Qt;let j=null;const C=new Si;C.viewport=new rn;const w=new Si;w.viewport=new rn;const V=[C,w],rt=new EE;let it=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=B[et];return ut===void 0&&(ut=new td,B[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=B[et];return ut===void 0&&(ut=new td,B[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=B[et];return ut===void 0&&(ut=new td,B[et]=ut),ut.getHandSpace()};function lt(et){const ut=z.indexOf(et.inputSource);if(ut===-1)return;const wt=B[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||f),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let et=0;et<B.length;et++){const ut=z[et];ut!==null&&(z[et]=null,B[et].disconnect(ut))}it=null,ht=null,M.reset();for(const et in v)delete v[et];t.setRenderTarget(D),y=null,x=null,g=null,l=null,U=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,r.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,It=null;O.depth&&(It=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=O.stencil?Ir:Aa,Vt=O.stencil?ul:ji);const de={colorFormat:i.RGBA8,depthFormat:It,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(de),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Zi(x.textureWidth,x.textureHeight,{format:Pi,type:yi,depthTexture:new pl(x.textureWidth,x.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],Vt=z.indexOf(wt);Vt>=0&&(z[Vt]=null,B[Vt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let Vt=z.indexOf(wt);if(Vt===-1){for(let de=0;de<B.length;de++)if(de>=z.length){z.push(wt),Vt=de;break}else if(z[de]===null){z[de]=wt,Vt=de;break}if(Vt===-1)break}const It=B[Vt];It&&It.connect(wt)}}const at=new W,yt=new W;function xt(et,ut,wt){at.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Vt=at.distanceTo(yt),It=ut.projectionMatrix.elements,de=wt.projectionMatrix.elements,Je=It[14]/(It[10]-1),_e=It[14]/(It[10]+1),pe=(It[9]+1)/It[5],Ce=(It[9]-1)/It[5],se=(It[8]-1)/It[0],$e=(de[8]+1)/de[0],G=Je*se,je=Je*$e,Me=Vt/(-se+$e),Le=Me*-se;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(Me),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=Je+Me,L=_e+Me,E=G-Le,q=je+(Vt-Le),dt=pe*_e/L*qt,vt=Ce*_e/L*qt;et.projectionMatrix.makePerspective(E,q,dt,vt,qt,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function N(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ut=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),rt.near=w.near=C.near=ut,rt.far=w.far=C.far=wt,(it!==rt.near||ht!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),it=rt.near,ht=rt.far),rt.layers.mask=et.layers.mask|6,C.layers.mask=rt.layers.mask&3,w.layers.mask=rt.layers.mask&5;const Vt=et.parent,It=rt.cameras;N(rt,Vt);for(let de=0;de<It.length;de++)N(It[de],Vt);It.length===2?xt(rt,C,w):rt.projectionMatrix.copy(C.projectionMatrix),nt(et,rt,Vt)};function nt(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=dl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function(et){return v[et]};let gt=null;function Tt(et,ut){if(_=ut.getViewerPose(p||f),b=ut,_!==null){const wt=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Vt=!1;wt.length!==rt.cameras.length&&(rt.cameras.length=0,Vt=!0);for(let _e=0;_e<wt.length;_e++){const pe=wt[_e];let Ce=null;if(y!==null)Ce=y.getViewport(pe);else{const $e=g.getViewSubImage(x,pe);Ce=$e.viewport,_e===0&&(t.setRenderTargetTextures(U,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(U))}let se=V[_e];se===void 0&&(se=new Si,se.layers.enable(_e),se.viewport=new rn,V[_e]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),_e===0&&(rt.matrix.copy(se.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Vt===!0&&rt.cameras.push(se)}const It=l.enabledFeatures;if(It&&It.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const _e=g.getDepthInformation(wt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(It&&It.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let _e=0;_e<wt.length;_e++){const pe=wt[_e].camera;if(pe){let Ce=v[pe];Ce||(Ce=new nx,v[pe]=Ce);const se=g.getCameraImage(pe);Ce.sourceTexture=se}}}}for(let wt=0;wt<B.length;wt++){const Vt=z[wt],It=B[wt];Vt!==null&&It!==void 0&&It.update(Vt,ut,p||f)}gt&&gt(et,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const Ft=new sx;Ft.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Or=new Ra,gR=new Ze;function _R(s,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,jv(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,D,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,U)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,O,D):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===jn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===jn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),D=O.envMap,U=O.envMapRotation;D&&(M.envMap.value=D,Or.copy(U),Or.x*=-1,Or.y*=-1,Or.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),M.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(Or)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,O,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=D*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vR(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const U=D.program;r.uniformBlockBinding(O,U)}function p(O,D){let U=l[O.id];U===void 0&&(b(O),U=_(O),l[O.id]=U,O.addEventListener("dispose",M));const B=D.program;r.updateUBOMapping(O,B);const z=t.render.frame;c[O.id]!==z&&(x(O),c[O.id]=z)}function _(O){const D=g();O.__bindingPointIndex=D;const U=s.createBuffer(),B=O.__size,z=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,B,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function g(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=l[O.id],U=O.uniforms,B=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,P=U.length;z<P;z++){const j=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,w=j.length;C<w;C++){const V=j[C];if(y(V,z,C,B)===!0){const rt=V.__offset,it=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let lt=0;lt<it.length;lt++){const F=it[lt],H=T(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,rt+ht,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,ht),ht+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,D,U,B){const z=O.value,P=D+"_"+U;if(B[P]===void 0)return typeof z=="number"||typeof z=="boolean"?B[P]=z:B[P]=z.clone(),!0;{const j=B[P];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return B[P]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function b(O){const D=O.uniforms;let U=0;const B=16;for(let P=0,j=D.length;P<j;P++){const C=Array.isArray(D[P])?D[P]:[D[P]];for(let w=0,V=C.length;w<V;w++){const rt=C[w],it=Array.isArray(rt.value)?rt.value:[rt.value];for(let ht=0,lt=it.length;ht<lt;ht++){const F=it[ht],H=T(F),at=U%B,yt=at%H.boundary,xt=at+yt;U+=yt,xt!==0&&B-xt<H.storage&&(U+=B-xt),rt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=U,U+=H.storage}}}const z=U%B;return z>0&&(U+=B-z),O.__size=U,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",O),D}function M(O){const D=O.target;D.removeEventListener("dispose",M);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function SR(){return Xi===null&&(Xi=new KM(xR,16,16,Ys,Ta),Xi.name="DFG_LUT",Xi.minFilter=We,Xi.magFilter=We,Xi.wrapS=ya,Xi.wrapT=ya,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class yR{constructor(t={}){const{canvas:i=sM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=yi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=y,M=new Set([Mp,yp,Sp]),v=new Set([yi,ji,cl,ul,vp,xp]),O=new Uint32Array(4),D=new Int32Array(4);let U=null,B=null;const z=[],P=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=zn;let V=0,rt=0,it=null,ht=-1,lt=null;const F=new rn,H=new rn;let at=null;const yt=new ye(0);let xt=0,N=i.width,nt=i.height,gt=1,Tt=null,Ft=null;const et=new rn(0,0,N,nt),ut=new rn(0,0,N,nt);let wt=!1;const Vt=new tx;let It=!1,de=!1;const Je=new Ze,_e=new W,pe=new rn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function $e(){return it===null?gt:1}let G=r;function je(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",Oe,!1),i.addEventListener("webglcontextcreationerror",be,!1),G===null){const Y="webgl2";if(G=je(Y,R),G===null)throw je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ee("WebGLRenderer: "+R.message),R}let Me,Le,qt,L,E,q,dt,vt,ct,Zt,Rt,Xt,ee,Mt,Et,zt,Ot,Ct,le,k,Ut,bt,Pt,St;function _t(){Me=new S1(G),Me.init(),bt=new fR(G,Me),Le=new f1(G,Me,t,bt),qt=new cR(G,Me),Le.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),L=new E1(G),E=new ZA,q=new uR(G,Me,qt,E,Le,bt,L),dt=new d1(C),vt=new x1(C),ct=new RE(G),Pt=new c1(G,ct),Zt=new y1(G,ct,L,Pt),Rt=new T1(G,Zt,ct,L),le=new b1(G,Le,q),zt=new h1(E),Xt=new YA(C,dt,vt,Me,Le,Pt,zt),ee=new _R(C,E),Mt=new KA,Et=new nR(Me),Ct=new l1(C,dt,vt,qt,Rt,b,m),Ot=new oR(C,Rt,Le),St=new vR(G,L,Le,qt),k=new u1(G,Me,L),Ut=new M1(G,Me,L),L.programs=Xt.programs,C.capabilities=Le,C.extensions=Me,C.properties=E,C.renderLists=Mt,C.shadowMap=Ot,C.state=qt,C.info=L}_t(),T!==yi&&(j=new R1(T,i.width,i.height,l,c));const At=new mR(C,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(N,nt,!1))},this.getSize=function(R){return R.set(N,nt)},this.setSize=function(R,Y,st=!0){if(At.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,nt=Y,i.width=Math.floor(R*gt),i.height=Math.floor(Y*gt),st===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(N*gt,nt*gt).floor()},this.setDrawingBufferSize=function(R,Y,st){N=R,nt=Y,gt=st,i.width=Math.floor(R*st),i.height=Math.floor(Y*st),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(T===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,Y,st,$){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,Y,st,$),qt.viewport(F.copy(et).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,Y,st,$){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,Y,st,$),qt.scissor(H.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){qt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Ft=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,st=!0){let $=0;if(R){let K=!1;if(it!==null){const Dt=it.texture.format;K=M.has(Dt)}if(K){const Dt=it.texture.type,Bt=v.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Lt.r,Jt=Lt.g,Wt=Lt.b;Bt?(O[0]=kt,O[1]=Jt,O[2]=Wt,O[3]=Ht,G.clearBufferuiv(G.COLOR,0,O)):(D[0]=kt,D[1]=Jt,D[2]=Wt,D[3]=Ht,G.clearBufferiv(G.COLOR,0,D))}else $|=G.COLOR_BUFFER_BIT}Y&&($|=G.DEPTH_BUFFER_BIT),st&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",Oe,!1),i.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Xr),At.removeEventListener("sessionend",to),Fi.stop()};function ie(R){R.preventDefault(),du("WebGLRenderer: Context Lost."),w=!0}function Oe(){du("WebGLRenderer: Context Restored."),w=!1;const R=L.autoReset,Y=Ot.enabled,st=Ot.autoUpdate,$=Ot.needsUpdate,K=Ot.type;_t(),L.autoReset=R,Ot.enabled=Y,Ot.autoUpdate=st,Ot.needsUpdate=$,Ot.type=K}function be(R){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ln(R){const Y=R.target;Y.removeEventListener("dispose",Ln),bi(Y)}function bi(R){Sl(R),E.remove(R)}function Sl(R){const Y=E.get(R).programs;Y!==void 0&&(Y.forEach(function(st){Xt.releaseProgram(st)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,st,$,K,Dt){Y===null&&(Y=Ce);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=fr(R,Y,st,$,K);qt.setMaterial($,Bt);let Ht=st.index,kt=1;if($.wireframe===!0){if(Ht=Zt.getWireframeAttribute(st),Ht===void 0)return;kt=2}const Jt=st.drawRange,Wt=st.attributes.position;let $t=Jt.start*kt,we=(Jt.start+Jt.count)*kt;Dt!==null&&($t=Math.max($t,Dt.start*kt),we=Math.min(we,(Dt.start+Dt.count)*kt)),Ht!==null?($t=Math.max($t,0),we=Math.min(we,Ht.count)):Wt!=null&&($t=Math.max($t,0),we=Math.min(we,Wt.count));const Ke=we-$t;if(Ke<0||Ke===1/0)return;Pt.setup(K,$,Lt,st,Ht);let ke,Ne=k;if(Ht!==null&&(ke=ct.get(Ht),Ne=Ut,Ne.setIndex(ke)),K.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*$e()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(K.isLine){let jt=$.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*$e()),K.isLineSegments?Ne.setMode(G.LINES):K.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else K.isPoints?Ne.setMode(G.POINTS):K.isSprite&&Ne.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const jt=K._multiDrawStarts,De=K._multiDrawCounts,ae=K._multiDrawCount,yn=Ht?ct.get(Ht).bytesPerElement:1,Ki=E.get($).currentProgram.getUniforms();for(let Mn=0;Mn<ae;Mn++)Ki.setValue(G,"_gl_DrawID",Mn),Ne.render(jt[Mn]/yn,De[Mn])}else if(K.isInstancedMesh)Ne.renderInstances($t,Ke,K.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,jt);Ne.renderInstances($t,Ke,De)}else Ne.render($t,Ke)};function Js(R,Y,st){R.transparent===!0&&R.side===Sa&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Wr(R,Y,st),R.side=Kn,R.needsUpdate=!0,Wr(R,Y,st),R.side=Sa):Wr(R,Y,st)}this.compile=function(R,Y,st=null){st===null&&(st=R),B=Et.get(st),B.init(Y),P.push(B),st.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),B.setupLights();const $=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Lt=Dt[Bt];Js(Lt,st,K),$.add(Lt)}else Js(Dt,st,K),$.add(Dt)}),B=P.pop(),$},this.compileAsync=function(R,Y,st=null){const $=this.compile(R,Y,st);return new Promise(K=>{function Dt(){if($.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){K(R);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Vr=null;function $s(R){Vr&&Vr(R)}function Xr(){Fi.stop()}function to(){Fi.start()}const Fi=new sx;Fi.setAnimationLoop($s),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(R){Vr=R,At.setAnimationLoop(R),R===null?Fi.stop():Fi.start()},At.addEventListener("sessionstart",Xr),At.addEventListener("sessionend",to),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,$=j!==null&&(it===null||st)&&j.begin(C,it);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,it),B=Et.get(R,P.length),B.init(Y),P.push(B),Je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,qi,Y.reversedDepth),de=this.localClippingEnabled,It=zt.init(this.clippingPlanes,de),U=Mt.get(R,z.length),U.init(),z.push(U),At.enabled===!0&&At.isPresenting===!0){const Bt=C.xr.getDepthSensingMesh();Bt!==null&&oi(Bt,Y,-1/0,C.sortObjects)}oi(R,Y,0,C.sortObjects),U.finish(),C.sortObjects===!0&&U.sort(Tt,Ft),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Ct.addToRenderList(U,R),this.info.render.frame++,It===!0&&zt.beginShadows();const K=B.state.shadowsArray;if(Ot.render(K,R,Y),It===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&j.hasRenderPass())===!1){const Bt=U.opaque,Lt=U.transmissive;if(B.setupLights(),Y.isArrayCamera){const Ht=Y.cameras;if(Lt.length>0)for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt];Sn(Bt,Lt,R,Wt)}se&&Ct.render(R);for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt];sn(U,R,Wt,Wt.viewport)}}else Lt.length>0&&Sn(Bt,Lt,R,Y),se&&Ct.render(R),sn(U,R,Y)}it!==null&&rt===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),$&&j.end(C),R.isScene===!0&&R.onAfterRender(C,R,Y),Pt.resetDefaultState(),ht=-1,lt=null,P.pop(),P.length>0?(B=P[P.length-1],It===!0&&zt.setGlobalState(C.clippingPlanes,B.state.camera)):B=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function oi(R,Y,st,$){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){$&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Bt=Rt.update(R),Lt=R.material;Lt.visible&&U.push(R,Bt,Lt,st,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Bt=Rt.update(R),Lt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pe.copy(Bt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Lt)){const Ht=Bt.groups;for(let kt=0,Jt=Ht.length;kt<Jt;kt++){const Wt=Ht[kt],$t=Lt[Wt.materialIndex];$t&&$t.visible&&U.push(R,Bt,$t,st,pe.z,Wt)}}else Lt.visible&&U.push(R,Bt,Lt,st,pe.z,null)}}const Dt=R.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)oi(Dt[Bt],Y,st,$)}function sn(R,Y,st,$){const{opaque:K,transmissive:Dt,transparent:Bt}=R;B.setupLightsView(st),It===!0&&zt.setGlobalState(C.clippingPlanes,st),$&&qt.viewport(F.copy($)),K.length>0&&Ti(K,Y,st),Dt.length>0&&Ti(Dt,Y,st),Bt.length>0&&Ti(Bt,Y,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Sn(R,Y,st,$){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[$.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[$.id]=new Zi(1,1,{generateMipmaps:!0,type:$t?Ta:yi,minFilter:Fr,samples:Le.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=B.state.transmissionRenderTarget[$.id],Bt=$.viewport||F;Dt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(yt),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),se&&Ct.render(st);const Jt=C.toneMapping;C.toneMapping=Yi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),B.setupLightsView($),It===!0&&zt.setGlobalState(C.clippingPlanes,$),Ti(R,st,$),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let we=0,Ke=Y.length;we<Ke;we++){const ke=Y[we],{object:Ne,geometry:jt,material:De,group:ae}=ke;if(De.side===Sa&&Ne.layers.test($.layers)){const yn=De.side;De.side=jn,De.needsUpdate=!0,kr(Ne,st,$,jt,De,ae),De.side=yn,De.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Lt,Ht,kt),C.setClearColor(yt,xt),Wt!==void 0&&($.viewport=Wt),C.toneMapping=Jt}function Ti(R,Y,st){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Dt=R.length;K<Dt;K++){const Bt=R[K],{object:Lt,geometry:Ht,group:kt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),Lt.layers.test(st.layers)&&kr(Lt,Y,st,Ht,Jt,kt)}}function kr(R,Y,st,$,K,Dt){R.onBeforeRender(C,Y,st,$,K,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,Y,st,$,R,Dt),K.transparent===!0&&K.side===Sa&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,C.renderBufferDirect(st,Y,$,K,R,Dt),K.side=Kn,K.needsUpdate=!0,C.renderBufferDirect(st,Y,$,K,R,Dt),K.side=Sa):C.renderBufferDirect(st,Y,$,K,R,Dt),R.onAfterRender(C,Y,st,$,K,Dt)}function Wr(R,Y,st){Y.isScene!==!0&&(Y=Ce);const $=E.get(R),K=B.state.lights,Dt=B.state.shadowsArray,Bt=K.state.version,Lt=Xt.getParameters(R,K.state,Dt,Y,st),Ht=Xt.getProgramCacheKey(Lt);let kt=$.programs;$.environment=R.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(R.isMeshStandardMaterial?vt:dt).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Ln),kt=new Map,$.programs=kt);let Jt=kt.get(Ht);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Bt)return eo(R,Lt),Jt}else Lt.uniforms=Xt.getUniforms(R),R.onBeforeCompile(Lt,C),Jt=Xt.acquireProgram(Lt,Ht),kt.set(Ht,Jt),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),eo(R,Lt),$.needsLights=wa(R),$.lightsStateVersion=Bt,$.needsLights&&(Wt.ambientLightColor.value=K.state.ambient,Wt.lightProbe.value=K.state.probe,Wt.directionalLights.value=K.state.directional,Wt.directionalLightShadows.value=K.state.directionalShadow,Wt.spotLights.value=K.state.spot,Wt.spotLightShadows.value=K.state.spotShadow,Wt.rectAreaLights.value=K.state.rectArea,Wt.ltc_1.value=K.state.rectAreaLTC1,Wt.ltc_2.value=K.state.rectAreaLTC2,Wt.pointLights.value=K.state.point,Wt.pointLightShadows.value=K.state.pointShadow,Wt.hemisphereLights.value=K.state.hemi,Wt.directionalShadowMap.value=K.state.directionalShadowMap,Wt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Wt.spotShadowMap.value=K.state.spotShadowMap,Wt.spotLightMatrix.value=K.state.spotLightMatrix,Wt.spotLightMap.value=K.state.spotLightMap,Wt.pointShadowMap.value=K.state.pointShadowMap,Wt.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function yl(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=uu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function eo(R,Y){const st=E.get(R);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function fr(R,Y,st,$,K){Y.isScene!==!0&&(Y=Ce),q.resetTextureUnits();const Dt=Y.fog,Bt=$.isMeshStandardMaterial?Y.environment:null,Lt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zs,Ht=($.isMeshStandardMaterial?vt:dt).get($.envMap||Bt),kt=$.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let Ke=Yi;$.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ke=C.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=ke!==void 0?ke.length:0,jt=E.get($),De=B.state.lights;if(It===!0&&(de===!0||R!==lt)){const bn=R===lt&&$.id===ht;zt.setState($,R,bn)}let ae=!1;$.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==De.state.version||jt.outputColorSpace!==Lt||K.isBatchedMesh&&jt.batching===!1||!K.isBatchedMesh&&jt.batching===!0||K.isBatchedMesh&&jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&jt.instancing===!1||!K.isInstancedMesh&&jt.instancing===!0||K.isSkinnedMesh&&jt.skinning===!1||!K.isSkinnedMesh&&jt.skinning===!0||K.isInstancedMesh&&jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&jt.instancingMorph===!1&&K.morphTexture!==null||jt.envMap!==Ht||$.fog===!0&&jt.fog!==Dt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==zt.numPlanes||jt.numIntersection!==zt.numIntersection)||jt.vertexAlphas!==kt||jt.vertexTangents!==Jt||jt.morphTargets!==Wt||jt.morphNormals!==$t||jt.morphColors!==we||jt.toneMapping!==Ke||jt.morphTargetsCount!==Ne)&&(ae=!0):(ae=!0,jt.__version=$.version);let yn=jt.currentProgram;ae===!0&&(yn=Wr($,Y,K));let Ki=!1,Mn=!1,li=!1;const Pe=yn.getUniforms(),En=jt.uniforms;if(qt.useProgram(yn.program)&&(Ki=!0,Mn=!0,li=!0),$.id!==ht&&(ht=$.id,Mn=!0),Ki||lt!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",R.projectionMatrix),Pe.setValue(G,"viewMatrix",R.matrixWorldInverse);const Tn=Pe.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),lt!==R&&(lt=R,Mn=!0,li=!0)}if(jt.needsLights&&(De.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,q),De.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",De.state.spotShadowMap,q),De.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",De.state.pointShadowMap,q)),K.isSkinnedMesh){Pe.setOptional(G,K,"bindMatrix"),Pe.setOptional(G,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Pe.setValue(G,"boneTexture",bn.boneTexture,q))}K.isBatchedMesh&&(Pe.setOptional(G,K,"batchingTexture"),Pe.setValue(G,"batchingTexture",K._matricesTexture,q),Pe.setOptional(G,K,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",K._indirectTexture,q),Pe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",K._colorsTexture,q));const hn=st.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&le.update(K,st,yn),(Mn||jt.receiveShadow!==K.receiveShadow)&&(jt.receiveShadow=K.receiveShadow,Pe.setValue(G,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=Ht,En.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=SR()),Mn&&(Pe.setValue(G,"toneMappingExposure",C.toneMappingExposure),jt.needsLights&&no(En,li),Dt&&$.fog===!0&&ee.refreshFogUniforms(En,Dt),ee.refreshMaterialUniforms(En,$,gt,nt,B.state.transmissionRenderTarget[R.id]),uu.upload(G,yl(jt),En,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(uu.upload(G,yl(jt),En,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pe.setValue(G,"center",K.center),Pe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(G,"normalMatrix",K.normalMatrix),Pe.setValue(G,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let Tn=0,qr=bn.length;Tn<qr;Tn++){const Ai=bn[Tn];St.update(Ai,yn),St.bind(Ai,yn)}}return yn}function no(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function wa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(R,Y,st){const $=E.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=Y,E.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:st,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const st=E.get(R);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const Da=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,st=0){it=R,V=Y,rt=st;let $=null,K=!1,Dt=!1;if(R){const Lt=E.get(R);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest,qt.viewport(F),qt.scissor(H),qt.setScissorTest(at),ht=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Lt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const kt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?$=kt[Y][st]:$=kt[Y],K=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?$=E.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[st]:$=kt,F.copy(R.viewport),H.copy(R.scissor),at=R.scissorTest}else F.copy(et).multiplyScalar(gt).floor(),H.copy(ut).multiplyScalar(gt).floor(),at=wt;if(st!==0&&($=Da),qt.bindFramebuffer(G.FRAMEBUFFER,$)&&qt.drawBuffers(R,$),qt.viewport(F),qt.scissor(H),qt.setScissorTest(at),K){const Lt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,st)}else if(Dt){const Lt=Y;for(let Ht=0;Ht<R.textures.length;Ht++){const kt=E.get(R.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,st,Lt)}}else if(R!==null&&st!==0){const Lt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}ht=-1},this.readRenderTargetPixels=function(R,Y,st,$,K,Dt,Bt,Lt=0){if(!(R&&R.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const kt=R.textures[Lt],Jt=kt.format,Wt=kt.type;if(!Le.textureFormatReadable(Jt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Wt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-$&&st>=0&&st<=R.height-K&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,st,$,K,bt.convert(Jt),bt.convert(Wt),Dt))}finally{const kt=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,st,$,K,Dt,Bt,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ht=Ht[Bt]),Ht)if(Y>=0&&Y<=R.width-$&&st>=0&&st<=R.height-K){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const kt=R.textures[Lt],Jt=kt.format,Wt=kt.type;if(!Le.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,st,$,K,bt.convert(Jt),bt.convert(Wt),0);const we=it!==null?E.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,we);const Ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await oM(G,Ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer($t),G.deleteSync(Ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,st=0){const $=Math.pow(2,-st),K=Math.floor(R.image.width*$),Dt=Math.floor(R.image.height*$),Bt=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Bt,Lt,K,Dt),qt.unbindTexture()};const hr=G.createFramebuffer(),Ua=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,st=null,$=null,K=0,Dt=null){Dt===null&&(K!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=K,K=0):Dt=0);let Bt,Lt,Ht,kt,Jt,Wt,$t,we,Ke;const ke=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(st!==null)Bt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Jt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const hn=Math.pow(2,-K);Bt=Math.floor(ke.width*hn),Lt=Math.floor(ke.height*hn),R.isDataArrayTexture?Ht=ke.depth:R.isData3DTexture?Ht=Math.floor(ke.depth*hn):Ht=1,kt=0,Jt=0,Wt=0}$!==null?($t=$.x,we=$.y,Ke=$.z):($t=0,we=0,Ke=0);const Ne=bt.convert(Y.format),jt=bt.convert(Y.type);let De;Y.isData3DTexture?(q.setTexture3D(Y,0),De=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),De=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Pe=R.isDataArrayTexture||R.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=E.get(R),bn=E.get(Y),Tn=E.get(hn.__renderTarget),qr=E.get(bn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Ai=0;Ai<Ht;Ai++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,K,Wt+Ai),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Ke+Ai)),G.blitFramebuffer(kt,Jt,Bt,Lt,$t,we,Bt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||E.has(R)){const hn=E.get(R),bn=E.get(Y);qt.bindFramebuffer(G.READ_FRAMEBUFFER,hr),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ua);for(let Tn=0;Tn<Ht;Tn++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,K,Wt+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,K),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Dt,Ke+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Dt),K!==0?G.blitFramebuffer(kt,Jt,Bt,Lt,$t,we,Bt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(De,Dt,$t,we,Ke+Tn,kt,Jt,Bt,Lt):G.copyTexSubImage2D(De,Dt,$t,we,kt,Jt,Bt,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(De,Dt,$t,we,Ke,Bt,Lt,Ht,Ne,jt,ke.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Dt,$t,we,Ke,Bt,Lt,Ht,Ne,ke.data):G.texSubImage3D(De,Dt,$t,we,Ke,Bt,Lt,Ht,Ne,jt,ke):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,$t,we,Bt,Lt,Ne,jt,ke.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,$t,we,ke.width,ke.height,Ne,ke.data):G.texSubImage2D(G.TEXTURE_2D,Dt,$t,we,Bt,Lt,Ne,jt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),Dt===0&&Y.generateMipmaps&&G.generateMipmap(De),qt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){V=0,rt=0,it=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}function MR(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),i.addColorStop(1,"rgba(49, 48, 48, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64),new ur(s)}function ER({count:s=5e3,spread:t=3e3,size:i=3.5}){const r=new vn,l=new Float32Array(s*3),c=new Float32Array(s*3),f=new ye;for(let d=0;d<s;d++){const m=d*3,p=Math.random()<.75,_=p?t*.45:t,g=(Math.random()-.5)*_,x=(Math.random()-.5)*_,y=(Math.random()-.5)*(_*.5);l[m]=g,l[m+1]=x,l[m+2]=y;const b=Math.sqrt(g*g+x*x+y),T=Math.max(.1,1-b/(t*.7)),M=(Math.random()*.6+.4)*T;p?f.setHSL(.55+Math.random()*.1,.6,M):f.set(16777215).multiplyScalar(M*.5),c[m]=f.r,c[m+1]=f.g,c[m+2]=f.b}return r.setAttribute("position",new Fn(l,3)),r.setAttribute("color",new Fn(c,3)),new Dp(r,new wp({size:i,map:MR(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ei,sizeAttenuation:!0}))}function bR(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 0.15)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.02)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new ur(s)}function TR(){const s=new si,t=bR(),i=["#b185f4","#3a6ffc","#790b1d","#f1b806","#4a2e5e","#1b7f85","#3c5d83","#315d50"],r=250;for(let l=0;l<r;l++){const c=new xl({map:t,color:new ye(i[l%i.length]),transparent:!0,opacity:Math.random()*.3+.1,blending:Ei,depthWrite:!1}),f=new Su(c),d=Math.random()*Math.PI*2,m=200+Math.random()*800;f.position.set(Math.cos(d)*m,Math.sin(d)*m*.6,(Math.random()-.5)*500);const p=400+Math.random()*600;f.scale.set(p,p,1),s.add(f)}return s}const pp=[{name:"Inner",major:400,minor:232,tiltX:40,x:0,y:0,z:-150,color:4144959},{name:"Middle",major:600,minor:366,tiltX:40,x:0,y:-100,z:-100,color:8355711},{name:"Outer",major:900,minor:528,tiltX:40,x:0,y:-230,z:-100,color:10461087}];function AR(){const s=new si;return pp.forEach(t=>{const i=new si,l=new Up(0,0,t.major,t.minor,0,2*Math.PI,!1,0).getPoints(128),c=new ix(l.map(x=>new W(x.x,x.y,0)));c.closed=!0;const f=new _u(c,128,.6,8,!0),d=new zi({color:5526612,transparent:!0,opacity:.004,blending:Ei,depthWrite:!1}),m=new xn(f,d),p=new _u(c,128,2,8,!0),_=new zi({color:15592941,transparent:!0,opacity:.15,blending:Ei,depthWrite:!1}),g=new xn(p,_);i.position.set(t.x||0,t.y||0,t.z||0),i.rotation.x=(t.tiltX||0)*(Math.PI/180),t.tiltY&&(i.rotation.y=t.tiltY*(Math.PI/180)),t.tiltZ&&(i.rotation.z=t.tiltZ*(Math.PI/180)),i.add(m),i.add(g),s.add(i)}),s}const RR="/etherea-sponsors-page/assets/fest-logo-white-HxaKwy6i.png",CR="/etherea-sponsors-page/assets/fest-logo-554e2uue.png",Ni={hoverSpeed:.45,hoverScaleGrowth:1.05,defaultScale:1,size:200,tiltXDeg:30,zPosition:.15,glowOpacity:.45};function wR(){const s=new si,t=new Pp;let i,r;const l=v=>{const O=v.image.width/v.image.height;i&&(i.scale.x=O),r&&(r.scale.x=O),v.minFilter=We,v.magFilter=We,v.colorSpace=zn},c=t.load(RR,l),f=t.load(CR,v=>{v.minFilter=We,v.magFilter=We,v.colorSpace=zn}),d=new cr(Ni.size,Ni.size),m=new zi({map:c,transparent:!0,opacity:1,depthWrite:!1,side:Kn}),p=new zi({map:f,transparent:!0,opacity:0,depthWrite:!1,side:Kn});i=new xn(d,m),r=new xn(d,p),r.position.z=.5,s.add(i),s.add(r);const _=DR(),g=new xl({map:_,color:16777215,transparent:!0,opacity:Ni.glowOpacity,depthWrite:!1,blending:Ei}),x=new Su(g);x.raycast=()=>{};const y=Ni.size*1;x.scale.set(y,y,1),x.position.z=-10,s.add(x),s.position.set(0,20,Ni.zPosition),s.rotation.x=bM.degToRad(Ni.tiltXDeg);let b=0,T=Ni.defaultScale;function M(v){if(!i||!r)return;b+=((v?1:0)-b)*Ni.hoverSpeed,i.material.opacity=1-b,r.material.opacity=b;const D=v?Ni.hoverScaleGrowth:Ni.defaultScale;T+=(D-T)*Ni.hoverSpeed,s.scale.set(T,T,1)}return{group:s,update:M}}function DR(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new ur(s)}const Av=new Pp,xa={orbitSpeed:.001,hoverSpeed:.35,hoverScaleGrowth:1.4,defaultScale:1,glowOpacity:.4,baseOpacity:.7};function UR({name:s,orbitIndex:t,angleDegree:i,imageWhitePath:r,imageColorPath:l,camera:c,size:f=40,lift:d=10}){const m=new si;let p,_;const g=w=>{if(w.image&&w.image.width&&w.image.height){const V=w.image.width/w.image.height;p&&(p.scale.x=V),_&&(_.scale.x=V)}},x=Av.load(r,g),y=Av.load(l);[x,y].forEach(w=>{w.minFilter=We,w.magFilter=We,w.colorSpace=zn});const b=new cr(f,f),T=new zi({map:x,transparent:!0,opacity:xa.baseOpacity,depthWrite:!1,side:Kn}),M=new zi({map:y,transparent:!0,opacity:0,depthWrite:!1,side:Kn});p=new xn(b,T),_=new xn(b,M),_.position.z=.2,m.add(p),m.add(_);const v=NR(),O=new xl({map:v,color:16777215,transparent:!0,opacity:xa.glowOpacity,depthWrite:!1,blending:Ei}),D=new Su(O);D.raycast=()=>{};const U=f*2.5;D.scale.set(U,U,1.5),D.position.z=-2,m.add(D);let B=0,z=xa.defaultScale,P=i*Math.PI/180;const j=pp[t]||pp[0];function C(w){P+=xa.orbitSpeed;const V=LR(j,P,d);m.position.copy(V),B+=((w?1:0)-B)*xa.hoverSpeed,p&&p.material&&(p.material.opacity=(1-B)*xa.baseOpacity),_&&_.material&&(_.material.opacity=B);const it=w?xa.hoverScaleGrowth:xa.defaultScale;z+=(it-z)*xa.hoverSpeed,m.scale.set(z,z,1),c&&m.quaternion.copy(c.quaternion)}return m.userData={isSponsor:!0,name:s},{group:m,update:C}}function LR(s,t,i){const r=s.major*Math.cos(t),l=s.minor*Math.sin(t),c=i,f=(s.tiltX||0)*(Math.PI/180),d=l*Math.cos(f)-c*Math.sin(f),m=l*Math.sin(f)+c*Math.cos(f),p=r+s.x,_=d+s.y,g=m+s.z;return new W(p,_,g)}function NR(){const s=document.createElement("canvas");s.width=64,s.height=64;const t=s.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64),new ur(s)}const OR="/etherea-sponsors-page/assets/heading-DbqJjcVK.png",vi={yPosition:380,size:500,subtextYOffset:-60,subtextWidth:800,floatSpeed:.002,floatRange:10,glowOpacity:.6};function PR(){const s=new si,t=new Pp,i=new cr(1,1),r=new zi({map:t.load(OR,T=>{const M=T.image.width/T.image.height;l.scale.set(vi.size,vi.size/M,1),x.scale.set(vi.size*2.5,vi.size/M*2.5,1),T.minFilter=We,T.magFilter=We,T.colorSpace=zn}),transparent:!0,opacity:1,side:Kn,depthWrite:!1}),l=new xn(i,r);s.add(l);const c=zR("Those who help us transcend the ordinary",{font:"Inter sans-serif",fontSize:45,color:"#fffcf2"}),f=new zi({map:c,transparent:!0,opacity:.9,side:Kn,depthWrite:!1}),d=c.image.width/c.image.height,m=vi.subtextWidth/d,p=new xn(new cr(vi.subtextWidth,m),f);p.position.y=vi.subtextYOffset,s.add(p);const _=BR(),g=new xl({map:_,color:16755200,transparent:!0,opacity:vi.glowOpacity,blending:Ei,depthWrite:!1}),x=new Su(g);x.scale.set(1.5,1.5,1.5),x.position.z=-5,s.add(x),s.position.set(0,vi.yPosition,0);let y=0;function b(T){y+=vi.floatSpeed;const M=Math.sin(y)*vi.floatRange;s.position.y=vi.yPosition+M,T&&s.quaternion.copy(T.quaternion)}return{group:s,update:b}}function zR(s,t={}){const i=t.font||"Arial",r=t.fontSize||48,l=t.color||"#f7c40a",c=document.createElement("canvas");c.width=1024,c.height=128;const f=c.getContext("2d");f.font=`${r}px ${i}`,f.textAlign="center",f.textBaseline="middle",f.fillStyle=l,f.shadowColor="rgba(255, 204, 0, 0.97)",f.shadowBlur=10,f.fillText(s,c.width/2,c.height/2);const d=new ur(c);return d.minFilter=We,d.magFilter=We,d}function BR(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 0.5)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.1)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new ur(s)}const xi={lineColor:16772795,starColor:16777215,passiveOpacity:.05,activeOpacity:.65,fadeSpeedIn:.1,fadeSpeedOut:.015,scale:4.5},FR={mirror:[[0,40,0],[20,20,0],[0,0,0],[-20,20,0],[0,40,0],[0,0,0],[0,-40,0]],trident:[[0,-40,0],[0,40,0],[-20,20,0],[-20,0,0],[0,-10,0],[20,0,0],[20,20,0]],lotus:[[0,-20,0],[-15,0,0],[0,20,0],[15,0,0],[0,-20,0],[-15,0,0],[-30,10,0],[-10,-20,0],[15,0,0],[30,10,0],[10,-20,0]],feather:[[0,-40,0],[0,40,0],[0,30,0],[10,35,0],[0,20,0],[15,25,0],[0,10,0],[12,12,0],[0,0,0],[10,0,0]],sword:[[0,-40,0],[0,50,0],[-15,-10,0],[15,-10,0]],moon:[[0,40,0],[10,20,0],[10,-20,0],[0,-40,0],[-15,-30,0],[-25,0,0],[-15,30,0],[0,40,0]],teardrop:[[0,40,0],[15,-10,0],[0,-30,0],[-15,-10,0],[0,40,0]],eye:[[-40,0,0],[0,20,0],[40,0,0],[0,-20,0],[-40,0,0],[0,5,0],[5,0,0],[0,-5,0],[-5,0,0],[0,5,0]],dove:[[0,0,0],[-20,10,0],[-30,30,0],[-10,20,0],[0,0,0],[0,0,0],[20,-10,0],[10,10,0],[0,0,0]]},IR=[{name:"mirror",x:-600,y:300,z:-500},{name:"trident",x:600,y:350,z:-550},{name:"lotus",x:-700,y:-200,z:-450},{name:"feather",x:700,y:-250,z:-600},{name:"sword",x:0,y:450,z:-700},{name:"moon",x:-400,y:0,z:-800},{name:"teardrop",x:400,y:50,z:-750},{name:"eye",x:-200,y:-350,z:-500},{name:"dove",x:200,y:-350,z:-500}];function HR(){const s=new si,t=[],i=[],r=VR();IR.forEach(c=>{const f=c.name,d=FR[f];if(!d)return;const m=new si;GR(m,c);const p=d.map(U=>new W(U[0],U[1],U[2])),_=new vn().setFromPoints(p),g=new ex({color:xi.lineColor,transparent:!0,opacity:xi.passiveOpacity,linewidth:1,depthWrite:!1,blending:Ei}),x=new tE(_,g);m.add(x);const y=new vn().setFromPoints(p),b=new wp({color:xi.starColor,map:r,size:15,transparent:!0,opacity:xi.passiveOpacity,depthWrite:!1,blending:Ei}),T=new Dp(y,b);m.add(T),_.computeBoundingSphere();const M=_.boundingSphere.radius+15,v=new Np(M,8,8),O=new zi({visible:!1,color:16711680}),D=new xn(v,O);m.add(D),D.userData={id:c.name},t.push(D),s.add(m),i.push({name:c.name,lineMat:g,starMat:b,isHovered:!1,currentOpacity:xi.passiveOpacity})});function l(c){let f=!1;return i.forEach(d=>{const m=c&&c.userData.id===d.name,p=m?xi.activeOpacity:xi.passiveOpacity,_=m?xi.fadeSpeedIn:xi.fadeSpeedOut;d.currentOpacity+=(p-d.currentOpacity)*_,d.lineMat.opacity=d.currentOpacity,d.starMat.opacity=d.currentOpacity,m&&(f=!0)}),f}return{group:s,hitTargets:t,update:l}}function GR(s,t){s.position.set(t.x,t.y,t.z),s.scale.set(xi.scale,xi.scale,xi.scale),s.rotation.z=(Math.random()-.5)*.5}function VR(){const s=document.createElement("canvas");s.width=32,s.height=32;const t=s.getContext("2d"),i=t.createRadialGradient(16,16,0,16,16,16);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,32,32),new ur(s)}function XR(){const t=new vn,i=new Float32Array(450),r=new Float32Array(150),l=new Float32Array(150);for(let g=0;g<150;g++)i[g*3]=9999,i[g*3+1]=9999,i[g*3+2]=9999,r[g]=0,l[g]=0;t.setAttribute("position",new Fn(i,3)),t.setAttribute("size",new Fn(r,1)),t.setAttribute("aOpacity",new Fn(l,1));const c=kR(),f=new Bi({uniforms:{pointTexture:{value:c},color:{value:new ye(16777215)}},vertexShader:`
      attribute float size;
      attribute float aOpacity;
      varying float vOpacity;
      void main() {
        vOpacity = aOpacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform vec3 color;
      varying float vOpacity;
      void main() {
        if (vOpacity <= 0.01) discard;
        vec4 texColor = texture2D(pointTexture, gl_PointCoord);
        gl_FragColor = vec4(color, vOpacity) * texColor;
      }
    `,transparent:!0,depthWrite:!1,blending:Ei}),d=new Dp(t,f);d.frustumCulled=!1;const m=[];for(let g=0;g<150;g++)m.push({index:g,life:0,vx:0,vy:0,active:!1});let p=0;function _(g,x,y=.016){if(x)for(let b=0;b<2;b++){const T=m[p];T.active=!0,T.life=1;const M=5;i[T.index*3]=g.x+(Math.random()-.5)*M,i[T.index*3+1]=g.y+(Math.random()-.5)*M,i[T.index*3+2]=g.z+50,T.vx=(Math.random()-.5)*20,T.vy=(Math.random()-.5)*20,p=(p+1)%150}for(let b=0;b<150;b++){const T=m[b];T.active&&(T.life-=y*1.5,T.life<=0?(T.active=!1,i[T.index*3]=9999,r[T.index]=0,l[T.index]=0):(i[T.index*3]+=T.vx*y,i[T.index*3+1]+=T.vy*y,r[T.index]=T.life*15,l[T.index]=T.life))}t.attributes.position.needsUpdate=!0,t.attributes.size.needsUpdate=!0,t.attributes.aOpacity.needsUpdate=!0}return{mesh:d,update:_}}function kR(){const s=document.createElement("canvas");s.width=32,s.height=32;const t=s.getContext("2d"),i=t.createRadialGradient(16,16,0,16,16,16);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,32,32),new ur(s)}const pd="/etherea-sponsors-page/assets/logo-white-DQTve_jf.png",md="/etherea-sponsors-page/assets/logo-C8cnCK6K.png";function WR(s){const t=new ZM;t.fog=new Cp(0,6e-4);const i=new Si(65,window.innerWidth/window.innerHeight,.1,1e4);i.position.z=800;const r=new yR({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),s.appendChild(r.domElement);const l=new TE,c=new Qt(-1e3,-1e3),f=new W;function d(z){c.x=z.clientX/window.innerWidth*2-1,c.y=-(z.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",d);const m=new si,p=TR();m.add(p);const _=ER({count:8e3,spread:4500,size:5});m.add(_),m.position.z=-400,t.add(m);const g=HR();t.add(g.group);const x=XR();t.add(x.mesh);const y=AR();t.add(y);const b=wR();t.add(b.group);const T=PR();t.add(T.group);const M=[];function v(z){const{group:P,update:j}=UR({...z,camera:i});t.add(P),M.push({group:P,update:j})}v({name:"Sponsor A",orbitIndex:0,angleDegree:245,imageWhitePath:pd,imageColorPath:md,size:100,lift:0}),v({name:"Sponsor B",orbitIndex:1,angleDegree:180,imageWhitePath:pd,imageColorPath:md,size:60,lift:20}),v({name:"Sponsor C",orbitIndex:2,angleDegree:300,imageWhitePath:pd,imageColorPath:md,size:80,lift:25});let O;const D=new bE;function U(){O=requestAnimationFrame(U);const z=D.getDelta();m.rotation.z+=8e-4,p.children.forEach((ht,lt)=>{ht.rotation.x+=.05*(lt%2===0?1:-1)}),l.setFromCamera(c,i);const P=new W(c.x,c.y,.5);P.unproject(i);const j=P.sub(i.position).normalize(),C=(0-i.position.z)/j.z;f.copy(i.position).add(j.multiplyScalar(C));const w=l.intersectObjects(b.group.children);b.update(w.length>0),T.update(i),M.forEach(ht=>{const lt=l.intersectObjects(ht.group.children);ht.update(lt.length>0)});const V=l.intersectObjects(g.hitTargets),rt=V.length>0?V[0].object:null,it=g.update(rt);x.update(f,it,z),r.render(t,i)}U();function B(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),window.removeEventListener("mousemove",d),cancelAnimationFrame(O),t.traverse(z=>{z.geometry&&z.geometry.dispose(),z.material&&(Array.isArray(z.material)?z.material.forEach(P=>P.dispose()):z.material.dispose())}),r.dispose(),s.contains(r.domElement)&&s.removeChild(r.domElement)}}function qR(){const s=_d.useRef(null);return _d.useEffect(()=>{if(!s.current)return;const t=WR(s.current);return()=>t&&t()},[]),gd.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,overflow:"hidden",background:"black"}})}Ay.createRoot(document.getElementById("root")).render(gd.jsx(vy.StrictMode,{children:gd.jsx(qR,{})}));
