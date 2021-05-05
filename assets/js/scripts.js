
 
 //widowFix
 !function(t){jQuery.fn.widowFix=function(i){var n=t.extend({letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},i);if(this.length)return this.each(function(){var i,e=t(this);if(n.linkFix){var r=e.find("a:last");r.wrap("<var>");var l=t("var").html();i=r.contents()[0],r.contents().unwrap()}var a=t(this).html().split(" "),h=a.pop();if(!(a.length<=1)){if(function t(){""===h&&(h=a.pop(),t())}(),n.dashes){t.each(["-","–","—"],function(t,i){if(h.indexOf(i)>0)return h='<span style="white-space:nowrap;">'+h+"</span>",!1})}var s=a[a.length-1];if(n.linkFix){if(null!==n.letterLimit&&i.length>=n.letterLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()});if(null!==n.prevLimit&&s.length>=n.prevLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}else{if(null!==n.letterLimit&&h.length>=n.letterLimit)return;if(null!==n.prevLimit&&s.length>=n.prevLimit)return}var u=a.join(" ")+"&nbsp;"+h;e.html(u),n.linkFix&&e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}})}}(jQuery);

$('h1, h2, h3, h4, h5, p, li').widowFix({
    letterLimit: 9,
    prevLimit: 8,
    //linkFix: false
});


// mkto sticky form toggle
$('.mobileForm').on('click', function() {
  // $('body').toggleClass('locked');
  // $('.form--sticky').toggleClass('swapPosition');
  $('.form--sticky .container').slideToggle(300);
  $(this).parents('.flip-card').toggleClass('mobile-expanded');
  $('.span1').toggleClass('swap');
  $('.span2').toggleClass('swap');
});

//rellax
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,function(){var e=function(t,o){var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,m=!1;try{var u=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(e){}var w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,o=["Webkit","Moz","ms"];for(t in o)if(void 0!==e.style[o[t]+"Transform"])return o[t]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach(function(e){n.options[e]=o[e]}),o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach(function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n}),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax"),0<(u="string"==typeof t?document.querySelectorAll(t):[t]).length){if(n.elems=u,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(u=document.querySelector(n.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=u}var x,v=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;for(s=[],i=window.innerHeight,l=window.innerWidth,e=n.options.breakpoints,x=l<e[0]?"xs":l>=e[0]&&l<e[1]?"sm":l>=e[1]&&l<e[2]?"md":"lg",h(),e=0;e<n.elems.length;e++){var t=void 0,o=n.elems[e],r=o.getAttribute("data-rellax-percentage"),a=o.getAttribute("data-rellax-speed"),d=o.getAttribute("data-rellax-xs-speed"),c=o.getAttribute("data-rellax-mobile-speed"),m=o.getAttribute("data-rellax-tablet-speed"),u=o.getAttribute("data-rellax-desktop-speed"),w=o.getAttribute("data-rellax-vertical-speed"),f=o.getAttribute("data-rellax-horizontal-speed"),g=o.getAttribute("data-rellax-vertical-scroll-axis"),z=o.getAttribute("data-rellax-horizontal-scroll-axis"),T=o.getAttribute("data-rellax-zindex")||0,E=o.getAttribute("data-rellax-min"),L=o.getAttribute("data-rellax-max"),S=o.getAttribute("data-rellax-min-x"),Y=o.getAttribute("data-rellax-max-x"),k=o.getAttribute("data-rellax-min-y"),O=o.getAttribute("data-rellax-max-y"),X=!0;d||c||m||u?t={xs:d,sm:c,md:m,lg:u}:X=!1,d=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(d=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var R=n.options.vertical&&(r||n.options.center)?d:0,W=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;d=R+o.getBoundingClientRect().top,c=o.clientHeight||o.offsetHeight||o.scrollHeight,m=W+o.getBoundingClientRect().left,u=o.clientWidth||o.offsetWidth||o.scrollWidth,R=r||(R-d+i)/(c+i),r=r||(W-m+l)/(u+l),n.options.center&&(R=r=.5),t=X&&null!==t[x]?Number(t[x]):a||n.options.speed,w=w||n.options.verticalSpeed,f=f||n.options.horizontalSpeed,g=g||n.options.verticalScrollAxis,z=z||n.options.horizontalScrollAxis,a=b(r,R,t,w,f),o=o.style.cssText,X="",(r=/transform\s*:/i.exec(o))&&(X=(r=(X=o.slice(r.index)).indexOf(";"))?" "+X.slice(11,r).replace(/\s/g,""):" "+X.slice(11).replace(/\s/g,"")),s.push({baseX:a.x,baseY:a.y,top:d,left:m,height:c,width:u,speed:t,verticalSpeed:w,horizontalSpeed:f,verticalScrollAxis:g,horizontalScrollAxis:z,style:o,transform:X,zindex:T,min:E,max:L,minX:S,maxX:Y,minY:k,maxY:O})}A(),p&&(window.addEventListener("resize",v),p=!1,y())},h=function(){var e=r,t=a;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||t!=a&&n.options.horizontal)},b=function(e,t,o,r,i){var a={};return e=100*(i||o)*(1-e),t=100*(r||o)*(1-t),a.x=n.options.round?Math.round(e):Math.round(100*e)/100,a.y=n.options.round?Math.round(t):Math.round(100*t)/100,a},g=function(){window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",g),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",g),c=d(y)},y=function(){h()&&!1===p?(A(),c=d(y)):(c=null,window.addEventListener("resize",g),window.addEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",g,!!m&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",g,!!m&&{passive:!0}))},A=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase();e=-1!=o.indexOf("x")?r:0,o=-1!=o.indexOf("y")?r:0;var d=-1!=p.indexOf("x")?a:0;p=-1!=p.indexOf("y")?a:0,p=(e=b((e+d-s[t].left+l)/(s[t].width+l),(o+p-s[t].top+i)/(s[t].height+i),s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,o=e.x-s[t].baseX,null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(p=p<=s[t].min?s[t].min:p),n.options.horizontal&&!n.options.vertical&&(o=o<=s[t].min?s[t].min:o)),null!=s[t].minY&&(p=p<=s[t].minY?s[t].minY:p),null!=s[t].minX&&(o=o<=s[t].minX?s[t].minX:o),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(p=p>=s[t].max?s[t].max:p),n.options.horizontal&&!n.options.vertical&&(o=o>=s[t].max?s[t].max:o)),null!=s[t].maxY&&(p=p>=s[t].maxY?s[t].maxY:p),null!=s[t].maxX&&(o=o>=s[t].maxX?s[t].maxX:o),n.elems[t].style[f]="translate3d("+(n.options.horizontal?o:"0")+"px,"+(n.options.vertical?p:"0")+"px,"+s[t].zindex+"px) "+s[t].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",v),p=!0),w(c),c=null},v(),n.refresh=v,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e});

