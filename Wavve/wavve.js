$(".menu>li").mouseover(function(){
	$(this).children(".submenu").stop().slideDown();
});

$(".menu>li").mouseleave(function() {
	$(this).children(".submenu").stop().slideUp();
});



var imgs = 4;
var now = 0;
var play;
var mode = true;
var prevIndex;
var sp = screen.width/2-500;

start();

$(".btn_play").click(function(){
	clearInterval(play);
	$(this).css({"display":"none"});
	$(".btn_stop").css({"display":"block"});
	mode == false;
});

$(".btn_stop").click(function(){
	play=setInterval(function(){slide();},3000);
	$(this).css({"display":"none"});
	$(".btn_play").css({"display":"block"});
	mode == true;
});


$("#btn_dot .dot").click(function(){
	now=$(this).index();
	clearInterval(play);
	curr_slide(now);
	if(mode==true){
		play=setInterval(function(){slide();},3000);
	}
	prevIndex=now;
});

$(".btn_prev a").click(function(){
	if(now==0){
		now=4;
	}else{
		now--;
	}
	clearInterval(play);
	curr_slide(now);
	if(mode==true){
		play=setInterval(function(){slide();},2000);
	}
	prevIndex=now;
});

$(".btn_next a").click(function(){
	if(imgs==now){
		now=0;
	}else{
		now++;
	}	
	clearInterval(play);
	curr_slide(now);
	if(mode==true){
		play=setInterval(function(){slide();},2000);
	}
	prevIndex=now;
});

function start(){
	$(".btn_play").css("display","block");
	$(".img>img").eq(0).css("left",-2020+sp);
	$(".img>img").eq(1).css("left",-1010+sp);
	$(".img>img").eq(2).css("left",0+sp);
	$(".img>img").eq(3).css("left",1010+sp);
	$(".img>img").eq(4).css("left",2020+sp);
	$("#btn_dot").children().eq(0).css("background-color","#1351f9");
	prevIndex = 0;
	play = setInterval(function(){slide();},3000);
}
function slide(){
	if(imgs == now){
		now = 0;
	}else{
		now++;
	}
	curr_slide(now);	
}
function curr_slide(e){		
	if(e==1){		
		$(".img>img").eq(1).css("left",-2020+sp);
		$(".img>img").eq(2).css("left",-1010+sp);
		$(".img>img").eq(3).css("left",0+sp);
		$(".img>img").eq(4).css("left",1010+sp);
		$(".img>img").eq(0).css("left",2020+sp);
		$("#btn_dot").children().eq(prevIndex).css({"background-color":"#aaa"});
		$("#btn_dot").children().eq(1).css({"background-color":"#1351f9"});
		prevIndex=1;
	}else if(e==2){		
		$(".img>img").eq(2).css("left",-2020+sp);
		$(".img>img").eq(3).css("left",-1010+sp);
		$(".img>img").eq(4).css("left",0+sp);
		$(".img>img").eq(0).css("left",1010+sp);
		$(".img>img").eq(1).css("left",2020+sp);
		$("#btn_dot").children().eq(prevIndex).css({"background-color":"#aaa"});
		$("#btn_dot").children().eq(2).css({"background-color":"#1351f9"});
		prevIndex=2;
	}else if(e==3){		
		$(".img>img").eq(3).css("left",-2020+sp);
		$(".img>img").eq(4).css("left",-1010+sp);
		$(".img>img").eq(0).css("left",0+sp);
		$(".img>img").eq(1).css("left",1010+sp);
		$(".img>img").eq(2).css("left",2020+sp);
		$("#btn_dot").children().eq(prevIndex).css({"background-color":"#aaa"});
		$("#btn_dot").children().eq(3).css({"background-color":"#1351f9"});
		prevIndex=3;
	}else if(e==4){
		$(".img>img").eq(4).css("left",-2020+sp);
		$(".img>img").eq(0).css("left",-1010+sp);
		$(".img>img").eq(1).css("left",0+sp);
		$(".img>img").eq(2).css("left",1010+sp);
		$(".img>img").eq(3).css("left",2020+sp);	
		$("#btn_dot").children().eq(prevIndex).css({"background-color":"#aaa"});
		$("#btn_dot").children().eq(4).css({"background-color":"#1351f9"});
		prevIndex=4;
	}else if(e==0){
		$(".img>img").eq(0).css("left",-2020+sp);
		$(".img>img").eq(1).css("left",-1010+sp);
		$(".img>img").eq(2).css("left",0+sp);
		$(".img>img").eq(3).css("left",1010+sp);
		$(".img>img").eq(4).css("left",2020+sp);
		$("#btn_dot").children().eq(prevIndex).css({"background-color":"#aaa"});
		$("#btn_dot").children().eq(0).css({"background-color":"#1351f9"});
		prevIndex=0;
	}
}

$("#imgslide").mouseover(function(){
	$(".prev, .next").fadeIn("slow");
});
$("#imgslide").mouseleave(function(){
	$(".prev, .next").fadeOut("slow");
});

