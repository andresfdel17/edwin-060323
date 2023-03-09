import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { IFormInput } from '../interfaces/IForm'
import { ISavedProps } from '../interfaces/ISavedCards'

export const SavedCards = (props: ISavedProps) => {
  const [cards,] = useState<IFormInput[]>(props.cards);
  const deleteCard = (card: IFormInput) => {
    console.log(card);
  }
  return (
    <>
      <label>Tarjetas guardadas</label>
      {
        cards.map(card => (
          <Row className='mt-2' key={card.age + card.name + card.last_name}>
            <Col sm>
              {card.name}
            </Col>
            <Col sm={1}>
              <Button size="sm" type='button' onClick={() => deleteCard(card)}>
                Eliminar
              </Button>
            </Col>
          </Row>
        ))
      }
    </>
  )
}
