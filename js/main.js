$(function(){

    // $('.frmProduct').hover(function(){
    //     $(this).find($('.frmProduct__wrapper')).fadeToggle();
    // })

    $('.frmProduct').hover(function(){
        $(this).find($('.frmProduct__actions')).animate({left:'5px'});
        $(this).find($('.frmProduct__cart')).animate({right:'5px'},);

    },function(){
        $(this).find($('.frmProduct__actions')).animate({left:'-40px'});
        $(this).find($('.frmProduct__cart')).animate({right:'-78px'});
    })


    $(window).scroll(function(){
            
        let navbar = $('.navbar');
      
        if($(window).scrollTop() >= navbar.innerHeight()){    
           navbar.addClass('navbar__scroll');
        } else{
           navbar.removeClass('navbar__scroll');
        }
    })
    

})