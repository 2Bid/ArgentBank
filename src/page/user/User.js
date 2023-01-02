import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import EditName from '../../components/editName/EditName'
import TransactBloc from '../../components/transactBloc/TransactBloc'
import { setUserData } from '../../features/userSlice'
import { dataUser } from '../../services/user'

import './user.css'

export default function User() {

  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user.userData)

  useEffect(()=>{
    dataUser()
    .then((response)=>{
      dispatch(setUserData(response.data.body))
    })
  },[])

  const [isEditOpen, setIsEditOpen] = useState(false)

  function isUserEditing() {
    if(isEditOpen){
      return <EditName open={isEditOpen} setOpen={setIsEditOpen}/>
    }
    else{
      return(
        <>
          <h1 className='user__text'>Welcome back<br/>{user.firstName} {user.lastName}</h1>
          <button className='user__button--edit' onClick={()=>setIsEditOpen(true)}>Edit Name</button>
        </>
      )
    }
  }

  return (
    <div className='user__page'>
      <div className='user__header'>
        {
          isUserEditing()
        }
      </div>

      <TransactBloc />
      <TransactBloc />
      <TransactBloc />
    </div>
  )
}
