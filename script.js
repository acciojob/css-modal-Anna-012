// Get the modal, button, and close elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal when clicking on the close button
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
