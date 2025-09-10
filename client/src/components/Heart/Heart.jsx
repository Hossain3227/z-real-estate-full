import React, { useContext, useState } from 'react'
import useAuthCheck from '../../hooks/useAuthCheck'
import { AiFillHeart } from 'react-icons/ai'
import { useMutation } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../../Context/UserDetailContext'

const Heart = ({id}) => {

    const [heartColor,setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck();
    const {user} = useAuth0()
    const {userDetails : {token, bookings}, setUserDetails} = useContext(UserDetailContext);

    const {mutate} = useMutation({
        mutationFn: ()=> toFav(id,user?.email,token)
    })

    const handleLike = () => {
        if(validateLogin()){
            mutate()
            setHeartColor((prev)=> prev === "fa3e5f" ? "white" : "fa3e5f")
        }
    }

  return (
    <AiFillHeart size={24} color={heartColor} onClick={(e)=> {
        e.stopPropagation()
        handleLike()
    }}/>
  )
}

export default Heart