$(document).ready(function(){

  // menu
  
  $(".menu li").on({
  
    mouseover: function () {
      // 마우스 오버 시 서브메뉴 슬라이드 다운
      $(".submenu",this).stop().slideDown(); 
    },
  
    mouseout: function () {
      // 마우스 벗어났을 때 서브메뉴 슬라이드 업
      $(".submenu",this).stop().slideUp(); 
    }
  
  });
  
  //ham menu slidedown

  $(".hambar_menu .ham_menu .bigt").click(function(){
    $(this).find(".ham_sub").toggleClass('ham_click');

    if ($(this).find(".ham_sub").hasClass('ham_click')) {
        // ham_click 클래스가 있을 때 실행할 코드
        $(this).find(".ham_sub").slideDown();
    } else {
        // ham_click 클래스가 없을 때 실행할 코드
        $(this).find(".ham_sub").slideUp();
    }
});
  
  
  //ham menu open / close 
  
  $("header .h_inner .menubar").click(function(){
    $(".hambar_menu").stop().animate({
      right:'0'
    });
  })
  
  $(".hambar_menu .ham_top .xbtn").click(function(){
    $(".hambar_menu").stop().animate({
      right:'-300%'
    });
  })


  // top btn 


  $(window).scroll(function(){
  
    let top = $(window).scrollTop();
    console.log(top)
  
    if(top >= 900){
      $(".topbtn").stop(true).fadeIn();
    } else {
      $(".topbtn").stop(true).fadeOut();
    }
  
    $(".topbtn").click(function(){
      $(window).scrollTop(0);
    });
  
  });

  $(document).ready(function(){


    // 스크롤 내렸을 때 헤더 안보이고, 스크롤 올릴 때 나타나게
    
    $(function(){
        let lastScrollTop = 0;
        const delta = 15;
      
        $(window).scroll(function(event){
          const st = $(this).scrollTop();
          if(Math.abs(lastScrollTop - st) <= delta) return;
          if((st > lastScrollTop) && (lastScrollTop > 0)) {
            $('header').addClass('nav-up');
            $('header').stop().slideUp();
          }else {
            $('header').removeClass('nav-up');
            $('header').stop().slideDown();
          };
          lastScrollTop = st;
        });
      });
    
    
    //
    });

  
  });
  