# Basic NodeJS Express CRUD App

## Running the Application:
After pulling down the repository, start by running `npm install`. This will install all project dependencies. 
Then run the application with `node tasks.js`. This will start the express server. 

## Testing the GET requests:
* In a browser, navigate to *localhost:3001/tasks* to view all tasks.
* In a browser, navigate to *http://localhost:3001/tasks/1* to view a specific task

## Testing the POST request:
* In a Windows command prompt you can use a cURL request to **insert** a record into the tasks array with the following: 
     * *curl -X POST http://localhost:3001/tasks -H "Content-Type:application/json" -d "{\"description\":\"is the assignment finished?\", \"completed\":false}"*

## Testing the PUT request:
* In a Windows command prompt you can use a cURL request to **update** a record in the tasks array with the following: 
     * *curl -X PUT http://localhost:3001/tasks/3 -H "Content-Type:application/json" -d "{\"description\":\"be super amazing at express\", \"completed\":true}"*

## Testing the DELETE request:
* In a Windows command prompt you can use a cURL request to **delete** a record in the tasks array with the following:
     * *curl -X DELETE http://localhost:3001/tasks/1* 
