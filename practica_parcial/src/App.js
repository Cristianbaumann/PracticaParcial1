import HomePage from './Pages/HomePage';
import Detalles from  './Pages/Detalles';
import AddGame from './Pages/AddGame';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Detalles/:id" element={<Detalles />} />
          <Route path="/AddGame" element={<AddGame />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
