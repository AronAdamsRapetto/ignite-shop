import { keyframes, styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

const darkenOverlay = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

export const StyledOverLay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.3)',

  animation: `${darkenOverlay} 300ms ease-out`
})

const slideDialog = keyframes({
  '0%': { transform: 'translateX(110%)' },
  '100%': { transform: 'translateX(0%)' }
})

export const StyledContent = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '33.33%',
  maxWidth: 480,
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  "&[data-state='open']": {
    animation: `${slideDialog} 400ms ease-out`,
  }
})

export const StyledClose = styled(Dialog.Close, {
  alignSelf: 'flex-end',
  margin: '-1.5rem -1.5rem 1.5rem 0',
  background: 'transparent',
  border: 0,
  color: '$gray500',

  '&:hover': {
    cursor: 'pointer',
    opacity: 0.7,
  }
})

export const StyledTitle = styled(Dialog.Title, {
  alignSelf: 'flex-start',
  marginBottom: '2rem',
  fontSize: '$lg',
  lineHeight: 1.6,
  fontWeight: 'bold',
  color: '$gray100',
})

export const ProductListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',
  height: '100%',
  overflow: 'auto',
})

export const ProductCardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  width: '100%',
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  width: 101,
  height: 110,
})

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  span: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray100',
  },

  button: {
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: 'auto',

    '&:hover': {
      cursor: 'pointer',
      color: '$green300',
    }
  }
})

export const EmptyCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: '$gray500',
  gap: '0.875rem',
}) 

export const SummaryContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '0.5rem',

  button: {
    border: 0,
    padding: '1.25rem 2rem',
    borderRadius: 8,
    background: '$green500',
    fontWeight: 'bold',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$white',

    '&:hover': {
      background: '$green300',
      cursor: 'pointer',
    }
  }
})

export const QuantityInfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'span:firt-child': {
    fontSize: '$md',
    color: '$gray100',
  },

  'span:last-child': {
    fontSize: '$lg',
    color: '$gray300',
  }
})

export const ValueInfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  alignItems: 'center',

  'strong:first-child': {
    fontSize: '$md',
    color: '$gray100',
  },

  'strong:last-child': {
    fontSize: '$xl',
    lineHeight: 1.4,
    color: '$gray100',
  }
})