import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../features/userSlice'
import { modifyDataUser } from '../../services/user'
import "./editName.css"

export default function EditModal({open}) {
    const [fname,setFname] = useState('')
    const [name,setName] = useState('')

    const dispatch = useDispatch()

    const user = useSelector((state)=>state.user.userData)


    const handleSetName = (e) =>{
        setName(e.target.value)
    }

    const handleSetFname = (e) =>{
        setFname(e.target.value)
    }

    const changeName = (e) =>{
        e.preventDefault()
        modifyDataUser(name, fname)
        .then((response)=>{
            dispatch(setUserData(response.data.body))
        })
    }

    return (
        <div className='editModal__container'>
            <div className='editModal__top'>
                <i class="fa-solid fa-xmark"></i>
            </div>

            <h2 className='editModal__title'>Modifier vos informations</h2>

            <form className='editModal__form'>
                <div className='editModal__input-container'>
                   <div className='editModal__input'>
                        <label for="fname">Nom</label>
                        <input id='fname' value={fname} placeholder={user.firstName} onChange={handleSetFname}></input>
                   </div>

                    <div className='editModal__input'>
                        <label for="name">Prénom</label>
                        <input id='name' value={name} placeholder={user.lastName} onChange={handleSetName}></input>
                    </div>
                </div>

                <div className='editModal__button-container'>
                    <button className='editModal__button' onClick={changeName}>Valider</button>
                    <button className='editModal__button' onClick={open=false}>Annuler</button>
                </div>
            </form>
        </div>
    )
}
