function dividirNomes(){
    const inputNomeCompleto = document.querySelector('#nomeCompleto').value
    const inputPrimeiroNome = document.querySelector('#primeiroNome')
    const inputSobreNome = document.querySelector('#sobreNome')

    const Pnome = inputNomeCompleto.split(" ")[0]
    const Snome = inputNomeCompleto.split(" ")[1]
    inputPrimeiroNome.value = Pnome
    inputSobreNome.value = Snome
}