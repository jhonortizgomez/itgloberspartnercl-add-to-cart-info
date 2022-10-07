import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import styles from './styles.css'
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const containerItem = generateBlockClass(styles.container__item, blockClass)
  const {
    orderForm: { items },
  } = useOrderForm()

  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={containerItem}>
            <div>
              <img src={item.imageUrls.at1x} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price / 100}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: por calcular</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
