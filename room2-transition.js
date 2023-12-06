    // 000-Séquence titre en fondu
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
    
        const wCover = document.createElement('div');
        wCover.className = 'wCover';
        body.appendChild(wCover);
    
        wCover.innerHTML = '<p>ROOM 2</p>';
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
    
    // Fonction pour afficher l'overlay avant de lancer le lien
    function showOverlay() {
        const wOverlay = document.createElement('div');
        wOverlay.id='transitionOverlay';
        document.body.appendChild(wOverlay);
        const overlay = document.getElementById('transitionOverlay');
        
        setTimeout(() => {
            transitionOverlay.style.opacity = '1';

        setTimeout(function() {
//          CHANGER DIRECTION PAGE 2                        <<=============
            window.location.href = "000-wNextPage2.html"; 
        }, 500); 
    },0);
    }

    function showOverlayBack() {
        const wOverlay = document.createElement('div');
        wOverlay.id='transitionOverlay';
        document.body.appendChild(wOverlay);
        const overlay = document.getElementById('transitionOverlay');
        
        setTimeout(() => {
            transitionOverlay.style.opacity = '1';

        setTimeout(function() {
//          CHANGER DIRECTION PAGE 1                       <<=============
            window.location.href = "000-welcome.html"; 
        }, 500); 
    },0);
    }