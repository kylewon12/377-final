//1:17:54


async function createCustomer() {
    console.log("creating")
    await fetch(`/review`, {
        method: 'POST',
        body: JSON.stringify({
            firstName: `${document.getElementById('name').value}`,
            lastName:`${document.getElementById('website').value}`,
            state: `${document.getElementById('review').value}`,
        }),
        headers: {
            'content-type': 'application/json',
        },
    }).then((result) => result.json());
    console.log(name,website,review)
    await loadCustomerData();
}

async function loadCustomerData() {
  await fetch('/reviews')
    .then((result) => result.json())
    .then((resultJson) => {
        console.log(resultJson);
        const table = document.createElement('table');
        table.setAttribute('id', 'customerInfo')
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
        const preExistingTable = document.getElementById('customerInfo')
        if (preExistingTable){
            preExistingTable.remove();
        }
        document.getElementById('review_container').appendChild(table);
    });
}

window.onload = function () {
    loadCustomerData();
      btc_chart();
    get_fact();
}

const ctx = document.getElementById("myChart");


function get_fact(){
  fetch("https://api.api-ninjas.com/v1/factoftheday",{
  headers:{"X-Api-Key":"2CQZAut1SjbE4U8fzK1oUg==bKFGtWkjvi5KUHPL"}})
          .then((fact) => fact.json())
          .then((fact_json) => {
            document.getElementById("fun_fact").innerHTML = fact_json[0].fact
          });
        }


function btc_chart() {
  return fetch(
    `https://api.massive.com/v2/aggs/ticker/BTC/range/1/month/2024-01-01/2024-12-31?adjusted=true&sort=asc&limit=120&apiKey=AJ30e7KkSwEKqdlw3eHzYQaUBAs98qjK`
  )
    .then((result) => result.json())
    .then((resultJson) => {
      console.log(resultJson);
     let x_values = [];
     let  y_values = [];
      mine = new Chart(ctx, {
        type: "line",
        data: {
          labels: x_values,
          datasets: [
            {
              label: "Closing price",
              data: y_values,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      // Getting year/month/day data and then getting it ready to add to HTML
      for (let i = 0; i < resultJson.results.length; i++) {
        let mil = resultJson.results[i]["t"];
        let date = new Date(mil);
        let opts = { year: "numeric", month: "numeric", day: "numeric" };
        let new_date = new Intl.DateTimeFormat("en-US", opts).format(date);
        addData(mine, new_date, resultJson.results[i]["c"]);
      }
    });
}

// Function to add labels to chart
function addData(chart, label, newData) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(newData);
  });
  chart.update();
}


function pw_gen(){
  fetch("https://api.api-ninjas.com/v1/passwordgenerator?length=16",{
  headers:{"X-Api-Key":"2CQZAut1SjbE4U8fzK1oUg==bKFGtWkjvi5KUHPL"}})
          .then((pw) => pw.json())
          .then((pw_json) => {
            document.getElementById("pw").innerHTML = pw_json.random_password;
          });
}

function check_link() {
  let link = document.getElementById("enter_link").value;
  alert("firing")
  alert(link)
  fetch("https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDNrEv137PXLrhbsv9ZzRAz2ab5HYfudQ8", {
    method: "POST",
    body: JSON.stringify({
    "client": {
      "clientId":      "yourcompanyname",
      "clientVersion": "1.5.2"
    },
    "threatInfo": {
      "threatTypes":      ["MALWARE", "SOCIAL_ENGINEERING"],
      "platformTypes":    ["WINDOWS"],
      "threatEntryTypes": ["URL"],
      "threatEntries": [
        {"url": link},
      ]
    }
  }),
  headers: {
    "Content-type": "application/json"
  }
  })
  .then((response) => response.json())
  .then((json) => {if (json.matches){
    document.getElementById("threats_found").innerHTML = "Threats:";
    json.matches.forEach(i => {
      console.log(i.threatType)
      document.getElementById("threats_found").innerHTML += i.threatType + " ";
    })
  } else {
    console.log("No threats found")
    document.getElementById("threats_found").innerHTML = "No threats found"
  }})
}
