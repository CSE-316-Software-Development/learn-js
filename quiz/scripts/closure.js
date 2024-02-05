function setColor(set) {
        let changeColor = set;
        if(changeColor) {
            function ccolor(){let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;}
            
        }
        return ccolor
        
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}
