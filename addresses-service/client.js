const cote = require('cote');

const requester = new cote.Requester({ name: 'add user requester' });

const request = { type: 'add', userId: '0123', fullAddress: 'Calle del troll nº 3' };

requester.send(request, (res) => {
    console.log(res);
});