import React from 'react'
import { Button, Col, Container, FormControl, FormSelect, Row } from 'react-bootstrap'
import { NNavbar } from './NNavbar'

export const Form = () => {
  const serializeForm = (form: HTMLFormElement): any => {
    const formData = new FormData(form);
    const data: any = {};
    for (const [i, value] of formData) {
      data[i] = value
    }
    return data;
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const formData = serializeForm(evt.target as HTMLFormElement);
    console.log(formData);

  }
  return (
    <>
      <NNavbar />
      <Container fluid>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={3} className='mt-4'>
              <label>Nombre:</label>
              <FormControl size="sm" name="name" type="text" placeholder='Escriba su nombre' required />
            </Col>
            <Col sm={3} className='mt-4'>
              <label>Apellidos:</label>
              <FormControl size="sm" name="last_name" type="text" placeholder='Escriba sus apellidos' required />
            </Col>
            <Col sm={1} className='mt-4'>
              <label>Edad:</label>
              <FormControl size="sm" name="age" type="number" placeholder='Escriba su edad' required />
            </Col>
          </Row>
          <Row>
            <Col sm={1} className='mt-4'>
              <label>Genero:</label>
              <FormSelect defaultValue={""} size="sm" name="sex" required>
                <option value="">Sin definir</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </FormSelect>
            </Col>
          </Row>
          <Row>
            <Col sm="auto" className='mt-4'>
              <Button type='submit' size="sm" >
                Guardar
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}
