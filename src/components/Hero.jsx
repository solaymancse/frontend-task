import img from '../assets/front.png'

export const Hero = () => {
    return (
        <div className='w-full  flex flex-col md:flex-row lg:flex-wrap items-center mx-auto max-w-7xl px-2 lg:px-8 mt-6 md:mt-20'>
            <div className='px-6 md:px-4 w-full md:order-1 md:w-3/6 lg:w-2/5 order-2 lg:order-none'>
                <h1 className='heading mt-4 md:mt-0 md:text-6xl leading-snug font-bold color-333333 mb-4 '>Take Your <br /> <span className='color-1DBF73'>Dreams</span> To The <br /> Next Level!</h1>
                <p className='lg:w-8/12 text-xs font-semibold text-gray-500 leading-4 mb-6'>Lorem ipsum is simply dummy text of the pricing and typesetting industry.Lorem ipsum has been the industry's standard
                    dummy text ever since the 1500s
                </p>

                <div className='border rounded lg:w-8/12 h-10 border-color py-2 justify-between flex items-center  bg-transparent'>

                    <input type="text" placeholder='Search for a course' className=' w-4/5 bg-transparent pl-2 text-sm text-gray-400 outline-none' />

                    <button className='bg-1DBF73 px-4 h-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>

                </div>
            </div>

            <div className='w-2/4 h-full order-1 lg:order-none'><img src={img} alt="" className='ml-10 md:ml-0' /></div>

            <div className='lg:pl-6 flex gap-6 lg:gap-0 md:flex-col mt-20 order-3  lg:order-none'>
                <div className='mb-8'>
                    <span className='color-1DBF73  text-2xl lg:text-4xl font-semibold '>100</span>
                    <p className='mt-2 text-xs md:text-sm font-semibold text-gray-500'>Subject to <br />choose from</p>
                </div>
                <div className='mb-8'>
                    <span className='color-1DBF73 text-2xl lg:text-4xl font-semibold'>120+</span>
                    <p className='mt-2 text-xs md:text-sm font-semibold text-gray-500'>Awesome <br /> Courses</p>
                </div>
                <div>
                    <span className='color-1DBF73 text-2xl lg:text-4xl font-semibold'>120</span>
                    <p className='mt-2  text-xs md:text-sm font-semibold text-gray-500'>Professional <br /> Teacher</p>
                </div>
            </div>
        </div>
    )
}
