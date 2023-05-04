import "./login.css";
import Link from "next/link";
import Navbar from "../../components/navbar";

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb",
});

const Login = () => {
    return (
        <div>
            <Navbar />
            <title>Pantry | Login</title>
            <h1>Login Page</h1>
            <div class="container">
                <div class="text">Login</div>
                <form action="#">
                    <div class="data">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div class="data">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div class="forgot-pass">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div class="btn">
                        <button type="submit">login</button>
                    </div>
                    <div class="signup-link">
                        Not a member?
                        <Link href="/login/register"> Signup </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
