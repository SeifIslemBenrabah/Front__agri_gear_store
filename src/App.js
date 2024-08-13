import './App.css';
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { AuthWrapper } from './auth/AuthWrapper';
function App() {
  return (
    <div>
      <BrowserRouter>
       <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
