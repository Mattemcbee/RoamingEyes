import { Routes, Route } from 'react-router-dom';

// import Header from './components/Header';

import './css/App.css';
import HomePage from './Pages/HomePage';
import Merch from './Pages/MerchPage.js';
import Shows from './Pages/ShowPage.js';
import Socials from './Pages/SocialPage.js';





function App() {
    return (
        <div className='App'>
            <Routes>
                
                <Route path='/' element={<HomePage />} />
                <Route path='/merch' element={<Merch />} />
                <Route path='/shows' element={<Shows />} />
                <Route path='/socials' element={<Socials />} />


           
            </Routes>
        </div>
    );
}

export default App;