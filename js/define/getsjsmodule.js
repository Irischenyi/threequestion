define(['jquery','filldata'],function($,filldata){
    var getmodule = function(){
        $.get('../../ejs/module1.ejs',function(data){
            console.log(data);
        });
        console.log('---===getsjsmodule===---');
        filldata.fill();
    };
    // return {
    //     color:'red'
    // };
    return getmodule;
});
console.log(22222);
