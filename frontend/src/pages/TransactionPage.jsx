import { useState } from 'react'
import Transactions from '@containers/Transactions'
import CardTransaction from '@components/CardTransaction'

import '@styles/transactionPage.scss'
import ListOfCategories from '../components/listOfCategories'

const TransactionPage = () => {
    const [selected, setSelected] = useState({
        class: 'all',
        query: ''
    })

    const purchases = [
        {
            description: 'Lunch',
            balance: -100,
            date: '2020-01-01',
            category: 'Food'
        },
        {
            description: 'Shoes',
            balance: -25,
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

    const _handleClass = (className) => () => {
        setSelected({
            class: className,
            query: ''
        })
    }

    const _handleSelect = (e) => {
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
                    onClick={_handleClass('all')}
                >
                    All
                </li>
                <li
                    className={`transactionPage-list-item ${selected.class === 'incomes' ? 'incomes' : ''}`}
                    onClick={_handleClass('incomes')}
                >
                    Incomes
                </li>
                <li
                    className={`transactionPage-list-item ${selected.class === 'expenses' ? 'expenses' : ''}`}
                    onClick={_handleClass('expenses')}
                >
                    Expenses
                </li>
            </ul>
            <div className="transactionPage-filter">
                <h2 className="transactionPage-filter-title">All transactions</h2>
                <ListOfCategories
                    handleSelect={_handleSelect}
                    placeholder="Filter by"
                    operationType={selected.class}
                />
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