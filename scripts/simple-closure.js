function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName; // a closure
}

const f = makeFunc();
f();