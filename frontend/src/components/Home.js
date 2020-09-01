import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Aristotle's Closet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod varius enim a cursus. Suspendisse id urna laoreet mi rutrum tristique. Curabitur non congue lacus. Suspendisse at vestibulum risus. Maecenas in tincidunt justo.</p>
                    <p>
                        <Button variant='primary'>Shop Tops</Button>
                        <Button variant='primary'>Shop Bottoms</Button>
                        <Button variant='primary'>Shop Shoes & Accessories</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
