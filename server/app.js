require('dotenv').config();

const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors')
require('colors');

const port = process.env.PORT || 5000;

const schema = require('./schema/schema')

const connect = require('./config/db')
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
})

// middlewares
app.use(cors({
    origin: true,
    credentials: true,
}))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
}))

