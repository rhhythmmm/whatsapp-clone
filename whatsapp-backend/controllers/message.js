import Messages from '../models/message.js';

const controller = {};

controller.addMessage = (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(201).send(data);
    })
}

controller.sync = (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

export default controller;