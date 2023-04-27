import React, { useCallback, useEffect, useState } from 'react'
import communityImg from "../../assets/community.svg"
import ganduImage from "../../assets/sam.jpg"
import dummyImg from "../../assets/udemy.svg"
import axios from "axios"

const Community = () => {

    const [clubs,setClubs]=useState([]);
    const [isLoading,setIsLoading]=useState(false)

    const fetchClub=useCallback(async()=>{
       try{
        setIsLoading(true)
        const response=await axios.get("http://localhost:3001/clubs");
        if(response){
            setClubs(response.data.message)
            setIsLoading(false)
        }else{
            setIsLoading(false)
        }
       }catch{
            setClubs([])
            setIsLoading(false)
       }
    })

    useEffect(()=>{
        
        fetchClub()

    },[])





    return (
        <div className=' min-h-[90vh] w-[100%] pt-5'>
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
                    {isLoading?<p>Loading....</p>:clubs.length==0?<div>Nothing to Show</div>:clubs.map((item) => {
                        return <div className='md:m-[5px] md:h-[60vh] md:w-[30%] h-[40vh]  w-[90%] flex flex-col items-center mt-5 rounded-md bg-gray-200'>
                            <img src={item.clubImage} alt='This is a dummy Image' className='h-[40%] w-[100%] object-contain' />
                            <p className=' text-black h-[10%] w-[100%] text-[1.1rem] flex justify-center items-center font-bold font-sans'>{item.clubName}</p>
                            <div className='w-[95%] text-center text-clip line-clamp-3'>
                                <p className=' text-black text-sm font-sans'>
                                    {item.clubDescription}
                                </p>
                            </div>
                            <div className=' h-[15%] w-[100%]  rounded-xl flex justify-around items-center mt-5'>
                                <a href={item.clubPageLink} traget="_" className=' h-[80%] w-[40%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>Join</a>
                                <a href={item.socialLink} target='_' className=' h-[80%] w-[40%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>More</a>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Community