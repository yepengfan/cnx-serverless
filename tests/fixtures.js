export default {
  vehicleEvent: {
    pathParameters: {
      bac: '122348'
    }
  },
  dealersRes: {
    statusCode: 200,
    body: '[{"bac":"122345","name":"Cadillac Detriot","city":"Detriot","state":"WV","country":"US","brand":"Cadillac"},{"bac":"122346","name":"Buick Detriot","city":"Detriot","state":"WV","country":"US","brand":"Buick"},{"bac":"122347","name":"GMC Detriot","city":"Detriot","state":"WV","country":"US","brand":"GMC"},{"bac":"122348","name":"Buick New York","city":"New York","state":"WV","country":"US","brand":"Buick"}]',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  },
  vehiclesRes: {
    statusCode: 200,
    body: '{"_id":"5ba47ea11e867b8c0ac40c91","bac":"122348","vin":"VIN00000000000005","ctpStatus":"IN-SERVICE","onstarStatus":"CONNECTED","events":[{"_id":"5ba47ea11e867b8c0ac40c9e","eventDate":"2019-09-19T14:00:00.000+0000","eventType":"created"}],"createdAt":"2019-09-21T05:16:17.927+0000","updatedAt":"2019-10-09T02:50:29.624+0000","make":"GMC","model":"C","telemetryPnid":"67891","color":"Red","stockNumber":"12349","year":2019}',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  },
  errorRes: {
    statusCode: 500,
    body: '{"message":"Internal ServerError. Please try again"}',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }
}
