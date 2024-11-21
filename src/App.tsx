
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Component/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Component/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
