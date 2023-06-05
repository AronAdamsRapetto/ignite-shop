import { styled } from "..";

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

    '&:hover': {
      cursor: 'pointer',
    }
  },  
})

export const CartButtonContainer = styled('div', {
  display: 'flex',
  position: 'relative',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: -10,
    right: -10,

    background: '$green500',
    borderRadius: 1000,
    width: 27,
    height: 27,
    border: '3px solid $gray900',    
    
    span: {
      fontSize: '$sm',
      color: '$white',
      fontWeight: 'bold',
    }
  }
})