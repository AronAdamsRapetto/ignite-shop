import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Logo from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { CartProvider } from 'use-shopping-cart'
import NavigationHeader from '@/components/NavigationHeader'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <CartProvider
          shouldPersist
          cartMode="checkout-session"
          stripe=""
          currency="BRL"
        >
          <Header>
            <Link href="/">
              <Image src={Logo} alt='' />
            </Link>
            
            <NavigationHeader />
          </Header>

          <Component {...pageProps} />
        </CartProvider>
    </Container>
  )
}
