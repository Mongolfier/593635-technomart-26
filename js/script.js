// функция развешивания класса "show-modal" по элементам
var toggleModal = function toggleModal(className) {
  var toggledElem = document.querySelectorAll(className);
  toggledElem.forEach(function (entry) {
    if (!entry.classList.contains("show-modal")) {
      entry.classList.add("show-modal");
      // блок для наведения фокуса на превое поле ввода
      if (entry.classList == "write-us show-modal") {
        document.querySelector(".top-popup-fragment input").focus();
      }

      if (entry.classList == "write-us show-modal") {}
    } else {
      entry.classList.remove("show-modal");
    }
  });
};

// Очень хотелось сделать возможным обход скрытых кнопок на карточках товаров, этот
// зловещий алгоритм делает именно это
var availability = function availability(arr) {
  arr.forEach(function (entry) {
    // обычный onfocus не сработал
    entry.addEventListener("focusin", function () {
      entry.parentElement.classList.remove("visually-hidden");
    });
    entry.addEventListener("focusout", function () {
      entry.parentElement.classList.add("visually-hidden");
    });
  });
};

// :hover на JS, потому что так мне кажется проще
var hoverCard = function hoverCard(arr) {
  arr.forEach(function (entry) {
    entry.onmouseover = function () {
      entry.children[4].classList.remove("visually-hidden");
    };
    entry.onmouseout = function () {
      entry.children[4].classList.add("visually-hidden");
    };
  });
};

// сокрытие модального окна при загрузке страницы
var modalIndex = document.querySelector(".write-us");
if (modalIndex) {
  modalIndex.classList.remove("show-modal");
}

// нажатие на "в закладки" провоцирует вызов модального окна в каталоге
var eventBtnCatalog = document.querySelectorAll(".btn-bookmark");
if (eventBtnCatalog) {
  eventBtnCatalog.forEach(function (entry) {
    entry.onclick = function (event) {
      toggleModal(".add-to-basket");
    };
  });
}

var modalCatalogContinue = document.querySelector(".continue-shopping");
if (modalCatalogContinue) {
  modalCatalogContinue.onclick = function () {
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
window.addEventListener("keydown", function (event) {
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
  }
});

var modalMap = document.querySelectorAll(".toggle-modal-map");
if (modalMap) {
  modalMap.forEach(function (entry) {
    entry.onclick = function (event) {
      toggleModal(".write-us");
    };
  });
}

// переключение навигации (доставка/гарантия/кредит)
var serviceNav = document.querySelectorAll(".btn-service");
serviceNav.forEach(function (entry) {
  entry.onclick = function (event) {
    var numberPointNav = document.querySelectorAll(".service-navigation span").length;
    for (var i = 0; i < numberPointNav; i++) {
      document.querySelectorAll(".service-navigation span")[i].classList.remove("active");
    }
    event.target.classList.add("active");
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