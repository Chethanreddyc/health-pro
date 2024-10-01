// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './pages/Doctors';
import Navbar from './Navbar';
import Intro from './pages/Intro';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;