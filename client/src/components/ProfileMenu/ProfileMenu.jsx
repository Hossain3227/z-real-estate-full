import { Avatar, Menu } from '@mantine/core'
import React from 'react'

const ProfileMenu = ({user, logout}) => {
  return (
    <Menu withinPortal={false} position="bottom-start" offset={5}>
      <Menu.Target>
        <div>
          <Avatar src={user?.picture} alt='user image' radius={"xl"} />
        </div>
        
      </Menu.Target>
      <Menu.Dropdown style={{ position: "absolute", zIndex: 9999,display: 'flex',
          flexDirection: 'column',alignItems: 'flex-start',
          minWidth: '160px', }}>
      <Menu.Item 
      style={{
            fontSize: '1rem', // increase font size
            padding: '10px 16px', // bigger clickable area
            width: '100%', // make it stretch full width
          }}>
        favorites
      </Menu.Item>
      <Menu.Item 
      style={{
            fontSize: '1rem', // increase font size
            padding: '10px 16px', // bigger clickable area
            width: '100%', // make it stretch full width
          }}>
        Bookings
      </Menu.Item>
      <Menu.Item
      style={{
            fontSize: '1rem', // increase font size
            padding: '10px 16px', // bigger clickable area
            width: '100%', // make it stretch full width
          }}
      onClick={() => {
    // remove your own app data if needed
    localStorage.removeItem("myCustomKey");

    // let Auth0 handle logout
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }}>
        Logout
      </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu