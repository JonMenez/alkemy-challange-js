import Input from "@components/Input"
import ArrowBack from "@components/ArrowBack"
import '@styles/login.scss'
import Button from "../components/Button"


const LoginPage = () => {
    return (
        <section className="login">
            <div className="login-header">
                <ArrowBack />
                <h1 className="login-title">Login your account</h1>
            </div>
            <Input
                name='user'
                title='Email'
                classLabel='login-label'
                classInput='login-input'
                type='email'
                placeholder="Enter your email"
            />
            <Input
                name='password'
                title='Password'
                classLabel='login-label'
                classInput='login-input'
                type='password'
                placeholder="Enter your password"
            />
            <Button
                classButton='login-button'
                title='Sign Up Now' />
            <p className="login-question">Doesn't have an account?<span><a className="login-sign-up" href="#">Sign Up</a></span> </p>
            <a className="login-forgot" href="#">Forgot password?</a>
        </section>
    )
}

export default LoginPage