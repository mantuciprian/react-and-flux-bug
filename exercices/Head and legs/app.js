
  
    
    function animals() {
        var heads =document.getElementById('hed').value;
        var legs = document.getElementById('leg').value;
        parseInt(heads);
        parseInt(legs);
        var prob = (heads) * 4;
        var chickens = (prob - legs) / 2;
        var cows = heads - chickens;
        var result = [chickens, cows];
        if (legs < 0 || heads < 0 || cows < 0 || chickens < 0 || cows != cows.toFixed() || chickens != chickens.toFixed())
        { alert("No solutions") } else if (legs == 0 && heads == 0) { alert( [0, 0]) } else { alert( result) }

    }
    var calculate = document.getElementById('calc');
    calculate.onclick = animals();
