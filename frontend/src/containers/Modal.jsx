import exitSVG from '@icons/exit.svg'
import '@styles/modal.scss'

const Modal = ({ children }, handleExit) => {
    return (
        <div className='backdrop'>
            <div className="modal">
                <div onClick={handleExit} className="modal-exit">
                    <img src={exitSVG} alt="" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal