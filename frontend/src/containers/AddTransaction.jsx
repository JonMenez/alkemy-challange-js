import Input from '@components/Input'
import ListOfCategories from '@components/listOfCategories'
import '@styles/addTransaction.scss'

const Addtransaction = () => {
    return (
        <div className='addTracsaction'>
            <h2 className='addTransaction-title'>New transaction</h2>
            <div className="addTransaction-form">
                <Input
                    name='decription'
                    title='Description'
                    classLabel='addTransaction-label'
                    classInput=''
                    type='text'
                    placeholder='Enter details of transaction'
                />
                <div className="addTransaction-form-container">
                    <Input
                        name='amount'
                        title='Amount'
                        classLabel='addTransaction-label'
                        classInput=''
                        type='number'
                        placeholder='Enter amount'
                    />
                    <div className='addTransaction-form-select'>
                        <label
                            className='addTransaction-label'
                            htmlFor="operationType">
                            Select type
                        </label>
                        <select
                            name='operationType'
                            className="addTransaction-form"
                            defaultValue={''}>
                            <option
                                value=''
                                disabled
                                hidden
                            >Select type</option>
                            <option value="income">Income</option>
                            <option value="expence">Expense</option>
                        </select>
                    </div>
                </div>
                <div className="addTransaction-form-container">
                    <Input
                        name='Date'
                        title='Date'
                        classLabel='addTransaction-label'
                        classInput=''
                        type='date'
                        placeholder='Select date'
                    />
                    <div className='addTransaction-form-select'>
                        <label
                            className='addTransaction-label'
                            htmlFor="category">
                            Select category
                        </label>
                        <ListOfCategories
                            operationType='all'
                            placeholder='Category'
                            name='category'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtransaction