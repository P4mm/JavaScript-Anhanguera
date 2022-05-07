function validaLogin() {
  var user = 'Admin'
  var pass = '1234'
  if (
    user === document.forms['validalogin']['usuario'].value &&
    pass === document.forms['validalogin']['senha'].value
  ) {
    alert('Login Válido!')
    return true
  } else {
    alert('Login Inválido!')
    return false
  }
}
