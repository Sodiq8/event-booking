const mongoose = require('mongoose');
const dotenv = require ('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env'}) 
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
console.log(DB);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successful')
})


const eventSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        unique: true
    },
    rating: {
        type: Number,
        rating: 4.5
    },
    date: Number,
});

const Event = mongoose.model('Event', eventSchema)

const testEvent = new Event ({
    name: `Dolapo's Events`,
    rating: '5.0',
    date: 31     
});

 testEvent
    .save()
    .then(doc => {
    console.log(doc)
})
    .catch (err => {
    console.log('Error', err)
});

const port = 5000;
    app.listen (port, () =>{
    console.log(`App running on port ${port}...`)
})
