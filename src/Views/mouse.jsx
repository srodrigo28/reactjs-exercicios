import { useState } from "react";

export function Mouse() {
    let [x, setX] = useState()
    let [y, setY] = useState()

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: { x }</span>
            <span>Eixo Y: { y }</span>
        </div>
    )
}