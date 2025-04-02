import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './mainLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout title="Shopping"/>}>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
