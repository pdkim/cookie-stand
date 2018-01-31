'use strict';


var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

var allStores = [];

var totalCookiesPerHr = 0;

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
    for(var a = 0; a < storeHours.length; a++) {
      this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
      console.log(this.customerPerHr[a]);
    }
  };
  this.randCookies = function() {
    for(var b = 0; b < storeHours.length; b++) {
      var countCookies = (Math.round(this.avgCookies * this.customerPerHr[b]));
      this.cookiesSoldPerHr.push(countCookies);
      this.cookieTotal += countCookies;
      console.log(this.cookiesSoldPerHr[b]);
    }
  };
  this.sumAllCustomers();
  this.randCookies();
  allStores.push(this);
}

function makeStore() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}

function makeHeaderRows() {
  var salesChart = document.getElementById('salesChart');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  trElement.appendChild(thElement);
  for(var c = 0; c < storeHours.length; c++) {
    thElement = document.createElement('th');
    thElement.textContent = storeHours[c];
    trElement.appendChild(thElement);
  }
  salesChart.appendChild(trElement);
  var totalEntry = document.createElement('th');
  totalEntry.textContent = 'Daily Location Totals';
  trElement.appendChild(totalEntry);
}

function makeBodyRows() {
  for(var d = 0; d < allStores.length; d++) {
    var salesChart = document.getElementById('salesChart');
    var trElement = document.createElement('tr');
    var storeName = allStores[d];
    var tdElement = document.createElement('td');
    tdElement.textContent = storeName.name;
    trElement.appendChild(tdElement);

    for(var e = 0; e < storeHours.length; e++) {
      tdElement = document.createElement('td');
      var cookPerHour  = storeName.cookiesSoldPerHr[e];
      tdElement.textContent = cookPerHour;
      trElement.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = storeName.cookieTotal;
    trElement.appendChild(tdElement);
    salesChart.appendChild(trElement);
  }
}

// function makeFooterRows() {
//   var salesChart = document.getElementById('salesChart');
//   var trElement = document.createElement('tr');
//   var tdElement = document.createElement('td');
//   tdElement.textContent = 'Total';
//   trElement.appendChild(tdElement);
//   salesChart.appendChild(trElement);
//   //Need to figure out why this is looping forever
//   for(var f = 0; f < storeHours.length; f++) {
//     tdElement = document.createElement('td');
//     for(var g = 0; g < allStores.length; g++) {
//       totalCookiesPerHr += allStores[g].cookiesSoldPerHr[g];
//       tdElement.textContent = totalCookiesPerHr;
//     }
//   }

//   trElement.appendChild(tdElement);
//   salesChart.appendChild(trElement);
//   console.log(makeFooterRows());
// }


makeStore();
makeHeaderRows();
makeBodyRows();
// makeFooterRows();
