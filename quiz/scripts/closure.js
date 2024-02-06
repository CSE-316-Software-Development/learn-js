function setColor(set) {
    return function() {
        let changeColor = set;
        if (changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    };
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
    toggle = !toggle; // Toggle the value of toggle for the next click
};
