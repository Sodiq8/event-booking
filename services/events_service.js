const Event = require("../models/events_model");


const getAllEventService = async (filter) => {
    if (!filter) {
        return await Event.find();
    }
    return await Event.find(
    {
        eventName: filter,
    }
    );
}

const createNewEventService = async (myEvent) => await Event.create(myEvent);

const getOneEventService = async (id) => await Event.findById(id);

const updateEventService = async (id, myEvent) => await Event.findByIdAndUpdate(id, myEvent, { new: true });

const deleteEventService = async (id) => await Event.findByIdAndDelete(id);

module.exports = {
    getAllEventService,
    createNewEventService,
    getOneEventService,
    updateEventService,
    deleteEventService
}