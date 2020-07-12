jQuery('document').ready(function($){

    var subir = $('.back-to-top');

    subir.click(function(e){
        // e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    });

    subir.hide();

    $(window).scrollTop(function(){
        if($(this).scrollTop() > 1){
            subir.fadeIn();
        }
        else{
            subir.fadeOut();
        }
    });
});