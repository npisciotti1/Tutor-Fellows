'use strict';
var currentTutors = [];
function checkForUser(){
  if(localStorage['currentUser']){
    var user = JSON.parse(localStorage['currentUser']);
    var userSubjects = user.subjects;
    for(var i = 0; i < userSubjects.length; i++){
      for(var j = 0; j < allTutors.length; j++){
        if(allTutors[j].subjects.includes(userSubjects[i]) && !currentTutors.includes(allTutors[j])){
          currentTutors.push(allTutors[j]);
        }
      }
    }
  }
}
checkForUser();
