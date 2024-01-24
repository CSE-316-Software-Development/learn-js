function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName;
}

// f here is not a function but a closure
const f = makeFunc();
f();