import CardTransactionModal from '@components/CardTransactionModal'
import '@styles/cardTransaction.scss'
import { useState } from 'react'

const CardTransaction = ({ description, balance, date, category }) => {
    const [isOpen, setIsOpen] = useState(false)

    const _formatBalance = (balance) => {
        if (balance < 0) {
            return `- $${Math.abs(balance).toFixed(2)}`
        }
        return `$${balance.toFixed(2)}`
    }

    const _handleClick = () => {
        setIsOpen(true)
    }

    const operationType = balance < 0 ? 'Expenses' : 'Incomes'

    return (
        <>
            <div
                onClick={_handleClick}
                className='cardTransaction'>
                <div className='cardTransaction-left'>
                    <p className="cardTransaction-info">{description}</p>
                    <span className='cardTransaction-span'>{date}</span>
                </div>
                <div className='cardTransaction-right'>
                    <p className={`cardTransaction-number ${operationType}`}>{_formatBalance(balance)}</p>
                    <span className='cardTransaction-span'>{category}</span>
                </div>
            </div>
            {
                isOpen && <CardTransactionModal
                    description={description}
                    balance={_formatBalance(balance)}
                    date={date}
                    category={category}
                    setIsOpen={setIsOpen}
                    operationType={operationType}
                />
            }
        </>
    )
}

export default CardTransaction