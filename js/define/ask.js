define(['jquery','TweenMax'],function($,TweenMax){
    var ask = {};
    ask.click=function(){
        TweenMax.set('.boxbottom ',{
            autoAlpha: 0
            // ease: Bounce.easeOut
        });
        var $d3box = $('.d3box');
        var $boxabove = $('.boxabove');
        var $boxbottom = $('.boxbottom ');
        $('.boxabove').each(function(index){
            $('.boxabove').eq(index).on('click',function(){
                    TweenMax.to($d3box[index] ,0.3,{
                        rotationX:90,
                        y:'-50%',
                        z:'-310',
                        // ease: Bounce.easeOut
                    });
                    TweenMax.to($boxabove[index],0.3,{
                        autoAlpha: 0
                        // ease: Bounce.easeOut
                    });
                    TweenMax.to($boxbottom[index] ,0.3,{
                        autoAlpha: 1
                        // ease: Bounce.easeOut
                    });
            });
        });

        $('.boxbottom').each(function(index){
            $('.boxbottom').eq(index).on('click',function(){
                    TweenMax.to($d3box[index] ,0.3,{
                        rotationX:0,
                        y:'-0%',
                        z:'-0',
                        // ease: Bounce.easeOut
                    });
                    TweenMax.to($boxbottom[index],0.3,{
                        autoAlpha: 0
                        // ease: Bounce.easeOut
                    });
                    TweenMax.to($boxabove[index],0.3,{
                        autoAlpha: 1
                        // ease: Bounce.easeOut
                    });
            });
        });
    };
    return ask;
});
