async function createCustomer() {
  await fetch(`/review`, {
    method: 'POST',
    body: JSON.stringify({
      name: `${document.getElementById('name').value}`,
      website: `${document.getElementById('website').value}`,
      review: `${document.getElementById('review').value}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((result) => result.json());

  await loadCustomerData();
}

async function loadCustomerData() {
  await fetch('/reviews')
    .then((result) => result.json())
    .then((resultJson) => {
      const table = document.createElement('table');
      table.setAttribute('id', 'reviewInfo');
      const tableRow = document.createElement('tr');

      const tableHeadingName = document.createElement('th');
      tableHeadingFirstName.innerHTML = 'Name';

      const tableHeadingWebsite= document.createElement('th');
      tableHeadingLastName.innerHTML = 'website';

      const tableHeadingReview = document.createElement('th');
      tableHeadingState.innerHTML = 'review';

      tableRow.appendChild(tableHeadingName);
      tableRow.appendChild(tableHeadingWebsite);
      tableRow.appendChild(tableHeadingReview);

      table.appendChild(tableRow);

      // Adding Data to Table
      resultJson.forEach((customer) => {
        const customerTableRow = document.createElement('tr');
        const customerTableName = document.createElement('td');
        const customerTableWebsite = document.createElement('td');
        const customerTableReview = document.createElement('td');

        customerTableName.innerHTML = customer['name'];
        customerTableWebsite.innerHTML = customer['website'];
        customerTableReview.innerHTML = customer['review'];

        reviewTableRow.appendChild(customerTableFirstName);
        reviewTableRow.appendChild(customerTableLastName);
        reviewTableRow.appendChild(customerTableState);

        table.appendChild(reviewTableRow);
      });

      const preExistingTable = document.getElementById('reviewInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadCustomerData;