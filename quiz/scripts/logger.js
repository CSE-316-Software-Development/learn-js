// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {

    logMsg: function () {
        if(this.errMsg) {
            console.log(this.errMsg);
        }
    }
};

const obj = {
    errMsg : 'Error in logging'
}

logger.logMsg.call(obj);