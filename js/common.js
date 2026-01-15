
$(document).ready(function(){ //시작


$(".gnb > li").hover(function(){
  $(this).children(".depth2").stop().slideToggle();
});

$("header .mgnb > li").click(function(){
 $(this).children(".mdepth2").slideDown();
 $(this).siblings().children(".mdepth2").slideUp();
});

$(".ham").click(function(){
  $(".mgnb-wrap").animate({'left':'0'});
});

$(".mgnb-close").click(function(){
  $(".mgnb-wrap").animate({'left':'100%'});
});

const mv = new Swiper(".mv", {
      
    
     autoplay: {
     delay: 3000,
     disableOnInteraction: false,
     },
      
      loop: true,
      speed: 1000, 
      
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        },
});

const prd_list = new Swiper(".prd-list", {

  centeredSlides: true,

  autoplay: {
     delay: 3000,
     disableOnInteraction: false,
     },
      
      loop: true,
      speed: 1000,

   slidesPerView: 2,

   breakpoints: {
       576: {
          slidesPerView: 3,
        },
        
        1200: {
          slidesPerView: 5,
        },
      },
});

AOS.init();

}); //끝
