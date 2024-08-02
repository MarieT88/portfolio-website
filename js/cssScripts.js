// cursor functionality style.css
document.addEventListener('mousemove', function(e) {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
});

// button style.css hot pink alternate lettering
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('styledButton');
    const text = button.innerText;
    const styledText = text.split('').map((letter, index) => {
      return (index === 1 || index === 4 || index === 8) ? `<span class="hotpink-letter">${letter}</span>` : letter;
    }).join('');
    button.innerHTML = styledText;
  });
  

  