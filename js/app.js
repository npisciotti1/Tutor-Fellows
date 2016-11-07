'use strict';

function resetDivs(){
  var dayBoxes = document.getElementsByClassName('dayBox');
  for (var i = 0; i < dayBoxes.length; i++){
    dayBoxes[i].setAttribute('style', 'background-color: white');
  }
}

function Tutor(fName, lName, subject, availability, nights) {
  var self = this;
  this.fName = fName;
  this.lName = lName;
  this.subject = subject;
  this.availability = availability;
  this.nights = nights;

  this.renderTimes = function(event) {
    resetDivs();
    var dayBoxes = document.getElementsByClassName('dayBox');
    for (var i = 0; i < self.availability.length; i++) {
      if (self.availability[i] === 1) {
        dayBoxes[i].setAttribute('style', 'background-color: black');
      }
    }
  };

  this.renderTutors = function() {
    var parent = document.getElementsByClassName('tutorMenu')[0];
    var myDiv = document.createElement('div');
    parent.appendChild(myDiv);
    myDiv.setAttribute('class', 'tutor');
    myDiv.setAttribute('background-image', self.picture);
    var nameInfo = document.createElement('p');
    nameInfo.innerText = self.fName + ' ' + self.lName;
    var subjectInfo = document.createElement('p');
    subjectInfo.innerText = self.subject.toString();
    myDiv.addEventListener('click', self.renderTimes);
  };

  this.renderTutors();

}

// function Student() {

// }
