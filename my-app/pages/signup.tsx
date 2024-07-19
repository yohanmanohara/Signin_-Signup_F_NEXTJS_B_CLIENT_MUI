// pages/signup.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
const SignUp = () => {


  const router = useRouter();
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(password !== conPassword){
      alert('passwords do not match');
      return;
    };
  
    try{
     const res= await fetch ('/api/register', {	
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name , email, password, setConPassword}),
      }
      );
  
      if (res.ok)
        {
          setName('');
          setEmail('');
          setPassword('');
          setConPassword('');
          router.push('/employer/hiring/jobs');
          
          
         
        }
        else{
          setName('');
          setEmail('');
          setPassword('');
          setConPassword('');
          
          console.log('not registers  ');
          alert('Already have account');
        }
  
    }catch (error){
  
      console.log('An error occured',error);
      alert('An error occured');
    }
  
  
  
  }
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
