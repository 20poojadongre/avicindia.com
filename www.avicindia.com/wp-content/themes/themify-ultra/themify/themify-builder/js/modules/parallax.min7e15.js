'use strict';(function(l,e,f,q){function m(a){this.element=a;this.init()}const r=l(f),b=[],n=function(){for(let a=b.length-1;-1<a;--a)b[a]&&b[a].element?b[a].update(a):g(a)},p=function(a){a&&(h=a.h);for(a=b.length-1;-1<a;--a)b[a]&&b[a].element?(b[a].top=b[a].element.offset().top,b[a].update(a)):g(a)},g=function(a){b[a]&&(b[a].classList&&b[a].classList.remove("builder-parallax-scrolling"),b.splice(a,1),0===b.length&&(e.off("tfsmartresize",p),f.removeEventListener("scroll",n,{passive:!0}),k=null))};
let h=null,k=null;m.prototype={top:0,init(){this.top=this.element.offset().top;const a=this.element.css("background-image").replace(/(url\(|\)|")/g,"");if(a&&"none"!==a){const c=new Image;c.src=a;e.imagesLoad(c,function(d){this.w=c.width;this.h=c.height;b.push(this);this.update()}.bind(this))}else b.push(this),this.update();null===k&&(h=e.h,e.on("tfsmartresize",p),f.addEventListener("scroll",n,{passive:!0}),k=!0)},update(a){if(!1!==q.body.contains(this.element[0])&&this.element[0].classList.contains("builder-parallax-scrolling")){var c=
r.scrollTop(),d=this.element.offset().top;a=this.element.outerHeight(!0);d+a<c||d>c+h||(this.element[0].style.backgroundPositionY="calc(50% + "+Math.round(.1*(d-c))+"px)",d=Math.max(this.element.outerWidth(!0)/this.w,a/this.h),c=Math.round(this.w*d),d=Math.round(this.h*d),this.element[0].style.backgroundSize=d===Math.round(a)?Math.round(1.3*c)+"px "+Math.round(1.3*d)+"px":"")}else g(a)}};e.on("tb_parallax_init",function(a){a instanceof jQuery&&(a=a.get());void 0===a.length&&(a=[a]);for(let c=a.length-
1;-1<c;--c){let d=l(a[c]);d.data("plugin_builderParallax")||d.data("plugin_builderParallax",new m(d))}})})(jQuery,Themify,window,document);
