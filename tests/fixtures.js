export default {
  vehicleEvent: {
    pathParameters: {
      bac: '122345'
    }
  },
  filterVehicleEvent: {
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
    body: '[{"_id":"5ba47ea11e867b8c0ac40c9d","bac":"122345","vin":"VIN00000000000000","ctpStatus":"IN-SERVICE","onstarStatus":"ONS-116","events":[{"_id":"5ba47ea11e867b8c0ac40c9e","eventDate":"2018-09-19T14:00:00.000+0000","eventType":"created"}],"createdAt":"2018-09-21T05:16:17.927+0000","updatedAt":"2018-10-09T02:50:29.624+0000","make":"Cadillac","model":"T","telemetryPnid":"67890","color":"Black","stockNumber":"12345","year":2018},{"_id":"5ba47ea11e867b8c0ac40c99","bac":"122345","vin":"VIN00000000000001","ctpStatus":"IN-SERVICE","onstarStatus":"CONNECTED","events":[{"_id":"5ba47ea11e867b8c0ac40c9e","eventDate":"2018-09-19T14:00:00.000+0000","eventType":"created"}],"createdAt":"2018-09-21T05:16:17.927+0000","updatedAt":"2018-10-09T02:50:29.624+0000","make":"Cadillac","model":"T","telemetryPnid":"67890","color":"Black","stockNumber":"12346","year":2018},{"_id":"5ba47ea11e867b8c0ac40c90","bac":"122345","vin":"VIN00000000000002","ctpStatus":"IN-SERVICE","onstarStatus":"CONNECTED","events":[{"_id":"5ba47ea11e867b8c0ac40c9e","eventDate":"2018-09-19T14:00:00.000+0000","eventType":"created"}],"createdAt":"2018-09-21T05:16:17.927+0000","updatedAt":"2018-10-09T02:50:29.624+0000","make":"Cadillac","model":"T","telemetryPnid":"67890","color":"Red","stockNumber":"12347","year":2018}]',
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
