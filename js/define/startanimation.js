define(['jquery','TweenMax'],function($,TweenMax){
    var obj = {};
    var selectAllquery;
    var sNum = $('.topbox p').eq(0);
    var tNum = $('.topbox p').eq(1);
    var aNum = $('.topbox p').eq(2);
    var rNum = $('.topbox p').eq(3);
    var t2Num = $('.topbox p').eq(4);
    var delaytime =2;
    var anim = [];
    // var circle = $('.circle');

    obj.play = function(){
            anim[1] = TweenMax.fromTo(sNum,0.5,{
                y:-800,
                x:0
            },{
                y:0,
                x:0,
                ease: Bounce.easeOut,
                delay:0.4
            });
            anim[2] = TweenMax.to(tNum,1.6,{
                rotationZ:360*20,
                // repeat:-1,
                ease: Power4.easeOut,
                delay:0.9
            });
            anim[3] = TweenMax.to('.trapezpoid',1.6,{
                rotationZ:210,
                autoAlpha: 0.2,
                delay:delaytime
            });

    };
    obj.secondplay = function(){
        anim[4] = TweenMax.fromTo(sNum,0.1,{
            x:0
        },{
            x:-300,
            ease: Expo.easeOut,
            delay:1.1
        });
        anim[5] = TweenMax.fromTo(aNum,0.1,{
            x:0
        },{
            x:500,
            ease: Expo.easeOut,
            delay:1.1
        });
        anim[6] = TweenMax.fromTo(rNum,0.2,{
            x:0
        },{
            x:500,
            ease: Expo.easeOut,
            delay:1.2
        });
        anim[7] = TweenMax.fromTo(t2Num,0.3,{
            x:0
        },{
            x:300,
            ease: Expo.easeOut,
            delay:1.3
        });

    };
    obj.thirdplay = function(){
        anim[8] = TweenMax.fromTo(sNum,2,{
            x:-300
        },{
            x:0,
            ease:Power4.easeOut,
            delay:1.2
        });
        anim[9] = TweenMax.fromTo(aNum,2,{
            x:500
        },{
            x:0,
            ease: Power4.easeOut,
            delay:1.3
        });
        anim[10] = TweenMax.fromTo(rNum,2,{
            x:500
        },{
            x:0,
            ease: Power4.easeOut,
            delay:1.5
        });
        anim[11] = TweenMax.fromTo(t2Num,2,{
            x:500
        },{
            x:0,
            ease: Power4.easeOut,
            delay:1.6
        });

    };
    obj.forthplay = function(){
        anim[12] = TweenMax.to('.trapezpoid',0.6,{
            width:'35.85vh',
            // rotationZ:180,
            // repeat:-1,
            ease: Power4.easeOut,
            autoAlpha: 1,
            delay:2
        });
        anim[13] = TweenMax.to('.trapezpoid',0.3,{
            rotationZ:180,
            delay:2.4
        });
        anim[14] = TweenMax.to('.e1 .trapezpoid',1.6,{
            width:'300vh',
            // rotationZ:180,
            // repeat:-1,
            ease: Power4.easeOut,
            // autoAlpha: 1,
            delay:2.6
        });
        anim[15] = TweenMax.to('.e2 .trapezpoid',1.4,{
            width:'300vh',
            // rotationZ:180,
            // repeat:-1,
            ease: Power4.easeOut,
            // autoAlpha: 1,
            delay:3.8
        });
        anim[16] = TweenMax.to('.e4 .trapezpoid',1.1,{
            width:'300vh',
            // rotationZ:180,
            // repeat:-1,
            ease: Power4.easeOut,
            // autoAlpha: 1,
            delay:4.2,
        });
    };
    obj.play();
    obj.secondplay();
    obj.thirdplay();
    TweenMax.delayedCall(2,obj.forthplay);
    // TweenMax.getAllTweens(reverse());
    return obj;
});
