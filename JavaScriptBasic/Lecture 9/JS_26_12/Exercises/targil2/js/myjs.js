// The todo list array
let todoList = [];
let todoListTime = [];

// Adding a task && clearing it
const addTask = (todo, todoTime) => {
  // This is the same as the above: function addTodo(){}
  // console.log(todo, todoTime);
  todoList.push(todo);
  todoListTime.push(todoTime);
  // console.log(todoList, todoListTime);
  document.getElementById("todoList").innerHTML = createList();
  clearText();
};

// One way
const createList = () => {
  console.log(todoList);
  let myList = "";
  for (i = 0; i < todoList.length; i++) {
    // myList += `<li>${todoList[i]}</li>`;

    switch (todoListTime[i]) {
      case "urgent":
        myList += `<li style='color:red'>`;
        break;
      case "need":
        myList += `<li style='color:orange'>`;

        break;
      case "free":
        myList += `<li style='color:green'>`;
        break;
      case "noNeed":
        myList += `<li>`;
        break;
    }
    myList += `${todoList[i]}</li>`;
  }
  return myList;
};

// // Another way
// const createList = () => {
//   var myList = "";
//   todoList.map((singleItem) => (myList += `<li>${singleItem}</li>`));
//   // todoList.forEach((item) => (myList += `<li>${item}</li>`));
//   return myList;
// };

// Clearing the text
const clearText = () => {
  document.getElementById("work").value = "";
};
