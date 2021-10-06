const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://user:STMASTERS|@cluster0.afuni.mongodb.net/st_masters?retryWrites=true&w=majority'

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err){
                console.log(err)
            }else {
                console.log('Conexion correcta !!')
            }}

        )
    }
    connect();
}