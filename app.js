'use strict'

var seattle = {
    location: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hoursOpen: 14,
    // cust: function() { 
    // return this.minCust + this.maxCust / 2
    // },
    random: function() {
    var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
    var cphr= Math.floor(total * this.avgCookies)
    var totalCookie1= [total, cphr]
    return totalCookie1;
    },
    daily: function() {

    var hourlyCookies= random();
    for (var i =0; i < this.hoursOpen; i++) {
    
    }
   },     
}
console.log (seattle.random());


// var tokyo = {
//     location: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,   
// };


// var dubai = {
//     location: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
// };
    
// var paris = {
//     location: 'paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3,   
// };   

// var lima = {
//     location: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,   
