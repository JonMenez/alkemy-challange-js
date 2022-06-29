import logoSVG from '@icons/logo.svg'
import '@styles/logo.scss'

const Logo = () => {
    return (
        <a href='#' className='logo'>
            <img src={logoSVG} alt="logo moniger icon" />
        </a>
    )
}

export default Logo