# auth-api
[pull request](https://github.com/sbkhaloof/auth-api/pull/1)
[heroku link](https://siham-auth-api.herokuapp.com/)


### `.env`
 > PORT
SECRET
DATABASE_URL

---

###### Running the app:

* ####  `npm start` , `nodemon`

* #### Endpoint: */signup*
    * **Returns Object**

`
{
    "user": {
        "_id": 8,
        "username": "alia"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWEiLCJpYXQiOjE2Mjk4MTc4ODl9.KA0YEGeYIug25AVL-lLdw8SG4qtP3LA9VL1q6mpUNDc"
}

`
* #### Endpoint: */signin*
    * **Returns Object**
`
"user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWEiLCJpYXQiOjE2Mjk4MTgwMTl9.PyEXewFOm_-PE0q9NSVcLERSAQiHqKxyTNvZb77vVb8",
        "capabilities": [
            "read",
            "create",
            "update"
        ],
        "id": 8,
        "username": "alia",
        "password": "$2b$10$et4kOEuSd5hfsuNXNViU.uPNr0HvcCh9JiCddsNWqUwDJzi8Stayi",
        "role": "editor",
        "createdAt": "2021-08-24T15:11:29.067Z",
        "updatedAt": "2021-08-24T15:11:29.067Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsaWEiLCJpYXQiOjE2Mjk4MTgwMTl9.PyEXewFOm_-PE0q9NSVcLERSAQiHqKxyTNvZb77vVb8"
}

`

* #### Endpoint: */sscret*
    * **Returns**

/secret
`
Welcome to the secret area
`
* #### Endpoint: */users*
    * **Returns**

`
[
    "test",
    "test1",
    "siham",
    "ali",
    "weam",
    "alia",
    "rrrrr"
]

`

#### Tests
Unit Tests: `npm run test`
Lint Tests: `npm run lint`

#### UML
![](lab08.jpg)