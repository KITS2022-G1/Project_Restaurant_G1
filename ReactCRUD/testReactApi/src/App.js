import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import EmpAddNew from './components/EmpAddNew';
import EmpUpdate from './components/EmpUpdate';
import EmpDetail from './components/EmpDetail';
import EmpDel from './components/EmpDel';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<EmpAddNew />} />
          <Route path="/edit/:branchId" element={<EmpUpdate />} />
          <Route path="/detail/:branchId" element={<EmpDetail />} />
          <Route path="/delete" element={<EmpDel />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
