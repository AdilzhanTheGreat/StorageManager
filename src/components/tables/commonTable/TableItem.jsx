import React from 'react'

const TableItem = ({product}) => {
  return (
    <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.phone}</td>
        <td>{product.website}</td>
    </tr>
  )
}

export default TableItem