var myData = [];

const myAction = () => {
  var dronesData = new Object();
  dronesData.userName = document.getElementById("userName").value;
  dronesData.receiveDate = document.getElementById("receiveDate").value;
  dronesData.userPhone = +document.getElementById("userPhone").value;
  dronesData.userAddress = document.getElementById("userAddress").value;
  var isVIP = document.getElementsByName("isVIP");
  var vipChoice;
  for (var i = 0; i < isVIP.length; i++) {
    if (isVIP[i].checked) {
      vipChoice = isVIP[i].value;
    }
  }
  dronesData.isVip = false;
  dronesData.droneModel = document.getElementById("droneModel").value;
  dronesData.problemDesc = document.getElementById("probDesc").value;
  dronesData.howToFix = document.getElementById("howToFix").value;
  var warrantyType = document.getElementById("warrantyType").value;
  if (vipChoice == "VIP") {
    warrantyType = 7;
    dronesData.isVIP = true;
  } else if (warrantyType == "Expanded") {
    warrantyType = 14;
  } else if (warrantyType == "Regular") {
    warrantyType = 21;
  } else {
    warrantyType = 30;
  }
  // We can do the same as the if statement above, but with switch. (BUT - because we are using the vip as well we will not do it in this case.)
  // ---->
  //   switch (warrantyType) {
  //     case "Expanded":
  //       warrantyType = 14;
  //       break;
  //     case "Regular":
  //       warrantyType = 21;
  //       break;
  //     default:
  //       warrantyType = 30;
  //   }

  dronesData.warranType = warrantyType;
  myData.push(dronesData);
  console.log(myData);
  makeTable();
  document.getElementById("myForm").reset();
};

const makeTable = () => {
  var inFixDrones = 0;
  var fixedDrones = 0;
  var vips = 0;
  var totalDrones = 0;
  var data = "";
  myData.map((item) => {
    var receiveDate = new Date(item.receiveDate);
    var diff = parseInt(
      (new Date().getTime() - receiveDate.getTime()) / (1000 * 3600 * 24)
    );
    var leftDays = item.warranType - diff;

    data += `
            <tr>
                <td>${item.receiveDate}</td>
                <td>${item.warranType}</td>
                <td>${leftDays <= 0 ? "Done" : leftDays}</td>
                <td>${item.userName}</td>                
                <td>${item.userPhone}</td>                
                <td>${item.howToFix}</td>                
            </tr>
        `;
    totalDrones++;
    if (item.isVIP) {
      vips++;
    }
    if (leftDays > 0) {
      inFixDrones++;
    } else {
      fixedDrones++;
    }
  });
  document.getElementById("costumerData").innerHTML = data;
  document.getElementById(
    "myResult"
  ).innerHTML = `Need to be fixed: ${inFixDrones} Already fixed: ${fixedDrones}  How many VIPs: ${vips} Total drones: ${totalDrones}`;
};
