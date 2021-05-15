//let today = document.querySelector("#current-day");
//get current date
let DateTime = luxon.DateTime;
let today = DateTime.local().toFormat('DDDD');
$("#current-day").text(today);

//get current time of day
const rows = document.getElementsByClassName("row");
let currentHour = DateTime.local().toFormat('H');

//console.log(currentHour);

// set id for each row. sets colors depending on currentHour

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if (currentHour === rowHour) {
            setColor(row, "#ff6961");
        } else if (currentHour < rowHour) {
            setColor(row, "#77dd77");
        } else if (currentHour > rowHour) {
            setColor(row, "#d3d3d3");
        } else {
            setColor(row, "#ff6961");
        }
    };
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// getting inputs from each hour
let input9 = document.getElementById("text9");
let input10 = document.getElementById("text10");
let input11 = document.getElementById("text11");
let input12 = document.getElementById("text12");
let input13 = document.getElementById("text13");
let input14 = document.getElementById("text14");
let input15 = document.getElementById("text15");
let input16 = document.getElementById("text16");
let input17 = document.getElementById("text17");

let save9 = document.getElementById("button9")
let save10 = document.getElementById("button10");
let save11 = document.getElementById("button11");
let save12 = document.getElementById("button12");
let save13 = document.getElementById("button13");
let save14 = document.getElementById("button14");
let save15 = document.getElementById("button15");
let save16 = document.getElementById("button16");
let save17 = document.getElementById("button17");

//looping start at 9
for (let i = 9; i < 18; i++) {
    document.getElementById("button" + i).addEventListener("click", saveData);
}
// note for future: `button${I}` - interpolated string
//add for loops for getting and storing localstorage.

function saveData(event) {
    event.preventDefault();
    //create obj, iterate and then put in local storage
    let savedTask = {};

    for (let i = 9; i < 18; i++) {
        savedTask["input" + i] = document.getElementById("input" + i).value.trim();
    }

    localStorage.setItem("savedTask", JSON.stringify(savedTask));
    //console.log(saveData);
};

function renderTasks() {
    let savedTask = JSON.parse(localStorage.getItem("savedTask"));
    console.log(savedTask);
    for (let i = 9; i < 18; i++) {
        document.getElementById("input" + i).value = savedTask["input" + i];
    }
}
//another way to do line 84 - Object.keys(savedtask).forEach()

//once whole document loads, run this function
$(document).ready(renderTasks);

//could look into:
//using data attributes on button to only update for an individual hour/field. use ID
//replace for loop with logic