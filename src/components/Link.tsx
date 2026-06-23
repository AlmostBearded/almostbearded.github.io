import type { AnchorHTMLAttributes } from 'react'
import styles from './Link.module.css'

function Link({ className, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={[styles.link, className].filter(Boolean).join(' ')} {...rest}>{children}</a>
}

export default Link
