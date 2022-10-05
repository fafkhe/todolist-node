import express from "express";
import todoController from "./controllers/todo.mjs";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", todoController.home);

app.get("/todo", todoController.getList);

app.post("/todo/add", todoController.addToDo);

app.get("/todo/:id", (req, res) => {});

app.post("/todo/mark/:id", todoController.markToDo);

app.post("/todo/delete/:id", todoController.delteToDo);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

console.log("server ran lol2");
