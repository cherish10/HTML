$(".menu>li").mouseover(function(){
	$(this).children(".submenu").stop().slideDown();
});

$(".menu>li").mouseleave(function() {
	$(this).children(".submenu").stop().slideUp();
});

var a = 0;
start();

function start(){
 	$(".imgs>img").eq(0).siblings().css("margin-left","-2000px");
 	setInterval(function(){slide()},"2000");
 }

function slide(){
	a++;
	if(a == 5){
		a = 0;
	}
	$(".imgs>img").eq(a).siblings().css("margin-left","-2000px");
	$(".imgs>img").eq(a).css("margin-left","0px");
}

$(".partner").click(function(){
	$("#modal").fadeIn(1000);
});

$("#modal .body img").click(function(){
	$("#modal").fadeOut(1000);
});