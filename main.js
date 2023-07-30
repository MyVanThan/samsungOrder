var screenWidth = window.innerWidth;
if (screenWidth <= 1024 && screenWidth > 350) {
  var text = document.querySelector(".search__bar span")
  text.innerHTML = "Tìm kiếm sản phẩm"
} else if(screenWidth <= 350) {
  var text = document.querySelector(".search__bar span")
  text.innerHTML = "Tìm kiếm"
}

var footerShowParents = document.querySelectorAll(".footer__show--parent");
var body = document.querySelector("body")
var searchBar = document.querySelector(".search__bar");
var zfoldBtn = document.querySelector(".thongso__title-item--fold");
var zflipBtn = document.querySelector(".thongso__title-item--flip");
var zfoldEle = document.querySelector(".z-1");
var zflipEle = document.querySelector(".z-2");
var slider = document.querySelector(".thongso__title-slide");
var foldImgEle = document.querySelector(".foldEle");
var foldImgEle2 = document.querySelector(".foldEle2");
var flipImgEle = document.querySelector(".flipEle");

var flipImgEle2 = document.querySelector(".flipEle2");
var flipImgEle3 = document.querySelector(".flipEle3");

var allColorBtnFold = document.querySelectorAll(".foldParent .more__color-item");
var allColorBtnFold2 = document.querySelectorAll(".foldParent2 .thongso__booking__pic-color--item");
var allColorBtnFlip = document.querySelectorAll(".flipParent .more__color-item");

var allColorBtnFlip2 = document.querySelectorAll(".flipParent2 .thongso__booking__pic-color--item");
var allColorBtnFlip3 = document.querySelectorAll(".flipParent3 .thongso__booking__pic-color--item");

var romlistFold = document.querySelectorAll(".foldParent .more__rom-item");
var romlistFold2 = document.querySelectorAll(".foldParent2 .thongso__booking-rom-item");

var romlistFlip = document.querySelectorAll(".flipParent .more__rom-item");
var romlistFlip2 = document.querySelectorAll(".flipParent2 .thongso__booking-rom-item");
var romlistFlip3 = document.querySelectorAll(".flipParent3 .thongso__booking-rom-item");

var modal = document.querySelector(".modal")
var modalContainer = document.querySelector(".modal__container")
var modalProduct = document.querySelector(".order__item-value--phone")
var modalColor = document.querySelector(".order__item-value--color")
var modalRom = document.querySelector(".order__item-value--rom")
var modalCash = document.querySelector(".modal__cash-num")

var modalaCloseBtn = document.querySelector(".modal__close")

modalaCloseBtn.onclick = function(){
  modal.classList.remove("show")
}

romlistFold.forEach(function(romItem){
  var parent = document.querySelector(".foldParent");
  romItem.onclick = function(){
    romlistFold.forEach(function(romitem){
      if(romitem.classList.contains("select")){
        romitem.classList.remove("select")
      }
    })
    romItem.classList.add("select")
    if(romItem.innerText == "256 GB"){
      parent.querySelector(".prod__old").innerHTML = "40.990.000 đ";
      parent.querySelector(".prod__new").innerHTML = "35.490.000 đ";
    }else if(romItem.innerText == "512 GB"){
      parent.querySelector(".prod__old").innerHTML = "44.990.000 đ";
      parent.querySelector(".prod__new").innerHTML = "35.490.000 đ";
    } else {
      parent.querySelector(".prod__old").innerHTML = "51.990.000 đ";
      parent.querySelector(".prod__new").innerHTML = "46.490.000 đ";
    }
  }
})

romlistFold2.forEach(function(romItem){
  var parent = document.querySelector(".foldParent2");
  romItem.onclick = function(){
    romlistFold2.forEach(function(romitem){
      if(romitem.classList.contains("select")){
        romitem.classList.remove("select")
      }
    })
    romItem.classList.add("select")

    if(romItem.innerText == "256 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "40.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "35.490.000 đ";
    }else if(romItem.innerText == "512 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "44.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "35.490.000 đ";
    } else {
      parent.querySelector(".thongso__booking-price-old").innerHTML = "51.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "46.490.000 đ";
    }
  }
})

