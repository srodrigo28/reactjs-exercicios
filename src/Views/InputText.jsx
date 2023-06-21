import { useState } from "react"

export function InputText() {
    const container = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    }
    const css_Button = {
        width: "200px"
    }
    const [valor, setValor] = useState("Inicial")

    function alteraInput() {
        setValor(valor + "!")
    }
    function reset() {
        setValor("")
    }
    return (
        <div style={container}>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button style={css_Button} onClick={alteraInput}> Alterar </button>
            <button style={css_Button} onClick={reset}> Zerar </button>
        </div>
    )
}