import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from './Board';
import Backbutton from './Backbutton';

const Login = () => {
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/Board');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-xl w-full max-w-sm space-y-6'
      >
      <div className="flex gap-24">
        <Backbutton />
         <h2 className="text-3xl font-bold text-indigo-700 ">Login</h2>
  
 
</div>

         

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setMail(e.target.value)}
          className='w-full bg-gray-100 px-4 py-2 border rounded-md placeholder-red-700'
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPass(e.target.value)}
          className='w-full bg-gray-100 px-4 py-2 border rounded-md placeholder-red-700'
        />

        <button
          type='submit'
          className='justify-center rounded-md bg-blue-400 py-2 w-full text-white'
        >
          Login
        </button>
        
      </form>
     
    </div>
  );
};

export default Login;
