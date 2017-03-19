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
    var tableBody = document.getElementsByTagName('tbody')[0];
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
  table.appendChild(tableBody);
  for (var i = 0; i < storeHourArray.length; i++){
    var th = document.createElement('th');
    tableRow.appendChild(th);
    console.log('works too');
    th.innerText = storeHourArray[i];
  }
}
createTable();

function storesHourlyTotal(){
  var totalRow = document.createElement('tr');
  var tdTotal = document.createElement('td');
  tdTotal.innerText = 'Total per Hour';
  totalRow.appendChild(tdTotal);
  console.log('new total row works');
  var table = document.getElementsByTagName('table')[0];
  var tableFoot = document.createElement('tfoot');
  for (var h = 0; h < storeHourArray.length - 1; h++){
    var hourlyTotal = 0;
    for (var c = 0; c < allStores.length; c++){
      hourlyTotal += allStores[c].cookieTotal[h];
      console.log('new for loop works');
    }
    var tdTotal = document.createElement('td');
    tdTotal.innerText = hourlyTotal;
    totalRow.appendChild(tdTotal);
  }
  tableFoot.appendChild(totalRow);
  table.appendChild(tableFoot);
}
var allStores = [];
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
allStores.push(pikeStore);
allStores.push(seaTacStore);
allStores.push(seattleCenterStore);
allStores.push(capitolHillStore);
allStores.push(alkiStore);

storesHourlyTotal();

var form = document.getElementById('New-Store');
function alertTheUser(event){
  event.preventDefault();
  var theForm = event.target;
  var storeName = theForm.elements['storeName'].value;
  var maxcustomer = Math.floor(theForm.elements['maxcustomer'].value);
  var mincustomer = Math.floor(theForm.elements['mincustomer'].value);
  var avgCookieHour = theForm.elements['avgCookieHour'].value;
  if(maxcustomer < mincustomer){
    console.log('incorrect amount enter');
    alert('You put the maximum sales is less than minimum sales');
  } else {
    var userStore = new cookiesStore(storeName, maxcustomer, mincustomer, avgCookieHour);
    userStore.listItem();
    allStores.push(userStore);
    var table = document.getElementsByTagName('table')[0];
    var tableFoot = document.getElementsByTagName('tfoot')[0];
    table.removeChild(tableFoot);
    storesHourlyTotal();
  }
  form.reset();
};
form.addEventListener('submit', alertTheUser);
console.log('last line works');
