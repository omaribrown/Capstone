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
            <div>
                <Jumbotron className='jumbotron-div'>
                    <div className='hero-content'>
                    <h1>Welcome to Aristotle's Closet</h1>
                    <p>We are a local based online marketplace for buying and selling clothes. You can shop or sell on Aristotle's Closet!</p>
                    <p>
                        <Button variant='info' href='/tops'>Shop New Tops!</Button>
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
