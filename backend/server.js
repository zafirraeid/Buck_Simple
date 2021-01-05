const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
//const userRouter = require('./routes/user')
require('dotenv').config()


const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.use('/users', require('./routes/user'))
app.use('/postings', require('./routes/post'))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})

