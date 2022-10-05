import ToDo from "../models/ToDo.mjs";

const todos = [
  new ToDo("water the plant"),
  new ToDo("walk the dog"),
  new ToDo("clean the room"),
  new ToDo("play violin"),
];

export default {
  home: (req, res) => res.send("hello from todolist"),
  getList: (req, res) => {
    res.json(todos);
  },
  addToDo: (req, res) => {
    const text = req.body.text;
    if (!text) return res.json({ msg: "please enter a text" });

    const newItem = new ToDo(text);
    // const newItem = {
    //   _id: UID(),
    //   text: text,
    //   isDone: false,
    // };

    todos.push(newItem);
    res.json({ msg: "ok" });
  },
  markToDo: (req, res) => {
    console.log("wtf");
    const targetId = req.params.id;

    if (!targetId)
      return res.json({ msg: "bad request: please provide a valid id" });

    console.log("1");
    // const p = todos.findIndex((todo) => todo._id === targetId);

    // if (p === -1)
    //   return res.json({ msg: "bad request: please provide a valid id" });

    // todos[p].isDone = !todos[p].isDone;

    // return res.json({ msg: "ok" });

    console.log(targetId);
    const thisToDo = todos.find((todo) => todo._id === targetId);
    console.log("2");

    console.log(thisToDo);
    if (!thisToDo)
      return res.json({ msg: "bad request: please provide a valid id" });
    console.log("3");
    // console.log("3")

    thisToDo.switchDone();

    console.log("lol");
    return res.json({ msg: "ok" });
  },
  delteToDo: (req, res) => {
    const targetId = req.params.id;

    if (!targetId)
      return res.json({ msg: "bad request: please provide a valid id" });

    const p = todos.findIndex((todo) => todo._id === targetId);

    if (p === -1)
      return res.json({ msg: "bad request: please provide a valid id" });

    todos.splice(p, 1);

    res.json({ msg: "ok" });
  },
};
