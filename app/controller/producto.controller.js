const model = require('../models/producto')

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
    res.send({
        docs
    });        
    console.log(docs)
    })

}

exports.insertData = (req, res) => {
    const data = req.body
    res.send({ data })

}