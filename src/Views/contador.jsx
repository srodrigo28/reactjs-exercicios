import { useState } from "react";
import { ContadorDisplay } from "./ContadorDisplay";

export function Contador() {
    const [numero, setNumero] = useState(0)
    /*** Caso 1
        const dec = () => setNumero(numero - 1)
        const inc = () => setNumero(numero + 1)
    */
    /** Caso 2 */
    function inc() {
        setNumero( numero + 1)
    }
    function dec() {
        if ( numero > 0 ) {
            setNumero( numero - 1)
        } else {
            return
        }
    }
    /*** Fim caso 2 */
    return (
        <div style={{
            margin: "auto",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            
            
            <ContadorDisplay numero={numero} />
            <button onClick={dec}>-</button>

            <button onClick={inc}>+</button>

            <br /><br />
            {/* Caso 3 passando direto no botão */}
            <button onClick={ () => setNumero(numero-1)} > - </button>

        </div>
    )
}