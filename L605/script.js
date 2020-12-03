

var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];

/* testing
    var test = document.createElement('div');
    test.setAttribute('test', 1);
    var loc = document.body;
    loc.append(test);
*/
    var sty = document.getElementById('student-list');
    sty.setAttribute('style' , 'display:flex; flex-direction:column; justify-content:center; min-height:100vh;');

function displayStudentsTable(studentList){

    var loc = document.getElementById('student-list');
    var crtTable = document.createElement('table');
    crtTable.setAttribute('style', 'border: 1px solid black; border-spacing: 0px;');
    crtTable.className = "main";
    loc.append(crtTable);


    for(var i = 0 ; i < students.length ; i++){
    
        var tr = document.createElement('tr');
        tr.className = i ;
        crtTable.append(tr);

        var pos = document.getElementsByClassName(i);

        var td = document.createElement('td');
        td.setAttribute('style', 'border: 1px solid black; border-spacing: 0px; padding: 10px 10px 10px 10px;')
        tr.append(td);
        td.append(studentList[i].FirstName + ' ');
        td = document.createElement('td');
        td.setAttribute('style', 'border: 1px solid black; border-spacing: 0px; padding: 10px 10px 10px 10px;');
        tr.append(td);
        td.append(studentList[i].LastName + ' ');
        td = document.createElement('td');
        td.setAttribute('style', 'border: 1px solid black; border-spacing: 0px; padding: 10px 10px 10px 10px;');
        tr.append(td);
        td.append(studentList[i].PersonalNumber + ' ');
    }
    //write code
}

displayStudentsTable(students);