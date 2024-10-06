//consider this list of products as e commerce site
// in ecommerse site lots of products you cant add Event on every products. so you add event on their parent
//we need to click and go to route of that page


document.querySelector(".products").addEventListener("click", (event) => {

    console.log(event.target.closest("SPAN"));
    
    if (event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
})