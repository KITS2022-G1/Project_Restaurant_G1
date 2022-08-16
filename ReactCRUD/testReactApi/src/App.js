import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmpAddNew from './components/EmpAddNew';
import EmpUpdate from './components/EmpUpdate';
import EmpDetail from './components/EmpDetail';
import EmpDel from './components/EmpDel';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<EmpAddNew />} />
          <Route path="/edit" element={<EmpUpdate />} />
          <Route path="/detail" element={<EmpDetail />} />
          <Route path="/delete" element={<EmpDel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
