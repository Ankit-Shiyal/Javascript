
let output = document.getElementById("output");
let start = document.getElementById("start")
let pushBtn = document.getElementById("pushBtn");
let popBtn = document.getElementById("popBtn");
let shiftBtn = document.getElementById("shiftBtn");
let unshiftBtn = document.getElementById("unshiftBtn");
let itemArray = document.getElementById("itemArray")
let showArray = document.getElementById("showArray")

let arr = [];

function startNum() {
    let numInput = document.getElementById("arrayNum").value;

    itemArray.innerHTML = "";

    for (let i = 1; i <= numInput; i++) {
        itemArray.innerHTML += `
            <input type="text" class="mb-2 form-control w-75" placeholder="Enter Element ${i}" id="el${i}">
        `;
    }
}

