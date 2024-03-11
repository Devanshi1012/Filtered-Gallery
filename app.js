const aiBtn = document.querySelector("#ai");
const mlBtn = document.querySelector("#ml");
const dsBtn = document.querySelector("#ds");
const all = document.querySelector("#all");
const allImage = document.querySelector(".container");

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
