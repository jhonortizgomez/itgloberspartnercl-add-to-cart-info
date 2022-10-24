import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useCssHandles } from 'vtex.css-handles'

import ButtonGroup from './ButtonGroup'

const AddToCartInfo = () => {
  const {
    orderForm: { items },
  } = useOrderForm()

  const CSS_HANDLES = [
    'container',
    'containerItem',
    'containerItemImage',
    'containerItem__info',
    'itemImage',
    'itemName',
    'itemId',
    'itemPrice',
    'itemQuantity',
    'containerTotalItems',
    'totalItems',
    'total',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={handles.containerItem}>
            <div className={handles.containerItemImage}>
              <img
                className={handles.itemImage}
                src={item.imageUrls.at1x}
                alt={item.name}
              />
            </div>
            <div className={handles.containerItem__info}>
              <p className={handles.itemName}>{item.name}</p>
              <p className={handles.itemId}>{item.id}</p>
              <p className={handles.itemPrice}>${item.price / 100}</p>
              <p className={handles.itemQuantity}>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div className={handles.containerTotalItems}>
        <p className={handles.totalItems}>
          Tenemos {items.length} items en tu compra
        </p>
        <p className={handles.total}>Total: por calcular</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
