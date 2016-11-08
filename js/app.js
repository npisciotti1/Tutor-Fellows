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

var newStudentForm = document.getElementById('newStudentForm');

function Student(fName, lName, email, subjects) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.subjects = subjects;
}

var studentSubjects = [];

function submitForm(event){
  event.preventDefault();
  var fName = event.target.fNameForm.value;
  var lName = event.target.lNameForm.value;
  var email = event.target.emailForm.value;
  var checkBoxes = document.getElementsByClassName('checkbox');
  for(var i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked === true){
      studentSubjects.push(checkBoxes[i].name);
      console.log(checkBoxes[i].name);
    }
  }
}

newStudentForm.addEventListener('submit', submitForm);
