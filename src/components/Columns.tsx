import { HTMLAttributes } from "react"
import styles from './Columns.module.css'

type ContainerToken<T> = T | { base?: T; sm?: T; md?: T; lg?: T }
type ContainerCSSVariables<T extends string> = `--${T}-base` | `--${T}-sm` | `--${T}-md` | `--${T}-lg`

type ContainerColumnCountCSSVariables = ContainerCSSVariables<'column-count'>

interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>
  columnCount?: ContainerToken<number>
  children: React.ReactNode
}

function Columns({columnCount, className, style, containerProps: {className: containerClassName, ...containerRest} = {}, children, ...rest}: ColumnsProps) {
  const inlineStyles: Partial<Record<ContainerColumnCountCSSVariables, number>> = {}

  if (typeof columnCount === 'object') {
    if (columnCount.base) inlineStyles['--column-count-base'] = columnCount.base
    if (columnCount.sm) inlineStyles['--column-count-sm'] = columnCount.sm
    if (columnCount.md) inlineStyles['--column-count-md'] = columnCount.md
    if (columnCount.lg) inlineStyles['--column-count-lg'] = columnCount.lg
  } else if (columnCount) {
    inlineStyles['--column-count-base'] = columnCount;
  }

  return <div className={[styles.container, containerClassName].filter(Boolean).join(' ')} {...containerRest}>
    <div className={[styles.columns, className].filter(Boolean).join(' ')} style={{...inlineStyles, ...style}} {...rest}>
      {children}
    </div>
  </div>
}

export default Columns