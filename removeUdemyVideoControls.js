window.addEventListener("keydown", (event) => {
  const controls = document.querySelector(
    ".shaka-control-bar--control-bar-container--OfnMI",
  );
  const nextAndPrevious = document.querySelectorAll(
    ".next-and-previous--container--kZxyo",
  );
  const headerGradient = document.querySelector(
    ".video-viewer--header-gradient--x4Zw0",
  );
  const headerTitle = document.querySelector(
    ".video-viewer--title-overlay--YZQuH",
  );
  if (event.key === "h" && event.altKey) {
    controls.setAttribute("style", "opacity: 0 !important");
    nextAndPrevious.forEach((element) => {
      element.setAttribute("style", "opacity: 0 !important");
    });
    headerGradient.setAttribute("style", "display: none !important");
    headerTitle.setAttribute("style", "display: none !important");
  } else if (event.key === "d" && event.altKey) {
    controls.setAttribute("style", "opacity: 1 !important");
    nextAndPrevious.forEach((element) => {
      element.setAttribute("style", "opacity: 1 !important");
    });
    headerGradient.setAttribute("style", "display: block !important");
    headerTitle.setAttribute("style", "display: block !important");
  }
});
