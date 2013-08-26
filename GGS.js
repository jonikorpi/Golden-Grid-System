/*
*
*  Golden Gridlet (1.01) 	<http://goldengridsystem.com/>
*  by Joni Korpi 			<http://jonikorpi.com/>
*  licensed under MIT 		<http://opensource.org/licenses/mit-license.php>
*	
*/

var guideColor = 'rgb(255,195,0)';
var guideInnerColor = 'rgba(255,255,255, 0.91)';
var guideOpacity = '0.618';

var switchColor = 'rgb(0,0,0)';
var switchOpacity = '0.618';

var baseFontSize = 16;
var baselineGridHeight = (24 / baseFontSize)+'em';

var eightColBreakpoint = ((720-1) / baseFontSize)+'em';
var sixteenColBreakpoint = ((1872-1) / baseFontSize)+'em';

/*
*  Note that the script might not work as expected if 
*  the <body> element of your page has a set width and 
*  position: relative;, because the guides are appended 
*  inside <body>, but positioned in relation to <html>.
*
*  Also note that the baseline grid doesn't really align
*  up anymore after zooming the baseline grid in or out,
*  because of rounding errors.
*/


/*!
  * Ender: open module JavaScript framework
  * copyright Dustin Diaz & Jacob Thornton 2011 (@ded @fat)
  * https://ender.no.de
  * License MIT
  * Build: ender -b jeesh
  */
