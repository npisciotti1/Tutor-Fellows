'use strict';
var studentSubjects = [];
var currentStudent = {};
var newStudentForm = document.getElementById('newStudentForm');

function Student(fName, lName, email, subjects) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.subjects = subjects;
}
function submitForm(event){
  event.preventDefault();
  currentStudent = {};
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
  var student = new Student(fName, lName, email, studentSubjects);
  currentStudent = student;
  localStorage.setItem('currentUser', JSON.stringify(currentStudent));
}

newStudentForm.addEventListener('submit', submitForm);
