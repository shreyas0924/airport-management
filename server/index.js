const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

const PORT = process.env.PORT || '3001';

const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());


 app.get('/', (request, response) => {
    response.status(200).send("Head to /user/:id and replace :id with your user id")
})


const airportRouter = require('./routes/airport');
app.use('/airport',airportRouter);

const airlineRouter = require('./routes/airline');
app.use('/airline',airlineRouter);

const queriesRouter = require('./routes/queries.js');
app.use('/queries',queriesRouter);

app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`) 
})