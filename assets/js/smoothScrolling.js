//smoothScrolling
$('document').ready(function(){
  $('a[href*="#"]:not([href="#"])').on('click', function(e){
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname ){
      var target = $(this.hash);
      target     = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if( target.length ){
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        e.preventDefault();
      }
    }
  })


  //Animasi
$(window).scroll(function(){
    var wScroll = $(this). scrollTop();

    if( wScroll >= $('.koding').offset().top){
      $('.ani').addClass(' kod');
     }

     else if ( wScroll >= $('.desain').offset().top) {
          $('.ani').addClass(' kod');
     }

  });
});