var currIndex = 0;
var imgLeft;
$(".prev").addClass("off");

$(".next").click(function(){
	if(currIndex>-5){
		currIndex--;
		imgLeft = currIndex*240;
		$(".imgs").css("margin-left",imgLeft);
		$(".prev").removeClass("off");
	}
	if(currIndex==-5){
		$(".next").addClass("off");
	}
});
$(".prev").click(function(){
	if(currIndex<0){
		currIndex++;
		imgLeft = currIndex*240;
		$(".imgs").css("margin-left",imgLeft);
		$(".next").removeClass("off");
	}
	if(currIndex==0){
		$(".prev").addClass("off");
	}
});

$("#imgslide3").mouseover(function(){
	$(".prev3, .next3").fadeIn("slow");
});
$("#imgslide3").mouseleave(function(){
	$(".prev3, .nex3").fadeOut("slow");
});

var currIndex2 = 0;
var imgLef2;
$(".prev3").addClass("off");

$(".next3").click(function(){
	if(currIndex2>-5){
		currIndex2--;
		imgLeft2 = currIndex2*240;
		$(".imgs3").css("margin-left",imgLeft2);
		$(".prev3").removeClass("off");
	}
	if(currIndex2==-5){
		$(".next3").addClass("off");
	}
});
$(".prev3").click(function(){
	if(currIndex2<0){
		currIndex2++;
		imgLeft2 = currIndex2*240;
		$(".imgs3").css("margin-left",imgLeft2);
		$(".next3").removeClass("off");
	}
	if(currIndex2==0){
		$(".prev3").addClass("off");
	}
});


$(".up").click(function(){
	$("body,html").animate({scrollTop:0},800);
});


$("#slides2").mouseover(function(){
	$(".prev2, .next2").fadeIn("slow");
});
$("#slides2").mouseleave(function(){
	$(".prev2, .next2").fadeOut("slow");
});

var currIndex3 = 0;
var imgLef3;
$(".prev2").addClass("off");

$(".next2").click(function(){
	if(currIndex3 >-3){
		currIndex3--;
		imgLeft3 = currIndex3*410;
		$(".imgs2").css("margin-left",imgLeft3);
		$(".prev2").removeClass("off");
	}
	if(currIndex3==-3){
		$(".next2").addClass("off");
	}
});
$(".prev2").click(function(){
	if(currIndex3<0){
		currIndex3++;
		imgLeft3 = currIndex3*410;
		$(".imgs2").css("margin-left",imgLeft3);
		$(".next2").removeClass("off");
	}
	if(currIndex3==0){
		$(".prev2").addClass("off");
	}
});

var now2 = 0;
start2();
function start2(){
	$(".notice>p").eq(0).css("top","0px");
	$(".notice>p").eq(1).css("top","35px");
	$(".notice>p").eq(2).css("top","70px");
	$(".notice>p").eq(3).css("top","105px");
	play2=setInterval(function(){slide2();},2000);
}
function slide2(){
	now2++;
	if(now2==4){
		now2=0;
	}
	if(now2==1){
		$(".notice>p").eq(0).css("display","none");
		$(".notice>p").eq(1).css("display","block");
		$(".notice>p").eq(2).css("display","none");
		$(".notice>p").eq(3).css("display","none");
		$(".notice>p").eq(1).animate({"top":"0px"});
		$(".notice>p").eq(2).animate({"top":"35px"});
		$(".notice>p").eq(3).animate({"top":"70px"});
		$(".notice>p").eq(0).animate({"top":"-35px"});
	}else if(now==2){
		$(".notice>p").eq(1).css("display","none");
		$(".notice>p").eq(2).css("display","block");
		$(".notice>p").eq(3).css("display","none");
		$(".notice>p").eq(0).css("display","none");
		$(".notice>p").eq(2).animate({"top":"0px"});
		$(".notice>p").eq(3).animate({"top":"35px"});
		$(".notice>p").eq(0).animate({"top":"70px"});
		$(".notice>p").eq(1).animate({"top":"-35px"});
	}else if(now==3){
		$(".notice>p").eq(2).css("display","none");
		$(".notice>p").eq(3).css("display","block");
		$(".notice>p").eq(0).css("display","none");
		$(".notice>p").eq(1).css("display","none");
		$(".notice>p").eq(3).animate({"top":"0px"});
		$(".notice>p").eq(0).animate({"top":"35px"});
		$(".notice>p").eq(1).animate({"top":"70px"});
		$(".notice>p").eq(2).animate({"top":"-35px"});
	}else if(now==0){
		$(".notice>p").eq(3).css("display","none");
		$(".notice>p").eq(0).css("display","block");
		$(".notice>p").eq(1).css("display","none");
		$(".notice>p").eq(2).css("display","none");
		$(".notice>p").eq(0).animate({"top":"0px"});
		$(".notice>p").eq(1).animate({"top":"35px"});
		$(".notice>p").eq(2).animate({"top":"70px"});
		$(".notice>p").eq(3).animate({"top":"-35px"});
	}
}
