const cote = require('cote');

const responder = new cote.Responder({ name: 'add user responder' });

responder.on('add', (req, cb) => {
    // add in mongo Db en send the message response
    cb(req.amount * rates[`${req.from}_${req.to}`]);
});