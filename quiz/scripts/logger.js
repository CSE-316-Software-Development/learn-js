// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logger = {
    logMsg : function () {
        console.log("Error message : " + this.errMsg);
    }
}

function logMsg1() {
    console.log(`Error message : ${this.errMsg}`);
}

const log1 = {
    errMsg: "Error 404, Not Found"
}

const log2 = {
    errMsg: "Error 403, Unauthorized"
}

logger.logMsg.call(log1);
logMsg1.call(log2);
logMsg1.call(log1);