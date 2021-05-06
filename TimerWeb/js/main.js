$(document).ready(function(){
    var theme = {
        bg : ["morning","afternoon","evening","night"],
        logo : ["logo1","logo1","logo2","logo2"],
        color : ["#222","#222","#fff","#fff"]
    }

    function setTheme(i){
        $("main").css("backgroundImage",`url(images/bg_${theme.bg[i]}.jpg)`)
        $("section").css("backgroundImage",`url(images/phone_${theme.bg[i]}.png)`)
        $(".gnb").css("color",theme.color[i]);
        $(".clock").css("color",theme.color[i]);
        $(`h1 .${theme.logo[i]}`).show().siblings().hide();
        $("nav div").eq(i).addClass("on").siblings().removeClass("on");
    }
    var hour;


    function clock(){
        var now = new Date();
        hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if(hour < 10){
            hour = "0" + hour
        }
        if(min <10){
            min = "0" + min
        }
        if(sec <10){
            sec = "0" + sec
        }
        
        $(".hh").text(hour);
        $(".mm").text(min);
        $(".ss").text(sec);
    }

    clock();
    setInterval(clock, 1000);

    $("nav div").on("click",function(){
        var q = $(this).index();
        // var theme = $(this).text();
        // var theme = $(this).attr("class");
       setTheme(q);
       
    })
    
    var range = parseInt((hour - 4) / 4);
    setTheme(range);
    
});