romlistFlip.forEach(function(romItem){
  var parent = document.querySelector(".flipParent");
  romItem.onclick = function(){
    romlistFlip.forEach(function(romitem){
      if(romitem.classList.contains("select")){
        romitem.classList.remove("select")
      }
    })

    romItem.classList.add("select")
    if(romItem.innerText == "256 GB"){
      parent.querySelector(".prod__old").innerHTML = "25.990.000 đ";
      parent.querySelector(".prod__new").innerHTML = "23.490.000 đ";
    }else if(romItem.innerText == "512 GB"){
      parent.querySelector(".prod__old").innerHTML = "29.990.000 đ";
      parent.querySelector(".prod__new").innerHTML = "35.490.000 đ";
    }
  }
})

romlistFlip2.forEach(function(romItem){
  var parent = document.querySelector(".flipParent2");
  romItem.onclick = function(){
    romlistFlip2.forEach(function(romitem){
      if(romitem.classList.contains("select")){
        romitem.classList.remove("select")
      }
    })

    romItem.classList.add("select")
    if(romItem.innerText == "256 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "25.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "23.490.000 đ";
    }else if(romItem.innerText == "512 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "29.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "35.490.000 đ";
    }
  }
})

romlistFlip3.forEach(function(romItem){
  var parent = document.querySelector(".flipParent3");
  romItem.onclick = function(){
    romlistFlip3.forEach(function(romitem){
      if(romitem.classList.contains("select")){
        romitem.classList.remove("select")
      }
    })

    romItem.classList.add("select")
    if(romItem.innerText == "256 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "25.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "23.490.000 đ";
    }else if(romItem.innerText == "512 GB"){
      parent.querySelector(".thongso__booking-price-old").innerHTML = "29.990.000 đ";
      parent.querySelector(".thongso__booking-price-sale").innerHTML = "35.490.000 đ";
    }
  }
})


allColorBtnFold.forEach(function(ColorBtn){
  ColorBtn.onclick = function(e){
    allColorBtnFold.forEach(function(ColorBtn){
      if(ColorBtn.querySelector("img").classList.contains("select")){
        ColorBtn.querySelector("img").classList.remove("select")
      }
    })

    ColorBtn.querySelector("img").classList.add("select")
    changePhoneFold(ColorBtn);
  }
})

allColorBtnFold2.forEach(function(ColorBtn){
  ColorBtn.onclick = function(e){
    allColorBtnFold2.forEach(function(ColorBtn){
      if(ColorBtn.querySelector("img").classList.contains("select")){
        ColorBtn.querySelector("img").classList.remove("select")
      }
    })

    ColorBtn.querySelector("img").classList.add("select")
    changePhoneFold2(ColorBtn);
  }
})


function moveSlider(nav){
  if(nav == "right"){
    slider.style.left = "68px";
  }else {
    slider.style.left = "441px";
  }
}

allColorBtnFlip.forEach(function(ColorBtn){
  ColorBtn.onclick = function(e){
    allColorBtnFlip.forEach(function(ColorBtn){
      if(ColorBtn.querySelector("img").classList.contains("select")){
        ColorBtn.querySelector("img").classList.remove("select")
      }
    })

    ColorBtn.querySelector("img").classList.add("select")
    changePhoneFlip(ColorBtn);
  }
})

function changePhoneFlip2(ColorBtn){
  console.log("LOL")
  var kid = ColorBtn.querySelector("img");
  if(kid.classList.contains("mint")) {
    flipImgEle2.src = "./assets/image/datve/cacc.png"
  }else if(kid.classList.contains("xam")) {
    flipImgEle2.src = "./assets/image/datve/Flipxam.png"
  } else if(kid.classList.contains("tim")) {
    flipImgEle2.src = "./assets/image/datve/fliptim.png"
  } else {
    flipImgEle2.src = "./assets/image/datve/flipkem.png"
  }
}

allColorBtnFlip2.forEach(function(ColorBtn){
  ColorBtn.onclick = function(e){
    allColorBtnFlip2.forEach(function(ColorBtn){
      if(ColorBtn.querySelector("img").classList.contains("select")){
        ColorBtn.querySelector("img").classList.remove("select")
      }
      console.log("lol")
    })

    ColorBtn.querySelector("img").classList.add("select")
    changePhoneFlip2(ColorBtn);
    
  }
})

allColorBtnFlip3.forEach(function(ColorBtn){
  ColorBtn.onclick = function(e){
    allColorBtnFlip3.forEach(function(ColorBtn){
      if(ColorBtn.querySelector("img").classList.contains("select")){
        ColorBtn.querySelector("img").classList.remove("select")
      }
    })

    ColorBtn.querySelector("img").classList.add("select")
    changePhoneFlip3(ColorBtn);
  }
})


