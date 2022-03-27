import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Catalog from './Catalog';
import Sessions from './Sessions';
import Seats from './Seats';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    return (
        <BrowserRouter>
        <main>
            <Header />
            <Routes>
                <Route path='/' element={<Catalog />} />
                <Route path='/sessoes/:idFilme' element={<Sessions />} />
                <Route path='/assentos/:idSessao' element={<Seats />} />
            </Routes>
        </main>
        </BrowserRouter>
    )
}