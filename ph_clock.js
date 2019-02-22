"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Justin Aybar
   Date: 2.21.19 

   Filename: ph_clock.js     

*/

var minsLeft = 0;
var secsLeft = 15;
var clockID = setInterval("countDown()", 1000);
var timeLeft = minsLeft * 60 + secsLeft;

function countDown() {
   minsLeft = Math.floor(timeLeft / 60);
   secsLeft = timeLeft - minsLeft * 60;
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   checkTimer();
   timeLeft--;
}

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}