# Demo Vehicles

In this code test, you are required to write a simple application including frontend and backend. 

## Background

We are building a software that manages the vehicles for the dealers. 
You will be able to get a list of dealers from an API GET method.
Upon successfully retrieve the dealer list, the user should be able to select one of dealer brand to see the avalible vehicles that belong to the dealer on the frontend.

### Endpoints:
- `GET - https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development/dealers`
for get list of dealers

- `GET - https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development/vehicles/{bac}`
for get vehicles under one dealer (you should be able to get the bac number from `/dealers` api)


### Note:
- 1 dealer can have multiple vehicles
- 1 vehicle only belongs to 1 dealer, their brands has to match (e.g. Cadillac only have Cadillac vehicles, no Buick allowed)
- each dealer has a unique bac code to identify themselves.
- Not all the http requests will be successful (sometimes it will have 500 Internal Server error). You need to make sure the user experience is not compromised in those cases.


## Requirements:
- git control
- The frontend should be accessible through Internet
- TDD development methodology
- Communicate with us if you have any questions.

## Hints:
- Use bootstrap to quickly prototype the frontend
- Having your own backend would be very beneficial when it comes to scaling and error handling
- It would be so much easier if use a PaaS e.g. Heroku, AWS elasticbenstalk
- Use as much of open source library as you can.

### Bonous points:
- CI/CD process
- Well structured code
- Use of Cloud platforms (AWS is preferred)
- Serverless / Microservice infrustructrue
- Nodejs stack
