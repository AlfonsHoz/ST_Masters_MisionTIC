const model = require('../models/producto')

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
    res.send({
        
    })
    })

}