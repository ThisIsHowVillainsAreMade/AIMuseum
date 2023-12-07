    // 000-Séquence titre en fondu
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
    
        const wCover = document.createElement('div');
        wCover.className = 'wCover';
        body.appendChild(wCover);

        body.classList.add('hide-content');
    
        wCover.innerHTML = "<p>Le Musée de l'IA</p>";
        // TEXT A CHANGER ICI                       <<<==============
            
            setTimeout(() => {
                wCover.querySelector('p').style.opacity = '1';
            
                setTimeout(() => {
                wCover.style.transition = 'opacity 2s ease';
                wCover.style.opacity = '0';
                body.style.backgroundImage = 'url("assets/wBackground.png")';
    
                    setTimeout(() => {
                    body.removeChild(wCover);
                    }, 1600);
                 }, 1500);
            }, 250);
    });

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
        window.location.href = "room1.html" ;
        }, 1500); 
        // Mettre le html de la ROOM 1                <<<=========
    }, 0)}

// // Fonction pour afficher l'overlay avant de lancer le lien
//     function showOverlay() {
//         const wOverlay = document.createElement('div');
//         wOverlay.id='transitionOverlay';
//         document.body.appendChild(wOverlay);
//         const overlay = document.getElementById('transitionOverlay');
        
//         setTimeout(() => {
//             transitionOverlay.style.opacity = '1';

//         setTimeout(function() {
// //          CHANGER DIRECTION PAGE 3                        <<=============
//             window.location.href = "room1.html"; 
//         }, 1000); 
//     },0);
//     }