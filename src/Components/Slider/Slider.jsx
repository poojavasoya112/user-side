import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img3.jpg"
                        // alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/img4.jpg"
                        // alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider