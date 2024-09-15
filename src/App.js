import { Routes, Route } from 'react-router-dom';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
