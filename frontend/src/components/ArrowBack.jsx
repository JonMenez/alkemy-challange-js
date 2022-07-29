import { useNavigate } from 'react-router-dom'
import arrowBack from '@icons/arrow-back.svg'
import '@styles/arrowBack.scss'

const ArrowBack = () => {
    const navigate = useNavigate()

    const handleClick = () => navigate('/')

    return (
        <div onClick={handleClick} className="arrow-back">
            <img src={arrowBack} alt="arrow back icon" />
        </div>
    )
}

export default ArrowBack