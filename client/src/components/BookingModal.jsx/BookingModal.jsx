import { Modal, Button } from '@mantine/core'
import {DatePicker} from '@mantine/dates'

import React from 'react'

const BookingModal = ({opened,setOpened,email,propertyId}) => {
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
            />
            <Button>
            Book visit
            </Button>
        </div>
    </Modal>
  )
}

export default BookingModal