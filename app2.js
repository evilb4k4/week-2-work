'use strict';
var storeHourArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var body = document.getElementsByTagName('body')[0];
function cookiesStore(name,maxcustomer,mincustomer,avgCookieHour) {
  this.name = name;
  this.maxcustomer = maxcustomer;
  this.mincustomer = mincustomer;
  this.avgCookieHour = avgCookieHour;
  this.cookieTotal = [];
  this.getRandomCustomer = function() {
    return Math.floor(Math.random() * (this.maxcustomer - this.mincustomer + 1)) + this.mincustomer;
  };
  console.log('It works so far.');
  this.cookiePerHour = function(){
    return Math.ceil(this.getRandomCustomer() * this.avgCookieHour);
  };
  console.log('still works');
  this.fillTotal = function(){
    var total = 0;
    this.cookieTotal.length = 15;
    for (var i = 0; i < 15; i++){
      var thisHour = this.cookiePerHour();
      total += thisHour;
      this.cookieTotal[i] = thisHour;
    };
    this.cookieTotal.push(total);
  };
  console.log('still working');
  this.listItem = function(){
    this.fillTotal();
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var hourlySales = document.createElement('ul');
    for (var i = 0; i < storeHourArray.length; i++){
      var newEL = document.createElement('li');
      newEL.innerText = storeHourArray[i] + ': ' + this.cookieTotal[i] + 'cookies';
      hourlySales.appendChild(newEL);
    };
    body.appendChild(hourlySales);
  };
};

var pikeStore = new cookiesStore('1st and Pike',65,23,6.3);
pikeStore.listItem();
var seaTacStore = new cookiesStore('SeaTac',24,3,1.2);
seaTacStore.listItem();
var seattleCenterStore = new cookiesStore('Seattle Center',38,11,3.7);
seattleCenterStore.listItem();
var capitolHillStore = new cookiesStore('Capitol Hill',38,20,2.3);
capitolHillStore.listItem();
var alkiStore = new cookiesStore('Alki',16,2,4.6);
alkiStore.listItem();
