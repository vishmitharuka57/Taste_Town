const mongoose = require("mongoose");


//define the events schema
const EventsSchema = new mongoose.Schema({
    image: String,
    startedAt: String,
    endsAt: String,
    name: String,
    cafe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe',
    },
    location: String,
});

//define and exports the event model

const Events = mongoose.model('Event', EventsSchema);
module.exports = Events;



















