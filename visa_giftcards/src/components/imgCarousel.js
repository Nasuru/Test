import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div ``;

export const imgCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/pic1.png"
            alt="First Slide"/>
            <Carousel.Caption>
                <h2>HI</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="../assets/pic2.png"
            alt="Second Slide"/>
            <Carousel.Caption>
                <h2>HELLO</h2>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
