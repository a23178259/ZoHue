(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function al(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),t}var Un={exports:{}},z="top",ee="bottom",te="right",G="left",Qn="auto",Wt=[z,ee,te,G],mt="start",Mt="end",qs="clippingParents",zi="viewport",Pt="popper",zs="reference",Ni=Wt.reduce(function(n,e){return n.concat([e+"-"+mt,e+"-"+Mt])},[]),Gi=[].concat(Wt,[Qn]).reduce(function(n,e){return n.concat([e,e+"-"+mt,e+"-"+Mt])},[]),Gs="beforeRead",Ks="read",Ys="afterRead",Js="beforeMain",Xs="main",Qs="afterMain",Zs="beforeWrite",eo="write",to="afterWrite",no=[Gs,Ks,Ys,Js,Xs,Qs,Zs,eo,to];function ye(n){return n?(n.nodeName||"").toLowerCase():null}function ne(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function _t(n){var e=ne(n).Element;return n instanceof e||n instanceof Element}function ae(n){var e=ne(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Ki(n){if(typeof ShadowRoot>"u")return!1;var e=ne(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function cl(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var r=e.styles[t]||{},s=e.attributes[t]||{},a=e.elements[t];!ae(a)||!ye(a)||(Object.assign(a.style,r),Object.keys(s).forEach(function(c){var l=s[c];l===!1?a.removeAttribute(c):a.setAttribute(c,l===!0?"":l)}))})}function ll(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(r){var s=e.elements[r],a=e.attributes[r]||{},c=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:t[r]),l=c.reduce(function(h,f){return h[f]="",h},{});!ae(s)||!ye(s)||(Object.assign(s.style,l),Object.keys(a).forEach(function(h){s.removeAttribute(h)}))})}}const Yi={name:"applyStyles",enabled:!0,phase:"write",fn:cl,effect:ll,requires:["computeStyles"]};function me(n){return n.split("-")[0]}var gt=Math.max,Vn=Math.min,$t=Math.round;function xi(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function io(){return!/^((?!chrome|android).)*safari/i.test(xi())}function Ut(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var r=n.getBoundingClientRect(),s=1,a=1;e&&ae(n)&&(s=n.offsetWidth>0&&$t(r.width)/n.offsetWidth||1,a=n.offsetHeight>0&&$t(r.height)/n.offsetHeight||1);var c=_t(n)?ne(n):window,l=c.visualViewport,h=!io()&&t,f=(r.left+(h&&l?l.offsetLeft:0))/s,g=(r.top+(h&&l?l.offsetTop:0))/a,v=r.width/s,_=r.height/a;return{width:v,height:_,top:g,right:f+v,bottom:g+_,left:f,x:f,y:g}}function Ji(n){var e=Ut(n),t=n.offsetWidth,r=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:r}}function ro(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Ki(t)){var r=e;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Le(n){return ne(n).getComputedStyle(n)}function ul(n){return["table","td","th"].indexOf(ye(n))>=0}function Ve(n){return((_t(n)?n.ownerDocument:n.document)||window.document).documentElement}function Zn(n){return ye(n)==="html"?n:n.assignedSlot||n.parentNode||(Ki(n)?n.host:null)||Ve(n)}function ss(n){return!ae(n)||Le(n).position==="fixed"?null:n.offsetParent}function dl(n){var e=/firefox/i.test(xi()),t=/Trident/i.test(xi());if(t&&ae(n)){var r=Le(n);if(r.position==="fixed")return null}var s=Zn(n);for(Ki(s)&&(s=s.host);ae(s)&&["html","body"].indexOf(ye(s))<0;){var a=Le(s);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return s;s=s.parentNode}return null}function ln(n){for(var e=ne(n),t=ss(n);t&&ul(t)&&Le(t).position==="static";)t=ss(t);return t&&(ye(t)==="html"||ye(t)==="body"&&Le(t).position==="static")?e:t||dl(n)||e}function Xi(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function en(n,e,t){return gt(n,Vn(e,t))}function hl(n,e,t){var r=en(n,e,t);return r>t?t:r}function so(){return{top:0,right:0,bottom:0,left:0}}function oo(n){return Object.assign({},so(),n)}function ao(n,e){return e.reduce(function(t,r){return t[r]=n,t},{})}var fl=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,oo(typeof e!="number"?e:ao(e,Wt))};function pl(n){var e,t=n.state,r=n.name,s=n.options,a=t.elements.arrow,c=t.modifiersData.popperOffsets,l=me(t.placement),h=Xi(l),f=[G,te].indexOf(l)>=0,g=f?"height":"width";if(!(!a||!c)){var v=fl(s.padding,t),_=Ji(a),b=h==="y"?z:G,A=h==="y"?ee:te,P=t.rects.reference[g]+t.rects.reference[h]-c[h]-t.rects.popper[g],k=c[h]-t.rects.reference[h],L=ln(a),D=L?h==="y"?L.clientHeight||0:L.clientWidth||0:0,N=P/2-k/2,I=v[b],O=D-_[g]-v[A],S=D/2-_[g]/2+N,M=en(I,S,O),U=h;t.modifiersData[r]=(e={},e[U]=M,e.centerOffset=M-S,e)}}function gl(n){var e=n.state,t=n.options,r=t.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||ro(e.elements.popper,s)&&(e.elements.arrow=s))}const co={name:"arrow",enabled:!0,phase:"main",fn:pl,effect:gl,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Bt(n){return n.split("-")[1]}var ml={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _l(n,e){var t=n.x,r=n.y,s=e.devicePixelRatio||1;return{x:$t(t*s)/s||0,y:$t(r*s)/s||0}}function os(n){var e,t=n.popper,r=n.popperRect,s=n.placement,a=n.variation,c=n.offsets,l=n.position,h=n.gpuAcceleration,f=n.adaptive,g=n.roundOffsets,v=n.isFixed,_=c.x,b=_===void 0?0:_,A=c.y,P=A===void 0?0:A,k=typeof g=="function"?g({x:b,y:P}):{x:b,y:P};b=k.x,P=k.y;var L=c.hasOwnProperty("x"),D=c.hasOwnProperty("y"),N=G,I=z,O=window;if(f){var S=ln(t),M="clientHeight",U="clientWidth";if(S===ne(t)&&(S=Ve(t),Le(S).position!=="static"&&l==="absolute"&&(M="scrollHeight",U="scrollWidth")),S=S,s===z||(s===G||s===te)&&a===Mt){I=ee;var F=v&&S===O&&O.visualViewport?O.visualViewport.height:S[M];P-=F-r.height,P*=h?1:-1}if(s===G||(s===z||s===ee)&&a===Mt){N=te;var B=v&&S===O&&O.visualViewport?O.visualViewport.width:S[U];b-=B-r.width,b*=h?1:-1}}var H=Object.assign({position:l},f&&ml),q=g===!0?_l({x:b,y:P},ne(t)):{x:b,y:P};if(b=q.x,P=q.y,h){var j;return Object.assign({},H,(j={},j[I]=D?"0":"",j[N]=L?"0":"",j.transform=(O.devicePixelRatio||1)<=1?"translate("+b+"px, "+P+"px)":"translate3d("+b+"px, "+P+"px, 0)",j))}return Object.assign({},H,(e={},e[I]=D?P+"px":"",e[N]=L?b+"px":"",e.transform="",e))}function vl(n){var e=n.state,t=n.options,r=t.gpuAcceleration,s=r===void 0?!0:r,a=t.adaptive,c=a===void 0?!0:a,l=t.roundOffsets,h=l===void 0?!0:l,f={placement:me(e.placement),variation:Bt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,os(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:h})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,os(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Qi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vl,data:{}};var Mn={passive:!0};function yl(n){var e=n.state,t=n.instance,r=n.options,s=r.scroll,a=s===void 0?!0:s,c=r.resize,l=c===void 0?!0:c,h=ne(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&f.forEach(function(g){g.addEventListener("scroll",t.update,Mn)}),l&&h.addEventListener("resize",t.update,Mn),function(){a&&f.forEach(function(g){g.removeEventListener("scroll",t.update,Mn)}),l&&h.removeEventListener("resize",t.update,Mn)}}const Zi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yl,data:{}};var bl={left:"right",right:"left",bottom:"top",top:"bottom"};function Bn(n){return n.replace(/left|right|bottom|top/g,function(e){return bl[e]})}var wl={start:"end",end:"start"};function as(n){return n.replace(/start|end/g,function(e){return wl[e]})}function er(n){var e=ne(n),t=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:t,scrollTop:r}}function tr(n){return Ut(Ve(n)).left+er(n).scrollLeft}function El(n,e){var t=ne(n),r=Ve(n),s=t.visualViewport,a=r.clientWidth,c=r.clientHeight,l=0,h=0;if(s){a=s.width,c=s.height;var f=io();(f||!f&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:a,height:c,x:l+tr(n),y:h}}function Il(n){var e,t=Ve(n),r=er(n),s=(e=n.ownerDocument)==null?void 0:e.body,a=gt(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=gt(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),l=-r.scrollLeft+tr(n),h=-r.scrollTop;return Le(s||t).direction==="rtl"&&(l+=gt(t.clientWidth,s?s.clientWidth:0)-a),{width:a,height:c,x:l,y:h}}function nr(n){var e=Le(n),t=e.overflow,r=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+r)}function lo(n){return["html","body","#document"].indexOf(ye(n))>=0?n.ownerDocument.body:ae(n)&&nr(n)?n:lo(Zn(n))}function tn(n,e){var t;e===void 0&&(e=[]);var r=lo(n),s=r===((t=n.ownerDocument)==null?void 0:t.body),a=ne(r),c=s?[a].concat(a.visualViewport||[],nr(r)?r:[]):r,l=e.concat(c);return s?l:l.concat(tn(Zn(c)))}function Mi(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Tl(n,e){var t=Ut(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function cs(n,e,t){return e===zi?Mi(El(n,t)):_t(e)?Tl(e,t):Mi(Il(Ve(n)))}function Cl(n){var e=tn(Zn(n)),t=["absolute","fixed"].indexOf(Le(n).position)>=0,r=t&&ae(n)?ln(n):n;return _t(r)?e.filter(function(s){return _t(s)&&ro(s,r)&&ye(s)!=="body"}):[]}function Al(n,e,t,r){var s=e==="clippingParents"?Cl(n):[].concat(e),a=[].concat(s,[t]),c=a[0],l=a.reduce(function(h,f){var g=cs(n,f,r);return h.top=gt(g.top,h.top),h.right=Vn(g.right,h.right),h.bottom=Vn(g.bottom,h.bottom),h.left=gt(g.left,h.left),h},cs(n,c,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function uo(n){var e=n.reference,t=n.element,r=n.placement,s=r?me(r):null,a=r?Bt(r):null,c=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,h;switch(s){case z:h={x:c,y:e.y-t.height};break;case ee:h={x:c,y:e.y+e.height};break;case te:h={x:e.x+e.width,y:l};break;case G:h={x:e.x-t.width,y:l};break;default:h={x:e.x,y:e.y}}var f=s?Xi(s):null;if(f!=null){var g=f==="y"?"height":"width";switch(a){case mt:h[f]=h[f]-(e[g]/2-t[g]/2);break;case Mt:h[f]=h[f]+(e[g]/2-t[g]/2);break}}return h}function Ft(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=r===void 0?n.placement:r,a=t.strategy,c=a===void 0?n.strategy:a,l=t.boundary,h=l===void 0?qs:l,f=t.rootBoundary,g=f===void 0?zi:f,v=t.elementContext,_=v===void 0?Pt:v,b=t.altBoundary,A=b===void 0?!1:b,P=t.padding,k=P===void 0?0:P,L=oo(typeof k!="number"?k:ao(k,Wt)),D=_===Pt?zs:Pt,N=n.rects.popper,I=n.elements[A?D:_],O=Al(_t(I)?I:I.contextElement||Ve(n.elements.popper),h,g,c),S=Ut(n.elements.reference),M=uo({reference:S,element:N,placement:s}),U=Mi(Object.assign({},N,M)),F=_===Pt?U:S,B={top:O.top-F.top+L.top,bottom:F.bottom-O.bottom+L.bottom,left:O.left-F.left+L.left,right:F.right-O.right+L.right},H=n.modifiersData.offset;if(_===Pt&&H){var q=H[s];Object.keys(B).forEach(function(j){var pe=[te,ee].indexOf(j)>=0?1:-1,be=[z,ee].indexOf(j)>=0?"y":"x";B[j]+=q[be]*pe})}return B}function Sl(n,e){e===void 0&&(e={});var t=e,r=t.placement,s=t.boundary,a=t.rootBoundary,c=t.padding,l=t.flipVariations,h=t.allowedAutoPlacements,f=h===void 0?Gi:h,g=Bt(r),v=g?l?Ni:Ni.filter(function(A){return Bt(A)===g}):Wt,_=v.filter(function(A){return f.indexOf(A)>=0});_.length===0&&(_=v);var b=_.reduce(function(A,P){return A[P]=Ft(n,{placement:P,boundary:s,rootBoundary:a,padding:c})[me(P)],A},{});return Object.keys(b).sort(function(A,P){return b[A]-b[P]})}function kl(n){if(me(n)===Qn)return[];var e=Bn(n);return[as(n),e,as(e)]}function Ol(n){var e=n.state,t=n.options,r=n.name;if(!e.modifiersData[r]._skip){for(var s=t.mainAxis,a=s===void 0?!0:s,c=t.altAxis,l=c===void 0?!0:c,h=t.fallbackPlacements,f=t.padding,g=t.boundary,v=t.rootBoundary,_=t.altBoundary,b=t.flipVariations,A=b===void 0?!0:b,P=t.allowedAutoPlacements,k=e.options.placement,L=me(k),D=L===k,N=h||(D||!A?[Bn(k)]:kl(k)),I=[k].concat(N).reduce(function(m,ie){return m.concat(me(ie)===Qn?Sl(e,{placement:ie,boundary:g,rootBoundary:v,padding:f,flipVariations:A,allowedAutoPlacements:P}):ie)},[]),O=e.rects.reference,S=e.rects.popper,M=new Map,U=!0,F=I[0],B=0;B<I.length;B++){var H=I[B],q=me(H),j=Bt(H)===mt,pe=[z,ee].indexOf(q)>=0,be=pe?"width":"height",V=Ft(e,{placement:H,boundary:g,rootBoundary:v,altBoundary:_,padding:f}),Y=pe?j?te:G:j?ee:z;O[be]>S[be]&&(Y=Bn(Y));var Ye=Bn(Y),ge=[];if(a&&ge.push(V[q]<=0),l&&ge.push(V[Y]<=0,V[Ye]<=0),ge.every(function(m){return m})){F=H,U=!1;break}M.set(H,ge)}if(U)for(var Je=A?3:1,Xe=function(ie){var Ne=I.find(function(xe){var W=M.get(xe);if(W)return W.slice(0,ie).every(function(we){return we})});if(Ne)return F=Ne,"break"},Qe=Je;Qe>0;Qe--){var Ze=Xe(Qe);if(Ze==="break")break}e.placement!==F&&(e.modifiersData[r]._skip=!0,e.placement=F,e.reset=!0)}}const ho={name:"flip",enabled:!0,phase:"main",fn:Ol,requiresIfExists:["offset"],data:{_skip:!1}};function ls(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function us(n){return[z,te,ee,G].some(function(e){return n[e]>=0})}function Pl(n){var e=n.state,t=n.name,r=e.rects.reference,s=e.rects.popper,a=e.modifiersData.preventOverflow,c=Ft(e,{elementContext:"reference"}),l=Ft(e,{altBoundary:!0}),h=ls(c,r),f=ls(l,s,a),g=us(h),v=us(f);e.modifiersData[t]={referenceClippingOffsets:h,popperEscapeOffsets:f,isReferenceHidden:g,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":v})}const fo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Pl};function Ll(n,e,t){var r=me(n),s=[G,z].indexOf(r)>=0?-1:1,a=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,c=a[0],l=a[1];return c=c||0,l=(l||0)*s,[G,te].indexOf(r)>=0?{x:l,y:c}:{x:c,y:l}}function Rl(n){var e=n.state,t=n.options,r=n.name,s=t.offset,a=s===void 0?[0,0]:s,c=Gi.reduce(function(g,v){return g[v]=Ll(v,e.rects,a),g},{}),l=c[e.placement],h=l.x,f=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=h,e.modifiersData.popperOffsets.y+=f),e.modifiersData[r]=c}const po={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rl};function Dl(n){var e=n.state,t=n.name;e.modifiersData[t]=uo({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const ir={name:"popperOffsets",enabled:!0,phase:"read",fn:Dl,data:{}};function Nl(n){return n==="x"?"y":"x"}function xl(n){var e=n.state,t=n.options,r=n.name,s=t.mainAxis,a=s===void 0?!0:s,c=t.altAxis,l=c===void 0?!1:c,h=t.boundary,f=t.rootBoundary,g=t.altBoundary,v=t.padding,_=t.tether,b=_===void 0?!0:_,A=t.tetherOffset,P=A===void 0?0:A,k=Ft(e,{boundary:h,rootBoundary:f,padding:v,altBoundary:g}),L=me(e.placement),D=Bt(e.placement),N=!D,I=Xi(L),O=Nl(I),S=e.modifiersData.popperOffsets,M=e.rects.reference,U=e.rects.popper,F=typeof P=="function"?P(Object.assign({},e.rects,{placement:e.placement})):P,B=typeof F=="number"?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,q={x:0,y:0};if(S){if(a){var j,pe=I==="y"?z:G,be=I==="y"?ee:te,V=I==="y"?"height":"width",Y=S[I],Ye=Y+k[pe],ge=Y-k[be],Je=b?-U[V]/2:0,Xe=D===mt?M[V]:U[V],Qe=D===mt?-U[V]:-M[V],Ze=e.elements.arrow,m=b&&Ze?Ji(Ze):{width:0,height:0},ie=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:so(),Ne=ie[pe],xe=ie[be],W=en(0,M[V],m[V]),we=N?M[V]/2-Je-W-Ne-B.mainAxis:Xe-W-Ne-B.mainAxis,Q=N?-M[V]/2+Je+W+xe+B.mainAxis:Qe+W+xe+B.mainAxis,et=e.elements.arrow&&ln(e.elements.arrow),E=et?I==="y"?et.clientTop||0:et.clientLeft||0:0,tt=(j=H==null?void 0:H[I])!=null?j:0,_n=Y+we-tt-E,ci=Y+Q-tt,vn=en(b?Vn(Ye,_n):Ye,Y,b?gt(ge,ci):ge);S[I]=vn,q[I]=vn-Y}if(l){var Me,yn=I==="x"?z:G,nt=I==="x"?ee:te,J=S[O],Et=O==="y"?"height":"width",bn=J+k[yn],wn=J-k[nt],qt=[z,G].indexOf(L)!==-1,En=(Me=H==null?void 0:H[O])!=null?Me:0,In=qt?bn:J-M[Et]-U[Et]-En+B.altAxis,Tn=qt?J+M[Et]+U[Et]-En-B.altAxis:wn,it=b&&qt?hl(In,J,Tn):en(b?In:bn,J,b?Tn:wn);S[O]=it,q[O]=it-J}e.modifiersData[r]=q}}const go={name:"preventOverflow",enabled:!0,phase:"main",fn:xl,requiresIfExists:["offset"]};function Ml(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function $l(n){return n===ne(n)||!ae(n)?er(n):Ml(n)}function Ul(n){var e=n.getBoundingClientRect(),t=$t(e.width)/n.offsetWidth||1,r=$t(e.height)/n.offsetHeight||1;return t!==1||r!==1}function Bl(n,e,t){t===void 0&&(t=!1);var r=ae(e),s=ae(e)&&Ul(e),a=Ve(e),c=Ut(n,s,t),l={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(r||!r&&!t)&&((ye(e)!=="body"||nr(a))&&(l=$l(e)),ae(e)?(h=Ut(e,!0),h.x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=tr(a))),{x:c.left+l.scrollLeft-h.x,y:c.top+l.scrollTop-h.y,width:c.width,height:c.height}}function Fl(n){var e=new Map,t=new Set,r=[];n.forEach(function(a){e.set(a.name,a)});function s(a){t.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(l){if(!t.has(l)){var h=e.get(l);h&&s(h)}}),r.push(a)}return n.forEach(function(a){t.has(a.name)||s(a)}),r}function Hl(n){var e=Fl(n);return no.reduce(function(t,r){return t.concat(e.filter(function(s){return s.phase===r}))},[])}function jl(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function Wl(n){var e=n.reduce(function(t,r){var s=t[r.name];return t[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,t},{});return Object.keys(e).map(function(t){return e[t]})}var ds={placement:"bottom",modifiers:[],strategy:"absolute"};function hs(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function ei(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,r=t===void 0?[]:t,s=e.defaultOptions,a=s===void 0?ds:s;return function(l,h,f){f===void 0&&(f=a);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},ds,a),modifiersData:{},elements:{reference:l,popper:h},attributes:{},styles:{}},v=[],_=!1,b={state:g,setOptions:function(L){var D=typeof L=="function"?L(g.options):L;P(),g.options=Object.assign({},a,g.options,D),g.scrollParents={reference:_t(l)?tn(l):l.contextElement?tn(l.contextElement):[],popper:tn(h)};var N=Hl(Wl([].concat(r,g.options.modifiers)));return g.orderedModifiers=N.filter(function(I){return I.enabled}),A(),b.update()},forceUpdate:function(){if(!_){var L=g.elements,D=L.reference,N=L.popper;if(hs(D,N)){g.rects={reference:Bl(D,ln(N),g.options.strategy==="fixed"),popper:Ji(N)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(B){return g.modifiersData[B.name]=Object.assign({},B.data)});for(var I=0;I<g.orderedModifiers.length;I++){if(g.reset===!0){g.reset=!1,I=-1;continue}var O=g.orderedModifiers[I],S=O.fn,M=O.options,U=M===void 0?{}:M,F=O.name;typeof S=="function"&&(g=S({state:g,options:U,name:F,instance:b})||g)}}}},update:jl(function(){return new Promise(function(k){b.forceUpdate(),k(g)})}),destroy:function(){P(),_=!0}};if(!hs(l,h))return b;b.setOptions(f).then(function(k){!_&&f.onFirstUpdate&&f.onFirstUpdate(k)});function A(){g.orderedModifiers.forEach(function(k){var L=k.name,D=k.options,N=D===void 0?{}:D,I=k.effect;if(typeof I=="function"){var O=I({state:g,name:L,instance:b,options:N}),S=function(){};v.push(O||S)}})}function P(){v.forEach(function(k){return k()}),v=[]}return b}}var Vl=ei(),ql=[Zi,ir,Qi,Yi],zl=ei({defaultModifiers:ql}),Gl=[Zi,ir,Qi,Yi,po,ho,go,co,fo],Kl=ei({defaultModifiers:Gl});const Yl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Qs,afterRead:Ys,afterWrite:to,applyStyles:Yi,arrow:co,auto:Qn,basePlacements:Wt,beforeMain:Js,beforeRead:Gs,beforeWrite:Zs,bottom:ee,clippingParents:qs,computeStyles:Qi,createPopper:Kl,createPopperBase:Vl,createPopperLite:zl,detectOverflow:Ft,end:Mt,eventListeners:Zi,flip:ho,hide:fo,left:G,main:Xs,modifierPhases:no,offset:po,placements:Gi,popper:Pt,popperGenerator:ei,popperOffsets:ir,preventOverflow:go,read:Ks,reference:zs,right:te,start:mt,top:z,variationPlacements:Ni,viewport:zi,write:eo},Symbol.toStringTag,{value:"Module"})),Jl=al(Yl);/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xl=Un.exports,fs;function Ql(){return fs||(fs=1,function(n,e){(function(t,r){n.exports=r(Jl)})(Xl,function(t){function r(u){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const o in u)if(o!=="default"){const d=Object.getOwnPropertyDescriptor(u,o);Object.defineProperty(i,o,d.get?d:{enumerable:!0,get:()=>u[o]})}}return i.default=u,Object.freeze(i)}const s=r(t),a=new Map,c={set(u,i,o){a.has(u)||a.set(u,new Map);const d=a.get(u);d.has(i)||d.size===0?d.set(i,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)},get:(u,i)=>a.has(u)&&a.get(u).get(i)||null,remove(u,i){if(!a.has(u))return;const o=a.get(u);o.delete(i),o.size===0&&a.delete(u)}},l="transitionend",h=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(i,o)=>`#${CSS.escape(o)}`)),u),f=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),g=u=>{u.dispatchEvent(new Event(l))},v=u=>!(!u||typeof u!="object")&&(u.jquery!==void 0&&(u=u[0]),u.nodeType!==void 0),_=u=>v(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(h(u)):null,b=u=>{if(!v(u)||u.getClientRects().length===0)return!1;const i=getComputedStyle(u).getPropertyValue("visibility")==="visible",o=u.closest("details:not([open])");if(!o)return i;if(o!==u){const d=u.closest("summary");if(d&&d.parentNode!==o||d===null)return!1}return i},A=u=>!u||u.nodeType!==Node.ELEMENT_NODE||!!u.classList.contains("disabled")||(u.disabled!==void 0?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false"),P=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const i=u.getRootNode();return i instanceof ShadowRoot?i:null}return u instanceof ShadowRoot?u:u.parentNode?P(u.parentNode):null},k=()=>{},L=u=>{u.offsetHeight},D=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,N=[],I=()=>document.documentElement.dir==="rtl",O=u=>{var i;i=()=>{const o=D();if(o){const d=u.NAME,p=o.fn[d];o.fn[d]=u.jQueryInterface,o.fn[d].Constructor=u,o.fn[d].noConflict=()=>(o.fn[d]=p,u.jQueryInterface)}},document.readyState==="loading"?(N.length||document.addEventListener("DOMContentLoaded",()=>{for(const o of N)o()}),N.push(i)):i()},S=(u,i=[],o=u)=>typeof u=="function"?u.call(...i):o,M=(u,i,o=!0)=>{if(!o)return void S(u);const d=(w=>{if(!w)return 0;let{transitionDuration:R,transitionDelay:$}=window.getComputedStyle(w);const X=Number.parseFloat(R),Z=Number.parseFloat($);return X||Z?(R=R.split(",")[0],$=$.split(",")[0],1e3*(Number.parseFloat(R)+Number.parseFloat($))):0})(i)+5;let p=!1;const y=({target:w})=>{w===i&&(p=!0,i.removeEventListener(l,y),S(u))};i.addEventListener(l,y),setTimeout(()=>{p||g(i)},d)},U=(u,i,o,d)=>{const p=u.length;let y=u.indexOf(i);return y===-1?!o&&d?u[p-1]:u[0]:(y+=o?1:-1,d&&(y=(y+p)%p),u[Math.max(0,Math.min(y,p-1))])},F=/[^.]*(?=\..*)\.|.*/,B=/\..*/,H=/::\d+$/,q={};let j=1;const pe={mouseenter:"mouseover",mouseleave:"mouseout"},be=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function V(u,i){return i&&`${i}::${j++}`||u.uidEvent||j++}function Y(u){const i=V(u);return u.uidEvent=i,q[i]=q[i]||{},q[i]}function Ye(u,i,o=null){return Object.values(u).find(d=>d.callable===i&&d.delegationSelector===o)}function ge(u,i,o){const d=typeof i=="string",p=d?o:i||o;let y=Ze(u);return be.has(y)||(y=u),[d,p,y]}function Je(u,i,o,d,p){if(typeof i!="string"||!u)return;let[y,w,R]=ge(i,o,d);i in pe&&(w=(dt=>function(de){if(!de.relatedTarget||de.relatedTarget!==de.delegateTarget&&!de.delegateTarget.contains(de.relatedTarget))return dt.call(this,de)})(w));const $=Y(u),X=$[R]||($[R]={}),Z=Ye(X,w,y?o:null);if(Z)return void(Z.oneOff=Z.oneOff&&p);const ue=V(w,i.replace(F,"")),Te=y?function(Ce,dt,de){return function Xt(xn){const sl=Ce.querySelectorAll(dt);for(let{target:ht}=xn;ht&&ht!==this;ht=ht.parentNode)for(const ol of sl)if(ol===ht)return ie(xn,{delegateTarget:ht}),Xt.oneOff&&m.off(Ce,xn.type,dt,de),de.apply(ht,[xn])}}(u,o,w):function(Ce,dt){return function de(Xt){return ie(Xt,{delegateTarget:Ce}),de.oneOff&&m.off(Ce,Xt.type,dt),dt.apply(Ce,[Xt])}}(u,w);Te.delegationSelector=y?o:null,Te.callable=w,Te.oneOff=p,Te.uidEvent=ue,X[ue]=Te,u.addEventListener(R,Te,y)}function Xe(u,i,o,d,p){const y=Ye(i[o],d,p);y&&(u.removeEventListener(o,y,!!p),delete i[o][y.uidEvent])}function Qe(u,i,o,d){const p=i[o]||{};for(const[y,w]of Object.entries(p))y.includes(d)&&Xe(u,i,o,w.callable,w.delegationSelector)}function Ze(u){return u=u.replace(B,""),pe[u]||u}const m={on(u,i,o,d){Je(u,i,o,d,!1)},one(u,i,o,d){Je(u,i,o,d,!0)},off(u,i,o,d){if(typeof i!="string"||!u)return;const[p,y,w]=ge(i,o,d),R=w!==i,$=Y(u),X=$[w]||{},Z=i.startsWith(".");if(y===void 0){if(Z)for(const ue of Object.keys($))Qe(u,$,ue,i.slice(1));for(const[ue,Te]of Object.entries(X)){const Ce=ue.replace(H,"");R&&!i.includes(Ce)||Xe(u,$,w,Te.callable,Te.delegationSelector)}}else{if(!Object.keys(X).length)return;Xe(u,$,w,y,p?o:null)}},trigger(u,i,o){if(typeof i!="string"||!u)return null;const d=D();let p=null,y=!0,w=!0,R=!1;i!==Ze(i)&&d&&(p=d.Event(i,o),d(u).trigger(p),y=!p.isPropagationStopped(),w=!p.isImmediatePropagationStopped(),R=p.isDefaultPrevented());const $=ie(new Event(i,{bubbles:y,cancelable:!0}),o);return R&&$.preventDefault(),w&&u.dispatchEvent($),$.defaultPrevented&&p&&p.preventDefault(),$}};function ie(u,i={}){for(const[o,d]of Object.entries(i))try{u[o]=d}catch{Object.defineProperty(u,o,{configurable:!0,get:()=>d})}return u}function Ne(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function xe(u){return u.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}const W={setDataAttribute(u,i,o){u.setAttribute(`data-bs-${xe(i)}`,o)},removeDataAttribute(u,i){u.removeAttribute(`data-bs-${xe(i)}`)},getDataAttributes(u){if(!u)return{};const i={},o=Object.keys(u.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of o){let p=d.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1),i[p]=Ne(u.dataset[d])}return i},getDataAttribute:(u,i)=>Ne(u.getAttribute(`data-bs-${xe(i)}`))};class we{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(i){return i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i}_mergeConfigObj(i,o){const d=v(o)?W.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof d=="object"?d:{},...v(o)?W.getDataAttributes(o):{},...typeof i=="object"?i:{}}}_typeCheckConfig(i,o=this.constructor.DefaultType){for(const[d,p]of Object.entries(o)){const y=i[d],w=v(y)?"element":f(y);if(!new RegExp(p).test(w))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${d}" provided type "${w}" but expected type "${p}".`)}}}class Q extends we{constructor(i,o){super(),(i=_(i))&&(this._element=i,this._config=this._getConfig(o),c.set(this._element,this.constructor.DATA_KEY,this))}dispose(){c.remove(this._element,this.constructor.DATA_KEY),m.off(this._element,this.constructor.EVENT_KEY);for(const i of Object.getOwnPropertyNames(this))this[i]=null}_queueCallback(i,o,d=!0){M(i,o,d)}_getConfig(i){return i=this._mergeConfigObj(i,this._element),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}static getInstance(i){return c.get(_(i),this.DATA_KEY)}static getOrCreateInstance(i,o={}){return this.getInstance(i)||new this(i,typeof o=="object"?o:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(i){return`${i}${this.EVENT_KEY}`}}const et=u=>{let i=u.getAttribute("data-bs-target");if(!i||i==="#"){let o=u.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),i=o&&o!=="#"?o.trim():null}return i?i.split(",").map(o=>h(o)).join(","):null},E={find:(u,i=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(i,u)),findOne:(u,i=document.documentElement)=>Element.prototype.querySelector.call(i,u),children:(u,i)=>[].concat(...u.children).filter(o=>o.matches(i)),parents(u,i){const o=[];let d=u.parentNode.closest(i);for(;d;)o.push(d),d=d.parentNode.closest(i);return o},prev(u,i){let o=u.previousElementSibling;for(;o;){if(o.matches(i))return[o];o=o.previousElementSibling}return[]},next(u,i){let o=u.nextElementSibling;for(;o;){if(o.matches(i))return[o];o=o.nextElementSibling}return[]},focusableChildren(u){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(i,u).filter(o=>!A(o)&&b(o))},getSelectorFromElement(u){const i=et(u);return i&&E.findOne(i)?i:null},getElementFromSelector(u){const i=et(u);return i?E.findOne(i):null},getMultipleElementsFromSelector(u){const i=et(u);return i?E.find(i):[]}},tt=(u,i="hide")=>{const o=`click.dismiss${u.EVENT_KEY}`,d=u.NAME;m.on(document,o,`[data-bs-dismiss="${d}"]`,function(p){if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),A(this))return;const y=E.getElementFromSelector(this)||this.closest(`.${d}`);u.getOrCreateInstance(y)[i]()})},_n=".bs.alert",ci=`close${_n}`,vn=`closed${_n}`;class Me extends Q{static get NAME(){return"alert"}close(){if(m.trigger(this._element,ci).defaultPrevented)return;this._element.classList.remove("show");const i=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,i)}_destroyElement(){this._element.remove(),m.trigger(this._element,vn),this.dispose()}static jQueryInterface(i){return this.each(function(){const o=Me.getOrCreateInstance(this);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i](this)}})}}tt(Me,"close"),O(Me);const yn='[data-bs-toggle="button"]';class nt extends Q{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(i){return this.each(function(){const o=nt.getOrCreateInstance(this);i==="toggle"&&o[i]()})}}m.on(document,"click.bs.button.data-api",yn,u=>{u.preventDefault();const i=u.target.closest(yn);nt.getOrCreateInstance(i).toggle()}),O(nt);const J=".bs.swipe",Et=`touchstart${J}`,bn=`touchmove${J}`,wn=`touchend${J}`,qt=`pointerdown${J}`,En=`pointerup${J}`,In={endCallback:null,leftCallback:null,rightCallback:null},Tn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class it extends we{constructor(i,o){super(),this._element=i,i&&it.isSupported()&&(this._config=this._getConfig(o),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return In}static get DefaultType(){return Tn}static get NAME(){return"swipe"}dispose(){m.off(this._element,J)}_start(i){this._supportPointerEvents?this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX):this._deltaX=i.touches[0].clientX}_end(i){this._eventIsPointerPenTouch(i)&&(this._deltaX=i.clientX-this._deltaX),this._handleSwipe(),S(this._config.endCallback)}_move(i){this._deltaX=i.touches&&i.touches.length>1?0:i.touches[0].clientX-this._deltaX}_handleSwipe(){const i=Math.abs(this._deltaX);if(i<=40)return;const o=i/this._deltaX;this._deltaX=0,o&&S(o>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(m.on(this._element,qt,i=>this._start(i)),m.on(this._element,En,i=>this._end(i)),this._element.classList.add("pointer-event")):(m.on(this._element,Et,i=>this._start(i)),m.on(this._element,bn,i=>this._move(i)),m.on(this._element,wn,i=>this._end(i)))}_eventIsPointerPenTouch(i){return this._supportPointerEvents&&(i.pointerType==="pen"||i.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const $e=".bs.carousel",yr=".data-api",da="ArrowLeft",ha="ArrowRight",zt="next",It="prev",Tt="left",Cn="right",fa=`slide${$e}`,li=`slid${$e}`,pa=`keydown${$e}`,ga=`mouseenter${$e}`,ma=`mouseleave${$e}`,_a=`dragstart${$e}`,va=`load${$e}${yr}`,ya=`click${$e}${yr}`,br="carousel",An="active",wr=".active",Er=".carousel-item",ba=wr+Er,wa={[da]:Cn,[ha]:Tt},Ea={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ia={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ct extends Q{constructor(i,o){super(i,o),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=E.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===br&&this.cycle()}static get Default(){return Ea}static get DefaultType(){return Ia}static get NAME(){return"carousel"}next(){this._slide(zt)}nextWhenVisible(){!document.hidden&&b(this._element)&&this.next()}prev(){this._slide(It)}pause(){this._isSliding&&g(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?m.one(this._element,li,()=>this.cycle()):this.cycle())}to(i){const o=this._getItems();if(i>o.length-1||i<0)return;if(this._isSliding)return void m.one(this._element,li,()=>this.to(i));const d=this._getItemIndex(this._getActive());if(d===i)return;const p=i>d?zt:It;this._slide(p,o[i])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(i){return i.defaultInterval=i.interval,i}_addEventListeners(){this._config.keyboard&&m.on(this._element,pa,i=>this._keydown(i)),this._config.pause==="hover"&&(m.on(this._element,ga,()=>this.pause()),m.on(this._element,ma,()=>this._maybeEnableCycle())),this._config.touch&&it.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of E.find(".carousel-item img",this._element))m.on(o,_a,d=>d.preventDefault());const i={leftCallback:()=>this._slide(this._directionToOrder(Tt)),rightCallback:()=>this._slide(this._directionToOrder(Cn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new it(this._element,i)}_keydown(i){if(/input|textarea/i.test(i.target.tagName))return;const o=wa[i.key];o&&(i.preventDefault(),this._slide(this._directionToOrder(o)))}_getItemIndex(i){return this._getItems().indexOf(i)}_setActiveIndicatorElement(i){if(!this._indicatorsElement)return;const o=E.findOne(wr,this._indicatorsElement);o.classList.remove(An),o.removeAttribute("aria-current");const d=E.findOne(`[data-bs-slide-to="${i}"]`,this._indicatorsElement);d&&(d.classList.add(An),d.setAttribute("aria-current","true"))}_updateInterval(){const i=this._activeElement||this._getActive();if(!i)return;const o=Number.parseInt(i.getAttribute("data-bs-interval"),10);this._config.interval=o||this._config.defaultInterval}_slide(i,o=null){if(this._isSliding)return;const d=this._getActive(),p=i===zt,y=o||U(this._getItems(),d,p,this._config.wrap);if(y===d)return;const w=this._getItemIndex(y),R=ue=>m.trigger(this._element,ue,{relatedTarget:y,direction:this._orderToDirection(i),from:this._getItemIndex(d),to:w});if(R(fa).defaultPrevented||!d||!y)return;const $=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(w),this._activeElement=y;const X=p?"carousel-item-start":"carousel-item-end",Z=p?"carousel-item-next":"carousel-item-prev";y.classList.add(Z),L(y),d.classList.add(X),y.classList.add(X),this._queueCallback(()=>{y.classList.remove(X,Z),y.classList.add(An),d.classList.remove(An,Z,X),this._isSliding=!1,R(li)},d,this._isAnimated()),$&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return E.findOne(ba,this._element)}_getItems(){return E.find(Er,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(i){return I()?i===Tt?It:zt:i===Tt?zt:It}_orderToDirection(i){return I()?i===It?Tt:Cn:i===It?Cn:Tt}static jQueryInterface(i){return this.each(function(){const o=Ct.getOrCreateInstance(this,i);if(typeof i!="number"){if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}}else o.to(i)})}}m.on(document,ya,"[data-bs-slide], [data-bs-slide-to]",function(u){const i=E.getElementFromSelector(this);if(!i||!i.classList.contains(br))return;u.preventDefault();const o=Ct.getOrCreateInstance(i),d=this.getAttribute("data-bs-slide-to");return d?(o.to(d),void o._maybeEnableCycle()):W.getDataAttribute(this,"slide")==="next"?(o.next(),void o._maybeEnableCycle()):(o.prev(),void o._maybeEnableCycle())}),m.on(window,va,()=>{const u=E.find('[data-bs-ride="carousel"]');for(const i of u)Ct.getOrCreateInstance(i)}),O(Ct);const Gt=".bs.collapse",Ta=`show${Gt}`,Ca=`shown${Gt}`,Aa=`hide${Gt}`,Sa=`hidden${Gt}`,ka=`click${Gt}.data-api`,ui="show",At="collapse",Sn="collapsing",Oa=`:scope .${At} .${At}`,di='[data-bs-toggle="collapse"]',Pa={parent:null,toggle:!0},La={parent:"(null|element)",toggle:"boolean"};class St extends Q{constructor(i,o){super(i,o),this._isTransitioning=!1,this._triggerArray=[];const d=E.find(di);for(const p of d){const y=E.getSelectorFromElement(p),w=E.find(y).filter(R=>R===this._element);y!==null&&w.length&&this._triggerArray.push(p)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Pa}static get DefaultType(){return La}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let i=[];if(this._config.parent&&(i=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(p=>p!==this._element).map(p=>St.getOrCreateInstance(p,{toggle:!1}))),i.length&&i[0]._isTransitioning||m.trigger(this._element,Ta).defaultPrevented)return;for(const p of i)p.hide();const o=this._getDimension();this._element.classList.remove(At),this._element.classList.add(Sn),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const d=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Sn),this._element.classList.add(At,ui),this._element.style[o]="",m.trigger(this._element,Ca)},this._element,!0),this._element.style[o]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||m.trigger(this._element,Aa).defaultPrevented)return;const i=this._getDimension();this._element.style[i]=`${this._element.getBoundingClientRect()[i]}px`,L(this._element),this._element.classList.add(Sn),this._element.classList.remove(At,ui);for(const o of this._triggerArray){const d=E.getElementFromSelector(o);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([o],!1)}this._isTransitioning=!0,this._element.style[i]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Sn),this._element.classList.add(At),m.trigger(this._element,Sa)},this._element,!0)}_isShown(i=this._element){return i.classList.contains(ui)}_configAfterMerge(i){return i.toggle=!!i.toggle,i.parent=_(i.parent),i}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const i=this._getFirstLevelChildren(di);for(const o of i){const d=E.getElementFromSelector(o);d&&this._addAriaAndCollapsedClass([o],this._isShown(d))}}_getFirstLevelChildren(i){const o=E.find(Oa,this._config.parent);return E.find(i,this._config.parent).filter(d=>!o.includes(d))}_addAriaAndCollapsedClass(i,o){if(i.length)for(const d of i)d.classList.toggle("collapsed",!o),d.setAttribute("aria-expanded",o)}static jQueryInterface(i){const o={};return typeof i=="string"&&/show|hide/.test(i)&&(o.toggle=!1),this.each(function(){const d=St.getOrCreateInstance(this,o);if(typeof i=="string"){if(d[i]===void 0)throw new TypeError(`No method named "${i}"`);d[i]()}})}}m.on(document,ka,di,function(u){(u.target.tagName==="A"||u.delegateTarget&&u.delegateTarget.tagName==="A")&&u.preventDefault();for(const i of E.getMultipleElementsFromSelector(this))St.getOrCreateInstance(i,{toggle:!1}).toggle()}),O(St);const Ir="dropdown",rt=".bs.dropdown",hi=".data-api",Ra="ArrowUp",Tr="ArrowDown",Da=`hide${rt}`,Na=`hidden${rt}`,xa=`show${rt}`,Ma=`shown${rt}`,Cr=`click${rt}${hi}`,Ar=`keydown${rt}${hi}`,$a=`keyup${rt}${hi}`,kt="show",st='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ua=`${st}.${kt}`,kn=".dropdown-menu",Ba=I()?"top-end":"top-start",Fa=I()?"top-start":"top-end",Ha=I()?"bottom-end":"bottom-start",ja=I()?"bottom-start":"bottom-end",Wa=I()?"left-start":"right-start",Va=I()?"right-start":"left-start",qa={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},za={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class le extends Q{constructor(i,o){super(i,o),this._popper=null,this._parent=this._element.parentNode,this._menu=E.next(this._element,kn)[0]||E.prev(this._element,kn)[0]||E.findOne(kn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return qa}static get DefaultType(){return za}static get NAME(){return Ir}toggle(){return this._isShown()?this.hide():this.show()}show(){if(A(this._element)||this._isShown())return;const i={relatedTarget:this._element};if(!m.trigger(this._element,xa,i).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const o of[].concat(...document.body.children))m.on(o,"mouseover",k);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(kt),this._element.classList.add(kt),m.trigger(this._element,Ma,i)}}hide(){if(A(this._element)||!this._isShown())return;const i={relatedTarget:this._element};this._completeHide(i)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(i){if(!m.trigger(this._element,Da,i).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))m.off(o,"mouseover",k);this._popper&&this._popper.destroy(),this._menu.classList.remove(kt),this._element.classList.remove(kt),this._element.setAttribute("aria-expanded","false"),W.removeDataAttribute(this._menu,"popper"),m.trigger(this._element,Na,i)}}_getConfig(i){if(typeof(i=super._getConfig(i)).reference=="object"&&!v(i.reference)&&typeof i.reference.getBoundingClientRect!="function")throw new TypeError(`${Ir.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return i}_createPopper(){if(s===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let i=this._element;this._config.reference==="parent"?i=this._parent:v(this._config.reference)?i=_(this._config.reference):typeof this._config.reference=="object"&&(i=this._config.reference);const o=this._getPopperConfig();this._popper=s.createPopper(i,this._menu,o)}_isShown(){return this._menu.classList.contains(kt)}_getPlacement(){const i=this._parent;if(i.classList.contains("dropend"))return Wa;if(i.classList.contains("dropstart"))return Va;if(i.classList.contains("dropup-center"))return"top";if(i.classList.contains("dropdown-center"))return"bottom";const o=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return i.classList.contains("dropup")?o?Fa:Ba:o?ja:Ha}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(o=>Number.parseInt(o,10)):typeof i=="function"?o=>i(o,this._element):i}_getPopperConfig(){const i={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(W.setDataAttribute(this._menu,"popper","static"),i.modifiers=[{name:"applyStyles",enabled:!1}]),{...i,...S(this._config.popperConfig,[void 0,i])}}_selectMenuItem({key:i,target:o}){const d=E.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(p=>b(p));d.length&&U(d,o,i===Tr,!d.includes(o)).focus()}static jQueryInterface(i){return this.each(function(){const o=le.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}static clearMenus(i){if(i.button===2||i.type==="keyup"&&i.key!=="Tab")return;const o=E.find(Ua);for(const d of o){const p=le.getInstance(d);if(!p||p._config.autoClose===!1)continue;const y=i.composedPath(),w=y.includes(p._menu);if(y.includes(p._element)||p._config.autoClose==="inside"&&!w||p._config.autoClose==="outside"&&w||p._menu.contains(i.target)&&(i.type==="keyup"&&i.key==="Tab"||/input|select|option|textarea|form/i.test(i.target.tagName)))continue;const R={relatedTarget:p._element};i.type==="click"&&(R.clickEvent=i),p._completeHide(R)}}static dataApiKeydownHandler(i){const o=/input|textarea/i.test(i.target.tagName),d=i.key==="Escape",p=[Ra,Tr].includes(i.key);if(!p&&!d||o&&!d)return;i.preventDefault();const y=this.matches(st)?this:E.prev(this,st)[0]||E.next(this,st)[0]||E.findOne(st,i.delegateTarget.parentNode),w=le.getOrCreateInstance(y);if(p)return i.stopPropagation(),w.show(),void w._selectMenuItem(i);w._isShown()&&(i.stopPropagation(),w.hide(),y.focus())}}m.on(document,Ar,st,le.dataApiKeydownHandler),m.on(document,Ar,kn,le.dataApiKeydownHandler),m.on(document,Cr,le.clearMenus),m.on(document,$a,le.clearMenus),m.on(document,Cr,st,function(u){u.preventDefault(),le.getOrCreateInstance(this).toggle()}),O(le);const Sr="backdrop",kr="show",Or=`mousedown.bs.${Sr}`,Ga={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ka={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Pr extends we{constructor(i){super(),this._config=this._getConfig(i),this._isAppended=!1,this._element=null}static get Default(){return Ga}static get DefaultType(){return Ka}static get NAME(){return Sr}show(i){if(!this._config.isVisible)return void S(i);this._append();const o=this._getElement();this._config.isAnimated&&L(o),o.classList.add(kr),this._emulateAnimation(()=>{S(i)})}hide(i){this._config.isVisible?(this._getElement().classList.remove(kr),this._emulateAnimation(()=>{this.dispose(),S(i)})):S(i)}dispose(){this._isAppended&&(m.off(this._element,Or),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const i=document.createElement("div");i.className=this._config.className,this._config.isAnimated&&i.classList.add("fade"),this._element=i}return this._element}_configAfterMerge(i){return i.rootElement=_(i.rootElement),i}_append(){if(this._isAppended)return;const i=this._getElement();this._config.rootElement.append(i),m.on(i,Or,()=>{S(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(i){M(i,this._getElement(),this._config.isAnimated)}}const On=".bs.focustrap",Ya=`focusin${On}`,Ja=`keydown.tab${On}`,Lr="backward",Xa={autofocus:!0,trapElement:null},Qa={autofocus:"boolean",trapElement:"element"};class Rr extends we{constructor(i){super(),this._config=this._getConfig(i),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Xa}static get DefaultType(){return Qa}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),m.off(document,On),m.on(document,Ya,i=>this._handleFocusin(i)),m.on(document,Ja,i=>this._handleKeydown(i)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,m.off(document,On))}_handleFocusin(i){const{trapElement:o}=this._config;if(i.target===document||i.target===o||o.contains(i.target))return;const d=E.focusableChildren(o);d.length===0?o.focus():this._lastTabNavDirection===Lr?d[d.length-1].focus():d[0].focus()}_handleKeydown(i){i.key==="Tab"&&(this._lastTabNavDirection=i.shiftKey?Lr:"forward")}}const Dr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Nr=".sticky-top",Pn="padding-right",xr="margin-right";class fi{constructor(){this._element=document.body}getWidth(){const i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}hide(){const i=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Pn,o=>o+i),this._setElementAttributes(Dr,Pn,o=>o+i),this._setElementAttributes(Nr,xr,o=>o-i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Pn),this._resetElementAttributes(Dr,Pn),this._resetElementAttributes(Nr,xr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(i,o,d){const p=this.getWidth();this._applyManipulationCallback(i,y=>{if(y!==this._element&&window.innerWidth>y.clientWidth+p)return;this._saveInitialAttribute(y,o);const w=window.getComputedStyle(y).getPropertyValue(o);y.style.setProperty(o,`${d(Number.parseFloat(w))}px`)})}_saveInitialAttribute(i,o){const d=i.style.getPropertyValue(o);d&&W.setDataAttribute(i,o,d)}_resetElementAttributes(i,o){this._applyManipulationCallback(i,d=>{const p=W.getDataAttribute(d,o);p!==null?(W.removeDataAttribute(d,o),d.style.setProperty(o,p)):d.style.removeProperty(o)})}_applyManipulationCallback(i,o){if(v(i))o(i);else for(const d of E.find(i,this._element))o(d)}}const re=".bs.modal",Za=`hide${re}`,ec=`hidePrevented${re}`,Mr=`hidden${re}`,$r=`show${re}`,tc=`shown${re}`,nc=`resize${re}`,ic=`click.dismiss${re}`,rc=`mousedown.dismiss${re}`,sc=`keydown.dismiss${re}`,oc=`click${re}.data-api`,Ur="modal-open",Br="show",pi="modal-static",ac={backdrop:!0,focus:!0,keyboard:!0},cc={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ot extends Q{constructor(i,o){super(i,o),this._dialog=E.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fi,this._addEventListeners()}static get Default(){return ac}static get DefaultType(){return cc}static get NAME(){return"modal"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||this._isTransitioning||m.trigger(this._element,$r,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ur),this._adjustDialog(),this._backdrop.show(()=>this._showElement(i)))}hide(){this._isShown&&!this._isTransitioning&&(m.trigger(this._element,Za).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Br),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){m.off(window,re),m.off(this._dialog,re),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Pr({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Rr({trapElement:this._element})}_showElement(i){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const o=E.findOne(".modal-body",this._dialog);o&&(o.scrollTop=0),L(this._element),this._element.classList.add(Br),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,m.trigger(this._element,tc,{relatedTarget:i})},this._dialog,this._isAnimated())}_addEventListeners(){m.on(this._element,sc,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),m.on(window,nc,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),m.on(this._element,rc,i=>{m.one(this._element,ic,o=>{this._element===i.target&&this._element===o.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ur),this._resetAdjustments(),this._scrollBar.reset(),m.trigger(this._element,Mr)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(m.trigger(this._element,ec).defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(pi)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(pi),this._queueCallback(()=>{this._element.classList.remove(pi),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const i=this._element.scrollHeight>document.documentElement.clientHeight,o=this._scrollBar.getWidth(),d=o>0;if(d&&!i){const p=I()?"paddingLeft":"paddingRight";this._element.style[p]=`${o}px`}if(!d&&i){const p=I()?"paddingRight":"paddingLeft";this._element.style[p]=`${o}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(i,o){return this.each(function(){const d=ot.getOrCreateInstance(this,i);if(typeof i=="string"){if(d[i]===void 0)throw new TypeError(`No method named "${i}"`);d[i](o)}})}}m.on(document,oc,'[data-bs-toggle="modal"]',function(u){const i=E.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&u.preventDefault(),m.one(i,$r,d=>{d.defaultPrevented||m.one(i,Mr,()=>{b(this)&&this.focus()})});const o=E.findOne(".modal.show");o&&ot.getInstance(o).hide(),ot.getOrCreateInstance(i).toggle(this)}),tt(ot),O(ot);const Ee=".bs.offcanvas",Fr=".data-api",lc=`load${Ee}${Fr}`,Hr="show",jr="showing",Wr="hiding",Vr=".offcanvas.show",uc=`show${Ee}`,dc=`shown${Ee}`,hc=`hide${Ee}`,qr=`hidePrevented${Ee}`,zr=`hidden${Ee}`,fc=`resize${Ee}`,pc=`click${Ee}${Fr}`,gc=`keydown.dismiss${Ee}`,mc={backdrop:!0,keyboard:!0,scroll:!1},_c={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ie extends Q{constructor(i,o){super(i,o),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return mc}static get DefaultType(){return _c}static get NAME(){return"offcanvas"}toggle(i){return this._isShown?this.hide():this.show(i)}show(i){this._isShown||m.trigger(this._element,uc,{relatedTarget:i}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new fi().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(jr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Hr),this._element.classList.remove(jr),m.trigger(this._element,dc,{relatedTarget:i})},this._element,!0))}hide(){this._isShown&&(m.trigger(this._element,hc).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Wr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Hr,Wr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new fi().reset(),m.trigger(this._element,zr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const i=!!this._config.backdrop;return new Pr({className:"offcanvas-backdrop",isVisible:i,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:i?()=>{this._config.backdrop!=="static"?this.hide():m.trigger(this._element,qr)}:null})}_initializeFocusTrap(){return new Rr({trapElement:this._element})}_addEventListeners(){m.on(this._element,gc,i=>{i.key==="Escape"&&(this._config.keyboard?this.hide():m.trigger(this._element,qr))})}static jQueryInterface(i){return this.each(function(){const o=Ie.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i](this)}})}}m.on(document,pc,'[data-bs-toggle="offcanvas"]',function(u){const i=E.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),A(this))return;m.one(i,zr,()=>{b(this)&&this.focus()});const o=E.findOne(Vr);o&&o!==i&&Ie.getInstance(o).hide(),Ie.getOrCreateInstance(i).toggle(this)}),m.on(window,lc,()=>{for(const u of E.find(Vr))Ie.getOrCreateInstance(u).show()}),m.on(window,fc,()=>{for(const u of E.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(u).position!=="fixed"&&Ie.getOrCreateInstance(u).hide()}),tt(Ie),O(Ie);const Gr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vc=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),yc=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,bc=(u,i)=>{const o=u.nodeName.toLowerCase();return i.includes(o)?!vc.has(o)||!!yc.test(u.nodeValue):i.filter(d=>d instanceof RegExp).some(d=>d.test(o))},wc={allowList:Gr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ec={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ic={entry:"(string|element|function|null)",selector:"(string|element)"};class Tc extends we{constructor(i){super(),this._config=this._getConfig(i)}static get Default(){return wc}static get DefaultType(){return Ec}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(i=>this._resolvePossibleFunction(i)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(i){return this._checkContent(i),this._config.content={...this._config.content,...i},this}toHtml(){const i=document.createElement("div");i.innerHTML=this._maybeSanitize(this._config.template);for(const[p,y]of Object.entries(this._config.content))this._setContent(i,y,p);const o=i.children[0],d=this._resolvePossibleFunction(this._config.extraClass);return d&&o.classList.add(...d.split(" ")),o}_typeCheckConfig(i){super._typeCheckConfig(i),this._checkContent(i.content)}_checkContent(i){for(const[o,d]of Object.entries(i))super._typeCheckConfig({selector:o,entry:d},Ic)}_setContent(i,o,d){const p=E.findOne(d,i);p&&((o=this._resolvePossibleFunction(o))?v(o)?this._putElementInTemplate(_(o),p):this._config.html?p.innerHTML=this._maybeSanitize(o):p.textContent=o:p.remove())}_maybeSanitize(i){return this._config.sanitize?function(o,d,p){if(!o.length)return o;if(p&&typeof p=="function")return p(o);const y=new window.DOMParser().parseFromString(o,"text/html"),w=[].concat(...y.body.querySelectorAll("*"));for(const R of w){const $=R.nodeName.toLowerCase();if(!Object.keys(d).includes($)){R.remove();continue}const X=[].concat(...R.attributes),Z=[].concat(d["*"]||[],d[$]||[]);for(const ue of X)bc(ue,Z)||R.removeAttribute(ue.nodeName)}return y.body.innerHTML}(i,this._config.allowList,this._config.sanitizeFn):i}_resolvePossibleFunction(i){return S(i,[void 0,this])}_putElementInTemplate(i,o){if(this._config.html)return o.innerHTML="",void o.append(i);o.textContent=i.textContent}}const Cc=new Set(["sanitize","allowList","sanitizeFn"]),gi="fade",Ln="show",Ac=".tooltip-inner",Kr=".modal",Yr="hide.bs.modal",Kt="hover",mi="focus",_i="click",Sc={AUTO:"auto",TOP:"top",RIGHT:I()?"left":"right",BOTTOM:"bottom",LEFT:I()?"right":"left"},kc={allowList:Gr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Oc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class at extends Q{constructor(i,o){if(s===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(i,o),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return kc}static get DefaultType(){return Oc}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),m.off(this._element.closest(Kr),Yr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const i=m.trigger(this._element,this.constructor.eventName("show")),o=(P(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(i.defaultPrevented||!o)return;this._disposePopper();const d=this._getTipElement();this._element.setAttribute("aria-describedby",d.getAttribute("id"));const{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(d),m.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(d),d.classList.add(Ln),"ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))m.on(y,"mouseover",k);this._queueCallback(()=>{m.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!m.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Ln),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))m.off(i,"mouseover",k);this._activeTrigger[_i]=!1,this._activeTrigger[mi]=!1,this._activeTrigger[Kt]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),m.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(i){const o=this._getTemplateFactory(i).toHtml();if(!o)return null;o.classList.remove(gi,Ln),o.classList.add(`bs-${this.constructor.NAME}-auto`);const d=(p=>{do p+=Math.floor(1e6*Math.random());while(document.getElementById(p));return p})(this.constructor.NAME).toString();return o.setAttribute("id",d),this._isAnimated()&&o.classList.add(gi),o}setContent(i){this._newContent=i,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(i){return this._templateFactory?this._templateFactory.changeContent(i):this._templateFactory=new Tc({...this._config,content:i,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ac]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(i){return this.constructor.getOrCreateInstance(i.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(gi)}_isShown(){return this.tip&&this.tip.classList.contains(Ln)}_createPopper(i){const o=S(this._config.placement,[this,i,this._element]),d=Sc[o.toUpperCase()];return s.createPopper(this._element,i,this._getPopperConfig(d))}_getOffset(){const{offset:i}=this._config;return typeof i=="string"?i.split(",").map(o=>Number.parseInt(o,10)):typeof i=="function"?o=>i(o,this._element):i}_resolvePossibleFunction(i){return S(i,[this._element,this._element])}_getPopperConfig(i){const o={placement:i,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:d=>{this._getTipElement().setAttribute("data-popper-placement",d.state.placement)}}]};return{...o,...S(this._config.popperConfig,[void 0,o])}}_setListeners(){const i=this._config.trigger.split(" ");for(const o of i)if(o==="click")m.on(this._element,this.constructor.eventName("click"),this._config.selector,d=>{const p=this._initializeOnDelegatedTarget(d);p._activeTrigger[_i]=!(p._isShown()&&p._activeTrigger[_i]),p.toggle()});else if(o!=="manual"){const d=o===Kt?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),p=o===Kt?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");m.on(this._element,d,this._config.selector,y=>{const w=this._initializeOnDelegatedTarget(y);w._activeTrigger[y.type==="focusin"?mi:Kt]=!0,w._enter()}),m.on(this._element,p,this._config.selector,y=>{const w=this._initializeOnDelegatedTarget(y);w._activeTrigger[y.type==="focusout"?mi:Kt]=w._element.contains(y.relatedTarget),w._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},m.on(this._element.closest(Kr),Yr,this._hideModalHandler)}_fixTitle(){const i=this._element.getAttribute("title");i&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",i),this._element.setAttribute("data-bs-original-title",i),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(i,o){clearTimeout(this._timeout),this._timeout=setTimeout(i,o)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(i){const o=W.getDataAttributes(this._element);for(const d of Object.keys(o))Cc.has(d)&&delete o[d];return i={...o,...typeof i=="object"&&i?i:{}},i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i.container=i.container===!1?document.body:_(i.container),typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),typeof i.title=="number"&&(i.title=i.title.toString()),typeof i.content=="number"&&(i.content=i.content.toString()),i}_getDelegateConfig(){const i={};for(const[o,d]of Object.entries(this._config))this.constructor.Default[o]!==d&&(i[o]=d);return i.selector=!1,i.trigger="manual",i}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(i){return this.each(function(){const o=at.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}}O(at);const Pc=".popover-header",Lc=".popover-body",Rc={...at.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Dc={...at.DefaultType,content:"(null|string|element|function)"};class Rn extends at{static get Default(){return Rc}static get DefaultType(){return Dc}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Pc]:this._getTitle(),[Lc]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(i){return this.each(function(){const o=Rn.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i]()}})}}O(Rn);const vi=".bs.scrollspy",Nc=`activate${vi}`,Jr=`click${vi}`,xc=`load${vi}.data-api`,Ot="active",yi="[href]",Xr=".nav-link",Mc=`${Xr}, .nav-item > ${Xr}, .list-group-item`,$c={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Uc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Yt extends Q{constructor(i,o){super(i,o),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return $c}static get DefaultType(){return Uc}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const i of this._observableSections.values())this._observer.observe(i)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(i){return i.target=_(i.target)||document.body,i.rootMargin=i.offset?`${i.offset}px 0px -30%`:i.rootMargin,typeof i.threshold=="string"&&(i.threshold=i.threshold.split(",").map(o=>Number.parseFloat(o))),i}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(m.off(this._config.target,Jr),m.on(this._config.target,Jr,yi,i=>{const o=this._observableSections.get(i.target.hash);if(o){i.preventDefault();const d=this._rootElement||window,p=o.offsetTop-this._element.offsetTop;if(d.scrollTo)return void d.scrollTo({top:p,behavior:"smooth"});d.scrollTop=p}}))}_getNewObserver(){const i={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(o=>this._observerCallback(o),i)}_observerCallback(i){const o=w=>this._targetLinks.get(`#${w.target.id}`),d=w=>{this._previousScrollData.visibleEntryTop=w.target.offsetTop,this._process(o(w))},p=(this._rootElement||document.documentElement).scrollTop,y=p>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=p;for(const w of i){if(!w.isIntersecting){this._activeTarget=null,this._clearActiveClass(o(w));continue}const R=w.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(y&&R){if(d(w),!p)return}else y||R||d(w)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const i=E.find(yi,this._config.target);for(const o of i){if(!o.hash||A(o))continue;const d=E.findOne(decodeURI(o.hash),this._element);b(d)&&(this._targetLinks.set(decodeURI(o.hash),o),this._observableSections.set(o.hash,d))}}_process(i){this._activeTarget!==i&&(this._clearActiveClass(this._config.target),this._activeTarget=i,i.classList.add(Ot),this._activateParents(i),m.trigger(this._element,Nc,{relatedTarget:i}))}_activateParents(i){if(i.classList.contains("dropdown-item"))E.findOne(".dropdown-toggle",i.closest(".dropdown")).classList.add(Ot);else for(const o of E.parents(i,".nav, .list-group"))for(const d of E.prev(o,Mc))d.classList.add(Ot)}_clearActiveClass(i){i.classList.remove(Ot);const o=E.find(`${yi}.${Ot}`,i);for(const d of o)d.classList.remove(Ot)}static jQueryInterface(i){return this.each(function(){const o=Yt.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}})}}m.on(window,xc,()=>{for(const u of E.find('[data-bs-spy="scroll"]'))Yt.getOrCreateInstance(u)}),O(Yt);const ct=".bs.tab",Bc=`hide${ct}`,Fc=`hidden${ct}`,Hc=`show${ct}`,jc=`shown${ct}`,Wc=`click${ct}`,Vc=`keydown${ct}`,qc=`load${ct}`,zc="ArrowLeft",Qr="ArrowRight",Gc="ArrowUp",Zr="ArrowDown",bi="Home",es="End",lt="active",ts="fade",wi="show",ns=".dropdown-toggle",Ei=`:not(${ns})`,is='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ii=`.nav-link${Ei}, .list-group-item${Ei}, [role="tab"]${Ei}, ${is}`,Kc=`.${lt}[data-bs-toggle="tab"], .${lt}[data-bs-toggle="pill"], .${lt}[data-bs-toggle="list"]`;class ut extends Q{constructor(i){super(i),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),m.on(this._element,Vc,o=>this._keydown(o)))}static get NAME(){return"tab"}show(){const i=this._element;if(this._elemIsActive(i))return;const o=this._getActiveElem(),d=o?m.trigger(o,Bc,{relatedTarget:i}):null;m.trigger(i,Hc,{relatedTarget:o}).defaultPrevented||d&&d.defaultPrevented||(this._deactivate(o,i),this._activate(i,o))}_activate(i,o){i&&(i.classList.add(lt),this._activate(E.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.removeAttribute("tabindex"),i.setAttribute("aria-selected",!0),this._toggleDropDown(i,!0),m.trigger(i,jc,{relatedTarget:o})):i.classList.add(wi)},i,i.classList.contains(ts)))}_deactivate(i,o){i&&(i.classList.remove(lt),i.blur(),this._deactivate(E.getElementFromSelector(i)),this._queueCallback(()=>{i.getAttribute("role")==="tab"?(i.setAttribute("aria-selected",!1),i.setAttribute("tabindex","-1"),this._toggleDropDown(i,!1),m.trigger(i,Fc,{relatedTarget:o})):i.classList.remove(wi)},i,i.classList.contains(ts)))}_keydown(i){if(![zc,Qr,Gc,Zr,bi,es].includes(i.key))return;i.stopPropagation(),i.preventDefault();const o=this._getChildren().filter(p=>!A(p));let d;if([bi,es].includes(i.key))d=o[i.key===bi?0:o.length-1];else{const p=[Qr,Zr].includes(i.key);d=U(o,i.target,p,!0)}d&&(d.focus({preventScroll:!0}),ut.getOrCreateInstance(d).show())}_getChildren(){return E.find(Ii,this._parent)}_getActiveElem(){return this._getChildren().find(i=>this._elemIsActive(i))||null}_setInitialAttributes(i,o){this._setAttributeIfNotExists(i,"role","tablist");for(const d of o)this._setInitialAttributesOnChild(d)}_setInitialAttributesOnChild(i){i=this._getInnerElement(i);const o=this._elemIsActive(i),d=this._getOuterElement(i);i.setAttribute("aria-selected",o),d!==i&&this._setAttributeIfNotExists(d,"role","presentation"),o||i.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(i,"role","tab"),this._setInitialAttributesOnTargetPanel(i)}_setInitialAttributesOnTargetPanel(i){const o=E.getElementFromSelector(i);o&&(this._setAttributeIfNotExists(o,"role","tabpanel"),i.id&&this._setAttributeIfNotExists(o,"aria-labelledby",`${i.id}`))}_toggleDropDown(i,o){const d=this._getOuterElement(i);if(!d.classList.contains("dropdown"))return;const p=(y,w)=>{const R=E.findOne(y,d);R&&R.classList.toggle(w,o)};p(ns,lt),p(".dropdown-menu",wi),d.setAttribute("aria-expanded",o)}_setAttributeIfNotExists(i,o,d){i.hasAttribute(o)||i.setAttribute(o,d)}_elemIsActive(i){return i.classList.contains(lt)}_getInnerElement(i){return i.matches(Ii)?i:E.findOne(Ii,i)}_getOuterElement(i){return i.closest(".nav-item, .list-group-item")||i}static jQueryInterface(i){return this.each(function(){const o=ut.getOrCreateInstance(this);if(typeof i=="string"){if(o[i]===void 0||i.startsWith("_")||i==="constructor")throw new TypeError(`No method named "${i}"`);o[i]()}})}}m.on(document,Wc,is,function(u){["A","AREA"].includes(this.tagName)&&u.preventDefault(),A(this)||ut.getOrCreateInstance(this).show()}),m.on(window,qc,()=>{for(const u of E.find(Kc))ut.getOrCreateInstance(u)}),O(ut);const Ue=".bs.toast",Yc=`mouseover${Ue}`,Jc=`mouseout${Ue}`,Xc=`focusin${Ue}`,Qc=`focusout${Ue}`,Zc=`hide${Ue}`,el=`hidden${Ue}`,tl=`show${Ue}`,nl=`shown${Ue}`,rs="hide",Dn="show",Nn="showing",il={animation:"boolean",autohide:"boolean",delay:"number"},rl={animation:!0,autohide:!0,delay:5e3};class Jt extends Q{constructor(i,o){super(i,o),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rl}static get DefaultType(){return il}static get NAME(){return"toast"}show(){m.trigger(this._element,tl).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(rs),L(this._element),this._element.classList.add(Dn,Nn),this._queueCallback(()=>{this._element.classList.remove(Nn),m.trigger(this._element,nl),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(m.trigger(this._element,Zc).defaultPrevented||(this._element.classList.add(Nn),this._queueCallback(()=>{this._element.classList.add(rs),this._element.classList.remove(Nn,Dn),m.trigger(this._element,el)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Dn),super.dispose()}isShown(){return this._element.classList.contains(Dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(i,o){switch(i.type){case"mouseover":case"mouseout":this._hasMouseInteraction=o;break;case"focusin":case"focusout":this._hasKeyboardInteraction=o}if(o)return void this._clearTimeout();const d=i.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){m.on(this._element,Yc,i=>this._onInteraction(i,!0)),m.on(this._element,Jc,i=>this._onInteraction(i,!1)),m.on(this._element,Xc,i=>this._onInteraction(i,!0)),m.on(this._element,Qc,i=>this._onInteraction(i,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(i){return this.each(function(){const o=Jt.getOrCreateInstance(this,i);if(typeof i=="string"){if(o[i]===void 0)throw new TypeError(`No method named "${i}"`);o[i](this)}})}}return tt(Jt),O(Jt),{Alert:Me,Button:nt,Carousel:Ct,Collapse:St,Dropdown:le,Modal:ot,Offcanvas:Ie,Popover:Rn,ScrollSpy:Yt,Tab:ut,Toast:Jt,Tooltip:at}})}(Un)),Un.exports}Ql();const Zl=()=>{};var ps={};/**
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
 */const mo=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},eu=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],c=n[t++],l=n[t++],h=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,l=c?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,g=a>>2,v=(a&3)<<4|l>>4;let _=(l&15)<<2|f>>6,b=f&63;h||(b=64,c||(_=64)),r.push(t[g],t[v],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||l==null||f==null||v==null)throw new tu;const _=a<<2|l>>4;if(r.push(_),f!==64){const b=l<<4&240|f>>2;if(r.push(b),v!==64){const A=f<<6&192|v;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(n){const e=mo(n);return _o.encodeByteArray(e,!0)},vo=function(n){return nu(n).replace(/\./g,"")},yo=function(n){try{return _o.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ru=()=>iu().__FIREBASE_DEFAULTS__,su=()=>{if(typeof process>"u"||typeof ps>"u")return;const n=ps.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ou=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yo(n[1]);return e&&JSON.parse(e)},rr=()=>{try{return Zl()||ru()||su()||ou()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},au=n=>{var e,t;return(t=(e=rr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},bo=()=>{var n;return(n=rr())==null?void 0:n.config},wo=n=>{var e;return(e=rr())==null?void 0:e[`_${n}`]};/**
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
 */class cu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ti(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lu(n){return(await fetch(n,{credentials:"include"})).ok}const nn={};function uu(){const n={prod:[],emulator:[]};for(const e of Object.keys(nn))nn[e]?n.emulator.push(e):n.prod.push(e);return n}function du(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let gs=!1;function hu(n,e){if(typeof window>"u"||typeof document>"u"||!ti(window.location.host)||nn[n]===e||nn[n]||gs)return;nn[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",a=uu().prod.length>0;function c(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function f(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{gs=!0,c()},_}function g(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=du(r),b=t("text"),A=document.getElementById(b)||document.createElement("span"),P=t("learnmore"),k=document.getElementById(P)||document.createElement("a"),L=t("preprendIcon"),D=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const N=_.element;l(N),g(k,P);const I=f();h(D,L),N.append(D,A,k,I),document.body.appendChild(N)}a?(A.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function pu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _u(){const n=K();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vu(){try{return typeof indexedDB=="object"}catch{return!1}}function yu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)==null?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const bu="FirebaseError";class qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bu,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?wu(a,r):"Error",l=`${this.serviceName}: ${c} (${s}).`;return new qe(s,l,r)}}function wu(n,e){return n.replace(Eu,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Eu=/\{\$([^}]+)}/g;function Iu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ht(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],c=e[s];if(ms(a)&&ms(c)){if(!Ht(a,c))return!1}else if(a!==c)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ms(n){return n!==null&&typeof n=="object"}/**
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
 */function dn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Zt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Tu(n,e){const t=new Cu(n,e);return t.subscribe.bind(t)}class Cu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Au(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ti),s.error===void 0&&(s.error=Ti),s.complete===void 0&&(s.complete=Ti);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Au(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ti(){}/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ft="[DEFAULT]";/**
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
 */class Su{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ou(e))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ft){return this.instances.has(e)}getOptions(e=ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);r===l&&c.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ku(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ft){return this.component?this.component.multipleInstances?e:ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ku(n){return n===ft?void 0:n}function Ou(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Su(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Lu={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Ru=x.INFO,Du={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Nu=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Du[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=Ru,this._logHandler=Nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const xu=(n,e)=>e.some(t=>n instanceof t);let _s,vs;function Mu(){return _s||(_s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $u(){return vs||(vs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Io=new WeakMap,$i=new WeakMap,To=new WeakMap,Ci=new WeakMap,sr=new WeakMap;function Uu(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(je(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Io.set(t,n)}).catch(()=>{}),sr.set(e,n),e}function Bu(n){if($i.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});$i.set(n,e)}let Ui={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $i.get(n);if(e==="objectStoreNames")return n.objectStoreNames||To.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fu(n){Ui=n(Ui)}function Hu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ai(this),e,...t);return To.set(r,e.sort?e.sort():[e]),je(r)}:$u().includes(n)?function(...e){return n.apply(Ai(this),e),je(Io.get(this))}:function(...e){return je(n.apply(Ai(this),e))}}function ju(n){return typeof n=="function"?Hu(n):(n instanceof IDBTransaction&&Bu(n),xu(n,Mu())?new Proxy(n,Ui):n)}function je(n){if(n instanceof IDBRequest)return Uu(n);if(Ci.has(n))return Ci.get(n);const e=ju(n);return e!==n&&(Ci.set(n,e),sr.set(e,n)),e}const Ai=n=>sr.get(n);function Wu(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),l=je(c);return r&&c.addEventListener("upgradeneeded",h=>{r(je(c.result),h.oldVersion,h.newVersion,je(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{a&&h.addEventListener("close",()=>a()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Vu=["get","getKey","getAll","getAllKeys","count"],qu=["put","add","delete","clear"],Si=new Map;function ys(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Si.get(e))return Si.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qu.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vu.includes(t)))return;const a=async function(c,...l){const h=this.transaction(c,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),s&&h.done]))[0]};return Si.set(e,a),a}Fu(n=>({...n,get:(e,t,r)=>ys(e,t)||n.get(e,t,r),has:(e,t)=>!!ys(e,t)||n.has(e,t)}));/**
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
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gu(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",bs="0.14.3";/**
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
 */const Re=new Eo("@firebase/app"),Ku="@firebase/app-compat",Yu="@firebase/analytics-compat",Ju="@firebase/analytics",Xu="@firebase/app-check-compat",Qu="@firebase/app-check",Zu="@firebase/auth",ed="@firebase/auth-compat",td="@firebase/database",nd="@firebase/data-connect",id="@firebase/database-compat",rd="@firebase/functions",sd="@firebase/functions-compat",od="@firebase/installations",ad="@firebase/installations-compat",cd="@firebase/messaging",ld="@firebase/messaging-compat",ud="@firebase/performance",dd="@firebase/performance-compat",hd="@firebase/remote-config",fd="@firebase/remote-config-compat",pd="@firebase/storage",gd="@firebase/storage-compat",md="@firebase/firestore",_d="@firebase/ai",vd="@firebase/firestore-compat",yd="firebase",bd="12.3.0";/**
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
 */const Fi="[DEFAULT]",wd={[Bi]:"fire-core",[Ku]:"fire-core-compat",[Ju]:"fire-analytics",[Yu]:"fire-analytics-compat",[Qu]:"fire-app-check",[Xu]:"fire-app-check-compat",[Zu]:"fire-auth",[ed]:"fire-auth-compat",[td]:"fire-rtdb",[nd]:"fire-data-connect",[id]:"fire-rtdb-compat",[rd]:"fire-fn",[sd]:"fire-fn-compat",[od]:"fire-iid",[ad]:"fire-iid-compat",[cd]:"fire-fcm",[ld]:"fire-fcm-compat",[ud]:"fire-perf",[dd]:"fire-perf-compat",[hd]:"fire-rc",[fd]:"fire-rc-compat",[pd]:"fire-gcs",[gd]:"fire-gcs-compat",[md]:"fire-fst",[vd]:"fire-fst-compat",[_d]:"fire-vertex","fire-js":"fire-js",[yd]:"fire-js-all"};/**
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
 */const qn=new Map,Ed=new Map,Hi=new Map;function ws(n,e){try{n.container.addComponent(e)}catch(t){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sn(n){const e=n.name;if(Hi.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of qn.values())ws(t,n);for(const t of Ed.values())ws(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Id={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new un("app","Firebase",Id);/**
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
 */class Td{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
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
 */const hn=bd;function Ao(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Fi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(t||(t=bo()),!t)throw We.create("no-options");const a=qn.get(s);if(a){if(Ht(t,a.options)&&Ht(r,a.config))return a;throw We.create("duplicate-app",{appName:s})}const c=new Pu(s);for(const h of Hi.values())c.addComponent(h);const l=new Td(t,r,c);return qn.set(s,l),l}function Cd(n=Fi){const e=qn.get(n);if(!e&&n===Fi&&bo())return Ao();if(!e)throw We.create("no-app",{appName:n});return e}function Lt(n,e,t){let r=wd[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Re.warn(c.join(" "));return}sn(new jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ad="firebase-heartbeat-database",Sd=1,on="firebase-heartbeat-store";let ki=null;function So(){return ki||(ki=Wu(Ad,Sd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(on)}catch(t){console.warn(t)}}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),ki}async function kd(n){try{const t=(await So()).transaction(on),r=await t.objectStore(on).get(ko(n));return await t.done,r}catch(e){if(e instanceof qe)Re.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Re.warn(t.message)}}}async function Es(n,e){try{const r=(await So()).transaction(on,"readwrite");await r.objectStore(on).put(e,ko(n)),await r.done}catch(t){if(t instanceof qe)Re.warn(t.message);else{const r=We.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Re.warn(r.message)}}}function ko(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Od=1024,Pd=30;class Ld{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Is();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Pd){const c=Nd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Re.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Is(),{heartbeatsToSend:r,unsentEntries:s}=Rd(this._heartbeatsCache.heartbeats),a=vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Re.warn(t),""}}}function Is(){return new Date().toISOString().substring(0,10)}function Rd(n,e=Od){const t=[];let r=n.slice();for(const s of n){const a=t.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),Ts(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ts(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Dd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vu()?yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ts(n){return vo(JSON.stringify({version:2,heartbeats:n})).length}function Nd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function xd(n){sn(new jt("platform-logger",e=>new zu(e),"PRIVATE")),sn(new jt("heartbeat",e=>new Ld(e),"PRIVATE")),Lt(Bi,bs,n),Lt(Bi,bs,"esm2020"),Lt("fire-js","")}xd("");var Md="firebase",$d="12.3.0";/**
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
 */Lt(Md,$d,"app");function Oo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ud=Oo,Po=new un("auth","Firebase",Oo());/**
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
 */const zn=new Eo("@firebase/auth");function Bd(n,...e){zn.logLevel<=x.WARN&&zn.warn(`Auth (${hn}): ${n}`,...e)}function Fn(n,...e){zn.logLevel<=x.ERROR&&zn.error(`Auth (${hn}): ${n}`,...e)}/**
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
 */function ce(n,...e){throw ar(n,...e)}function fe(n,...e){return ar(n,...e)}function or(n,e,t){const r={...Ud(),[e]:t};return new un("auth","Firebase",r).create(e,{appName:n.name})}function Pe(n){return or(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fd(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ce(n,"argument-error"),or(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ar(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Po.create(n,...e)}function C(n,e,...t){if(!n)throw ar(e,...t)}function ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fn(e),new Error(e)}function De(n,e){n||ke(e)}/**
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
 */function ji(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Hd(){return Cs()==="http:"||Cs()==="https:"}function Cs(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function jd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hd()||gu()||"connection"in navigator)?navigator.onLine:!0}function Wd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fn{constructor(e,t){this.shortDelay=e,this.longDelay=t,De(t>e,"Short delay should be less than long delay!"),this.isMobile=fu()||mu()}get(){return jd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cr(n,e){De(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Lo{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zd=new fn(3e4,6e4);function ze(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ge(n,e,t,r,s={}){return Ro(n,s,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const l=dn({key:n.config.apiKey,...c}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...a};return pu()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&ti(n.emulatorConfig.host)&&(f.credentials="include"),Lo.fetch()(await Do(n,n.config.apiHost,t,l),f)})}async function Ro(n,e,t){n._canInitEmulator=!1;const r={...Vd,...e};try{const s=new Kd(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw $n(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const l=a.ok?c.errorMessage:c.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw $n(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw $n(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw $n(n,"user-disabled",c);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw or(n,g,f);ce(n,g)}}catch(s){if(s instanceof qe)throw s;ce(n,"network-request-failed",{message:String(s)})}}async function pn(n,e,t,r,s={}){const a=await Ge(n,e,t,r,s);return"mfaPendingCredential"in a&&ce(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Do(n,e,t,r){const s=`${e}${t}?${r}`,a=n,c=a.config.emulator?cr(n.config,s):`${n.config.apiScheme}://${s}`;return qd.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function Gd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),zd.get())})}}function $n(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=fe(n,e,r);return s.customData._tokenResponse=t,s}function As(n){return n!==void 0&&n.enterprise!==void 0}class Yd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jd(n,e){return Ge(n,"GET","/v2/recaptchaConfig",ze(n,e))}/**
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
 */async function Xd(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function Gn(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function rn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qd(n,e=!1){const t=bt(n),r=await t.getIdToken(e),s=lr(r);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:rn(Oi(s.auth_time)),issuedAtTime:rn(Oi(s.iat)),expirationTime:rn(Oi(s.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Oi(n){return Number(n)*1e3}function lr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fn("JWT malformed, contained fewer than 3 sections"),null;try{const s=yo(t);return s?JSON.parse(s):(Fn("Failed to decode base64 JWT payload"),null)}catch(s){return Fn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ss(n){const e=lr(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function an(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qe&&Zd(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class eh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rn(this.lastLoginAt),this.creationTime=rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kn(n){var v;const e=n.auth,t=await n.getIdToken(),r=await an(n,Gn(e,{idToken:t}));C(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=(v=s.providerUserInfo)!=null&&v.length?No(s.providerUserInfo):[],c=nh(n.providerData,a),l=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Wi(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function th(n){const e=bt(n);await Kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nh(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function No(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ih(n,e){const t=await Ro(n,{},async()=>{const r=dn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=await Do(n,s,"/v1/token",`key=${a}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:r};return n.emulatorConfig&&ti(n.emulatorConfig.host)&&(h.credentials="include"),Lo.fetch()(c,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rh(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",ze(n,e))}/**
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
 */class Rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ss(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(e.length!==0,"internal-error");const t=Ss(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await ih(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,c=new Rt;return r&&(C(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(C(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rt,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function Be(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class he{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new eh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await an(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qd(this,e)}reload(){return th(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new he({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Kn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Pe(this.auth));const e=await this.getIdToken();return await an(this,Xd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,l=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:A,stsTokenManager:P}=t;C(v&&P,e,"internal-error");const k=Rt.fromJSON(this.name,P);C(typeof v=="string",e,"internal-error"),Be(r,e.name),Be(s,e.name),C(typeof _=="boolean",e,"internal-error"),C(typeof b=="boolean",e,"internal-error"),Be(a,e.name),Be(c,e.name),Be(l,e.name),Be(h,e.name),Be(f,e.name),Be(g,e.name);const L=new he({uid:v,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:b,photoURL:c,phoneNumber:a,tenantId:l,stsTokenManager:k,createdAt:f,lastLoginAt:g});return A&&Array.isArray(A)&&(L.providerData=A.map(D=>({...D}))),h&&(L._redirectEventId=h),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new Rt;s.updateFromServerResponse(t);const a=new he({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Kn(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];C(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?No(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),l=new Rt;l.updateFromIdToken(r);const h=new he({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:c}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,f),h}}/**
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
 */const ks=new Map;function Oe(n){De(n instanceof Function,"Expected a class definition");let e=ks.get(n);return e?(De(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ks.set(n,e),e)}/**
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
 */class xo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xo.type="NONE";const Os=xo;/**
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
 */function Hn(n,e,t){return`firebase:${n}:${e}:${t}`}class Dt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Hn(this.userKey,s.apiKey,a),this.fullPersistenceKey=Hn("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gn(this.auth,{idToken:e}).catch(()=>{});return t?he._fromGetAccountInfoResponse(this.auth,t,e):null}return he._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Dt(Oe(Os),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let a=s[0]||Oe(Os);const c=Hn(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const g=await f._get(c);if(g){let v;if(typeof g=="string"){const _=await Gn(e,{idToken:g}).catch(()=>{});if(!_)break;v=await he._fromGetAccountInfoResponse(e,_,g)}else v=he._fromJSON(e,g);f!==a&&(l=v),a=f;break}}catch{}const h=s.filter(f=>f._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new Dt(a,e,r):(a=h[0],l&&await a._set(c,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==a)try{await f._remove(c)}catch{}})),new Dt(a,e,r))}}/**
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
 */function Ps(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ho(e))return"Blackberry";if(jo(e))return"Webos";if($o(e))return"Safari";if((e.includes("chrome/")||Uo(e))&&!e.includes("edge/"))return"Chrome";if(Fo(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mo(n=K()){return/firefox\//i.test(n)}function $o(n=K()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uo(n=K()){return/crios\//i.test(n)}function Bo(n=K()){return/iemobile/i.test(n)}function Fo(n=K()){return/android/i.test(n)}function Ho(n=K()){return/blackberry/i.test(n)}function jo(n=K()){return/webos/i.test(n)}function ur(n=K()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sh(n=K()){var e;return ur(n)&&!!((e=window.navigator)!=null&&e.standalone)}function oh(){return _u()&&document.documentMode===10}function Wo(n=K()){return ur(n)||Fo(n)||jo(n)||Ho(n)||/windows phone/i.test(n)||Bo(n)}/**
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
 */function Vo(n,e=[]){let t;switch(n){case"Browser":t=Ps(K());break;case"Worker":t=`${Ps(K())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hn}/${r}`}/**
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
 */class ah{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,l)=>{try{const h=e(a);c(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ch(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",ze(n,e))}/**
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
 */const lh=6;class uh{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class dh{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ls(this),this.idTokenSubscription=new Ls(this),this.beforeStateQueue=new ah(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Po,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Dt.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gn(this,{idToken:e}),r=await he._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(oe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(a=this.redirectUser)==null?void 0:a._redirectEventId,l=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===l)&&(h!=null&&h.user)&&(r=h.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(Pe(this));const t=e?bt(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ch(this),t=new uh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Dt.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(l,this,"internal-error"),l.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{c=!0,h()}}else{const h=e.addObserver(t);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Bd(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ke(n){return bt(n)}class Ls{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tu(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ni={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hh(n){ni=n}function qo(n){return ni.loadJS(n)}function fh(){return ni.recaptchaEnterpriseScript}function ph(){return ni.gapiScript}function gh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class mh{constructor(){this.enterprise=new _h}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _h{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vh="recaptcha-enterprise",zo="NO_RECAPTCHA";class yh{constructor(e){this.type=vh,this.auth=Ke(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,l)=>{Jd(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Yd(h);return a.tenantId==null?a._agentRecaptchaConfig=f:a._tenantRecaptchaConfigs[a.tenantId]=f,c(f.siteKey)}}).catch(h=>{l(h)})})}function s(a,c,l){const h=window.grecaptcha;As(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(f=>{c(f)}).catch(()=>{c(zo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mh().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(l=>{if(!t&&As(window.grecaptcha))s(l,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=fh();h.length!==0&&(h+=l),qo(h).then(()=>{s(l,a,c)}).catch(f=>{c(f)})}}).catch(l=>{c(l)})})}}async function Rs(n,e,t,r=!1,s=!1){const a=new yh(n);let c;if(s)c=zo;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const h=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const h=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:c}):Object.assign(l,{captchaResponse:c}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Vi(n,e,t,r,s){var a;if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Rs(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Rs(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)})}/**
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
 */function bh(n,e){const t=Co(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ht(a,e??{}))return s;ce(s,"already-initialized")}return t.initialize({options:e})}function wh(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Eh(n,e,t){const r=Ke(n);C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=Go(e),{host:c,port:l}=Ih(e),h=l===null?"":`:${l}`,f={url:`${a}//${c}${h}/`},g=Object.freeze({host:c,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){C(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),C(Ht(f,r.config.emulator)&&Ht(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,ti(c)?(lu(`${a}//${c}${h}`),hu("Auth",!0)):Th()}function Go(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ih(n){const e=Go(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Ds(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Ds(c)}}}function Ds(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Th(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class dr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,t){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}async function Ch(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ah(n,e){return pn(n,"POST","/v1/accounts:signInWithPassword",ze(n,e))}/**
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
 */async function Sh(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,e))}async function kh(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",ze(n,e))}/**
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
 */class cn extends dr{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new cn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new cn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vi(e,t,"signInWithPassword",Ah);case"emailLink":return Sh(e,{email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vi(e,r,"signUpPassword",Ch);case"emailLink":return kh(e,{idToken:t,email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nt(n,e){return pn(n,"POST","/v1/accounts:signInWithIdp",ze(n,e))}/**
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
 */const Oh="http://localhost";class vt extends dr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...a}=t;if(!r||!s)return null;const c=new vt(r,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:Oh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dn(t)}return e}}/**
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
 */function Ph(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lh(n){const e=Qt(Zt(n)).link,t=e?Qt(Zt(e)).deep_link_id:null,r=Qt(Zt(n)).deep_link_id;return(r?Qt(Zt(r)).link:null)||r||t||e||n}class hr{constructor(e){const t=Qt(Zt(e)),r=t.apiKey??null,s=t.oobCode??null,a=Ph(t.mode??null);C(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Lh(e);try{return new hr(t)}catch{return null}}}/**
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
 */class Vt{constructor(){this.providerId=Vt.PROVIDER_ID}static credential(e,t){return cn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=hr.parseLink(t);return C(r,"argument-error"),cn._fromEmailAndCode(e,r.code,r.tenantId)}}Vt.PROVIDER_ID="password";Vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gn extends fr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends gn{constructor(){super("facebook.com")}static credential(e){return vt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Ae extends gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vt._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ae.credential(t,r)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
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
 */class Se extends gn{constructor(){super("github.com")}static credential(e){return vt._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com";Se.PROVIDER_ID="github.com";/**
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
 */class He extends gn{constructor(){super("twitter.com")}static credential(e,t){return vt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return He.credential(t,r)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
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
 */async function Rh(n,e){return pn(n,"POST","/v1/accounts:signUp",ze(n,e))}/**
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
 */class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await he._fromIdTokenResponse(e,r,s),c=Ns(r);return new yt({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ns(r);return new yt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ns(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Yn extends qe{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Yn(e,t,r,s)}}function Ko(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Yn._fromErrorAndOperation(n,a,e,r):a})}async function Dh(n,e,t=!1){const r=await an(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yt._forOperation(n,"link",r)}/**
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
 */async function Nh(n,e,t=!1){const{auth:r}=n;if(oe(r.app))return Promise.reject(Pe(r));const s="reauthenticate";try{const a=await an(n,Ko(r,s,e,n),t);C(a.idToken,r,"internal-error");const c=lr(a.idToken);C(c,r,"internal-error");const{sub:l}=c;return C(n.uid===l,r,"user-mismatch"),yt._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ce(r,"user-mismatch"),a}}/**
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
 */async function Yo(n,e,t=!1){if(oe(n.app))return Promise.reject(Pe(n));const r="signIn",s=await Ko(n,r,e),a=await yt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function xh(n,e){return Yo(Ke(n),e)}/**
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
 */async function Jo(n){const e=Ke(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mh(n,e,t){if(oe(n.app))return Promise.reject(Pe(n));const r=Ke(n),c=await Vi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rh).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Jo(n),h}),l=await yt._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(l.user),l}function $h(n,e,t){return oe(n.app)?Promise.reject(Pe(n)):xh(bt(n),Vt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jo(n),r})}function Uh(n,e,t,r){return bt(n).onIdTokenChanged(e,t,r)}function Bh(n,e,t){return bt(n).beforeAuthStateChanged(e,t)}const Jn="__sak";/**
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
 */class Xo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jn,"1"),this.storage.removeItem(Jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fh=1e3,Hh=10;class Qo extends Xo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,l,h)=>{this.notifyListeners(c,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);oh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Hh):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qo.type="LOCAL";const jh=Qo;/**
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
 */class Zo extends Xo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zo.type="SESSION";const ea=Zo;/**
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
 */function Wh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(c).map(async f=>f(t.origin,a)),h=await Wh(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
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
 */function pr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((l,h)=>{const f=pr("",20);s.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);c={messageChannel:s,onMessage(v){const _=v;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),l(_.data.response);break;default:clearTimeout(g),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function _e(){return window}function qh(n){_e().location.href=n}/**
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
 */function ta(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function zh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Kh(){return ta()?self:null}/**
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
 */const na="firebaseLocalStorageDb",Yh=1,Xn="firebaseLocalStorage",ia="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ri(n,e){return n.transaction([Xn],e?"readwrite":"readonly").objectStore(Xn)}function Jh(){const n=indexedDB.deleteDatabase(na);return new mn(n).toPromise()}function qi(){const n=indexedDB.open(na,Yh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xn,{keyPath:ia})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xn)?e(r):(r.close(),await Jh(),e(await qi()))})})}async function xs(n,e,t){const r=ri(n,!0).put({[ia]:e,value:t});return new mn(r).toPromise()}async function Xh(n,e){const t=ri(n,!1).get(e),r=await new mn(t).toPromise();return r===void 0?null:r.value}function Ms(n,e){const t=ri(n,!0).delete(e);return new mn(t).toPromise()}const Qh=800,Zh=3;class ra{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Zh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ta()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(Kh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Vh(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qi();return await xs(e,Jn,"1"),await Ms(e,Jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xh(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ms(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=ri(s,!1).getAll();return new mn(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ra.type="LOCAL";const ef=ra;new fn(3e4,6e4);/**
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
 */function sa(n,e){return e?Oe(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gr extends dr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tf(n){return Yo(n.auth,new gr(n),n.bypassAuthState)}function nf(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Nh(t,new gr(n),n.bypassAuthState)}async function rf(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Dh(t,new gr(n),n.bypassAuthState)}/**
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
 */class oa{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:c,type:l}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tf;case"linkViaPopup":case"linkViaRedirect":return rf;case"reauthViaPopup":case"reauthViaRedirect":return nf;default:ce(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sf=new fn(2e3,1e4);async function aa(n,e,t){if(oe(n.app))return Promise.reject(fe(n,"operation-not-supported-in-this-environment"));const r=Ke(n);Fd(n,e,fr);const s=sa(r,t);return new pt(r,"signInViaPopup",e,s).executeNotNull()}class pt extends oa{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){De(this.filter.length===1,"Popup operations only handle one event");const e=pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sf.get())};e()}}pt.currentPopupAction=null;/**
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
 */const of="pendingRedirect",jn=new Map;class af extends oa{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=jn.get(this.auth._key());if(!e){try{const r=await cf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}jn.set(this.auth._key(),e)}return this.bypassAuthState||jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cf(n,e){const t=df(e),r=uf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function lf(n,e){jn.set(n._key(),e)}function uf(n){return Oe(n._redirectPersistence)}function df(n){return Hn(of,n.config.apiKey,n.name)}async function hf(n,e,t=!1){if(oe(n.app))return Promise.reject(Pe(n));const r=Ke(n),s=sa(r,e),c=await new af(r,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const ff=10*60*1e3;class pf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ca(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ff&&this.cachedEventUids.clear(),this.cachedEventUids.has($s(e))}saveEventToCache(e){this.cachedEventUids.add($s(e)),this.lastProcessedEventTime=Date.now()}}function $s(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ca({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ca(n);default:return!1}}/**
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
 */async function mf(n,e={}){return Ge(n,"GET","/v1/projects",e)}/**
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
 */const _f=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vf=/^https?/;async function yf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mf(n);for(const t of e)try{if(bf(t))return}catch{}ce(n,"unauthorized-domain")}function bf(n){const e=ji(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!vf.test(t))return!1;if(_f.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wf=new fn(3e4,6e4);function Us(){const n=_e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ef(n){return new Promise((e,t)=>{var s,a,c;function r(){Us(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Us(),t(fe(n,"network-request-failed"))},timeout:wf.get()})}if((a=(s=_e().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((c=_e().gapi)!=null&&c.load)r();else{const l=gh("iframefcb");return _e()[l]=()=>{gapi.load?r():t(fe(n,"network-request-failed"))},qo(`${ph()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Wn=null,e})}let Wn=null;function If(n){return Wn=Wn||Ef(n),Wn}/**
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
 */const Tf=new fn(5e3,15e3),Cf="__/auth/iframe",Af="emulator/auth/iframe",Sf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Of(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cr(e,Af):`https://${n.config.authDomain}/${Cf}`,r={apiKey:e.apiKey,appName:n.name,v:hn},s=kf.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${dn(r).slice(1)}`}async function Pf(n){const e=await If(n),t=_e().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:Of(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sf,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const c=fe(n,"network-request-failed"),l=_e().setTimeout(()=>{a(c)},Tf.get());function h(){_e().clearTimeout(l),s(r)}r.ping(h).then(h,()=>{a(c)})}))}/**
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
 */const Lf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rf=500,Df=600,Nf="_blank",xf="http://localhost";class Bs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mf(n,e,t,r=Rf,s=Df){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h={...Lf,width:r.toString(),height:s.toString(),top:a,left:c},f=K().toLowerCase();t&&(l=Uo(f)?Nf:t),Mo(f)&&(e=e||xf,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[b,A])=>`${_}${b}=${A},`,"");if(sh(f)&&l!=="_self")return $f(e||"",l),new Bs(null);const v=window.open(e||"",l,g);C(v,n,"popup-blocked");try{v.focus()}catch{}return new Bs(v)}function $f(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Uf="__/auth/handler",Bf="emulator/auth/handler",Ff=encodeURIComponent("fac");async function Fs(n,e,t,r,s,a){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hn,eventId:s};if(e instanceof fr){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Iu(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries({}))c[g]=v}if(e instanceof gn){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(c.scopes=g.join(","))}n.tenantId&&(c.tid=n.tenantId);const l=c;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const h=await n._getAppCheckToken(),f=h?`#${Ff}=${encodeURIComponent(h)}`:"";return`${Hf(n)}?${dn(l).slice(1)}${f}`}function Hf({config:n}){return n.emulator?cr(n,Bf):`https://${n.authDomain}/${Uf}`}/**
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
 */const Pi="webStorageSupport";class jf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ea,this._completeRedirectFn=hf,this._overrideRedirectResult=lf}async _openPopup(e,t,r,s){var c;De((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const a=await Fs(e,t,r,ji(),s);return Mf(e,a,pr())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await Fs(e,t,r,ji(),s);return qh(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(De(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pf(e),r=new pf(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pi,{type:Pi},s=>{var c;const a=(c=s==null?void 0:s[0])==null?void 0:c[Pi];a!==void 0&&t(!!a),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wo()||$o()||ur()}}const Wf=jf;var Hs="@firebase/auth",js="1.11.0";/**
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
 */class Vf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zf(n){sn(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:l}=r.options;C(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:c,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vo(n)},f=new dh(r,s,a,h);return wh(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sn(new jt("auth-internal",e=>{const t=Ke(e.getProvider("auth").getImmediate());return(r=>new Vf(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Hs,js,qf(n)),Lt(Hs,js,"esm2020")}/**
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
 */const Gf=5*60,Kf=wo("authIdTokenMaxAge")||Gf;let Ws=null;const Yf=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Kf)return;const s=t==null?void 0:t.token;Ws!==s&&(Ws=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jf(n=Cd()){const e=Co(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bh(n,{popupRedirectResolver:Wf,persistence:[ef,jh,ea]}),r=wo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Yf(a.toString());Bh(t,c,()=>c(t.currentUser)),Uh(t,l=>c(l))}}const s=au("auth");return s&&Eh(t,`http://${s}`),t}function Xf(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}hh({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=fe("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",Xf().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zf("Browser");const Qf={apiKey:"AIzaSyBABJUTpmf11FR96mfhpumXk5APDx22Xsk",authDomain:"zohue-auth.firebaseapp.com",projectId:"zohue-auth",storageBucket:"zohue-auth.firebasestorage.app",messagingSenderId:"438985606953",appId:"1:438985606953:web:b5cb8ca6e94d05097c1938",measurementId:"G-6QV1MNLQ0W"},Zf=Ao(Qf),si=Jf(Zf),ep=()=>{const n=new Se;return aa(si,n)},tp=(n,e)=>Mh(si,n,e),np=(n,e)=>$h(si,n,e),ip=async()=>{const n=new Ae;try{const e=await aa(si,n);return console.log("Google 登入成功:",e.user),e}catch(e){throw console.error("Google 登入失敗:",e),e}},wt=[{id:1,title:"初心",subtitle:"はじめ",volunteer:"林美玲",role:"英語教學志工",story:"第一次踏進偏鄉小學，看見孩子們渴望學習的眼神，我知道這就是我想做的事。",quote:"教育不是填滿水桶，而是點燃火焰。",image:"🌸",imageUrl:"https://picsum.photos/id/180/767/470",stats:{students:32,hours:128,years:2}},{id:2,title:"成長",subtitle:"せいちょう",volunteer:"陳志明",role:"程式設計導師",story:"從一個害羞的工程師，到能夠站在講台上分享知識，這段旅程改變了我。",quote:"在教學中，我們不只是老師，更是永遠的學生。",image:"🌿",imageUrl:"https://picsum.photos/id/160/767/470",stats:{students:45,hours:256,years:3}},{id:3,title:"感動",subtitle:"かんどう",volunteer:"王雅琪",role:"美術創作老師",story:"當學生第一次完成作品時的笑容，是我繼續前進的最大動力。",quote:"藝術讓孩子看見世界的美好，也看見自己的可能。",image:"🎨",imageUrl:"https://picsum.photos/id/184/767/470",stats:{students:28,hours:96,years:1}},{id:4,title:"堅持",subtitle:"けんじ",volunteer:"李建華",role:"數學輔導老師",story:"即使遇到挫折，看到學生進步的那一刻，所有的努力都值得了。",quote:"堅持不是因為看到希望才堅持，而是堅持了才看到希望。",image:"💪",imageUrl:"https://picsum.photos/id/188/767/470",stats:{students:38,hours:180,years:4}},{id:5,title:"希望",subtitle:"きぼう",volunteer:"張淑芬",role:"閱讀推廣志工",story:"每一本書都是一扇窗，讓孩子們看見更廣闊的世界。",quote:"閱讀是給孩子最好的禮物，知識是他們飛翔的翅膀。",image:"📚",imageUrl:"https://picsum.photos/id/24/767/470",stats:{students:52,hours:320,years:5}},{id:6,title:"傳承",subtitle:"でんしょう",volunteer:"劉永祥",role:"資深志工導師",story:"看著新志工們成長，就像看見自己當年的模樣，這份愛會一直傳下去。",quote:"最好的傳承不是給予，而是啟發他人也成為給予者。",image:"🌟",imageUrl:"https://picsum.photos/id/177/767/470",stats:{students:120,hours:500,years:8}}];let ve=0,xt=!1,mr=!1,Vs=0,la=0,T={};function rp(){const n=document.getElementById("lightbox");n&&(n.style.display="flex",setTimeout(()=>{n.classList.add("active")},10),window.storyWallInitialized||(ap(),window.storyWallInitialized=!0))}function _r(){const n=document.getElementById("lightbox");if(!n)return;n.classList.add("closing"),n.classList.remove("active");const e=n.querySelector(".lightbox-content");e&&e.addEventListener("animationend",function t(){n.style.display="none",n.classList.remove("closing"),e.removeEventListener("animationend",t)})}function sp(){T={chapterName:document.querySelector("#chapterName"),chapterSubtitle:document.querySelector("#chapterSubtitle"),volunteerImage:document.querySelector("#volunteerImage"),volunteerName:document.querySelector("#volunteerName"),volunteerRole:document.querySelector("#volunteerRole"),storyParagraph:document.querySelector("#storyParagraph"),storyQuote:document.querySelector("#storyQuote"),statStudents:document.querySelector("#statStudents"),statHours:document.querySelector("#statHours"),statYears:document.querySelector("#statYears"),pageCurrent:document.querySelector("#pageCurrent"),pageTotal:document.querySelector("#pageTotal"),scrollHint:document.querySelector("#scrollHint"),storyContent:document.querySelector("#storyContent"),visualContent:document.querySelector("#visualContent"),pageIndicators:document.querySelector("#pageIndicators"),prevButton:document.querySelector("#prevButton"),nextButton:document.querySelector("#nextButton"),container:document.querySelector("#container")}}function op(){wt.forEach(n=>{const e=new Image;e.src=n.imageUrl})}function ap(){sp(),cp(),op(),ua(),fp(),T.pageTotal&&(T.pageTotal.textContent=wt.length)}function cp(){T.pageIndicators&&(T.pageIndicators.innerHTML="",wt.forEach((n,e)=>{const t=document.createElement("button");t.className="indicator",t.setAttribute("aria-label",`Go to story ${e+1}`),t.innerHTML=`
        <div class="indicator-dot"></div>
        <span class="indicator-label">${n.title}</span>
    `,t.addEventListener("click",()=>vr(e)),T.pageIndicators.appendChild(t)}))}function ua(){const n=wt[ve];T.chapterName&&(T.chapterName.textContent=n.title),T.chapterSubtitle&&(T.chapterSubtitle.textContent=n.subtitle),T.volunteerImage&&(T.volunteerImage.textContent=n.image),T.volunteerName&&(T.volunteerName.textContent=n.volunteer),T.volunteerRole&&(T.volunteerRole.textContent=n.role),T.storyParagraph&&(T.storyParagraph.textContent=n.story),T.storyQuote&&(T.storyQuote.textContent=`— ${n.quote}`),T.statStudents&&(T.statStudents.textContent=n.stats.students),T.statHours&&(T.statHours.textContent=n.stats.hours),T.statYears&&(T.statYears.textContent=n.stats.years),T.pageCurrent&&(T.pageCurrent.textContent=ve+1);const e=document.querySelector("#storyImage");if(e&&n.imageUrl){e.style.opacity="0.3";let t=document.querySelector(".image-loading");t||(t=document.createElement("div"),t.className="image-loading",t.innerHTML=`
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
    `,e.parentElement.style.position="relative",e.parentElement.appendChild(t)),t.style.display="flex";const r=new Image;r.onload=function(){e.src=this.src,e.style.opacity="1",t.style.display="none"},r.onerror=function(){e.style.opacity="1",t.querySelector(".loading-text").textContent="載入失敗",t.querySelector(".loading-spinner").style.display="none",setTimeout(()=>{t.style.display="none"},2e3)},r.src=n.imageUrl,e.alt=`${n.title} - ${n.volunteer}`}lp(),T.scrollHint&&(ve===0?T.scrollHint.classList.remove("hidden"):T.scrollHint.classList.add("hidden"))}function lp(){if(!T.pageIndicators)return;T.pageIndicators.querySelectorAll(".indicator").forEach((e,t)=>{t===ve?e.classList.add("active"):e.classList.remove("active")})}function vr(n){if(xt||mr)return;const e=Math.max(0,Math.min(wt.length-1,n));e!==ve&&(xt=!0,T.storyContent&&T.storyContent.classList.add("animating"),T.visualContent&&T.visualContent.classList.add("animating"),setTimeout(()=>{ve=e,ua(),setTimeout(()=>{T.storyContent&&T.storyContent.classList.remove("animating"),T.visualContent&&T.visualContent.classList.remove("animating"),xt=!1},100)},300))}function oi(){const n=ve===0?wt.length-1:ve-1;vr(n)}function ai(){const n=ve===wt.length-1?0:ve+1;vr(n)}function Li(n){const e=document.getElementById("lightbox");if(!e||!e.classList.contains("active"))return;n.preventDefault(),n.stopPropagation();const t=Date.now();t-Vs<500||xt||(Vs=t,n.deltaY>0?ai():oi())}function up(n){const e=document.getElementById("lightbox");if(!(!e||!e.classList.contains("active"))&&!(xt||mr))switch(n.key){case"ArrowLeft":case"ArrowUp":n.preventDefault(),oi();break;case"ArrowRight":case"ArrowDown":n.preventDefault(),ai();break;case"Escape":n.preventDefault(),_r();break}}function dp(n){la=n.touches[0].clientY}function hp(n){if(xt||mr)return;const e=n.changedTouches[0].clientY,t=la-e;Math.abs(t)>50&&(t>0?ai():oi())}function fp(){T.prevButton&&T.prevButton.addEventListener("click",oi),T.nextButton&&T.nextButton.addEventListener("click",ai),window.addEventListener("wheel",Li,{passive:!1}),document.addEventListener("wheel",Li,{passive:!1}),T.container&&T.container.addEventListener("wheel",Li,{passive:!1}),document.addEventListener("keydown",up),T.container&&(T.container.addEventListener("touchstart",dp,{passive:!0}),T.container.addEventListener("touchend",hp,{passive:!0}));const n=document.getElementById("lightbox");n&&n.addEventListener("click",function(e){e.target===this&&_r()})}window.openLightbox=rp;window.closeLightbox=_r;function se(n,e="info",t="通知"){const r=document.querySelector("#authToast"),s=document.querySelector("#toastIcon"),a=document.querySelector("#toastTitle"),c=document.querySelector("#toastBody"),l=r.querySelector(".toast-header");switch(a.textContent=t,c.textContent=n,l.className="toast-header",s.className="me-2",e){case"success":l.classList.add("bg-success","text-white"),s.classList.add("fas","fa-check-circle","text-white");break;case"error":l.classList.add("bg-danger","text-white"),s.classList.add("fas","fa-exclamation-circle","text-white");break;case"warning":l.classList.add("bg-warning","text-dark"),s.classList.add("fas","fa-exclamation-triangle","text-dark");break;default:l.classList.add("bg-primary","text-white"),s.classList.add("fas","fa-info-circle","text-white")}new bootstrap.Toast(r,{autohide:!0,delay:e==="error"?5e3:3e3}).show()}function pp(){const n=new bootstrap.Modal(document.querySelector("#loginModal"));document.body.classList.add("modal-open-custom"),n.show()}function gp(n){const e=document.querySelector(`#${n}`),t=document.querySelector(`#${n}Icon`);e.type==="password"?(e.type="text",t.classList.remove("fa-eye"),t.classList.add("fa-eye-slash")):(e.type="password",t.classList.remove("fa-eye-slash"),t.classList.add("fa-eye"))}async function Ri(){console.log("Google 登入被點擊");try{const n=await ip();console.log("Google 登入成功:",n.user),se("Google 登入成功！歡迎回來","success","登入成功");const e=bootstrap.Modal.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("Google 登入失敗:",n);let e="Google 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`Google 登入失敗：${n.message}`}se(e,"error","登入失敗")}}async function Di(){console.log("GitHub 登入被點擊");try{const n=await ep();console.log("GitHub 登入成功:",n.user),se("GitHub 登入成功！歡迎回來","success","登入成功");const e=bootstrap.Modal.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("GitHub 登入失敗:",n);let e="GitHub 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`GitHub 登入失敗：${n.message}`}se(e,"error","登入失敗")}}window.openLoginModal=pp;window.togglePassword=gp;document.addEventListener("DOMContentLoaded",function(){console.log("DOM 載入完成");const n=document.querySelector("#loginModal"),e=document.body;n.addEventListener("show.bs.modal",function(){document.querySelectorAll("body > *:not(.modal):not(.modal-backdrop)").forEach(l=>{l.style.filter="blur(15px)",l.style.transition="filter 0.3s ease"}),setTimeout(()=>{const l=document.querySelector(".modal-backdrop");l&&(l.style.backgroundColor="rgba(0, 0, 0, 0.3)")},100)}),n.addEventListener("hide.bs.modal",function(){document.querySelectorAll("body > *").forEach(l=>{l.style.filter="",l.style.transition=""}),e.classList.remove("modal-open-custom")}),document.querySelector("#loginForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),h=l.get("email"),f=l.get("password");if(!h||!f){se("請輸入電子郵件和密碼","warning","輸入不完整");return}try{const g=await np(h,f);console.log("登入成功:",g.user),se("登入成功！歡迎回來","success","登入成功");const v=bootstrap.Modal.getInstance(n);v&&v.hide()}catch(g){console.error("登入失敗:",g);let v="登入失敗";switch(g.code){case"auth/user-not-found":v="找不到此帳號，請先註冊或檢查 Email 是否正確";break;case"auth/wrong-password":case"auth/invalid-credential":v="密碼錯誤或帳號不存在，請檢查登入資訊";break;case"auth/invalid-email":v="請輸入有效的電子郵件地址";break;default:v=`登入失敗：${g.message}`}se(v,"error","登入失敗")}}),document.querySelector("#registerForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),h=l.get("name"),f=l.get("email"),g=l.get("password"),v=l.get("confirmPassword");if(!h||!f||!g||!v){se("請填寫所有必填欄位","warning","輸入不完整");return}if(g!==v){se("密碼和確認密碼不一致","warning","密碼不符");return}if(g.length<6){se("密碼至少需要6個字元","warning","密碼太短");return}try{const _=await tp(f,g);console.log("註冊成功:",_.user),se("註冊成功！現在可以使用此帳號登入","success","註冊成功");const b=bootstrap.Modal.getInstance(n);b&&b.hide(),this.reset()}catch(_){console.error("註冊失敗:",_);let b="註冊失敗";switch(_.code){case"auth/email-already-in-use":b="此電子郵件已被註冊，請使用其他 Email 或嘗試登入";break;case"auth/invalid-email":b="請輸入有效的電子郵件地址";break;case"auth/weak-password":b="密碼強度不足，請使用更複雜的密碼（至少包含字母和數字）";break;default:b=`註冊失敗：${_.message}`}se(b,"error","註冊失敗")}});const t=document.querySelector("#googleLoginBtn"),r=document.querySelector("#githubLoginBtn"),s=document.querySelector("#googleRegisterBtn"),a=document.querySelector("#githubRegisterBtn");t&&(t.addEventListener("click",Ri),console.log("Google 登入按鈕事件已綁定")),r&&(r.addEventListener("click",Di),console.log("GitHub 登入按鈕事件已綁定")),s&&(s.addEventListener("click",Ri),console.log("Google 註冊按鈕事件已綁定")),a&&(a.addEventListener("click",Di),console.log("GitHub 註冊按鈕事件已綁定")),!t&&!s&&(console.log("使用備用方案綁定 Google 按鈕"),document.querySelectorAll(".social-btn .fa-google").forEach((l,h)=>{const f=l.closest("button");f&&(f.addEventListener("click",Ri),console.log(`Google 按鈕 ${h+1} 事件已綁定`))})),!r&&!a&&(console.log("使用備用方案綁定 GitHub 按鈕"),document.querySelectorAll(".social-btn .fa-github").forEach((l,h)=>{const f=l.closest("button");f&&(f.addEventListener("click",Di),console.log(`GitHub 按鈕 ${h+1} 事件已綁定`))}))});
