
const Tarjeta = (props) => {
    return (
        <a href="#" style={{
            backgroundColor:"#fff",
            color:"#000",
            textDecoration:"none",
            width:"18%",
            minWidth:"200px",
            height:"80%",
            display:"flex",
            flexDirection:"column",
            padding:"10px",
            borderRadius:"5px"
        }}>
            <h3 style={{textAlign:"center", marginBottom:"40px"}}>{props.el.nombre}</h3>
            <img style={{
                width:"100%",
                height:"50%",
                objectFit:"fill"
            }}
                src={props.el.imagen} />
                <h5 style={{fontSize:"1.3rem", textAlign:"left", marginBottom:"10px"}}>u$d {props.el.precio}</h5>
                <p className="hidden">{props.el.coutas}</p>
                <p className="hidden">{props.el.descripcion}</p>
        </a>
    )
};


export default Tarjeta;