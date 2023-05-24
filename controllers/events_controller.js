const { getAllEventService,
    createNewEventService,
    getOneEventService,
    updateEventService,
    deleteEventService } = require('../services/events_service');


const getAllEventController = async (req, res) => {

    try {
        const { filter } = req.query;
        let allEvents;
        if (!filter) {
            allEvents = await getAllEventService();
        }
        else{
            allEvents = await getAllEventService(filter);
        }
        console.log(req.requestTime);
        console.log(allEvents);
        
        res.status(200).json({
            success: true,
            message: "Data gotten successfully",
            data: allEvents,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


const createNewEventController = async (req, res) => {
    try {
        const { eventId, eventName, address, eventDate, capacity, currentBookings, price } = req.body;

        const newEvent = await createEventService({
            eventName,
            address,
            eventDate,
            capacity,
            currentBookings,
            price,
        });

        res.status(201).json({
            success: true,
            message: "Event created successfully",
            data: newEvent
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const getOneEventController = async (req, res) => {
    try {
        const { id } = req.params;
        const myEvent = await getOneEventService(id);

        if (!myEvent) {
            res.status(404).json({
                success: false,
                message: "Event not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Event gotten successfully",
            data: myEvent
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const updateEventController = async (req, res) => {
    try {
        const { id } = req.params;
        const myEvent = await updateEventService(id, req.body);

        if (!myEvent) {
            res.status(404).json({
                success: false,
                message: "Event not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            data: myEvent
        })

    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

const deleteEventController = async (req, res) => {
    try {
        const { id } = req.params;  

        await deleteEventService(id);
        res.status(200).json({
            success: true,
            message: "Event deleted successfully"
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    getAllEventService,
    createNewEventService,
    getOneEventService,
    updateEventService,
    deleteEventService
}
