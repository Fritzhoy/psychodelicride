import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel';

const Section = styled.section`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;


display: flex;
justify-content: center;
align-items: center;
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const About = () => {
  return(
    <Section>
      <Container>
        <Box><Carousel/></Box>
        <Box> Text</Box>
      </Container>
      </Section>
  )
}
export default About