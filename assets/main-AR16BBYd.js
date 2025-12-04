(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var R="top",V="bottom",F="right",M="left",Bn="auto",Tt=[R,V,F,M],ze="start",mt="end",Ki="clippingParents",qs="viewport",rt="popper",zi="reference",Cs=Tt.reduce(function(n,e){return n.concat([e+"-"+ze,e+"-"+mt])},[]),js=[].concat(Tt,[Bn]).reduce(function(n,e){return n.concat([e,e+"-"+ze,e+"-"+mt])},[]),Gi="beforeRead",Yi="read",Ji="afterRead",Xi="beforeMain",Qi="main",Zi="afterMain",eo="beforeWrite",to="write",no="afterWrite",so=[Gi,Yi,Ji,Xi,Qi,Zi,eo,to,no];function oe(n){return n?(n.nodeName||"").toLowerCase():null}function W(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function Ge(n){var e=W(n).Element;return n instanceof e||n instanceof Element}function K(n){var e=W(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Ks(n){if(typeof ShadowRoot>"u")return!1;var e=W(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function tc(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var s=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];!K(i)||!oe(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function nc(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(s){var r=e.elements[s],i=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:t[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!K(r)||!oe(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(c){r.removeAttribute(c)}))})}}const zs={name:"applyStyles",enabled:!0,phase:"write",fn:tc,effect:nc,requires:["computeStyles"]};function se(n){return n.split("-")[0]}var Ke=Math.max,Cn=Math.min,gt=Math.round;function Ls(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ro(){return!/^((?!chrome|android).)*safari/i.test(Ls())}function _t(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var s=n.getBoundingClientRect(),r=1,i=1;e&&K(n)&&(r=n.offsetWidth>0&&gt(s.width)/n.offsetWidth||1,i=n.offsetHeight>0&&gt(s.height)/n.offsetHeight||1);var o=Ge(n)?W(n):window,a=o.visualViewport,c=!ro()&&t,l=(s.left+(c&&a?a.offsetLeft:0))/r,u=(s.top+(c&&a?a.offsetTop:0))/i,f=s.width/r,d=s.height/i;return{width:f,height:d,top:u,right:l+f,bottom:u+d,left:l,x:l,y:u}}function Gs(n){var e=_t(n),t=n.offsetWidth,s=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:s}}function io(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Ks(t)){var s=e;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function pe(n){return W(n).getComputedStyle(n)}function sc(n){return["table","td","th"].indexOf(oe(n))>=0}function Ne(n){return((Ge(n)?n.ownerDocument:n.document)||window.document).documentElement}function Hn(n){return oe(n)==="html"?n:n.assignedSlot||n.parentNode||(Ks(n)?n.host:null)||Ne(n)}function Pr(n){return!K(n)||pe(n).position==="fixed"?null:n.offsetParent}function rc(n){var e=/firefox/i.test(Ls()),t=/Trident/i.test(Ls());if(t&&K(n)){var s=pe(n);if(s.position==="fixed")return null}var r=Hn(n);for(Ks(r)&&(r=r.host);K(r)&&["html","body"].indexOf(oe(r))<0;){var i=pe(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function jt(n){for(var e=W(n),t=Pr(n);t&&sc(t)&&pe(t).position==="static";)t=Pr(t);return t&&(oe(t)==="html"||oe(t)==="body"&&pe(t).position==="static")?e:t||rc(n)||e}function Ys(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function $t(n,e,t){return Ke(n,Cn(e,t))}function ic(n,e,t){var s=$t(n,e,t);return s>t?t:s}function oo(){return{top:0,right:0,bottom:0,left:0}}function ao(n){return Object.assign({},oo(),n)}function co(n,e){return e.reduce(function(t,s){return t[s]=n,t},{})}var oc=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,ao(typeof e!="number"?e:co(e,Tt))};function ac(n){var e,t=n.state,s=n.name,r=n.options,i=t.elements.arrow,o=t.modifiersData.popperOffsets,a=se(t.placement),c=Ys(a),l=[M,F].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var f=oc(r.padding,t),d=Gs(i),p=c==="y"?R:M,v=c==="y"?V:F,m=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],b=o[c]-t.rects.reference[c],w=jt(i),T=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,C=m/2-b/2,y=f[p],A=T-d[u]-f[v],I=T/2-d[u]/2+C,L=$t(y,I,A),D=c;t.modifiersData[s]=(e={},e[D]=L,e.centerOffset=L-I,e)}}function cc(n){var e=n.state,t=n.options,s=t.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||io(e.elements.popper,r)&&(e.elements.arrow=r))}const lo={name:"arrow",enabled:!0,phase:"main",fn:ac,effect:cc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Et(n){return n.split("-")[1]}var lc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function uc(n,e){var t=n.x,s=n.y,r=e.devicePixelRatio||1;return{x:gt(t*r)/r||0,y:gt(s*r)/r||0}}function Rr(n){var e,t=n.popper,s=n.popperRect,r=n.placement,i=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,f=n.isFixed,d=o.x,p=d===void 0?0:d,v=o.y,m=v===void 0?0:v,b=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=b.x,m=b.y;var w=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),C=M,y=R,A=window;if(l){var I=jt(t),L="clientHeight",D="clientWidth";if(I===W(t)&&(I=Ne(t),pe(I).position!=="static"&&a==="absolute"&&(L="scrollHeight",D="scrollWidth")),I=I,r===R||(r===M||r===F)&&i===mt){y=V;var N=f&&I===A&&A.visualViewport?A.visualViewport.height:I[L];m-=N-s.height,m*=c?1:-1}if(r===M||(r===R||r===V)&&i===mt){C=F;var O=f&&I===A&&A.visualViewport?A.visualViewport.width:I[D];p-=O-s.width,p*=c?1:-1}}var k=Object.assign({position:a},l&&lc),X=u===!0?uc({x:p,y:m},W(t)):{x:p,y:m};if(p=X.x,m=X.y,c){var P;return Object.assign({},k,(P={},P[y]=T?"0":"",P[C]=w?"0":"",P.transform=(A.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",P))}return Object.assign({},k,(e={},e[y]=T?m+"px":"",e[C]=w?p+"px":"",e.transform="",e))}function dc(n){var e=n.state,t=n.options,s=t.gpuAcceleration,r=s===void 0?!0:s,i=t.adaptive,o=i===void 0?!0:i,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:se(e.placement),variation:Et(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Rr(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Rr(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Js={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:dc,data:{}};var dn={passive:!0};function hc(n){var e=n.state,t=n.instance,s=n.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,c=W(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",t.update,dn)}),a&&c.addEventListener("resize",t.update,dn),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",t.update,dn)}),a&&c.removeEventListener("resize",t.update,dn)}}const Xs={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:hc,data:{}};var fc={left:"right",right:"left",bottom:"top",top:"bottom"};function vn(n){return n.replace(/left|right|bottom|top/g,function(e){return fc[e]})}var pc={start:"end",end:"start"};function Mr(n){return n.replace(/start|end/g,function(e){return pc[e]})}function Qs(n){var e=W(n),t=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:t,scrollTop:s}}function Zs(n){return _t(Ne(n)).left+Qs(n).scrollLeft}function mc(n,e){var t=W(n),s=Ne(n),r=t.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,c=0;if(r){i=r.width,o=r.height;var l=ro();(l||!l&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:o,x:a+Zs(n),y:c}}function gc(n){var e,t=Ne(n),s=Qs(n),r=(e=n.ownerDocument)==null?void 0:e.body,i=Ke(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Ke(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+Zs(n),c=-s.scrollTop;return pe(r||t).direction==="rtl"&&(a+=Ke(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function er(n){var e=pe(n),t=e.overflow,s=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+s)}function uo(n){return["html","body","#document"].indexOf(oe(n))>=0?n.ownerDocument.body:K(n)&&er(n)?n:uo(Hn(n))}function Ut(n,e){var t;e===void 0&&(e=[]);var s=uo(n),r=s===((t=n.ownerDocument)==null?void 0:t.body),i=W(s),o=r?[i].concat(i.visualViewport||[],er(s)?s:[]):s,a=e.concat(o);return r?a:a.concat(Ut(Hn(o)))}function Os(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function _c(n,e){var t=_t(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function xr(n,e,t){return e===qs?Os(mc(n,t)):Ge(e)?_c(e,t):Os(gc(Ne(n)))}function Ec(n){var e=Ut(Hn(n)),t=["absolute","fixed"].indexOf(pe(n).position)>=0,s=t&&K(n)?jt(n):n;return Ge(s)?e.filter(function(r){return Ge(r)&&io(r,s)&&oe(r)!=="body"}):[]}function vc(n,e,t,s){var r=e==="clippingParents"?Ec(n):[].concat(e),i=[].concat(r,[t]),o=i[0],a=i.reduce(function(c,l){var u=xr(n,l,s);return c.top=Ke(u.top,c.top),c.right=Cn(u.right,c.right),c.bottom=Cn(u.bottom,c.bottom),c.left=Ke(u.left,c.left),c},xr(n,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ho(n){var e=n.reference,t=n.element,s=n.placement,r=s?se(s):null,i=s?Et(s):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(r){case R:c={x:o,y:e.y-t.height};break;case V:c={x:o,y:e.y+e.height};break;case F:c={x:e.x+e.width,y:a};break;case M:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=r?Ys(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case ze:c[l]=c[l]-(e[u]/2-t[u]/2);break;case mt:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function vt(n,e){e===void 0&&(e={});var t=e,s=t.placement,r=s===void 0?n.placement:s,i=t.strategy,o=i===void 0?n.strategy:i,a=t.boundary,c=a===void 0?Ki:a,l=t.rootBoundary,u=l===void 0?qs:l,f=t.elementContext,d=f===void 0?rt:f,p=t.altBoundary,v=p===void 0?!1:p,m=t.padding,b=m===void 0?0:m,w=ao(typeof b!="number"?b:co(b,Tt)),T=d===rt?zi:rt,C=n.rects.popper,y=n.elements[v?T:d],A=vc(Ge(y)?y:y.contextElement||Ne(n.elements.popper),c,u,o),I=_t(n.elements.reference),L=ho({reference:I,element:C,placement:r}),D=Os(Object.assign({},C,L)),N=d===rt?D:I,O={top:A.top-N.top+w.top,bottom:N.bottom-A.bottom+w.bottom,left:A.left-N.left+w.left,right:N.right-A.right+w.right},k=n.modifiersData.offset;if(d===rt&&k){var X=k[r];Object.keys(O).forEach(function(P){var $e=[F,V].indexOf(P)>=0?1:-1,Ue=[R,V].indexOf(P)>=0?"y":"x";O[P]+=X[Ue]*$e})}return O}function yc(n,e){e===void 0&&(e={});var t=e,s=t.placement,r=t.boundary,i=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?js:c,u=Et(s),f=u?a?Cs:Cs.filter(function(v){return Et(v)===u}):Tt,d=f.filter(function(v){return l.indexOf(v)>=0});d.length===0&&(d=f);var p=d.reduce(function(v,m){return v[m]=vt(n,{placement:m,boundary:r,rootBoundary:i,padding:o})[se(m)],v},{});return Object.keys(p).sort(function(v,m){return p[v]-p[m]})}function bc(n){if(se(n)===Bn)return[];var e=vn(n);return[Mr(n),e,Mr(e)]}function wc(n){var e=n.state,t=n.options,s=n.name;if(!e.modifiersData[s]._skip){for(var r=t.mainAxis,i=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,f=t.rootBoundary,d=t.altBoundary,p=t.flipVariations,v=p===void 0?!0:p,m=t.allowedAutoPlacements,b=e.options.placement,w=se(b),T=w===b,C=c||(T||!v?[vn(b)]:bc(b)),y=[b].concat(C).reduce(function(tt,ye){return tt.concat(se(ye)===Bn?yc(e,{placement:ye,boundary:u,rootBoundary:f,padding:l,flipVariations:v,allowedAutoPlacements:m}):ye)},[]),A=e.rects.reference,I=e.rects.popper,L=new Map,D=!0,N=y[0],O=0;O<y.length;O++){var k=y[O],X=se(k),P=Et(k)===ze,$e=[R,V].indexOf(X)>=0,Ue=$e?"width":"height",H=vt(e,{placement:k,boundary:u,rootBoundary:f,altBoundary:d,padding:l}),Q=$e?P?F:M:P?V:R;A[Ue]>I[Ue]&&(Q=vn(Q));var on=vn(Q),Be=[];if(i&&Be.push(H[X]<=0),a&&Be.push(H[Q]<=0,H[on]<=0),Be.every(function(tt){return tt})){N=k,D=!1;break}L.set(k,Be)}if(D)for(var an=v?3:1,Xn=function(ye){var kt=y.find(function(ln){var He=L.get(ln);if(He)return He.slice(0,ye).every(function(Qn){return Qn})});if(kt)return N=kt,"break"},Dt=an;Dt>0;Dt--){var cn=Xn(Dt);if(cn==="break")break}e.placement!==N&&(e.modifiersData[s]._skip=!0,e.placement=N,e.reset=!0)}}const fo={name:"flip",enabled:!0,phase:"main",fn:wc,requiresIfExists:["offset"],data:{_skip:!1}};function $r(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Ur(n){return[R,F,V,M].some(function(e){return n[e]>=0})}function Tc(n){var e=n.state,t=n.name,s=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,o=vt(e,{elementContext:"reference"}),a=vt(e,{altBoundary:!0}),c=$r(o,s),l=$r(a,r,i),u=Ur(c),f=Ur(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const po={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Tc};function Ac(n,e,t){var s=se(n),r=[M,R].indexOf(s)>=0?-1:1,i=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[M,F].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Ic(n){var e=n.state,t=n.options,s=n.name,r=t.offset,i=r===void 0?[0,0]:r,o=js.reduce(function(u,f){return u[f]=Ac(f,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}const mo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ic};function Sc(n){var e=n.state,t=n.name;e.modifiersData[t]=ho({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const tr={name:"popperOffsets",enabled:!0,phase:"read",fn:Sc,data:{}};function Cc(n){return n==="x"?"y":"x"}function Lc(n){var e=n.state,t=n.options,s=n.name,r=t.mainAxis,i=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,f=t.padding,d=t.tether,p=d===void 0?!0:d,v=t.tetherOffset,m=v===void 0?0:v,b=vt(e,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),w=se(e.placement),T=Et(e.placement),C=!T,y=Ys(w),A=Cc(y),I=e.modifiersData.popperOffsets,L=e.rects.reference,D=e.rects.popper,N=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,O=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),k=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,X={x:0,y:0};if(I){if(i){var P,$e=y==="y"?R:M,Ue=y==="y"?V:F,H=y==="y"?"height":"width",Q=I[y],on=Q+b[$e],Be=Q-b[Ue],an=p?-D[H]/2:0,Xn=T===ze?L[H]:D[H],Dt=T===ze?-D[H]:-L[H],cn=e.elements.arrow,tt=p&&cn?Gs(cn):{width:0,height:0},ye=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:oo(),kt=ye[$e],ln=ye[Ue],He=$t(0,L[H],tt[H]),Qn=C?L[H]/2-an-He-kt-O.mainAxis:Xn-He-kt-O.mainAxis,Ya=C?-L[H]/2+an+He+ln+O.mainAxis:Dt+He+ln+O.mainAxis,Zn=e.elements.arrow&&jt(e.elements.arrow),Ja=Zn?y==="y"?Zn.clientTop||0:Zn.clientLeft||0:0,Ar=(P=k==null?void 0:k[y])!=null?P:0,Xa=Q+Qn-Ar-Ja,Qa=Q+Ya-Ar,Ir=$t(p?Cn(on,Xa):on,Q,p?Ke(Be,Qa):Be);I[y]=Ir,X[y]=Ir-Q}if(a){var Sr,Za=y==="x"?R:M,ec=y==="x"?V:F,Ve=I[A],un=A==="y"?"height":"width",Cr=Ve+b[Za],Lr=Ve-b[ec],es=[R,M].indexOf(w)!==-1,Or=(Sr=k==null?void 0:k[A])!=null?Sr:0,Nr=es?Cr:Ve-L[un]-D[un]-Or+O.altAxis,Dr=es?Ve+L[un]+D[un]-Or-O.altAxis:Lr,kr=p&&es?ic(Nr,Ve,Dr):$t(p?Nr:Cr,Ve,p?Dr:Lr);I[A]=kr,X[A]=kr-Ve}e.modifiersData[s]=X}}const go={name:"preventOverflow",enabled:!0,phase:"main",fn:Lc,requiresIfExists:["offset"]};function Oc(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Nc(n){return n===W(n)||!K(n)?Qs(n):Oc(n)}function Dc(n){var e=n.getBoundingClientRect(),t=gt(e.width)/n.offsetWidth||1,s=gt(e.height)/n.offsetHeight||1;return t!==1||s!==1}function kc(n,e,t){t===void 0&&(t=!1);var s=K(e),r=K(e)&&Dc(e),i=Ne(e),o=_t(n,r,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!t)&&((oe(e)!=="body"||er(i))&&(a=Nc(e)),K(e)?(c=_t(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Zs(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Pc(n){var e=new Map,t=new Set,s=[];n.forEach(function(i){e.set(i.name,i)});function r(i){t.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&r(c)}}),s.push(i)}return n.forEach(function(i){t.has(i.name)||r(i)}),s}function Rc(n){var e=Pc(n);return so.reduce(function(t,s){return t.concat(e.filter(function(r){return r.phase===s}))},[])}function Mc(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function xc(n){var e=n.reduce(function(t,s){var r=t[s.name];return t[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,t},{});return Object.keys(e).map(function(t){return e[t]})}var Br={placement:"bottom",modifiers:[],strategy:"absolute"};function Hr(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Vn(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,s=t===void 0?[]:t,r=e.defaultOptions,i=r===void 0?Br:r;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Br,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],d=!1,p={state:u,setOptions:function(w){var T=typeof w=="function"?w(u.options):w;m(),u.options=Object.assign({},i,u.options,T),u.scrollParents={reference:Ge(a)?Ut(a):a.contextElement?Ut(a.contextElement):[],popper:Ut(c)};var C=Rc(xc([].concat(s,u.options.modifiers)));return u.orderedModifiers=C.filter(function(y){return y.enabled}),v(),p.update()},forceUpdate:function(){if(!d){var w=u.elements,T=w.reference,C=w.popper;if(Hr(T,C)){u.rects={reference:kc(T,jt(C),u.options.strategy==="fixed"),popper:Gs(C)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(O){return u.modifiersData[O.name]=Object.assign({},O.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var A=u.orderedModifiers[y],I=A.fn,L=A.options,D=L===void 0?{}:L,N=A.name;typeof I=="function"&&(u=I({state:u,options:D,name:N,instance:p})||u)}}}},update:Mc(function(){return new Promise(function(b){p.forceUpdate(),b(u)})}),destroy:function(){m(),d=!0}};if(!Hr(a,c))return p;p.setOptions(l).then(function(b){!d&&l.onFirstUpdate&&l.onFirstUpdate(b)});function v(){u.orderedModifiers.forEach(function(b){var w=b.name,T=b.options,C=T===void 0?{}:T,y=b.effect;if(typeof y=="function"){var A=y({state:u,name:w,instance:p,options:C}),I=function(){};f.push(A||I)}})}function m(){f.forEach(function(b){return b()}),f=[]}return p}}var $c=Vn(),Uc=[Xs,tr,Js,zs],Bc=Vn({defaultModifiers:Uc}),Hc=[Xs,tr,Js,zs,mo,fo,go,lo,po],nr=Vn({defaultModifiers:Hc});const _o=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Zi,afterRead:Ji,afterWrite:no,applyStyles:zs,arrow:lo,auto:Bn,basePlacements:Tt,beforeMain:Xi,beforeRead:Gi,beforeWrite:eo,bottom:V,clippingParents:Ki,computeStyles:Js,createPopper:nr,createPopperBase:$c,createPopperLite:Bc,detectOverflow:vt,end:mt,eventListeners:Xs,flip:fo,hide:po,left:M,main:Qi,modifierPhases:so,offset:mo,placements:js,popper:rt,popperGenerator:Vn,popperOffsets:tr,preventOverflow:go,read:Yi,reference:zi,right:F,start:ze,top:R,variationPlacements:Cs,viewport:qs,write:to},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const be=new Map,ts={set(n,e,t){be.has(n)||be.set(n,new Map);const s=be.get(n);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,t)},get(n,e){return be.has(n)&&be.get(n).get(e)||null},remove(n,e){if(!be.has(n))return;const t=be.get(n);t.delete(e),t.size===0&&be.delete(n)}},Vc=1e6,Fc=1e3,Ns="transitionend",Eo=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),n),Wc=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),qc=n=>{do n+=Math.floor(Math.random()*Vc);while(document.getElementById(n));return n},jc=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const s=Number.parseFloat(e),r=Number.parseFloat(t);return!s&&!r?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*Fc)},vo=n=>{n.dispatchEvent(new Event(Ns))},de=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),Ce=n=>de(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Eo(n)):null,At=n=>{if(!de(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const s=n.closest("summary");if(s&&s.parentNode!==t||s===null)return!1}return e},Le=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",yo=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?yo(n.parentNode):null},Ln=()=>{},Kt=n=>{n.offsetHeight},bo=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ns=[],Kc=n=>{document.readyState==="loading"?(ns.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of ns)e()}),ns.push(n)):n()},z=()=>document.documentElement.dir==="rtl",J=n=>{Kc(()=>{const e=bo();if(e){const t=n.NAME,s=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=s,n.jQueryInterface)}})},B=(n,e=[],t=n)=>typeof n=="function"?n.call(...e):t,wo=(n,e,t=!0)=>{if(!t){B(n);return}const r=jc(e)+5;let i=!1;const o=({target:a})=>{a===e&&(i=!0,e.removeEventListener(Ns,o),B(n))};e.addEventListener(Ns,o),setTimeout(()=>{i||vo(e)},r)},sr=(n,e,t,s)=>{const r=n.length;let i=n.indexOf(e);return i===-1?!t&&s?n[r-1]:n[0]:(i+=t?1:-1,s&&(i=(i+r)%r),n[Math.max(0,Math.min(i,r-1))])},zc=/[^.]*(?=\..*)\.|.*/,Gc=/\..*/,Yc=/::\d+$/,ss={};let Vr=1;const To={mouseenter:"mouseover",mouseleave:"mouseout"},Jc=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ao(n,e){return e&&`${e}::${Vr++}`||n.uidEvent||Vr++}function Io(n){const e=Ao(n);return n.uidEvent=e,ss[e]=ss[e]||{},ss[e]}function Xc(n,e){return function t(s){return rr(s,{delegateTarget:n}),t.oneOff&&h.off(n,s.type,e),e.apply(n,[s])}}function Qc(n,e,t){return function s(r){const i=n.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return rr(r,{delegateTarget:o}),s.oneOff&&h.off(n,r.type,e,t),t.apply(o,[r])}}function So(n,e,t=null){return Object.values(n).find(s=>s.callable===e&&s.delegationSelector===t)}function Co(n,e,t){const s=typeof e=="string",r=s?t:e||t;let i=Lo(n);return Jc.has(i)||(i=n),[s,r,i]}function Fr(n,e,t,s,r){if(typeof e!="string"||!n)return;let[i,o,a]=Co(e,t,s);e in To&&(o=(v=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return v.call(this,m)})(o));const c=Io(n),l=c[a]||(c[a]={}),u=So(l,o,i?t:null);if(u){u.oneOff=u.oneOff&&r;return}const f=Ao(o,e.replace(zc,"")),d=i?Qc(n,t,o):Xc(n,o);d.delegationSelector=i?t:null,d.callable=o,d.oneOff=r,d.uidEvent=f,l[f]=d,n.addEventListener(a,d,i)}function Ds(n,e,t,s,r){const i=So(e[t],s,r);i&&(n.removeEventListener(t,i,!!r),delete e[t][i.uidEvent])}function Zc(n,e,t,s){const r=e[t]||{};for(const[i,o]of Object.entries(r))i.includes(s)&&Ds(n,e,t,o.callable,o.delegationSelector)}function Lo(n){return n=n.replace(Gc,""),To[n]||n}const h={on(n,e,t,s){Fr(n,e,t,s,!1)},one(n,e,t,s){Fr(n,e,t,s,!0)},off(n,e,t,s){if(typeof e!="string"||!n)return;const[r,i,o]=Co(e,t,s),a=o!==e,c=Io(n),l=c[o]||{},u=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;Ds(n,c,o,i,r?t:null);return}if(u)for(const f of Object.keys(c))Zc(n,c,f,e.slice(1));for(const[f,d]of Object.entries(l)){const p=f.replace(Yc,"");(!a||e.includes(p))&&Ds(n,c,o,d.callable,d.delegationSelector)}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const s=bo(),r=Lo(e),i=e!==r;let o=null,a=!0,c=!0,l=!1;i&&s&&(o=s.Event(e,t),s(n).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=rr(new Event(e,{bubbles:a,cancelable:!0}),t);return l&&u.preventDefault(),c&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function rr(n,e={}){for(const[t,s]of Object.entries(e))try{n[t]=s}catch{Object.defineProperty(n,t,{configurable:!0,get(){return s}})}return n}function Wr(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function rs(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const he={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${rs(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${rs(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of t){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=Wr(n.dataset[s])}return e},getDataAttribute(n,e){return Wr(n.getAttribute(`data-bs-${rs(e)}`))}};class zt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const s=de(t)?he.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...de(t)?he.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[s,r]of Object.entries(t)){const i=e[s],o=de(i)?"element":Wc(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const el="5.3.8";class ne extends zt{constructor(e,t){super(),e=Ce(e),e&&(this._element=e,this._config=this._getConfig(t),ts.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ts.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,s=!0){wo(e,t,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return ts.get(Ce(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return el}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const is=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>Eo(t)).join(","):null},g={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let s=n.parentNode.closest(e);for(;s;)t.push(s),s=s.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!Le(t)&&At(t))},getSelectorFromElement(n){const e=is(n);return e&&g.findOne(e)?e:null},getElementFromSelector(n){const e=is(n);return e?g.findOne(e):null},getMultipleElementsFromSelector(n){const e=is(n);return e?g.find(e):[]}},Fn=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;h.on(document,t,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Le(this))return;const i=g.getElementFromSelector(this)||this.closest(`.${s}`);n.getOrCreateInstance(i)[e]()})},tl="alert",nl="bs.alert",Oo=`.${nl}`,sl=`close${Oo}`,rl=`closed${Oo}`,il="fade",ol="show";class Gt extends ne{static get NAME(){return tl}close(){if(h.trigger(this._element,sl).defaultPrevented)return;this._element.classList.remove(ol);const t=this._element.classList.contains(il);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),h.trigger(this._element,rl),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Gt.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Fn(Gt,"close");J(Gt);const al="button",cl="bs.button",ll=`.${cl}`,ul=".data-api",dl="active",qr='[data-bs-toggle="button"]',hl=`click${ll}${ul}`;class Yt extends ne{static get NAME(){return al}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(dl))}static jQueryInterface(e){return this.each(function(){const t=Yt.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}h.on(document,hl,qr,n=>{n.preventDefault();const e=n.target.closest(qr);Yt.getOrCreateInstance(e).toggle()});J(Yt);const fl="swipe",It=".bs.swipe",pl=`touchstart${It}`,ml=`touchmove${It}`,gl=`touchend${It}`,_l=`pointerdown${It}`,El=`pointerup${It}`,vl="touch",yl="pen",bl="pointer-event",wl=40,Tl={endCallback:null,leftCallback:null,rightCallback:null},Al={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class On extends zt{constructor(e,t){super(),this._element=e,!(!e||!On.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Tl}static get DefaultType(){return Al}static get NAME(){return fl}dispose(){h.off(this._element,It)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),B(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=wl)return;const t=e/this._deltaX;this._deltaX=0,t&&B(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,_l,e=>this._start(e)),h.on(this._element,El,e=>this._end(e)),this._element.classList.add(bl)):(h.on(this._element,pl,e=>this._start(e)),h.on(this._element,ml,e=>this._move(e)),h.on(this._element,gl,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===yl||e.pointerType===vl)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Il="carousel",Sl="bs.carousel",De=`.${Sl}`,No=".data-api",Cl="ArrowLeft",Ll="ArrowRight",Ol=500,Pt="next",nt="prev",it="left",yn="right",Nl=`slide${De}`,os=`slid${De}`,Dl=`keydown${De}`,kl=`mouseenter${De}`,Pl=`mouseleave${De}`,Rl=`dragstart${De}`,Ml=`load${De}${No}`,xl=`click${De}${No}`,Do="carousel",hn="active",$l="slide",Ul="carousel-item-end",Bl="carousel-item-start",Hl="carousel-item-next",Vl="carousel-item-prev",ko=".active",Po=".carousel-item",Fl=ko+Po,Wl=".carousel-item img",ql=".carousel-indicators",jl="[data-bs-slide], [data-bs-slide-to]",Kl='[data-bs-ride="carousel"]',zl={[Cl]:yn,[Ll]:it},Gl={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Yl={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class St extends ne{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=g.findOne(ql,this._element),this._addEventListeners(),this._config.ride===Do&&this.cycle()}static get Default(){return Gl}static get DefaultType(){return Yl}static get NAME(){return Il}next(){this._slide(Pt)}nextWhenVisible(){!document.hidden&&At(this._element)&&this.next()}prev(){this._slide(nt)}pause(){this._isSliding&&vo(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,os,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){h.one(this._element,os,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const r=e>s?Pt:nt;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&h.on(this._element,Dl,e=>this._keydown(e)),this._config.pause==="hover"&&(h.on(this._element,kl,()=>this.pause()),h.on(this._element,Pl,()=>this._maybeEnableCycle())),this._config.touch&&On.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of g.find(Wl,this._element))h.on(s,Rl,r=>r.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(it)),rightCallback:()=>this._slide(this._directionToOrder(yn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Ol+this._config.interval))}};this._swipeHelper=new On(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=zl[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=g.findOne(ko,this._indicatorsElement);t.classList.remove(hn),t.removeAttribute("aria-current");const s=g.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(hn),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const s=this._getActive(),r=e===Pt,i=t||sr(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=p=>h.trigger(this._element,p,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(Nl).defaultPrevented||!s||!i)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=r?Bl:Ul,f=r?Hl:Vl;i.classList.add(f),Kt(i),s.classList.add(u),i.classList.add(u);const d=()=>{i.classList.remove(u,f),i.classList.add(hn),s.classList.remove(hn,f,u),this._isSliding=!1,a(os)};this._queueCallback(d,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains($l)}_getActive(){return g.findOne(Fl,this._element)}_getItems(){return g.find(Po,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return z()?e===it?nt:Pt:e===it?Pt:nt}_orderToDirection(e){return z()?e===nt?it:yn:e===nt?yn:it}static jQueryInterface(e){return this.each(function(){const t=St.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(document,xl,jl,function(n){const e=g.getElementFromSelector(this);if(!e||!e.classList.contains(Do))return;n.preventDefault();const t=St.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){t.to(s),t._maybeEnableCycle();return}if(he.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});h.on(window,Ml,()=>{const n=g.find(Kl);for(const e of n)St.getOrCreateInstance(e)});J(St);const Jl="collapse",Xl="bs.collapse",Jt=`.${Xl}`,Ql=".data-api",Zl=`show${Jt}`,eu=`shown${Jt}`,tu=`hide${Jt}`,nu=`hidden${Jt}`,su=`click${Jt}${Ql}`,as="show",at="collapse",fn="collapsing",ru="collapsed",iu=`:scope .${at} .${at}`,ou="collapse-horizontal",au="width",cu="height",lu=".collapse.show, .collapse.collapsing",ks='[data-bs-toggle="collapse"]',uu={parent:null,toggle:!0},du={parent:"(null|element)",toggle:"boolean"};class yt extends ne{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const s=g.find(ks);for(const r of s){const i=g.getSelectorFromElement(r),o=g.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return uu}static get DefaultType(){return du}static get NAME(){return Jl}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(lu).filter(a=>a!==this._element).map(a=>yt.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||h.trigger(this._element,Zl).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(at),this._element.classList.add(fn),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(fn),this._element.classList.add(at,as),this._element.style[s]="",h.trigger(this._element,eu)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,tu).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Kt(this._element),this._element.classList.add(fn),this._element.classList.remove(at,as);for(const r of this._triggerArray){const i=g.getElementFromSelector(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(fn),this._element.classList.add(at),h.trigger(this._element,nu)};this._element.style[t]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(as)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Ce(e.parent),e}_getDimension(){return this._element.classList.contains(ou)?au:cu}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(ks);for(const t of e){const s=g.getElementFromSelector(t);s&&this._addAriaAndCollapsedClass([t],this._isShown(s))}}_getFirstLevelChildren(e){const t=g.find(iu,this._config.parent);return g.find(e,this._config.parent).filter(s=>!t.includes(s))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const s of e)s.classList.toggle(ru,!t),s.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const s=yt.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}h.on(document,su,ks,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const e of g.getMultipleElementsFromSelector(this))yt.getOrCreateInstance(e,{toggle:!1}).toggle()});J(yt);const jr="dropdown",hu="bs.dropdown",Xe=`.${hu}`,ir=".data-api",fu="Escape",Kr="Tab",pu="ArrowUp",zr="ArrowDown",mu=2,gu=`hide${Xe}`,_u=`hidden${Xe}`,Eu=`show${Xe}`,vu=`shown${Xe}`,Ro=`click${Xe}${ir}`,Mo=`keydown${Xe}${ir}`,yu=`keyup${Xe}${ir}`,ot="show",bu="dropup",wu="dropend",Tu="dropstart",Au="dropup-center",Iu="dropdown-center",We='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Su=`${We}.${ot}`,bn=".dropdown-menu",Cu=".navbar",Lu=".navbar-nav",Ou=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Nu=z()?"top-end":"top-start",Du=z()?"top-start":"top-end",ku=z()?"bottom-end":"bottom-start",Pu=z()?"bottom-start":"bottom-end",Ru=z()?"left-start":"right-start",Mu=z()?"right-start":"left-start",xu="top",$u="bottom",Uu={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Bu={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ee extends ne{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=g.next(this._element,bn)[0]||g.prev(this._element,bn)[0]||g.findOne(bn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Uu}static get DefaultType(){return Bu}static get NAME(){return jr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Le(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!h.trigger(this._element,Eu,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Lu))for(const s of[].concat(...document.body.children))h.on(s,"mouseover",Ln);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ot),this._element.classList.add(ot),h.trigger(this._element,vu,e)}}hide(){if(Le(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!h.trigger(this._element,gu,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",Ln);this._popper&&this._popper.destroy(),this._menu.classList.remove(ot),this._element.classList.remove(ot),this._element.setAttribute("aria-expanded","false"),he.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,_u,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!de(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${jr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof _o>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:de(this._config.reference)?e=Ce(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=nr(e,this._menu,t)}_isShown(){return this._menu.classList.contains(ot)}_getPlacement(){const e=this._parent;if(e.classList.contains(wu))return Ru;if(e.classList.contains(Tu))return Mu;if(e.classList.contains(Au))return xu;if(e.classList.contains(Iu))return $u;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(bu)?t?Du:Nu:t?Pu:ku}_detectNavbar(){return this._element.closest(Cu)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(he.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...B(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const s=g.find(Ou,this._menu).filter(r=>At(r));s.length&&sr(s,t,e===zr,!s.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=ee.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===mu||e.type==="keyup"&&e.key!==Kr)return;const t=g.find(Su);for(const s of t){const r=ee.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=e.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Kr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:r._element};e.type==="click"&&(a.clickEvent=e),r._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),s=e.key===fu,r=[pu,zr].includes(e.key);if(!r&&!s||t&&!s)return;e.preventDefault();const i=this.matches(We)?this:g.prev(this,We)[0]||g.next(this,We)[0]||g.findOne(We,e.delegateTarget.parentNode),o=ee.getOrCreateInstance(i);if(r){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),i.focus())}}h.on(document,Mo,We,ee.dataApiKeydownHandler);h.on(document,Mo,bn,ee.dataApiKeydownHandler);h.on(document,Ro,ee.clearMenus);h.on(document,yu,ee.clearMenus);h.on(document,Ro,We,function(n){n.preventDefault(),ee.getOrCreateInstance(this).toggle()});J(ee);const xo="backdrop",Hu="fade",Gr="show",Yr=`mousedown.bs.${xo}`,Vu={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fu={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class $o extends zt{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Vu}static get DefaultType(){return Fu}static get NAME(){return xo}show(e){if(!this._config.isVisible){B(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Kt(t),t.classList.add(Gr),this._emulateAnimation(()=>{B(e)})}hide(e){if(!this._config.isVisible){B(e);return}this._getElement().classList.remove(Gr),this._emulateAnimation(()=>{this.dispose(),B(e)})}dispose(){this._isAppended&&(h.off(this._element,Yr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Hu),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ce(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),h.on(e,Yr,()=>{B(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){wo(e,this._getElement(),this._config.isAnimated)}}const Wu="focustrap",qu="bs.focustrap",Nn=`.${qu}`,ju=`focusin${Nn}`,Ku=`keydown.tab${Nn}`,zu="Tab",Gu="forward",Jr="backward",Yu={autofocus:!0,trapElement:null},Ju={autofocus:"boolean",trapElement:"element"};class Uo extends zt{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Yu}static get DefaultType(){return Ju}static get NAME(){return Wu}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,Nn),h.on(document,ju,e=>this._handleFocusin(e)),h.on(document,Ku,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,Nn))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const s=g.focusableChildren(t);s.length===0?t.focus():this._lastTabNavDirection===Jr?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===zu&&(this._lastTabNavDirection=e.shiftKey?Jr:Gu)}}const Xr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qr=".sticky-top",pn="padding-right",Zr="margin-right";class Ps{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,pn,t=>t+e),this._setElementAttributes(Xr,pn,t=>t+e),this._setElementAttributes(Qr,Zr,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,pn),this._resetElementAttributes(Xr,pn),this._resetElementAttributes(Qr,Zr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const s=e.style.getPropertyValue(t);s&&he.setDataAttribute(e,t,s)}_resetElementAttributes(e,t){const s=r=>{const i=he.getDataAttribute(r,t);if(i===null){r.style.removeProperty(t);return}he.removeDataAttribute(r,t),r.style.setProperty(t,i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,t){if(de(e)){t(e);return}for(const s of g.find(e,this._element))t(s)}}const Xu="modal",Qu="bs.modal",G=`.${Qu}`,Zu=".data-api",ed="Escape",td=`hide${G}`,nd=`hidePrevented${G}`,Bo=`hidden${G}`,Ho=`show${G}`,sd=`shown${G}`,rd=`resize${G}`,id=`click.dismiss${G}`,od=`mousedown.dismiss${G}`,ad=`keydown.dismiss${G}`,cd=`click${G}${Zu}`,ei="modal-open",ld="fade",ti="show",cs="modal-static",ud=".modal.show",dd=".modal-dialog",hd=".modal-body",fd='[data-bs-toggle="modal"]',pd={backdrop:!0,focus:!0,keyboard:!0},md={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class x extends ne{constructor(e,t){super(e,t),this._dialog=g.findOne(dd,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ps,this._addEventListeners()}static get Default(){return pd}static get DefaultType(){return md}static get NAME(){return Xu}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||h.trigger(this._element,Ho,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ei),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,td).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ti),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,G),h.off(this._dialog,G),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new $o({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Uo({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=g.findOne(hd,this._dialog);t&&(t.scrollTop=0),Kt(this._element),this._element.classList.add(ti);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,sd,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,ad,e=>{if(e.key===ed){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,rd,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,od,e=>{h.one(this._element,id,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ei),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Bo)})}_isAnimated(){return this._element.classList.contains(ld)}_triggerBackdropTransition(){if(h.trigger(this._element,nd).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(cs)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(cs),this._queueCallback(()=>{this._element.classList.remove(cs),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),s=t>0;if(s&&!e){const r=z()?"paddingLeft":"paddingRight";this._element.style[r]=`${t}px`}if(!s&&e){const r=z()?"paddingRight":"paddingLeft";this._element.style[r]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const s=x.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](t)}})}}h.on(document,cd,fd,function(n){const e=g.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(e,Ho,r=>{r.defaultPrevented||h.one(e,Bo,()=>{At(this)&&this.focus()})});const t=g.findOne(ud);t&&x.getInstance(t).hide(),x.getOrCreateInstance(e).toggle(this)});Fn(x);J(x);const gd="offcanvas",_d="bs.offcanvas",Ee=`.${_d}`,Vo=".data-api",Ed=`load${Ee}${Vo}`,vd="Escape",ni="show",si="showing",ri="hiding",yd="offcanvas-backdrop",Fo=".offcanvas.show",bd=`show${Ee}`,wd=`shown${Ee}`,Td=`hide${Ee}`,ii=`hidePrevented${Ee}`,Wo=`hidden${Ee}`,Ad=`resize${Ee}`,Id=`click${Ee}${Vo}`,Sd=`keydown.dismiss${Ee}`,Cd='[data-bs-toggle="offcanvas"]',Ld={backdrop:!0,keyboard:!0,scroll:!1},Od={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class me extends ne{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ld}static get DefaultType(){return Od}static get NAME(){return gd}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||h.trigger(this._element,bd,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ps().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(si);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ni),this._element.classList.remove(si),h.trigger(this._element,wd,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,Td).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ri),this._backdrop.hide();const t=()=>{this._element.classList.remove(ni,ri),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ps().reset(),h.trigger(this._element,Wo)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,ii);return}this.hide()},t=!!this._config.backdrop;return new $o({className:yd,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Uo({trapElement:this._element})}_addEventListeners(){h.on(this._element,Sd,e=>{if(e.key===vd){if(this._config.keyboard){this.hide();return}h.trigger(this._element,ii)}})}static jQueryInterface(e){return this.each(function(){const t=me.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}h.on(document,Id,Cd,function(n){const e=g.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Le(this))return;h.one(e,Wo,()=>{At(this)&&this.focus()});const t=g.findOne(Fo);t&&t!==e&&me.getInstance(t).hide(),me.getOrCreateInstance(e).toggle(this)});h.on(window,Ed,()=>{for(const n of g.find(Fo))me.getOrCreateInstance(n).show()});h.on(window,Ad,()=>{for(const n of g.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&me.getOrCreateInstance(n).hide()});Fn(me);J(me);const Nd=/^aria-[\w-]*$/i,qo={"*":["class","dir","id","lang","role",Nd],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Dd=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),kd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Pd=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?Dd.has(t)?!!kd.test(n.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(t))};function Rd(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const r=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)Pd(u,l)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const Md="TemplateFactory",xd={allowList:qo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},$d={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ud={entry:"(string|element|function|null)",selector:"(string|element)"};class Bd extends zt{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return xd}static get DefaultType(){return $d}static get NAME(){return Md}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&t.classList.add(...s.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,s]of Object.entries(e))super._typeCheckConfig({selector:t,entry:s},Ud)}_setContent(e,t,s){const r=g.findOne(s,e);if(r){if(t=this._resolvePossibleFunction(t),!t){r.remove();return}if(de(t)){this._putElementInTemplate(Ce(t),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(t);return}r.textContent=t}}_maybeSanitize(e){return this._config.sanitize?Rd(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return B(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const Hd="tooltip",Vd=new Set(["sanitize","allowList","sanitizeFn"]),ls="fade",Fd="modal",mn="show",Wd=".tooltip-inner",oi=`.${Fd}`,ai="hide.bs.modal",Rt="hover",us="focus",ds="click",qd="manual",jd="hide",Kd="hidden",zd="show",Gd="shown",Yd="inserted",Jd="click",Xd="focusin",Qd="focusout",Zd="mouseenter",eh="mouseleave",th={AUTO:"auto",TOP:"top",RIGHT:z()?"left":"right",BOTTOM:"bottom",LEFT:z()?"right":"left"},nh={allowList:qo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},sh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Qe extends ne{constructor(e,t){if(typeof _o>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return nh}static get DefaultType(){return sh}static get NAME(){return Hd}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(oi),ai,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=h.trigger(this._element,this.constructor.eventName(zd)),s=(yo(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),h.trigger(this._element,this.constructor.eventName(Yd))),this._popper=this._createPopper(r),r.classList.add(mn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Ln);const o=()=>{h.trigger(this._element,this.constructor.eventName(Gd)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(jd)).defaultPrevented)return;if(this._getTipElement().classList.remove(mn),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))h.off(r,"mouseover",Ln);this._activeTrigger[ds]=!1,this._activeTrigger[us]=!1,this._activeTrigger[Rt]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(Kd)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(ls,mn),t.classList.add(`bs-${this.constructor.NAME}-auto`);const s=qc(this.constructor.NAME).toString();return t.setAttribute("id",s),this._isAnimated()&&t.classList.add(ls),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Bd({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Wd]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ls)}_isShown(){return this.tip&&this.tip.classList.contains(mn)}_createPopper(e){const t=B(this._config.placement,[this,e,this._element]),s=th[t.toUpperCase()];return nr(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return B(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...t,...B(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")h.on(this._element,this.constructor.eventName(Jd),this._config.selector,s=>{const r=this._initializeOnDelegatedTarget(s);r._activeTrigger[ds]=!(r._isShown()&&r._activeTrigger[ds]),r.toggle()});else if(t!==qd){const s=t===Rt?this.constructor.eventName(Zd):this.constructor.eventName(Xd),r=t===Rt?this.constructor.eventName(eh):this.constructor.eventName(Qd);h.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?us:Rt]=!0,o._enter()}),h.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?us:Rt]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(oi),ai,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=he.getDataAttributes(this._element);for(const s of Object.keys(t))Vd.has(s)&&delete t[s];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Ce(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,s]of Object.entries(this._config))this.constructor.Default[t]!==s&&(e[t]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Qe.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}J(Qe);const rh="popover",ih=".popover-header",oh=".popover-body",ah={...Qe.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},ch={...Qe.DefaultType,content:"(null|string|element|function)"};class Wn extends Qe{static get Default(){return ah}static get DefaultType(){return ch}static get NAME(){return rh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[ih]:this._getTitle(),[oh]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=Wn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}J(Wn);const lh="scrollspy",uh="bs.scrollspy",or=`.${uh}`,dh=".data-api",hh=`activate${or}`,ci=`click${or}`,fh=`load${or}${dh}`,ph="dropdown-item",st="active",mh='[data-bs-spy="scroll"]',hs="[href]",gh=".nav, .list-group",li=".nav-link",_h=".nav-item",Eh=".list-group-item",vh=`${li}, ${_h} > ${li}, ${Eh}`,yh=".dropdown",bh=".dropdown-toggle",wh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Th={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Xt extends ne{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return wh}static get DefaultType(){return Th}static get NAME(){return lh}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ce(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,ci),h.on(this._config.target,ci,hs,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const s=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=g.find(hs,this._config.target);for(const t of e){if(!t.hash||Le(t))continue;const s=g.findOne(decodeURI(t.hash),this._element);At(s)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(st),this._activateParents(e),h.trigger(this._element,hh,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(ph)){g.findOne(bh,e.closest(yh)).classList.add(st);return}for(const t of g.parents(e,gh))for(const s of g.prev(t,vh))s.classList.add(st)}_clearActiveClass(e){e.classList.remove(st);const t=g.find(`${hs}.${st}`,e);for(const s of t)s.classList.remove(st)}static jQueryInterface(e){return this.each(function(){const t=Xt.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(window,fh,()=>{for(const n of g.find(mh))Xt.getOrCreateInstance(n)});J(Xt);const Ah="tab",Ih="bs.tab",Ze=`.${Ih}`,Sh=`hide${Ze}`,Ch=`hidden${Ze}`,Lh=`show${Ze}`,Oh=`shown${Ze}`,Nh=`click${Ze}`,Dh=`keydown${Ze}`,kh=`load${Ze}`,Ph="ArrowLeft",ui="ArrowRight",Rh="ArrowUp",di="ArrowDown",fs="Home",hi="End",qe="active",fi="fade",ps="show",Mh="dropdown",jo=".dropdown-toggle",xh=".dropdown-menu",ms=`:not(${jo})`,$h='.list-group, .nav, [role="tablist"]',Uh=".nav-item, .list-group-item",Bh=`.nav-link${ms}, .list-group-item${ms}, [role="tab"]${ms}`,Ko='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',gs=`${Bh}, ${Ko}`,Hh=`.${qe}[data-bs-toggle="tab"], .${qe}[data-bs-toggle="pill"], .${qe}[data-bs-toggle="list"]`;class Oe extends ne{constructor(e){super(e),this._parent=this._element.closest($h),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Dh,t=>this._keydown(t)))}static get NAME(){return Ah}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),s=t?h.trigger(t,Sh,{relatedTarget:e}):null;h.trigger(e,Lh,{relatedTarget:t}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(qe),this._activate(g.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ps);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),h.trigger(e,Oh,{relatedTarget:t})};this._queueCallback(s,e,e.classList.contains(fi))}_deactivate(e,t){if(!e)return;e.classList.remove(qe),e.blur(),this._deactivate(g.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ps);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),h.trigger(e,Ch,{relatedTarget:t})};this._queueCallback(s,e,e.classList.contains(fi))}_keydown(e){if(![Ph,ui,Rh,di,fs,hi].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(r=>!Le(r));let s;if([fs,hi].includes(e.key))s=t[e.key===fs?0:t.length-1];else{const r=[ui,di].includes(e.key);s=sr(t,e.target,r,!0)}s&&(s.focus({preventScroll:!0}),Oe.getOrCreateInstance(s).show())}_getChildren(){return g.find(gs,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const s of t)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",t),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=g.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const s=this._getOuterElement(e);if(!s.classList.contains(Mh))return;const r=(i,o)=>{const a=g.findOne(i,s);a&&a.classList.toggle(o,t)};r(jo,qe),r(xh,ps),s.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,s){e.hasAttribute(t)||e.setAttribute(t,s)}_elemIsActive(e){return e.classList.contains(qe)}_getInnerElement(e){return e.matches(gs)?e:g.findOne(gs,e)}_getOuterElement(e){return e.closest(Uh)||e}static jQueryInterface(e){return this.each(function(){const t=Oe.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(document,Nh,Ko,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Le(this)&&Oe.getOrCreateInstance(this).show()});h.on(window,kh,()=>{for(const n of g.find(Hh))Oe.getOrCreateInstance(n)});J(Oe);const Vh="toast",Fh="bs.toast",ke=`.${Fh}`,Wh=`mouseover${ke}`,qh=`mouseout${ke}`,jh=`focusin${ke}`,Kh=`focusout${ke}`,zh=`hide${ke}`,Gh=`hidden${ke}`,Yh=`show${ke}`,Jh=`shown${ke}`,Xh="fade",pi="hide",gn="show",_n="showing",Qh={animation:"boolean",autohide:"boolean",delay:"number"},Zh={animation:!0,autohide:!0,delay:5e3};class Ct extends ne{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Zh}static get DefaultType(){return Qh}static get NAME(){return Vh}show(){if(h.trigger(this._element,Yh).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Xh);const t=()=>{this._element.classList.remove(_n),h.trigger(this._element,Jh),this._maybeScheduleHide()};this._element.classList.remove(pi),Kt(this._element),this._element.classList.add(gn,_n),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,zh).defaultPrevented)return;const t=()=>{this._element.classList.add(pi),this._element.classList.remove(_n,gn),h.trigger(this._element,Gh)};this._element.classList.add(_n),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(gn),super.dispose()}isShown(){return this._element.classList.contains(gn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Wh,e=>this._onInteraction(e,!0)),h.on(this._element,qh,e=>this._onInteraction(e,!1)),h.on(this._element,jh,e=>this._onInteraction(e,!0)),h.on(this._element,Kh,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=Ct.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}Fn(Ct);J(Ct);const zo=Object.freeze(Object.defineProperty({__proto__:null,Alert:Gt,Button:Yt,Carousel:St,Collapse:yt,Dropdown:ee,Modal:x,Offcanvas:me,Popover:Wn,ScrollSpy:Xt,Tab:Oe,Toast:Ct,Tooltip:Qe},Symbol.toStringTag,{value:"Module"})),ef=()=>{};var mi={};/**
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
 */const Go=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},tf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(t[u],t[f],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Go(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new nf;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),f!==64){const v=l<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sf=function(n){const e=Go(n);return Yo.encodeByteArray(e,!0)},Jo=function(n){return sf(n).replace(/\./g,"")},Xo=function(n){try{return Yo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const of=()=>rf().__FIREBASE_DEFAULTS__,af=()=>{if(typeof process>"u"||typeof mi>"u")return;const n=mi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xo(n[1]);return e&&JSON.parse(e)},ar=()=>{try{return ef()||of()||af()||cf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lf=n=>{var e,t;return(t=(e=ar())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qo=()=>{var n;return(n=ar())==null?void 0:n.config},Zo=n=>{var e;return(e=ar())==null?void 0:e[`_${n}`]};/**
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
 */class uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function qn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function df(n){return(await fetch(n,{credentials:"include"})).ok}const Bt={};function hf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bt))Bt[e]?n.emulator.push(e):n.prod.push(e);return n}function ff(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let gi=!1;function pf(n,e){if(typeof window>"u"||typeof document>"u"||!qn(window.location.host)||Bt[n]===e||Bt[n]||gi)return;Bt[n]=e;function t(d){return`__firebase__banner__${d}`}const s="__firebase__banner",i=hf().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{gi=!0,o()},d}function u(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=ff(s),p=t("text"),v=document.getElementById(p)||document.createElement("span"),m=t("learnmore"),b=document.getElementById(m)||document.createElement("a"),w=t("preprendIcon"),T=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const C=d.element;a(C),u(b,m);const y=l();c(T,w),C.append(T,v,b,y),document.body.appendChild(C)}i?(v.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function gf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _f(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){const n=$();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function bf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const wf="FirebaseError";class Pe extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=wf,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Tf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pe(r,a,s)}}function Tf(n,e){return n.replace(Af,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Af=/\{\$([^}]+)}/g;function If(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(_i(i)&&_i(o)){if(!bt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function _i(n){return n!==null&&typeof n=="object"}/**
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
 */function Zt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Sf(n,e){const t=new Cf(n,e);return t.subscribe.bind(t)}class Cf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Lf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=_s),r.error===void 0&&(r.error=_s),r.complete===void 0&&(r.complete=_s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fe="[DEFAULT]";/**
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
 */class Of{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new uf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Df(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nf(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nf(n){return n===Fe?void 0:n}function Df(n){return n.instantiationMode==="EAGER"}/**
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
 */class kf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Of(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const Pf={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Rf=S.INFO,Mf={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},xf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Mf[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ea{constructor(e){this.name=e,this._logLevel=Rf,this._logHandler=xf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const $f=(n,e)=>e.some(t=>n instanceof t);let Ei,vi;function Uf(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bf(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ta=new WeakMap,Rs=new WeakMap,na=new WeakMap,Es=new WeakMap,cr=new WeakMap;function Hf(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ie(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ta.set(t,n)}).catch(()=>{}),cr.set(e,n),e}function Vf(n){if(Rs.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Rs.set(n,e)}let Ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Rs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||na.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ie(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ff(n){Ms=n(Ms)}function Wf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(vs(this),e,...t);return na.set(s,e.sort?e.sort():[e]),Ie(s)}:Bf().includes(n)?function(...e){return n.apply(vs(this),e),Ie(ta.get(this))}:function(...e){return Ie(n.apply(vs(this),e))}}function qf(n){return typeof n=="function"?Wf(n):(n instanceof IDBTransaction&&Vf(n),$f(n,Uf())?new Proxy(n,Ms):n)}function Ie(n){if(n instanceof IDBRequest)return Hf(n);if(Es.has(n))return Es.get(n);const e=qf(n);return e!==n&&(Es.set(n,e),cr.set(e,n)),e}const vs=n=>cr.get(n);function jf(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Ie(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ie(o.result),c.oldVersion,c.newVersion,Ie(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kf=["get","getKey","getAll","getAllKeys","count"],zf=["put","add","delete","clear"],ys=new Map;function yi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ys.get(e))return ys.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=zf.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Kf.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return ys.set(e,i),i}Ff(n=>({...n,get:(e,t,s)=>yi(e,t)||n.get(e,t,s),has:(e,t)=>!!yi(e,t)||n.has(e,t)}));/**
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
 */class Gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xs="@firebase/app",bi="0.14.3";/**
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
 */const ge=new ea("@firebase/app"),Jf="@firebase/app-compat",Xf="@firebase/analytics-compat",Qf="@firebase/analytics",Zf="@firebase/app-check-compat",ep="@firebase/app-check",tp="@firebase/auth",np="@firebase/auth-compat",sp="@firebase/database",rp="@firebase/data-connect",ip="@firebase/database-compat",op="@firebase/functions",ap="@firebase/functions-compat",cp="@firebase/installations",lp="@firebase/installations-compat",up="@firebase/messaging",dp="@firebase/messaging-compat",hp="@firebase/performance",fp="@firebase/performance-compat",pp="@firebase/remote-config",mp="@firebase/remote-config-compat",gp="@firebase/storage",_p="@firebase/storage-compat",Ep="@firebase/firestore",vp="@firebase/ai",yp="@firebase/firestore-compat",bp="firebase",wp="12.3.0";/**
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
 */const $s="[DEFAULT]",Tp={[xs]:"fire-core",[Jf]:"fire-core-compat",[Qf]:"fire-analytics",[Xf]:"fire-analytics-compat",[ep]:"fire-app-check",[Zf]:"fire-app-check-compat",[tp]:"fire-auth",[np]:"fire-auth-compat",[sp]:"fire-rtdb",[rp]:"fire-data-connect",[ip]:"fire-rtdb-compat",[op]:"fire-fn",[ap]:"fire-fn-compat",[cp]:"fire-iid",[lp]:"fire-iid-compat",[up]:"fire-fcm",[dp]:"fire-fcm-compat",[hp]:"fire-perf",[fp]:"fire-perf-compat",[pp]:"fire-rc",[mp]:"fire-rc-compat",[gp]:"fire-gcs",[_p]:"fire-gcs-compat",[Ep]:"fire-fst",[yp]:"fire-fst-compat",[vp]:"fire-vertex","fire-js":"fire-js",[bp]:"fire-js-all"};/**
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
 */const Dn=new Map,Ap=new Map,Us=new Map;function wi(n,e){try{n.container.addComponent(e)}catch(t){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vt(n){const e=n.name;if(Us.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;Us.set(e,n);for(const t of Dn.values())wi(t,n);for(const t of Ap.values())wi(t,n);return!0}function sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function q(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ip={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Se=new Qt("app","Firebase",Ip);/**
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
 */class Sp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
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
 */const en=wp;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:$s,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Se.create("bad-app-name",{appName:String(r)});if(t||(t=Qo()),!t)throw Se.create("no-options");const i=Dn.get(r);if(i){if(bt(t,i.options)&&bt(s,i.config))return i;throw Se.create("duplicate-app",{appName:r})}const o=new kf(r);for(const c of Us.values())o.addComponent(c);const a=new Sp(t,s,o);return Dn.set(r,a),a}function Cp(n=$s){const e=Dn.get(n);if(!e&&n===$s&&Qo())return ra();if(!e)throw Se.create("no-app",{appName:n});return e}function ut(n,e,t){let s=Tp[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(o.join(" "));return}Vt(new wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lp="firebase-heartbeat-database",Op=1,Ft="firebase-heartbeat-store";let bs=null;function ia(){return bs||(bs=jf(Lp,Op,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ft)}catch(t){console.warn(t)}}}}).catch(n=>{throw Se.create("idb-open",{originalErrorMessage:n.message})})),bs}async function Np(n){try{const t=(await ia()).transaction(Ft),s=await t.objectStore(Ft).get(oa(n));return await t.done,s}catch(e){if(e instanceof Pe)ge.warn(e.message);else{const t=Se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(t.message)}}}async function Ti(n,e){try{const s=(await ia()).transaction(Ft,"readwrite");await s.objectStore(Ft).put(e,oa(n)),await s.done}catch(t){if(t instanceof Pe)ge.warn(t.message);else{const s=Se.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ge.warn(s.message)}}}function oa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Dp=1024,kp=30;class Pp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ai();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>kp){const o=xp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ge.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ai(),{heartbeatsToSend:s,unsentEntries:r}=Rp(this._heartbeatsCache.heartbeats),i=Jo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ge.warn(t),""}}}function Ai(){return new Date().toISOString().substring(0,10)}function Rp(n,e=Dp){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ii(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ii(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Mp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?bf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Np(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ti(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ti(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ii(n){return Jo(JSON.stringify({version:2,heartbeats:n})).length}function xp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function $p(n){Vt(new wt("platform-logger",e=>new Gf(e),"PRIVATE")),Vt(new wt("heartbeat",e=>new Pp(e),"PRIVATE")),ut(xs,bi,n),ut(xs,bi,"esm2020"),ut("fire-js","")}$p("");var Up="firebase",Bp="12.3.0";/**
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
 */ut(Up,Bp,"app");function aa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hp=aa,ca=new Qt("auth","Firebase",aa());/**
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
 */const kn=new ea("@firebase/auth");function Vp(n,...e){kn.logLevel<=S.WARN&&kn.warn(`Auth (${en}): ${n}`,...e)}function wn(n,...e){kn.logLevel<=S.ERROR&&kn.error(`Auth (${en}): ${n}`,...e)}/**
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
 */function Y(n,...e){throw ur(n,...e)}function te(n,...e){return ur(n,...e)}function lr(n,e,t){const s={...Hp(),[e]:t};return new Qt("auth","Firebase",s).create(e,{appName:n.name})}function fe(n){return lr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fp(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Y(n,"argument-error"),lr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ur(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ca.create(n,...e)}function E(n,e,...t){if(!n)throw ur(e,...t)}function le(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wn(e),new Error(e)}function _e(n,e){n||le(e)}/**
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
 */function Bs(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Wp(){return Si()==="http:"||Si()==="https:"}function Si(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wp()||_f()||"connection"in navigator)?navigator.onLine:!0}function jp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class tn{constructor(e,t){this.shortDelay=e,this.longDelay=t,_e(t>e,"Short delay should be less than long delay!"),this.isMobile=mf()||Ef()}get(){return qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dr(n,e){_e(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class la{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gp=new tn(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Me(n,e,t,s,r={}){return ua(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Zt({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:c,...i};return gf()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&qn(n.emulatorConfig.host)&&(l.credentials="include"),la.fetch()(await da(n,n.config.apiHost,t,a),l)})}async function ua(n,e,t){n._canInitEmulator=!1;const s={...Kp,...e};try{const r=new Jp(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw En(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw En(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw En(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw En(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lr(n,u,l);Y(n,u)}}catch(r){if(r instanceof Pe)throw r;Y(n,"network-request-failed",{message:String(r)})}}async function nn(n,e,t,s,r={}){const i=await Me(n,e,t,s,r);return"mfaPendingCredential"in i&&Y(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function da(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?dr(n.config,r):`${n.config.apiScheme}://${r}`;return zp.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Yp(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(te(this.auth,"network-request-failed")),Gp.get())})}}function En(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=te(n,e,s);return r.customData._tokenResponse=t,r}function Ci(n){return n!==void 0&&n.enterprise!==void 0}class Xp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yp(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qp(n,e){return Me(n,"GET","/v2/recaptchaConfig",Re(n,e))}/**
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
 */async function Zp(n,e){return Me(n,"POST","/v1/accounts:delete",e)}async function Pn(n,e){return Me(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ht(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(n,e=!1){const t=ve(n),s=await t.getIdToken(e),r=hr(s);E(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ht(ws(r.auth_time)),issuedAtTime:Ht(ws(r.iat)),expirationTime:Ht(ws(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ws(n){return Number(n)*1e3}function hr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xo(t);return r?JSON.parse(r):(wn("Failed to decode base64 JWT payload"),null)}catch(r){return wn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Li(n){const e=hr(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pe&&tm(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ht(this.lastLoginAt),this.creationTime=Ht(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rn(n){var f;const e=n.auth,t=await n.getIdToken(),s=await Wt(n,Pn(e,{idToken:t}));E(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?ha(r.providerUserInfo):[],o=rm(n.providerData,i),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Hs(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,u)}async function sm(n){const e=ve(n);await Rn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rm(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ha(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function im(n,e){const t=await ua(n,{},async()=>{const s=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await da(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&qn(n.emulatorConfig.host)&&(c.credentials="include"),la.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function om(n,e){return Me(n,"POST","/v2/accounts:revokeToken",Re(n,e))}/**
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
 */class dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Li(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){E(e.length!==0,"internal-error");const t=Li(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await im(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new dt;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dt,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
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
 */function we(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Z{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return em(this,e)}reload(){return sm(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Z({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Rn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(q(this.auth.app))return Promise.reject(fe(this.auth));const e=await this.getIdToken();return await Wt(this,Zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:p,providerData:v,stsTokenManager:m}=t;E(f&&m,e,"internal-error");const b=dt.fromJSON(this.name,m);E(typeof f=="string",e,"internal-error"),we(s,e.name),we(r,e.name),E(typeof d=="boolean",e,"internal-error"),E(typeof p=="boolean",e,"internal-error"),we(i,e.name),we(o,e.name),we(a,e.name),we(c,e.name),we(l,e.name),we(u,e.name);const w=new Z({uid:f,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:p,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:b,createdAt:l,lastLoginAt:u});return v&&Array.isArray(v)&&(w.providerData=v.map(T=>({...T}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new dt;r.updateFromServerResponse(t);const i=new Z({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Rn(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];E(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ha(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new dt;a.updateFromIdToken(s);const c=new Z({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Hs(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Oi=new Map;function ue(n){_e(n instanceof Function,"Expected a class definition");let e=Oi.get(n);return e?(_e(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oi.set(n,e),e)}/**
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
 */class fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fa.type="NONE";const Ni=fa;/**
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
 */function Tn(n,e,t){return`firebase:${n}:${e}:${t}`}class ht{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Tn(this.userKey,r.apiKey,i),this.fullPersistenceKey=Tn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pn(this.auth,{idToken:e}).catch(()=>{});return t?Z._fromGetAccountInfoResponse(this.auth,t,e):null}return Z._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ht(ue(Ni),e,s);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ue(Ni);const o=Tn(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Pn(e,{idToken:u}).catch(()=>{});if(!d)break;f=await Z._fromGetAccountInfoResponse(e,d,u)}else f=Z._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ht(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ht(i,e,s))}}/**
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
 */function Di(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_a(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(va(e))return"Blackberry";if(ya(e))return"Webos";if(ma(e))return"Safari";if((e.includes("chrome/")||ga(e))&&!e.includes("edge/"))return"Chrome";if(Ea(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pa(n=$()){return/firefox\//i.test(n)}function ma(n=$()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ga(n=$()){return/crios\//i.test(n)}function _a(n=$()){return/iemobile/i.test(n)}function Ea(n=$()){return/android/i.test(n)}function va(n=$()){return/blackberry/i.test(n)}function ya(n=$()){return/webos/i.test(n)}function fr(n=$()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function am(n=$()){var e;return fr(n)&&!!((e=window.navigator)!=null&&e.standalone)}function cm(){return vf()&&document.documentMode===10}function ba(n=$()){return fr(n)||Ea(n)||ya(n)||va(n)||/windows phone/i.test(n)||_a(n)}/**
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
 */function wa(n,e=[]){let t;switch(n){case"Browser":t=Di($());break;case"Worker":t=`${Di($())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${s}`}/**
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
 */class lm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function um(n,e={}){return Me(n,"GET","/v2/passwordPolicy",Re(n,e))}/**
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
 */const dm=6;class hm{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fm{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ki(this),this.idTokenSubscription=new ki(this),this.beforeStateQueue=new lm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ca,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ht.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pn(this,{idToken:e}),s=await Z._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(q(this.app))return Promise.reject(fe(this));const t=e?ve(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return q(this.app)?Promise.reject(fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return q(this.app)?Promise.reject(fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await um(this),t=new hm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await om(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await ht.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function xe(n){return ve(n)}class ki{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sf(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pm(n){jn=n}function Ta(n){return jn.loadJS(n)}function mm(){return jn.recaptchaEnterpriseScript}function gm(){return jn.gapiScript}function _m(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Em{constructor(){this.enterprise=new vm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ym="recaptcha-enterprise",Aa="NO_RECAPTCHA";class bm{constructor(e){this.type=ym,this.auth=xe(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ci(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Aa)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Em().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&Ci(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mm();c.length!==0&&(c+=a),Ta(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Pi(n,e,t,s=!1,r=!1){const i=new bm(n);let o;if(r)o=Aa;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vs(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pi(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Pi(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function wm(n,e){const t=sa(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(bt(i,e??{}))return r;Y(r,"already-initialized")}return t.initialize({options:e})}function Tm(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ue);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Am(n,e,t){const s=xe(n);E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ia(e),{host:o,port:a}=Im(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){E(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),E(bt(l,s.config.emulator)&&bt(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,qn(o)?(df(`${i}//${o}${c}`),pf("Auth",!0)):Sm()}function Ia(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Im(n){const e=Ia(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ri(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ri(o)}}}function Ri(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,t){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}}async function Cm(n,e){return Me(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Lm(n,e){return nn(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}/**
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
 */async function Om(n,e){return nn(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function Nm(n,e){return nn(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}/**
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
 */class qt extends pr{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new qt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,t,"signInWithPassword",Lm);case"emailLink":return Om(e,{email:this._email,oobCode:this._password});default:Y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vs(e,s,"signUpPassword",Cm);case"emailLink":return Nm(e,{idToken:t,email:this._email,oobCode:this._password});default:Y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ft(n,e){return nn(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}/**
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
 */const Dm="http://localhost";class Ye extends pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Ye(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ft(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:Dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zt(t)}return e}}/**
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
 */function km(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pm(n){const e=Mt(xt(n)).link,t=e?Mt(xt(e)).deep_link_id:null,s=Mt(xt(n)).deep_link_id;return(s?Mt(xt(s)).link:null)||s||t||e||n}class mr{constructor(e){const t=Mt(xt(e)),s=t.apiKey??null,r=t.oobCode??null,i=km(t.mode??null);E(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Pm(e);try{return new mr(t)}catch{return null}}}/**
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
 */class Lt{constructor(){this.providerId=Lt.PROVIDER_ID}static credential(e,t){return qt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=mr.parseLink(t);return E(s,"argument-error"),qt._fromEmailAndCode(e,s.code,s.tenantId)}}Lt.PROVIDER_ID="password";Lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sn extends gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Te extends sn{constructor(){super("facebook.com")}static credential(e){return Ye._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
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
 */class ae extends sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ye._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ae.credential(t,s)}catch{return null}}}ae.GOOGLE_SIGN_IN_METHOD="google.com";ae.PROVIDER_ID="google.com";/**
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
 */class ce extends sn{constructor(){super("github.com")}static credential(e){return Ye._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.GITHUB_SIGN_IN_METHOD="github.com";ce.PROVIDER_ID="github.com";/**
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
 */class Ae extends sn{constructor(){super("twitter.com")}static credential(e,t){return Ye._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ae.credential(t,s)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */async function Rm(n,e){return nn(n,"POST","/v1/accounts:signUp",Re(n,e))}/**
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
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Z._fromIdTokenResponse(e,s,r),o=Mi(s);return new Je({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Mi(s);return new Je({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Mi(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Mn extends Pe{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Mn(e,t,s,r)}}function Sa(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mn._fromErrorAndOperation(n,i,e,s):i})}async function Mm(n,e,t=!1){const s=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",s)}/**
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
 */async function xm(n,e,t=!1){const{auth:s}=n;if(q(s.app))return Promise.reject(fe(s));const r="reauthenticate";try{const i=await Wt(n,Sa(s,r,e,n),t);E(i.idToken,s,"internal-error");const o=hr(i.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Je._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Y(s,"user-mismatch"),i}}/**
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
 */async function Ca(n,e,t=!1){if(q(n.app))return Promise.reject(fe(n));const s="signIn",r=await Sa(n,s,e),i=await Je._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function $m(n,e){return Ca(xe(n),e)}/**
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
 */async function La(n){const e=xe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Um(n,e,t){if(q(n.app))return Promise.reject(fe(n));const s=xe(n),o=await Vs(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Rm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&La(n),c}),a=await Je._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Bm(n,e,t){return q(n.app)?Promise.reject(fe(n)):$m(ve(n),Lt.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&La(n),s})}function Hm(n,e,t,s){return ve(n).onIdTokenChanged(e,t,s)}function Vm(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function Fm(n,e,t,s){return ve(n).onAuthStateChanged(e,t,s)}function Wm(n){return ve(n).signOut()}const xn="__sak";/**
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
 */class Oa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xn,"1"),this.storage.removeItem(xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qm=1e3,jm=10;class Na extends Oa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ba(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);cm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jm):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Na.type="LOCAL";const Km=Na;/**
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
 */class Da extends Oa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Da.type="SESSION";const ka=Da;/**
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
 */function zm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Kn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Kn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await zm(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kn.receivers=[];/**
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
 */function _r(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Gm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=_r("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function re(){return window}function Ym(n){re().location.href=n}/**
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
 */function Pa(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Jm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Qm(){return Pa()?self:null}/**
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
 */const Ra="firebaseLocalStorageDb",Zm=1,$n="firebaseLocalStorage",Ma="fbase_key";class rn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zn(n,e){return n.transaction([$n],e?"readwrite":"readonly").objectStore($n)}function eg(){const n=indexedDB.deleteDatabase(Ra);return new rn(n).toPromise()}function Fs(){const n=indexedDB.open(Ra,Zm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore($n,{keyPath:Ma})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains($n)?e(s):(s.close(),await eg(),e(await Fs()))})})}async function xi(n,e,t){const s=zn(n,!0).put({[Ma]:e,value:t});return new rn(s).toPromise()}async function tg(n,e){const t=zn(n,!1).get(e),s=await new rn(t).toPromise();return s===void 0?null:s.value}function $i(n,e){const t=zn(n,!0).delete(e);return new rn(t).toPromise()}const ng=800,sg=3;class xa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>sg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(Qm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Jm(),!this.activeServiceWorker)return;this.sender=new Gm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await xi(e,xn,"1"),await $i(e,xn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>xi(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tg(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$i(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zn(r,!1).getAll();return new rn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xa.type="LOCAL";const rg=xa;new tn(3e4,6e4);/**
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
 */function $a(n,e){return e?ue(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Er extends pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ig(n){return Ca(n.auth,new Er(n),n.bypassAuthState)}function og(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),xm(t,new Er(n),n.bypassAuthState)}async function ag(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Mm(t,new Er(n),n.bypassAuthState)}/**
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
 */class Ua{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ig;case"linkViaPopup":case"linkViaRedirect":return ag;case"reauthViaPopup":case"reauthViaRedirect":return og;default:Y(this.auth,"internal-error")}}resolve(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cg=new tn(2e3,1e4);async function Ba(n,e,t){if(q(n.app))return Promise.reject(te(n,"operation-not-supported-in-this-environment"));const s=xe(n);Fp(n,e,gr);const r=$a(s,t);return new je(s,"signInViaPopup",e,r).executeNotNull()}class je extends Ua{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,je.currentPopupAction&&je.currentPopupAction.cancel(),je.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){_e(this.filter.length===1,"Popup operations only handle one event");const e=_r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,je.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}je.currentPopupAction=null;/**
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
 */const lg="pendingRedirect",An=new Map;class ug extends Ua{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=An.get(this.auth._key());if(!e){try{const s=await dg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}An.set(this.auth._key(),e)}return this.bypassAuthState||An.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dg(n,e){const t=pg(e),s=fg(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function hg(n,e){An.set(n._key(),e)}function fg(n){return ue(n._redirectPersistence)}function pg(n){return Tn(lg,n.config.apiKey,n.name)}async function mg(n,e,t=!1){if(q(n.app))return Promise.reject(fe(n));const s=xe(n),r=$a(s,e),o=await new ug(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const gg=10*60*1e3;class _g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Eg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ha(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ui(e))}saveEventToCache(e){this.cachedEventUids.add(Ui(e)),this.lastProcessedEventTime=Date.now()}}function Ui(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ha({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Eg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ha(n);default:return!1}}/**
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
 */async function vg(n,e={}){return Me(n,"GET","/v1/projects",e)}/**
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
 */const yg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bg=/^https?/;async function wg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await vg(n);for(const t of e)try{if(Tg(t))return}catch{}Y(n,"unauthorized-domain")}function Tg(n){const e=Bs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!bg.test(t))return!1;if(yg.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Ag=new tn(3e4,6e4);function Bi(){const n=re().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ig(n){return new Promise((e,t)=>{var r,i,o;function s(){Bi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bi(),t(te(n,"network-request-failed"))},timeout:Ag.get()})}if((i=(r=re().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=re().gapi)!=null&&o.load)s();else{const a=_m("iframefcb");return re()[a]=()=>{gapi.load?s():t(te(n,"network-request-failed"))},Ta(`${gm()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw In=null,e})}let In=null;function Sg(n){return In=In||Ig(n),In}/**
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
 */const Cg=new tn(5e3,15e3),Lg="__/auth/iframe",Og="emulator/auth/iframe",Ng={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kg(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dr(e,Og):`https://${n.config.authDomain}/${Lg}`,s={apiKey:e.apiKey,appName:n.name,v:en},r=Dg.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Zt(s).slice(1)}`}async function Pg(n){const e=await Sg(n),t=re().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:kg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ng,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=te(n,"network-request-failed"),a=re().setTimeout(()=>{i(o)},Cg.get());function c(){re().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Rg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mg=500,xg=600,$g="_blank",Ug="http://localhost";class Hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(n,e,t,s=Mg,r=xg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Rg,width:s.toString(),height:r.toString(),top:i,left:o},l=$().toLowerCase();t&&(a=ga(l)?$g:t),pa(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(am(l)&&a!=="_self")return Hg(e||"",a),new Hi(null);const f=window.open(e||"",a,u);E(f,n,"popup-blocked");try{f.focus()}catch{}return new Hi(f)}function Hg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Vg="__/auth/handler",Fg="emulator/auth/handler",Wg=encodeURIComponent("fac");async function Vi(n,e,t,s,r,i){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:en,eventId:r};if(e instanceof gr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",If(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof sn){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${Wg}=${encodeURIComponent(c)}`:"";return`${qg(n)}?${Zt(a).slice(1)}${l}`}function qg({config:n}){return n.emulator?dr(n,Fg):`https://${n.authDomain}/${Vg}`}/**
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
 */const Ts="webStorageSupport";class jg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ka,this._completeRedirectFn=mg,this._overrideRedirectResult=hg}async _openPopup(e,t,s,r){var o;_e((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Vi(e,t,s,Bs(),r);return Bg(e,i,_r())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Vi(e,t,s,Bs(),r);return Ym(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(_e(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Pg(e),s=new _g(e);return t.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ts,{type:Ts},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Ts];i!==void 0&&t(!!i),Y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ba()||ma()||fr()}}const Kg=jg;var Fi="@firebase/auth",Wi="1.11.0";/**
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
 */class zg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yg(n){Vt(new wt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wa(n)},l=new fm(s,r,i,c);return Tm(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Vt(new wt("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(s=>new zg(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(Fi,Wi,Gg(n)),ut(Fi,Wi,"esm2020")}/**
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
 */const Jg=5*60,Xg=Zo("authIdTokenMaxAge")||Jg;let qi=null;const Qg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Xg)return;const r=t==null?void 0:t.token;qi!==r&&(qi=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zg(n=Cp()){const e=sa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wm(n,{popupRedirectResolver:Kg,persistence:[rg,Km,ka]}),s=Zo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Qg(i.toString());Vm(t,o,()=>o(t.currentUser)),Hm(t,a=>o(a))}}const r=lf("auth");return r&&Am(t,`http://${r}`),t}function e_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pm({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=te("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",e_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yg("Browser");const t_={apiKey:"AIzaSyBABJUTpmf11FR96mfhpumXk5APDx22Xsk",authDomain:"zohue-auth.firebaseapp.com",projectId:"zohue-auth",storageBucket:"zohue-auth.firebasestorage.app",messagingSenderId:"438985606953",appId:"1:438985606953:web:b5cb8ca6e94d05097c1938",measurementId:"G-6QV1MNLQ0W"},n_=ra(t_),Ot=Zg(n_),s_=()=>{const n=new ce;return Ba(Ot,n)},r_=(n,e)=>Um(Ot,n,e),i_=(n,e)=>Bm(Ot,n,e),o_=async()=>{const n=new ae;try{const e=await Ba(Ot,n);return console.log("Google 登入成功:",e.user),e}catch(e){throw console.error("Google 登入失敗:",e),e}},et=[{id:1,title:"初心",subtitle:"はじめ",volunteer:"林美玲",role:"英語教學志工",story:"第一次踏進偏鄉小學，看見孩子們渴望學習的眼神，我知道這就是我想做的事。",quote:"教育不是填滿水桶，而是點燃火焰。",image:"🌸",imageUrl:"https://picsum.photos/id/180/767/470",stats:{students:32,hours:128,years:2}},{id:2,title:"成長",subtitle:"せいちょう",volunteer:"陳志明",role:"程式設計導師",story:"從一個害羞的工程師，到能夠站在講台上分享知識，這段旅程改變了我。",quote:"在教學中，我們不只是老師，更是永遠的學生。",image:"🌿",imageUrl:"https://picsum.photos/id/160/767/470",stats:{students:45,hours:256,years:3}},{id:3,title:"感動",subtitle:"かんどう",volunteer:"王雅琪",role:"美術創作老師",story:"當學生第一次完成作品時的笑容，是我繼續前進的最大動力。",quote:"藝術讓孩子看見世界的美好，也看見自己的可能。",image:"🎨",imageUrl:"https://picsum.photos/id/184/767/470",stats:{students:28,hours:96,years:1}},{id:4,title:"堅持",subtitle:"けんじ",volunteer:"李建華",role:"數學輔導老師",story:"即使遇到挫折，看到學生進步的那一刻，所有的努力都值得了。",quote:"堅持不是因為看到希望才堅持，而是堅持了才看到希望。",image:"💪",imageUrl:"https://picsum.photos/id/188/767/470",stats:{students:38,hours:180,years:4}},{id:5,title:"希望",subtitle:"きぼう",volunteer:"張淑芬",role:"閱讀推廣志工",story:"每一本書都是一扇窗，讓孩子們看見更廣闊的世界。",quote:"閱讀是給孩子最好的禮物，知識是他們飛翔的翅膀。",image:"📚",imageUrl:"https://picsum.photos/id/24/767/470",stats:{students:52,hours:320,years:5}},{id:6,title:"傳承",subtitle:"でんしょう",volunteer:"劉永祥",role:"資深志工導師",story:"看著新志工們成長，就像看見自己當年的模樣，這份愛會一直傳下去。",quote:"最好的傳承不是給予，而是啟發他人也成為給予者。",image:"🌟",imageUrl:"https://picsum.photos/id/177/767/470",stats:{students:120,hours:500,years:8}}];let ie=0,pt=!1,vr=!1,ji=0,Va=0,_={};function a_(){const n=document.getElementById("lightbox");n&&(n.style.display="flex",setTimeout(()=>{n.classList.add("active")},10),window.storyWallInitialized||(u_(),window.storyWallInitialized=!0))}function yr(){const n=document.getElementById("lightbox");if(!n)return;n.classList.add("closing"),n.classList.remove("active");const e=n.querySelector(".lightbox-content");e&&e.addEventListener("animationend",function t(){n.style.display="none",n.classList.remove("closing"),e.removeEventListener("animationend",t)})}function c_(){_={chapterName:document.querySelector("#chapterName"),chapterSubtitle:document.querySelector("#chapterSubtitle"),volunteerImage:document.querySelector("#volunteerImage"),volunteerName:document.querySelector("#volunteerName"),volunteerRole:document.querySelector("#volunteerRole"),storyParagraph:document.querySelector("#storyParagraph"),storyQuote:document.querySelector("#storyQuote"),statStudents:document.querySelector("#statStudents"),statHours:document.querySelector("#statHours"),statYears:document.querySelector("#statYears"),pageCurrent:document.querySelector("#pageCurrent"),pageTotal:document.querySelector("#pageTotal"),scrollHint:document.querySelector("#scrollHint"),storyContent:document.querySelector("#storyContent"),visualContent:document.querySelector("#visualContent"),pageIndicators:document.querySelector("#pageIndicators"),prevButton:document.querySelector("#prevButton"),nextButton:document.querySelector("#nextButton"),container:document.querySelector("#container")}}function l_(){et.forEach(n=>{const e=new Image;e.src=n.imageUrl})}function u_(){c_(),d_(),l_(),Fa(),g_(),_.pageTotal&&(_.pageTotal.textContent=et.length)}function d_(){_.pageIndicators&&(_.pageIndicators.innerHTML="",et.forEach((n,e)=>{const t=document.createElement("button");t.className="indicator",t.setAttribute("aria-label",`Go to story ${e+1}`),t.innerHTML=`
        <div class="indicator-dot"></div>
        <span class="indicator-label">${n.title}</span>
    `,t.addEventListener("click",()=>br(e)),_.pageIndicators.appendChild(t)}))}function Fa(){const n=et[ie];_.chapterName&&(_.chapterName.textContent=n.title),_.chapterSubtitle&&(_.chapterSubtitle.textContent=n.subtitle),_.volunteerImage&&(_.volunteerImage.textContent=n.image),_.volunteerName&&(_.volunteerName.textContent=n.volunteer),_.volunteerRole&&(_.volunteerRole.textContent=n.role),_.storyParagraph&&(_.storyParagraph.textContent=n.story),_.storyQuote&&(_.storyQuote.textContent=`— ${n.quote}`),_.statStudents&&(_.statStudents.textContent=n.stats.students),_.statHours&&(_.statHours.textContent=n.stats.hours),_.statYears&&(_.statYears.textContent=n.stats.years),_.pageCurrent&&(_.pageCurrent.textContent=ie+1);const e=document.querySelector("#storyImage");if(e&&n.imageUrl){e.style.opacity="0.3";let t=document.querySelector(".image-loading");t||(t=document.createElement("div"),t.className="image-loading",t.innerHTML=`
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
    `,e.parentElement.style.position="relative",e.parentElement.appendChild(t)),t.style.display="flex";const s=new Image;s.onload=function(){e.src=this.src,e.style.opacity="1",t.style.display="none"},s.onerror=function(){e.style.opacity="1",t.querySelector(".loading-text").textContent="載入失敗",t.querySelector(".loading-spinner").style.display="none",setTimeout(()=>{t.style.display="none"},2e3)},s.src=n.imageUrl,e.alt=`${n.title} - ${n.volunteer}`}h_(),_.scrollHint&&(ie===0?_.scrollHint.classList.remove("hidden"):_.scrollHint.classList.add("hidden"))}function h_(){if(!_.pageIndicators)return;_.pageIndicators.querySelectorAll(".indicator").forEach((e,t)=>{t===ie?e.classList.add("active"):e.classList.remove("active")})}function br(n){if(pt||vr)return;const e=Math.max(0,Math.min(et.length-1,n));e!==ie&&(pt=!0,_.storyContent&&_.storyContent.classList.add("animating"),_.visualContent&&_.visualContent.classList.add("animating"),setTimeout(()=>{ie=e,Fa(),setTimeout(()=>{_.storyContent&&_.storyContent.classList.remove("animating"),_.visualContent&&_.visualContent.classList.remove("animating"),pt=!1},100)},300))}function Gn(){const n=ie===0?et.length-1:ie-1;br(n)}function Yn(){const n=ie===et.length-1?0:ie+1;br(n)}function As(n){const e=document.getElementById("lightbox");if(!e||!e.classList.contains("active"))return;n.preventDefault(),n.stopPropagation();const t=Date.now();t-ji<500||pt||(ji=t,n.deltaY>0?Yn():Gn())}function f_(n){const e=document.getElementById("lightbox");if(!(!e||!e.classList.contains("active"))&&!(pt||vr))switch(n.key){case"ArrowLeft":case"ArrowUp":n.preventDefault(),Gn();break;case"ArrowRight":case"ArrowDown":n.preventDefault(),Yn();break;case"Escape":n.preventDefault(),yr();break}}function p_(n){Va=n.touches[0].clientY}function m_(n){if(pt||vr)return;const e=n.changedTouches[0].clientY,t=Va-e;Math.abs(t)>50&&(t>0?Yn():Gn())}function g_(){_.prevButton&&_.prevButton.addEventListener("click",Gn),_.nextButton&&_.nextButton.addEventListener("click",Yn),window.addEventListener("wheel",As,{passive:!1}),document.addEventListener("wheel",As,{passive:!1}),_.container&&_.container.addEventListener("wheel",As,{passive:!1}),document.addEventListener("keydown",f_),_.container&&(_.container.addEventListener("touchstart",p_,{passive:!0}),_.container.addEventListener("touchend",m_,{passive:!0}));const n=document.getElementById("lightbox");n&&n.addEventListener("click",function(e){e.target===this&&yr()})}window.openLightbox=a_;window.closeLightbox=yr;window.bootstrap||(window.bootstrap=zo);function U(n,e="info",t="通知"){const s=document.querySelector("#authToast"),r=document.querySelector("#toastIcon"),i=document.querySelector("#toastTitle"),o=document.querySelector("#toastBody"),a=s.querySelector(".toast-header");switch(i.textContent=t,o.textContent=n,a.className="toast-header",r.className="me-2",e){case"success":a.classList.add("bg-success","text-white"),r.classList.add("fas","fa-check-circle","text-white");break;case"error":a.classList.add("bg-danger","text-white"),r.classList.add("fas","fa-exclamation-circle","text-white");break;case"warning":a.classList.add("bg-warning","text-dark"),r.classList.add("fas","fa-exclamation-triangle","text-dark");break;default:a.classList.add("bg-primary","text-white"),r.classList.add("fas","fa-info-circle","text-white")}new Ct(s,{autohide:!0,delay:e==="error"?5e3:3e3}).show()}function __(){Fm(Ot,n=>{console.log("認證狀態變化:",n),E_(!!n,n)})}function E_(n,e=null){const t=document.querySelector("#mobileLoginBtn"),s=document.querySelector("#mobileMemberBtn"),r=document.querySelector("#desktopLoginBtn"),i=document.querySelector("#desktopMemberBtn"),o=document.querySelector("#mobileLogoutBtn"),a=document.querySelector("#mobileNotificationBtn"),c=document.querySelector("#desktopNotificationBtn"),l=document.querySelectorAll(".member-only-item");console.log("更新UI，登入狀態:",n),n?(t&&t.classList.add("d-none"),s&&s.classList.remove("d-none"),r&&r.classList.add("d-none"),i&&i.classList.remove("d-none"),a&&a.classList.remove("d-none"),c&&c.classList.remove("d-none"),o&&(o.className="btn btn-secondaryL fw-semibold rounded-pill w-100",o.innerHTML='<i class="fas fa-sign-out-alt me-2"></i>登出',o.onclick=Wa),l.forEach(u=>{u.classList.remove("d-none")}),e&&e.displayName&&document.querySelectorAll(".user-display-name").forEach(f=>{f.textContent=e.displayName}),console.log("UI已切換為登入狀態")):(t&&t.classList.remove("d-none"),s&&s.classList.add("d-none"),r&&r.classList.remove("d-none"),i&&i.classList.add("d-none"),a&&a.classList.add("d-none"),c&&c.classList.add("d-none"),o&&(o.className="btn btn-secondaryL fw-semibold rounded-pill w-100",o.innerHTML="登入/註冊",o.onclick=qa),l.forEach(u=>{u.classList.add("d-none")}),console.log("UI已切換為未登入狀態"))}function v_(n,e){if(e.classList.contains("logout-item"))return;n.preventDefault(),e.closest(".member-dropdown").querySelectorAll(".dropdown-item:not(.logout-item)").forEach(r=>{r.classList.remove("selected","active")}),e.classList.add("selected"),console.log("選中項目:",e.textContent.trim())}function Wa(){new x(document.querySelector("#logoutModal")).show()}async function y_(){try{const n=x.getInstance(document.querySelector("#logoutModal"));n&&n.hide(),await Wm(Ot),U("已成功登出","success","登出成功"),console.log("登出成功")}catch(n){console.error("登出失敗:",n),U("登出時發生錯誤","error","登出失敗")}}function qa(){const n=new x(document.querySelector("#loginModal"));document.body.classList.add("modal-open-custom"),n.show()}function b_(){const n=new x(document.querySelector("#loginModal"));document.body.classList.add("modal-open-custom");const t=document.querySelector("#register-tab");new Oe(t).show(),n.show()}function w_(n){const e=document.querySelector(`#${n}`),t=document.querySelector(`#${n}Icon`);e.type==="password"?(e.type="text",t.classList.remove("fa-eye"),t.classList.add("fa-eye-slash")):(e.type="password",t.classList.remove("fa-eye-slash"),t.classList.add("fa-eye"))}async function Is(){console.log("Google 登入被點擊");try{const n=await o_();console.log("Google 登入成功:",n.user),U("Google 登入成功！歡迎回來","success","登入成功");const e=x.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("Google 登入失敗:",n);let e="Google 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`Google 登入失敗：${n.message}`}U(e,"error","登入失敗")}}async function Ss(){console.log("GitHub 登入被點擊");try{const n=await s_();console.log("GitHub 登入成功:",n.user),U("GitHub 登入成功！歡迎回來","success","登入成功");const e=x.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("GitHub 登入失敗:",n);let e="GitHub 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`GitHub 登入失敗：${n.message}`}U(e,"error","登入失敗")}}window.openLoginModal=qa;window.openRegisterModal=b_;window.togglePassword=w_;window.handleLogout=Wa;document.addEventListener("DOMContentLoaded",function(){console.log("DOM 載入完成"),__();const n=document.querySelector("#loginModal"),e=document.body;n.addEventListener("show.bs.modal",function(){document.querySelectorAll("body > *:not(.modal):not(.modal-backdrop)").forEach(l=>{l.style.filter="blur(15px)",l.style.transition="filter 0.3s ease"}),setTimeout(()=>{const l=document.querySelector(".modal-backdrop");l&&(l.style.backgroundColor="rgba(0, 0, 0, 0.3)")},100)}),n.addEventListener("hide.bs.modal",function(){document.querySelectorAll("body > *").forEach(l=>{l.style.filter="",l.style.transition=""}),e.classList.remove("modal-open-custom")}),document.querySelector("#loginForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),u=l.get("email"),f=l.get("password");if(!u||!f){U("請輸入電子郵件和密碼","warning","輸入不完整");return}try{const d=await i_(u,f);console.log("登入成功:",d.user),U("登入成功！歡迎回來","success","登入成功");const p=x.getInstance(n);p&&p.hide()}catch(d){console.error("登入失敗:",d);let p="登入失敗";switch(d.code){case"auth/user-not-found":p="找不到此帳號，請先註冊或檢查 Email 是否正確";break;case"auth/wrong-password":case"auth/invalid-credential":p="密碼錯誤或帳號不存在，請檢查登入資訊";break;case"auth/invalid-email":p="請輸入有效的電子郵件地址";break;default:p=`登入失敗：${d.message}`}U(p,"error","登入失敗")}}),document.querySelector("#registerForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),u=l.get("name"),f=l.get("email"),d=l.get("password"),p=l.get("confirmPassword");if(!u||!f||!d||!p){U("請填寫所有必填欄位","warning","輸入不完整");return}if(d!==p){U("密碼和確認密碼不一致","warning","密碼不符");return}if(d.length<6){U("密碼至少需要6個字元","warning","密碼太短");return}try{const v=await r_(f,d);console.log("註冊成功:",v.user),U("註冊成功！現在可以使用此帳號登入","success","註冊成功");const m=x.getInstance(n);m&&m.hide(),this.reset()}catch(v){console.error("註冊失敗:",v);let m="註冊失敗";switch(v.code){case"auth/email-already-in-use":m="此電子郵件已被註冊，請使用其他 Email 或嘗試登入";break;case"auth/invalid-email":m="請輸入有效的電子郵件地址";break;case"auth/weak-password":m="密碼強度不足，請使用更複雜的密碼（至少包含字母和數字）";break;default:m=`註冊失敗：${v.message}`}U(m,"error","註冊失敗")}});const t=document.querySelector("#googleLoginBtn"),s=document.querySelector("#githubLoginBtn"),r=document.querySelector("#googleRegisterBtn"),i=document.querySelector("#githubRegisterBtn");t&&(t.addEventListener("click",Is),console.log("Google 登入按鈕事件已綁定")),s&&(s.addEventListener("click",Ss),console.log("GitHub 登入按鈕事件已綁定")),r&&(r.addEventListener("click",Is),console.log("Google 註冊按鈕事件已綁定")),i&&(i.addEventListener("click",Ss),console.log("GitHub 註冊按鈕事件已綁定")),!t&&!r&&(console.log("使用備用方案綁定 Google 按鈕"),document.querySelectorAll(".social-btn .fa-google").forEach((l,u)=>{const f=l.closest("button");f&&(f.addEventListener("click",Is),console.log(`Google 按鈕 ${u+1} 事件已綁定`))})),!s&&!i&&(console.log("使用備用方案綁定 GitHub 按鈕"),document.querySelectorAll(".social-btn .fa-github").forEach((l,u)=>{const f=l.closest("button");f&&(f.addEventListener("click",Ss),console.log(`GitHub 按鈕 ${u+1} 事件已綁定`))}));function o(){document.querySelectorAll(".member-dropdown").forEach(l=>{l.querySelectorAll(".dropdown-item:not(.logout-item)").forEach(f=>{f.addEventListener("click",function(d){v_(d,this)})})})}o();const a=document.querySelector("#confirmLogoutBtn");a&&(a.addEventListener("click",y_),console.log("登出確認按鈕事件已綁定"))});function T_(){const n=document.querySelector("#mobileDropdown"),e=document.querySelector("#hamburgerIcon"),t=document.body;n.classList.toggle("show"),n.classList.contains("show")?(e.className="fa-solid fa-xmark text-natural-700 hamburger-icon active",t.classList.add("mobile-menu-open"),Ka()):(e.className="fa-solid fa-bars text-natural-700 hamburger-icon",t.classList.remove("mobile-menu-open"),Jn())}function ja(){const n=document.querySelector("#mobileDropdown"),e=document.querySelector("#hamburgerIcon"),t=document.body;n.classList.remove("show"),e.className="fa-solid fa-bars text-natural-700 hamburger-icon",t.classList.remove("mobile-menu-open"),Jn()}function Ka(){const n=document.documentElement;n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("portrait").catch(()=>{})}function Jn(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement||(document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}window.toggleMobileDropdown=T_;window.closeMobileDropdown=ja;document.addEventListener("fullscreenchange",wr);document.addEventListener("webkitfullscreenchange",wr);document.addEventListener("msfullscreenchange",wr);function wr(){const n=document.querySelector("#mobileDropdown");!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement&&n&&n.classList.contains("show")&&ja()}function A_(){const n=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".navbarList-link").forEach(r=>{const i=r.getAttribute("href");i===n||i.includes(n)?r.classList.add("active"):r.classList.remove("active")}),document.querySelectorAll(".mobile-nav-link").forEach(r=>{const i=r.getAttribute("href");i===n||i.includes(n)?r.classList.add("active"):r.classList.remove("active")}),document.querySelectorAll(".footer-nav-link").forEach(r=>{const i=r.getAttribute("href");i===n||i.includes(n)?r.classList.add("active"):r.classList.remove("active")})}document.addEventListener("DOMContentLoaded",A_);function I_(){const n=document.getElementById("desktopNotificationBtn"),e=document.getElementById("notificationDropdown");n.addEventListener("click",t=>{t.preventDefault(),n.classList.toggle("active"),e.classList.toggle("show"),e.classList.toggle("d-none")}),document.addEventListener("click",t=>{t.target!==n&&!n.contains(t.target)&&!e.contains(t.target)&&(n.classList.remove("active"),e.classList.remove("show"),e.classList.add("d-none"))})}function S_(){const n=document.querySelector("#mobileNotificationDropdown"),e=document.body;n.classList.toggle("show"),n.classList.contains("show")?(e.classList.add("mobile-menu-open"),Ka()):(e.classList.remove("mobile-menu-open"),Jn())}function C_(){const n=document.querySelector("#mobileNotificationDropdown"),e=document.body;n.classList.remove("show"),e.classList.remove("mobile-menu-open"),Jn()}window.toggleMobileNotification=S_;window.closeMobileNotification=C_;document.addEventListener("DOMContentLoaded",I_);(function(){document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("backToTop");if(!n){console.warn("返回頂部按鈕未找到");return}const e=300;let t;window.addEventListener("scroll",function(){t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(function(){s()})});function s(){(window.pageYOffset||document.documentElement.scrollTop)>e?n.classList.add("show"):n.classList.remove("show")}n.addEventListener("click",function(o){o.preventDefault(),r()});function r(){window.scrollTo({top:0,behavior:"smooth"}),"scrollBehavior"in document.documentElement.style||i()}function i(){const o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(i),window.scrollTo(0,o-o/8))}s(),console.log("返回頂部按鈕功能已啟用")})})();document.addEventListener("DOMContentLoaded",()=>{window.AOS&&typeof AOS.init=="function"&&AOS.init({duration:600,easing:"ease-out",once:!1});const n=document.getElementById("jumpBtn");if(!n)return;let e=0;document.addEventListener("aos:in",t=>{const s=t.detail;!s||!s.id||(s.id==="card3"||s.id==="card4")&&(e++,n.classList.add("is-visible"))}),document.addEventListener("aos:out",t=>{const s=t.detail;!s||!s.id||(s.id==="card3"||s.id==="card4")&&(e=Math.max(0,e-1),e===0&&n.classList.remove("is-visible"))}),n.addEventListener("click",()=>{const t=document.getElementById("cardRow");if(!t)return;const s=t.querySelector(".card");let r=260;if(s){const i=window.getComputedStyle(s),o=parseFloat(i.marginRight)||0;r=s.offsetWidth+o}t.scrollBy({left:r*3,behavior:"smooth"})})});const j=document.querySelector(".timeline-container"),Un=document.querySelector(".timeline-wrapper"),ct=document.querySelector(".timeline-nav-prev"),lt=document.querySelector(".timeline-nav-next");function za(){const n=j.querySelector(".col-12");if(!n)return 300;const e=n.offsetWidth,t=window.getComputedStyle(j.querySelector(".row")),s=parseInt(t.gap)||0;return e+s}function Nt(){if(!j)return;const n=Math.round(j.scrollLeft),e=j.scrollWidth,t=j.clientWidth,s=n<=3,r=n+t>=e-3;s?ct.classList.add("disabled"):ct.classList.remove("disabled"),r?lt.classList.add("disabled"):lt.classList.remove("disabled")}ct==null||ct.addEventListener("click",n=>{if(n.preventDefault(),ct.classList.contains("disabled"))return;const e=za();j.scrollBy({left:-e,behavior:"smooth"}),Un.classList.add("scrolled"),setTimeout(Nt,350)});lt==null||lt.addEventListener("click",n=>{if(n.preventDefault(),lt.classList.contains("disabled"))return;const e=za();j.scrollBy({left:e,behavior:"smooth"}),Un.classList.add("scrolled"),setTimeout(Nt,350)});j==null||j.addEventListener("scroll",()=>{j.scrollLeft>3?Un.classList.add("scrolled"):Un.classList.remove("scrolled"),Nt()});window.addEventListener("load",()=>{setTimeout(Nt,200)});window.addEventListener("resize",()=>{setTimeout(Nt,100)});Nt();const Ga={platform_usage:{name:"平台使用",badge:"bg-blue-400",bgLight:"bg-blue-100",borderColor:"border-blue-400",textColor:"text-blue-400",icon:"computer"},project_related:{name:"專案相關",badge:"bg-indigo-400",bgLight:"bg-indigo-100",borderColor:"border-indigo-400",textColor:"text-indigo-400",icon:"work"},volunteer_service:{name:"志工服務",badge:"bg-primary-600",bgLight:"bg-primary-100",borderColor:"border-primary-600",textColor:"text-primary-600",icon:"volunteer_activism"},payment_security:{name:"金流安全",badge:"bg-danger",bgLight:"bg-red-100",borderColor:"border-danger",textColor:"text-danger",icon:"security"},account_settings:{name:"帳戶設定",badge:"bg-natural-600",bgLight:"bg-natural-100",borderColor:"border-natural-600",textColor:"text-natural-600",icon:"settings"}},L_=[{category:"platform_usage",question:"如何註冊成為會員？",answer:"點擊網站右上角的「註冊」按鈕，填寫基本資料包括姓名、信箱、密碼，並驗證信箱即可完成註冊。註冊後可以立即開始瀏覽專案和申請成為志工。"},{category:"platform_usage",question:"忘記密碼怎麼辦？",answer:"在登入頁面點擊「忘記密碼」，輸入註冊時使用的信箱地址，系統會發送重設密碼的連結到您的信箱，點擊連結即可重新設定密碼。"},{category:"platform_usage",question:"如何修改個人資料？",answer:"登入後點擊右上角的頭像，選擇「個人設定」，即可修改姓名、聯絡方式、專長技能、自我介紹等資料。記得按下儲存才會生效。"},{category:"platform_usage",question:"平台有手機 App 嗎？",answer:"目前我們專注於網頁版本的優化，暫時沒有推出手機 App。但網站採用響應式設計，在手機瀏覽器上也能有良好的使用體驗。"},{category:"project_related",question:"如何發起新專案？",answer:"登入後點擊「發起專案」按鈕，填寫專案名稱、目標、所需技能、時程、預算等資訊。提交後會進入審核程序，通過審核的專案將會上線供志工申請參與。"},{category:"project_related",question:"專案審核需要多長時間？",answer:"一般專案審核需要 3-5 個工作天。我們會確認專案內容的合理性、可行性，以及是否符合平台的公益宗旨。審核結果會透過信箱通知。"},{category:"project_related",question:"可以修改已發布的專案嗎？",answer:"已發布的專案可以修改部分內容，如專案描述、時程調整等。但如果是重大變更（如預算、目標大幅調整），可能需要重新審核。"},{category:"project_related",question:"專案失敗時資金如何處理？",answer:"若專案因故無法執行，未使用的資金將全數退還給捐款人。我們會在專案頁面公告處理進度，並透過信箱通知相關人員。"},{category:"volunteer_service",question:"如何申請成為志工？",answer:"瀏覽專案頁面，找到感興趣的專案後點擊「我要參與」，填寫申請表說明您的相關經驗和參與動機。專案發起人會審核申請並與您聯繫。"},{category:"volunteer_service",question:"志工需要什麼資格嗎？",answer:"不同專案對志工的要求不同。有些需要專業技能（如程式設計、攝影），有些只需要熱忱和時間。詳細要求會在專案頁面中說明。"},{category:"volunteer_service",question:"志工服務時數如何計算？",answer:"完成專案後，專案發起人會確認您的服務時數並在平台上登錄。服務時數會累計在您的個人檔案中，可作為志工經驗的證明。"},{category:"volunteer_service",question:"可以同時參與多個專案嗎？",answer:"可以的，但請確保您有足夠的時間和精力投入各個專案。建議根據自己的時間安排，選擇能夠全力投入的專案數量。"},{category:"payment_security",question:"捐款的金流安全如何保障？",answer:"我們與合格的第三方金流服務商合作，採用 SSL 加密傳輸，並遵循 PCI DSS 安全標準。您的付款資料不會儲存在我們的伺服器上。"},{category:"payment_security",question:"支援哪些付款方式？",answer:"目前支援信用卡（Visa、MasterCard、JCB）、ATM 轉帳、超商代碼繳費等多種付款方式。我們持續評估新增其他便民的付款選項。"},{category:"payment_security",question:"可以申請退款嗎？",answer:"捐款完成後如需退款，請在 7 天內聯絡客服並說明原因。我們會依情況進行評估，符合退款條件者會在 7-14 個工作天內完成退款。"},{category:"payment_security",question:"如何查詢捐款紀錄？",answer:"登入後在「個人中心」的「捐款紀錄」頁面可查看所有捐款明細，包括捐款日期、金額、專案名稱等資訊。也可以下載電子收據。"},{category:"account_settings",question:"如何刪除帳戶？",answer:"如需刪除帳戶，請聯絡客服提出申請。我們會在確認身分後協助處理，但請注意刪除後的資料無法復原。"},{category:"account_settings",question:"個人資料會被公開嗎？",answer:"我們重視您的隱私權。基本資料（如姓名、聯絡方式）不會公開，但您選擇公開的技能、自我介紹等會顯示在志工檔案中供專案發起人參考。"},{category:"account_settings",question:"如何設定通知偏好？",answer:"在「個人設定」的「通知設定」頁面，可以選擇接收哪些類型的通知，包括專案更新、訊息通知、電子報等，以及通知方式（信箱、簡訊）。"},{category:"account_settings",question:"可以更換註冊信箱嗎？",answer:"可以在「個人設定」中修改信箱地址。系統會發送驗證信件到新信箱，點擊驗證連結後即可完成變更。變更期間請留意新信箱的收信。"}];let Ws="all",Sn="";function Tr(){const n=document.getElementById("faqAccordion");n.innerHTML="";const e=L_.filter(t=>{const s=Ws==="all"||t.category===Ws,r=Sn===""||t.question.toLowerCase().includes(Sn.toLowerCase())||t.answer.toLowerCase().includes(Sn.toLowerCase());return s&&r});if(e.length===0){document.getElementById("noResults").style.display="block";return}document.getElementById("noResults").style.display="none",e.forEach((t,s)=>{const r=Ga[t.category],i=document.createElement("div");i.className="accordion-item",i.innerHTML=`
    <h2 class="accordion-header">
        <button 
            class="accordion-button collapsed fw-medium text-natural-950" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#collapse${s}"
            aria-expanded="false"
            aria-controls="collapse${s}"
        >
            <span class="badge ${r.badge} text-white me-3 d-flex align-items-center gap-1">
                <span class="material-icons" style="font-size: 1rem;">​${r.icon}</span>
                ${r.name}
            </span>
            <span>${t.question}</span>
        </button>
    </h2>
    <div 
        id="collapse${s}" 
        class="accordion-collapse collapse" 
        data-bs-parent="#faqAccordion"
    >
        <div class="accordion-body text-natural-600 lh-lg">
            ${t.answer}
        </div>
    </div>
`,n.appendChild(i)})}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector('[data-category="all"]');n.classList.add("bg-secondary-50","text-secondary-700","border-secondary-700"),n.classList.remove("btn-white","border-primary-500","text-primary-600")});document.querySelectorAll("[data-category]").forEach(n=>{n.addEventListener("click",e=>{const t=e.currentTarget,s=t.dataset.category;if(document.querySelectorAll("[data-category]").forEach(r=>{r.classList.remove("active"),r.classList.remove("bg-blue-100","bg-indigo-100","bg-primary-100","bg-red-100","bg-natural-100"),r.classList.remove("border-blue-400","border-indigo-400","border-primary-600","border-danger","border-natural-600"),r.classList.remove("text-blue-400","text-indigo-400","text-primary-600","text-danger","text-natural-600"),r.classList.remove("bg-secondary-50","text-secondary-700","border-secondary-700"),r.classList.add("btn-white","border-2","border-primary-500","text-primary-600")}),s==="all")t.classList.add("active"),t.classList.remove("btn-white","border-primary-500","text-primary-600"),t.classList.add("bg-secondary-50","text-secondary-700","border-secondary-700");else{const r=Ga[s];t.classList.add("active"),t.classList.remove("btn-white","border-primary-500","text-primary-600"),t.classList.add("border-2",r.bgLight,r.borderColor,r.textColor)}Ws=s,Tr()})});document.getElementById("searchInput").addEventListener("input",n=>{Sn=n.target.value,Tr()});Tr();window.bootstrap=zo;
