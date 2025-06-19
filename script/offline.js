let menu = [
  {
    id: 1,
    title: "덕흥상회",
    category: "서울",
    add: "서울특별시 종로구 종로5가 332-16",
    tel: "02-2266-7204",
  },
  {
    id: 2,
    title: "한송상회",
    category: "서울",
    add: "서울특별시 강남구 논현동 140-4",
    tel: "02-517-4664",
  },
  {
    id: 3,
    title: "송월타올 일산대리점",
    category: "경기",
    add: "경기도 고양시 일산서구 덕이동 219-2",
    tel: "031-912-2588",
  },
  {
    id: 4,
    title: "송월타올 김포장기대리점",
    category: "경기",
    add: "경기도 김포시 초당로61번길 40,101호",
    tel: "031-2957-9310",
  },
  {
    id: 5,
    title: "송월타올 경남총판",
    category: "경남",
    add: "경상남도 창원시 의창구 팔용동 사화로 41-1",
    tel: "055-295-0877",
  },
  {
    id: 6,
    title: "덕흥상회",
    category: "경남",
    add: "경상남도 양산시 북부동 425-3",
    tel: "055-382-5996",
  },
  {
    id: 7,
    title: "송월타올 금샘대리점",
    category: "부산",
    add: "부산광역시 금정구 금정로 111",
    tel: "051-581-3332",
  },
  {
    id: 8,
    title: "송월타올 해운대대리점",
    category: "부산",
    add: "부산광역시 해운대구 중제1동 1398-26",
    tel: "051-741-7778",
  },
  {
    id: 9,
    title: "(주)코리아타올",
    category: "대구",
    add: "대구광역시 중구 계산동2가 175",
    tel: "053-256-9900",
  },
  {
    id: 10,
    title: "송월타올 대구영업부동림",
    category: "대구",
    add: "대구광역시 중구 국채보상로 463",
    tel: "053-255-3651",
  },
  {
    id: 11,
    title: "송월타올 부평대리점",
    category: "인천",
    add: "인천광역시 부평구 부평대로 134, 101호",
    tel: "032-514-4411",
  },
  {
    id: 12,
    title: "송월타올 인천상사",
    category: "인천",
    add: "인천광역시 부평구 부평1동 529-79",
    tel: "032-505-0005",
  },
  {
    id: 13,
    title: "송월타월 백석자수",
    category: "충남",
    add: "충청남도 천안시 서북구 백석로 10",
    tel: "041-622-3372",
  },
  {
    id: 14,
    title: "송월타올 충청상사",
    category: "충남",
    add: "충청남도 천안시 동남구 중앙로 193",
    tel: "041-572-4230",
  },
  {
    id: 15,
    title: "송월타올 대전 탄방점",
    category: "대전",
    add: "대전광역시 서구 탄방동 77-8",
    tel: "042-522-5488",
  },
  {
    id: 16,
    title: "송월타올 한일타올산업",
    category: "대전",
    add: "대전광역시 중구 태평1동 334-1",
    tel: "053-255-3651",
  },
  {
    id: 17,
    title: "송월타올 나라상사",
    category: "광주",
    add: "광주광역시 서구 쌍촌동 985-1",
    tel: "062-373-2600",
  },
  {
    id: 18,
    title: "송월타올 대구영업부동림",
    category: "광주",
    add: "	대구광역시 중구 국채보상로 463",
    tel: "053-255-3651",
  },
  {
    id: 19,
    title: "송월타올 구미대리점",
    category: "경북",
    add: "경상북도 구미시 원평동 158-17",
    tel: "054-452-4665",
  },
  {
    id: 20,
    title: "송월타올 구미점",
    category: "경북",
    add: "경상북도 구미시 삼일로 60",
    tel: "054-4317-6656",
  },
  {
    id: 21,
    title: "송월타올 연동대리점",
    category: "제주",
    add: "제주특별자치도 제주시 연동 293-102",
    tel: "064-744-8989",
  },
  {
    id: 22,
    title: "송월타올 위미상사",
    category: "제주",
    add: "제주특별자치도 서귀포시 동홍동 1546-1",
    tel: "064-762-1116",
  },

]

console.log(menu)

document.addEventListener('DOMContentLoaded', () => {

  const menulist = document.querySelector('.offline_list')
  const btnbox = document.querySelector('.o_menu_btn')

  function menubox(menuItems) {

    let menus = menuItems.map((item) => {
      return ` <div class="item">
      <div class="text">
              <p class="title">${item.title}</p>
               <div class="info">
              <span class="add"><i class="fa-solid fa-house"></i>${item.add}</span>
              <p class="tel"><i class="fa-solid fa-phone"></i>${item.tel}</p>
              </div>
            </div>
             <div class="btns">
            <div class="open_btn">OPEN</div>
            <div class="close_btn">CLOSE</div>
            </div>
          </div>
      `
    });

    menus = menus.join("");
    menulist.innerHTML = menus

  }

  menubox(menu)


  // 버튼

  function menubtn() {

    const categorys = menu.reduce((value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category)
      }
      return value;
    }, ["전체"]
    );

    const categorybtns = categorys.map((category) => {
      return `<button type="button" class="obtn" data-id=${category}>${category}</button>`
    }).join("")

    btnbox.innerHTML = categorybtns;
    let cbtn = btnbox.querySelectorAll(".obtn")

    cbtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.dataset)

        let category = e.currentTarget.dataset.id;
        let categorymenu = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem
          }
        });

        if (category === "전체") {
          menubox(menu);
        } else {
          menubox(categorymenu)
        }
      });
    });
  }

  menubtn();

  // open / close 버튼

  let time = new Date()
  console.log(time)

  let hour = time.getHours();

  console.log(hour)

  if (hour => 20) {
    $("#offline_wrap .offlines .offline_list .item .btns .close_btn").css({
      opacity: '1'
    })

    $("#offline_wrap .offlines .offline_list .item .btns .open_btn").css({
      opacity: '0'
    })

  } else {
    $("#offline_wrap .offlines .offline_list .item .btns .close_btn").css({
      opacity: '0'
    })

    $("#offline_wrap .offlines .offline_list .item .btns .open_btn").css({
      opacity: '1'
    })
  }


  // 지역 버튼 색깔 변경

  $("#offline_wrap .offlines .o_menu_btn button").click(function () {
    $(this).css({
      backgroundColor: '#8E1537',
      color: '#fff',
      fontWeight: '800'
    });
    $(this).nextAll().css({
      backgroundColor: '#fff',
      color: '#999',
      fontWeight: '300'
    })
    $(this).prevAll().css({
      backgroundColor: '#fff',
      color: '#999',
      fontWeight: '300'
    })
  })


  // 지도/매장 버튼 눌렀을 때 리스트 보이고 숨기기

  $("#offline_wrap .map .choice button:nth-child(1)").click(function () {
    $("#offline_wrap .offlines").fadeOut();
  });


  $("#offline_wrap .map .choice button:nth-child(2)").click(function () {
    $("#offline_wrap .offlines").fadeIn();
  });



  //  
})