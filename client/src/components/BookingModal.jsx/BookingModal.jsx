import { Modal, Button } from '@mantine/core'
import {DatePicker} from '@mantine/dates'

import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import UserDetailContext from '../../Context/UserDetailContext.js'
import { bookVisit } from '../../utils/api.js'

const BookingModal = ({opened,setOpened,email,propertyId}) => {
  
  const [value, setValue] = useState(null);
  const {userDetails : {token}} = useContext(UserDetailContext);
  // console.log(token);
  
  const {mutate, isloading} = useMutation({
    mutationFn: ()=> bookVisit(value, propertyId, email, token),
  })
  
  return (
    <Modal 
    opened={opened}
    // setOpened={setOpened}
    onClose={() => setOpened(false)}
    title="Select your date of visit"
    centered
    >
        <div className="flexColCenter">
            <DatePicker
            value={value} onChange={setValue}  
            minDate={new Date()}     
            />
            <Button disabled={!value} onClick={()=>mutate()}>
            Book visit
            </Button>
        </div>
    </Modal>
  )
}

export default BookingModal