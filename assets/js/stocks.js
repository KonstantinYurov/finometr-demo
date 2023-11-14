// Реализация сортировки таблицы START

document.addEventListener("DOMContentLoaded", function () {
  const tables = document.querySelectorAll(".stocks-table-standart");

  if (tables.length === 0) {
    return;
  }

  tables.forEach(function (table) {
    const headers = table.querySelectorAll(".stocks-table-standart__filter");

	if (headers.length === 0) {
		return;
	}

    sortTableByColumn(table, headers, 0);

    headers.forEach((header, columnIndex) => {
      header.addEventListener("click", function () {
        sortTableByColumn(table, headers, columnIndex);
      });
    });
  });
});

function sortTableByColumn(table, headers, columnIndex) {
  const header = headers[columnIndex];
  const rows = Array.from(table.querySelectorAll("tbody tr"));

  if (columnIndex === 0) {
    rows.sort((a, b) => {
      const aValueCell = a.children[columnIndex];
      const bValueCell = b.children[columnIndex];

      const aValueA = aValueCell.querySelector("a")
        ? aValueCell.querySelector("a").textContent.trim()
        : "";
      const bValueA = bValueCell.querySelector("a")
        ? bValueCell.querySelector("a").textContent.trim()
        : "";

      return aValueA.localeCompare(bValueA);
    });
  } else {
    rows.sort((b, a) => {
      const aValueCell = a.children[columnIndex];
      const bValueCell = b.children[columnIndex];

      const aValue = extractCellValue(aValueCell);
      const bValue = extractCellValue(bValueCell);

      const aIsNumber = /^\s*[-+]?(?:\d[\s\d]*)(?:\.\d*)?\s*$/.test(aValue);
      const bIsNumber = /^\s*[-+]?(?:\d[\s\d]*)(?:\.\d*)?\s*$/.test(bValue);

      if (aIsNumber && bIsNumber) {
        const aNumber = parseFloat(aValue.replace(/[^-\d.]/g, ""));
        const bNumber = parseFloat(bValue.replace(/[^-\d.]/g, ""));
        return aNumber - bNumber;
      }
    });
  }

  if (header.classList.contains("sorted")) {
    if (header.classList.contains("sorted-reverse")) {
      header.classList.remove("sorted-reverse");
    } else {
      header.classList.add("sorted-reverse");
      rows.reverse();
    }
  } else {
    headers.forEach((h) => h.classList.remove("sorted", "sorted-reverse"));
    header.classList.add("sorted");
  }

  rows.forEach((row) => table.querySelector("tbody").appendChild(row));
}

function extractCellValue(cell) {
  const firstP = cell.querySelector("p");
  return firstP ? firstP.textContent.trim() : cell.textContent.trim();
}

/*
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".stocks-table-standart");
    
    if (table) {
        const headers = table.querySelectorAll(".stocks-table-standart__filter");

        sortTableByColumn(table, headers, 0);

        headers.forEach((header, columnIndex) => {
            header.addEventListener("click", function () {
                sortTableByColumn(table, headers, columnIndex);
            });
        });
    }
});

function sortTableByColumn(table, headers, columnIndex) {
    const header = headers[columnIndex];
    const rows = Array.from(table.querySelectorAll("tbody tr"));

    if (columnIndex === 0) {
        rows.sort((a, b) => {
            const aValueCell = a.children[columnIndex];
            const bValueCell = b.children[columnIndex];

            const aValueA = aValueCell.querySelector('a') ? aValueCell.querySelector('a').textContent.trim() : '';
            const bValueA = bValueCell.querySelector('a') ? bValueCell.querySelector('a').textContent.trim() : '';

            return aValueA.localeCompare(bValueA);    
        });
    } else {
        rows.sort((b, a) => {
            const aValueCell = a.children[columnIndex];
            const bValueCell = b.children[columnIndex];

            const aValue = extractCellValue(aValueCell);
            const bValue = extractCellValue(bValueCell);

            const aIsNumber = /^\s*[-+]?(?:\d[\s\d]*)(?:\.\d*)?\s*$/.test(aValue);
            const bIsNumber = /^\s*[-+]?(?:\d[\s\d]*)(?:\.\d*)?\s*$/.test(bValue);

            if (aIsNumber && bIsNumber) {
                const aNumber = parseFloat(aValue.replace(/[^-\d.]/g, ""));
                const bNumber = parseFloat(bValue.replace(/[^-\d.]/g, ""));
                return aNumber - bNumber;
            }
        });
    }

    if (header.classList.contains("sorted")) {
        if (header.classList.contains("sorted-reverse")) {
            header.classList.remove("sorted-reverse");
        } else {
            header.classList.add("sorted-reverse");
            rows.reverse();
        }
    } else {
        headers.forEach((h) => h.classList.remove("sorted", "sorted-reverse"));
        header.classList.add("sorted");
    }

    rows.forEach((row) => table.querySelector("tbody").appendChild(row));
}

function extractCellValue(cell) {
    const firstP = cell.querySelector("p");
    return firstP ? firstP.textContent.trim() : cell.textContent.trim();
}
*/

