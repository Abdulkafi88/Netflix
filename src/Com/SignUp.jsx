    import React ,{ useState } from 'react'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { auth } from "../Firebase"
    import {Link} from 'react-router-dom'
    import { useNavigate } from 'react-router-dom'
    import "../Style/Sign.css"
    const SignUp = ({ user, setuser }) => {
      const [email, setEmail] = useState("")
      const [Password, setPassword] = useState("")
      const navigate = useNavigate()
      const hanldSignup = async (e) => {
        e.preventDefault()
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            Password
          )
          if(userCredential.user && userCredential.user.email ){
           setuser(userCredential.user.email)
            //  setUserEmail(res.user.email);
          }
          if (userCredential ) {
            navigate("/Content")
          }
          console.log(userCredential.user)
        } catch (err) {
          console.log("you err is " + err.message)
        }
      }
      return (
        <div
          className="me"
          style={{
            backgroundImage:
              'url("http://codingstella.com/wp-content/uploads/2024/01/download-4.jpeg")',
          }}
        >
          <nav>
            <a href="#">
              <img 
                src="http://codingstella.com/wp-content/uploads/2024/01/580b57fcd9996e24bc43c529.png"
                alt="logo"
              />
            </a>
          </nav>
          <div class="form-wrapper">
            <h2>Sign up</h2>
            <form onSubmit={hanldSignup}>
              <div class="form-control">
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email or phone number</label>
              </div>
              <div class="form-control">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>
              <button type="submit" onClick={hanldSignup}>
                Sign Up
              </button>
              <div class="form-help">
                <div class="remember-me">
                  <input type="checkbox" name="" id="remember-me" required />
                  <label for="remember-me">Remember me</label>
                </div>
                <a href="#">Need help?</a>
              </div>
            </form>
            <p>
                already have  Netflix  account ?<Link to="/Sign">Sign up now</Link>
            </p>
          </div>
        </div>
      )
    }

    export default SignUp