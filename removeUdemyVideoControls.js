console.log("hello world!")
window.addEventListener("keydown", (event) => {
  console.log(event.key);
  const controls = document.querySelector(".shaka-control-bar--control-bar-container--OfnMI");
  const headerGradient = document.querySelector(".video-viewer--header-gradient--x4Zw0");
  const headerTitle = document.querySelector(".video-viewer--title-overlay--YZQuH");
	if (event.key === "h") {
    controls.setAttribute("style", "opacity: 0 !important");
    headerGradient.setAttribute("style", "display: none !important");
    headerTitle.setAttribute("style", "display: none !important");
  } else if (event.key === "s") {
    controls.setAttribute("style", "opacity: 1 !important");
    headerGradient.setAttribute("style", "display: block !important");
    headerTitle.setAttribute("style", "display: block !important");
  }
});