// Реализация сортировки таблицы END

// Реализация работы кнопки "Ещё" в таблице с акциями START

document.addEventListener("DOMContentLoaded", () => {
  function addRowsToTable(tableBody, startIndex, batchSize) {
    for (let i = startIndex; i < startIndex + batchSize; i++) {
      const row = tableBody.children[i];
      if (row) {
        row.classList.add("stocks-table-standart--row");
      }
    }
    startIndex += batchSize;
    return startIndex;
  }

  function isAllRowsAdded(tableBody, startIndex) {
    return startIndex >= tableBody.children.length;
  }

  const loadMoreButton = document.querySelector(".button--stocks");
  const tableBody = document.querySelector(".stocks-table-rus tbody");

  if (tableBody) {
    let startIndex = 21;

    loadMoreButton.addEventListener("click", () => {
      startIndex = addRowsToTable(tableBody, startIndex, 20);

      if (isAllRowsAdded(tableBody, startIndex)) {
        loadMoreButton.classList.add("button--stocks-hidden");
      }
    });
  }

  const loadMoreButtonUSA = document.querySelector(".button--stocks-usa");
  const tableBodyUSA = document.querySelector(".stocks-table-usa tbody");

  if (tableBodyUSA) {
    let startIndexUSA = 21;

    loadMoreButtonUSA.addEventListener("click", () => {
      startIndexUSA = addRowsToTable(tableBodyUSA, startIndexUSA, 20);

      if (isAllRowsAdded(tableBodyUSA, startIndexUSA)) {
        loadMoreButtonUSA.classList.add("button--stocks-hidden");
      }
    });
  }

  const loadMoreButtonCYN = document.querySelector(".button--stocks-cyn");
  const tableBodyCYN = document.querySelector(".stocks-table-cyn tbody");

  if (tableBodyCYN) {
    let startIndexCYN = 21;

    loadMoreButtonCYN.addEventListener("click", () => {
      startIndexCYN = addRowsToTable(tableBodyCYN, startIndexCYN, 20);

      if (isAllRowsAdded(tableBodyCYN, startIndexCYN)) {
        loadMoreButtonCYN.classList.add("button--stocks-hidden");
      }
    });
  }

  const loadMoreButtonBrokers = document.querySelector(".button--general");
  const tableBodyBrokers = document.querySelector(".general-table tbody");
  
  if (loadMoreButtonBrokers) {
	if (tableBodyBrokers) {
	  let startIndexBrokers = 21;
  
	  loadMoreButtonBrokers.addEventListener("click", () => {
		startIndexBrokers = addRowsToTable(tableBodyBrokers, startIndexBrokers, 20);
  
		if (isAllRowsAdded(tableBodyBrokers, startIndexBrokers)) {
		  loadMoreButtonBrokers.classList.add("button--stocks-hidden");
		}
	  });
	}
  }  
});

// Реализация работы кнопки "ещё" в таблице с акциями END

// Реализация поворота стрелки в частых вопросах START

document.addEventListener("DOMContentLoaded", () => {
  const oftenQuestionContainer = document.querySelector(
    ".often-question__container"
  );

  if (oftenQuestionContainer) {
    const summaries = oftenQuestionContainer.querySelectorAll("summary");

    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const iconRightArrow = summary.querySelector(".icon-right-arrow");
        iconRightArrow.classList.toggle("icon-right-arrow--active");
      });
    });
  }
});

