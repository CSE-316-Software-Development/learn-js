window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode,i) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.id=i
  return tdNode;
}

function createTDNodeWithoutId(childNode,i) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  var timestamp = new Date().getTime(); 
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"),timestamp+i);
	let edit = document.createElement('button')
	edit.appendChild(createTxtNode("Edit Text"))
	edit.addEventListener('click', function() {
    myButtonClickHandler(timestamp+i);
});
	let col2 = createTDNodeWithoutId(edit,i)
    tableNode.appendChild(createTRNode([col1,col2]));	
  }
  document.getElementById("root").appendChild(tableNode);
}


function myButtonClickHandler(parameter) {
    td=document.getElementById(parameter)
	td.removeChild(td.firstChild)
	var inputField = document.createElement('input');

	// Set the type attribute to 'text' for a text input field
	inputField.type = 'text';

	// Set other attributes as needed (e.g., id, name, placeholder)
	inputField.placeholder = 'Enter Cell(x,y)...';
	td.appendChild(inputField)
}

// Add an event listener to the button, passing the parameter using a wrapper function
