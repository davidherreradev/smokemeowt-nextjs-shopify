import { FC } from "react"
import s from "./UserNav.module.css"
import Link from "next/link"
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useUI } from "@components/ui/context"
import useCart from "@framework/cart/use-cart"
import { LineItem } from "@common/types/cart"

const UserNav: FC = () => {
    const {openSidebar} = useUI()
    const { data } = useCart()

    const itemsCount = data?.lineItems.reduce((count: number, item: LineItem) => {
        return count + item.quantity
    }, 0) ?? 0
    
    return (
        <nav className="w-full h-full">
            <ul className={s.list}>
                <li className={s.item}>
                    <ShoppingCartIcon className="h-8 w-8" onClick={openSidebar} />
                    { itemsCount > 0 &&
                        <span className={s.bagCount}>
                        { itemsCount }
                        </span>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default UserNav