// функция развешивания класса "show-modal" по элементам
var toggleModal = function toggleModal(className) {
  var toggledElem = document.querySelectorAll(className);
  [].forEach.call(toggledElem, function(entry) {
    if (!entry.classList.contains("show-modal")) {
      entry.classList.add("show-modal", "bounce");

      // блок для наведения фокуса на превое поле ввода
      if (entry.classList.contains("write-us")) {
        document.querySelector(".top-popup-fragment input").focus();
      }

    } else {
      entry.classList.remove("show-modal", "bounce");
    }
  });
};

// Очень хотелось сделать возможным обход скрытых кнопок на карточках товаров, этот
// зловещий алгоритм делает именно это
var availability = function availability(arr) {
  [].forEach.call(arr, function(entry) {
    // обычный onfocus не сработал
    entry.addEventListener("focusin", function() {
      entry.parentElement.classList.remove("visually-hidden");
    });
    entry.addEventListener("focusout", function() {
      entry.parentElement.classList.add("visually-hidden");
    });
  });
};

// :hover на JS, потому что так мне кажется проще
var hoverCard = function hoverCard(arr) {
  [].forEach.call(arr, function(entry) {
    entry.onmouseover = function () {
      entry.children[4].classList.remove("visually-hidden");
    };
    entry.onmouseout = function() {
      entry.children[4].classList.add("visually-hidden");
    };
  });
};

// сокрытие модального окна при загрузке страницы
var modalIndex = document.querySelector(".write-us");
if (modalIndex) {
  modalIndex.classList.remove("show-modal");
}

// нажатие на "купить" провоцирует вызов модального окна в каталоге
var eventBtnCatalog = document.querySelectorAll(".btn-buy");
if (eventBtnCatalog) {
  [].forEach.call(eventBtnCatalog, function(entry) {
    console.log(entry);
    entry.onclick = function(event) {
      event.preventDefault();
      toggleModal(".add-to-basket");
    };
  });
}

var modalCatalogContinue = document.querySelector(".continue-shopping");
if (modalCatalogContinue) {
  modalCatalogContinue.onclick = function (event) {
    event.preventDefault();
    toggleModal(".add-to-basket");
  };
}

var modalCatalog = document.querySelector(".add-to-basket");
var closeModalCatalog = document.querySelector(".close-modal-catalog");

if (closeModalCatalog) {
  closeModalCatalog.onclick = function () {
    modalCatalog.classList.remove("show-modal");
  };
}

// отлов нажатия клавиш на закрытие модалок
var iFrameMap = document.querySelector(".iframe-map");
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalIndex) {
      if (modalIndex.classList.contains("show-modal")) {
        modalIndex.classList.remove("show-modal");
      }
    }
    if (modalCatalog) {
      if (modalCatalog.classList.contains("show-modal")) {
        modalCatalog.classList.remove("show-modal");
      }
    }
    if (iFrameMap) {
      if (iFrameMap.classList.contains("show-modal")) {
        iFrameMap.classList.remove("show-modal");
      }
    }
  }
});

var modalMap = document.querySelectorAll(".toggle-modal-map");
if (modalMap) {
  [].forEach.call(modalMap, function(entry) {
    entry.onclick = function(event) {
      event.preventDefault();
      toggleModal(".write-us");
    };
  });
}

// переключение навигации (доставка/гарантия/кредит)
var serviceNav = document.querySelectorAll(".btn-service");
var slides = document.querySelectorAll(".services-content");

[].forEach.call(serviceNav, function(entry) {
  entry.onclick = function(event) {
    var numberPointNav = document.querySelectorAll(".service-navigation span").length;
    for (var i = 0; i < numberPointNav; i++) {
      document.querySelectorAll(".service-navigation span")[i].classList.remove("active");
    }
    event.target.classList.add("active");

    [].forEach.call(slides, function(entry) {
      entry.classList.remove("show-modal");
    });

    slides[event.target.id].classList.add("show-modal");
  };
});

var indexCardAvalilability = document.querySelectorAll(".btn-buy, .btn-bookmark");
if (indexCardAvalilability) {
  availability(indexCardAvalilability);
}

var hoverProductCard = document.querySelectorAll(".sells-item, .catalog-perforators-item");
if (hoverProductCard) {
  hoverCard(hoverProductCard);
}

var btnSlider = document.querySelectorAll(".slider-back, .slider-forward");
var arraySlides = document.querySelectorAll(".slide-one, .slide-two");
if(btnSlider) {
  [].forEach.call(btnSlider, function(entry) {
    entry.onclick = function(event) {
      [].forEach.call(arraySlides, function (entry) {
        if(entry.classList.contains("show-modal")) {
        entry.classList.remove("show-modal");
        } else {
        entry.classList.add("show-modal");
        }
      });
    }
  });
}

var frameMap = document.querySelector(".static-map");
if(frameMap) {
  frameMap.onclick = function(event) {
    event.preventDefault();
    iFrameMap.classList.add("show-modal");
  }
}

var closeFrameMap = document.querySelector(".close-iframe");
if(closeFrameMap) {
  closeFrameMap.onclick = function() {
    iFrameMap.classList.remove("show-modal");
  }
}
