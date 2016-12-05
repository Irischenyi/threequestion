define(['jquery'],function($){
    var data;
    var getdata = function(){
        $.getJSON("../../data/data.json", function(data){
            data = data.first[0].title;
            console.log(data);
            return data;
        });
        console.log('---===getdataq===---');
        // filldata.fill();
        console.log('---===getdata===---');
    };
    getdata();
    return getdata;
});
