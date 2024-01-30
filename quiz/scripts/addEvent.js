window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction('Moused over!')); // now these functions take input parameters!
    x.addEventListener('click', mySecondFunction('Clicked!'));
    x.addEventListener('mouseout', myThirdFunction('Moused out!'));
}

function myFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function mySecondFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

function myThirdFunction(msg) {
    return () => document.getElementById('demo').textContent = msg;
}

// why doesnt this work as expected? What changed now that the functions in EventListeners take parameters?
// maybe that the functions to be handled don't return anything? 
// the functions need to return CLOSURES! 
// How do we do this? Convert the function into arrow function at line 3
// OR return closures below in the individual functions! (done KS)