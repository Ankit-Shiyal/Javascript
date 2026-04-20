let output = document.getElementById("output");
let pushBtn = document.getElementById("pushBtn");
let popBtn = document.getElementById("popBtn");
let shiftBtn = document.getElementById("shiftBtn");
let unshiftBtn = document.getElementById("unshiftBtn");
let itemArray = document.getElementById("itemArray");
let showArray = document.getElementById("showArray");

let arr = [];


function startNum() {
    let numInput = document.getElementById("arrayNum").value;

    itemArray.innerHTML = "";
    arr = []; 

    for (let i = 1; i <= numInput; i++) {
        itemArray.innerHTML += `
            <input type="text" class="mb-2 form-control w-75" placeholder="Enter Element ${i}" id="el${i}">
        `;
    }
}


function loadArray() {
    let count = document.getElementById("arrayNum").value;

    arr = [];

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById("el" + i).value;
        if (val !== "") {
            arr.push(val);
        }
    }

    updateUI();
}


function updateUI() {
    showArray.innerHTML = "Array: [ " + arr.join(", ") + " ]";
    output.innerHTML = "Output: [ " + arr.join(", ") + " ]";
}


showArray.onclick = loadArray;


pushBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    let newItem = prompt("Enter new item");
    if (newItem !== null) {
        arr.push(newItem);
    }

    updateUI();
};


popBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    arr.pop();
    updateUI();
};


shiftBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    arr.shift();
    updateUI();
};


unshiftBtn.onclick = function () {
    if (arr.length === 0) loadArray();

    let newItem = prompt("Enter new item");
    if (newItem !== null) {
        arr.unshift(newItem);
    }

    updateUI();
};