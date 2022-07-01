import { useState } from 'react'
import Transactions from '@containers/Transactions'
import CardTransaction from '@components/CardTransaction'

import '@styles/transactionPage.scss'

const TransactionPage = () => {
    const [selected, setSelected] = useState({
        class: 'all',
        query: ''
    })

    const purchases = [
        {
            description: 'Restaurant',
            balance: -100,
            date: '2020-01-01',
            category: 'Food'
        },
        {
            description: 'Shoes',
            balance: -50,
            date: '2020-01-01',
            category: 'Restaurant'
        },
        {
            description: 'Ice Cream',
            balance: -50,
            date: '2020-01-01',
            category: 'Food'
        },
        {
            description: 'Payday',
            balance: 200,
            date: '2020-01-01',
            category: 'Deposit'
        }
    ]

    const _handleClass = (className) => {
        setSelected({
            class: className,
            query: ''
        })
    }

    const _handleSelect = (e) => {
        console.log(e.target)
        setSelected({
            class: 'all',
            query: e.target.value
        })

    }

    return (
        <main className='transactionPage'>
            <ul className="transactionPage-list">
                <li
                    className={`transactionPage-list-item ${selected.class === 'all' ? 'all' : ''}`}
                    onClick={() => _handleClass('all')}
                >
                    All
                </li>
                <li
                    className={`transactionPage-list-item ${selected.class === 'incomes' ? 'incomes' : ''}`}
                    onClick={() => _handleClass('incomes')}
                >
                    Incomes
                </li>
                <li
                    className={`transactionPage-list-item ${selected.class === 'expenses' ? 'expenses' : ''}`}
                    onClick={() => _handleClass('expenses')}
                >
                    Expenses
                </li>
            </ul>
            <div className="transactionPage-filter">
                <h2 className="transactionPage-filter-title">All transactions</h2>
                <select name='filter' defaultValue={''} className="transactionPage-filter-select">
                    <option onClick={_handleSelect} value='' disabled hidden>Filter by</option>
                    <option onClick={_handleSelect} value="show">Show all</option>
                    <option onClick={_handleSelect} value="Deposit">Deposit</option>
                    <option onClick={_handleSelect} value="Food">Food</option>
                    <option onClick={_handleSelect} value="Restaurant">Restaurant</option>
                    <option onClick={_handleSelect} value="Transport">Transport</option>
                    <option onClick={_handleSelect} value="Shopping">Shopping</option>
                    <option onClick={_handleSelect} value="Withdraw">Withdraw</option>
                </select>
            </div>
            <Transactions>
                {purchases
                    .filter(({ balance }) => {
                        if (selected.class === 'all') {
                            return true
                        }
                        if (selected.class === 'incomes') {
                            return balance > 0
                        }
                        return balance < 0
                    })
                    .filter(({ category }) => {
                        if (selected.query === '') {
                            return true
                        }
                        return category.includes(selected.query)
                    }
                    )
                    .map(({ description, balance, date, category }, index) => (
                        <CardTransaction
                            description={description}
                            balance={balance}
                            date={date}
                            category={category}
                            key={index} />
                    ))}
            </Transactions>
        </main>
    )
}

export default TransactionPage