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
  $('.span1').toggleClass('swap');
  $('.span2').toggleClass('swap');
});

//rellax
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,function(){var e=function(t,o){var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,m=!1;try{var u=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(e){}var w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,o=["Webkit","Moz","ms"];for(t in o)if(void 0!==e.style[o[t]+"Transform"])return o[t]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach(function(e){n.options[e]=o[e]}),o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach(function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n}),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax"),0<(u="string"==typeof t?document.querySelectorAll(t):[t]).length){if(n.elems=u,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(u=document.querySelector(n.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=u}var x,v=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;for(s=[],i=window.innerHeight,l=window.innerWidth,e=n.options.breakpoints,x=l<e[0]?"xs":l>=e[0]&&l<e[1]?"sm":l>=e[1]&&l<e[2]?"md":"lg",h(),e=0;e<n.elems.length;e++){var t=void 0,o=n.elems[e],r=o.getAttribute("data-rellax-percentage"),a=o.getAttribute("data-rellax-speed"),d=o.getAttribute("data-rellax-xs-speed"),c=o.getAttribute("data-rellax-mobile-speed"),m=o.getAttribute("data-rellax-tablet-speed"),u=o.getAttribute("data-rellax-desktop-speed"),w=o.getAttribute("data-rellax-vertical-speed"),f=o.getAttribute("data-rellax-horizontal-speed"),g=o.getAttribute("data-rellax-vertical-scroll-axis"),z=o.getAttribute("data-rellax-horizontal-scroll-axis"),T=o.getAttribute("data-rellax-zindex")||0,E=o.getAttribute("data-rellax-min"),L=o.getAttribute("data-rellax-max"),S=o.getAttribute("data-rellax-min-x"),Y=o.getAttribute("data-rellax-max-x"),k=o.getAttribute("data-rellax-min-y"),O=o.getAttribute("data-rellax-max-y"),X=!0;d||c||m||u?t={xs:d,sm:c,md:m,lg:u}:X=!1,d=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(d=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var R=n.options.vertical&&(r||n.options.center)?d:0,W=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;d=R+o.getBoundingClientRect().top,c=o.clientHeight||o.offsetHeight||o.scrollHeight,m=W+o.getBoundingClientRect().left,u=o.clientWidth||o.offsetWidth||o.scrollWidth,R=r||(R-d+i)/(c+i),r=r||(W-m+l)/(u+l),n.options.center&&(R=r=.5),t=X&&null!==t[x]?Number(t[x]):a||n.options.speed,w=w||n.options.verticalSpeed,f=f||n.options.horizontalSpeed,g=g||n.options.verticalScrollAxis,z=z||n.options.horizontalScrollAxis,a=b(r,R,t,w,f),o=o.style.cssText,X="",(r=/transform\s*:/i.exec(o))&&(X=(r=(X=o.slice(r.index)).indexOf(";"))?" "+X.slice(11,r).replace(/\s/g,""):" "+X.slice(11).replace(/\s/g,"")),s.push({baseX:a.x,baseY:a.y,top:d,left:m,height:c,width:u,speed:t,verticalSpeed:w,horizontalSpeed:f,verticalScrollAxis:g,horizontalScrollAxis:z,style:o,transform:X,zindex:T,min:E,max:L,minX:S,maxX:Y,minY:k,maxY:O})}A(),p&&(window.addEventListener("resize",v),p=!1,y())},h=function(){var e=r,t=a;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||t!=a&&n.options.horizontal)},b=function(e,t,o,r,i){var a={};return e=100*(i||o)*(1-e),t=100*(r||o)*(1-t),a.x=n.options.round?Math.round(e):Math.round(100*e)/100,a.y=n.options.round?Math.round(t):Math.round(100*t)/100,a},g=function(){window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",g),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",g),c=d(y)},y=function(){h()&&!1===p?(A(),c=d(y)):(c=null,window.addEventListener("resize",g),window.addEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",g,!!m&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",g,!!m&&{passive:!0}))},A=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase();e=-1!=o.indexOf("x")?r:0,o=-1!=o.indexOf("y")?r:0;var d=-1!=p.indexOf("x")?a:0;p=-1!=p.indexOf("y")?a:0,p=(e=b((e+d-s[t].left+l)/(s[t].width+l),(o+p-s[t].top+i)/(s[t].height+i),s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,o=e.x-s[t].baseX,null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(p=p<=s[t].min?s[t].min:p),n.options.horizontal&&!n.options.vertical&&(o=o<=s[t].min?s[t].min:o)),null!=s[t].minY&&(p=p<=s[t].minY?s[t].minY:p),null!=s[t].minX&&(o=o<=s[t].minX?s[t].minX:o),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(p=p>=s[t].max?s[t].max:p),n.options.horizontal&&!n.options.vertical&&(o=o>=s[t].max?s[t].max:o)),null!=s[t].maxY&&(p=p>=s[t].maxY?s[t].maxY:p),null!=s[t].maxX&&(o=o>=s[t].maxX?s[t].maxX:o),n.elems[t].style[f]="translate3d("+(n.options.horizontal?o:"0")+"px,"+(n.options.vertical?p:"0")+"px,"+s[t].zindex+"px) "+s[t].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",v),p=!0),w(c),c=null},v(),n.refresh=v,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e});

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