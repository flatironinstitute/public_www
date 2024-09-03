// @ts-check
const matcher = window.matchMedia("(min-width: 980px)");
function handleResize() {
  const nav = document.querySelector("nav");
  if (matcher.matches) {
    nav?.removeAttribute("popover");
  } else {
    nav?.setAttribute("popover", "auto");
  }
}
handleResize();
matcher.addEventListener(`change`, handleResize);
