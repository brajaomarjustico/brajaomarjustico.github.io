$(document).ready(function() {

    //Masonry Grid
      $('.grid').masonry({
           columnWidth: '.grid__sizer',
           itemSelector: '.grid__item',
           gutter: 10,
           percentPosition: true,
           horizontalOrder: true,
     });

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
    });

    //saat kapan Animasi dimulai
     $(window).scroll(function(){
         var wScroll = $(this). scrollTop();

         if( wScroll >= $('.koding').offset().top - 210){
           $('.ani').addClass(' kod');
          }

          if ( wScroll >= $('.desain').offset().top - 220) {
               $('.grid__item').each(function(i){
                    setTimeout(function(){
                         $('.grid__item').eq(i).addClass('is-visible');
                    }, 300 * i);
               });
          }

       });
     });

     //sideNav
    //  $('.menu').on.click.(toggleMenu());




});

//Menu --------
var menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    var sideNav = document.querySelector('.side-nav');
    sideNav.classList.add('side-nav--visible');
  }

  var closeBtn = document.querySelector('.btn-close');
  closeBtn.addEventListener('click', removeMenu);

    function removeMenu() {
      var sideNav = document.querySelector('.side-nav');
      sideNav.classList.remove('side-nav--visible');
    }

    var sideNav = document.querySelector('.side-nav');
    sideNav.addEventListener('click', removeMenu);

    var sideNavCon = document.querySelector('.side-nav__container');
    sideNavCon.addEventListener('click', blockClick);

    function blockClick(evt) {
         evt.stopPropagation();
    }
