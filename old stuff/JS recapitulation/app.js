// js togge function;
var togg = document.getElementById('secBtn');
var count = 0;
var paragraf = document.getElementById('para');

function counting() {
    count = count + 1;
    if (count % 2) { paragraf.style.display = 'none' } else if (count % 3 || count % 5 || count % 7 || count % 11) { paragraf.style.display = 'block' }
}
togg.addEventListener('click', counting);