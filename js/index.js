// 모바일 네비게이션
function mNav() {
  console.log("mNav");
  $("header .btn").on("click", function () {
    $("nav").animate({ left: "0" }, 500);
    $(this).hide();
  });
  $("nav .close").on("click", function () {
    let navWidth = $("nav").width();
    $("nav").css({ left: "-" + navWidth + "px" });
    $("header .btn").show();
  });
  return false;
}

// 리뷰 모달
const img = document.querySelector("#modal figure>img");
const nick = document.querySelector("#modal .userNick");
const review = document.querySelector("#modal .review");

const btn = document.querySelectorAll("#box05 .all figure");
const close = document.querySelector("#modal .close");
const open = document.querySelector("#modal");

function Modal(pic, nickname, review) {
  this.pic = pic;
  this.nickname = nickname;
  this.review = review;
}

Modal.prototype.action = function () {
  img.setAttribute("src", this.pic);
  nick.innerHTML = this.nickname;
  review.innerHTML = this.review;
};

let modal = [
  new Modal(
    "./images/review/review1_big.jpg",
    "asdfjkl1",
    "내구성이 좋고 가벼워요"
  ),
  new Modal("./images/review/review2_big.jpg", "dfqwfef", "배터리가 오래가요."),
  new Modal("./images/review/review3_big.jpeg", "geggeegq", "손에 착 감겨요."),
  new Modal("./images/review/review4_big.jpeg", "hhhzc", "반응속도가 빨라요."),
];

btn.forEach(function (item, index) {
  item.onclick = function () {
    open.style.display = "block";
    modal[index].action();
  };
});

close.onclick = function () {
  open.style.display = "none";
};

// 갤러리
// const btn2 = document.querySelectorAll('#box06 #gallery figure img')
//   btn2.forEach(function (item, index){
//     item.onclick = function() {
//       let imgSrc = item.src;
//         let selImg = imgSrc.substring(0, imgSrc.indexOf('.png'));
//         $('#box06 > div > figure > img').attr('src', selImg + '_introduce.png');
//     }
//   })

function introduce() {
  $('#box06 #gallery figure').on('click',function(){
 let imgSrc = $(this).children('img').attr('alt');
 let imgAlt = 'images/introduce/'+imgSrc+'_introduce.png';
 console.log(imgAlt)
$('#box06>div>figure>img').attr('src',imgAlt);
  })
}

function gallery() {
  let imgW = $("#box08 .gallery ul li").innerWidth();
  $("#box08 .gallery ul li:last").prependTo("#box08 .gallery ul");
  $("#box08 .gallery ul").css("margin-left", "-" + imgW + "px");
  $(".next").on("click", function () {
    $("#box08 .gallery ul").animate({ marginLeft: "-=" + imgW + "px" }, 400, function () {
      $("#box08 .gallery ul li:first").appendTo("#box08 .gallery ul");
      $("#box08 .gallery ul").css("margin-left", "-" + imgW + "px");
    });
  });
  $(".prev").on("click", function () {
    $("#box08 .gallery ul").animate({ marginLeft: "+=" + imgW + "px" }, 400, function () {
      $("#box08 .gallery ul li:last").prependTo("#box08 .gallery ul");
      $("#box08 .gallery ul").css("margin-left", "-" + imgW + "px");
    });
  });
}

// 마우스 hover 이미지 변경
function hover() { 
  $("#box08 li img").hover(function(){ 
      $(this).attr("src", $(this).attr("src").replace(".jpg", "-over.jpg")); 
  }, function(){ 
      $(this).attr("src", $(this).attr("src").replace("-over.jpg", ".jpg")); 
  }); 
};