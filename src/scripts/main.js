'use strict';

const headers = document.querySelectorAll('thead>tr>th');

for (let i = 0; i < headers.length; i++) {
  const th = headers[i];

  th.addEventListener('click', () => {
    sortTable(i);
  });
}

function sortTable(ind) {
  const table = document.querySelector('table');

  const rows = [...table.querySelectorAll('tbody>tr')];

  Array.from(rows).sort(function(rowA, rowB) {
    const cellA = rowA.cells[ind].innerText;
    const cellB = rowB.cells[ind].innerText;

    return cellA.localeCompare(cellB);
  });

  table.querySelector('tbody').append(...rows);
}
