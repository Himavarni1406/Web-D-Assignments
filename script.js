//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var btn = document.getElementById("button");
btn.disabled = true;


function toggle(id) {
  row = document.getElementById(id); 
  if (row) row.style.display = (row.style.display == 'none') ? '' : 'none';
  return false;
}




//Functioncall to hide all the existing second rows
hiderowbyclass("dropDownTextArea");

hidecolbyclass("clsDltTd");
hidecolbyclass("clsEdtTd");


var sucalertvar = false;
////To Add rows dynamically
//Adds a click listener to the add-row button
document.querySelector("#add").addEventListener("click", () => {
  //calls the addRow() method on clicking the button
  try {
    addRow();
  } catch (e) {
    alert("!! Some Error occured while Adding the record !! \n Probable Reason : " + e);
  }

  if(sucalertvar){
   alert("New Record is Added Successfully!"); 
    }
  });
  
  //initializing the row counter
  let x = 4;
  
  const addRow = () => {



  //creates a new row element

  let row = document.createElement("tr");
      row.id=`datarow${x}`;

  let data1 = document.createElement("td");
      let saas = document.createElement("input");
          saas.type = 'checkbox';
          saas.className = 'saas';
          saas.id = `cbxid${x}`
          saas.setAttribute("onclick",`jschkclk("cbxid${x}","datarow${x}","ddta${x}","btnDltId${x}","btnEditId${x}")`);
      

      let br = document.createElement("br");
      let brr = document.createElement("br");
    
      let im =  document.createElement("img");
      im.src='down.png';
      im.width='25';
      im.setAttribute("onclick",`toggle("ddta${x}")`);
      
      data1.appendChild(saas);
      data1.appendChild(br);
      data1.appendChild(brr);
      data1.appendChild(im);

  let data2 = document.createElement("td");
  const data2text = document.createTextNode(`Student ${x}`);
  data2.appendChild(data2text);

  let data3 = document.createElement("td");
  const data3text = document.createTextNode(`Teacher ${x}`);
  data3.appendChild(data3text);

  let data4 = document.createElement("td");
  const data4text = document.createTextNode(randomAward());
  data4.appendChild(data4text);

  let data5 = document.createElement("td");
  const data5text = document.createTextNode(randomSemester());
  data5.appendChild(data5text);

  let data6 = document.createElement("td");
  const data6text = document.createTextNode(randomType());
  data6.appendChild(data6text);

  let data7 = document.createElement("td");
      var rib = randomInteger(11111,99999);
      const data7text = document.createTextNode(`${rib}`);
  data7.appendChild(data7text);

  let data8 = document.createElement("td");
    var rip = randomInteger(30,100);
    const data8text = document.createTextNode(`${rip}%`);
  data8.appendChild(data8text);

  let data9 = document.createElement("td");
      data9.className="clsDltTd";
      data9.style.display = "none";
  const columnbtn = document.createElement('button');
        columnbtn.className = 'clsBtnDlt';
        columnbtn.id = `btnDltId${x}`;
        columnbtn.textContent = 'Delete';
        columnbtn.hidden = true;
        columnbtn.setAttribute('onclick',`delRow(this,"ddta${x}")`);
  data9.appendChild(columnbtn);

  let data10 = document.createElement("td");
      data10.className="clsEdtTd";
      data10.style.display = "none";
  const columnedit = document.createElement('button');
        columnedit.className = 'clsBtnEdit';
        columnedit.id = `btnEditId${x}`;
        columnedit.textContent = 'Edit';
        columnedit.hidden = true;
        columnedit.setAttribute('onclick',`editRow("${x}")`);
  data10.appendChild(columnedit);
  
  //appends columns to the new row
  row.appendChild(data1);
  row.appendChild(data2);
  row.appendChild(data3);
  row.appendChild(data4);
  row.appendChild(data5);
  row.appendChild(data6);
  row.appendChild(data7);
  row.appendChild(data8);
  row.appendChild(data9);
  row.appendChild(data10);


  //Adding adjacent Second Row
let row2 = document.createElement("tr");
    row2.className='dropDownTextArea';
    row2.id=`ddta${x}`;

    let node = document.createElement("td");
    node.innerHTML = 'Advisor:<br /><br />';
    node.innerHTML = node.innerHTML + 'Award Details<br />';
    node.innerHTML = node.innerHTML + 'Summer 1-2014(TA)<br />';
    node.innerHTML = node.innerHTML + 'Budget Number: <br />';
    node.innerHTML = node.innerHTML + 'Tuition Number: <br />';
    node.innerHTML = node.innerHTML + 'Comments:<br /><br /><br />';
    node.innerHTML = node.innerHTML + 'Award Status:<br /><br /><br />';
    node.colSpan = '10';
row2.appendChild(node);

  //appends the row to the table
  document.querySelector("#myTable").appendChild(row);
  document.querySelector("#myTable").appendChild(row2);
  hiderow(`ddta${x}`);
  sucalertvar = true;
  x++;
  };



