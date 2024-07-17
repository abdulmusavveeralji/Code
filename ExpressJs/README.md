## Express

- Create a empty folder for express
- initialize folder as `npm init`

**_Dependency_**

- install express js
- install nodemon is like a devtool, whenever you make changes in your application it will automatically compile your project for u without even restarting your project

```bash
npm install express
```

```bash
npm install -D nodemon
```

- `-D` denotes as devDependency

after executing the above commands in `package.json` file additional data will be added

```json
"dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
```

### Configure an Entry point for the application

- after installing nodemon we need to entry point to start the application,
- we can add startup command under script inside `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

# Start Express

- here is the simple code to listen http requests on `PORT`

```javascript
import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
```

### 'GET' Request

```javascript
// Return simple text
app.get("/", (request, response) => {
  response.send("Hello world");
});

// Return JSON Format data
app.get("/api", (request, response) => {
  response.send([
    { id: 1, name: "Alji", age: 25 },
    { id: 2, name: "Abdul", age: 25 },
    { id: 3, name: "Musavveer", age: 25 },
  ]);
});
```

### Passing Params

```javascript
const mock = [
  { id: 1, name: "Alji", age: 25 },
  { id: 2, name: "Abdul", age: 25 },
  { id: 3, name: "Musavveer", age: 25 },
];

app.get("/api/user/:id", (request, response) => {
  const user = mock.find((f) => f.id == request.params.id);
  response.send(user);

  /* any number of parameters can be passed,
    /:id/:name/:age
    */
});
```
