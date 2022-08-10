import React from 'react'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'sora';
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease; 
&:hover{
  transform: scale(1.1);
}
`
const Logo = () => {
  return (
    <LogoText>C<sub>20</sub>H<sub>25</sub>N<sub>3O</sub></LogoText>
  )
}
export default Logo