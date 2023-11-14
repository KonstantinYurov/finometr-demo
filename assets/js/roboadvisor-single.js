// Реализация появления кнопки по открытию счёта START

document.addEventListener("DOMContentLoaded", () => {
	const RoboAdvisorPopUpWrapper = document.querySelector(".roboadvisor-pop-up__wrapper");
  
	if (RoboAdvisorPopUpWrapper) {
	  function handleScroll() {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
  
		if (scrollY >= 200) {
		  RoboAdvisorPopUpWrapper.classList.add("roboadvisor-pop-up--active");
		} else {
		  RoboAdvisorPopUpWrapper.classList.remove("roboadvisor-pop-up--active");
		}
  
		if (documentHeight - (scrollY + windowHeight) <= 500) {
		  RoboAdvisorPopUpWrapper.classList.remove("roboadvisor-pop-up--active");
		}
	  }
  
	  window.addEventListener("scroll", handleScroll);
	}
  });

// Реализация появления кнопки по открытию счёта END


// Проверяем наличие элементов с классом like-block__icon
const likeIcons = document.querySelectorAll('.like-block__icon');

if (likeIcons.length > 0) {
    likeIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const parent = icon.closest('.like-block');
            const textElement = parent.querySelector('.like-block__text p');
            const currentCount = parseInt(textElement.textContent);

            if (icon.classList.contains('like-block__icon--done')) {
                icon.classList.remove('like-block__icon--done');
                textElement.textContent = currentCount - 1;
            } else {
                icon.classList.add('like-block__icon--done');
                textElement.textContent = currentCount + 1;
            }
        });
    });
}






