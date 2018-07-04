(function () {
    var width = $('.container').width(),
        height = width / 8 * 0.8333333333333334,
        w = $(window).width(); 
        
    if (w < 768) {
        height = width / 5 * 0.8333333333333334;
    }
    $(':root').css('--height', height);


    $(window).resize(function () {
        var width = $('.container').width(),
            height = width / 8 * 0.8333333333333334 ,
            w = $(window).width();
        if(w < 768){
            height = width / 5 * 0.8333333333333334 ;
        }
        $(':root').css('--height', height);
    });
})();