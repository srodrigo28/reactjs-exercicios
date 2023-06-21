import { useState } from "react";

export function ContadorValidado() {
    const [numero, setNumero] = useState(0)
    
    function dec() {
        if (numero > 1) {
            setNumero(numero -1)
        }
    }
    function inc() {
        if (numero < 15) {
            setNumero(numero +1)
        }
    }

    return (
        <div>
            <h1>Contador Validado</h1>
        
            <h2 style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "80px"
            }}>{numero}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>

            <h2>Esse contador valida seguintes casos</h2>
                <span>
                    1. Se o numero é menor que zero para não ter numeros negativos
                </span> <br />

                <span>
                    2. Se o numero é menor que 15 pois só conta até 15.
                </span> <br />
                <span>
                    3. Então ele tem esse controle
                </span> <br />
        </div>
    )
}