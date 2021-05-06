$(".menu li").mouseover(function(){
	$(this).children(".submenu").stop().fadeIn("fast");
});

$(".menu li").mouseleave(function(){
	$(this).children(".submenu").stop().fadeOut("fast");
});

$(".top").click(function(){
	$("body,html").animate({scrollTop:0},1000);
});

$("#slidesbk").mouseover(function(){
	$(".next").fadeIn("fast");
	$(".prev").fadeIn("fast");
});

$("#slidesbk").mouseleave(function(){
	$(".next").fadeOut("fast");
	$(".prev").fadeOut("fast");
});

var a = 0;
start();

function start(){
 	$(".imgs>img").eq(0).siblings().css("margin-right","2000px");
 	setInterval(function(){slide()},"5000");
 }

function slide(){
	a++;
	if(a == 4){
		a = 0;
	}
	$(".imgs>img").eq(a).siblings().css("margin-right","2000px");
	$(".imgs>img").eq(a).css("margin-right","0px");
}

$(".prev").click(function(){
	$(".prev").animate()
});

var currIndex = 0;
var imgLeft;
$(".btn_prev").addClass("off");

$(".btn_next").click(function(){
	if(currIndex>-1){
		currIndex--;
		imgLeft = currIndex*120;
		$(".fimgs").css("margin-left",imgLeft);
		$(".btn_prev").removeClass("off");
	}
	if(currIndex==-1){
		$(".btn_next").addClass("off");
	}
});
$(".btn_prev").click(function(){
	if(currIndex<0){
		currIndex++;
		imgLeft = currIndex*120;
		$(".fimgs").css("margin-left",imgLeft);
		$(".btn_next").removeClass("off");
	}
	if(currIndex==0){
		$(".btn_prev").addClass("off");
	}
});