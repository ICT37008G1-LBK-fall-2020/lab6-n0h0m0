function removeChildren(elem){

    var menu = document.getElementById(elem);

    while (menu.hasChildNodes()) {  
        menu.removeChild(menu.firstChild);
    }

}

removeChildren('container');