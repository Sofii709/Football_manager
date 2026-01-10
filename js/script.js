burger_container.onclick = () => {
  menu.style.left = 0;
  bg.style.display = "block"
}

cancel.onclick = () => {
  menu.style.left = "-100%"
  bg.style.display = "none"
}

bg.onclick = () => {
  menu.style.left = "-100%"
  bg.style.display = "none"
}