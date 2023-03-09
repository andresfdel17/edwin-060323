import React, { useState } from 'react'
import { Col, Container, FormSelect, Row } from 'react-bootstrap'
import { NNavbar } from './NNavbar'
const background = {
  white: "Sin fondo",
  blue: "Azul",
  red: "Rojo",
  orange: "Naranja",
  purple: "Morado",
  brown: "Marrón",
  green: "Verde"
};

export const Background = () => {
  const [backGround, setBackGround] = useState<string>("white");
  const options = (object: any): any => {
    let content: any = [];
    for (const keyF in object) {
      content.push(
        <option key={keyF} value={keyF}>{object[keyF]}</option>
      )
    }
    return content;
  }
  return (
    <>
      <NNavbar />
      <Container fluid style={{ display: "block",backgroundColor: backGround, height: "100vh" }}>
        <Row>
          <Col sm={3} className='mt-4'>
            <label>Color de fondo:</label>
            <FormSelect size="sm" onChange={evt => setBackGround(evt.target.value)} >
              {options(background)}
            </FormSelect>
          </Col>
        </Row>
      </Container>
    </>
  )
}
