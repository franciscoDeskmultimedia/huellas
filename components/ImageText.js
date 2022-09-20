import Image from "next/image";
const ImageText = (props) => {
    console.log(props.imageTextComponent.imagenDerecha)
    return(
        <>
                <div id="about"  className="about">
                <div className="container-fluid">
                    <div className="row d_flex">
                        {props.imageTextComponent.imagenDerecha == true ? <div className="col-md-5">
                            <div className="titlepage">
                                <h2>{props.imageTextComponent.titulo}</h2>
                                <p>{props.imageTextComponent.descripcion}</p>
                                
                            </div>
                        </div> : null }
                        <div className="col-md-7 padding-left">
                            <div className="about_img">
                                {props.imageTextComponent.imagen ? <figure><img src={props.imageTextComponent.imagen.url} alt="#"/></figure>  : null }
    
                            </div>
                        </div>
                        {props.imageTextComponent.imagenDerecha != true ? <div className="col-md-5">
                            <div className="titlepage">
                                <h2>{props.imageTextComponent.titulo}</h2>
                                <p>{props.imageTextComponent.descripcion}</p>
                                
                            </div>
                        </div> : null }
                        {/* <div className="col-md-5">
                            <div className="titlepage">
                                <h2>{props.imageTextComponent.titulo}</h2>
                                <p>{props.imageTextComponent.descripcion}</p>
                                
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageText;