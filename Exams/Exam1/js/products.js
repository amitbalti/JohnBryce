var myData = [];

const addProduct = () => {
  var myCart = new Object();
  myCart.prodName = document.getElementById("prodName").value;
  myCart.prodPrice = +document.getElementById("prodPrice").value;
  myCart.prodCategory = document.getElementById("prodCategory").value;
  myCart.prodImg = document.getElementById("prodImg").value;
  myData.push(myCart);
  makeTable();
  document.getElementById("myForm").reset();
};

const deleteRow = (i) => {
  // var td = event.target.parentNode;
  // var tr = td.parentNode;
  // tr.parentNode.removeChild(tr);
  myData.splice(i, 1);
  makeTable();
};

const makeTable = () => {
  var data = "";

  myData.map((item, i) => {
    data += `
            <tr id="row">
                <td>${item.prodName}</td>
                <td>${item.prodPrice}</td>
                <td>${item.prodCategory}</td>
                <td><img src="${item.prodImg}" width=100/></td>       
                <td><input type="button" value="Delete" onclick="deleteRow(${i})" id="buttons"/></td>         
            </tr>
        `;
  });
  document.getElementById("cartData").innerHTML = data;
};
