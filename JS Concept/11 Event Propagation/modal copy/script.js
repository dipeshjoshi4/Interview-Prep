
//question
// - we want open modal by clicking on button
// - we want close modal by outside modal content and close the modal
//- but there is bug if we want to modal content while open it should not closed
//- so for that we identify class and as per that we condition if statement

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none";
}

button.addEventListener("click", () => {
    toggleModal(true)
})

container.addEventListener("click", (e) => {
    console.log(e.target.className)
    if (e.target.className === "modalContainer") toggleModal(false)

})