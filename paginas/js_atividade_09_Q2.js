function SaberIMC(){
    let nome = document.querySelector('#nome').value
    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value
    if (nome !== '' && peso !== '' && altura !== '' ){
        document.querySelector('#resultado').innerHTML = `Olá, ${nome}. O seu IMC é de ${(peso / altura**2).toFixed(2)}`
    }
}