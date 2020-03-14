'use strict'

// define constructor

var stores =[];
var hours = 14

// new code added and replaced var's
function StoreCreator (location, minCust, maxCust, avgCookies, hoursOpen) {
    this.location = location;
    this.minCust = minCust; 
    this.maxCust = maxCust; 
    this.avgCookies = avgCookies;
    var time = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',];
    this.time = time; 
    this.hoursOpen = hoursOpen; 
    this.sales = this.random();
    console.log (this.sales);
    this.cookieSoldHr = this.sales[1];
    stores.push(this);
    }

    
StoreCreator.prototype.random = function() {
        var bonus = []
        for (var i =0; i < this.hoursOpen; i++) {
            var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
            var cphr= Math.floor(total * this.avgCookies);
            var totalCookie1= [total, cphr];
            console.log (totalCookie1);
            bonus.push(totalCookie1);
           
        };
        return bonus;
    };
   
    var seattle = new StoreCreator('seattle', 23, 65, 6.3, 14);
    var tokyo = new StoreCreator('tokyo', 3, 24, 1.2, 14);
    var dubai = new StoreCreator('dubai', 11, 38, 3.7, 14);
    var paris = new StoreCreator('paris', 20, 38, 2.3, 14);
    var lima = new StoreCreator('lima', 2, 16, 4.6, 14);
    console.log (stores);

//table beginning
var tableEl = document.getElementById('table');

StoreCreator.prototype.writeRow = function () {
    var tableEl = document.getElementById('table');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.location;
    row.appendChild(cell);
    tableEl.appendChild(row);

for (var i = 0; i < this.cookieSoldHr.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.cookieSoldHr[i];
    row.appendChild(cell);
}

cell = document.createElement('td');
cell.textContent = this.totalCookie1;
row.appendChild(cell);
}

function writeFooterRow() {
    var dailySum = 0;
    var tableEl = document.getElementById('table');
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = 'Totals';
    row.appendChild(cell);

    for (var hour = 0; hour, hours; hour++) {
        var hourlySum = 0;
        cell = document.createElement('td');
        for (var store = 0; store < stores.length; store++) {
        hourlySum = hourlySum + stores[store].cookieSoldHr[hour];
    }
    cell.textContent = hourlySum;
    row.appendChild(cell);

    dailySum += hourlySum;
}

cell = document.createElement('td');
cell.textContent = dailySum;
row.appendChild(cell);
console.log(hourlySum);
tableEl.appendChild(row);
console.log(dailySum);
}

function createRow (object) {
    var tableEl = document.getElementById('table');    
    var row = document.createElement('tr');
    var cell = document.createElement('td');
cell.textContent = object.location;
row.appendChild(cell);
tableEl.appendChild(row);
}

createRow(seattle);
createRow(tokyo);
createRow(dubai);
createRow(paris);
createRow(lima);
