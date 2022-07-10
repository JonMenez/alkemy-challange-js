import Input from '@components/Input'
import Button from '@components/Button'
import ListOfCategories from '@components/listOfCategories'
import '@styles/addTransaction.scss'
import { useRef, useState } from 'react'

const Addtransaction = ({ onClose }) => {
    const [operationType, setOperationType] = useState('all')


    const form = useRef(null)

    const handleCategoryChange = (e) => {
        setOperationType(e.target.value)
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        let number = parseInt(formData.get('amount'))
        if (operationType === 'expenses') {
            number = number * -1
        }
        const data = {
            description: formData.get('description'),
            amount: number,
            date: formData.get('date'),
            operationType: operationType,
            category: formData.get('category'),
        }
        console.log(data)
        // onClose()
    }

    console.log(operationType)

    return (
        <form onSubmit={_handleSubmit} ref={form} className='addTransaction'>
            <h2 className='addTransaction-title'>New transaction</h2>
            <div className="addTransaction-form">
                <Input
                    name='description'
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
                        <select
                            onChange={handleCategoryChange}
                            name='operationType'
                            className="addTransaction-form-input"
                            defaultValue={''}
                        >
                            <option
                                value=''
                                disabled
                                hidden
                            >Select type</option>
                            <option value="incomes">Incomes</option>
                            <option value="expenses">Expenses</option>
                        </select>
                    </div>
                </div>
                <div className="addTransaction-form-container">
                    <Input
                        name='date'
                        title='Date'
                        classContainer='addTransaction-form-component'
                        classLabel='addTransaction-form-label'
                        classInput='addTransaction-form-input'
                        type='date'
                        placeholder='Select date'
                    />
                    <div className='addTransaction-form-component'>
                        {
                            operationType !== 'all'
                            &&
                            <ListOfCategories
                                operationType={operationType}
                                placeholder='Category'
                                name='category'
                                className='addTransaction-form-input'
                            />
                        }
                    </div>
                </div>
            </div>
            <Button
                type='submit'
                title="Add"
                classButton='addTransaction-button'
            />
            <Button
                onClick={onClose}
                type='button'
                title="Cancel"
                classButton='addTransaction-button-cancel'
            />
        </form >
    )
}

export default Addtransaction