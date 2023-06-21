import { useState } from "react";
import { ContadorDisplay } from "./ContadorDisplay";

export function Contador() {
    const [numero, setNumero] = useState(0)
    const dec = () => setNumero(numero - 1)
    const sun = () => setNumero(numero + 1)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            
            <ContadorDisplay numero={numero} />

        </div>
    )
}