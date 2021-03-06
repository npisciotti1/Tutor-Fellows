'use strict';

var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var allTutors = [];
var currentTutors = [];

function resetDivs(){
  var dayBoxes = document.getElementsByClassName('day_box');
  for (var i = 0; i < dayBoxes.length; i++){
    dayBoxes[i].setAttribute('style', 'background-image: ' + 'url(days-of-week/' + daysOfWeek[i] + '.png)');
  }
}

function chooseTutor(event){
  var submit = document.createElement('button');
  var welcome = document.getElementById('welcome');
  submit.setAttribute('class', 'button');
  submit.innerText = 'Choose Tutor!';
  if(document.getElementsByClassName('button').length < 1) {
    welcome.appendChild(submit);
  }
}

function welcome(){
  var userName = 'Guest';
  var section = document.getElementById('welcome');
  var h2 = document.createElement('h2');
  var p = document.createElement('p');
  if (localStorage['currentUser']){
    var user = JSON.parse(localStorage['currentUser']);
    if (user.fName.length > 0) {
      var userName = user.fName;
    }
  }
  h2.innerText = 'Meet Your Tutors!';
  p.innerText = 'Hello and welcome to Tutor-Fellows, ' + userName + '! To use our simple application, select from below any of the tutors whom you feel would suit your inquiry. Upon being selected, the display of each tutor\'s availability will be shown in a weekly format. If the icon representing a certain day of the week is lit-up, this indicates that the tutor selected is available during that day. Upon selecting a tutor that you\'d like to contact, choose them by clicking, then submit your email to them by clicking, "Choose Tutor!" Go ahead and see if you can find a match!';
  section.appendChild(h2);
  section.appendChild(p);
}
welcome();

function Tutor(fName, lName, subjects, availability, nights) {
  var self = this;
  this.picture = 'tutor-images/' + fName.toLowerCase() + '.jpg';
  this.fName = fName;
  this.lName = lName;
  this.subjects = subjects;
  this.availability = availability;
  this.nights = nights;
  this.isDisplayed = false;

  this.renderTimes = function(event) {
    resetDivs();
    var dayBoxes = document.getElementsByClassName('day_box');
    for (var i = 0; i < self.availability.length; i++) {
      if (self.availability[i] === 1){
        self.isDisplayed = true;
        dayBoxes[i].setAttribute('style', 'background-image: url(days-of-week/' + daysOfWeek[i] + 'Displayed.png)');
      }
    }
  };

  this.renderTutor = function() {
    var parent = document.getElementsByClassName('tutor_menu')[0];
    var myDiv = document.createElement('div');
    parent.appendChild(myDiv);
    myDiv.setAttribute('class', 'tutor');
    myDiv.setAttribute('style' , 'background-image: url(' + self.picture + ')');
    var nameInfo = document.createElement('p');
    nameInfo.setAttribute('class', 'tutor_name');
    nameInfo.innerText = 'Name: ' + self.fName + ' ' + self.lName;
    myDiv.appendChild(nameInfo);
    var subjectsInfo = document.createElement('p');
    subjectsInfo.setAttribute('class', 'tutor_name');
    subjectsInfo.innerText = 'Subjects: ' + self.subjects.toString();
    myDiv.appendChild(subjectsInfo);
    myDiv.addEventListener('click', self.renderTimes);
    myDiv.addEventListener('click', chooseTutor);
  };
  allTutors.push(this);
}
new Tutor('Jerry', 'Beal', ['python', 'html/css'], [0, 1, 0, 1, 0, 1, 0], true);
new Tutor('Michael', 'Jensen', ['javascript', 'html/css'], [0, 0, 1, 1, 1, 0, 0], true);
new Tutor('Howard', 'Atley', ['java'], [1, 0, 1, 1, 0, 1, 1], false);
new Tutor('Mary', 'Contrary', ['iOS', 'javascript'], [0, 1, 0, 0, 0, 1, 1], false);
new Tutor('Ben', 'Johnson', ['javascript'], [0, 1, 1, 0, 0, 0, 0], true);
new Tutor('Sarah', 'Carter', ['javascript', 'html/css'], [1, 1, 0, 1, 0, 1, 1], false);
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
