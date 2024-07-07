// cursor functionality
document.addEventListener('mousemove', function(e) {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});
