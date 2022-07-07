import Button from '@components/Button';
import '@styles/contactPage.scss'

const ContactPage = () => {
    return (
        <div className='contact'>
            <h1 className='contact-title'>We're happy to know what you think!</h1>
            <p className='contact-text'>
                Hi, we are interested in hearing your opinion about the site, please feel free to leave your feedback.
            </p>
            <form className='contact-form' action="">
                <label htmlFor="contact" className="contact-label">Let us a comment:</label>
                <textarea name="" id="" className="contact-textarea" autoFocus></textarea>
                <Button
                    title='Send'
                    classButton='contact-button'
                />
            </form>
        </div>
    )
}

export default ContactPage