import { NavLink } from 'react-router-dom'
import CardBalance from '@components/CardBalance'
import Transactions from '@containers/Transactions'
import '@styles/home.scss'
import CardTransaction from '../components/CardTransaction'

const Home = () => {
    return (
        <main className='home'>
            <CardBalance balance={-100.432} />
            <div className="home-container">
                <ul className="home-list">
                    <li className="home-list-title">Recent Transactions</li>
                    <li className="home-list-title-link">
                        <NavLink to='all-transactions/'>
                            See All
                        </NavLink>
                    </li>
                </ul>
                <Transactions>
                    <CardTransaction
                        description={"Shoes"}
                        balance={-100}
                        date={'2020-01-01'}
                        category={"Shppoing"}
                    />
                    <CardTransaction
                        description={"payment"}
                        balance={200}
                        date={'2020-01-23'}
                        category={"Deposit"}
                    />
                </Transactions>
            </div>
        </main>
    )
}

export default Home