
// Реалиазация подсветки отрицательных и положительных цифр доходности в слайдере START

const sliderNums = document.querySelectorAll(".slide-description__container");

sliderNums.forEach((container) => {
  const firstSpan = container.querySelector("span:first-child");

  if (firstSpan.textContent.includes("+")) {
    container.classList.add("income--green");
  } else if (firstSpan.textContent.includes("-")) {
    container.classList.add("income--red");
  }
});

// Реалиазация подсветки отрицательных и положительных цифр доходности в слайдере END


// Реалиазация подсветки отрицательных и положительных цифр доходности в карточке акции START

const stockIncomeNum = document.querySelectorAll(".stock-income__num");

stockIncomeNum.forEach((container) => {
  const firstSpan = container.querySelector("p:first-child");

  if (firstSpan.textContent.includes("+")) {
    container.classList.add("income--green");
  } else if (firstSpan.textContent.includes("-")) {
    container.classList.add("income--red");
  }
});


// Реалиазация подсветки отрицательных и положительных цифр доходности в карточке акции END


// Реалиазация подсветки отрицательных и положительных цифр доходности за день в таблице акции START

const stockTableDayPrice = document.querySelectorAll(".stocks-table-standart__day-price");

stockTableDayPrice.forEach((container) => {
  const firstSpan = container.querySelector("p:first-child");

  if (firstSpan.textContent.includes("+")) {
    container.classList.add("income--green");
  } else if (firstSpan.textContent.includes("-")) {
    container.classList.add("income--red");
  }
});

// Реалиазация подсветки отрицательных и положительных цифр доходности за день в таблице акции END


// Реалиазация подсветки отрицательных и положительных цифр доходности за год в таблице акции START

const stockTableDayYear = document.querySelectorAll(".stocks-table-standart__year-price");

stockTableDayYear.forEach((container) => {
  const firstSpan = container.querySelector("p:first-child");

  if (firstSpan.textContent.includes("+")) {
    container.classList.add("income--green");
  } else if (firstSpan.textContent.includes("-")) {
    container.classList.add("income--red");
  }
});

// Реалиазация подсветки отрицательных и положительных цифр доходности за год в таблице акции END
