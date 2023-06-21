export function mega1(qtde = 6, numeros = []) {
    if (qtde < 6 && qtde > 15) {
        console.log("Quantidade inválida!")
    }
    if (numeros.length === qtde) {
        return numeros
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return mega1(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega1(qtde, numeros)
    }
}
console.log(mega1())