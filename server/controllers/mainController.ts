const mainController: any = {}


mainController.trip = (req, res, next) => {
    const {start, destination, someOtherData} = req.body

    console.log(start, destination, someOtherData, 'heres the data!')
    return next()
}

module.exports = mainController