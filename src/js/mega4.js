function mega4(qtde = 6, numeros = []) {
    if (qtde < 6 && qtde > 15) {
        throw "Quantidade inválida!"
    }
    if (numeros.length === qtde) {
        return numeros.sort( (n1, n2) => n1 - n2)
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return mega4(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega4(qtde, numeros)
    }
}
console.log(mega4(7))