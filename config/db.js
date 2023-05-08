const mongoose = require('mongoose')
const { MONGO_URI } = require('./env')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (error) {
    console.error(`Error1: ${error.message}`)
    // process.exit(1)
   }
}

module.exports = connectDB
