import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header';
import Catalog from './Catalog';
import Sessions from './Sessions';
import Seats from './Seats';
import Success from './Success';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    const [info, setInfo] = useState({});

    return (
        <BrowserRouter>
        <main>
            <Header />
            <Routes>
                <Route path='/' element={<Catalog />} />
                <Route path='/sessoes/:idFilme' element={<Sessions info={info} setInfo={setInfo} />} />
                <Route path='/assentos/:idSessao' element={<Seats info={info} setInfo={setInfo} />} />
                <Route path='/sucesso' element={<Success info={info} setInfo={setInfo} />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}