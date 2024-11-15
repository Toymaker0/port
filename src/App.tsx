
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Component/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Component/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
