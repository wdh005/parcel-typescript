import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Review from './src/pages/Review';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/review" element={<Review />} />
                <Route path="/" element={<Navigate replace to="/review" />} />
            </Routes>
        </Router>
    );
};

export default App;
