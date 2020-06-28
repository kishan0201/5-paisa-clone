const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const authenticate = require('./utils/api/login')
const userMargin = require('./utils/api/margin')
const userHoldings = require('./utils/api/holdings')
const userPositions = require('./utils/api/positions')
const userOrderBook = require('./utils/api/orderBook')

const app = express();
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', async (req,res) => {
    let {email, password, dob} = req.body
    dob = dob.replace(/-/g, '')
    const result = await authenticate(email,password,dob);

    res.send(result);
})

app.post('/api/margin', async(req,res) => {
    const response = await userMargin(req.body.cookie,req.body.clientID);
    res.send(response);
})

app.post('/api/holdings', async(req,res) => {
    const response = await userHoldings(req.body.cookie,req.body.clientID);
    res.send(response)
})

app.post('/api/positions', async(req,res) => {
    const response = await userPositions(req.body.cookie,req.body.clientID);
    res.send(response)
})

app.post('/api/orderBook', async(req,res) => {
    const cookie = '5paisacookie=bkljta2e1j2pn4sntkpk1ewm';
    const clientID = '55155874';

    const response = await userOrderBook(req.body.cookie,req.body.clientID);
    res.send(response)
})

app.listen(8000, () => {
    console.log('Listening on port 8000!')
})