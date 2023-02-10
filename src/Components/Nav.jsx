import React from 'react'
import CartWidget from './CartWidget'
import '../Components/Nav.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Nav = () => {
  return (
    <div className='navBox'>
      <div className="brand">GraphicsCenter</div>
      <div className="menu">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Nvidia</MenuItem>
            <MenuItem>Radeon</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <CartWidget />
    </div>
  )
}

export default Nav