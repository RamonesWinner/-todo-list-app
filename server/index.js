import express from "express"
import todosRouter from "./routes/todos.js";
const app = express()

const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello Todo hello ka jan!!!");
  });

  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
  app.use("/todo",todosRouter)