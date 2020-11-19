# torre-challenge
A fullstack implementation of torre challenge using expressjs and vuejs


The App is hosted on heroku [ here ](https://torre-challenge-fullstack.herokuapp.com).

The endpoints are hosted on heroku [ here ](https://torre-challenge-fullstack.herokuapp.com/api-docs/).

## Made With
  ### UI
    * HTML for writing the webpage
    * CSS for styling
    * Javascript to add some behaviour
    * vuejs
    * axios (for api call)
    * vue-bootstrap for responsiveness and styling
  
  ### Server
    * Nodejs for server-side logic
    * Babel for transpiling
    * Express for api routes implementation
    * Heroku for hosting services
    * Axios for api call
    * Swagger for documentation

## Structure of the backend
    *The server folder holds the backend code
    *The config folder holds the postgress connection configuration
    *The controller file holds the code for handling requests processing it through the 
    processor queries and returning a transformed result via the transformer file
    *The database folder holds the database seeder and migration files
    *The middlewares folder holds the middleware files/functions for input validation,
    authentication check and authorization checks
    *The processor folder holds the files/functions for database queries and return the
    result to the controller
    *The public folder holds the ui for the apidocs
    *The routes folder holds the files for the routes
    *The swagger folder holds the files for the swagger documentation
    *The utils folder holds helper functions often reused accross the app such as the
    response transformer function.
## Installation.
  * Install [Nodejs](https://nodejs.org/en/download/)
  * Clone this repo ``` git clone https://github.com/Itsdenty/torre-challenge.git ```
  * Run ```npm install``` to install the required dependencies
  * Run ```npm run start-dev``` to run the development server
  * Navigate to http://localhost:3100/api/v1/

## Features of the template
* Users can Check top talents.
* User Can check top opportunities.
* User can view talent details (not completed).
* User can view opportunity details (not completed)

## Available APIs
<table>
  <tr>
      <th>HTTP REQUEST VERB</th>
      <th>API ENDPOINT/PATH</th>
      <th>ACTION</th>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/</td>
      <td>Welcomes users to the application</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/user/:username</td>
      <td>Retrieves talent genome details</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/auth/user/opportunity/:id</td>
      <td>Retrieves the opportunity detail based on the specified id</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/search/opportunities</td>
      <td>Allows users to retrieve opportunities based on search queries</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/search/talents</td>
      <td>Allows users to retrieve talents based on search queries</td>
  </tr>
</table>


For more details on how to use this API, check the **Documentation** out [ here ](https://torre-challenge-fullstack.herokuapp.com/api-docs/).

## License and Copyright
&copy; Abd-afeez Abd-hamid

Licensed under the [MIT License](LICENSE).
