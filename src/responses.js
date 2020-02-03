import headers from './headers';

export default class Responses {
  static success(responseBody) {
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
      headers,
    };
  }

  static error() {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal ServerError. Please try again'
      }),
      headers,
    };
  }
}
