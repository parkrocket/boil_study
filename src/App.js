import React from 'react';
import { Main } from './Comp/Main';
import { Introduce } from './Comp/Introduce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraBaseProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/introduce" element={<Introduce />} />
                </Routes>
            </Router>
        </ChakraBaseProvider>
    );
}

export default App;
