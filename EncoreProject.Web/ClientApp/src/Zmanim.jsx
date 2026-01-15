import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';

const Zmanim = ({ zmanim }) => {
    return (
        <Container className='mt-4'>
            <Row>
                <Col className='text-end'><h6>Chatzot Layla: </h6></Col>
                <Col><h6>{zmanim.chatzotNight}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Alot haShachar: </h6></Col>
                <Col><h6>{zmanim.alotHashachar}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Misheyakir: </h6></Col>
                <Col><h6>{zmanim.misheyakir}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Misheyakir Machmir: </h6></Col>
                <Col><h6>{zmanim.misheyakirMachmir}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Civil dawn: </h6></Col>
                <Col><h6>{zmanim.dawn}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Sunrise: </h6></Col>
                <Col><h6>{zmanim.sunrise}</h6></Col>
                
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shema (Gra): </h6></Col>
                <Col><h6>{zmanim.sofZmanShma}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shema (MGA): </h6></Col>
                <Col><h6>{zmanim.sofZmanShmaMGA}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shacharit (Gra): </h6></Col>
                <Col><h6>{zmanim.sofZmanTefilla}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shacharit (MGA): </h6></Col>
                <Col><h6>{zmanim.sofZmanTefillaMGA}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Chatzot: </h6></Col>
                <Col><h6>{zmanim.chatzot}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Mincha Gedola: </h6></Col>
                <Col><h6>{zmanim.minchaGedola}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Mincha Ketana: </h6></Col>
                <Col><h6>{zmanim.minchaKetana}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Plag haMincha: </h6></Col>
                <Col><h6>{zmanim.plagHaMincha}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Sunset: </h6></Col>
                <Col><h6>{zmanim.sunset}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Civil dusk: </h6></Col>
                <Col><h6>{zmanim.dusk}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Bein Hashemashot / Twilight: </h6></Col>
                <Col><h6>{zmanim.beinHashmashos}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 7.083°: </h6></Col>
                <Col><h6>{zmanim.tzeit7083deg}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 8.5°: </h6></Col>
                <Col><h6>{zmanim.tzeit85deg}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 42 minutes: </h6></Col>
                <Col><h6>{zmanim.tzeit42min}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 50 minutes: </h6></Col>
                <Col><h6>{zmanim.tzeit50min}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 72 minutes: </h6></Col>
                <Col><h6>{zmanim.tzeit72min}</h6></Col>
            </Row>
        </Container>
    )
}

export default Zmanim;