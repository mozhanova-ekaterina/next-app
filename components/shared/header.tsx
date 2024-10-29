import React from 'react'
import clsx from 'clsx'
import {Button} from '../ui/index'

type Props = {
  className? : string
}

const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={clsx('border border-b', className, {
      // 'bg-white': true,
    })}>
      <div className="container">
        <div>
          <img width='100px' src="next.svg" alt="logo" />
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  )
}

export default Header