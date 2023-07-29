
document.addEventListener("DOMContentLoaded", function() {
  const scene = document.querySelector('#scene');
  const target = document.querySelector('#target');
  const video = document.querySelector('#video-content');
  video.pause();
  video.currentTime = 0;

  scene.addEventListener("arReady", event => {
    const loadingHolder = document.querySelector('#loading-overlay');
    loadingHolder.classList.add("hidden")
	  console.log("MindAR is ready")
	});

  target.addEventListener("targetFound", event => {
    video.play();
  });

  target.addEventListener("targetLost", event => {
    video.pause();
    video.currentTime = 0;
  });
});