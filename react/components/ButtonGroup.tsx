import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const ButtonGroup = () => {
  const CSS_HANDLES = [
    'containerButton',
    'buttonModal',
    'buttons',
    'buttonModalLink',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.buttons}>
      <div className={handles.containerButton}>
        <button className={handles.buttonModal}>
          <a className={handles.buttonModalLink} href="/">
            Checkout
          </a>
        </button>
      </div>
      <div className={handles.containerButton}>
        <button className={handles.buttonModal}>Continua Comprando</button>
      </div>
    </div>
  )
}

export default ButtonGroup
