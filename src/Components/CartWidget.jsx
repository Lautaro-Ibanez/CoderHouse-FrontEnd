import React from 'react'
import Cart from '../assets/carticon.svg'
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Button colorScheme='teal' variant='outline' className='cartButton'>
        <img className='iconCart' src={Cart} />
        <div className="bubbleCart">0 {/*Proxima funcion*/}</div> 
    </Button>
  )
}

export default CartWidget