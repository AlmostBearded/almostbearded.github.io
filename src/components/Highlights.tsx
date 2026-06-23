import styles from './Highlights.module.css'
import type { Highlight } from '../data'
import Link from './Link'
import Text from './Text'

interface HighlightsProps {
  items: Highlight[]
}

function Highlights({ items }: HighlightsProps) {
  if (items.length === 0) return null
  return (
    <ul className={styles.highlights}>
      {items.map((h) => (
        <li key={h.title}>
          {h.url ? (
            <Link href={h.url}>
              <Text weight="bold">{h.title}</Text>
            </Link>
          ) : (
            <Text weight="bold">{h.title}</Text>
          )}
          {h.summary && <Text>: {h.summary}</Text>}
        </li>
      ))}
    </ul>
  )
}

export default Highlights