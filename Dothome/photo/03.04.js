$(".menu>li").mouseover(function(){
	$(".submenu").stop().slideDown();
});

$(".submenu").mouseleave(function(){
	$(".submenu").stop().slideUp();
});

$(".dot a").click(function(){
	var imgleft = $(this).attr("imgleft");
	$(".imgs").animate({left:imgleft},"fast");
});

$(".partner").click(function(){
	$("#modal").fadeIn(1000);
});

$("#modal .body img").click(function(){
	$("#modal").fadeOut(1000);
});