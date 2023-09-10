let scrolContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrolContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrolContainer.scrollLeft += evt.deltaY;
    scrolContainer.style.scrollBehavior = "smooth";

});

nextBtn.addEventListener("click", () => {
    scrolContainer.style.scrollBehavior = "smooth";
    scrolContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrolContainer.style.scrollBehavior = "smooth";
    scrolContainer.scrollLeft -= 900;
});