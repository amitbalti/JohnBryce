let todo = [];

const handleData = () => {
  // Pointers
  const todoName = document.getElementById("todoName").value;
  const responsible = document.getElementById("responsible").value;
  const urgency = document.getElementById("urgency").value;
  // const finished = document.getElementById("finished").checked;

  // console.log(todoName, responsible, urgency, finished);

  const newList = new Object();

  newList.todoName = todoName;
  newList.responsible = responsible;
  newList.urgency = urgency;
  // newList.finished = finished;

  todo.push(newList);
  makeTableData();
};

const makeTableData = () => {
  let tableData = document.getElementById("todoList");
  let data = "";

  todo.map((item) => {
    data += `<tr>
    <td>${item.todoName}</td>
    <td>${item.responsible}</td>
    <td>${item.urgency}</td>
    <td><input type="checkbox" /></td>
    <td>🖊</td>
    <td>🗑</td>
   </tr>`;
  });
  tableData.innerHTML = data;
};
