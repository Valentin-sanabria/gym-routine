let dropdownBtn = document.querySelectorAll(".dropdownbtn");
let kgFollowing = document.querySelectorAll(".kgFollowing");
let tableRows = document.querySelectorAll("tbody .tableRows");
let blackBackground = document.getElementById("blackBackground");
let modalKG = document.getElementById("modalKG");
let closeModal = document.getElementById("closeModal");
let exNameinput = document.getElementById("exName");
let exWeightinput = document.getElementById("exWeight");
let todayDateinput = document.getElementById("todayDate");
let modalOkBtn = document.getElementById("modalOkBtn");
let seguimientoTable = document.getElementById("seguimientoTable");

loadTable();
loadRowsForEach();

dropdownBtn.forEach(element => {
    element.addEventListener("click", function() {
        hide(element);
        rotateBtn(element);
    });
});


function hide(element){
    
    let foldSection = element.parentElement.parentElement.children[1]

    // console.log(foldSection.classList);

    if(foldSection.classList.contains("folded")){
        foldSection.style.display = "";
        foldSection.classList.remove("folded");
    } else {
        foldSection.style.display = "none";
        foldSection.classList.add("folded");
    }
}

function rotateBtn(dropdownBtn) {
    console.log(dropdownBtn.classList);
    if(dropdownBtn.classList.contains("folded")){
        dropdownBtn.style.transform ='rotate(0deg)'; 
        dropdownBtn.classList.remove("folded");
    } else {
        dropdownBtn.style.transform ='rotate(90deg)'; 
        dropdownBtn.classList.add("folded");
    }
}

function showhideModal() {
    if( blackBackground.classList.contains("showPRO")) {
        blackBackground.classList.remove("showPRO");
        blackBackground.style.display = "none";
        blackBackground.classList.add("hidePRO");
    } else if (blackBackground.classList.contains("hidePRO")) {
        blackBackground.classList.remove("hidePRO");
        blackBackground.style.display = "";
        blackBackground.classList.add("showPRO");
    }
}

kgFollowing.forEach(element => {
    element.addEventListener("click", function() {
        showhideModal();
    });
});

closeModal.addEventListener("click", function() {
    showhideModal();
});

modalOkBtn.addEventListener("click", function() {
    createTableRow();
})

function createTableRow() {
    const newTableRow = document.createElement("tr");
    const exNameRow = document.createElement("td");
    exNameRow.innerText = exNameinput.value;
    const exWeightRow = document.createElement("td");
    exWeightRow.innerText = exWeightinput.value;
    const dateRow = document.createElement("td");
    dateRow.innerText = todayDateinput.value;

    newTableRow.classList.add("tableRows");


    seguimientoTable.appendChild(newTableRow);
    newTableRow.appendChild(exNameRow);
    newTableRow.appendChild(exWeightRow);
    newTableRow.appendChild(dateRow);

    tableRows = document.querySelectorAll(".tableRows");

    saveChangesTable();
    loadRowsForEach();
}

function saveChangesTable() {
    localStorage.setItem("allExcercisesWithWeight", JSON.stringify(seguimientoTable.innerHTML));
}

function loadTable() {
    seguimientoTable.innerHTML = JSON.parse(localStorage.getItem("allExcercisesWithWeight"));    
    tableRows = document.querySelectorAll(".tableRows");
    console.log(tableRows);
}

function loadRowsForEach() {

    tableRows.forEach(row => {
        row.addEventListener("click", function() {
            console.log(row.classList);
            if(row.classList.contains("rowAlreadyClicked")){
                row.remove();
            } else {
                row.classList.add("rowAlreadyClicked");
            }
        })
    });
}
