import Button from '@components/Button';
import exitSVG from '@icons/exit.svg';
import '@styles/navBar.scss'

const NavBar = ({ isOpen, setIsOpen }) => {

    const show = isOpen ? 'show' : '';

    const _handleClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className={`navBar ${show}`}>
            <div className='navBar-logo'>
                <h2 className="navBar-title">Moniger</h2>
                <p className='navBar-text'>Track your activities</p>
                <span className='navBar-underscore'></span>
                <div onClick={_handleClick} className='navBar-exit'>
                    <img src={exitSVG} alt="exit icon" />
                </div>
            </div>
            <ul className="navBar-list">
                <li className="navBar-list-item">
                    <a className='navBar-list-link active' href="#">Home</a>
                </li>
                <li className="navBar-list-item">
                    <a className='navBar-list-link' href="#">Profile</a>
                </li>
                <li className="navBar-list-item">
                    <a className='navBar-list-link' href="#">About</a>
                </li>
                <li className="navBar-list-item">
                    <a className='navBar-list-link' href="#">Contact</a>
                </li>
            </ul>
            <Button
                title='Log out'
                classButton='navBar-button'
            />
        </nav>
    )
}

export default NavBar