'use strict';

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function resetDivs(){
  var dayBoxes = document.getElementsByClassName('dayBox');
  for (var i = 0; i < dayBoxes.length; i++){
    dayBoxes[i].setAttribute('style', 'background-color: white');
  }
}

function Tutor(fName, lName, subjects, availability, nights) {
  var self = this;
  this.fName = fName;
  this.lName = lName;
  this.subjects = subjects;
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
    var subjectsInfo = document.createElement('p');
    subjectsInfo.innerText = self.subjects.toString();
    myDiv.addEventListener('click', self.renderTimes);
  };

  // this.renderTutors();

}
var allTutors = [ new Tutor('Jerry', 'Beal', ['python', 'html/css'], [0, 1, 0, 1, 0, 1, 0], true),
              new Tutor('Michael', 'Jensen', ['javascript', 'html/css'], [0, 0, 1, 1, 1, 0, 0], true),
              new Tutor('Howard', 'Atley', ['java'], [1, 0, 1, 1, 0, 1, 1], false),
              new Tutor('Mary', 'Contrary', ['iOS', 'javascript'], [0, 1, 0, 0, 0, 1, 1], false),
              new Tutor('Ben', 'Johnson', ['javascript'], [0, 1, 1, 0, 0, 0, 0], true),
              new Tutor('Sarah', 'Carter', ['javascript', 'html/css]'], [1, 1, 0, 1, 0, 1, 1], false),
              new Tutor('James', 'Williums', ['python', 'javascript', 'iOS'], [1, 1, 1, 1, 0, 0, 0], false),
              new Tutor('Frazier', 'Mork', ['python', 'javascript', 'iOS', 'java', 'html/css'], [1, 1, 1, 1, 1, 1, 1], true),
              new Tutor('Brandon', 'Son', ['html/css'], [1,0,0,0,0,0,1],false)
            ];
