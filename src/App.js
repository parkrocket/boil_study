import React from 'react';
import { Main } from './Comp/Main';
import { Introduce } from './Comp/Introduce';
import Login from './Comp/View/Login/Login';
import Register from './Comp/View/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraBaseProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/introduce" element={<Introduce />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </ChakraBaseProvider>
    );
}

export default App;
