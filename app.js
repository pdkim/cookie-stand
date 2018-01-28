'use strict';


var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

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
  this.sumAllCustomers = function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
      console.log(this.customerPerHr[i]);
    }
  };
  this.randCookies = function() {
    for(var j = 0; j < storeHours.length; j++) {
      var countCookies = (Math.round(this.avgCookies * this.customerPerHr[j]));
      this.cookiesSoldPerHr.push(countCookies);
      this.cookieTotal += countCookies;
      console.log(this.cookiesSoldPerHr[j]);
    }
  };
  this.sumAllCustomers();
  this.randCookies();
  allStores.push(this);

  console.log('**********************', allStores);
}

function makeStore() {
  new MakeLocation("First and Pike", 23, 65, 6.3);
  new MakeLocation("SeaTac Airport", 3, 24, 1.2);
  new MakeLocation("Seattle Center", 11, 38, 3.7);
  new MakeLocation("Capitol Hill", 20, 38, 2.3);
  new MakeLocation("Alki", 2, 16, 4.6);
}

function makeHeaderRows(salesChart) {
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

function makeBodyRows(salesChart) {
  for(var d = 0; d < allStores.length; d++) {
    var trElement = document.createElement("tr");
    var storeName = allStores[d];
    var tdElement = document.createElement("td");
    tdElement.textContent = storeName.name;
    trElement.appendChild(tdElement);

    for(var e = 0; e < storeHours.length; e++) {
      tdElement = document.createElement("td");
      let cookPerHour  = storeName.cookiesSoldPerHr[e];
      tdElement.textContent = cookPerHour;
      trElement.appendChild(tdElement);
    }
    tdElement = document.createElement("td");
    tdElement.textContent = storeName.cookieTotal;
    trElement.appendChild(tdElement);
    salesChart.appendChild(trElement);
  }
}

function makeTable() {
  var salesChart = document.getElementById("salesChart");
  makeHeaderRows(salesChart);
  makeBodyRows(salesChart);
}

makeStore();
makeTable();