/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,t),o.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,o){!function(e,t,n,o){function i(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}function s(t,n){var s,a,r,c,u,l,p,h,v,d=t.type;if(t=e.Event(t),t.type=n,s=t.originalEvent,a=e.event.props,d.search(/^(mouse|click)/)>-1&&(a=I),s)for(p=a.length,c;p;)c=a[--p],t[c]=s[c];if(d.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==d.search(/^touch/)&&(r=i(s),d=r.touches,u=r.changedTouches,l=d&&d.length?d[0]:u&&u.length?u[0]:o))for(h=0,v=k.length;h<v;h++)c=k[h],t[c]=l[c];return t}function a(t){for(var n,o,i={};t;){n=e.data(t,P);for(o in n)n[o]&&(i[o]=i.hasVirtualBinding=!0);t=t.parentNode}return i}function r(t,n){for(var o;t;){if((o=e.data(t,P))&&(!n||o[n]))return t;t=t.parentNode}return null}function c(){z=!1}function u(){z=!0}function l(){q=0,N.length=0,j=!1,u()}function p(){c()}function h(){v(),S=setTimeout(function(){S=0,l()},e.vmouse.resetTimerDuration)}function v(){S&&(clearTimeout(S),S=0)}function d(t,n,o){var i;return(o&&o[t]||!o&&r(n.target,t))&&(i=s(n,t),e(n.target).trigger(i)),i}function f(t){var n,o=e.data(t.target,X);j||q&&q===o||(n=d("v"+t.type,t))&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}function m(t){var n,o,s,r=i(t).touches;r&&1===r.length&&(n=t.target,o=a(n),o.hasVirtualBinding&&(q=V++,e.data(n,X,q),v(),p(),B=!1,s=i(t).touches[0],L=s.pageX,O=s.pageY,d("vmouseover",t,o),d("vmousedown",t,o)))}function g(e){z||(B||d("vmousecancel",e,a(e.target)),B=!0,h())}function w(t){if(!z){var n=i(t).touches[0],o=B,s=e.vmouse.moveDistanceThreshold,r=a(t.target);B=B||Math.abs(n.pageX-L)>s||Math.abs(n.pageY-O)>s,B&&!o&&d("vmousecancel",t,r),d("vmousemove",t,r),h()}}function b(e){if(!z){u();var t,n,o=a(e.target);d("vmouseup",e,o),B||(t=d("vclick",e,o))&&t.isDefaultPrevented()&&(n=i(e).changedTouches[0],N.push({touchID:q,x:n.clientX,y:n.clientY}),j=!0),d("vmouseout",e,o),B=!1,h()}}function T(t){var n,o=e.data(t,P);if(o)for(n in o)if(o[n])return!0;return!1}function D(){}var y,E,P="virtualMouseBindings",X="virtualTouchID",Y="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),k="clientX clientY pageX pageY screenX screenY".split(" "),M=e.event.mouseHooks?e.event.mouseHooks.props:[],I=e.event.props.concat(M),x={},S=0,L=0,O=0,B=!1,N=[],j=!1,z=!1,F="addEventListener"in n,H=e(n),V=1,q=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},E=0;E<Y.length;E++)e.event.special[Y[E]]=function(t){var n=t.substr(1);return{setup:function(){T(this)||e.data(this,P,{}),e.data(this,P)[t]=!0,x[t]=(x[t]||0)+1,1===x[t]&&H.bind(n,f),e(this).bind(n,D),F&&(x.touchstart=(x.touchstart||0)+1,1===x.touchstart&&H.bind("touchstart",m).bind("touchend",b).bind("touchmove",w).bind("scroll",g))},teardown:function(){--x[t],x[t]||H.unbind(n,f),F&&(--x.touchstart||H.unbind("touchstart",m).unbind("touchmove",w).unbind("touchend",b).unbind("scroll",g));var o=e(this),i=e.data(this,P);i&&(i[t]=!1),o.unbind(n,D),T(this)||o.removeData(P)}}}(Y[E]);F&&n.addEventListener("click",function(t){var n,o,i,s,a,r=N.length,c=t.target;if(r)for(n=t.clientX,o=t.clientY,y=e.vmouse.clickDistanceThreshold,i=c;i;){for(s=0;s<r;s++)if(a=N[s],0,i===c&&Math.abs(a.x-n)<y&&Math.abs(a.y-o)<y||e.data(i,X)===a.touchID)return t.preventDefault(),void t.stopPropagation();i=i.parentNode}},!0)}(e,0,n),function(e){e.mobile={}}(e),function(e,t){var o={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,o),e.extend(e.mobile.support,o)}(e),function(e,t,o){function i(t,n,i,s){var a=i.type;i.type=n,s?e.event.trigger(i,o,t):e.event.dispatch.call(t,i),i.type=a}var s=e(n),a=e.mobile.support.touch,r=a?"touchstart":"mousedown",c=a?"touchend":"mouseup",u=a?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){n=t,i(s,n?"scrollstart":"scrollstop",e)}var n,o,s=this,a=e(s);a.bind("touchmove scroll",function(i){e.event.special.scrollstart.enabled&&(n||t(i,!0),clearTimeout(o),o=setTimeout(function(){t(i,!1)},50))})},teardown:function(){e(this).unbind("touchmove scroll")}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),o=!1;n.bind("vmousedown",function(a){function r(){clearTimeout(l)}function c(){r(),n.unbind("vclick",u).unbind("vmouseup",r),s.unbind("vmousecancel",c)}function u(e){c(),o||p!==e.target?o&&e.preventDefault():i(t,"tap",e)}if(o=!1,a.which&&1!==a.which)return!1;var l,p=a.target;n.bind("vmouseup",r).bind("vclick",u),s.bind("vmousecancel",c),l=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(o=!0),i(t,"taphold",e.Event("taphold",{target:p}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),s.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,o=t.pageYOffset,i=e.clientX,s=e.clientY;return 0===e.pageY&&Math.floor(s)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(i)>Math.floor(e.pageX)?(i-=n,s-=o):(s<e.pageY-o||i<e.pageX-n)&&(i=e.pageX-n,s=e.pageY-o),{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,o=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[o.x,o.y]}},handleSwipe:function(t,n,o,s){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var a=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return i(o,"swipe",e.Event("swipe",{target:s,swipestart:t,swipestop:n}),!0),i(o,a,e.Event(a,{target:s,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,o=e(n),i={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=i,i.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var o,a=e.event.special.swipe.start(t),r=t.target,l=!1;i.move=function(t){a&&!t.isDefaultPrevented()&&(o=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(a,o,n,r))&&(e.event.special.swipe.eventInProgress=!1),Math.abs(a.coords[0]-o.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},i.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,s.off(u,i.move),i.move=null},s.on(u,i.move).one(c,i.stop)}},o.on(r,i.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,0===--t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(r,n.start),n.move&&s.off(u,n.move),n.stop&&s.off(c,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});

var rellax = new Rellax('.channel-stat, .background-box', {
    breakpoints: [576, 768, 1201],
    center: true,
    speed: -.6
});

function fadeBubbles(){
	$('.desktop-only .bubble-tr').fadeIn(1000).delay(1750).fadeOut(1000,function(){
		$('.desktop-only .bubble-bl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
			$('.desktop-only .bubble-tl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
				$('.desktop-only .bubble-br').fadeIn(1000).delay(1750).fadeOut(1000,function(){
					fadeBubbles();
				});
			});
		});
	});
};
function fadeBubblesMobile(){
	$('.mobile-only .bubble-tr').fadeIn(1000).delay(1750).fadeOut(1000,function(){
		$('.mobile-only .bubble-bl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
			$('.mobile-only .bubble-tl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
				$('.mobile-only .bubble-br').fadeIn(1000).delay(1750).fadeOut(1000,function(){
					fadeBubblesMobile();
				});
			});
		});
	});
};

