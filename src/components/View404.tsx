import React from 'react'
import { NNavbar } from './NNavbar';
import { Container } from "react-bootstrap";

export const View404 = () => {
  return (
    <>
      <NNavbar />
      <Container fluid>
          La vista no se ha hallado
      </Container>
    </>
  )
}
