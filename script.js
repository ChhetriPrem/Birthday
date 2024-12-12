document.addEventListener("DOMContentLoaded", () => {
    // Surprise Button and Popup
    const surpriseButton = document.querySelector('.surprise-button');
    const surpriseBox = document.querySelector('.surprise');
    const closeButton = document.querySelector('.close-button');

    // Show the surprise box when the button is clicked
    surpriseButton.addEventListener('click', () => {
        surpriseBox.classList.remove('hidden'); // Show the surprise box
    });

    // Close the surprise box when the close button is clicked
    closeButton.addEventListener('click', () => {
        surpriseBox.classList.add('hidden'); // Hide the surprise box
    });

    // Balloon Pop Animation
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', () => {
            balloon.style.display = 'none'; // Balloon disappears on click
        });
    });

    // Cake Cutting Animation
    const cutButton = document.querySelector('.cut-button');
    const cake = document.querySelector('.cake');
    const cakeMessage = document.querySelector('.cake-message');

    cutButton.addEventListener('click', () => {
        // Add the "cut" class to trigger the cake cutting animation
        cake.classList.add('cut');

        // Update the button and show a message after animation
        setTimeout(() => {
            cakeMessage.classList.remove('hidden');
            cutButton.textContent = "Cake is Cut 🎉";
            cutButton.disabled = true;
        }, 1500); // Delay to match animation duration
    });
});
