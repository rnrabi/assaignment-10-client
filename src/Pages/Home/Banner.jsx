import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import banner4 from '../../assets/banner/banner4.jpg'



const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='h-[500px] border-2 border-red-500 bg-cover' style={{backgroundImage:`url(${banner1})`}}>
                        {/* <img className='w-full relative z-0' src={banner1} alt="" /> */}
                        <h1 className='text-red-600 '>Water paint </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='w-full' src={banner2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='w-full' src={banner3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='w-full' src={banner4} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;