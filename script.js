let dropdownBtn = document.querySelectorAll(".dropdownbtn");
let kgFollowing = document.querySelectorAll(".kgFollowing");
let tableRows = document.querySelectorAll("tbody .tableRows");
let allTDs = document.querySelectorAll("td");
let filteredTDs = [];
let calentamientoTitles = document.querySelectorAll(".calentamientoTitle");
let blackBackground = document.getElementById("blackBackground");
let modalKG = document.getElementById("modalKG");
let closeModal = document.getElementById("closeModal");
let exNameinput = document.getElementById("exName");
let exWeightinput = document.getElementById("exWeight");
let todayDateinput = document.getElementById("todayDate");
let modalOkBtn = document.getElementById("modalOkBtn");
let seguimientoTable = document.getElementById("seguimientoTable");
let filterInputModal = document.getElementById("filterInputModal");

loadTable();
loadRowsForEach();

dropdownBtn.forEach(element => {
    element.addEventListener("click", function() {
        hide(element);
        rotateBtn(element);
    });
});

filterInputModal.addEventListener("keydown", function() {
    allTDs = document.querySelectorAll("td");

    // if(filterInputModal.value.length > 1) {
    //     filteredTDs = Array.from(allTDs).filter(excercise =>{
    //         if(excercise.innerText.includes(filterInputModal.value)) {
    //             return excercise;
    //         }
    //     })
    Array.from(allTDs).forEach(excercise => {
        if( !excercise.innerHTML.includes(filterInputModal.value) ) {
            console.log(excercise.innerHTML);
            console.log("no matchea con");
            console.log(filterInputModal.value);
            if(excercise.parentElement.childNodes[0].innerText !== filterInputModal.value) {
                hideCompatibleWithEverything(excercise);
            }
        }
    });
        // Array.from(allTDs).forEach(excercise => {
        //     for(let i=0; i<filteredTDs.length-1; i++) {
        //         if(excercise.outerHTML !== filteredTDs[i].outerHTML) {
        //             console.log(excercise.outerHTML);
        //             console.log("no matchea con");
        //             console.log(filteredTDs[i].outerHTML);
        //             hideCompatibleWithEverything(excercise);
        //         }
        //     }
        // });


    if(filterInputModal.value === "") {
        Array.from(allTDs).forEach(excercise => {
                    showCompatibleWithEverything(excercise);
            })
    }

});

function hideCompatibleWithEverything(element) {
    if(element.style.display !== "none") {
        element.style.display = "none";
    }
}

function showCompatibleWithEverything(element) {
    if(element.style.display === "none") {
        element.style.display = "";
    }
}

calentamientoTitles.forEach(element => {
    element.addEventListener("click", function() {
        let foldSection = document.querySelector(".calentamientoSection");

        if(foldSection.classList.contains("folded")){
            foldSection.style.display = "";
            foldSection.classList.remove("folded");
        } else {
            foldSection.style.display = "none";
            foldSection.classList.add("folded");
        }
    });
});


function hide(element){
    
    let foldSection = element.parentElement.parentElement.children[1]
    console.log(foldSection);
    if(foldSection.classList.contains("folded")){
        foldSection.style.display = "";
        foldSection.classList.remove("folded");
    } else {
        foldSection.style.display = "none";
        foldSection.classList.add("folded");
    }
}

function rotateBtn(dropdownBtn) {
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
        console.log("ESCONDE MODAL");
    } else if (blackBackground.classList.contains("hidePRO")) {
        blackBackground.classList.remove("hidePRO");
        blackBackground.style.display = "";
        blackBackground.classList.add("showPRO");
        console.log("MUESTRA MODAL");

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
}

function loadRowsForEach() {

    tableRows.forEach(row => {
        row.childNodes[0].addEventListener("click", function() {
            if(row.classList.contains("rowAlreadyClicked")){
                row.remove();
            } else if(!row.classList.contains("rowAlreadyClicked")) {
                row.classList.add("rowAlreadyClicked");
            }
        })

        row.childNodes[1].addEventListener("click", function() {
            if(row.classList.contains("rowAlreadyClicked")){
                row.classList.remove("rowAlreadyClicked");
            }
        })

        row.childNodes[2].addEventListener("click", function() {
            if(row.classList.contains("rowAlreadyClicked")){
                row.classList.remove("rowAlreadyClicked");    
            }
        })
    });
}
