import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Write from "./ui/pages/write";
import SignupPage from "./ui/pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
