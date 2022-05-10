// Variável global que busca o elemento do "visor" - input readonly do HTML
let inputResultado = document.getElementById('inputCalculadora')
// Objeto que registra os valores e funções do cálculo
let memoria = {
  valorSalvo: [],
  funcaoParaCalcular: null
}
//Ao carregar a página, atribui eventos aos botões por meio dos seus identificadores (ids)
window.addEventListener('load', function () {
  atribuirEventos()
})
function atribuirEventos() {
  //Atribui eventos aos números
  document.getElementById('btnValor0').addEventListener('click', inserirNumero)
  document.getElementById('btnValor1').addEventListener('click', inserirNumero)
  document.getElementById('btnValor2').addEventListener('click', inserirNumero)
  document.getElementById('btnValor3').addEventListener('click', inserirNumero)
  document.getElementById('btnValor4').addEventListener('click', inserirNumero)
  document.getElementById('btnValor5').addEventListener('click', inserirNumero)
  document.getElementById('btnValor6').addEventListener('click', inserirNumero)
  document.getElementById('btnValor7').addEventListener('click', inserirNumero)
  document.getElementById('btnValor8').addEventListener('click', inserirNumero)
  document.getElementById('btnValor9').addEventListener('click', inserirNumero)
  //Atribui eventos aos botões de operadores, ponto e resultado
  document.getElementById('btnPonto').addEventListener('click', inserirNumero)
  document.getElementById('btnSoma').addEventListener('click', clicarOperador)
  document
    .getElementById('btnDividir')
    .addEventListener('click', clicarOperador)
  document
    .getElementById('btnMultiplicar')
    .addEventListener('click', clicarOperador)
  document
    .getElementById('btnSubtrair')
    .addEventListener('click', clicarOperador)
  document.getElementById('btnLimpar').addEventListener('click', limparDados)
  document
    .getElementById('btnResultado')
    .addEventListener('click', clicarResultado)
}
// Adiciona o número no visor
function inserirNumero() {
  console.log(inputResultado.value)
  console.log(event.target)
  console.log(event.target.textContent.trim())

  inputResultado.value += event.target.textContent.trim()

  console.log(inputResultado.value)

  // Se o valor não for um número, substitui pelo valor do conteúdo do botão
  /*if (isNaN(inputResultado.value)) {
    inputResultado.value = event.target.textContent
    // Senão, adiciona o valor aos demais
  } else {
    // Se o valor for zero, substitui o valor do visor pelo número clicado
    if (inputResultado.value == 0) {
      inputResultado.value = event.target.textContent
      // Senão adiciona o número aos digitos no visor
    } else {
      inputResultado.value += event.target.textContent
    }
  }*/
}
//Operação de soma
function somar() {
  return memoria.valorSalvo.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual
  })
}
//Operação de subtração
function subtrair() {
  return memoria.valorSalvo.reduce(function (acumulador, valorAtual) {
    return acumulador - valorAtual
  })
}
//Operação de multiplicacao
function multiplicar() {
  return memoria.valorSalvo.reduce(function (acumulador, valorAtual) {
    return acumulador * valorAtual
  })
}
//Operação de divisão
function dividir(valor1, valor2) {
  if (memoria.valorSalvo.findIndex(element => element == 0) > 0) {
    return 'Erro, não é possível dividir um número por zero!'
  } else {
    return memoria.valorSalvo.reduce(function (acumulador, valorAtual) {
      return acumulador / valorAtual
    })
  }
}
// Limpa o visor e os dados do cálculo
function limparDados() {
  inputResultado.value = ''
  memoria.valorSalvo = []
  memoria.funcaoParaCalcular = null
}
// Insere o ponto para casas decimais
function inserirPonto() {
  if (inputResultado.value === '' || isNaN(inputResultado.value)) {
    inputResultado.value = '0.'
  } else if (!inputResultado.value.includes('.')) {
    inputResultado.value = inputResultado.value + '.'
  }
}
//Atribui a função de acordo com o tipo de operador clicado
function atribuirOperacao(operador) {
  if (operador == '+') {
    memoria.funcaoParaCalcular = somar
  } else if (operador == '-') {
    memoria.funcaoParaCalcular = subtrair
  } else if (operador == '*') {
    memoria.funcaoParaCalcular = multiplicar
  } else {
    memoria.funcaoParaCalcular = dividir
  }
}
//Atualiza valores de cálculo
function clicarOperador() {
  if (isNaN(inputResultado.value)) {
    return false
  }

  memoria.valorSalvo.push(Number(inputResultado.value))

  if (memoria.funcaoParaCalcular != null) {
    inputResultado.value = memoria.funcaoParaCalcular()
  } else {
    let operador = event.target.textContent.trim()
    atribuirOperacao(operador)
    inputResultado.value = ''
  }

  console.log(memoria)
}
//Exibe resultado no visor
function clicarResultado() {
  if (!isNaN(inputResultado.value) && memoria.funcaoParaCalcular != null) {
    let resultado = memoria.funcaoParaCalcular(
      memoria.valorSalvo,
      Number(inputResultado.value)
    )
    inputResultado.value = resultado
    memoria.valorSalvo = resultado
    memoria.funcaoParaCalcular = null
  }
}
