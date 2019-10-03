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
  modalMap[i].addEventListener("click", function(event) {
    toggleModal(".write-us");
  });
}
