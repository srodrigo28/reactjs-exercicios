function mega3(qtde = 6, numeros = []) {
    if (qtde < 6 && qtde > 15) {
        throw "Quantidade inválida!"
    }
    if (numeros.length === qtde) {
        return numeros.sort()
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return mega3(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega3(qtde, numeros)
    }
}
console.log(mega(7))