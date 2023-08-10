import React from 'react'
import './titlehero.scss'
import { Row, Col } from 'react-bootstrap'
import aboutImg from '../../images/aboutus.png'

const TitleHero = ({ title, description, description2, description3 }) => {
    return (
        <Row className='titleHero'>
            <Col className='left' xs={12} md={6}>
                <img src={aboutImg} alt="" />
            </Col>
            <Col xs={12} md={6} className='right'>
                <div className='title'>{title}</div>
                <div className='desc'>
                    {description} <br/>
                    {description2} <br />
                    {description3}
                </div>
            </Col>
        </Row>
    )
}

export default TitleHero
