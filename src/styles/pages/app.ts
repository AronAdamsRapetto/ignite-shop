import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const NavContainer = styled('nav',  {
  display: 'flex',
  alignItems: 'flex-start',

  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    border: 'none',
    background: '$gray800',
    borderRadius: 6,
    color: '$gray500',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$green500',
    borderRadius: 1000,
    width: 27,
    height: 27,
    border: '3px solid $gray900',

    marginLeft: -14,
    marginTop: -7,
    
    span: {
      fontSize: '$sm',
      color: '$white',
      fontWeight: 'bold',
    }
  }
})