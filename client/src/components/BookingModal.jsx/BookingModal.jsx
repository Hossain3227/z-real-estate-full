import { Modal } from '@mantine/core'
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
        <div>
            <span>
                this is booking modal
            </span>
        </div>
    </Modal>
  )
}

export default BookingModal