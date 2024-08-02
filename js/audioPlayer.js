// AUDIO PLAYER
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const progressBar = document.getElementById('progress-bar');
    const stopButton = document.getElementById('stop');
  
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