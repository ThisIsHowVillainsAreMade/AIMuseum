
// 000-Animation de la porte vers la ROOM 1
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
        // Mettre le html de la ROOM 1                <<<=========
    }, 0)}



// 000-Séquence titre en fondu
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    const wCover = document.createElement('div');
    wCover.className = 'wCover';
    body.appendChild(wCover);

    wCover.innerHTML = '<p>Welcome</p>';
    // TEXT A CHANGER ICI                       <<<==============
        
        setTimeout(() => {
            wCover.querySelector('p').style.opacity = '1';
        
            setTimeout(() => {
            wCover.style.transition = 'opacity 2s ease';
            wCover.style.opacity = '0';

                setTimeout(() => {
                body.removeChild(wCover);
                }, 1600);
             }, 1500);
        }, 250);
});

