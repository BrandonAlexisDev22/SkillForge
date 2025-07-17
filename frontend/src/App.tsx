import Home from '@/pages/Home.tsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Nosotros from './pages/Nosotros';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  );
}
export default App;
