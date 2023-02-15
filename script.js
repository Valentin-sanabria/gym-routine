let dropdownBtn = document.querySelectorAll(".dropdownbtn");
console.log(dropdownBtn);


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