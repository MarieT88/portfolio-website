// cursor functionality
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
  

// audio player
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const seekBar = document.getElementById('seek-bar');
  const stopButton = document.getElementById('stop');

  playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          playPauseButton.textContent = 'Pause';
      } else {
          audio.pause();
          playPauseButton.textContent = 'Play';
      }
  });

  audio.addEventListener('timeupdate', () => {
      const value = (audio.currentTime / audio.duration) * 100;
      seekBar.value = value;
  });

  seekBar.addEventListener('input', () => {
      const time = (seekBar.value / 100) * audio.duration;
      audio.currentTime = time;
  });

  stopButton.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
      playPauseButton.textContent = 'Play';
  });
});
