import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Zmanim from './Zmanim';

const Home = () => {

    const [search, setSearch] = useState({
        date: '',
        zipCode:''
    });
    const [zmanim, setZmanim] = useState({
        chatzotNight: '',
        alotHashachar: '',
        misheyakir: '',
        misheyakirMachmir: '',
        dawn: '',
        sunrise: '',
        sofZmanShma: '',
        sofZmanShmaMGA: '',
        sofZmanTefilla: '',
        sofZmanTefillaMGA: '',
        chatzot: '',
        minchaGedola: '',
        minchaKetana: '',
        plagHaMincha: '',
        sunset: '',
        dusk: '',
        beinHaShmashos: '',
        tzeit7083deg: '',
        tzeit85deg: '',
        tzeit42min: '',
        tzeit50min: '',
        tzeit72min: ''
    });
    const onSearchChange = e => {
        const copy = { ...search };
        copy[e.target.name] = e.target.value;
        setSearch(copy);
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        console.log(search);
        const { data } = await axios.get(`/api/zmanim/getzmanim?date=${search.date}&zipcode=${search.zipCode}`);
        setZmanim(data);
    }

    return (
        <Container className='mt-5'>

            <h3 className='text-center mb-2'>Welcome to the Zmanim Website</h3>
            <h5 className='text-center mb-2'>Today's Zmanim:</h5>
            <Form onSubmit={onFormSubmit }>
                <Row>
                    <Col>
                        <FloatingLabel className='gx-1 my-2'
                            label='Date'>
                            <Form.Control type='date'
                                placeholder='Date'
                                name='date'
                                value={search.date}
                                onChange={onSearchChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel className='gx-1 my-2'
                            label='Zip Code'>
                            <Form.Control type='text'
                                placeholder='Zip Code'
                                name='zipCode'
                                value={search.zipCode}
                                onChange={onSearchChange} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Button
                            variant='primary'
                            type='submit'
                            style={{ height: '55px' }}
                            className='gx-1 my-2 w-100'
                            disabled={!search.date || !search.zipCode}>Get Zmanim</Button>
                    </Col>
                </Row>
            </Form>
            {!!zmanim.chatzotNight && <Zmanim
                zmanim={zmanim}
            />}
        </Container>
    )
}

export default Home;