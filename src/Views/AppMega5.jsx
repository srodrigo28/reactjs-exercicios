import { useState } from "react"
import { mega2 } from "./../js/mega2"
import { NumeroDisplay } from "./NumeroDisplay"

export function AppMega5() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(mega2(qtde))

    function renderizar() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}
        />)
    }
    function start() {
        setNumeros(mega2(qtde))
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <h1>Mega Sena Gerador de Números</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {renderizar()}
            </div>

            <input
                type="number"
                min={6}
                max={15}
                value={qtde} 
                onChange={e => setQtde(e.target.value)}
            />

            <div style={{marginTop: "80px"}}>
                <button onClick={start} >Gerar Aposta</button>
            </div>

        </div>
    )
}