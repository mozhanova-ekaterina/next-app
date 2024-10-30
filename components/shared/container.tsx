import clsx from "clsx"
import { PropsWithChildren } from "react"

type Props = {
  className?: string
}

const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={clsx('mx-auto max-w-[1280px] px-3', className)}>
      {children}
    </div>
  )
}

export default Container