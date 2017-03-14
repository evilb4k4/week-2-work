'use strict';
var pikeAndFirst = {
  mincustomer: 23,
  maxcustomer: 65,
  avgCookieHour: 6.3,
  cookieTotal: [],
  total: 0,
  getRandomCustomer: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
  cookiePerHour: function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  },
  fillTotal: function(){
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      this.total += thisHour;
      this.cookieTotal[i] = thisHour;
    }
  }
  var unOrderList = document.getElementbytagName('body')[0];
  var hourlySales = document.createElement('ul');
  hourlySales.innerText = 'Sales per hours';
  var storeHourArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    // Create the list element:
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }
};
var seaTac = {
  mincustomer: 3,
  maxcustomer: 24,
  avgCookieHour: 1.2,
};
var seattleCenter = {
  mincustomer: 11,
  maxcustomer: 38,
  avgCookieHour: 3.7,
};
var capitolHill = {
  mincustomer: 20,
  maxcustomer: 38,
  avgCookieHour: 2.3,
};
var alkiStore = {
  mincustomer: 2,
  maxcustomer: 16,
  avgCookieHour: 4.6,
};
