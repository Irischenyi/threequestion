define(['granim'],function(){
    var back = function(){
        var granimInstance = new Granim({
     element: '#grainm-canvas',
     name: 'grainm-canvas',
     direction: 'radial',
     opacity: [1, 1],
     isPausedWhenNotInView: true,
     states: {
         "default-state": {
             gradients: [
                 ['#02AAB0', '#00CDAC'],
                 ['#83a4d4', '#b6fbff'],
                //  ['#9D50BB', '#6E48AA']
             ]
         }
     }
 });


    };
    // return {
    //     color:'red'
    // };
    return back;
});
