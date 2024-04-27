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
                    <div className='h-[500px] bg-cover' style={{ backgroundImage: `url(${banner1})` }}>
                        {/* <img className='w-full relative z-0' src={banner1} alt="" /> */}
                        <div className=' absolute top-1/2 left-1/4'>
                            <h1 className='text-green-500 text-3xl font-bold'>Water Colour painting </h1>
                            <p className='text-2xl text-green-300'> Your Portal to Artistic Mastery</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-cover' style={{ backgroundImage: `url(${banner2})` }}>
                        {/* <img className='w-full' src={banner2} alt="" /> */}
                        <div className=' absolute top-1/2 left-1/4'>
                            <h1 className='text-green-500 text-3xl font-bold'>Portrait drawing </h1>
                            <p className='text-2xl text-green-300'> From Blank Canvas to Masterpiece</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-cover' style={{ backgroundImage: `url(${banner3})` }}>
                        {/* <img className='w-full' src={banner3} alt="" /> */}
                        <div className=' absolute top-1/2 left-1/4'>
                            <h1 className='text-green-500 text-3xl font-bold'>Oil painting </h1>
                            <p className='text-2xl text-green-300'>Painting and Drawing Techniques for Every Skill Level</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] bg-cover' style={{ backgroundImage: `url(${banner4})` }}>
                        {/* <img className='w-full' src={banner4} alt="" /> */}
                        <div className=' absolute top-1/2 left-1/4'>
                            <h1 className='text-green-500 text-3xl font-bold'>Cartoon Drawing </h1>
                            <p className='text-2xl text-green-300'> Discover the Harmony of Colors and Emotions</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;