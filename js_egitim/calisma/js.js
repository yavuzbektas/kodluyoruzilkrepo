function getFormvalue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
}
function changeColor() {
  let x = document.getElementById("paragraf");
  x.style.backgroundColor = "red";
}

function getAttributes() {
  let x = document.getElementById("w3r");
  console.log(x.attributes["href"]);
  for (let index = 0; index < x.attributes.length; index++) {
    console.log(x.attributes[index]);
  }
}

function insert_Row() {
  let table = document.getElementById("sampleTable");
  let rowx = table.insertRow(0);
  let cell1 = rowx.insertCell(0);
  let cell2 = rowx.insertCell(0);
  cell1.innerHTML = "Deger 1";
  cell2.innerHTML = "Deger 2";
}

function changeContent() {
  rn = window.prompt("Input the Row number(0,1,2)", "0");
  cn = window.prompt("Input the Column number(0,1)", "0");
  content = window.prompt("Input the Cell content");
  var x = document.getElementById("myTable").rows[parseInt(rn, 10)].cells;
  x[parseInt(cn, 10)].innerHTML = content;
}

function createTable() {
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = document.getElementById("myTable").insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}

function removecolor() {
  var x = document.getElementById("colorSelect");
  x.remove(x.selectedIndex);
}

function getOptions() {
  var x = document.getElementById("mySelect");
  var txt1 = "No. of items : ";
  var i;
  l = document.getElementById("mySelect").length;
  txt1 = txt1 + l;
  for (i = 0; i < x.length; i++) {
    txt1 = txt1 + "\n" + x.options[i].text;
  }
  alert(txt1);
}
