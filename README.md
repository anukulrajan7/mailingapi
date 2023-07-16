Simple Signup and Getbill API
This repository contains a simple Node.js API that allows users to signup and get their bill. The API is structured as follows:

server.js: The main file that starts the API.
router: The router that handles all requests to the API.
routes: The routes that define the endpoints for the API.
controllers: The controllers that handle the logic for the API endpoints.
env: The environment file that contains the Gmail account and password.
To run the API, simply clone the repository and run the following command:

npm start

The API will then be running on port 3000. You can test the API by making requests to the following endpoints:

/signup: This endpoint allows users to signup.
/getbill: This endpoint allows users to get their bill.
The environment file (env) contains the Gmail account and password that are used by the API. You will need to update this file with your own Gmail account and password before you can use the API.

Requirements
To run this API, you will need the following:

Node.js
npm
To-Do
Add more tests.
Improve the documentation.
Add more features to the API.
Author
This API was created by Anukul Raj.

License
This API is licensed under the MIT License.

API URLs
http://localhost:3000/api/user/signup
http://localhost:3000/api/product/getbill