$(function() {

    // Copied from Drupal site, not sure if needed
    setTimeout(function() {
        $(".LPMcontainer .LPMimage").attr("onclick", "ga('send', 'event', 'chat', 'click', 'site-wide button')");
        $(".LPMcontainer").attr("onclick", "ga('send', 'event', 'form', 'submit', 'Chat engagement clicks')");
    }, 3000);

});

function showAsyncChannels(formVals) {
	console.log(formVals);
	
	$('.paragraph-19-copy').append($('.thumbs-up'));
	$('.async-channels').after(appendDismissLine());
	
	var abcVisible = navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Mac OS X/i);
	
	var message = "Send%20this%20message%20to%20continue%20scheduling%20your%20demo.%20We%E2%80%99ll%20use%20"+formVals.Email+"%20as%20your%20unique%20identifier%2C%20so%20don%E2%80%99t%20delete%20your%20email%20from%20this%20message%20%F0%9F%99%82";
	
	var waUrl = "https://api.whatsapp.com/send?phone=12126094200&text=" + message;
	var abcUrl = "https://bcrw.apple.com/business/api/messageprofiles/redirecthelper?service=iMessage&recipient=urn:biz:9c27617e-f108-4e9e-a010-81ea843471e4&biz-group-id=AgentQR&body=" + message;
	var fbmUrl = "https://m.me/liveperson?ref="+formVals.Email;
	var smsUrl = "sms:+16462572513?body=" + message;
	
	var waImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/6090337f5589f64990ec61d3_whatsapp.svg');
	var waLink = $('<a>').attr('target', '_blank').attr('href', waUrl).attr('title', 'WhatsApp Business').append(waImg);
	
	var abcImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/609033e67821e30ed73e7722_apple.svg');
	if (abcVisible) {
		var abcLink = $('<a>').attr('target', '_blank').attr('href', abcUrl).attr('title', 'Apple Business Chat').append(abcImg);
	} else {
		var abcLink = $('<a>').attr('target', '_blank').attr('href', smsUrl).attr('title', 'SMS Text Messaging').append(abcImg);
	}

	var fbmImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/609033b8b4b1ad41a070ffbc_fbm.svg');
	var fbmLink = $('<a>').attr('target', '_blank').attr('href', fbmUrl).attr('title', 'FaceBook Messenger').append(fbmImg);
	
	$('.async-channels').append(abcLink).append(fbmLink).append(waLink);
}

function appendDismissLine() {
	var dismiss = $('<div>').addClass('dismiss-line');
	var container = $('<div>').addClass('dismiss-container').append(dismiss).swipe(function() {
		$('.flipped').addClass('dismissed');
	});
	
	return container;
}

