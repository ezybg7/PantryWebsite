import './login.css'
import Navbar from '../../components/navbar'

const Login = () => {
  return ( 
    <div>
      <Navbar/>
      <title>Pantry | Login</title>
      <h1>Login Page</h1>
      <div class="container">
        <div class="text">Login</div>
        <form action="#">
            <div class="data">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div class="data">
                <label for="password">Password</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div class="forgot-pass">
                <a href="#">Forgot Password?</a>
            </div>
            <div class="btn">
                <button type="submit">login</button>
            </div>
            <div class="signup-link">
                Not a member?
                <a href="/register.html">Signup now</a>
            </div>

        </form>
    </div>
    </div>
   );
}
 
export default Login;