// Реализация поворота стрелки в частых вопросах END

// Реализация закрепа шапки таблицы при прокрутке страницы START

document.addEventListener("DOMContentLoaded", () => {
  const stocksTableNavList = document.querySelectorAll(".stocks-table-nav");
  const stocksTableStandartList = document.querySelectorAll(
    ".stocks-table-standart"
  );

  function updateTableNavVisibility() {
    const screenWidth = window.innerWidth;
    const scrollTop = window.scrollY;

    stocksTableNavList.forEach((stocksTableNav, index) => {
      const stocksTableStandart = stocksTableStandartList[index];

      if (stocksTableNav && stocksTableStandart) {
        if (screenWidth >= 768 && screenWidth <= 1920) {
          const standartRect = stocksTableStandart.getBoundingClientRect();
          if (
            scrollTop >= 380 &&
            standartRect.bottom > +150 &&
            standartRect.top < window.innerHeight + 200
          ) {
            stocksTableNav.classList.add("stocks-table-nav--active");
          } else {
            stocksTableNav.classList.remove("stocks-table-nav--active");
          }
        }
      }
    });
  }

  if (stocksTableNavList.length > 0) {
    window.addEventListener("scroll", updateTableNavVisibility);
    window.addEventListener("resize", updateTableNavVisibility);
  }
});

// Реализация закрепа шапки таблицы при прокрутке страницы END

// Реализация работы блока с частыми вопросами START

document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll(".often-question__details");

  if (detailsElements.length > 0) {
    const summaries = document.querySelectorAll(".often-question__summary");
    summaries.forEach((summary) => {
      summary.addEventListener("click", () => {
        const details = summary.closest(".often-question__details");
        const isActive = details.classList.contains(
          "often-question__details--active"
        );

        if (isActive) {
          details.classList.remove("often-question__details--active");
        } else {
          details.classList.add("often-question__details--active");
        }
      });
    });
  }
});

// Реализация работы блока с частыми вопросами START

// Реализация работы выпадающего меню в мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
  const subcategoryElements = document.querySelectorAll(
    ".stocks-filters-sorting__subcategory"
  );

  if (subcategoryElements.length > 0) {
    const handleClick = (element) => {
      subcategoryElements.forEach((el) => {
        if (el !== element) {
          el.classList.remove("stocks-filters-sorting__subcategory--active");
        }
      });
      element.classList.toggle("stocks-filters-sorting__subcategory--active");
    };

    subcategoryElements.forEach((element) => {
      element.addEventListener("click", () => handleClick(element));
    });
  }
});

// Реализация работы выпадающего меню в мобильной версии END

// Реализация появления меню с разделами в мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
  const iconSort = document.querySelector(".icon-filter-alt");
  const stocksFiltersSorting = document.querySelector(
    ".stocks-filters-sorting__container"
  );
  const SortingClose = document.querySelector(
    ".stocks-filters-sorting__mobile-close"
  );

  if (stocksFiltersSorting) {
    iconSort.addEventListener("click", () => {
      stocksFiltersSorting.classList.add("stocks-filters-sorting--active");
      document.body.classList.add("body--scroll-hidden");
    });

    SortingClose.addEventListener("click", () => {
      stocksFiltersSorting.classList.remove("stocks-filters-sorting--active");
      document.body.classList.remove("body--scroll-hidden");
    });
  }
});

// Реализация появления меню с разделами в мобильной версии END

// Реализация появления фильтров таблицы в мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
  const stocksFilterPopUp = document.querySelector(
    ".stocks-filter-pop-up__name"
  );
  const stocksFilterPopUpSort = document.querySelector(
    ".stocks-filter-pop-up-sort"
  );
  const stocksFilterPopUpClose = document.querySelector(
    ".stocks-filter-pop-up-sort__close"
  );

  if (stocksFilterPopUpSort) {
    stocksFilterPopUp.addEventListener("click", () => {
      stocksFilterPopUpSort.classList.add("stocks-filter-pop-up-sort--active");
      document.body.classList.add("body--scroll-hidden");
    });

    stocksFilterPopUpClose.addEventListener("click", () => {
      stocksFilterPopUpSort.classList.remove(
        "stocks-filter-pop-up-sort--active"
      );
      document.body.classList.remove("body--scroll-hidden");
    });
  }
});

