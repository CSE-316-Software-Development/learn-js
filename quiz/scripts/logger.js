// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(){
    console.log(`Error Message: ${this.errMesg}`)
}
const o1= {
    list:[1,2,3],
    errMesg: "this is an error"

}

logMsg.call(o1)