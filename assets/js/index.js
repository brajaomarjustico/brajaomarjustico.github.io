$(function() {

    //MasonryGrid
      $('.grid').masonry({
           columnWidth: '.grid__sizer',
           itemSelector: '.grid__item',
           gutter: 10,
           percentPosition: true,
           horizontalOrder: true,
     });

    //smoothScrolling
       $('a[href*="#"]:not([href="#"])').on('click', function(e){
         if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname ){
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

           if( target.length ){
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             e.preventDefault();
           }
         }
    });

    //saat kapan Animasi dimulai
     $(window).scroll(function(){
         var wScroll = $(this). scrollTop();

         if( wScroll >= $('.koding').offset().top - 210){
           $('.ani').addClass(' kod');
          }

         if( wScroll >= $('.desain').offset().top - 220) {
              $('.grid__item').each(function(i){
                   setTimeout(function(){
                       $('.grid__item').eq(i).addClass('is-visible');
                  }, 300 * i);
             });
         }

       });
     
    //sideNav
      $('.menu').on('click', toggleMenu);
      $('.btn-close').on('click', removeMenu);
      $('.side-nav').on('click', removeMenu);
      $('.side-nav__container').on('click', blockClick);

      function toggleMenu() {
        $('.side-nav').addClass('side-nav--visible');
      }
      
      function removeMenu() {
        $('.side-nav').removeClass('side-nav--visible');
      }

      function blockClick(e) {
         e.stopPropagation();
      }

});