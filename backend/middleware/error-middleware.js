
/** 
* Handler to catch 'async' operation errors.
* Reduces writing 'try-catch' all the time.
*/

export const catchErrors = actions => (req, res, next) => actions(req, res).catch(next)

/**
 * Show useful information to client in development.
  */
 
export const errorHandler = (err, req, res, next) => {

    console.log(err.message)


    err.stack = err.stack || '';
    const status = err.status || 500;
    const error = {
        status,
        message: err.message
    }
    res.status(status)
    res.json(error)    
}