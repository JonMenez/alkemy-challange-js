import '@styles/input.scss'

const Input = ({ name, title, classLabel, classInput, classContainer, type, placeholder, pattern }) => {
    return (
        <div className={`input ${classContainer}`}>
            <label htmlFor={name} className={`input-label ${classLabel}`}>{title}</label>
            <input
                className={`input-field ${classInput}`}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                required
            />
        </div>
    )
}

export default Input