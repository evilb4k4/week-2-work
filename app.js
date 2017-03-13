'use strict';
var storeHourArray = ['6am','7am']


var pikeAndFirst = {
  mincustomer: 23,
  maxcustomer: 65,
  avgCookieHour: 6.3,
  getRandomNum: function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  },
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
