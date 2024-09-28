import express from "express"
const app = express()

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello hello ka jan!!!");
  });

  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });