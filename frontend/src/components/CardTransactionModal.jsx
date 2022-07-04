import { useState } from 'react'
import exitSVG from '@icons/exit.svg'
import editSVG from '@icons/pen.svg'
import deleteSVG from '@icons/trash.svg'
import acceptSVG from '@icons/accept.svg'
import '@styles/cardTransactionModal.scss'
import ListOfCategories from './listOfCategories'

const CardTransactionModal = ({ description, balance, date, category, setIsOpen, operationType }) => {

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
                    console.log('accept')
                }
                , rightAction: () => {
                    console.log('cancel')
                },
                textColor: mode === 'edit' ? 'editColor' : 'deleteColor',
                editMode: mode === 'edit' ? true : false,
            })
        }

        return

    }
    const [option, setOption] = useState({
        title: 'Options',
        leftIcon: editSVG,
        rightIcon: deleteSVG,
        leftText: 'Edit',
        rightText: 'Delete',
        leftAction: _handleMode(['edit']),
        rightAction: _handleMode(['delete']),
        textColor: '',
        editMode: false,

    })

    const [cardInfo, setCardInfo] = useState({
        description: description,
        balance: balance,
        date: date,
        category: category
    })


    return (
        <div
            className='backdrop'>
            <section className='modal'>
                <div
                    onClick={() => setIsOpen(false)}
                    className='modal-exit'>
                    <img src={exitSVG} alt="cancel icon" />
                </div>
                <p className='modal-number'>{balance}</p>
                <p className='modal-type'>{operationType}</p>
                <div className="modal-container">
                    <div className='modal-container-input'>
                        <label htmlFor="info">Category</label>
                        {
                            option.editMode ?
                                <ListOfCategories
                                    className={'modal-input-list'}
                                    defaultvalue={cardInfo.category}
                                    // handleSelect={_handleSelect}
                                    placeholder="Select"
                                    operationType={operationType}
                                />
                                :
                                <p>{cardInfo.category}</p>
                        }
                    </div>
                    <div className='modal-container-input'>
                        <label htmlFor="info">Date</label>
                        {
                            option.editMode ?
                                <input
                                    className='modal-editMode'
                                    name="date"
                                    type="text"
                                    value={cardInfo.date}
                                />
                                :
                                <p>{cardInfo.date}</p>
                        }
                    </div>
                    <div className='modal-container-input'>
                        <label htmlFor="info">Description</label>
                        {
                            option.editMode ?
                                <input
                                    className='modal-editMode'
                                    name="description"
                                    type="text"
                                    value={cardInfo.description}
                                />
                                :
                                <p>{cardInfo.description}</p>
                        }
                    </div>
                </div>

                <p className={`modal-options-title ${option.textColor}`}>{option.title}</p>
                <div className="modal-options-container">
                    <div
                        className='modal-button'>
                        <button
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
            </section >
        </div >
    )
}

export default CardTransactionModal