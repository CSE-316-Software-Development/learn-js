// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    if (this && this.errMsg) {
        console.error(this.errMsg);
    } else {
        console.log("No error message found.");
    }
}


const objectWithErrorMessage = {
    errMsg: "This is an error message."
};

const objectWithoutErrorMessage = {
    someData: "No error message here."
};

logMsg.call(objectWithErrorMessage);     // Logs the error message
logMsg.call(objectWithoutErrorMessage);