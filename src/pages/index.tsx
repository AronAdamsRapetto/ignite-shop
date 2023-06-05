import Image from "next/image"
import { GetStaticProps } from "next"

import { stripe } from "@/lib/stripe"
import { HomeContainer, Product } from "@/styles/pages/home"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { Handbag } from "phosphor-react"
import { useShoppingCart } from "use-shopping-cart"

interface Product {
  id: string
  name: string,
  image: string
  formatedPrice: string
  price: number
  defaultPriceId: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 48,
    }
  })
  const { addItem, cartDetails } = useShoppingCart()

  const handleAddProduct = (product: Product) => {    
    const newItem = {
      ...product,
      currency: 'BRL',
    }

    addItem(newItem)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product key={product.id} className="keen-slider__slide">
              <Link  href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.image} width={520} height={480} alt="" />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.formatedPrice}</span>
                </div>
                <button disabled={cartDetails?.[product.id] !== undefined} onClick={() => handleAddProduct(product)}>
                  <Handbag size={32} weight="bold" />
                </button>
              </footer>    
            </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount,
      priceId: price.id,   
      formatedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount as number / 100),
    }
  })

  return { 
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours 
  }
}
