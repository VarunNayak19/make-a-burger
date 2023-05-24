import React from 'react'
import HomeBurger from "../../assets/main-img.png"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='HomeContainer overflow-x-hidden min-h-screen w-full px-2  mx-auto relative md:px-36'>
            <div className='md:absolute md:top-[300px] hidden md:flex MakeText md:text-8xl text-3xl mt-8 ml-4 w-[400px] font-bold '>Make Your Burger</div>
            <img src={HomeBurger} alt="burger" className='absolute w-100% md:h-[80%] BurgerImage delay-500 top-[150px] md:right-[50px]' />
            <div onClick={() => {
                navigate("/make-a-burger")
            }} className='MakeButton uppercase tracking-wider hover:tracking-widest font-sans delay-150 absolute w-[140px] h-[140px] rounded-[50%] bg-indigo-900 text-white flex flex-col justify-center items-center text-lg md:bottom-[100px] bottom-2 right-[60%] md:right-[750px] cursor-pointer'>
                <span>Make</span><span>Burger</span>
            </div>

        </div>
    )
}

export default Home