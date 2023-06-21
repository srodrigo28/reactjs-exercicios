import { useState } from "react";

export function ContadorSimples() {
    const [numero, setNumero] = useState(0)
    const dec = () => setNumero(numero - 1)
    const inc = () => setNumero(numero + 1)

    return (
        <div>
            <h1>Contador Simples</h1>
        
            <h2 style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "80px"
            }}>{numero}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>

            <h2>Esse contador necessita de ajuste pois não tem regras</h2>

        </div>
    )
}