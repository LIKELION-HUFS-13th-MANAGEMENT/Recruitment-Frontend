import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Write from './ui/pages/write';
import SignupPage from './ui/pages/SignupPage';
import FormListView from './ui/pages/FormListView';
import MainPage from './ui/pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/formlistview" element={<FormListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
