import { Children, isValidElement, type ReactElement, type ReactNode } from 'react'

function isSlot(child: ReactNode, component: React.ElementType): child is ReactElement {
  return isValidElement(child) && typeof child.type !== 'string' && child.type === component
}

function findSlots<T extends Record<string, React.ElementType>>(
  children: ReactNode,
  slots: T,
): { [K in keyof T]?: ReactElement } & { rest: ReactNode[] } {
  const items = Children.toArray(children)
  const result = {} as { [K in keyof T]?: ReactElement } & { rest: ReactNode[] }
  const keys = Object.keys(slots) as (keyof T)[]
  const used = new Set<number>()

  for (const key of keys) {
    const component = slots[key]
    const index = items.findIndex((child) => isSlot(child, component))
    if (index !== -1) {
      result[key] = items[index] as ReactElement
      used.add(index)
    }
  }

  result.rest = items.filter((_, i) => !used.has(i))

  return result
}

export default findSlots
