    import React from 'react'
    import { useNavigate } from "react-router-dom";

    const Landing = () => {

        const navigate = useNavigate();

    return (
        <div className='relative'>
            <img className="h-screen w-full object-cover" src="https://img.magnific.com/free-vector/brick-wall-realistic_1284-4683.jpg?semt=ais_hybrid&w=740&q=80"></img>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-7xl font-bold '>Gallery</h1>
                <button onClick={()=>{
                    navigate("/gallery");
                }} className='bg-purple-500 mt-5 px-3 py-2 rounded-full text-lg active:scale-95'>Explore beatiful Images</button>
            </div>
        </div>
    )
    }

    export default Landing