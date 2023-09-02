
import profile from '../assets/profile.png'

export const Card = ({items}) => {

    return (
        <div className='w-full h-full bg-white border rounded-md overflow-hidden'>
            <div className='w-full relative'>
                <img src={items.img} alt="" />

                <div className=' absolute top-3 left-3 bg-white p-1 rounded-full color-FFB23D'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                </div>
                <div className=' absolute bottom-3 right-3 bg-white rounded'>
                    <h2 className='color-FFB23D px-4 font-semibold text-sm py-1 rounded'>30% Off</h2>
                </div>
            </div>
            <div className='p-4'>
                <div className='flex items-center justify-between w-full mb-2'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full border ring-1 overflow-hidden object-cover'>
                            <img src={profile} alt="" className='w-full h-full object-cover' />
                        </div>
                        <h2 className=' font-semibold text-sm text-gray-600'>Adam Jhon</h2>
                    </div>
                    <div className='flex  items-center text-sm text-gray-400 font-semibold gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFB23E" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        (4.7)
                    </div>
                </div>
                <div className='mb-8 w-ful'>
                    <p className=' font-semibold text-sm text-gray-700'>Deep Learning Data Science Specialized</p>
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='flex items-center text-sm gap-2 text-gray-400 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        10 lesson</p>
                    <p className='flex items-center text-sm gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        1 hr 50 min</p>

                </div>
                <div className='flex justify-between '>
                    <p className='flex items-center text-sm gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        124 students</p>
                    <p className='flex items-center text-sm gap-2 text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                        12 Lectures</p>
                </div>
            </div>

            <div className='px-4 rounded cursor-pointer mb-2'>
                <button className='bg-1DBF73 text-sm w-full py-2 rounded text-white font-medium'>Add to Cart</button>
            </div>
        </div>
    )
}
