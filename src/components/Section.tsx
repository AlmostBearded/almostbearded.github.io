import { createContext, useContext, type HTMLAttributes, type ReactNode } from 'react'
import styles from './Section.module.css'
import _Heading from './Heading'
import findSlots from '../utils/findSlots'

const SectionContext = createContext({ level: 1 })

function Section({ className, children, ...rest }: HTMLAttributes<HTMLElement>) {
  const { level } = useContext(SectionContext)
  const { heading, content } = findSlots(children, { heading: Heading, content: Content });

  return (
    <SectionContext.Provider value={{ level: level + 1 }}>
      <section className={[styles.section, className].filter(Boolean).join(' ')} {...rest}>
        {heading}
        {content}
      </section>
    </SectionContext.Provider>
  )
}

function Heading({ className, children, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  const { level } = useContext(SectionContext)
  const clamped = Math.min(level, 3) as 1 | 2 | 3

  return (
    <_Heading level={clamped} className={className} {...rest}>
      {children}
    </_Heading>
  )
}

Heading.Subheading = _Heading.Subheading

function Content({ children }: { children: ReactNode }) {
  return <>{children}</>
}

Section.Heading = Heading
Section.Content = Content

export default Section
