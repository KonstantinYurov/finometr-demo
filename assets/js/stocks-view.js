// Реализация подцветки навигации на странице обзора акций START

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".anchor-nav__item");
  const stockSingleNav = document.querySelector(".anchor-nav--stock-single");

  if (navItems.length > 0) {
    const isElementInViewport = (elem) => {
      const rect = elem.getBoundingClientRect();
      if (stockSingleNav) {
        return rect.top <= 190 && rect.bottom >= 100;
      } else {
        return rect.top <= 320 && rect.bottom >= 240;
      }
    };

    const toggleActiveClass = (targetId, addActiveClass) => {
      navItems.forEach((item) => {
        const link = item.querySelector("a");
        if (link.getAttribute("href") === "#" + targetId) {
          if (addActiveClass) {
            item.classList.add("anchor-nav__item--active");
          } else {
            item.classList.remove("anchor-nav__item--active");
          }
        }
      });
    };

    const handleScroll = () => {
      const sections = [
        "anchor-one",
        "anchor-two",
        "anchor-three",
        "anchor-four",
        "anchor-five",
        "anchor-six",
        "anchor-seven",
      ];

      sections.forEach((sectionId) => {
        if (document.getElementById(sectionId)) {
          const section = document.getElementById(sectionId);
          if (isElementInViewport(section)) {
            toggleActiveClass(sectionId, true);
          } else {
            toggleActiveClass(sectionId, false);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", handleScroll);
  }
});

// Реализация подцветки навигации на странице обзора акций END
