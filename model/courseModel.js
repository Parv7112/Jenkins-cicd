const mongoose = require('mongoose')
const { Schema } = mongoose;

const CourseSchema = new Schema({
    name: {
        type : String,
    },
    price: {
        type : Number,
    },
    description : {
        type : String,
    }
})

const CourseModel = mongoose.model('course', CourseSchema)

module.exports = CourseModel