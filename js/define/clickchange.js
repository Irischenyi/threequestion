define(['jquery','geti'],function($,geti){
    var clickchange = function(){
        var scrollTop = document.body.scrollTop;
        var scrollHeight = document.body.scrollHeight;
        var frameHeight;
        var setScrollTop = 0;
        var addHeight = 100;
        var ifvalue;
        var frameCount = geti+1;
        function size(){
            scrollTop = document.body.scrollTop;
            scrollHeight = document.body.scrollHeight;
            frameHeight = scrollHeight / frameCount + addHeight;
            // console.log(frameHeight);
            // console.log(scrollTop);
            if (scrollHeight <= 3558) {
                addHeight = 90;
            } else if (scrollHeight <= 3000) {
                addHeight = 70;
            } else if (scrollHeight <= 2300) {
                addHeight = 50;

            }
        }
        size();
        // console.log('====frameHeight===='+frameHeight);
        // window.scrollTo(0,1);
        window.onscroll = function() {
            size();
            $('.boxbottom').trigger('click');
            for(var i = 1; i <= geti; ++i){
                if(scrollTop > frameHeight * i && (setScrollTop === i-1)){
                    setScrollTop = i;
                    console.log(i+"."+i);
                }
            }
            if (scrollTop < frameHeight) {
                setScrollTop = 0;
            }
        };

        $('.blue').on('click',function(){
            $('body,html').animate({scrollTop:document.body.clientHeight*1.64},300);

        });
        $('.nextBox').each(function(index){
            $('.nextBox').eq(index).on('click',function(){
                if(index==geti-1){
                    index = -2;
                }
                $('body,html').animate({scrollTop:document.body.clientHeight*1.64*(index+2)},400);
            });
            // $('body,html').animate({scrollTop:document.body.clientHeight*1.64},300});
        });

    };
    // return {
    //     color:'red'
    // };
    return clickchange;
});
