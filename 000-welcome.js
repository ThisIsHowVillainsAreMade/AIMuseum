function zoomDoor() {
    const scalingElement = document.querySelector('.door');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = '1';
        scalingElement.style.transform = 'scale(2)';
    

        setTimeout(() => {
        window.location.href = "000-wNextPage.html" ;
        }, 1500); 
        // Mettre le html de la ROOM 1
    }, 0)}