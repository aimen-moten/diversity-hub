import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/login.svg";
import axios from 'axios';
import Cookies from 'js-cookie';
import { setAuthToken } from '../../utils/setHeaders';

const Login = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading,setIsLoading]=useState(false);


    const onShowPasswordClickListener = () => {
        setShowPassword((showPassword) => !showPassword)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        try {
            setIsLoading(true);
            const response = await axios.post("https://wicsapi.herokuapp.com/signin", formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
            
            if (response) {
                const token=response.data.token
                localStorage.setItem('auth',token)
                navigate("/")
            }
            setIsLoading(false);

        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }

    return (
      <div className=' h-[90vh] w-[100%] flex justify-center items-center'>
          <div className=' h-[65%] md:h-[90%] md:w-[50%] w-[100%] flex justify-center items-center'>
            <div className='h-[95%] w-[80%] rounded-tr-3xl rounded-bl-3xl bg-[#b4ccbf] shadow-2xl shadow-[#32303054] flex flex-col items-center'>
                <div className='h-[20%] w-[100%] flex flex-col items-center'>
                    <img src={Logo} alt={"Library Icon"} className="object-contain h-[60%] w-[40%] mt-4" />
                    <div className=' font-bold font-sans text-xl text-[#0c2340]'>Login</div>
                </div>
                <div className='h-[70%] w-[100%] rounded-bl-3xl'>
                    <form onSubmit={(event) => {
                        onSubmitHandler(event)
                    }} className='h-[100%] w-[100%] flex flex-col items-center'>
                        <div className='w-[90%] flex flex-col'>
                            <label className=' text-[#0c2340] font-bold'>Email:</label>
                            <input name='email' type={"text"} placeholder="example@gmail.com" className=' h-[6vh] rounded-xl pl-2 mt-1' />
                        </div>
                        <div className='w-[90%] flex flex-col mt-4'>
                            <label className=' font-bold text-[#0c2340]'>Password:</label>
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className='h-[6vh] rounded-xl pl-2 mt-1' />
                        </div>
                        <div className=' h-[10%] w-[80%] items-center flex flex-row'>
                            <input className=' cursor-pointer h-[80%] flex justify-center items-center' onClick={onShowPasswordClickListener} type="checkbox" />
                            <p className='ml-2 h-[80%] text-sm mt-[-2px] text-[#0c2340] font-bold flex justify-center items-center'>Show Password</p>
                        </div>
                        {/* <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Don't have an account?{" "}
                            <NavLink
                                to={"/user/signup"}
                                className="font-medium text-purple-600 hover:underline"
                            >
                                Sign up
                            </NavLink>
                        </p> */}
                        {isLoading?<div className=' h-[7vh] w-[40%] text-white bg-[#8b1c1c] rounded-xl flex justify-center items-center'>Login.....</div>:<button className=' h-[7vh] w-[40%] text-white hover:bg-[#0c2340d2] text-md hover:shadow-md hover:shadow-black font-bold mt-5 bg-[#0c2340] rounded-xl' type='submit'>Login</button>}
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login