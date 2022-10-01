import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cards />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:name" element={<Detail />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
