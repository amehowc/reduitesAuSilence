
document.addEventListener("DOMContentLoaded", function() {
  const scene = document.querySelector('#scene');
  const target = document.querySelector('#my-marker');
  const video = document.querySelector('#target-practice');
  video.pause();
  video.currentTime = 0;

  scene.addEventListener("arReady", event => {

    const loadingHolder = document.querySelector('#overlay');
    console.log(loadingHolder)
    loadingHolder.classList.add("hidden")
	  console.log("MindAR is ready")
	});
  // Detect target found
  target.addEventListener("targetFound", event => {
    console.log("target found");
    video.play();
  });

  // Detect target lost
  target.addEventListener("targetLost", event => {
    console.log("target lost");
    video.pause();
    video.currentTime = 0; // Reset video playback to the beginning
  });
});