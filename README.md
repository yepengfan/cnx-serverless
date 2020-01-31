# Demo Vehicles

In this code test, you are required to write a simple application including frontend and backend. 

## Background

We are a software vendor who produces SaaS for the vehicle dealers in US.
Each dealer would have a dealer id called BAC, a dealer name, e.g., Buick New York, and some staffs.
Every morning, when a dealer staff comes into the shop, he/she will login to the system, see the list of dealers, select one of them and check the vehicle inventory.

You are assigned a task to:
1. display a list of dealers in a dashboard, including brand, bac, name, city, state and country.
2. each of the dealer item should be clickable. Upon the click, redirect the user to a list of vehicle page. The vehicle list page should display: bac, vin, ctpStatus, onstarStatus, create time, color, stockNumber and year.

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
- using git to manage code.
- The frontend should be accessible through Internet
- TDD development methodology
- Communicate with us if you have any question.

## Hints:
- Using bootstrap and modern frontend framework to quickly prototype the frontend
- Having your own backend would be very efficient when it comes to scaling, error handling and CORS issues.
- It would be so much easier using a PaaS e.g. Heroku, AWS elasticbenstalk
- Use as much of open source library as you can.

### Bonous points:
- built in CI/CD process
- Well structured code
- Use of Cloud platforms (AWS is preferred)
- Serverless / Microservice infrustructrue
- Nodejs stack
