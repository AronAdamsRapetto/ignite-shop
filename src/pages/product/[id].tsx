import { stripe } from '@/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  product: {
    id: string
    name: string,
    image: string
    price: number
    description: string
    priceId: string
    formatedPrice: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { cartDetails, addItem } = useShoppingCart()

  if (isFallback) {
    return <p>loading...</p>
  }

  const handleAddProduct = () => {
    const newItem = {
      ...product,
      currency: 'BRL',
    }

    console.log(newItem)

    addItem(newItem)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.image} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
        <h1>{product.name}</h1>
          <span>{product.formatedPrice}</span>

          <p>{product.description}</p>
        
          <button
            disabled={cartDetails?.[product.id] !== undefined}
            onClick={handleAddProduct}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NugRWrQaDxYONI' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id

  const product = await stripe.products.retrieve(productId as string, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        image: product.images[0],
        description: product.description,
        priceId: price.id,
        price: price.unit_amount,
        formatedPrice: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount as number / 100),
      }
    },
    revalidate: 60 * 60 * 1
  }
}