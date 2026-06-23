import { type HTMLAttributes } from 'react'
import styles from './Heading.module.css'
import findSlots from '../utils/findSlots'

const classMap = { 1: styles.h1, 2: styles.h2, 3: styles.h3 }

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3
}

function Subheading({ className, children, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={[styles.subheading, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </p>
  )
}

function Heading({ level, className, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3'
  const { subheading, rest: headingChildren } = findSlots(children, { subheading: Subheading })

  return (
    <hgroup>
      <Tag className={[classMap[level], className].filter(Boolean).join(' ')} {...rest}>
        {headingChildren}
      </Tag>
      {subheading}
    </hgroup>
  )
}

Heading.Subheading = Subheading

export default Heading
