var myData = [];
var income = 0;
var outcome = 0;

// Zeev's way:
const myAction = () => {
  var trans = new Object();
  trans.actionName = document.getElementById("actionName").value;
  trans.actionType = document.getElementsByName("actionType").value;
  trans.sum = +document.getElementById("amount").value;
  trans.action == "deposit" ? (income += trans.sum) : (outcome += trans.sum);
  trans.notes = document.getElementById("notes").value;
  trans.actionDate = document.getElementById("actionDate").value;
  myData.push(trans);
  makeTable();
};

const makeTable = () => {
  var data = "";
  myData.map((item) => {
    data += `
        <tr style="color:${item.action == "deposit" ? "green" : "red"};>
            <td>${item.actionDate}</td>
            <td>${item.actionName}</td>
            <td>${item.sum}</td>
            <td>${item.notes}</td>
        </tr>
        `;
  });
  document.getElementById(
    "myResult"
  ).innerHTML = `Income: ${income} Outcome: ${outcome} Balance: ${
    income - outcome
  }`;
  document.getElementById("actionsList").innerHTML = data;
};

// // My way
// var actions = [];
// const handleData = () => {
//   // Pointers
//   // Action name
//   const actionName = document.getElementById("actionName").value;
//   // Action type
//   const actionTypes = document.getElementsByName("actionType");
//   var types = "";
//   actionTypes.forEach((item) => {
//     if (item.checked) {
//       types = item.value;
//     }
//   });
//   // Amount of the action
//   const amount = +document.getElementById("amount").value;
//   // Date of the action
//   const actionDate = document.getElementById("actionDate").value;
//   // Notes
//   const notes = document.getElementById("notes").value;

//   //   console.log(actionName, actionType, amount, actionDate, notes);

//   const newAction = new Object();

//   newAction.actionName = actionName;
//   newAction.actionType = types;
//   newAction.amount = amount;
//   newAction.actionDate = actionDate;
//   newAction.notes = notes;

//   actions.push(newAction);
//   makeTableData();
// };

// const makeTableData = () => {
//   var income = 0;
//   var outcome = 0;
//   var tableData = document.getElementById("actionsList");
//   var data = "";

//   actions.map((item) => {
//     data += `<tr style="color:${item.actionType == "Income" ? "green" : "red"};>
//     <td>${item.actionName}</td>
//     <td>${item.actionType}</td>
//     <td>${item.amount}</td>
//     <td>${item.actionDate}</td>
//     <td>${item.notes}</td>
//     <td>🖊</td>
//     <td>🗑</td>
//    </tr>`;
//     if (item.actionType == "Income") {
//       income += +item.amount;
//     } else {
//       outcome += +item.amount;
//     }
//   });
//   tableData.innerHTML = data;

//   var totalSum = document.getElementById("totalInOut");
//   totalSum.innerHTML = `Income: ${income} Outcome: ${outcome} Total: ${
//     income - outcome
//   }`;
// };
