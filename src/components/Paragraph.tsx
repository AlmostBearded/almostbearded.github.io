import Text from './Text'
import styles from './Paragraph.module.css'
import { ComponentProps } from 'react'

function Paragraph({className, children, ...rest}: ComponentProps<typeof Text>) {
  return <Text className={[styles.paragraph, className].filter(Boolean).join(' ')} as='p' {...rest}>{children}</Text>
}

export default Paragraph