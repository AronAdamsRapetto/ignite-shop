import { ImageContainer, ProductCardContainer, ProductInfoContainer, ProductListContainer, QuantityInfoContainer, StyledClose, StyledContent, StyledOverLay, StyledTitle, SummaryContainer, ValueInfoContainer } from '@/styles/components/ShoppingCartModal'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'

export default function ShoppingCartModal() {
  return (
    <Dialog.Portal>
      <StyledOverLay />

      <StyledContent>
        <StyledClose>
          <X size={24} weight="bold" />
        </StyledClose>

        <StyledTitle>Sacola de compras</StyledTitle>
        
        <ProductListContainer>
          <ProductCardContainer>
            <ImageContainer>
              {/* <Image src="" width={95} height={95} alt="" /> */}
            </ImageContainer>

            <ProductInfoContainer>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductInfoContainer>
          </ProductCardContainer>

          <ProductCardContainer>
            <ImageContainer>
              {/* <Image src="" width={95} height={95} alt="" /> */}
            </ImageContainer>

            <ProductInfoContainer>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductInfoContainer>
          </ProductCardContainer>

          <ProductCardContainer>
            <ImageContainer>
              {/* <Image src="" width={95} height={95} alt="" /> */}
            </ImageContainer>

            <ProductInfoContainer>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductInfoContainer>
          </ProductCardContainer>
        </ProductListContainer>


        <SummaryContainer>
          <QuantityInfoContainer>
            <span>Quantidade</span>
            <span>3 itens</span>
          </QuantityInfoContainer>

          <ValueInfoContainer>
            <strong>Valor Total</strong>
            <strong>R$ 270,00</strong>
          </ValueInfoContainer>

          <button>Finalizar compra</button>
        </SummaryContainer>
      </StyledContent>
    </Dialog.Portal>
  )
}