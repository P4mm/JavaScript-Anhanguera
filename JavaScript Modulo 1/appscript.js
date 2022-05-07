document.getElementById('paragrafo').innerHTML = 'Hello World JavaScript!'

var objt1 = document.getElementById('paragrafo2')
var n1 = 100

function funcaoSoma(num1) {
  var x = num1 + 3
  return x
}

//objt1.innerHTML = funcaoSoma(n1);

function funcaoAddTitulo() {
  console.log('Antes do IF da funcaoAdionaTitulo!')
  if (objt1.innerText === 'Título Criado Via JavaScript!') {
    return (objt1.innerHTML = 'Apaguei o título!')
  } else {
    return (objt1.innerHTML = '<h1>Título Criado Via JavaScript!</h1>')
  }
}
