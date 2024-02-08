// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
// logMsg.call(o1);
// logMsg.call(o2);

const logger = {
    logMsg: function() {
        if (this.errMsg) {
            console.log('Error Message from : ${this.errMsg}');
        }
    }
}

const obj1 = {
    errMsg: "Error in obj1"
}

const obj2 = {
    errMsg: "Error in obj1"
}

logger.logMsg.call(obj1);
logger.logMsg.call(obj2);