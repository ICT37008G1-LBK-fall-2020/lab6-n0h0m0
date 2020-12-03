
var bodyDivs = document.body.getElementsByTagName("div");

var question = prompt("შეიყავნეთ სტუდენტის აიდი: ");

bodyDivs[question].getAttribute("data-student-id");

for(var i = 0 ; i < bodyDivs.length ; i++){
    if(bodyDivs[i].getAttribute("data-student-id") === question){
        bodyDivs[i].style.background = 'green';
    }
}

