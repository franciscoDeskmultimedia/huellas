import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const CarouselIntro = (props) => {
    console.log(props.slides)
    return(
        <>

            <Swiper id="l" className="carousel slide banner_main"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >   {props.slides.map((item)=>{
                return(
                    <SwiperSlide key={item.id}>
                        <Image src={item.url} layout='fill'/>
                    </SwiperSlide>
                )
            })}
                
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
            
                     
        </>
    )
}

export default CarouselIntro;