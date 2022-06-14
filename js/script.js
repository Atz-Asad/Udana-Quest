// $(window).load(function(){
//     $('.preelooder').hide();     
// });
$(window).on('load',function(){
    $('.preelooder').delay(1000).fadeOut(700);
})
$('document').ready(function(){
    // menu
    // $('.menu-open').click(function(){
    //     $('.menu-ul').addClass('right-men');
    //     $('this').hide();
    // });
    // $('.menu-close').click(function(){
    //     $('.menu-uls').removeClass('right-men');
    //     $('.menu-open').show();
    // });

    $('.canvas-icon').click(function(){
		$('.menu-item').toggleClass('right');
		$(this).hide();
        $('.menu-close').show();
        
    });
    $('.canvas-icon').click(function(){ 
		$('.menu-open').show();
		$(this).hide();
        
	  
    });

    // accordion
    var icons = {       
    };
    $( function() {
        $( ".devlopment-bar" ).accordion({
            icons: icons
        });
    });



    

});