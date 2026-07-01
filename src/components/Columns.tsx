import { HTMLAttributes } from "react"

interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
  columnWidth?: string
  children: React.ReactNode
}

function Columns({columnWidth, className, style, children, ...rest}: ColumnsProps) {
  return (
    <div
      className={className}
      style={{ columnWidth, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Columns
