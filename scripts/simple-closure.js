function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName;
}

const f = makeFunc();
f();