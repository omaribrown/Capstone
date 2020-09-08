import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../styles/home.css'
import Carousel from 'react-bootstrap/Carousel'
import Tops from './Tops'
import Bottoms from './Bottoms'
import Shoesetc from './ShoesEtc'

export default class Home extends Component {
    render() {
        return (
            <div className='home-div'>
                <Jumbotron className='jumbotron-div'>
                    <div className='hero-content'>
                    <h1>Welcome to Aristotle's Closet</h1>
                    <p>We are a local based online marketplace for buying and selling clothes. You can shop or sell on Aristotle's Closet!</p>
                    
                    <p>Here's how this mockup marketplace works: If you'd like to list something, just click the button that says "List something" in the top right corner. After you list something, you can hover over the "Shop" button and choose the corresponding category to see the item you listed! </p>
                    <p>
                        
                        <Button variant='info' href='/tops'>Shop Tops!</Button>
                    </p>
                    </div>
                </Jumbotron>
                <div className='product-cards'>
                    <Carousel>
                        <Carousel.Item className='card-comp'>
                            <Tops className='d-block w-100' />
                        </Carousel.Item>
                        <Carousel.Item className='card-comp'>
                            <Bottoms className='d-block w-100' />
                        </Carousel.Item>
                        <Carousel.Item className='card-comp'>
                            <Shoesetc className='d-block w-100' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
