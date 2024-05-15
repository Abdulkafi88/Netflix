import React , {useState} from 'react'
import "../Style/Sign.css"
import {Link , useNavigate} from'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
const Sign = ({setuser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handlLogin = async (e)=>{
     e.preventDefault()
      try{
            const userCredential = await signInWithEmailAndPassword(auth , email,password)
            const userLogined = userCredential.user
            {userLogined ? navigate('/ Content') : console.log('use the right login info') }
            if(userLogined){
              navigate("/Content"); 
               setuser(userLogined.email)
            }
            
      }catch(err){
          console.log(err)  
      }
    }
  return (
    <>
      <nav>
        <a href="#">
          <img
            src="http://codingstella.com/wp-content/uploads/2024/01/580b57fcd9996e24bc43c529.png"
            alt="logo"
          />
        </a>
      </nav>
      <div class="form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handlLogin}>
          <div class="form-control">
            <input type="text" name="" id="" required onChange={(e)=>setEmail(e.target.value)}/>
            <label>Email or phone number</label>
          </div>
          <div class="form-control">
            <input type="password"  required onChange={(e)=>setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <button >Sign In</button>
          <div class="form-help">
            <div class="remember-me">
            
            </div>
            <a href="#">Need help?</a>
          </div>
        </form>
        <p>
          New to Netflix? <Link to="/SignUp">Sign up now</Link>
        </p>
       
      </div>
    </>
  )
}

export default Sign