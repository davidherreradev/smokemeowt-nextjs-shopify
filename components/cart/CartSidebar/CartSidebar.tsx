import { FC } from 'react'
import { ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import cn from "classnames"
import { useUI } from '@components/ui/context'
import { Button } from '@components/ui'
import useCart from '@framework/cart/use-cart'
import { LineItem } from '@common/types/cart'
import CartItem from '../CartItem'


const CartSidebar: FC = () => {
  const { closeSidebar} = useUI()
  const { data, isEmpty } = useCart()

  
  const rootClass = cn(
    "",
    {"": isEmpty}
  )

  return (
    <>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="h-7 flex items-center">
            <button
              title="close sidebar"
              onClick={closeSidebar}
              className="hover:text-gray-500 transition ease-in-out duration-150"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className="h-full flex-1 px-4 flex flex-col justify-center items-center text-purple">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
            <ShoppingCartIcon className="absolute h-12 w-12" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p className="text-accents-3 px-10 text-center pt-2">
            Come on meow, add some human catnip to your cart
          </p>
        </div>
      ) :
      <>
        <div className="px-4 sm:px-6 flex-1">
          <h2
            className="pt-1 pb-4 leading-7 font-bold text-base tracking-wide inline-block">
            My Cart
          </h2>
          <ul className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3">
            { data?.lineItems.map((item: LineItem) =>
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={data.currency.code}
                />
              )}
          </ul>
        </div>
        <div className="bg-blue flex-shrink-0 px-4 pb-4 sm:px-6">
          <div className="border-t border-accents-3">
            <ul className="py-3">
            <li className="flex justify-between py-1">
                <span>Subtotal</span>
                <span>{data?.lineItemsSubtotalPrice} {data?.currency.code}</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Estimated Shipping</span>
                <span className="font-bold tracking-wide">FREE</span>
              </li>
            </ul>
            <div className="flex justify-between border-t border-accents-3 py-3 font-bold mb-10">
              <span>Total</span>
              <span>{data?.totalPrice} {data?.currency.code}</span>
            </div>
          </div>
          <Button
            Component="a"
            href="/api/checkout"
            className="w-full block"
          >
            Proceed to Checkout
          </Button>
        </div>
      </>
      }
    </>
  )
}

export default CartSidebar
