import { ContadorDisplay } from './ContadorDisplay'
import { useState } from 'react'

export function NumeroDisplay(props) {
        const [numero, setNumero] = useState(0)
        const dec = () => setNumero(numero - 1)
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h1>Contador</h1>
                
                <ContadorDisplay numero={props.numero} />
    
            </div>
        )
    }