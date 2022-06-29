import Button from "@components/Button"
import googleSVG from "@icons/google.svg"
import '@styles/welcome.scss'

const WelcomePage = () => {
    return (
        <main className="welcome">
            <div className="welcome-container">
                <h1 className="welcome-logo">Moniger</h1>
                <p className="welcome-text">Better way to manage <span>your expenses</span></p>
                <div>
                    <Button title="Sign Up" classButton="welcome-button-primary" />
                    <Button title="Login" classButton="welcome-button-secondary" />
                </div>
                <p className="welcome-optional">or</p>
                <button className="welcome-google">
                    <img src={googleSVG} alt="google-logo" />
                    <span className="welcome-google-text">Sign in with Google</span>
                </button>
            </div>
        </main>
    )
}

export default WelcomePage