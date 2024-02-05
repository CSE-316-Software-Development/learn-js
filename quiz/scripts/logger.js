// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {
    logMsg: function (){
        console.log(this.errMsg)
    }
}

const obj1 = {
    errMsg: "Obj1"
}

logger.logMsg.call(obj1)