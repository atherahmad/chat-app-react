
/** 
* Handler to catch 'async' operation errors.
* Reduces writing 'try-catch' all the time.
*/
// controller is containing the passed function to his middleware

export const catchErrors = controller => async (req, res, next) => {
    try{
        await controller(req, res)
    } catch(error){
        return next(error)
    }
}

/**
 * Show useful information to client in development.    
  */
 
export const errorHandler = (err, req, res, next) => {

    console.log("lallo", err.message)


    const status = err.status || 500;
    const error = {
        status,
        message: err.message
    }
     res.status(status).json(error)     
}