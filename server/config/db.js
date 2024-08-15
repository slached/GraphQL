const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB Connected".cyan.underline.bold);
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = connect