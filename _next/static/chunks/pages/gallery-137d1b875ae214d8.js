(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1748:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n(182)}])},182:function(t,e,n){"use strict";n.r(e);var i=n(5893),s=n(3212),o=n(6640);let r=()=>(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(s.Z,{pageName:"Gallery"}),(0,i.jsx)("section",{children:(0,i.jsx)("div",{className:"gallery-container",children:["../assets/images/home/gallery/01.jpg","../assets/images/home/gallery/02.jpg","../assets/images/home/gallery/03.jpg","../assets/images/home/gallery/04.jpg","../assets/images/home/gallery/05.jpg","../assets/images/home/gallery/06.jpg","../assets/images/home/gallery/07.jpg","../assets/images/home/gallery/08.jpg","../assets/images/home/gallery/09.jpg","../assets/images/home/gallery/10.jpg","../assets/images/home/gallery/11.webp","../assets/images/home/gallery/12.jpeg","../assets/images/home/gallery/13.jpeg","../assets/images/home/gallery/14.jpeg","../assets/images/home/gallery/15.jpeg","../assets/images/home/gallery/16.jpeg","../assets/images/home/gallery/17.jpeg"].map((t,e)=>(0,i.jsx)("div",{className:"gallery-item",children:(0,i.jsx)("img",{src:t,alt:"Gallery Image ".concat(e+1)})},e))})})]});e.default=r},3212:function(t,e,n){"use strict";var i=n(5893),s=n(1664),o=n.n(s);let r=t=>{let{pageName:e}=t;return(0,i.jsx)("div",{className:"breadcumb-area d-flex align-items-center",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"breadcumb-content",children:[(0,i.jsxs)("h1",{children:[" ",e," "]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(o(),{href:"/",children:"Home"})}),(0,i.jsxs)("li",{children:[" ",e," "]})]})]})}),(0,i.jsx)("div",{className:"britcam-shape",children:(0,i.jsx)("div",{className:"breadcumb-content upp",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(o(),{href:"/",children:"Home"})}),(0,i.jsxs)("li",{children:[" ",(null==e?void 0:e.substring(0,28))+"".concat((null==e?void 0:e.length)>28?"... ":"")," "]})]})})})]})})})};e.Z=r},5541:function(){(function(){var t,e,n,i,s,o=function(t,e){return function(){return t.apply(e,arguments)}},r=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return -1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var s;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(s=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(s=document.createEventObject()).eventType=t:s.eventName=t,s},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,s;for(s=this.keys,e=n=0,i=s.length;n<i;e=++n)if(s[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,s,o;for(o=this.keys,n=i=0,s=o.length;i<s;n=++i)if(o[n]===t){this.values[n]=e;return}return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),s.test(e)&&e.replace(s,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},s=/(\-([a-z]){1})/g,this.WOW=function(){function s(t){null==t&&(t={}),this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.resetAnimation=o(this.resetAnimation,this),this.start=o(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return s.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},s.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},s.prototype.start=function(){var e,n,i,s,o;if(this.stopped=!1,this.boxes=(function(){var t,n,i,s;for(t=0,i=this.element.querySelectorAll("."+this.config.boxClass),s=[],n=i.length;t<n;t++)e=i[t],s.push(e);return s}).call(this),this.all=(function(){var t,n,i,s;for(t=0,i=this.boxes,s=[],n=i.length;t<n;t++)e=i[t],s.push(e);return s}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,i=(s=this.boxes).length;n<i;n++)e=s[n],this.applyStyle(e,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((o=this,function(t){var e,n,i,s,r;for(e=0,r=[],n=t.length;e<n;e++)s=t[e],r.push((function(){var t,e,n,o;for(t=0,n=s.addedNodes||[],o=[],e=n.length;t<e;t++)i=n[t],o.push(this.doSync(i));return o}).call(o));return r})).observe(document.body,{childList:!0,subtree:!0})},s.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},s.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},s.prototype.doSync=function(t){var e,n,i,s,o;if(null==t&&(t=this.element),1===t.nodeType){for(n=0,s=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),o=[],i=s.length;n<i;n++)e=s[n],0>r.call(this.all,e)?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),o.push(this.scrolled=!0)):o.push(void 0);return o}},s.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},s.prototype.applyStyle=function(t,e){var n,i,s,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration"),this.animate((o=this,function(){return o.customStyle(t,e,i,n,s)}))},s.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},s.prototype.resetStyle=function(){var t,e,n,i,s;for(e=0,i=this.boxes,s=[],n=i.length;e<n;e++)t=i[e],s.push(t.style.visibility="visible");return s},s.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},s.prototype.customStyle=function(t,e,n,i,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},s.prototype.vendors=["moz","webkit"],s.prototype.vendorSet=function(t,e){var n,i,s,o;for(n in i=[],e)s=e[n],t[""+n]=s,i.push((function(){var e,i,r,l;for(e=0,r=this.vendors,l=[],i=r.length;e<i;e++)o=r[e],l.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=s);return l}).call(this));return i},s.prototype.vendorCSS=function(t,e){var n,s,o,r,l,a;for(n=0,r=(l=i(t)).getPropertyCSSValue(e),s=(o=this.vendors).length;n<s;n++)a=o[n],r=r||l.getPropertyCSSValue("-"+a+"-"+e);return r},s.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},s.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},s.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},s.prototype.scrollHandler=function(){return this.scrolled=!0},s.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var e,n,i,s;for(e=0,i=this.boxes,s=[],n=i.length;e<n;e++)if(t=i[e]){if(this.isVisible(t)){this.show(t);continue}s.push(t)}return s}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},s.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},s.prototype.isVisible=function(t){var e,n,i,s,o;return n=t.getAttribute("data-wow-offset")||this.config.offset,s=(o=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=s&&e>=o},s.prototype.util=function(){return null!=this._util?this._util:this._util=new e},s.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},s}()}).call(this)}},function(t){t.O(0,[664,640,774,888,179],function(){return t(t.s=1748)}),_N_E=t.O()}]);