const aiBtn = document.querySelector("#ai");
const mlBtn = document.querySelector("#ml");
const dsBtn = document.querySelector("#ds");
const all = document.querySelector("#all");
const allImage = document.querySelector(".container");
// const showImage = document.querySelectorAll(".image");

//another method
// const btns = {
//     "All":["ai","ml","ds"],
//     "Artificial Intelligence":["ai"],
//     "Machine learning":["ml"],
//     "Data Science":["ds"]
// }
// function showImages(btn){
//     const selectedBoxes = btns[btn];
//     allImage.innerHTML = "";

//     selectedBoxes.forEach(btnId=>{
//         const image = document.querySelector(btnId);
//         allImage.appendChild(image);
//     })

// }

const originalContent = allImage.innerHTML;
function filterImages(className) {
    allImage.innerHTML = originalContent; // Restore original content
    if (className !== "all") {
        const images = document.querySelectorAll("." + className);
        allImage.innerHTML = ""; // Clear the container
        images.forEach(image => {
            allImage.appendChild(image); // Append filtered images
        });
    }    
}

all.addEventListener("click", () => {
    allImage.innerHTML = originalContent;
});

aiBtn.addEventListener("click", () => {
    filterImages("ai");
});

mlBtn.addEventListener("click", () => {
    filterImages("ml");
});

dsBtn.addEventListener("click", () => {
    filterImages("ds");
});