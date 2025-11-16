import React, { useState } from 'react'

const Login = () => {

    const [state,setstate]=useState('signup');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


  return (
    <div className='flex justify-center items-center mt-30 mb-40 '>
     <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-200">

        <p className='font-semibold text-2xl  '> Please {state==='signup'?"Signup":"Login"} to continue</p>
        
        {
          state==='signup' && <div>
            <p className='mt-4'>Full Name</p>
            <input className='border border-zinc-200 p-1 mt-2 w-full ' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          </div>
        }
        <div>
          <p className='mt-4'>Email</p>
            <input className='border border-zinc-200 p-1 mt-2 w-full ' type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
         <div>
          <p className='mt-4'>Password</p>
            <input className='border border-zinc-200 p-1 mt-2 w-full ' type="text" onChange={(e)=>setPassword(e.target.value)} value={password} />
        </div>
        <button className='bg-primary text-white w-full rounded-2xl mt-4 mb-4' >{state==='signup'?"Create Account":"Login"}</button>
        {
          state==='signup'
          ? <p>Already have an account? <span onClick={()=>setstate('login')} className='text-primary underline cursor-pointer '>Login Here</span></p>
          : <p>Don't have an account? <span onClick={()=>setstate('signup')} className='text-primary underline cursor-pointer '>Signup Here</span></p>
        }
      </div>
    </div>
  )
}

export default Login
