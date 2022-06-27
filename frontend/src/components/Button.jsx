import '@styles/button.scss'

const Button = ({ title, classButton }) => {
    return (
        <button className={`button ${classButton}`}>{title}</button>
    )
}

export default Button