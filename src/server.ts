import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "REST Fullstack Challenge 20201209 Running",
  });
});

app.listen(3333);
