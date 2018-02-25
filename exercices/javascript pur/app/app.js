function transform() {
    var theText = document.getElementById('texts').value;
    var newText = "";
    for (var i = 0; i < theText.length; i++) {
        if (theText[i] == theText[i].toUpperCase()) {
            newText = newText + ' ';

        }
        newText = newText + theText[i];

    }
   
    
    
    document.getElementById('upp').innerHTML = newText;

}

document.addEventListener('keyup', transform);

var str = 'this is my car';
document.getElementById('out').innerHTML = str.endsWith('car');
function battle(x, y) {
    if (x.length == y.length && x == x.toUpperCase() && y == y.toUpperCase() && x > y) {
        return x.valueOf();

    }
    else if (x.length == y.length && x == x.toUpperCase() && y == y.toUpperCase() && y > x) {
        return y.valueOf();

    }
}