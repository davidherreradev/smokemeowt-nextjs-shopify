import { FC } from "react"
import s from "./NavLinks.module.css"
import Link from "next/link"

const NavLinks = (props: {className?: string}) => {
    return (
        <nav className={props.className}>
            <ul className={s.list}>
                <li className={s.item}>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link href="/weed">
                        <a>
                            Weed
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link href="/products">
                        <a>
                            Merch
                        </a>
                    </Link>
                </li>
                <li className={s.item}>
                    <Link href="/stores">
                        <a>
                            Find a Store
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks