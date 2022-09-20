import CarouselIntro from 'components/CarouselIntro';
// import Image from 'next/image';

const IntroComponent = (props)=>{
    console.log(props.intro[0].slider)
    return(
        <><div className="main_section ps-0 ps-md-0">
        <div className=" padddd">
           <div className="row">
              <div className="col-md-6 padding_lrtb0">
                 <div className="bg">
                    <div className="text-bg">
                    <div className="logo">
                <a href="index.html">
                <svg width="100px" height="100px" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0C3.89543 0 3 0.895431 3 2V3C3 4.10457 3.89543 5 5 5C6.10457 5 7 4.10457 7 3V2C7 0.895431 6.10457 0 5 0Z" fill="white"/>
                <path d="M10 0C8.89543 0 8 0.895431 8 2V3C8 4.10457 8.89543 5 10 5C11.1046 5 12 4.10457 12 3V2C12 0.895431 11.1046 0 10 0Z" fill="white"/>
                <path d="M2 5C0.895431 5 0 5.89543 0 7V7.5C0 8.60457 0.895431 9.5 2 9.5C3.10457 9.5 4 8.60457 4 7.5V7C4 5.89543 3.10457 5 2 5Z" fill="white"/>
                <path d="M13 5C11.8954 5 11 5.89543 11 7V7.5C11 8.60457 11.8954 9.5 13 9.5C14.1046 9.5 15 8.60457 15 7.5V7C15 5.89543 14.1046 5 13 5Z" fill="white"/>
                <path d="M9.61273 7.77893C8.51793 6.44953 6.48207 6.44953 5.38727 7.77893L2.46943 11.322C1.2614 12.7889 2.30486 15 4.20516 15C4.47668 15 4.74447 14.9368 4.98732 14.8154L5.34699 14.6355C6.70234 13.9578 8.29766 13.9578 9.65301 14.6355L10.0127 14.8154C10.2555 14.9368 10.5233 15 10.7948 15C12.6951 15 13.7386 12.7889 12.5306 11.322L9.61273 7.77893Z" fill="white"/>
                </svg>
                
                </a> 
            </div>
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