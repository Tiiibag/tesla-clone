import React from 'react'
import styled from 'styled-components'
import Section from './Section.js'

function Home() {
  return (
    <Container>
         <Section
            title= "Model S"
            Description= " Driveway into whatever!"
            backgroundimg= "model-3.jpg"
            leftb= "Place Order"
            rightb= "Existing Order"
         />
         <Section
            title= "Model 3"
            Description= " Runway!"
            backgroundimg= "model-x.jpg"
            leftb= "Place Order"
            rightb= "Check Order"
         />
         <Section
            title= "Model Y"
            Description= "Whatever!"
            backgroundimg= "model-y.jpg"
            leftb= "Place Order"
            rightb= "Existing Order"
         />
         <Section
            title= "Accessories"
            Description= ""
            backgroundimg= "accessories.jpg"
            leftb= "Place Order"
            rightb= ""
         />
        
    </Container>
   
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
   // filter: blur(.3rem);
   

`

