import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Write from "./ui/pages/write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
