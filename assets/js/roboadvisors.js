// Реализация появления попапа «Настроить» START

document.addEventListener("DOMContentLoaded", () => {
  const stocksFilterSetPopUpRoboAdvisor = document.querySelector(
    ".stocks-filter-pop-up__wrapper--roboadvisor"
  );

  if (stocksFilterSetPopUpRoboAdvisor) {
    function handleScroll() {
      const stocksFilterScrollY = window.scrollY;
      const stocksFilterWindowHeight = window.innerHeight;
      const stocksDocumentHeight = document.documentElement.scrollHeight;

      if (
        stocksDocumentHeight -
          (stocksFilterScrollY + stocksFilterWindowHeight) <=
        2100
      ) {
        stocksFilterSetPopUpRoboAdvisor.classList.add(
          "stocks-pop-up--hideo-boadvisor"
        );
      } else if (stocksFilterScrollY >= 200) {
        stocksFilterSetPopUpRoboAdvisor.classList.remove(
          "stocks-pop-up--hideo-boadvisor"
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
  }
});

// Реализация появления попапа «Настроить» END

// Реализация появления шапки навигации в таблице при прокрутке START

document.addEventListener("DOMContentLoaded", () => {
	const stocksTableNavListRoboAdvisor = document.querySelectorAll(".stocks-table-nav--roboadvisor");
	const stocksTableStandartListRoboAdvisor = document.querySelectorAll(
	  ".roboadvisors-table"
	);
  
	function updateTableNavVisibility() {
	  const screenWidth = window.innerWidth;
	  const scrollTop = window.scrollY;
  
	  stocksTableNavListRoboAdvisor.forEach((stocksTableNav, index) => {
		const stocksTableStandart = stocksTableStandartListRoboAdvisor[index];
  
		if (stocksTableNav && stocksTableStandart) {
		  if (screenWidth >= 768 && screenWidth <= 1920) {
			const standartRect = stocksTableStandart.getBoundingClientRect();
			if (
			  scrollTop >= 150 &&
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
  
	if (stocksTableNavListRoboAdvisor.length > 0) {
	  window.addEventListener("scroll", updateTableNavVisibility);
	  window.addEventListener("resize", updateTableNavVisibility);
	}
  });

// Реализация появления шапки навигации в таблице при прокрутке END
  