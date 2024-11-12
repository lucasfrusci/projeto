function darkMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light");
    isLightMode = false;
    changeProfile();
  } else {
    html.classList.add("light");
    isLightMode = true;
    changeProfile();
  }*/

  html.classList.toggle("light")

  const profile = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    profile.setAttribute("src", "./assets/avatar-light.png")
  } else {
    profile.setAttribute("src", "./assets/avatar.png")
  }
}
