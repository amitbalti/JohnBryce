var myTasks = [];

const addTask = () => {
  var myTask = new Object();
  myTask.taskDesc = document.getElementById("taskDesc").value;
  myTask.desDate = document.getElementById("desDate").value;
  myTask.desHour = document.getElementById("desHour").value;

  myTasks.push(myTask);
  makeTable();
  document.getElementById("myForm").reset();
};

const deleteRow = (i) => {
  // var td = event.target.parentNode;
  // var tr = td.parentNode;
  // tr.parentNode.removeChild(tr);
  myTasks.splice(i, 1);
  makeTable();
};

const makeTable = () => {
  var data = "";

  myTasks.map((item, i) => {
    data += `
            <div class="noteBox">
                <div class="description">${item.taskDesc}</div>
                <div class="setDate">${item.desDate}</div>
                <div class="setHour">${item.desHour}</div>
            </div>
        `;
  });
  document.getElementById("stickyNote").innerHTML = data;
};
