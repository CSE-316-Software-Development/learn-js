// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.
const message = {
    logMsg: function() {
        if (this.errMsg) {
            console.log(this.errMsg)
        }
    }}

const msg1 = {
    errMsg: "error message"
}

message.logMsg.call(msg1, "error message")