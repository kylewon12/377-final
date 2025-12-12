//1:17:54
async function createCustomer() {
    await fetch(`/review`, {
        method: 'POST',
        body: JSON.stringify({
            name: `${document.getElementById('name').value}`,
            website:`${document.getElementById('website').value}`,
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
        console.log(resultJson);
        const table = document.createElement('table');
        const tableRow = document.createElement('tr');
        const tableHeadingName = document.createElement('th');
        tableHeadingName.innerHTML = "Name";

        const tableHeadingWebsite = document.createElement('th');
        tableHeadingWebsite.innerHTML = "Website";

        const tableHeadingReview = document.createElement('th');
        tableHeadingReview.innerHTML = "Review";

        tableRow.appendChild(tableHeadingName);
        tableRow.appendChild(tableHeadingWebsite);
        tableRow.appendChild(tableHeadingReview);

        table.appendChild(tableRow);

        // Adding Data to Table
        resultJson.forEach((customer) => {
            const reviewTableRow = document.createElement('tr');
            const reviewTableName = document.createElement('td');
            const reviewTableWebsite = document.createElement('td');
            const reviewTableReview = document.createElement('td');

            reviewTableName.innerHTML = customer.name;
            reviewTableWebsite.innerHTML = customer.website;
            reviewTableReview.innerHTML = customer.review;

            reviewTableRow.appendChild(reviewTableName);
            reviewTableRow.appendChild(reviewTableWebsite);
            reviewTableRow.appendChild(reviewTableReview);

            table.appendChild(reviewTableRow)
        })
        document.body.appendChild(table);
    });
}

window.onload = loadCustomerData;

