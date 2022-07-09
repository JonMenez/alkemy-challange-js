import Input from '@components/Input'
import Button from '@components/Button'
import ListOfCategories from '@components/listOfCategories'
import '@styles/addTransaction.scss'

const Addtransaction = ({ onClose }) => {
    return (
        <form className='addTransaction'>
            <h2 className='addTransaction-title'>New transaction</h2>
            <div className="addTransaction-form">
                <Input
                    name='decription'
                    title='Description'
                    classContainer='addTransaction-form-description'
                    classLabel='addTransaction-form-label'
                    classInput='addTransaction-form-description-input'
                    type='text'
                    placeholder='Enter details of transaction'
                />
                <div className="addTransaction-form-container">
                    <Input
                        name='amount'
                        title='Amount'
                        classContainer='addTransaction-form-component'
                        classLabel='addTransaction-form-label'
                        classInput='addTransaction-form-input'
                        type='number'
                        placeholder='Enter amount'
                    />
                    <div className='addTransaction-form-component'>
                        <label
                            className='addTransaction-form-label'
                            htmlFor="operationType">
                            Select type
                        </label>
                        <select
                            name='operationType'
                            className="addTransaction-form-input"
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
                        classContainer='addTransaction-form-component'
                        classLabel='addTransaction-form-label'
                        classInput='addTransaction-form-input'
                        type='date'
                        placeholder='Select date'
                    />
                    <div className='addTransaction-form-component'>
                        <label
                            className='addTransaction-form-label'
                            htmlFor="category">
                            Select category
                        </label>
                        <ListOfCategories
                            operationType='all'
                            placeholder='Category'
                            name='category'
                            className='addTransaction-form-input'
                        />
                    </div>
                </div>
            </div>
            <Button
                type='submit'
                title="Add transaction"
                classButton='addTransaction-button'
            />
            <Button
                onClick={onClose}
                type='button'
                title="Cancel"
                classButton='addTransaction-button-cancel'
            />
        </form>
    )
}

export default Addtransaction