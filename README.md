# TestEx

To install the necessary dependencies:

### `npm install`

In the project directory, you can run:

### `npm start`

It will run the app in http://localhost:3000

## Endpoints

### User endpoints
User registration: POST `http://localhost:3000/users/register`.
#### Example data:

` { "id": "127", "distributor_name": "Airlines" } `

User login: POST `http://localhost:3000/users/login`.
#### Example data:

` { "id": "127" } `

Copy the token which is outputted.
Client's endpoints require a bearer token.

### Client endpoints
Client creation: POST `http://localhost:3000/client/`
#### Example data:

` { "name": "Margus", "lastname": "Kask", "address": "Tartu 23-14", "birthdate": "01.01.1990", "telnumber": "12345678" } `

Client view: GET `http://localhost:3000/client/`

