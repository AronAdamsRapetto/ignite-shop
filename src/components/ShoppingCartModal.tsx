import { EmptyCartContainer, ImageContainer, ProductCardContainer, ProductInfoContainer, ProductListContainer, QuantityInfoContainer, StyledClose, StyledContent, StyledOverLay, StyledTitle, SummaryContainer, ValueInfoContainer } from '@/styles/components/ShoppingCartModal'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { ShoppingCart, X } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartDetails } from 'use-shopping-cart/core'

export default function ShoppingCartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { formattedTotalPrice, cartDetails, cartCount, removeItem } = useShoppingCart()
  const cartProducts = Object.values(cartDetails as CartDetails)

  const handleCheckout = async () => {
    const priceIds = cartProducts.map((product) => product.priceId)
      try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceIds
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar a uma ferramento e observabilidade ( Datadog / Sentry )
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Portal>
      <StyledOverLay />

      <StyledContent>
        <StyledClose>
          <X size={24} weight="bold" />
        </StyledClose>

        <StyledTitle>Sacola de compras</StyledTitle>
        
        <ProductListContainer>
          {
            cartProducts.length !== 0 ? (
              cartProducts.map((product => (
                <ProductCardContainer key={product.id}>
                  <ImageContainer>
                    <Image src={product.image as string} width={95} height={95} alt="" />
                  </ImageContainer>

                  <ProductInfoContainer>
                    <span>{product.name}</span>
                    <strong>{product.formatedPrice}</strong>
                    <button onClick={() => removeItem(product.id)}>Remover</button>
                  </ProductInfoContainer>
                </ProductCardContainer>
              )))
            ) : (
                <EmptyCartContainer>
                  <h1>Carrinho Vazio</h1>
                  <ShoppingCart size={48} weight="bold" />
                </EmptyCartContainer>
              )
          }
        </ ProductListContainer>

        <SummaryContainer>
          <QuantityInfoContainer>
            <span>Quantidade</span>
            <span>{`${cartCount} itens`}</span>
          </QuantityInfoContainer>

          <ValueInfoContainer>
            <strong>Valor Total</strong>
            <strong>{formattedTotalPrice}</strong>
          </ValueInfoContainer>

          <button disabled={isCreatingCheckoutSession} onClick={handleCheckout}>Finalizar compra</button>
        </SummaryContainer>
      </StyledContent>
    </Dialog.Portal>
  )
}