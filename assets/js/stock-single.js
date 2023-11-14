// Реализация работы калькулятора START

document.addEventListener("DOMContentLoaded", () => {
  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function updateValues() {
    const outputElement = document.querySelector(".form-profit__output");
    const sumElement = document.querySelector(".form-profit__sum-num");
    const inflationSumElement = document.querySelector(
      ".form-profit__inflation-sum-num"
    );

    if (!outputElement) {
      return;
    }

    const outputText = outputElement.textContent.trim();
    const outputValue = parseFloat(outputText.replace(/\s/g, ""));
    const formattedOutputValue = formatNumberWithSpaces(outputValue);

    const calculatedValue = "+" + outputValue * 0.5;
    const inflationValue = outputValue * -0.1;

    outputElement.textContent = formattedOutputValue;
    sumElement.textContent = formatNumberWithSpaces(calculatedValue);
    inflationSumElement.textContent = formatNumberWithSpaces(inflationValue);
  }

  const outputElement = document.querySelector(".form-profit__output");
  if (outputElement) {
    function observeOutputChanges() {
      const outputElement = document.querySelector(".form-profit__output");

      const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
          if (
            mutation.type === "childList" ||
            mutation.type === "characterData"
          ) {
            updateValues();
          }
        }
      });

      observer.observe(outputElement, {
        subtree: true,
        characterData: true,
        childList: true,
      });
    }

    observeOutputChanges();
    updateValues();
  }
});

// Реализация работы калькулятора END

// Реализация появления кнопки купить на мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
  const stockPopUpWrapper = document.querySelector(".stock-pop-up__wrapper");

  if (stockPopUpWrapper) {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY >= 700) {
        stockPopUpWrapper.classList.add("stock-pop-up--active");
      } else {
        stockPopUpWrapper.classList.remove("stock-pop-up--active");
      }

      if (documentHeight - (scrollY + windowHeight) <= 700) {
        stockPopUpWrapper.classList.remove("stock-pop-up--active");
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});

// Реализация появления кнопки купить на мобильной версии END

// Реализаци подцветки навигационного меню в карточке акций START

const addActiveClass = (element) =>
  element.classList.add("stock-single-nav__item--active");
const removeActiveClass = (element) =>
  element.classList.remove("stock-single-nav__item--active");

const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight = 190) && rect.bottom >= 100;
};

document.addEventListener("DOMContentLoaded", () => {
  const navItems = Array.from(
    document.querySelectorAll("li.stock-single-nav__item")
  );

  const stockSingleNav = document.querySelector(".stock-single-nav");

  if (navItems.length > 0 && stockSingleNav) {
    const sectionIds = {
      cost: navItems[0],
      review: navItems[1],
      value: navItems[2],
      description: navItems[3],
      report: navItems[4],
      recommendation: navItems[5],
    };

    window.addEventListener("scroll", () => {
      for (const [sectionId, navItem] of Object.entries(sectionIds)) {
        const section = document.getElementById(sectionId);
        if (section && isElementInViewport(section)) {
          addActiveClass(navItem);
        } else {
          removeActiveClass(navItem);
        }
      }
    });
  }
});

// Реализаци подцветки навигационного меню в карточке акций END

// Скрытие навигационного меню в карточке акции START

document.addEventListener("DOMContentLoaded", () => {
  const sliderSimilarSector = document.querySelector(".slider-similar-sector");
  const stockSingleNav = document.querySelector(".anchor-nav--stock-single");

  if (stockSingleNav) {
    const handleScroll = () => {
      const sliderSimilarSectorTop =
        sliderSimilarSector.getBoundingClientRect().top;

      if (sliderSimilarSectorTop <= 250) {
        stockSingleNav.classList.add("anchor-nav--hidden");
      } else {
        stockSingleNav.classList.remove("anchor-nav--hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }
});

// Скрытие навигационного меню в карточке акции END
