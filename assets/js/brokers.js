// Реализация сортировки таблицы брокеров START

// Для индивидуальной настройки таблицы нужно поставить индивидуальные названия
document.addEventListener("DOMContentLoaded", function () {

	//Изменить название здесь
	const tables = document.querySelectorAll(".brokers-table");
  
	if (tables.length === 0) {
	  return;
	}
  
	tables.forEach(function (table) {
	  //Изменить название здесь
	  const headers = table.querySelectorAll(".brokers-table__filter");
  
	  if (headers.length === 0) {
		  return;
	  }
  
	  //Изменить название здесь
	  sortTableByColumnBrokers(table, headers, 1); // Изменить номер колонки для сортировки по умолчанию
  
	  headers.forEach((header, columnIndex) => {
		header.addEventListener("click", function () {
  
		  //Изменить название здесь
		  sortTableByColumnBrokers(table, headers, columnIndex);
		});
	  });
	});
  });
  
  //Изменить название здесь
  function sortTableByColumnBrokers(table, headers, columnIndex) {
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
  
	//Изменить номер колонки для обратной сортировки здесь
	  if (columnIndex === 1) {
		header.classList.add("sorted-reverse");
		if (header.classList.contains("sorted")) {
		  rows.reverse();
		} else {
		  headers.forEach((h) => h.classList.remove("sorted", "sorted-reverse"));
		  header.classList.add("sorted");
		}
	  }
	}
  
	rows.forEach((row) => table.querySelector("tbody").appendChild(row));
  }
  
  function extractCellValue(cell) {
	const firstP = cell.querySelector("p");
	return firstP ? firstP.textContent.trim() : cell.textContent.trim();
  }
  
  // Реализация сортировки таблицы брокеров END
  