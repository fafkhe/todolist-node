const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");

const DOMAIN = "http://localhost:3000";

// http://localhost:3000/todo

const markToDo = async (_id) => {

  const res = await fetch(`${DOMAIN}/todo/mark/${_id}`, {
    method: "POST",
  });
  const data = await res.json();

  if (data.msg === "ok") updateUI();
};

const deleteToDo = async _id => {
  const res = await fetch(`${DOMAIN}/todo/delete/${_id}`, {
    method: "POST",
  });
  const data = await res.json();

  if (data.msg === "ok") updateUI();
}

const fetchTodos = async () => {
  const res = await fetch(`${DOMAIN}/todo`);
  const data = await res.json();
  console.log("--------------------------");
  console.log(data);
  console.log("--------------------------");
  return data;
};

const addToDo = async () => {
  const text = input.value;
  if (!text) return alert("please enter a text!");

  const res = await fetch(`${DOMAIN}/todo/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });
  const data = await res.json();

  if (data.msg === "ok") updateUI();
};

async function updateUI() {
  console.log("update ui called ");
  ul.innerHTML = "<h1> loading ... </h1>";
  const data = await fetchTodos();

  let result = "";

  data.forEach((item) => {
    // console.log(item._id);
    // console.log(typeof item._id);
    result += `<li 
    class="item ${item.isDone ? 'lt' : ''} "  > ${item.text} <button onclick="markToDo('${String(item._id)}')" >
     ${item.isDone ? "undone" : "done"} </button> 

     <button onclick="deleteToDo('${String(item._id)}')"  > del </button>
     </li>`;
  });

  ul.innerHTML = result;
}

btn.onclick = addToDo;

updateUI();
