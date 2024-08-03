import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Class10 from './pages/Class10';
import Class11 from './pages/Class11';
import Class12 from './pages/Class12';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import AdminPage from './pages/AdminPage';
import PrivateRoute from './components/PrivateRoute';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/class10" element={<Class10 />} />
          <Route path="/class11" element={<Class11 />} />
          <Route path="/class12" element={<Class12 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          
          {/* Admin Route */}
          <Route
            path="/admin"
            element={<PrivateRoute element={<AdminPage />} allowedRoles={['admin']} />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
