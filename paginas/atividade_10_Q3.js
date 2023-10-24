function contarVogais() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var contador = 0;
    
    for (var i = 0; i < texto.length; i++) {
        if ('AÀÁÂÃEÈÉÊIÌÍOÒÓÔÕUÙÚÜ aàáâãeéêiíoóôõuúü'.includes(texto[i])) {
            contador++;
        }
    }
    document.getElementById('resultado').value = contador;
}