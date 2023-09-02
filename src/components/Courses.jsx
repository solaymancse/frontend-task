import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
// import required modules
import { Card } from './Card';
import { Navigation } from 'swiper/modules';
import { cardList } from '../Data';


export const Courses = () => {
  
    return (
        <div className=' mx-auto max-w-7xl px-2 lg:px-8 mt-10 md:mt-40'>
            <h1 className='text-center text-4xl font-semibold text-gray-600 mb-4'>Our Top Selling Courses</h1>
            <p className='text-center text-sm font-semibold text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Veniam quaerat asperiores .</p>

            <div className='mt-10'>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    effect='slide'
                    speed={1000}
                    freeMode={true}

                    autoplay={{
                        delay: 3000, // Delay between slide transitions in milliseconds
                        disableOnInteraction: false, // Autoplay continues even after user interaction
                    }}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween:30
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween:5
                        },
                        576: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween:20

                        },
                        1024: {
                            slidesPerView: 4,
                          

                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className='w-80 md:w-full md:px-6 rounded-md px-3 '
                >
                    {cardList.map((item, index) => (

                        <SwiperSlide className='' key={index} >
                            <Card items={item}/>

                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>

            <div className='flex justify-center  cursor-pointer mt-10'>
                <button className='w-40 bg-1DBF73 text-sm  py-2 rounded text-white font-medium'>
                    View All Courses </button>
            </div>
        </div>
    )
}
