import '@styles/cardTransaction.scss'

const CardTransaction = ({ balance }) => {

    const _formatBalance = (balance) => {
        if (balance < 0) {
            return `- $${Math.abs(balance).toFixed(2)}`
        }
        return `$${balance.toFixed(2)}`
    }

    return (
        <div className='cardTransaction'>
            <div className='cardTransaction-left'>
                <p className="cardTransaction-info">Shoes</p>
                <span className='cardTransaction-span'>13/03/2022</span>
            </div>
            <div className='cardTransaction-right'>
                <p className="cardTransaction-number">{_formatBalance(balance)}</p>
                <span className='cardTransaction-span'>Shopping</span>
            </div>
        </div>
    )
}

export default CardTransaction