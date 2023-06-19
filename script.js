let count = 0

function toggleMode() {
  count++
  const html = document.documentElement
  if (html.classList.contains("red")) {
    html.classList.remove("red")
    avatar.setAttribute("src", "assets/avatar.png")
    avatar.setAttribute(
      "alt",
      "avatar/desenho de menina sorrindo com cafe na mão e fundo azul."
    )
  } else {
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

      if (count === 1) {
        avatar.setAttribute("src", "assets/avatar-light.png")
      } else if (count === 3) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.1.png")
      } else if (count === 5) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.2.png")
      } else if (count === 7) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.3.png")
      } else if (count === 9) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.4.png")
      } else if (count === 11) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.5.png")
      } else if (count === 13) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.6.png")
      } else if (count >= 15) {
        avatar.setAttribute("src", "assets/profile-light/avatar-light-0.7.png")
        html.classList.remove("light")
        html.classList.add("red")
        count = -1
      }

      avatar.setAttribute(
        "alt",
        "avatar/desenho de menina com rosto sério, café na mão e fundo laranja."
      )
    } else {
      avatar.setAttribute("src", "assets/avatar.png")
      avatar.setAttribute(
        "alt",
        "avatar/desenho de menina sorrindo com cafe na mão e fundo azul."
      )
    }
  }
}
