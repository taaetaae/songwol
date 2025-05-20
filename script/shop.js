let menu = [
  {
    id: 1,
    title:"스텔라 뱀부라벨",
    category: "송월",
    price1: "15,000원",
    price2: "12,000원",
    img1: 'towel1.jpg',
    img2: 'towel1_over.png'
  },
  {
    id: 2,
    title:"솔리드 혼방무지",
    category: "호텔컬렉션",
    price1: "5,500원",
    price2: "5,000원",
    img1: 'towel2.jpg',
    img2: 'towel2_over.png'
  },
  {
    id: 3,
    title:"솔리드 뱀부무지 40",
    category: "카운테스마라",
    price1: "6,200원",
    price2: "5,600원",
    img1: 'towel3.jpg',
    img2: 'towel3_over.png'
  },
  {
    id: 4,
    title:"향균 프리미엄 무지",
    category: "아날도바시니",
    price1: "5,700원",
    price2: "5,200원",
    img1: 'towel4.jpg',
    img2: 'towel4_over.png'
  },
  {
    id: 5,
    title:"스노우 40",
    category: "샤보렌",
    price1: "3,000원",
    price2: "2,900원",
    img1: 'towel5.jpg',
    img2: 'towel5_over.png'
  },
  {
    id: 6,
    title:"풍차 40",
    category: "스윗하트",
    price1: "6,000원",
    price2: "5,300원",
    img1: 'towel6.jpg',
    img2: 'towel6_over.png'
  },
  {
    id: 7,
    title:"스트라이프 솔리드44",
    category: "제이마르코",
    price1: "11,000원",
    price2: "9,700원",
    img1: 'towel7.jpg',
    img2: 'towel7_over.png'
  },
  {
    id: 8,
    title:"호텔 모나코",
    category: "포모스",
    price1: "4,000원",
    price2: "2,900원",
    img1: 'towel8.jpg',
    img2: 'towel8_over.png'
  },
  {
    id: 9,
    title:"호텔 오슬로",
    category: "송월",
    price1: "4,500원",
    price2: "3,500원",
    img1: 'towel9.jpg',
    img2: 'towel9_over.png'
  },
  {
    id: 10,
    title:"테일러 40수",
    category: "호텔컬렉션",
    price1: "5,500원",
    price2: "4,500원",
    img1: 'towel10.jpg',
    img2: 'towel10_over.png'
  },
  {
    id: 11,
    title:"호텔 향균무지 40",
    category: "카운테스마라",
    price1: "4,200원",
    price2: "3,800원",
    img1: 'towel11.jpg',
    img2: 'towel11_over.png'
  },
  {
    id: 12,
    title:"프리미엄 무지",
    category: "아날도바시니",
    price1: "5,100원",
    price2: "4,600원",
    img1: 'towel12.jpg',
    img2: 'towel12_over.png'
  },
  {
    id: 13,
    title:"라운드오프 라벨타월",
    category: "샤보렌",
    price1: "6,100원",
    price2: "5,800원",
    img1: 'towel13.jpg',
    img2: 'towel13_over.png'
  },
  {
    id: 14,
    title:"호텔 다니엘",
    category: "스윗하트",
    price1: "6,000원",
    price2: "5,200원",
    img1: 'towel14.jpg',
    img2: 'towel14_over.png'
  },
  {
    id: 15,
    title:"향균 프리미엄 40수",
    category: "제이마르코",
    price1: "6,200원",
    price2: "6,000원",
    img1: 'towel15.jpg',
    img2: 'towel15_over.png'
  },
  {
    id: 16,
    title:"40수 베니스",
    category: "포모스",
    price1: "6,700원",
    price2: "6,200원",
    img1: 'towel16.jpg',
    img2: 'towel16_over.png'
  },
  {
    id: 17,
    title:"뱀부 프리미엄 40",
    category: "송월",
    price1: "5,300원",
    price2: "4,600원",
    img1: 'towel17.jpg',
    img2: 'towel17_over.png'
  },
  {
    id: 18,
    title:"호텔 레아",
    category: "호텔컬렉션",
    price1: "7,500원",
    price2: "7,200원",
    img1: 'towel18.jpg',
    img2: 'towel18_over.png'
  },
  {
    id: 19,
    title:"트리니티 40수",
    category: "카운테스마라",
    price1: "8,500원",
    price2: "6,900원",
    img1: 'towel19.jpg',
    img2: 'towel19_over.png'
  },
  {
    id: 20,
    title:"필라라인 40",
    category: "아날도바시니",
    price1: "8,000원",
    price2: "6,900원",
    img1: 'towel20.jpg',
    img2: 'towel20_over.png'
  },
  
]

console.log(menu)

document.addEventListener('DOMContentLoaded', () => {

  const menulist = document.querySelector('.t_list')
  const btnbox = document.querySelector('.t_menu_btn')

  function menubox(menuItems) {

    let menus = menuItems.map((item) => {
      // console.log(item)
      return `<div class="item">
      <div class="imgbox">
        <img src="./img/sub1-shop/${item.img1}" alt="${item.title}" class="img1">
        <img src="./img/sub1-shop/${item.img2}" alt="${item.title}" class="img2">
        </div>
        <div class="text">
            <div class="title">
                <p>${item.title}</p>
                </div>
            <span class="price1">${item.price1}</span>
          <p class="price2">${item.price2}</p>
        </div>
         <div class="shop_btn">
            장바구니에 담기<i class="fa-solid fa-basket-shopping"></i></div>
      </div>`
    });
    menus = menus.join("");
    menulist.innerHTML = menus
  }
  menubox(menu)


  //버튼
  function menubtn(){
    // reduce()  메서드 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고 , 하나의 결과값을 반환

    const categorys = menu.reduce((value,item)=>{
      //includes 요소가 배열안에 존재하는 경우에만 참 값 반환
      if(!value.includes(item.category)){
        value.push(item.category)
      }
      return value;
    },["전체"]
    );

    const categorybtns = categorys.map((category)=>{
      return` <button type="button" class="cbtn" data-id=${category}>${category}</button>`
    }).join("")


    btnbox.innerHTML = categorybtns;
    const cbtn = btnbox.querySelectorAll(".cbtn")
    // console.log(cbtn)

    cbtn.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
        console.log(e.currentTarget.dataset)
        let category = e.currentTarget.dataset.id;
        let categorymenu = menu.filter((menuItem)=>{
          if(menuItem.category === category){
            return menuItem
          }
        });
        if(category === "전체"){
          menubox(menu);
        } else {
          menubox(categorymenu)
        }
      });
    });
  }
  menubtn();


  $("#towel .t_menu_btn button").click(function(){
    $(this).css({
      color:'#8E1537',
      fontWeight:'800'
    });
    $(this).nextAll().css({
      color:'#999',
      fontWeight:'400'
    })
    $(this).prevAll().css({
      color:'#999',
      fontWeight:'400'
    })
  })

  $("#towel .t_list .item .imgbox").on({
    mouseover:function(){
      $(this).find(".img1").css({
        opacity:'0'
      });
      $(this).find(".img2").css({
        opacity:'1'
      })
    },
    mouseout:function(){
      $(this).find(".img1").css({
        opacity:'1'
      });
      $(this).find(".img2").css({
        opacity:'0'
      })
    }
  })

  ////
});


