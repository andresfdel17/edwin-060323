import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FormControl, FormSelect, Row } from 'react-bootstrap'
import { IFormInput } from '../interfaces/IForm'
import { NNavbar } from './NNavbar'
import { SavedCards } from './SavedCards'

export const Form = () => {
  const [cards, setCards] = useState<IFormInput[]>([]);
  useEffect(() => {
    checkLocalstorage();
    // eslint-disable-next-line
  }, []);
  const showCards = () => {
    return (
      <SavedCards cards={cards} />
    )
  }
  const checkLocalstorage = (): void => {
    const data = localStorage.getItem("cards");
    if (!data) {
      return localStorage.setItem("cards", JSON.stringify(cards));
    }
    localStorage.setItem("cards", JSON.stringify(cards));
    setCards(JSON.parse(data));
  }
  const serializeForm = (form: HTMLFormElement): any => {
    const formData = new FormData(form);
    const data: any = {};
    for (const [i, value] of formData) {
      data[i] = value
    }
    return data;
  }
  const imagetoBase64 = async (file: any): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      }
    })
  }
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    const formData: IFormInput = serializeForm(evt.target as HTMLFormElement);
    formData.image = await imagetoBase64(formData.image);
    setCards(prev => {
      prev.push(formData);
      return prev;
    });
    alert("Guardado");

  }
  return (
    <>
      <NNavbar />
      <Container fluid>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <Row>
                <Col sm className='mt-4'>
                  <label>Nombre:</label>
                  <FormControl size="sm" name="name" type="text" placeholder='Escriba su nombre' required />
                </Col>
                <Col sm className='mt-4'>
                  <label>Apellidos:</label>
                  <FormControl size="sm" name="last_name" type="text" placeholder='Escriba sus apellidos' required />
                </Col>
                <Col sm className='mt-4'>
                  <label>Edad:</label>
                  <FormControl size="sm" name="age" type="number" placeholder='Escriba su edad' required />
                </Col>
              </Row>
              <Row>
                <Col sm className='mt-4'>
                  <label>Genero:</label>
                  <FormSelect defaultValue={""} size="sm" name="sex" required>
                    <option value="">Sin definir</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </FormSelect>
                </Col>
                <Col sm className='mt-4'>
                  <label>Tipo de sangre:</label>
                  <FormControl size="sm" name="blood_type" type="text" placeholder='Escriba su tipo de sangre' required />
                </Col>
                <Col sm className='mt-4'>
                  <label>Imagen:</label>
                  <FormControl size="sm" name="image" type="file" required />
                </Col>
              </Row>
              <Row>
                <Col sm="auto" className='mt-4'>
                  <Button type='submit' size="sm" >
                    Guardar
                  </Button>
                </Col>
              </Row>
              <hr/>
              {showCards()}
            </Col>
            <Col sm={4}>
              Card
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}
