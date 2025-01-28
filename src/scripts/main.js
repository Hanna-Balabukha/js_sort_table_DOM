'use strict';

const headers = document.querySelectorAll('thead>th');

for (let i = 0; i < headers.length; i++) {
  const th = headers[i];

  th.addEventListener('click', () => {sortTable(i);
  });
}

function sortTable(ind) {
  const table = document.querySelector('table');

  const rows = table.querySelectorAll('tbody>tr');

  rows.sort(function(rowA, rowB) {
    const cellA = rowA.cells[ind].textContent;
    const cellB = rowB.cells[ind].textContent;

    return cellA.localeCompare(cellB);
  })

  rows.forEach(function(row) {
    table.querySelector('tbody').appendChild(row);
  });
}
