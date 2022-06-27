import '@styles/input.scss'

const Input = ({ name, title, classLabel, classInput, type, placeholder }) => {
    return (
        <div className='input'>
            <label htmlFor={name} className={`input-label ${classLabel}`}>{title}</label>
            <input
                className={`input-field ${classInput}`}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input