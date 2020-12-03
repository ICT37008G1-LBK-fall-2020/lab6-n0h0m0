

function insertAfter(elem,refElem){

    refElem = document.getElementById('container');

    elem = document.createElement('div');

    elem.id = "newElement";

    refElem.insertBefore(elem , refElem.children[2]);

/*
    var elem = document.createElement('div');

    var loc = document.getElementById(refElem);

    elem.id = "newElement";

    loc.append(elem);
*/
}

insertAfter( 'div' , 'container');