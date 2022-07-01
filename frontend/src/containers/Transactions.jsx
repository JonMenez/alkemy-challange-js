import CardTransaction from '@components/CardTransaction'
import '@styles/transaction.scss'

const Transactions = ({ children }) => {
    return (
        <section className='transaction'>
            <div className="transaction-thead">
                <p className="transaction-title">Name</p>
                <p className="transaction-title">Price</p>
            </div>
            <ul className="transaction-list">
                {children}
            </ul>
        </section>
    )
}

export default Transactions