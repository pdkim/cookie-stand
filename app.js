'use strict';

var pike = {
  var minCustomers = 23,
  var maxCustomers  = 65,
  var avgSales = 6.3,
  var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  var cookiePerHr = [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57, 29],
  hourlyCookies: function() {
    for(var i = 0; i <= storeHours.length; i++) {
      console.log('At ' + storeHours[i] + ', you have ' + cookiePerHr[i] + ' cookies.');
    }
  }
}

pike.hourlyCookies();