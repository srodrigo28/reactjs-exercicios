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
                <ContadorDisplay numero={props.numero} />
    
            </div>
        )
    }