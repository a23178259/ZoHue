(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var R="top",H="bottom",V="right",M="left",Pn="auto",yt=[R,H,V,M],je="start",ht="end",xi="clippingParents",$s="viewport",st="popper",Ui="reference",ys=yt.reduce(function(n,e){return n.concat([e+"-"+je,e+"-"+ht])},[]),xs=[].concat(yt,[Pn]).reduce(function(n,e){return n.concat([e,e+"-"+je,e+"-"+ht])},[]),Bi="beforeRead",Hi="read",Vi="afterRead",Fi="beforeMain",Wi="main",ji="afterMain",qi="beforeWrite",Ki="write",zi="afterWrite",Gi=[Bi,Hi,Vi,Fi,Wi,ji,qi,Ki,zi];function re(n){return n?(n.nodeName||"").toLowerCase():null}function F(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var e=n.ownerDocument;return e&&e.defaultView||window}return n}function qe(n){var e=F(n).Element;return n instanceof e||n instanceof Element}function j(n){var e=F(n).HTMLElement;return n instanceof e||n instanceof HTMLElement}function Us(n){if(typeof ShadowRoot>"u")return!1;var e=F(n).ShadowRoot;return n instanceof e||n instanceof ShadowRoot}function Wa(n){var e=n.state;Object.keys(e.elements).forEach(function(t){var s=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];!j(i)||!re(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function ja(n){var e=n.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(s){var r=e.elements[s],i=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:t[s]),a=o.reduce(function(c,l){return c[l]="",c},{});!j(r)||!re(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(c){r.removeAttribute(c)}))})}}const Bs={name:"applyStyles",enabled:!0,phase:"write",fn:Wa,effect:ja,requires:["computeStyles"]};function te(n){return n.split("-")[0]}var We=Math.max,wn=Math.min,ft=Math.round;function bs(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Yi(){return!/^((?!chrome|android).)*safari/i.test(bs())}function pt(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var s=n.getBoundingClientRect(),r=1,i=1;e&&j(n)&&(r=n.offsetWidth>0&&ft(s.width)/n.offsetWidth||1,i=n.offsetHeight>0&&ft(s.height)/n.offsetHeight||1);var o=qe(n)?F(n):window,a=o.visualViewport,c=!Yi()&&t,l=(s.left+(c&&a?a.offsetLeft:0))/r,u=(s.top+(c&&a?a.offsetTop:0))/i,f=s.width/r,d=s.height/i;return{width:f,height:d,top:u,right:l+f,bottom:u+d,left:l,x:l,y:u}}function Hs(n){var e=pt(n),t=n.offsetWidth,s=n.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:n.offsetLeft,y:n.offsetTop,width:t,height:s}}function Xi(n,e){var t=e.getRootNode&&e.getRootNode();if(n.contains(e))return!0;if(t&&Us(t)){var s=e;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function he(n){return F(n).getComputedStyle(n)}function qa(n){return["table","td","th"].indexOf(re(n))>=0}function Ce(n){return((qe(n)?n.ownerDocument:n.document)||window.document).documentElement}function Rn(n){return re(n)==="html"?n:n.assignedSlot||n.parentNode||(Us(n)?n.host:null)||Ce(n)}function Ir(n){return!j(n)||he(n).position==="fixed"?null:n.offsetParent}function Ka(n){var e=/firefox/i.test(bs()),t=/Trident/i.test(bs());if(t&&j(n)){var s=he(n);if(s.position==="fixed")return null}var r=Rn(n);for(Us(r)&&(r=r.host);j(r)&&["html","body"].indexOf(re(r))<0;){var i=he(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function Ht(n){for(var e=F(n),t=Ir(n);t&&qa(t)&&he(t).position==="static";)t=Ir(t);return t&&(re(t)==="html"||re(t)==="body"&&he(t).position==="static")?e:t||Ka(n)||e}function Vs(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function kt(n,e,t){return We(n,wn(e,t))}function za(n,e,t){var s=kt(n,e,t);return s>t?t:s}function Ji(){return{top:0,right:0,bottom:0,left:0}}function Qi(n){return Object.assign({},Ji(),n)}function Zi(n,e){return e.reduce(function(t,s){return t[s]=n,t},{})}var Ga=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Qi(typeof e!="number"?e:Zi(e,yt))};function Ya(n){var e,t=n.state,s=n.name,r=n.options,i=t.elements.arrow,o=t.modifiersData.popperOffsets,a=te(t.placement),c=Vs(a),l=[M,V].indexOf(a)>=0,u=l?"height":"width";if(!(!i||!o)){var f=Ga(r.padding,t),d=Hs(i),p=c==="y"?R:M,v=c==="y"?H:V,m=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],b=o[c]-t.rects.reference[c],w=Ht(i),T=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,C=m/2-b/2,y=f[p],I=T-d[u]-f[v],A=T/2-d[u]/2+C,O=kt(y,A,I),D=c;t.modifiersData[s]=(e={},e[D]=O,e.centerOffset=O-A,e)}}function Xa(n){var e=n.state,t=n.options,s=t.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||Xi(e.elements.popper,r)&&(e.elements.arrow=r))}const eo={name:"arrow",enabled:!0,phase:"main",fn:Ya,effect:Xa,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function mt(n){return n.split("-")[1]}var Ja={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qa(n,e){var t=n.x,s=n.y,r=e.devicePixelRatio||1;return{x:ft(t*r)/r||0,y:ft(s*r)/r||0}}function Ar(n){var e,t=n.popper,s=n.popperRect,r=n.placement,i=n.variation,o=n.offsets,a=n.position,c=n.gpuAcceleration,l=n.adaptive,u=n.roundOffsets,f=n.isFixed,d=o.x,p=d===void 0?0:d,v=o.y,m=v===void 0?0:v,b=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=b.x,m=b.y;var w=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),C=M,y=R,I=window;if(l){var A=Ht(t),O="clientHeight",D="clientWidth";if(A===F(t)&&(A=Ce(t),he(A).position!=="static"&&a==="absolute"&&(O="scrollHeight",D="scrollWidth")),A=A,r===R||(r===M||r===V)&&i===ht){y=H;var L=f&&A===I&&I.visualViewport?I.visualViewport.height:A[O];m-=L-s.height,m*=c?1:-1}if(r===M||(r===R||r===H)&&i===ht){C=V;var N=f&&A===I&&I.visualViewport?I.visualViewport.width:A[D];p-=N-s.width,p*=c?1:-1}}var k=Object.assign({position:a},l&&Ja),Y=u===!0?Qa({x:p,y:m},F(t)):{x:p,y:m};if(p=Y.x,m=Y.y,c){var P;return Object.assign({},k,(P={},P[y]=T?"0":"",P[C]=w?"0":"",P.transform=(I.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",P))}return Object.assign({},k,(e={},e[y]=T?m+"px":"",e[C]=w?p+"px":"",e.transform="",e))}function Za(n){var e=n.state,t=n.options,s=t.gpuAcceleration,r=s===void 0?!0:s,i=t.adaptive,o=i===void 0?!0:i,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:te(e.placement),variation:mt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ar(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ar(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Fs={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Za,data:{}};var an={passive:!0};function ec(n){var e=n.state,t=n.instance,s=n.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,c=F(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(u){u.addEventListener("scroll",t.update,an)}),a&&c.addEventListener("resize",t.update,an),function(){i&&l.forEach(function(u){u.removeEventListener("scroll",t.update,an)}),a&&c.removeEventListener("resize",t.update,an)}}const Ws={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ec,data:{}};var tc={left:"right",right:"left",bottom:"top",top:"bottom"};function mn(n){return n.replace(/left|right|bottom|top/g,function(e){return tc[e]})}var nc={start:"end",end:"start"};function Sr(n){return n.replace(/start|end/g,function(e){return nc[e]})}function js(n){var e=F(n),t=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:t,scrollTop:s}}function qs(n){return pt(Ce(n)).left+js(n).scrollLeft}function sc(n,e){var t=F(n),s=Ce(n),r=t.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,c=0;if(r){i=r.width,o=r.height;var l=Yi();(l||!l&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:o,x:a+qs(n),y:c}}function rc(n){var e,t=Ce(n),s=js(n),r=(e=n.ownerDocument)==null?void 0:e.body,i=We(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=We(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+qs(n),c=-s.scrollTop;return he(r||t).direction==="rtl"&&(a+=We(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:c}}function Ks(n){var e=he(n),t=e.overflow,s=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+r+s)}function to(n){return["html","body","#document"].indexOf(re(n))>=0?n.ownerDocument.body:j(n)&&Ks(n)?n:to(Rn(n))}function Pt(n,e){var t;e===void 0&&(e=[]);var s=to(n),r=s===((t=n.ownerDocument)==null?void 0:t.body),i=F(s),o=r?[i].concat(i.visualViewport||[],Ks(s)?s:[]):s,a=e.concat(o);return r?a:a.concat(Pt(Rn(o)))}function ws(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function ic(n,e){var t=pt(n,!1,e==="fixed");return t.top=t.top+n.clientTop,t.left=t.left+n.clientLeft,t.bottom=t.top+n.clientHeight,t.right=t.left+n.clientWidth,t.width=n.clientWidth,t.height=n.clientHeight,t.x=t.left,t.y=t.top,t}function Cr(n,e,t){return e===$s?ws(sc(n,t)):qe(e)?ic(e,t):ws(rc(Ce(n)))}function oc(n){var e=Pt(Rn(n)),t=["absolute","fixed"].indexOf(he(n).position)>=0,s=t&&j(n)?Ht(n):n;return qe(s)?e.filter(function(r){return qe(r)&&Xi(r,s)&&re(r)!=="body"}):[]}function ac(n,e,t,s){var r=e==="clippingParents"?oc(n):[].concat(e),i=[].concat(r,[t]),o=i[0],a=i.reduce(function(c,l){var u=Cr(n,l,s);return c.top=We(u.top,c.top),c.right=wn(u.right,c.right),c.bottom=wn(u.bottom,c.bottom),c.left=We(u.left,c.left),c},Cr(n,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function no(n){var e=n.reference,t=n.element,s=n.placement,r=s?te(s):null,i=s?mt(s):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(r){case R:c={x:o,y:e.y-t.height};break;case H:c={x:o,y:e.y+e.height};break;case V:c={x:e.x+e.width,y:a};break;case M:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=r?Vs(r):null;if(l!=null){var u=l==="y"?"height":"width";switch(i){case je:c[l]=c[l]-(e[u]/2-t[u]/2);break;case ht:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function gt(n,e){e===void 0&&(e={});var t=e,s=t.placement,r=s===void 0?n.placement:s,i=t.strategy,o=i===void 0?n.strategy:i,a=t.boundary,c=a===void 0?xi:a,l=t.rootBoundary,u=l===void 0?$s:l,f=t.elementContext,d=f===void 0?st:f,p=t.altBoundary,v=p===void 0?!1:p,m=t.padding,b=m===void 0?0:m,w=Qi(typeof b!="number"?b:Zi(b,yt)),T=d===st?Ui:st,C=n.rects.popper,y=n.elements[v?T:d],I=ac(qe(y)?y:y.contextElement||Ce(n.elements.popper),c,u,o),A=pt(n.elements.reference),O=no({reference:A,element:C,placement:r}),D=ws(Object.assign({},C,O)),L=d===st?D:A,N={top:I.top-L.top+w.top,bottom:L.bottom-I.bottom+w.bottom,left:I.left-L.left+w.left,right:L.right-I.right+w.right},k=n.modifiersData.offset;if(d===st&&k){var Y=k[r];Object.keys(N).forEach(function(P){var Re=[V,H].indexOf(P)>=0?1:-1,Me=[R,H].indexOf(P)>=0?"y":"x";N[P]+=Y[Me]*Re})}return N}function cc(n,e){e===void 0&&(e={});var t=e,s=t.placement,r=t.boundary,i=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?xs:c,u=mt(s),f=u?a?ys:ys.filter(function(v){return mt(v)===u}):yt,d=f.filter(function(v){return l.indexOf(v)>=0});d.length===0&&(d=f);var p=d.reduce(function(v,m){return v[m]=gt(n,{placement:m,boundary:r,rootBoundary:i,padding:o})[te(m)],v},{});return Object.keys(p).sort(function(v,m){return p[v]-p[m]})}function lc(n){if(te(n)===Pn)return[];var e=mn(n);return[Sr(n),e,Sr(e)]}function uc(n){var e=n.state,t=n.options,s=n.name;if(!e.modifiersData[s]._skip){for(var r=t.mainAxis,i=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,f=t.rootBoundary,d=t.altBoundary,p=t.flipVariations,v=p===void 0?!0:p,m=t.allowedAutoPlacements,b=e.options.placement,w=te(b),T=w===b,C=c||(T||!v?[mn(b)]:lc(b)),y=[b].concat(C).reduce(function(et,Ee){return et.concat(te(Ee)===Pn?cc(e,{placement:Ee,boundary:u,rootBoundary:f,padding:l,flipVariations:v,allowedAutoPlacements:m}):Ee)},[]),I=e.rects.reference,A=e.rects.popper,O=new Map,D=!0,L=y[0],N=0;N<y.length;N++){var k=y[N],Y=te(k),P=mt(k)===je,Re=[R,H].indexOf(Y)>=0,Me=Re?"width":"height",B=gt(e,{placement:k,boundary:u,rootBoundary:f,altBoundary:d,padding:l}),X=Re?P?V:M:P?H:R;I[Me]>A[Me]&&(X=mn(X));var tn=mn(X),$e=[];if(i&&$e.push(B[Y]<=0),a&&$e.push(B[X]<=0,B[tn]<=0),$e.every(function(et){return et})){L=k,D=!1;break}O.set(k,$e)}if(D)for(var nn=v?3:1,jn=function(Ee){var Ct=y.find(function(rn){var xe=O.get(rn);if(xe)return xe.slice(0,Ee).every(function(qn){return qn})});if(Ct)return L=Ct,"break"},St=nn;St>0;St--){var sn=jn(St);if(sn==="break")break}e.placement!==L&&(e.modifiersData[s]._skip=!0,e.placement=L,e.reset=!0)}}const so={name:"flip",enabled:!0,phase:"main",fn:uc,requiresIfExists:["offset"],data:{_skip:!1}};function Or(n,e,t){return t===void 0&&(t={x:0,y:0}),{top:n.top-e.height-t.y,right:n.right-e.width+t.x,bottom:n.bottom-e.height+t.y,left:n.left-e.width-t.x}}function Nr(n){return[R,V,H,M].some(function(e){return n[e]>=0})}function dc(n){var e=n.state,t=n.name,s=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,o=gt(e,{elementContext:"reference"}),a=gt(e,{altBoundary:!0}),c=Or(o,s),l=Or(a,r,i),u=Nr(c),f=Nr(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:dc};function hc(n,e,t){var s=te(n),r=[M,R].indexOf(s)>=0?-1:1,i=typeof t=="function"?t(Object.assign({},e,{placement:n})):t,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[M,V].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function fc(n){var e=n.state,t=n.options,s=n.name,r=t.offset,i=r===void 0?[0,0]:r,o=xs.reduce(function(u,f){return u[f]=hc(f,e.rects,i),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[s]=o}const io={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:fc};function pc(n){var e=n.state,t=n.name;e.modifiersData[t]=no({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const zs={name:"popperOffsets",enabled:!0,phase:"read",fn:pc,data:{}};function mc(n){return n==="x"?"y":"x"}function gc(n){var e=n.state,t=n.options,s=n.name,r=t.mainAxis,i=r===void 0?!0:r,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,f=t.padding,d=t.tether,p=d===void 0?!0:d,v=t.tetherOffset,m=v===void 0?0:v,b=gt(e,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),w=te(e.placement),T=mt(e.placement),C=!T,y=Vs(w),I=mc(y),A=e.modifiersData.popperOffsets,O=e.rects.reference,D=e.rects.popper,L=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,N=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),k=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Y={x:0,y:0};if(A){if(i){var P,Re=y==="y"?R:M,Me=y==="y"?H:V,B=y==="y"?"height":"width",X=A[y],tn=X+b[Re],$e=X-b[Me],nn=p?-D[B]/2:0,jn=T===je?O[B]:D[B],St=T===je?-D[B]:-O[B],sn=e.elements.arrow,et=p&&sn?Hs(sn):{width:0,height:0},Ee=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ji(),Ct=Ee[Re],rn=Ee[Me],xe=kt(0,O[B],et[B]),qn=C?O[B]/2-nn-xe-Ct-N.mainAxis:jn-xe-Ct-N.mainAxis,xa=C?-O[B]/2+nn+xe+rn+N.mainAxis:St+xe+rn+N.mainAxis,Kn=e.elements.arrow&&Ht(e.elements.arrow),Ua=Kn?y==="y"?Kn.clientTop||0:Kn.clientLeft||0:0,mr=(P=k==null?void 0:k[y])!=null?P:0,Ba=X+qn-mr-Ua,Ha=X+xa-mr,gr=kt(p?wn(tn,Ba):tn,X,p?We($e,Ha):$e);A[y]=gr,Y[y]=gr-X}if(a){var _r,Va=y==="x"?R:M,Fa=y==="x"?H:V,Ue=A[I],on=I==="y"?"height":"width",Er=Ue+b[Va],vr=Ue-b[Fa],zn=[R,M].indexOf(w)!==-1,yr=(_r=k==null?void 0:k[I])!=null?_r:0,br=zn?Er:Ue-O[on]-D[on]-yr+N.altAxis,wr=zn?Ue+O[on]+D[on]-yr-N.altAxis:vr,Tr=p&&zn?za(br,Ue,wr):kt(p?br:Er,Ue,p?wr:vr);A[I]=Tr,Y[I]=Tr-Ue}e.modifiersData[s]=Y}}const oo={name:"preventOverflow",enabled:!0,phase:"main",fn:gc,requiresIfExists:["offset"]};function _c(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Ec(n){return n===F(n)||!j(n)?js(n):_c(n)}function vc(n){var e=n.getBoundingClientRect(),t=ft(e.width)/n.offsetWidth||1,s=ft(e.height)/n.offsetHeight||1;return t!==1||s!==1}function yc(n,e,t){t===void 0&&(t=!1);var s=j(e),r=j(e)&&vc(e),i=Ce(e),o=pt(n,r,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(s||!s&&!t)&&((re(e)!=="body"||Ks(i))&&(a=Ec(e)),j(e)?(c=pt(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=qs(i))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function bc(n){var e=new Map,t=new Set,s=[];n.forEach(function(i){e.set(i.name,i)});function r(i){t.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&r(c)}}),s.push(i)}return n.forEach(function(i){t.has(i.name)||r(i)}),s}function wc(n){var e=bc(n);return Gi.reduce(function(t,s){return t.concat(e.filter(function(r){return r.phase===s}))},[])}function Tc(n){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(n())})})),e}}function Ic(n){var e=n.reduce(function(t,s){var r=t[s.name];return t[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,t},{});return Object.keys(e).map(function(t){return e[t]})}var Lr={placement:"bottom",modifiers:[],strategy:"absolute"};function Dr(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Mn(n){n===void 0&&(n={});var e=n,t=e.defaultModifiers,s=t===void 0?[]:t,r=e.defaultOptions,i=r===void 0?Lr:r;return function(a,c,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lr,i),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},f=[],d=!1,p={state:u,setOptions:function(w){var T=typeof w=="function"?w(u.options):w;m(),u.options=Object.assign({},i,u.options,T),u.scrollParents={reference:qe(a)?Pt(a):a.contextElement?Pt(a.contextElement):[],popper:Pt(c)};var C=wc(Ic([].concat(s,u.options.modifiers)));return u.orderedModifiers=C.filter(function(y){return y.enabled}),v(),p.update()},forceUpdate:function(){if(!d){var w=u.elements,T=w.reference,C=w.popper;if(Dr(T,C)){u.rects={reference:yc(T,Ht(C),u.options.strategy==="fixed"),popper:Hs(C)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(N){return u.modifiersData[N.name]=Object.assign({},N.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var I=u.orderedModifiers[y],A=I.fn,O=I.options,D=O===void 0?{}:O,L=I.name;typeof A=="function"&&(u=A({state:u,options:D,name:L,instance:p})||u)}}}},update:Tc(function(){return new Promise(function(b){p.forceUpdate(),b(u)})}),destroy:function(){m(),d=!0}};if(!Dr(a,c))return p;p.setOptions(l).then(function(b){!d&&l.onFirstUpdate&&l.onFirstUpdate(b)});function v(){u.orderedModifiers.forEach(function(b){var w=b.name,T=b.options,C=T===void 0?{}:T,y=b.effect;if(typeof y=="function"){var I=y({state:u,name:w,instance:p,options:C}),A=function(){};f.push(I||A)}})}function m(){f.forEach(function(b){return b()}),f=[]}return p}}var Ac=Mn(),Sc=[Ws,zs,Fs,Bs],Cc=Mn({defaultModifiers:Sc}),Oc=[Ws,zs,Fs,Bs,io,so,oo,eo,ro],Gs=Mn({defaultModifiers:Oc});const ao=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ji,afterRead:Vi,afterWrite:zi,applyStyles:Bs,arrow:eo,auto:Pn,basePlacements:yt,beforeMain:Fi,beforeRead:Bi,beforeWrite:qi,bottom:H,clippingParents:xi,computeStyles:Fs,createPopper:Gs,createPopperBase:Ac,createPopperLite:Cc,detectOverflow:gt,end:ht,eventListeners:Ws,flip:so,hide:ro,left:M,main:Wi,modifierPhases:Gi,offset:io,placements:xs,popper:st,popperGenerator:Mn,popperOffsets:zs,preventOverflow:oo,read:Hi,reference:Ui,right:V,start:je,top:R,variationPlacements:ys,viewport:$s,write:Ki},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ve=new Map,Gn={set(n,e,t){ve.has(n)||ve.set(n,new Map);const s=ve.get(n);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,t)},get(n,e){return ve.has(n)&&ve.get(n).get(e)||null},remove(n,e){if(!ve.has(n))return;const t=ve.get(n);t.delete(e),t.size===0&&ve.delete(n)}},Nc=1e6,Lc=1e3,Ts="transitionend",co=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),n),Dc=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),kc=n=>{do n+=Math.floor(Math.random()*Nc);while(document.getElementById(n));return n},Pc=n=>{if(!n)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(n);const s=Number.parseFloat(e),r=Number.parseFloat(t);return!s&&!r?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*Lc)},lo=n=>{n.dispatchEvent(new Event(Ts))},le=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),Ae=n=>le(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(co(n)):null,bt=n=>{if(!le(n)||n.getClientRects().length===0)return!1;const e=getComputedStyle(n).getPropertyValue("visibility")==="visible",t=n.closest("details:not([open])");if(!t)return e;if(t!==n){const s=n.closest("summary");if(s&&s.parentNode!==t||s===null)return!1}return e},Se=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",uo=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const e=n.getRootNode();return e instanceof ShadowRoot?e:null}return n instanceof ShadowRoot?n:n.parentNode?uo(n.parentNode):null},Tn=()=>{},Vt=n=>{n.offsetHeight},ho=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Yn=[],Rc=n=>{document.readyState==="loading"?(Yn.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Yn)e()}),Yn.push(n)):n()},q=()=>document.documentElement.dir==="rtl",G=n=>{Rc(()=>{const e=ho();if(e){const t=n.NAME,s=e.fn[t];e.fn[t]=n.jQueryInterface,e.fn[t].Constructor=n,e.fn[t].noConflict=()=>(e.fn[t]=s,n.jQueryInterface)}})},U=(n,e=[],t=n)=>typeof n=="function"?n.call(...e):t,fo=(n,e,t=!0)=>{if(!t){U(n);return}const r=Pc(e)+5;let i=!1;const o=({target:a})=>{a===e&&(i=!0,e.removeEventListener(Ts,o),U(n))};e.addEventListener(Ts,o),setTimeout(()=>{i||lo(e)},r)},Ys=(n,e,t,s)=>{const r=n.length;let i=n.indexOf(e);return i===-1?!t&&s?n[r-1]:n[0]:(i+=t?1:-1,s&&(i=(i+r)%r),n[Math.max(0,Math.min(i,r-1))])},Mc=/[^.]*(?=\..*)\.|.*/,$c=/\..*/,xc=/::\d+$/,Xn={};let kr=1;const po={mouseenter:"mouseover",mouseleave:"mouseout"},Uc=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function mo(n,e){return e&&`${e}::${kr++}`||n.uidEvent||kr++}function go(n){const e=mo(n);return n.uidEvent=e,Xn[e]=Xn[e]||{},Xn[e]}function Bc(n,e){return function t(s){return Xs(s,{delegateTarget:n}),t.oneOff&&h.off(n,s.type,e),e.apply(n,[s])}}function Hc(n,e,t){return function s(r){const i=n.querySelectorAll(e);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return Xs(r,{delegateTarget:o}),s.oneOff&&h.off(n,r.type,e,t),t.apply(o,[r])}}function _o(n,e,t=null){return Object.values(n).find(s=>s.callable===e&&s.delegationSelector===t)}function Eo(n,e,t){const s=typeof e=="string",r=s?t:e||t;let i=vo(n);return Uc.has(i)||(i=n),[s,r,i]}function Pr(n,e,t,s,r){if(typeof e!="string"||!n)return;let[i,o,a]=Eo(e,t,s);e in po&&(o=(v=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return v.call(this,m)})(o));const c=go(n),l=c[a]||(c[a]={}),u=_o(l,o,i?t:null);if(u){u.oneOff=u.oneOff&&r;return}const f=mo(o,e.replace(Mc,"")),d=i?Hc(n,t,o):Bc(n,o);d.delegationSelector=i?t:null,d.callable=o,d.oneOff=r,d.uidEvent=f,l[f]=d,n.addEventListener(a,d,i)}function Is(n,e,t,s,r){const i=_o(e[t],s,r);i&&(n.removeEventListener(t,i,!!r),delete e[t][i.uidEvent])}function Vc(n,e,t,s){const r=e[t]||{};for(const[i,o]of Object.entries(r))i.includes(s)&&Is(n,e,t,o.callable,o.delegationSelector)}function vo(n){return n=n.replace($c,""),po[n]||n}const h={on(n,e,t,s){Pr(n,e,t,s,!1)},one(n,e,t,s){Pr(n,e,t,s,!0)},off(n,e,t,s){if(typeof e!="string"||!n)return;const[r,i,o]=Eo(e,t,s),a=o!==e,c=go(n),l=c[o]||{},u=e.startsWith(".");if(typeof i<"u"){if(!Object.keys(l).length)return;Is(n,c,o,i,r?t:null);return}if(u)for(const f of Object.keys(c))Vc(n,c,f,e.slice(1));for(const[f,d]of Object.entries(l)){const p=f.replace(xc,"");(!a||e.includes(p))&&Is(n,c,o,d.callable,d.delegationSelector)}},trigger(n,e,t){if(typeof e!="string"||!n)return null;const s=ho(),r=vo(e),i=e!==r;let o=null,a=!0,c=!0,l=!1;i&&s&&(o=s.Event(e,t),s(n).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=Xs(new Event(e,{bubbles:a,cancelable:!0}),t);return l&&u.preventDefault(),c&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Xs(n,e={}){for(const[t,s]of Object.entries(e))try{n[t]=s}catch{Object.defineProperty(n,t,{configurable:!0,get(){return s}})}return n}function Rr(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Jn(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const ue={setDataAttribute(n,e,t){n.setAttribute(`data-bs-${Jn(e)}`,t)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${Jn(e)}`)},getDataAttributes(n){if(!n)return{};const e={},t=Object.keys(n.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of t){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),e[r]=Rr(n.dataset[s])}return e},getDataAttribute(n,e){return Rr(n.getAttribute(`data-bs-${Jn(e)}`))}};class Ft{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const s=le(t)?ue.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...le(t)?ue.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[s,r]of Object.entries(t)){const i=e[s],o=le(i)?"element":Dc(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const Fc="5.3.8";class ee extends Ft{constructor(e,t){super(),e=Ae(e),e&&(this._element=e,this._config=this._getConfig(t),Gn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Gn.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,s=!0){fo(e,t,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Gn.get(Ae(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return Fc}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Qn=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let t=n.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>co(t)).join(","):null},g={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(t=>t.matches(e))},parents(n,e){const t=[];let s=n.parentNode.closest(e);for(;s;)t.push(s),s=s.parentNode.closest(e);return t},prev(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(t=>!Se(t)&&bt(t))},getSelectorFromElement(n){const e=Qn(n);return e&&g.findOne(e)?e:null},getElementFromSelector(n){const e=Qn(n);return e?g.findOne(e):null},getMultipleElementsFromSelector(n){const e=Qn(n);return e?g.find(e):[]}},$n=(n,e="hide")=>{const t=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;h.on(document,t,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Se(this))return;const i=g.getElementFromSelector(this)||this.closest(`.${s}`);n.getOrCreateInstance(i)[e]()})},Wc="alert",jc="bs.alert",yo=`.${jc}`,qc=`close${yo}`,Kc=`closed${yo}`,zc="fade",Gc="show";class Wt extends ee{static get NAME(){return Wc}close(){if(h.trigger(this._element,qc).defaultPrevented)return;this._element.classList.remove(Gc);const t=this._element.classList.contains(zc);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),h.trigger(this._element,Kc),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=Wt.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}$n(Wt,"close");G(Wt);const Yc="button",Xc="bs.button",Jc=`.${Xc}`,Qc=".data-api",Zc="active",Mr='[data-bs-toggle="button"]',el=`click${Jc}${Qc}`;class jt extends ee{static get NAME(){return Yc}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Zc))}static jQueryInterface(e){return this.each(function(){const t=jt.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}h.on(document,el,Mr,n=>{n.preventDefault();const e=n.target.closest(Mr);jt.getOrCreateInstance(e).toggle()});G(jt);const tl="swipe",wt=".bs.swipe",nl=`touchstart${wt}`,sl=`touchmove${wt}`,rl=`touchend${wt}`,il=`pointerdown${wt}`,ol=`pointerup${wt}`,al="touch",cl="pen",ll="pointer-event",ul=40,dl={endCallback:null,leftCallback:null,rightCallback:null},hl={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class In extends Ft{constructor(e,t){super(),this._element=e,!(!e||!In.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return dl}static get DefaultType(){return hl}static get NAME(){return tl}dispose(){h.off(this._element,wt)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),U(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=ul)return;const t=e/this._deltaX;this._deltaX=0,t&&U(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,il,e=>this._start(e)),h.on(this._element,ol,e=>this._end(e)),this._element.classList.add(ll)):(h.on(this._element,nl,e=>this._start(e)),h.on(this._element,sl,e=>this._move(e)),h.on(this._element,rl,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===cl||e.pointerType===al)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const fl="carousel",pl="bs.carousel",Oe=`.${pl}`,bo=".data-api",ml="ArrowLeft",gl="ArrowRight",_l=500,Ot="next",tt="prev",rt="left",gn="right",El=`slide${Oe}`,Zn=`slid${Oe}`,vl=`keydown${Oe}`,yl=`mouseenter${Oe}`,bl=`mouseleave${Oe}`,wl=`dragstart${Oe}`,Tl=`load${Oe}${bo}`,Il=`click${Oe}${bo}`,wo="carousel",cn="active",Al="slide",Sl="carousel-item-end",Cl="carousel-item-start",Ol="carousel-item-next",Nl="carousel-item-prev",To=".active",Io=".carousel-item",Ll=To+Io,Dl=".carousel-item img",kl=".carousel-indicators",Pl="[data-bs-slide], [data-bs-slide-to]",Rl='[data-bs-ride="carousel"]',Ml={[ml]:gn,[gl]:rt},$l={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},xl={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Tt extends ee{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=g.findOne(kl,this._element),this._addEventListeners(),this._config.ride===wo&&this.cycle()}static get Default(){return $l}static get DefaultType(){return xl}static get NAME(){return fl}next(){this._slide(Ot)}nextWhenVisible(){!document.hidden&&bt(this._element)&&this.next()}prev(){this._slide(tt)}pause(){this._isSliding&&lo(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){h.one(this._element,Zn,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){h.one(this._element,Zn,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const r=e>s?Ot:tt;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&h.on(this._element,vl,e=>this._keydown(e)),this._config.pause==="hover"&&(h.on(this._element,yl,()=>this.pause()),h.on(this._element,bl,()=>this._maybeEnableCycle())),this._config.touch&&In.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of g.find(Dl,this._element))h.on(s,wl,r=>r.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(rt)),rightCallback:()=>this._slide(this._directionToOrder(gn)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),_l+this._config.interval))}};this._swipeHelper=new In(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ml[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=g.findOne(To,this._indicatorsElement);t.classList.remove(cn),t.removeAttribute("aria-current");const s=g.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(cn),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const s=this._getActive(),r=e===Ot,i=t||Ys(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=p=>h.trigger(this._element,p,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(El).defaultPrevented||!s||!i)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=r?Cl:Sl,f=r?Ol:Nl;i.classList.add(f),Vt(i),s.classList.add(u),i.classList.add(u);const d=()=>{i.classList.remove(u,f),i.classList.add(cn),s.classList.remove(cn,f,u),this._isSliding=!1,a(Zn)};this._queueCallback(d,s,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(Al)}_getActive(){return g.findOne(Ll,this._element)}_getItems(){return g.find(Io,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return q()?e===rt?tt:Ot:e===rt?Ot:tt}_orderToDirection(e){return q()?e===tt?rt:gn:e===tt?gn:rt}static jQueryInterface(e){return this.each(function(){const t=Tt.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(document,Il,Pl,function(n){const e=g.getElementFromSelector(this);if(!e||!e.classList.contains(wo))return;n.preventDefault();const t=Tt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){t.to(s),t._maybeEnableCycle();return}if(ue.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});h.on(window,Tl,()=>{const n=g.find(Rl);for(const e of n)Tt.getOrCreateInstance(e)});G(Tt);const Ul="collapse",Bl="bs.collapse",qt=`.${Bl}`,Hl=".data-api",Vl=`show${qt}`,Fl=`shown${qt}`,Wl=`hide${qt}`,jl=`hidden${qt}`,ql=`click${qt}${Hl}`,es="show",ot="collapse",ln="collapsing",Kl="collapsed",zl=`:scope .${ot} .${ot}`,Gl="collapse-horizontal",Yl="width",Xl="height",Jl=".collapse.show, .collapse.collapsing",As='[data-bs-toggle="collapse"]',Ql={parent:null,toggle:!0},Zl={parent:"(null|element)",toggle:"boolean"};class _t extends ee{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const s=g.find(As);for(const r of s){const i=g.getSelectorFromElement(r),o=g.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ql}static get DefaultType(){return Zl}static get NAME(){return Ul}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(Jl).filter(a=>a!==this._element).map(a=>_t.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||h.trigger(this._element,Vl).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(ot),this._element.classList.add(ln),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(ln),this._element.classList.add(ot,es),this._element.style[s]="",h.trigger(this._element,Fl)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,Wl).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Vt(this._element),this._element.classList.add(ln),this._element.classList.remove(ot,es);for(const r of this._triggerArray){const i=g.getElementFromSelector(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ln),this._element.classList.add(ot),h.trigger(this._element,jl)};this._element.style[t]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(es)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Ae(e.parent),e}_getDimension(){return this._element.classList.contains(Gl)?Yl:Xl}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(As);for(const t of e){const s=g.getElementFromSelector(t);s&&this._addAriaAndCollapsedClass([t],this._isShown(s))}}_getFirstLevelChildren(e){const t=g.find(zl,this._config.parent);return g.find(e,this._config.parent).filter(s=>!t.includes(s))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const s of e)s.classList.toggle(Kl,!t),s.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const s=_t.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}h.on(document,ql,As,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const e of g.getMultipleElementsFromSelector(this))_t.getOrCreateInstance(e,{toggle:!1}).toggle()});G(_t);const $r="dropdown",eu="bs.dropdown",Xe=`.${eu}`,Js=".data-api",tu="Escape",xr="Tab",nu="ArrowUp",Ur="ArrowDown",su=2,ru=`hide${Xe}`,iu=`hidden${Xe}`,ou=`show${Xe}`,au=`shown${Xe}`,Ao=`click${Xe}${Js}`,So=`keydown${Xe}${Js}`,cu=`keyup${Xe}${Js}`,it="show",lu="dropup",uu="dropend",du="dropstart",hu="dropup-center",fu="dropdown-center",He='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',pu=`${He}.${it}`,_n=".dropdown-menu",mu=".navbar",gu=".navbar-nav",_u=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Eu=q()?"top-end":"top-start",vu=q()?"top-start":"top-end",yu=q()?"bottom-end":"bottom-start",bu=q()?"bottom-start":"bottom-end",wu=q()?"left-start":"right-start",Tu=q()?"right-start":"left-start",Iu="top",Au="bottom",Su={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Cu={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Q extends ee{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=g.next(this._element,_n)[0]||g.prev(this._element,_n)[0]||g.findOne(_n,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Su}static get DefaultType(){return Cu}static get NAME(){return $r}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Se(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!h.trigger(this._element,ou,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(gu))for(const s of[].concat(...document.body.children))h.on(s,"mouseover",Tn);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(it),this._element.classList.add(it),h.trigger(this._element,au,e)}}hide(){if(Se(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!h.trigger(this._element,ru,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))h.off(s,"mouseover",Tn);this._popper&&this._popper.destroy(),this._menu.classList.remove(it),this._element.classList.remove(it),this._element.setAttribute("aria-expanded","false"),ue.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,iu,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!le(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${$r.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof ao>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:le(this._config.reference)?e=Ae(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Gs(e,this._menu,t)}_isShown(){return this._menu.classList.contains(it)}_getPlacement(){const e=this._parent;if(e.classList.contains(uu))return wu;if(e.classList.contains(du))return Tu;if(e.classList.contains(hu))return Iu;if(e.classList.contains(fu))return Au;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(lu)?t?vu:Eu:t?bu:yu}_detectNavbar(){return this._element.closest(mu)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ue.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...U(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const s=g.find(_u,this._menu).filter(r=>bt(r));s.length&&Ys(s,t,e===Ur,!s.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=Q.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===su||e.type==="keyup"&&e.key!==xr)return;const t=g.find(pu);for(const s of t){const r=Q.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=e.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(e.target)&&(e.type==="keyup"&&e.key===xr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:r._element};e.type==="click"&&(a.clickEvent=e),r._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),s=e.key===tu,r=[nu,Ur].includes(e.key);if(!r&&!s||t&&!s)return;e.preventDefault();const i=this.matches(He)?this:g.prev(this,He)[0]||g.next(this,He)[0]||g.findOne(He,e.delegateTarget.parentNode),o=Q.getOrCreateInstance(i);if(r){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),i.focus())}}h.on(document,So,He,Q.dataApiKeydownHandler);h.on(document,So,_n,Q.dataApiKeydownHandler);h.on(document,Ao,Q.clearMenus);h.on(document,cu,Q.clearMenus);h.on(document,Ao,He,function(n){n.preventDefault(),Q.getOrCreateInstance(this).toggle()});G(Q);const Co="backdrop",Ou="fade",Br="show",Hr=`mousedown.bs.${Co}`,Nu={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Lu={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Oo extends Ft{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Nu}static get DefaultType(){return Lu}static get NAME(){return Co}show(e){if(!this._config.isVisible){U(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Vt(t),t.classList.add(Br),this._emulateAnimation(()=>{U(e)})}hide(e){if(!this._config.isVisible){U(e);return}this._getElement().classList.remove(Br),this._emulateAnimation(()=>{this.dispose(),U(e)})}dispose(){this._isAppended&&(h.off(this._element,Hr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ou),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Ae(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),h.on(e,Hr,()=>{U(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){fo(e,this._getElement(),this._config.isAnimated)}}const Du="focustrap",ku="bs.focustrap",An=`.${ku}`,Pu=`focusin${An}`,Ru=`keydown.tab${An}`,Mu="Tab",$u="forward",Vr="backward",xu={autofocus:!0,trapElement:null},Uu={autofocus:"boolean",trapElement:"element"};class No extends Ft{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return xu}static get DefaultType(){return Uu}static get NAME(){return Du}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,An),h.on(document,Pu,e=>this._handleFocusin(e)),h.on(document,Ru,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,An))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const s=g.focusableChildren(t);s.length===0?t.focus():this._lastTabNavDirection===Vr?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===Mu&&(this._lastTabNavDirection=e.shiftKey?Vr:$u)}}const Fr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Wr=".sticky-top",un="padding-right",jr="margin-right";class Ss{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,un,t=>t+e),this._setElementAttributes(Fr,un,t=>t+e),this._setElementAttributes(Wr,jr,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,un),this._resetElementAttributes(Fr,un),this._resetElementAttributes(Wr,jr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,i)}_saveInitialAttribute(e,t){const s=e.style.getPropertyValue(t);s&&ue.setDataAttribute(e,t,s)}_resetElementAttributes(e,t){const s=r=>{const i=ue.getDataAttribute(r,t);if(i===null){r.style.removeProperty(t);return}ue.removeDataAttribute(r,t),r.style.setProperty(t,i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,t){if(le(e)){t(e);return}for(const s of g.find(e,this._element))t(s)}}const Bu="modal",Hu="bs.modal",K=`.${Hu}`,Vu=".data-api",Fu="Escape",Wu=`hide${K}`,ju=`hidePrevented${K}`,Lo=`hidden${K}`,Do=`show${K}`,qu=`shown${K}`,Ku=`resize${K}`,zu=`click.dismiss${K}`,Gu=`mousedown.dismiss${K}`,Yu=`keydown.dismiss${K}`,Xu=`click${K}${Vu}`,qr="modal-open",Ju="fade",Kr="show",ts="modal-static",Qu=".modal.show",Zu=".modal-dialog",ed=".modal-body",td='[data-bs-toggle="modal"]',nd={backdrop:!0,focus:!0,keyboard:!0},sd={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ke extends ee{constructor(e,t){super(e,t),this._dialog=g.findOne(Zu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ss,this._addEventListeners()}static get Default(){return nd}static get DefaultType(){return sd}static get NAME(){return Bu}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||h.trigger(this._element,Do,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(qr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||h.trigger(this._element,Wu).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Kr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){h.off(window,K),h.off(this._dialog,K),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Oo({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new No({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=g.findOne(ed,this._dialog);t&&(t.scrollTop=0),Vt(this._element),this._element.classList.add(Kr);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,qu,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,Yu,e=>{if(e.key===Fu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),h.on(window,Ku,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,Gu,e=>{h.one(this._element,zu,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(qr),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,Lo)})}_isAnimated(){return this._element.classList.contains(Ju)}_triggerBackdropTransition(){if(h.trigger(this._element,ju).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(ts)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ts),this._queueCallback(()=>{this._element.classList.remove(ts),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),s=t>0;if(s&&!e){const r=q()?"paddingLeft":"paddingRight";this._element.style[r]=`${t}px`}if(!s&&e){const r=q()?"paddingRight":"paddingLeft";this._element.style[r]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const s=Ke.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](t)}})}}h.on(document,Xu,td,function(n){const e=g.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),h.one(e,Do,r=>{r.defaultPrevented||h.one(e,Lo,()=>{bt(this)&&this.focus()})});const t=g.findOne(Qu);t&&Ke.getInstance(t).hide(),Ke.getOrCreateInstance(e).toggle(this)});$n(Ke);G(Ke);const rd="offcanvas",id="bs.offcanvas",ge=`.${id}`,ko=".data-api",od=`load${ge}${ko}`,ad="Escape",zr="show",Gr="showing",Yr="hiding",cd="offcanvas-backdrop",Po=".offcanvas.show",ld=`show${ge}`,ud=`shown${ge}`,dd=`hide${ge}`,Xr=`hidePrevented${ge}`,Ro=`hidden${ge}`,hd=`resize${ge}`,fd=`click${ge}${ko}`,pd=`keydown.dismiss${ge}`,md='[data-bs-toggle="offcanvas"]',gd={backdrop:!0,keyboard:!0,scroll:!1},_d={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fe extends ee{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gd}static get DefaultType(){return _d}static get NAME(){return rd}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||h.trigger(this._element,ld,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ss().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Gr);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(zr),this._element.classList.remove(Gr),h.trigger(this._element,ud,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||h.trigger(this._element,dd).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Yr),this._backdrop.hide();const t=()=>{this._element.classList.remove(zr,Yr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ss().reset(),h.trigger(this._element,Ro)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){h.trigger(this._element,Xr);return}this.hide()},t=!!this._config.backdrop;return new Oo({className:cd,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new No({trapElement:this._element})}_addEventListeners(){h.on(this._element,pd,e=>{if(e.key===ad){if(this._config.keyboard){this.hide();return}h.trigger(this._element,Xr)}})}static jQueryInterface(e){return this.each(function(){const t=fe.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}h.on(document,fd,md,function(n){const e=g.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Se(this))return;h.one(e,Ro,()=>{bt(this)&&this.focus()});const t=g.findOne(Po);t&&t!==e&&fe.getInstance(t).hide(),fe.getOrCreateInstance(e).toggle(this)});h.on(window,od,()=>{for(const n of g.find(Po))fe.getOrCreateInstance(n).show()});h.on(window,hd,()=>{for(const n of g.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&fe.getOrCreateInstance(n).hide()});$n(fe);G(fe);const Ed=/^aria-[\w-]*$/i,Mo={"*":["class","dir","id","lang","role",Ed],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vd=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),yd=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,bd=(n,e)=>{const t=n.nodeName.toLowerCase();return e.includes(t)?vd.has(t)?!!yd.test(n.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(t))};function wd(n,e,t){if(!n.length)return n;if(t&&typeof t=="function")return t(n);const r=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)bd(u,l)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const Td="TemplateFactory",Id={allowList:Mo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ad={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Sd={entry:"(string|element|function|null)",selector:"(string|element)"};class Cd extends Ft{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Id}static get DefaultType(){return Ad}static get NAME(){return Td}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(e,i,r);const t=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&t.classList.add(...s.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,s]of Object.entries(e))super._typeCheckConfig({selector:t,entry:s},Sd)}_setContent(e,t,s){const r=g.findOne(s,e);if(r){if(t=this._resolvePossibleFunction(t),!t){r.remove();return}if(le(t)){this._putElementInTemplate(Ae(t),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(t);return}r.textContent=t}}_maybeSanitize(e){return this._config.sanitize?wd(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return U(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const Od="tooltip",Nd=new Set(["sanitize","allowList","sanitizeFn"]),ns="fade",Ld="modal",dn="show",Dd=".tooltip-inner",Jr=`.${Ld}`,Qr="hide.bs.modal",Nt="hover",ss="focus",rs="click",kd="manual",Pd="hide",Rd="hidden",Md="show",$d="shown",xd="inserted",Ud="click",Bd="focusin",Hd="focusout",Vd="mouseenter",Fd="mouseleave",Wd={AUTO:"auto",TOP:"top",RIGHT:q()?"left":"right",BOTTOM:"bottom",LEFT:q()?"right":"left"},jd={allowList:Mo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},qd={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Je extends ee{constructor(e,t){if(typeof ao>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return jd}static get DefaultType(){return qd}static get NAME(){return Od}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(Jr),Qr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=h.trigger(this._element,this.constructor.eventName(Md)),s=(uo(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),h.trigger(this._element,this.constructor.eventName(xd))),this._popper=this._createPopper(r),r.classList.add(dn),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))h.on(a,"mouseover",Tn);const o=()=>{h.trigger(this._element,this.constructor.eventName($d)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||h.trigger(this._element,this.constructor.eventName(Pd)).defaultPrevented)return;if(this._getTipElement().classList.remove(dn),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))h.off(r,"mouseover",Tn);this._activeTrigger[rs]=!1,this._activeTrigger[ss]=!1,this._activeTrigger[Nt]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName(Rd)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(ns,dn),t.classList.add(`bs-${this.constructor.NAME}-auto`);const s=kc(this.constructor.NAME).toString();return t.setAttribute("id",s),this._isAnimated()&&t.classList.add(ns),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Cd({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Dd]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ns)}_isShown(){return this.tip&&this.tip.classList.contains(dn)}_createPopper(e){const t=U(this._config.placement,[this,e,this._element]),s=Wd[t.toUpperCase()];return Gs(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return U(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...t,...U(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")h.on(this._element,this.constructor.eventName(Ud),this._config.selector,s=>{const r=this._initializeOnDelegatedTarget(s);r._activeTrigger[rs]=!(r._isShown()&&r._activeTrigger[rs]),r.toggle()});else if(t!==kd){const s=t===Nt?this.constructor.eventName(Vd):this.constructor.eventName(Bd),r=t===Nt?this.constructor.eventName(Fd):this.constructor.eventName(Hd);h.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?ss:Nt]=!0,o._enter()}),h.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?ss:Nt]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(Jr),Qr,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=ue.getDataAttributes(this._element);for(const s of Object.keys(t))Nd.has(s)&&delete t[s];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Ae(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,s]of Object.entries(this._config))this.constructor.Default[t]!==s&&(e[t]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Je.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}G(Je);const Kd="popover",zd=".popover-header",Gd=".popover-body",Yd={...Je.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Xd={...Je.DefaultType,content:"(null|string|element|function)"};class xn extends Je{static get Default(){return Yd}static get DefaultType(){return Xd}static get NAME(){return Kd}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[zd]:this._getTitle(),[Gd]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=xn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}G(xn);const Jd="scrollspy",Qd="bs.scrollspy",Qs=`.${Qd}`,Zd=".data-api",eh=`activate${Qs}`,Zr=`click${Qs}`,th=`load${Qs}${Zd}`,nh="dropdown-item",nt="active",sh='[data-bs-spy="scroll"]',is="[href]",rh=".nav, .list-group",ei=".nav-link",ih=".nav-item",oh=".list-group-item",ah=`${ei}, ${ih} > ${ei}, ${oh}`,ch=".dropdown",lh=".dropdown-toggle",uh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},dh={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Kt extends ee{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return uh}static get DefaultType(){return dh}static get NAME(){return Jd}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Ae(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,Zr),h.on(this._config.target,Zr,is,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const s=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=g.find(is,this._config.target);for(const t of e){if(!t.hash||Se(t))continue;const s=g.findOne(decodeURI(t.hash),this._element);bt(s)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(nt),this._activateParents(e),h.trigger(this._element,eh,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(nh)){g.findOne(lh,e.closest(ch)).classList.add(nt);return}for(const t of g.parents(e,rh))for(const s of g.prev(t,ah))s.classList.add(nt)}_clearActiveClass(e){e.classList.remove(nt);const t=g.find(`${is}.${nt}`,e);for(const s of t)s.classList.remove(nt)}static jQueryInterface(e){return this.each(function(){const t=Kt.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(window,th,()=>{for(const n of g.find(sh))Kt.getOrCreateInstance(n)});G(Kt);const hh="tab",fh="bs.tab",Qe=`.${fh}`,ph=`hide${Qe}`,mh=`hidden${Qe}`,gh=`show${Qe}`,_h=`shown${Qe}`,Eh=`click${Qe}`,vh=`keydown${Qe}`,yh=`load${Qe}`,bh="ArrowLeft",ti="ArrowRight",wh="ArrowUp",ni="ArrowDown",os="Home",si="End",Ve="active",ri="fade",as="show",Th="dropdown",$o=".dropdown-toggle",Ih=".dropdown-menu",cs=`:not(${$o})`,Ah='.list-group, .nav, [role="tablist"]',Sh=".nav-item, .list-group-item",Ch=`.nav-link${cs}, .list-group-item${cs}, [role="tab"]${cs}`,xo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ls=`${Ch}, ${xo}`,Oh=`.${Ve}[data-bs-toggle="tab"], .${Ve}[data-bs-toggle="pill"], .${Ve}[data-bs-toggle="list"]`;class ze extends ee{constructor(e){super(e),this._parent=this._element.closest(Ah),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,vh,t=>this._keydown(t)))}static get NAME(){return hh}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),s=t?h.trigger(t,ph,{relatedTarget:e}):null;h.trigger(e,gh,{relatedTarget:t}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(Ve),this._activate(g.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(as);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),h.trigger(e,_h,{relatedTarget:t})};this._queueCallback(s,e,e.classList.contains(ri))}_deactivate(e,t){if(!e)return;e.classList.remove(Ve),e.blur(),this._deactivate(g.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(as);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),h.trigger(e,mh,{relatedTarget:t})};this._queueCallback(s,e,e.classList.contains(ri))}_keydown(e){if(![bh,ti,wh,ni,os,si].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(r=>!Se(r));let s;if([os,si].includes(e.key))s=t[e.key===os?0:t.length-1];else{const r=[ti,ni].includes(e.key);s=Ys(t,e.target,r,!0)}s&&(s.focus({preventScroll:!0}),ze.getOrCreateInstance(s).show())}_getChildren(){return g.find(ls,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const s of t)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",t),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=g.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const s=this._getOuterElement(e);if(!s.classList.contains(Th))return;const r=(i,o)=>{const a=g.findOne(i,s);a&&a.classList.toggle(o,t)};r($o,Ve),r(Ih,as),s.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,s){e.hasAttribute(t)||e.setAttribute(t,s)}_elemIsActive(e){return e.classList.contains(Ve)}_getInnerElement(e){return e.matches(ls)?e:g.findOne(ls,e)}_getOuterElement(e){return e.closest(Sh)||e}static jQueryInterface(e){return this.each(function(){const t=ze.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}h.on(document,Eh,xo,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Se(this)&&ze.getOrCreateInstance(this).show()});h.on(window,yh,()=>{for(const n of g.find(Oh))ze.getOrCreateInstance(n)});G(ze);const Nh="toast",Lh="bs.toast",Ne=`.${Lh}`,Dh=`mouseover${Ne}`,kh=`mouseout${Ne}`,Ph=`focusin${Ne}`,Rh=`focusout${Ne}`,Mh=`hide${Ne}`,$h=`hidden${Ne}`,xh=`show${Ne}`,Uh=`shown${Ne}`,Bh="fade",ii="hide",hn="show",fn="showing",Hh={animation:"boolean",autohide:"boolean",delay:"number"},Vh={animation:!0,autohide:!0,delay:5e3};class zt extends ee{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Vh}static get DefaultType(){return Hh}static get NAME(){return Nh}show(){if(h.trigger(this._element,xh).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Bh);const t=()=>{this._element.classList.remove(fn),h.trigger(this._element,Uh),this._maybeScheduleHide()};this._element.classList.remove(ii),Vt(this._element),this._element.classList.add(hn,fn),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||h.trigger(this._element,Mh).defaultPrevented)return;const t=()=>{this._element.classList.add(ii),this._element.classList.remove(fn,hn),h.trigger(this._element,$h)};this._element.classList.add(fn),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(hn),super.dispose()}isShown(){return this._element.classList.contains(hn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Dh,e=>this._onInteraction(e,!0)),h.on(this._element,kh,e=>this._onInteraction(e,!1)),h.on(this._element,Ph,e=>this._onInteraction(e,!0)),h.on(this._element,Rh,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=zt.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}$n(zt);G(zt);const Fh=Object.freeze(Object.defineProperty({__proto__:null,Alert:Wt,Button:jt,Carousel:Tt,Collapse:_t,Dropdown:Q,Modal:Ke,Offcanvas:fe,Popover:xn,ScrollSpy:Kt,Tab:ze,Toast:zt,Tooltip:Je},Symbol.toStringTag,{value:"Module"})),Wh=()=>{};var oi={};/**
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
 */const Uo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},jh=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(t[u],t[f],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new qh;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),f!==64){const v=l<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kh=function(n){const e=Uo(n);return Bo.encodeByteArray(e,!0)},Ho=function(n){return Kh(n).replace(/\./g,"")},Vo=function(n){try{return Bo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gh=()=>zh().__FIREBASE_DEFAULTS__,Yh=()=>{if(typeof process>"u"||typeof oi>"u")return;const n=oi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vo(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return Wh()||Gh()||Yh()||Xh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>{var e,t;return(t=(e=Zs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Fo=()=>{var n;return(n=Zs())==null?void 0:n.config},Wo=n=>{var e;return(e=Zs())==null?void 0:e[`_${n}`]};/**
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
 */class Qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Un(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zh(n){return(await fetch(n,{credentials:"include"})).ok}const Rt={};function ef(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rt))Rt[e]?n.emulator.push(e):n.prod.push(e);return n}function tf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ai=!1;function nf(n,e){if(typeof window>"u"||typeof document>"u"||!Un(window.location.host)||Rt[n]===e||Rt[n]||ai)return;Rt[n]=e;function t(d){return`__firebase__banner__${d}`}const s="__firebase__banner",i=ef().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ai=!0,o()},d}function u(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=tf(s),p=t("text"),v=document.getElementById(p)||document.createElement("span"),m=t("learnmore"),b=document.getElementById(m)||document.createElement("a"),w=t("preprendIcon"),T=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const C=d.element;a(C),u(b,m);const y=l();c(T,w),C.append(T,v,b,y),document.body.appendChild(C)}i?(v.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function rf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function of(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cf(){const n=$();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const df="FirebaseError";class Le extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=df,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?hf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Le(r,a,s)}}function hf(n,e){return n.replace(ff,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ff=/\{\$([^}]+)}/g;function pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Et(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(ci(i)&&ci(o)){if(!Et(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ci(n){return n!==null&&typeof n=="object"}/**
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
 */function Yt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Lt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Dt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mf(n,e){const t=new gf(n,e);return t.subscribe.bind(t)}class gf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");_f(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=us),r.error===void 0&&(r.error=us),r.complete===void 0&&(r.complete=us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _f(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function us(){}/**
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
 */function _e(n){return n&&n._delegate?n._delegate:n}class vt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class Ef{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Qh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yf(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vf(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vf(n){return n===Be?void 0:n}function yf(n){return n.instantiationMode==="EAGER"}/**
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
 */class bf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ef(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const wf={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Tf=S.INFO,If={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Af=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=If[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=Tf,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Sf=(n,e)=>e.some(t=>n instanceof t);let li,ui;function Cf(){return li||(li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Of(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qo=new WeakMap,Cs=new WeakMap,Ko=new WeakMap,ds=new WeakMap,er=new WeakMap;function Nf(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Te(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qo.set(t,n)}).catch(()=>{}),er.set(e,n),e}function Lf(n){if(Cs.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Cs.set(n,e)}let Os={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ko.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Df(n){Os=n(Os)}function kf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(hs(this),e,...t);return Ko.set(s,e.sort?e.sort():[e]),Te(s)}:Of().includes(n)?function(...e){return n.apply(hs(this),e),Te(qo.get(this))}:function(...e){return Te(n.apply(hs(this),e))}}function Pf(n){return typeof n=="function"?kf(n):(n instanceof IDBTransaction&&Lf(n),Sf(n,Cf())?new Proxy(n,Os):n)}function Te(n){if(n instanceof IDBRequest)return Nf(n);if(ds.has(n))return ds.get(n);const e=Pf(n);return e!==n&&(ds.set(n,e),er.set(e,n)),e}const hs=n=>er.get(n);function Rf(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Te(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Te(o.result),c.oldVersion,c.newVersion,Te(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Mf=["get","getKey","getAll","getAllKeys","count"],$f=["put","add","delete","clear"],fs=new Map;function di(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fs.get(e))return fs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=$f.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Mf.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return fs.set(e,i),i}Df(n=>({...n,get:(e,t,s)=>di(e,t)||n.get(e,t,s),has:(e,t)=>!!di(e,t)||n.has(e,t)}));/**
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
 */class xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Uf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Uf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ns="@firebase/app",hi="0.14.3";/**
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
 */const pe=new jo("@firebase/app"),Bf="@firebase/app-compat",Hf="@firebase/analytics-compat",Vf="@firebase/analytics",Ff="@firebase/app-check-compat",Wf="@firebase/app-check",jf="@firebase/auth",qf="@firebase/auth-compat",Kf="@firebase/database",zf="@firebase/data-connect",Gf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Jf="@firebase/installations",Qf="@firebase/installations-compat",Zf="@firebase/messaging",ep="@firebase/messaging-compat",tp="@firebase/performance",np="@firebase/performance-compat",sp="@firebase/remote-config",rp="@firebase/remote-config-compat",ip="@firebase/storage",op="@firebase/storage-compat",ap="@firebase/firestore",cp="@firebase/ai",lp="@firebase/firestore-compat",up="firebase",dp="12.3.0";/**
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
 */const Ls="[DEFAULT]",hp={[Ns]:"fire-core",[Bf]:"fire-core-compat",[Vf]:"fire-analytics",[Hf]:"fire-analytics-compat",[Wf]:"fire-app-check",[Ff]:"fire-app-check-compat",[jf]:"fire-auth",[qf]:"fire-auth-compat",[Kf]:"fire-rtdb",[zf]:"fire-data-connect",[Gf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Jf]:"fire-iid",[Qf]:"fire-iid-compat",[Zf]:"fire-fcm",[ep]:"fire-fcm-compat",[tp]:"fire-perf",[np]:"fire-perf-compat",[sp]:"fire-rc",[rp]:"fire-rc-compat",[ip]:"fire-gcs",[op]:"fire-gcs-compat",[ap]:"fire-fst",[lp]:"fire-fst-compat",[cp]:"fire-vertex","fire-js":"fire-js",[up]:"fire-js-all"};/**
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
 */const Sn=new Map,fp=new Map,Ds=new Map;function fi(n,e){try{n.container.addComponent(e)}catch(t){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $t(n){const e=n.name;if(Ds.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,n);for(const t of Sn.values())fi(t,n);for(const t of fp.values())fi(t,n);return!0}function zo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function W(n){return n==null?!1:n.settings!==void 0}/**
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
 */const pp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new Gt("app","Firebase",pp);/**
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
 */class mp{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const Xt=dp;function Go(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ls,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ie.create("bad-app-name",{appName:String(r)});if(t||(t=Fo()),!t)throw Ie.create("no-options");const i=Sn.get(r);if(i){if(Et(t,i.options)&&Et(s,i.config))return i;throw Ie.create("duplicate-app",{appName:r})}const o=new bf(r);for(const c of Ds.values())o.addComponent(c);const a=new mp(t,s,o);return Sn.set(r,a),a}function gp(n=Ls){const e=Sn.get(n);if(!e&&n===Ls&&Fo())return Go();if(!e)throw Ie.create("no-app",{appName:n});return e}function at(n,e,t){let s=hp[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(o.join(" "));return}$t(new vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _p="firebase-heartbeat-database",Ep=1,xt="firebase-heartbeat-store";let ps=null;function Yo(){return ps||(ps=Rf(_p,Ep,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),ps}async function vp(n){try{const t=(await Yo()).transaction(xt),s=await t.objectStore(xt).get(Xo(n));return await t.done,s}catch(e){if(e instanceof Le)pe.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(t.message)}}}async function pi(n,e){try{const s=(await Yo()).transaction(xt,"readwrite");await s.objectStore(xt).put(e,Xo(n)),await s.done}catch(t){if(t instanceof Le)pe.warn(t.message);else{const s=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pe.warn(s.message)}}}function Xo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yp=1024,bp=30;class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ip(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mi();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>bp){const o=Ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mi(),{heartbeatsToSend:s,unsentEntries:r}=Tp(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pe.warn(t),""}}}function mi(){return new Date().toISOString().substring(0,10)}function Tp(n,e=yp){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),gi(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gi(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gi(n){return Ho(JSON.stringify({version:2,heartbeats:n})).length}function Ap(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Sp(n){$t(new vt("platform-logger",e=>new xf(e),"PRIVATE")),$t(new vt("heartbeat",e=>new wp(e),"PRIVATE")),at(Ns,hi,n),at(Ns,hi,"esm2020"),at("fire-js","")}Sp("");var Cp="firebase",Op="12.3.0";/**
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
 */at(Cp,Op,"app");function Jo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Np=Jo,Qo=new Gt("auth","Firebase",Jo());/**
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
 */const Cn=new jo("@firebase/auth");function Lp(n,...e){Cn.logLevel<=S.WARN&&Cn.warn(`Auth (${Xt}): ${n}`,...e)}function En(n,...e){Cn.logLevel<=S.ERROR&&Cn.error(`Auth (${Xt}): ${n}`,...e)}/**
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
 */function z(n,...e){throw nr(n,...e)}function Z(n,...e){return nr(n,...e)}function tr(n,e,t){const s={...Np(),[e]:t};return new Gt("auth","Firebase",s).create(e,{appName:n.name})}function de(n){return tr(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dp(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&z(n,"argument-error"),tr(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nr(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Qo.create(n,...e)}function E(n,e,...t){if(!n)throw nr(e,...t)}function ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw En(e),new Error(e)}function me(n,e){n||ae(e)}/**
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
 */function ks(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function kp(){return _i()==="http:"||_i()==="https:"}function _i(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Pp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kp()||of()||"connection"in navigator)?navigator.onLine:!0}function Rp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Jt{constructor(e,t){this.shortDelay=e,this.longDelay=t,me(t>e,"Short delay should be less than long delay!"),this.isMobile=sf()||af()}get(){return Pp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sr(n,e){me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Zo{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $p=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xp=new Jt(3e4,6e4);function De(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ke(n,e,t,s,r={}){return ea(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Yt({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:c,...i};return rf()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Un(n.emulatorConfig.host)&&(l.credentials="include"),Zo.fetch()(await ta(n,n.config.apiHost,t,a),l)})}async function ea(n,e,t){n._canInitEmulator=!1;const s={...Mp,...e};try{const r=new Bp(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pn(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw pn(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tr(n,u,l);z(n,u)}}catch(r){if(r instanceof Le)throw r;z(n,"network-request-failed",{message:String(r)})}}async function Qt(n,e,t,s,r={}){const i=await ke(n,e,t,s,r);return"mfaPendingCredential"in i&&z(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ta(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?sr(n.config,r):`${n.config.apiScheme}://${r}`;return $p.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Up(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Z(this.auth,"network-request-failed")),xp.get())})}}function pn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Z(n,e,s);return r.customData._tokenResponse=t,r}function Ei(n){return n!==void 0&&n.enterprise!==void 0}class Hp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Up(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vp(n,e){return ke(n,"GET","/v2/recaptchaConfig",De(n,e))}/**
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
 */async function Fp(n,e){return ke(n,"POST","/v1/accounts:delete",e)}async function On(n,e){return ke(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wp(n,e=!1){const t=_e(n),s=await t.getIdToken(e),r=rr(s);E(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Mt(ms(r.auth_time)),issuedAtTime:Mt(ms(r.iat)),expirationTime:Mt(ms(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ms(n){return Number(n)*1e3}function rr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return En("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vo(t);return r?JSON.parse(r):(En("Failed to decode base64 JWT payload"),null)}catch(r){return En("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function vi(n){const e=rr(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ut(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Le&&jp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function jp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ps{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mt(this.lastLoginAt),this.creationTime=Mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nn(n){var f;const e=n.auth,t=await n.getIdToken(),s=await Ut(n,On(e,{idToken:t}));E(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?na(r.providerUserInfo):[],o=zp(n.providerData,i),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Ps(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,u)}async function Kp(n){const e=_e(n);await Nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zp(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function na(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Gp(n,e){const t=await ea(n,{},async()=>{const s=Yt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await ta(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&Un(n.emulatorConfig.host)&&(c.credentials="include"),Zo.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yp(n,e){return ke(n,"POST","/v2/accounts:revokeToken",De(n,e))}/**
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
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){E(e.length!==0,"internal-error");const t=vi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Gp(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new ct;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return ae("not implemented")}}/**
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
 */function ye(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class J{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ps(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wp(this,e)}reload(){return Kp(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new J({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Nn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(de(this.auth));const e=await this.getIdToken();return await Ut(this,Fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:p,providerData:v,stsTokenManager:m}=t;E(f&&m,e,"internal-error");const b=ct.fromJSON(this.name,m);E(typeof f=="string",e,"internal-error"),ye(s,e.name),ye(r,e.name),E(typeof d=="boolean",e,"internal-error"),E(typeof p=="boolean",e,"internal-error"),ye(i,e.name),ye(o,e.name),ye(a,e.name),ye(c,e.name),ye(l,e.name),ye(u,e.name);const w=new J({uid:f,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:p,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:b,createdAt:l,lastLoginAt:u});return v&&Array.isArray(v)&&(w.providerData=v.map(T=>({...T}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new ct;r.updateFromServerResponse(t);const i=new J({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Nn(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];E(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?na(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new ct;a.updateFromIdToken(s);const c=new J({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ps(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const yi=new Map;function ce(n){me(n instanceof Function,"Expected a class definition");let e=yi.get(n);return e?(me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yi.set(n,e),e)}/**
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
 */class sa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sa.type="NONE";const bi=sa;/**
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
 */function vn(n,e,t){return`firebase:${n}:${e}:${t}`}class lt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=vn(this.userKey,r.apiKey,i),this.fullPersistenceKey=vn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await On(this.auth,{idToken:e}).catch(()=>{});return t?J._fromGetAccountInfoResponse(this.auth,t,e):null}return J._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new lt(ce(bi),e,s);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ce(bi);const o=vn(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await On(e,{idToken:u}).catch(()=>{});if(!d)break;f=await J._fromGetAccountInfoResponse(e,d,u)}else f=J._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new lt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new lt(i,e,s))}}/**
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
 */function wi(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ra(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(la(e))return"Blackberry";if(ua(e))return"Webos";if(ia(e))return"Safari";if((e.includes("chrome/")||oa(e))&&!e.includes("edge/"))return"Chrome";if(ca(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ra(n=$()){return/firefox\//i.test(n)}function ia(n=$()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oa(n=$()){return/crios\//i.test(n)}function aa(n=$()){return/iemobile/i.test(n)}function ca(n=$()){return/android/i.test(n)}function la(n=$()){return/blackberry/i.test(n)}function ua(n=$()){return/webos/i.test(n)}function ir(n=$()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xp(n=$()){var e;return ir(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Jp(){return cf()&&document.documentMode===10}function da(n=$()){return ir(n)||ca(n)||ua(n)||la(n)||/windows phone/i.test(n)||aa(n)}/**
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
 */function ha(n,e=[]){let t;switch(n){case"Browser":t=wi($());break;case"Worker":t=`${wi($())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xt}/${s}`}/**
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
 */class Qp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Zp(n,e={}){return ke(n,"GET","/v2/passwordPolicy",De(n,e))}/**
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
 */const em=6;class tm{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??em,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nm{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ti(this),this.idTokenSubscription=new Ti(this),this.beforeStateQueue=new Qp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await On(this,{idToken:e}),s=await J._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(W(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(de(this));const t=e?_e(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(de(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(de(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zp(this),t=new tm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Yp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ha(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(W(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Lp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pe(n){return _e(n)}class Ti{constructor(e){this.auth=e,this.observer=null,this.addObserver=mf(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sm(n){Bn=n}function fa(n){return Bn.loadJS(n)}function rm(){return Bn.recaptchaEnterpriseScript}function im(){return Bn.gapiScript}function om(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class am{constructor(){this.enterprise=new cm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class cm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const lm="recaptcha-enterprise",pa="NO_RECAPTCHA";class um{constructor(e){this.type=lm,this.auth=Pe(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Vp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Hp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ei(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(pa)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new am().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&Ei(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=rm();c.length!==0&&(c+=a),fa(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ii(n,e,t,s=!1,r=!1){const i=new um(n);let o;if(r)o=pa;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Rs(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ii(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ii(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function dm(n,e){const t=zo(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Et(i,e??{}))return r;z(r,"already-initialized")}return t.initialize({options:e})}function hm(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fm(n,e,t){const s=Pe(n);E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=ma(e),{host:o,port:a}=pm(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){E(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),E(Et(l,s.config.emulator)&&Et(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Un(o)?(Zh(`${i}//${o}${c}`),nf("Auth",!0)):mm()}function ma(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pm(n){const e=ma(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ai(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ai(o)}}}function Ai(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class or{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ae("not implemented")}_getIdTokenResponse(e){return ae("not implemented")}_linkToIdToken(e,t){return ae("not implemented")}_getReauthenticationResolver(e){return ae("not implemented")}}async function gm(n,e){return ke(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _m(n,e){return Qt(n,"POST","/v1/accounts:signInWithPassword",De(n,e))}/**
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
 */async function Em(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}async function vm(n,e){return Qt(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}/**
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
 */class Bt extends or{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Bt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Bt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,t,"signInWithPassword",_m);case"emailLink":return Em(e,{email:this._email,oobCode:this._password});default:z(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,s,"signUpPassword",gm);case"emailLink":return vm(e,{idToken:t,email:this._email,oobCode:this._password});default:z(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ut(n,e){return Qt(n,"POST","/v1/accounts:signInWithIdp",De(n,e))}/**
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
 */const ym="http://localhost";class Ge extends or{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):z("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Ge(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ut(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:ym,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yt(t)}return e}}/**
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
 */function bm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wm(n){const e=Lt(Dt(n)).link,t=e?Lt(Dt(e)).deep_link_id:null,s=Lt(Dt(n)).deep_link_id;return(s?Lt(Dt(s)).link:null)||s||t||e||n}class ar{constructor(e){const t=Lt(Dt(e)),s=t.apiKey??null,r=t.oobCode??null,i=bm(t.mode??null);E(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=wm(e);try{return new ar(t)}catch{return null}}}/**
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
 */class It{constructor(){this.providerId=It.PROVIDER_ID}static credential(e,t){return Bt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=ar.parseLink(t);return E(s,"argument-error"),Bt._fromEmailAndCode(e,s.code,s.tenantId)}}It.PROVIDER_ID="password";It.EMAIL_PASSWORD_SIGN_IN_METHOD="password";It.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zt extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class be extends Zt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
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
 */class ie extends Zt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ge._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ie.credential(t,s)}catch{return null}}}ie.GOOGLE_SIGN_IN_METHOD="google.com";ie.PROVIDER_ID="google.com";/**
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
 */class oe extends Zt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.GITHUB_SIGN_IN_METHOD="github.com";oe.PROVIDER_ID="github.com";/**
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
 */class we extends Zt{constructor(){super("twitter.com")}static credential(e,t){return Ge._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return we.credential(t,s)}catch{return null}}}we.TWITTER_SIGN_IN_METHOD="twitter.com";we.PROVIDER_ID="twitter.com";/**
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
 */async function Tm(n,e){return Qt(n,"POST","/v1/accounts:signUp",De(n,e))}/**
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
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await J._fromIdTokenResponse(e,s,r),o=Si(s);return new Ye({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Si(s);return new Ye({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Si(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ln extends Le{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ln.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ln(e,t,s,r)}}function ga(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ln._fromErrorAndOperation(n,i,e,s):i})}async function Im(n,e,t=!1){const s=await Ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ye._forOperation(n,"link",s)}/**
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
 */async function Am(n,e,t=!1){const{auth:s}=n;if(W(s.app))return Promise.reject(de(s));const r="reauthenticate";try{const i=await Ut(n,ga(s,r,e,n),t);E(i.idToken,s,"internal-error");const o=rr(i.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Ye._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&z(s,"user-mismatch"),i}}/**
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
 */async function _a(n,e,t=!1){if(W(n.app))return Promise.reject(de(n));const s="signIn",r=await ga(n,s,e),i=await Ye._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Sm(n,e){return _a(Pe(n),e)}/**
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
 */async function Ea(n){const e=Pe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cm(n,e,t){if(W(n.app))return Promise.reject(de(n));const s=Pe(n),o=await Rs(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ea(n),c}),a=await Ye._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Om(n,e,t){return W(n.app)?Promise.reject(de(n)):Sm(_e(n),It.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ea(n),s})}function Nm(n,e,t,s){return _e(n).onIdTokenChanged(e,t,s)}function Lm(n,e,t){return _e(n).beforeAuthStateChanged(e,t)}function Dm(n,e,t,s){return _e(n).onAuthStateChanged(e,t,s)}function km(n){return _e(n).signOut()}const Dn="__sak";/**
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
 */class va{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dn,"1"),this.storage.removeItem(Dn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pm=1e3,Rm=10;class ya extends va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=da(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Jp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rm):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ya.type="LOCAL";const Mm=ya;/**
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
 */class ba extends va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ba.type="SESSION";const wa=ba;/**
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
 */function $m(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Hn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await $m(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hn.receivers=[];/**
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
 */function lr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=lr("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ne(){return window}function Um(n){ne().location.href=n}/**
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
 */function Ta(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function Bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Vm(){return Ta()?self:null}/**
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
 */const Ia="firebaseLocalStorageDb",Fm=1,kn="firebaseLocalStorage",Aa="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vn(n,e){return n.transaction([kn],e?"readwrite":"readonly").objectStore(kn)}function Wm(){const n=indexedDB.deleteDatabase(Ia);return new en(n).toPromise()}function Ms(){const n=indexedDB.open(Ia,Fm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(kn,{keyPath:Aa})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(kn)?e(s):(s.close(),await Wm(),e(await Ms()))})})}async function Ci(n,e,t){const s=Vn(n,!0).put({[Aa]:e,value:t});return new en(s).toPromise()}async function jm(n,e){const t=Vn(n,!1).get(e),s=await new en(t).toPromise();return s===void 0?null:s.value}function Oi(n,e){const t=Vn(n,!0).delete(e);return new en(t).toPromise()}const qm=800,Km=3;class Sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Km)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ta()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(Vm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Bm(),!this.activeServiceWorker)return;this.sender=new xm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await Ci(e,Dn,"1"),await Oi(e,Dn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ci(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>jm(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Vn(r,!1).getAll();return new en(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sa.type="LOCAL";const zm=Sa;new Jt(3e4,6e4);/**
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
 */function Ca(n,e){return e?ce(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ur extends or{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gm(n){return _a(n.auth,new ur(n),n.bypassAuthState)}function Ym(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Am(t,new ur(n),n.bypassAuthState)}async function Xm(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Im(t,new ur(n),n.bypassAuthState)}/**
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
 */class Oa{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gm;case"linkViaPopup":case"linkViaRedirect":return Xm;case"reauthViaPopup":case"reauthViaRedirect":return Ym;default:z(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jm=new Jt(2e3,1e4);async function Na(n,e,t){if(W(n.app))return Promise.reject(Z(n,"operation-not-supported-in-this-environment"));const s=Pe(n);Dp(n,e,cr);const r=Ca(s,t);return new Fe(s,"signInViaPopup",e,r).executeNotNull()}class Fe extends Oa{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Fe.currentPopupAction&&Fe.currentPopupAction.cancel(),Fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jm.get())};e()}}Fe.currentPopupAction=null;/**
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
 */const Qm="pendingRedirect",yn=new Map;class Zm extends Oa{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const s=await eg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eg(n,e){const t=sg(e),s=ng(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function tg(n,e){yn.set(n._key(),e)}function ng(n){return ce(n._redirectPersistence)}function sg(n){return vn(Qm,n.config.apiKey,n.name)}async function rg(n,e,t=!1){if(W(n.app))return Promise.reject(de(n));const s=Pe(n),r=Ca(s,e),o=await new Zm(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ig=10*60*1e3;class og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ag(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!La(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Z(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(e))}saveEventToCache(e){this.cachedEventUids.add(Ni(e)),this.lastProcessedEventTime=Date.now()}}function Ni(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function La({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ag(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return La(n);default:return!1}}/**
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
 */async function cg(n,e={}){return ke(n,"GET","/v1/projects",e)}/**
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
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ug=/^https?/;async function dg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cg(n);for(const t of e)try{if(hg(t))return}catch{}z(n,"unauthorized-domain")}function hg(n){const e=ks(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ug.test(t))return!1;if(lg.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const fg=new Jt(3e4,6e4);function Li(){const n=ne().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pg(n){return new Promise((e,t)=>{var r,i,o;function s(){Li(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Li(),t(Z(n,"network-request-failed"))},timeout:fg.get()})}if((i=(r=ne().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ne().gapi)!=null&&o.load)s();else{const a=om("iframefcb");return ne()[a]=()=>{gapi.load?s():t(Z(n,"network-request-failed"))},fa(`${im()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw bn=null,e})}let bn=null;function mg(n){return bn=bn||pg(n),bn}/**
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
 */const gg=new Jt(5e3,15e3),_g="__/auth/iframe",Eg="emulator/auth/iframe",vg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bg(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sr(e,Eg):`https://${n.config.authDomain}/${_g}`,s={apiKey:e.apiKey,appName:n.name,v:Xt},r=yg.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Yt(s).slice(1)}`}async function wg(n){const e=await mg(n),t=ne().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:bg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Z(n,"network-request-failed"),a=ne().setTimeout(()=>{i(o)},gg.get());function c(){ne().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Ag=600,Sg="_blank",Cg="http://localhost";class Di{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Og(n,e,t,s=Ig,r=Ag){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Tg,width:s.toString(),height:r.toString(),top:i,left:o},l=$().toLowerCase();t&&(a=oa(l)?Sg:t),ra(l)&&(e=e||Cg,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(Xp(l)&&a!=="_self")return Ng(e||"",a),new Di(null);const f=window.open(e||"",a,u);E(f,n,"popup-blocked");try{f.focus()}catch{}return new Di(f)}function Ng(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Lg="__/auth/handler",Dg="emulator/auth/handler",kg=encodeURIComponent("fac");async function ki(n,e,t,s,r,i){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Xt,eventId:r};if(e instanceof cr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",pf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof Zt){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${kg}=${encodeURIComponent(c)}`:"";return`${Pg(n)}?${Yt(a).slice(1)}${l}`}function Pg({config:n}){return n.emulator?sr(n,Dg):`https://${n.authDomain}/${Lg}`}/**
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
 */const gs="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wa,this._completeRedirectFn=rg,this._overrideRedirectResult=tg}async _openPopup(e,t,s,r){var o;me((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await ki(e,t,s,ks(),r);return Og(e,i,lr())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await ki(e,t,s,ks(),r);return Um(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(me(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wg(e),s=new og(e);return t.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gs,{type:gs},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[gs];i!==void 0&&t(!!i),z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return da()||ia()||ir()}}const Mg=Rg;var Pi="@firebase/auth",Ri="1.11.0";/**
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
 */class $g{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ug(n){$t(new vt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ha(n)},l=new nm(s,r,i,c);return hm(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),$t(new vt("auth-internal",e=>{const t=Pe(e.getProvider("auth").getImmediate());return(s=>new $g(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Pi,Ri,xg(n)),at(Pi,Ri,"esm2020")}/**
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
 */const Bg=5*60,Hg=Wo("authIdTokenMaxAge")||Bg;let Mi=null;const Vg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Hg)return;const r=t==null?void 0:t.token;Mi!==r&&(Mi=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fg(n=gp()){const e=zo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dm(n,{popupRedirectResolver:Mg,persistence:[zm,Mm,wa]}),s=Wo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Vg(i.toString());Lm(t,o,()=>o(t.currentUser)),Nm(t,a=>o(a))}}const r=Jh("auth");return r&&fm(t,`http://${r}`),t}function Wg(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}sm({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Z("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Wg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ug("Browser");const jg={apiKey:"AIzaSyBABJUTpmf11FR96mfhpumXk5APDx22Xsk",authDomain:"zohue-auth.firebaseapp.com",projectId:"zohue-auth",storageBucket:"zohue-auth.firebasestorage.app",messagingSenderId:"438985606953",appId:"1:438985606953:web:b5cb8ca6e94d05097c1938",measurementId:"G-6QV1MNLQ0W"},qg=Go(jg),At=Fg(qg),Kg=()=>{const n=new oe;return Na(At,n)},zg=(n,e)=>Cm(At,n,e),Gg=(n,e)=>Om(At,n,e),Yg=async()=>{const n=new ie;try{const e=await Na(At,n);return console.log("Google 登入成功:",e.user),e}catch(e){throw console.error("Google 登入失敗:",e),e}},Ze=[{id:1,title:"初心",subtitle:"はじめ",volunteer:"林美玲",role:"英語教學志工",story:"第一次踏進偏鄉小學，看見孩子們渴望學習的眼神，我知道這就是我想做的事。",quote:"教育不是填滿水桶，而是點燃火焰。",image:"🌸",imageUrl:"https://picsum.photos/id/180/767/470",stats:{students:32,hours:128,years:2}},{id:2,title:"成長",subtitle:"せいちょう",volunteer:"陳志明",role:"程式設計導師",story:"從一個害羞的工程師，到能夠站在講台上分享知識，這段旅程改變了我。",quote:"在教學中，我們不只是老師，更是永遠的學生。",image:"🌿",imageUrl:"https://picsum.photos/id/160/767/470",stats:{students:45,hours:256,years:3}},{id:3,title:"感動",subtitle:"かんどう",volunteer:"王雅琪",role:"美術創作老師",story:"當學生第一次完成作品時的笑容，是我繼續前進的最大動力。",quote:"藝術讓孩子看見世界的美好，也看見自己的可能。",image:"🎨",imageUrl:"https://picsum.photos/id/184/767/470",stats:{students:28,hours:96,years:1}},{id:4,title:"堅持",subtitle:"けんじ",volunteer:"李建華",role:"數學輔導老師",story:"即使遇到挫折，看到學生進步的那一刻，所有的努力都值得了。",quote:"堅持不是因為看到希望才堅持，而是堅持了才看到希望。",image:"💪",imageUrl:"https://picsum.photos/id/188/767/470",stats:{students:38,hours:180,years:4}},{id:5,title:"希望",subtitle:"きぼう",volunteer:"張淑芬",role:"閱讀推廣志工",story:"每一本書都是一扇窗，讓孩子們看見更廣闊的世界。",quote:"閱讀是給孩子最好的禮物，知識是他們飛翔的翅膀。",image:"📚",imageUrl:"https://picsum.photos/id/24/767/470",stats:{students:52,hours:320,years:5}},{id:6,title:"傳承",subtitle:"でんしょう",volunteer:"劉永祥",role:"資深志工導師",story:"看著新志工們成長，就像看見自己當年的模樣，這份愛會一直傳下去。",quote:"最好的傳承不是給予，而是啟發他人也成為給予者。",image:"🌟",imageUrl:"https://picsum.photos/id/177/767/470",stats:{students:120,hours:500,years:8}}];let se=0,dt=!1,dr=!1,$i=0,Da=0,_={};function Xg(){const n=document.getElementById("lightbox");n&&(n.style.display="flex",setTimeout(()=>{n.classList.add("active")},10),window.storyWallInitialized||(Zg(),window.storyWallInitialized=!0))}function hr(){const n=document.getElementById("lightbox");if(!n)return;n.classList.add("closing"),n.classList.remove("active");const e=n.querySelector(".lightbox-content");e&&e.addEventListener("animationend",function t(){n.style.display="none",n.classList.remove("closing"),e.removeEventListener("animationend",t)})}function Jg(){_={chapterName:document.querySelector("#chapterName"),chapterSubtitle:document.querySelector("#chapterSubtitle"),volunteerImage:document.querySelector("#volunteerImage"),volunteerName:document.querySelector("#volunteerName"),volunteerRole:document.querySelector("#volunteerRole"),storyParagraph:document.querySelector("#storyParagraph"),storyQuote:document.querySelector("#storyQuote"),statStudents:document.querySelector("#statStudents"),statHours:document.querySelector("#statHours"),statYears:document.querySelector("#statYears"),pageCurrent:document.querySelector("#pageCurrent"),pageTotal:document.querySelector("#pageTotal"),scrollHint:document.querySelector("#scrollHint"),storyContent:document.querySelector("#storyContent"),visualContent:document.querySelector("#visualContent"),pageIndicators:document.querySelector("#pageIndicators"),prevButton:document.querySelector("#prevButton"),nextButton:document.querySelector("#nextButton"),container:document.querySelector("#container")}}function Qg(){Ze.forEach(n=>{const e=new Image;e.src=n.imageUrl})}function Zg(){Jg(),e_(),Qg(),ka(),i_(),_.pageTotal&&(_.pageTotal.textContent=Ze.length)}function e_(){_.pageIndicators&&(_.pageIndicators.innerHTML="",Ze.forEach((n,e)=>{const t=document.createElement("button");t.className="indicator",t.setAttribute("aria-label",`Go to story ${e+1}`),t.innerHTML=`
        <div class="indicator-dot"></div>
        <span class="indicator-label">${n.title}</span>
    `,t.addEventListener("click",()=>fr(e)),_.pageIndicators.appendChild(t)}))}function ka(){const n=Ze[se];_.chapterName&&(_.chapterName.textContent=n.title),_.chapterSubtitle&&(_.chapterSubtitle.textContent=n.subtitle),_.volunteerImage&&(_.volunteerImage.textContent=n.image),_.volunteerName&&(_.volunteerName.textContent=n.volunteer),_.volunteerRole&&(_.volunteerRole.textContent=n.role),_.storyParagraph&&(_.storyParagraph.textContent=n.story),_.storyQuote&&(_.storyQuote.textContent=`— ${n.quote}`),_.statStudents&&(_.statStudents.textContent=n.stats.students),_.statHours&&(_.statHours.textContent=n.stats.hours),_.statYears&&(_.statYears.textContent=n.stats.years),_.pageCurrent&&(_.pageCurrent.textContent=se+1);const e=document.querySelector("#storyImage");if(e&&n.imageUrl){e.style.opacity="0.3";let t=document.querySelector(".image-loading");t||(t=document.createElement("div"),t.className="image-loading",t.innerHTML=`
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
    `,e.parentElement.style.position="relative",e.parentElement.appendChild(t)),t.style.display="flex";const s=new Image;s.onload=function(){e.src=this.src,e.style.opacity="1",t.style.display="none"},s.onerror=function(){e.style.opacity="1",t.querySelector(".loading-text").textContent="載入失敗",t.querySelector(".loading-spinner").style.display="none",setTimeout(()=>{t.style.display="none"},2e3)},s.src=n.imageUrl,e.alt=`${n.title} - ${n.volunteer}`}t_(),_.scrollHint&&(se===0?_.scrollHint.classList.remove("hidden"):_.scrollHint.classList.add("hidden"))}function t_(){if(!_.pageIndicators)return;_.pageIndicators.querySelectorAll(".indicator").forEach((e,t)=>{t===se?e.classList.add("active"):e.classList.remove("active")})}function fr(n){if(dt||dr)return;const e=Math.max(0,Math.min(Ze.length-1,n));e!==se&&(dt=!0,_.storyContent&&_.storyContent.classList.add("animating"),_.visualContent&&_.visualContent.classList.add("animating"),setTimeout(()=>{se=e,ka(),setTimeout(()=>{_.storyContent&&_.storyContent.classList.remove("animating"),_.visualContent&&_.visualContent.classList.remove("animating"),dt=!1},100)},300))}function Fn(){const n=se===0?Ze.length-1:se-1;fr(n)}function Wn(){const n=se===Ze.length-1?0:se+1;fr(n)}function _s(n){const e=document.getElementById("lightbox");if(!e||!e.classList.contains("active"))return;n.preventDefault(),n.stopPropagation();const t=Date.now();t-$i<500||dt||($i=t,n.deltaY>0?Wn():Fn())}function n_(n){const e=document.getElementById("lightbox");if(!(!e||!e.classList.contains("active"))&&!(dt||dr))switch(n.key){case"ArrowLeft":case"ArrowUp":n.preventDefault(),Fn();break;case"ArrowRight":case"ArrowDown":n.preventDefault(),Wn();break;case"Escape":n.preventDefault(),hr();break}}function s_(n){Da=n.touches[0].clientY}function r_(n){if(dt||dr)return;const e=n.changedTouches[0].clientY,t=Da-e;Math.abs(t)>50&&(t>0?Wn():Fn())}function i_(){_.prevButton&&_.prevButton.addEventListener("click",Fn),_.nextButton&&_.nextButton.addEventListener("click",Wn),window.addEventListener("wheel",_s,{passive:!1}),document.addEventListener("wheel",_s,{passive:!1}),_.container&&_.container.addEventListener("wheel",_s,{passive:!1}),document.addEventListener("keydown",n_),_.container&&(_.container.addEventListener("touchstart",s_,{passive:!0}),_.container.addEventListener("touchend",r_,{passive:!0}));const n=document.getElementById("lightbox");n&&n.addEventListener("click",function(e){e.target===this&&hr()})}window.openLightbox=Xg;window.closeLightbox=hr;function x(n,e="info",t="通知"){const s=document.querySelector("#authToast"),r=document.querySelector("#toastIcon"),i=document.querySelector("#toastTitle"),o=document.querySelector("#toastBody"),a=s.querySelector(".toast-header");switch(i.textContent=t,o.textContent=n,a.className="toast-header",r.className="me-2",e){case"success":a.classList.add("bg-success","text-white"),r.classList.add("fas","fa-check-circle","text-white");break;case"error":a.classList.add("bg-danger","text-white"),r.classList.add("fas","fa-exclamation-circle","text-white");break;case"warning":a.classList.add("bg-warning","text-dark"),r.classList.add("fas","fa-exclamation-triangle","text-dark");break;default:a.classList.add("bg-primary","text-white"),r.classList.add("fas","fa-info-circle","text-white")}new bootstrap.Toast(s,{autohide:!0,delay:e==="error"?5e3:3e3}).show()}function o_(){Dm(At,n=>{console.log("認證狀態變化:",n),a_(!!n,n)})}function a_(n,e=null){const t=document.querySelector("#mobileLoginBtn"),s=document.querySelector("#mobileMemberBtn"),r=document.querySelector("#desktopLoginBtn"),i=document.querySelector("#desktopMemberBtn"),o=document.querySelector("#mobileLogoutBtn"),a=document.querySelector("#mobileNotificationBtn"),c=document.querySelector("#desktopNotificationBtn"),l=document.querySelectorAll(".member-only-item");console.log("更新UI，登入狀態:",n),n?(t&&t.classList.add("d-none"),s&&s.classList.remove("d-none"),r&&r.classList.add("d-none"),i&&i.classList.remove("d-none"),a&&a.classList.remove("d-none"),c&&c.classList.remove("d-none"),o&&(o.className="btn btn-secondaryL fw-semibold rounded-pill w-100",o.innerHTML='<i class="fas fa-sign-out-alt me-2"></i>登出',o.onclick=Pa),l.forEach(u=>{u.classList.remove("d-none")}),e&&e.displayName&&document.querySelectorAll(".user-display-name").forEach(f=>{f.textContent=e.displayName}),console.log("UI已切換為登入狀態")):(t&&t.classList.remove("d-none"),s&&s.classList.add("d-none"),r&&r.classList.remove("d-none"),i&&i.classList.add("d-none"),a&&a.classList.add("d-none"),c&&c.classList.add("d-none"),o&&(o.className="btn btn-secondaryL fw-semibold rounded-pill w-100",o.innerHTML="登入/註冊",o.onclick=Ra),l.forEach(u=>{u.classList.add("d-none")}),console.log("UI已切換為未登入狀態"))}function c_(n,e){if(e.classList.contains("logout-item"))return;n.preventDefault(),e.closest(".member-dropdown").querySelectorAll(".dropdown-item:not(.logout-item)").forEach(r=>{r.classList.remove("selected","active")}),e.classList.add("selected"),console.log("選中項目:",e.textContent.trim())}function Pa(){new bootstrap.Modal(document.querySelector("#logoutModal")).show()}async function l_(){try{const n=bootstrap.Modal.getInstance(document.querySelector("#logoutModal"));n&&n.hide(),await km(At),x("已成功登出","success","登出成功"),console.log("登出成功")}catch(n){console.error("登出失敗:",n),x("登出時發生錯誤","error","登出失敗")}}function Ra(){const n=new bootstrap.Modal(document.querySelector("#loginModal"));document.body.classList.add("modal-open-custom"),n.show()}function u_(){const n=new bootstrap.Modal(document.querySelector("#loginModal"));document.body.classList.add("modal-open-custom");const t=document.querySelector("#register-tab");new bootstrap.Tab(t).show(),n.show()}function d_(n){const e=document.querySelector(`#${n}`),t=document.querySelector(`#${n}Icon`);e.type==="password"?(e.type="text",t.classList.remove("fa-eye"),t.classList.add("fa-eye-slash")):(e.type="password",t.classList.remove("fa-eye-slash"),t.classList.add("fa-eye"))}async function Es(){console.log("Google 登入被點擊");try{const n=await Yg();console.log("Google 登入成功:",n.user),x("Google 登入成功！歡迎回來","success","登入成功");const e=bootstrap.Modal.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("Google 登入失敗:",n);let e="Google 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`Google 登入失敗：${n.message}`}x(e,"error","登入失敗")}}async function vs(){console.log("GitHub 登入被點擊");try{const n=await Kg();console.log("GitHub 登入成功:",n.user),x("GitHub 登入成功！歡迎回來","success","登入成功");const e=bootstrap.Modal.getInstance(document.querySelector("#loginModal"));e&&e.hide()}catch(n){console.error("GitHub 登入失敗:",n);let e="GitHub 登入失敗";switch(n.code){case"auth/popup-closed-by-user":e="登入窗口已關閉，請重新嘗試";break;case"auth/popup-blocked":e="彈出窗口被阻擋，請允許彈出窗口後重試";break;default:e=`GitHub 登入失敗：${n.message}`}x(e,"error","登入失敗")}}window.openLoginModal=Ra;window.openRegisterModal=u_;window.togglePassword=d_;window.handleLogout=Pa;document.addEventListener("DOMContentLoaded",function(){console.log("DOM 載入完成"),o_();const n=document.querySelector("#loginModal"),e=document.body;n.addEventListener("show.bs.modal",function(){document.querySelectorAll("body > *:not(.modal):not(.modal-backdrop)").forEach(l=>{l.style.filter="blur(15px)",l.style.transition="filter 0.3s ease"}),setTimeout(()=>{const l=document.querySelector(".modal-backdrop");l&&(l.style.backgroundColor="rgba(0, 0, 0, 0.3)")},100)}),n.addEventListener("hide.bs.modal",function(){document.querySelectorAll("body > *").forEach(l=>{l.style.filter="",l.style.transition=""}),e.classList.remove("modal-open-custom")}),document.querySelector("#loginForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),u=l.get("email"),f=l.get("password");if(!u||!f){x("請輸入電子郵件和密碼","warning","輸入不完整");return}try{const d=await Gg(u,f);console.log("登入成功:",d.user),x("登入成功！歡迎回來","success","登入成功");const p=bootstrap.Modal.getInstance(n);p&&p.hide()}catch(d){console.error("登入失敗:",d);let p="登入失敗";switch(d.code){case"auth/user-not-found":p="找不到此帳號，請先註冊或檢查 Email 是否正確";break;case"auth/wrong-password":case"auth/invalid-credential":p="密碼錯誤或帳號不存在，請檢查登入資訊";break;case"auth/invalid-email":p="請輸入有效的電子郵件地址";break;default:p=`登入失敗：${d.message}`}x(p,"error","登入失敗")}}),document.querySelector("#registerForm").addEventListener("submit",async function(c){c.preventDefault();const l=new FormData(this),u=l.get("name"),f=l.get("email"),d=l.get("password"),p=l.get("confirmPassword");if(!u||!f||!d||!p){x("請填寫所有必填欄位","warning","輸入不完整");return}if(d!==p){x("密碼和確認密碼不一致","warning","密碼不符");return}if(d.length<6){x("密碼至少需要6個字元","warning","密碼太短");return}try{const v=await zg(f,d);console.log("註冊成功:",v.user),x("註冊成功！現在可以使用此帳號登入","success","註冊成功");const m=bootstrap.Modal.getInstance(n);m&&m.hide(),this.reset()}catch(v){console.error("註冊失敗:",v);let m="註冊失敗";switch(v.code){case"auth/email-already-in-use":m="此電子郵件已被註冊，請使用其他 Email 或嘗試登入";break;case"auth/invalid-email":m="請輸入有效的電子郵件地址";break;case"auth/weak-password":m="密碼強度不足，請使用更複雜的密碼（至少包含字母和數字）";break;default:m=`註冊失敗：${v.message}`}x(m,"error","註冊失敗")}});const t=document.querySelector("#googleLoginBtn"),s=document.querySelector("#githubLoginBtn"),r=document.querySelector("#googleRegisterBtn"),i=document.querySelector("#githubRegisterBtn");t&&(t.addEventListener("click",Es),console.log("Google 登入按鈕事件已綁定")),s&&(s.addEventListener("click",vs),console.log("GitHub 登入按鈕事件已綁定")),r&&(r.addEventListener("click",Es),console.log("Google 註冊按鈕事件已綁定")),i&&(i.addEventListener("click",vs),console.log("GitHub 註冊按鈕事件已綁定")),!t&&!r&&(console.log("使用備用方案綁定 Google 按鈕"),document.querySelectorAll(".social-btn .fa-google").forEach((l,u)=>{const f=l.closest("button");f&&(f.addEventListener("click",Es),console.log(`Google 按鈕 ${u+1} 事件已綁定`))})),!s&&!i&&(console.log("使用備用方案綁定 GitHub 按鈕"),document.querySelectorAll(".social-btn .fa-github").forEach((l,u)=>{const f=l.closest("button");f&&(f.addEventListener("click",vs),console.log(`GitHub 按鈕 ${u+1} 事件已綁定`))}));function o(){document.querySelectorAll(".member-dropdown").forEach(l=>{l.querySelectorAll(".dropdown-item:not(.logout-item)").forEach(f=>{f.addEventListener("click",function(d){c_(d,this)})})})}o();const a=document.querySelector("#confirmLogoutBtn");a&&(a.addEventListener("click",l_),console.log("登出確認按鈕事件已綁定"))});function h_(){const n=document.querySelector("#mobileDropdown"),e=document.querySelector("#hamburgerIcon"),t=document.body;n.classList.toggle("show"),n.classList.contains("show")?(e.className="fa-solid fa-xmark text-natural-700 hamburger-icon active",t.classList.add("mobile-menu-open"),f_()):(e.className="fa-solid fa-bars text-natural-700 hamburger-icon",t.classList.remove("mobile-menu-open"),$a())}function Ma(){const n=document.querySelector("#mobileDropdown"),e=document.querySelector("#hamburgerIcon"),t=document.body;n.classList.remove("show"),e.className="fa-solid fa-bars text-natural-700 hamburger-icon",t.classList.remove("mobile-menu-open"),$a()}function f_(){const n=document.documentElement;n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("portrait").catch(()=>{})}function $a(){!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement||(document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}window.toggleMobileDropdown=h_;window.closeMobileDropdown=Ma;document.addEventListener("fullscreenchange",pr);document.addEventListener("webkitfullscreenchange",pr);document.addEventListener("msfullscreenchange",pr);function pr(){const n=document.querySelector("#mobileDropdown");!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement&&n&&n.classList.contains("show")&&Ma()}(function(){document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("backToTop");if(!n){console.warn("返回頂部按鈕未找到");return}const e=300;let t;window.addEventListener("scroll",function(){t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(function(){s()})});function s(){(window.pageYOffset||document.documentElement.scrollTop)>e?n.classList.add("show"):n.classList.remove("show")}n.addEventListener("click",function(o){o.preventDefault(),r()});function r(){window.scrollTo({top:0,behavior:"smooth"}),"scrollBehavior"in document.documentElement.style||i()}function i(){const o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(i),window.scrollTo(0,o-o/8))}s(),console.log("返回頂部按鈕功能已啟用")})})();window.bootstrap=Fh;
