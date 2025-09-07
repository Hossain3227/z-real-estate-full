// TestMenu.jsx
import React from "react";
import { Menu, Avatar } from "@mantine/core";

const TestMenu = () => {
  return (
    <div style={{ padding: "50px" }}>
      <Menu withinPortal={false} position="bottom-start">
        <Menu.Target>
          <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" radius="xl" />
        </Menu.Target>

        <Menu.Dropdown style={{ zIndex: 9999 }}>
          <Menu.Item>Favourites</Menu.Item>
          <Menu.Item>Bookings</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default TestMenu;
