import React, { useContext } from 'react'
import Cart from '../assets/carticon.svg'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const {listaCart} = useContext(CartContext)

  return (
    <Link to={`/Cart`}>
    <Button colorScheme='teal' variant='outline' className='cartButton'>
        <img className='iconCart' src={Cart} />
        <div className="bubbleCart"> {listaCart.length}</div> 
    </Button>
    </Link>
  )
}

export default CartWidget