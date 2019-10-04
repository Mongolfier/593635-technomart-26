// функция развешивания класса "show-modal" по элементам
var toggleModal = function(className) {
  var toggledElem = document.querySelector(className);
  if( !toggledElem.classList.contains("show-modal") ) {
    toggledElem.classList.add("show-modal") 
  } else {
    toggledElem.classList.remove("show-modal");
  }
}

var modalMap = document.getElementsByClassName("toggle-modal-map");
for( var i = 0; i < modalMap.length; i++) {
  modalMap[i].onclick = function(event) {
    toggleModal(".write-us");
  }
}

// переключение навигации (доставка/гарантия/кредит) 
var serviceNav = document.getElementsByClassName("btn-service");
for( var i = 0; i < serviceNav.length; i++) {
  serviceNav[i].onclick = function(event) {

    console.log(document.querySelectorAll(".service-navigation span").indexOf(event.target)); //!!!!!!!!!!!!!!
    var numberPointNav = document.querySelectorAll(".service-navigation span").length;
    for( var i = 0; i < numberPointNav; i++ ) {
      document.querySelectorAll(".service-navigation span")[i].classList.remove("active");
    }

    event.target.classList.add("active");
  }
}
