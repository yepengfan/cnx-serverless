'use strict';
const _ = require('lodash')
const apiResponseHeader = {
  'Content-Type': 'application/json',
  'X-Requested-With': '*',
  'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT'
}

const requestHeaderGen = (successBody) => {
  const random = Math.random()
  if (random > 0.9 || random < 0.1) {
    // 500:
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal ServerError. Please try again'
      }),
      headers: apiResponseHeader,
      isBase64Encoded: false
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(successBody),
    headers: apiResponseHeader,
    isBase64Encoded: false
  }
}

module.exports.getDealers = async (event, context) => {
  const dealers = require('./data/dealers.json')
  const httpReturn = requestHeaderGen(dealers)
  return httpReturn
}

module.exports.getVehiclesByBac = async (event, context) => {
  const { bac } = event.pathParameters
  const vehicles = require('./data/vehicles')
  const VehiclesBelongToBac = _.find(vehicles, {bac: bac})
  return requestHeaderGen(VehiclesBelongToBac)
}
