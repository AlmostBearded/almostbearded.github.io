import styles from './Header.module.css'
import Heading from './Heading'
import InlineList from './InlineList'
import Link from './Link'

interface HeaderProps {
  name: string
  title: string
  location: string
  email: string
  languages: string
  linkedin: string
  github: string
}

function Header({ name, title, location, email, languages, linkedin, github }: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src="/portrait.jpeg" alt="Portrait of Peter Oberrauner" className={styles.portrait} />
      <Heading level={1}>
        {name}
        <Heading.Subheading>{title}</Heading.Subheading>
      </Heading>
      <InlineList>
        <InlineList.Item><Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}>{location}</Link></InlineList.Item>
        <InlineList.Item><Link href={`mailto:${email}`}>{email}</Link></InlineList.Item>
        <InlineList.Item>{languages}</InlineList.Item>
        <InlineList.Item><Link href={linkedin}>LinkedIn</Link></InlineList.Item>
        <InlineList.Item><Link href={github}>GitHub</Link></InlineList.Item>
      </InlineList>
    </header>
  )
}

export default Header
