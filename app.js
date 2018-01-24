'use strict';

var patStores = {
  storeHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  pike: {
    minCustomers: 23,
    maxCustomers: 65,
    cookiePerHr: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57, 29],
    hourlyCookies: function() {
      for(var i = 0; i < patStores.storeHours.length; i++) {
        console.log('Pat\'s store on Pike sold ' + patStores.pike.cookiePerHr[i] + ' cookies at ' + patStores.storeHours[i] + '.');
      }
    },
    calcAvg: function() {
      function addCookie(a, b) {
        var addition = a + b;
        return addition;
      }
      var totalCookies = 0;
      for(var i = 0; i < patStores.pike.cookiePerHr.length; i++) {
        totalCookies = addCookie(patStores.pike.cookiePerHr[i], totalCookies);
      }
      var avgCookies = totalCookies / patStores.pike.cookiePerHr.length;
      console.log(Math.round(avgCookies));
    }
  }
};

patStores.pike.hourlyCookies();
patStores.pike.calcAvg();