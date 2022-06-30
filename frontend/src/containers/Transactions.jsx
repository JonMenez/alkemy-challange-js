import CardTransaction from '@components/CardTransaction'
import '@styles/transaction.scss'

const Transactions = () => {
    return (
        <section className='transaction'>
            <div className="transaction-thead">
                <p className="transaction-title">Name</p>
                <p className="transaction-title">Price</p>
            </div>
            <ul className="transaction-list">
                <CardTransaction balance={100} />
                <CardTransaction balance={100} />
            </ul>
        </section>
    )
}

export default Transactions