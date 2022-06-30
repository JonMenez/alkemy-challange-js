import '@styles/cardBalance.scss'

const CardBalance = ({ balance }) => {

    const _formatBalance = (balance) => {
        if (balance < 0) {
            return `- $${Math.abs(balance).toFixed(2)}`
        }
        return `$${balance.toFixed(2)}`
    }

    return (
        <div className="cardBalance">
            <h2 className="cardBalance-title">CURRENT BALANCE</h2>
            <h3 className="cardBalance-number">{_formatBalance(balance)}</h3>
        </div>
    )
}

export default CardBalance