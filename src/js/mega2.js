export function mega2(qtde = 6, numeros = []) {
    qtde = +qtde
    if (qtde < 6 && qtde > 15) {
        throw "Quantidade inválida!"
    }
    if (numeros.length === qtde) {
        return numeros.sort( (a1, a2) => a1 - a2)
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return mega2(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega2(qtde, numeros)
    }
}
console.log(mega2())