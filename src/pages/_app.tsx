import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Logo from '../assets/Logo.svg'
import { Container, Header, NavContainer } from '@/styles/pages/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import ShoppingCartModal from '@/components/ShoppingCartModal'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={Logo} alt='' />
        </Link>
        <NavContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Handbag size={24} weight="bold" />
              </button>
            </Dialog.Trigger>

            <ShoppingCartModal />
          </Dialog.Root>

          <div>
            <span>1</span>
          </div>
        </NavContainer>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
