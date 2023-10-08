const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")

// openmodel

function openmodel() {
    console.log("model is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
}
function closemodal() {
   
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}