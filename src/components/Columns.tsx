import { HTMLAttributes } from "react"
import styles from './Columns.module.css'

interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
  columnWidth?: string
  children: React.ReactNode
}

function Columns({columnWidth, className, style, children, ...rest}: ColumnsProps) {
  return (
    <div
      className={styles.columns}
      style={{ columnWidth, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Columns
