function criarAlerta(mensagem) {
  const divAlerta = document.createElement("div")
  divAlerta.classList.add("alerta") // Adicionar classe para estilizar o alerta
  divAlerta.textContent = mensagem // Definir a mensagem do alerta

  // Posicionar o alerta na tela (opcional)
  divAlerta.style.position = "fixed"
  divAlerta.style.top = "0"
  divAlerta.style.left = "0"
  divAlerta.style.width = "100%"
  divAlerta.style.height = "100%"
  divAlerta.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
  divAlerta.style.textAlign = "center"
  divAlerta.style.display = "flex"
  divAlerta.style.color = "#fff"
  divAlerta.style.justifyContent = "center"
  divAlerta.style.alignItems = "center"
  divAlerta.style.fontSize = "20px"
  divAlerta.style.zIndex = 100 // Definir a z-index para que o alerta fique na frente de outros elementos

  return divAlerta
}

const formulario = document.querySelector("form")

function enviarFormulario(event) {
  event.preventDefault()

  const botao = document.querySelector("form button")
  botao.disabled = true
  botao.innerText = "Enviando..."

  const data = new FormData(formulario)
  console.log(data)

  // Substituir 'alert("Mensagem Enviada!")' pela criação e exibição do alerta
  const divAlerta = criarAlerta("Mensagem Enviada!")
  document.body.appendChild(divAlerta)

  // Remover o alerta após alguns segundos (opcional)
  setTimeout(() => {
    document.body.removeChild(divAlerta)
    location.reload()
  }, 2000)
}

formulario.addEventListener("submit", enviarFormulario)
