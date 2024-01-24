window.onload = function() {
    document.getElementById('myInp').onkeyup = enter;
    document.getElementById('myBtn').onclick = fillMsg;
}

function enter(event) {
    if(event.key === 'Enter') {
        document.getElementById('myBtn').click();
    }
}

function fillMsg() {
    document.getElementById('msg').textContent = 'Button Clicked!'
}
