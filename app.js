'use strict';


var storeHours = ['','6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

var allStores = [];

function MakeLocation(
  name,
  minCustomers,
  maxCustomers,
  avgCookies
) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customerPerHr = [];
  this.cookiesSoldPerHr = [];
  this.cookieTotal = 0;
  allStores.push(this);
}

function makeStore() {
  new MakeLocation("First and Pike", 23, 65, 6.3);
  new MakeLocation("SeaTac Airport", 3, 24, 1.2);
  new MakeLocation("Seattle Center", 11, 38, 3.7);
  new MakeLocation("Capitol Hill", 20, 38, 2.3);
  new MakeLocation("Alki", 2, 16, 4.6);
}

makeStore();

function makeHeaderRows() {
  var salesChart = document.getElementById("salesChart");
  var trElement = document.createElement("tr");
  var thElement = document.createElement("th");
  trElement.appendChild(thElement);
  for(var b = 0; b < storeHours.length; b++) {
    thElement = document.createElement("th");
    thElement.textContent = storeHours[b];
    trElement.appendChild(thElement);
  }
  salesChart.appendChild(trElement);
  var totalEntry = document.createElement("th");
  totalEntry.textContent = 'Daily Location Totals';
  trElement.appendChild(totalEntry);
}

makeHeaderRows();