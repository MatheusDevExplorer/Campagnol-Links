function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Imagem de perfil, escrito o nome, junto com um emoji de mente, e uma tesouram, com o fundo preto.")
  } else { 
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Imagem de perfil, escrito o nome, junto com um emoji de mente, e uma tesouram, com o fundo preto.")
  }
}