import { useState } from "react"
import { mega2 } from "./../js/mega2"
import { NumeroDisplay } from "./NumeroDisplay"

export function AppMega() {
    const [numeros, setNumeros] = useState(mega2())

    function renderizar() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}
        />)
        
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <h1>Mega Sena Gerador de Números</h1>
            <div style={{ display: "flex", }}>
                {renderizar()}
            </div>
            <div>
                <button onClick={() => setNumeros(mega2())} >Gerar Aposta</button>
            </div>
        </div>
    )
}