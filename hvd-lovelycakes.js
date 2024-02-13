function openCard() {
    const frontCard = document.getElementById('frontCard');
    const insideCard = document.getElementById('insideCard');
    const valentinesCard = document.getElementById('valentinesCard');

    // Apply opening animation
    frontCard.style.transform = 'rotateY(160deg)';
    
    // After the animation duration (4s in this case), display inside-card
    setTimeout(() => {
        insideCard.style.display = 'block';
        valentinesCard.style.transition = 'none'; // Disable transition to prevent the card from snapping back
        frontCard.style.transform = 'rotateY(0deg)'; // Reset the rotation for a smooth appearance
    }, 4000);
}

function closeCard() {
    const frontCard = document.getElementById('frontCard');
    const insideCard = document.getElementById('insideCard');
    const valentinesCard = document.getElementById('valentinesCard');

    // Apply closing animation
    frontCard.style.transform = 'rotateY(0deg)';
    insideCard.style.display = 'none';

    // Enable transition after the closing animation
    setTimeout(() => {
        valentinesCard.style.transition = 'transform 4s';
    }, 0);
}


function toggleCard() {
    const valentinesCard = document.getElementById('valentinesCard');
    valentinesCard.classList.toggle('open');
}
