# Angular2 Starter App to read JSON Objects.

Simple to the point implementation of a directive to work with JSON objects.

# App Structure:

App:

  - AppComponent: Provides with HTML view template.
  
  - AppService: Has skeleton code for implementing HTTP RestAPI calls.
  
  - AppModule: Starting point for Angular2 module.
  
  - json: Consists of DataJson Json object Class definition which we use in our project.
  
  - SplitStringIndexPipe: This filter is used to obtain the value of a split string by index.
  
### Overview
1. Obtain the Json using service.
2. Initialize the table and display the jkl after splitting the string.
3. Obtain the changes made to inidividual jkl from inputs and populate updated json.
4. Send/Save the updated json.

### Installation

1. Install the dependencies and devDependencies 
```sh
$ cd project-folder
$ npm install
```
2. start the server.
```sh
$ npm start
```



### Todos

- Integrate with CLI
