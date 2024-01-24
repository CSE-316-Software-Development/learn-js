// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log(`Error: ${this.errMsg}`);
}
const obj1 = {
    errMsg: "error has occured"
}
logMsg.call(obj1);