document.addEventListener("DOMContentLoaded", function () {

  const scene = document.querySelector("#scene");
  const target = document.querySelector("#target");
  const video = document.querySelector("#video-content");
  const checkingOverlay = document.querySelector("#checking-overlay");
  video.pause();
  video.currentTime = 0;
  checkingOverlay.addEventListener("click", () => {
    if (typeof video.play === "function") {
      video.play();
    }
    checkingOverlay.classList.add("hidden")
  });

  scene.addEventListener("arReady", (event) => {
    console.log("MindAR is ready");
    checkingOverlay.classList.remove("hidden")
  });

  target.addEventListener("targetFound", (event) => {
    video.play();
  });

  target.addEventListener("targetLost", (event) => {
    video.pause();
    video.currentTime = 0;
  });
});
