//your JS code here. If required.
// Get elements
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-modal');

// Function to open the modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Function to close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to close the modal when the close button is clicked
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
