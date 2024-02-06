function setColor(set) {
        let changeColor = set;
        return () => { // added (KS), need to return a closure! could do either return () => OR return fucntion() 
            if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    }
        
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}


// error: the function setColor is not actually returning anything!
// fix: need the function to execute when the click happens. To do this, we need to create a nested function, aka a closure!!
// added line 3 to add the arrow func