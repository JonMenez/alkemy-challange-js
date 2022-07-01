import '@styles/cardTransaction.scss'

const CardTransaction = ({ description, balance, date, category }) => {

    const _formatBalance = (balance) => {
        if (balance < 0) {
            return `- $${Math.abs(balance).toFixed(2)}`
        }
        return `$${balance.toFixed(2)}`
    }

    const operationType = balance < 0 ? 'expense' : 'income'

    return (
        <div className='cardTransaction'>
            <div className='cardTransaction-left'>
                <p className="cardTransaction-info">{description}</p>
                <span className='cardTransaction-span'>{date}</span>
            </div>
            <div className='cardTransaction-right'>
                <p className={`cardTransaction-number ${operationType}`}>{_formatBalance(balance)}</p>
                <span className='cardTransaction-span'>{category}</span>
            </div>
        </div>
    )
}

export default CardTransaction