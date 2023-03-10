import React, { useState } from 'react'
import { Col, Container, FormControl, Row } from 'react-bootstrap'
import { NNavbar } from './NNavbar'
const fruits: string[] = [
    "Albaricoque",
    "Arándano",
    "Breva",
    "Cereza",
    "Ciruela",
    "Endrina",
    "Frambuesa",
    "Fresa",
    "Granada",
    "Grosella",
    "Higo",
    "Lima",
    "Limón",
    "Mandarina",
    "Manzana",
    "Melocotón",
    "Melón",
    "Membrillo",
    "Mora",
    "Naranja",
    "Níspero",
    "Pera",
    "Piña",
    "Plátano",
    "Pomelo",
    "Sandía",
    "Uva",
    "Aguacate",
    "Alquejenje",
    "Caqui",
    "Carambola",
    "Chirimoya",
    "Coco",
    "Guayaba",
    "Kiwano",
    "Kiwi",
    "Kumquat",
    "Litchi",
    "Mango",
    "Mangostan",
    "Maracuyá",
    "Papaya",
    "Pitahaya",
    "Rambután",
    "Tamarillo",
]

export const Filter = () => {
    const [filtered, setFiltered] = useState<string[]>([]);
    const filter: any = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        evt.preventDefault();
        setFiltered(fruits.filter(val => val.toLowerCase().match((evt.target as HTMLInputElement).value.toLowerCase())))
    }
    return (
        <>
            <NNavbar />
            <Container fluid>
                <Row>
                    <Col sm="auto" className='mt-4'>
                        <label>Buscador de frutas:</label>
                        <FormControl size="sm" onKeyUp={filter} />
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col sm="auto">
                        {filtered.map(val => (
                            <div key={val}>
                                {val}
                                <br />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
