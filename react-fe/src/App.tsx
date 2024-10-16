import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import CompaniesPage from './pages/CompaniesPage';

const App: React.FC = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">Main</a>
          </li>
          <li>
            <a href="/users" className="hover:underline">Users</a>
          </li>
          <li>
            <a href="/companies" className="hover:underline">Companies</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </div>
  );
};

const Root: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
