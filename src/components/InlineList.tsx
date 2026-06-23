import { type HTMLAttributes } from 'react'
import styles from './InlineList.module.css'

function InlineList({ className, children, ...rest }: HTMLAttributes<HTMLUListElement>) {
  return <ul className={[styles.list, className].filter(Boolean).join(' ')} {...rest}>{children}</ul>
}

function Item({ className, children, ...rest }: HTMLAttributes<HTMLLIElement>) {
  return <li className={[styles.item, className].filter(Boolean).join(' ')} {...rest}>{children}</li>
}

InlineList.Item = Item
export default InlineList