!function(a){function d(a,b){return c(a,b)}function c(a,e,f){d._select&&(typeof a=="string"||a.nodeName||a.length&&"item"in a||a==window)?(f=d._select(a,e),f.selector=a):f=isFinite(a.length)?a:[a];return b(f,c)}function b(a,b){for(var c in b)c!="noConflict"&&c!="_VERSION"&&(a[c]=b[c]);return a}b(d,{_VERSION:"0.2.4",ender:function(a,e){b(e?c:d,a)},fn:a.$&&a.$.fn||{}}),b(c,{forEach:function(a,b,c){for(c=0,l=this.length;c<l;++c)c in this&&a.call(b||this[c],this[c],c,this);return this},$:d});var e=a.$;d.noConflict=function(){a.$=e;return this},typeof module!="undefined"&&module.exports&&(module.exports=d),a.ender=a.$=d}(this),!function(a){function F(a){var b=a.relatedTarget;if(!b)return b==null;return b!=this&&b.prefix!="xul"&&!/document/.test(this.toString())&&!p(this,b)}var b=1,c={},d={},e=/over|out/,f=/[^\.]*(?=\..*)\.|.*/,g=/\..*/,h="addEventListener",i="attachEvent",j="removeEventListener",k="detachEvent",l=a.document||{},m=l.documentElement||{},n=m[h],o=n?h:i,p=function(a,b){var c=b.parentNode;while(c!=null){if(c==a)return!0;c=c.parentNode}},q=function(a,c){return a.__uid=c||a.__uid||b++},r=function(a){var b=q(a);return c[b]=c[b]||{}},s=n?function(a,b,c,d){a[d?h:j](b,c,!1)}:function(a,b,c,d,e){e&&d&&(a["_on"+e]=a["_on"+e]||0),a[d?i:k]("on"+b,c)},t=function(b,c,d){return function(e){e=D(e||((this.ownerDocument||this.document||this).parentWindow||a).event);return c.apply(b,[e].concat(d))}},u=function(a,b,c,d,e){return function(f){(d?d.call(this,f):n?!0:f&&f.propertyName=="_on"+c||!f)&&b.apply(a,[f].concat(e))}},v=function(a,b,c,e){var h=b.replace(g,""),i=r(a),j=i[h]||(i[h]={}),k=q(c,b.replace(f,""));if(j[k])return a;var l=G[h];l&&(c=l.condition?u(a,c,h,l.condition):c,h=l.base||h);var m=E[h];c=m?t(a,c,e):u(a,c,h,!1,e),m=n||m;if(h=="unload"){var p=c;c=function(){w(a,h,c)&&p()}}a[o]&&s(a,m?h:"propertychange",c,!0,!m&&h),j[k]=c,c.__uid=k;return h=="unload"?a:d[q(a)]=a},w=function(a,b,c){var d,e,h,i,j=r(a),k=b.replace(g,"");if(!j||!j[k])return a;e=b.replace(f,""),h=e?e.split("."):[c.__uid];for(i=h.length;i--;){d=h[i],c=j[k][d],delete j[k][d];if(a[o]){k=G[k]?G[k].base:k;var l=n||E[k];s(a,l?k:"propertychange",c,!1,!l&&k)}}return a},x=function(a,b,c){return function(d){var e=typeof a=="string"?c(a,this):a;for(var f=d.target;f&&f!=this;f=f.parentNode)for(var g=e.length;g--;)if(e[g]==f)return b.apply(f,arguments)}},y=function(a,b,c,d,e){if(typeof b=="object"&&!c)for(var f in b)b.hasOwnProperty(f)&&y(a,f,b[f]);else{var g=typeof c=="string",h=(g?c:b).split(" ");c=g?x(b,d,e):c;for(var i=h.length;i--;)v(a,h[i],c,Array.prototype.slice.call(arguments,g?4:3))}return a},z=function(a,b,c){var d,e,h,i,j=typeof b=="string",k=j&&b.replace(f,""),l=w,m=r(a);if(j&&/\s/.test(b)){b=b.split(" "),i=b.length-1;while(z(a,b[i])&&i--);return a}h=j?b.replace(g,""):b;if(!m||j&&!m[h])return a;if(typeof c=="function")l(a,h,c);else if(k)l(a,b);else{l=h?l:z,e=j&&h,h=h?c||m[h]||h:m;for(d in h)h.hasOwnProperty(d)&&l(a,e||d,h[d])}return a},A=function(a,b,c){var d,e,h,i=b.split(" ");for(h=i.length;h--;){b=i[h].replace(g,"");var j=E[b],k=i[h].replace(f,""),l=r(a)[b];if(k){k=k.split(".");for(e=k.length;e--;)l[k[e]]&&l[k[e]].apply(a,c)}else if(!c&&a[o])B(j,b,a);else for(e in l)l.hasOwnProperty(e)&&l[e].apply(a,c)}return a},B=n?function(b,c,d){evt=document.createEvent(b?"HTMLEvents":"UIEvents"),evt[b?"initEvent":"initUIEvent"](c,!0,!0,a,1),d.dispatchEvent(evt)}:function(a,b,c){a?c.fireEvent("on"+b,document.createEventObject()):c["_on"+b]++},C=function(a,b,c){var d=r(b),e,f;e=c?d[c]:d;for(f in e)e.hasOwnProperty(f)&&(c?y:C)(a,c||b,c?e[f]:f);return a},D=function(a){var b={};if(!a)return b;var c=a.type,d=a.target||a.srcElement;b.preventDefault=D.preventDefault(a),b.stopPropagation=D.stopPropagation(a),b.target=d&&d.nodeType==3?d.parentNode:d;if(~c.indexOf("key"))b.keyCode=a.which||a.keyCode;else if(/click|mouse|menu/i.test(c)){b.rightClick=a.which==3||a.button==2,b.pos={x:0,y:0};if(a.pageX||a.pageY)b.clientX=a.pageX,b.clientY=a.pageY;else if(a.clientX||a.clientY)b.clientX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,b.clientY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;e.test(c)&&(b.relatedTarget=a.relatedTarget||a[(c=="mouseover"?"from":"to")+"Element"])}for(var f in a)f in b||(b[f]=a[f]);return b};D.preventDefault=function(a){return function(){a.preventDefault?a.preventDefault():a.returnValue=!1}},D.stopPropagation=function(a){return function(){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}};var E={click:1,dblclick:1,mouseup:1,mousedown:1,contextmenu:1,mousewheel:1,DOMMouseScroll:1,mouseover:1,mouseout:1,mousemove:1,selectstart:1,selectend:1,keydown:1,keypress:1,keyup:1,orientationchange:1,touchstart:1,touchmove:1,touchend:1,touchcancel:1,gesturestart:1,gesturechange:1,gestureend:1,focus:1,blur:1,change:1,reset:1,select:1,submit:1,load:1,unload:1,beforeunload:1,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1},G={mouseenter:{base:"mouseover",condition:F},mouseleave:{base:"mouseout",condition:F},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}},H={add:y,remove:z,clone:C,fire:A},I=function(a){var b=z(a).__uid;b&&(delete d[b],delete c[b])};a[i]&&y(a,"unload",function(){for(var b in d)d.hasOwnProperty(b)&&I(d[b]);a.CollectGarbage&&CollectGarbage()});var J=a.bean;H.noConflict=function(){a.bean=J;return this},typeof module!="undefined"&&module.exports?module.exports=H:a.bean=H}(this),!function(a){var b=bean.noConflict(),c=function(c,d,e){var f=d?[d]:[];return function(){for(var e,g=0,h=this.length;g<h;g++)e=[this[g]].concat(f,Array.prototype.slice.call(arguments,0)),e.length==4&&e.push(a),!arguments.length&&c=="add"&&d&&(c="fire"),b[c].apply(this,e);return this}},d=c("add"),e=c("remove"),f=c("fire"),g={on:d,addListener:d,bind:d,listen:d,delegate:d,unbind:e,unlisten:e,removeListener:e,undelegate:e,emit:f,trigger:f,cloneEvents:c("clone"),hover:function(a,c,d){for(d=this.length;d--;)b.add.call(this,this[d],"mouseenter",a),b.add.call(this,this[d],"mouseleave",c);return this}},h,i=["blur","change","click","dblclick","error","focus","focusin","focusout","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mouseout","mouseover","mouseup","mousemove","resize","scroll","select","submit","unload"];for(h=i.length;h--;)g[i[h]]=c("add",i[h]);a.ender(g,!0)}(ender),!function(a,b){function J(a,b){return new E(a,b)}function I(){return{x:b.pageXOffset||d.scrollLeft,y:b.pageYOffset||d.scrollTop}}function H(a){return a===b||/^(?:body|html)$/i.test(a.tagName)}function G(a,c,d){var e=this[0];if(a==null&&c==null)return(H(e)?I():{x:e.scrollLeft,y:e.scrollTop})[d];H(e)?b.scrollTo(a,c):(a!=null&&(e.scrollLeft=a),c!=null&&(e.scrollTop=c));return this}function F(a){return typeof a=="string"?J.create(a):z(a)?[a]:a}function E(a){this.length=0;if(a){a=typeof a!="string"&&!a.nodeType&&typeof a.length!="undefined"?a:[a],this.length=a.length;for(var b=0;b<a.length;b++)this[b]=a[b]}}function D(a,b,c){var d=J(a),e=d.css("position"),f=d.offset(),g="relative",h=e==g,i=[parseInt(d.css("left"),10),parseInt(d.css("top"),10)];e=="static"&&(d.css("position",g),e=g),isNaN(i[0])&&(i[0]=h?0:a.offsetLeft),isNaN(i[1])&&(i[1]=h?0:a.offsetTop),b!==null&&(a.style.left=b-f.left+i[0]+"px"),c!==null&&(a.style.top=c-f.top+i[1]+"px")}function C(a,b,c){var d=0,g=b||this,h=[],i=f&&typeof a=="string"&&a.charAt(0)!="<"?function(b){return(b=f(a))&&(b.selected=1)&&b}():a;w(F(i),function(a){w(g,function(b){var f=!b[e]||b[e]&&!b[e][e]?function(){var a=b.cloneNode(!0);g.$&&g.cloneEvents&&g.$(a).cloneEvents(b);return a}():b;c(a,f),h[d]=f,d++})},this),w(h,function(a,b){g[b]=a}),g.length=d;return g}function A(a,b,c){for(var d=0,e=a.length;d<e;++d)if(b.call(c,a[d],d,a))return!0;return!1}function z(a){return a&&a.nodeName&&a.nodeType==1}function y(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function w(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c||a[d],a[d],d,a);return a}function v(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}var c=a.document,d=c.documentElement,e="parentNode",f=null,g="getElementsByTagName",h=/^checked|value|selected$/,i=/select|fieldset|table|tbody|tfoot|td|tr|colgroup/i,j="table",k={thead:j,tbody:j,tfoot:j,tr:"tbody",th:"tr",td:"tr",fieldset:"form",option:"select"},l=/^checked|selected$/,m=/msie/i.test(navigator.userAgent),n=[],o=0,p=/^-?[\d\.]+$/,q="px",r="setAttribute",s="getAttribute",t=/(^\s*|\s*$)/g,u={lineHeight:1,zoom:1,zIndex:1,opacity:1},x=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(t,"")},B=c.defaultView&&c.defaultView.getComputedStyle?function(a,b){var d=null;b=="float"&&(b="cssFloat");var e=c.defaultView.getComputedStyle(a,"");e&&(d=e[y(b)]);return a.style[b]||d}:m&&d.currentStyle?function(a,b){b=y(b),b=b=="float"?"styleFloat":b;if(b=="opacity"){var c=100;try{c=a.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(d){try{c=a.filters("alpha").opacity}catch(e){}}return c/100}var f=a.currentStyle?a.currentStyle[b]:null;return a.style[b]||f}:function(a,b){return a.style[y(b)]};E.prototype={each:function(a,b){return w(this,a,b)},map:function(a,b){var c=[],d,e;for(e=0;e<this.length;e++)d=a.call(this,this[e]),b?b(d)&&c.push(d):c.push(d);return c},first:function(){return J(this[0])},last:function(){return J(this[this.length-1])},html:function(a,b){function f(b){while(b.firstChild)b.removeChild(b.firstChild);w(F(a),function(a){b.appendChild(a)})}var c=b?d.textContent==null?"innerText":"textContent":"innerHTML",e;return typeof a!="undefined"?this.each(function(b){(e=b.tagName.match(i))?f(b,e[0]):b[c]=a}):this[0]?this[0][c]:""},text:function(a){return this.html(a,1)},addClass:function(a){return this.each(function(b){this.hasClass(b,a)||(b.className=x(b.className+" "+a))},this)},removeClass:function(a){return this.each(function(b){this.hasClass(b,a)&&(b.className=x(b.className.replace(v(a)," ")))},this)},hasClass:function(a,b){return typeof b=="undefined"?A(this,function(b){return v(a).test(b.className)}):v(b).test(a.className)},toggleClass:function(a,b){if(typeof b!="undefined"&&!b)return this;return this.each(function(b){this.hasClass(b,a)?b.className=x(b.className.replace(v(a)," ")):b.className=x(b.className+" "+a)},this)},show:function(a){return this.each(function(b){b.style.display=a||""})},hide:function(a){return this.each(function(a){a.style.display="none"})},append:function(a){return this.each(function(b){w(F(a),function(a){b.appendChild(a)})})},prepend:function(a){return this.each(function(b){var c=b.firstChild;w(F(a),function(a){b.insertBefore(a,c)})})},appendTo:function(a,b){return C.call(this,a,b,function(a,b){a.appendChild(b)})},prependTo:function(a,b){return C.call(this,a,b,function(a,b){a.insertBefore(b,a.firstChild)})},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},related:function(a){return this.map(function(b){b=b[a];while(b&&b.nodeType!==1)b=b[a];return b||0},function(a){return a})},before:function(a){return this.each(function(b){w(J.create(a),function(a){b[e].insertBefore(a,b)})})},after:function(a){return this.each(function(b){w(J.create(a),function(a){b[e].insertBefore(a,b.nextSibling)})})},insertBefore:function(a,b){return C.call(this,a,b,function(a,b){a[e].insertBefore(b,a)})},insertAfter:function(a,b){return C.call(this,a,b,function(a,b){var c=a.nextSibling;c?a[e].insertBefore(b,c):a[e].appendChild(b)})},css:function(a,d,e){if(d===undefined&&typeof a=="string"){d=this[0];if(!d)return null;if(d==c||d==b){e=d==c?J.doc():J.viewport();return a=="width"?e.width:a=="height"?e.height:""}return B(d,a)}var f=a;typeof a=="string"&&(f={},f[a]=d),m&&f.opacity&&(f.filter="alpha(opacity="+f.opacity*100+")",f.zoom=a.zoom||1,delete f.opacity);if(d=f["float"])m?f.styleFloat=d:f.cssFloat=d,delete f["float"];var g=function(a,b,c){for(var d in f)f.hasOwnProperty(d)&&(c=f[d],(b=y(d))&&p.test(c)&&!(b in u)&&(c+=q),a.style[b]=c)};return this.each(g)},offset:function(a,b){if(a||b)return this.each(function(c){D(c,a,b)});var c=this[0],d=c.offsetWidth,e=c.offsetHeight,f=c.offsetTop,g=c.offsetLeft;while(c=c.offsetParent)f=f+c.offsetTop,g=g+c.offsetLeft;return{top:f,left:g,height:e,width:d}},attr:function(a,b){var c=this[0];return typeof b=="undefined"?h.test(a)?l.test(a)&&typeof c[a]=="string"?!0:c[a]:c[s](a):this.each(function(c){a=="value"?c.value=b:c[r](a,b)})},val:function(a){return typeof a=="string"?this.attr("value",a):this[0].value},removeAttr:function(a){return this.each(function(b){b.removeAttribute(a)})},data:function(a,b){var c=this[0];if(typeof b=="undefined"){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid");n[d]||(n[d]={});return n[d][a]}return this.each(function(c){c[s]("data-node-uid")||c[r]("data-node-uid",++o);var d=c[s]("data-node-uid"),e={};e[a]=b,n[d]=e})},remove:function(){return this.each(function(a){a[e]&&a[e].removeChild(a)})},empty:function(){return this.each(function(a){while(a.firstChild)a.removeChild(a.firstChild)})},detach:function(){return this.map(function(a){return a[e].removeChild(a)})},scrollTop:function(a){return G.call(this,null,a,"y")},scrollLeft:function(a){return G.call(this,a,null,"x")}},J.setQueryEngine=function(a){f=a,delete J.setQueryEngine},J.aug=function(a,b){for(var c in a)a.hasOwnProperty(c)&&((b||E.prototype)[c]=a[c])},J.create=function(a){return typeof a=="string"?function(){var b=/^<([^\s>]+)/.exec(a),d=c.createElement(b&&k[b[1].toLowerCase()]||"div"),e=[];d.innerHTML=a;var f=d.childNodes;d=d.firstChild,e.push(d);while(d=d.nextSibling)d.nodeType==1&&e.push(d);return e}():z(a)?[a.cloneNode(!0)]:[]},J.doc=function(){var a=d.scrollWidth,b=d.scrollHeight,c=this.viewport();return{width:Math.max(a,c.width),height:Math.max(b,c.height)}},J.firstChild=function(a){for(var b=a.childNodes,c=0,d=b&&b.length||0,e;c<d;c++)b[c].nodeType===1&&(e=b[d=c]);return e},J.viewport=function(){var a=self.innerHeight,b=self.innerWidth;m&&(a=d.clientHeight,b=d.clientWidth);return{width:b,height:a}},J.isAncestor="compareDocumentPosition"in d?function(a,b){return(a.compareDocumentPosition(b)&16)==16}:"contains"in d?function(a,b){return a!==b&&a.contains(b)}:function(a,b){while(b=b[e])if(b===a)return!0;return!1};var K=a.bonzo;J.noConflict=function(){a.bonzo=K;return this},a.bonzo=J}(this,window),!function(a){function d(a){var b=[],c,d;label:for(c=0;c<a.length;c++){for(d=0;d<b.length;d++)if(b[d]==a[c])continue label;b[b.length]=a[c]}return b}function c(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}var b=bonzo;b.setQueryEngine(a),a.ender(b),a.ender(b(),!0),a.ender({create:function(c){return a(b.create(c))}}),a.id=function(b){return a([document.getElementById(b)])},a.ender({parents:function(b,e){var f=a(b),g,h,i,j=[];for(g=0,h=this.length;g<h;g++){i=this[g];while(i=i.parentNode)if(c(f,i)!==-1){j.push(i);if(e)break}}return a(d(j))},closest:function(a){return this.parents(a,!0)},first:function(){return a(this[0])},last:function(){return a(this[this.length-1])},next:function(){return a(b(this).next())},previous:function(){return a(b(this).previous())},appendTo:function(a){return b(this.selector).appendTo(a,this)},prependTo:function(a){return b(this.selector).prependTo(a,this)},insertAfter:function(a){return b(this.selector).insertAfter(a,this)},insertBefore:function(a){return b(this.selector).insertBefore(a,this)},siblings:function(){var b,c,d,e=[];for(b=0,c=this.length;b<c;b++){d=this[b];while(d=d.previousSibling)d.nodeType==1&&e.push(d);d=this[b];while(d=d.nextSibling)d.nodeType==1&&e.push(d)}return a(e)},children:function(){var c,e=[];for(i=0,l=this.length;i<l;i++){if(!(c=b.firstChild(this[i])))continue;e.push(c);while(c=c.nextSibling)c.nodeType==1&&e.push(c)}return a(d(e))},height:function(a){return a?this.css("height",a):parseInt(this.css("height"),10)},width:function(a){return a?this.css("width",a):parseInt(this.css("width"),10)}},!0)}(ender||$),!function(a,b){function l(a){k=1;while(a=c.shift())a()}var c=[],d,e=!1,f=b.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k=/^loade|c/.test(b.readyState);b[i]&&b[i](h,function a(){b.removeEventListener(h,a,e),l()},e),g&&b.attachEvent(j,d=function a(){/^c/.test(b.readyState)&&(b.detachEvent(j,a),l())}),a.domReady=g?function(a){self!=top?k?a():c.push(a):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){domReady(a)},50)}a()}()}:function(a){k?a():c.push(a)}}(this,document),!function(a){a.ender({domReady:domReady}),a.ender({ready:function(a){domReady(a);return this}},!0)}(ender),!function(a,b){function X(a,c){var d=typeof c=="string"?X(c)[0]:c||b;if(!d||!a)return[];if(h=U(a,c,X))return h;return Z(a,d)}function W(a){var b=[],c,d;label:for(c=0;c<a.length;c++){for(d=0;d<b.length;d++)if(b[d]==a[c])continue label;b[b.length]=a[c]}return b}function V(a){return a&&a.nodeType&&(a.nodeType==1||a.nodeType==9)}function U(a,c,d){var e=typeof c=="string"?d(c)[0]:c||b;if(a===window||V(a))return!c||a!==window&&V(e)&&Y(a,e)?[a]:[];if(a&&typeof a=="object"&&isFinite(a.length))return N(a);if(h=a.match(w))return(m=b.getElementById(h[1]))?[m]:[];if(h=a.match(y))return N(e.getElementsByTagName(h[1]));return!1}function T(a){var c=[],d=[],e,f=0,g,h,i,j,k,l,m,n,o,q,r=M.g(a)||M.s(a,a.split(C));r=r.slice(0);if(!r.length)return c;k=r.pop(),n=r.length&&(i=r[r.length-2].match(w))?b.getElementById(i[1]):b;if(!n)return c;o=P(k),m=/^[+~]$/.test(r[r.length-1])?function(a){a=[];while(n=n.nextSibling)n.nodeType==1&&(o[1]?o[1]==n.tagName.toLowerCase():1)&&a.push(n);return a}():n.getElementsByTagName(o[1]||"*");for(e=0,h=m.length;e<h;e++)if(q=Q.apply(m[e],o))c[f++]=q;if(!r.length)return c;for(f=0,h=c.length,g=0;f<h;f++){j=c[f];for(e=r.length-2;e>=0;e=e-2)while(j=H[r[e+1]](j,c[f]))if(p=Q.apply(j,P(r[e])))break;p&&(d[g++]=c[f])}return d}function S(a,b,c){switch(a){case"=":return b==c;case"^=":return b.match(L.g("^="+c)||L.s("^="+c,new RegExp("^"+R(c))));case"$=":return b.match(L.g("$="+c)||L.s("$="+c,new RegExp(R(c)+"$")));case"*=":return b.match(L.g(c)||L.s(c,new RegExp(R(c))));case"~=":return b.match(L.g("~="+c)||L.s("~="+c,new RegExp("(?:^|\\s+)"+R(c)+"(?:\\s+|$)")));case"|=":return b.match(L.g("|="+c)||L.s("|="+c,new RegExp("^"+R(c)+"(-|$)")))}return 0}function R(a){return K.g(a)||K.s(a,a.replace(D,"\\$1"))}function Q(a,b,c,e,f,g,h){var j,k,l;if(b&&this.tagName.toLowerCase()!==b)return!1;if(c&&(j=c.match(u))&&j[1]!==this.id)return!1;if(c&&(q=c.match(v)))for(d=q.length;d--;){k=q[d].slice(1);if(!(J.g(k)||J.s(k,new RegExp("(^|\\s+)"+k+"(\\s+|$)"))).test(this.className))return!1}if(e&&!h){i=this.attributes;for(l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&(i[l].name||l)==f)return this}if(e&&!S(g,this.getAttribute(f)||"",h))return!1;return this}function P(a){return a.match(G)}function O(a){while(a=a.previousSibling)if(a.nodeType==1)break;return a}function N(a){k=[];for(d=0,o=a.length;d<o;d++)k[d]=a[d];return k}function I(){this.c={}}var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=/#([\w\-]+)/,v=/\.[\w\-]+/g,w=/^#([\w\-]+$)/,x=/^\.([\w\-]+)$/,y=/^([\w\-]+)$/,z=/^([\w]+)?\.([\w\-]+)$/,A=b.documentElement,B=/\s*([\s\+\~>])\s*/g,C=/([\s\>\+\~])(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\])/,D=/([.*+?\^=!:${}()|\[\]\/\\])/g,E=/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,F=/\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,G=new RegExp(E.source+"("+F.source+")?"),H={" ":function(a){return a&&a!==A&&a.parentNode},">":function(a,b){return a&&a.parentNode==b.parentNode&&a.parentNode},"~":function(a){return a&&a.previousSibling},"+":function(a,b,c,d){if(!a)return!1;c=O(a),d=O(b);return c&&d&&c==d&&c}};I.prototype={g:function(a){return this.c[a]||undefined},s:function(a,b){this.c[a]=b;return b}};var J=new I,K=new I,L=new I,M=new I,Y="compareDocumentPosition"in A?function(a,b){return(b.compareDocumentPosition(a)&16)==16}:"contains"in A?function(a,c){c=c==b||c==window?A:c;return c!==a&&c.contains(a)}:function(a,b){while(a=a.parentNode)if(a===b)return 1;return 0},Z=b.querySelector&&b.querySelectorAll?function(a,c){if(b.getElementsByClassName&&(h=a.match(x)))return N(c.getElementsByClassName(h[1]));return N(c.querySelectorAll(a))}:function(a,c){a=a.replace(B,"$1");var d=[],f,i=[],j;if(h=a.match(z)){s=c.getElementsByTagName(h[1]||"*"),k=J.g(h[2])||J.s(h[2],new RegExp("(^|\\s+)"+h[2]+"(\\s+|$)"));for(j=0,g=s.length,e=0;j<g;j++)k.test(s[j].className)&&(d[e++]=s[j]);return d}for(j=0,s=a.split(","),g=s.length;j<g;j++)i[j]=T(s[j]);for(j=0,g=i.length;j<g&&(f=i[j]);j++){var l=f;if(c!==b){l=[];for(e=0,h=f.length;e<h&&(element=f[e]);e++)Y(element,c)&&l.push(element)}d=d.concat(l)}return W(d)};X.uniq=W;var $=a.qwery;X.noConflict=function(){a.qwery=$;return this},a.qwery=X}(this,document),!function(a){function e(b,c){var e=/^<([^\s>]+)/.exec(b)[1],f=(c||a).createElement(d[e]||"div"),g=[];f.innerHTML=b;var h=f.childNodes;f=f.firstChild,g.push(f);while(f=f.nextSibling)f.nodeType==1&&g.push(f);return g}var b=qwery.noConflict(),c="table",d={thead:c,tbody:c,tfoot:c,tr:"tbody",th:"tr",td:"tr",fieldset:"form",option:"select"};$._select=function(a,c){return/^\s*</.test(a)?e(a,c):b(a,c)},$.ender({find:function(a){var c=[],d,e,f,g,h;for(d=0,e=this.length;d<e;d++){h=b(a,this[d]);for(f=0,g=h.length;f<g;f++)c.push(h[f])}return $(b.uniq(c))},and:function(a){var b=$(a);for(var c=this.length,d=0,e=this.length+b.length;c<e;c++,d++)this[c]=b[d];return this}},!0)}(document);

var ender = $.noConflict();

function setHeights() {
	if (!ender('body').hasClass('ggs-hidden')) {
/* Which one is taller, <body> or <html>? */
		if (ender('body').offset().height > ender('html').offset().height) {
			var largerHeight = ender('body').offset().height;
		}
		else {
			var largerHeight = ender('html').offset().height;
		}

/* Give guides the new height */
		ender('.ggs-guide').each(function() {
			ender(this).css('height', largerHeight);
		});

/* Calculate the amount of lines needed and append them */
		var lines = Math.floor(largerHeight/24);
		ender('#ggs-baseline-container').empty();
		for (i=0; i<=lines; i++) {
			ender('#ggs-baseline-container').append('<div class="ggs-line"></div>');
		}

/* Set the baseline container to the same height as the guides, so there's no overflow */
		ender('#ggs-baseline-container').css('height', largerHeight);
	}
}

ender.domReady(function () {
	
/* 	Add control classes and switch element */
	ender('body').addClass('ggs-hidden ggs-animated').append('<div id="ggs-switch"><div class="ggs-switchBar"></div><div class="ggs-switchBar"></div><div class="ggs-switchBar"></div></div>');

/*  Create CSS */
    var styles = '\
        html{height:100%;position:relative;}\
        #ggs-switch{position:fixed;top:0;right:0;z-index:9500; cursor:pointer; width: 24px; margin: 18px 18px 14px; opacity:'+switchOpacity+'; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transition: all 0.145s ease-out; -moz-transition: all 0.145s ease-out; -ms-transition: all 0.145s ease-out; transition: all 0.145s ease-out;}\
        .ggs-switchBar {background: '+switchColor+'; height: 4px; margin-bottom: 4px;}\
        .ggs-animated #ggs-switch {-webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); transform: rotate(0deg);}\
        .ggs-guide{position:absolute;top:0;z-index:9000;height:100%;margin-left:-0.75em;border:solid '+guideColor+';border-width:0 0.75em;background:'+guideColor+';opacity:'+guideOpacity+'; -webkit-transition: all 0.235s ease-out; -moz-transition: all 0.235s ease-out; -ms-transition: all 0.235s ease-out; transition: all 0.235s ease-out;}\
        .ggs-animated .ggs-guide {-webkit-transform: scale(0, 1); -moz-transform: scale(0, 1); -ms-transform: scale(0, 1); transform: scale(0, 1); opacity: 0;}\
        .ggs-animated #ggs-baseline-container {opacity: 0;}\
        .ggs-hidden .ggs-guide, .ggs-hidden #ggs-baseline-container {display: none;}\
        .ggs-0{left:0;}\
        .ggs-1{left:11.11111111111111%;}\
        .ggs-2{left:16.666666666666664%;}\
        .ggs-3{left:22.22222222222222%;}\
        .ggs-4{left:27.77777777777778%;}\
        .ggs-5{left:33.33333333333333%;}\
        .ggs-6{left:38.888888888888886%;}\
        .ggs-7{left:44.44444444444444%;}\
        .ggs-8{left:50%;}\
        .ggs-9{left:55.55555555555556%;}\
        .ggs-10{left:61.11111111111111%;}\
        .ggs-11{left:66.66666666666666%;}\
        .ggs-12{left:72.22222222222221%;}\
        .ggs-13{left:77.77777777777777%;}\
        .ggs-14{left:83.33333333333333%;}\
        .ggs-15{left:88.88888888888889%;}\
        .ggs-16{right:0;}\
        .ggs-0,.ggs-16{width:5.555555555555555%;padding-right:0.75em;border:0;margin:0;-moz-box-size:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\
        .ggs-guide div{background:'+guideInnerColor+';width:2px;height:100%;position:absolute;left:-1px;top:0;}\
        .ggs-0 div{left:auto;right:0.75em;}\
        .ggs-16 div{left:0.75em;}\
        #ggs-baseline-container {opacity: '+guideOpacity+'; position: absolute; left:0; top:0; z-index: 8000; width: 100%; height: 100%; -webkit-transition: opacity 0.235s ease-out; -moz-transition: opacity 0.235s ease-out; -ms-transition: opacity 0.235s ease-out; transition: opacity 0.235s ease-out; overflow-y: hidden;}\
        .ggs-line {border-top: 1px dotted '+guideColor+'; height: '+baselineGridHeight+'; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box;}\
        @media screen and (max-width: '+(eightColBreakpoint)+'){.ggs-2,.ggs-6,.ggs-10,.ggs-14{display:none;}}\
        @media screen and (max-width: '+(sixteenColBreakpoint)+'){.ggs-1,.ggs-3,.ggs-5,.ggs-7,.ggs-9,.ggs-11,.ggs-13,.ggs-15{display:none;}}\
    ';	

/* 	Create guides */
	for (i=0; i<=16; i++) {
		ender('body').append(ender('<div class="ggs-guide ggs-'+i+'"><div></div></div>'));
	};
	ender('body').append(ender('<div id="ggs-baseline-container"></div>'));
	
/* 	Append CSS */
	(function(d,u) {
		if(d.createStyleSheet) {
			d.createStyleSheet( u );
		} 
		else {
			var css=d.createElement('style');
			css.setAttribute("type","text/css");
			css.appendChild(document.createTextNode(u));
			d.getElementsByTagName("head")[0].appendChild(css);
		}
	}(document, styles))
	
/* 	Resize guides when window size changes */
	ender(window).on('resize', setHeights);
	
/* 	Add listeners for switch element */
	ender('#ggs-switch').click(function(){
		if (ender('body').hasClass('ggs-hidden')) {
			ender('body').removeClass('ggs-hidden');
			setHeights();
			setTimeout(
				function () {
					ender('body').removeClass('ggs-animated');
				},
				20
			);
		}
		else {
			ender('body').addClass('ggs-animated');
			setTimeout(
				function () {
					ender('body').addClass('ggs-hidden');
				},
				300
			);
		}
	});
	
});
