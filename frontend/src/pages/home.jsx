import { NavLink } from 'react-router-dom'
import CardBalance from '@components/CardBalance'
import Transactions from '@containers/Transactions'
import '@styles/home.scss'

const Home = () => {
    return (
        <main className='home'>
            <CardBalance balance={-100.432} />
            <div className="home-container">
                <ul className="home-list">
                    <li className="home-list-title">Recent Transactions</li>
                    <li className="home-list-title-link">
                        <NavLink to='/all-transactions'>
                            See All
                        </NavLink>
                    </li>
                </ul>
                <Transactions />
            </div>
        </main>
    )
}

export default Home