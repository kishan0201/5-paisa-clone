const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const authenticate = require('../utils/api/login')
const userMargin = require('../utils/api/margin')

const app = express();
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req,res) => {
    let {email, password, dob} = req.body
    dob = dob.replace(/-/g, '')
    const result = await authenticate(email,password,dob);

    res.send(result);
})

app.get('/margin', async(req,res) => {
    const cookie = '5paisacookie=bkljta2e1j2pn4sntkpk1ewm';
    const clientID = '55155874';

    const response = await userMargin(cookie,clientID);
    res.send(response);
})

app.get('/holdings', async(req,res) => {
    const cookie = '5paisacookie=bkljta2e1j2pn4sntkpk1ewm';
    const clientID = '55155874';

    res.send('something')
})

app.listen(8000, () => {
    console.log('Listening on port 8000!')
})