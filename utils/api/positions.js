const axios = require('axios')
const config = require('../config.js')

module.exports = async (cookies, clientID) => {
    let headers = {
        Cookie: cookies,
        'content-type': 'application/json'
    }
    
    let requestHead = {
        appName: config.appName,
        appVer: config.appVersion,
        key: config.key,
        osName: config.orderChannel,
        requestCode: config.api.userPositions.requestCode,
        userId: config.userId,
        password: config.password
    }
    
    let requestBody = {
        ClientCode: clientID
    }

  let response = {}

  try {
    response = await axios({
      method: 'post',
      url: config.api.userPositions.url,
      headers,
      data: {
        head: requestHead,
        body: requestBody
      }
    })

  } catch (error) {
    console.log('ERROR')
    console.log(error)
  }
  return response.data.body;
}