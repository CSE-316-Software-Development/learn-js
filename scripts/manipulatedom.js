window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

// assume it is a list of code with columns
function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) { // in each TR, there is a list of TD
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.classList.add(tdNode); // add css style to this node
  tdNode.appendChild(childNode); // anything
  return tdNode;
}

// pre-defined
function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

// want three nodes, so iterate
function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}
