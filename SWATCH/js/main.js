$(document).ready(function () {

     /*
     1.스크롤을 내렸을 때, 각 섹션에 해당되는
     .gnb li의 스타일 바꾸기.
    */
   
    var themeList = ["spring","summer","fall","winter"];
    var sectionOffset = Array();
    var scr = $(window).scrollTop();

    function measure(){
        for(i =0; i<4; i++){
            sectionOffset[i] = $("section").eq(i).offset().top;
        }
    }
    
    function setTheme(){
        scr = $(this).scrollTop();

        $(".gnb li").removeClass();
        for(i =0; i<4;i++){
            if(scr >= sectionOffset[i] && scr < sectionOffset[i+1]){
                $(".gnb li").eq(i).addClass(themeList[i]);
           }else if(scr >= sectionOffset[3]){
                $(".gnb li").eq(3).addClass(themeList[3]);
           }
       }
    }
        
        // if(scr >= 0 && scr < winheight){
        //     $(".gnb li").removeClass();
        //     $(".gnb li").eq(0).addClass(themeLisst[0]);
        // }else if (scr >= winheight && scr < winheight*2){
        //     $(".gnb li").removeClass();
        //     $(".gnb li").eq(1).addClass(themeLisst[1]);
        // }else if (scr >= winheight *2 && scr < winheight*3){
        //     $(".gnb li").removeClass();
        //     $(".gnb li").eq(2).addClass(themeLisst[2]);
        // }else if (scr >= winheight *3 && scr < winheight*4){
        //     $(".gnb li").removeClass();
        //     $(".gnb li").eq(3).addClass(themeLisst[3]);
        // }   
    measure();
    setTheme();

    $(window).on("scroll",function () {
        scr = $(this).scrollTop();
    });

    $(window).on("resize",function (){
        scr = $(this).scrollTop();
        measure();
        setTheme();
    });

   /*
   2. li를 클릭했을때, 해당되는 섹션으로 스크롤 이동시키기
   */

   $(".gnb li").on("click",function(e){
       e.preventDefault();
       var i = $(this).parent().index();

       $("html, body").stop().animate({
           "scrollTop" :sectionOffset[i]
       },function(){
           setTheme();
       });
 
   });

   $(window).on("mousewheel",function(e,d){
        var q = $(this).index()-1;

        if(d>0){
            $("html, body").stop().animate({
                "scrollTop" : sectionOffset[q-1]
            },800,"easeOutBounce")

        }else if(d<0){
            $("html, body").stop().animate({
                "scrollTop" : sectionOffset[q+1]
            },800,"easeOutBounce")
        }
   });


   $("section").on("scroll",function(e,d){
        var scr = $(this).scrollTop();
        

        setTheme();
        a = scr();
   });

//    $(window).on("keyDown",function(e){
//        var scr = $(this).scrollTop();
//         if(e.key ==="ArrowUp"){
//             or(i = 0; i<4;i++){
//                 if(scr>= sectionOffset[i] && scr < sectionOffset[1]){
//                     $("html, body").stop().animate({
//                         "scrollTop" : sectionOffset[i-1]
//                     },800,"easeOutBounce")
//                 }
//             }

//         }else if (e.key == "ArrowDown"){
//             for(i = 0; i<4;i++){
//                 if(scr>= sectionOffset[i] && scr < sectionOffset[1]){
//                     $("html, body").stop().animate({
//                         "scrollTop" : sectionOffset[i+1]
//                     },800,"easeOutBounce")
//                 }
//             }
        
//     }
//    }

})//opening