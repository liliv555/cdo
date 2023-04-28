import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="success" element={<h1>Success</h1>} />
    </Routes>
  );
}

export default App;
