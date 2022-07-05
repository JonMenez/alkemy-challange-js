import { useState } from 'react'
import CardTransactionModal from '@components/CardTransactionModal'
import { _formatBalance } from '../helpers/formatters'
import '@styles/cardTransaction.scss'

const CardTransaction = ({ description, balance, date, category, setTransactions }) => {
    const [isOpen, setIsOpen] = useState(false)

    const formatedBalance = _formatBalance(balance)

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
                    <p className={`cardTransaction-number ${operationType}`}>{formatedBalance}</p>
                    <span className='cardTransaction-span'>{category}</span>
                </div>
            </div>
            {
                isOpen && <CardTransactionModal
                    description={description}
                    balance={balance}
                    date={date}
                    category={category}
                    setIsOpen={setIsOpen}
                    setTransactions={setTransactions}
                    operationType={operationType}
                />
            }
        </>
    )
}

export default CardTransaction