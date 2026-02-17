import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactEdit from './components/ContactEdit';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated on initial load
  useEffect(() => {
    fetch('/api/current-user/', {
      credentials: 'include',
    })
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(data => setIsAuthenticated(true))
    .catch(error => console.log('Not authenticated'));
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    fetch('/api/logout/', {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      setIsAuthenticated(false);
    });
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            <nav className="navbar">
              <h2>Contact Management System</h2>
              <button onClick={handleLogout}>Logout</button>
            </nav>
            <Routes>
              <Route path="/" element={<Navigate to="/contacts" />} />
              <Route path="/contacts" element={<ContactList />} />
              <Route path="/add-contact" element={<ContactForm />} />
              <Route path="/edit-contact/:id" element={<ContactEdit />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;