//Function to hide the rows based on class name
function hiderowbyclass(className){
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].style.display = "none";
  }
} 


function hidecolbyclass(className){
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].style.display = "none";
  }
} 

function displaycolbyclass(className){
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].style.display = "";
  }
}

//Function to hide the row based on ID
function hiderow(id){
  var itemrow = document.getElementById(id);
  itemrow.style.display = "none";
} 


//Function to change  background color and call another function to enable submit button based on checkboxes
function jschkclk(id,rid,drid,did,edid){
  console.log('Inside jschkclk');
  console.log('did:' + did);
  console.log('edid:' + edid);
  var checkbx = document.getElementById(id);
    if(checkbx.checked){
      document.getElementById(rid).style.backgroundColor = "yellow";
      document.getElementById(drid).style.backgroundColor = "yellow";

      document.getElementById(did).hidden=false;
      document.getElementById(edid).hidden=false;


    } else {
      document.getElementById(rid).style.backgroundColor = "";
      document.getElementById(drid).style.backgroundColor = "";
      document.getElementById(did).hidden=true;
      document.getElementById(edid).hidden=true;
    }

    
    chkValBoxes();
}


//function to enable button based on enabled checkboxes 
function chkValBoxes() {
  var ckd = 0;
 
  var chkbxs = document.getElementById("myTable").getElementsByTagName("input");;

  for (var i = 0; i < chkbxs.length; i++) {
      if (chkbxs[i].checked) {
        ckd++;
      }
  }

  
  if (ckd > 0) {
   document.getElementById("button").disabled = false;
   displaycolbyclass("clsDltTd");
   displaycolbyclass("clsEdtTd");
  } else {
   document.getElementById("button").disabled = true;
   hidecolbyclass("clsDltTd");
   hidecolbyclass("clsEdtTd");
  }
};




//Function to Edit the Row
function editRow(rid){
  if (confirm(`Do you want to Edit record : ${rid}`) == true) {
    alert(`Record ${rid} Edited successfully !`);
  }
   else {
    alert("!!Data Editing Cancelled by User!!");
  }
}

//Function to Delete a row
function delRow(rid,adrid){
  var row =  rid.parentNode.parentNode;
  console.log("row : "+ row);
  console.log("rid : "+row.id);
  console.log("riin : "+row.rowIndex);

  var rowid = document.getElementById(row.id);
  rowid.parentNode.removeChild(rowid);

  //Deleting Adjacent Below Row
  var arowid = document.getElementById(adrid);
  arowid.parentNode.removeChild(arowid);

  //row.parentNode.removeChild(row);
  
  alert(`Record Deleted successfully !`);
}

//Function to generate random Integer between the range
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomAward(){
  const awardStatus = ["Approved", "Not-Approved", "Pending"];
  const random = Math.floor(Math.random() * awardStatus.length);
  return awardStatus[random];
}

function randomSemester(){
  const sem = ["Fall", "Spring", "Summer"];
  const random = Math.floor(Math.random() * sem.length);
  return sem[random];
}

function randomType(){
  const type = ["TA", "RA"];
  const random = Math.floor(Math.random() * type.length);
  return type[random];
}
