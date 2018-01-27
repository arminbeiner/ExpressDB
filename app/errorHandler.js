
export function errorHandlingResponse(response, result, err, log) {
    if(err) {
        response.json(err)
        log.error('Error while getting policies',  err.stack, err.message)
    }
    else {
        response.json(result.rows)
        log.info('Loaded policies from database')
    }
}