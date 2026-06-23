import { createElement, type HTMLAttributes } from 'react'
import styles from './Text.module.css'

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'strong'
  weight?: 'default' | 'bold'
  color?: 'default' | 'muted' | 'accent'
}

function Text({ as = 'span', weight, color, className, children, ...rest }: TextProps) {
  const classes = [
    weight === 'bold' && styles.bold,
    color === 'muted' && styles.muted,
    color === 'accent' && styles.accent,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(as, { className: classes, ...rest }, children)
}

export default Text
