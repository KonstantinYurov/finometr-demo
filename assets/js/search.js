// Реализация появления и работы поисковой строки START

document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search");
  const searchImage = document.querySelector(".search__image");
  const searchImageClose = document.querySelector(".search__image-close");
  const searchInput = document.querySelector(".search__input-container input");
  const searchTextCancel = document.querySelector(".search__text-cancel");
  const headerLogo = document.querySelector(".header-logo");
  const menuWrapper = document.querySelector(".menu__wrapper");

  searchImage.addEventListener("click", () => {
    search.classList.add("search--active");
    if (window.innerWidth <= 768) {
      headerLogo.classList.add("header-logo--hidden");
      menuWrapper.classList.add("menu__wrapper--hidden");
    }
  });

  searchImageClose.addEventListener("click", () => {
    search.classList.remove("search--active");
    headerLogo.classList.remove("header-logo--hidden");
    menuWrapper.classList.remove("menu__wrapper--hidden");

    if (searchInput.value.trim().length > 0) {
      searchInput.value = "";
      searchTextCancel.classList.remove("search__text-cancel--active");
    }
  });

  document.addEventListener("click", (event) => {
    if (!search.contains(event.target) && !searchInput.contains(event.target)) {
      if (searchInput.value.trim().length > 0) {
        searchInput.value = "";
        searchTextCancel.classList.remove("search__text-cancel--active");
      }
      search.classList.remove("search--active");
      headerLogo.classList.remove("header-logo--hidden");
      menuWrapper.classList.remove("menu__wrapper--hidden");
    }
  });

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim().length > 0) {
      searchTextCancel.classList.add("search__text-cancel--active");
    } else {
      searchTextCancel.classList.remove("search__text-cancel--active");
    }
  });

  searchTextCancel.addEventListener("click", () => {
    searchInput.value = "";
    searchTextCancel.classList.remove("search__text-cancel--active");
  });
});

// Реализация появления поиска END

// Реализация вывода "Ничего не найдено" в результатах поиска START

document.addEventListener("DOMContentLoaded", () => {
  const itemElements = document.querySelectorAll(".search-result__item");

  itemElements.forEach((item) => {
    const liElements = item.querySelectorAll("li");
    const nullElement = item.querySelector(".search-result__null");

    const allLiEmpty = Array.from(liElements).every(
      (li) => li.textContent.trim() === ""
    );

    if (allLiEmpty && nullElement) {
      nullElement.classList.add("search-result__null-show");
    }
  });
});

// Реализация вывода "Ничего не найдено" в результатах поиска END

// Реализация вывода "Ещё" в результатах поиска постов START

document.addEventListener("DOMContentLoaded", () => {
  const stockPostsList = document.querySelector(
    ".search-result__item--stock-posts"
  );

  if (stockPostsList && stockPostsList.querySelectorAll("li").length > 3) {
    const itemLink = document.querySelector(".search-result__item-link");

    if (itemLink) {
      itemLink.classList.add("search-result__item-link--show");
    }
  }
});

// Реализация вывода "Ещё" в результатах поиска постов END

// Реализация вывода результов поиска с учётом, если в инпуте более трёх символов START

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const searchResult = document.querySelector(".search-result");

  const updateSearchResultVisibility = () => {
    const inputValue = searchInput.value.trim();
    searchResult.classList.toggle("search-result--show", inputValue.length > 3);
  };

  searchInput.addEventListener("input", updateSearchResultVisibility);

  const addCloseEvent = (element, callback) => {
    if (element) {
      element.addEventListener("click", callback);
    }
  };

  addCloseEvent(document.querySelector(".search__image-close"), () => {
    searchResult.classList.remove("search-result--show");
  });

  addCloseEvent(document.querySelector(".search__text-cancel"), () => {
    searchResult.classList.remove("search-result--show");
  });

  document.addEventListener("click", (event) => {
    const { target } = event;
    const isSearchResult = target.closest(".search-result");
    const isSearchInput = target.closest(".search__input-container");

    if (!isSearchResult && !isSearchInput) {
      searchResult.classList.remove("search-result--show");
    }
  });
});

// Реализация вывода результов поиска с учётом, если в инпуте более трёх символов END
