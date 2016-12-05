requirejs.config({
    baseUrl: 'js/define',
    paths: {
        jquery: '../../js/lib/jquery/dist/jquery',
        TweenMax: '../../js/lib/gsap/src/minified/TweenMax.min',
        ScrollMagic: '../../js/lib/ScrollMagic.min',
        scrollmagicgasp: '../../js/lib/animation.gsap.min',
		granim:'../../js/lib/granim.min',
        TimeLineMax:'../../js/lib/gsap/src/minified/TimeLineMax.min'
    }
});
require(['jquery','geti','back','ask','clickchange','startanimation', 'platform', 'TweenMax', 'getdata', 'getsjsmodule', 'filldata', 'ScrollMagic', 'scrollmagicgasp'],
    function($,geti,back,ask,clickchange,startanimation, platform, tweenMax, datas, getsjsmodule, filldata, ScrollMagic) {
        $(function() {
			back();
			clickchange();
			filldata.fill();
			startanimation.play();
			startanimation.secondplay();
            ask.click();
            var percentage = -(1/(geti+2))*100;
            var controller = new ScrollMagic.Controller();
            // define movement of panels
            var timeline = new TimelineMax();
            var tween =[];
            for(var i = 1;i<=geti;++i){
                tween[1+3*(i-1)] = TweenMax.to('#slideContainer', 1, {
                    z: -300
                });
                tween[2+3*(i-1)] = TweenMax.to('#slideContainer', 1, {
                    x: percentage*i+'%'
                });
                tween[3+3*(i-1)] = TweenMax.to('#slideContainer', 1, {
                    z: 0
                });
            }
            for(var x in tween){
                timeline.add(tween[x]);
            }
            var duration = 100*(geti+2);
            var scene = new ScrollMagic.Scene({
                    triggerElement: '#pinContainer',
                    triggerHook: 0,
                    duration: duration+'%'
                })
                .setPin('#pinContainer')
                .setTween(timeline)
                .addTo(controller);
            TweenMax.to('#slideContainer', 0.3, {
                z: -100
            });
        });
    });

console.log('sjsjscossssssssssssssss');
// is ok
