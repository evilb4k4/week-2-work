'use strict';
var storeHourArray = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
var storeName = ['1st and Pike','SeaTac','Seattle Center','Capitol Hill','Alki'];
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
    var table = document.getElementsByTagName('table')[0];
    var tableRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    console.log('tableRow works');
    var newTD = document.createElement('td');
    newTD.innerText = this.name;
    console.log('new td works' + newTD);
    tableRow.appendChild(newTD);
    for (var i = 0; i < this.cookieTotal.length; i++){
      var hourlyTD = document.createElement('td');
      hourlyTD.innerText = this.cookieTotal[i];
      tableRow.appendChild(hourlyTD);
    };
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
  };
}

function createTable(){
  var table = document.createElement('table');
  body.appendChild(table);
  var tablehead = document.createElement('thead');
  table.appendChild(tablehead);
  console.log('createTable function works');
  var tableRow = document.createElement('tr');
  tablehead.appendChild(tableRow);
  var tableBody = document.createElement('tbody');
  for (var i = 0; i < storeHourArray.length; i++){
    var th = document.createElement('th');
    tableRow.appendChild(th);
    console.log('works too');
    th.innerText = storeHourArray[i];
  }
}

createTable();

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
