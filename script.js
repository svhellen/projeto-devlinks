let count = 0

function toggleMode() {
  count++
  const html = document.documentElement
  const avatar = document.querySelector("#profile img")

  if (html.classList.contains("red")) {
    html.classList.remove("red")
    setAvatarAttributes(
      "assets/avatar.png",
      "avatar/desenho de menina sorrindo com cafe na mão e fundo azul."
    )
  } else {
    html.classList.toggle("light")

    if (html.classList.contains("light")) {
      updateAvatar(count)
    } else {
      setAvatarAttributes(
        "assets/avatar.png",
        "avatar/desenho de menina sorrindo com cafe na mão e fundo azul."
      )
    }
  }
  console.log(`count ${count}`)
}

function updateAvatar(count) {
  const version = Math.min(Math.floor(count / 2), 7)
  const src = `assets/profile-light/avatar-light-0.${version}.png`

  if (count >= 15) {
    setAvatarAttributes(
      src,
      "avatar/desenho de menina com rosto sério, café na mão e fundo laranja."
    )
    resetMode()
  } else {
    setAvatarAttributes(
      src,
      "avatar/Desenho de uma garota sorrindo com o café na mão e um fundo azul."
    )
  }
  console.log(`version ${version}`)
}

function setAvatarAttributes(src, alt) {
  const avatar = document.querySelector("#profile img")
  avatar.setAttribute("src", src)
  avatar.setAttribute("alt", alt)
}

function resetMode() {
  const html = document.documentElement
  html.classList.remove("light")
  html.classList.add("red")
  count = -1
}