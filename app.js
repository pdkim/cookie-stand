'use strict';


var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

var allStores = [];

var hourlyCookies = 0;

var cookieTotal = 0;

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
  function sumCustomerPerHr() {
    for(var i = 0; i < storeHours.length; i++) {
      this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
      return sumCustomerPerHr();
    }
  }
  function sumCookiesPerHour() {
    for(var j = 0; j < storeHours.length; j++) {
      this.cookiesPerHr.push(
        Math.round(this.avgCookies * this.customerPerHr[j])
      );
      return sumCookiesPerHour();
    }
  }
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
}

makeHeaderRows();
// var pike = {
//   name: 'First and Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   cookiesPerHr: [],
//   customerPerHr: [],
//   sumCookies: 0,
//   sumCustomerPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
//       console.log(this.customerPerHr[i]);
//     }
//   },
//   sumCookiesPerHour: function() {
//     for(var j = 0; j < storeHours.length; j++) {
//       this.cookiesPerHr.push(
//         Math.round(this.avgCookies * this.customerPerHr[j])
//       );
//       console.log(this.cookiesPerHr[j]);
//     }
//   },
//   display: function() {
//     var fnP = document.getElementById('fnP');
//     var h3Element = document.createElement('h3');
//     h3Element.textContent = this.name;
//     fnP.appendChild(h3Element);
//     this.sumCustomerPerHr();
//     this.sumCookiesPerHour();
//     for(var k = 0; k < storeHours.length; k++) {
//       var location = document.getElementById('pike');
//       var liElement = document.createElement('li');
//       liElement.textContent =
//         storeHours[k] + ': ' + this.cookiesPerHr[k] + ' cookies sold.';
//       console.log(liElement);
//       location.appendChild(liElement);
//     }
//   },
// };

// var airport = {
//   name: 'SeaTac Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   cookiesPerHr: [],
//   customerPerHr: [],
//   sumCookies: 0,
//   sumCustomerPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
//       console.log(this.customerPerHr[i]);
//     }
//   },
//   sumCookiesPerHour: function() {
//     for(var j = 0; j < storeHours.length; j++) {
//       this.cookiesPerHr.push(
//         Math.round(this.avgCookies * this.customerPerHr[j])
//       );
//       console.log(this.cookiesPerHr[j]);
//     }
//   },
//   display: function() {
//     var fnP = document.getElementById('seaAirport');
//     var h3Element = document.createElement('h3');
//     h3Element.textContent = this.name;
//     fnP.appendChild(h3Element);
//     this.sumCustomerPerHr();
//     this.sumCookiesPerHour();
//     for(var k = 0; k < storeHours.length; k++) {
//       var location = document.getElementById('seatac');
//       var liElement = document.createElement('li');
//       liElement.textContent =
//         storeHours[k] + ': ' + this.cookiesPerHr[k] + ' cookies sold.';
//       console.log(liElement);
//       location.appendChild(liElement);
//     }
//   },
// };

// var sCenter = {
//   name: 'Seattle Center',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   cookiesPerHr: [],
//   customerPerHr: [],
//   sumCookies: 0,
//   sumCustomerPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
//       console.log(this.customerPerHr[i]);
//     }
//   },
//   sumCookiesPerHour: function() {
//     for(var j = 0; j < storeHours.length; j++) {
//       this.cookiesPerHr.push(
//         Math.round(this.avgCookies * this.customerPerHr[j])
//       );
//       console.log(this.cookiesPerHr[j]);
//     }
//   },
//   display: function() {
//     var fnP = document.getElementById('seattleCenter');
//     var h3Element = document.createElement('h3');
//     h3Element.textContent = this.name;
//     fnP.appendChild(h3Element);
//     this.sumCustomerPerHr();
//     this.sumCookiesPerHour();
//     for(var k = 0; k < storeHours.length; k++) {
//       var location = document.getElementById('seaCenter');
//       var liElement = document.createElement('li');
//       liElement.textContent =
//         storeHours[k] + ': ' + this.cookiesPerHr[k] + ' cookies sold.';
//       console.log(liElement);
//       location.appendChild(liElement);
//     }
//   },
// };

// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   cookiesPerHr: [],
//   customerPerHr: [],
//   sumCookies: 0,
//   sumCustomerPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
//       console.log(this.customerPerHr[i]);
//     }
//   },
//   sumCookiesPerHour: function() {
//     for(var j = 0; j < storeHours.length; j++) {
//       this.cookiesPerHr.push(
//         Math.round(this.avgCookies * this.customerPerHr[j])
//       );
//       console.log(this.cookiesPerHr[j]);
//     }
//   },
//   display: function() {
//     var fnP = document.getElementById('capHill');
//     var h3Element = document.createElement('h3');
//     h3Element.textContent = this.name;
//     fnP.appendChild(h3Element);
//     this.sumCustomerPerHr();
//     this.sumCookiesPerHour();
//     for(var k = 0; k < storeHours.length; k++) {
//       var location = document.getElementById('capitol');
//       var liElement = document.createElement('li');
//       liElement.textContent =
//         storeHours[k] + ': ' + this.cookiesPerHr[k] + ' cookies sold.';
//       console.log(liElement);
//       location.appendChild(liElement);
//     }
//   },
// };

// var alkiStore = {
//   name: 'Alki',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   cookiesPerHr: [],
//   customerPerHr: [],
//   sumCookies: 0,
//   sumCustomerPerHr: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHr.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
//       console.log(this.customerPerHr[i]);
//     }
//   },
//   sumCookiesPerHour: function() {
//     for(var j = 0; j < storeHours.length; j++) {
//       this.cookiesPerHr.push(
//         Math.round(this.avgCookies * this.customerPerHr[j])
//       );
//       console.log(this.cookiesPerHr[j]);
//     }
//   },
//   display: function() {
//     var fnP = document.getElementById('nameAlki');
//     var h3Element = document.createElement('h3');
//     h3Element.textContent = this.name;
//     fnP.appendChild(h3Element);
//     this.sumCustomerPerHr();
//     this.sumCookiesPerHour();
//     for(var k = 0; k < storeHours.length; k++) {
//       var location = document.getElementById('alki');
//       var liElement = document.createElement('li');
//       liElement.textContent =
//         storeHours[k] + ': ' + this.cookiesPerHr[k] + ' cookies sold.';
//       console.log(liElement);
//       location.appendChild(liElement);
//     }
//   },
// };

// pike.display();
// airport.display();
// sCenter.display();
// capitolHill.display();
// alkiStore.display();