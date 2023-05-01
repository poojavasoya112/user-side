import React, { useEffect } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAsync } from '../../Services/Actions/Product.action';

function Products() {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProductAsync())
    })

    return (
        <section className='py-100'>
            <dir>
                <Container>
                    <div className="heading text-center mb-3">
                        <h3 className='text-black'>Our Products</h3>
                        <p className='text-gray m-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius tempora voluptatem voluptatibus inventore neque adipisci</p>
                    </div>
                    <Row>
                        {
                            product.map((pro) => {

                                return (
                                    <div className="col-3">
                                        <Card className='mt-4 bg-light text-black border-1 shadow-sm'>
                                            <Card.Body>
                                                <Card.Title>{pro.name}</Card.Title>
                                                <Card.Text>
                                                    {`Price : ${pro.price} Rs.`}
                                                </Card.Text>
                                                <Card.Text>
                                                    {`Detail : ${pro.detail}`}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </dir>
        </section>
    )
}

export default Products
