import{r as o,_ as J,R as n,b as s,c as K,P as e,q as Q,f as U}from"./index-3HJcrVZQ.js";import{u as W,t as X,v as Y}from"./DefaultLayout-Cgrx63WZ.js";import{g as Z,e as $}from"./getRTLPlacement-BVdSSLSr.js";var H=o.forwardRef(function(t,O){var q=t.children,m=t.animation,x=m===void 0?!0:m,F=t.className,M=t.container,L=t.content,v=t.delay,l=v===void 0?0:v,b=t.fallbackPlacements,_=b===void 0?["top","right","bottom","left"]:b,h=t.offset,j=h===void 0?[0,8]:h,g=t.onHide,y=t.onShow,P=t.placement,A=P===void 0?"top":P,B=t.title,k=t.trigger,r=k===void 0?"click":k,d=t.visible,I=J(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","title","trigger","visible"]),i=o.useRef(null),a=o.useRef(null),V=W(O,i),w="popover".concat(o.useId()),E=o.useState(!1),f=E[0],R=E[1],T=o.useState(d),c=T[0],N=T[1],C=X(),z=C.initPopper,D=C.destroyPopper,S=typeof l=="number"?{show:l,hide:l}:l,G={modifiers:[{name:"arrow",options:{element:".popover-arrow"}},{name:"flip",options:{fallbackPlacements:_}},{name:"offset",options:{offset:j}}],placement:Z(A,a.current)};o.useEffect(function(){if(d){u();return}p()},[d]),o.useEffect(function(){if(f&&a.current&&i.current){z(a.current,i.current,G),setTimeout(function(){N(!0)},S.show);return}!f&&a.current&&i.current&&D()},[f]),o.useEffect(function(){!c&&a.current&&i.current&&$(function(){R(!1)},i.current)},[c]);var u=function(){R(!0),y&&y()},p=function(){setTimeout(function(){N(!1),g&&g()},S.hide)};return n.createElement(n.Fragment,null,n.cloneElement(q,s(s(s(s(s({},c&&{"aria-describedby":w}),{ref:a}),(r==="click"||r.includes("click"))&&{onClick:function(){return c?p():u()}}),(r==="focus"||r.includes("focus"))&&{onFocus:function(){return u()},onBlur:function(){return p()}}),(r==="hover"||r.includes("hover"))&&{onMouseEnter:function(){return u()},onMouseLeave:function(){return p()}})),n.createElement(Y,{container:M,portal:!0},f&&n.createElement("div",s({className:K("popover","bs-popover-auto",{fade:x,show:c},F),id:w,ref:V,role:"tooltip"},I),n.createElement("div",{className:"popover-arrow"}),n.createElement("div",{className:"popover-header"},B),n.createElement("div",{className:"popover-body"},L))))});H.propTypes={animation:e.bool,children:e.node,className:e.string,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:Q,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),title:e.oneOfType([e.string,e.node]),trigger:U,visible:e.bool};H.displayName="CPopover";export{H as C};
