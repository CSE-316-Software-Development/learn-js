function setColor(set) {
        let changeColor = set;
        return function() {
            if(changeColor) {
                let userColor = document.getElementById('color').value;
                document.getElementById('myPara').style.color = userColor;
            }
        }
}

// if we don't return the closure, the setColor does not get executed, just store the color to the onClick

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
