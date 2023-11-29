function zoomCover() {
    const cover = document.querySelector('.cover');

    cover.classList.add('zoomed');

    setTimeout(() => {
        cover.style.display = 'none';
    }, 3000); 
}