// Реализация появления фильтров таблицы в мобильной версии END

// Реализация появления кнопки купить на мобильной версии START

document.addEventListener("DOMContentLoaded", () => {
  const stocksFilterSetPopUp = document.querySelector(
    ".stocks-filter-pop-up__wrapper"
  );

  if (stocksFilterSetPopUp) {
    function handleScroll() {
      const stocksFilterScrollY = window.scrollY;
      const stocksFilterWindowHeight = window.innerHeight;
      const stocksDocumentHeight = document.documentElement.scrollHeight;

      if (
        stocksDocumentHeight -
          (stocksFilterScrollY + stocksFilterWindowHeight) <=
        2300
      ) {
        stocksFilterSetPopUp.classList.add("stocks-pop-up--hide");
      } else if (stocksFilterScrollY >= 700) {
        stocksFilterSetPopUp.classList.remove("stocks-pop-up--hide");
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});

// Реализация появления кнопки купить на мобильной версии END

// Реализация настройки фильтров на мобильной версии START

function removeClassFromAllElements(className) {
  document.querySelectorAll(`.${className}`).forEach((element) => {
    element.classList.remove("stocks-table-standart--show");
  });
}

function handleSortClick(sortType) {
  if (!document.querySelector(".point-one")) {
    return;
  }

  ["point-one", "point-two", "point-three", "point-four"].forEach(
    (className) => {
      removeClassFromAllElements(className);
    }
  );

  document.querySelectorAll(`.${sortType}`).forEach((element) => {
    element.classList.add("stocks-table-standart--show");
  });
}

const dailyIncomeElement = document.querySelector(".stocks-filter-pop-up-sort__item-point-one");
if (dailyIncomeElement) {
  dailyIncomeElement.addEventListener("click", () => {
    handleSortClick("point-one");
  });
}

const yearIncomeElement = document.querySelector(".stocks-filter-pop-up-sort__item-point-two");
if (yearIncomeElement) {
  yearIncomeElement.addEventListener("click", () => {
    handleSortClick("point-two");
  });
}

const dividendsElement = document.querySelector(".stocks-filter-pop-up-sort__item-point-three");
if (dividendsElement) {
  dividendsElement.addEventListener("click", () => {
    handleSortClick("point-three");
  });
}

const capitalizationElement = document.querySelector(".stocks-filter-pop-up-sort__item-point-four");
if (capitalizationElement) {
  capitalizationElement.addEventListener("click", () => {
    handleSortClick("point-four");
  });
}

// Реализация настройки фильтров на мобильной версии END

// Реализация подцветки фильтров сортировки таблицы START

const filterPopup = document.querySelector(".stocks-filter-pop-up-sort");

if (filterPopup) {
  const removeActiveClass = () => {
    filterPopup.classList.remove("stocks-filter-pop-up-sort--active");
  };

  const toggleActiveClass = (element) => {
    const activeElements = document.querySelectorAll(
      ".stocks-filter-pop-up-sort__checkbox-checked--active"
    );

    activeElements.forEach((activeElement) => {
      activeElement.classList.remove(
        "stocks-filter-pop-up-sort__checkbox-checked--active"
      );
      document.body.classList.remove("body--scroll-hidden");
    });

    const checkbox = element.querySelector(
      ".stocks-filter-pop-up-sort__checkbox-checked"
    );
    checkbox.classList.add(
      "stocks-filter-pop-up-sort__checkbox-checked--active"
    );

    removeActiveClass();
  };

  const addFilterClickListener = (filterClassName) => {
    const filterElement = document.querySelector(`.${filterClassName}`);

    if (filterElement) {
      filterElement.addEventListener("click", () => {
        toggleActiveClass(filterElement);
      });
    }
  };

  addFilterClickListener("stocks-filter-pop-up-sort__item-point-one");
  addFilterClickListener("stocks-filter-pop-up-sort__item-point-two");
  addFilterClickListener("stocks-filter-pop-up-sort__item-point-three");
  addFilterClickListener("stocks-filter-pop-up-sort__item-point-four");
}

// Реализация подцветки фильтров сортировки таблицв END
