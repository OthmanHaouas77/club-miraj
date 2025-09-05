import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Planning from './pages/Planning';
import Spa from './pages/Spa';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
    return (

        <Router>

            <Navbar />

            <Routes>
                {/* Routes publiques */}
                <Route path="/" element={<Home />} />
                
                <Route path="/spa" element={<Spa />} />
                <Route path="/contact" element={<Contact />} />

                {/* Routes protégées utilisateur */}
                
                <Route
                    path="/planning"
                    element={
                       
                            <Planning />
                        
                    }
                />

            </Routes>

        </Router>

    );
}

export default App;
