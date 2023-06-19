function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const avatar = document.querySelector("#profile img")

  // if(html.classList.contains('light')) {
  //     html.classist.remove('light')
  // } else {
  //     html.classList.add('light')
  // }

  if (html.classList.contains("light")) {
    // document.querySelector("#profile img").src = `assets/avatar-light.png`
    // document.querySelector("#profile img").alt = `foto do Mayk tema light`
    avatar.setAttribute("src", "assets/avatar-light.png")
    avatar.setAttribute(
      "alt",
      "avatar/desenho de menina com rosto sério, café na mão e fundo laranja."
    )
  } else {
    // document.querySelector("#profile img").src = `assets/avatar.png`
    // document.querySelector(
    //   "#profile img"
    // ).alt = `Foto de mayk brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.`
    avatar.setAttribute("src", "assets/avatar.png")
    avatar.setAttribute(
      "alt",
      "avatar/desenho de menina sorrindo com cafe na mão e fundo azul."
    )
  }
}
