
var students = document.getElementById('student-list');

for(var i = 0 ; i <= i+1 ; i++){

    var inputStudents = prompt('შეიყვანეთ სტუდენტის სახელი: ');

    if(inputStudents.length >= 1){
        var newLi = document.createElement('li');

        newLi.innerHTML = inputStudents;

        students.append(newLi);
    }
    else break;

}