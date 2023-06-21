export function ContadorDisplay(props) {
    return (
        <div style={{
            height: "200px",
            width: "200px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            color: "#fff",
            borderRadius: "50%",
            backgroundColor: "#222",
            
            margin: "auto",
            fontSize: "5rem",
        }}>
            {props.numero}
        </div>
    )
}