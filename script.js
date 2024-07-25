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
  

// AUDIO PLAYER
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const progressBar = document.getElementById('progress-bar');
  
    playButton.addEventListener('click', () => {
      audio.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'inline';
    });
  
    pauseButton.addEventListener('click', () => {
      audio.pause();
      playButton.style.display = 'inline';
      pauseButton.style.display = 'none';
    });
  
    audio.addEventListener('timeupdate', () => {
      const value = (audio.currentTime / audio.duration) * 100;
      progressBar.value = value;
    });
  
    progressBar.addEventListener('input', () => {
      const time = (progressBar.value / 100) * audio.duration;
      audio.currentTime = time;
    });
  
    stopButton.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
      playButton.style.display = 'inline';
      pauseButton.style.display = 'none';
      progressBar.value = 0;
    });
  });
  