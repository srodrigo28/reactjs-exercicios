import { useState } from "react";

export function Mouse() {
    let [x, setX] = useState()
    let [y, setY] = useState()
    function quandoMover(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    } 
    const css = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    return (
        <div style={css} onMouseMove={quandoMover}>
            <h2>Eixo X: { x }</h2>
            <h2>Eixo Y: { y }</h2>
        </div>
    )
}