(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function ol(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var $n={exports:{}},q="top",ee="bottom",te="right",K="left",Xn="auto",jt=[q,ee,te,K],gt="start",xt="end",Vs="clippingParents",zi="viewport",Ot="popper",zs="reference",Di=jt.reduce(function(n,e){return n.concat([e+"-"+gt,e+"-"+xt])},[]),qi=[].concat(jt,[Xn]).reduce(function(n,e){return n.concat([e,e+"-"+gt,e+"-"+xt])},[]),qs="beforeRead",Ks="read",Gs="afterRead",Ys="beforeMain",Js="main",Xs="afterMain",Qs="beforeWrite",Zs="write",eo="afterWrite",to=[qs,Ks,Gs,Ys,Js,Xs,Qs,Zs,eo];function ve(n){return n?(n.nodeName||"").toLowerCase():null}function ne(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function mt(n){var e=ne(n).Element;return n instanceof e||n instanceof Element}function oe(n){var e=ne(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Ki(n){if(typeof ShadowRoot>"u")return!1;var e=ne(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function al(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},s=e.attributes[t]||{},a=e.elements[t];!oe(a)||!ve(a)||(Object.assign(a.style,r),Object.keys(s).forEach(function(c){var l=s[c];l===!1?a.removeAttribute(c):a.setAttribute(c,l===!0?"":l)}))})}function cl(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],a=e.attributes[r]||{},c=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),l=c.reduce(function(h,f){return h[f]="",h},{});!oe(s)||!ve(s)||(Object.assign(s.style,l),Object.keys(a).forEach(function(h){s.removeAttribute(h)}))})}}const Gi={name:"applyStyles",enabled:!0,phase:"write",fn:al,effect:cl,requires:["computeStyles"]};function ge(n){return n.split("-")[0]}var pt=Math.max,Wn=Math.min,Mt=Math.round;function Ni(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function no(){return!/^((?!chrome|android).)*safari/i.test(Ni())}function $t(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),s=1,a=1;e&&oe(n)&&(s=n.offsetWidth>0&&Mt(r.width)/n.offsetWidth||1,a=n.offsetHeight>0&&Mt(r.height)/n.offsetHeight||1);var c=mt(n)?ne(n):window,l=c.visualViewport,h=!no()&&t,f=(r.left+(h&&l?l.offsetLeft:0))/s,g=(r.top+(h&&l?l.offsetTop:0))/a,v=r.width/s,_=r.height/a;return{width:v,height:_,top:g,right:f+v,bottom:g+_,left:f,x:f,y:g}}function Yi(n){var e=$t(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function io(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Ki(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pe(n){return ne(n).getComputedStyle(n)}function ll(n){return["table","td","th"].indexOf(ve(n))>=0}function We(n){return((mt(n)?n.ownerDocument:n.document)||window.document).documentElement}function Qn(n){return ve(n)==="html"?n:n.assignedSlot||n.parentNode||(Ki(n)?n.host:null)||We(n)}function rs(n){return!oe(n)||Pe(n).position==="fixed"?null:n.offsetParent}function ul(n){var e=/firefox/i.test(Ni()),t=/Trident/i.test(Ni());if(t&&oe(n)){var r=Pe(n);if(r.position==="fixed")return null}var s=Qn(n);for(Ki(s)&&(s=s.host);oe(s)&&["html","body"].indexOf(ve(s))<0;){var a=Pe(s);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return s;s=s.parentNode}return null}function cn(n){for(var e=ne(n),t=rs(n);t&&ll(t)&&Pe(t).position==="static";)t=rs(t);return t&&(ve(t)==="html"||ve(t)==="body"&&Pe(t).position==="static")?e:t||ul(n)||e}function Ji(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Zt(n,e,t){return pt(n,Wn(e,t))}function dl(n,e,t){var r=Zt(n,e,t);return r>t?t:r}function ro(){return{top:0,right:0,bottom:0,left:0}}function so(n){return Object.assign({},ro(),n)}function oo(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var hl=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,so(typeof e!="number"?e:oo(e,jt))};function fl(n){var e,t=n.state,r=n.name,s=n.options,a=t.elements.arrow,c=t.modifiersData.popperOffsets,l=ge(t.placement),h=Ji(l),f=[K,te].indexOf(l)>=0,g=f?"height":"width";if(!(!a||!c)){var v=hl(s.padding,t),_=Yi(a),b=h==="y"?q:K,A=h==="y"?ee:te,P=t.rects.reference[g]+t.rects.reference[h]-c[h]-t.rects.popper[g],k=c[h]-t.rects.reference[h],L=cn(a),D=L?h==="y"?L.clientHeight||0:L.clientWidth||0:0,N=P/2-k/2,I=v[b],O=D-_[g]-v[A],S=D/2-_[g]/2+N,M=Zt(I,S,O),U=h;t.modifiersData[r]=(e={},e[U]=M,e.centerOffset=M-S,e)}}function pl(n){var e=n.state,t=n.options,r=t.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||io(e.elements.popper,s)&&(e.elements.arrow=s))}const ao={name:"arrow",enabled:!0,phase:"main",fn:fl,effect:pl,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ut(n){return n.split("-")[1]}var gl={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ml(n,e){var t=n.x,r=n.y,s=e.devicePixelRatio||1;return{x:Mt(t*s)/s||0,y:Mt(r*s)/s||0}}function ss(n){var e,t=n.popper,r=n.popperRect,s=n.placement,a=n.variation,c=n.offsets,l=n.position,h=n.gpuAcceleration,f=n.adaptive,g=n.roundOffsets,v=n.isFixed,_=c.x,b=_===void 0?0:_,A=c.y,P=A===void 0?0:A,k=typeof g=="function"?g({x:b,y:P}):{x:b,y:P};b=k.x,P=k.y;var L=c.hasOwnProperty("x"),D=c.hasOwnProperty("y"),N=K,I=q,O=window;if(f){var S=cn(t),M="clientHeight",U="clientWidth";if(S===ne(t)&&(S=We(t),Pe(S).position!=="static"&&l==="absolute"&&(M="scrollHeight",U="scrollWidth")),S=S,s===q||(s===K||s===te)&&a===xt){I=ee;var F=v&&S===O&&O.visualViewport?O.visualViewport.height:S[M];P-=F-r.height,P*=h?1:-1}if(s===K||(s===q||s===ee)&&a===xt){N=te;var B=v&&S===O&&O.visualViewport?O.visualViewport.width:S[U];b-=B-r.width,b*=h?1:-1}}var H=Object.assign({position:l},f&&gl),z=g===!0?ml({x:b,y:P},ne(t)):{x:b,y:P};if(b=z.x,P=z.y,h){var j;return Object.assign({},H,(j={},j[I]=D?"0":"",j[N]=L?"0":"",j.transform=(O.devicePixelRatio||1)<=1?"translate("+b+"px, "+P+"px)":"translate3d("+b+"px, "+P+"px, 0)",j))}return Object.assign({},H,(e={},e[I]=D?P+"px":"",e[N]=L?b+"px":"",e.transform="",e))}function _l(n){var e=n.state,t=n.options,r=t.gpuAcceleration,s=r===void 0?!0:r,a=t.adaptive,c=a===void 0?!0:a,l=t.roundOffsets,h=l===void 0?!0:l,f={placement:ge(e.placement),variation:Ut(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ss(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:h})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ss(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Xi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_l,data:{}};var xn={passive:!0};function vl(n){var e=n.state,t=n.instance,r=n.options,s=r.scroll,a=s===void 0?!0:s,c=r.resize,l=c===void 0?!0:c,h=ne(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&f.forEach(function(g){g.addEventListener("scroll",t.update,xn)}),l&&h.addEventListener("resize",t.update,xn),function(){a&&f.forEach(function(g){g.removeEventListener("scroll",t.update,xn)}),l&&h.removeEventListener("resize",t.update,xn)}}const Qi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vl,data:{}};var yl={left:"right",right:"left",bottom:"top",top:"bottom"};function Un(n){return n.replace(/left|right|bottom|top/g,function(e){return yl[e]})}var bl={start:"end",end:"start"};function os(n){return n.replace(/start|end/g,function(e){return bl[e]})}function Zi(n){var e=ne(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function er(n){return $t(We(n)).left+Zi(n).scrollLeft}function wl(n,e){var t=ne(n),r=We(n),s=t.visualViewport,a=r.clientWidth,c=r.clientHeight,l=0,h=0;if(s){a=s.width,c=s.height;var f=no();(f||!f&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:a,height:c,x:l+er(n),y:h}}function El(n){var e,t=We(n),r=Zi(n),s=(e=n.ownerDocument)==null?void 0:e.body,a=pt(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=pt(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),l=-r.scrollLeft+er(n),h=-r.scrollTop;return Pe(s||t).direction==="rtl"&&(l+=pt(t.clientWidth,s?s.clientWidth:0)-a),{width:a,height:c,x:l,y:h}}function tr(n){var e=Pe(n),t=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+r)}function co(n){return["html","body","#document"].indexOf(ve(n))>=0?n.ownerDocument.body:oe(n)&&tr(n)?n:co(Qn(n))}function en(n,e){var t;e===void 0&&(e=[]);var r=co(n),s=r===((t=n.ownerDocument)==null?void 0:t.body),a=ne(r),c=s?[a].concat(a.visualViewport||[],tr(r)?r:[]):r,l=e.concat(c);return s?l:l.concat(en(Qn(c)))}function xi(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Il(n,e){var t=$t(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function as(n,e,t){return e===zi?xi(wl(n,t)):mt(e)?Il(e,t):xi(El(We(n)))}function Tl(n){var e=en(Qn(n)),t=["absolute","fixed"].indexOf(Pe(n).position)>=0,r=t&&oe(n)?cn(n):n;return mt(r)?e.filter(function(s){return mt(s)&&io(s,r)&&ve(s)!=="body"}):[]}function Cl(n,e,t,r){var s=e==="clippingParents"?Tl(n):[].concat(e),a=[].concat(s,[t]),c=a[0],l=a.reduce(function(h,f){var g=as(n,f,r);return h.top=pt(g.top,h.top),h.right=Wn(g.right,h.right),h.bottom=Wn(g.bottom,h.bottom),h.left=pt(g.left,h.left),h},as(n,c,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function lo(n){var e=n.reference,t=n.element,r=n.placement,s=r?ge(r):null,a=r?Ut(r):null,c=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,h;switch(s){case q:h={x:c,y:e.y-t.height};break;case ee:h={x:c,y:e.y+e.height};break;case te:h={x:e.x+e.width,y:l};break;case K:h={x:e.x-t.width,y:l};break;default:h={x:e.x,y:e.y}}var f=s?Ji(s):null;if(f!=null){var g=f==="y"?"height":"width";switch(a){case gt:h[f]=h[f]-(e[g]/2-t[g]/2);break;case xt:h[f]=h[f]+(e[g]/2-t[g]/2);break}}return h}function Bt(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=r===void 0?n.placement:r,a=t.strategy,c=a===void 0?n.strategy:a,l=t.boundary,h=l===void 0?Vs:l,f=t.rootBoundary,g=f===void 0?zi:f,v=t.elementContext,_=v===void 0?Ot:v,b=t.altBoundary,A=b===void 0?!1:b,P=t.padding,k=P===void 0?0:P,L=so(typeof k!="number"?k:oo(k,jt)),D=_===Ot?zs:Ot,N=n.rects.popper,I=n.elements[A?D:_],O=Cl(mt(I)?I:I.contextElement||We(n.elements.popper),h,g,c),S=$t(n.elements.reference),M=lo({reference:S,element:N,placement:s}),U=xi(Object.assign({},N,M)),F=_===Ot?U:S,B={top:O.top-F.top+L.top,bottom:F.bottom-O.bottom+L.bottom,left:O.left-F.left+L.left,right:F.right-O.right+L.right},H=n.modifiersData.offset;if(_===Ot&&H){var z=H[s];Object.keys(B).forEach(function(j){var fe=[te,ee].indexOf(j)>=0?1:-1,ye=[q,ee].indexOf(j)>=0?"y":"x";B[j]+=z[ye]*fe})}return B}function Al(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=t.boundary,a=t.rootBoundary,c=t.padding,l=t.flipVariations,h=t.allowedAutoPlacements,f=h===void 0?qi:h,g=Ut(r),v=g?l?Di:Di.filter(function(A){return Ut(A)===g}):jt,_=v.filter(function(A){return f.indexOf(A)>=0});_.length===0&&(_=v);var b=_.reduce(function(A,P){return A[P]=Bt(n,{placement:P,boundary:s,rootBoundary:a,padding:c})[ge(P)],A},{});return Object.keys(b).sort(function(A,P){return b[A]-b[P]})}function Sl(n){if(ge(n)===Xn)return[];var e=Un(n);return[os(n),e,os(e)]}function kl(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var s=t.mainAxis,a=s===void 0?!0:s,c=t.altAxis,l=c===void 0?!0:c,h=t.fallbackPlacements,f=t.padding,g=t.boundary,v=t.rootBoundary,_=t.altBoundary,b=t.flipVariations,A=b===void 0?!0:b,P=t.allowedAutoPlacements,k=e.options.placement,L=ge(k),D=L===k,N=h||(D||!A?[Un(k)]:Sl(k)),I=[k].concat(N).reduce(function(m,ie){return m.concat(ge(ie)===Xn?Al(e,{placement:ie,boundary:g,rootBoundary:v,padding:f,flipVariations:A,allowedAutoPlacements:P}):ie)},[]),O=e.rects.reference,S=e.rects.popper,M=new Map,U=!0,F=I[0],B=0;B<I.length;B++){var H=I[B],z=ge(H),j=Ut(H)===gt,fe=[q,ee].indexOf(z)>=0,ye=fe?"width":"height",V=Bt(e,{placement:H,boundary:g,rootBoundary:v,altBoundary:_,padding:f}),Y=fe?j?te:K:j?ee:q;O[ye]>S[ye]&&(Y=Un(Y));var Ge=Un(Y),pe=[];if(a&&pe.push(V[z]<=0),l&&pe.push(V[Y]<=0,V[Ge]<=0),pe.every(function(m){return m})){F=H,U=!1;break}M.set(H,pe)}if(U)for(var Ye=A?3:1,Je=function(ie){var De=I.find(function(Ne){var W=M.get(Ne);if(W)return W.slice(0,ie).every(function(be){return be})});if(De)return F=De,"break"},Xe=Ye;Xe>0;Xe--){var Qe=Je(Xe);if(Qe==="break")break}e.placement!==F&&(e.modifiersData[r]._skip=!0,e.placement=F,e.reset=!0)}}const uo={name:"flip",enabled:!0,phase:"main",fn:kl,requiresIfExists:["offset"],data:{_skip:!1}};function cs(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function ls(n){return[q,te,ee,K].some(function(e){return n[e]>=0})}function Ol(n){var e=n.state,t=n.name,r=e.rects.reference,s=e.rects.popper,a=e.modifiersData.preventOverflow,c=Bt(e,{elementContext:"reference"}),l=Bt(e,{altBoundary:!0}),h=cs(c,r),f=cs(l,s,a),g=ls(h),v=ls(f);e.modifiersData[t]={referenceClippingOffsets:h,popperEscapeOffsets:f,isReferenceHidden:g,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":v})}const ho={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ol};function Pl(n,e,t){var r=ge(n),s=[K,q].indexOf(r)>=0?-1:1,a=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,c=a[0],l=a[1];return c=c||0,l=(l||0)*s,[K,te].indexOf(r)>=0?{x:l,y:c}:{x:c,y:l}}function Ll(n){var e=n.state,t=n.options,r=n.name,s=t.offset,a=s===void 0?[0,0]:s,c=qi.reduce(function(g,v){return g[v]=Pl(v,e.rects,a),g},{}),l=c[e.placement],h=l.x,f=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=h,e.modifiersData.popperOffsets.y+=f),e.modifiersData[r]=c}const fo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ll};function Rl(n){var e=n.state,t=n.name;e.modifiersData[t]=lo({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const nr={name:"popperOffsets",enabled:!0,phase:"read",fn:Rl,data:{}};function Dl(n){return n==="x"?"y":"x"}function Nl(n){var e=n.state,t=n.options,r=n.name,s=t.mainAxis,a=s===void 0?!0:s,c=t.altAxis,l=c===void 0?!1:c,h=t.boundary,f=t.rootBoundary,g=t.altBoundary,v=t.padding,_=t.tether,b=_===void 0?!0:_,A=t.tetherOffset,P=A===void 0?0:A,k=Bt(e,{boundary:h,rootBoundary:f,padding:v,altBoundary:g}),L=ge(e.placement),D=Ut(e.placement),N=!D,I=Ji(L),O=Dl(I),S=e.modifiersData.popperOffsets,M=e.rects.reference,U=e.rects.popper,F=typeof P=="function"?P(Object.assign({},e.rects,{placement:e.placement})):P,B=typeof F=="number"?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,z={x:0,y:0};if(S){if(a){var j,fe=I==="y"?q:K,ye=I==="y"?ee:te,V=I==="y"?"height":"width",Y=S[I],Ge=Y+k[fe],pe=Y-k[ye],Ye=b?-U[V]/2:0,Je=D===gt?M[V]:U[V],Xe=D===gt?-U[V]:-M[V],Qe=e.elements.arrow,m=b&&Qe?Yi(Qe):{width:0,height:0},ie=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ro(),De=ie[fe],Ne=ie[ye],W=Zt(0,M[V],m[V]),be=N?M[V]/2-Ye-W-De-B.mainAxis:Je-W-De-B.mainAxis,Q=N?-M[V]/2+Ye+W+Ne+B.mainAxis:Xe+W+Ne+B.mainAxis,Ze=e.elements.arrow&&cn(e.elements.arrow),E=Ze?I==="y"?Ze.clientTop||0:Ze.clientLeft||0:0,et=(j=H==null?void 0:H[I])!=null?j:0,mn=Y+be-et-E,ai=Y+Q-et,_n=Zt(b?Wn(Ge,mn):Ge,Y,b?pt(pe,ai):pe);S[I]=_n,z[I]=_n-Y}if(l){var xe,vn=I==="x"?q:K,tt=I==="x"?ee:te,J=S[O],wt=O==="y"?"height":"width",yn=J+k[vn],bn=J-k[tt],Vt=[q,K].indexOf(L)!==-1,wn=(xe=H==null?void 0:H[O])!=null?xe:0,En=Vt?yn:J-M[wt]-U[wt]-wn+B.altAxis,In=Vt?J+M[wt]+U[wt]-wn-B.altAxis:bn,nt=b&&Vt?dl(En,J,In):Zt(b?En:yn,J,b?In:bn);S[O]=nt,z[O]=nt-J}e.modifiersData[r]=z}}const po={name:"preventOverflow",enabled:!0,phase:"main",fn:Nl,requiresIfExists:["offset"]};function xl(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Ml(n){return n===ne(n)||!oe(n)?Zi(n):xl(n)}function $l(n){var e=n.getBoundingClientRect(),t=Mt(e.width)/n.offsetWidth||1,r=Mt(e.height)/n.offsetHeight||1;return t!==1||r!==1}function Ul(n,e,t){t===void 0&&(t=!1);var r=oe(e),s=oe(e)&&$l(e),a=We(e),c=$t(n,s,t),l={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(r||!r&&!t)&&((ve(e)!=="body"||tr(a))&&(l=Ml(e)),oe(e)?(h=$t(e,!0),h.x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=er(a))),{x:c.left+l.scrollLeft-h.x,y:c.top+l.scrollTop-h.y,width:c.width,height:c.height}}function Bl(n){var e=new Map,t=new Set,r=[];n.forEach(function(a){e.set(a.name,a)});function s(a){t.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(l){if(!t.has(l)){var h=e.get(l);h&&s(h)}}),r.push(a)}return n.forEach(function(a){t.has(a.name)||s(a)}),r}function Fl(n){var e=Bl(n);return to.reduce(function(t,r){return t.concat(e.filter(function(s){return s.phase===r}))},[])}function Hl(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function jl(n){var e=n.reduce(function(t,r){var s=t[r.name];return t[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var us={placement:"bottom",modifiers:[],strategy:"absolute"};function ds(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Zn(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,s=e.defaultOptions,a=s===void 0?us:s;return function(l,h,f){f===void 0&&(f=a);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},us,a),modifiersData:{},elements:{reference:l,popper:h},attributes:{},styles:{}},v=[],_=!1,b={state:g,setOptions:function(L){var D=typeof L=="function"?L(g.options):L;P(),g.options=Object.assign({},a,g.options,D),g.scrollParents={reference:mt(l)?en(l):l.contextElement?en(l.contextElement):[],popper:en(h)};var N=Fl(jl([].concat(r,g.options.modifiers)));return g.orderedModifiers=N.filter(function(I){return I.enabled}),A(),b.update()},forceUpdate:function(){if(!_){var L=g.elements,D=L.reference,N=L.popper;if(ds(D,N)){g.rects={reference:Ul(D,cn(N),g.options.strategy==="fixed"),popper:Yi(N)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(B){return g.modifiersData[B.name]=Object.assign({},B.data)});for(var I=0;I<g.orderedModifiers.length;I++){if(g.reset===!0){g.reset=!1,I=-1;continue}var O=g.orderedModifiers[I],S=O.fn,M=O.options,U=M===void 0?{}:M,F=O.name;typeof S=="function"&&(g=S({state:g,options:U,name:F,instance:b})||g)}}}},update:Hl(function(){return new Promise(function(k){b.forceUpdate(),k(g)})}),destroy:function(){P(),_=!0}};if(!ds(l,h))return b;b.setOptions(f).then(function(k){!_&&f.onFirstUpdate&&f.onFirstUpdate(k)});function A(){g.orderedModifiers.forEach(function(k){var L=k.name,D=k.options,N=D===void 0?{}:D,I=k.effect;if(typeof I=="function"){var O=I({state:g,name:L,instance:b,options:N}),S=function(){};v.push(O||S)}})}function P(){v.forEach(function(k){return k()}),v=[]}return b}}var Wl=Zn(),Vl=[Qi,nr,Xi,Gi],zl=Zn({defaultModifiers:Vl}),ql=[Qi,nr,Xi,Gi,fo,uo,po,ao,ho],Kl=Zn({defaultModifiers:ql});const Gl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Xs,afterRead:Gs,afterWrite:eo,applyStyles:Gi,arrow:ao,auto:Xn,basePlacements:jt,beforeMain:Ys,beforeRead:qs,beforeWrite:Qs,bottom:ee,clippingParents:Vs,computeStyles:Xi,createPopper:Kl,createPopperBase:Wl,createPopperLite:zl,detectOverflow:Bt,end:xt,eventListeners:Qi,flip:uo,hide:ho,left:K,main:Js,modifierPhases:to,offset:fo,placements:qi,popper:Ot,popperGenerator:Zn,popperOffsets:nr,preventOverflow:po,read:Ks,reference:zs,right:te,start:gt,top:q,variationPlacements:Di,viewport:zi,write:Zs},Symbol.toStringTag,{value:"Module"})),Yl=ol(Gl);/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Jl=$n.exports,hs;function Xl(){return hs||(hs=1,function(n,e){(function(t,r){n.exports=r(Yl)})(Jl,function(t){function r(u){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const o in u)if(o!=="default"){const d=Object.getOwnPropertyDescriptor(u,o);Object.defineProperty(i,o,d.get?d:{enumerable:!0,get:()=>u[o]})}}return i.default=u,Object.freeze(i)}const s=r(t),a=new Map,c={set(u,i,o){a.has(u)||a.set(u,new Map);const d=a.get(u);d.has(i)||d.size===0?d.set(i,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)},get:(u,i)=>a.has(u)&&a.get(u).get(i)||null,remove(u,i){if(!a.has(u))return;const o=a.get(u);o.delete(i),o.size===0&&a.delete(u)}},l="transitionend",h=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(i,o)=>`#${CSS.escape(o)}`)),u),f=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),g=u=>{u.dispatchEvent(new Event(l))},v=u=>!(!u||typeof u!="object")&&(u.jquery!==void 0&&(u=u[0]),u.nodeType!==void 0),_=u=>v(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(h(u)):null,b=u=>{if(!v(u)||u.getClientRects().length===0)return!1;const i=getComputedStyle(u).getPropertyValue("visibility")==="visible",o=u.closest("details:not([open])");if(!o)return i;if(o!==u){const d=u.closest("summary");if(d&&d.parentNode!==o||d===null)return!1}return i},A=u=>!u||u.nodeType!==Node.ELEMENT_NODE||!!u.classList.contains("disabled")||(u.disabled!==void 0?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false"),P=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const i=u.getRootNode();return i instanceof ShadowRoot?i:null}return u instanceof ShadowRoot?u:u.parentNode?P(u.parentNode):null},k=()=>{},L=u=>{u.offsetHeight},D=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,N=[],I=()=>document.documentElement.dir==="rtl",O=u=>{var i;i=()=>{const o=D();if(o){const d=u.NAME,p=o.fn[d];o.fn[d]=u.jQueryInterface,o.fn[d].Constructor=u,o.fn[d].noConflict=()=>(o.fn[d]=p,u.jQueryInterface)}},document.readyState==="loading"?(N.length||document.addEventListener("DOMContentLoaded",()=>{for(const o of N)o()}),N.push(i)):i()},S=(u,i=[],o=u)=>typeof u=="function"?u.call(...i):o,M=(u,i,o=!0)=>{if(!o)return void S(u);const d=(w=>{if(!w)return 0;let{transitionDuration:R,transitionDelay:$}=window.getComputedStyle(w);const X=Number.parseFloat(R),Z=Number.parseFloat($);return X||Z?(R=R.split(",")[0],$=$.split(",")[0],1e3*(Number.parseFloat(R)+Number.parseFloat($))):0})(i)+5;let p=!1;const y=({target:w})=>{w===i&&(p=!0,i.removeEventListener(l,y),S(u))};i.addEventListener(l,y),setTimeout(()=>{p||g(i)},d)},U=(u,i,o,d)=>{const p=u.length;let y=u.indexOf(i);return y===-1?!o&&d?u[p-1]:u[0]:(y+=o?1:-1,d&&(y=(y+p)%p),u[Math.max(0,Math.min(y,p-1))])},F=/[^.]*(?=\..*)\.|.*/,B=/\..*/,H=/::\d+$/,z={};let j=1;const fe={mouseenter:"mouseover",mouseleave:"mouseout"},ye=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function V(u,i){return i&&`${i}::${j++}`||u.uidEvent||j++}function Y(u){const i=V(u);return u.uidEvent=i,z[i]=z[i]||{},z[i]}function Ge(u,i,o=null){return Object.values(u).find(d=>d.callable===i&&d.delegationSelector===o)}function pe(u,i,o){const d=typeof i=="string",p=d?o:i||o;let y=Qe(u);return ye.has(y)||(y=u),[d,p,y]}function Ye(u,i,o,d,p){if(typeof i!="string"||!u)return;let[y,w,R]=pe(i,o,d);i in fe&&(w=(ut=>function(ue){if(!ue.relatedTarget||ue.relatedTarget!==ue.delegateTarget&&!ue.delegateTarget.contains(ue.relatedTarget))return ut.call(this,ue)})(w));const $=Y(u),X=$[R]||($[R]={}),Z=Ge(X,w,y?o:null);if(Z)return void(Z.oneOff=Z.oneOff&&p);const le=V(w,i.replace(F,"")),Ie=y?function(Te,ut,ue){return function Jt(Nn){const rl=Te.querySelectorAll(ut);for(let{target:dt}=Nn;dt&&dt!==this;dt=dt.parentNode)for(const sl of rl)if(sl===dt)return ie(Nn,{delegateTarget:dt}),Jt.oneOff&&m.off(Te,Nn.type,ut,ue),ue.apply(dt,[Nn])}}(u,o,w):function(Te,ut){return function ue(Jt){return ie(Jt,{delegateTarget:Te}),ue.oneOff&&m.off(Te,Jt.type,ut),ut.apply(Te,[Jt])}}(u,w);Ie.delegationSelector=y?o:null,Ie.callable=w,Ie.oneOff=p,Ie.uidEvent=le,X[le]=Ie,u.addEventListener(R,Ie,y)}function Je(u,i,o,d,p){const y=Ge(i[o],d,p);y&&(u.removeEventListener(o,y,!!p),delete i[o][y.uidEvent])}function Xe(u,i,o,d){const p=i[o]||{};for(const[y,w]of Object.entries(p))y.includes(d)&&Je(u,i,o,w.callable,w.delegationSelector)}function Qe(u){return u=u.replace(B,""),fe[u]||u}const m={on(u,i,o,d){Ye(u,i,o,d,!1)},one(u,i,o,d){Ye(u,i,o,d,!0)},off(u,i,o,d){if(typeof i!="string"||!u)return;const[p,y,w]=pe(i,o,d),R=w!==i,$=Y(u),X=$[w]||{},Z=i.startsWith(".");if(y===void 0){if(Z)for(const le of Object.keys($))Xe(u,$,le,i.slice(1));for(const[le,Ie]of Object.entries(X)){const Te=le.replace(H,"");R&&!i.includes(Te)||Je(u,$,w,Ie.callable,Ie.delegationSelector)}}else{if(!Object.keys(X).length)return;Je(u,$,w,y,p?o:null)}},trigger(u,i,o){if(typeof i!="string"||!u)return null;const d=D();let p=null,y=!0,w=!0,R=!1;i!==Qe(i)&&d&&(p=d.Event(i,o),d(u).trigger(p),y=!p.isPropagationStopped(),w=!p.isImmediatePropagationStopped(),R=p.isDefaultPrevented());const $=ie(new Event(i,{bubbles:y,cancelable:!0}),o);return R&&$.preventDefault(),w&&u.dispatchEvent($),$.defaultPrevented&&p&&p.preventDefault(),$}};function ie(u,i={}){for(const[o,d]of Object.entries(i))try{u[o]=d}catch{Object.defineProperty(u,o,{configurable:!0,get:()=>d})}return u}function De(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function Ne(u){return u.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}const W={setDataAttribute(u,i,o){u.setAttribute(`data-bs-${Ne(i)}`,o)},removeDataAttribute(u,i){u.removeAttribute(`data-bs-${Ne(i)}`)},getDataAttributes(u){if(!u)return{};const i={},o=Object.keys(u.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of o){let p=d.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1),i[p]=De(u.dataset[d])}return i},getDataAttribute:(u,i)=>De(u.getAttribute(`data-bs-${Ne(i)}`))};class be{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(i){return i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i}_mergeConfigObj(i,o){const d=v(o)?W.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof d=="object"?d:{},...v(o)?W.getDataAttributes(o):{},...typeof i=="object"?i:{}}}_typeCheckConfig(i,o=this.constructor.DefaultType){for(const[d,p]of Object.entries(o)){const y=i[d],w=v(y)?"element":f(y);if(!new RegExp(p).test(w))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${d}" provided type "${w}" but expected type "${p}".`)}}}class Q extends be{constructor(i,o){super(),(i=_(i))&&(this._element=i,this._config=this._getConfig(o),c.set(this._element,this.constructor.DATA_KEY,this))}dispose(){c.remove(this._element,this.constructor.DATA_KEY),m.off(this._element,this.constructor.EVENT_KEY);for(const i of Object.getOwnPropertyNames(this))this[i]=null}_queueCallback(i,o,d=!0){M(i,o,d)}_getConfig(i){return i=this._mergeConfigObj(i,this._element),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}static getInstance(i){return c.get(_(i),this.DATA_KEY)}static getOrCreateInstance(i,o={}){return this.getInstance(i)||new this(i,typeof o=="object"?o:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(i){return`${i}${this.EVENT_KEY}`}}const Ze=u=>{let i=u.getAttribute("data-bs-target");if(!i||i==="#"){let o=u.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),i=o&&o!=="#"?o.trim():null}return i?i.split(",").map(o=>h(o)).join(","):null},E={find:(u,i=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(i,u)),findOne:(u,i=document.documentElement)=>Element.prototype.querySelector.call(i,u),children:(u,i)=>[].concat(...u.children).filter(o=>o.matches(i)),parents(u,i){const o=[];let d=u.parentNode.closest(i);for(;d;)o.push(d),d=d.parentNode.closest(i);return o},prev(u,i){let o=u.previousElementSibling;for(;o;){if(o.matches(i))return[o];o=o.previousElementSibling}return[]},next(u,i){let o=u.nextElementSibling;for(;o;){if(o.matches(i))return[o];o=o.nextElementSibling}return[]},focusableChildren(u){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(i,u).filter(o=>!A(o)&&b(o))},getSelectorFromElement(u){const i=Ze(u);return i&&E.findOne(i)?i:null},getElementFromSelector(u){const i=Ze(u);return i?E.findOne(i):null},getMultipleElementsFromSelector(u){const i=Ze(u);return i?E.find(i):[]}},et=(u,i="hide")=>{const o=`click.dismiss${u.EVENT_KEY}`,d=u.NAME;m.on(document,o,`[data-bs-dismiss="${d}"]`,function(p){if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),A(this))return;const y=E.getElementFromSelector(this)||this.closest(`.${d}`);u.getOrCreateInstance(y)[i]()})},mn=".bs.alert",ai=`close${mn}`,_n=`closed${mn}`;class xe extends Q{static get NAME(){return"alert"}close(){if(m.trigger(this._element,ai).defaultPrevented)return;this._element.classList.remove("show");const i=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,i)}_destroyElement(){this._element.remove(),m.trigger(this._element,_n),this.dispose()}static jQueryInterface(i){return this.each(function(){const o=xe.getOrCreateInstance(this);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i](this)}})}}et(xe,"close"),O(xe);const vn='[data-bs-toggle="button"]';class tt extends Q{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(i){return this.each(function(){const o=tt.getOrCreateInstance(this);i==="toggle"&&o[i]()})}}m.on(document,"click.bs.button.data-api",vn,u=>{u.preventDefault();const i=u.target.closest(vn);tt.getOrCreateInstance(i).toggle()}),O(tt);const J=".bs.swipe",wt=`touchstart${J}`,yn=`touchmove${J}`,bn=`touchend${J}`,Vt=`pointerdown${J}`,wn=`pointerup${J}`,En={endCallback:null,leftCallback:null,rightCallback:null},In={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class nt extends be{constructor(i,o){super(),this._element=i,i&&nt.isSupported()&&(this._config=this._getConfig(o),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return En}static get DefaultType(){return In}static get NAME(){return"swipe"}dispose(){m.off(this._element,J)}_start(i){this._supportPointerEvents?this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX):this._deltaX=i.touches[0].clientX}_end(i){this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX-this._deltaX),this._handleSwipe(),S(this._config.endCallback)}_move(i){this._deltaX=i.touches&&i.touches.length>1?0:i.touches[0].clientX-this._deltaX}_handleSwipe(){const i=Math.abs(this._deltaX);if(i<=40)return;const o=i/this._deltaX;this._deltaX=0,o&&S(o>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(m.on(this._element,Vt,i=>this._start(i)),m.on(this._element,wn,i=>this._end(i)),this._element.classList.add("pointer-event")):(m.on(this._element,wt,i=>this._start(i)),m.on(this._element,yn,i=>this._move(i)),m.on(this._element,bn,i=>this._end(i)))}_eventIsPointerPenTouch(i){return this._supportPointerEvents&&(i.pointerType==="pen"||i.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Me=".bs.carousel",vr=".data-api",ua="ArrowLeft",da="ArrowRight",zt="next",Et="prev",It="left",Tn="right",ha=`slide${Me}`,ci=`slid${Me}`,fa=`keydown${Me}`,pa=`mouseenter${Me}`,ga=`mouseleave${Me}`,ma=`dragstart${Me}`,_a=`load${Me}${vr}`,va=`click${Me}${vr}`,yr="carousel",Cn="active",br=".active",wr=".carousel-item",ya=br+wr,ba={[ua]:Tn,[da]:It},wa={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ea={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Tt extends Q{constructor(i,o){super(i,o),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=E.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===yr&&this.cycle()}static get Default(){return wa}static get DefaultType(){return Ea}static get NAME(){return"carousel"}next(){this._slide(zt)}nextWhenVisible(){!document.hidden&&b(this._element)&&this.next()}prev(){this._slide(Et)}pause(){this._isSliding&&g(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?m.one(this._element,ci,()=>this.cycle()):this.cycle())}to(i){const o=this._getItems();if(i>o.length-1||i<0)return;if(this._isSliding)return void m.one(this._element,ci,()=>this.to(i));const d=this._getItemIndex(this._getActive());if(d===i)return;const p=i>d?zt:Et;this._slide(p,o[i])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(i){return i.defaultInterval=i.interval,i}_addEventListeners(){this._config.keyboard&&m.on(this._element,fa,i=>this._keydown(i)),this._config.pause==="hover"&&(m.on(this._element,pa,()=>this.pause()),m.on(this._element,ga,()=>this._maybeEnableCycle())),this._config.touch&&nt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of E.find(".carousel-item img",this._element))m.on(o,ma,d=>d.preventDefault());const i={leftCallback:()=>this._slide(this._directionToOrder(It)),rightCallback:()=>this._slide(this._directionToOrder(Tn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new nt(this._element,i)}_keydown(i){if(/input|textarea/i.test(i.target.tagName))return;const o=ba[i.key];o&&(i.preventDefault(),this._slide(this._directionToOrder(o)))}_getItemIndex(i){return this._getItems().indexOf(i)}_setActiveIndicatorElement(i){if(!this._indicatorsElement)return;const o=E.findOne(br,this._indicatorsElement);o.classList.remove(Cn),o.removeAttribute("aria-current");const d=E.findOne(`[data-bs-slide-to="${i}"]`,this._indicatorsElement);d&&(d.classList.add(Cn),d.setAttribute("aria-current","true"))}_updateInterval(){const i=this._activeElement||this._getActive();if(!i)return;const o=Number.parseInt(i.getAttribute("data-bs-interval"),10);this._config.interval=o||this._config.defaultInterval}_slide(i,o=null){if(this._isSliding)return;const d=this._getActive(),p=i===zt,y=o||U(this._getItems(),d,p,this._config.wrap);if(y===d)return;const w=this._getItemIndex(y),R=le=>m.trigger(this._element,le,{relatedTarget:y,direction:this._orderToDirection(i),from:this._getItemIndex(d),to:w});if(R(ha).defaultPrevented||!d||!y)return;const $=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(w),this._activeElement=y;const X=p?"carousel-item-start":"carousel-item-end",Z=p?"carousel-item-next":"carousel-item-prev";y.classList.add(Z),L(y),d.classList.add(X),y.classList.add(X),this._queueCallback(()=>{y.classList.remove(X,Z),y.classList.add(Cn),d.classList.remove(Cn,Z,X),this._isSliding=!1,R(ci)},d,this._isAnimated()),$&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return E.findOne(ya,this._element)}_getItems(){return E.find(wr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(i){return I()?i===It?Et:zt:i===It?zt:Et}_orderToDirection(i){return I()?i===Et?It:Tn:i===Et?Tn:It}static jQueryInterface(i){return this.each(function(){const o=Tt.getOrCreateInstance(this,i);if(typeof i!="number"){if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}}else o.to(i)})}}m.on(document,va,"[data-bs-slide], [data-bs-slide-to]",function(u){const i=E.getElementFromSelector(this);if(!i||!i.classList.contains(yr))return;u.preventDefault();const o=Tt.getOrCreateInstance(i),d=this.getAttribute("data-bs-slide-to");return d?(o.to(d),void o._maybeEnableCycle()):W.getDataAttribute(this,"slide")==="next"?(o.next(),void o._maybeEnableCycle()):(o.prev(),void o._maybeEnableCycle())}),m.on(window,_a,()=>{const u=E.find('[data-bs-ride="carousel"]');for(const i of u)Tt.getOrCreateInstance(i)}),O(Tt);const qt=".bs.collapse",Ia=`show${qt}`,Ta=`shown${qt}`,Ca=`hide${qt}`,Aa=`hidden${qt}`,Sa=`click${qt}.data-api`,li="show",Ct="collapse",An="collapsing",ka=`:scope .${Ct} .${Ct}`,ui='[data-bs-toggle="collapse"]',Oa={parent:null,toggle:!0},Pa={parent:"(null|element)",toggle:"boolean"};class At extends Q{constructor(i,o){super(i,o),this._isTransitioning=!1,this._triggerArray=[];const d=E.find(ui);for(const p of d){const y=E.getSelectorFromElement(p),w=E.find(y).filter(R=>R===this._element);y!==null&&w.length&&this._triggerArray.push(p)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Oa}static get DefaultType(){return Pa}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let i=[];if(this._config.parent&&(i=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(p=>p!==this._element).map(p=>At.getOrCreateInstance(p,{toggle:!1}))),i.length&&i[0]._isTransitioning||m.trigger(this._element,Ia).defaultPrevented)return;for(const p of i)p.hide();const o=this._getDimension();this._element.classList.remove(Ct),this._element.classList.add(An),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const d=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(An),this._element.classList.add(Ct,li),this._element.style[o]="",m.trigger(this._element,Ta)},this._element,!0),this._element.style[o]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||m.trigger(this._element,Ca).defaultPrevented)return;const i=this._getDimension();this._element.style[i]=`${this._element.getBoundingClientRect()[i]}px`,L(this._element),this._element.classList.add(An),this._element.classList.remove(Ct,li);for(const o of this._triggerArray){const d=E.getElementFromSelector(o);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([o],!1)}this._isTransitioning=!0,this._element.style[i]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(An),this._element.classList.add(Ct),m.trigger(this._element,Aa)},this._element,!0)}_isShown(i=this._element){return i.classList.contains(li)}_configAfterMerge(i){return i.toggle=!!i.toggle,i.parent=_(i.parent),i}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const i=this._getFirstLevelChildren(ui);for(const o of i){const d=E.getElementFromSelector(o);d&&this._addAriaAndCollapsedClass([o],this._isShown(d))}}_getFirstLevelChildren(i){const o=E.find(ka,this._config.parent);return E.find(i,this._config.parent).filter(d=>!o.includes(d))}_addAriaAndCollapsedClass(i,o){if(i.length)for(const d of i)d.classList.toggle("collapsed",!o),d.setAttribute("aria-expanded",o)}static jQueryInterface(i){const o={};return typeof i=="string"&&/show|hide/.test(i)&&(o.toggle=!1),this.each(function(){const d=At.getOrCreateInstance(this,o);if(typeof i=="string"){if(d[i]===void 0)throw new TypeError(`No method named "${i}"`);d[i]()}})}}m.on(document,Sa,ui,function(u){(u.target.tagName==="A"||u.delegateTarget&&u.delegateTarget.tagName==="A")&&u.preventDefault();for(const i of E.getMultipleElementsFromSelector(this))At.getOrCreateInstance(i,{toggle:!1}).toggle()}),O(At);const Er="dropdown",it=".bs.dropdown",di=".data-api",La="ArrowUp",Ir="ArrowDown",Ra=`hide${it}`,Da=`hidden${it}`,Na=`show${it}`,xa=`shown${it}`,Tr=`click${it}${di}`,Cr=`keydown${it}${di}`,Ma=`keyup${it}${di}`,St="show",rt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',$a=`${rt}.${St}`,Sn=".dropdown-menu",Ua=I()?"top-end":"top-start",Ba=I()?"top-start":"top-end",Fa=I()?"bottom-end":"bottom-start",Ha=I()?"bottom-start":"bottom-end",ja=I()?"left-start":"right-start",Wa=I()?"right-start":"left-start",Va={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},za={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ce extends Q{constructor(i,o){super(i,o),this._popper=null,this._parent=this._element.parentNode,this._menu=E.next(this._element,Sn)[0]||E.prev(this._element,Sn)[0]||E.findOne(Sn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Va}static get DefaultType(){return za}static get NAME(){return Er}toggle(){return this._isShown()?this.hide():this.show()}show(){if(A(this._element)||this._isShown())return;const i={relatedTarget:this._element};if(!m.trigger(this._element,Na,i).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const o of[].concat(...document.body.children))m.on(o,"mouseover",k);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(St),this._element.classList.add(St),m.trigger(this._element,xa,i)}}hide(){if(A(this._element)||!this._isShown())return;const i={relatedTarget:this._element};this._completeHide(i)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(i){if(!m.trigger(this._element,Ra,i).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))m.off(o,"mouseover",k);this._popper&&this._popper.destroy(),this._menu.classList.remove(St),this._element.classList.remove(St),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),m.trigger(this._element,Da,i)}}_getConfig(i){if(typeof(i=super._getConfig(i)).reference=="object"&&!v(i.reference)&&typeof i.reference.getBoundingClientRect!="function")throw new TypeError(`${Er.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return i}_createPopper(){if(s===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let i=this._element;this._config.reference==="parent"?i=this._parent:v(this._config.reference)?i=_(this._config.reference):typeof this._config.reference=="object"&&(i=this._config.reference);const o=this._getPopperConfig();this._popper=s.createPopper(i,this._menu,o)}_isShown(){return this._menu.classList.contains(St)}_getPlacement(){const i=this._parent;if(i.classList.contains("dropend"))return ja;if(i.classList.contains("dropstart"))return Wa;if(i.classList.contains("dropup-center"))return"top";if(i.classList.contains("dropdown-center"))return"bottom";const o=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return i.classList.contains("dropup")?o?Ba:Ua:o?Ha:Fa}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(o=>Number.parseInt(o,10)):typeof i=="function"?o=>i(o,this._element):i}_getPopperConfig(){const i={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(W.setDataAttribute(this._menu,"popper","static"),i.modifiers=[{name:"applyStyles",enabled:!1}]),{...i,...S(this._config.popperConfig,[void 0,i])}}_selectMenuItem({key:i,target:o}){const d=E.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(p=>b(p));d.length&&U(d,o,i===Ir,!d.includes(o)).focus()}static jQueryInterface(i){return this.each(function(){const o=ce.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}static clearMenus(i){if(i.button===2||i.type==="keyup"&&i.key!=="Tab")return;const o=E.find($a);for(const d of o){const p=ce.getInstance(d);if(!p||p._config.autoClose===!1)continue;const y=i.composedPath(),w=y.includes(p._menu);if(y.includes(p._element)||p._config.autoClose==="inside"&&!w||p._config.autoClose==="outside"&&w||p._menu.contains(i.target)&&(i.type==="keyup"&&i.key==="Tab"||/input|select|option|textarea|form/i.test(i.target.tagName)))continue;const R={relatedTarget:p._element};i.type==="click"&&(R.clickEvent=i),p._completeHide(R)}}static dataApiKeydownHandler(i){const o=/input|textarea/i.test(i.target.tagName),d=i.key==="Escape",p=[La,Ir].includes(i.key);if(!p&&!d||o&&!d)return;i.preventDefault();const y=this.matches(rt)?this:E.prev(this,rt)[0]||E.next(this,rt)[0]||E.findOne(rt,i.delegateTarget.parentNode),w=ce.getOrCreateInstance(y);if(p)return i.stopPropagation(),w.show(),void w._selectMenuItem(i);w._isShown()&&(i.stopPropagation(),w.hide(),y.focus())}}m.on(document,Cr,rt,ce.dataApiKeydownHandler),m.on(document,Cr,Sn,ce.dataApiKeydownHandler),m.on(document,Tr,ce.clearMenus),m.on(document,Ma,ce.clearMenus),m.on(document,Tr,rt,function(u){u.preventDefault(),ce.getOrCreateInstance(this).toggle()}),O(ce);const Ar="backdrop",Sr="show",kr=`mousedown.bs.${Ar}`,qa={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ka={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Or extends be{constructor(i){super(),this._config=this._getConfig(i),this._isAppended=!1,this._element=null}static get Default(){return qa}static get DefaultType(){return Ka}static get NAME(){return Ar}show(i){if(!this._config.isVisible)return void S(i);this._append();const o=this._getElement();this._config.isAnimated&&L(o),o.classList.add(Sr),this._emulateAnimation(()=>{S(i)})}hide(i){this._config.isVisible?(this._getElement().classList.remove(Sr),this._emulateAnimation(()=>{this.dispose(),S(i)})):S(i)}dispose(){this._isAppended&&(m.off(this._element,kr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const i=document.createElement("div");i.className=this._config.className,this._config.isAnimated&&i.classList.add("fade"),this._element=i}return this._element}_configAfterMerge(i){return i.rootElement=_(i.rootElement),i}_append(){if(this._isAppended)return;const i=this._getElement();this._config.rootElement.append(i),m.on(i,kr,()=>{S(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(i){M(i,this._getElement(),this._config.isAnimated)}}const kn=".bs.focustrap",Ga=`focusin${kn}`,Ya=`keydown.tab${kn}`,Pr="backward",Ja={autofocus:!0,trapElement:null},Xa={autofocus:"boolean",trapElement:"element"};class Lr extends be{constructor(i){super(),this._config=this._getConfig(i),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ja}static get DefaultType(){return Xa}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),m.off(document,kn),m.on(document,Ga,i=>this._handleFocusin(i)),m.on(document,Ya,i=>this._handleKeydown(i)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,m.off(document,kn))}_handleFocusin(i){const{trapElement:o}=this._config;if(i.target===document||i.target===o||o.contains(i.target))return;const d=E.focusableChildren(o);d.length===0?o.focus():this._lastTabNavDirection===Pr?d[d.length-1].focus():d[0].focus()}_handleKeydown(i){i.key==="Tab"&&(this._lastTabNavDirection=i.shiftKey?Pr:"forward")}}const Rr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Dr=".sticky-top",On="padding-right",Nr="margin-right";class hi{constructor(){this._element=document.body}getWidth(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}hide(){const i=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,On,o=>o+i),this._setElementAttributes(Rr,On,o=>o+i),this._setElementAttributes(Dr,Nr,o=>o-i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,On),this._resetElementAttributes(Rr,On),this._resetElementAttributes(Dr,Nr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(i,o,d){const p=this.getWidth();this._applyManipulationCallback(i,y=>{if(y!==this._element&&window.innerWidth>y.clientWidth+p)return;this._saveInitialAttribute(y,o);const w=window.getComputedStyle(y).getPropertyValue(o);y.style.setProperty(o,`${d(Number.parseFloat(w))}px`)})}_saveInitialAttribute(i,o){const d=i.style.getPropertyValue(o);d&&W.setDataAttribute(i,o,d)}_resetElementAttributes(i,o){this._applyManipulationCallback(i,d=>{const p=W.getDataAttribute(d,o);p!==null?(W.removeDataAttribute(d,o),d.style.setProperty(o,p)):d.style.removeProperty(o)})}_applyManipulationCallback(i,o){if(v(i))o(i);else for(const d of E.find(i,this._element))o(d)}}const re=".bs.modal",Qa=`hide${re}`,Za=`hidePrevented${re}`,xr=`hidden${re}`,Mr=`show${re}`,ec=`shown${re}`,tc=`resize${re}`,nc=`click.dismiss${re}`,ic=`mousedown.dismiss${re}`,rc=`keydown.dismiss${re}`,sc=`click${re}.data-api`,$r="modal-open",Ur="show",fi="modal-static",oc={backdrop:!0,focus:!0,keyboard:!0},ac={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class st extends Q{constructor(i,o){super(i,o),this._dialog=E.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hi,this._addEventListeners()}static get Default(){return oc}static get DefaultType(){return ac}static get NAME(){return"modal"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||this._isTransitioning||m.trigger(this._element,Mr,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add($r),this._adjustDialog(),this._backdrop.show(()=>this._showElement(i)))}hide(){this._isShown&&!this._isTransitioning&&(m.trigger(this._element,Qa).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ur),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){m.off(window,re),m.off(this._dialog,re),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Or({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lr({trapElement:this._element})}_showElement(i){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const o=E.findOne(".modal-body",this._dialog);o&&(o.scrollTop=0),L(this._element),this._element.classList.add(Ur),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,m.trigger(this._element,ec,{relatedTarget:i})},this._dialog,this._isAnimated())}_addEventListeners(){m.on(this._element,rc,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),m.on(window,tc,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),m.on(this._element,ic,i=>{m.one(this._element,nc,o=>{this._element===i.target&&this._element===o.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove($r),this._resetAdjustments(),this._scrollBar.reset(),m.trigger(this._element,xr)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(m.trigger(this._element,Za).defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(fi)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(fi),this._queueCallback(()=>{this._element.classList.remove(fi),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const i=this._element.scrollHeight>document.documentElement.clientHeight,o=this._scrollBar.getWidth(),d=o>0;if(d&&!i){const p=I()?"paddingLeft":"paddingRight";this._element.style[p]=`${o}px`}if(!d&&i){const p=I()?"paddingRight":"paddingLeft";this._element.style[p]=`${o}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(i,o){return this.each(function(){const d=st.getOrCreateInstance(this,i);if(typeof i=="string"){if(d[i]===void 0)throw new TypeError(`No method named "${i}"`);d[i](o)}})}}m.on(document,sc,'[data-bs-toggle="modal"]',function(u){const i=E.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&u.preventDefault(),m.one(i,Mr,d=>{d.defaultPrevented||m.one(i,xr,()=>{b(this)&&this.focus()})});const o=E.findOne(".modal.show");o&&st.getInstance(o).hide(),st.getOrCreateInstance(i).toggle(this)}),et(st),O(st);const we=".bs.offcanvas",Br=".data-api",cc=`load${we}${Br}`,Fr="show",Hr="showing",jr="hiding",Wr=".offcanvas.show",lc=`show${we}`,uc=`shown${we}`,dc=`hide${we}`,Vr=`hidePrevented${we}`,zr=`hidden${we}`,hc=`resize${we}`,fc=`click${we}${Br}`,pc=`keydown.dismiss${we}`,gc={backdrop:!0,keyboard:!0,scroll:!1},mc={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ee extends Q{constructor(i,o){super(i,o),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gc}static get DefaultType(){return mc}static get NAME(){return"offcanvas"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||m.trigger(this._element,lc,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new hi().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Fr),this._element.classList.remove(Hr),m.trigger(this._element,uc,{relatedTarget:i})},this._element,!0))}hide(){this._isShown&&(m.trigger(this._element,dc).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(jr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Fr,jr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hi().reset(),m.trigger(this._element,zr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const i=!!this._config.backdrop;return new Or({className:"offcanvas-backdrop",isVisible:i,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:i?()=>{this._config.backdrop!=="static"?this.hide():m.trigger(this._element,Vr)}:null})}_initializeFocusTrap(){return new Lr({trapElement:this._element})}_addEventListeners(){m.on(this._element,pc,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():m.trigger(this._element,Vr))})}static jQueryInterface(i){return this.each(function(){const o=Ee.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i](this)}})}}m.on(document,fc,'[data-bs-toggle="offcanvas"]',function(u){const i=E.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),A(this))return;m.one(i,zr,()=>{b(this)&&this.focus()});const o=E.findOne(Wr);o&&o!==i&&Ee.getInstance(o).hide(),Ee.getOrCreateInstance(i).toggle(this)}),m.on(window,cc,()=>{for(const u of E.find(Wr))Ee.getOrCreateInstance(u).show()}),m.on(window,hc,()=>{for(const u of E.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(u).position!=="fixed"&&Ee.getOrCreateInstance(u).hide()}),et(Ee),O(Ee);const qr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},_c=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),vc=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yc=(u,i)=>{const o=u.nodeName.toLowerCase();return i.includes(o)?!_c.has(o)||!!vc.test(u.nodeValue):i.filter(d=>d instanceof RegExp).some(d=>d.test(o))},bc={allowList:qr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},wc={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ec={entry:"(string|element|function|null)",selector:"(string|element)"};class Ic extends be{constructor(i){super(),this._config=this._getConfig(i)}static get Default(){return bc}static get DefaultType(){return wc}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(i=>this._resolvePossibleFunction(i)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(i){return this._checkContent(i),this._config.content={...this._config.content,...i},this}toHtml(){const i=document.createElement("div");i.innerHTML=this._maybeSanitize(this._config.template);for(const[p,y]of Object.entries(this._config.content))this._setContent(i,y,p);const o=i.children[0],d=this._resolvePossibleFunction(this._config.extraClass);return d&&o.classList.add(...d.split(" ")),o}_typeCheckConfig(i){super._typeCheckConfig(i),this._checkContent(i.content)}_checkContent(i){for(const[o,d]of Object.entries(i))super._typeCheckConfig({selector:o,entry:d},Ec)}_setContent(i,o,d){const p=E.findOne(d,i);p&&((o=this._resolvePossibleFunction(o))?v(o)?this._putElementInTemplate(_(o),p):this._config.html?p.innerHTML=this._maybeSanitize(o):p.textContent=o:p.remove())}_maybeSanitize(i){return this._config.sanitize?function(o,d,p){if(!o.length)return o;if(p&&typeof p=="function")return p(o);const y=new window.DOMParser().parseFromString(o,"text/html"),w=[].concat(...y.body.querySelectorAll("*"));for(const R of w){const $=R.nodeName.toLowerCase();if(!Object.keys(d).includes($)){R.remove();continue}const X=[].concat(...R.attributes),Z=[].concat(d["*"]||[],d[$]||[]);for(const le of X)yc(le,Z)||R.removeAttribute(le.nodeName)}return y.body.innerHTML}(i,this._config.allowList,this._config.sanitizeFn):i}_resolvePossibleFunction(i){return S(i,[void 0,this])}_putElementInTemplate(i,o){if(this._config.html)return o.innerHTML="",void o.append(i);o.textContent=i.textContent}}const Tc=new Set(["sanitize","allowList","sanitizeFn"]),pi="fade",Pn="show",Cc=".tooltip-inner",Kr=".modal",Gr="hide.bs.modal",Kt="hover",gi="focus",mi="click",Ac={AUTO:"auto",TOP:"top",RIGHT:I()?"left":"right",BOTTOM:"bottom",LEFT:I()?"right":"left"},Sc={allowList:qr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},kc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ot extends Q{constructor(i,o){if(s===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(i,o),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Sc}static get DefaultType(){return kc}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),m.off(this._element.closest(Kr),Gr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const i=m.trigger(this._element,this.constructor.eventName("show")),o=(P(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(i.defaultPrevented||!o)return;this._disposePopper();const d=this._getTipElement();this._element.setAttribute("aria-describedby",d.getAttribute("id"));const{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(d),m.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(d),d.classList.add(Pn),"ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))m.on(y,"mouseover",k);this._queueCallback(()=>{m.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!m.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Pn),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))m.off(i,"mouseover",k);this._activeTrigger[mi]=!1,this._activeTrigger[gi]=!1,this._activeTrigger[Kt]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),m.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(i){const o=this._getTemplateFactory(i).toHtml();if(!o)return null;o.classList.remove(pi,Pn),o.classList.add(`bs-${this.constructor.NAME}-auto`);const d=(p=>{do p+=Math.floor(1e6*Math.random());while(document.getElementById(p));return p})(this.constructor.NAME).toString();return o.setAttribute("id",d),this._isAnimated()&&o.classList.add(pi),o}setContent(i){this._newContent=i,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(i){return this._templateFactory?this._templateFactory.changeContent(i):this._templateFactory=new Ic({...this._config,content:i,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Cc]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(i){return this.constructor.getOrCreateInstance(i.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(pi)}_isShown(){return this.tip&&this.tip.classList.contains(Pn)}_createPopper(i){const o=S(this._config.placement,[this,i,this._element]),d=Ac[o.toUpperCase()];return s.createPopper(this._element,i,this._getPopperConfig(d))}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(o=>Number.parseInt(o,10)):typeof i=="function"?o=>i(o,this._element):i}_resolvePossibleFunction(i){return S(i,[this._element,this._element])}_getPopperConfig(i){const o={placement:i,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:d=>{this._getTipElement().setAttribute("data-popper-placement",d.state.placement)}}]};return{...o,...S(this._config.popperConfig,[void 0,o])}}_setListeners(){const i=this._config.trigger.split(" ");for(const o of i)if(o==="click")m.on(this._element,this.constructor.eventName("click"),this._config.selector,d=>{const p=this._initializeOnDelegatedTarget(d);p._activeTrigger[mi]=!(p._isShown()&&p._activeTrigger[mi]),p.toggle()});else if(o!=="manual"){const d=o===Kt?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),p=o===Kt?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");m.on(this._element,d,this._config.selector,y=>{const w=this._initializeOnDelegatedTarget(y);w._activeTrigger[y.type==="focusin"?gi:Kt]=!0,w._enter()}),m.on(this._element,p,this._config.selector,y=>{const w=this._initializeOnDelegatedTarget(y);w._activeTrigger[y.type==="focusout"?gi:Kt]=w._element.contains(y.relatedTarget),w._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},m.on(this._element.closest(Kr),Gr,this._hideModalHandler)}_fixTitle(){const i=this._element.getAttribute("title");i&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",i),this._element.setAttribute("data-bs-original-title",i),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(i,o){clearTimeout(this._timeout),this._timeout=setTimeout(i,o)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(i){const o=W.getDataAttributes(this._element);for(const d of Object.keys(o))Tc.has(d)&&delete o[d];return i={...o,...typeof i=="object"&&i?i:{}},i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i.container=i.container===!1?document.body:_(i.container),typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),typeof i.title=="number"&&(i.title=i.title.toString()),typeof i.content=="number"&&(i.content=i.content.toString()),i}_getDelegateConfig(){const i={};for(const[o,d]of Object.entries(this._config))this.constructor.Default[o]!==d&&(i[o]=d);return i.selector=!1,i.trigger="manual",i}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(i){return this.each(function(){const o=ot.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}}O(ot);const Oc=".popover-header",Pc=".popover-body",Lc={...ot.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Rc={...ot.DefaultType,content:"(null|string|element|function)"};class Ln extends ot{static get Default(){return Lc}static get DefaultType(){return Rc}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Oc]:this._getTitle(),[Pc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(i){return this.each(function(){const o=Ln.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}}O(Ln);const _i=".bs.scrollspy",Dc=`activate${_i}`,Yr=`click${_i}`,Nc=`load${_i}.data-api`,kt="active",vi="[href]",Jr=".nav-link",xc=`${Jr}, .nav-item > ${Jr}, .list-group-item`,Mc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},$c={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Gt extends Q{constructor(i,o){super(i,o),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Mc}static get DefaultType(){return $c}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const i of this._observableSections.values())this._observer.observe(i)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(i){return i.target=_(i.target)||document.body,i.rootMargin=i.offset?`${i.offset}px 0px -30%`:i.rootMargin,typeof i.threshold=="string"&&(i.threshold=i.threshold.split(",").map(o=>Number.parseFloat(o))),i}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(m.off(this._config.target,Yr),m.on(this._config.target,Yr,vi,i=>{const o=this._observableSections.get(i.target.hash);if(o){i.preventDefault();const d=this._rootElement||window,p=o.offsetTop-this._element.offsetTop;if(d.scrollTo)return void d.scrollTo({top:p,behavior:"smooth"});d.scrollTop=p}}))}_getNewObserver(){const i={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(o=>this._observerCallback(o),i)}_observerCallback(i){const o=w=>this._targetLinks.get(`#${w.target.id}`),d=w=>{this._previousScrollData.visibleEntryTop=w.target.offsetTop,this._process(o(w))},p=(this._rootElement||document.documentElement).scrollTop,y=p>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=p;for(const w of i){if(!w.isIntersecting){this._activeTarget=null,this._clearActiveClass(o(w));continue}const R=w.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(y&&R){if(d(w),!p)return}else y||R||d(w)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const i=E.find(vi,this._config.target);for(const o of i){if(!o.hash||A(o))continue;const d=E.findOne(decodeURI(o.hash),this._element);b(d)&&(this._targetLinks.set(decodeURI(o.hash),o),this._observableSections.set(o.hash,d))}}_process(i){this._activeTarget!==i&&(this._clearActiveClass(this._config.target),this._activeTarget=i,i.classList.add(kt),this._activateParents(i),m.trigger(this._element,Dc,{relatedTarget:i}))}_activateParents(i){if(i.classList.contains("dropdown-item"))E.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(kt);else for(const o of E.parents(i,".nav, .list-group"))for(const d of E.prev(o,xc))d.classList.add(kt)}_clearActiveClass(i){i.classList.remove(kt);const o=E.find(`${vi}.${kt}`,i);for(const d of o)d.classList.remove(kt)}static jQueryInterface(i){return this.each(function(){const o=Gt.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}})}}m.on(window,Nc,()=>{for(const u of E.find('[data-bs-spy="scroll"]'))Gt.getOrCreateInstance(u)}),O(Gt);const at=".bs.tab",Uc=`hide${at}`,Bc=`hidden${at}`,Fc=`show${at}`,Hc=`shown${at}`,jc=`click${at}`,Wc=`keydown${at}`,Vc=`load${at}`,zc="ArrowLeft",Xr="ArrowRight",qc="ArrowUp",Qr="ArrowDown",yi="Home",Zr="End",ct="active",es="fade",bi="show",ts=".dropdown-toggle",wi=`:not(${ts})`,ns='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ei=`.nav-link${wi}, .list-group-item${wi}, [role="tab"]${wi}, ${ns}`,Kc=`.${ct}[data-bs-toggle="tab"], .${ct}[data-bs-toggle="pill"], .${ct}[data-bs-toggle="list"]`;class lt extends Q{constructor(i){super(i),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),m.on(this._element,Wc,o=>this._keydown(o)))}static get NAME(){return"tab"}show(){const i=this._element;if(this._elemIsActive(i))return;const o=this._getActiveElem(),d=o?m.trigger(o,Uc,{relatedTarget:i}):null;m.trigger(i,Fc,{relatedTarget:o}).defaultPrevented||d&&d.defaultPrevented||(this._deactivate(o,i),this._activate(i,o))}_activate(i,o){i&&(i.classList.add(ct),this._activate(E.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.removeAttribute("tabindex"),i.setAttribute("aria-selected",!0),this._toggleDropDown(i,!0),m.trigger(i,Hc,{relatedTarget:o})):i.classList.add(bi)},i,i.classList.contains(es)))}_deactivate(i,o){i&&(i.classList.remove(ct),i.blur(),this._deactivate(E.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.setAttribute("aria-selected",!1),i.setAttribute("tabindex","-1"),this._toggleDropDown(i,!1),m.trigger(i,Bc,{relatedTarget:o})):i.classList.remove(bi)},i,i.classList.contains(es)))}_keydown(i){if(![zc,Xr,qc,Qr,yi,Zr].includes(i.key))return;i.stopPropagation(),i.preventDefault();const o=this._getChildren().filter(p=>!A(p));let d;if([yi,Zr].includes(i.key))d=o[i.key===yi?0:o.length-1];else{const p=[Xr,Qr].includes(i.key);d=U(o,i.target,p,!0)}d&&(d.focus({preventScroll:!0}),lt.getOrCreateInstance(d).show())}_getChildren(){return E.find(Ei,this._parent)}_getActiveElem(){return this._getChildren().find(i=>this._elemIsActive(i))||null}_setInitialAttributes(i,o){this._setAttributeIfNotExists(i,"role","tablist");for(const d of o)this._setInitialAttributesOnChild(d)}_setInitialAttributesOnChild(i){i=this._getInnerElement(i);const o=this._elemIsActive(i),d=this._getOuterElement(i);i.setAttribute("aria-selected",o),d!==i&&this._setAttributeIfNotExists(d,"role","presentation"),o||i.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(i,"role","tab"),this._setInitialAttributesOnTargetPanel(i)}_setInitialAttributesOnTargetPanel(i){const o=E.getElementFromSelector(i);o&&(this._setAttributeIfNotExists(o,"role","tabpanel"),i.id&&this._setAttributeIfNotExists(o,"aria-labelledby",`${i.id}`))}_toggleDropDown(i,o){const d=this._getOuterElement(i);if(!d.classList.contains("dropdown"))return;const p=(y,w)=>{const R=E.findOne(y,d);R&&R.classList.toggle(w,o)};p(ts,ct),p(".dropdown-menu",bi),d.setAttribute("aria-expanded",o)}_setAttributeIfNotExists(i,o,d){i.hasAttribute(o)||i.setAttribute(o,d)}_elemIsActive(i){return i.classList.contains(ct)}_getInnerElement(i){return i.matches(Ei)?i:E.findOne(Ei,i)}_getOuterElement(i){return i.closest(".nav-item, .list-group-item")||i}static jQueryInterface(i){return this.each(function(){const o=lt.getOrCreateInstance(this);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}})}}m.on(document,jc,ns,function(u){["A","AREA"].includes(this.tagName)&&u.preventDefault(),A(this)||lt.getOrCreateInstance(this).show()}),m.on(window,Vc,()=>{for(const u of E.find(Kc))lt.getOrCreateInstance(u)}),O(lt);const $e=".bs.toast",Gc=`mouseover${$e}`,Yc=`mouseout${$e}`,Jc=`focusin${$e}`,Xc=`focusout${$e}`,Qc=`hide${$e}`,Zc=`hidden${$e}`,el=`show${$e}`,tl=`shown${$e}`,is="hide",Rn="show",Dn="showing",nl={animation:"boolean",autohide:"boolean",delay:"number"},il={animation:!0,autohide:!0,delay:5e3};class Yt extends Q{constructor(i,o){super(i,o),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return il}static get DefaultType(){return nl}static get NAME(){return"toast"}show(){m.trigger(this._element,el).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(is),L(this._element),this._element.classList.add(Rn,Dn),this._queueCallback(()=>{this._element.classList.remove(Dn),m.trigger(this._element,tl),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(m.trigger(this._element,Qc).defaultPrevented||(this._element.classList.add(Dn),this._queueCallback(()=>{this._element.classList.add(is),this._element.classList.remove(Dn,Rn),m.trigger(this._element,Zc)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Rn),super.dispose()}isShown(){return this._element.classList.contains(Rn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(i,o){switch(i.type){case"mouseover":case"mouseout":this._hasMouseInteraction=o;break;case"focusin":case"focusout":this._hasKeyboardInteraction=o}if(o)return void this._clearTimeout();const d=i.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){m.on(this._element,Gc,i=>this._onInteraction(i,!0)),m.on(this._element,Yc,i=>this._onInteraction(i,!1)),m.on(this._element,Jc,i=>this._onInteraction(i,!0)),m.on(this._element,Xc,i=>this._onInteraction(i,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(i){return this.each(function(){const o=Yt.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i](this)}})}}return et(Yt),O(Yt),{Alert:xe,Button:tt,Carousel:Tt,Collapse:At,Dropdown:ce,Modal:st,Offcanvas:Ee,Popover:Ln,ScrollSpy:Gt,Tab:lt,Toast:Yt,Tooltip:ot}})}($n)),$n.exports}Xl();const Ql=()=>{};var fs={};/**
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
 */const go=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zl=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],c=n[t++],l=n[t++],h=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,l=c?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,g=a>>2,v=(a&3)<<4|l>>4;let _=(l&15)<<2|f>>6,b=f&63;h||(b=64,c||(_=64)),r.push(t[g],t[v],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(go(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||l==null||f==null||v==null)throw new eu;const _=a<<2|l>>4;if(r.push(_),f!==64){const b=l<<4&240|f>>2;if(r.push(b),v!==64){const A=f<<6&192|v;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(n){const e=go(n);return mo.encodeByteArray(e,!0)},_o=function(n){return tu(n).replace(/\./g,"")},vo=function(n){try{return mo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iu=()=>nu().__FIREBASE_DEFAULTS__,ru=()=>{if(typeof process>"u"||typeof fs>"u")return;const n=fs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},su=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vo(n[1]);return e&&JSON.parse(e)},ir=()=>{try{return Ql()||iu()||ru()||su()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ou=n=>{var e,t;return(t=(e=ir())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},yo=()=>{var n;return(n=ir())==null?void 0:n.config},bo=n=>{var e;return(e=ir())==null?void 0:e[`_${n}`]};/**
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
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ei(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cu(n){return(await fetch(n,{credentials:"include"})).ok}const tn={};function lu(){const n={prod:[],emulator:[]};for(const e of Object.keys(tn))tn[e]?n.emulator.push(e):n.prod.push(e);return n}function uu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ps=!1;function du(n,e){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||tn[n]===e||tn[n]||ps)return;tn[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",a=lu().prod.length>0;function c(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function f(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{ps=!0,c()},_}function g(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=uu(r),b=t("text"),A=document.getElementById(b)||document.createElement("span"),P=t("learnmore"),k=document.getElementById(P)||document.createElement("a"),L=t("preprendIcon"),D=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const N=_.element;l(N),g(k,P);const I=f();h(D,L),N.append(D,A,k,I),document.body.appendChild(N)}a?(A.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function fu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mu(){const n=G();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const yu="FirebaseError";class Ve extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yu,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ln.prototype.create)}}class ln{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?bu(a,r):"Error",l=`${this.serviceName}: ${c} (${s}).`;return new Ve(s,l,r)}}function bu(n,e){return n.replace(wu,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wu=/\{\$([^}]+)}/g;function Eu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],c=e[s];if(gs(a)&&gs(c)){if(!Ft(a,c))return!1}else if(a!==c)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gs(n){return n!==null&&typeof n=="object"}/**
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
 */function un(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Qt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Iu(n,e){const t=new Tu(n,e);return t.subscribe.bind(t)}class Tu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ii),s.error===void 0&&(s.error=Ii),s.complete===void 0&&(s.complete=Ii);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ii(){}/**
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
 */function yt(n){return n&&n._delegate?n._delegate:n}class Ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ht="[DEFAULT]";/**
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
 */class Au{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new au;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ku(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);r===l&&c.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Su(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Su(n){return n===ht?void 0:n}function ku(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ou{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Au(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Pu={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Lu=x.INFO,Ru={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Du=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ru[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wo{constructor(e){this.name=e,this._logLevel=Lu,this._logHandler=Du,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Nu=(n,e)=>e.some(t=>n instanceof t);let ms,_s;function xu(){return ms||(ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mu(){return _s||(_s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eo=new WeakMap,Mi=new WeakMap,Io=new WeakMap,Ti=new WeakMap,rr=new WeakMap;function $u(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(He(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Eo.set(t,n)}).catch(()=>{}),rr.set(e,n),e}function Uu(n){if(Mi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Mi.set(n,e)}let $i={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Io.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bu(n){$i=n($i)}function Fu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ci(this),e,...t);return Io.set(r,e.sort?e.sort():[e]),He(r)}:Mu().includes(n)?function(...e){return n.apply(Ci(this),e),He(Eo.get(this))}:function(...e){return He(n.apply(Ci(this),e))}}function Hu(n){return typeof n=="function"?Fu(n):(n instanceof IDBTransaction&&Uu(n),Nu(n,xu())?new Proxy(n,$i):n)}function He(n){if(n instanceof IDBRequest)return $u(n);if(Ti.has(n))return Ti.get(n);const e=Hu(n);return e!==n&&(Ti.set(n,e),rr.set(e,n)),e}const Ci=n=>rr.get(n);function ju(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),l=He(c);return r&&c.addEventListener("upgradeneeded",h=>{r(He(c.result),h.oldVersion,h.newVersion,He(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{a&&h.addEventListener("close",()=>a()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Wu=["get","getKey","getAll","getAllKeys","count"],Vu=["put","add","delete","clear"],Ai=new Map;function vs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ai.get(e))return Ai.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vu.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wu.includes(t)))return;const a=async function(c,...l){const h=this.transaction(c,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&h.done]))[0]};return Ai.set(e,a),a}Bu(n=>({...n,get:(e,t,r)=>vs(e,t)||n.get(e,t,r),has:(e,t)=>!!vs(e,t)||n.has(e,t)}));/**
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
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qu(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ui="@firebase/app",ys="0.14.3";/**
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
 */const Le=new wo("@firebase/app"),Ku="@firebase/app-compat",Gu="@firebase/analytics-compat",Yu="@firebase/analytics",Ju="@firebase/app-check-compat",Xu="@firebase/app-check",Qu="@firebase/auth",Zu="@firebase/auth-compat",ed="@firebase/database",td="@firebase/data-connect",nd="@firebase/database-compat",id="@firebase/functions",rd="@firebase/functions-compat",sd="@firebase/installations",od="@firebase/installations-compat",ad="@firebase/messaging",cd="@firebase/messaging-compat",ld="@firebase/performance",ud="@firebase/performance-compat",dd="@firebase/remote-config",hd="@firebase/remote-config-compat",fd="@firebase/storage",pd="@firebase/storage-compat",gd="@firebase/firestore",md="@firebase/ai",_d="@firebase/firestore-compat",vd="firebase",yd="12.3.0";/**
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
 */const Bi="[DEFAULT]",bd={[Ui]:"fire-core",[Ku]:"fire-core-compat",[Yu]:"fire-analytics",[Gu]:"fire-analytics-compat",[Xu]:"fire-app-check",[Ju]:"fire-app-check-compat",[Qu]:"fire-auth",[Zu]:"fire-auth-compat",[ed]:"fire-rtdb",[td]:"fire-data-connect",[nd]:"fire-rtdb-compat",[id]:"fire-fn",[rd]:"fire-fn-compat",[sd]:"fire-iid",[od]:"fire-iid-compat",[ad]:"fire-fcm",[cd]:"fire-fcm-compat",[ld]:"fire-perf",[ud]:"fire-perf-compat",[dd]:"fire-rc",[hd]:"fire-rc-compat",[fd]:"fire-gcs",[pd]:"fire-gcs-compat",[gd]:"fire-fst",[_d]:"fire-fst-compat",[md]:"fire-vertex","fire-js":"fire-js",[vd]:"fire-js-all"};/**
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
 */const Vn=new Map,wd=new Map,Fi=new Map;function bs(n,e){try{n.container.addComponent(e)}catch(t){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){const e=n.name;if(Fi.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;Fi.set(e,n);for(const t of Vn.values())bs(t,n);for(const t of wd.values())bs(t,n);return!0}function To(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function se(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new ln("app","Firebase",Ed);/**
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
 */class Id{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=yd;function Co(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Bi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(t||(t=yo()),!t)throw je.create("no-options");const a=Vn.get(s);if(a){if(Ft(t,a.options)&&Ft(r,a.config))return a;throw je.create("duplicate-app",{appName:s})}const c=new Ou(s);for(const h of Fi.values())c.addComponent(h);const l=new Id(t,r,c);return Vn.set(s,l),l}function Td(n=Bi){const e=Vn.get(n);if(!e&&n===Bi&&yo())return Co();if(!e)throw je.create("no-app",{appName:n});return e}function Pt(n,e,t){let r=bd[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(c.join(" "));return}rn(new Ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Cd="firebase-heartbeat-database",Ad=1,sn="firebase-heartbeat-store";let Si=null;function Ao(){return Si||(Si=ju(Cd,Ad,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(sn)}catch(t){console.warn(t)}}}}).catch(n=>{throw je.create("idb-open",{originalErrorMessage:n.message})})),Si}async function Sd(n){try{const t=(await Ao()).transaction(sn),r=await t.objectStore(sn).get(So(n));return await t.done,r}catch(e){if(e instanceof Ve)Le.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(t.message)}}}async function ws(n,e){try{const r=(await Ao()).transaction(sn,"readwrite");await r.objectStore(sn).put(e,So(n)),await r.done}catch(t){if(t instanceof Ve)Le.warn(t.message);else{const r=je.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Le.warn(r.message)}}}function So(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kd=1024,Od=30;class Pd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Es();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Od){const c=Dd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Le.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Es(),{heartbeatsToSend:r,unsentEntries:s}=Ld(this._heartbeatsCache.heartbeats),a=_o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Le.warn(t),""}}}function Es(){return new Date().toISOString().substring(0,10)}function Ld(n,e=kd){const t=[];let r=n.slice();for(const s of n){const a=t.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Is(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Is(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Rd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Sd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ws(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ws(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Is(n){return _o(JSON.stringify({version:2,heartbeats:n})).length}function Dd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Nd(n){rn(new Ht("platform-logger",e=>new zu(e),"PRIVATE")),rn(new Ht("heartbeat",e=>new Pd(e),"PRIVATE")),Pt(Ui,ys,n),Pt(Ui,ys,"esm2020"),Pt("fire-js","")}Nd("");var xd="firebase",Md="12.3.0";/**
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
 */Pt(xd,Md,"app");function ko(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $d=ko,Oo=new ln("auth","Firebase",ko());/**
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
 */const zn=new wo("@firebase/auth");function Ud(n,...e){zn.logLevel<=x.WARN&&zn.warn(`Auth (${dn}): ${n}`,...e)}function Bn(n,...e){zn.logLevel<=x.ERROR&&zn.error(`Auth (${dn}): ${n}`,...e)}/**
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
 */function ae(n,...e){throw or(n,...e)}function he(n,...e){return or(n,...e)}function sr(n,e,t){const r={...$d(),[e]:t};return new ln("auth","Firebase",r).create(e,{appName:n.name})}function Oe(n){return sr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ae(n,"argument-error"),sr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function or(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Oo.create(n,...e)}function C(n,e,...t){if(!n)throw or(e,...t)}function Se(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bn(e),new Error(e)}function Re(n,e){n||Se(e)}/**
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
 */function Hi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Fd(){return Ts()==="http:"||Ts()==="https:"}function Ts(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Hd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fd()||pu()||"connection"in navigator)?navigator.onLine:!0}function jd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class hn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Re(t>e,"Short delay should be less than long delay!"),this.isMobile=hu()||gu()}get(){return Hd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ar(n,e){Re(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Po{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zd=new hn(3e4,6e4);function ze(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qe(n,e,t,r,s={}){return Lo(n,s,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const l=un({key:n.config.apiKey,...c}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...a};return fu()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&ei(n.emulatorConfig.host)&&(f.credentials="include"),Po.fetch()(await Ro(n,n.config.apiHost,t,l),f)})}async function Lo(n,e,t){n._canInitEmulator=!1;const r={...Wd,...e};try{const s=new Kd(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Mn(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const l=a.ok?c.errorMessage:c.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mn(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Mn(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw Mn(n,"user-disabled",c);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw sr(n,g,f);ae(n,g)}}catch(s){if(s instanceof Ve)throw s;ae(n,"network-request-failed",{message:String(s)})}}async function fn(n,e,t,r,s={}){const a=await qe(n,e,t,r,s);return"mfaPendingCredential"in a&&ae(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ro(n,e,t,r){const s=`${e}${t}?${r}`,a=n,c=a.config.emulator?ar(n.config,s):`${n.config.apiScheme}://${s}`;return Vd.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function qd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),zd.get())})}}function Mn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=he(n,e,r);return s.customData._tokenResponse=t,s}function Cs(n){return n!==void 0&&n.enterprise!==void 0}class Gd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yd(n,e){return qe(n,"GET","/v2/recaptchaConfig",ze(n,e))}/**
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
 */async function Jd(n,e){return qe(n,"POST","/v1/accounts:delete",e)}async function qn(n,e){return qe(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function nn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xd(n,e=!1){const t=yt(n),r=await t.getIdToken(e),s=cr(r);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:nn(ki(s.auth_time)),issuedAtTime:nn(ki(s.iat)),expirationTime:nn(ki(s.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ki(n){return Number(n)*1e3}function cr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bn("JWT malformed, contained fewer than 3 sections"),null;try{const s=vo(t);return s?JSON.parse(s):(Bn("Failed to decode base64 JWT payload"),null)}catch(s){return Bn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function As(n){const e=cr(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function on(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ve&&Qd(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Zd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nn(this.lastLoginAt),this.creationTime=nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kn(n){var v;const e=n.auth,t=await n.getIdToken(),r=await on(n,qn(e,{idToken:t}));C(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=(v=s.providerUserInfo)!=null&&v.length?Do(s.providerUserInfo):[],c=th(n.providerData,a),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ji(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function eh(n){const e=yt(n);await Kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function th(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Do(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function nh(n,e){const t=await Lo(n,{},async()=>{const r=un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=await Ro(n,s,"/v1/token",`key=${a}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&ei(n.emulatorConfig.host)&&(h.credentials="include"),Po.fetch()(c,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ih(n,e){return qe(n,"POST","/v2/accounts:revokeToken",ze(n,e))}/**
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
 */class Lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):As(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(e.length!==0,"internal-error");const t=As(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await nh(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,c=new Lt;return r&&(C(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(C(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lt,this.toJSON())}_performRefresh(){return Se("not implemented")}}/**
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
 */function Ue(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class de{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Zd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ji(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await on(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xd(this,e)}reload(){return eh(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new de({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Kn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(se(this.auth.app))return Promise.reject(Oe(this.auth));const e=await this.getIdToken();return await on(this,Jd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:A,stsTokenManager:P}=t;C(v&&P,e,"internal-error");const k=Lt.fromJSON(this.name,P);C(typeof v=="string",e,"internal-error"),Ue(r,e.name),Ue(s,e.name),C(typeof _=="boolean",e,"internal-error"),C(typeof b=="boolean",e,"internal-error"),Ue(a,e.name),Ue(c,e.name),Ue(l,e.name),Ue(h,e.name),Ue(f,e.name),Ue(g,e.name);const L=new de({uid:v,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:b,photoURL:c,phoneNumber:a,tenantId:l,stsTokenManager:k,createdAt:f,lastLoginAt:g});return A&&Array.isArray(A)&&(L.providerData=A.map(D=>({...D}))),h&&(L._redirectEventId=h),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new Lt;s.updateFromServerResponse(t);const a=new de({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kn(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];C(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?Do(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),l=new Lt;l.updateFromIdToken(r);const h=new de({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:c}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ji(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,f),h}}/**
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
 */const Ss=new Map;function ke(n){Re(n instanceof Function,"Expected a class definition");let e=Ss.get(n);return e?(Re(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ss.set(n,e),e)}/**
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
 */class No{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}No.type="NONE";const ks=No;/**
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
 */function Fn(n,e,t){return`firebase:${n}:${e}:${t}`}class Rt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Fn(this.userKey,s.apiKey,a),this.fullPersistenceKey=Fn("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qn(this.auth,{idToken:e}).catch(()=>{});return t?de._fromGetAccountInfoResponse(this.auth,t,e):null}return de._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Rt(ke(ks),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let a=s[0]||ke(ks);const c=Fn(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const g=await f._get(c);if(g){let v;if(typeof g=="string"){const _=await qn(e,{idToken:g}).catch(()=>{});if(!_)break;v=await de._fromGetAccountInfoResponse(e,_,g)}else v=de._fromJSON(e,g);f!==a&&(l=v),a=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Rt(a,e,r):(a=h[0],l&&await a._set(c,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==a)try{await f._remove(c)}catch{}})),new Rt(a,e,r))}}/**
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
 */function Os(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fo(e))return"Blackberry";if(Ho(e))return"Webos";if(Mo(e))return"Safari";if((e.includes("chrome/")||$o(e))&&!e.includes("edge/"))return"Chrome";if(Bo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xo(n=G()){return/firefox\//i.test(n)}function Mo(n=G()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $o(n=G()){return/crios\//i.test(n)}function Uo(n=G()){return/iemobile/i.test(n)}function Bo(n=G()){return/android/i.test(n)}function Fo(n=G()){return/blackberry/i.test(n)}function Ho(n=G()){return/webos/i.test(n)}function lr(n=G()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rh(n=G()){var e;return lr(n)&&!!((e=window.navigator)!=null&&e.standalone)}function sh(){return mu()&&document.documentMode===10}function jo(n=G()){return lr(n)||Bo(n)||Ho(n)||Fo(n)||/windows phone/i.test(n)||Uo(n)}/**
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
 */function Wo(n,e=[]){let t;switch(n){case"Browser":t=Os(G());break;case"Worker":t=`${Os(G())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class oh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,l)=>{try{const h=e(a);c(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ah(n,e={}){return qe(n,"GET","/v2/passwordPolicy",ze(n,e))}/**
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
 */const ch=6;class lh{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ch,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class uh{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ps(this),this.idTokenSubscription=new Ps(this),this.beforeStateQueue=new oh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ke(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qn(this,{idToken:e}),r=await de._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(se(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(a=this.redirectUser)==null?void 0:a._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(se(this.app))return Promise.reject(Oe(this));const t=e?yt(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return se(this.app)?Promise.reject(Oe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return se(this.app)?Promise.reject(Oe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ah(this),t=new lh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ln("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ih(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ke(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(l,this,"internal-error"),l.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ud(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ke(n){return yt(n)}class Ps{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iu(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ti={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dh(n){ti=n}function Vo(n){return ti.loadJS(n)}function hh(){return ti.recaptchaEnterpriseScript}function fh(){return ti.gapiScript}function ph(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class gh{constructor(){this.enterprise=new mh}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mh{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _h="recaptcha-enterprise",zo="NO_RECAPTCHA";class vh{constructor(e){this.type=_h,this.auth=Ke(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,l)=>{Yd(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Gd(h);return a.tenantId==null?a._agentRecaptchaConfig=f:a._tenantRecaptchaConfigs[a.tenantId]=f,c(f.siteKey)}}).catch(h=>{l(h)})})}function s(a,c,l){const h=window.grecaptcha;Cs(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(f=>{c(f)}).catch(()=>{c(zo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gh().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(l=>{if(!t&&Cs(window.grecaptcha))s(l,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=hh();h.length!==0&&(h+=l),Vo(h).then(()=>{s(l,a,c)}).catch(f=>{c(f)})}}).catch(l=>{c(l)})})}}async function Ls(n,e,t,r=!1,s=!1){const a=new vh(n);let c;if(s)c=zo;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wi(n,e,t,r,s){var a;if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ls(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ls(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)})}/**
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
 */function yh(n,e){const t=To(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ft(a,e??{}))return s;ae(s,"already-initialized")}return t.initialize({options:e})}function bh(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ke);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wh(n,e,t){const r=Ke(n);C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=qo(e),{host:c,port:l}=Eh(e),h=l===null?"":`:${l}`,f={url:`${a}//${c}${h}/`},g=Object.freeze({host:c,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){C(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),C(Ft(f,r.config.emulator)&&Ft(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,ei(c)?(cu(`${a}//${c}${h}`),du("Auth",!0)):Ih()}function qo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Eh(n){const e=qo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Rs(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Rs(c)}}}function Rs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ih(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ur{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Se("not implemented")}_getIdTokenResponse(e){return Se("not implemented")}_linkToIdToken(e,t){return Se("not implemented")}_getReauthenticationResolver(e){return Se("not implemented")}}async function Th(n,e){return qe(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ch(n,e){return fn(n,"POST","/v1/accounts:signInWithPassword",ze(n,e))}/**
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
 */async function Ah(n,e){return fn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,e))}async function Sh(n,e){return fn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,e))}/**
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
 */class an extends ur{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new an(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new an(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,t,"signInWithPassword",Ch);case"emailLink":return Ah(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,r,"signUpPassword",Th);case"emailLink":return Sh(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dt(n,e){return fn(n,"POST","/v1/accounts:signInWithIdp",ze(n,e))}/**
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
 */const kh="http://localhost";class _t extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...a}=t;if(!r||!s)return null;const c=new _t(r,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Dt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Dt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dt(e,t)}buildRequest(){const e={requestUri:kh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=un(t)}return e}}/**
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
 */function Oh(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ph(n){const e=Xt(Qt(n)).link,t=e?Xt(Qt(e)).deep_link_id:null,r=Xt(Qt(n)).deep_link_id;return(r?Xt(Qt(r)).link:null)||r||t||e||n}class dr{constructor(e){const t=Xt(Qt(e)),r=t.apiKey??null,s=t.oobCode??null,a=Oh(t.mode??null);C(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ph(e);try{return new dr(t)}catch{return null}}}/**
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
 */class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(e,t){return an._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dr.parseLink(t);return C(r,"argument-error"),an._fromEmailAndCode(e,r.code,r.tenantId)}}Wt.PROVIDER_ID="password";Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pn extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ce extends pn{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";/**
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
 */class Ae extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _t._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ae.credential(t,r)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
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
 */class Be extends pn{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
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
 */class Fe extends pn{constructor(){super("twitter.com")}static credential(e,t){return _t._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fe.credential(t,r)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
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
 */async function Lh(n,e){return fn(n,"POST","/v1/accounts:signUp",ze(n,e))}/**
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
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await de._fromIdTokenResponse(e,r,s),c=Ds(r);return new vt({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ds(r);return new vt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ds(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Gn extends Ve{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Gn(e,t,r,s)}}function Ko(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Gn._fromErrorAndOperation(n,a,e,r):a})}async function Rh(n,e,t=!1){const r=await on(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vt._forOperation(n,"link",r)}/**
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
 */async function Dh(n,e,t=!1){const{auth:r}=n;if(se(r.app))return Promise.reject(Oe(r));const s="reauthenticate";try{const a=await on(n,Ko(r,s,e,n),t);C(a.idToken,r,"internal-error");const c=cr(a.idToken);C(c,r,"internal-error");const{sub:l}=c;return C(n.uid===l,r,"user-mismatch"),vt._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ae(r,"user-mismatch"),a}}/**
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
 */async function Go(n,e,t=!1){if(se(n.app))return Promise.reject(Oe(n));const r="signIn",s=await Ko(n,r,e),a=await vt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Nh(n,e){return Go(Ke(n),e)}/**
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
 */async function Yo(n){const e=Ke(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xh(n,e,t){if(se(n.app))return Promise.reject(Oe(n));const r=Ke(n),c=await Wi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lh).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Yo(n),h}),l=await vt._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(l.user),l}function Mh(n,e,t){return se(n.app)?Promise.reject(Oe(n)):Nh(yt(n),Wt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yo(n),r})}function $h(n,e,t,r){return yt(n).onIdTokenChanged(e,t,r)}function Uh(n,e,t){return yt(n).beforeAuthStateChanged(e,t)}const Yn="__sak";/**
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
 */class Jo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yn,"1"),this.storage.removeItem(Yn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bh=1e3,Fh=10;class Xo extends Jo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);sh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fh):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Bh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xo.type="LOCAL";const Hh=Xo;/**
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
 */class Qo extends Jo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qo.type="SESSION";const Zo=Qo;/**
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
 */function jh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(c).map(async f=>f(t.origin,a)),h=await jh(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ni.receivers=[];/**
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
 */function fr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Wh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((l,h)=>{const f=fr("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:s,onMessage(v){const _=v;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(_.data.response);break;default:clearTimeout(g),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function me(){return window}function Vh(n){me().location.href=n}/**
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
 */function ea(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function zh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Kh(){return ea()?self:null}/**
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
 */const ta="firebaseLocalStorageDb",Gh=1,Jn="firebaseLocalStorage",na="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ii(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function Yh(){const n=indexedDB.deleteDatabase(ta);return new gn(n).toPromise()}function Vi(){const n=indexedDB.open(ta,Gh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Jn,{keyPath:na})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Jn)?e(r):(r.close(),await Yh(),e(await Vi()))})})}async function Ns(n,e,t){const r=ii(n,!0).put({[na]:e,value:t});return new gn(r).toPromise()}async function Jh(n,e){const t=ii(n,!1).get(e),r=await new gn(t).toPromise();return r===void 0?null:r.value}function xs(n,e){const t=ii(n,!0).delete(e);return new gn(t).toPromise()}const Xh=800,Qh=3;class ia{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(Kh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Wh(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vi();return await Ns(e,Yn,"1"),await xs(e,Yn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ns(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jh(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=ii(s,!1).getAll();return new gn(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ia.type="LOCAL";const Zh=ia;new hn(3e4,6e4);/**
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
 */function ra(n,e){return e?ke(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pr extends ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ef(n){return Go(n.auth,new pr(n),n.bypassAuthState)}function tf(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Dh(t,new pr(n),n.bypassAuthState)}async function nf(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Rh(t,new pr(n),n.bypassAuthState)}/**
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
 */class sa{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ef;case"linkViaPopup":case"linkViaRedirect":return nf;case"reauthViaPopup":case"reauthViaRedirect":return tf;default:ae(this.auth,"internal-error")}}resolve(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rf=new hn(2e3,1e4);async function oa(n,e,t){if(se(n.app))return Promise.reject(he(n,"operation-not-supported-in-this-environment"));const r=Ke(n);Bd(n,e,hr);const s=ra(r,t);return new ft(r,"signInViaPopup",e,s).executeNotNull()}class ft extends sa{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const e=fr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rf.get())};e()}}ft.currentPopupAction=null;/**
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
 */const sf="pendingRedirect",Hn=new Map;class of extends sa{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hn.get(this.auth._key());if(!e){try{const r=await af(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hn.set(this.auth._key(),e)}return this.bypassAuthState||Hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function af(n,e){const t=uf(e),r=lf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cf(n,e){Hn.set(n._key(),e)}function lf(n){return ke(n._redirectPersistence)}function uf(n){return Fn(sf,n.config.apiKey,n.name)}async function df(n,e,t=!1){if(se(n.app))return Promise.reject(Oe(n));const r=Ke(n),s=ra(r,e),c=await new of(r,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const hf=10*60*1e3;class ff{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!aa(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(he(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ms(e))}saveEventToCache(e){this.cachedEventUids.add(Ms(e)),this.lastProcessedEventTime=Date.now()}}function Ms(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function aa({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aa(n);default:return!1}}/**
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
 */async function gf(n,e={}){return qe(n,"GET","/v1/projects",e)}/**
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
 */const mf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_f=/^https?/;async function vf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gf(n);for(const t of e)try{if(yf(t))return}catch{}ae(n,"unauthorized-domain")}function yf(n){const e=Hi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!_f.test(t))return!1;if(mf.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bf=new hn(3e4,6e4);function $s(){const n=me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wf(n){return new Promise((e,t)=>{var s,a,c;function r(){$s(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$s(),t(he(n,"network-request-failed"))},timeout:bf.get()})}if((a=(s=me().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((c=me().gapi)!=null&&c.load)r();else{const l=ph("iframefcb");return me()[l]=()=>{gapi.load?r():t(he(n,"network-request-failed"))},Vo(`${fh()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw jn=null,e})}let jn=null;function Ef(n){return jn=jn||wf(n),jn}/**
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
 */const If=new hn(5e3,15e3),Tf="__/auth/iframe",Cf="emulator/auth/iframe",Af={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kf(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ar(e,Cf):`https://${n.config.authDomain}/${Tf}`,r={apiKey:e.apiKey,appName:n.name,v:dn},s=Sf.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${un(r).slice(1)}`}async function Of(n){const e=await Ef(n),t=me().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:kf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Af,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const c=he(n,"network-request-failed"),l=me().setTimeout(()=>{a(c)},If.get());function h(){me().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{a(c)})}))}/**
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
 */const Pf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lf=500,Rf=600,Df="_blank",Nf="http://localhost";class Us{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xf(n,e,t,r=Lf,s=Rf){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...Pf,width:r.toString(),height:s.toString(),top:a,left:c},f=G().toLowerCase();t&&(l=$o(f)?Df:t),xo(f)&&(e=e||Nf,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[b,A])=>`${_}${b}=${A},`,"");if(rh(f)&&l!=="_self")return Mf(e||"",l),new Us(null);const v=window.open(e||"",l,g);C(v,n,"popup-blocked");try{v.focus()}catch{}return new Us(v)}function Mf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const $f="__/auth/handler",Uf="emulator/auth/handler",Bf=encodeURIComponent("fac");async function Bs(n,e,t,r,s,a){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:s};if(e instanceof hr){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Eu(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries({}))c[g]=v}if(e instanceof pn){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(c.scopes=g.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const h=await n._getAppCheckToken(),f=h?`#${Bf}=${encodeURIComponent(h)}`:"";return`${Ff(n)}?${un(l).slice(1)}${f}`}function Ff({config:n}){return n.emulator?ar(n,Uf):`https://${n.authDomain}/${$f}`}/**
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
 */const Oi="webStorageSupport";class Hf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zo,this._completeRedirectFn=df,this._overrideRedirectResult=cf}async _openPopup(e,t,r,s){var c;Re((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const a=await Bs(e,t,r,Hi(),s);return xf(e,a,fr())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Bs(e,t,r,Hi(),s);return Vh(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Re(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Of(e),r=new ff(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var c;const a=(c=s==null?void 0:s[0])==null?void 0:c[Oi];a!==void 0&&t(!!a),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jo()||Mo()||lr()}}const jf=Hf;var Fs="@firebase/auth",Hs="1.11.0";/**
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
 */class Wf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zf(n){rn(new Ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=r.options;C(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wo(n)},f=new uh(r,s,a,h);return bh(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rn(new Ht("auth-internal",e=>{const t=Ke(e.getProvider("auth").getImmediate());return(r=>new Wf(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Fs,Hs,Vf(n)),Pt(Fs,Hs,"esm2020")}/**
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
 */const qf=5*60,Kf=bo("authIdTokenMaxAge")||qf;let js=null;const Gf=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kf)return;const s=t==null?void 0:t.token;js!==s&&(js=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yf(n=Td()){const e=To(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yh(n,{popupRedirectResolver:jf,persistence:[Zh,Hh,Zo]}),r=bo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Gf(a.toString());Uh(t,c,()=>c(t.currentUser)),$h(t,l=>c(l))}}const s=ou("auth");return s&&wh(t,`http://${s}`),t}function Jf(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dh({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=he("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Jf().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zf("Browser");const Xf={apiKey:"AIzaSyBABJUTpmf11FR96mfhpumXk5APDx22Xsk",authDomain:"zohue-auth.firebaseapp.com",projectId:"zohue-auth",storageBucket:"zohue-auth.firebasestorage.app",messagingSenderId:"438985606953",appId:"1:438985606953:web:b5cb8ca6e94d05097c1938",measurementId:"G-6QV1MNLQ0W"},Qf=Co(Xf),ri=Yf(Qf),Zf=(n,e)=>xh(ri,n,e),ep=(n,e)=>Mh(ri,n,e),tp=async()=>{const n=new Ae;try{const e=await oa(ri,n);return console.log("Google 登入成功:",e.user),e}catch(e){throw console.error("Google 登入失敗:",e),e}},np=async()=>{const n=new Ce;try{const e=await oa(ri,n);return console.log("Facebook 登入成功:",e.user),e}catch(e){throw console.error("Facebook 登入失敗:",e),e}},bt=[{id:1,title:"初心",subtitle:"はじめ",volunteer:"林美玲",role:"英語教學志工",story:"第一次踏進偏鄉小學，看見孩子們渴望學習的眼神，我知道這就是我想做的事。",quote:"教育不是填滿水桶，而是點燃火焰。",image:"🌸",imageUrl:"https://picsum.photos/id/180/767/470",stats:{students:32,hours:128,years:2}},{id:2,title:"成長",subtitle:"せいちょう",volunteer:"陳志明",role:"程式設計導師",story:"從一個害羞的工程師，到能夠站在講台上分享知識，這段旅程改變了我。",quote:"在教學中，我們不只是老師，更是永遠的學生。",image:"🌿",imageUrl:"https://picsum.photos/id/160/767/470",stats:{students:45,hours:256,years:3}},{id:3,title:"感動",subtitle:"かんどう",volunteer:"王雅琪",role:"美術創作老師",story:"當學生第一次完成作品時的笑容，是我繼續前進的最大動力。",quote:"藝術讓孩子看見世界的美好，也看見自己的可能。",image:"🎨",imageUrl:"https://picsum.photos/id/184/767/470",stats:{students:28,hours:96,years:1}},{id:4,title:"堅持",subtitle:"けんじ",volunteer:"李建華",role:"數學輔導老師",story:"即使遇到挫折，看到學生進步的那一刻，所有的努力都值得了。",quote:"堅持不是因為看到希望才堅持，而是堅持了才看到希望。",image:"💪",imageUrl:"https://picsum.photos/id/188/767/470",stats:{students:38,hours:180,years:4}},{id:5,title:"希望",subtitle:"きぼう",volunteer:"張淑芬",role:"閱讀推廣志工",story:"每一本書都是一扇窗，讓孩子們看見更廣闊的世界。",quote:"閱讀是給孩子最好的禮物，知識是他們飛翔的翅膀。",image:"📚",imageUrl:"https://picsum.photos/id/24/767/470",stats:{students:52,hours:320,years:5}},{id:6,title:"傳承",subtitle:"でんしょう",volunteer:"劉永祥",role:"資深志工導師",story:"看著新志工們成長，就像看見自己當年的模樣，這份愛會一直傳下去。",quote:"最好的傳承不是給予，而是啟發他人也成為給予者。",image:"🌟",imageUrl:"https://picsum.photos/id/177/767/470",stats:{students:120,hours:500,years:8}}];let _e=0,Nt=!1,gr=!1,Ws=0,ca=0,T={};function ip(){const n=document.getElementById("lightbox");n&&(n.style.display="flex",setTimeout(()=>{n.classList.add("active")},10),window.storyWallInitialized||(op(),window.storyWallInitialized=!0))}function mr(){const n=document.getElementById("lightbox");if(!n)return;n.classList.add("closing"),n.classList.remove("active");const e=n.querySelector(".lightbox-content");e&&e.addEventListener("animationend",function t(){n.style.display="none",n.classList.remove("closing"),e.removeEventListener("animationend",t)})}function rp(){T={chapterName:document.querySelector("#chapterName"),chapterSubtitle:document.querySelector("#chapterSubtitle"),volunteerImage:document.querySelector("#volunteerImage"),volunteerName:document.querySelector("#volunteerName"),volunteerRole:document.querySelector("#volunteerRole"),storyParagraph:document.querySelector("#storyParagraph"),storyQuote:document.querySelector("#storyQuote"),statStudents:document.querySelector("#statStudents"),statHours:document.querySelector("#statHours"),statYears:document.querySelector("#statYears"),pageCurrent:document.querySelector("#pageCurrent"),pageTotal:document.querySelector("#pageTotal"),scrollHint:document.querySelector("#scrollHint"),storyContent:document.querySelector("#storyContent"),visualContent:document.querySelector("#visualContent"),pageIndicators:document.querySelector("#pageIndicators"),prevButton:document.querySelector("#prevButton"),nextButton:document.querySelector("#nextButton"),container:document.querySelector("#container")}}function sp(){bt.forEach(n=>{const e=new Image;e.src=n.imageUrl})}function op(){rp(),ap(),sp(),la(),hp(),T.pageTotal&&(T.pageTotal.textContent=bt.length)}function ap(){T.pageIndicators&&(T.pageIndicators.innerHTML="",bt.forEach((n,e)=>{const t=document.createElement("button");t.className="indicator",t.setAttribute("aria-label",`Go to story ${e+1}`),t.innerHTML=`
        <div class="indicator-dot"></div>
        <span class="indicator-label">${n.title}</span>
    `,t.addEventListener("click",()=>_r(e)),T.pageIndicators.appendChild(t)}))}function la(){const n=bt[_e];T.chapterName&&(T.chapterName.textContent=n.title),T.chapterSubtitle&&(T.chapterSubtitle.textContent=n.subtitle),T.volunteerImage&&(T.volunteerImage.textContent=n.image),T.volunteerName&&(T.volunteerName.textContent=n.volunteer),T.volunteerRole&&(T.volunteerRole.textContent=n.role),T.storyParagraph&&(T.storyParagraph.textContent=n.story),T.storyQuote&&(T.storyQuote.textContent=`— ${n.quote}`),T.statStudents&&(T.statStudents.textContent=n.stats.students),T.statHours&&(T.statHours.textContent=n.stats.hours),T.statYears&&(T.statYears.textContent=n.stats.years),T.pageCurrent&&(T.pageCurrent.textContent=_e+1);const e=document.querySelector("#storyImage");if(e&&n.imageUrl){e.style.opacity="0.3";let t=document.querySelector(".image-loading");t||(t=document.createElement("div"),t.className="image-loading",t.innerHTML=`
        <div class="loading-spinner"></div>
        <div class="loading-text">載入中...</div>
    `,t.style.cssText=`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        z-index: 10;
    `,e.parentElement.style.position="relative",e.parentElement.appendChild(t)),t.style.display="flex";const r=new Image;r.onload=function(){e.src=this.src,e.style.opacity="1",t.style.display="none"},r.onerror=function(){e.style.opacity="1",t.querySelector(".loading-text").textContent="載入失敗",t.querySelector(".loading-spinner").style.display="none",setTimeout(()=>{t.style.display="none"},2e3)},r.src=n.imageUrl,e.alt=`${n.title} - ${n.volunteer}`}cp(),T.scrollHint&&(_e===0?T.scrollHint.classList.remove("hidden"):T.scrollHint.classList.add("hidden"))}function cp(){if(!T.pageIndicators)return;T.pageIndicators.querySelectorAll(".indicator").forEach((e,t)=>{t===_e?e.classList.add("active"):e.classList.remove("active")})}function _r(n){if(Nt||gr)return;const e=Math.max(0,Math.min(bt.length-1,n));e!==_e&&(Nt=!0,T.storyContent&&T.storyContent.classList.add("animating"),T.visualContent&&T.visualContent.classList.add("animating"),setTimeout(()=>{_e=e,la(),setTimeout(()=>{T.storyContent&&T.storyContent.classList.remove("animating"),T.visualContent&&T.visualContent.classList.remove("animating"),Nt=!1},100)},300))}function si(){const n=_e===0?bt.length-1:_e-1;_r(n)}function oi(){const n=_e===bt.length-1?0:_e+1;_r(n)}function Pi(n){const e=document.getElementById("lightbox");if(!e||!e.classList.contains("active"))return;n.preventDefault(),n.stopPropagation();const t=Date.now();t-Ws<500||Nt||(Ws=t,n.deltaY>0?oi():si())}function lp(n){const e=document.getElementById("lightbox");if(!(!e||!e.classList.contains("active"))&&!(Nt||gr))switch(n.key){case"ArrowLeft":case"ArrowUp":n.preventDefault(),si();break;case"ArrowRight":case"ArrowDown":n.preventDefault(),oi();break;case"Escape":n.preventDefault(),mr();break}}function up(n){ca=n.touches[0].clientY}function dp(n){if(Nt||gr)return;const e=n.changedTouches[0].clientY,t=ca-e;Math.abs(t)>50&&(t>0?oi():si())}function hp(){T.prevButton&&T.prevButton.addEventListener("click",si),T.nextButton&&T.nextButton.addEventListener("click",oi),window.addEventListener("wheel",Pi,{passive:!1}),document.addEventListener("wheel",Pi,{passive:!1}),T.container&&T.container.addEventListener("wheel",Pi,{passive:!1}),document.addEventListener("keydown",lp),T.container&&(T.container.addEventListener("touchstart",up,{passive:!0}),T.container.addEventListener("touchend",dp,{passive:!0}));const n=document.getElementById("lightbox");n&&n.addEventListener("click",function(e){e.target===this&&mr()})}window.openLightbox=ip;window.closeLightbox=mr;function fp(){const n=new bootstrap.Modal(document.getElementById("loginModal"));document.body.classList.add("modal-open-custom"),n.show()}function pp(n){const e=document.getElementById(n),t=document.getElementById(n+"Icon");e.type==="password"?(e.type="text",t.classList.remove("fa-eye"),t.classList.add("fa-eye-slash")):(e.type="password",t.classList.remove("fa-eye-slash"),t.classList.add("fa-eye"))}async function Li(){console.log("Google 登入被點擊");try{const n=await tp();console.log("Google 登入成功:",n.user),alert("Google 登入成功！");const e=bootstrap.Modal.getInstance(document.getElementById("loginModal"));e&&e.hide()}catch(n){console.error("Google 登入失敗:",n);let e="Google 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口";break;default:e="Google 登入失敗: "+n.message}alert(e)}}async function Ri(){console.log("Facebook 登入被點擊");try{const n=await np();console.log("Facebook 登入成功:",n.user),alert("Facebook 登入成功！");const e=bootstrap.Modal.getInstance(document.getElementById("loginModal"));e&&e.hide()}catch(n){console.error("Facebook 登入失敗:",n),alert("Facebook 登入失敗: "+n.message)}}window.openLoginModal=fp;window.togglePassword=pp;document.addEventListener("DOMContentLoaded",function(){console.log("DOM 載入完成");const n=document.getElementById("loginModal"),e=document.body;n.addEventListener("show.bs.modal",function(){document.querySelectorAll("body > *:not(.modal):not(.modal-backdrop)").forEach(l=>{l.style.filter="blur(15px)",l.style.transition="filter 0.3s ease"}),setTimeout(()=>{const l=document.querySelector(".modal-backdrop");l&&(l.style.backgroundColor="rgba(0, 0, 0, 0.3)")},100)}),n.addEventListener("hide.bs.modal",function(){document.querySelectorAll("body > *").forEach(l=>{l.style.filter="",l.style.transition=""}),e.classList.remove("modal-open-custom")}),document.getElementById("loginForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),h=l.get("email"),f=l.get("password");if(!h||!f){alert("請輸入電子郵件和密碼");return}try{const g=await ep(h,f);console.log("登入成功:",g.user),alert("登入成功！");const v=bootstrap.Modal.getInstance(n);v&&v.hide()}catch(g){console.error("登入失敗:",g);let v="登入失敗";switch(g.code){case"auth/user-not-found":v="找不到此帳號，請先註冊";break;case"auth/wrong-password":case"auth/invalid-credential":v="密碼錯誤或帳號不存在";break;case"auth/invalid-email":v="請輸入有效的電子郵件地址";break;default:v="登入失敗: "+g.message}alert(v)}}),document.getElementById("registerForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),h=l.get("name"),f=l.get("email"),g=l.get("password"),v=l.get("confirmPassword");if(!h||!f||!g||!v){alert("請填寫所有必填欄位");return}if(g!==v){alert("密碼和確認密碼不一致");return}if(g.length<6){alert("密碼至少需要6個字元");return}try{const _=await Zf(f,g);console.log("註冊成功:",_.user),alert("註冊成功！現在可以使用此帳號登入。");const b=bootstrap.Modal.getInstance(n);b&&b.hide(),this.reset()}catch(_){console.error("註冊失敗:",_);let b="註冊失敗";switch(_.code){case"auth/email-already-in-use":b="此電子郵件已被註冊";break;case"auth/invalid-email":b="請輸入有效的電子郵件地址";break;case"auth/weak-password":b="密碼強度不足，請使用更複雜的密碼";break;default:b="註冊失敗: "+_.message}alert(b)}});const t=document.getElementById("googleLoginBtn"),r=document.getElementById("facebookLoginBtn"),s=document.getElementById("googleRegisterBtn"),a=document.getElementById("facebookRegisterBtn");t&&(t.addEventListener("click",Li),console.log("Google 登入按鈕事件已綁定")),r&&(r.addEventListener("click",Ri),console.log("Facebook 登入按鈕事件已綁定")),s&&(s.addEventListener("click",Li),console.log("Google 註冊按鈕事件已綁定")),a&&(a.addEventListener("click",Ri),console.log("Facebook 註冊按鈕事件已綁定")),!t&&!s&&(console.log("使用備用方案綁定 Google 按鈕"),document.querySelectorAll(".social-btn .fa-google").forEach((l,h)=>{const f=l.closest("button");f&&(f.addEventListener("click",Li),console.log(`Google 按鈕 ${h+1} 事件已綁定`))})),!r&&!a&&(console.log("使用備用方案綁定 Facebook 按鈕"),document.querySelectorAll(".social-btn .fa-facebook-f").forEach((l,h)=>{const f=l.closest("button");f&&(f.addEventListener("click",Ri),console.log(`Facebook 按鈕 ${h+1} 事件已綁定`))}))});
