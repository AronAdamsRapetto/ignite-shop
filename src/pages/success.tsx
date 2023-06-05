import { stripe } from "@/lib/stripe";
import { GaleryContainer, ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  customerName: string
  products: Stripe.Product[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  const quantityOfItems = products.length

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>        
        <GaleryContainer>
          {
            products.map((product) => (
              <ImageContainer key={product.id}>
                <Image src={product.images[0]} width={130} height={130} alt="" />
              </ImageContainer>
            ))
          }
        </GaleryContainer>

        <h1>Compra efetuada!</h1>

        {
          quantityOfItems > 1 ? (
          <p>Uhuul <strong>{customerName}</strong>, sua compra de {quantityOfItems} já está a caminho da sua casa. </p>
          ) : (
          <p>Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products[0].name}</strong> camisetas já está a caminho da sua casa. </p>
          )
        }
      
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map((item) => item?.price?.product as Stripe.Product)

  return {
    props: {
      customerName,
      products,
    }
  }
}