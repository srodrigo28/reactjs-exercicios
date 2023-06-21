export function ContadorDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}