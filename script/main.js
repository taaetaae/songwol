
 // banner slide
 let swiper = new Swiper(".bslide", {
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

 // best box slide
 
 $('.bestboxs').slick({
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
   {
    
    breakpoint: 1600,
    settings: {
     slidesToShow: 4,
     slidesToScroll: 2,
     infinite: true,
     dots: false
    },
    
    breakpoint: 1280,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     dots: false
    }
   },
   {
    breakpoint: 767,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1
    }
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1
    }
   }
   
  ]
 });

 //salebanner {
 
 $('.saleslide').slick({
  arrows: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});

// giftset gboxs 이미지 변환

$("#giftset .gboxs .textbox .colorbox .red").click(function(){

  $("#giftset .gboxs .gbox>figure:first-child").css({
    opacity:'1'
  })
  $("#giftset .gboxs .gbox>figure:nth-child(2)").css({
    opacity:'0'
  })
  $("#giftset .gboxs .gbox>figure:last-child").css({
    opacity:'0'
  })

})

$("#giftset .gboxs .textbox .colorbox .green").click(function(){

  $("#giftset .gboxs .gbox>figure:first-child").css({
    opacity:'0'
  })
  $("#giftset .gboxs .gbox>figure:nth-child(2)").css({
    opacity:'1'
  })
  $("#giftset .gboxs .gbox>figure:last-child").css({
    opacity:'0'
  })


})

$("#giftset .gboxs .textbox .colorbox .blue").click(function(){

  $("#giftset .gboxs .gbox>figure:first-child").css({
    opacity:'0'
  })
  $("#giftset .gboxs .gbox>figure:nth-child(2)").css({
    opacity:'0'
  })
  $("#giftset .gboxs .gbox>figure:last-child").css({
    opacity:'1'
  })


})

 
// news slide

$('.newsslide').slick({
 infinite: true,
  speed: 250,
  autoplay:true,
  centerMode:false,
 slidesToShow: 2,
 responsive: [
   {
    breakpoint: 1920,
    settings: {
      arrows: false,
      centerMode: false,
      slidesToShow: 2,
     slidesToScroll: 2
    },

    breakpoint: 1280,
    settings: {
      centerMode:false,
      arrows: false,
      slidesToShow: 2,
     slidesToScroll: 2

    },

     breakpoint: 991,
     settings: {
      centerMode:false,
       arrows: false,
       slidesToShow: 1,
     slidesToScroll: 1
     }
   },

 ]

});




