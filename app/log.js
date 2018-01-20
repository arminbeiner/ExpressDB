'use strict'

let log = require('simple-node-logger')

export default class Logger {

    initiateSimpleFileLogger(filelocation){
        this.filelocation = filelocation
        log.createSimpleFileLogger(filelocation)
    }

    writeinfo(text){
        this.text = text;

        log.info(text)
    }

    writeError(text, stacktrace, errormessage) {
        this.text = text;
        this.stacktrace = stacktrace;
        this. errormessage = errormessage;

        log.error(text, stacktrace, errormessage)
    }
}