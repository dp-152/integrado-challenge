#  Integrado Challenge

###  A simple CRUD application in Express.js
This simple service is capable of Creating, Reading, Updating and Deleting University data from its own database.
The database is seeded during init with data on universities provided by an external API. 

##  Development
This service requires [Node.js](https://nodejs.org/) v16.x. 

Clone this repository:
```sh
git clone https://github.com/dp-152/integrado-challenge.git
cd integrado-challenge
```
Install all dependencies for the project (including development dependencies: 
```sh
npm install
```
Create a .env file at the root of the project and set up the [environment variables](#environment-variables) for the service:
```sh
touch .env
vi .env
```
Run:
```sh
npm run dev
```
This project includes run and debug config for [Visual Studio Code](https://code.visualstudio.com/)
##  Deployment
###  Container deployment (Docker)
This project can be deployed under docker, using the Dockerfile provided
Setup the [environment variables](#environment-variables) for the production environment:
```sh
vi .env
```
Build the image:
```sh
docker build -t integrado-challenge:<version>  .
```

You can specify a port for the container during the build process, by passing it as a build argument:
```sh
docker build -t integrado-challenge:<version> --build-arg PORT=<port>  .
```
Run the image:
```sh
docker run -d -p <external-port>:<internal-port> --name integrado-challenge integrado-challenge:<version>
```
###  Manual deployment
This project requires [Node.JS](https://nodejs.org) v16.x.
Install all dependencies for the project (including development dependencies: 
```sh
npm install --production=false
```
Run the build script:
```sh
npm run build
```
Remove the development dependencies:
```sh
npm prune --production
```
Run:
```sh
npm run start
```
##  Environment variables  
|Variable| Type | Notes |
|--|--|--|
| NODE_ENV | string | Optional. Setting this to "production" will omit sensitive information from crash dumps. Default: development |
| PORT | number | Optional. Internal servers listen port. Default: 3000 |
| APP_API_KEY | string | Required. API Key that will be used by clients to authenticate |
| APP_API_KEY_HEADER | string | Optional. Header field used to send the client's API Key. Default: X-API-Key |
| MONGODB_CONNECTION_STRING | string | Required. MongoDB connection string, in the standard format ```mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]``` |

## API Reference
### Default Response:
Base response for all requests. All endpoints follow this response schema.
| Field | Type | Notes |
|--|--|--|
| requestID | string (UUID) | Current request's ID |
| message | string | Information about the request |
| statusCode | number | HTTP Status code for the current request |
| error | object | Details of the error (if any occurred) |
| errorDetails | string[] | Descriptive list of issues that may have caused the error |
| data | object | Response data for the current request |

### GET /status
Returns the API's current status.
If no errors are found, returns status 200.

### GET /university
Gets a paged list of universities, with up to 20 results.
Returns paging info.

Query parameters: 
| Field | Type | Notes |
|--|--|--|
| country | string | Country to filter the results by |
| pageNumber | number | Page number to retrieve. Starts on 1 |

Returns:
| Field | Type | Notes |
|--|--|--|
| pageIndex | number | Current page number |
| pageSize | number | Size of the current page |
| totalPages | number | Total of pages for the current query |
| totalItems | number | Total of items for the current query |
| data | University[] | List of all universities on the current page |

University data: 
| Field | Type | Notes |
|--|--|--|
| _id | ObjectID | ID of the current university |
| alpha_two_code | string | Two character code for the country the current university is sited |
| country | string | Full name of the country |
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| state-province | string | State/Province the current university is sited |
| web_pages | string[] | List of web pages for the current university |

### GET /university/:id
Returns a single university by ID.

Path parameters: 
| Field | Type | Notes |
|--|--|--|
| id | ObjectID | ID to search on the database |

Returns:
| Field | Type | Notes |
|--|--|--|
| _id | ObjectID | ID of the current university |
| alpha_two_code | string | Two character code for the country the current university is sited |
| country | string | Full name of the country |
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| state-province | string | State/Province the current university is sited |
| web_pages | string[] | List of web pages for the current university |

### POST /university
Adds a new university to the database.
Returns the created object on the database.

Body:
| Field | Type | Notes |
|--|--|--|
| alpha_two_code | string | Two character code for the country the current university is sited |
| country | string | Full name of the country |
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| state-province | string | State/Province the current university is sited |
| web_pages | string[] | List of web pages for the current university |

Returns:
| Field | Type | Notes |
|--|--|--|
| _id | ObjectID | ID of the created university |
| alpha_two_code | string | Two character code for the country the current university is sited |
| country | string | Full name of the country |
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| state-province | string | State/Province the current university is sited |
| web_pages | string[] | List of web pages for the current university |

### PUT /university/:id
Updates the name, list of domains or list of webpages for the current university

Path parameters: 
| Field | Type | Notes |
|--|--|--|
| id | ObjectID | ID to search on the database |

Body:
| Field | Type | Notes |
|--|--|--|
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| web_pages | string[] | List of web pages for the current university |

Returns:
| Field | Type | Notes |
|--|--|--|
| _id | ObjectID | ID of the updated university |
| alpha_two_code | string | Two character code for the country the current university is sited |
| country | string | Full name of the country |
| domains | string[] | List of domains registered for the university |
| name | string | Full name of the university |
| state-province | string | State/Province the current university is sited |
| web_pages | string[] | List of web pages for the current university |

### DELETE /university/:id
Deletes a university from the database.

Path parameters: 
| Field | Type | Notes |
|--|--|--|
| id | ObjectID | ID to search on the database |

Returns:
| Field | Type | Notes |
|--|--|--|
| deleted | boolean | Deletion status of the object |