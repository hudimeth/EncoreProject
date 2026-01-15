import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dayjs from 'dayjs';

const Zmanim = ({ zmanim }) => {
    return (
        <Container className='mt-4'>
            <Row>
                <Col className='text-end'><h6>Chatzot Layla: </h6></Col>
                <Col><h6>{dayjs(zmanim.chatzotNight).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Alot haShachar: </h6></Col>
                <Col><h6>{dayjs(zmanim.alotHashachar).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Misheyakir: </h6></Col>
                <Col><h6>{dayjs(zmanim.misheyakir).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Misheyakir Machmir: </h6></Col>
                <Col><h6>{dayjs(zmanim.misheyakirMachmir).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Civil dawn: </h6></Col>
                <Col><h6>{dayjs(zmanim.dawn).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Sunrise: </h6></Col>
                <Col><h6>{dayjs(zmanim.sunrise).format('hh:mm A')}</h6></Col>
                
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shema (Gra): </h6></Col>
                <Col><h6>{dayjs(zmanim.sofZmanShma).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Latest Shema (MGA): </h6></Col>
                <Col><h6>{dayjs(zmanim.sofZmanShmaMGA).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Chatzot: </h6></Col>
                <Col><h6>{dayjs(zmanim.chatzot).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Mincha Gedola: </h6></Col>
                <Col><h6>{dayjs(zmanim.minchaGedola).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Mincha Ketana: </h6></Col>
                <Col><h6>{dayjs(zmanim.minchaKetana).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Plag haMincha: </h6></Col>
                <Col><h6>{dayjs(zmanim.plagHaMincha).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Sunset: </h6></Col>
                <Col><h6>{dayjs(zmanim.sunset).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Civil dusk: </h6></Col>
                <Col><h6>{dayjs(zmanim.dusk).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Bein Hashemashot / Twilight: </h6></Col>
                <Col><h6>{dayjs(zmanim.beinHaShmashos).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 7.083°: </h6></Col>
                <Col><h6>{dayjs(zmanim.tzeit7083deg).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 8.5°: </h6></Col>
                <Col><h6>{dayjs(zmanim.tzeit85deg).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 42 minutes: </h6></Col>
                <Col><h6>{dayjs(zmanim.tzeit42min).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 50 minutes: </h6></Col>
                <Col><h6>{dayjs(zmanim.tzeit50min).format('hh:mm A')}</h6></Col>
            </Row>
            <Row>
                <Col className='text-end'><h6>Tzeit 72 minutes: </h6></Col>
                <Col><h6>{dayjs(zmanim.tzeit72min).format('hh:mm A')}</h6></Col>
            </Row>
        </Container>
    )
}

export default Zmanim;