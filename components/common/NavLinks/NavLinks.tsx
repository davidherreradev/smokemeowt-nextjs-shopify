import { FC } from "react"
import s from "./NavLinks.module.css"
import Link from "next/link"

const NavLinks = (props: {className?: string}) => {
    return (
        <nav className={props.className}>
            <ul className={s.list}>
                <li className={s.item}>
                    <Link href="/" passHref>
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link href="/weed" passHref>
                        <a>
                            Weed
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link href="/products" passHref>
                        <a>
                            Merch
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                        <a href="/stores">
                            Find a Store
                        </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks