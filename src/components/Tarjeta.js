

const Tarjeta = (props) => {
    return(
        <figure>
            <h3>{props.el.nombre}</h3>
            <img 
            style={{
                width:"24%",
            }}
            src={props.el.imagen}/>
            <figcaption>
                <h5>u$d {props.el.precio}</h5>
                <h6>{props.el.coutas}</h6>
                <h6>{props.el.envio}</h6>
                <p>{props.el.descripcion}</p>
            </figcaption>
        </figure>
    )
};

export default Tarjeta;