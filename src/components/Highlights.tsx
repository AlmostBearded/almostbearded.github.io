import type { Highlight } from '../data'
import Link from './Link'
import Text from './Text'
import UnorderedList from './UnorderedList'

interface HighlightsProps {
  items: Highlight[]
}

function Highlights({ items }: HighlightsProps) {
  if (items.length === 0) return null
  return (
    <UnorderedList>
      {items.map((h) => (
        <UnorderedList.Item key={h.title}>
          {h.url ? (
            <Link href={h.url}>
              <Text weight="bold" color="muted">{h.title}</Text>
            </Link>
          ) : (
            <Text weight="bold" color="muted">{h.title}</Text>
          )}
          {h.summary && <Text color="muted">: {h.summary}</Text>}
        </UnorderedList.Item>
      ))}
    </UnorderedList>
  )
}

export default Highlights