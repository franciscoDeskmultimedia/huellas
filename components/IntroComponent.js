import CarouselIntro from 'components/CarouselIntro';
// import Image from 'next/image';

const IntroComponent = (props)=>{
    console.log(props.intro[0].slider)
    return(
        <><div className="main_section">
        <div className="container padddd">
           <div className="row">
              <div className="col-md-6 padding_lrtb0">
                 <div className="bg">
                    <div className="text-bg">
                       <span>{props.intro[0].titulo}</span>
                       <h1>{props.intro[0].subtitulo}</h1>
                       <p>{props.intro[0].descripcion.text}</p>
                    </div>
                 </div>
              </div>
              <div className="col-md-6 padding_lrtb0">
              <CarouselIntro slides={props.intro[0].slider}>
                    
                  </CarouselIntro>
                  </div>
           </div>
        </div>
     </div>
            

                  
               
        </>
    )
}

export default IntroComponent;