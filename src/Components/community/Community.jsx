import React from 'react'
import communityImg from "../../assets/community.svg"
import ganduImage from "../../assets/sam.jpg"
import dummyImg from "../../assets/udemy.svg"

const Community = () => {
    return (
        <div className=' min-h-[90vh] w-[100%]'>
            <div className=' h-[90vh] w-[100%] flex md:flex-col flex-col  items-center justify-center'>
                <div className=' md:h-[60%] md:w-[100%] flex justify-center items-center h-[60%] w-[100%]'>
                    <img src={communityImg} alt='community image' className=' h-[100%] w-[95%] object-contain' />
                </div>
                <div className=' md:h-[40%] md:w-[80%] h-[40%] w-[95%] flex justify-center  text-center'>
                    <p className=' font-bold md:text-[3.5rem] text-[2.2rem]'>Join Greencastle's smartest student community</p>
                </div>

            </div>
            <div className=' h-[40vh] w-[100%] bg-blue-50 flex flex-col justify-center items-center'>
                <div className=' h-[50%] w-[100%] flex justify-center items-center'>
                    <img src={ganduImage} alt='profile' className=' h-[100px] w-[100px] rounded-full' />
                </div>
                <div className=' w-[100%]  flex justify-center items-center flex-col'>
                    <q className='  w-[60%] text-center'>
                        Coming from a country where I had a less exposure to technology and Community, finding the diversity hub was a blessing in disguise
                    </q>
                    <p className=' font-[700] text-xl font-sans mt-2'>Mr. Sanij Shreshtha</p>
                </div>

            </div>
            <div className=' min-h-[40vh] w-[100%]'>
                <div className=' h-[10vh] w-[100%] flex justify-center items-center text-3xl mt-[10vh] font-[600]'><p>Communities To Join</p></div>
                <div className=' min-h-[40vh] w-[100%] flex md:flex-row flex-col md:flex-wrap items-center md:justify-center mt-10 mb-10'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 8].map((item) => {
                        return <div className='md:m-[5px] md:h-[60vh] md:w-[30%] h-[40vh]  w-[90%] flex flex-col items-center mt-5 rounded-md bg-gray-200'>
                            <img src={dummyImg} alt='This is a dummy Image' className='h-[40%] w-[100%] object-contain' />
                            <p className=' text-black h-[10%] w-[100%] text-[1.1rem] flex justify-center items-center font-bold font-sans'>CSOC</p>
                            <div className='w-[95%] text-center text-clip line-clamp-3'>
                                <p className=' text-black text-sm font-sans'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at pulvinar eros. Phasellus dictum fringilla cursus. Vestibulum efficitur, enim nec tempus vulputate, tortor turpis aliquam arcu, id lacinia enim tortor ac nisi. Aliquam sodales et nisl sit amet imperdiet. Quisque consequat commodo enim. Suspendisse molestie viverra aliquam. Duis pretium imperdiet ipsum, ac molestie nunc convallis non. Vivamus sapien mi, vulputate vitae tempor ac, egestas a tellus.
                                </p>
                            </div>
                            <div className=' h-[15%] w-[100%]  rounded-xl flex justify-around items-center mt-5'>
                                <div className=' h-[80%] w-[40%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>Join</div>
                                <div className=' h-[80%] w-[40%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>More</div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Community