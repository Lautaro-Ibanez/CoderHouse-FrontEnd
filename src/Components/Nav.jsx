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
import { Link } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'

const Nav = () => {
  return (
    <div className='navBox'>
      <div className="brand">GraphicsCenter</div>
      <div className="menu">
        <Menu>
          <Link to={`/catalogue`}>
          <MenuButton as={Button}>
            Catalogue
          </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
          </MenuButton>
          <MenuList>
            <Link to={`category/${"Nvidia"}`}>
            <MenuItem>Nvidia</MenuItem>
            </Link>
            <Link to={`category/${"Radeon"}`}>
            <MenuItem>Radeon</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
      <CartWidget />
    </div>
  )
}

export default Nav