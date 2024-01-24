function setColor(set) {
    let changeColour = set
    return function () {
        if (changeColour) {
            document.getElementById('myPara').style.color =
                document.getElementById('color').value;
        }
    }
    return setColor;
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}

//or
// window.onload = function() {
//     let toggle = true;
//     document.getElementById('btn').onclick = function () {
//         setColor(toggle);
//     };
// }