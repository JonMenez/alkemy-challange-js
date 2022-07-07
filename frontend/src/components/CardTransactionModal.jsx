import { useState } from 'react'
import { _formatBalance } from '../helpers/formatters'
import exitSVG from '@icons/exit.svg'
import editSVG from '@icons/pen.svg'
import deleteSVG from '@icons/trash.svg'
import acceptSVG from '@icons/accept.svg'
import ListOfCategories from '@components/listOfCategories'
import '@styles/cardTransactionModal.scss'

const CardTransactionModal = ({ description, balance, date, category, setIsOpen, setTransactions, operationType }) => {
    const [newCard, setNewCard] = useState({ description, balance, date, category })


    const _handleMode = ([mode]) => () => {
        if (mode) {
            setOption({
                title: mode === 'edit' ?
                    'Would you like to save changes?'
                    : 'Are you sure you want to delete this transaction?',
                leftIcon: acceptSVG,
                rightIcon: exitSVG,
                leftText: 'Accept',
                rightText: 'Cancel',
                leftAction: () => {
                    setOption(initial_ModeState)
                    setIsOpen(false)

                }
                , rightAction: () => {
                    setOption(initial_ModeState)
                    setNewCard(initial_CardState)
                },
                textColor: mode === 'edit' ? 'editColor' : 'deleteColor',
                editMode: mode === 'edit' ? true : false,
            })
        }
        return
    }

    const initial_ModeState = {
        title: 'Options',
        leftIcon: editSVG,
        rightIcon: deleteSVG,
        leftText: 'Edit',
        rightText: 'Delete',
        leftAction: _handleMode(['edit']),
        rightAction: _handleMode(['delete']),
        textColor: '',
        editMode: false,
    }

    const initial_CardState = {
        description,
        balance,
        date,
        category
    }

    const [option, setOption] = useState(initial_ModeState)


    const _handleChange = ({ target: { value, name } }) => {
        setNewCard((prev) => ({ ...prev, [name]: value }))
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        // setNewCard({ ...newCard, balance: Number(newCard.balance) })
        // setCardInfo({ ...newCard, balance: Number(newCard.balance) })
        // setTransactions({
        //     description: 'hola',
        //     balance: 40,
        //     date: 'hola',
        //     category: 'hola'
        // })
    }

    return (
        <div
            className='backdrop'>
            <form
                onSubmit={(e) => _handleSubmit(e)}
                className='modal'>
                <div
                    onClick={() => setIsOpen(false)}
                    className='modal-exit'>
                    <img src={exitSVG} alt="cancel icon" />
                </div>
                {
                    option.editMode ?
                        <input
                            onChange={_handleChange}
                            className='modal-editMode modal-balance'
                            name="balance"
                            type="number"
                            value={newCard.balance}
                        />
                        :
                        <p className='modal-number'>{_formatBalance(newCard.balance)}</p>

                }
                <p className='modal-type'>{operationType}</p>
                <div className="modal-container">
                    <div className='modal-container-input'>
                        <label htmlFor="info">Category</label>
                        {
                            option.editMode ?
                                <ListOfCategories
                                    className={'modal-input-list'}
                                    defaultvalue={newCard.category}
                                    handleChange={_handleChange}
                                    name={'category'}
                                    operationType={operationType}
                                    placeholder="Select"
                                />
                                :
                                <p>{newCard.category}</p>
                        }
                    </div>
                    <div className='modal-container-input'>
                        <label htmlFor="info">Date</label>
                        {
                            option.editMode ?
                                <input
                                    onChange={_handleChange}
                                    className='modal-editMode'
                                    name="date"
                                    type="date"
                                    value={newCard.date}
                                />
                                :
                                <p>{newCard.date}</p>
                        }
                    </div>
                    <div className='modal-container-input'>
                        <label htmlFor="info">Description</label>
                        {
                            option.editMode ?
                                <input
                                    onChange={_handleChange}
                                    className='modal-editMode'
                                    name="description"
                                    type="text"
                                    value={newCard.description}
                                />
                                :
                                <p>{newCard.description}</p>
                        }
                    </div>
                </div>

                <p className={`modal-options-title ${option.textColor}`}>{option.title}</p>
                <div className="modal-options-container">
                    <div
                        className='modal-button'>
                        <button
                            type='submit'
                            onClick={option.leftAction}
                            className='button-edit'>
                            <img src={option.leftIcon} alt="edit icon" />
                        </button>
                        <p className='modal-options-label'>{option.leftText}</p>
                    </div>
                    <div
                        className='modal-button'>
                        <button
                            onClick={option.rightAction}
                            className='button-detele'>
                            <img src={option.rightIcon} alt="delete icon" />
                        </button>
                        <p className='modal-options-label'>{option.rightText}</p>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default CardTransactionModal