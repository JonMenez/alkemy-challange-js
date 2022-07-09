import '@styles/button.scss'

const Button = ({ title, classButton, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${classButton}`}>
            {title}
        </button>
    )
}

export default Button