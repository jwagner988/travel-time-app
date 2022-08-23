const mainController: any = {}


mainController.trip = (req, res, next) => {
    const {start, destination, someOtherData} = req.body

    console.log(start, destination, someOtherData, 'heres the data!')
    //send it back to the database
    //tell the front end whether it worked or not and why
    return next()
}

mainController.getData = (req,res,next) => {
    //get the data from the db!

    res.locals.europeTotal = 100
    res.locals.europeTrain = 50
    res.locals.northAmericaTotal = 150
    res.locals.northAmericaTrain = 8
    next()
}

module.exports = mainController