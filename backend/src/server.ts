import express from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json({
    users: ["Chris"],
  });
});

app.listen(3333, () => {
  console.log("Running at port 3333");
});
