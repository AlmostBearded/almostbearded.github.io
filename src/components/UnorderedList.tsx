import { HTMLAttributes } from "react";
import style from './UnorderedList.module.css'

function UnorderedList({className, children, ...rest}: HTMLAttributes<HTMLUListElement>) {
  return <ul className={[style.ul, className].filter(Boolean).join(' ')} {...rest}>{children}</ul>
}

function Item({className, children, ...rest}: HTMLAttributes<HTMLLIElement>) {
  return <li className={[style.li, className].filter(Boolean).join(' ')} {...rest}>{children}</li>
}

UnorderedList.Item = Item

export default UnorderedList