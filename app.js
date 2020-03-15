'use strict'

// define constructor

var stores =[];
var hours = 14
var time = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
]
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
    this.cookieSoldHr = this.sales;
    stores.push(this);
    }

    
StoreCreator.prototype.random = function() {
        var bonus = []
        for (var i =0; i < this.hoursOpen; i++) {
            var total= Math.floor(Math.random() * ( this.maxCust - this.minCust + 1) + this.minCust);
            var cphr= Math.floor(total * this.avgCookies);
            var totalCookie1= [total, cphr];
            console.log (totalCookie1);
            bonus.push(totalCookie1);
           
        };
        return bonus;
    };
   
   

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
    cell.textContent = this.cookieSoldHr[i][1];
    row.appendChild(cell);
}

cell = document.createElement('td');
cell.textContent = this.totalCookie1;
row.appendChild(cell);
}
function writeHeader() {
    var headerEl = document.getElementById('table');
    var headerRow = document.createElement('tr');
    var headerCell = document.createElement('td');
    headerCell.textContent = 'Time';
    headerRow.appendChild(headerCell);
    headerEl.appendChild(headerRow);

for(var i = 0; i < time.length; i++){
    headerCell = document.createElement('td');
    headerCell.textContent = time[i];
    headerRow.appendChild(headerCell);
    }
    headerCell =document.createElement('td');
    headerCell.textContent = 'Daily Totals';
    headerRow.appendChild(headerCell);
    headerEl.appendChild(headerRow);
}

function writeFooter() {
    var dailySum = 0;
    var tableEl = document.getElementById('table');
    var footerRow = document.createElement('tr');
    var footerCell = document.createElement('td');
    footerCell.textContent = 'Totals';
    footerRow.appendChild(footerCell);

    for (var hour = 0; hour < hours; hour++) {
        var hourlySum = 0;
        footerCell = document.createElement('td');
            for (var store = 0; store < stores.length; store++) {
            hourlySum = hourlySum + stores[store].cookieSoldHr[hour];
    }
    dailySum += hourlySum;
    footerCell.textContent = hourlySum;
    footerRow.appendChild(footerCell);

    
}

footerCell = document.createElement('td');
footerCell.textContent = dailySum;
footerRow.appendChild(footerCell);
console.log(hourlySum);
tableEl.appendChild(footerRow);
console.log(dailySum);
}

writeHeader()

var seattle = new StoreCreator('seattle', 23, 65, 6.3, 14);
var tokyo = new StoreCreator('tokyo', 3, 24, 1.2, 14);
var dubai = new StoreCreator('dubai', 11, 38, 3.7, 14);
var paris = new StoreCreator('paris', 20, 38, 2.3, 14);
var lima = new StoreCreator('lima', 2, 16, 4.6, 14);
console.log (stores);

function makeTableBody() {
    for (var i = 0; i < stores.length; i++) {
    stores[i].writeRow()
    }

}

makeTableBody()
writeFooter()


