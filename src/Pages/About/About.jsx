import React from 'react'
import { Container } from 'react-bootstrap'
import TitleHero from '../../components/TitleHero/TitleHero'
import { aboutData } from './data'

const About = () => {
  return (
    <Container fluid>
      <TitleHero title={aboutData?.title} description={aboutData?.desc1} description2={aboutData?.desc2} description3={aboutData?.desc3} />
    </Container>
  )
}

export default About
