'use strict';

const express = require('express');4
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.post('/person', ( req, res ) => {
   const {data} = req.body;
   const result = data.age+5;
   console.log(result);
   res.status(201).json(result);     
});
function start (port) {
    app.listen(port, () => {
        console.log(`Server is listening on PORT : ${port}`);
    });
}

module.exports = {
    app:app,
    start:start
}


