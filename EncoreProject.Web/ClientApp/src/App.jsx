import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Home from './Home';

const App = () => {
    return (
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
    )
}

export default App;