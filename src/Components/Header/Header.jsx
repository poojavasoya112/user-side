import React from 'react'
import { Container, Row } from 'react-bootstrap'
import  './Header.css'

function Header() {
  return (
    <>
      <header className='shadow-sm py-2'>
      <Container>
        <Row className='align-items-center'>
          <div className='col-2'>
            <h3 className='text-white'>User</h3>
          </div>
          <div className='col-10 d-flex justify-content-end'>
            <nav>
              <ul className='d-flex list-unstyled m-0'>
                <li>
                  <a href='#' className='text-white fw-semibold text-decoration-none px-3'>Home</a>
                </li>
                <li>
                  <a href='#' className='text-white fw-semibold text-decoration-none px-3'>Pages</a>
                </li>
                <li>
                  <a href='#' className='text-white fw-semibold text-decoration-none px-3'>Products</a>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </Container>
    </header>
    </>
  )
}

export default Header