function changePhoneFold(ColorBtn){
  var kid = ColorBtn.querySelector("img");
  if(kid.classList.contains("xanh")) {
    foldImgEle.src = "./assets/image/datve/Rectangle 5.png"
  }else if(kid.classList.contains("kem")) {
    foldImgEle.src = "./assets/image/datve/foldkem.png"
  } else {
    foldImgEle.src = "./assets/image/datve/foldden.png"
  }
}

function changePhoneFold2(ColorBtn){
  var kid = ColorBtn.querySelector("img");
  if(kid.classList.contains("xanh")) {
    foldImgEle2.src = "./assets/image/datve/Rectangle 5.png"
  }else if(kid.classList.contains("kem")) {
    foldImgEle2.src = "./assets/image/datve/foldkem.png"
  } else {
    foldImgEle2.src = "./assets/image/datve/foldden.png"
  }
}


function changePhoneFlip(ColorBtn){
  var kid = ColorBtn.querySelector("img");
  if(kid.classList.contains("mint")) {
    flipImgEle.src = "./assets/image/datve/cacc.png"
  }else if(kid.classList.contains("xam")) {
    flipImgEle.src = "./assets/image/datve/Flipxam.png"
  } else if(kid.classList.contains("tim")) {
    flipImgEle.src = "./assets/image/datve/fliptim.png"
  } else {
    flipImgEle.src = "./assets/image/datve/flipkem.png"
  }
}



function changePhoneFlip3(ColorBtn){
  var kid = ColorBtn.querySelector("img");
  if(kid.classList.contains("mint")) {
    flipImgEle3.src = "./assets/image/datve/cacc.png"
  }else if(kid.classList.contains("xam")) {
    flipImgEle3.src = "./assets/image/datve/Flipxam.png"
  } else if(kid.classList.contains("tim")) {
    flipImgEle3.src = "./assets/image/datve/fliptim.png"
  } else {
    flipImgEle3.src = "./assets/image/datve/flipkem.png"
  }
}

zfoldBtn.onclick = function(e){
  moveSlider("right");
  zfoldEle.classList.add("trigger");
  zflipEle.classList.remove("trigger");
}

zflipBtn.onclick = function(){
  moveSlider("left");
  zflipEle.classList.add("trigger");
  zfoldEle.classList.remove("trigger");
}

footerShowParents.forEach(function(footerShowParent){
  var headerBtn = footerShowParent.querySelector(".footer__show--btn")
  headerBtn.onclick = function(){
    var footerShowItem = footerShowParent.querySelector(".footer__show--item");
    if(footerShowItem.classList.contains('show')){
      footerShowItem.classList.remove('show')
    } else {
      footerShowItem.classList.add('show')
    }
  }
})

searchBar.onclick = function(e){
  e.stopPropagation();
  var searchBarlink =  searchBar.querySelector(".search__bar-link");
  searchBarlink.classList.add("show");
}

body.onclick = function(e){
  var searchBarlink =  searchBar.querySelector(".search__bar-link");
  searchBarlink.classList.remove("show");
}

modal.onclick = function(){
  modal.classList.remove("show");
}

modalContainer.onclick = function(e){
  e.stopPropagation();
}

// xử lý submit form

var bookingBtns = document.querySelectorAll(".booking__btn")
var modalBtn = document.querySelector(".modal__submit")

// sau khi click submit thong tin order cua khach se duoc luu tai day
var order = {
  product: "",
  color: "",
  rom: "",
  price:  "",
  fullName: " ",
  address: "",
  number: "",
}

bookingBtns.forEach(function(bookBtn){
  bookBtn.onclick = function(){
    var parent = bookBtn.closest(".submit_form");
    modalProduct.innerHTML = parent.querySelector('[name = "full_name"]').getAttribute("value")
    modalColor.innerHTML = parent.querySelector('[name = "full_color"] .select').getAttribute("value")
    modalRom.innerHTML  = parent.querySelector('[name = "full_rom"] .select').getAttribute("value")
    modalCash.innerHTML  = parent.querySelector('[name = "full_price"]').innerText
    modal.classList.add("show");
  }
})

modalBtn.onclick = function(){
  order.fullName = modal.querySelector('[name = "ten"]').value
  order.address = modal.querySelector('[name = "home"]').value
  order.number = modal.querySelector('[name = "sdt"]').value
  console.log(order)
  modal.classList.remove("show");
}
