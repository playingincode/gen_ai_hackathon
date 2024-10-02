import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Adjust the import path as necessary
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ClickableGrid from './pages/ClickableGrid';
import LearningPath from './pages/LearningPath';
import CoursesPage from './pages/CoursesPage';
import EduBot from './pages/CoursesPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<ClickableGrid />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mylearningpath" element={<EduBot />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
