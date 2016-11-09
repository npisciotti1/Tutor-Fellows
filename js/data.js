'use strict';

var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var allTutors = [];

function resetDivs(){
  var dayBoxes = document.getElementsByClassName('dayBox');
  for (var i = 0; i < dayBoxes.length; i++){
    dayBoxes[i].setAttribute('style', 'background-image: ' + 'url(days-of-week/' + daysOfWeek[i] + '.png)');
  }
}

function Tutor(fName, lName, subjects, availability, nights) {
  var self = this;
  this.fName = fName;
  this.lName = lName;
  this.subjects = subjects;
  this.availability = availability;
  this.nights = nights;
  this.isDisplayed = false;

  this.renderTimes = function(event) {
    resetDivs();
    var dayBoxes = document.getElementsByClassName('dayBox');
    for (var i = 0; i < self.availability.length; i++) {
      if (self.availability[i] === 1){
        self.isDisplayed = true;
        dayBoxes[i].setAttribute('style', 'background-image: url(days-of-week/' + daysOfWeek[i] + 'Displayed.png)');
      }
    }
  };

  this.renderTutor = function() {
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
  allTutors.push(this);
}
new Tutor('Jerry', 'Beal', ['python', 'html/css'], [0, 1, 0, 1, 0, 1, 0], true);
new Tutor('Michael', 'Jensen', ['javascript', 'html/css'], [0, 0, 1, 1, 1, 0, 0], true);
new Tutor('Howard', 'Atley', ['java'], [1, 0, 1, 1, 0, 1, 1], false);
new Tutor('Mary', 'Contrary', ['iOS', 'javascript'], [0, 1, 0, 0, 0, 1, 1], false);
new Tutor('Ben', 'Johnson', ['javascript'], [0, 1, 1, 0, 0, 0, 0], true);
new Tutor('Sarah', 'Carter', ['javascript', 'html/css]'], [1, 1, 0, 1, 0, 1, 1], false);
new Tutor('James', 'Williums', ['python', 'javascript', 'iOS'], [1, 1, 1, 1, 0, 0, 0], false);
new Tutor('Frazier', 'Mork', ['python', 'javascript', 'iOS', 'java', 'html/css'], [1, 1, 1, 1, 1, 1, 1], true);
new Tutor('Brandon', 'Son', ['html/css'], [1,0,0,0,0,0,1], false);
new Tutor('Tyler', 'Mckenna', ['java', 'python'], [0,0,0,1,1,1,0], true);
new Tutor('Kelly', 'Brandwick', ['javascript', 'html/css', 'java'], [0,1,1,0,0,0,1], false);
new Tutor('Rosalina', 'Martinez', ['python', 'html/css'], [0,1,1,1,1,1,0], true);
new Tutor('Jessica', 'Bianchi', ['java', 'html/css', 'iOS'], [1,0,0,0,0,0,1], true);
new Tutor('Amiri', 'Arakida', ['java', 'iOS'], [0,0,1,0,1,1,0], false);
new Tutor('Meera', 'Chadha', ['javascript', 'html/css'], [0,1,1,1,0,0,0], true);
new Tutor('Alexandra', 'Moreau', ['iOS', 'java'], [1,0,0,0,0,1,1], false);
new Tutor('David', 'Granger', ['python', 'html/css'], [0,0,0,1,0,1,1], true);
new Tutor('Kate', 'Sanders', ['javascript', 'html/css'], [0,1,1,0,1,0,0], false);
new Tutor('Gianna', 'Dimarzio', ['iOS', 'html/css'], [0,1,1,1,0,1,0], false);
new Tutor('Danielle', 'Coulter', ['javascript', 'java', 'html/css'], [1,0,1,1,0,0,1], true);

var currentTutors = [];
function checkForUser(){
  if(localStorage['currentUser']){
    var user = JSON.parse(localStorage['currentUser']);
    var userSubjects = user.subjects;
    for(var i = 0; i < userSubjects.length; i++){
      for(var j = 0; j < allTutors.length; j++){
        if(allTutors[j].subjects.includes(userSubjects[i].toLowerCase()) && !currentTutors.includes(allTutors[j])){
          currentTutors.push(allTutors[j]);
        }
      }
    }
  }
}
checkForUser();

function displayTutors() {
  if (currentTutors.length > 0) {
    for (var i = 0; i < currentTutors.length; i++) {
      currentTutors[i].renderTutor();
    }
  } else {
    for (var i = 0; i < allTutors.length; i++) {
      allTutors[i].renderTutor();
    }
  }
}
displayTutors();
