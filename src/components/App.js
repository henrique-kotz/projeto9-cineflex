import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}