'use strict';


var storeHours = ['','6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

var allStores = [];

var totalCookiesPerHr = 0;

var netCookies = 0;

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
  this.sumAllCustomers = function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      console.log(this.customerPerHr[i]);
    }
  };
  this.randCookies = function() {
    for(var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHr.push(
        Math.round(this.avgCookies * this.customerPerHr[j])
      );
      console.log(this.cookiesSoldPerHr[j]);
    }
  };
  this.sumAllCustomers();
  this.randCookies();
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
  for(var c = 0; c < storeHours.length; c++) {
    thElement = document.createElement("th");
    thElement.textContent = storeHours[c];
    trElement.appendChild(thElement);
  }
  salesChart.appendChild(trElement);
  var totalEntry = document.createElement("th");
  totalEntry.textContent = 'Daily Location Totals';
  trElement.appendChild(totalEntry);
}

function makeBodyRows() {
  var tbElement = document.createElement("salesChart");
  var trBody = document.createElement("tr");
  trBody.appendChild(tbElement);
  for(var d = 0; d < storeHours.length; d++) {
    tbElement = document.createElement("tbody");
    tbElement.textContent = allStores[d];
    trBody.appendChild(tbElement);
  }
}

makeHeaderRows();
makeBodyRows();