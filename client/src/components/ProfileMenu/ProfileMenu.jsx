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
          minWidth: '120px', }}>
      <Menu.Item>
        favorites
      </Menu.Item>
      <Menu.Item>
        Logout
      </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu