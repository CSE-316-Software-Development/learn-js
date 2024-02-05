window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction);
    x.addEventListener('click', mySecondFunction);
    x.addEventListener('mouseout', myThirdFunction);
}

function myFunction() {
    document.getElementById('demo').textContent = 'Moused over!';
}

function mySecondFunction() {
    document.getElementById('demo').textContent = 'Clicked!';
}

function myThirdFunction() {
    document.getElementById('demo').textContent = 'Moused out!';
}