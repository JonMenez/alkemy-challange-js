import '@styles/listOfCategories.scss'

const ListOfCategories = ({ handleSelect, className, placeholder, operationType, defaultvalue = '' }) => {

    const categories = [{
        name: 'Show All',
        value: '',
        type: 'all'
    },
    {
        name: 'Food',
        value: 'Food',
        type: 'expenses'
    },
    {
        name: 'Deposit',
        value: 'Deposit',
        type: 'incomes'
    },
    {
        name: 'Restaurant',
        value: 'Restaurant',
        type: 'expenses'
    },
    {
        name: 'Transport',
        value: 'Transport',
        type: 'expenses'
    },
    {
        name: 'Shopping',
        value: 'Shopping',
        type: 'expenses'
    },
    {
        name: 'Withdraw',
        value: 'Withdraw',
        type: 'expenses'
    }]

    return (
        <select name='filter' defaultValue={defaultvalue} className={`filter-select ${className}`}>
            <option onClick={handleSelect} value='' disabled hidden>{placeholder}</option>
            {categories.filter(({ type }) => {
                if (operationType === 'all') {
                    return true
                }
                return type === operationType.toLowerCase()
            })
                .map(category => (
                    <option key={category.value} onClick={handleSelect} value={category.value}>{category.name}</option>
                ))}
        </select>
    )
}

export default ListOfCategories