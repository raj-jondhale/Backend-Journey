# Express Js

- Express is a minimal and flexible web application framework for NodeJS. It provides a robust set of features for building dynamic web applications and APIs, making it one of the most popular frameworks used in the development of web applications on the server side

## Library vs Framework

| Library                                                                                              | Framework                                                                                                             |
| :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| A library is a collection of pre-written code that can be used to perform specific tasks. eg - axios | A framework is a set of pre-written code that provides a structure for developing software applications. eg - express |

## Installation

This is a Node.js module available through the npm registry.Before installing, download and install Node.js. Node.js 18 or higher is required.If this is a brand new project, make sure to create a package.json first with the npm init command.

```js
// Installation is done using the npm install
npm install express
```

## Hello World Example

```js
//app.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

Running Locally
First create a directory named myapp, change to it and run npm init. Then, install express as a dependency, as per the installation guide.

In the myapp directory, create a file named app.js and copy the code from the example above.

The req (request) and res (response) are the exact same objects that Node provides, so you can invoke req.pipe(), req.on('data', callback), and anything else you would do without Express involved.

Run the app with the following command:

```js
$ node app.js
```

Then, load http://localhost:3000/ in a browser to see the output.

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```
app.METHOD(PATH, HANDLER)
Where:
```

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
This tutorial assumes that an instance of express named app is created and the server is running. If you are not familiar with creating an app and starting it, see the Hello world example.

The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

```js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Respond to a POST request on the root route (/), the application’s home page:

```js
app.post("/", (req, res) => {
  res.send("Got a POST request");
});
```

Respond to a PUT request to the /user route:

```js
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});
```

Respond to a DELETE request to the /user route:

```js
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
```

## Nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

## Installation

Either through cloning with git or by using npm (the recommended way):

```py
npm install -g nodemon # or using yarn: yarn global add nodemon
```

And nodemon will be installed globally to your system path.
