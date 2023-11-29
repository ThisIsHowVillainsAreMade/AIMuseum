const draggable = document.getElementById('drag');
const context = draggable.context('2d');
let bodyX = 0;
let bodyY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;

draggable.addEventListener('mousedown', function(event) {
      isDragging = true;
      startX = event.clientX - bodyX;
      startY = event.clientY - bodyY;
});


