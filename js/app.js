'use strict';

// function onClick(event) {
//   var dayBoxes = document.getElementsByClassName('dayBox');
//   for (var i = 0; i < dayBoxes.length; i++) {
//     if (daysOfWeek[i] = 1) {
//       var isAvailable = true;
//       dayBoxes[i] = true;
//     }
//   }
// }

function Tutor(fName, lName, subject, availability, nights) {
  this.fName = fName;
  this.lName = lName;
  this.subject = subject;
  this.availability = availability;
  this.nights = nights;


  this.renderTimes = function(event) {
    var dayBoxes = document.getElementsByClassName('dayBox');
    for (var i = 0; i < this.availability.length; i++) {
      if (this.availability[i] = 1) {
        dayBoxes[i].setAttribute('style', 'background-color: black');
      }
      console.log(event);
    }
  };


  this.renderTutors = function() {
    var parent = document.getElementsByClassName('tutorMenu')[0];
    var myDiv = document.createElement('div');
    parent.appendChild(myDiv);
    myDiv.setAttribute('class', 'tutor');
    myDiv.setAttribute('background-image', this.picture);
    var nameInfo = document.createElement('p');
    nameInfo.innerText = this.fName + ' ' + this.lName;
    var subjectInfo = document.createElement('p');
    subjectInfo.innerText = this.subject.toString();
    myDiv.addEventListener('click', this.renderTimes());
  };

  this.renderTutors();

}

// function Student() {

// }
