// Реализация работы попапа с условиями тарифа START

document.addEventListener('DOMContentLoaded', function() {
    const popUpElements = document.querySelectorAll('.tariff-item__detalies');

    if (document.querySelector('.tariff-item-pop-up')) {
        popUpElements.forEach((detail) => {
            detail.addEventListener('click', () => {
                const popUp = detail.querySelector('.tariff-item-pop-up');
                popUp.classList.add('tariff-item-pop-up--active');
                document.body.classList.add("body--scroll-hidden");
            });

            const closeButton = detail.querySelector('.tariff-item-pop-up__close');
            const popUp = detail.querySelector('.tariff-item-pop-up');

            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                popUp.classList.remove('tariff-item-pop-up--active');
                document.body.classList.remove("body--scroll-hidden");
            });

            const popUpWrapper = detail.querySelector('.tariff-item-pop-up__wrapper');
            popUpWrapper.addEventListener('click', (e) => {
                if (!e.target.closest('.tariff-item-pop-up__container')) {
                    e.stopPropagation();
                    popUp.classList.remove('tariff-item-pop-up--active');
                    document.body.classList.remove("body--scroll-hidden");
                }
            });
        });
    }
});

// Реализация работы попапа с условиями тарифа END

// Реализация появления кнопки по открытию счёта START

document.addEventListener("DOMContentLoaded", () => {
	const brokerPopUpWrapper = document.querySelector(".broker-pop-up__wrapper");
  
	if (brokerPopUpWrapper) {
	  function handleScroll() {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
  
		if (scrollY >= 300) {
		  brokerPopUpWrapper.classList.add("broker-pop-up--active");
		} else {
		  brokerPopUpWrapper.classList.remove("broker-pop-up--active");
		}
  
		if (documentHeight - (scrollY + windowHeight) <= 500) {
		  brokerPopUpWrapper.classList.remove("broker-pop-up--active");
		}
	  }
  
	  window.addEventListener("scroll", handleScroll);
	}
  });

// Реализация появления кнопки по открытию счёта END

// Реализация вывода окон с лицензией START

document.addEventListener('DOMContentLoaded', function() {
    const popUpElementsLicense = document.querySelectorAll('.license-cart');

    if (document.querySelector('.license-cart')) {
        popUpElementsLicense.forEach((detailLicense) => {
            detailLicense.addEventListener('click', () => {
                const popUpLicense = detailLicense.querySelector('.license-cart__img');
                popUpLicense.classList.add('license-cart__img--active');
                document.body.classList.add("body--scroll-hidden");
            });

            const closeButtonLicense = detailLicense.querySelector('.license-item__close');
            const popUpLicense = detailLicense.querySelector('.license-cart__img');

            closeButtonLicense.addEventListener('click', (e) => {
                e.stopPropagation();
                popUpLicense.classList.remove('license-cart__img--active');
                document.body.classList.remove("body--scroll-hidden");
            });

            const popUpWrapperLicense = detailLicense.querySelector('.license-cart__img-wrapper');
            popUpWrapperLicense.addEventListener('click', (e) => {
                if (!e.target.closest('.license-cart__img-container')) {
                    e.stopPropagation();
                    popUpLicense.classList.remove('license-cart__img--active');
                    document.body.classList.remove("body--scroll-hidden");
                }
            });
        });
    }
});

// Реализация вывода окон с лицензией END