import Button from '@components/Button';
import '@styles/contactPage.scss'

const ContactPage = () => {
    return (
        <div className='contact'>
            <h1 className='contact-title'>We're happy to know what you think!</h1>
            <p className='contact-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisl eget consectetur sagittis, nisl nunc
                consectetur nisi, euismod aliquam nisl nunc euismod nisi.
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