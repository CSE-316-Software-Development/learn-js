// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

function logMsg() {
    console.log(`Error message: ${this.errMsg}`);
};

const o1 = {
    errMsg: '01'
};

logMsg.call(o1)