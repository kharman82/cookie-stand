'use strict'

// define constructor

var cookies =[];

// new code added and replaced var's
function seattle(minCust, maxCust, avgCookies, time, hoursOpen, cookieArray,cookieSum,) {
    location: 'seattle',
    this.minCust = minCust; 23,
    this.maxCust = maxCust; 65,
    this.avgCookies = avgCookies; 6.3,
    this.time = time; ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',],
    this.hoursOpen = hoursOpen; 14,
    this.cookieArray = cookieArray; [],
    this.cookieSum = cookieSum; 0,
    cookies.push(this);
    }

   seattle.prototype.random = function() {
        for (var i =0; i < this.hoursOpen; i++) {
    var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
    var cphr= Math.floor(total * this.avgCookies)
    var totalCookie1= [total, cphr]
    console.log (totalCookie1);
    this.cookieArray.push(cphr);

        };
    };
    

    seattle.prototype.daily = function() {
        var hourlyCookies= this.random();
            for (var i =0; i < this.hoursOpen; i++) {
                var seattleList= document.getElementById('seattleList');
                var seattleChildEl= document.createElement('li');
                    seattleList.appendChild(seattleChildEl);
                    seattleChildEl.textContent = (this.time[i] + this.cookieArray[i] + ' cookies ');
     
    };
   }; 
    seattle.prototype.dailySum = function() {
       this.random();
       var something =0;
    for (var i =0; i < this.cookieArray.length; i++); {
        something = (this.cookieArray[i] + something);
            console.log(something);
    
    };
   };

var daily = new cookieArray('');
    console.log (seattle.cookieArray);
var dailySum = new dailySum('');
    console.log(seattle.dailySum());


// var tokyo = {
//     location: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,  
//     time: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',],
//     hoursOpen: 14,
//     cookieArray: [],
//     cookieSum: 0, 

// random: function() {
//     for (var i =0; i < this.hoursOpen; i++) {
// var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
// var cphr= Math.floor(total * this.avgCookies)
// var totalCookie1= [total, cphr]
// // console.log (totalCookie1);
// this.cookieArray.push(cphr);

//     }
// },


// daily: function() {

// var hourlyCookies= this.random();
// for (var i =0; i < this.hoursOpen; i++) {
//     var tokyoList= document.getElementById('tokyoList');
//     var tokyoChild= document.createElement('li');
//     tokyoList.appendChild(tokyoChild);
//     tokyoChild.textContent = (this.time[i] + this.cookieArray[i] + ' cookies ');
 
// }
// }, 
// dailySum: function() {
//    this.random();
//    var something =0;
// for (var i =0; i < this.cookieArray.length; i++); {
//     something = (this.cookieArray[i] + something);
// console.log(something);

// };
// }
// }
// tokyo.daily();
// console.log (tokyo.cookieArray);
// tokyo.dailySum();
// console.log(tokyo.dailySum());


// var dubai = {
//     location: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
//     time: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',],
//     hoursOpen: 14,
//     cookieArray: [],
//     cookieSum: 0,

//     random: function() {
//         for (var i =0; i < this.hoursOpen; i++) {
//     var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
//     var cphr= Math.floor(total * this.avgCookies)
//     var totalCookie1= [total, cphr]
//     // console.log (totalCookie1);
//     this.cookieArray.push(cphr);
    
//         }
//     },
    
    
//     daily: function() {
    
//     var hourlyCookies= this.random();
//     for (var i =0; i < this.hoursOpen; i++) {
//         var dubaiList= document.getElementById('dubaiList');
//         var dubaiChild= document.createElement('li');
//         dubaiList.appendChild(dubaiChild);
//         dubaiChild.textContent = (this.time[i] + this.cookieArray[i] + ' cookies ');
     
//     }
//     }, 
//     dailySum: function() {
//        this.random();
//        var something =0;
//     for (var i =0; i < this.cookieArray.length; i++); {
//         something = (this.cookieArray[i] + something);
//     console.log(something);
    
//     };
//     }
//     }

//     dubai.daily();
//     console.log (dubai.cookieArray);
//     dubai.dailySum();
//     console.log(dubai.dailySum());

    
// var paris = {
//     location: 'paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3, 
//     time: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',],
//     hoursOpen: 14,
//     cookieArray: [],
//     cookieSum: 0,

//     random: function() {
//         for (var i =0; i < this.hoursOpen; i++) {
//     var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
//     var cphr= Math.floor(total * this.avgCookies)
//     var totalCookie1= [total, cphr]
//     // console.log (totalCookie1);
//     this.cookieArray.push(cphr);

//         }
//     },
    

//     daily: function() {
   
//     var hourlyCookies= this.random();
//     for (var i =0; i < this.hoursOpen; i++) {
//         var parisList= document.getElementById('parisList');
//         var parisChild= document.createElement('li');
//         parisList.appendChild(parisChild);
//         parisChild.textContent = (this.time[i] + this.cookieArray[i] + ' cookies ');
     
//     }
//    }, 
//    dailySum: function() {
//        this.random();
//        var something =0;
//    for (var i =0; i < this.cookieArray.length; i++); {
//         something = (this.cookieArray[i] + something);
//     console.log(something);
    
//     };
//    }
// }
// paris.daily();
// console.log (paris.cookieArray);
// paris.dailySum();
// console.log(paris.dailySum());  



// var lima = {
//     location: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,   
//     time: ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ',],
//     hoursOpen: 14,
//     cookieArray: [],
//     cookieSum: 0,

//     random: function() {
//         for (var i =0; i < this.hoursOpen; i++) {
//     var total= Math.floor(Math.random() * ( this.maxCust - this.minCust) + this.minCust + 1);
//     var cphr= Math.floor(total * this.avgCookies)
//     var totalCookie1= [total, cphr]
//     // console.log (totalCookie1);
//     this.cookieArray.push(cphr);

//         }
//     },
    

//     daily: function() {
   
//     var hourlyCookies= this.random();
//     for (var i =0; i < this.hoursOpen; i++) {
//         var limaList= document.getElementById('limaList');
//         var limaChild= document.createElement('li');
//         limaList.appendChild(limaChild);
//         limaChild.textContent = (this.time[i] + this.cookieArray[i] + ' cookies ');
     
//     }
//    }, 
//    dailySum: function() {
//        this.random();
//        var something =0;
//    for (var i =0; i < this.cookieArray.length; i++); {
//         something = (this.cookieArray[i] + something);
//     console.log(something);
    
//     };
//    }
// }
// lima.daily();
// console.log (lima.cookieArray);
// lima.dailySum();
// console.log(lima.dailySum());
