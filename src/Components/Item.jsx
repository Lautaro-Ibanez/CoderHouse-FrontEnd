import React from 'react'

const Item = ({id,title,price,stock,image,description,category}) => {
  return (
    <div className='cardBox' key={id}>
      <h1 className='titleCard'>{title}</h1>
      <img  className='cardImage' src={image} />
      <p className='cardPrice'>Precio : ${price}</p>
      <p className='cardCategory'>Categoria: {category}</p>
      <p className='cardStock'>Disponible : {stock}</p>
    </div>
  )
}

export default Item