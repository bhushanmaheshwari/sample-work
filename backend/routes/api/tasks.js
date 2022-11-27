const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://_:wSRliQPhoNEdJIhNoTLKuhDd6n2EkhgRPhFoxWPtZdwTzBLBarTdwt0H4jodmcd9@global.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=data-ojvma:Cluster0:api-key',
    { dbName: 'sample-work' }
)
const connection = mongoose.connection;
connection.once('open', async () => {
    console.log('connection open')
});

const router = express.Router();

// get all coaches
router.get('/', async (req, res) => {
    const collection = connection.db.collection("tasks");
    const result = await collection.find().toArray();
    res.send(result);
})

// add a coach
router.post('/', async (req, res) => {
    const collection = connection.db.collection("tasks");
    const result = await collection.insertOne(req.body);
    res.send(result);

})

module.exports = router;