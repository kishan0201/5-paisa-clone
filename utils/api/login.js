const axios = require('axios')
const config = require('../config')
const enc = require("../encrypt.js")

module.exports = async(email,password,dob) => {
    const requestData = {
    head: {
        appName: config.appName,
        appVer: config.appVersion,
        key: config.key,
        osName: config.orderChannel,
        requestCode: config.api.userLogin.requestCode,
        userId: config.userId,
        password: config.password
    },
    body: {
        Email_id: enc(email),
        Password: enc(password),
        LocalIP: "192.168.10.10",
        PublicIP: "192.168.10.10",
        HDSerailNumber: '5QE0RCHR',
        MACAddress: '50-CB-60-4A-D5-32',
        MachineID: '039378',
        VersionNo: '1.0',
        RequestNo: '1',
        My2PIN: enc(dob),
        ConnectionType: '1'
    }
}

console.log('Authenticating...')
let payload = {};
let result = false
let response = {}

    try {
        response = await axios({
            method: 'post',
            url: config.api.userLogin.url,
            headers: {
            'Content-Type': 'application/json'
            },
            data: requestData
    })

    result = email === response.data.body.EmailId

    if(result) {
        payload.email = response.data.body.EmailId
        payload.clientID = response.data.body.ClientCode
        payload.name = response.data.body.ClientName
        payload.cookies = response.headers['set-cookie'][0].split(';')[0]
    }
    else {
        payload.error = true;
    }

    } catch (error) {
        payload.error = true;
        result = false
        console.log('ERROR')
        console.log(response)
        console.log(error)
    } finally {

        if (result) {
        console.log('User logged')
    }

    return payload;
    }
}