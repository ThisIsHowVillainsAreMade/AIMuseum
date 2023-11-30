function zoomDoor() {
    const scalingElement = document.querySelector('.door');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
        scalingElement.style.transform = 'scale(2)';
    }, 0);
}