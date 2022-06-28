import { useRef } from "react"
import Input from "@components/Input"
import ArrowBack from "@components/ArrowBack"
import Button from "../components/Button"
import '@styles/login.scss'


const LoginPage = () => {

    const form = useRef(null)

    const _handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(form.current)
        const data = {
            email: formdata.get('email'),
            password: formdata.get('password')
        }
        e.target.reset()
        return data
    }
    return (
        <section className="login">
            <div className="login-header">
                <ArrowBack />
                <h1 className="login-title">Login your account</h1>
            </div>
            <form onSubmit={_handleSubmit} ref={form} action="" method="post">
                <Input
                    name='email'
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
            </form>
            <p className="login-question">Doesn't have an account?<span><a className="login-sign-up" href="#">Sign Up</a></span> </p>
            <a className="login-forgot" href="#">Forgot password?</a>
        </section>
    )
}

export default LoginPage