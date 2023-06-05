import { CartButtonContainer, NavContainer } from "@/styles/components/NavigationHeader";
import * as Dialog from '@radix-ui/react-dialog';
import { Handbag } from "phosphor-react";
import ShoppingCartModal from "./ShoppingCartModal";
import { useShoppingCart } from "use-shopping-cart";

export default function NavigationHeader() {
  const { cartCount } = useShoppingCart()

  return (
    <NavContainer>
      <Dialog.Root>
        <CartButtonContainer>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} weight="bold" />
            </button>
          </Dialog.Trigger>
          {
            cartCount !== 0 && (
              <div>
                <span>{cartCount}</span>
              </div>
            )
          }
        </CartButtonContainer>

        <ShoppingCartModal />
      </Dialog.Root>

    </NavContainer>
  )
}