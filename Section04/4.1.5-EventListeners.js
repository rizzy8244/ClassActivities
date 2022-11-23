document.querySelector(".nav-bar").addEventListener("click", event => {
  console.log("event", event);
  event.target.style.backgroundColor = "green";
});

document.querySelector(".nav-bar").addEventListener("mouseover", event => {
  console.log("event.target", event.target);
});

document.querySelector("body").addEventListener("keyup", event => {
  console.log("event.key", event.key);
});
