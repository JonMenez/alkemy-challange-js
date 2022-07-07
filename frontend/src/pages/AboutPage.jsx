import imag1 from '@images/about1.jpg'
import imag2 from '@images/about2.jpg'
import '@styles/aboutPage.scss'

const AboutPage = () => {
    return (
        <div className='about'>
            <h1 className='about-title'>About this site</h1>
            <h2 className="about-subtitle">Where does the name <span className='about-brand'>Moniger</span>  come from?</h2>
            <div className="about-img">
                <img src={imag1} alt="" />
            </div>
            <p className='about-text'>
                The name was thought using naming techniques, two words were selected that are related to the proposal of the site. We took similar sounding syllables with the exception of "ey" which was modified for its sound and replaced by "I".
            </p>
            <div className="about-img">
                <img src={imag2} alt="" />
            </div>
            <p className='about-text'>
                This is how the name of the site was created. Inspired by its functions, firstly to keep track of your daily expenses and secondly to be able to manage your finances. <span className='about-brand'>Moniger</span>  is a <span className='about-emphasis'>money manager</span>.
            </p>
        </div>
    )
}

export default AboutPage