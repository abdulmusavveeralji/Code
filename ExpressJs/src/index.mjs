import express from "express";

const app = express();

const mock = [
  { id: 1, name: "Alji", age: 25 },
  { id: 2, name: "Abdul", age: 25 },
  { id: 3, name: "Musavveer", age: 25 },
];

// Return simple text
app.get("/", (request, response) => {
  response.send("Hello world");
});

// Return JSON Format data
app.get("/api", (request, response) => {
  response.send(mock);
});

app.get("/api/user/:id", (request, response) => {
  const user = mock.find((f) => f.id == request.params.id);
  response.send(user);
});

app.get("/api/user/:id/:name", (request, response) => {
    console.log(request.query)
    const user = mock.find((f) => f.id == request.params.id);
    response.send(user);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
