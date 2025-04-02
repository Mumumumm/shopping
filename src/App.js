import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './mainLayout';
import Welcome from './welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout title="Shopping" />}>
          <Route index element={<Welcome />}></Route>
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
